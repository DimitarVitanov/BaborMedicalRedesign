<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import Counter from '@/Components/Site/Counter.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    categories: Array,
    pageTitle: String,
    pageSubtitle: String,
    extraData: {
        type: Object,
        default: () => ({}),
    },
    priceListPdf: {
        type: String,
        default: null,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const t = (mk, en) => locale.value === 'mk' ? mk : en;

const seoTitle = computed(() => {
    if (locale.value === 'mk') {
        return 'Ласерски третмани и ласерска епилација Скопје | Babor Medical';
    }
    return 'Laser Treatments & Laser Hair Removal Skopje | Babor Medical';
});

const seoDescription = computed(() => {
    if (locale.value === 'mk') {
        return 'Ласерска епилација и ласерски третмани во Скопје со Alma Soprano Titanium. Професионални ласерски третмани за лице и тело во Babor Medical.';
    }
    return 'Laser hair removal and laser treatments in Skopje with Alma Soprano Titanium. Professional laser treatments for face and body at Babor Medical.';
});

const seoKeywords = computed(() => {
    if (locale.value === 'mk') {
        return 'ласерска епилација скопје, ласерски третмани скопје, Alma Soprano Titanium, ласерска епилација цена, ласер за лице, ласерско подмладување, Babor Medical, естетска медицина скопје, ласерска епилација лице, ласерска епилација тело, Ultraformer, Accent Prime, Alma Hybrid, ласер за пигментации';
    }
    return 'laser hair removal skopje, laser treatments skopje, Alma Soprano Titanium, laser hair removal price, facial laser, laser rejuvenation, Babor Medical, aesthetic medicine skopje, laser hair removal face, laser hair removal body, Ultraformer, Accent Prime, Alma Hybrid, laser for pigmentation';
});

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
                'image': 'https://babormedical.com/logo.webp',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$'
            },
            {
                '@type': 'Service',
                'name': locale.value === 'mk' ? 'Ласерска епилација' : 'Laser Hair Removal',
                'description': locale.value === 'mk'
                    ? 'Професионална ласерска епилација со Alma Soprano Titanium во Babor Medical Скопје. Безболна и трајна епилација за лице и тело.'
                    : 'Professional laser hair removal with Alma Soprano Titanium at Babor Medical Skopje. Painless and permanent hair removal for face and body.',
                'provider': { '@id': 'https://babormedical.com/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Skopje' },
                'serviceType': 'Laser Hair Removal',
                'url': 'https://babormedical.com/services/laser-aesthetic'
            },
            {
                '@type': 'Service',
                'name': locale.value === 'mk' ? 'Ласерски третмани за лице' : 'Laser Facial Treatments',
                'description': locale.value === 'mk'
                    ? 'Ласерски третмани за подмладување, пигментации, розацеа и лузни со Alma Q, Alma Hybrid и Ultraformer во Babor Medical Скопје.'
                    : 'Laser treatments for rejuvenation, pigmentation, rosacea and scars with Alma Q, Alma Hybrid and Ultraformer at Babor Medical Skopje.',
                'provider': { '@id': 'https://babormedical.com/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Skopje' },
                'serviceType': 'Laser Skin Treatment',
                'url': 'https://babormedical.com/services/laser-aesthetic'
            },
            {
                '@type': 'WebPage',
                'name': seoTitle.value,
                'description': seoDescription.value,
                'url': 'https://babormedical.com/services/laser-aesthetic',
                'inLanguage': locale.value === 'mk' ? 'mk-MK' : 'en',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://babormedical.com' }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку чини ласерска епилација во Скопје?' : 'How much does laser hair removal cost in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933.' : 'Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Дали ласерската епилација е болна?' : 'Is laser hair removal painful?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот.' : 'No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку третмани се потребни за трајно отстранување на влакна?' : 'How many treatments are needed for permanent hair removal?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно.' : 'Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кој ласер го користите за ласерска епилација?' : 'Which laser do you use for hair removal?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна.' : 'At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Каде се наоѓа Babor Medical во Скопје?' : 'Where is Babor Medical located in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница на babormedical.com/contact.' : 'Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page at babormedical.com/contact.'
                        }
                    }
                ]
            }
        ]
    });
});

const categoryDescription = computed(() => {
    if (!props.categories || !props.categories.length) return '';
    return props.categories[0].description || '';
});

const technologies = computed(() => {
    if (!props.categories) return [];
    return props.categories.flatMap(cat => cat.items || []);
});

const treatmentAreas = computed(() => props.extraData?.treatment_areas || []);
const approachStrategies = computed(() => props.extraData?.approach_strategies || []);
const assessmentPoints = computed(() => props.extraData?.assessment_points || []);

