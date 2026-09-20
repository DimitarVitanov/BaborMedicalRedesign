<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class JobApplicationController extends Controller
{
    public function index()
    {
        $applications = JobApplication::with('jobPosting')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return Inertia::render('Admin/JobApplications/Index', [
            'applications' => $applications,
            'unreadCount' => JobApplication::unread()->count(),
        ]);
    }

    public function show(JobApplication $jobApplication)
    {
        $jobApplication->load('jobPosting');

        if (!$jobApplication->is_read) {
            $jobApplication->update(['is_read' => true]);
        }

        return Inertia::render('Admin/JobApplications/Show', [
            'application' => $jobApplication,
        ]);
    }

    public function downloadCv(JobApplication $jobApplication)
    {
        if (!$jobApplication->cv_path || !Storage::disk('local')->exists($jobApplication->cv_path)) {
            abort(404);
        }

        return Storage::disk('local')->download(
            $jobApplication->cv_path,
            $jobApplication->cv_original_name ?: 'CV.pdf'
        );
    }

    public function markAsRead(JobApplication $jobApplication)
    {
        $jobApplication->update(['is_read' => true]);

        return redirect()->back();
    }

    public function markAsUnread(JobApplication $jobApplication)
    {
        $jobApplication->update(['is_read' => false]);

        return redirect()->back();
    }

    public function destroy(JobApplication $jobApplication)
    {
        if ($jobApplication->cv_path) {
            Storage::disk('local')->delete($jobApplication->cv_path);
        }

        $jobApplication->delete();

        return redirect()->route('admin.job-applications.index')->with('success', 'Application deleted successfully.');
    }
}
