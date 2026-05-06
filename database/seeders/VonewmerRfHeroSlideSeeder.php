<?php

namespace Database\Seeders;

use App\Models\HeroSlide;
use Illuminate\Database\Seeder;

class VonewmerRfHeroSlideSeeder extends Seeder
{
    public function run(): void
    {
        HeroSlide::create([
            'subtitle' => 'Coming Soon',
            'subtitle_mk' => 'Наскоро',
            'title' => 'Vonewmer RF',
            'title_mk' => 'Vonewmer RF',
            'highlight' => 'Award-Winning Skin Tightening',
            'highlight_mk' => 'Наградувано затегнување на кожа',
            'description' => 'A new generation of radiofrequency technology for non-invasive skin tightening and biostimulation – without needles, without downtime. Winner of ELLE Beauty Awards 2025 & K-Brand Awards 2026.',
            'description_mk' => 'Нова генерација радиофреквентна технологија за неинвазивно затегнување и биостимулација на кожа – без игли, без downtime. Добитник на ELLE Beauty Awards 2025 и K-Brand Awards 2026.',
            'cta_text' => 'Learn More',
            'cta_text_mk' => 'Дознај повеќе',
            'cta_link' => '/lasers/vonewmer-rf',
            'secondary_text' => 'Book Consultation',
            'secondary_text_mk' => 'Закажи консултација',
            'secondary_link' => '/contact',
            'image' => 'equipment/548a3d2e-8534-4ad9-bbdb-3009095b116a.png',
            'image_desktop_webp' => 'equipment/vonewmer-rf-desktop.webp',
            'image_mobile_webp' => 'equipment/vonewmer-rf-mobile.webp',
            'order' => 1,
            'is_active' => true,
        ]);
    }
}
