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

        <!-- Fonts - self-hosted, inlined to avoid render-blocking request -->
        <link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/poppins-500.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/poppins-600.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/poppins-700.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/playfair-variable.woff2" as="font" type="font/woff2" crossorigin>

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
            .site-header{position:fixed;top:0;left:0;width:100%;z-index:1000;height:110px}
            .hero-section{min-height:calc(100vh - 110px);height:calc(100vh - 110px);position:relative;overflow:hidden;display:flex;flex-direction:column;contain:layout style}
            .hero-slider{position:relative;width:100%;flex:1;display:flex;align-items:center;justify-content:center;min-height:70vh;overflow:hidden}
            .hero-slide{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;display:flex;align-items:center;justify-content:center}
            .hero-slide.active{opacity:1;visibility:visible}
            /* CLS-safe page loader: fixed position = no layout participation */
            .page-loader{position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(160deg,#1e2d3d,#3D4F5F);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;opacity:1;transition:opacity 0.4s ease;pointer-events:all}
            .page-loader.done{opacity:0;pointer-events:none}
            .loader-logo{width:120px;height:auto;margin-bottom:30px;animation:pulse-logo 2s ease-in-out infinite}
            .loader-spinner{width:50px;height:50px;position:relative}
            .loader-spinner::before,.loader-spinner::after{content:'';position:absolute;border-radius:50%}
            .loader-spinner::before{width:100%;height:100%;border:3px solid rgba(201,168,124,0.2)}
            .loader-spinner::after{width:100%;height:100%;border:3px solid transparent;border-top-color:#c9a87c;animation:spin 1s linear infinite}
            .loader-text{margin-top:20px;color:rgba(255,255,255,0.6);font-size:0.85rem;letter-spacing:2px;text-transform:uppercase}
            @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
            @keyframes pulse-logo{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.7;transform:scale(0.95)}}
            /* Hide SSR-rendered mobile menu before Vue styles load */
            .mobile-menu{opacity:0;visibility:hidden;pointer-events:none}
        </style>

        <!-- Scripts -->
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <!-- CLS-safe loader: position:fixed, fades with opacity only, never removed from DOM -->
        <div class="page-loader" aria-hidden="true">
            <img src="/logo.webp" alt="" class="loader-logo" width="120" height="120" />
            <div class="loader-spinner"></div>
            <span class="loader-text">Loading...</span>
        </div>

        @inertia

        <script>
            window.addEventListener('load', function() {
                document.querySelector('.page-loader').classList.add('done');
            });
        </script>
    </body>
</html>
