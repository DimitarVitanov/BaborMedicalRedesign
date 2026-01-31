<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutContentController extends Controller
{
    public function index()
    {
        $about = AboutContent::first();
        
        return Inertia::render('Admin/About/Index', [
            'about' => $about,
        ]);
    }

    public function edit(AboutContent $about)
    {
        return Inertia::render('Admin/About/Edit', [
            'about' => $about,
        ]);
    }

    public function update(Request $request, AboutContent $about)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'title_mk' => 'nullable|string|max:255',
            'subtitle' => 'required|string|max:500',
            'subtitle_mk' => 'nullable|string|max:500',
            'short_description' => 'required|string',
            'short_description_mk' => 'nullable|string',
            'full_content' => 'required|string',
            'full_content_mk' => 'nullable|string',
            'image' => 'nullable|string|max:255',
            'is_active' => 'boolean',
        ]);

        $about->update($validated);

        return redirect()->route('admin.about.index')
            ->with('success', 'About content updated successfully.');
    }
}
