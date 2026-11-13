<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import Counter from '@/Components/Site/Counter.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
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
        return 'Инјектибилни методи Скопје – Филери, Ботокс, Биостимулација | Babor Medical';
    }
    return 'Injectable Methods Skopje – Fillers, Botox, Biostimulation | Babor Medical';
});

const seoDescription = computed(() => {
    if (locale.value === 'mk') {
        return 'Инјектибилни третмани во Babor Medical Скопје: филери, ботокс, биостимулација, мезотерапија. Прецизна апликација и персонализирани протоколи.';
    }
    return 'Injectable treatments at Babor Medical Skopje: fillers, botox, biostimulation, mesotherapy. Precise application and personalized protocols.';
});

const seoKeywords = computed(() => {
    if (locale.value === 'mk') {
        return 'инјектибилни методи скопје, филери скопје, ботокс скопје, биостимулација, мезотерапија, хијалуронски филери, Babor Medical, естетска медицина скопје';
    }
    return 'injectable methods skopje, fillers skopje, botox skopje, biostimulation, mesotherapy, hyaluronic fillers, Babor Medical, aesthetic medicine skopje';
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
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$'
            },
            {
                '@type': 'Service',
                'name': locale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods',
                'description': seoDescription.value,
                'provider': { '@id': 'https://babormedical.com/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Skopje' },
                'serviceType': 'Injectable Aesthetics',
                'url': 'https://babormedical.com/services/injectable-methods'
            },
            {
                '@type': 'WebPage',
                'name': seoTitle.value,
                'description': seoDescription.value,
                'url': 'https://babormedical.com/services/injectable-methods',
                'inLanguage': locale.value === 'mk' ? 'mk-MK' : 'en',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://babormedical.com' }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои инјектибилни третмани ги нудите во Скопје?' : 'What injectable treatments do you offer in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.' : 'At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Дали филерите и ботоксот се безбедни?' : 'Are fillers and botox safe?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.' : 'Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку трае ефектот од филери и ботокс?' : 'How long do fillers and botox last?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.' : 'Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку чини ботокс и филери во Скопје?' : 'How much do botox and fillers cost in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.' : 'Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933.'
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

const protocolAreas = computed(() => props.extraData?.protocol_areas || []);
const combinedStrategies = computed(() => props.extraData?.combined_strategies || []);
const assessmentPoints = computed(() => props.extraData?.assessment_points || []);

// ---- UI-only helpers (presentation) ----
const pad = (n) => String(n).padStart(2, '0');
const heroTitle = computed(() => {
    const words = String(props.pageTitle || '').trim().split(/\s+/);
    return words.length > 1
        ? { main: words.slice(0, -1).join(' '), accent: words[words.length - 1] }
        : { main: words[0] || '', accent: '' };
});
const methodAnchor = (item, i) => `method-${item.id ?? i + 1}`;
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
        <meta property="og:url" content="https://babormedical.com/services/injectable-methods" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/services/injectable-methods" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services/injectable-methods?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services/injectable-methods?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/injectable-methods" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <div class="injectable-page">
            <!-- Hero -->
            <PageHero
                :eyebrow="t('ИНЈЕКТБИЛНИ МЕТОДИ', 'INJECTABLE METHODS')"
                :title="heroTitle.main"
                :accent="heroTitle.accent"
                :subtitle="pageSubtitle"
                :crumb="pageTitle"
            >
                <div class="ij-stats">
                    <div class="ij-stat">
                        <span class="ij-stat__num"><Counter :value="treatments.length" /></span>
                        <span class="ij-stat__label">{{ t('Методи', 'Methods') }}</span>
                    </div>
                    <span class="ij-stat__div" aria-hidden="true"></span>
                    <div class="ij-stat">
                        <span class="ij-stat__num"><Counter value="6+" /></span>
                        <span class="ij-stat__label">{{ t('Протоколи', 'Protocols') }}</span>
                    </div>
                    <span class="ij-stat__div" aria-hidden="true"></span>
                    <div class="ij-stat">
                        <span class="ij-stat__num"><Counter value="10+" /></span>
                        <span class="ij-stat__label">{{ t('Години', 'Years') }}</span>
                    </div>
                </div>

                <a href="/services/cosmetology" class="bm-btn bm-btn--ghost ij-hero__link">
                    {{ t('Погледни', 'View') }} {{ t('Козметологија', 'Cosmetology') }}
                    <Icon name="arrow-right" :size="16" :stroke="1.8" />
                </a>

                <template v-if="treatments.length" #aside>
                    <div class="ij-menu">
                        <div class="ij-menu__arch">
                            <span class="ij-menu__ring" aria-hidden="true"></span>
                            <span class="ij-menu__icon" aria-hidden="true"><Icon name="injectable" :size="28" :stroke="1.2" /></span>
                            <span class="ij-menu__eyebrow">{{ t('Наши методи', 'Our Methods') }}</span>
                            <ol class="ij-menu__list">
                                <li v-for="(item, i) in treatments" :key="`menu-${item.id}`">
                                    <a :href="`#${methodAnchor(item, i)}`">
                                        <span class="ij-menu__n">{{ pad(i + 1) }}</span>
                                        <span class="ij-menu__t">{{ item.name }}</span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <RotatingBadge class="ij-menu__seal" :size="124" />
                    </div>
                </template>
            </PageHero>

            <!-- Intro + what the protocols cover -->
            <section class="ij-intro bm-cream bm-sheet bm-section">
                <div class="bm-container">
                    <div v-if="categoryDescription" class="ij-intro__lead">
                        <span class="ij-intro__mark" aria-hidden="true">&ldquo;</span>
                        <ScrollWords :text="categoryDescription" tag="p" class="ij-intro__statement" />
                    </div>

                    <div class="ij-split">
                        <div class="ij-split__head">
                            <span class="ij-split__num bm-numeral" aria-hidden="true">01</span>
                            <h2 class="bm-h2 ij-split__title">
                                <MaskText :text="t('Што опфаќаат инјектбилните протоколи?', 'What do injectable protocols cover?')" />
                            </h2>
                        </div>
                        <div class="ij-split__body">
                            <ul class="ij-areas">
                                <li
                                    v-for="(area, i) in protocolAreas"
                                    :key="area"
                                    class="ij-areas__item"
                                    data-reveal
                                    :style="{ '--d': `${i * 0.06}s` }"
                                >
                                    <span class="ij-areas__n" aria-hidden="true">{{ pad(i + 1) }}</span>
                                    <span class="ij-areas__t">{{ area }}</span>
                                    <span class="ij-areas__icon" aria-hidden="true"><Icon name="arrow-up-right" :size="16" :stroke="1.6" /></span>
                                </li>
                            </ul>
                            <p class="ij-note" data-reveal>{{ t('Секоја од овие категории има различна биолошка улога и различна индикација.', 'Each of these categories has a different biological role and different indication.') }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Treatments -->
            <section id="methods" class="ij-methods bm-dark bm-section bm-grain">
                <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                <div class="bm-container ij-methods__inner">
                    <div class="ij-methods__head">
                        <div>
                            <span class="ij-split__num bm-numeral" aria-hidden="true">02</span>
                            <h2 class="bm-h1 ij-methods__title"><MaskText :text="t('Наши методи', 'Our Methods')" /></h2>
                        </div>
                        <span class="ij-methods__count" aria-hidden="true">
                            <Counter :value="pad(treatments.length)" />
                        </span>
                    </div>

                    <div class="ij-methods__list">
                        <article
                            v-for="(item, i) in treatments"
                            :id="methodAnchor(item, i)"
                            :key="item.id"
                            class="ij-method"
                            data-reveal
                            :style="{ '--d': `${i * 0.06}s` }"
                        >
                            <span class="ij-method__num bm-numeral" aria-hidden="true">{{ pad(i + 1) }}</span>
                            <h3 class="ij-method__name">{{ item.name }}</h3>
                            <div class="ij-method__body">
                                <div v-if="item.description" class="ij-method__desc bm-prose" v-html="item.description"></div>
                                <a v-if="item.url" :href="item.url" class="bm-link ij-method__link">
                                    {{ t('Прочитај повеќе', 'Learn more') }}
                                    <Icon name="arrow-right" />
                                </a>
                            </div>
                            <span class="ij-method__arrow" aria-hidden="true"><Icon name="arrow-up-right" :size="18" :stroke="1.6" /></span>
                        </article>
                    </div>
                </div>

                <div v-if="protocolAreas.length" class="ij-methods__ribbon" aria-hidden="true">
                    <Marquee :items="protocolAreas" variant="wine" :tilt="-2" :duration="46" />
                </div>
            </section>

            <!-- Protocol approach -->
            <section class="ij-protocol bm-paper bm-sheet bm-section">
                <div class="bm-container ij-split">
                    <div class="ij-split__head">
                        <span class="ij-split__num bm-numeral" aria-hidden="true">03</span>
                        <h2 class="bm-h2 ij-split__title">
                            <MaskText :text="t('Протокол наместо изолирана процедура', 'Protocol instead of isolated procedure')" />
                        </h2>
                        <p class="bm-lead bm-muted ij-protocol__lead" data-reveal style="--d: 0.2s">{{ t('Во Babor Medical развиваме комбинирани стратегии како:', 'At Babor Medical we develop combined strategies such as:') }}</p>
                    </div>
                    <div class="ij-split__body">
                        <ul class="ij-combos">
                            <li
                                v-for="(strategy, i) in combinedStrategies"
                                :key="strategy"
                                class="ij-combo"
                                data-reveal
                                :style="{ '--d': `${i * 0.08}s` }"
                            >
                                <span class="ij-combo__top" aria-hidden="true">
                                    <span class="ij-combo__n">{{ pad(i + 1) }}</span>
                                    <span class="ij-combo__icon"><Icon name="plus" :size="16" :stroke="1.6" /></span>
                                </span>
                                <span class="ij-combo__t">{{ strategy }}</span>
                            </li>
                        </ul>
                        <p class="ij-quote" data-reveal>{{ t('Целта е долгорочна стабилност, природен изглед и постепена регенерација.', 'The goal is long-term stability, natural look and gradual regeneration.') }}</p>
                    </div>
                </div>
            </section>

            <!-- Individual assessment -->
            <section class="ij-assess bm-wine bm-section bm-grain">
                <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                <div class="bm-container ij-assess__inner">
                    <div class="ij-assess__head">
                        <div>
                            <span class="ij-split__num bm-numeral" aria-hidden="true">04</span>
                            <h2 class="bm-h1 ij-assess__title"><MaskText :text="t('Индивидуална проценка', 'Individual Assessment')" /></h2>
                        </div>
                        <p class="bm-lead ij-assess__lead" data-reveal style="--d: 0.2s">{{ t('Секој третман започнува со детална анализа на:', 'Every treatment starts with a detailed analysis of:') }}</p>
                    </div>

                    <ul class="ij-steps">
                        <li
                            v-for="(point, i) in assessmentPoints"
                            :key="point"
                            class="ij-step"
                            data-reveal
                            :style="{ '--d': `${i * 0.1}s` }"
                        >
                            <span class="ij-step__n bm-numeral" aria-hidden="true">{{ pad(i + 1) }}</span>
                            <span class="ij-step__dot" aria-hidden="true"></span>
                            <span class="ij-step__t">{{ point }}</span>
                        </li>
                    </ul>

                    <p class="ij-assess__note" data-reveal>
                        <span class="ij-assess__check" aria-hidden="true"><Icon name="check" :size="16" :stroke="2" /></span>
                        <span>{{ t('Врз основа на тоа се креира персонализиран план.', 'Based on this, a personalized plan is created.') }}</span>
                    </p>
                </div>
            </section>

            <!-- Pricing / PDF -->
            <section v-if="priceListPdf" class="ij-pricing bm-dark bm-section--tight">
                <div class="bm-container">
                    <div class="ij-price" data-reveal="scale">
                        <div class="ij-price__visual" aria-hidden="true">
                            <span class="ij-price__arch">
                                <Icon name="file" :size="40" :stroke="1.1" />
                                <span class="ij-price__pdf">PDF</span>
                            </span>
                        </div>
                        <div class="ij-price__copy">
                            <h2 class="bm-h2 ij-price__title"><MaskText :text="t('Ценовник', 'Pricing')" /></h2>
                            <p class="ij-price__text">{{ t('Погледнете го нашиот комплетен ценовник за инјектибилни третмани.', 'View our complete price list for injectable treatments.') }}</p>
                        </div>
                        <div class="ij-price__actions">
                            <a :href="priceListPdf" target="_blank" class="bm-btn">
                                <span>{{ t('Отвори ценовник (PDF)', 'View Price List (PDF)') }}</span>
                                <span class="bm-btn__icon"><Icon name="arrow-up-right" :stroke="2" /></span>
                            </a>
                            <a :href="priceListPdf" download class="bm-btn bm-btn--ghost ij-price__dl">
                                <Icon name="download" :size="17" :stroke="1.8" />
                                {{ t('Преземи ценовник', 'Download Price List') }}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section class="ij-faq bm-cream bm-sheet bm-section">
                <div class="bm-container ij-split">
                    <div class="ij-split__head">
                        <span class="ij-faq__mark bm-numeral" aria-hidden="true">?</span>
                        <h2 class="bm-h2 ij-split__title">
                            <MaskText :text="t('Најчесто поставувани прашања', 'Frequently Asked Questions')" />
                        </h2>
                    </div>
                    <div class="bm-faq ij-faq__list" data-reveal style="--d: 0.15s">
                        <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                            <h3 class="ij-faq__h">
                                <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 0 ? 'true' : 'false'" :aria-controls="`${faqId}-0`" @click="toggleFaq(0)">
                                    <span>{{ t('Кои инјектибилни третмани ги нудите во Скопје?', 'What injectable treatments do you offer in Skopje?') }}</span>
                                    <span class="bm-faq__icon" aria-hidden="true"></span>
                                </button>
                            </h3>
                            <div :id="`${faqId}-0`" class="bm-faq__a" role="region">
                                <div><p>{{ t('Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.', 'At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team.') }}</p></div>
                            </div>
                        </div>
                        <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                            <h3 class="ij-faq__h">
                                <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 1 ? 'true' : 'false'" :aria-controls="`${faqId}-1`" @click="toggleFaq(1)">
                                    <span>{{ t('Дали филерите и ботоксот се безбедни?', 'Are fillers and botox safe?') }}</span>
                                    <span class="bm-faq__icon" aria-hidden="true"></span>
                                </button>
                            </h3>
                            <div :id="`${faqId}-1`" class="bm-faq__a" role="region">
                                <div><p>{{ t('Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.', 'Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols.') }}</p></div>
                            </div>
                        </div>
                        <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                            <h3 class="ij-faq__h">
                                <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 2 ? 'true' : 'false'" :aria-controls="`${faqId}-2`" @click="toggleFaq(2)">
                                    <span>{{ t('Колку трае ефектот од филери и ботокс?', 'How long do fillers and botox last?') }}</span>
                                    <span class="bm-faq__icon" aria-hidden="true"></span>
                                </button>
                            </h3>
                            <div :id="`${faqId}-2`" class="bm-faq__a" role="region">
                                <div><p>{{ t('Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.', 'Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years.') }}</p></div>
                            </div>
                        </div>
                        <div class="bm-faq__item" :class="{ 'is-open': openFaq === 3 }">
                            <h3 class="ij-faq__h">
                                <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 3 ? 'true' : 'false'" :aria-controls="`${faqId}-3`" @click="toggleFaq(3)">
                                    <span>{{ t('Колку чини ботокс и филери во Скопје?', 'How much do botox and fillers cost in Skopje?') }}</span>
                                    <span class="bm-faq__icon" aria-hidden="true"></span>
                                </button>
                            </h3>
                            <div :id="`${faqId}-3`" class="bm-faq__a" role="region">
                                <div><p>{{ t('Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.', 'Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933.') }}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Closing -->
            <section class="ij-closing bm-wine bm-section bm-grain">
                <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                <span class="ij-closing__arcs" aria-hidden="true"><span></span><span></span><span></span></span>
                <div class="bm-container ij-closing__inner">
                    <h2 class="bm-display ij-closing__title"><MaskText :text="t('Природноста е наш приоритет', 'Naturalness is our priority')" /></h2>
                    <p class="bm-lead ij-closing__text" data-reveal style="--d: 0.2s">{{ t('Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.', 'Injectable methods are a powerful tool when applied with clinical logic and measure.') }}</p>
                    <p class="ij-closing__tagline" data-reveal style="--d: 0.3s">
                        {{ t('Нашата стратегија е стабилизација, не претерување.', 'Our strategy is stabilization, not excess.') }}<br/>
                        {{ t('Регенерација, не маскирање.', 'Regeneration, not masking.') }}
                    </p>
                    <div class="ij-closing__actions" data-reveal style="--d: 0.4s">
                        <a href="/contact" class="bm-btn">
                            <span>{{ t('Закажи консултација', 'Book a consultation') }}</span>
                            <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero ---------- */
.ij-stats {
    display: inline-flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 18px clamp(22px, 3vw, 40px);
    padding: 22px 0;
    border-top: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
}
.ij-stat { display: grid; gap: 6px; }
.ij-stat__num {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.4rem, 3.6vw, 3.4rem);
    line-height: 1;
    color: var(--gold-300);
}
.ij-stat__label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}
.ij-stat__div { width: 1px; background: var(--line-dark); }
.ij-hero__link { display: flex; width: max-content; max-width: 100%; margin-top: 30px; gap: 12px; }
.ij-hero__link svg { transition: transform 0.5s var(--ease-out); }
.ij-hero__link:hover svg { transform: translateX(4px); }

/* Arched "menu" card */
.ij-menu { position: relative; width: min(100%, 440px); margin-inline: auto 0; }
.ij-menu__arch {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(64px, 7vw, 92px) clamp(26px, 3vw, 40px) clamp(28px, 3vw, 40px);
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    background:
        radial-gradient(80% 50% at 50% 0%, rgba(217, 185, 149, 0.35), transparent 70%),
        linear-gradient(180deg, var(--cream-50), var(--cream-100));
    color: var(--ink);
    box-shadow: 0 60px 120px -50px rgba(0, 0, 0, 0.85);
}
.ij-menu__ring {
    position: absolute;
    inset: 12px;
    border-radius: 999px 999px calc(var(--radius-lg) - 8px) calc(var(--radius-lg) - 8px);
    border: 1px solid rgba(110, 32, 57, 0.18);
    pointer-events: none;
}
.ij-menu__icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
}
.ij-menu__eyebrow {
    margin-top: 18px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--wine-600);
}
.ij-menu__list {
    position: relative;
    width: 100%;
    margin: 22px 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line-light);
}
.ij-menu__list li { border-bottom: 1px solid var(--line-light); }
.ij-menu__list a {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    align-items: baseline;
    gap: 8px;
    padding: 13px 4px;
    font-family: var(--font-display);
    font-size: clamp(1.02rem, 1.3vw, 1.15rem);
    line-height: 1.3;
    color: var(--ink);
    transition: color 0.4s, padding 0.5s var(--ease-out);
}
.ij-menu__n {
    font-style: italic;
    font-size: 0.9rem;
    color: var(--wine-500);
}
.ij-menu__list a:hover { color: var(--wine-600); padding-left: 10px; }
.ij-menu__seal { position: absolute; left: -54px; top: 18%; z-index: 2; }

