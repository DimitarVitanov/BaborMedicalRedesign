<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

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

    <div class="laser-page">
        <Navbar />

        <!-- Hero -->
        <section class="laser-hero">
            <div class="hero-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
            </div>
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge fade-in-up">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                        {{ t('ЛАСЕРСКИ ТРЕТМАНИ', 'LASER TREATMENTS') }}
                    </span>
                    <h1 class="hero-title fade-in-up">{{ pageTitle }}</h1>
                    <p class="hero-subtitle fade-in-up">{{ pageSubtitle }}</p>

                    <div class="hero-stats fade-in-up">
                        <div class="stat">
                            <span class="stat-number">{{ technologies.length }}</span>
                            <span class="stat-label">{{ t('Технологии', 'Technologies') }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">7+</span>
                            <span class="stat-label">{{ t('Индикации', 'Indications') }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">{{ t('Години', 'Years') }}</span>
                        </div>
                    </div>

                    <a href="/services/cosmetology" class="other-category-link fade-in-up">
                        {{ t('Погледни', 'View') }} {{ t('Козметологија', 'Cosmetology') }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="laser-content">
            <div class="container">

                <!-- Intro -->
                <div class="content-block fade-in-up" v-if="categoryDescription">
                    <p class="intro-text">{{ categoryDescription }}</p>
                </div>

                <!-- What we treat -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Што третираме со ласерска технологија?', 'What do we treat with laser technology?') }}</h2>
                    <ul class="styled-list">
                        <li v-for="area in treatmentAreas" :key="area">{{ area }}</li>
                    </ul>
                </div>

                <!-- Technologies -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Наши технологии', 'Our Technologies') }}</h2>
                    <div class="tech-grid">
                        <div v-for="tech in technologies" :key="tech.id" class="tech-card fade-in-up">
                            <h3 class="tech-name">{{ tech.name }}</h3>
                            <div v-if="tech.description" class="tech-desc" v-html="tech.description"></div>
                            <a v-if="tech.url" :href="tech.url" class="tech-link">
                                {{ t('Прочитај повеќе', 'Learn more') }}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Our Approach -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Нашиот пристап – протокол наместо изолирана процедура', 'Our approach – protocol instead of isolated procedure') }}</h2>
                    <p class="block-text">{{ t('Во Babor Medical развиваме комбинирани стратегии:', 'At Babor Medical we develop combined strategies:') }}</p>
                    <ul class="styled-list">
                        <li v-for="strategy in approachStrategies" :key="strategy">{{ strategy }}</li>
                    </ul>
                    <p class="block-note">{{ t('Целта не е само моментален ефект, туку долгорочна регенерација и стабилизација на кожата.', 'The goal is not just an immediate effect, but long-term regeneration and stabilization of the skin.') }}</p>
                </div>

                <!-- Assessment & Safety -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Стручна проценка и безбедност', 'Expert assessment and safety') }}</h2>
                    <p class="block-text">{{ t('Секој третман започнува со детална проценка и структурирано интервју. Врз основа на клиничката слика се одредува:', 'Every treatment starts with a detailed assessment and structured interview. Based on the clinical picture, the following is determined:') }}</p>
                    <ul class="styled-list">
                        <li v-for="point in assessmentPoints" :key="point">{{ point }}</li>
                    </ul>
                    <p class="block-note">{{ t('Безбедноста, индивидуалниот пристап и природниот резултат се наш приоритет.', 'Safety, individual approach and natural result are our priority.') }}</p>
                </div>

                <!-- Pricing / PDF -->
                <div v-if="priceListPdf" class="content-block fade-in-up pricing-block">
                    <h2 class="block-title">{{ t('Ценовник', 'Pricing') }}</h2>
                    <p class="block-text">{{ t('Погледнете го нашиот комплетен ценовник за ласерски третмани.', 'View our complete price list for laser treatments.') }}</p>
                    <div class="pdf-actions">
                        <a :href="priceListPdf" target="_blank" class="pdf-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                            {{ t('Отвори ценовник (PDF)', 'View Price List (PDF)') }}
                        </a>
                        <a :href="priceListPdf" download class="pdf-btn pdf-btn-secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            {{ t('Преземи ценовник', 'Download Price List') }}
                        </a>
                    </div>
                </div>

                <!-- Closing -->
                <div class="closing-block fade-in-up">
                    <h2 class="closing-title">{{ t('Ласерот е алатка. Протоколот е стратегија.', 'The laser is a tool. The protocol is the strategy.') }}</h2>
                    <p class="closing-text">{{ t('Нашата цел е да создадеме стабилен, здрав и природен изглед преку внимателно планирани и персонализирани третмани.', 'Our goal is to create a stable, healthy and natural look through carefully planned and personalized treatments.') }}</p>
                    <a href="/contact" class="cta-btn">
                        {{ t('Закажи консултација', 'Book a consultation') }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

            </div>
        </section>

        <!-- SEO Content Block -->
        <section class="laser-content seo-section">
            <div class="container">
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Ласерска епилација во Скопје – Babor Medical', 'Laser Hair Removal in Skopje – Babor Medical') }}</h2>
                    <p class="block-text">{{ t('Babor Medical е водечки центар за ласерска епилација во Скопје. Со најнапредната технологија Alma Soprano Titanium нудиме безболна и ефективна ласерска епилација за лице и тело, за жени и мажи. Нашите сертифицирани специјалисти обезбедуваат персонализиран пристап за секој пациент, со јасни резултати од првиот третман.', 'Babor Medical is a leading center for laser hair removal in Skopje. With the most advanced Alma Soprano Titanium technology, we offer painless and effective laser hair removal for face and body, for women and men. Our certified specialists provide a personalized approach for each patient, with clear results from the first treatment.') }}</p>
                </div>

                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Зошто да изберете Babor Medical за ласерска епилација?', 'Why choose Babor Medical for laser hair removal?') }}</h2>
                    <ul class="styled-list">
                        <li>{{ t('Alma Soprano Titanium – златен стандард за ласерска епилација', 'Alma Soprano Titanium – gold standard for laser hair removal') }}</li>
                        <li>{{ t('Безболна процедура со систем за ладење', 'Painless procedure with cooling system') }}</li>
                        <li>{{ t('Ефективна за сите типови кожа и влакна', 'Effective for all skin and hair types') }}</li>
                        <li>{{ t('Стручен тим со повеќегодишно искуство', 'Expert team with years of experience') }}</li>
                        <li>{{ t('Третмани за лице, тело, бикини зона и цело тело', 'Treatments for face, body, bikini area and full body') }}</li>
                        <li>{{ t('Поволни пакет цени за ласерска епилација', 'Affordable package prices for laser hair removal') }}</li>
                    </ul>
                </div>

                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Ласерски третмани за подмладување и регенерација', 'Laser treatments for rejuvenation and regeneration') }}</h2>
                    <p class="block-text">{{ t('Покрај ласерска епилација, во Babor Medical нудиме широк спектар на ласерски третмани за лице и тело: Alma Q за пигментации и тетоважи, Alma Hybrid за подмладување и ресурфејсинг, Ultraformer за лифтинг без операција, и Accent Prime за обликување на тело и стрии. Сите третмани се изведуваат со најсовремена опрема во Скопје.', 'In addition to laser hair removal, at Babor Medical we offer a wide range of laser treatments for face and body: Alma Q for pigmentation and tattoos, Alma Hybrid for rejuvenation and resurfacing, Ultraformer for non-surgical lifting, and Accent Prime for body contouring and stretch marks. All treatments are performed with state-of-the-art equipment in Skopje.') }}</p>
                </div>

                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Повеќе за Alma Soprano Titanium', 'More about Alma Soprano Titanium') }}</h2>
                    <p class="block-text">
                        {{ t('Прочитајте детално за нашиот Alma Soprano Titanium ласер – златниот стандард во ласерска епилација со три бранови должини во една сонда за безболно и трајно отстранување на влакна.', 'Read in detail about our Alma Soprano Titanium laser – the gold standard in laser hair removal with three wavelengths in one probe for painless and permanent hair removal.') }}
                    </p>
                    <a href="/lasers/alma-soprano-titanium" class="seo-link">{{ t('Alma Soprano Titanium – Ласерска Епилација', 'Alma Soprano Titanium – Laser Hair Removal') }}</a>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="section-header fade-in-up">
                    <h2 class="section-title">{{ t('Најчесто поставувани прашања', 'Frequently Asked Questions') }}</h2>
                    <p class="section-subtitle">{{ t('Одговори на најчестите прашања за ласерска епилација и ласерски третмани', 'Answers to the most common questions about laser hair removal and laser treatments') }}</p>
                </div>

                <div class="faq-grid">
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Колку чини ласерска епилација во Скопје?', 'How much does laser hair removal cost in Skopje?') }}</h3>
                        <p class="faq-answer">{{ t('Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933.', 'Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Дали ласерската епилација е болна?', 'Is laser hair removal painful?') }}</h3>
                        <p class="faq-answer">{{ t('Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот.', 'No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Колку третмани се потребни за трајно отстранување на влакна?', 'How many treatments are needed for permanent hair removal?') }}</h3>
                        <p class="faq-answer">{{ t('Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно.', 'Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Кој ласер го користите за ласерска епилација?', 'Which laser do you use for hair removal?') }}</h3>
                        <p class="faq-answer">{{ t('Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна.', 'At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Каде се наоѓа Babor Medical во Скопје?', 'Where is Babor Medical located in Skopje?') }}</h3>
                        <p class="faq-answer">{{ t('Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница.', 'Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Дали ласерската епилација е ефективна за сите типови кожа?', 'Is laser hair removal effective for all skin types?') }}</h3>
                        <p class="faq-answer">{{ t('Да, Alma Soprano Titanium е ефективен за сите типови кожа (I-VI по Фицпатрик скала), вклучувајќи потемна кожа. Тројната бранова должина овозможува прилагодување на третманот за секој пациент.', 'Yes, Alma Soprano Titanium is effective for all skin types (I-VI on the Fitzpatrick scale), including darker skin. The triple wavelength allows treatment customization for each patient.') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.laser-page {
    min-height: 100vh;
    background: #0a0f14;
    overflow-x: hidden;
}

/* Hero */
.laser-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 0 80px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
}

.orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.15), transparent 70%);
    top: -200px;
    right: -100px;
    animation: float1 8s ease-in-out infinite;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(30, 45, 61, 0.4), transparent 70%);
    bottom: -100px;
    left: -100px;
    animation: float2 10s ease-in-out infinite;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.08), transparent 70%);
    top: 50%;
    left: 50%;
    animation: float3 12s ease-in-out infinite;
}

