<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroSlideController extends Controller
{
    public function index()
    {
        $slides = HeroSlide::ordered()->get();
        
        return Inertia::render('Admin/HeroSlides/Index', [
            'slides' => $slides,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/HeroSlides/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'subtitle' => 'required|string|max:255',
            'subtitle_mk' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'title_mk' => 'nullable|string|max:255',
            'highlight' => 'required|string|max:255',
            'highlight_mk' => 'nullable|string|max:255',
            'description' => 'required|string',
            'description_mk' => 'nullable|string',
            'cta_text' => 'required|string|max:255',
            'cta_text_mk' => 'nullable|string|max:255',
            'cta_link' => 'nullable|string|max:255',
            'secondary_text' => 'required|string|max:255',
            'secondary_text_mk' => 'nullable|string|max:255',
            'secondary_link' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'image_desktop_webp' => 'nullable|image|mimes:webp|max:2048',
            'image_mobile_webp' => 'nullable|image|mimes:webp|max:1024',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hero-slides', 'public');
        }
        if ($request->hasFile('image_desktop_webp')) {
            $validated['image_desktop_webp'] = $request->file('image_desktop_webp')->store('hero-slides', 'public');
        }
        if ($request->hasFile('image_mobile_webp')) {
            $validated['image_mobile_webp'] = $request->file('image_mobile_webp')->store('hero-slides', 'public');
        }

        $validated['order'] = $validated['order'] ?? HeroSlide::max('order') + 1;
        $validated['is_active'] = $validated['is_active'] ?? true;

        HeroSlide::create($validated);

        return redirect()->route('admin.hero-slides.index')
            ->with('success', 'Hero slide created successfully.');
    }

    public function edit(HeroSlide $heroSlide)
    {
        return Inertia::render('Admin/HeroSlides/Edit', [
            'slide' => $heroSlide,
        ]);
    }

    public function update(Request $request, HeroSlide $heroSlide)
    {
        $validated = $request->validate([
            'subtitle' => 'required|string|max:255',
            'subtitle_mk' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'title_mk' => 'nullable|string|max:255',
            'highlight' => 'required|string|max:255',
            'highlight_mk' => 'nullable|string|max:255',
            'description' => 'required|string',
            'description_mk' => 'nullable|string',
            'cta_text' => 'required|string|max:255',
            'cta_text_mk' => 'nullable|string|max:255',
            'cta_link' => 'nullable|string|max:255',
            'secondary_text' => 'required|string|max:255',
            'secondary_text_mk' => 'nullable|string|max:255',
            'secondary_link' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'image_desktop_webp' => 'nullable|image|mimes:webp|max:2048',
            'image_mobile_webp' => 'nullable|image|mimes:webp|max:1024',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        // Remove image fields from validated data - we'll handle them separately
        unset($validated['image'], $validated['image_desktop_webp'], $validated['image_mobile_webp']);

        if ($request->hasFile('image')) {
            if ($heroSlide->image) {
                Storage::disk('public')->delete($heroSlide->image);
            }
            $validated['image'] = $request->file('image')->store('hero-slides', 'public');
        }
        if ($request->hasFile('image_desktop_webp')) {
            if ($heroSlide->image_desktop_webp) {
                Storage::disk('public')->delete($heroSlide->image_desktop_webp);
            }
            $validated['image_desktop_webp'] = $request->file('image_desktop_webp')->store('hero-slides', 'public');
        }
        if ($request->hasFile('image_mobile_webp')) {
            if ($heroSlide->image_mobile_webp) {
                Storage::disk('public')->delete($heroSlide->image_mobile_webp);
            }
            $validated['image_mobile_webp'] = $request->file('image_mobile_webp')->store('hero-slides', 'public');
        }

        $heroSlide->update($validated);

        return redirect()->route('admin.hero-slides.index')
            ->with('success', 'Hero slide updated successfully.');
    }

    public function destroy(HeroSlide $heroSlide)
    {
        if ($heroSlide->image) {
            Storage::disk('public')->delete($heroSlide->image);
        }
        if ($heroSlide->image_desktop_webp) {
            Storage::disk('public')->delete($heroSlide->image_desktop_webp);
        }
        if ($heroSlide->image_mobile_webp) {
            Storage::disk('public')->delete($heroSlide->image_mobile_webp);
        }
        
        $heroSlide->delete();

        return redirect()->route('admin.hero-slides.index')
            ->with('success', 'Hero slide deleted successfully.');
    }

    public function updateOrder(Request $request)
    {
        $request->validate([
            'slides' => 'required|array',
            'slides.*.id' => 'required|exists:hero_slides,id',
            'slides.*.order' => 'required|integer',
        ]);

        foreach ($request->slides as $slideData) {
            HeroSlide::where('id', $slideData['id'])->update(['order' => $slideData['order']]);
        }

        return response()->json(['success' => true]);
    }
}
