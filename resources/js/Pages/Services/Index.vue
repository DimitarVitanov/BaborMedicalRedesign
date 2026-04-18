<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

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

    <div class="services-page">
        <Navbar />

        <!-- Hero Section -->
        <section class="services-hero">
            <div class="hero-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
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
                </div>
            </div>
        </section>

        <!-- Categories Section -->
        <section class="categories-section">
            <div class="container">
                <div class="categories-grid">
                    <a 
                        v-for="category in categories" 
                        :key="category.id"
                        :href="category.href"
                        class="category-box fade-in-up"
                    >
                        <div class="box-icon">
                            <svg v-if="category.icon === 'sparkles'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/>
                                <path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z"/>
                                <path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z"/>
                            </svg>
                            <svg v-else-if="category.icon === 'laser'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2C12 2 14 6 14 10C14 14 12 18 12 22"/>
                                <path d="M12 2C12 2 10 6 10 10C10 14 12 18 12 22"/>
                                <path d="M4 12H20"/>
                                <circle cx="12" cy="12" r="10"/>
                            </svg>
                            <svg v-else-if="category.icon === 'injectable'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2v6M12 16v6"/>
                                <path d="M9 8h6l-1 8H10L9 8z"/>
                                <circle cx="12" cy="5" r="1"/>
                            </svg>
                            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2a4 4 0 0 1 4 4c0 2-1.5 3.5-4 5-2.5-1.5-4-3-4-5a4 4 0 0 1 4-4z"/>
                                <path d="M8 11c-2 1-4 3-4 6 0 2.5 3 5 8 5s8-2.5 8-5c0-3-2-5-4-6"/>
                                <path d="M9 16h6"/>
                            </svg>
                        </div>
                        <h2 class="box-title">{{ category.name }}</h2>
                        <p class="box-description">{{ category.description }}</p>
                        <div class="box-cta">
                            <span>{{ locale === 'mk' ? 'Погледни Третмани' : 'View Treatments' }}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-card fade-in-up">
                    <div class="cta-content">
                        <h2>{{ locale === 'mk' ? 'Не сте сигурни кој третман е за вас?' : 'Not sure which treatment is for you?' }}</h2>
                        <p>{{ locale === 'mk' ? 'Закажете бесплатна консултација со нашите експерти' : 'Book a free consultation with our experts' }}</p>
                    </div>
                    <a href="/contact" class="cta-btn">
                        {{ locale === 'mk' ? 'Закажи Консултација' : 'Book Consultation' }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </a>
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
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 160px 0 80px;
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
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #1e3a5f 0%, transparent 70%);
    bottom: -150px;
    left: -100px;
    animation-delay: -7s;
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
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 24px;
    line-height: 1.1;
    letter-spacing: -1px;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.7;
    font-weight: 300;
}

/* Categories Section */
.categories-section {
    padding: 40px 0 120px;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.category-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 36px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    text-decoration: none;
    transition: all 0.4s ease;
    overflow: hidden;
}

.category-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.1), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.category-box:hover {
    border-color: rgba(201, 168, 124, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
}

.category-box:hover::before {
    opacity: 1;
}

.box-icon {
    position: relative;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.15), rgba(201, 168, 124, 0.05));
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 50%;
    margin-bottom: 28px;
    transition: all 0.4s ease;
}

.category-box:hover .box-icon {
    transform: scale(1.08);
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.25), rgba(201, 168, 124, 0.1));
}

.box-icon svg {
    width: 40px;
    height: 40px;
    color: #c9a87c;
}

.box-title {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 14px;
    transition: color 0.3s ease;
}

.category-box:hover .box-title {
    color: #c9a87c;
}

.box-description {
    position: relative;
    z-index: 1;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    margin: 0 0 28px;
    max-width: 280px;
}

.box-cta {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 100px;
    color: #c9a87c;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: auto;
}

.category-box:hover .box-cta {
    background: #c9a87c;
    color: #0a0f14;
    border-color: #c9a87c;
}

.box-cta svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
}

.category-box:hover .box-cta svg {
    transform: translateX(4px);
}

/* CTA Section */
.cta-section {
    padding: 0 0 120px;
}

.cta-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 60px 80px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.1), rgba(201, 168, 124, 0.02));
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 32px;
    position: relative;
    overflow: hidden;
}

.cta-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.15), transparent 70%);
    pointer-events: none;
}

.cta-content {
    position: relative;
    z-index: 1;
}

.cta-content h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 12px;
}

.cta-content p {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 20px 40px;
    background: linear-gradient(135deg, #c9a87c, #a88a5c);
    border-radius: 100px;
    color: #0a0f14;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
}

.cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(201, 168, 124, 0.4);
}

.cta-btn svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.cta-btn:hover svg {
    transform: translateX(5px);
}

/* Responsive */
@media (max-width: 991.98px) {
    
    .cta-card {
        flex-direction: column;
        text-align: center;
        padding: 40px;
    }
}

@media (max-width: 575.98px) {
    .categories-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .services-hero {
        padding: 140px 0 60px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .category-box {
        padding: 40px 24px;
    }
    
    .box-icon {
        width: 80px;
        height: 80px;
    }
    
    .box-icon svg {
        width: 36px;
        height: 36px;
    }
    
    .box-title {
        font-size: 1.4rem;
    }
    
    .cta-content h2 {
        font-size: 1.4rem;
    }
    
    .cta-btn {
        padding: 16px 32px;
        font-size: 0.9rem;
    }
}
</style>
