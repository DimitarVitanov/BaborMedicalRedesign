<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="loading">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Favicon -->
        <link rel="icon" type="image/webp" href="{{ asset('favicon.webp') }}">
        <link rel="apple-touch-icon" href="{{ asset('logo.webp') }}">

        <!-- Fonts - self-hosted -->
        <link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/poppins-600.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/playfair-variable.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="stylesheet" href="/fonts/fonts.css">

        <!-- Page Loader Styles (inline for instant load) -->
        <style>
            html.loading body {
                overflow-y: scroll !important;
            }
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(160deg, #1e2d3d, #3D4F5F);
                display: none;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }
            .page-loader.hidden {
                opacity: 0;
                visibility: hidden;
            }
            .loader-logo {
                width: 120px;
                height: auto;
                margin-bottom: 30px;
                animation: pulse-logo 2s ease-in-out infinite;
            }
            .loader-spinner {
                width: 50px;
                height: 50px;
                position: relative;
            }
            .loader-spinner::before,
            .loader-spinner::after {
                content: '';
                position: absolute;
                border-radius: 50%;
            }
            .loader-spinner::before {
                width: 100%;
                height: 100%;
                border: 3px solid rgba(201, 168, 124, 0.2);
            }
            .loader-spinner::after {
                width: 100%;
                height: 100%;
                border: 3px solid transparent;
                border-top-color: #c9a87c;
                animation: spin 1s linear infinite;
            }
            .loader-text {
                margin-top: 20px;
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.85rem;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse-logo {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(0.95); }
            }
            /* Hide SSR-rendered mobile menu before Vue styles load */
            .mobile-menu {
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
            }
        </style>

        <!-- Scripts -->
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <!-- Page Loader (hidden by default, shown via JS to avoid blocking crawlers) -->
        <div id="page-loader" class="page-loader">
            <img src="/logo.webp" alt="Babor Medical" class="loader-logo" />
            <div class="loader-spinner"></div>
            <span class="loader-text">Loading...</span>
        </div>

        @inertia

        <script>
            // Show loader immediately via JS (crawlers without JS won't see it)
            (function() {
                var loader = document.getElementById('page-loader');
                if (loader) loader.style.display = 'flex';
            })();
            window.addEventListener('load', function() {
                var loader = document.getElementById('page-loader');
                if (loader) {
                    loader.classList.add('hidden');
                    document.documentElement.classList.remove('loading');
                    setTimeout(function() {
                        loader.remove();
                    }, 300);
                }
            });
        </script>
    </body>
</html>