// ---- UI-only helpers (presentation) ----
const pad = (n) => String(n).padStart(2, '0');
// Splits a text after its first sentence (used to set the opening line larger).
const sentences = (text) => {
    const str = String(text || '').trim();
    const m = str.match(/^(.+?[.!?])\s+(\S[\s\S]*)$/);
    return m ? [m[1], m[2]] : [str];
};
const introParts = computed(() => sentences(categoryDescription.value));
const techNames = computed(() => technologies.value.map((tech) => tech.name).filter(Boolean));
const openFaq = ref(0);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? -1 : i; };
const faqId = useId();
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="seoKeywords" />
        <meta name="author" content="Babor Medical" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://babormedical.com/services/laser-aesthetic" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/services/laser-aesthetic" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services/laser-aesthetic?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services/laser-aesthetic?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/laser-aesthetic" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <!-- Hero -->
        <PageHero
            class="lsr-hero"
            :eyebrow="t('ЛАСЕРСКИ ТРЕТМАНИ', 'LASER TREATMENTS')"
            :title="pageTitle"
            :subtitle="pageSubtitle"
            :crumb="pageTitle"
        >
            <div class="lsr-stats">
                <div class="lsr-stat">
                    <span class="lsr-stat__num"><Counter :value="technologies.length" /></span>
                    <span class="lsr-stat__label">{{ t('Технологии', 'Technologies') }}</span>
                </div>
                <div class="lsr-stat">
                    <span class="lsr-stat__num"><Counter value="7+" /></span>
                    <span class="lsr-stat__label">{{ t('Индикации', 'Indications') }}</span>
                </div>
                <div class="lsr-stat">
                    <span class="lsr-stat__num"><Counter value="10+" /></span>
                    <span class="lsr-stat__label">{{ t('Години', 'Years') }}</span>
                </div>
            </div>

            <a href="/services/cosmetology" class="bm-btn bm-btn--ghost bm-btn--sm lsr-hero__switch">
                <span>{{ t('Погледни', 'View') }} {{ t('Козметологија', 'Cosmetology') }}</span>
                <Icon name="arrow-up-right" :size="16" :stroke="1.8" />
            </a>

            <template #aside>
                <div class="lsr-lens" aria-hidden="true">
                    <div class="lsr-lens__arch">
                        <span class="lsr-lens__grid"></span>
                        <span v-for="n in 4" :key="n" class="lsr-lens__ring" :style="{ '--n': n }"></span>
                        <span class="lsr-lens__sweep"></span>
                        <span class="lsr-lens__beam"></span>
                        <span class="lsr-lens__core"></span>
                        <ul v-if="techNames.length" class="lsr-lens__tags">
                            <li v-for="name in techNames" :key="name">{{ name }}</li>
                        </ul>
                    </div>
                </div>
            </template>
        </PageHero>

        <!-- Intro + indications -->
        <section class="lsr-intro bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <div v-if="categoryDescription" class="lsr-intro__lead">
                    <ScrollWords :text="introParts[0]" tag="p" class="lsr-intro__statement" />
                    <div v-if="introParts[1]" class="lsr-intro__rest">
                        <span class="lsr-intro__mark" aria-hidden="true"><Icon name="laser" :size="22" :stroke="1.3" /></span>
                        <p class="bm-lead bm-muted" data-reveal>{{ introParts[1] }}</p>
                    </div>
                </div>

                <div class="lsr-treat">
                    <div class="lsr-treat__head">
                        <h2 class="bm-h2 lsr-ital"><MaskText :text="t('Што третираме со ласерска технологија?', 'What do we treat with laser technology?')" /></h2>
                    </div>
                    <ol class="lsr-treat__list">
                        <li
                            v-for="(area, i) in treatmentAreas"
                            :key="area"
                            class="lsr-treat__row"
                            data-reveal
                            :style="{ '--d': `${i * 0.06}s` }"
                        >
                            <span class="lsr-treat__idx" aria-hidden="true">{{ pad(i + 1) }}</span>
                            <span class="lsr-treat__name">{{ area }}</span>
                            <span class="lsr-treat__mark" aria-hidden="true"><Icon name="plus" :size="16" :stroke="1.6" /></span>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        <!-- Technologies -->
        <section class="lsr-tech bm-dark bm-grain bm-section">
            <div class="bm-columns-bg" aria-hidden="true"></div>
            <div class="bm-container lsr-tech__inner">
                <div class="lsr-tech__head">
                    <h2 class="bm-display lsr-ital"><MaskText :text="t('Наши технологии', 'Our Technologies')" /></h2>
                    <span class="lsr-tech__count bm-numeral" aria-hidden="true">{{ pad(technologies.length) }}</span>
                </div>
                <div class="lsr-tech__grid">
                    <article
                        v-for="(tech, i) in technologies"
                        :key="tech.id"
                        class="lsr-tcard"
                        data-reveal
                        :style="{ '--d': `${i * 0.1}s` }"
                    >
                        <span class="lsr-tcard__beam" aria-hidden="true"></span>
                        <div class="lsr-tcard__mark" aria-hidden="true">
                            <span class="lsr-tcard__halo"></span>
                            <span class="lsr-tcard__halo"></span>
                            <span class="lsr-tcard__num bm-numeral">{{ pad(i + 1) }}</span>
                        </div>
                        <div class="lsr-tcard__body">
                            <h3 class="lsr-tcard__name">{{ tech.name }}</h3>
                            <div v-if="tech.description" class="lsr-tcard__desc bm-prose" v-html="tech.description"></div>
                            <a v-if="tech.url" :href="tech.url" class="bm-link lsr-tcard__link">
                                {{ t('Прочитај повеќе', 'Learn more') }}
                                <Icon name="arrow-right" />
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <div v-if="treatmentAreas.length || techNames.length" class="lsr-ribbons" aria-hidden="true">
            <Marquee v-if="treatmentAreas.length" :items="treatmentAreas" variant="wine" :tilt="-2.6" :duration="70" />
            <Marquee v-if="techNames.length" :items="techNames" variant="outline" :tilt="2" :duration="36" reverse />
        </div>

        <!-- Approach, assessment, pricing -->
        <section class="lsr-method bm-paper bm-sheet bm-section">
            <div class="bm-container">
                <!-- Our approach -->
                <div class="lsr-split">
                    <div class="lsr-split__head">
                        <span class="lsr-split__badge" aria-hidden="true"><Icon name="sparkle" :size="26" :stroke="1.3" /></span>
                        <h2 class="bm-h2 lsr-ital"><MaskText :text="t('Нашиот пристап – протокол наместо изолирана процедура', 'Our approach – protocol instead of isolated procedure')" /></h2>
                    </div>
                    <div class="lsr-split__body">
                        <p class="bm-lead lsr-split__intro" data-reveal>{{ t('Во Babor Medical развиваме комбинирани стратегии:', 'At Babor Medical we develop combined strategies:') }}</p>
                        <ol class="lsr-steps">
                            <li
                                v-for="(strategy, i) in approachStrategies"
                                :key="strategy"
                                class="lsr-step"
                                data-reveal
                                :style="{ '--d': `${i * 0.08}s` }"
                            >
                                <span class="lsr-step__idx" aria-hidden="true">{{ pad(i + 1) }}</span>
                                <span class="lsr-step__text">{{ strategy }}</span>
                            </li>
                        </ol>
                        <p class="lsr-note" data-reveal>
                            <span class="lsr-note__icon" aria-hidden="true"><Icon name="star" :size="16" :stroke="1.6" /></span>
                            <span>{{ t('Целта не е само моментален ефект, туку долгорочна регенерација и стабилизација на кожата.', 'The goal is not just an immediate effect, but long-term regeneration and stabilization of the skin.') }}</span>
                        </p>
                    </div>
                </div>

                <!-- Assessment & Safety -->
                <div class="lsr-split lsr-split--safety">
                    <div class="lsr-split__head">
                        <span class="lsr-split__badge" aria-hidden="true"><Icon name="shield" :size="26" :stroke="1.3" /></span>
                        <h2 class="bm-h2 lsr-ital"><MaskText :text="t('Стручна проценка и безбедност', 'Expert assessment and safety')" /></h2>
                    </div>
                    <div class="lsr-split__body">
                        <p class="bm-lead lsr-split__intro" data-reveal>{{ t('Секој третман започнува со детална проценка и структурирано интервју. Врз основа на клиничката слика се одредува:', 'Every treatment starts with a detailed assessment and structured interview. Based on the clinical picture, the following is determined:') }}</p>
                        <ul class="lsr-checks">
                            <li
                                v-for="(point, i) in assessmentPoints"
                                :key="point"
                                class="lsr-check"
                                data-reveal
                                :style="{ '--d': `${i * 0.08}s` }"
                            >
                                <span class="lsr-check__top" aria-hidden="true">
                                    <span class="lsr-check__icon"><Icon name="check" :size="16" :stroke="2" /></span>
                                    <span class="lsr-check__idx">{{ pad(i + 1) }}</span>
                                </span>
                                <span class="lsr-check__text">{{ point }}</span>
                            </li>
                        </ul>
                        <p class="lsr-note" data-reveal>
                            <span class="lsr-note__icon" aria-hidden="true"><Icon name="shield" :size="16" :stroke="1.6" /></span>
                            <span>{{ t('Безбедноста, индивидуалниот пристап и природниот резултат се наш приоритет.', 'Safety, individual approach and natural result are our priority.') }}</span>
                        </p>
                    </div>
                </div>

                <!-- Pricing / PDF -->
                <div v-if="priceListPdf" id="pricing" class="lsr-price bm-grain" data-reveal="scale">
                    <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                    <div class="lsr-price__copy">
                        <h2 class="bm-h2 lsr-ital lsr-price__title"><MaskText :text="t('Ценовник', 'Pricing')" /></h2>
                        <p class="bm-lead lsr-price__sub">{{ t('Погледнете го нашиот комплетен ценовник за ласерски третмани.', 'View our complete price list for laser treatments.') }}</p>
                        <div class="lsr-price__actions">
                            <a :href="priceListPdf" target="_blank" rel="noopener" class="bm-btn">
                                <span>{{ t('Отвори ценовник (PDF)', 'View Price List (PDF)') }}</span>
                                <span class="bm-btn__icon"><Icon name="file" :stroke="1.8" /></span>
                            </a>
                            <a :href="priceListPdf" download class="bm-btn bm-btn--ghost lsr-price__dl">
                                <Icon name="download" :size="16" :stroke="1.8" />
                                <span>{{ t('Преземи ценовник', 'Download Price List') }}</span>
                            </a>
                        </div>
                    </div>
                    <div class="lsr-price__doc" aria-hidden="true">
                        <span class="lsr-price__sheet lsr-price__sheet--back"></span>
                        <span class="lsr-price__sheet">
                            <span class="lsr-price__sheet-head"><Icon name="laser" :size="18" :stroke="1.4" /></span>
                            <span v-for="n in 6" :key="n" class="lsr-price__line"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Closing statement -->
        <section class="lsr-cta bm-dark bm-grain">
            <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="bm-container lsr-cta__inner">
                <h2 class="bm-h1 lsr-cta__title">
                    <template v-for="(part, i) in sentences(t('Ласерот е алатка. Протоколот е стратегија.', 'The laser is a tool. The protocol is the strategy.'))" :key="i">
                        <br v-if="i" />
                        <MaskText :text="part" :class="{ 'bm-accent': i }" :start="i * 4" />
                    </template>
                </h2>
                <div class="lsr-cta__foot">
                    <p class="bm-lead bm-muted" data-reveal>{{ t('Нашата цел е да создадеме стабилен, здрав и природен изглед преку внимателно планирани и персонализирани третмани.', 'Our goal is to create a stable, healthy and natural look through carefully planned and personalized treatments.') }}</p>
                    <a href="/contact" class="bm-btn" data-reveal style="--d: 0.15s">
                        <span>{{ t('Закажи консултација', 'Book a consultation') }}</span>
                        <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                    </a>
                </div>
            </div>
        </section>

        <!-- SEO Content Block -->
        <section class="lsr-seo bm-cream bm-sheet bm-section">
            <div class="bm-container bm-container--narrow">
                <article class="lsr-seo__block" data-reveal>
                    <h2 class="lsr-seo__title">{{ t('Ласерска епилација во Скопје – Babor Medical', 'Laser Hair Removal in Skopje – Babor Medical') }}</h2>
                    <p class="lsr-seo__text lsr-seo__text--drop">{{ t('Babor Medical е водечки центар за ласерска епилација во Скопје. Со најнапредната технологија Alma Soprano Titanium нудиме безболна и ефективна ласерска епилација за лице и тело, за жени и мажи. Нашите сертифицирани специјалисти обезбедуваат персонализиран пристап за секој пациент, со јасни резултати од првиот третман.', 'Babor Medical is a leading center for laser hair removal in Skopje. With the most advanced Alma Soprano Titanium technology, we offer painless and effective laser hair removal for face and body, for women and men. Our certified specialists provide a personalized approach for each patient, with clear results from the first treatment.') }}</p>
                </article>

                <article class="lsr-seo__block" data-reveal>
                    <h2 class="lsr-seo__title">{{ t('Зошто да изберете Babor Medical за ласерска епилација?', 'Why choose Babor Medical for laser hair removal?') }}</h2>
                    <ul class="lsr-seo__checks">
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Alma Soprano Titanium – златен стандард за ласерска епилација', 'Alma Soprano Titanium – gold standard for laser hair removal') }}</span></li>
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Безболна процедура со систем за ладење', 'Painless procedure with cooling system') }}</span></li>
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Ефективна за сите типови кожа и влакна', 'Effective for all skin and hair types') }}</span></li>
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Стручен тим со повеќегодишно искуство', 'Expert team with years of experience') }}</span></li>
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Третмани за лице, тело, бикини зона и цело тело', 'Treatments for face, body, bikini area and full body') }}</span></li>
                        <li><span class="lsr-seo__tick" aria-hidden="true"><Icon name="check" :size="13" :stroke="2.2" /></span><span>{{ t('Поволни пакет цени за ласерска епилација', 'Affordable package prices for laser hair removal') }}</span></li>
                    </ul>
                </article>

                <article class="lsr-seo__block" data-reveal>
                    <h2 class="lsr-seo__title">{{ t('Ласерски третмани за подмладување и регенерација', 'Laser treatments for rejuvenation and regeneration') }}</h2>
                    <p class="lsr-seo__text">{{ t('Покрај ласерска епилација, во Babor Medical нудиме широк спектар на ласерски третмани за лице и тело: Alma Q за пигментации и тетоважи, Alma Hybrid за подмладување и ресурфејсинг, Ultraformer за лифтинг без операција, и Accent Prime за обликување на тело и стрии. Сите третмани се изведуваат со најсовремена опрема во Скопје.', 'In addition to laser hair removal, at Babor Medical we offer a wide range of laser treatments for face and body: Alma Q for pigmentation and tattoos, Alma Hybrid for rejuvenation and resurfacing, Ultraformer for non-surgical lifting, and Accent Prime for body contouring and stretch marks. All treatments are performed with state-of-the-art equipment in Skopje.') }}</p>
                </article>

                <article class="lsr-seo__card" data-reveal>
                    <span class="lsr-seo__card-icon" aria-hidden="true"><Icon name="laser" :size="26" :stroke="1.3" /></span>
                    <div class="lsr-seo__card-body">
                        <h2 class="lsr-seo__title">{{ t('Повеќе за Alma Soprano Titanium', 'More about Alma Soprano Titanium') }}</h2>
                        <p class="lsr-seo__text">
                            {{ t('Прочитајте детално за нашиот Alma Soprano Titanium ласер – златниот стандард во ласерска епилација со три бранови должини во една сонда за безболно и трајно отстранување на влакна.', 'Read in detail about our Alma Soprano Titanium laser – the gold standard in laser hair removal with three wavelengths in one probe for painless and permanent hair removal.') }}
                        </p>
                        <a href="/lasers/alma-soprano-titanium" class="bm-link lsr-seo__link">
                            <span>{{ t('Alma Soprano Titanium – Ласерска Епилација', 'Alma Soprano Titanium – Laser Hair Removal') }}</span>
                            <Icon name="arrow-right" />
                        </a>
                    </div>
                </article>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="lsr-faq bm-paper bm-section">
            <div class="bm-container lsr-faq__grid">
                <div class="lsr-faq__head">
                    <h2 class="bm-h2 lsr-ital"><MaskText :text="t('Најчесто поставувани прашања', 'Frequently Asked Questions')" /></h2>
                    <p class="bm-lead bm-muted lsr-faq__sub" data-reveal style="--d: 0.15s">{{ t('Одговори на најчестите прашања за ласерска епилација и ласерски третмани', 'Answers to the most common questions about laser hair removal and laser treatments') }}</p>
                </div>

                <div class="bm-faq lsr-faq__list" data-reveal style="--d: 0.1s">
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q0`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 0" :aria-controls="`${faqId}-a0`" @click="toggleFaq(0)">
                                <span>{{ t('Колку чини ласерска епилација во Скопје?', 'How much does laser hair removal cost in Skopje?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a0`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q0`">
                            <div><p>{{ t('Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933.', 'Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q1`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 1" :aria-controls="`${faqId}-a1`" @click="toggleFaq(1)">
                                <span>{{ t('Дали ласерската епилација е болна?', 'Is laser hair removal painful?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a1`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q1`">
                            <div><p>{{ t('Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот.', 'No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q2`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 2" :aria-controls="`${faqId}-a2`" @click="toggleFaq(2)">
                                <span>{{ t('Колку третмани се потребни за трајно отстранување на влакна?', 'How many treatments are needed for permanent hair removal?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a2`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q2`">
                            <div><p>{{ t('Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно.', 'Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 3 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q3`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 3" :aria-controls="`${faqId}-a3`" @click="toggleFaq(3)">
                                <span>{{ t('Кој ласер го користите за ласерска епилација?', 'Which laser do you use for hair removal?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a3`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q3`">
                            <div><p>{{ t('Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна.', 'At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 4 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q4`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 4" :aria-controls="`${faqId}-a4`" @click="toggleFaq(4)">
                                <span>{{ t('Каде се наоѓа Babor Medical во Скопје?', 'Where is Babor Medical located in Skopje?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a4`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q4`">
                            <div><p>{{ t('Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница.', 'Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 5 }">
                        <h3 class="lsr-faq__h">
                            <button :id="`${faqId}-q5`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 5" :aria-controls="`${faqId}-a5`" @click="toggleFaq(5)">
                                <span>{{ t('Дали ласерската епилација е ефективна за сите типови кожа?', 'Is laser hair removal effective for all skin types?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a5`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q5`">
                            <div><p>{{ t('Да, Alma Soprano Titanium е ефективен за сите типови кожа (I-VI по Фицпатрик скала), вклучувајќи потемна кожа. Тројната бранова должина овозможува прилагодување на третманот за секој пациент.', 'Yes, Alma Soprano Titanium is effective for all skin types (I-VI on the Fitzpatrick scale), including darker skin. The triple wavelength allows treatment customization for each patient.') }}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Shared: italic accent on the last word of a MaskText heading ---------- */
.lsr-ital :deep(.bm-mw:last-child .bm-mw__i) { font-style: italic; }
.bm-cream .lsr-ital :deep(.bm-mw:last-child .bm-mw__i),
.bm-paper .lsr-ital :deep(.bm-mw:last-child .bm-mw__i) { color: var(--wine-600); }
.bm-dark .lsr-ital :deep(.bm-mw:last-child .bm-mw__i),
.lsr-price .lsr-ital :deep(.bm-mw:last-child .bm-mw__i) { color: var(--gold-300); }

/* ---------- Hero ---------- */
.lsr-hero :deep(.bm-phero__title .bm-mw:last-child .bm-mw__i) {
    font-style: italic;
    color: var(--gold-300);
}

.lsr-stats {
    display: flex;
    max-width: 580px;
    border-block: 1px solid var(--line-dark);
}
.lsr-stat {
    flex: 1 1 0;
    min-width: 0;
    padding: 22px 20px 20px 0;
}
.lsr-stat + .lsr-stat {
    padding-left: clamp(16px, 2vw, 28px);
    border-left: 1px solid var(--line-dark);
}
.lsr-stat__num {
    display: block;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.4rem, 3.6vw, 3.4rem);
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--gold-300);
}
.lsr-stat__label {
    display: block;
    margin-top: 12px;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}
.lsr-hero__switch { margin-top: 32px; color: var(--on-dark); }
.lsr-hero__switch svg { transition: transform 0.5s var(--ease-out); }
.lsr-hero__switch:hover svg { transform: rotate(45deg); }

/* Laser "lens" visual */
.lsr-lens {
    position: relative;
    width: 100%;
    max-width: 480px;
    margin-left: auto;
}
.lsr-lens__arch {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.2);
    background:
        radial-gradient(55% 42% at 50% 42%, rgba(217, 185, 149, 0.16) 0%, transparent 70%),
        radial-gradient(90% 60% at 50% 100%, rgba(140, 42, 72, 0.55) 0%, transparent 70%),
        linear-gradient(180deg, var(--wine-850) 0%, var(--wine-800) 100%);
    box-shadow: 0 60px 120px -60px rgba(0, 0, 0, 0.8);
}
.lsr-lens__grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(var(--line-dark), var(--line-dark)) 50% 0 / 1px 100% no-repeat,
        linear-gradient(90deg, transparent, var(--line-dark) 20%, var(--line-dark) 80%, transparent) 0 42% / 100% 1px no-repeat;
}
.lsr-lens__ring {
    position: absolute;
    left: 50%;
    top: 42%;
    width: calc(var(--n) * 21%);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, calc(0.55 - var(--n) * 0.1));
    transform: translate(-50%, -50%);
    animation: lsr-ring 6s var(--ease-in-out) infinite;
    animation-delay: calc(var(--n) * -1.4s);
}
.lsr-lens__sweep {
    position: absolute;
    left: 50%;
    top: 42%;
    width: 84%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(217, 185, 149, 0.2) 38deg, transparent 72deg);
    transform: translate(-50%, -50%);
    animation: lsr-spin 10s linear infinite;
}
.lsr-lens__beam {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 42%;
    background: linear-gradient(180deg, transparent, rgba(236, 210, 203, 0.95));
    box-shadow: 0 0 14px 1px rgba(217, 185, 149, 0.55);
    transform: translateX(-50%);
    animation: lsr-beam 3.4s var(--ease-in-out) infinite;
}
.lsr-lens__core {
    position: absolute;
    left: 50%;
    top: 42%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--cream-50);
    transform: translate(-50%, -50%);
    box-shadow:
        0 0 0 7px rgba(217, 185, 149, 0.14),
        0 0 30px 10px rgba(217, 185, 149, 0.5),
        0 0 110px 46px rgba(140, 42, 72, 0.75);
    animation: lsr-pulse 3.4s var(--ease-in-out) infinite;
}
.lsr-lens__tags {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.lsr-lens__tags li {
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid rgba(217, 185, 149, 0.28);
    background: rgba(22, 10, 14, 0.4);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    line-height: 1.3;
    color: var(--gold-300);
}

@keyframes lsr-ring {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.06); }
}
@keyframes lsr-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
@keyframes lsr-beam {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
}
@keyframes lsr-pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.35); }
}

/* ---------- Intro + indications ---------- */
.lsr-intro__statement {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.85rem, 3.7vw, 3.4rem);
    line-height: 1.16;
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 1180px;
}
.lsr-intro__rest {
    display: grid;
    grid-template-columns: minmax(0, 0.42fr) minmax(0, 1fr);
    gap: 32px;
    margin-top: clamp(36px, 5vw, 64px);
}
.lsr-intro__mark {
    justify-self: end;
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid rgba(110, 32, 57, 0.3);
    color: var(--wine-600);
}
.lsr-intro__rest p { max-width: 720px; }

.lsr-treat {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(40px, 6vw, 110px);
    align-items: start;
    margin-top: clamp(88px, 11vw, 160px);
}
.lsr-treat__head { position: sticky; top: calc(var(--header-h) + 40px); }
.lsr-treat__list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--line-light);
}
.lsr-treat__row {
    position: relative;
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) auto;
    gap: 18px;
    align-items: center;
    padding: clamp(18px, 2.2vw, 26px) clamp(6px, 1.4vw, 20px);
    border-bottom: 1px solid var(--line-light);
    isolation: isolate;
    overflow: hidden;
}
.lsr-treat__row::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(80% 140% at 100% 50%, rgba(140, 42, 72, 0.55), transparent 60%),
        linear-gradient(90deg, var(--wine-800), var(--wine-700));
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.8s var(--ease-out);
}
.lsr-treat__row:hover::before { clip-path: inset(0 0 0 0); }
.lsr-treat__idx {
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: var(--wine-600);
    transition: color 0.6s;
}
.lsr-treat__name {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.3rem, 2.05vw, 1.9rem);
    line-height: 1.22;
    color: var(--ink);
    transition: color 0.6s, transform 0.8s var(--ease-out);
}
.lsr-treat__mark {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--line-light);
    color: var(--wine-600);
    transition: color 0.6s, border-color 0.6s, transform 0.8s var(--ease-out);
}
.lsr-treat__row:hover .lsr-treat__idx { color: var(--gold-300); }
.lsr-treat__row:hover .lsr-treat__name { color: var(--cream-50); transform: translateX(8px); }
.lsr-treat__row:hover .lsr-treat__mark { color: var(--gold-300); border-color: rgba(217, 185, 149, 0.45); transform: rotate(90deg); }

/* ---------- Technologies ---------- */
.lsr-tech { overflow: hidden; }
.lsr-tech__inner { position: relative; z-index: 1; }
.lsr-tech__head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: clamp(48px, 6vw, 88px);
}
.lsr-tech__count { font-size: clamp(5rem, 11vw, 10rem); flex: none; }
.lsr-tech__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(14px, 1.6vw, 24px);
}
/* Each card spans two rows of the parent grid (subgrid) so the text blocks line up */
.lsr-tcard {
    position: relative;
    display: grid;
    grid-row: span 2;
    grid-template-rows: subgrid;
    row-gap: 0;
    padding: clamp(30px, 2.6vw, 40px) clamp(24px, 2.2vw, 34px) clamp(28px, 2.6vw, 38px);
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid var(--line-dark);
    background: linear-gradient(180deg, rgba(246, 238, 230, 0.05), rgba(246, 238, 230, 0.012));
    overflow: hidden;
    isolation: isolate;
}
.lsr-tcard::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(70% 50% at 50% 22%, rgba(217, 185, 149, 0.22), transparent 70%),
        radial-gradient(100% 70% at 50% 100%, rgba(140, 42, 72, 0.85), transparent 70%),
        linear-gradient(180deg, var(--wine-800), var(--wine-700));
    transform: translateY(101%);
    transition: transform 0.9s var(--ease-out);
}
.lsr-tcard:hover::before { transform: translateY(0); }
.lsr-tcard__beam {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: clamp(40px, 4vw, 60px);
    background: linear-gradient(180deg, transparent, var(--gold-300));
    opacity: 0.35;
    transition: opacity 0.6s, height 0.9s var(--ease-out);
}
.lsr-tcard:hover .lsr-tcard__beam { opacity: 1; height: clamp(56px, 5vw, 76px); }
.lsr-tcard__mark {
    position: relative;
    display: grid;
    place-items: center;
    min-height: clamp(230px, 20vw, 290px);
    margin-bottom: 26px;
}
.lsr-tcard__halo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: clamp(120px, 10vw, 150px);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.16);
    transform: translate(-50%, -50%);
    transition: transform 1s var(--ease-out), border-color 0.8s;
}
.lsr-tcard__halo + .lsr-tcard__halo {
    width: clamp(170px, 14.5vw, 214px);
    border-color: rgba(217, 185, 149, 0.08);
    border-style: dashed;
}
.lsr-tcard:hover .lsr-tcard__halo { transform: translate(-50%, -50%) scale(1.08); border-color: rgba(217, 185, 149, 0.4); }
.lsr-tcard:hover .lsr-tcard__halo + .lsr-tcard__halo { transform: translate(-50%, -50%) scale(1.12) rotate(40deg); border-color: rgba(217, 185, 149, 0.28); }
.lsr-tcard__num {
    position: relative;
    font-size: clamp(4rem, 5.6vw, 5.6rem);
    transition: color 0.7s var(--ease-out), transform 0.9s var(--ease-out);
}
.lsr-tcard:hover .lsr-tcard__num { color: var(--gold-300); transform: translateY(-4px); }
.lsr-tcard__body {
    padding-top: 22px;
    border-top: 1px solid var(--line-dark);
}
.lsr-tcard__name {
    font-size: clamp(1.45rem, 1.9vw, 1.85rem);
    font-weight: 400;
    line-height: 1.15;
}
.lsr-tcard__desc {
    margin-top: 12px;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--on-dark-muted);
    transition: color 0.6s;
}
.lsr-tcard:hover .lsr-tcard__desc { color: rgba(246, 238, 230, 0.85); }
.lsr-tcard__link { margin-top: 18px; color: var(--gold-300); }

/* Crossing ribbons */
.lsr-ribbons {
    position: relative;
    z-index: 1;
    display: grid;
    background: var(--wine-950);
    padding: clamp(16px, 3vw, 40px) 0 clamp(96px, 11vw, 150px);
    overflow: hidden;
}
.lsr-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- Approach / safety ---------- */
.lsr-split {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(40px, 6vw, 110px);
    align-items: start;
}
.lsr-split + .lsr-split {
    margin-top: clamp(88px, 11vw, 160px);
    padding-top: clamp(64px, 8vw, 110px);
    border-top: 1px solid var(--line-light);
}
.lsr-split__head { position: sticky; top: calc(var(--header-h) + 40px); }
.lsr-split__badge {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin-bottom: 28px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    box-shadow: 0 20px 40px -20px rgba(82, 26, 47, 0.7);
}
.lsr-split__intro { color: var(--ink); }

.lsr-steps {
    position: relative;
    list-style: none;
    margin: 32px 0 0;
    padding: 0;
}
.lsr-steps::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 30px;
    bottom: 30px;
    width: 1px;
    background: linear-gradient(180deg, rgba(110, 32, 57, 0.45), rgba(110, 32, 57, 0.1));
}
.lsr-step {
    position: relative;
    display: grid;
    grid-template-columns: 45px minmax(0, 1fr);
    gap: 24px;
    align-items: center;
    padding: 16px 0;
}
.lsr-step__idx {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(110, 32, 57, 0.35);
    background: var(--cream-50);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--wine-600);
    transition: background 0.5s, color 0.5s, border-color 0.5s;
}
.lsr-step:hover .lsr-step__idx { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); }
.lsr-step__text {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.25rem, 1.9vw, 1.7rem);
    line-height: 1.28;
    color: var(--ink);
}

