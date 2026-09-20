<?php

namespace App\Http\Controllers;

use App\Mail\JobApplicationConfirmation;
use App\Mail\JobApplicationNotification;
use App\Models\JobApplication;
use App\Models\JobPosting;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CareersController extends Controller
{
    public function index()
    {
        $locale = request()->get('lang', session('locale', 'en'));
        session(['locale' => $locale]);

        $postings = JobPosting::active()->ordered()->get()->map(function ($posting) use ($locale) {
            return [
                'id' => $posting->id,
                'title' => $posting->getTranslated('title', $locale),
                'location' => $posting->getTranslated('location', $locale),
                'employment_type' => $posting->employment_type,
                'description' => $posting->getTranslated('description', $locale),
                'requirements' => $posting->getTranslated('requirements', $locale),
            ];
        });

        return Inertia::render('Careers', [
            'postings' => $postings,
        ]);
    }

    public function apply(Request $request)
    {
        $validated = $request->validate([
            'job_posting_id' => 'required|exists:job_postings,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:5000',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:5120',
        ]);

        $posting = JobPosting::active()->find($validated['job_posting_id']);

        if (!$posting) {
            return response()->json([
                'success' => false,
                'message' => 'This position is no longer available.',
            ], 422);
        }

        $cvFile = $request->file('cv');

        $application = JobApplication::create([
            'job_posting_id' => $posting->id,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'message' => $validated['message'] ?? null,
            // Private disk - CVs must not be publicly accessible
            'cv_path' => $cvFile->store('job-applications', 'local'),
            'cv_original_name' => $cvFile->getClientOriginalName(),
        ]);

        try {
            Mail::to($application->email)->send(new JobApplicationConfirmation($application));
        } catch (\Exception $e) {
            Log::error('Failed to send job application confirmation email: ' . $e->getMessage());
        }

        try {
            $recipients = Setting::notificationEmails();
            if (!empty($recipients)) {
                Mail::to($recipients)->send(new JobApplicationNotification($application));
            }
        } catch (\Exception $e) {
            Log::error('Failed to send job application notification email: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Application submitted successfully.',
        ]);
    }
}
