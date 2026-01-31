<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    about: {
        type: Object,
        default: null,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ЗА НАС' : 'ABOUT US',
    title: props.about?.title || (locale.value === 'mk' ? 'Вашиот партнер за убавина и здравје' : 'Your Partner in Beauty & Wellness'),
    subtitle: props.about?.subtitle || (locale.value === 'mk' 
        ? 'Со повеќе од 25 години искуство, Babor Medical е водечки центар за дерматологија и спа третмани во Македонија.'
        : 'With over 25 years of experience, Babor Medical is the leading dermatology and spa center in Macedonia.'),
    description: props.about?.short_description || (locale.value === 'mk'
        ? 'Нашиот тим од сертифицирани дерматолози и козметичари користи најсовремена технологија и премиум Babor производи за да ви обезбеди исклучителни резултати.'
        : 'Our team of certified dermatologists and aestheticians uses cutting-edge technology and premium Babor products to deliver exceptional results.'),
    image: props.about?.image || '/images/about.webp',
    stats: [
        { number: '25+', label: locale.value === 'mk' ? 'Години искуство' : 'Years Experience' },
        { number: '10K+', label: locale.value === 'mk' ? 'Задоволни клиенти' : 'Happy Clients' },
        { number: '50+', label: locale.value === 'mk' ? 'Третмани' : 'Treatments' },
        { number: '15+', label: locale.value === 'mk' ? 'Експерти' : 'Experts' },
    ],
    features: [
        {
            icon: 'certified',
            title: locale.value === 'mk' ? 'Сертифицирани експерти' : 'Certified Experts',
            desc: locale.value === 'mk' ? 'Тим од лиценцирани дерматолози' : 'Team of licensed dermatologists'
        },
        {
            icon: 'technology',
            title: locale.value === 'mk' ? 'Модерна технологија' : 'Modern Technology',
            desc: locale.value === 'mk' ? 'Најнова опрема и техники' : 'Latest equipment and techniques'
        },
        {
            icon: 'products',
            title: locale.value === 'mk' ? 'Премиум производи' : 'Premium Products',
            desc: locale.value === 'mk' ? 'Официјален Babor партнер' : 'Official Babor partner'
        },
    ],
    cta: locale.value === 'mk' ? 'Прочитај повеќе' : 'Read more',
    ctaAriaLabel: locale.value === 'mk' ? 'Прочитај повеќе за Babor Medical' : 'Read more about Babor Medical',
    ctaContact: locale.value === 'mk' ? 'Закажи консултација' : 'Book Consultation'
}));
</script>