.lsr-checks {
    list-style: none;
    margin: 32px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
}
.lsr-check {
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: 176px;
    padding: 24px 26px 26px;
    border-radius: var(--radius-md);
    border: 1px solid var(--line-light);
    background: #fffaf5;
    box-shadow: 0 30px 60px -46px rgba(82, 26, 47, 0.4);
}
.lsr-check__top { display: flex; align-items: center; justify-content: space-between; }
.lsr-check__icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(110, 32, 57, 0.08);
    color: var(--wine-600);
    transition: background 0.5s, color 0.5s;
}
.lsr-check__idx { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; color: var(--ink-soft); }
.lsr-check__text {
    display: block;
    margin-top: auto;
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.15rem, 1.5vw, 1.4rem);
    line-height: 1.3;
    color: var(--ink);
}
.lsr-check__text::first-letter { text-transform: uppercase; }
.lsr-check:hover .lsr-check__icon { background: var(--wine-600); color: var(--cream-50); }

.lsr-note {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-top: 36px;
    padding: 22px 26px;
    border-radius: var(--radius-md);
    border-left: 2px solid var(--wine-600);
    background: rgba(110, 32, 57, 0.06);
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.08rem, 1.4vw, 1.28rem);
    line-height: 1.5;
    color: var(--wine-700);
}
.lsr-note__icon { flex: none; margin-top: 4px; color: var(--wine-600); }

