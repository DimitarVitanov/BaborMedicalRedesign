<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EquipmentController extends Controller
{
    public function index()
    {
        $equipment = Equipment::ordered()->get();
        
        return Inertia::render('Admin/Equipment/Index', [
            'equipment' => $equipment,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Equipment/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'slug' => 'required|string|max:255|unique:equipment,slug',
            'title_en' => 'required|string|max:255',
            'title_mk' => 'required|string|max:255',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'detailed_description_en' => 'nullable|string',
            'detailed_description_mk' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'category' => 'required|string|max:50',
            'is_active' => 'boolean',
            'image' => 'nullable|image|max:5120',
            'image_desktop_webp' => 'nullable|image|mimes:webp|max:2048',
            'image_mobile_webp' => 'nullable|image|mimes:webp|max:1024',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('equipment', 'public');
        }
        if ($request->hasFile('image_desktop_webp')) {
            $validated['image_desktop_webp'] = $request->file('image_desktop_webp')->store('equipment', 'public');
        }
        if ($request->hasFile('image_mobile_webp')) {
            $validated['image_mobile_webp'] = $request->file('image_mobile_webp')->store('equipment', 'public');
        }

        $validated['sort_order'] = Equipment::max('sort_order') + 1;

        Equipment::create($validated);

        return redirect()->route('admin.equipment.index')->with('success', 'Equipment created successfully.');
    }

    public function edit(Equipment $equipment)
    {
        return Inertia::render('Admin/Equipment/Edit', [
            'equipment' => $equipment,
        ]);
    }

    public function update(Request $request, Equipment $equipment)
    {
        $validated = $request->validate([
            'slug' => 'required|string|max:255|unique:equipment,slug,' . $equipment->id,
            'title_en' => 'required|string|max:255',
            'title_mk' => 'required|string|max:255',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'detailed_description_en' => 'nullable|string',
            'detailed_description_mk' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'category' => 'required|string|max:50',
            'is_active' => 'boolean',
            'image' => 'nullable|image|max:5120',
            'image_desktop_webp' => 'nullable|image|mimes:webp|max:2048',
            'image_mobile_webp' => 'nullable|image|mimes:webp|max:1024',
        ]);

        // Remove image fields from validated data - we'll handle them separately
        unset($validated['image'], $validated['image_desktop_webp'], $validated['image_mobile_webp']);

        if ($request->hasFile('image')) {
            if ($equipment->image) {
                Storage::disk('public')->delete($equipment->image);
            }
            $validated['image'] = $request->file('image')->store('equipment', 'public');
        }
        if ($request->hasFile('image_desktop_webp')) {
            if ($equipment->image_desktop_webp) {
                Storage::disk('public')->delete($equipment->image_desktop_webp);
            }
            $validated['image_desktop_webp'] = $request->file('image_desktop_webp')->store('equipment', 'public');
        }
        if ($request->hasFile('image_mobile_webp')) {
            if ($equipment->image_mobile_webp) {
                Storage::disk('public')->delete($equipment->image_mobile_webp);
            }
            $validated['image_mobile_webp'] = $request->file('image_mobile_webp')->store('equipment', 'public');
        }

        $equipment->update($validated);

        return redirect()->route('admin.equipment.index')->with('success', 'Equipment updated successfully.');
    }

    public function destroy(Equipment $equipment)
    {
        if ($equipment->image) {
            Storage::disk('public')->delete($equipment->image);
        }
        if ($equipment->image_desktop_webp) {
            Storage::disk('public')->delete($equipment->image_desktop_webp);
        }
        if ($equipment->image_mobile_webp) {
            Storage::disk('public')->delete($equipment->image_mobile_webp);
        }
        
        $equipment->delete();

        return redirect()->route('admin.equipment.index')->with('success', 'Equipment deleted successfully.');
    }
}
