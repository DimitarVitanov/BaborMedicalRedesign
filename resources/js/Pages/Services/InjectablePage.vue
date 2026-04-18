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
                'priceRange': '$$',
                'medicalSpecialty': 'Dermatology'
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

    <div class="injectable-page">
        <Navbar />

        <!-- Hero -->
        <section class="injectable-hero">
            <div class="hero-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
            </div>
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge fade-in-up">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2v6M12 16v6"/>
                            <path d="M9 8h6l-1 8H10L9 8z"/>
                            <circle cx="12" cy="5" r="1"/>
                        </svg>
                        {{ t('ИНЈЕКТБИЛНИ МЕТОДИ', 'INJECTABLE METHODS') }}
                    </span>
                    <h1 class="hero-title fade-in-up">{{ pageTitle }}</h1>
                    <p class="hero-subtitle fade-in-up">{{ pageSubtitle }}</p>

                    <div class="hero-stats fade-in-up">
                        <div class="stat">
                            <span class="stat-number">{{ treatments.length }}</span>
                            <span class="stat-label">{{ t('Методи', 'Methods') }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">6+</span>
                            <span class="stat-label">{{ t('Протоколи', 'Protocols') }}</span>
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
        <section class="injectable-content">
            <div class="container">

                <!-- Intro -->
                <div class="content-block fade-in-up" v-if="categoryDescription">
                    <p class="intro-text">{{ categoryDescription }}</p>
                </div>

                <!-- What do protocols cover -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Што опфаќаат инјектбилните протоколи?', 'What do injectable protocols cover?') }}</h2>
                    <ul class="styled-list">
                        <li v-for="area in protocolAreas" :key="area">{{ area }}</li>
                    </ul>
                    <p class="block-note">{{ t('Секоја од овие категории има различна биолошка улога и различна индикација.', 'Each of these categories has a different biological role and different indication.') }}</p>
                </div>

                <!-- Treatment Cards -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Наши методи', 'Our Methods') }}</h2>
                    <div class="tech-grid">
                        <div v-for="item in treatments" :key="item.id" class="tech-card fade-in-up">
                            <h3 class="tech-name">{{ item.name }}</h3>
                            <div v-if="item.description" class="tech-desc" v-html="item.description"></div>
                            <a v-if="item.url" :href="item.url" class="tech-link">
                                {{ t('Прочитај повеќе', 'Learn more') }}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Protocol approach -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Протокол наместо изолирана процедура', 'Protocol instead of isolated procedure') }}</h2>
                    <p class="block-text">{{ t('Во Babor Medical развиваме комбинирани стратегии како:', 'At Babor Medical we develop combined strategies such as:') }}</p>
                    <ul class="styled-list">
                        <li v-for="strategy in combinedStrategies" :key="strategy">{{ strategy }}</li>
                    </ul>
                    <p class="block-note">{{ t('Целта е долгорочна стабилност, природен изглед и постепена регенерација.', 'The goal is long-term stability, natural look and gradual regeneration.') }}</p>
                </div>

                <!-- Individual Assessment -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Индивидуална проценка', 'Individual Assessment') }}</h2>
                    <p class="block-text">{{ t('Секој третман започнува со детална анализа на:', 'Every treatment starts with a detailed analysis of:') }}</p>
                    <ul class="styled-list">
                        <li v-for="point in assessmentPoints" :key="point">{{ point }}</li>
                    </ul>
                    <p class="block-note">{{ t('Врз основа на тоа се креира персонализиран план.', 'Based on this, a personalized plan is created.') }}</p>
                </div>

                <!-- Pricing / PDF -->
                <div v-if="priceListPdf" class="content-block fade-in-up pricing-block">
                    <h2 class="block-title">{{ t('Ценовник', 'Pricing') }}</h2>
                    <p class="block-text">{{ t('Погледнете го нашиот комплетен ценовник за инјектибилни третмани.', 'View our complete price list for injectable treatments.') }}</p>
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
                    <h2 class="closing-title">{{ t('Природноста е наш приоритет', 'Naturalness is our priority') }}</h2>
                    <p class="closing-text">{{ t('Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.', 'Injectable methods are a powerful tool when applied with clinical logic and measure.') }}</p>
                    <p class="closing-tagline">
                        {{ t('Нашата стратегија е стабилизација, не претерување.', 'Our strategy is stabilization, not excess.') }}<br/>
                        {{ t('Регенерација, не маскирање.', 'Regeneration, not masking.') }}
                    </p>
                    <a href="/contact" class="cta-btn">
                        {{ t('Закажи консултација', 'Book a consultation') }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-header fade-in-up">
                    <h2 class="faq-title">{{ t('Најчесто поставувани прашања', 'Frequently Asked Questions') }}</h2>
                </div>
                <div class="faq-grid">
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Кои инјектибилни третмани ги нудите во Скопје?', 'What injectable treatments do you offer in Skopje?') }}</h3>
                        <p class="faq-answer">{{ t('Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.', 'At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Дали филерите и ботоксот се безбедни?', 'Are fillers and botox safe?') }}</h3>
                        <p class="faq-answer">{{ t('Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.', 'Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Колку трае ефектот од филери и ботокс?', 'How long do fillers and botox last?') }}</h3>
                        <p class="faq-answer">{{ t('Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.', 'Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years.') }}</p>
                    </div>
                    <div class="faq-item fade-in-up">
                        <h3 class="faq-question">{{ t('Колку чини ботокс и филери во Скопје?', 'How much do botox and fillers cost in Skopje?') }}</h3>
                        <p class="faq-answer">{{ t('Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.', 'Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933.') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.injectable-page {
    min-height: 100vh;
    background: #0a0f14;
    overflow-x: hidden;
}

/* Hero */
.injectable-hero {
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
.injectable-content {
    padding: 80px 0 120px;
}

.injectable-content .container {
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
    margin: 0;
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

/* Technology/Treatment Grid */
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

.tech-desc {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0;
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
    margin: 0 auto 12px;
    line-height: 1.7;
}

.closing-tagline {
    font-size: 0.95rem;
    color: #c9a87c;
    font-style: italic;
    margin: 0 auto 32px;
    line-height: 1.8;
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
    .injectable-hero {
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

    .injectable-content {
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

/* FAQ Section */
.faq-section { padding: 100px 0; border-top: 1px solid rgba(255,255,255,0.06); }
.faq-header { text-align: center; margin-bottom: 60px; }
.faq-title { font-size: clamp(1.75rem,4vw,2.5rem); font-weight: 700; color: #fff; }
.faq-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; max-width: 1000px; margin: 0 auto; }
.faq-item { padding: 32px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; transition: all 0.3s ease; }
.faq-item:hover { border-color: rgba(201,168,124,0.2); background: rgba(201,168,124,0.03); }
.faq-question { font-size: 1.05rem; font-weight: 600; color: #c9a87c; margin: 0 0 12px; line-height: 1.4; }
.faq-answer { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0; }
@media (max-width: 767.98px) { .faq-section { padding: 60px 0; } .faq-grid { grid-template-columns: 1fr; } .faq-item { padding: 24px; } }
</style>
