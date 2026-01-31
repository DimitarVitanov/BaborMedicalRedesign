<?php

namespace Database\Seeders;

use App\Models\Equipment;
use Illuminate\Database\Seeder;

class EquipmentSeeder extends Seeder
{
    public function run(): void
    {
        $equipment = [
            [
                'title_en' => 'Alma Soprano Titanium',
                'title_mk' => 'Алма Сопрано Титаниум',
                'description_en' => 'The gold standard in laser hair removal with virtually painless treatment.',
                'description_mk' => 'Златен стандард во ласерска епилација со практично безболен третман.',
                'category' => 'laser',
                'sort_order' => 1,
            ],
            [
                'title_en' => 'Alma Hybrid',
                'title_mk' => 'Алма Хибрид',
                'description_en' => 'Revolutionary hybrid technology combining CO2 and 1570nm wavelengths.',
                'description_mk' => 'Револуционерна хибридна технологија која комбинира CO2 и 1570nm бранови должини.',
                'category' => 'laser',
                'sort_order' => 2,
            ],
            [
                'title_en' => 'Alma Accent Prime',
                'title_mk' => 'Алма Акцент Прајм',
                'description_en' => 'Advanced body contouring and skin tightening platform.',
                'description_mk' => 'Напредна платформа за обликување на телото и затегнување на кожата.',
                'category' => 'laser',
                'sort_order' => 3,
            ],
            [
                'title_en' => 'Alma Derma Clear',
                'title_mk' => 'Алма Дерма Клир',
                'description_en' => 'Effective treatment for acne and skin rejuvenation.',
                'description_mk' => 'Ефективен третман за акни и подмладување на кожата.',
                'category' => 'laser',
                'sort_order' => 4,
            ],
            [
                'title_en' => 'Alma-Q',
                'title_mk' => 'Алма-Q',
                'description_en' => 'Q-switched laser for tattoo removal and pigmentation treatment.',
                'description_mk' => 'Q-switched ласер за отстранување на тетоважи и третман на пигментација.',
                'category' => 'laser',
                'sort_order' => 5,
            ],
        ];

        foreach ($equipment as $item) {
            Equipment::create($item);
        }
    }
}
