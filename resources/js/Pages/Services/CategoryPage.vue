<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
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
    parentType: String,
    pageTitle: String,
    pageSubtitle: String,
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    if (locale.value === 'mk') {
        return 'Козметологија и BABOR третмани Скопје | Babor Medical';
    }
    return 'Cosmetology & BABOR Treatments Skopje | Babor Medical';
});

const seoDescription = computed(() => {
    if (locale.value === 'mk') {
        return 'Професионални козметолошки третмани и BABOR протоколи во Babor Medical Скопје. Структуриран пристап кон здравјето и квалитетот на кожата.';
    }
    return 'Professional cosmetology treatments and BABOR protocols at Babor Medical Skopje. A structured approach to skin health and quality.';
});

const seoKeywords = computed(() => {
    if (locale.value === 'mk') {
        return 'козметологија скопје, BABOR третмани, третмани за лице скопје, нега на кожа, Babor Medical, естетска козметика скопје, професионални третмани за лице, козметички третмани';
    }
    return 'cosmetology skopje, BABOR treatments, facial treatments skopje, skin care, Babor Medical, aesthetic cosmetology skopje, professional facial treatments, cosmetic treatments';
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
                'name': locale.value === 'mk' ? 'Козметолошки третмани' : 'Cosmetology Treatments',
                'description': seoDescription.value,
                'provider': { '@id': 'https://babormedical.com/#organization' },
                'areaServed': { '@type': 'City', 'name': 'Skopje' },
                'serviceType': 'Cosmetology',
                'url': 'https://babormedical.com/services/cosmetology'
            },
            {
                '@type': 'WebPage',
                'name': seoTitle.value,
                'description': seoDescription.value,
                'url': 'https://babormedical.com/services/cosmetology',
                'inLanguage': locale.value === 'mk' ? 'mk-MK' : 'en',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://babormedical.com' }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Што е козметологија и кои третмани ги нудите?' : 'What is cosmetology and what treatments do you offer?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Козметологијата опфаќа професионални третмани за нега на кожата. Во Babor Medical нудиме BABOR протоколи за лице вклучувајќи Welcome Experience, Classic, Lift & Firm, Bright & Glow и Calm & Repair третмани прилагодени за секој тип на кожа.' : 'Cosmetology encompasses professional skin care treatments. At Babor Medical we offer BABOR facial protocols including Welcome Experience, Classic, Lift & Firm, Bright & Glow and Calm & Repair treatments tailored for every skin type.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку чинат козметичките третмани во Babor Medical?' : 'How much do cosmetic treatments cost at Babor Medical?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Цените варираат зависно од типот на третман. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.' : 'Prices vary depending on the treatment type. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'За кого се наменети BABOR третманите?' : 'Who are BABOR treatments suitable for?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'BABOR третманите се погодни за сите типови кожа – суva, масна, чувствителна, зрела кожа и кожа со пигментации. Нашите специјалисти прават индивидуална анализа и препорачуваат протокол прилагоден за вашите потреби.' : 'BABOR treatments are suitable for all skin types – dry, oily, sensitive, mature skin and skin with pigmentation. Our specialists perform individual analysis and recommend a protocol tailored to your needs.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Колку често треба да се прават козметички третмани?' : 'How often should cosmetic treatments be done?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Препорачуваме третмани на секои 2-4 недели за оптимални резултати. Фреквенцијата зависи од типот на третман и состојбата на кожата. Нашиот тим ќе ви помогне да креирате план за нега.' : 'We recommend treatments every 2-4 weeks for optimal results. Frequency depends on the treatment type and skin condition. Our team will help you create a care plan.'
                        }
                    }
                ]
            }
        ]
    });
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ПРЕМИУМ ТРЕТМАНИ' : 'PREMIUM TREATMENTS',
    title: props.pageTitle,
    subtitle: props.pageSubtitle,
}));

const totalTreatments = computed(() => {
    return props.categories?.reduce((sum, cat) => sum + (cat.items?.length || 0), 0) || 0;
});

const otherCategoryLink = computed(() => {
    if (props.parentType === 'cosmetology') {
        return {
            href: '/services/laser-aesthetic',
            name: locale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments',
        };
    }
    return {
        href: '/services/cosmetology',
        name: locale.value === 'mk' ? 'Козметологија' : 'Cosmetology',
    };
});

const treatments = computed(() => {
    if (!props.categories) return [];
    return props.categories.flatMap(cat => cat.items || []);
});

const formatPrice = (item) => {
    if (item.price_from && item.price_to) {
        return `${Number(item.price_from).toLocaleString()} – ${Number(item.price_to).toLocaleString()} ${locale.value === 'mk' ? 'ден.' : 'MKD'}`;
    } else if (item.price_from) {
        return `${locale.value === 'mk' ? 'од' : 'from'} ${Number(item.price_from).toLocaleString()} ${locale.value === 'mk' ? 'ден.' : 'MKD'}`;
    } else if (item.price) {
        return `${Number(item.price).toLocaleString()} ${locale.value === 'mk' ? 'ден.' : 'MKD'}`;
    }
    return null;
};