<template>
    <section class="about-section">
        <div class="container">
            <div class="about-grid">
                <div class="about-content fade-in-left">
                    <span class="section-badge">{{ content.badge }}</span>
                    <h2 class="about-title">{{ content.title }}</h2>
                    <p class="about-subtitle">{{ content.subtitle }}</p>
                    <p class="about-description">{{ content.description }}</p>
                    
                    <div class="features-list">
                        <div v-for="(feature, index) in content.features" :key="index" class="feature-item">
                            <div class="feature-icon">
                                <svg v-if="feature.icon === 'certified'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 15l-2 5l1.5-1l1.5 1l1.5-1l1.5 1l-2-5"/>
                                    <circle cx="12" cy="9" r="6"/>
                                    <path d="M9 9l2 2l4-4"/>
                                </svg>
                                <svg v-else-if="feature.icon === 'technology'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                                    <path d="M8 21h8"/>
                                    <path d="M12 17v4"/>
                                    <path d="M7 8h2m2 0h2m2 0h2"/>
                                    <path d="M7 11h10"/>
                                </svg>
                                <svg v-else-if="feature.icon === 'products'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2L2 7l10 5l10-5l-10-5z"/>
                                    <path d="M2 17l10 5l10-5"/>
                                    <path d="M2 12l10 5l10-5"/>
                                </svg>
                            </div>
                            <div class="feature-text">
                                <h4>{{ feature.title }}</h4>
                                <p>{{ feature.desc }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="about-cta-group">
                        <a href="/about" class="btn-cta about-cta" :aria-label="content.ctaAriaLabel">
                            {{ content.cta }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                        <a href="/contact" class="btn-outline about-cta-secondary" :aria-label="locale === 'mk' ? 'Закажи консултација во Babor Medical' : 'Book a consultation at Babor Medical'">
                            {{ content.ctaContact }}
                        </a>
                    </div>
                </div>

                <div class="about-visual fade-in-right">
                    <div class="visual-wrapper">
                        <picture class="about-image-wrapper">
                            <source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp">
                            <source srcset="/images/about.webp" type="image/webp">
                            <img 
                                src="/images/about.webp" 
                                alt="Babor Medical Team" 
                                class="about-image"
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="534"
                            >
                        </picture>
                        <div class="floating-card card-1">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <div class="card-text">
                                <span class="card-number">100%</span>
                                <span class="card-label">{{ locale === 'mk' ? 'Задоволство' : 'Satisfaction' }}</span>
                            </div>
                        </div>
                        <div class="floating-card card-2">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div class="card-text">
                                <span class="card-number">5.0</span>
                                <span class="card-label">{{ locale === 'mk' ? 'Рејтинг' : 'Rating' }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="stats-grid">
                        <div v-for="(stat, index) in content.stats" :key="index" class="stat-box fade-in-up" :class="`stagger-${index + 1}`">
                            <span class="stat-number">{{ stat.number }}</span>
                            <span class="stat-label">{{ stat.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section {
    padding: 0px 0px;
    background: transparent;
    position: relative;
    z-index: 1;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
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

.about-title {
    font-size: 2.8rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 20px;
}

.about-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 16px;
}

.about-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    margin-bottom: 40px;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.feature-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    background: rgba(201, 168, 124, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a87c;
}

.feature-icon svg {
    width: 24px;
    height: 24px;
}

.feature-text h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin: 0 0 4px 0;
}

.feature-text p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
}

.about-cta-group {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.about-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.btn-outline {
    background: transparent;
    border: 2px solid rgba(201, 168, 124, 0.5);
    color: #c9a87c;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
}

.btn-outline:hover {
    background: rgba(201, 168, 124, 0.1);
    border-color: #c9a87c;
    color: #c9a87c;
}

.about-visual {
    position: relative;
}

.visual-wrapper {
    position: relative;
    margin-bottom: 30px;
}

.about-image-wrapper {
    display: block;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
}

.about-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
    object-fit: cover;
}

.floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-1 {
    bottom: 60px;
    left: -30px;
    animation: float 4s ease-in-out infinite;
}

.card-2 {
    top: 40px;
    right: -20px;
    animation: float 4s ease-in-out infinite 1s;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.card-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #c9a87c, #e8d5c4);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.card-icon svg {
    width: 20px;
    height: 20px;
}

.card-text {
    display: flex;
    flex-direction: column;
}

.card-number {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1a1a2e;
}

.card-label {
    font-size: 0.75rem;
    color: #666;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.stat-box {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 20px 16px;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-box:hover {
    background: rgba(201, 168, 124, 0.1);
    border-color: rgba(201, 168, 124, 0.3);
}

.stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #c9a87c;
    margin-bottom: 4px;
}

.stat-label {
    display: block;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

@media (max-width: 1199.98px) {
    .about-grid {
        gap: 50px;
    }
    
    .about-title {
        font-size: 2.2rem;
    }
    
    .floating-card.card-1 {
        left: 10px;
    }
    
    .floating-card.card-2 {
        right: 10px;
    }
}

@media (max-width: 991.98px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .about-content {
        text-align: center;
    }
    
    .features-list {
        align-items: center;
    }
    
    .feature-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .about-visual {
        max-width: 500px;
        margin: 0 auto;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 575.98px) {
    .about-section {
        padding: 0;
    }
    
    .about-title {
        font-size: 1.8rem;
    }
    
    .about-cta-group {
        justify-content: center;
    }
    
    .floating-card {
        padding: 12px 16px;
    }
    
    .card-number {
        font-size: 1rem;
    }
    
    .stats-grid {
        gap: 12px;
    }
    
    .stat-box {
        padding: 16px 12px;
    }
    
    .stat-number {
        font-size: 1.25rem;
    }
}
</style>
