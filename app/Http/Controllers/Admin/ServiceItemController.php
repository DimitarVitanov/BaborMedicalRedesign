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
            'subtitle_en' => 'nullable|string|max:500',
            'subtitle_mk' => 'nullable|string|max:500',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'includes_en' => 'nullable|string',
            'includes_mk' => 'nullable|string',
            'indications_en' => 'nullable|string',
            'indications_mk' => 'nullable|string',
            'components_en' => 'nullable|string',
            'components_mk' => 'nullable|string',
            'effects_en' => 'nullable|string',
            'effects_mk' => 'nullable|string',
            'suitable_for_en' => 'nullable|string',
            'suitable_for_mk' => 'nullable|string',
            'note_en' => 'nullable|string',
            'note_mk' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'price_from' => 'nullable|numeric|min:0',
            'price_to' => 'nullable|numeric|min:0',
            'duration' => 'nullable|string|max:100',
            'url' => 'nullable|string|max:500',
            'is_expandable' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['sort_order'] = ServiceItem::where('service_category_id', $validated['service_category_id'])->max('sort_order') + 1;

        // Convert empty strings to null for price fields
        $validated['price'] = $validated['price'] !== '' ? $validated['price'] : null;
        $validated['price_from'] = $validated['price_from'] !== '' ? $validated['price_from'] : null;
        $validated['price_to'] = $validated['price_to'] !== '' ? $validated['price_to'] : null;

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
            'subtitle_en' => 'nullable|string|max:500',
            'subtitle_mk' => 'nullable|string|max:500',
            'description_en' => 'nullable|string',
            'description_mk' => 'nullable|string',
            'includes_en' => 'nullable|string',
            'includes_mk' => 'nullable|string',
            'indications_en' => 'nullable|string',
            'indications_mk' => 'nullable|string',
            'components_en' => 'nullable|string',
            'components_mk' => 'nullable|string',
            'effects_en' => 'nullable|string',
            'effects_mk' => 'nullable|string',
            'suitable_for_en' => 'nullable|string',
            'suitable_for_mk' => 'nullable|string',
            'note_en' => 'nullable|string',
            'note_mk' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'price_from' => 'nullable|numeric|min:0',
            'price_to' => 'nullable|numeric|min:0',
            'duration' => 'nullable|string|max:100',
            'url' => 'nullable|string|max:500',
            'is_expandable' => 'boolean',
            'is_active' => 'boolean',
        ]);

        // Convert empty strings to null for price fields
        $validated['price'] = $validated['price'] !== '' ? $validated['price'] : null;
        $validated['price_from'] = $validated['price_from'] !== '' ? $validated['price_from'] : null;
        $validated['price_to'] = $validated['price_to'] !== '' ? $validated['price_to'] : null;

        $serviceItem->update($validated);

        return redirect()->route('admin.service-items.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(ServiceItem $serviceItem)
    {
        $serviceItem->delete();

        return redirect()->route('admin.service-items.index')->with('success', 'Service deleted successfully.');
    }
}
