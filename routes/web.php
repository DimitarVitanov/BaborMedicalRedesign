<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\HeroSlideController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Models\HeroSlide;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $locale = app()->getLocale();
    $slides = HeroSlide::active()->ordered()->get()->map(function ($slide) use ($locale) {
        return [
            'id' => $slide->id,
            'subtitle' => $slide->getTranslated('subtitle', $locale),
            'title' => $slide->getTranslated('title', $locale),
            'highlight' => $slide->getTranslated('highlight', $locale),
            'description' => $slide->getTranslated('description', $locale),
            'cta_text' => $slide->getTranslated('cta_text', $locale),
            'cta_link' => $slide->cta_link,
            'secondary_text' => $slide->getTranslated('secondary_text', $locale),
            'secondary_link' => $slide->secondary_link,
            'image' => $slide->image,
        ];
    });
    
    $services = \App\Models\Service::active()->ordered()->get()->map(function ($service) use ($locale) {
        return [
            'id' => $service->id,
            'title' => $service->getTranslated('title', $locale),
            'title_mk' => $service->title_mk,
            'description' => $service->getTranslated('description', $locale),
            'description_mk' => $service->description_mk,
            'icon' => $service->icon,
            'link' => $service->link,
        ];
    });
    
    $aboutContent = \App\Models\AboutContent::active()->first();
    $about = $aboutContent ? [
        'title' => $aboutContent->getTranslated('title', $locale),
        'subtitle' => $aboutContent->getTranslated('subtitle', $locale),
        'short_description' => $aboutContent->getTranslated('short_description', $locale),
        'full_content' => $aboutContent->getTranslated('full_content', $locale),
        'image' => $aboutContent->image,
    ] : null;
    
    $equipment = \App\Models\Equipment::active()->ordered()->get()->map(function ($item) use ($locale) {
        return [
            'id' => $item->id,
            'title' => $item->getTranslated('title', $locale),
            'description' => $item->getTranslated('description', $locale),
            'image' => $item->image,
            'link' => $item->link,
            'category' => $item->category,
        ];
    });
    
    return Inertia::render('Welcome', [
        'slides' => $slides,
        'services' => $services,
        'about' => $about,
        'equipment' => $equipment,
    ]);
});

Route::get('/about', function () {
    $locale = request()->get('lang', session('locale', 'en'));
    session(['locale' => $locale]);
    
    $aboutContent = \App\Models\AboutContent::active()->first();
    
    if (!$aboutContent) {
        abort(404);
    }
    
    $about = [
        'title' => $aboutContent->getTranslated('title', $locale),
        'subtitle' => $aboutContent->getTranslated('subtitle', $locale),
        'short_description' => $aboutContent->getTranslated('short_description', $locale),
        'full_content' => $aboutContent->getTranslated('full_content', $locale),
        'image' => $aboutContent->image,
    ];
    
    return Inertia::render('About', [
        'about' => $about,
    ]);
})->name('about');

Route::get('/contact', function () {
    $locale = request()->get('lang', session('locale', 'en'));
    session(['locale' => $locale]);
    
    $locations = \App\Models\Location::active()->ordered()->get()->map(function ($location) use ($locale) {
        return [
            'id' => $location->id,
            'name' => $location->getTranslated('name', $locale),
            'address' => $location->getTranslated('address', $locale),
            'phone' => $location->phone,
            'email' => $location->email,
            'working_hours_weekdays' => $location->getTranslated('working_hours_weekdays', $locale),
            'working_hours_saturday' => $location->getTranslated('working_hours_saturday', $locale),
            'working_hours_sunday' => $location->getTranslated('working_hours_sunday', $locale),
            'show_working_hours' => $location->show_working_hours,
            'map_embed_url' => $location->map_embed_url,
        ];
    });
    
    $settings = \App\Models\Setting::byGroup('social')->get()->pluck('value_en', 'key');
    
    return Inertia::render('Contact', [
        'locations' => $locations,
        'socialLinks' => $settings,
    ]);
})->name('contact');

