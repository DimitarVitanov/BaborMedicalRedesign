<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import Counter from '@/Components/Site/Counter.vue';
import HorizontalScroll from '@/Components/Site/HorizontalScroll.vue';
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
    return locale.value === 'mk'
        ? 'Третмани на тело – Апаратурна естетика Скопје | Babor Medical'
        : 'Body Treatments – Aesthetic Body Contouring Skopje | Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Третмани на тело во Babor Medical Скопје. Ultraformer, Accent Prime, лимфна дренажа, EM Time, LaserShape. Обликување на тело, антицелулит, затегнување на кожа.'
        : 'Body treatments at Babor Medical Skopje. Ultraformer, Accent Prime, lymphatic drainage, EM Time, LaserShape. Body contouring, anti-cellulite, skin tightening.';
});

const seoKeywords = computed(() => {
    return locale.value === 'mk'
        ? 'третмани на тело, апаратурна естетика, обликување на тело скопје, антицелулит, затегнување кожа, ultraformer, accent prime, лимфна дренажа, EM time, lasershape, babor medical'
        : 'body treatments, body contouring skopje, anti-cellulite, skin tightening, ultraformer, accent prime, lymphatic drainage, EM time, lasershape, babor medical';
});

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MedicalWebPage',
                'name': seoTitle.value,
                'description': seoDescription.value,
                'url': 'https://babormedical.com/services/body-treatments',
                'publisher': {
                    '@type': 'MedicalBusiness',
                    'name': 'Babor Medical',
                    'image': 'https://babormedical.com/logo.webp',
                    'address': {
                        '@type': 'PostalAddress',
                        'addressLocality': 'Skopje',
                        'addressCountry': 'MK'
                    }
                },
                'mainEntity': {
                    '@type': 'MedicalProcedure',
                    'name': locale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments',
                    'procedureType': 'https://schema.org/NoninvasiveProcedure',
                    'description': seoDescription.value,
                    'bodyLocation': locale.value === 'mk' ? 'Тело' : 'Body'
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои третмани за тело ги нудите во Babor Medical?' : 'What body treatments do you offer at Babor Medical?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит.' : 'We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Дали третманите за обликување на тело се болни?' : 'Are body contouring treatments painful?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување.' : 'No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку третмани се потребни за видливи резултати?' : 'How many treatments are needed for visible results?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани.' : 'Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку чинат третманите за тело во Скопје?' : 'How much do body treatments cost in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.' : 'Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.'
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

const treatments = computed(() => {
    if (!props.categories) return [];
    return props.categories.flatMap(cat => cat.items || []);
});

const technologies = computed(() => props.extraData?.technologies || []);
const programs = computed(() => props.extraData?.programs || []);
const individualPlanPoints = computed(() => props.extraData?.individual_plan_points || []);

// ---- UI-only helpers (presentation) ----
const pad = (n) => String(n).padStart(2, '0');
// Splits a text after its first sentence (used to set the opening line larger).
const sentences = (text) => {
    const str = String(text || '').trim();
    const m = str.match(/^(.+?[.!?])\s+(\S[\s\S]*)$/);
    return m ? [m[1], m[2]] : [str];
};
const introParts = computed(() => sentences(categoryDescription.value));
// Decorative hourglass "body contour" lines for the hero arch (static SVG paths).
const contourPaths = Array.from({ length: 11 }, (_, i) => {
    const dx = (i - 5) * 34;
    const x = (k) => (200 + dx * k).toFixed(1);
    return `M${x(1)} -10 C${x(1)} 60 ${x(0.96)} 110 ${x(0.9)} 160 S${x(0.66)} 250 ${x(0.7)} 290 S${x(1.14)} 380 ${x(1.08)} 430 S${x(0.98)} 500 ${x(1)} 520`;
});
const openFaq = ref(0);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? -1 : i; };
const faqId = useId();
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="seoKeywords" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://babormedical.com/services/body-treatments" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
        <link rel="canonical" href="https://babormedical.com/services/body-treatments" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services/body-treatments?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services/body-treatments?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/body-treatments" />
    </Head>

    <SiteLayout>
        <!-- Hero -->
        <PageHero
            class="bdy-hero"
            :eyebrow="t('ТРЕТМАНИ НА ТЕЛО', 'BODY TREATMENTS')"
            :title="pageTitle"
            :subtitle="pageSubtitle"
            :crumb="pageTitle"
        >
            <div class="bdy-stats">
                <div class="bdy-stat">
                    <span class="bdy-stat__num"><Counter value="5" /></span>
                    <span class="bdy-stat__label">{{ t('Технологии', 'Technologies') }}</span>
                </div>
                <div class="bdy-stat">
                    <span class="bdy-stat__num"><Counter value="3" /></span>
                    <span class="bdy-stat__label">{{ t('Програми', 'Programs') }}</span>
                </div>
                <div class="bdy-stat">
                    <span class="bdy-stat__num"><Counter value="100%" /></span>
                    <span class="bdy-stat__label">{{ t('Неинвазивно', 'Non-invasive') }}</span>
                </div>
            </div>

            <a href="/services/laser-aesthetic" class="bm-btn bm-btn--ghost bm-btn--sm bdy-hero__switch">
                <span>{{ t('Погледни', 'View') }} {{ t('Ласерски третмани', 'Laser Treatments') }}</span>
                <Icon name="arrow-up-right" :size="16" :stroke="1.8" />
            </a>

            <template #aside>
                <div class="bdy-contour" aria-hidden="true">
                    <div class="bdy-contour__arch">
                        <svg class="bdy-contour__lines" viewBox="0 0 400 500" preserveAspectRatio="none" focusable="false">
                            <path
                                v-for="(d, i) in contourPaths"
                                :key="i"
                                :d="d"
                                :style="{ '--i': i }"
                            />
                        </svg>
                        <span class="bdy-contour__glow"></span>
                        <span class="bdy-contour__scan"></span>
                        <span class="bdy-contour__icon"><Icon name="body" :size="34" :stroke="1.1" /></span>
                    </div>
                    <span class="bdy-contour__chip bdy-contour__chip--a"><Icon name="sparkle" :size="18" :stroke="1.5" /></span>
                    <span class="bdy-contour__chip bdy-contour__chip--b"><Icon name="shield" :size="18" :stroke="1.5" /></span>
                </div>
            </template>
        </PageHero>

        <!-- Intro -->
        <section v-if="categoryDescription" class="bdy-intro bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <ScrollWords :text="introParts[0]" tag="p" class="bdy-intro__statement" />
                <div v-if="introParts[1]" class="bdy-intro__rest">
                    <span class="bdy-intro__rule" aria-hidden="true"></span>
                    <p class="bdy-intro__text" data-reveal>{{ introParts[1] }}</p>
                </div>
            </div>
        </section>

        <!-- Technologies -->
        <section v-if="technologies.length" class="bdy-tech bm-dark bm-grain" :class="{ 'bdy-tech--first': !categoryDescription }">
            <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
            <HorizontalScroll>
                <template #intro>
                    <div class="bdy-tech__intro">
                        <span class="bdy-tech__count bm-numeral" aria-hidden="true">{{ String(technologies.length).padStart(2, '0') }}</span>
                        <h2 class="bm-h2 bdy-ital bdy-tech__title"><MaskText :text="t('Технологии кои ги користиме', 'Technologies We Use')" /></h2>
                        <span class="bdy-tech__hint" aria-hidden="true">
                            <span class="bdy-tech__hint-line"></span>
                            <Icon name="arrow-right" :size="16" />
                        </span>
                    </div>
                </template>

                <article v-for="(tech, index) in technologies" :key="index" class="bdy-tcard">
                    <div class="bdy-tcard__top">
                        <span class="bdy-tcard__num bm-numeral">{{ String(index + 1).padStart(2, '0') }}</span>
                        <span class="bdy-tcard__orb" aria-hidden="true"></span>
                    </div>
                    <h3 class="bdy-tcard__name">{{ tech.name || tech }}</h3>
                    <p v-if="tech.desc" class="bdy-tcard__desc">{{ tech.desc }}</p>
                    <div v-if="tech.suitable_for || tech.areas" class="bdy-tcard__details">
                        <div class="bdy-tcard__group">
                            <span class="bdy-tcard__label">{{ tech.areas ? t('Зони:', 'Areas:') : t('Погодно за:', 'Suitable for:') }}</span>
                            <ul class="bdy-tcard__chips">
                                <li v-for="item in (tech.areas || tech.suitable_for)" :key="item">{{ item }}</li>
                            </ul>
                        </div>
                        <div v-if="tech.areas && tech.suitable_for" class="bdy-tcard__group">
                            <span class="bdy-tcard__label">{{ t('Ефекти:', 'Effects:') }}</span>
                            <ul class="bdy-tcard__chips bdy-tcard__chips--fx">
                                <li v-for="item in tech.suitable_for" :key="item">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </HorizontalScroll>
        </section>

        <!-- Programs, individual plan, treatments, pricing -->
        <section class="bdy-plan-sec bm-paper bm-sheet bm-section">
            <div class="bm-container">
                <!-- Programs -->
                <div v-if="programs.length" class="bdy-programs">
                    <div class="bdy-programs__head">
                        <h2 class="bm-h2 bdy-ital"><MaskText :text="t('Програмски пристап', 'Program Approach')" /></h2>
                        <p class="bm-lead bm-muted bdy-programs__lead" data-reveal style="--d: 0.15s">{{ t('Најдобри резултати се постигнуваат кога третманите се комбинираат во структуриран план.', 'Best results are achieved when treatments are combined in a structured plan.') }}</p>
                    </div>
                    <div class="bdy-programs__grid">
                        <article
                            v-for="(program, index) in programs"
                            :key="index"
                            class="bdy-prog"
                            data-reveal
                            :style="{ '--d': `${index * 0.12}s` }"
                        >
                            <div class="bdy-prog__arch" aria-hidden="true">
                                <span class="bdy-prog__ring"></span>
                                <span class="bdy-prog__ring"></span>
                                <span class="bdy-prog__ring"></span>
                                <span class="bdy-prog__num bm-numeral">{{ pad(index + 1) }}</span>
                            </div>
                            <h3 class="bdy-prog__name">{{ program.name || program }}</h3>
                            <p v-if="program.desc" class="bdy-prog__desc">{{ program.desc }}</p>
                        </article>
                    </div>
                </div>

                <!-- Individual Plan -->
                <div v-if="individualPlanPoints.length" class="bdy-plan">
                    <div class="bdy-plan__head">
                        <span class="bdy-plan__badge" aria-hidden="true"><Icon name="body" :size="28" :stroke="1.3" /></span>
                        <h2 class="bm-h2 bdy-ital"><MaskText :text="t('Индивидуален план', 'Individual Plan')" /></h2>
                        <p class="bm-lead bdy-plan__lead" data-reveal style="--d: 0.15s">{{ t('Секој клиент добива индивидуална препорака според:', 'Every client receives an individual recommendation based on:') }}</p>
                    </div>
                    <div class="bdy-plan__body">
                        <ol class="bdy-plan__list">
                            <li
                                v-for="(point, i) in individualPlanPoints"
                                :key="point"
                                class="bdy-plan__item"
                                data-reveal
                                :style="{ '--d': `${i * 0.08}s` }"
                            >
                                <span class="bdy-plan__num bm-numeral" aria-hidden="true">{{ pad(i + 1) }}</span>
                                <span class="bdy-plan__text">{{ point }}</span>
                            </li>
                        </ol>
                        <p class="bdy-note" data-reveal>
                            <span class="bdy-note__icon" aria-hidden="true"><Icon name="sparkle" :size="18" :stroke="1.5" /></span>
                            <span>{{ t('Нашата цел е постепено, безбедно и природно подобрување на контурата на телото.', 'Our goal is gradual, safe and natural improvement of body contours.') }}</span>
                        </p>
                    </div>
                </div>

                <!-- Admin-managed treatments -->
                <div v-if="treatments.length" class="bdy-items">
                    <h2 class="bm-h2 bdy-ital"><MaskText :text="t('Наши третмани', 'Our Treatments')" /></h2>
                    <div class="bdy-items__grid">
                        <article
                            v-for="(item, i) in treatments"
                            :key="item.id"
                            class="bdy-item"
                            data-reveal
                            :style="{ '--d': `${(i % 3) * 0.08}s` }"
                        >
                            <span class="bdy-item__num" aria-hidden="true">{{ pad(i + 1) }}</span>
                            <h3 class="bdy-item__name">{{ item.name }}</h3>
                            <div v-if="item.description" class="bdy-item__desc bm-prose" v-html="item.description"></div>
                            <a v-if="item.url" :href="item.url" class="bm-link bdy-item__link">
                                {{ t('Прочитај повеќе', 'Learn more') }}
                                <Icon name="arrow-right" />
                            </a>
                        </article>
                    </div>
                </div>

                <!-- Pricing / PDF -->
                <div v-if="priceListPdf" id="pricing" class="bdy-price bm-grain" data-reveal="scale">
                    <span class="bdy-price__ghost" aria-hidden="true"><Icon name="file" :stroke="0.5" /></span>
                    <div class="bdy-price__copy">
                        <span class="bdy-price__icon" aria-hidden="true"><Icon name="file" :size="24" :stroke="1.4" /></span>
                        <h2 class="bm-h2 bdy-ital bdy-price__title"><MaskText :text="t('Ценовник', 'Pricing')" /></h2>
                        <p class="bdy-price__sub">{{ t('Погледнете го нашиот комплетен ценовник за третмани на тело.', 'View our complete price list for body treatments.') }}</p>
                    </div>
                    <div class="bdy-price__actions">
                        <a :href="priceListPdf" target="_blank" rel="noopener" class="bm-btn bdy-price__btn">
                            <span>{{ t('Отвори ценовник (PDF)', 'View Price List (PDF)') }}</span>
                            <span class="bm-btn__icon"><Icon name="arrow-up-right" :stroke="2" /></span>
                        </a>
                        <a :href="priceListPdf" download class="bm-btn bm-btn--ghost bdy-price__dl">
                            <Icon name="download" :size="16" :stroke="1.8" />
                            <span>{{ t('Преземи ценовник', 'Download Price List') }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Closing -->
        <section class="bdy-cta bm-wine bm-grain">
            <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="bm-container bdy-cta__inner">
                <div class="bdy-cta__copy">
                    <h2 class="bm-h1 bdy-ital bdy-cta__title"><MaskText :text="t('Интегриран естетски план', 'Integrated Aesthetic Plan')" /></h2>
                    <p class="bm-lead bm-muted bdy-cta__text" data-reveal style="--d: 0.15s">{{ t('За оптимален резултат, третманите на тело често се комбинираат со козметолошки и медицинско‑естетски процедури во рамките на интегриран естетски план.', 'For optimal results, body treatments are often combined with cosmetological and medical-aesthetic procedures within an integrated aesthetic plan.') }}</p>
                    <a href="/contact" class="bm-btn bdy-cta__btn" data-reveal style="--d: 0.3s">
                        <span>{{ t('Закажи консултација', 'Book a consultation') }}</span>
                        <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                    </a>
                </div>
                <div class="bdy-venn" aria-hidden="true" data-reveal="scale" style="--d: 0.2s">
                    <span class="bdy-venn__c bdy-venn__c--a"><Icon name="body" :size="30" :stroke="1.2" /></span>
                    <span class="bdy-venn__c bdy-venn__c--b"><Icon name="face" :size="30" :stroke="1.2" /></span>
                    <span class="bdy-venn__c bdy-venn__c--c"><Icon name="injectable" :size="30" :stroke="1.2" /></span>
                    <span class="bdy-venn__core"></span>
                </div>
            </div>
        </section>

        <!-- SEO Content Block -->
        <section class="bdy-seo bm-cream bm-sheet bm-section">
            <div class="bm-container bdy-seo__grid">
                <h2 class="bdy-seo__title" data-reveal>{{ t('Третмани на тело во Скопје – Babor Medical', 'Body Treatments in Skopje – Babor Medical') }}</h2>
                <p class="bdy-seo__text" data-reveal style="--d: 0.12s">{{ t('Babor Medical нуди напредни третмани на тело во Скопје со најсовремена апаратурна естетика. Нашите неинвазивни технологии – Ultraformer, Accent Prime, LaserShape, EM Time и Бодипрес терапија – овозможуваат обликување на тело, намалување на целулит, затегнување на кожа и подобрување на циркулацијата. Индивидуален пристап и програмски третмани за долгорочни резултати.', 'Babor Medical offers advanced body treatments in Skopje with state-of-the-art aesthetic technology. Our non-invasive technologies – Ultraformer, Accent Prime, LaserShape, EM Time and Body Press therapy – enable body contouring, cellulite reduction, skin tightening and circulation improvement. Individual approach and program treatments for long-term results.') }}</p>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="bdy-faq bm-paper bm-section">
            <div class="bm-container bdy-faq__grid">
                <div class="bdy-faq__head">
                    <h2 class="bm-h2 bdy-ital"><MaskText :text="t('Најчесто поставувани прашања', 'Frequently Asked Questions')" /></h2>
                    <span class="bdy-faq__mark" aria-hidden="true">?</span>
                </div>
                <div class="bm-faq bdy-faq__list" data-reveal style="--d: 0.1s">
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                        <h3 class="bdy-faq__h">
                            <button :id="`${faqId}-q0`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 0" :aria-controls="`${faqId}-a0`" @click="toggleFaq(0)">
                                <span>{{ t('Кои третмани за тело ги нудите во Babor Medical?', 'What body treatments do you offer at Babor Medical?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a0`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q0`">
                            <div><p>{{ t('Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит.', 'We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                        <h3 class="bdy-faq__h">
                            <button :id="`${faqId}-q1`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 1" :aria-controls="`${faqId}-a1`" @click="toggleFaq(1)">
                                <span>{{ t('Дали третманите за обликување на тело се болни?', 'Are body contouring treatments painful?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a1`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q1`">
                            <div><p>{{ t('Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување.', 'No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                        <h3 class="bdy-faq__h">
                            <button :id="`${faqId}-q2`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 2" :aria-controls="`${faqId}-a2`" @click="toggleFaq(2)">
                                <span>{{ t('Колку третмани се потребни за видливи резултати?', 'How many treatments are needed for visible results?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a2`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q2`">
                            <div><p>{{ t('Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани.', 'Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments.') }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 3 }">
                        <h3 class="bdy-faq__h">
                            <button :id="`${faqId}-q3`" type="button" class="bm-faq__q" :aria-expanded="openFaq === 3" :aria-controls="`${faqId}-a3`" @click="toggleFaq(3)">
                                <span>{{ t('Колку чинат третманите за тело во Скопје?', 'How much do body treatments cost in Skopje?') }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-a3`" class="bm-faq__a" role="region" :aria-labelledby="`${faqId}-q3`">
                            <div><p>{{ t('Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.', 'Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.') }}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Shared: italic accent on the last word of a MaskText heading ---------- */
.bdy-ital :deep(.bm-mw:last-child .bm-mw__i) { font-style: italic; }
.bm-cream .bdy-ital :deep(.bm-mw:last-child .bm-mw__i),
.bm-paper .bdy-ital :deep(.bm-mw:last-child .bm-mw__i) { color: var(--wine-600); }
.bm-dark .bdy-ital :deep(.bm-mw:last-child .bm-mw__i),
.bm-wine .bdy-ital :deep(.bm-mw:last-child .bm-mw__i),
.bdy-price .bdy-ital :deep(.bm-mw:last-child .bm-mw__i) { color: var(--gold-300); }

/* ---------- Hero ---------- */
.bdy-hero :deep(.bm-phero__title .bm-mw:last-child .bm-mw__i) {
    font-style: italic;
    color: var(--gold-300);
}
.bdy-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    max-width: 600px;
}
.bdy-stat {
    position: relative;
    padding: 20px 20px 18px;
    border-radius: var(--radius-md);
    border: 1px solid var(--line-dark);
    background: linear-gradient(160deg, rgba(246, 238, 230, 0.06), rgba(246, 238, 230, 0.01));
}
.bdy-stat__num {
    display: block;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.2rem, 3.3vw, 3.1rem);
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--gold-300);
}
.bdy-stat__label {
    display: block;
    margin-top: 12px;
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
    overflow-wrap: anywhere;
}
.bdy-hero__switch { margin-top: 30px; color: var(--on-dark); }
.bdy-hero__switch svg { transition: transform 0.5s var(--ease-out); }
.bdy-hero__switch:hover svg { transform: rotate(45deg); }

/* Body-contour visual */
.bdy-contour {
    position: relative;
    width: 100%;
    max-width: 460px;
    margin-left: auto;
}
.bdy-contour__arch {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.2);
    background:
        radial-gradient(60% 45% at 50% 55%, rgba(196, 124, 135, 0.22) 0%, transparent 70%),
        radial-gradient(100% 60% at 50% 100%, rgba(140, 42, 72, 0.6) 0%, transparent 70%),
        linear-gradient(180deg, var(--wine-850) 0%, var(--wine-800) 100%);
    box-shadow: 0 60px 120px -60px rgba(0, 0, 0, 0.8);
}
.bdy-contour__lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: bdy-breathe 7s var(--ease-in-out) infinite;
    transform-origin: 50% 55%;
}
.bdy-contour__lines path {
    fill: none;
    stroke: rgba(217, 185, 149, 0.4);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
    stroke-dasharray: 640;
    stroke-dashoffset: 640;
    animation: bdy-draw 2.6s var(--ease-out) forwards;
    animation-delay: calc(0.35s + var(--i) * 90ms);
}
.bdy-contour__lines path:nth-child(6) { stroke: rgba(236, 210, 203, 0.75); }
.bdy-contour__glow {
    position: absolute;
    left: 50%;
    top: 55%;
    width: 60%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217, 185, 149, 0.22), transparent 65%);
    transform: translate(-50%, -50%);
}
.bdy-contour__scan {
    position: absolute;
    left: 8%;
    right: 8%;
    top: 18%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(236, 210, 203, 0.9), transparent);
    box-shadow: 0 0 18px 2px rgba(217, 185, 149, 0.45);
    animation: bdy-scan 6s var(--ease-in-out) infinite alternate;
}
.bdy-contour__icon {
    position: absolute;
    left: 50%;
    bottom: 26px;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    background: rgba(22, 10, 14, 0.4);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    color: var(--gold-300);
    transform: translateX(-50%);
}
.bdy-contour__chip {
    position: absolute;
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: var(--beige-200);
    color: var(--wine-700);
    box-shadow: 0 24px 50px -20px rgba(0, 0, 0, 0.6);
    animation: bdy-float 6s var(--ease-in-out) infinite;
}
.bdy-contour__chip--a { left: -18px; top: 34%; }
.bdy-contour__chip--b { right: -14px; top: 62%; animation-delay: -3s; }

@keyframes bdy-draw { to { stroke-dashoffset: 0; } }
@keyframes bdy-breathe {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.035); }
}
@keyframes bdy-scan {
    from { top: 16%; }
    to { top: 82%; }
}
@keyframes bdy-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* ---------- Intro ---------- */
.bdy-intro__statement {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.8rem, 3.5vw, 3.25rem);
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 1200px;
}
.bdy-intro__rest {
    display: grid;
    grid-template-columns: minmax(0, 0.32fr) minmax(0, 1fr);
    gap: 32px;
    margin-top: clamp(40px, 5vw, 72px);
    padding-top: clamp(28px, 3vw, 40px);
    border-top: 1px solid var(--line-light);
}
.bdy-intro__rule {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 50% 50%, var(--wine-600) 0 5px, transparent 6px),
        radial-gradient(circle, transparent 60%, rgba(110, 32, 57, 0.25) 61%, transparent 63%);
    border: 1px solid rgba(110, 32, 57, 0.3);
}
.bdy-intro__text {
    columns: 2;
    column-gap: clamp(28px, 4vw, 56px);
    font-size: 1.06rem;
    line-height: 1.8;
    color: var(--ink-soft);
}

/* ---------- Technologies (pinned horizontal scroll) ---------- */
.bdy-tech {
    position: relative;
    padding-block: clamp(84px, 11vw, 140px);
}
.bdy-tech--first { padding-top: clamp(120px, 14vw, 180px); }
.bdy-tech :deep(.bm-hs.is-pinned) { margin-block: calc(clamp(84px, 11vw, 140px) * -1); }
.bdy-tech :deep(.bm-hs) { position: relative; z-index: 1; }
.bdy-tech__count { display: block; font-size: clamp(4.5rem, 8vw, 7.5rem); margin-bottom: 8px; }
.bdy-tech__title { max-width: 460px; }
.bdy-tech__hint {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-top: 40px;
    color: var(--gold-300);
}
.bdy-tech__hint-line { width: 64px; height: 1px; background: currentColor; }

.bdy-tcard {
    position: relative;
    display: flex;
    flex-direction: column;
    width: clamp(330px, 29vw, 420px);
    padding: clamp(26px, 2.4vw, 36px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-dark);
    background: linear-gradient(165deg, rgba(246, 238, 230, 0.06), rgba(246, 238, 230, 0.012));
    overflow: hidden;
    isolation: isolate;
    transition: border-color 0.6s;
}
.bdy-tcard::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(90% 60% at 100% 0%, rgba(217, 185, 149, 0.18), transparent 60%),
        linear-gradient(165deg, var(--wine-700), var(--wine-800));
    opacity: 0;
    transform: scale(1.06);
    transition: opacity 0.8s var(--ease-out), transform 1s var(--ease-out);
}
.bdy-tcard:hover { border-color: rgba(217, 185, 149, 0.35); }
.bdy-tcard:hover::before { opacity: 1; transform: none; }
.bdy-tcard__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: clamp(28px, 3vw, 44px);
}
.bdy-tcard__num {
    font-size: clamp(4rem, 5.4vw, 5.4rem);
    transition: color 0.7s var(--ease-out);
}
.bdy-tcard:hover .bdy-tcard__num { color: var(--gold-300); }
.bdy-tcard__orb {
    position: relative;
    width: 46px;
    height: 46px;
    margin-top: 10px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    transition: transform 0.9s var(--ease-out), background 0.6s;
}
.bdy-tcard__orb::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gold-300);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 16px 4px rgba(217, 185, 149, 0.45);
}
.bdy-tcard:hover .bdy-tcard__orb { transform: scale(1.15); background: rgba(217, 185, 149, 0.1); }
.bdy-tcard__name {
    font-size: clamp(1.5rem, 2vw, 1.95rem);
    font-weight: 400;
    line-height: 1.15;
}
.bdy-tcard__desc {
    margin-top: 14px;
    font-size: 0.94rem;
    line-height: 1.65;
    color: var(--on-dark-muted);
}
.bdy-tcard__details {
    display: grid;
    gap: 18px;
    margin-top: auto;
    padding-top: 24px;
}
.bdy-tcard__details::before {
    content: '';
    display: block;
    height: 1px;
    margin-top: 4px;
    background: var(--line-dark);
}
.bdy-tcard__label {
    display: block;
    margin-bottom: 10px;
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-300);
}
.bdy-tcard__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.bdy-tcard__chips li {
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
    font-size: 0.8rem;
    line-height: 1.35;
    color: var(--on-dark);
    transition: border-color 0.5s, background 0.5s;
}
.bdy-tcard__chips--fx li { background: rgba(217, 185, 149, 0.1); border-color: rgba(217, 185, 149, 0.22); }
.bdy-tcard:hover .bdy-tcard__chips li { border-color: rgba(246, 238, 230, 0.28); }

/* ---------- Programs ---------- */
.bdy-programs__head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
    gap: clamp(28px, 5vw, 80px);
    align-items: end;
    margin-bottom: clamp(48px, 6vw, 88px);
}
.bdy-programs__lead { max-width: 520px; }
.bdy-programs__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(20px, 2.6vw, 40px);
}
.bdy-prog { display: flex; flex-direction: column; }
.bdy-prog__arch {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 1 / 1.02;
    overflow: hidden;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    background:
        radial-gradient(60% 50% at 50% 46%, rgba(217, 185, 149, 0.2), transparent 70%),
        radial-gradient(100% 70% at 50% 100%, rgba(140, 42, 72, 0.7), transparent 70%),
        linear-gradient(180deg, var(--wine-850), var(--wine-700));
    box-shadow: 0 50px 90px -50px rgba(82, 26, 47, 0.6);
    transition: transform 1s var(--ease-out), box-shadow 1s var(--ease-out);
}
.bdy-prog__ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 38%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.28);
    transform: translate(-50%, -50%);
    transition: transform 1.1s var(--ease-out), border-color 0.8s;
}
.bdy-prog__ring:nth-child(2) { width: 58%; border-color: rgba(217, 185, 149, 0.16); }
.bdy-prog__ring:nth-child(3) { width: 80%; border-color: rgba(217, 185, 149, 0.08); border-style: dashed; }
.bdy-prog .bdy-prog__num {
    position: relative;
    font-size: clamp(4rem, 6vw, 6rem);
    -webkit-text-stroke-color: rgba(217, 185, 149, 0.6);
    transition: color 0.8s var(--ease-out);
}
.bdy-prog:hover .bdy-prog__arch { transform: translateY(-8px); box-shadow: 0 60px 100px -50px rgba(82, 26, 47, 0.75); }
.bdy-prog:hover .bdy-prog__num { color: var(--gold-300); }
.bdy-prog:hover .bdy-prog__ring { transform: translate(-50%, -50%) scale(1.1); border-color: rgba(217, 185, 149, 0.45); }
.bdy-prog:hover .bdy-prog__ring:nth-child(3) { transform: translate(-50%, -50%) scale(1.06) rotate(30deg); }
.bdy-prog__name {
    margin-top: 28px;
    font-size: clamp(1.45rem, 2vw, 1.9rem);
    font-weight: 400;
    line-height: 1.15;
    color: var(--ink);
}
.bdy-prog__desc {
    margin-top: 12px;
    padding-top: 14px;
    border-top: 1px solid var(--line-light);
    font-size: 0.98rem;
    line-height: 1.7;
    color: var(--ink-soft);
}

/* ---------- Individual plan ---------- */
.bdy-plan {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(40px, 6vw, 110px);
    align-items: start;
    margin-top: clamp(96px, 12vw, 170px);
}
.bdy-programs + .bdy-plan {
    padding-top: clamp(64px, 8vw, 110px);
    border-top: 1px solid var(--line-light);
}
.bdy-plan__head { position: sticky; top: calc(var(--header-h) + 40px); }
.bdy-plan__badge {
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
.bdy-plan__lead { margin-top: 26px; max-width: 460px; color: var(--ink); }
.bdy-plan__list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--line-light);
}
.bdy-plan__item {
    display: grid;
    grid-template-columns: clamp(80px, 9vw, 120px) minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    padding: clamp(18px, 2.2vw, 28px) 0;
    border-bottom: 1px solid var(--line-light);
}
.bdy-plan__num {
    font-size: clamp(3rem, 4.6vw, 4.4rem);
    transition: color 0.6s var(--ease-out);
}
.bdy-plan__text {
    display: block;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.5rem, 2.5vw, 2.3rem);
    line-height: 1.15;
    color: var(--ink);
    transition: transform 0.8s var(--ease-out);
}
.bdy-plan__text::first-letter { text-transform: uppercase; }
.bdy-plan__item:hover .bdy-plan__num { color: var(--wine-600); }
.bdy-plan__item:hover .bdy-plan__text { transform: translateX(8px); }
.bdy-note {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-top: 36px;
    padding: 24px 28px;
    border-radius: var(--radius-md);
    background: var(--cream-100);
    border: 1px solid var(--line-light);
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.1rem, 1.45vw, 1.32rem);
    line-height: 1.5;
    color: var(--wine-700);
}
.bdy-note__icon {
    flex: none;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    margin-top: -3px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
}

/* ---------- Admin-managed treatments ---------- */
.bdy-items { margin-top: clamp(96px, 12vw, 170px); }
.bdy-items__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: clamp(16px, 2vw, 24px);
    margin-top: clamp(40px, 5vw, 64px);
}
.bdy-item {
    display: flex;
    flex-direction: column;
    padding: clamp(24px, 2.6vw, 36px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-light);
    background: #fffaf5;
    box-shadow: 0 30px 60px -46px rgba(82, 26, 47, 0.4);
    color: var(--ink);
}
.bdy-item__num { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.18em; color: var(--wine-600); }
.bdy-item__name { margin-top: 18px; font-size: clamp(1.4rem, 1.8vw, 1.7rem); font-weight: 400; line-height: 1.2; }
.bdy-item__desc { margin-top: 12px; font-size: 0.96rem; color: var(--ink-soft); }
.bdy-item__link { margin-top: auto; padding-top: 22px; align-self: flex-start; color: var(--wine-600); }

/* ---------- Pricing panel ---------- */
.bdy-price {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: clamp(32px, 5vw, 80px);
    align-items: end;
    margin-top: clamp(96px, 12vw, 170px);
    padding: clamp(36px, 5.5vw, 80px);
    border-radius: clamp(28px, 4vw, 48px);
    border: 1px solid rgba(217, 185, 149, 0.22);
    color: var(--on-dark);
    background:
        radial-gradient(70% 120% at 0% 100%, rgba(140, 42, 72, 0.55), transparent 60%),
        linear-gradient(150deg, var(--wine-900), var(--wine-950));
    box-shadow: 0 60px 120px -60px rgba(22, 10, 14, 0.8);
}
.bdy-price__ghost {
    position: absolute;
    left: 46%;
    top: 50%;
    z-index: -1;
    width: clamp(240px, 26vw, 380px);
    margin: calc(clamp(240px, 26vw, 380px) * -0.5) 0 0 calc(clamp(240px, 26vw, 380px) * -0.5);
    color: rgba(217, 185, 149, 0.08);
    transform: rotate(-10deg);
    transition: transform 1.2s var(--ease-out), color 1.2s;
}
.bdy-price__ghost svg { width: 100%; height: auto; }
.bdy-price:hover .bdy-price__ghost { transform: rotate(-2deg) translateY(-8px); color: rgba(217, 185, 149, 0.13); }
.bdy-price__icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin-bottom: 26px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.4);
    color: var(--gold-300);
}
.bdy-price__sub { margin-top: 18px; max-width: 460px; color: var(--on-dark-muted); font-size: 1.05rem; }
.bdy-price__actions { display: grid; gap: 12px; min-width: 300px; }
.bdy-price__actions .bm-btn { justify-content: space-between; }
.bdy-price .bdy-price__dl {
    --btn-fill: rgba(246, 238, 230, 0.1);
    justify-content: center;
    gap: 12px;
    color: var(--on-dark);
    border-color: rgba(246, 238, 230, 0.32);
}
.bdy-price .bdy-price__dl:hover { border-color: var(--on-dark); }

/* ---------- Closing CTA ---------- */
.bdy-cta {
    position: relative;
    overflow: hidden;
    padding-block: clamp(110px, 13vw, 190px);
}
.bdy-cta__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: center;
}
.bdy-cta__text { margin-top: 30px; max-width: 620px; }
.bdy-cta__btn { margin-top: 40px; }

.bdy-venn {
    position: relative;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1;
    margin-left: auto;
}
.bdy-venn::before {
    content: '';
    position: absolute;
    inset: 0;
    animation: bdy-rotate 40s linear infinite;
    border-radius: 50%;
    border: 1px dashed rgba(217, 185, 149, 0.2);
}
.bdy-venn__c {
    position: absolute;
    display: grid;
    place-items: center;
    width: 56%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.5);
    background: radial-gradient(circle, rgba(217, 185, 149, 0.08), transparent 70%);
    color: var(--gold-300);
    transition: transform 1s var(--ease-out);
}
.bdy-venn__c--a { left: 22%; top: 4%; }
.bdy-venn__c--b { left: 4%; top: 38%; }
.bdy-venn__c--c { left: 40%; top: 38%; }
.bdy-venn__c svg { opacity: 0.9; }
.bdy-venn__c--a svg { transform: translateY(-28%); }
.bdy-venn__c--b svg { transform: translate(-26%, 18%); }
.bdy-venn__c--c svg { transform: translate(26%, 18%); }
.bdy-venn:hover .bdy-venn__c--a { transform: translateY(-8px); }
.bdy-venn:hover .bdy-venn__c--b { transform: translate(-8px, 6px); }
.bdy-venn:hover .bdy-venn__c--c { transform: translate(8px, 6px); }
.bdy-venn__core {
    position: absolute;
    left: 50%;
    top: 57%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--cream-50);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 7px rgba(217, 185, 149, 0.15), 0 0 40px 14px rgba(217, 185, 149, 0.45);
    animation: bdy-glow 3.4s var(--ease-in-out) infinite;
}
@keyframes bdy-rotate { to { transform: rotate(360deg); } }
@keyframes bdy-glow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
}

/* ---------- SEO text ---------- */
.bdy-seo__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(32px, 6vw, 110px);
    align-items: start;
}
.bdy-seo__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.9rem, 3.2vw, 3rem);
    line-height: 1.1;
    color: var(--ink);
}
.bdy-seo__text {
    font-size: 1.06rem;
    line-height: 1.9;
    color: var(--ink-soft);
}
.bdy-seo__text::first-letter {
    float: left;
    margin: 0.08em 0.12em 0 0;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: 4.1em;
    line-height: 0.8;
    color: var(--wine-600);
}

/* ---------- FAQ ---------- */
.bdy-faq__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(40px, 6vw, 110px);
    align-items: start;
}
.bdy-faq__head { position: sticky; top: calc(var(--header-h) + 40px); }
.bdy-faq__mark {
    display: block;
    margin-top: 18px;
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(7rem, 13vw, 12rem);
    line-height: 0.9;
    color: transparent;
    -webkit-text-stroke: 1px rgba(110, 32, 57, 0.35);
}
.bdy-faq__h { font: inherit; letter-spacing: normal; }
.bdy-faq .bm-faq__q { color: var(--ink); transition: color 0.4s; }
.bdy-faq .bm-faq__q:hover { color: var(--wine-600); }
.bdy-faq .bm-faq__item.is-open .bm-faq__q { color: var(--wine-600); }
.bdy-faq .bm-faq__a p { color: var(--ink-soft); }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .bdy-cta__inner { grid-template-columns: minmax(0, 1fr) minmax(0, 0.6fr); }
}

@media (max-width: 991.98px) {
    .bdy-contour { margin: 8px auto 0; max-width: 400px; }
    .bdy-intro__rest { grid-template-columns: 1fr; gap: 24px; }
    .bdy-intro__text { columns: 1; }
    .bdy-tech__hint { display: none; }
    .bdy-tcard { width: min(80vw, 360px); }
    .bdy-programs__head, .bdy-plan, .bdy-seo__grid, .bdy-faq__grid { grid-template-columns: 1fr; }
    .bdy-plan__head, .bdy-faq__head { position: static; }
    .bdy-programs__grid { grid-template-columns: 1fr 1fr; }
    .bdy-price { grid-template-columns: 1fr; align-items: start; }
    .bdy-price__actions { min-width: 0; }
    .bdy-cta__inner { grid-template-columns: 1fr; }
    .bdy-venn { max-width: 300px; margin: 0 auto; }
    .bdy-faq__mark { display: none; }
}

@media (max-width: 767.98px) {
    .bdy-programs__grid { grid-template-columns: 1fr; }
    .bdy-prog__arch { aspect-ratio: 1 / 0.8; }
}

@media (max-width: 575.98px) {
    .bdy-stats { gap: 8px; }
    .bdy-stat { padding: 16px 12px 14px; }
    .bdy-stat__label { letter-spacing: 0.1em; font-size: 0.6rem; }
    .bdy-contour__arch { aspect-ratio: 1 / 1.1; }
    .bdy-contour__chip { width: 46px; height: 46px; }
    .bdy-contour__chip--a { left: -6px; }
    .bdy-contour__chip--b { right: -6px; }
    .bdy-tcard { width: 84vw; }
    .bdy-plan__item { grid-template-columns: 64px minmax(0, 1fr); }
    .bdy-price__actions .bm-btn { width: 100%; }
    .bdy-cta__btn { width: 100%; justify-content: space-between; }
    .bdy-venn { max-width: 240px; }
}

@media (prefers-reduced-motion: reduce) {
    .bdy-contour__lines, .bdy-contour__scan, .bdy-contour__chip, .bdy-venn::before, .bdy-venn__core { animation: none; }
    .bdy-contour__lines path { animation: none; stroke-dashoffset: 0; }
}
</style>
