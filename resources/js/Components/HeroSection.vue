<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
});

const sliderRef = ref(null);
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

onMounted(() => {
    autoplayInterval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
    if (autoplayInterval) clearInterval(autoplayInterval);
});
</script>

<template>
    <section class="hero-section">
        <!-- Slider Container -->
        <div 
            ref="sliderRef"
            class="hero-slider"
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
                class="hero-slide"
                :class="{ active: currentSlide === index }"
            >
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-5">
                            <p class="hero-subtitle animate-fade-up" :style="{ animationDelay: '0.1s' }">
                                {{ slide.subtitle }}
                            </p>
                            <h1 class="hero-title animate-fade-up" :style="{ animationDelay: '0.2s' }">
                                {{ slide.title }}<br/>
                                <span>{{ slide.highlight }}</span>
                            </h1>
                            <p class="hero-description mb-4 animate-fade-up" :style="{ animationDelay: '0.3s' }">
                                {{ slide.description }}
                            </p>
                            <div class="d-flex gap-3 flex-wrap animate-fade-up" :style="{ animationDelay: '0.4s' }">
                                <a :href="slide.cta_link || '#'" class="btn btn-cta btn-lg">
                                    {{ slide.cta_text }}
                                </a>
                                <a :href="slide.secondary_link || '#'" class="btn btn-outline-light btn-lg rounded-pill px-4">
                                    {{ slide.secondary_text }}
                                </a>
                            </div>
                        </div>
                        
                        <div class="col-lg-5 hero-image-container d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                            <div class="hero-glow animate-pulse"></div>
                            <div v-if="slide.image || slide.image_desktop_webp" class="hero-image-wrapper animate-fade-up" :style="{ animationDelay: '0.3s' }">
                                <picture>
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
                                        class="hero-image"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                            <div v-else class="glass-card mx-auto animate-fade-up" style="max-width: 400px;" :style="{ animationDelay: '0.3s' }">
                                <div class="text-center py-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="var(--primary-light)" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                    </svg>
                                    <p class="text-white mt-3 mb-0">No image uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slider Controls -->
        <div class="slider-controls d-none d-lg-flex">
            <button class="slider-btn slider-prev" @click="prevSlide" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </button>
            <button class="slider-btn slider-next" @click="nextSlide" aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>

        <!-- Slider Dots -->
        <div class="slider-dots">
            <button 
                v-for="(slide, index) in activeSlides" 
                :key="index"
                class="slider-dot"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"
            ></button>
        </div>

        <!-- Stats Row -->
        <div class="stats-row">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="stat-item animate-fade-up" style="animation-delay: 0.5s;">
                            <div class="stat-number">+50</div>
                            <div class="stat-label">Products</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stat-item animate-fade-up" style="animation-delay: 0.6s;">
                            <div class="stat-number">+10K</div>
                            <div class="stat-label">Happy Clients</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stat-item animate-fade-up" style="animation-delay: 0.7s;">
                            <div class="stat-number">+25</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stat-item animate-fade-up" style="animation-delay: 0.8s;">
                            <div class="stat-number">5★</div>
                            <div class="stat-label">Client Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    min-height: calc(100vh - 110px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0;
}


.hero-slider {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
}

.hero-slider:active {
    cursor: grabbing;
}

.hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s ease, visibility 0.8s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-slide.active {
    position: relative;
    opacity: 1;
    visibility: visible;
    width: 100%;
}

.hero-slide .container {
    width: 100%;
}

.hero-slide .row {
    width: 100%;
    margin: 0;
}

.hero-slide .col-lg-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-image-container {
    position: relative;
    z-index: 1;
}

.hero-image-wrapper {
    position: relative;
    max-width: 450px;
    width: 100%;
}

.hero-image {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    animation: gentleRotate 4s ease-in-out infinite;
}

@keyframes gentleRotate {
    0%, 100% {
        transform: rotate(-2deg);
    }
    50% {
        transform: rotate(2deg);
    }
}

.hero-slide.active .animate-fade-up {
    animation: fadeUp 0.8s ease forwards;
}

.hero-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: 4.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.hero-title span {
    background: linear-gradient(135deg, var(--primary-light) 0%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    max-width: 400px;
}

.hero-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(232, 213, 196, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.slider-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    pointer-events: none;
    z-index: 10;
}

.slider-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-btn:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
    transform: scale(1.1);
}