// ---------- Presentation-only UI state & helpers ----------
const pad = (n) => String(n).padStart(2, '0');

// "BABOR TREATMENTS" -> ["BABOR", "TREATMENTS"] so the last word renders as the italic accent line
const splitLast = (text) => {
    const words = String(text || '').trim().split(/\s+/);
    return words.length > 1 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : [String(text || ''), ''];
};
const heroTitle = computed(() => splitLast(content.value.title));

// When a description opens with a heading, show that heading as the row's tagline
// (the heading itself stays in the description markup).
const leadOf = (html) => {
    const m = String(html || '').match(/^\s*<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/i);
    return m && m[2].replace(/<[^>]*>/g, '').trim() ? m[2] : '';
};

const hasDetails = (item) => !!(item.includes || item.indications || item.components || item.effects || item.suitable_for);

// Accordion: first treatment open by default (same on server and client)
const firstId = props.categories?.[0]?.items?.[0]?.id;
const openIds = ref(firstId !== undefined ? { [firstId]: true } : {});
const isOpen = (id) => !!openIds.value[id];
const toggle = (id) => {
    openIds.value = { ...openIds.value, [id]: !openIds.value[id] };
};
const allOpen = computed(() => treatments.value.length > 0 && treatments.value.every((t) => openIds.value[t.id]));
const toggleAll = () => {
    const next = !allOpen.value;
    openIds.value = Object.fromEntries(treatments.value.map((t) => [t.id, next]));
};

const openFaq = ref(0);
const toggleFaq = (i) => {
    openFaq.value = openFaq.value === i ? -1 : i;
};

// Index + scroll-spy (client only)
const hydrated = ref(false);
const activeId = ref(firstId ?? null);
const menuRef = ref(null);
let spy = null;

const goTo = (id) => {
    openIds.value = { ...openIds.value, [id]: true };
    activeId.value = id;
    nextTick(() => {
        const el = document.getElementById(`treatment-${id}`);
        if (!el) return;
        // offsetTop chain ignores the reveal transform on not-yet-revealed rows
        let top = 0;
        for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
        top -= 110;
        window.scrollTo({ top, behavior: 'smooth' });
    });
};

onMounted(() => {
    hydrated.value = true;
    if (!('IntersectionObserver' in window) || !menuRef.value) return;
    spy = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) activeId.value = Number(e.target.dataset.itemId) || e.target.dataset.itemId;
            });
        },
        { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    );
    menuRef.value.querySelectorAll('[data-item-id]').forEach((el) => spy.observe(el));
});

