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

const technologies = computed(() => [
    {
        name: 'Ultraformer',
        desc: t(
            'Високо‑интензивен фокусиран ултразвук (HIFU) кој се користи за затегнување на кожата и подобрување на контурите на телото. Технологијата делува во подлабоките слоеви на ткивото и стимулира природна продукција на колаген.',
            'High-intensity focused ultrasound (HIFU) used for skin tightening and improving body contours. The technology works on deeper tissue layers and stimulates natural collagen production.'
        ),
        suitable: [
            t('затегнување на кожа на абдомен', 'abdomen skin tightening'),
            t('колена', 'knees'),
            t('надлактици', 'upper arms'),
            t('подобрување на локална опуштеност', 'improving local skin laxity'),
        ],
        icon: 'ultrasound',
    },
    {
        name: 'Accent Prime – RF & ' + t('ултразвук', 'Ultrasound'),
        desc: t(
            'Комбинирана технологија која користи радиофреквенција и ултразвучна енергија за редукција на масни наслаги, подобрување на микроциркулацијата и затегнување на кожата.',
            'Combined technology using radiofrequency and ultrasound energy for fat reduction, improving microcirculation and skin tightening.'
        ),
        suitable: [
            t('подобрување на текстурата на кожа', 'skin texture improvement'),
            t('намалување на целулит', 'cellulite reduction'),
            t('обликување на телесни контури', 'body contour shaping'),
        ],
        icon: 'rf',
    },
    {
        name: t('Бодипрес терапија (Balanser)', 'Body Press Therapy (Balanser)'),
        desc: t(
            'Апаратурна лимфна дренажа која ја стимулира циркулацијата и лимфниот систем.',
            'Device-assisted lymphatic drainage that stimulates circulation and the lymphatic system.'
        ),
        suitable: [
            t('намалување на задржување течности', 'reducing fluid retention'),
            t('подобрување на циркулација', 'improving circulation'),
            t('поддршка на антицелулит програми', 'support for anti-cellulite programs'),
            t('чувство на леснотија во нозете', 'feeling of lightness in the legs'),
        ],
        icon: 'lymph',
    },
    {
        name: t('EM Time – мускулна стимулација', 'EM Time – Muscle Stimulation'),
        desc: t(
            'Современа технологија за електромагнетна мускулна стимулација која активира длабоки мускулни контракции.',
            'Modern electromagnetic muscle stimulation technology that activates deep muscle contractions.'
        ),
        suitable: [
            t('зајакнување на мускулатура', 'muscle strengthening'),
            t('подобрување на тонус', 'improving tone'),
            t('поддршка на обликување на телото', 'body shaping support'),
        ],
        areas: [
            t('абдомен', 'abdomen'),
            t('глутеуси', 'glutes'),
            t('бутови', 'thighs'),
        ],
        icon: 'muscle',
    },
    {
        name: t('LaserShape – ласерска липолиза', 'LaserShape – Laser Lipolysis'),
        desc: t(
            'Неинвазивна технологија која користи ласерска енергија за стимулирање на метаболизмот на масните клетки и постепено намалување на локализирани масни наслаги.',
            'Non-invasive technology using laser energy to stimulate fat cell metabolism and gradually reduce localized fat deposits.'
        ),
        suitable: [
            t('абдомен', 'abdomen'),
            t('колкови', 'hips'),
            t('бутови', 'thighs'),
            t('области со локализирани масни депозити', 'areas with localized fat deposits'),
        ],
        icon: 'laser',
    },
]);

const programs = computed(() => [
    {
        name: 'Body Contour Program',
        desc: t(
            'Комбинација од Accent Prime, лимфна дренажа и LaserShape за обликување на телото.',
            'Combination of Accent Prime, lymphatic drainage and LaserShape for body contouring.'
        ),
    },
    {
        name: 'Anti‑Cellulite Program',
        desc: t(
            'Комбинација од RF технологија и лимфна дренажа за подобрување на текстурата на кожата.',
            'Combination of RF technology and lymphatic drainage for skin texture improvement.'
        ),
    },
    {
        name: 'Body Tightening Program',
        desc: t(
            'Ultraformer протокол за затегнување на кожа и подобрување на тонус.',
            'Ultraformer protocol for skin tightening and improving tone.'
        ),
    },
]);