@keyframes float1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-30px, 20px); }
}

@keyframes float2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -30px); }
}

@keyframes float3 {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-50%, -45%); }
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 50px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 32px;
}

.hero-badge svg {
    width: 16px;
    height: 16px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 20px;
    letter-spacing: -2px;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 600px;
    margin: 0 auto 48px;
    line-height: 1.7;
}

.hero-stats {
    display: inline-flex;
    align-items: center;
    gap: 32px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 24px 48px;
    margin-bottom: 40px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: #c9a87c;
    line-height: 1;
}

.stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 6px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
}

.other-category-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    transition: all 0.3s ease;
}

.other-category-link:hover {
    color: #c9a87c;
    border-color: rgba(201, 168, 124, 0.3);
    background: rgba(201, 168, 124, 0.05);
}

.other-category-link svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
}

.other-category-link:hover svg {
    transform: translateX(4px);
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
}

.mouse {
    width: 24px;
    height: 38px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    position: relative;
}

.wheel {
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease infinite;
}

@keyframes scroll {
    0%, 100% { opacity: 1; top: 8px; }
    50% { opacity: 0.3; top: 20px; }
}

/* Main Content */
.laser-content {
    padding: 80px 0 120px;
}

.laser-content .container {
    max-width: 820px;
}

