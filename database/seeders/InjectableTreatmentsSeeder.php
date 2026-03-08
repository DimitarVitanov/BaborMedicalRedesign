<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\ServiceItem;
use Illuminate\Database\Seeder;

class InjectableTreatmentsSeeder extends Seeder
{
    public function run(): void
    {
        $category = ServiceCategory::where('slug', 'injectable-methods')->first();

        if (!$category) {
            $category = ServiceCategory::create([
                'name_en' => 'Injectable Methods',
                'name_mk' => 'Инјектбилни методи',
                'slug' => 'injectable-methods',
                'parent_type' => 'injectable',
                'description_en' => 'At Babor Medical, we don\'t use injectable treatments as isolated corrections, but as part of carefully structured medical protocols. Our goal is not to "add volume" or "smooth a wrinkle", but to establish balance between structure, dynamics and skin quality. Every patient receives an individual assessment, after which a strategy is defined – whether muscle relaxation, biostimulation, structural support or a combined approach is needed.',
                'description_mk' => 'Во Babor Medical, инјектбилните третмани не ги користиме како изолирани корекции, туку како дел од внимателно структурирани медицински протоколи. Нашата цел не е да „додадеме волумен" или да „измазниме брчка", туку да воспоставиме рамнотежа помеѓу структура, динамика и квалитет на кожата. Секој пациент добива индивидуална проценка, по што се дефинира стратегија – дали е потребна релаксација на мускулатурата, биостимулација, структурна поддршка или комбиниран пристап.',
                'display_type' => 'cards',
                'is_active' => true,
                'sort_order' => 1,
                'extra_data_en' => [
                    'protocol_areas' => [
                        'Collagen stimulators',
                        'Botulinum therapy (Botox)',
                        'Dermal fillers',
                        'Mesococktails and biorevitalization',
                        'Peptide formulations',
                        'PRP (platelet-rich plasma)',
                    ],
                    'combined_strategies' => [
                        'Collagen stimulator + botulinum therapy',
                        'Filler + biorevitalization',
                        'PRP + laser',
                        'Phased anti-age protocol',
                    ],
                    'assessment_points' => [
                        'anatomical structure',
                        'skin type',
                        'degree of aging',
                        'previous interventions',
                        'patient expectations',
                    ],
                ],
                'extra_data_mk' => [
                    'protocol_areas' => [
                        'Колаген стимулатори',
                        'Ботулинска терапија (Botox)',
                        'Дермални филери',
                        'Мезококтели и биоревитализација',
                        'Пептидни формулации',
                        'PRP (плазма богата со тромбоцити)',
                    ],
                    'combined_strategies' => [
                        'Колаген стимулатор + ботулинска терапија',
                        'Филер + биоревитализација',
                        'PRP + ласер',
                        'Фазен anti-age протокол',
                    ],
                    'assessment_points' => [
                        'анатомска структура',
                        'тип на кожа',
                        'степен на стареење',
                        'претходни интервенции',
                        'очекувања на пациентот',
                    ],
                ],
            ]);
        } else {
            $category->update([
                'name_en' => 'Injectable Methods',
                'name_mk' => 'Инјектбилни методи',
                'description_en' => 'At Babor Medical, we don\'t use injectable treatments as isolated corrections, but as part of carefully structured medical protocols. Our goal is not to "add volume" or "smooth a wrinkle", but to establish balance between structure, dynamics and skin quality. Every patient receives an individual assessment, after which a strategy is defined – whether muscle relaxation, biostimulation, structural support or a combined approach is needed.',
                'description_mk' => 'Во Babor Medical, инјектбилните третмани не ги користиме како изолирани корекции, туку како дел од внимателно структурирани медицински протоколи. Нашата цел не е да „додадеме волумен" или да „измазниме брчка", туку да воспоставиме рамнотежа помеѓу структура, динамика и квалитет на кожата. Секој пациент добива индивидуална проценка, по што се дефинира стратегија – дали е потребна релаксација на мускулатурата, биостимулација, структурна поддршка или комбиниран пристап.',
                'extra_data_en' => [
                    'protocol_areas' => [
                        'Collagen stimulators',
                        'Botulinum therapy (Botox)',
                        'Dermal fillers',
                        'Mesococktails and biorevitalization',
                        'Peptide formulations',
                        'PRP (platelet-rich plasma)',
                    ],
                    'combined_strategies' => [
                        'Collagen stimulator + botulinum therapy',
                        'Filler + biorevitalization',
                        'PRP + laser',
                        'Phased anti-age protocol',
                    ],
                    'assessment_points' => [
                        'anatomical structure',
                        'skin type',
                        'degree of aging',
                        'previous interventions',
                        'patient expectations',
                    ],
                ],
                'extra_data_mk' => [
                    'protocol_areas' => [
                        'Колаген стимулатори',
                        'Ботулинска терапија (Botox)',
                        'Дермални филери',
                        'Мезококтели и биоревитализација',
                        'Пептидни формулации',
                        'PRP (плазма богата со тромбоцити)',
                    ],
                    'combined_strategies' => [
                        'Колаген стимулатор + ботулинска терапија',
                        'Филер + биоревитализација',
                        'PRP + ласер',
                        'Фазен anti-age протокол',
                    ],
                    'assessment_points' => [
                        'анатомска структура',
                        'тип на кожа',
                        'степен на стареење',
                        'претходни интервенции',
                        'очекувања на пациентот',
                    ],
                ],
            ]);
        }

        $category->items()->delete();

        $treatments = [
            [
                'name_en' => 'Collagen Stimulators',
                'name_mk' => 'Колаген стимулатори',
                'subtitle_en' => 'Activating the skin\'s own regenerative ability',
                'subtitle_mk' => 'Активирање на сопствената регенеративна способност на кожата',
                'description_en' => '<p>Collagen stimulators are aimed at activating the skin\'s own regenerative ability. Instead of instant volume, they stimulate gradual synthesis of new collagen, improving structure and tissue tightening. Used for loss of elasticity, structural weakness and aging of the middle and lower face.</p>',
                'description_mk' => '<p>Колаген стимулаторите се насочени кон активирање на сопствената регенеративна способност на кожата. Наместо моментален волумен, тие стимулираат постепена синтеза на нов колаген, подобрување на структурата и зацврстување на ткивото. Се користат кај губење на еластичност, структурна слабост и стареење на средното и долното лице.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 1,
            ],
            [
                'name_en' => 'Botulinum Therapy',
                'name_mk' => 'Ботулинска терапија',
                'subtitle_en' => 'Controlled relaxation of muscles responsible for dynamic wrinkles',
                'subtitle_mk' => 'Контролирана релаксација на мускулите одговорни за динамичките брчки',
                'description_en' => '<p>Botulinum therapy enables controlled relaxation of muscles responsible for dynamic wrinkles. With proper dosing and anatomical precision, the result is a natural look, without frozen expression. Used for forehead, glabella, periorbital region and in certain cases for the lower third of the face.</p>',
                'description_mk' => '<p>Ботулинската терапија овозможува контролирана релаксација на мускулите одговорни за динамичките брчки. Со правилно дозирање и анатомска прецизност, резултатот е природен изглед, без замрзната експресија. Се користи кај чело, глабела, периорбитална регија и во одредени случаи за долна третина на лице.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 2,
            ],
            [
                'name_en' => 'Dermal Fillers',
                'name_mk' => 'Дермални филери',
                'subtitle_en' => 'Restoring volume, defining contours and correcting anatomical deficits',
                'subtitle_mk' => 'Враќање на волумен, дефинирање на контури и корекција на анатомски дефицити',
                'description_en' => '<p>Fillers are used to restore volume, define contours and correct certain anatomical deficits. Our approach is structural, respecting natural proportions without overemphasizing features.</p>',
                'description_mk' => '<p>Филерите се користат за враќање на волумен, дефинирање на контури и корекција на одредени анатомски дефицити. Нашиот пристап е структурен, со почитување на природните пропорции и без пренагласување на цртите.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 3,
            ],
            [
                'name_en' => 'Mesococktails, Peptides & Biorevitalization',
                'name_mk' => 'Мезококтели, пептиди и биоревитализација',
                'subtitle_en' => 'Improving skin quality from within',
                'subtitle_mk' => 'Подобрување на квалитетот на кожата одвнатре',
                'description_en' => '<p>These therapies are aimed at improving skin quality: hydration, tone improvement, revitalization and reduction of fine lines. Often combined with laser or RF treatments in phased protocols.</p>',
                'description_mk' => '<p>Овие терапии се насочени кон подобрување на квалитетот на кожата: хидратација, подобрување на тонус, ревитализација и намалување на фини линии. Често се комбинираат со ласерски или RF третмани во фазни протоколи.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 4,
            ],
            [
                'name_en' => 'PRP – Regeneration with Own Resources',
                'name_mk' => 'PRP – регенерација со сопствени ресурси',
                'subtitle_en' => 'Platelet-rich plasma therapy for natural regeneration',
                'subtitle_mk' => 'Терапија со плазма богата со тромбоцити за природна регенерација',
                'description_en' => '<p>PRP therapy uses platelet-rich plasma obtained from the patient\'s own blood. This method stimulates natural regenerative processes, texture improvement and accelerated healing.</p>',
                'description_mk' => '<p>PRP терапијата користи плазма богата со тромбоцити добиена од сопствената крв на пациентот. Оваа метода стимулира природни регенеративни процеси, подобрување на текстурата и забрзување на заздравување.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'sort_order' => 5,
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
