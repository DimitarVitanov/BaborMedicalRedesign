<script setup>
import { Head, usePage, Link } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    categories: Array,
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Услуги - Babor Medical' 
        : 'Services - Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Откријте ги нашите премиум третмани и услуги за убавина и благосостојба.'
        : 'Discover our premium beauty and wellness treatments and services.';
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ПРЕМИУМ ТРЕТМАНИ' : 'PREMIUM TREATMENTS',
    title: locale.value === 'mk' ? 'Нашите Услуги' : 'Our Services',
    subtitle: locale.value === 'mk' 
        ? 'Искусете ја трансформацијата со нашите врвни естетски третмани'
        : 'Experience transformation with our cutting-edge aesthetic treatments',
}));

const expandedItemId = ref(null);

const toggleItem = (itemId) => {
    if (expandedItemId.value === itemId) {
        expandedItemId.value = null;
    } else {
        expandedItemId.value = itemId;
    }
};

const isExpanded = (itemId) => {
    return expandedItemId.value === itemId;
};
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="locale === 'mk' ? 'услуги, третмани, Babor Medical, козметички третмани, спа, Скопје' : 'services, treatments, Babor Medical, cosmetic treatments, spa, Skopje'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <link rel="canonical" href="https://babormedical.com/services" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/services?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/services?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/services" />
    </Head>

    <div class="services-page">
        <Navbar />

        <!-- Hero Section with Animated Background -->
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
                            <span class="stat-number">50+</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Третмани' : 'Treatments' }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">5</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Категории' : 'Categories' }}</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">{{ locale === 'mk' ? 'Години' : 'Years' }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </section>

        <!-- Services Content -->
        <section class="services-content">
            <div class="container">
                <div class="categories-list">
                    <div 
                        v-for="(category, index) in categories" 
                        :key="category.id" 
                        class="category-section fade-in-up"
                    >
                        <div class="category-header">
                            <div class="category-info">
                                <span class="category-number">0{{ index + 1 }}</span>
                                <h2 class="category-title">{{ category.name }}</h2>
                            </div>
                            <span class="item-count">{{ category.items?.length || 0 }} {{ locale === 'mk' ? 'третмани' : 'treatments' }}</span>
                        </div>
                        
                        <div class="category-content">
                            <!-- Accordion Display -->
                            <div v-if="category.display_type === 'accordion'" class="services-grid">
                                <div 
                                    v-for="item in category.items" 
                                    :key="item.id" 
                                    class="service-card"
                                    :class="{ 'expanded': isExpanded(item.id) }"
                                >
                                    <div 
                                        class="service-header"
                                        @click="item.is_expandable ? toggleItem(item.id) : null"
                                        :class="{ 'clickable': item.is_expandable }"
                                    >
                                        <div class="service-info">
                                            <h3 class="service-name">{{ item.name }}</h3>
                                            <div v-if="item.price || item.duration" class="service-quick-info">
                                                <span v-if="item.duration" class="duration">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <circle cx="12" cy="12" r="10"/>
                                                        <polyline points="12 6 12 12 16 14"/>
                                                    </svg>
                                                    {{ item.duration }}
                                                </span>
                                                <span v-if="item.price" class="price">{{ item.price }} MKD</span>
                                            </div>
                                        </div>
                                        <div v-if="item.is_expandable" class="expand-btn">
                                            <svg 
                                                :class="{ 'rotated': isExpanded(item.id) }"
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                stroke-width="2"
                                            >
                                                <polyline points="6 9 12 15 18 9"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div v-show="isExpanded(item.id) && item.description" class="service-details">
                                        <div class="description" v-html="item.description"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Buttons Display -->
                            <div v-else class="buttons-grid">
                                <a 
                                    v-for="item in category.items" 
                                    :key="item.id"
                                    :href="item.url"
                                    class="service-link"
                                    :aria-label="locale === 'mk' ? `Погледни ${item.name}` : `View ${item.name}`"
                                >
                                    {{ item.name }}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-card fade-in-up">
                    <div class="cta-content">
                        <h2>{{ locale === 'mk' ? 'Подготвени за трансформација?' : 'Ready for transformation?' }}</h2>
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