/* ---------- Pricing panel ---------- */
.lsr-price {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
    gap: clamp(32px, 5vw, 80px);
    align-items: center;
    margin-top: clamp(96px, 12vw, 170px);
    padding: clamp(36px, 6vw, 88px);
    border-radius: clamp(28px, 4vw, 48px);
    color: var(--on-dark);
    background:
        radial-gradient(120% 90% at 85% 0%, rgba(140, 42, 72, 0.55) 0%, transparent 60%),
        linear-gradient(160deg, var(--wine-800) 0%, var(--wine-700) 100%);
    box-shadow: 0 60px 120px -60px rgba(56, 19, 34, 0.75);
}
.lsr-price .bm-aura { z-index: -1; }
.lsr-price__copy, .lsr-price__doc { position: relative; z-index: 1; }
.lsr-price__sub { margin-top: 20px; max-width: 480px; color: var(--on-dark-muted); }
.lsr-price__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }
.lsr-price .lsr-price__dl {
    --btn-fill: rgba(246, 238, 230, 0.1);
    gap: 12px;
    color: var(--on-dark);
    border-color: rgba(246, 238, 230, 0.32);
}
.lsr-price .lsr-price__dl:hover { border-color: var(--on-dark); }

.lsr-price__doc { height: 300px; }
.lsr-price__sheet {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 260px;
    margin: -130px 0 0 -100px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 24px 22px;
    border-radius: 16px;
    background: var(--cream-50);
    box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.6);
    transform: rotate(-6deg);
    transition: transform 1s var(--ease-out);
}
.lsr-price__sheet--back {
    background: var(--beige-200);
    opacity: 0.75;
    transform: rotate(7deg) translate(22px, 8px);
}
.lsr-price:hover .lsr-price__sheet { transform: rotate(-2deg) translateY(-10px); }
.lsr-price:hover .lsr-price__sheet--back { transform: rotate(12deg) translate(36px, 10px); }
.lsr-price__sheet-head {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
}
.lsr-price__line {
    position: relative;
    display: block;
    height: 8px;
}
.lsr-price__line::before,
.lsr-price__line::after {
    content: '';
    position: absolute;
    top: 0;
    height: 8px;
    border-radius: 4px;
    background: rgba(110, 32, 57, 0.16);
}
.lsr-price__line::before { left: 0; width: 62%; }
.lsr-price__line::after { right: 0; width: 22%; background: rgba(110, 32, 57, 0.32); }
.lsr-price__line:nth-child(odd)::before { width: 52%; }

