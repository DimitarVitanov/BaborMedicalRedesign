<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

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
                'priceRange': '$$',
                'medicalSpecialty': 'Dermatology'
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

    <div class="services-page">
        <Navbar />

        <!-- Hero Section -->
        <section class="services-hero">
            <div class="hero-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
            </div>
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge fade-in-up">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                        {{ content.badge }}
                    </span>
                    <h1 class="hero-title fade-in-up">{{ content.title }}</h1>
                    <p class="hero-subtitle fade-in-up">{{ content.subtitle }}</p>
                    <div class="hero-stats fade-in-up">
                        <div class="stat">
                            <span class="stat-number">{{ totalTreatments }}+</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Третмани' : 'Treatments' }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">{{ categories?.length || 0 }}</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Категории' : 'Categories' }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Години' : 'Years' }}</span>
                        </div>
                    </div>
                    
                    <a :href="otherCategoryLink.href" class="other-category-link fade-in-up">
                        {{ locale === 'mk' ? 'Погледни' : 'View' }} {{ otherCategoryLink.name }}
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

        <!-- Content Below Hero -->
        <section class="treatments-section">
            <div class="container">
                <!-- Intro -->
                <div v-for="category in categories" :key="category.id" class="intro fade-in-up">
                    <p v-if="category.description" class="intro-text">{{ category.description }}</p>
                </div>

                <!-- Protocol Box -->
                <div class="protocol-box fade-in-up">
                    <p class="protocol-title">{{ locale === 'mk' ? 'Секој третман започнува со:' : 'Every treatment starts with:' }}</p>
                    <ul class="protocol-list">
                        <li>{{ locale === 'mk' ? 'професионална анализа на кожата' : 'professional skin analysis' }}</li>
                        <li>{{ locale === 'mk' ? 'структурирана консултација' : 'structured consultation' }}</li>
                        <li>{{ locale === 'mk' ? 'индивидуален избор на активни состојки' : 'individual selection of active ingredients' }}</li>
                        <li>{{ locale === 'mk' ? 'препорака за домашна нега' : 'home care recommendation' }}</li>
                    </ul>
                    <p class="protocol-note">{{ locale === 'mk' ? 'Работиме исклучиво со оригинални BABOR и DOCTOR BABOR формули, произведени во Германија според фармацевтски стандарди.' : 'We work exclusively with original BABOR and DOCTOR BABOR formulas, manufactured in Germany according to pharmaceutical standards.' }}</p>
                </div>

                <!-- Treatment Cards -->
                <div class="treatments-list">
                    <article 
                        v-for="(item, idx) in treatments" 
                        :key="item.id" 
                        class="treatment fade-in-up"
                    >
                        <div class="treatment-header">
                            <span class="treatment-num">{{ idx + 1 }}.</span>
                            <div>
                                <h2 class="treatment-name">{{ item.name }}</h2>
                                <p v-if="item.subtitle" class="treatment-subtitle">{{ item.subtitle }}</p>
                            </div>
                        </div>

                        <div v-if="item.description" class="treatment-desc" v-html="item.description"></div>

                        <div v-if="item.includes" class="treatment-section">
                            <h3 class="section-label">{{ locale === 'mk' ? 'Вклучува:' : 'Includes:' }}</h3>
                            <div class="section-content" v-html="item.includes"></div>
                        </div>

                        <div v-if="item.indications" class="treatment-section">
                            <h3 class="section-label">{{ locale === 'mk' ? 'Индикации:' : 'Indications:' }}</h3>
                            <div class="section-content" v-html="item.indications"></div>
                        </div>

                        <div v-if="item.components" class="treatment-section">
                            <h3 class="section-label">{{ locale === 'mk' ? 'Активни компоненти:' : 'Active components:' }}</h3>
                            <div class="section-content" v-html="item.components"></div>
                        </div>

                        <div v-if="item.effects" class="treatment-section">
                            <h3 class="section-label">{{ locale === 'mk' ? 'Дејство:' : 'Effects:' }}</h3>
                            <div class="section-content" v-html="item.effects"></div>
                        </div>

                        <div v-if="item.suitable_for" class="treatment-section">
                            <h3 class="section-label">{{ locale === 'mk' ? 'Погоден за:' : 'Suitable for:' }}</h3>
                            <div class="section-content" v-html="item.suitable_for"></div>
                        </div>

                        <p v-if="item.note" class="treatment-note" v-html="item.note"></p>

                        <p v-if="formatPrice(item)" class="treatment-price">
                            {{ locale === 'mk' ? 'Цена' : 'Price' }}: {{ formatPrice(item) }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.services-page {
    min-height: 100vh;
    background: #0a0f14;
    overflow-x: hidden;
}

/* Hero Section */
.services-hero {
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
    filter: blur(100px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
}

.orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #c9a87c 0%, transparent 70%);
    top: -200px;
    right: -100px;
    animation-delay: 0s;
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #1e3a5f 0%, transparent 70%);
    bottom: -150px;
    left: -100px;
    animation-delay: -7s;
}

.orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #c9a87c 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    animation-delay: -14s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, -30px) scale(1.05); }
    50% { transform: translate(-20px, 20px) scale(0.95); }
    75% { transform: translate(20px, 10px) scale(1.02); }
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 100px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
}