Route::get('/services', function () {
    $locale = request()->get('lang', session('locale', 'en'));
    session(['locale' => $locale]);
    
    $categories = \App\Models\ServiceCategory::active()->ordered()->with(['activeItems'])->get()->map(function ($category) use ($locale) {
        return [
            'id' => $category->id,
            'name' => $category->getTranslated('name', $locale),
            'description' => $category->getTranslated('description', $locale),
            'slug' => $category->slug,
            'display_type' => $category->display_type,
            'items' => $category->activeItems->map(function ($item) use ($locale) {
                return [
                    'id' => $item->id,
                    'name' => $item->getTranslated('name', $locale),
                    'description' => $item->getTranslated('description', $locale),
                    'price' => $item->price,
                    'price_from' => $item->price_from,
                    'price_to' => $item->price_to,
                    'duration' => $item->duration,
                    'url' => $item->url,
                    'is_expandable' => $item->is_expandable,
                ];
            }),
        ];
    });
    
    return Inertia::render('Services', [
        'categories' => $categories,
    ]);
})->name('services');

Route::get('/lasers', function () {
    $locale = session('locale', 'en');
    
    $equipment = \App\Models\Equipment::active()->ordered()->get()->map(function ($item) use ($locale) {
        return [
            'id' => $item->id,
            'slug' => $item->slug,
            'title' => $item->getTranslated('title', $locale),
            'description' => $item->getTranslated('description', $locale),
            'image' => $item->image,
            'image_desktop_webp' => $item->image_desktop_webp,
            'image_mobile_webp' => $item->image_mobile_webp,
            'category' => $item->category,
        ];
    });
    
    return Inertia::render('Lasers', [
        'equipment' => $equipment,
    ]);
})->name('lasers');

