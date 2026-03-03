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

const treatments = computed(() => {
    if (!props.categories) return [];
    return props.categories.flatMap(cat => cat.items || []);
});

const protocolAreas = computed(() => [
    t('Колаген стимулатори', 'Collagen stimulators'),
    t('Ботулинска терапија (Botox)', 'Botulinum therapy (Botox)'),
    t('Дермални филери', 'Dermal fillers'),
    t('Мезококтели и биоревитализација', 'Mesococktails and biorevitalization'),
    t('Пептидни формулации', 'Peptide formulations'),
    t('PRP (плазма богата со тромбоцити)', 'PRP (platelet-rich plasma)'),
]);

const combinedStrategies = computed(() => [
    t('Колаген стимулатор + ботулинска терапија', 'Collagen stimulator + botulinum therapy'),
    t('Филер + биоревитализација', 'Filler + biorevitalization'),
    t('PRP + ласер', 'PRP + laser'),
    t('Фазен anti-age протокол', 'Phased anti-age protocol'),
]);

const assessmentPoints = computed(() => [
    t('анатомска структура', 'anatomical structure'),
    t('тип на кожа', 'skin type'),
    t('степен на стареење', 'degree of aging'),
    t('претходни интервенции', 'previous interventions'),
    t('очекувања на пациентот', 'patient expectations'),
]);
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
}
</style>