onUnmounted(() => spy?.disconnect());
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
        <meta property="og:url" content="https://babormedical.com/services/cosmetology" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/services/cosmetology" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services/cosmetology?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services/cosmetology?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/cosmetology" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <!-- Hero -->
        <PageHero
            :eyebrow="content.badge"
            :title="heroTitle[0]"
            :accent="heroTitle[1]"
            :subtitle="content.subtitle"
            :crumb="locale === 'mk' ? 'Козметологија' : 'Cosmetology'"
        >
            <a :href="otherCategoryLink.href" class="bm-btn bm-btn--ghost cz-other">
                <span>{{ locale === 'mk' ? 'Погледни' : 'View' }} {{ otherCategoryLink.name }}</span>
                <Icon name="arrow-up-right" :size="16" :stroke="1.8" />
            </a>

            <template #aside>
                <div class="cz-arch">
                    <div class="cz-arch__seal" aria-hidden="true"><RotatingBadge :size="124" /></div>
                    <div class="cz-arch__big">
                        <span class="cz-arch__num"><Counter :value="`${totalTreatments}+`" /></span>
                        <span class="cz-arch__label">{{ locale === 'mk' ? 'Третмани' : 'Treatments' }}</span>
                    </div>
                    <div class="cz-arch__row">
                        <div class="cz-arch__stat">
                            <span class="cz-arch__num cz-arch__num--sm"><Counter :value="categories?.length || 0" /></span>
                            <span class="cz-arch__label">{{ locale === 'mk' ? 'Категории' : 'Categories' }}</span>
                        </div>
                        <div class="cz-arch__stat">
                            <span class="cz-arch__num cz-arch__num--sm"><Counter value="10+" /></span>
                            <span class="cz-arch__label">{{ locale === 'mk' ? 'Години' : 'Years' }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </PageHero>

        <!-- Crossing ribbons of treatment names -->
        <div v-if="treatments.length" class="cz-ribbons" aria-hidden="true">
            <Marquee :items="treatments.map((t) => t.name)" variant="wine" :tilt="-3" :duration="150" />
            <Marquee :items="treatments.map((t) => t.name).reverse()" variant="outline" :tilt="2.2" :duration="170" reverse />
        </div>

        <!-- Protocol: every treatment starts with -->
        <section class="cz-proto bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <div class="cz-proto__grid">
                    <div class="cz-proto__head">
                        <span class="cz-proto__mark bm-numeral" aria-hidden="true">04</span>
                        <h2 class="bm-h2 cz-proto__title"><MaskText :text="locale === 'mk' ? 'Секој третман започнува со:' : 'Every treatment starts with:'" /></h2>
                    </div>
                    <ol class="cz-steps">
                        <li class="cz-step" data-reveal>
                            <span class="cz-step__num bm-numeral" aria-hidden="true">01</span>
                            <span class="cz-step__text">{{ locale === 'mk' ? 'професионална анализа на кожата' : 'professional skin analysis' }}</span>
                        </li>
                        <li class="cz-step" data-reveal style="--d: 0.08s">
                            <span class="cz-step__num bm-numeral" aria-hidden="true">02</span>
                            <span class="cz-step__text">{{ locale === 'mk' ? 'структурирана консултација' : 'structured consultation' }}</span>
                        </li>
                        <li class="cz-step" data-reveal style="--d: 0.16s">
                            <span class="cz-step__num bm-numeral" aria-hidden="true">03</span>
                            <span class="cz-step__text">{{ locale === 'mk' ? 'индивидуален избор на активни состојки' : 'individual selection of active ingredients' }}</span>
                        </li>
                        <li class="cz-step" data-reveal style="--d: 0.24s">
                            <span class="cz-step__num bm-numeral" aria-hidden="true">04</span>
                            <span class="cz-step__text">{{ locale === 'mk' ? 'препорака за домашна нега' : 'home care recommendation' }}</span>
                        </li>
                    </ol>
                </div>

                <div class="cz-proto__note">
                    <span class="cz-proto__rule" aria-hidden="true"></span>
                    <ScrollWords
                        tag="p"
                        class="cz-proto__statement"
                        :text="locale === 'mk' ? 'Работиме исклучиво со оригинални BABOR и DOCTOR BABOR формули, произведени во Германија според фармацевтски стандарди.' : 'We work exclusively with original BABOR and DOCTOR BABOR formulas, manufactured in Germany according to pharmaceutical standards.'"
                    />
                </div>
            </div>
        </section>

        <!-- Treatments menu -->
        <section ref="menuRef" class="cz-menu bm-paper bm-section">
            <div class="bm-container cz-menu__grid">
                <aside class="cz-index" :aria-label="locale === 'mk' ? 'Третмани' : 'Treatments'">
                    <div class="cz-index__inner" data-lenis-prevent>
                        <template v-for="category in categories" :key="`idx-${category.id}`">
                            <span class="cz-index__cat">{{ category.name }}</span>
                            <ol class="cz-index__list">
                                <li v-for="item in category.items" :key="`idx-${item.id}`">
                                    <a
                                        :href="`#treatment-${item.id}`"
                                        class="cz-index__link"
                                        :class="{ 'is-active': activeId === item.id }"
                                        @click.prevent="goTo(item.id)"
                                    >
                                        <span class="cz-index__n">{{ pad(treatments.indexOf(item) + 1) }}</span>
                                        <span class="cz-index__name">{{ item.name }}</span>
                                    </a>
                                </li>
                            </ol>
                        </template>
                    </div>
                </aside>

                <div class="cz-menu__body">
                    <div v-for="(category, ci) in categories" :key="category.id" class="cz-cat">
                        <div class="cz-cat__head">
                            <div class="cz-cat__titles">
                                <span class="bm-eyebrow" data-reveal>{{ content.badge }}</span>
                                <p class="cz-cat__name" data-reveal style="--d: 0.08s">
                                    {{ category.name }} <span class="cz-cat__count">{{ pad(category.items?.length || 0) }}</span>
                                </p>
                                <p v-if="category.description" class="intro-text cz-cat__desc" data-reveal style="--d: 0.16s">{{ category.description }}</p>
                            </div>
                            <button v-if="ci === 0 && treatments.length" type="button" class="cz-toggle" @click="toggleAll">
                                <span>{{ allOpen ? (locale === 'mk' ? 'Затвори ги сите' : 'Collapse all') : (locale === 'mk' ? 'Отвори ги сите' : 'Expand all') }}</span>
                                <span class="cz-toggle__icon" :class="{ 'is-open': allOpen }" aria-hidden="true"></span>
                            </button>
                        </div>

                        <article
                            v-for="item in category.items"
                            :id="`treatment-${item.id}`"
                            :key="item.id"
                            class="cz-item"
                            :class="{ 'is-open': isOpen(item.id) }"
                            :data-item-id="item.id"
                            data-reveal
                        >
                            <div class="cz-item__head">
                                <span class="cz-item__num bm-numeral">{{ treatments.indexOf(item) + 1 }}.</span>
                                <div class="cz-item__titles">
                                    <h2 class="cz-item__name">
                                        <button
                                            :id="`treatment-btn-${item.id}`"
                                            type="button"
                                            class="cz-item__btn"
                                            :aria-expanded="isOpen(item.id) ? 'true' : 'false'"
                                            :aria-controls="`treatment-panel-${item.id}`"
                                            @click="toggle(item.id)"
                                        >{{ item.name }}</button>
                                    </h2>
                                    <p v-if="item.subtitle" class="cz-item__sub">{{ item.subtitle }}</p>
                                    <p v-if="leadOf(item.description)" class="cz-item__lead" v-html="leadOf(item.description)"></p>
                                </div>
                                <p v-if="formatPrice(item)" class="cz-item__price">
                                    <span class="cz-item__price-label">{{ locale === 'mk' ? 'Цена' : 'Price' }}:</span>
                                    <span class="cz-item__price-value">{{ formatPrice(item) }}</span>
                                </p>
                                <span class="cz-item__icon" aria-hidden="true"></span>
                            </div>

                            <div
                                :id="`treatment-panel-${item.id}`"
                                class="cz-item__panel"
                                :inert="hydrated && !isOpen(item.id)"
                            >
                                <div class="cz-item__clip">
                                    <div class="cz-item__body">
                                        <div v-if="item.description" class="treatment-desc bm-prose cz-prose" :class="{ 'has-lead': !!leadOf(item.description) }" v-html="item.description"></div>

                                        <div v-if="hasDetails(item)" class="cz-details">
                                            <div v-if="item.includes" class="cz-detail">
                                                <h3 class="cz-detail__label">{{ locale === 'mk' ? 'Вклучува:' : 'Includes:' }}</h3>
                                                <div class="cz-detail__content bm-prose cz-prose" v-html="item.includes"></div>
                                            </div>
                                            <div v-if="item.indications" class="cz-detail">
                                                <h3 class="cz-detail__label">{{ locale === 'mk' ? 'Индикации:' : 'Indications:' }}</h3>
                                                <div class="cz-detail__content bm-prose cz-prose" v-html="item.indications"></div>
                                            </div>
                                            <div v-if="item.components" class="cz-detail">
                                                <h3 class="cz-detail__label">{{ locale === 'mk' ? 'Активни компоненти:' : 'Active components:' }}</h3>
                                                <div class="cz-detail__content bm-prose cz-prose" v-html="item.components"></div>
                                            </div>
                                            <div v-if="item.effects" class="cz-detail">
                                                <h3 class="cz-detail__label">{{ locale === 'mk' ? 'Дејство:' : 'Effects:' }}</h3>
                                                <div class="cz-detail__content bm-prose cz-prose" v-html="item.effects"></div>
                                            </div>
                                            <div v-if="item.suitable_for" class="cz-detail">
                                                <h3 class="cz-detail__label">{{ locale === 'mk' ? 'Погоден за:' : 'Suitable for:' }}</h3>
                                                <div class="cz-detail__content bm-prose cz-prose" v-html="item.suitable_for"></div>
                                            </div>
                                        </div>

                                        <p v-if="item.note" class="cz-item__note" v-html="item.note"></p>

                                        <div class="cz-item__foot">
                                            <a href="/contact" class="bm-link cz-item__book">
                                                {{ locale === 'mk' ? 'Закажи Консултација' : 'Book Consultation' }}
                                                <Icon name="arrow-right" :stroke="1.8" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="cz-faq bm-dark bm-section bm-grain">
            <div class="bm-container cz-faq__grid">
                <div class="cz-faq__head">
                    <span class="cz-faq__mark bm-numeral" aria-hidden="true">?</span>
                    <h2 class="bm-h2 cz-faq__title"><MaskText :text="locale === 'mk' ? 'Најчесто поставувани прашања' : 'Frequently Asked Questions'" /></h2>
                </div>

                <div class="bm-faq cz-faq__list" data-reveal style="--d: 0.15s">
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                        <h3 class="cz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 0 ? 'true' : 'false'" aria-controls="cz-faq-a-0" @click="toggleFaq(0)">
                                <span>{{ locale === 'mk' ? 'Што е козметологија и кои третмани ги нудите?' : 'What is cosmetology and what treatments do you offer?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div id="cz-faq-a-0" class="bm-faq__a"><div><p>{{ locale === 'mk' ? 'Козметологијата опфаќа професионални третмани за нега на кожата. Во Babor Medical нудиме BABOR протоколи за лице вклучувајќи Welcome Experience, Classic, Lift & Firm, Bright & Glow и Calm & Repair третмани прилагодени за секој тип на кожа.' : 'Cosmetology encompasses professional skin care treatments. At Babor Medical we offer BABOR facial protocols including Welcome Experience, Classic, Lift & Firm, Bright & Glow and Calm & Repair treatments tailored for every skin type.' }}</p></div></div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                        <h3 class="cz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 1 ? 'true' : 'false'" aria-controls="cz-faq-a-1" @click="toggleFaq(1)">
                                <span>{{ locale === 'mk' ? 'Колку чинат козметичките третмани во Babor Medical?' : 'How much do cosmetic treatments cost at Babor Medical?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div id="cz-faq-a-1" class="bm-faq__a"><div><p>{{ locale === 'mk' ? 'Цените варираат зависно од типот на третман. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.' : 'Prices vary depending on the treatment type. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.' }}</p></div></div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                        <h3 class="cz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 2 ? 'true' : 'false'" aria-controls="cz-faq-a-2" @click="toggleFaq(2)">
                                <span>{{ locale === 'mk' ? 'За кого се наменети BABOR третманите?' : 'Who are BABOR treatments suitable for?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div id="cz-faq-a-2" class="bm-faq__a"><div><p>{{ locale === 'mk' ? 'BABOR третманите се погодни за сите типови кожа – сува, масна, чувствителна, зрела кожа и кожа со пигментации. Нашите специјалисти прават индивидуална анализа и препорачуваат протокол прилагоден за вашите потреби.' : 'BABOR treatments are suitable for all skin types – dry, oily, sensitive, mature skin and skin with pigmentation. Our specialists perform individual analysis and recommend a protocol tailored to your needs.' }}</p></div></div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 3 }">
                        <h3 class="cz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 3 ? 'true' : 'false'" aria-controls="cz-faq-a-3" @click="toggleFaq(3)">
                                <span>{{ locale === 'mk' ? 'Колку често треба да се прават козметички третмани?' : 'How often should cosmetic treatments be done?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div id="cz-faq-a-3" class="bm-faq__a"><div><p>{{ locale === 'mk' ? 'Препорачуваме третмани на секои 2-4 недели за оптимални резултати. Фреквенцијата зависи од типот на третман и состојбата на кожата. Нашиот тим ќе ви помогне да креирате план за нега.' : 'We recommend treatments every 2-4 weeks for optimal results. Frequency depends on the treatment type and skin condition. Our team will help you create a care plan.' }}</p></div></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Next category -->
        <section class="cz-next bm-cream bm-sheet">
            <div class="bm-container">
                <a :href="otherCategoryLink.href" class="cz-next__link" data-reveal>
                    <span class="bm-eyebrow cz-next__eyebrow">{{ locale === 'mk' ? 'Погледни' : 'View' }}</span>
                    <span class="cz-next__row">
                        <span class="cz-next__name">{{ otherCategoryLink.name }}</span>
                        <span class="cz-next__arrow"><Icon name="arrow-up-right" :size="30" :stroke="1.3" /></span>
                    </span>
                </a>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero ---------- */
.cz-other { gap: 12px; }
.cz-other svg { flex: none; transition: transform 0.5s var(--ease-out); }
.cz-other:hover svg { transform: rotate(45deg); }

.cz-arch {
    position: relative;
    width: min(100%, 430px);
    min-height: 520px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    padding: 56px 36px 40px;
    text-align: center;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.28);
    background:
        radial-gradient(60% 46% at 50% 26%, rgba(217, 185, 149, 0.2) 0%, transparent 72%),
        radial-gradient(90% 70% at 50% 100%, rgba(140, 42, 72, 0.62) 0%, transparent 70%),
        linear-gradient(180deg, var(--wine-850) 0%, var(--wine-800) 100%);
    box-shadow: 0 50px 90px -50px rgba(0, 0, 0, 0.8);
}
.cz-arch::before {
    content: '';
    position: absolute;
    inset: 14px;
    border-radius: inherit;
    border: 1px solid rgba(217, 185, 149, 0.16);
    pointer-events: none;
}
.cz-arch__seal {
    position: absolute;
    top: 16%;
    left: -62px;
    z-index: 2;
}
.cz-arch__big { display: grid; justify-items: center; gap: 12px; }
.cz-arch__num {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(5rem, 8.5vw, 7.6rem);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--gold-300);
}
.cz-arch__num--sm { font-size: clamp(2.4rem, 3.4vw, 3.1rem); color: var(--on-dark); }
.cz-arch__label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}
.cz-arch__row {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    border-top: 1px solid var(--line-dark);
}
.cz-arch__stat { display: grid; justify-items: center; gap: 8px; padding-top: 22px; }
.cz-arch__stat + .cz-arch__stat { border-left: 1px solid var(--line-dark); }

/* ---------- Ribbons ---------- */
.cz-ribbons {
    position: relative;
    z-index: 1;
    display: grid;
    background: var(--wine-950);
    padding: clamp(20px, 3vw, 44px) 0 clamp(80px, 9vw, 130px);
    margin-top: -1px;
    overflow: hidden;
}
.cz-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- Protocol ---------- */
.cz-proto__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.cz-proto__head { position: sticky; top: 130px; display: grid; gap: 22px; }
.cz-proto__mark { font-size: clamp(4.5rem, 8vw, 7.5rem); }
.cz-proto__title { max-width: 9em; }

.cz-steps { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line-light); }
.cz-step {
    position: relative;
    display: grid;
    grid-template-columns: clamp(76px, 9vw, 120px) minmax(0, 1fr);
    gap: 20px;
    align-items: center;
    padding: clamp(22px, 2.6vw, 34px) 8px;
    border-bottom: 1px solid var(--line-light);
    isolation: isolate;
    overflow: hidden;
    transition: color 0.6s var(--ease-out);
}
.cz-step::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(100deg, var(--wine-800), var(--wine-700));
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.8s var(--ease-out);
}
.cz-step:hover { color: var(--cream-50); }
.cz-step:hover::before { clip-path: inset(0 0 0 0); }
.cz-step__num { font-size: clamp(3rem, 4.6vw, 4.4rem); transition: -webkit-text-stroke-color 0.6s; }
.cz-step:hover .cz-step__num { -webkit-text-stroke-color: rgba(217, 185, 149, 0.85); }
.cz-step__text {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.45rem, 2.3vw, 2.15rem);
    line-height: 1.2;
    letter-spacing: -0.01em;
    transition: transform 0.8s var(--ease-out);
}
.cz-step:hover .cz-step__text { transform: translateX(8px); }

.cz-proto__note {
    display: grid;
    grid-template-columns: clamp(60px, 10vw, 160px) minmax(0, 1fr);
    gap: clamp(20px, 3vw, 48px);
    align-items: start;
    margin-top: clamp(72px, 9vw, 140px);
}
.cz-proto__rule { height: 1px; background: var(--wine-600); margin-top: 0.85em; opacity: 0.6; }
.cz-proto__statement {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.7rem, 3.3vw, 3.15rem);
    line-height: 1.18;
    letter-spacing: -0.015em;
    color: var(--ink);
    max-width: 22em;
}

/* ---------- Menu ---------- */
.cz-menu__grid {
    display: grid;
    grid-template-columns: minmax(220px, 290px) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: start;
}

.cz-index { position: sticky; top: 110px; }
.cz-index__inner {
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: rgba(110, 32, 57, 0.25) transparent;
}
.cz-index__cat {
    display: block;
    padding-bottom: 14px;
    margin-bottom: 6px;
    border-bottom: 1px solid var(--line-light);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--wine-600);
}
.cz-index__list { list-style: none; margin: 0 0 28px; padding: 0; }
.cz-index__link {
    position: relative;
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 10px;
    padding: 8px 0 8px 14px;
    font-size: 0.88rem;
    line-height: 1.4;
    color: var(--ink-soft);
    transition: color 0.4s, padding 0.5s var(--ease-out);
}
.cz-index__link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--wine-600);
    transform: translateY(-50%) scale(0);
    transition: transform 0.5s var(--ease-out);
}
.cz-index__n {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    font-variant-numeric: tabular-nums;
    color: rgba(110, 32, 57, 0.5);
    padding-top: 0.15em;
}
.cz-index__link:hover { color: var(--ink); }
.cz-index__link.is-active { color: var(--wine-600); padding-left: 20px; }
.cz-index__link.is-active::before { transform: translateY(-50%) scale(1); }
.cz-index__link.is-active .cz-index__n { color: var(--wine-600); }