Route::get('/lasers/{equipment:slug}', function (\App\Models\Equipment $equipment) {
    $locale = session('locale', 'en');
    
    $data = [
        'id' => $equipment->id,
        'slug' => $equipment->slug,
        'title' => $equipment->getTranslated('title', $locale),
        'description' => $equipment->getTranslated('description', $locale),
        'detailed_description' => $equipment->getTranslated('detailed_description', $locale),
        'image' => $equipment->image,
        'image_desktop_webp' => $equipment->image_desktop_webp,
        'image_mobile_webp' => $equipment->image_mobile_webp,
        'link' => $equipment->link,
        'category' => $equipment->category,
    ];
    
    return Inertia::render('LaserDetail', [
        'equipment' => $data,
    ]);
})->name('laser.detail');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
Route::post('/contact/submit', [ContactController::class, 'store'])->name('contact.submit');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('hero-slides', [HeroSlideController::class, 'index'])->name('hero-slides.index');
    Route::get('hero-slides/create', [HeroSlideController::class, 'create'])->name('hero-slides.create');
    Route::post('hero-slides', [HeroSlideController::class, 'store'])->name('hero-slides.store');
    Route::get('hero-slides/{heroSlide}/edit', [HeroSlideController::class, 'edit'])->name('hero-slides.edit');
    Route::post('hero-slides/{heroSlide}', [HeroSlideController::class, 'update'])->name('hero-slides.update');
    Route::delete('hero-slides/{heroSlide}', [HeroSlideController::class, 'destroy'])->name('hero-slides.destroy');
    Route::post('hero-slides/update-order', [HeroSlideController::class, 'updateOrder'])->name('hero-slides.update-order');
    
    Route::get('services', [\App\Http\Controllers\Admin\ServiceController::class, 'index'])->name('services.index');
    Route::get('services/create', [\App\Http\Controllers\Admin\ServiceController::class, 'create'])->name('services.create');
    Route::post('services', [\App\Http\Controllers\Admin\ServiceController::class, 'store'])->name('services.store');
    Route::get('services/{service}/edit', [\App\Http\Controllers\Admin\ServiceController::class, 'edit'])->name('services.edit');
    Route::post('services/{service}', [\App\Http\Controllers\Admin\ServiceController::class, 'update'])->name('services.update');
    Route::delete('services/{service}', [\App\Http\Controllers\Admin\ServiceController::class, 'destroy'])->name('services.destroy');
    
    Route::get('about', [\App\Http\Controllers\Admin\AboutContentController::class, 'index'])->name('about.index');
    Route::get('about/{about}/edit', [\App\Http\Controllers\Admin\AboutContentController::class, 'edit'])->name('about.edit');
    Route::post('about/{about}', [\App\Http\Controllers\Admin\AboutContentController::class, 'update'])->name('about.update');
    
    Route::get('newsletter', [\App\Http\Controllers\Admin\NewsletterSubscriberController::class, 'index'])->name('newsletter.index');
    Route::post('newsletter/{subscriber}/toggle', [\App\Http\Controllers\Admin\NewsletterSubscriberController::class, 'toggleActive'])->name('newsletter.toggle');
    Route::delete('newsletter/{subscriber}', [\App\Http\Controllers\Admin\NewsletterSubscriberController::class, 'destroy'])->name('newsletter.destroy');
    
    Route::get('equipment', [\App\Http\Controllers\Admin\EquipmentController::class, 'index'])->name('equipment.index');
    Route::get('equipment/create', [\App\Http\Controllers\Admin\EquipmentController::class, 'create'])->name('equipment.create');
    Route::post('equipment', [\App\Http\Controllers\Admin\EquipmentController::class, 'store'])->name('equipment.store');
    Route::get('equipment/{equipment}/edit', [\App\Http\Controllers\Admin\EquipmentController::class, 'edit'])->name('equipment.edit');
    Route::post('equipment/{equipment}', [\App\Http\Controllers\Admin\EquipmentController::class, 'update'])->name('equipment.update');
    Route::delete('equipment/{equipment}', [\App\Http\Controllers\Admin\EquipmentController::class, 'destroy'])->name('equipment.destroy');
    
    Route::get('service-categories', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'index'])->name('service-categories.index');
    Route::get('service-categories/create', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'create'])->name('service-categories.create');
    Route::post('service-categories', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'store'])->name('service-categories.store');
    Route::get('service-categories/{serviceCategory}/edit', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'edit'])->name('service-categories.edit');
    Route::post('service-categories/{serviceCategory}', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'update'])->name('service-categories.update');
    Route::delete('service-categories/{serviceCategory}', [\App\Http\Controllers\Admin\ServiceCategoryController::class, 'destroy'])->name('service-categories.destroy');
    
    Route::get('service-items', [\App\Http\Controllers\Admin\ServiceItemController::class, 'index'])->name('service-items.index');
    Route::get('service-items/create', [\App\Http\Controllers\Admin\ServiceItemController::class, 'create'])->name('service-items.create');
    Route::post('service-items', [\App\Http\Controllers\Admin\ServiceItemController::class, 'store'])->name('service-items.store');
    Route::get('service-items/{serviceItem}/edit', [\App\Http\Controllers\Admin\ServiceItemController::class, 'edit'])->name('service-items.edit');
    Route::post('service-items/{serviceItem}', [\App\Http\Controllers\Admin\ServiceItemController::class, 'update'])->name('service-items.update');
    Route::delete('service-items/{serviceItem}', [\App\Http\Controllers\Admin\ServiceItemController::class, 'destroy'])->name('service-items.destroy');
    
    Route::get('settings', [SettingController::class, 'index'])->name('settings.index');
    Route::post('settings', [SettingController::class, 'update'])->name('settings.update');
    
    Route::get('contact-messages', [ContactMessageController::class, 'index'])->name('contact-messages.index');
    Route::get('contact-messages/{contactMessage}', [ContactMessageController::class, 'show'])->name('contact-messages.show');
    Route::delete('contact-messages/{contactMessage}', [ContactMessageController::class, 'destroy'])->name('contact-messages.destroy');
    Route::post('contact-messages/{contactMessage}/mark-read', [ContactMessageController::class, 'markAsRead'])->name('contact-messages.mark-read');
    Route::post('contact-messages/{contactMessage}/mark-unread', [ContactMessageController::class, 'markAsUnread'])->name('contact-messages.mark-unread');
    
    Route::get('locations', [\App\Http\Controllers\Admin\LocationController::class, 'index'])->name('locations.index');
    Route::get('locations/create', [\App\Http\Controllers\Admin\LocationController::class, 'create'])->name('locations.create');
    Route::post('locations', [\App\Http\Controllers\Admin\LocationController::class, 'store'])->name('locations.store');
    Route::get('locations/{location}/edit', [\App\Http\Controllers\Admin\LocationController::class, 'edit'])->name('locations.edit');
    Route::post('locations/{location}', [\App\Http\Controllers\Admin\LocationController::class, 'update'])->name('locations.update');
    Route::delete('locations/{location}', [\App\Http\Controllers\Admin\LocationController::class, 'destroy'])->name('locations.destroy');
});

require __DIR__.'/auth.php';
