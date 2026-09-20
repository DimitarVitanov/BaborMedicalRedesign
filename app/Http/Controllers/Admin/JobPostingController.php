<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobPosting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobPostingController extends Controller
{
    public function index()
    {
        $postings = JobPosting::ordered()->withCount('applications')->get();

        return Inertia::render('Admin/JobPostings/Index', [
            'postings' => $postings,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/JobPostings/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_mk' => 'required|string|max:255',
            'location_en' => 'nullable|string|max:255',
            'location_mk' => 'nullable|string|max:255',
            'employment_type' => 'required|string|in:full_time,part_time,contract,internship',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'requirements_en' => 'nullable|string',
            'requirements_mk' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $validated['sort_order'] = JobPosting::max('sort_order') + 1;

        JobPosting::create($validated);

        return redirect()->route('admin.job-postings.index')->with('success', 'Job posting created successfully.');
    }

    public function edit(JobPosting $jobPosting)
    {
        return Inertia::render('Admin/JobPostings/Edit', [
            'posting' => $jobPosting,
        ]);
    }

    public function update(Request $request, JobPosting $jobPosting)
    {
        $validated = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_mk' => 'required|string|max:255',
            'location_en' => 'nullable|string|max:255',
            'location_mk' => 'nullable|string|max:255',
            'employment_type' => 'required|string|in:full_time,part_time,contract,internship',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'requirements_en' => 'nullable|string',
            'requirements_mk' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $jobPosting->update($validated);

        return redirect()->route('admin.job-postings.index')->with('success', 'Job posting updated successfully.');
    }

    public function destroy(JobPosting $jobPosting)
    {
        $jobPosting->delete();

        return redirect()->route('admin.job-postings.index')->with('success', 'Job posting deleted successfully.');
    }
}
