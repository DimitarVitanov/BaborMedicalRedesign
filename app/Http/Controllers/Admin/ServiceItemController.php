<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServiceCategory;
use App\Models\ServiceItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceItemController extends Controller
{
    public function index(Request $request)
    {
        $query = ServiceItem::with('category')->ordered();
        
        if ($request->has('category')) {
            $query->where('service_category_id', $request->category);
        }
        
        $items = $query->paginate(7);
        $categories = ServiceCategory::ordered()->get();
        
        return Inertia::render('Admin/ServiceItems/Index', [
            'items' => $items,
            'categories' => $categories,
            'selectedCategory' => $request->category,
        ]);
    }

    public function create()
    {
        $categories = ServiceCategory::active()->ordered()->get();
        
        return Inertia::render('Admin/ServiceItems/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'service_category_id' => 'required|exists:service_categories,id',
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'duration' => 'nullable|string|max:100',
            'url' => 'nullable|string|max:500',
            'is_expandable' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['sort_order'] = ServiceItem::where('service_category_id', $validated['service_category_id'])->max('sort_order') + 1;

        ServiceItem::create($validated);

        return redirect()->route('admin.service-items.index')->with('success', 'Service created successfully.');
    }

    public function edit(ServiceItem $serviceItem)
    {
        $categories = ServiceCategory::active()->ordered()->get();
        
        return Inertia::render('Admin/ServiceItems/Edit', [
            'item' => $serviceItem,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, ServiceItem $serviceItem)
    {
        $validated = $request->validate([
            'service_category_id' => 'required|exists:service_categories,id',
            'name_en' => 'required|string|max:255',
            'name_mk' => 'required|string|max:255',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'duration' => 'nullable|string|max:100',
            'url' => 'nullable|string|max:500',
            'is_expandable' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $serviceItem->update($validated);

        return redirect()->route('admin.service-items.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(ServiceItem $serviceItem)
    {
        $serviceItem->delete();

        return redirect()->route('admin.service-items.index')->with('success', 'Service deleted successfully.');
    }
}