/* ---------- Shared editorial split ---------- */
.ij-split {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.ij-split__head { position: sticky; top: calc(var(--header-h) + 36px); }
.ij-split__num { display: block; font-size: clamp(4.6rem, 7vw, 6.6rem); margin-bottom: 10px; }
.ij-split__title { max-width: 14ch; }

/* ---------- Intro ---------- */
.ij-intro { overflow: hidden; }
.ij-intro__lead {
    position: relative;
    max-width: 1120px;
    margin-bottom: clamp(96px, 12vw, 180px);
    padding-left: clamp(0px, 6vw, 96px);
}
.ij-intro__mark {
    position: absolute;
    left: -0.06em;
    top: -0.28em;
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(6rem, 12vw, 11rem);
    line-height: 1;
    color: rgba(110, 32, 57, 0.18);
}
.ij-intro__statement {
    position: relative;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.55rem, 2.7vw, 2.55rem);
    line-height: 1.38;
    letter-spacing: -0.01em;
    color: var(--ink);
}

.ij-areas { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line-light); }
.ij-areas__item {
    position: relative;
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr) auto;
    align-items: center;
    gap: 16px;
    padding: 24px 6px;
    border-bottom: 1px solid var(--line-light);
    isolation: isolate;
}
.ij-areas__item::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(90deg, rgba(110, 32, 57, 0.07), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.8s var(--ease-out);
}
.ij-areas__item:hover::before { transform: scaleX(1); }
.ij-areas__n {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.05rem;
    color: var(--wine-500);
}
.ij-areas__t {
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 2vw, 1.75rem);
    font-weight: 300;
    line-height: 1.25;
    transition: transform 0.6s var(--ease-out), color 0.4s;
}
.ij-areas__item:hover .ij-areas__t { transform: translateX(8px); color: var(--wine-600); }
.ij-areas__icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--line-light);
    color: var(--wine-600);
    transition: background 0.5s, color 0.5s, transform 0.6s var(--ease-out), border-color 0.5s;
}
.ij-areas__item:hover .ij-areas__icon { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); transform: rotate(45deg); }

