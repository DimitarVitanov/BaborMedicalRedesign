<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use Illuminate\Database\Seeder;

class BodyTreatmentsSeeder extends Seeder
{
    public function run(): void
    {
        $category = ServiceCategory::where('slug', 'body-treatments')->first();

        $priceListMk = [
            ['name' => 'Accent Prime на тело', 'price' => 3000, 'price_prefix' => 'Од'],
            ['name' => 'Laser Shape 1 третман', 'price' => 8000],
            ['name' => 'Laser Shape 1 третман ВО ПАКЕТ', 'price' => 6000],
            ['name' => 'EM Contouring 1 регија', 'price' => 1500],
            ['name' => 'Balancer', 'price' => 1500],
            ['name' => 'BHS Третман', 'price' => 2000],
            ['name' => 'Ultraformer тело', 'price' => 18500, 'price_to' => 37000],
        ];

        $priceListEn = [
            ['name' => 'Accent Prime Body', 'price' => 3000, 'price_prefix' => 'From'],
            ['name' => 'Laser Shape 1 treatment', 'price' => 8000],
            ['name' => 'Laser Shape 1 treatment PACKAGE', 'price' => 6000],
            ['name' => 'EM Contouring 1 area', 'price' => 1500],
            ['name' => 'Balancer', 'price' => 1500],
            ['name' => 'BHS Treatment', 'price' => 2000],
            ['name' => 'Ultraformer Body', 'price' => 18500, 'price_to' => 37000],
        ];

        $extraDataMk = [
            'technologies' => [
                'Ultraformer – Високо‑интензивен фокусиран ултразвук (HIFU) кој се користи за затегнување на кожата и подобрување на контурите на телото.',
                'Accent Prime – RF & ултразвук – Комбинирана технологија која користи радиофреквенција и ултразвучна енергија за редукција на масни наслаги и затегнување на кожата.',
                'Бодипрес терапија (Balanser) – Апаратурна лимфна дренажа која ја стимулира циркулацијата и лимфниот систем.',
                'EM Time – мускулна стимулација – Современа технологија за електромагнетна мускулна стимулација која активира длабоки мускулни контракции.',
                'LaserShape – ласерска липолиза – Неинвазивна технологија која користи ласерска енергија за стимулирање на метаболизмот на масните клетки.',
            ],
            'programs' => [
                'Body Contour Program – Комбинација од Accent Prime, лимфна дренажа и LaserShape за обликување на телото.',
                'Anti‑Cellulite Program – Комбинација од RF технологија и лимфна дренажа за подобрување на текстурата на кожата.',
                'Body Tightening Program – Ultraformer протокол за затегнување на кожа и подобрување на тонус.',
            ],
            'individual_plan_points' => [
                'тип на тело',
                'распределба на масно ткиво',
                'квалитет на кожа',
                'лични цели',
            ],
        ];

        $extraDataEn = [
            'technologies' => [
                'Ultraformer – High-intensity focused ultrasound (HIFU) used for skin tightening and improving body contours.',
                'Accent Prime – RF & Ultrasound – Combined technology using radiofrequency and ultrasound energy for fat reduction and skin tightening.',
                'Body Press Therapy (Balanser) – Device-assisted lymphatic drainage that stimulates circulation and the lymphatic system.',
                'EM Time – Muscle Stimulation – Modern electromagnetic muscle stimulation technology that activates deep muscle contractions.',
                'LaserShape – Laser Lipolysis – Non-invasive technology using laser energy to stimulate fat cell metabolism.',
            ],
            'programs' => [
                'Body Contour Program – Combination of Accent Prime, lymphatic drainage and LaserShape for body contouring.',
                'Anti‑Cellulite Program – Combination of RF technology and lymphatic drainage for skin texture improvement.',
                'Body Tightening Program – Ultraformer protocol for skin tightening and improving tone.',
            ],
            'individual_plan_points' => [
                'body type',
                'fat tissue distribution',
                'skin quality',
                'personal goals',
            ],
        ];

        $data = [
            'name_en' => 'Body Treatments',
            'name_mk' => 'Третмани на тело',
            'parent_type' => 'body_treatments',
            'description_en' => 'In our aesthetic center, body treatments are based on modern medical-aesthetic technologies that enable body contour improvement, fat reduction, skin tightening and circulation improvement. Every treatment begins with a brief consultation to select the most appropriate technology or combination of procedures. Our approach is gradual and program-based – instead of one-time treatments, we recommend a series of procedures for stable and long-term results.',
            'description_mk' => 'Во нашиот естетски центар, третманите на тело се базираат на современи медицинско‑естетски технологии кои овозможуваат подобрување на контурата на телото, намалување на масни наслаги, затегнување на кожата и подобрување на циркулацијата. Секој третман започнува со кратка консултација, со цел да се избере најсоодветната технологија или комбинација на процедури. Нашиот пристап е постепен и програмски – наместо еднократни третмани, препорачуваме серија процедури за стабилен и долгорочен резултат.',
            'display_type' => 'cards',
            'is_active' => true,
            'price_list_items_mk' => $priceListMk,
            'price_list_items_en' => $priceListEn,
            'extra_data_mk' => $extraDataMk,
            'extra_data_en' => $extraDataEn,
        ];

        if (!$category) {
            $data['slug'] = 'body-treatments';
            $data['sort_order'] = 4;
            ServiceCategory::create($data);
        } else {
            $category->update($data);
        }
    }
}
