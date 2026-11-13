<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'НАШИ УСЛУГИ' : 'OUR SERVICES',
    title: locale.value === 'mk' ? 'Изберете Категорија' : 'Choose a Category',
    subtitle: locale.value === 'mk' 
        ? 'Откријте ги нашите професионални третмани за убавина и подмладување'
        : 'Discover our professional beauty and rejuvenation treatments',
}));

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MedicalBusiness',
                '@id': 'https://babormedical.com/#organization',
                'name': 'Babor Medical',
                'url': 'https://babormedical.com',
                'logo': 'https://babormedical.com/logo.webp',
                'telephone': '+389 75 340 933',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$'
            },
            {
                '@type': 'ItemList',
                'name': locale.value === 'mk' ? 'Естетски услуги на Babor Medical' : 'Babor Medical Aesthetic Services',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': locale.value === 'mk' ? 'Козметологија' : 'Cosmetology', 'url': 'https://babormedical.com/services/cosmetology' },
                    { '@type': 'ListItem', 'position': 2, 'name': locale.value === 'mk' ? 'Ласерско естетски третмани' : 'Laser Aesthetic Treatments', 'url': 'https://babormedical.com/services/laser-aesthetic' },
                    { '@type': 'ListItem', 'position': 3, 'name': locale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods', 'url': 'https://babormedical.com/services/injectable-methods' },
                    { '@type': 'ListItem', 'position': 4, 'name': locale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments', 'url': 'https://babormedical.com/services/body-treatments' }
                ]
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои естетски услуги ги нуди Babor Medical?' : 'What aesthetic services does Babor Medical offer?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical нуди четири категории на услуги: козметологија со BABOR протоколи, ласерско естетски третмани (ласерска епилација, подмладување, пигментации), инјектибилни методи (филери, ботокс, биостимулација, мезотерапија) и апаратурни третмани на тело (обликување, затегнување, антицелулит).' : 'Babor Medical offers four service categories: cosmetology with BABOR protocols, laser aesthetic treatments (hair removal, rejuvenation, pigmentation), injectable methods (fillers, botox, biostimulation, mesotherapy) and body treatments (contouring, tightening, anti-cellulite).'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Како да изберам вистински третман?' : 'How do I choose the right treatment?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Закажете бесплатна консултација во Babor Medical каде нашите специјалисти ќе ги проценат вашите потреби и ќе ви препорачаат најсоодветен третман. Контактирајте нè на +389 75 340 933.' : 'Book a free consultation at Babor Medical where our specialists will assess your needs and recommend the most suitable treatment. Contact us at +389 75 340 933.'
                        }
                    }
                ]
            }
        ]
    });
});

const categories = computed(() => [
    {
        id: 'cosmetology',
        name: locale.value === 'mk' ? 'Козметологија' : 'Cosmetology',
        description: locale.value === 'mk' 
            ? 'Професионални козметички третмани за совршена кожа и природна убавина'
            : 'Professional cosmetic treatments for perfect skin and natural beauty',
        href: '/services/cosmetology',
        icon: 'sparkles',
    },
    {
        id: 'laser',
        name: locale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments',
        description: locale.value === 'mk' 
            ? 'Напредни ласерски третмани за подмладување, депилација и корекција на кожата'
            : 'Advanced laser treatments for rejuvenation, hair removal and skin correction',
        href: '/services/laser-aesthetic',
        icon: 'laser',
    },
    {
        id: 'injectable',
        name: locale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods',
        description: locale.value === 'mk' 
            ? 'Прецизна апликација, биолошка регенерација и контролирана естетика'
            : 'Precise application, biological regeneration and controlled aesthetics',
        href: '/services/injectable-methods',
        icon: 'injectable',
    },
    {
        id: 'body',
        name: locale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments',
        description: locale.value === 'mk' 
            ? 'Апаратурна естетика за обликување на телото и подобрување на квалитетот на кожата'
            : 'Advanced aesthetics for body contouring and skin quality improvement',
        href: '/services/body-treatments',
        icon: 'body',
    },
]);

// Presentation-only helpers
const pad = (n) => String(n).padStart(2, '0');
const iconFor = (icon) => (icon === 'sparkles' ? 'sparkle' : icon);
// "Choose a Category" -> ["Choose a", "Category"] so the last word can render as the italic accent line
const splitLast = (text) => {
    const words = String(text || '').trim().split(/\s+/);
    return words.length > 1 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : [String(text || ''), ''];
};
const heroTitle = computed(() => splitLast(content.value.title));
</script>

