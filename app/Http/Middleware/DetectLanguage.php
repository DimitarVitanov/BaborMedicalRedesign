<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class DetectLanguage
{
    protected array $macedonianIpRanges = [
        '185.225.', // MK range
        '185.71.',  // MK range
        '46.217.',  // MK range
        '77.28.',   // MK range
        '78.157.',  // MK range
        '84.22.',   // MK range
        '91.185.',  // MK range
        '94.156.',  // MK range
        '95.180.',  // MK range
        '109.86.',  // MK range
        '178.79.',  // MK range
        '185.17.',  // MK range
        '188.120.', // MK range
        '193.104.', // MK range
        '194.149.', // MK range
        '195.26.',  // MK range
        '213.135.', // MK range
        '217.16.',  // MK range
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $locale = $this->detectLocale($request);
        
        App::setLocale($locale);
        session(['locale' => $locale]);
        
        return $next($request);
    }

    protected function detectLocale(Request $request): string
    {
        if ($request->has('lang') && in_array($request->get('lang'), ['en', 'mk'])) {
            session(['locale' => $request->get('lang')]);
            return $request->get('lang');
        }

        if (session()->has('locale')) {
            return session('locale');
        }

        $ip = $request->ip();
        
        if ($this->isMacedonianIp($ip)) {
            return 'mk';
        }

        return 'en';
    }

    protected function isMacedonianIp(string $ip): bool
    {
        foreach ($this->macedonianIpRanges as $range) {
            if (str_starts_with($ip, $range)) {
                return true;
            }
        }
        
        return false;
    }
}
