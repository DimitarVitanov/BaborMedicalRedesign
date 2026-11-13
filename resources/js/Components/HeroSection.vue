<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import MaskText from '@/Components/Site/MaskText.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const sliderRef = ref(null);
const sectionRef = ref(null);
let startX = 0;
let isDragging = false;

const defaultSlides = [
    {
        subtitle: 'Welcome to Babor Medical',
        title: 'Premium',
        highlight: 'Skincare',
        description: 'Great skincare should feel luxurious. Experience the perfect blend of science and nature for radiant, healthy skin.',
        cta_text: 'Explore Products',
        cta_link: '#',
        secondary_text: 'Learn More',
        secondary_link: '#'
    },
    {
        subtitle: 'Advanced Treatments',
        title: 'Medical',
        highlight: 'Excellence',
        description: 'Cutting-edge dermatological solutions backed by decades of research and innovation for transformative results.',
        cta_text: 'Our Services',
        cta_link: '#',
        secondary_text: 'Book Now',
        secondary_link: '#'
    },
    {
        subtitle: 'Natural Beauty',
        title: 'Radiant',
        highlight: 'Results',
        description: 'Discover the power of nature combined with science. Our treatments reveal your skin\'s natural beauty.',
        cta_text: 'View Products',
        cta_link: '#',
        secondary_text: 'Contact Us',
        secondary_link: '#'
    }
];

const activeSlides = computed(() => {
    return props.slides && props.slides.length > 0 ? props.slides : defaultSlides;
});

const currentSlide = ref(0);
const isAnimating = ref(false);
let autoplayInterval = null;

const nextSlide = () => {
    if (isAnimating.value) return;
    isAnimating.value = true;
    currentSlide.value = (currentSlide.value + 1) % activeSlides.value.length;
    setTimeout(() => { isAnimating.value = false; }, 800);
};

const prevSlide = () => {
    if (isAnimating.value) return;
    isAnimating.value = true;
    currentSlide.value = (currentSlide.value - 1 + activeSlides.value.length) % activeSlides.value.length;
    setTimeout(() => { isAnimating.value = false; }, 800);
};

const goToSlide = (index) => {
    if (isAnimating.value || index === currentSlide.value) return;
    isAnimating.value = true;
    currentSlide.value = index;
    setTimeout(() => { isAnimating.value = false; }, 800);
};

const handleStart = (e) => {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
};

const handleEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
};

const handleCancel = () => {
    isDragging = false;
};

const startAutoplay = () => {
    if (!autoplayInterval && activeSlides.value.length > 1) {
        autoplayInterval = setInterval(nextSlide, 8000);
    }
};

// Gentle parallax on the stage while the hero scrolls away
let raf = 0;
const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
        raf = 0;
        const y = Math.min(window.scrollY, window.innerHeight);
        sectionRef.value?.style.setProperty('--hy', `${y}`);
    });
};

const pad = (n) => String(n).padStart(2, '0');
const sealText = computed(() => locale.value === 'mk'
    ? 'Babor Medical · Ласерски естетски центар · Скопје · '
    : 'Babor Medical · Laser Aesthetic Center · Skopje · ');
const scrollLabel = computed(() => locale.value === 'mk' ? 'Скролај' : 'Scroll');

onMounted(() => {
    // Start autoplay after first user interaction to avoid CLS
    const events = ['click', 'touchstart', 'scroll'];
    const handler = () => {
        startAutoplay();
        events.forEach(e => window.removeEventListener(e, handler));
    };
    events.forEach(e => window.addEventListener(e, handler, { once: false, passive: true }));

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', onScroll, { passive: true });
    }
});