.ij-note {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.1rem, 1.4vw, 1.3rem);
    line-height: 1.5;
    color: var(--ink-soft);
}
.ij-note::before {
    content: '';
    flex: none;
    width: 36px;
    height: 1px;
    margin-top: 0.78em;
    background: var(--wine-500);
}

/* ---------- Treatments ---------- */
.ij-methods { overflow: hidden; }
.ij-methods__inner { position: relative; z-index: 1; }
.ij-methods__head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: clamp(48px, 6vw, 88px);
}
.ij-methods__count {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(5rem, 11vw, 10rem);
    line-height: 0.85;
    color: transparent;
    -webkit-text-stroke: 1px rgba(217, 185, 149, 0.45);
}
.ij-methods__list { border-top: 1px solid var(--line-dark); }
.ij-method {
    position: relative;
    display: grid;
    grid-template-columns: minmax(90px, 1.2fr) minmax(0, 4fr) minmax(0, 5fr) 48px;
    gap: clamp(20px, 3vw, 48px);
    align-items: start;
    padding: clamp(32px, 4vw, 52px) clamp(12px, 2vw, 28px);
    border-bottom: 1px solid var(--line-dark);
    isolation: isolate;
    scroll-margin-top: calc(var(--header-h) + 24px);
}
.ij-method::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(80% 120% at 0% 0%, rgba(217, 185, 149, 0.14), transparent 60%),
        linear-gradient(120deg, var(--wine-700), var(--wine-800));
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.8s var(--ease-out);
}
.ij-method:hover::before { transform: scaleY(1); }
.ij-method__num { font-size: clamp(3.4rem, 5vw, 4.8rem); transition: color 0.6s; }
.ij-method:hover .ij-method__num { color: rgba(217, 185, 149, 0.18); }
.ij-method__name {
    padding-top: 0.35em;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.6rem, 2.4vw, 2.3rem);
    line-height: 1.12;
}
.ij-method__body { padding-top: 0.6em; }
.ij-method__desc { font-size: 1rem; line-height: 1.8; color: var(--on-dark-muted); }
.ij-method:hover .ij-method__desc { color: rgba(246, 238, 230, 0.82); }
.ij-method__link { margin-top: 18px; color: var(--gold-300); }
.ij-method__arrow {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    margin-top: 0.3em;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    color: var(--gold-300);
    transition: background 0.5s, color 0.5s, transform 0.6s var(--ease-out), border-color 0.5s;
}
.ij-method:hover .ij-method__arrow { background: var(--beige-200); border-color: var(--beige-200); color: var(--wine-800); transform: rotate(45deg); }
.ij-methods__ribbon { position: relative; z-index: 1; margin-top: clamp(80px, 10vw, 140px); }

