<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicePageController extends Controller
{
    public function cosmetology(Request $request)
    {
        $locale = $request->get('lang', session('locale', 'en'));
        session(['locale' => $locale]);

        $category = ServiceCategory::active()
            ->where('slug', 'babor-treatments')
            ->with(['activeItems'])
            ->first();

        $categories = collect();
        if ($category) {
            $categories = collect([[
                'id' => $category->id,
                'name' => $category->getTranslated('name', $locale),
                'description' => $category->getTranslated('description', $locale),
                'slug' => $category->slug,
                'items' => $category->activeItems->map(function ($item) use ($locale) {
                    return [
                        'id' => $item->id,
                        'name' => $item->getTranslated('name', $locale),
                        'subtitle' => $item->getTranslated('subtitle', $locale),
                        'description' => $item->getTranslated('description', $locale),
                        'includes' => $item->getTranslated('includes', $locale),
                        'indications' => $item->getTranslated('indications', $locale),
                        'components' => $item->getTranslated('components', $locale),
                        'effects' => $item->getTranslated('effects', $locale),
                        'suitable_for' => $item->getTranslated('suitable_for', $locale),
                        'note' => $item->getTranslated('note', $locale),
                        'price' => $item->price,
                        'price_from' => $item->price_from,
                        'price_to' => $item->price_to,
                    ];
                }),
            ]]);
        }

        $pageTitle = $locale === 'mk' ? 'BABOR ТРЕТМАНИ' : 'BABOR TREATMENTS';
        $pageSubtitle = $locale === 'mk'
            ? 'Професионална нега со медицинска прецизност'
            : 'Professional care with medical precision';

        return Inertia::render('Services/CategoryPage', [
            'categories' => $categories,
            'parentType' => 'cosmetology',
            'pageTitle' => $pageTitle,
            'pageSubtitle' => $pageSubtitle,
        ]);
    }

    public function laserAesthetic(Request $request)
    {
        $locale = $request->get('lang', session('locale', 'en'));
        session(['locale' => $locale]);

        $category = ServiceCategory::active()
            ->where('slug', 'laser-treatments')
            ->with(['activeItems'])
            ->first();

        $categories = collect();
        if ($category) {
            $categories = collect([[
                'id' => $category->id,
                'name' => $category->getTranslated('name', $locale),
                'description' => $category->getTranslated('description', $locale),
                'slug' => $category->slug,
                'items' => $category->activeItems->map(function ($item) use ($locale) {
                    return [
                        'id' => $item->id,
                        'name' => $item->getTranslated('name', $locale),
                        'subtitle' => $item->getTranslated('subtitle', $locale),
                        'description' => $item->getTranslated('description', $locale),
                        'includes' => $item->getTranslated('includes', $locale),
                        'indications' => $item->getTranslated('indications', $locale),
                        'components' => $item->getTranslated('components', $locale),
                        'effects' => $item->getTranslated('effects', $locale),
                        'suitable_for' => $item->getTranslated('suitable_for', $locale),
                        'note' => $item->getTranslated('note', $locale),
                        'price' => $item->price,
                        'price_from' => $item->price_from,
                        'price_to' => $item->price_to,
                        'url' => $item->url,
                    ];
                }),
            ]]);
        }

        $pageTitle = $locale === 'mk' ? 'Ласерски третмани' : 'Laser Treatments';
        $pageSubtitle = $locale === 'mk'
            ? 'Прецизна технологија. Персонализирани протоколи. Долгорочни резултати.'
            : 'Precise technology. Personalized protocols. Long-term results.';

        $extraData = $category ? $category->getTranslated('extra_data', $locale) : [];

        return Inertia::render('Services/LaserPage', [
            'categories' => $categories,
            'pageTitle' => $pageTitle,
            'pageSubtitle' => $pageSubtitle,
            'extraData' => $extraData ?: [],
        ]);
    }

    public function injectableMethods(Request $request)
    {
        $locale = $request->get('lang', session('locale', 'en'));
        session(['locale' => $locale]);

        $category = ServiceCategory::active()
            ->where('slug', 'injectable-methods')
            ->with(['activeItems'])
            ->first();

        $categories = collect();
        if ($category) {
            $categories = collect([[
                'id' => $category->id,
                'name' => $category->getTranslated('name', $locale),
                'description' => $category->getTranslated('description', $locale),
                'slug' => $category->slug,
                'items' => $category->activeItems->map(function ($item) use ($locale) {
                    return [
                        'id' => $item->id,
                        'name' => $item->getTranslated('name', $locale),
                        'subtitle' => $item->getTranslated('subtitle', $locale),
                        'description' => $item->getTranslated('description', $locale),
                        'includes' => $item->getTranslated('includes', $locale),
                        'indications' => $item->getTranslated('indications', $locale),
                        'components' => $item->getTranslated('components', $locale),
                        'effects' => $item->getTranslated('effects', $locale),
                        'suitable_for' => $item->getTranslated('suitable_for', $locale),
                        'note' => $item->getTranslated('note', $locale),
                        'price' => $item->price,
                        'price_from' => $item->price_from,
                        'price_to' => $item->price_to,
                        'url' => $item->url,
                    ];
                }),
            ]]);
        }

        $pageTitle = $locale === 'mk' ? 'Инјектбилни методи' : 'Injectable Methods';
        $pageSubtitle = $locale === 'mk'
            ? 'Прецизна апликација. Биолошка регенерација. Контролирана естетика.'
            : 'Precise application. Biological regeneration. Controlled aesthetics.';

        $extraData = $category ? $category->getTranslated('extra_data', $locale) : [];

        return Inertia::render('Services/InjectablePage', [
            'categories' => $categories,
            'pageTitle' => $pageTitle,
            'pageSubtitle' => $pageSubtitle,
            'extraData' => $extraData ?: [],
        ]);
    }
}