/* Content Blocks */
.content-block {
    margin-bottom: 64px;
}

.intro-text {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin: 0 0 16px;
}

.intro-note {
    font-size: 0.95rem;
    color: #c9a87c;
    font-style: italic;
    margin: 0;
    line-height: 1.7;
}

.block-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 24px;
    letter-spacing: 0.3px;
}

.block-text {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin: 0 0 16px;
}

.block-note {
    font-size: 0.93rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    margin: 20px 0 0;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    line-height: 1.7;
}

/* Styled List */
.styled-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.styled-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.6;
}

.styled-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: #c9a87c;
    border-radius: 50%;
}

/* Technology Grid */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.tech-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s ease;
}

.tech-card:hover {
    border-color: rgba(201, 168, 124, 0.15);
    background: rgba(255, 255, 255, 0.03);
}

.tech-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #c9a87c;
    margin: 0 0 12px;
}

.tech-subtitle {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 12px;
    line-height: 1.5;
}

.tech-desc {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0 0 12px;
}

.tech-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    color: #c9a87c;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.tech-link:hover {
    color: #dfc09e;
}

.tech-link svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
}

.tech-link:hover svg {
    transform: translateX(4px);
}

.tech-section {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.tech-section-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tech-section-content {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.6;
}

.tech-section-content :deep(ul) {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tech-section-content :deep(li) {
    position: relative;
    padding-left: 14px;
    margin-bottom: 4px;
}

.tech-section-content :deep(li)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    background: rgba(201, 168, 124, 0.6);
    border-radius: 50%;
}

/* Closing Block */
.closing-block {
    text-align: center;
    padding: 60px 40px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
}

.closing-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 16px;
}