onUnmounted(() => {
    if (autoplayInterval) clearInterval(autoplayInterval);
    window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
    <section ref="sectionRef" class="hero-section bm-hero bm-grain">
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="bm-columns-bg" aria-hidden="true"></div>

        <div
            ref="sliderRef"
            class="bm-hero__slider"
            @mousedown="handleStart"
            @mouseup="handleEnd"
            @mouseleave="handleCancel"
            @touchstart.passive="handleStart"
            @touchend.passive="handleEnd"
            @touchcancel.passive="handleCancel"
        >
            <div
                v-for="(slide, index) in activeSlides"
                :key="index"
                class="bm-hero__slide"
                :class="{ 'is-active': currentSlide === index }"
                :aria-hidden="currentSlide === index ? null : 'true'"
            >
                <div class="bm-container bm-hero__grid">
                    <div class="bm-hero__copy">
                        <p class="bm-eyebrow bm-hero__eyebrow bm-intro" style="--d: 0s">{{ slide.subtitle }}</p>
                        <!-- Slide 1 is the LCP element: it must paint with the first frame,
                             so it gets NO entrance animation. Later slides animate in. -->
                        <component :is="index === 0 ? 'h1' : 'h2'" class="bm-display bm-hero__title">
                            <template v-if="index === 0">
                                <span>{{ slide.title }}</span>
                                {{ ' ' }}<br />
                                <span class="bm-accent">{{ slide.highlight }}</span>
                            </template>
                            <template v-else>
                                <MaskText :text="slide.title" :delay="0.1" instant />
                                {{ ' ' }}<br />
                                <MaskText :text="slide.highlight" class="bm-accent" :delay="0.1" :start="String(slide.title || '').split(' ').length" instant />
                            </template>
                        </component>
                        <p class="bm-lead bm-hero__desc bm-intro" style="--d: 0.2s">{{ slide.description }}</p>
                        <div class="bm-hero__actions bm-intro" style="--d: 0.32s">
                            <a :href="slide.cta_link || '#'" class="bm-btn">
                                <span>{{ slide.cta_text }}<span class="visually-hidden"> - {{ slide.title }} {{ slide.highlight }}</span></span>
                                <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                            </a>
                            <a :href="slide.secondary_link || '#'" class="bm-btn bm-btn--ghost">
                                {{ slide.secondary_text }}<span class="visually-hidden"> - {{ slide.title }} {{ slide.highlight }}</span>
                            </a>
                        </div>
                    </div>

                    <!-- Slide 1's image is an LCP candidate: no entrance animation on it. -->
                    <div class="bm-hero__visual"><div class="bm-hero__visual-in" :class="index === 0 ? '' : 'bm-intro bm-intro--scale'" style="--d: 0.15s">
                        <div class="bm-hero__arch bm-arch bm-stage">
                            <span class="bm-hero__ring" aria-hidden="true"></span>
                            <picture v-if="slide.image || slide.image_desktop_webp">
                                <!-- Mobile WebP (max 768px) -->
                                <source
                                    v-if="slide.image_mobile_webp"
                                    media="(max-width: 768px)"
                                    :srcset="'/storage/' + slide.image_mobile_webp"
                                    type="image/webp"
                                >
                                <!-- Desktop WebP (769px+) -->
                                <source
                                    v-if="slide.image_desktop_webp"
                                    media="(min-width: 769px)"
                                    :srcset="'/storage/' + slide.image_desktop_webp"
                                    type="image/webp"
                                >
                                <!-- Fallback image -->
                                <img
                                    :src="slide.image ? '/storage/' + slide.image : '/storage/' + slide.image_desktop_webp"
                                    :alt="slide.title"
                                    class="hero-image bm-hero__img"
                                    width="450"
                                    height="500"
                                    :loading="index === 0 ? 'eager' : 'lazy'"
                                    decoding="async"
                                    :fetchpriority="index === 0 ? 'high' : 'auto'"
                                />
                            </picture>
                            <div v-else class="bm-hero__noimg">
                                <Icon name="sparkle" :size="56" :stroke="1" />
                                <p>No image uploaded</p>
                            </div>
                        </div>
                        <RotatingBadge class="bm-hero__seal" :text="sealText" logo="/logo.webp" :size="148" />
                        <div class="bm-hero__caption" aria-hidden="true">
                            <span>{{ pad(index + 1) }}</span>
                            <span class="bm-hero__caption-line"></span>
                            <span>{{ slide.highlight }}</span>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>

        <div class="bm-container bm-hero__footer">
            <div class="bm-hero__scroll" aria-hidden="true">
                <span class="bm-hero__scroll-line"></span>
                {{ scrollLabel }}
            </div>

            <div v-if="activeSlides.length > 1" class="bm-hero__controls">
                <span class="bm-hero__count">{{ pad(currentSlide + 1) }} <i>/ {{ pad(activeSlides.length) }}</i></span>
                <div class="slider-dots bm-hero__dots">
                    <button
                        v-for="(slide, index) in activeSlides"
                        :key="index"
                        class="slider-dot bm-hero__dot"
                        :class="{ active: currentSlide === index }"
                        @click="goToSlide(index)"
                        :aria-label="`Go to slide ${index + 1}`"
                    ><span></span></button>
                </div>
                <button class="slider-btn bm-hero__arrow" @click="prevSlide" aria-label="Previous slide">
                    <Icon name="arrow-left" :size="18" />
                </button>
                <button class="slider-btn bm-hero__arrow" @click="nextSlide" aria-label="Next slide">
                    <Icon name="arrow-right" :size="18" />
                </button>
            </div>
        </div>
        <span id="bm-above-fold" hidden></span>
    </section>
</template>

<style scoped>
.bm-hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--wine-950);
    color: var(--on-dark);
    --hy: 0;
}

.bm-hero__slider {
    position: relative;
    flex: 1;
    display: grid;
    padding-top: calc(var(--header-h) + 24px);
}

.bm-hero__slide {
    grid-area: 1 / 1;
    display: flex;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.9s var(--ease-out), visibility 0s linear 0.9s;
}
.bm-hero__slide.is-active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.9s var(--ease-out), visibility 0s;
}
/* Inactive slides hold their intro animations; they restart when the slide becomes active */
.bm-hero__slide:not(.is-active) .bm-intro,
.bm-hero__slide:not(.is-active) :deep([data-mask-instant] .bm-mw__i) { animation: none; }

