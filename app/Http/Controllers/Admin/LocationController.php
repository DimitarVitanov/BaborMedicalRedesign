<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::ordered()->get();
        
        return Inertia::render('Admin/Locations/Index', [
            'locations' => $locations,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Locations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'address_en' => 'required|string|max:255',
            'address_mk' => 'required|string|max:255',
            'phone' => 'nullable|string|max:50',
            'email' => 'nullable|email|max:255',
            'working_hours_weekdays_en' => 'nullable|string|max:100',
            'working_hours_weekdays_mk' => 'nullable|string|max:100',
            'working_hours_saturday_en' => 'nullable|string|max:100',
            'working_hours_saturday_mk' => 'nullable|string|max:100',
            'working_hours_sunday_en' => 'nullable|string|max:100',
            'working_hours_sunday_mk' => 'nullable|string|max:100',
            'show_working_hours' => 'boolean',
            'map_embed_url' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $validated['sort_order'] = Location::max('sort_order') + 1;

        Location::create($validated);

        return redirect()->route('admin.locations.index')->with('success', 'Location created successfully.');
    }

    public function edit(Location $location)
    {
        return Inertia::render('Admin/Locations/Edit', [
            'location' => $location,
        ]);
    }

    public function update(Request $request, Location $location)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'address_en' => 'required|string|max:255',
            'address_mk' => 'required|string|max:255',
            'phone' => 'nullable|string|max:50',
            'email' => 'nullable|email|max:255',
            'working_hours_weekdays_en' => 'nullable|string|max:100',
            'working_hours_weekdays_mk' => 'nullable|string|max:100',
            'working_hours_saturday_en' => 'nullable|string|max:100',
            'working_hours_saturday_mk' => 'nullable|string|max:100',
            'working_hours_sunday_en' => 'nullable|string|max:100',
            'working_hours_sunday_mk' => 'nullable|string|max:100',
            'show_working_hours' => 'boolean',
            'map_embed_url' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $location->update($validated);

        return redirect()->route('admin.locations.index')->with('success', 'Location updated successfully.');
    }

    public function destroy(Location $location)
    {
        $location->delete();

        return redirect()->route('admin.locations.index')->with('success', 'Location deleted successfully.');
    }
}