<template>
    <Head>
        <title>{{ locale === 'mk' ? 'Услуги – Ласерски третмани, Козметологија, Инјектибилни методи | Babor Medical' : 'Services – Laser Treatments, Cosmetology, Injectable Methods | Babor Medical' }}</title>
        <meta name="description" :content="locale === 'mk' ? 'Професионални естетски услуги во Babor Medical Скопје: ласерски третмани, козметологија, инјектибилни методи и третмани на тело.' : 'Professional aesthetic services at Babor Medical Skopje: laser treatments, cosmetology, injectable methods and body treatments.'" />
        <meta name="keywords" :content="locale === 'mk' ? 'услуги скопје, естетски третмани, ласерски третмани скопје, козметологија, инјектибилни методи, третмани на тело, Babor Medical' : 'services skopje, aesthetic treatments, laser treatments skopje, cosmetology, injectable methods, body treatments, Babor Medical'" />
        <meta name="author" content="Babor Medical" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" :content="locale === 'mk' ? 'Услуги – Babor Medical Скопје' : 'Services – Babor Medical Skopje'" />
        <meta property="og:description" :content="locale === 'mk' ? 'Професионални естетски услуги во Babor Medical Скопје.' : 'Professional aesthetic services at Babor Medical Skopje.'" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://babormedical.com/services" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="locale === 'mk' ? 'Услуги – Babor Medical' : 'Services – Babor Medical'" />
        <meta name="twitter:description" :content="locale === 'mk' ? 'Професионални естетски услуги во Babor Medical Скопје.' : 'Professional aesthetic services at Babor Medical Skopje.'" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/services" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <!-- Hero -->
        <PageHero
            :eyebrow="content.badge"
            :title="heroTitle[0]"
            :accent="heroTitle[1]"
            :crumb="locale === 'mk' ? 'Услуги' : 'Services'"
            align="center"
        >
            <nav class="sv-jump" :aria-label="locale === 'mk' ? 'Категории' : 'Categories'">
                <a v-for="(category, index) in categories" :key="`jump-${category.id}`" :href="category.href" class="sv-jump__chip">
                    <span class="sv-jump__idx">{{ pad(index + 1) }}</span>
                    <Icon :name="iconFor(category.icon)" :size="16" :stroke="1.5" />
                    <span>{{ category.name }}</span>
                </a>
            </nav>
        </PageHero>

        <!-- Crossing ribbons -->
        <div class="sv-ribbons" aria-hidden="true">
            <Marquee :items="categories.map((c) => c.name)" variant="wine" :tilt="-3" :duration="40" />
            <Marquee :items="categories.map((c) => c.name)" variant="outline" :tilt="2.2" :duration="46" reverse />
        </div>

        <!-- Categories -->
        <section class="sv-cats bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <div class="sv-cats__head">
                    <div class="sv-cats__intro">
                        <span class="bm-eyebrow" data-reveal>{{ content.badge }}</span>
                        <ScrollWords :text="content.subtitle" tag="p" class="sv-cats__lede" />
                    </div>
                    <span class="sv-cats__count bm-numeral" aria-hidden="true" data-reveal style="--d: 0.15s">{{ pad(categories.length) }}</span>
                </div>

                <div class="sv-list">
                    <a
                        v-for="(category, index) in categories"
                        :key="category.id"
                        :href="category.href"
                        class="sv-row"
                        data-reveal
                        :style="{ '--d': `${index * 0.08}s` }"
                    >
                        <span class="sv-row__num bm-numeral" aria-hidden="true">{{ pad(index + 1) }}</span>
                        <div class="sv-row__main">
                            <span class="sv-row__icon"><Icon :name="iconFor(category.icon)" :size="22" :stroke="1.4" /></span>
                            <h2 class="sv-row__name">{{ category.name }}</h2>
                        </div>
                        <p class="sv-row__desc">{{ category.description }}</p>
                        <span class="sv-row__cta">
                            <span class="sv-row__cta-label">{{ locale === 'mk' ? 'Погледни Третмани' : 'View Treatments' }}</span>
                            <span class="sv-row__cta-icon"><Icon name="arrow-right" :size="20" :stroke="1.6" /></span>
                        </span>
                    </a>
                </div>

                <!-- CTA -->
                <div class="sv-cta bm-wine bm-grain" data-reveal>
                    <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                    <div class="sv-cta__inner">
                        <h2 class="bm-h2 sv-cta__title"><MaskText :text="locale === 'mk' ? 'Не сте сигурни кој третман е за вас?' : 'Not sure which treatment is for you?'" /></h2>
                        <div class="sv-cta__side">
                            <p class="bm-lead sv-cta__text">{{ locale === 'mk' ? 'Закажете бесплатна консултација со нашите експерти' : 'Book a free consultation with our experts' }}</p>
                            <a href="/contact" class="bm-btn sv-cta__btn">
                                <span>{{ locale === 'mk' ? 'Закажи Консултација' : 'Book Consultation' }}</span>
                                <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                            </a>
                        </div>
                    </div>
                    <div class="sv-cta__seal" aria-hidden="true">
                        <RotatingBadge :size="140" />
                    </div>
                </div>
            </div>
        </section>

    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero quick-jump chips ---------- */
