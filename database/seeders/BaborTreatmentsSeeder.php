<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\ServiceItem;
use Illuminate\Database\Seeder;

class BaborTreatmentsSeeder extends Seeder
{
    public function run(): void
    {
        // Find or create the BABOR Treatments category under cosmetology
        $category = ServiceCategory::where('slug', 'babor-treatments')->first();

        if (!$category) {
            $category = ServiceCategory::create([
                'name_en' => 'BABOR Treatments',
                'name_mk' => 'BABOR Третмани',
                'slug' => 'babor-treatments',
                'parent_type' => 'cosmetology',
                'description_en' => 'Professional care with medical precision. In our aesthetic center, BABOR treatments are not classic cosmetics – they are a structured, protocol-based approach to skin health and quality.',
                'description_mk' => 'Професионална нега со медицинска прецизност. Во нашиот естетски центар, BABOR третманите не се класична козметика – тие се структуриран, протоколарен пристап кон здравјето и квалитетот на кожата.',
                'display_type' => 'accordion',
                'is_active' => true,
                'sort_order' => 1,
            ]);
        } else {
            $category->update([
                'name_en' => 'BABOR Treatments',
                'name_mk' => 'BABOR Третмани',
                'description_en' => 'Professional care with medical precision. In our aesthetic center, BABOR treatments are not classic cosmetics – they are a structured, protocol-based approach to skin health and quality.',
                'description_mk' => 'Професионална нега со медицинска прецизност. Во нашиот естетски центар, BABOR третманите не се класична козметика – тие се структуриран, протоколарен пристап кон здравјето и квалитетот на кожата.',
            ]);
        }

        // Delete existing items for this category to avoid duplicates
        $category->items()->delete();

        $treatments = [
            [
                'name_en' => 'WELCOME BABOR EXPERIENCE',
                'name_mk' => 'WELCOME BABOR EXPERIENCE',
                'subtitle_en' => 'Initial diagnostic treatment',
                'subtitle_mk' => 'Почетен дијагностички третман',
                'description_en' => '<p>Ideal for new clients or those who want to build a proper routine.</p>',
                'description_mk' => '<p>Идеален за нови клиенти или за оние кои сакаат да изградат правилна рутина.</p>',
                'includes_en' => '<ul><li>Digital skin analysis</li><li>Determination of skin type and condition</li><li>Deep cleansing</li><li>Individually selected ampoule</li><li>Mask according to indication</li><li>Final protection and home care recommendation</li></ul>',
                'includes_mk' => '<ul><li>Дигитална анализа на кожа</li><li>Одредување на тип и состојба на кожа</li><li>Длабинско чистење</li><li>Индивидуално избрана ампула</li><li>Маска според индикација</li><li>Завршна заштита и препорака за домашна нега</li></ul>',
                'indications_en' => '<ul><li>Dehydration</li><li>Sensitivity</li><li>First signs of aging</li><li>Uneven skin tone</li><li>Seborrhea</li></ul>',
                'indications_mk' => '<ul><li>Дехидратација</li><li>Чувствителност</li><li>Први знаци на стареење</li><li>Нерамномерен тен</li><li>Себореја</li></ul>',
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => null,
                'effects_mk' => null,
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => '<p>This treatment sets the foundation for further professional protocols.</p>',
                'note_mk' => '<p>Овој третман поставува основа за понатамошни професионални протоколи.</p>',
                'price_from' => 3200,
                'price_to' => 4500,
                'sort_order' => 1,
            ],
            [
                'name_en' => 'BABOR CLASSIC',
                'name_mk' => 'BABOR CLASSIC',
                'subtitle_en' => 'Individualized treatment for maintenance and balance',
                'subtitle_mk' => 'Индивидуализиран третман за одржување и баланс',
                'description_en' => '<p>This treatment is designed for regular professional care and maintaining the skin barrier.</p>',
                'description_mk' => '<p>Овој третман е наменет за редовна професионална нега и одржување на кожната бариера.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Stabilizes the lipid barrier</li><li>Reduces oxidative stress</li><li>Balances sebum production</li><li>Improves microcirculation</li></ul>',
                'effects_mk' => '<ul><li>Ја стабилизира липидната бариера</li><li>Го намалува оксидативниот стрес</li><li>Ја балансира себумската продукција</li><li>Ја подобрува микроциркулацијата</li></ul>',
                'suitable_for_en' => '<ul><li>Dry skin</li><li>Combination skin</li><li>Oily skin</li><li>Tired, dull skin</li><li>Skin exposed to stress</li></ul>',
                'suitable_for_mk' => '<ul><li>Сува кожа</li><li>Комбинирана кожа</li><li>Мрсна кожа</li><li>Уморна кожа без сјај</li><li>Кожа изложена на стрес</li></ul>',
                'note_en' => '<p>This is a fundamental treatment for long-term skin stability.</p>',
                'note_mk' => '<p>Ова е основен третман за долгорочна стабилност на кожата.</p>',
                'price_from' => 3900,
                'price_to' => 4500,
                'sort_order' => 2,
            ],
            [
                'name_en' => 'DOCTOR BABOR LIFT & FIRM',
                'name_mk' => 'DOCTOR BABOR LIFT & FIRM',
                'subtitle_en' => 'Structural firming and anti-aging protocol',
                'subtitle_mk' => 'Структурно зацврстување и анти-ејџ протокол',
                'description_en' => '<p>This treatment is based on medically inspired formulas with high concentration of active ingredients.</p>',
                'description_mk' => '<p>Овој третман е базиран на медицински инспирирани формули со висока концентрација на активни состојки.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => '<ul><li>Loss of tone</li><li>Reduced elasticity</li><li>Fine and medium-deep lines</li><li>Skin 35+</li></ul>',
                'indications_mk' => '<ul><li>Губење на тонус</li><li>Намалена еластичност</li><li>Фини и средно длабоки линии</li><li>Кожа 35+</li></ul>',
                'components_en' => '<ul><li>Peptide complexes</li><li>Hyaluronic acid</li><li>Amino acids</li><li>Collagen stimulating complexes</li></ul>',
                'components_mk' => '<ul><li>Пептидни комплекси</li><li>Хијалуронска киселина</li><li>Аминокиселини</li><li>Стимулирачки комплекси за колаген</li></ul>',
                'effects_en' => '<ul><li>Improved elasticity</li><li>Visual reduction of wrinkles</li><li>Firming of contours</li><li>Intensive hydration</li></ul>',
                'effects_mk' => '<ul><li>Подобрување на еластичност</li><li>Визуелно намалување на брчки</li><li>Зацврстување на контурите</li><li>Интензивна хидратација</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => '<p>This treatment can be combined with apparatus protocols for more pronounced results.</p>',
                'note_mk' => '<p>Овој третман може да се комбинира со апаратурни протоколи за поизразен резултат.</p>',
                'price_from' => 4000,
                'price_to' => 5500,
                'sort_order' => 3,
            ],
            [
                'name_en' => 'BRIGHT & GLOW',
                'name_mk' => 'BRIGHT & GLOW',
                'subtitle_en' => 'Protocol for pigmentation and radiance',
                'subtitle_mk' => 'Протокол за пигментација и сјај',
                'description_en' => '<p>Targeted treatment for uneven skin tone and photoaging.</p>',
                'description_mk' => '<p>Насочен третман за нерамномерен тен и фотостареење.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => null,
                'indications_mk' => null,
                'components_en' => null,
                'components_mk' => null,
                'effects_en' => '<ul><li>Regulates melanogenesis</li><li>Evens out skin tone</li><li>Improves texture</li><li>Restores natural radiance</li></ul>',
                'effects_mk' => '<ul><li>Регулира меланогенеза</li><li>Изедначува тен</li><li>Ја подобрува текстурата</li><li>Враќа природен сјај</li></ul>',
                'suitable_for_en' => '<ul><li>Pigmentations</li><li>UV damage</li><li>Melasmatic changes (mild forms)</li><li>Tired skin without vitality</li></ul>',
                'suitable_for_mk' => '<ul><li>Пигментации</li><li>УВ оштетување</li><li>Мелазматични промени (благи форми)</li><li>Уморна кожа без виталност</li></ul>',
                'note_en' => '<p>Recommended in a series of 3–6 treatments.</p>',
                'note_mk' => '<p>Се препорачува во серија од 3–6 третмани.</p>',
                'price_from' => 4000,
                'price_to' => 5500,
                'sort_order' => 4,
            ],
            [
                'name_en' => 'CALM & REPAIR',
                'name_mk' => 'CALM & REPAIR',
                'subtitle_en' => 'Protocol for sensitive and reactive skin',
                'subtitle_mk' => 'Протокол за чувствителна и реактивна кожа',
                'description_en' => '<p>Specially developed for compromised skin barrier.</p>',
                'description_mk' => '<p>Специјално развиен за нарушена кожна бариера.</p>',
                'includes_en' => null,
                'includes_mk' => null,
                'indications_en' => '<ul><li>Rosacea-prone skin</li><li>Reactive skin</li><li>Dry and lipid-deficient skin</li><li>Skin under stress</li></ul>',
                'indications_mk' => '<ul><li>Розацеа склона кожа</li><li>Реактивна кожа</li><li>Сува и липидно дефицитарна кожа</li><li>Кожа под стрес</li></ul>',
                'components_en' => '<ul><li>Neuroxyl</li><li>Micro Silver</li><li>Lipid complexes</li></ul>',
                'components_mk' => '<ul><li>Neuroxyl</li><li>Micro Silver</li><li>Липидни комплекси</li></ul>',
                'effects_en' => '<ul><li>Reduction of redness</li><li>Soothing of irritation</li><li>Reduction of tightness</li><li>Barrier stabilization</li></ul>',
                'effects_mk' => '<ul><li>Намалување на црвенило</li><li>Смирување на иритација</li><li>Редукција на затегнатост</li><li>Стабилизација на бариерата</li></ul>',
                'suitable_for_en' => null,
                'suitable_for_mk' => null,
                'note_en' => null,
                'note_mk' => null,
                'price_from' => 4000,
                'price_to' => 5500,
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