/* ---------- Protocol approach ---------- */
.ij-protocol__lead { margin-top: 28px; max-width: 420px; }
.ij-combos {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
}
.ij-combo {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    min-height: 230px;
    padding: clamp(24px, 2.6vw, 34px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-light);
    background: #fff;
    box-shadow: 0 30px 60px -45px rgba(82, 26, 47, 0.35);
    overflow: hidden;
    isolation: isolate;
    transition: color 0.6s, transform 0.8s var(--ease-out), box-shadow 0.8s var(--ease-out);
}
.ij-combo::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(90% 80% at 100% 0%, rgba(217, 185, 149, 0.25), transparent 60%),
        linear-gradient(150deg, var(--wine-600), var(--wine-800));
    opacity: 0;
    transition: opacity 0.6s var(--ease-out);
}
.ij-combo:hover { color: var(--cream-50); transform: translateY(-6px); box-shadow: 0 40px 70px -40px rgba(82, 26, 47, 0.6); }
.ij-combo:hover::before { opacity: 1; }
.ij-combo__top { display: flex; align-items: center; justify-content: space-between; }
.ij-combo__n {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 2.6rem;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(110, 32, 57, 0.45);
    transition: -webkit-text-stroke-color 0.6s;
}
.ij-combo:hover .ij-combo__n { -webkit-text-stroke-color: rgba(217, 185, 149, 0.7); }
.ij-combo__icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--cream-100);
    color: var(--wine-600);
    transition: background 0.6s, color 0.6s, transform 0.8s var(--ease-out);
}
.ij-combo:hover .ij-combo__icon { background: var(--beige-200); color: var(--wine-800); transform: rotate(90deg); }
.ij-combo__t {
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 1.8vw, 1.6rem);
    font-weight: 400;
    line-height: 1.25;
}
.ij-quote {
    position: relative;
    margin-top: clamp(40px, 5vw, 64px);
    padding-left: clamp(24px, 3vw, 40px);
    border-left: 1px solid var(--wine-500);
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.4rem, 2.3vw, 2.1rem);
    line-height: 1.35;
    color: var(--wine-700);
}