/* ---------- Closing statement ---------- */
.lsr-cta {
    position: relative;
    overflow: hidden;
    padding-block: clamp(120px, 15vw, 220px) clamp(110px, 13vw, 190px);
}
.lsr-cta__inner { position: relative; z-index: 1; }
.lsr-cta__inner::before {
    content: '\201C';
    position: absolute;
    top: -0.42em;
    left: calc(var(--gutter) - 0.06em);
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(9rem, 20vw, 19rem);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(217, 185, 149, 0.35);
    pointer-events: none;
}
.lsr-cta__title { position: relative; max-width: 1180px; }
.lsr-cta__foot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 28px 64px;
    margin-top: clamp(44px, 5vw, 76px);
    padding-top: 36px;
    border-top: 1px solid var(--line-dark);
}
.lsr-cta__foot p { max-width: 600px; }

/* ---------- SEO text ---------- */
.lsr-seo__block + .lsr-seo__block {
    margin-top: clamp(48px, 6vw, 76px);
    padding-top: clamp(48px, 6vw, 76px);
    border-top: 1px solid var(--line-light);
}
.lsr-seo__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.7rem, 2.8vw, 2.55rem);
    line-height: 1.14;
    color: var(--ink);
}
.lsr-seo__text {
    margin-top: 22px;
    font-size: 1.05rem;
    line-height: 1.85;
    color: var(--ink-soft);
}
.lsr-seo__text--drop::first-letter {
    float: left;
    margin: 0.08em 0.12em 0 0;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: 4.1em;
    line-height: 0.8;
    color: var(--wine-600);
}
.lsr-seo__checks {
    list-style: none;
    margin: 26px 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 32px;
}
.lsr-seo__checks li {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 16px 0;
    border-bottom: 1px solid var(--line-light);
    line-height: 1.55;
    color: var(--ink);
}
.lsr-seo__tick {
    flex: none;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    margin-top: -1px;
    border-radius: 50%;
    background: rgba(110, 32, 57, 0.1);
    color: var(--wine-600);
}
.lsr-seo__card {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: clamp(20px, 3vw, 36px);
    margin-top: clamp(56px, 7vw, 88px);
    padding: clamp(28px, 4vw, 48px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-light);
    background: #fffaf5;
    box-shadow: 0 40px 80px -56px rgba(82, 26, 47, 0.45);
}
.lsr-seo__card-icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
}
.lsr-seo__card .lsr-seo__text { margin-top: 16px; }
.lsr-seo__link { margin-top: 22px; color: var(--wine-600); }

