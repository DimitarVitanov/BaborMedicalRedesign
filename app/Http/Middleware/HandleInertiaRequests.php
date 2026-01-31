<?php

namespace App\Http\Middleware;

use App\Models\Location;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = session('locale', 'en');
        
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => app()->getLocale(),
            'availableLocales' => ['en', 'mk'],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'sharedLocations' => fn () => Location::active()->ordered()->get()->map(function ($location) use ($locale) {
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
                ];
            }),
            'sharedSocialLinks' => fn () => Setting::byGroup('social')->get()->pluck('value_en', 'key'),
        ];
    }
}
