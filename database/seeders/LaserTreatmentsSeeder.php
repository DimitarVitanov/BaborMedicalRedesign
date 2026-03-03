<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\ServiceItem;
use Illuminate\Database\Seeder;

class LaserTreatmentsSeeder extends Seeder
{
    public function run(): void
    {
        $category = ServiceCategory::where('slug', 'laser-treatments')->first();

        if (!$category) {
            $category = ServiceCategory::create([
                'name_en' => 'Laser Treatments',
                'name_mk' => 'Ласерски третмани',
                'slug' => 'laser-treatments',
                'parent_type' => 'laser_aesthetic',
                'description_en' => 'At Babor Medical, we don\'t view laser treatments as isolated procedures, but as part of carefully crafted personalized protocols. Every skin has a different structure, different history and different needs. That\'s why our approach is based on precise assessment and selection of appropriate technology at the right moment. Our strategy is not "one device for all", but a combination of technologies with clear clinical logic.',
                'description_mk' => 'Во Babor Medical, ласерските третмани не ги гледаме како поединечни процедури, туку како дел од внимателно креирани персонализирани протоколи. Секоја кожа има различна структура, различна историја и различни потреби. Затоа нашиот пристап се базира на прецизна проценка и избор на соодветна технологија во вистинскиот момент. Нашата стратегија не е „еден апарат за сите", туку комбинација на технологии со јасна клиничка логика.',
                'display_type' => 'cards',
                'is_active' => true,
                'sort_order' => 1,
            ]);
        } else {
            $category->update([
                'name_en' => 'Laser Treatments',
                'name_mk' => 'Ласерски третмани',
                'description_en' => 'At Babor Medical, we don\'t view laser treatments as isolated procedures, but as part of carefully crafted personalized protocols. Every skin has a different structure, different history and different needs. That\'s why our approach is based on precise assessment and selection of appropriate technology at the right moment. Our strategy is not "one device for all", but a combination of technologies with clear clinical logic.',
                'description_mk' => 'Во Babor Medical, ласерските третмани не ги гледаме како поединечни процедури, туку како дел од внимателно креирани персонализирани протоколи. Секоја кожа има различна структура, различна историја и различни потреби. Затоа нашиот пристап се базира на прецизна проценка и избор на соодветна технологија во вистинскиот момент. Нашата стратегија не е „еден апарат за сите", туку комбинација на технологии со јасна клиничка логика.',
            ]);
        }

        $category->items()->delete();

        $treatments = [
            [
                'name_en' => 'Alma Q',
                'name_mk' => 'Alma Q',
                'subtitle_en' => 'Q-switched laser for pigmentation, tattoos and skin revitalization',
                'subtitle_mk' => 'Q-switched ласер за третман на пигментации, тетоважи и ревитализација на кожата',
                'description_en' => '<p>Provides high precision and controlled energy with minimal impact on surrounding tissue.</p>',
                'description_mk' => '<p>Обезбедува висока прецизност и контролирана енергија со минимално оптоварување на околното ткиво.</p>',
                'indications_en' => '<ul><li>Pigmentation and sun damage</li><li>Tattoo removal</li><li>Skin revitalization</li><li>Uneven skin tone</li></ul>',
                'indications_mk' => '<ul><li>Пигментации и сончеви оштетувања</li><li>Отстранување на тетоважи</li><li>Ревитализација на кожата</li><li>Нерамномерен тен</li></ul>',
                'includes_en' => null,
                'includes_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Targeted pigment destruction</li><li>Stimulation of collagen production</li><li>Improved skin tone and texture</li><li>Minimal downtime</li></ul>',
                'effects_mk' => '<ul><li>Таргетирано уништување на пигмент</li><li>Стимулација на продукција на колаген</li><li>Подобрен тон и текстура на кожата</li><li>Минимално време на опоравување</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 1,
            ],
            [
                'name_en' => 'Alma Hybrid',
                'name_mk' => 'Alma Hybrid',
                'subtitle_en' => 'Fractional CO2 and non-ablative laser in one system',
                'subtitle_mk' => 'Фракционен CO2 и не-аблативен ласер во еден систем',
                'description_en' => '<p>Used for scar treatment, skin regeneration, texture improvement and anti-age strategies.</p>',
                'description_mk' => '<p>Се користи за третман на лузни, регенерација на кожа, подобрување на текстура и anti-age стратегии.</p>',
                'indications_en' => '<ul><li>Scars and post-acne changes</li><li>Uneven texture and enlarged pores</li><li>Signs of aging and loss of elasticity</li><li>Skin regeneration</li></ul>',
                'indications_mk' => '<ul><li>Лузни и постакне промени</li><li>Нерамна текстура и проширени пори</li><li>Знаци на стареење и губење на еластичност</li><li>Регенерација на кожа</li></ul>',
                'includes_en' => null,
                'includes_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Deep skin regeneration</li><li>Collagen remodeling</li><li>Improved skin texture</li><li>Tightening and firming</li></ul>',
                'effects_mk' => '<ul><li>Длабока регенерација на кожата</li><li>Ремоделирање на колаген</li><li>Подобрена текстура на кожата</li><li>Затегнување и зацврстување</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 2,
            ],
            [
                'name_en' => 'Ultraformer III',
                'name_mk' => 'Ultraformer III',
                'subtitle_en' => 'HIFU technology for non-invasive lifting and structural face support',
                'subtitle_mk' => 'HIFU технологија за неинвазивен лифтинг и структурна поддршка на лицето',
                'description_en' => '<p>Often part of combined protocols for tightening and contour improvement.</p>',
                'description_mk' => '<p>Често е дел од комбинирани протоколи за зацврстување и подобрување на контурата.</p>',
                'indications_en' => '<ul><li>Loss of tone and sagging</li><li>Loss of facial contour</li><li>Fine lines and wrinkles</li><li>Skin laxity</li></ul>',
                'indications_mk' => '<ul><li>Губење на тонус и опуштеност</li><li>Губење на контура на лицето</li><li>Фини линии и брчки</li><li>Лабавост на кожата</li></ul>',
                'includes_en' => null,
                'includes_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Non-invasive lifting</li><li>Structural support</li><li>Contour improvement</li><li>Collagen stimulation in deep layers</li></ul>',
                'effects_mk' => '<ul><li>Неинвазивен лифтинг</li><li>Структурна поддршка</li><li>Подобрување на контурата</li><li>Стимулација на колаген во длабоки слоеви</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 3,
            ],
            [
                'name_en' => 'DPL / IPL System',
                'name_mk' => 'DPL / IPL систем',
                'subtitle_en' => 'Technology for pigmentation, capillaries and photorejuvenation',
                'subtitle_mk' => 'Технологија за третман на пигментации, капилари и фотоподмладување',
                'description_en' => '<p>Enables skin tone refreshment and color evening.</p>',
                'description_mk' => '<p>Овозможува освежување на тенот и изедначување на бојата на кожата.</p>',
                'indications_en' => '<ul><li>Pigmentation</li><li>Vascular changes and redness</li><li>Photoaging</li><li>Dull skin without vitality</li></ul>',
                'indications_mk' => '<ul><li>Пигментации</li><li>Васкуларни промени и црвенило</li><li>Фотостареење</li><li>Уморна кожа без виталност</li></ul>',
                'includes_en' => null,
                'includes_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Skin tone refreshment</li><li>Color evening</li><li>Reduction of redness</li><li>Overall rejuvenation</li></ul>',
                'effects_mk' => '<ul><li>Освежување на тенот</li><li>Изедначување на бојата</li><li>Намалување на црвенило</li><li>Целосно подмладување</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 4,
            ],
        ];

        foreach ($treatments as $treatment) {
            ServiceItem::create(array_merge($treatment, [
                'service_category_id' => $category->id,
                'is_expandable' => true,
                'is_active' => true,
            ]));
        }
    }
}