/* ---------- FAQ ---------- */
.lsr-faq__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(40px, 6vw, 110px);
    align-items: start;
}
.lsr-faq__head { position: sticky; top: calc(var(--header-h) + 40px); }
.lsr-faq__sub { margin-top: 24px; max-width: 440px; }
.lsr-faq__h { font: inherit; letter-spacing: normal; }
.lsr-faq .bm-faq__q { color: var(--ink); transition: color 0.4s; }
.lsr-faq .bm-faq__q:hover { color: var(--wine-600); }
.lsr-faq .bm-faq__item.is-open .bm-faq__q { color: var(--wine-600); }
.lsr-faq .bm-faq__a p { color: var(--ink-soft); }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .lsr-tech__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 991.98px) {
    .lsr-lens { margin: 8px auto 0; max-width: 420px; }
    .lsr-intro__rest { grid-template-columns: 1fr; gap: 20px; }
    .lsr-intro__mark { justify-self: start; }
    .lsr-treat, .lsr-split, .lsr-faq__grid { grid-template-columns: 1fr; gap: 36px; }
    .lsr-treat__head, .lsr-split__head, .lsr-faq__head { position: static; }
    .lsr-price { grid-template-columns: 1fr; }
    .lsr-price__doc { display: none; }
}

@media (max-width: 767.98px) {
    .lsr-checks, .lsr-seo__checks { grid-template-columns: 1fr; }
    .lsr-check { min-height: 0; gap: 22px; }
    .lsr-seo__card { grid-template-columns: 1fr; }
}