const individualPlanPoints = computed(() => [
    t('тип на тело', 'body type'),
    t('распределба на масно ткиво', 'fat tissue distribution'),
    t('квалитет на кожа', 'skin quality'),
    t('лични цели', 'personal goals'),
]);
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

    <div class="body-page">
        <Navbar />

        <!-- Hero -->
        <section class="body-hero">
            <div class="hero-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
            </div>
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge fade-in-up">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/>
                            <path d="M9 21h6M10 17v4M14 17v4"/>
                        </svg>
                        {{ t('ТРЕТМАНИ НА ТЕЛО', 'BODY TREATMENTS') }}
                    </span>
                    <h1 class="hero-title fade-in-up">{{ pageTitle }}</h1>
                    <p class="hero-subtitle fade-in-up">{{ pageSubtitle }}</p>

                    <div class="hero-stats fade-in-up">
                        <div class="stat">
                            <span class="stat-number">5</span>
                            <span class="stat-label">{{ t('Технологии', 'Technologies') }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">3</span>
                            <span class="stat-label">{{ t('Програми', 'Programs') }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">{{ t('Неинвазивно', 'Non-invasive') }}</span>
                        </div>
                    </div>

                    <a href="/services/laser-aesthetic" class="other-category-link fade-in-up">
                        {{ t('Погледни', 'View') }} {{ t('Ласерски третмани', 'Laser Treatments') }}
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
        <section class="body-content">
            <div class="container">

                <!-- Intro -->
                <div class="content-block fade-in-up">
                    <p class="intro-text">{{ t('Во нашиот естетски центар, третманите на тело се базираат на современи медицинско‑естетски технологии кои овозможуваат подобрување на контурата на телото, намалување на масни наслаги, затегнување на кожата и подобрување на циркулацијата.', 'In our aesthetic center, body treatments are based on modern medical-aesthetic technologies that enable body contour improvement, fat reduction, skin tightening and circulation improvement.') }}</p>
                    <p class="intro-sub">{{ t('Секој третман започнува со кратка консултација, со цел да се избере најсоодветната технологија или комбинација на процедури.', 'Every treatment begins with a brief consultation to select the most appropriate technology or combination of procedures.') }}</p>
                    <p class="intro-highlight">{{ t('Нашиот пристап е постепен и програмски – наместо еднократни третмани, препорачуваме серија процедури за стабилен и долгорочен резултат.', 'Our approach is gradual and program-based – instead of one-time treatments, we recommend a series of procedures for stable and long-term results.') }}</p>
                </div>

                <!-- Technologies -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Технологии кои ги користиме', 'Technologies We Use') }}</h2>
                    <div class="tech-showcase">
                        <div v-for="(tech, index) in technologies" :key="tech.name" class="tech-item fade-in-up">
                            <div class="tech-header">
                                <div class="tech-number">{{ String(index + 1).padStart(2, '0') }}</div>
                                <h3 class="tech-name">{{ tech.name }}</h3>
                            </div>
                            <p class="tech-desc">{{ tech.desc }}</p>
                            <div class="tech-details">
                                <div class="detail-group">
                                    <span class="detail-label">{{ tech.areas ? t('Зони:', 'Areas:') : t('Погодно за:', 'Suitable for:') }}</span>
                                    <ul class="detail-list">
                                        <li v-for="item in (tech.areas || tech.suitable)" :key="item">{{ item }}</li>
                                    </ul>
                                </div>
                                <div v-if="tech.areas" class="detail-group">
                                    <span class="detail-label">{{ t('Ефекти:', 'Effects:') }}</span>
                                    <ul class="detail-list">
                                        <li v-for="item in tech.suitable" :key="item">{{ item }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Programs -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Програмски пристап', 'Program Approach') }}</h2>
                    <p class="block-text">{{ t('Најдобри резултати се постигнуваат кога третманите се комбинираат во структуриран план.', 'Best results are achieved when treatments are combined in a structured plan.') }}</p>
                    <div class="programs-grid">
                        <div v-for="program in programs" :key="program.name" class="program-card fade-in-up">
                            <h3 class="program-name">{{ program.name }}</h3>
                            <p class="program-desc">{{ program.desc }}</p>
                        </div>
                    </div>
                </div>

                <!-- Individual Plan -->
                <div class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Индивидуален план', 'Individual Plan') }}</h2>
                    <p class="block-text">{{ t('Секој клиент добива индивидуална препорака според:', 'Every client receives an individual recommendation based on:') }}</p>
                    <ul class="styled-list">
                        <li v-for="point in individualPlanPoints" :key="point">{{ point }}</li>
                    </ul>
                    <p class="block-note">{{ t('Нашата цел е постепено, безбедно и природно подобрување на контурата на телото.', 'Our goal is gradual, safe and natural improvement of body contours.') }}</p>
                </div>

                <!-- Admin-managed treatments -->
                <div v-if="treatments.length" class="content-block fade-in-up">
                    <h2 class="block-title">{{ t('Наши третмани', 'Our Treatments') }}</h2>
                    <div class="tech-grid">
                        <div v-for="item in treatments" :key="item.id" class="treatment-card fade-in-up">
                            <h3 class="treatment-name">{{ item.name }}</h3>
                            <div v-if="item.description" class="treatment-desc" v-html="item.description"></div>
                            <a v-if="item.url" :href="item.url" class="treatment-link">
                                {{ t('Прочитај повеќе', 'Learn more') }}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Pricing / PDF -->
                <div v-if="priceListPdf" class="content-block fade-in-up pricing-block">
                    <h2 class="block-title">{{ t('Ценовник', 'Pricing') }}</h2>
                    <p class="block-text">{{ t('Погледнете го нашиот комплетен ценовник за третмани на тело.', 'View our complete price list for body treatments.') }}</p>
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
                    <h2 class="closing-title">{{ t('Интегриран естетски план', 'Integrated Aesthetic Plan') }}</h2>
                    <p class="closing-text">{{ t('За оптимален резултат, третманите на тело често се комбинираат со козметолошки и медицинско‑естетски процедури во рамките на интегриран естетски план.', 'For optimal results, body treatments are often combined with cosmetological and medical-aesthetic procedures within an integrated aesthetic plan.') }}</p>
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
        <section class="seo-content">
            <div class="container">
                <h2>{{ t('Третмани на тело во Скопје – Babor Medical', 'Body Treatments in Skopje – Babor Medical') }}</h2>
                <p>{{ t('Babor Medical нуди напредни третмани на тело во Скопје со најсовремена апаратурна естетика. Нашите неинвазивни технологии – Ultraformer, Accent Prime, LaserShape, EM Time и Бодипрес терапија – овозможуваат обликување на тело, намалување на целулит, затегнување на кожа и подобрување на циркулацијата. Индивидуален пристап и програмски третмани за долгорочни резултати.', 'Babor Medical offers advanced body treatments in Skopje with state-of-the-art aesthetic technology. Our non-invasive technologies – Ultraformer, Accent Prime, LaserShape, EM Time and Body Press therapy – enable body contouring, cellulite reduction, skin tightening and circulation improvement. Individual approach and program treatments for long-term results.') }}</p>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.body-page {
    min-height: 100vh;
    background: #0a0f14;
    overflow-x: hidden;
}

/* Hero */
.body-hero {
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
    background: radial-gradient(circle, rgba(201, 168, 124, 0.1), transparent 70%);
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
.body-content {
    padding: 80px 0 120px;
}

.body-content .container {
    max-width: 900px;
}

/* Content Blocks */
.content-block {
    margin-bottom: 72px;
}

.intro-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.8;
    margin: 0 0 16px;
}

.intro-sub {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    margin: 0 0 16px;
}

.intro-highlight {
    font-size: 0.95rem;
    color: #c9a87c;
    font-style: italic;
    line-height: 1.8;
    margin: 0;
    padding: 16px 20px;
    border-left: 3px solid rgba(201, 168, 124, 0.4);
    background: rgba(201, 168, 124, 0.04);
    border-radius: 0 8px 8px 0;
}

.block-title {
    font-size: 1.5rem;
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

/* Technology Showcase */
.tech-showcase {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tech-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s ease;
}

.tech-item:hover {
    border-color: rgba(201, 168, 124, 0.2);
    background: rgba(255, 255, 255, 0.03);
}

.tech-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}

.tech-number {
    font-size: 0.75rem;
    font-weight: 700;
    color: #c9a87c;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 10px;
    flex-shrink: 0;
}

.tech-name {
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
}

.tech-desc {
    font-size: 0.93rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    margin: 0 0 20px;
}

.tech-details {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
}

.detail-group {
    flex: 1;
    min-width: 200px;
}

.detail-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #c9a87c;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.detail-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.detail-list li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.88rem;
    line-height: 1.5;
}

.detail-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 5px;
    height: 5px;
    background: rgba(201, 168, 124, 0.5);
    border-radius: 50%;
}

/* Programs Grid */
.programs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 8px;
}