.bm-hero__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: clamp(40px, 5vw, 90px);
    align-items: center;
    padding-block: clamp(32px, 5vh, 64px);
}

.bm-hero__eyebrow { margin-bottom: clamp(22px, 3vh, 34px); }
.bm-hero__title { max-width: 11ch; }
.bm-hero__title :deep(.bm-accent) { display: inline-block; padding-left: clamp(0px, 4vw, 72px); }
.bm-hero__desc {
    margin-top: clamp(26px, 4vh, 40px);
    max-width: 480px;
    color: var(--on-dark-muted);
}
.bm-hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: clamp(30px, 4.5vh, 48px); }

/* Visual */
.bm-hero__visual {
    position: relative;
    justify-self: end;
    width: min(100%, 470px);
    transform: translate3d(0, calc(var(--hy) * 0.08px), 0);
}
.bm-hero__arch {
    aspect-ratio: 4 / 5.2;
    width: 100%;
    border: 1px solid rgba(217, 185, 149, 0.22);
}
.bm-hero__ring {
    position: absolute;
    inset: 7%;
    border-radius: 999px 999px 14px 14px;
    border: 1px solid rgba(217, 185, 149, 0.18);
    pointer-events: none;
}
.bm-hero__arch picture { display: contents; }
.bm-hero__img {
    width: 82%;
    height: 82%;
    margin-top: 10%;
    filter: drop-shadow(0 40px 50px rgba(0, 0, 0, 0.5));
    transform: translate3d(0, calc(var(--hy) * -0.05px), 0);
}
.bm-hero__noimg { display: grid; justify-items: center; gap: 12px; color: var(--on-dark-faint); position: relative; z-index: 1; }

.bm-hero__seal {
    position: absolute;
    left: -64px;
    top: 14%;
    z-index: 2;
}
.bm-hero__caption {
    position: absolute;
    right: -12px;
    bottom: 34px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    /* solid tint instead of backdrop-filter: blur() — the blur forced extra
       compositing work every frame during slide fades and parallax */
    background: rgba(22, 10, 14, 0.88);
    border: 1px solid var(--line-dark);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
    z-index: 2;
}
.bm-hero__caption span:first-child { color: var(--gold-300); }
.bm-hero__caption-line { width: 28px; height: 1px; background: var(--line-dark); }

/* Footer row */
.bm-hero__footer {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: clamp(24px, 4vh, 40px);
}
.bm-hero__scroll {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--on-dark-faint);
}
.bm-hero__scroll-line {
    position: relative;
    width: 1px;
    height: 46px;
    background: var(--line-dark);
    overflow: hidden;
}
.bm-hero__scroll-line::after {
    content: '';
    position: absolute;
    left: 0;
    top: -40%;
    width: 1px;
    height: 40%;
    background: var(--gold-300);
    animation: bm-scrollcue 2.2s var(--ease-in-out) infinite;
}
@keyframes bm-scrollcue {
    to { top: 110%; }
}

.bm-hero__controls { display: flex; align-items: center; gap: 16px; }
.bm-hero__count { font-family: var(--font-display); font-size: 1.4rem; font-weight: 300; }
.bm-hero__count i { font-size: 0.9rem; color: var(--on-dark-faint); font-style: normal; }
.bm-hero__dots { display: flex; gap: 6px; }
.bm-hero__dot { width: 36px; height: 20px; border: 0; padding: 0; background: none; cursor: pointer; display: grid; align-items: center; }
.bm-hero__dot span { display: block; height: 2px; background: var(--line-dark); position: relative; overflow: hidden; }
.bm-hero__dot.active span::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gold-300);
    transform-origin: left;
    animation: bm-dotfill 8s linear forwards;
}
@keyframes bm-dotfill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.bm-hero__arrow {
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    background: transparent;
    color: var(--on-dark);
    cursor: pointer;
    transition: background 0.4s, color 0.4s, border-color 0.4s;
}
.bm-hero__arrow:hover { background: var(--beige-200); color: var(--wine-800); border-color: var(--beige-200); }

@media (max-width: 991.98px) {
    .bm-hero__grid { grid-template-columns: 1fr; text-align: left; }
    .bm-hero__visual { justify-self: center; width: min(78%, 400px); margin-top: 8px; }
    .bm-hero__seal { left: -36px; }
}
@media (max-width: 575.98px) {
    .bm-hero__visual { width: 82%; }
    .bm-hero__seal { width: 112px !important; height: 112px !important; left: -26px; top: 8%; }
    .bm-hero__caption { right: -8px; bottom: 20px; }
    .bm-hero__actions .bm-btn { flex: 1 1 auto; }
    .bm-hero__scroll { display: none; }
}
</style>