.cz-cat + .cz-cat { margin-top: clamp(64px, 8vw, 110px); }
.cz-cat__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px 40px;
    margin-bottom: clamp(32px, 4vw, 52px);
}
.cz-cat__titles { display: grid; gap: 18px; max-width: 720px; }
.cz-cat__name {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.2rem, 4.4vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.02em;
}
.cz-cat__count {
    display: inline-block;
    vertical-align: super;
    margin-left: 6px;
    font-family: var(--font-sans);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--wine-600);
}
.cz-cat__desc { font-size: 1.05rem; line-height: 1.8; color: var(--ink-soft); }

.cz-toggle {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    padding: 10px 10px 10px 22px;
    border-radius: 999px;
    border: 1px solid rgba(42, 18, 25, 0.22);
    background: transparent;
    color: var(--ink);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.5s var(--ease-out), color 0.5s, border-color 0.5s;
}
.cz-toggle:hover { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); }
.cz-toggle__icon {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid currentColor;
    flex: none;
}
.cz-toggle__icon::before, .cz-toggle__icon::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 1px;
    background: currentColor;
    transform: translate(-50%, -50%);
}
.cz-toggle__icon::after { transform: translate(-50%, -50%) rotate(90deg); transition: transform 0.5s var(--ease-out); }
.cz-toggle__icon.is-open::after { transform: translate(-50%, -50%) rotate(0deg); }

