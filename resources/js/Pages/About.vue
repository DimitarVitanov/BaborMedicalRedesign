<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    about: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'За нас - Babor Medical' 
        : 'About Us - Babor Medical';
});

const stats = computed(() => [
    { number: '25+', label: locale.value === 'mk' ? 'Години искуство' : 'Years Experience', icon: 'calendar' },
    { number: '10K+', label: locale.value === 'mk' ? 'Задоволни клиенти' : 'Happy Clients', icon: 'users' },
    { number: '50+', label: locale.value === 'mk' ? 'Третмани' : 'Treatments', icon: 'sparkle' },
    { number: '15+', label: locale.value === 'mk' ? 'Експерти' : 'Experts', icon: 'award' },
]);

const values = computed(() => [
    {
        icon: 'heart',
        title: locale.value === 'mk' ? 'Посветеност' : 'Dedication',
        desc: locale.value === 'mk' ? 'Посветени сме на вашата убавина и благосостојба' : 'We are dedicated to your beauty and wellness'
    },
    {
        icon: 'shield',
        title: locale.value === 'mk' ? 'Квалитет' : 'Quality',
        desc: locale.value === 'mk' ? 'Користиме само премиум Babor производи' : 'We use only premium Babor products'
    },
    {
        icon: 'star',
        title: locale.value === 'mk' ? 'Извонредност' : 'Excellence',
        desc: locale.value === 'mk' ? 'Континуирано образование и усовршување' : 'Continuous education and improvement'
    },
]);

const formatContent = (content) => {
    if (!content) return [];
    return content.split('\n\n').filter(p => p.trim());
};
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="about.subtitle" />
        <meta name="keywords" :content="locale === 'mk' ? 'Babor Medical, за нас, дерматологија, спа, козметика, Македонија' : 'Babor Medical, about us, dermatology, spa, cosmetics, Macedonia'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="about.subtitle" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="about.subtitle" />
        <meta name="twitter:image" content="/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/about" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/about?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/about?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/about" />
    </Head>

    <div class="main-wrapper">
        <Navbar />
        
        <section class="about-hero">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-content fade-in-left">
                        <span class="section-badge">{{ locale === 'mk' ? 'ЗА НАС' : 'ABOUT US' }}</span>
                        <h1 class="hero-title">{{ about.title }}</h1>
                        <p class="hero-subtitle">{{ about.subtitle }}</p>
                    </div>
                    <div class="hero-image fade-in-right">
                        <picture>
                            <source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp">
                            <source srcset="/images/about.webp" type="image/webp">
                            <img 
                                :src="about.image || '/images/about.webp'" 
                                alt="Babor Medical Team" 
                                class="hero-img"
                                loading="eager"
                            >
                        </picture>
                    </div>
                </div>
            </div>
        </section>

        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div v-for="(stat, index) in stats" :key="index" class="stat-card fade-in-up" :class="`stagger-${index + 1}`">
                        <div class="stat-icon">
                            <svg v-if="stat.icon === 'calendar'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <rect x="3" y="4" width="18" height="18" rx="2"/>
                                <path d="M16 2v4M8 2v4M3 10h18"/>
                            </svg>
                            <svg v-else-if="stat.icon === 'users'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <svg v-else-if="stat.icon === 'sparkle'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <svg v-else-if="stat.icon === 'award'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <circle cx="12" cy="8" r="6"/>
                                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                            </svg>
                        </div>
                        <span class="stat-number">{{ stat.number }}</span>
                        <span class="stat-label">{{ stat.label }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="story-section">
            <div class="container">
                <div class="story-header fade-in-up">
                    <h2 class="section-title">{{ locale === 'mk' ? 'Нашата приказна' : 'Our Story' }}</h2>
                </div>
                <div class="story-content fade-in-up">
                    <div class="content-paragraphs">
                        <p v-for="(paragraph, index) in formatContent(about.full_content)" :key="index" class="content-paragraph">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="values-section">
            <div class="container">
                <h2 class="values-title fade-in-up">{{ locale === 'mk' ? 'Нашите вредности' : 'Our Values' }}</h2>
                <div class="values-grid">
                    <div v-for="(value, index) in values" :key="index" class="value-card fade-in-up" :class="`stagger-${index + 1}`">
                        <div class="value-icon">
                            <svg v-if="value.icon === 'heart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                            <svg v-else-if="value.icon === 'shield'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>
                            <svg v-else-if="value.icon === 'star'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3 class="value-title">{{ value.title }}</h3>
                        <p class="value-desc">{{ value.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content fade-in-up">
                    <h2 class="cta-title">{{ locale === 'mk' ? 'Подготвени сте за трансформација?' : 'Ready for transformation?' }}</h2>
                    <p class="cta-text">{{ locale === 'mk' ? 'Закажете консултација и започнете го вашето патување кон убавина' : 'Book a consultation and start your journey to beauty' }}</p>
                    <a href="#contact" class="btn-cta">
                        {{ locale === 'mk' ? 'Закажи консултација' : 'Book Consultation' }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.about-hero {
    padding: 80px 0;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content {
    max-width: 100%;
}

.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 30px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 24px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
}

.hero-image {
    position: relative;
}

.hero-img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.stats-section {
    padding: 80px 0;
    background: rgba(0, 0, 0, 0.2);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.stat-card {
    text-align: center;
    padding: 40px 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.stat-card:hover {
    background: rgba(201, 168, 124, 0.1);
    border-color: rgba(201, 168, 124, 0.3);
    transform: translateY(-5px);
}

.stat-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 20px;
    color: #c9a87c;
}

.stat-icon svg {
    width: 100%;
    height: 100%;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
}

.stat-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.story-section {
    padding: 100px 0;
}

.story-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0;
}

.story-content {
    max-width: 900px;
    margin: 0 auto;
}

.content-paragraph {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.9;
    margin-bottom: 20px;
}

.content-paragraph:last-child {
    margin-bottom: 0;
}

.values-section {
    padding: 100px 0;
    background: rgba(0, 0, 0, 0.15);
}

.values-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.value-card {
    text-align: center;
    padding: 50px 30px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    transition: all 0.3s ease;
}

.value-card:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
}

.value-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 24px;
    padding: 15px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border-radius: 16px;
    color: #c9a87c;
}

.value-icon svg {
    width: 100%;
    height: 100%;
}

.value-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
}

.value-desc {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
}

.cta-section {
    padding: 100px 0;
}

.cta-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.cta-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
}

.cta-text {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 30px;
}

.btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

@media (max-width: 991.98px) {
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .values-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .section-title,
    .values-title,
    .cta-title {
        font-size: 2rem;
    }
}

@media (max-width: 575.98px) {
    .about-hero {
        padding: 40px 0 60px;
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .stats-section,
    .story-section,
    .values-section,
    .cta-section {
        padding: 60px 0;
    }
    
    .stat-card {
        padding: 30px 15px;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .value-card {
        padding: 30px 20px;
    }
    
    .cta-title {
        font-size: 1.5rem;
    }
    
    .content-paragraph {
        font-size: 1rem;
        text-align: left;
    }
}
</style>
