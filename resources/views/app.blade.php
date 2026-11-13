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

        <!-- Above-the-fold fonts for the current locale's script. The display serif uses
             font-display:optional (never swaps late = no layout shift), so it must arrive early. -->
        @php($fontSubset = app()->getLocale() === 'mk' ? 'cyrillic' : 'latin')
        <link rel="preload" href="/fonts/noto-serif-display-{{ $fontSubset }}.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/noto-serif-display-italic-{{ $fontSubset }}.woff2" as="font" type="font/woff2" crossorigin>
        @if($fontSubset === 'cyrillic')
        {{-- Brand names in headlines (Alma Soprano, BABOR...) are latin even on MK pages --}}
        <link rel="preload" href="/fonts/noto-serif-display-latin.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/noto-serif-display-italic-latin.woff2" as="font" type="font/woff2" crossorigin>
        @endif
        {{-- Both Manrope subsets are needed on every page (МК/EN switcher, mixed-script UI);
             a late cyrillic load caused a visible font-swap layout shift (CLS). --}}
        <link rel="preload" href="/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/fonts/manrope-cyrillic.woff2" as="font" type="font/woff2" crossorigin>

        <script>document.documentElement.classList.add('js')</script>
        <!-- Don't paint a half-parsed hero (avoids layout shift); the marker sits at the end of the hero.
             Chrome-only hint, ignored elsewhere. -->
        <link rel="expect" href="#bm-above-fold" blocking="render">

        <style>
            /* Public site fonts (variable, latin + cyrillic subsets) - inlined to avoid a render-blocking request */
            @font-face{font-family:'Noto Serif Display';font-style:normal;font-weight:300 700;font-display:optional;src:url('/fonts/noto-serif-display-latin.woff2') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
            @font-face{font-family:'Noto Serif Display';font-style:normal;font-weight:300 700;font-display:optional;src:url('/fonts/noto-serif-display-cyrillic.woff2') format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}
            @font-face{font-family:'Noto Serif Display';font-style:italic;font-weight:300 700;font-display:optional;src:url('/fonts/noto-serif-display-italic-latin.woff2') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
            @font-face{font-family:'Noto Serif Display';font-style:italic;font-weight:300 700;font-display:optional;src:url('/fonts/noto-serif-display-italic-cyrillic.woff2') format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}
            @font-face{font-family:'Manrope';font-style:normal;font-weight:300 700;font-display:swap;src:url('/fonts/manrope-latin.woff2') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
            @font-face{font-family:'Manrope';font-style:normal;font-weight:300 700;font-display:swap;src:url('/fonts/manrope-cyrillic.woff2') format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}
            /* Metric-matched fallbacks keep the font swap from shifting layout */
            @font-face{font-family:'BM Serif Fallback';src:local('Georgia');size-adjust:94%;ascent-override:106%;descent-override:29%;line-gap-override:0%}
            @font-face{font-family:'BM Sans Fallback';src:local('Arial');size-adjust:104%;ascent-override:103%;descent-override:29%;line-gap-override:0%}
            /* Admin panel fonts */
            @font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:optional;src:url('/fonts/poppins-300.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:optional;src:url('/fonts/poppins-400.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:optional;src:url('/fonts/poppins-500.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:optional;src:url('/fonts/poppins-600.woff2') format('woff2')}
            @font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:optional;src:url('/fonts/poppins-700.woff2') format('woff2')}
            @font-face{font-family:'Playfair Display';font-style:normal;font-weight:400 700;font-display:optional;src:url('/fonts/playfair-variable.woff2') format('woff2')}
            @font-face{font-family:'Poppins Fallback';src:local('Arial');size-adjust:112%;ascent-override:92%;descent-override:22%;line-gap-override:0%}
            @font-face{font-family:'Playfair Fallback';src:local('Georgia');size-adjust:112%;ascent-override:90%;descent-override:22%;line-gap-override:0%}
            /* Critical first-paint styles (before the CSS bundle arrives) */
            body{margin:0;background:#160a0e;color:#f6eee6}
            .bm{font-family:'Manrope','BM Sans Fallback',Arial,sans-serif}
            .bm-header{position:fixed;top:0;left:0;right:0;z-index:1000}
            .bm-hero{min-height:100svh;position:relative;overflow:hidden;background:#160a0e}
            /* Keep the SSR-rendered mobile menu hidden before component styles load */
            .bm-mmenu{visibility:hidden}
        </style>

        <!-- CSS first, then scripts. Include the current page component so its
             scoped CSS chunk loads in <head> instead of after hydration (FOUC fix) -->
        @vite(['resources/css/app.css', 'resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @routes
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