/* Treatment rows */
.cz-item {
    --num-w: clamp(64px, 7vw, 104px);
    --pad-x: clamp(14px, 2.2vw, 32px);
    position: relative;
    border-top: 1px solid var(--line-light);
    border-radius: 0;
    transition: background 0.6s var(--ease-out), box-shadow 0.6s var(--ease-out), border-radius 0.6s var(--ease-out), border-color 0.6s;
}
.cz-item:last-child { border-bottom: 1px solid var(--line-light); }
.cz-item.is-open {
    background: #fffaf5;
    border-radius: var(--radius-md);
    border-top-color: transparent;
    box-shadow: 0 40px 80px -50px rgba(82, 26, 47, 0.35);
}
.cz-item.is-open + .cz-item { border-top-color: transparent; }
.cz-item.is-open:last-child { border-bottom-color: transparent; }

.cz-item__head {
    position: relative;
    display: grid;
    grid-template-columns: var(--num-w) minmax(0, 1fr) auto 46px;
    gap: clamp(14px, 2vw, 28px);
    align-items: center;
    padding: clamp(24px, 2.6vw, 34px) var(--pad-x);
}
/* wine hairline that sweeps in on hover */
.cz-item__head::after {
    content: '';
    position: absolute;
    left: var(--pad-x);
    right: var(--pad-x);
    bottom: -1px;
    height: 1px;
    background: var(--wine-600);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.8s var(--ease-out);
}
.cz-item:not(.is-open) .cz-item__head:hover::after { transform: scaleX(1); }

