<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Vite::prefetch() removed on purpose: it made every public visitor
        // download the ENTIRE app bundle (admin pages, apexcharts, the rich
        // text editor — ~1.6 MB) at page load, competing with the hero image
        // on slow connections. Pages lazy-load their own chunks on navigation.
    }
}