/* Services Content */
.services-content {
    padding: 80px 0 100px;
}

.categories-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.category-section {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    overflow: hidden;
}

.category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.category-info {
    display: flex;
    align-items: center;
    gap: 24px;
}

.category-number {
    font-size: 0.85rem;
    font-weight: 600;
    color: #c9a87c;
    letter-spacing: 1px;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
}

.item-count {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.4);
}

.category-content {
    padding: 24px 40px 40px;
}

/* Services List */
.services-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.service-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.service-card:hover {
    border-color: rgba(201, 168, 124, 0.2);
    background: rgba(255, 255, 255, 0.03);
}

.service-card.expanded {
    border-color: rgba(201, 168, 124, 0.3);
    background: rgba(201, 168, 124, 0.03);
}

.service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    gap: 16px;
}

.service-header.clickable {
    cursor: pointer;
}

.service-info {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.service-name {
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

.service-quick-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
}

.duration {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
}

.duration svg {
    width: 12px;
    height: 12px;
}

.price {
    font-size: 0.85rem;
    font-weight: 600;
    color: #c9a87c;
}

.expand-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(201, 168, 124, 0.1);
    border-radius: 8px;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.service-card.expanded .expand-btn {
    background: rgba(201, 168, 124, 0.2);
}

.expand-btn svg {
    width: 16px;
    height: 16px;
    color: #c9a87c;
    transition: transform 0.3s ease;
}

.expand-btn svg.rotated {
    transform: rotate(180deg);
}

.service-details {
    padding: 0 24px 24px;
    background: rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(201, 168, 124, 0.1);
}

.description {
    padding-top: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.8;
    max-width: 800px;
}

.description :deep(p) {
    margin-bottom: 16px;
}

.description :deep(p:last-child) {
    margin-bottom: 0;
}

.description :deep(h2),
.description :deep(h3),
.description :deep(h4) {
    color: #c9a87c;
    margin: 20px 0 12px;
    font-weight: 600;
}

.description :deep(h2) {
    font-size: 1.1rem;
}

.description :deep(h3) {
    font-size: 1rem;
}

.description :deep(ul),
.description :deep(ol) {
    margin: 16px 0;
    padding-left: 24px;
}

.description :deep(li) {
    margin: 8px 0;
}

.description :deep(a) {
    color: #c9a87c;
    text-decoration: underline;
}

.description :deep(strong) {
    color: #fff;
    font-weight: 600;
}

.description :deep(strong) {
    color: rgba(255, 255, 255, 0.9);
}

/* Buttons Grid - same style as accordion */
.buttons-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.service-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

.service-link:hover {
    border-color: rgba(201, 168, 124, 0.3);
    background: rgba(201, 168, 124, 0.05);
    color: #fff;
}

.service-link svg {
    width: 20px;
    height: 20px;
    color: #c9a87c;
    transition: transform 0.3s ease;
}

.service-link:hover svg {
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
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 12px;
}

.cta-content p {
    font-size: 1.1rem;
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
    
    .category-header {
        padding: 24px;
    }
    
    .category-content {
        padding: 0 24px 24px;
    }
    
    .service-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    
    .cta-card {
        flex-direction: column;
        text-align: center;
        padding: 40px;
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
    
    .categories-nav {
        top: 70px;
    }
    
    .category-nav-btn {
        padding: 12px 18px;
        font-size: 0.85rem;
    }
    
    .category-title {
        font-size: 1.2rem;
    }
    
    .service-header {
        padding: 20px;
    }
    
    .service-name {
        font-size: 0.95rem;
    }
    
    .cta-content h2 {
        font-size: 1.5rem;
    }
    
    .cta-btn {
        padding: 16px 32px;
        font-size: 0.9rem;
    }
}
</style>