.hero-badge svg {
    width: 16px;
    height: 16px;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 24px;
    line-height: 1;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #fff 0%, #c9a87c 50%, #fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 200% center; }
}

.hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 500px;
    margin: 0 auto 48px;
    line-height: 1.7;
    font-weight: 300;
}

.hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 32px 48px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    margin-bottom: 32px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #c9a87c;
    line-height: 1;
    margin-bottom: 8px;
}

.stat-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-divider {
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, transparent, rgba(201, 168, 124, 0.3), transparent);
}

.other-category-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    transition: all 0.3s ease;
}

.other-category-link:hover {
    color: #c9a87c;
    border-color: rgba(201, 168, 124, 0.4);
    background: rgba(201, 168, 124, 0.1);
}

.other-category-link svg {
    width: 18px;
    height: 18px;
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
    animation: bounce 2s ease-in-out infinite;
}

.mouse {
    width: 26px;
    height: 42px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    position: relative;
}

.wheel {
    width: 4px;
    height: 8px;
    background: #c9a87c;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
}

@keyframes scroll {
    0%, 100% { opacity: 1; top: 8px; }
    50% { opacity: 0.3; top: 20px; }
}

/* Treatments Section */
.treatments-section {
    padding: 80px 0 120px;
    max-width: 820px;
    margin: 0 auto;
}

.treatments-section .container {
    max-width: 820px;
}

/* Intro */
.intro {
    margin-bottom: 32px;
}

.intro-text {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin: 0;
}

/* Protocol Box */
.protocol-box {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 32px 36px;
    margin-bottom: 64px;
}

.protocol-title {
    font-size: 1rem;
    font-weight: 600;
    color: #c9a87c;
    margin: 0 0 16px;
}

.protocol-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
}

.protocol-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.6;
}

.protocol-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: #c9a87c;
    border-radius: 50%;
}

.protocol-note {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.45);
    font-style: italic;
    margin: 0;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    line-height: 1.7;
}

/* Treatment List */
.treatments-list {
    display: flex;
    flex-direction: column;
    gap: 56px;
}

/* Single Treatment */
.treatment {
    padding-bottom: 56px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.treatment:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.treatment-header {
    display: flex;
    gap: 16px;
    align-items: baseline;
    margin-bottom: 12px;
}

.treatment-num {
    font-size: 1.3rem;
    font-weight: 700;
    color: #c9a87c;
    flex-shrink: 0;
}

.treatment-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    letter-spacing: 0.5px;
}

.treatment-subtitle {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    margin: 4px 0 0;
}

.treatment-desc {
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 20px;
}

.treatment-desc :deep(p) {
    margin: 0;
}

/* Treatment Sections (Includes, Indications, etc.) */
.treatment-section {
    margin-bottom: 20px;
}

.section-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #c9a87c;
    margin: 0 0 8px;
}

.section-content {
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.93rem;
    line-height: 1.7;
}

.section-content :deep(p) {
    margin: 0 0 8px;
}

.section-content :deep(p:last-child) {
    margin-bottom: 0;
}

.section-content :deep(ul),
.section-content :deep(ol) {
    margin: 0;
    padding-left: 20px;
}

.section-content :deep(li) {
    margin: 4px 0;
}

.section-content :deep(li)::marker {
    color: rgba(201, 168, 124, 0.4);
}

.section-content :deep(strong) {
    color: rgba(255, 255, 255, 0.9);
}

/* Note */
.treatment-note {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    margin: 16px 0 0;
    line-height: 1.7;
}

.treatment-note :deep(p) {
    margin: 0;
}

/* Price */
.treatment-price {
    font-size: 1rem;
    font-weight: 600;
    color: #c9a87c;
    margin: 20px 0 0;
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
}

@media (max-width: 575.98px) {
    .services-hero {
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
    
    .treatments-section {
        padding: 60px 0 80px;
    }
    
    .protocol-box {
        padding: 24px;
    }
    
    .treatment-name {
        font-size: 1.15rem;
    }
    
    .treatments-list {
        gap: 40px;
    }
    
    .treatment {
        padding-bottom: 40px;
    }
}
</style>
