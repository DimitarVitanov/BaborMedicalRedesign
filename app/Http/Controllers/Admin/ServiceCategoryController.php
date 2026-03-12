<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceCategoryController extends Controller
{
    public function index()
    {
        $categories = ServiceCategory::ordered()->withCount('items')->get();
        
        return Inertia::render('Admin/ServiceCategories/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ServiceCategories/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:service_categories',
            'parent_type' => 'required|in:cosmetology,laser_aesthetic,injectable,body_treatments',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'display_type' => 'required|in:accordion,buttons,cards',
            'is_active' => 'boolean',
            'extra_data_en' => 'nullable|array',
            'extra_data_mk' => 'nullable|array',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name_en']);
        }

        $validated['sort_order'] = ServiceCategory::max('sort_order') + 1;

        ServiceCategory::create($validated);

        return redirect()->route('admin.service-categories.index')->with('success', 'Category created successfully.');
    }

    public function edit(ServiceCategory $serviceCategory)
    {
        return Inertia::render('Admin/ServiceCategories/Edit', [
            'category' => $serviceCategory,
        ]);
    }

    public function update(Request $request, ServiceCategory $serviceCategory)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:service_categories,slug,' . $serviceCategory->id,
            'parent_type' => 'required|in:cosmetology,laser_aesthetic,injectable,body_treatments',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'display_type' => 'required|in:accordion,buttons,cards',
            'is_active' => 'boolean',
            'extra_data_en' => 'nullable|array',
            'extra_data_mk' => 'nullable|array',
            'price_list_items_en' => 'nullable|array',
            'price_list_items_en.*.name' => 'required|string',
            'price_list_items_en.*.price' => 'required|numeric|min:0',
            'price_list_items_mk' => 'nullable|array',
            'price_list_items_mk.*.name' => 'required|string',
            'price_list_items_mk.*.price' => 'required|numeric|min:0',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name_en']);
        }

        $serviceCategory->update($validated);

        return redirect()->route('admin.service-categories.index')->with('success', 'Category updated successfully.');
    }

    public function destroy(ServiceCategory $serviceCategory)
    {
        $serviceCategory->delete();

        return redirect()->route('admin.service-categories.index')->with('success', 'Category deleted successfully.');
    }
}
