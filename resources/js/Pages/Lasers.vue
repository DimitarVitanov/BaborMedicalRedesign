<script setup>
import { Head, usePage, Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    equipment: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Ласери и Опрема - Babor Medical' 
        : 'Lasers & Equipment - Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Запознајте се со нашата најсовремена ласерска технологија и медицинска опрема за естетски третмани.'
        : 'Discover our state-of-the-art laser technology and medical equipment for aesthetic treatments.';
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ТЕХНОЛОГИЈА' : 'TECHNOLOGY',
    title: locale.value === 'mk' ? 'Наши Ласери' : 'Our Lasers',
    subtitle: locale.value === 'mk' 
        ? 'Најсовремена технологија за извонредни резултати'
        : 'State-of-the-art technology for exceptional results',
    viewDetails: locale.value === 'mk' ? 'Погледни детали' : 'View Details',
}));
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="locale === 'mk' ? 'ласери, ласерска епилација, Alma Soprano, естетска медицина, Babor Medical, Скопје' : 'lasers, laser hair removal, Alma Soprano, aesthetic medicine, Babor Medical, Skopje'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <link rel="canonical" href="https://babormedical.com/lasers" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/lasers?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/lasers?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/lasers" />
    </Head>

    <Navbar />

    <main class="lasers-page">
        <!-- Hero Section -->
        <section class="lasers-hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <span class="section-badge">{{ content.badge }}</span>
                    <h1 class="hero-title">{{ content.title }}</h1>
                    <p class="hero-subtitle">{{ content.subtitle }}</p>
                </div>
            </div>
            <div class="hero-glow"></div>
        </section>

        <!-- Equipment List -->
        <section class="equipment-section">
            <div class="container">
                <div 
                    v-for="(item, index) in equipment" 
                    :key="item.id" 
                    class="equipment-card fade-in-up"
                    :class="{ 'reverse': index % 2 === 1 }"
                    :style="{ '--delay': `${index * 0.1}s` }"
                >
                    <div class="equipment-image">
                        <picture>
                            <source 
                                v-if="item.image_mobile_webp" 
                                :srcset="'/storage/' + item.image_mobile_webp" 
                                media="(max-width: 768px)" 
                                type="image/webp"
                            />
                            <source 
                                v-if="item.image_desktop_webp" 
                                :srcset="'/storage/' + item.image_desktop_webp" 
                                media="(min-width: 769px)" 
                                type="image/webp"
                            />
                            <img 
                                :src="item.image ? '/storage/' + item.image : '/images/placeholder.webp'" 
                                :alt="item.title"
                                loading="lazy"
                            />
                        </picture>
                        <div class="image-glow"></div>
                    </div>
                    
                    <div class="equipment-content">
                        <span class="equipment-category">{{ item.category }}</span>
                        <h2 class="equipment-title">{{ item.title }}</h2>
                        <p class="equipment-description">{{ item.description }}</p>
                        
                        <Link 
                            v-if="item.slug"
                            :href="`/lasers/${item.slug}`" 
                            class="equipment-link"
                        >
                            {{ content.viewDetails }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <Footer />
</template>

<style scoped>
.lasers-page {
    min-height: 100vh;
}

/* Hero Section */
.lasers-hero {
    padding: 160px 0 80px;
    position: relative;
    text-align: center;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.3), rgba(201, 168, 124, 0.15));
    border: 1px solid rgba(201, 168, 124, 0.4);
    border-radius: 30px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 24px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
}

.hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.15) 0%, transparent 70%);
    pointer-events: none;
}

/* Equipment Section */
.equipment-section {
    padding: 60px 0 120px;
}

.equipment-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    padding: 60px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.equipment-card:last-child {
    border-bottom: none;
}

.equipment-card.reverse {
    direction: rtl;
}

.equipment-card.reverse > * {
    direction: ltr;
}

.equipment-image {
    position: relative;
}

.equipment-image img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
    position: relative;
    z-index: 2;
}

.image-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.2) 0%, transparent 70%);
    filter: blur(40px);
    z-index: 1;
}

.equipment-category {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(201, 168, 124, 0.15);
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 20px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.equipment-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.equipment-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 24px;
}

/* Equipment Link */
.equipment-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #c9a87c 0%, #b8956a 100%);
    color: #1e2d3d;
    padding: 14px 28px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.equipment-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
}

/* Responsive */
@media (max-width: 991.98px) {
    .lasers-hero {
        padding: 140px 0 60px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .equipment-card {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 40px 0;
    }
    
    .equipment-card.reverse {
        direction: ltr;
    }
    
    .equipment-image {
        text-align: center;
    }
    
    .equipment-image img {
        max-width: 350px;
    }
    
    .equipment-content {
        text-align: center;
    }
    
    .equipment-category {
        margin-left: auto;
        margin-right: auto;
    }
    
    .equipment-link {
        margin: 0 auto;
    }
    
    .equipment-title {
        font-size: 2rem;
    }
}

@media (max-width: 575.98px) {
    .lasers-hero {
        padding: 120px 0 40px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .equipment-card {
        padding: 30px 0;
    }
    
    .equipment-image img {
        max-width: 280px;
    }
    
    .equipment-title {
        font-size: 1.5rem;
    }
    
    .equipment-description {
        font-size: 1rem;
    }
    
}

</style>