.sv-jump {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
.sv-jump__chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px 10px 12px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
    background: rgba(246, 238, 230, 0.03);
    color: var(--on-dark);
    font-size: 0.84rem;
    font-weight: 500;
    line-height: 1.3;
    transition: background 0.5s var(--ease-out), border-color 0.5s, color 0.5s;
}
.sv-jump__chip svg { color: var(--gold-300); flex: none; transition: color 0.5s; }
.sv-jump__idx {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    color: var(--gold-300);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    flex: none;
    transition: background 0.5s, color 0.5s;
}
.sv-jump__chip:hover,
.sv-jump__chip:focus-visible {
    background: var(--beige-200);
    border-color: var(--beige-200);
    color: var(--wine-800);
}
.sv-jump__chip:hover svg { color: var(--wine-600); }
.sv-jump__chip:hover .sv-jump__idx { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); }

/* ---------- Ribbons ---------- */
.sv-ribbons {
    position: relative;
    z-index: 1;
    display: grid;
    background: var(--wine-950);
    padding: clamp(24px, 4vw, 56px) 0 clamp(80px, 9vw, 130px);
    margin-top: -1px;
    overflow: hidden;
}
.sv-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- Categories ---------- */
.sv-cats { padding-bottom: clamp(64px, 8vw, 120px); }
.sv-cats__head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: clamp(44px, 6vw, 84px);
}
.sv-cats__intro { display: grid; gap: 26px; max-width: 980px; }
.sv-cats__lede {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.9rem, 3.9vw, 3.7rem);
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: var(--ink);
}
.sv-cats__count {
    display: block;
    flex: none;
    font-size: clamp(4rem, 8vw, 7.5rem);
    line-height: 0.8;
}

.sv-list { border-top: 1px solid var(--line-light); }

.sv-row {
    position: relative;
    display: grid;
    grid-template-columns: clamp(150px, 17vw, 260px) minmax(0, 1.15fr) minmax(0, 1fr) auto;
    gap: clamp(20px, 3vw, 52px);
    align-items: center;
    padding: clamp(34px, 4.4vw, 64px) clamp(12px, 2.4vw, 40px);
    border-bottom: 1px solid var(--line-light);
    color: var(--ink);
    isolation: isolate;
    overflow: hidden;
    transition: color 0.7s var(--ease-out);
}
/* burgundy fill rises from the bottom */
.sv-row::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(70% 140% at 12% 100%, rgba(201, 162, 122, 0.22), transparent 60%),
        radial-gradient(90% 160% at 100% 0%, rgba(140, 42, 72, 0.65), transparent 62%),
        linear-gradient(100deg, var(--wine-800), var(--wine-700));
    clip-path: inset(100% 0 0 0);
    transition: clip-path 0.85s var(--ease-out);
}
.sv-row:hover, .sv-row:focus-visible { color: var(--cream-50); }
.sv-row:hover::before, .sv-row:focus-visible::before { clip-path: inset(0 0 0 0); }
.sv-row:focus-visible { outline: 2px solid var(--wine-600); outline-offset: -2px; }

.sv-row__num {
    font-size: clamp(5rem, 10.5vw, 10rem);
    line-height: 0.82;
    letter-spacing: -0.04em;
    transition: color 0.7s var(--ease-out), -webkit-text-stroke-color 0.7s, transform 0.9s var(--ease-out);
}
.sv-row:hover .sv-row__num {
    color: rgba(217, 185, 149, 0.14);
    -webkit-text-stroke-color: rgba(217, 185, 149, 0.85);
    transform: translateX(8px);
}