.slider-dots {
    display: flex;
    justify-content: center;
    gap: 12px;
    z-index: 10;
    margin-top: 40px;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.slider-dot:hover {
    background: rgba(255, 255, 255, 0.6);
}

.slider-dot.active {
    background: var(--primary-light);
    transform: scale(1.2);
}

.stats-row {
    padding: 30px 0;
    z-index: 3;
}

.stat-item {
    text-align: center;
    padding: 20px;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-light);
    display: inline-block;
}

.stat-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-item:hover .stat-number {
    animation: bounce 0.5s ease;
}

/* Responsive */
@media (max-width: 1199.98px) {
    .hero-title {
        font-size: 3.8rem;
    }
    
    .hero-glow {
        width: 350px;
        height: 350px;
    }
}

@media (max-width: 991.98px) {
    .hero-section {
        min-height: calc(100vh - 90px);
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-description {
        font-size: 1rem;
        max-width: 100%;
    }
    
    .hero-image-container {
        margin-top: 50px;
    }
    
    .hero-glow {
        width: 300px;
        height: 300px;
    }
    
    .slider-controls {
        display: none !important;
    }
    
    .slider-dots {
        margin-top: 25px;
    }
    
    .stats-row {
        margin-top: 30px;
        padding-bottom: 20px;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .stat-label {
        font-size: 0.8rem;
    }
    
    .stat-item {
        padding: 15px 10px;
    }
}

@media (max-width: 767.98px) {
    .hero-section {
        min-height: calc(100vh - 70px);
    }

    .hero-slide{
        height: 70vh;
    }
    
    .hero-title {
        font-size: 2.5rem;
        text-align: center;
    }
    
    .hero-subtitle {
        font-size: 0.9rem;
        text-align: center;
        letter-spacing: 1px;
    }
    
    .hero-description {
        font-size: 0.95rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-slide .col-lg-5:first-child {
        text-align: center;
    }
    
    .hero-slide .d-flex {
        justify-content: center;
    }
    
    .hero-glow {
        width: 250px;
        height: 250px;
    }
    
    .slider-dots {
        margin-top: 20px;
    }
    
    .stats-row {
        margin-top: 25px;
        padding-bottom: 20px;
    }
    
    .stat-number {
        font-size: 1.5rem;
    }
    
    .stat-label {
        font-size: 0.7rem;
        letter-spacing: 0;
    }
    
    .stat-item {
        padding: 10px 5px;
    }
}

@media (max-width: 575.98px) {
    .hero-section {
        min-height: calc(100vh - 65px);
    }
    
    .hero-slide {
        padding-top: 0;
    }
    
    .hero-slide .row {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-slide .col-lg-5:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .hero-subtitle {
        margin-top: 0;
    }
    
    .hero-title {
        font-size: 2.2rem;
        line-height: 1.2;
        margin-bottom: 10px;
    }
    
    .hero-title span {
        display: block;
        background: linear-gradient(135deg, #c9a87c, #e8d5c4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .hero-subtitle {
        font-size: 0.75rem;
        margin-bottom: 8px;
        letter-spacing: 2px;
    }
    
    .hero-description {
        font-size: 0.9rem;
        padding: 0 15px;
        margin-bottom: 20px !important;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.7);
    }
    
    .hero-slide .d-flex.gap-3 {
        gap: 12px !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        justify-content: center !important;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
    
    .hero-slide .btn {
        padding: 12px 28px !important;
        font-size: 0.85rem !important;
        text-align: center;
        white-space: nowrap;
        border-radius: 50px !important;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 120px;
    }
    
    .hero-slide .btn-cta {
        background: linear-gradient(135deg, #c9a87c, #b8956b);
        border: none;
        color: #0a0f14;
        font-weight: 600;
    }
    
    .hero-slide .btn-outline-light {
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: transparent;
        color: #fff;
    }
    
    .hero-image-container {
        margin-top: 15px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    .hero-image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .hero-image {
        max-height: 260px;
        width: auto;
        margin: 0 auto;
    }
    
    .hero-glow {
        width: 220px;
        height: 220px;
    }
    
    .slider-dots {
        margin-top: 20px;
        gap: 10px;
    }
    
    .slider-dot {
        width: 8px;
        height: 8px;
    }
    
    .slider-dot.active {
        width: 24px;
        border-radius: 4px;
    }
    
    .stats-row {
        margin-top: 20px;
        padding-bottom: 15px;
    }
    
    .stat-number {
        font-size: 1.3rem;
    }
    
    .stat-label {
        font-size: 0.65rem;
    }
    
    .stat-item {
        padding: 8px 3px;
    }
}

@media (hover: none) and (pointer: coarse) {
    .slider-btn:hover {
        transform: none;
    }
    
    .stat-item:hover .stat-number {
        animation: none;
    }
}
</style>
