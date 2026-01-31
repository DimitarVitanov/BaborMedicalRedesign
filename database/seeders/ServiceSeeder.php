<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Face Treatments',
                'title_mk' => 'Третмани за лице',
                'description' => 'Explore our premium face treatments designed to rejuvenate and refresh your skin.',
                'description_mk' => 'Разгледете ги нашите премиум третмани за лице дизајнирани да ја подмладат и освежат вашата кожа.',
                'icon' => 'face',
                'link' => '/services/face',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Laser Treatments',
                'title_mk' => 'Ласерски третмани',
                'description' => 'Advanced laser technology for hair removal, skin rejuvenation, and more.',
                'description_mk' => 'Напредна ласерска технологија за отстранување на влакна, подмладување на кожата и многу повеќе.',
                'icon' => 'laser',
                'link' => '/services/laser',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Body Treatments',
                'title_mk' => 'Третмани за тело',
                'description' => 'Relaxing and therapeutic body treatments for complete wellness.',
                'description_mk' => 'Релаксирачки и терапевтски третмани за тело за целосна благосостојба.',
                'icon' => 'body',
                'link' => '/services/body',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Babor Products',
                'title_mk' => 'Бабор Продукти',
                'description' => 'Discover our exclusive range of premium Babor skincare products.',
                'description_mk' => 'Откријте ја нашата ексклузивна палета на премиум Бабор производи за нега на кожа.',
                'icon' => 'product',
                'link' => '/products',
                'order' => 4,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
