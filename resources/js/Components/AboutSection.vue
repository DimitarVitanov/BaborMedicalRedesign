<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MaskText from '@/Components/Site/MaskText.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import Counter from '@/Components/Site/Counter.vue';
import Icon from '@/Components/Site/Icon.vue';

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
    // Kept for content parity — this list was hidden (d-none) in the previous design too.
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

// The scroll-lit statement needs plain text; fall back to v-html if the CMS ever stores markup.
const subtitleIsPlain = computed(() => !/<[a-z!/][\s\S]*>/i.test(content.value.subtitle || ''));
</script>

<template>
    <section class="about-section bm-about bm-cream bm-sheet bm-section">
        <div class="bm-container">
            <div class="bm-about__head">
                <span class="section-badge bm-eyebrow" data-reveal>{{ content.badge }}</span>
                <h2 class="about-title bm-h2 bm-about__title">
                    <MaskText :text="content.title" />
                </h2>
            </div>

            <ScrollWords v-if="subtitleIsPlain" :text="content.subtitle" tag="p" class="about-subtitle bm-about__statement" />
            <div v-else class="about-subtitle bm-about__statement" v-html="content.subtitle"></div>

            <div class="bm-about__grid">
                <div class="bm-about__visual">
                    <div class="bm-about__frame" data-reveal="mask">
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
                    </div>
                    <div class="bm-about__float bm-about__float--a" data-reveal style="--d: 0.35s">
                        <span class="bm-about__float-icon"><Icon name="check" :size="18" :stroke="2" /></span>
                        <span class="bm-about__float-text">
                            <strong>100%</strong>
                            <span>{{ locale === 'mk' ? 'Задоволство' : 'Satisfaction' }}</span>
                        </span>
                    </div>
                    <div class="bm-about__float bm-about__float--b" data-reveal style="--d: 0.5s">
                        <span class="bm-about__float-icon"><Icon name="star" :size="18" :stroke="1.8" /></span>
                        <span class="bm-about__float-text">
                            <strong>5.0</strong>
                            <span>{{ locale === 'mk' ? 'Рејтинг' : 'Rating' }}</span>
                        </span>
                    </div>
                </div>

                <div class="bm-about__content">
                    <div class="about-description bm-about__desc bm-prose" data-reveal v-html="content.description"></div>

                    <!-- Hidden in the previous design as well (d-none); kept so no content is dropped -->
                    <div class="features-list d-none">
                        <div v-for="(feature, index) in content.features" :key="index" class="feature-item">
                            <h4>{{ feature.title }}</h4>
                            <p>{{ feature.desc }}</p>
                        </div>
                    </div>

                    <div class="about-cta-group bm-about__actions" data-reveal style="--d: 0.15s">
                        <a href="/about" class="bm-btn bm-btn--wine">
                            <span>{{ content.cta }}<span class="visually-hidden"> about Babor Medical</span></span>
                            <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                        </a>
                        <a href="/contact" class="bm-btn bm-btn--ghost" :aria-label="locale === 'mk' ? 'Закажи консултација во Babor Medical' : 'Book a consultation at Babor Medical'">
                            {{ content.ctaContact }}
                        </a>
                    </div>

                    <div class="stats-grid bm-about__stats">
                        <div
                            v-for="(stat, index) in content.stats"
                            :key="index"
                            class="stat-box bm-about__stat"
                            data-reveal
                            :style="{ '--d': `${0.1 * index}s` }"
                        >
                            <span class="stat-number bm-about__stat-num"><Counter :value="stat.number" /></span>
                            <span class="stat-label bm-about__stat-label">{{ stat.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* This block was hidden by Bootstrap's d-none; Bootstrap no longer loads on
   public pages, so hide it here (content kept in the DOM for parity). */
.features-list { display: none; }

.bm-about__head {
    display: grid;
    grid-template-columns: minmax(180px, 0.42fr) 1fr;
    gap: 32px;
    align-items: baseline;
}
.bm-about__title { max-width: 900px; }

.bm-about__statement {
    margin-top: clamp(48px, 7vw, 96px);
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.9rem, 3.9vw, 3.6rem);
    line-height: 1.18;
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 1180px;
}

.bm-about__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 100px);
    align-items: center;
    margin-top: clamp(64px, 9vw, 128px);
}

.bm-about__visual { position: relative; }
.bm-about__frame {
    position: relative;
    overflow: hidden;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    aspect-ratio: 4 / 4.6;
    box-shadow: 0 50px 90px -50px rgba(82, 26, 47, 0.55);
}
.bm-about__frame picture, .bm-about__frame img { width: 100%; height: 100%; }
.bm-about__frame img { object-fit: cover; }
.bm-about__frame::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(56, 19, 34, 0.45));
    pointer-events: none;
}

.bm-about__float {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 22px 14px 14px;
    border-radius: 999px;
    background: #fffaf5;
    box-shadow: 0 24px 50px -24px rgba(82, 26, 47, 0.45);
    color: var(--ink);
}
.bm-about__float--a { left: -24px; bottom: 16%; }
.bm-about__float--b { right: -18px; top: 18%; }
.bm-about__float-icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
}
.bm-about__float-text { display: grid; line-height: 1.15; }
.bm-about__float-text strong { font-family: var(--font-display); font-size: 1.5rem; font-weight: 400; }
.bm-about__float-text span { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); }

.bm-about__desc { color: var(--ink-soft); font-size: 1.08rem; }
.bm-about__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }

.bm-about__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: clamp(44px, 5vw, 64px);
    border-top: 1px solid var(--line-light);
}
.bm-about__stat {
    display: grid;
    gap: 6px;
    padding: 26px 0 22px;
    border-bottom: 1px solid var(--line-light);
}
.bm-about__stat:nth-child(odd) { padding-right: 24px; border-right: 1px solid var(--line-light); }
.bm-about__stat:nth-child(even) { padding-left: 28px; }
.bm-about__stat-num {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2.6rem, 4.2vw, 3.9rem);
    line-height: 1;
    color: var(--wine-600);
}
.bm-about__stat-label { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-soft); }

@media (max-width: 991.98px) {
    .bm-about__head { grid-template-columns: 1fr; gap: 18px; }
    .bm-about__grid { grid-template-columns: 1fr; }
    .bm-about__visual { max-width: 520px; width: 100%; margin-inline: auto; }
}
@media (max-width: 575.98px) {
    .bm-about__float { padding: 10px 16px 10px 10px; }
    .bm-about__float-icon { width: 36px; height: 36px; }
    .bm-about__float--a { left: -6px; }
    .bm-about__float--b { right: -6px; }
    .bm-about__actions .bm-btn { flex: 1 1 auto; }
}
</style>
