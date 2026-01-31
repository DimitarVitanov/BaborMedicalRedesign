<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->groupBy('group');
        
        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value_en' => 'nullable|string',
            'settings.*.value_mk' => 'nullable|string',
        ]);

        foreach ($validated['settings'] as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                [
                    'value_en' => $setting['value_en'] ?? '',
                    'value_mk' => $setting['value_mk'] ?? '',
                ]
            );
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
