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

        if (!$category) {
            ServiceCategory::create([
                'name_en' => 'Body Treatments',
                'name_mk' => 'Третмани на тело',
                'slug' => 'body-treatments',
                'parent_type' => 'body_treatments',
                'description_en' => 'In our aesthetic center, body treatments are based on modern medical-aesthetic technologies that enable body contour improvement, fat reduction, skin tightening and circulation improvement. Every treatment begins with a brief consultation to select the most appropriate technology or combination of procedures.',
                'description_mk' => 'Во нашиот естетски центар, третманите на тело се базираат на современи медицинско‑естетски технологии кои овозможуваат подобрување на контурата на телото, намалување на масни наслаги, затегнување на кожата и подобрување на циркулацијата. Секој третман започнува со кратка консултација, со цел да се избере најсоодветната технологија или комбинација на процедури.',
                'display_type' => 'cards',
                'is_active' => true,
                'sort_order' => 4,
                'price_list_items_mk' => $priceListMk,
                'price_list_items_en' => $priceListEn,
            ]);
        } else {
            $category->update([
                'name_en' => 'Body Treatments',
                'name_mk' => 'Третмани на тело',
                'parent_type' => 'body_treatments',
                'description_en' => 'In our aesthetic center, body treatments are based on modern medical-aesthetic technologies that enable body contour improvement, fat reduction, skin tightening and circulation improvement. Every treatment begins with a brief consultation to select the most appropriate technology or combination of procedures.',
                'description_mk' => 'Во нашиот естетски центар, третманите на тело се базираат на современи медицинско‑естетски технологии кои овозможуваат подобрување на контурата на телото, намалување на масни наслаги, затегнување на кожата и подобрување на циркулацијата. Секој третман започнува со кратка консултација, со цел да се избере најсоодветната технологија или комбинација на процедури.',
                'display_type' => 'cards',
                'is_active' => true,
                'price_list_items_mk' => $priceListMk,
                'price_list_items_en' => $priceListEn,
            ]);
        }
    }
}
