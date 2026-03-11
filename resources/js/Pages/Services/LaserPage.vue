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

const seoTitle = computed(() => `${props.pageTitle} - Babor Medical`);
const seoDescription = computed(() => props.pageSubtitle);

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
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
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
</style>