.cz-item__num {
    font-size: clamp(2.6rem, 4.2vw, 3.9rem);
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
    transition: color 0.6s var(--ease-out), -webkit-text-stroke-color 0.6s;
}
.cz-item__head:hover .cz-item__num,
.cz-item.is-open .cz-item__num {
    color: var(--wine-600);
    -webkit-text-stroke-color: var(--wine-600);
}

.cz-item__titles { display: grid; gap: 6px; min-width: 0; }
.cz-item__name {
    font-size: clamp(1.45rem, 2.3vw, 2.15rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
}
.cz-item__btn {
    display: inline;
    padding: 0;
    border: 0;
    background: none;
    color: var(--ink);
    font: inherit;
    letter-spacing: inherit;
    text-align: left;
    cursor: pointer;
    transition: color 0.5s;
}
/* the whole row is the click target */
.cz-item__btn::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
}
.cz-item__btn:focus-visible { outline: none; }
.cz-item__btn:focus-visible::after { outline: 2px solid var(--wine-600); outline-offset: -4px; border-radius: var(--radius-md); }
.cz-item__head:hover .cz-item__btn { color: var(--wine-700); }

.cz-item__sub,
.cz-item__lead {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 1.25vw, 1.15rem);
    line-height: 1.4;
    color: var(--wine-600);
}
.cz-item__sub { color: var(--ink-soft); }
.cz-item__lead :deep(strong) { font-weight: 400; }

