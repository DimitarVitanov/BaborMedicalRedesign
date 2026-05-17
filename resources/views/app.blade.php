<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Favicon -->
        <link rel="icon" type="image/webp" href="{{ asset('favicon.webp') }}">
        <link rel="apple-touch-icon" href="{{ asset('logo.webp') }}">

        <!-- LCP hero image preload -->
        @if(!empty($heroImagePreload))
        <link rel="preload" href="{{ $heroImagePreload }}" as="image" type="image/webp" fetchpriority="high">
        @endif

        <style>
            /* Font declarations - inlined to avoid render-blocking request */
            @font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:optional;src:url('/fonts/poppins-300.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:optional;src:url('/fonts/poppins-400.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:optional;src:url('/fonts/poppins-500.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:optional;src:url('/fonts/poppins-600.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:optional;src:url('/fonts/poppins-700.woff2') format('woff2')}
            @font-face{font-family:'Playfair Display';font-style:normal;font-weight:400 700;font-display:optional;src:url('/fonts/playfair-variable.woff2') format('woff2')}
            @font-face{font-family:'Poppins Fallback';src:local('Arial');size-adjust:112%;ascent-override:92%;descent-override:22%;line-gap-override:0%}
            @font-face{font-family:'Playfair Fallback';src:local('Georgia');size-adjust:112%;ascent-override:90%;descent-override:22%;line-gap-override:0%}
            body{margin:0;background:#1e2d3d;color:#fff;font-family:'Poppins Fallback','Poppins',Arial,sans-serif}
            .site-header{position:fixed;top:0;left:0;width:100%;z-index:1000;height:110px}
            .hero-section{min-height:calc(100vh - 110px);height:calc(100vh - 110px);position:relative;overflow:hidden;display:flex;flex-direction:column;contain:layout style}
            .hero-slider{position:relative;width:100%;flex:1;display:flex;align-items:center;justify-content:center;min-height:70vh;overflow:hidden}
            .hero-slide{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;display:flex;align-items:center;justify-content:center}
            .hero-slide.active{opacity:1;visibility:visible}
            /* Hide SSR-rendered mobile menu before Vue styles load */
            .mobile-menu{opacity:0;visibility:hidden;pointer-events:none}
        </style>

        <!-- Scripts -->
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