.closing-text {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 550px;
    margin: 0 auto 32px;
    line-height: 1.7;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: linear-gradient(135deg, #c9a87c, #a88a5c);
    border-radius: 100px;
    color: #0a0f14;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(201, 168, 124, 0.35);
}

.cta-btn svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
}

.cta-btn:hover svg {
    transform: translateX(4px);
}

/* Responsive */
@media (max-width: 991.98px) {
    .scroll-indicator {
        display: none;
    }

    .hero-stats {
        flex-direction: column;
        gap: 24px;
        padding: 32px;
    }

    .stat-divider {
        width: 60px;
        height: 1px;
    }

    .tech-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 575.98px) {
    .laser-hero {
        padding: 100px 0 60px;
        min-height: auto;
    }

    .hero-badge {
        padding: 10px 20px;
        font-size: 0.7rem;
    }

    .hero-title {
        font-size: 2.5rem;
        letter-spacing: -1px;
    }

    .hero-subtitle {
        font-size: 1rem;
        margin-bottom: 32px;
    }

    .laser-content {
        padding: 60px 0 80px;
    }

    .block-title {
        font-size: 1.2rem;
    }

    .closing-block {
        padding: 40px 24px;
    }

    .closing-title {
        font-size: 1.25rem;
    }

    .pdf-actions {
        flex-direction: column;
    }

    .pdf-btn {
        justify-content: center;
    }
}

/* Pricing / PDF Section */
.pricing-block {
    border: 1px solid rgba(201, 168, 124, 0.15);
    border-radius: 16px;
    padding: 40px;
    background: rgba(201, 168, 124, 0.03);
}

.pdf-actions {
    display: flex;
    gap: 16px;
    margin-top: 24px;
    flex-wrap: wrap;
}

.pdf-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 100px;
    color: #c9a87c;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.pdf-btn:hover {
    background: rgba(201, 168, 124, 0.2);
    border-color: rgba(201, 168, 124, 0.5);
    color: #c9a87c;
    transform: translateY(-2px);
}

.pdf-btn-secondary {
    background: transparent;
    border-color: rgba(201, 168, 124, 0.15);
    color: rgba(201, 168, 124, 0.7);
}

.pdf-btn-secondary:hover {
    background: rgba(201, 168, 124, 0.08);
    color: #c9a87c;
}

/* SEO Content Section */
.seo-section {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.seo-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    color: #c9a87c;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.seo-link:hover {
    color: #fff;
}

/* FAQ Section */
.faq-section {
    padding: 100px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.faq-section .section-header {
    text-align: center;
    margin-bottom: 60px;
}

.faq-section .section-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #fff;
    margin: 0 0 16px;
}

.faq-section .section-subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.5);
    max-width: 600px;
    margin: 0 auto;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto;
}

.faq-item {
    padding: 32px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: rgba(201, 168, 124, 0.2);
    background: rgba(201, 168, 124, 0.03);
}

.faq-question {
    font-size: 1.05rem;
    font-weight: 600;
    color: #c9a87c;
    margin: 0 0 12px;
    line-height: 1.4;
}

.faq-answer {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 767.98px) {
    .faq-section {
        padding: 60px 0;
    }

    .faq-grid {
        grid-template-columns: 1fr;
    }

    .faq-item {
        padding: 24px;
    }
}
</style>