.cz-item__price {
    grid-column: 3;
    display: grid;
    justify-items: end;
    gap: 4px;
    text-align: right;
}
.cz-item__price-label {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--ink-soft);
}
.cz-item__price-value {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.5vw, 1.4rem);
    font-weight: 400;
    font-variant-numeric: tabular-nums lining-nums;
    white-space: nowrap;
    color: var(--wine-700);
}

.cz-item__icon {
    grid-column: 4;
    position: relative;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgba(42, 18, 25, 0.22);
    color: var(--ink);
    transition: background 0.5s var(--ease-out), border-color 0.5s, color 0.5s, transform 0.6s var(--ease-out);
}
.cz-item__icon::before, .cz-item__icon::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 14px;
    height: 1px;
    background: currentColor;
    transform: translate(-50%, -50%);
}
.cz-item__icon::after { transform: translate(-50%, -50%) rotate(90deg); transition: transform 0.6s var(--ease-out); }
.cz-item__head:hover .cz-item__icon { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); }
.cz-item.is-open .cz-item__icon { background: var(--wine-600); border-color: var(--wine-600); color: var(--cream-50); transform: rotate(180deg); }
.cz-item.is-open .cz-item__icon::after { transform: translate(-50%, -50%) rotate(0deg); }

/* Panel — grid-rows accordion. Without JS everything stays open. */
.cz-item__panel {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 0.7s var(--ease-out);
}
.js .cz-item:not(.is-open) .cz-item__panel { grid-template-rows: 0fr; }
.cz-item__clip { overflow: hidden; min-height: 0; }
.cz-item__body {
    padding: 0 var(--pad-x) clamp(30px, 3.4vw, 46px) calc(var(--pad-x) + var(--num-w) + clamp(14px, 2vw, 28px));
    max-width: calc(820px + var(--num-w) + var(--pad-x) * 2);
    opacity: 1;
    transform: none;
    transition: opacity 0.6s var(--ease-out) 0.1s, transform 0.7s var(--ease-out) 0.1s;
}
.js .cz-item:not(.is-open) .cz-item__body { opacity: 0; transform: translateY(-10px); transition-delay: 0s; }

/* Rich text from the CMS */
.cz-prose { color: var(--ink-soft); font-size: 1rem; line-height: 1.8; }
.cz-prose.has-lead > :deep(:is(h1, h2, h3, h4, h5, h6):first-child) { display: none; }
.cz-prose.has-lead > :deep(:is(h1, h2, h3, h4, h5, h6):first-child + *) { margin-top: 0; }
.cz-prose :deep(h2),
.cz-prose :deep(h3),
.cz-prose :deep(h4) {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.2rem, 1.6vw, 1.45rem);
    line-height: 1.3;
    color: var(--ink);
    margin-top: 1.5em;
}
.cz-prose > :deep(:first-child) { margin-top: 0; }
.cz-prose :deep(strong), .cz-prose :deep(b) { font-weight: 600; color: var(--ink); }
.cz-prose :deep(p:empty) { display: none; }
.cz-prose :deep(ul), .cz-prose :deep(ol) {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 10px 36px;
}
.cz-prose :deep(ul:has(> li:nth-child(5))) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.cz-prose :deep(li) {
    position: relative;
    margin: 0;
    padding-left: 30px;
    line-height: 1.6;
}
.cz-prose :deep(li + li) { margin-top: 0; }
.cz-prose :deep(li)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.8em;
    width: 14px;
    height: 1px;
    background: currentColor;
    opacity: 0.5;
}
.cz-prose :deep(li)::after {
    content: '';
    position: absolute;
    left: 12px;
    top: calc(0.8em - 2px);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--wine-600);
}
.cz-prose :deep(li p) { margin: 0; }
.cz-prose :deep(a) { color: var(--wine-600); }

