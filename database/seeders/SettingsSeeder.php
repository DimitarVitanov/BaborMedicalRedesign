<?php

namespace Database\Seeders;

use App\Models\Setting;
use App\Models\Location;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        // Social media settings
        $settings = [
            [
                'key' => 'social_facebook',
                'value_en' => 'https://facebook.com/babormedical',
                'value_mk' => 'https://facebook.com/babormedical',
                'type' => 'text',
                'group' => 'social',
            ],
            [
                'key' => 'social_instagram',
                'value_en' => 'https://instagram.com/babormedical',
                'value_mk' => 'https://instagram.com/babormedical',
                'type' => 'text',
                'group' => 'social',
            ],
            [
                'key' => 'social_tiktok',
                'value_en' => 'https://tiktok.com/@babormedical',
                'value_mk' => 'https://tiktok.com/@babormedical',
                'type' => 'text',
                'group' => 'social',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }

        // Default locations
        Location::updateOrCreate(
            ['name_en' => 'Main Location'],
            [
                'name_en' => 'Main Location',
                'name_mk' => 'Главна локација',
                'address_en' => 'Skopje, Macedonia',
                'address_mk' => 'Скопје, Македонија',
                'phone' => '+389 XX XXX XXX',
                'email' => 'info@babormedical.mk',
                'working_hours_weekdays_en' => '09:00 - 20:00',
                'working_hours_weekdays_mk' => '09:00 - 20:00',
                'working_hours_saturday_en' => '10:00 - 18:00',
                'working_hours_saturday_mk' => '10:00 - 18:00',
                'working_hours_sunday_en' => 'Closed',
                'working_hours_sunday_mk' => 'Затворено',
                'show_working_hours' => true,
                'is_active' => true,
                'sort_order' => 1,
            ]
        );

        Location::updateOrCreate(
            ['name_en' => 'Second Location'],
            [
                'name_en' => 'Second Location',
                'name_mk' => 'Втора локација',
                'address_en' => 'Bitola, Macedonia',
                'address_mk' => 'Битола, Македонија',
                'phone' => '+389 XX XXX XXX',
                'email' => 'bitola@babormedical.mk',
                'working_hours_weekdays_en' => '09:00 - 18:00',
                'working_hours_weekdays_mk' => '09:00 - 18:00',
                'working_hours_saturday_en' => '10:00 - 16:00',
                'working_hours_saturday_mk' => '10:00 - 16:00',
                'working_hours_sunday_en' => 'Closed',
                'working_hours_sunday_mk' => 'Затворено',
                'show_working_hours' => true,
                'is_active' => true,
                'sort_order' => 2,
            ]
        );
    }
}