/* ---------- Assessment ---------- */
.ij-assess { overflow: hidden; }
.ij-assess__inner { position: relative; z-index: 1; }
.ij-assess__head {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    align-items: end;
    gap: 24px clamp(40px, 6vw, 96px);
    margin-bottom: clamp(56px, 7vw, 100px);
}
.ij-assess__title { max-width: 12ch; }
.ij-assess__lead { color: var(--on-dark-muted); max-width: 420px; }
.ij-steps {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px;
}
.ij-steps::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: calc(clamp(3.6rem, 5vw, 4.6rem) + 26px);
    height: 1px;
    background: linear-gradient(90deg, rgba(217, 185, 149, 0.5), rgba(217, 185, 149, 0.08));
}
.ij-step { position: relative; display: flex; flex-direction: column; }
.ij-step__n { font-size: clamp(3.6rem, 5vw, 4.6rem); }
.ij-step__dot {
    position: relative;
    width: 13px;
    height: 13px;
    margin: 20px 0 26px;
    border-radius: 50%;
    background: var(--gold-300);
    box-shadow: 0 0 0 6px rgba(217, 185, 149, 0.15);
}
.ij-step__t {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.7vw, 1.55rem);
    font-weight: 300;
    line-height: 1.25;
}
.ij-step__t::first-letter { text-transform: uppercase; }
.ij-assess__note {
    display: flex;
    align-items: center;
    gap: 16px;
    width: fit-content;
    max-width: 100%;
    margin-top: clamp(56px, 7vw, 96px);
    padding: 14px 26px 14px 14px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
    background: rgba(22, 10, 14, 0.25);
    font-size: 1.02rem;
    line-height: 1.5;
}
.ij-assess__check {
    display: grid;
    place-items: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--beige-200);
    color: var(--wine-800);
}

