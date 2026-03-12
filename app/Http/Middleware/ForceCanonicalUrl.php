<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ForceCanonicalUrl
{
    public function handle(Request $request, Closure $next)
    {
        $host = $request->getHost();

        // Redirect www to non-www
        if (str_starts_with($host, 'www.')) {
            $url = $request->getScheme() . '://' . substr($host, 4) . $request->getRequestUri();
            return redirect($url, 301);
        }

        return $next($request);
    }
}
