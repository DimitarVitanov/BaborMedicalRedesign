<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class DetectLanguage
{
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $this->detectLocale($request);
        
        App::setLocale($locale);
        session(['locale' => $locale]);
        
        return $next($request);
    }

    protected function detectLocale(Request $request): string
    {
        // 1. Check URL parameter first (user explicitly chose language)
        if ($request->has('lang') && in_array($request->get('lang'), ['en', 'mk'])) {
            return $request->get('lang');
        }

        // 2. Check if user already has a session locale
        if (session()->has('locale')) {
            return session('locale');
        }

        // 3. Detect from IP for first-time visitors
        $ip = $this->getClientIp($request);
        
        // Skip detection for local/private IPs
        if ($this->isPrivateIp($ip)) {
            return 'en';
        }
        
        $country = $this->getCountryFromIp($ip);
        
        if ($country === 'MK') {
            return 'mk';
        }

        return 'en';
    }

    protected function getClientIp(Request $request): string
    {
        $ip = $request->header('CF-Connecting-IP') 
            ?? $request->header('X-Forwarded-For')
            ?? $request->ip();
        
        // Handle comma-separated IPs (X-Forwarded-For can have multiple)
        if (str_contains($ip, ',')) {
            $ip = trim(explode(',', $ip)[0]);
        }
        
        return $ip;
    }

    protected function isPrivateIp(string $ip): bool
    {
        return filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false;
    }

    protected function getCountryFromIp(string $ip): ?string
    {
        // Cache the result for 24 hours to avoid repeated API calls
        $cacheKey = 'geoip_' . md5($ip);
        
        return Cache::remember($cacheKey, 86400, function () use ($ip) {
            try {
                // Use ip-api.com (free, no API key needed, 45 requests/minute)
                $response = @file_get_contents("http://ip-api.com/json/{$ip}?fields=countryCode", false, stream_context_create([
                    'http' => ['timeout' => 2]
                ]));
                
                if ($response) {
                    $data = json_decode($response, true);
                    return $data['countryCode'] ?? null;
                }
            } catch (\Exception $e) {
                Log::warning('GeoIP lookup failed: ' . $e->getMessage());
            }
            
            return null;
        });
    }
}