/* ---------- Pricing ---------- */
.ij-pricing { position: relative; }
.ij-price {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: clamp(28px, 4vw, 64px);
    padding: clamp(28px, 4vw, 56px);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.22);
    background:
        radial-gradient(60% 120% at 0% 50%, rgba(140, 42, 72, 0.45), transparent 70%),
        radial-gradient(40% 80% at 100% 0%, rgba(217, 185, 149, 0.12), transparent 70%),
        linear-gradient(135deg, var(--wine-850), var(--wine-900));
    box-shadow: 0 50px 100px -60px rgba(0, 0, 0, 0.9);
    overflow: hidden;
}
.ij-price::after {
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: calc(var(--radius-lg) - 8px);
    border: 1px solid rgba(217, 185, 149, 0.08);
    pointer-events: none;
}
.ij-price__arch {
    position: relative;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    width: 128px;
    height: 164px;
    border-radius: 999px 999px 16px 16px;
    background:
        radial-gradient(70% 60% at 50% 30%, rgba(217, 185, 149, 0.3), transparent 70%),
        linear-gradient(180deg, var(--wine-700), var(--wine-800));
    border: 1px solid rgba(217, 185, 149, 0.3);
    color: var(--gold-300);
}
.ij-price__pdf {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    padding-left: 0.3em;
}
.ij-price__text { margin-top: 14px; max-width: 460px; color: var(--on-dark-muted); font-size: 1.05rem; }
.ij-price__actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
.ij-price__actions .bm-btn { justify-content: space-between; }
.ij-price__dl { justify-content: center !important; gap: 12px; }

