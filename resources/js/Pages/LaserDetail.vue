<script setup>
import { Head, usePage, Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    equipment: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return `${props.equipment.title} - Babor Medical`;
});

const content = computed(() => ({
    backToLasers: locale.value === 'mk' ? '← Назад кон ласери' : '← Back to Lasers',
    learnMore: locale.value === 'mk' ? 'Официјална страница' : 'Official Website',
    contactUs: locale.value === 'mk' ? 'Контактирајте нè' : 'Contact Us',
    contactDesc: locale.value === 'mk' 
        ? 'Заинтересирани сте за овој третман? Контактирајте нè за консултација.'
        : 'Interested in this treatment? Contact us for a consultation.',
}));
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="equipment.description" />
        <meta name="keywords" :content="`${equipment.title}, ласер, laser, Babor Medical, ${equipment.category}`" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="equipment.description" />
        <meta property="og:type" content="article" />
        <meta property="og:image" :content="equipment.image ? '/storage/' + equipment.image : '/logo.webp'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="equipment.description" />
        <meta name="twitter:image" :content="equipment.image ? '/storage/' + equipment.image : '/logo.webp'" />
        <link rel="canonical" :href="`/lasers/${equipment.slug}`" />
        <link rel="alternate" hreflang="en" :href="`/lasers/${equipment.slug}?lang=en`" />
        <link rel="alternate" hreflang="mk" :href="`/lasers/${equipment.slug}?lang=mk`" />
        <link rel="alternate" hreflang="x-default" :href="`/lasers/${equipment.slug}`" />
    </Head>

    <Navbar />

    <main class="laser-detail-page">
        <!-- Hero Section -->
        <section class="detail-hero">
            <div class="container">
                <Link href="/lasers" class="back-link fade-in-up">
                    {{ content.backToLasers }}
                </Link>
                
                <div class="hero-grid">
                    <div class="hero-content fade-in-up">
                        <span class="equipment-category">{{ equipment.category }}</span>
                        <h1 class="hero-title">{{ equipment.title }}</h1>
                        <p class="hero-description">{{ equipment.description }}</p>
                        
                        <div class="hero-actions">
                            <a 
                                v-if="equipment.link" 
                                :href="equipment.link" 
                                target="_blank" 
                                class="btn-primary"
                            >
                                {{ content.learnMore }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                            </a>
                            <Link href="/contact" class="btn-secondary">
                                {{ content.contactUs }}
                            </Link>
                        </div>
                    </div>
                    
                    <div class="hero-image fade-in-up" style="--delay: 0.2s">
                        <picture>
                            <source 
                                v-if="equipment.image_mobile_webp" 
                                :srcset="'/storage/' + equipment.image_mobile_webp" 
                                media="(max-width: 768px)" 
                                type="image/webp"
                            />
                            <source 
                                v-if="equipment.image_desktop_webp" 
                                :srcset="'/storage/' + equipment.image_desktop_webp" 
                                media="(min-width: 769px)" 
                                type="image/webp"
                            />
                            <img 
                                :src="equipment.image ? '/storage/' + equipment.image : '/images/placeholder.webp'" 
                                :alt="equipment.title"
                            />
                        </picture>
                        <div class="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detailed Content Section -->
        <section v-if="equipment.detailed_description" class="detail-content">
            <div class="container">
                <div class="content-wrapper fade-in-up">
                    <div 
                        class="prose-content"
                        v-html="equipment.detailed_description"
                    ></div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="detail-cta">
            <div class="container">
                <div class="cta-card fade-in-up">
                    <h2>{{ content.contactUs }}</h2>
                    <p>{{ content.contactDesc }}</p>
                    <Link href="/contact" class="btn-primary">
                        {{ content.contactUs }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    </main>

    <Footer />
</template>

<style scoped>
.laser-detail-page {
    min-height: 100vh;
}

/* Hero Section */
.detail-hero {
    padding: 140px 0 80px;
    position: relative;
}

.back-link {
    display: inline-flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    text-decoration: none;
    margin-bottom: 40px;
    transition: color 0.3s ease;
}

.back-link:hover {
    color: #c9a87c;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
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
    margin-bottom: 20px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-description {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 32px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.btn-primary {
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

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
}

.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    padding: 14px 28px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

.hero-image {
    position: relative;
    text-align: center;
}

.hero-image img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
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
    filter: blur(60px);
    z-index: 1;
}

/* Detail Content Section */
.detail-content {
    padding: 80px 0;
    background: rgba(255, 255, 255, 0.02);
}

.content-wrapper {
    max-width: 900px;
    margin: 0 auto;
}

.prose-content {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.05rem;
    line-height: 1.9;
}

.prose-content :deep(h2) {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    margin: 48px 0 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(201, 168, 124, 0.3);
}

.prose-content :deep(h2):first-child {
    margin-top: 0;
}

.prose-content :deep(h3) {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    margin: 36px 0 16px;
}

.prose-content :deep(h4) {
    font-size: 1.15rem;
    font-weight: 600;
    color: #c9a87c;
    margin: 28px 0 12px;
}

.prose-content :deep(p) {
    margin: 16px 0;
}

.prose-content :deep(ul),
.prose-content :deep(ol) {
    margin: 20px 0;
    padding-left: 28px;
}

.prose-content :deep(li) {
    margin: 10px 0;
}

.prose-content :deep(strong) {
    color: #c9a87c;
    font-weight: 600;
}

.prose-content :deep(a) {
    color: #c9a87c;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.prose-content :deep(a:hover) {
    color: #fff;
}

.prose-content :deep(blockquote) {
    margin: 24px 0;
    padding: 20px 24px;
    background: rgba(201, 168, 124, 0.1);
    border-left: 4px solid #c9a87c;
    border-radius: 0 8px 8px 0;
    font-style: italic;
}

/* CTA Section */
.detail-cta {
    padding: 80px 0 120px;
}

.cta-card {
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.15) 0%, rgba(201, 168, 124, 0.05) 100%);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 24px;
}

.cta-card h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
}

.cta-card p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 28px;
}

/* Responsive */
@media (max-width: 991.98px) {
    .detail-hero {
        padding: 120px 0 60px;
    }
    
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .hero-title {
        font-size: 2.2rem;
    }
    
    .hero-image {
        order: -1;
    }
    
    .hero-image img {
        max-height: 350px;
    }
}

@media (max-width: 575.98px) {
    .detail-hero {
        padding: 100px 0 40px;
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .hero-actions {
        flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
        justify-content: center;
    }
    
    .detail-content {
        padding: 60px 0;
    }
    
    .prose-content {
        font-size: 1rem;
    }
    
    .prose-content :deep(h2) {
        font-size: 1.5rem;
    }
    
    .prose-content :deep(h3) {
        font-size: 1.2rem;
    }
    
    .cta-card {
        padding: 40px 24px;
    }
    
    .cta-card h2 {
        font-size: 1.5rem;
    }
}
</style>