.program-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s ease;
}

.program-card:hover {
    border-color: rgba(201, 168, 124, 0.2);
    background: rgba(255, 255, 255, 0.03);
}

.program-name {
    font-size: 1rem;
    font-weight: 700;
    color: #c9a87c;
    margin: 0 0 10px;
}

.program-desc {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0;
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

/* Treatment Grid (admin-managed) */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.treatment-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s ease;
}

.treatment-card:hover {
    border-color: rgba(201, 168, 124, 0.15);
    background: rgba(255, 255, 255, 0.03);
}

.treatment-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #c9a87c;
    margin: 0 0 12px;
}

.treatment-desc {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0;
}

.treatment-link {
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

.treatment-link:hover {
    color: #dfc09e;
}

.treatment-link svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
}

.treatment-link:hover svg {
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
    max-width: 600px;
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

/* SEO Content Block */
.seo-content {
    padding: 48px 0;
    background: rgba(255, 255, 255, 0.01);
    border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.seo-content .container {
    max-width: 900px;
}

.seo-content h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.25);
    margin: 0 0 12px;
}

.seo-content p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.15);
    line-height: 1.6;
    margin: 0;
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

    .programs-grid {
        grid-template-columns: 1fr;
    }

    .tech-details {
        flex-direction: column;
        gap: 20px;
    }
}

@media (max-width: 575.98px) {
    .body-hero {
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

    .body-content {
        padding: 60px 0 80px;
    }

    .block-title {
        font-size: 1.2rem;
    }

    .tech-item {
        padding: 24px;
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
</style>