.cz-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 26px 40px;
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid var(--line-light);
}
.cz-detail { display: grid; gap: 10px; align-content: start; }
.cz-detail__label {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--wine-600);
}
.cz-detail__content { font-size: 0.96rem; }
.cz-detail__content :deep(ul:has(> li:nth-child(5))) { grid-template-columns: 1fr; }

.cz-item__note {
    margin-top: 26px;
    padding: 18px 22px;
    border-left: 2px solid var(--gold-400);
    background: rgba(201, 162, 122, 0.1);
    border-radius: 0 12px 12px 0;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.02rem;
    line-height: 1.7;
    color: var(--ink-soft);
}
.cz-item__note :deep(p) { margin: 0; }

.cz-item__foot {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    padding-top: 22px;
    border-top: 1px solid var(--line-light);
}
.cz-item__book { color: var(--wine-600); }

/* ---------- FAQ ---------- */
.cz-faq__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.cz-faq__head { position: sticky; top: 130px; display: grid; gap: 18px; }
.cz-faq__mark { font-size: clamp(5rem, 9vw, 8.5rem); }
.cz-faq__title { max-width: 8em; }
.cz-faq__h { font-size: inherit; font-weight: inherit; line-height: inherit; letter-spacing: 0; }
.cz-faq__list .bm-faq__q { transition: color 0.4s; }
.cz-faq__list .bm-faq__q:hover { color: var(--gold-300); }
.cz-faq__list .bm-faq__a p { color: var(--on-dark-muted); font-size: 1.02rem; line-height: 1.8; }

/* ---------- Next category ---------- */
.cz-next { padding-block: clamp(84px, 10vw, 150px) clamp(84px, 9vw, 130px); }
.cz-next__link {
    position: relative;
    display: grid;
    gap: 22px;
    padding: clamp(28px, 4vw, 56px) clamp(16px, 3vw, 48px);
    border-top: 1px solid var(--line-light);
    border-bottom: 1px solid var(--line-light);
    color: var(--ink);
    isolation: isolate;
    overflow: hidden;
    transition: color 0.7s var(--ease-out);
}
.cz-next__link::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(80% 160% at 100% 0%, rgba(140, 42, 72, 0.7), transparent 60%),
        linear-gradient(100deg, var(--wine-800), var(--wine-700));
    clip-path: inset(100% 0 0 0);
    transition: clip-path 0.9s var(--ease-out);
}
.cz-next__link:hover, .cz-next__link:focus-visible { color: var(--cream-50); }
.cz-next__link:hover::before, .cz-next__link:focus-visible::before { clip-path: inset(0 0 0 0); }
.cz-next__link:hover .cz-next__eyebrow { color: var(--gold-300); }
.cz-next__row { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.cz-next__name {
    font-family: var(--font-display);
    font-weight: 300;
    font-style: italic;
    font-size: clamp(2.4rem, 6.4vw, 6rem);
    line-height: 1.02;
    letter-spacing: -0.025em;
    transition: transform 0.9s var(--ease-out);
}
.cz-next__link:hover .cz-next__name { transform: translateX(14px); }
.cz-next__arrow {
    display: grid;
    place-items: center;
    width: clamp(64px, 7vw, 96px);
    height: clamp(64px, 7vw, 96px);
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    flex: none;
    transition: background 0.6s, color 0.6s, transform 0.9s var(--ease-out);
}
.cz-next__link:hover .cz-next__arrow { background: var(--beige-200); color: var(--wine-800); transform: rotate(45deg); }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .cz-menu__grid { grid-template-columns: minmax(200px, 240px) minmax(0, 1fr); gap: 40px; }
}
@media (max-width: 991.98px) {
    .cz-arch { margin: 24px auto 0; min-height: 0; padding-top: 120px; }
    .cz-arch__seal { left: -18px; top: -30px; }
    .cz-proto__grid, .cz-faq__grid { grid-template-columns: 1fr; }
    .cz-proto__head, .cz-faq__head { position: static; }
    .cz-menu__grid { grid-template-columns: 1fr; }
    .cz-index { display: none; }
}
@media (max-width: 767.98px) {
    .cz-item { --num-w: 0px; }
    .cz-item__head {
        grid-template-columns: minmax(0, 1fr) 42px;
        gap: 8px 14px;
        padding-block: 22px;
    }
    .cz-item__num { grid-column: 1; grid-row: 1; font-size: 2.3rem; }
    .cz-item__titles { grid-column: 1; grid-row: 2; }
    .cz-item__price { grid-column: 1 / -1; grid-row: 3; justify-items: start; text-align: left; }
    .cz-item__icon { grid-column: 2; grid-row: 1; width: 42px; height: 42px; align-self: center; }
    .cz-item__body { padding-left: var(--pad-x); }
    .cz-prose :deep(ul:has(> li:nth-child(5))) { grid-template-columns: 1fr; }
    .cz-cat__head { align-items: flex-start; }
    .cz-proto__note { grid-template-columns: 1fr; gap: 18px; }
    .cz-proto__rule { width: 60px; margin-top: 0; }
    .cz-step { grid-template-columns: 64px minmax(0, 1fr); gap: 14px; }
    .cz-next__row { align-items: flex-end; }
}
</style>
