<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="loading">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title inertia>{{ config('app.name', 'Babor Medical') }}</title>
        
        <!-- Favicon -->
        <link rel="icon" type="image/webp" href="{{ asset('favicon.webp') }}">
        <link rel="apple-touch-icon" href="{{ asset('logo.webp') }}">

        <!-- Fonts - Async loading to prevent render blocking -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></noscript>

        <!-- Page Loader Styles (inline for instant load) -->
        <style>
            html.loading,
            html.loading body {
                overflow: hidden !important;
                height: 100% !important;
            }
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(160deg, #1e2d3d, #3D4F5F);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                transition: opacity 0.5s ease, visibility 0.5s ease;
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
        </style>

        <!-- Scripts -->
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <!-- Page Loader -->
        <div id="page-loader" class="page-loader">
            <img src="/logo.webp" alt="Babor Medical" class="loader-logo" />
            <div class="loader-spinner"></div>
            <span class="loader-text">Loading...</span>
        </div>

        @inertia

        <script>
            window.addEventListener('load', function() {
                setTimeout(function() {
                    var loader = document.getElementById('page-loader');
                    if (loader) {
                        loader.classList.add('hidden');
                        document.documentElement.classList.remove('loading');
                        setTimeout(function() {
                            loader.remove();
                        }, 500);
                    }
                }, 500);
            });
        </script>
    </body>
</html>