.sv-row__main { display: grid; gap: 18px; justify-items: start; }
.sv-row__icon {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid var(--line-light);
    color: var(--wine-600);
    transition: border-color 0.7s, color 0.7s, transform 0.9s var(--ease-out);
}
.sv-row:hover .sv-row__icon { border-color: rgba(217, 185, 149, 0.45); color: var(--gold-300); transform: rotate(-14deg); }

.sv-row__name {
    font-size: clamp(2rem, 3.7vw, 3.5rem);
    font-weight: 300;
    line-height: 1.04;
    letter-spacing: -0.02em;
    transition: transform 0.9s var(--ease-out);
}
.sv-row:hover .sv-row__name { transform: translateX(10px); }

.sv-row__desc {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--ink-soft);
    max-width: 420px;
    transition: color 0.7s;
}
.sv-row:hover .sv-row__desc { color: rgba(246, 238, 230, 0.78); }

.sv-row__cta { display: inline-flex; align-items: center; gap: 16px; }
.sv-row__cta-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    max-width: 9.5em;
    text-align: right;
    line-height: 1.5;
}
.sv-row__cta-icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    flex: none;
    transition: background 0.6s, color 0.6s, transform 0.9s var(--ease-out);
}
.sv-row:hover .sv-row__cta-icon { background: var(--beige-200); color: var(--wine-800); transform: rotate(-45deg) scale(1.06); }

/* ---------- CTA card ---------- */
.sv-cta {
    position: relative;
    margin-top: clamp(72px, 9vw, 130px);
    border-radius: var(--radius-lg);
    padding: clamp(96px, 8vw, 116px) clamp(24px, 6vw, 88px) clamp(44px, 6vw, 96px);
    overflow: visible;
    isolation: isolate;
    box-shadow: 0 60px 90px -60px rgba(56, 19, 34, 0.7);
}
.sv-cta .bm-aura { border-radius: inherit; }
.sv-cta.bm-grain::after { border-radius: inherit; }
.sv-cta__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: clamp(32px, 5vw, 80px);
    align-items: end;
}
.sv-cta__title { max-width: 12em; }
.sv-cta__side { display: grid; gap: 28px; justify-items: start; padding-bottom: 6px; }
.sv-cta__text { color: var(--on-dark-muted); max-width: 420px; }
.sv-cta__seal {
    position: absolute;
    z-index: 2;
    right: clamp(24px, 5vw, 72px);
    top: -70px;
}

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .sv-row { grid-template-columns: clamp(120px, 15vw, 170px) minmax(0, 1fr) auto; }
    .sv-row__desc { grid-column: 2; grid-row: 2; }
    .sv-row__num { grid-row: 1 / span 2; }
    .sv-row__cta { grid-column: 3; grid-row: 1 / span 2; }
    .sv-row__cta-label { display: none; }
}
@media (max-width: 991.98px) {
    .sv-cta__inner { grid-template-columns: 1fr; align-items: start; }
    .sv-cta__seal { top: -56px; }
    .sv-cta__seal :deep(.bm-seal) { width: 112px !important; height: 112px !important; }
    .sv-cta__title { padding-right: 90px; }
}
@media (max-width: 767.98px) {
    .sv-row {
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 14px 16px;
        padding: 30px 6px 34px;
    }
    .sv-row__num { grid-column: 1; grid-row: 1; font-size: 4.4rem; }
    .sv-row__main { grid-column: 1 / -1; grid-row: 2; gap: 0; }
    .sv-row__icon { display: none; }
    .sv-row__name { font-size: clamp(1.9rem, 8.4vw, 2.4rem); }
    .sv-row__desc { grid-column: 1 / -1; grid-row: 3; font-size: 0.97rem; }
    .sv-row__cta { grid-column: 2; grid-row: 1; align-self: center; }
    .sv-row__cta-icon { width: 54px; height: 54px; }
    .sv-jump__chip { font-size: 0.8rem; }
    .sv-cats__head { align-items: flex-start; flex-direction: column-reverse; gap: 18px; }
    .sv-cats__count { font-size: 3.6rem; }
    .sv-cta__title { padding-right: 0; }
    .sv-cta { padding-top: 76px; }
}
</style>