/* ---------- FAQ ---------- */
.ij-faq__mark { display: block; font-size: clamp(6rem, 11vw, 10rem); margin-bottom: -0.05em; }
.ij-faq__h { margin: 0; font: inherit; letter-spacing: normal; line-height: inherit; }
.ij-faq__list .bm-faq__a p { color: var(--ink-soft); }

/* ---------- Closing ---------- */
.ij-closing { overflow: hidden; text-align: center; }
.ij-closing__inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
.ij-closing__title { max-width: 13ch; }
.ij-closing__text { margin-top: 30px; max-width: 600px; color: var(--on-dark-muted); }
.ij-closing__tagline {
    margin-top: 22px;
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.25rem, 1.9vw, 1.65rem);
    line-height: 1.5;
    color: var(--gold-300);
}
.ij-closing__actions { margin-top: 44px; }
.ij-closing__arcs {
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: min(1180px, 140vw);
    aspect-ratio: 2 / 1;
    transform: translateX(-50%);
    pointer-events: none;
}
.ij-closing__arcs span {
    position: absolute;
    left: 50%;
    bottom: 0;
    border: 1px solid rgba(217, 185, 149, 0.14);
    border-bottom: 0;
    border-radius: 999px 999px 0 0;
    transform: translateX(-50%);
}
.ij-closing__arcs span:nth-child(1) { width: 100%; height: 100%; }
.ij-closing__arcs span:nth-child(2) { width: 76%; height: 76%; }
.ij-closing__arcs span:nth-child(3) { width: 52%; height: 52%; border-color: rgba(217, 185, 149, 0.22); }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .ij-method { grid-template-columns: minmax(70px, 1fr) minmax(0, 4fr) minmax(0, 5fr); }
    .ij-method__arrow { display: none; }
    .ij-steps { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 48px; }
    .ij-steps::before { display: none; }
    .ij-menu__seal { left: -30px; }
}
@media (max-width: 991.98px) {
    .ij-menu { margin-inline: auto; width: min(100%, 420px); }
    .ij-split { grid-template-columns: 1fr; }
    .ij-split__head { position: static; }
    .ij-split__title { max-width: none; }
    .ij-method { grid-template-columns: 1fr; gap: 10px; }
    .ij-method__num { font-size: 3.2rem; }
    .ij-method__name { padding-top: 0; }
    .ij-method__body { padding-top: 6px; }
    .ij-assess__head { grid-template-columns: 1fr; }
    .ij-price { grid-template-columns: 1fr; justify-items: start; }
    .ij-price__actions { width: 100%; max-width: 420px; }
}
@media (max-width: 575.98px) {
    .ij-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); width: 100%; gap: 12px; }
    .ij-stat__div { display: none; }
    .ij-stat__label { font-size: 0.62rem; letter-spacing: 0.16em; }
    .ij-hero__link { width: 100%; justify-content: space-between; }
    .ij-menu__seal { width: 96px !important; height: 96px !important; left: -8px; top: 4%; }
    .ij-intro__lead { padding-left: 0; padding-top: 40px; }
    .ij-intro__mark { top: -0.2em; font-size: 6rem; }
    .ij-areas__item { grid-template-columns: 38px minmax(0, 1fr) auto; padding: 20px 2px; gap: 10px; }
    .ij-areas__icon { width: 34px; height: 34px; }
    .ij-methods__head { align-items: flex-start; }
    .ij-methods__count { font-size: 4.2rem; }
    .ij-method { padding-inline: 4px; }
    .ij-combos { grid-template-columns: 1fr; }
    .ij-combo { min-height: 0; gap: 28px; }
    .ij-steps { grid-template-columns: 1fr; row-gap: 0; }
    .ij-step {
        display: grid;
        grid-template-columns: 70px 1fr;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid var(--line-dark);
    }
    .ij-step:first-child { border-top: 1px solid var(--line-dark); }
    .ij-step__n { font-size: 2.8rem; }
    .ij-step__dot { display: none; }
    .ij-assess__note { border-radius: var(--radius-md); align-items: flex-start; }
    .ij-price__arch { width: 100px; height: 128px; }
    .ij-price__actions .bm-btn { width: 100%; }
}
</style>