@media (max-width: 575.98px) {
    .lsr-stat { padding-right: 12px; }
    .lsr-stat + .lsr-stat { padding-left: 14px; }
    .lsr-stat__label { letter-spacing: 0.12em; font-size: 0.62rem; }
    .lsr-lens__arch { aspect-ratio: 1 / 1.08; }
    .lsr-lens__tags { left: 14px; right: 14px; bottom: 16px; gap: 6px; }
    .lsr-lens__tags li { padding: 6px 10px; font-size: 0.58rem; letter-spacing: 0.12em; }
    .lsr-tech__grid { grid-template-columns: 1fr; }
    .lsr-tcard__mark { min-height: 200px; }
    .lsr-tech__head { flex-direction: column; align-items: flex-start; gap: 8px; }
    .lsr-tech__count { order: -1; font-size: 4.5rem; }
    .lsr-treat__row { grid-template-columns: 34px minmax(0, 1fr) auto; gap: 12px; }
    .lsr-treat__mark { width: 34px; height: 34px; }
    .lsr-step { gap: 16px; }
    .lsr-price__actions .bm-btn { width: 100%; justify-content: space-between; }
    .lsr-price__actions .lsr-price__dl { justify-content: center; }
    .lsr-cta__foot .bm-btn { width: 100%; justify-content: space-between; }
}

@media (prefers-reduced-motion: reduce) {
    .lsr-lens__ring, .lsr-lens__sweep, .lsr-lens__beam, .lsr-lens__core { animation: none; }
}
</style>
