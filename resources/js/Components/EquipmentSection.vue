<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const page = usePage();
const locale = computed(() => page.props.locale || 'en');
const currentIndex = ref(0);

const props = defineProps({
    equipment: {
        type: Array,
        default: () => [],
    },
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ОПРЕМА' : 'EQUIPMENT',
    title: locale.value === 'mk' ? 'Алма Ласери' : 'Alma Lasers',
    subtitle: locale.value === 'mk' 
        ? 'Најсовремена технологија за третмани на кожа и тело'
        : 'State-of-the-art technology for skin and body treatments',
    learnMore: locale.value === 'mk' ? 'Дознај повеќе' : 'Learn More',
}));

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.equipment.length;
};

const prevSlide = () => {
    currentIndex.value = currentIndex.value === 0 
        ? props.equipment.length - 1 
        : currentIndex.value - 1;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};
</script>

<template>
    <section class="equipment-section" id="equipment">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header text-center fade-in-up">
                <span class="section-badge">{{ content.badge }}</span>
                <h2 class="section-title">{{ content.title }}</h2>
                <p class="section-subtitle">{{ content.subtitle }}</p>
            </div>

            <!-- Equipment Carousel -->
            <div class="carousel-container fade-in-up">
                <!-- Navigation Arrows -->
                <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <div class="carousel-viewport">
                    <div 
                        class="carousel-track"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                    >
                        <div 
                            v-for="(item, index) in equipment" 
                            :key="item.id"
                            class="carousel-slide"
                        >
                            <div class="equipment-card" :class="{ active: index === currentIndex }">
                                <div class="card-inner">
                                    <div class="card-image">
                                        <div class="image-glow"></div>
                                        <picture v-if="item.image || item.image_desktop_webp">
                                            <!-- Mobile WebP -->
                                            <source 
                                                v-if="item.image_mobile_webp"
                                                media="(max-width: 768px)" 
                                                :srcset="'/storage/' + item.image_mobile_webp" 
                                                type="image/webp"
                                            >
                                            <!-- Desktop WebP -->
                                            <source 
                                                v-if="item.image_desktop_webp"
                                                media="(min-width: 769px)"
                                                :srcset="'/storage/' + item.image_desktop_webp" 
                                                type="image/webp"
                                            >
                                            <!-- Fallback -->
                                            <img 
                                                :src="item.image ? '/storage/' + item.image : '/storage/' + item.image_desktop_webp" 
                                                :alt="item.title"
                                            />
                                        </picture>
                                        <div v-else class="image-placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                                <path d="M21 15l-5-5L5 21"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <h3 class="card-title">{{ item.title }}</h3>
                                        <p v-if="item.description" class="card-description">{{ item.description }}</p>
                                        <a :href="item.link || '#'" class="card-link">
                                            {{ content.learnMore }}
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-btn next" @click="nextSlide" aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            <!-- Dots Navigation -->
            <div class="carousel-dots">
                <button 
                    v-for="(item, index) in equipment" 
                    :key="`dot-${item.id}`"
                    class="dot"
                    :class="{ active: index === currentIndex }"
                    @click="goToSlide(index)"
                    :aria-label="`Go to slide ${index + 1}`"
                ></button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.equipment-section {
    padding: 100px 0;
    position: relative;
    z-index: 1;
}

.section-header {
    margin-bottom: 60px;
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
    margin-bottom: 20px;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
}

/* Carousel Styles */
.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
}

.carousel-btn {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.carousel-btn:hover {
    background: #c9a87c;
    border-color: #c9a87c;
    color: #1e2d3d;
    transform: scale(1.1);
}

.carousel-btn svg {
    width: 24px;
    height: 24px;
}

.carousel-viewport {
    flex: 1;
    overflow: hidden;
    border-radius: 24px;
}

.carousel-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
    flex: 0 0 100%;
    padding: 0 20px;
}

.equipment-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.5s ease;
}

.card-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
}

.card-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.05) 0%, transparent 100%);
}

.image-glow {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(201, 168, 124, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
}

.card-image img {
    position: relative;
    z-index: 1;
    max-width: 100%;
    max-height: 320px;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
    transition: transform 0.5s ease;
}

.equipment-card:hover .card-image img {
    transform: scale(1.05) translateY(-10px);
}

.image-placeholder {
    width: 120px;
    height: 120px;
    color: rgba(255, 255, 255, 0.2);
}

.image-placeholder svg {
    width: 100%;
    height: 100%;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
}

.card-title {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.card-description {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin-bottom: 30px;
}

.card-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #1e2d3d;
    background: linear-gradient(135deg, #c9a87c, #e8d5c4);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 50px;
    transition: all 0.3s ease;
    width: fit-content;
}

.card-link:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
}

.card-link svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
}

.card-link:hover svg {
    transform: translateX(4px);
}

/* Dots Navigation */
.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 40px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot:hover {
    background: rgba(255, 255, 255, 0.4);
}

.dot.active {
    background: #c9a87c;
    transform: scale(1.2);
}

/* Responsive */
@media (max-width: 991.98px) {
    .equipment-section {
        padding: 80px 0;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .carousel-btn {
        width: 48px;
        height: 48px;
    }
    
    .carousel-btn svg {
        width: 20px;
        height: 20px;
    }
    
    .card-inner {
        grid-template-columns: 1fr;
        min-height: auto;
    }
    
    .card-image {
        padding: 30px;
    }
    
    .card-image img {
        max-height: 250px;
    }
    
    .card-content {
        padding: 30px;
        text-align: center;
    }
    
    .card-title {
        font-size: 1.6rem;
    }
    
    .card-link {
        margin: 0 auto;
    }
}

@media (max-width: 575.98px) {
    .equipment-section {
        padding: 60px 0;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .carousel-container {
        gap: 10px;
    }
    
    .carousel-btn {
        width: 40px;
        height: 40px;
    }
    
    .carousel-btn svg {
        width: 18px;
        height: 18px;
    }
    
    .carousel-slide {
        padding: 0 10px;
    }
    
    .card-image {
        padding: 20px;
    }
    
    .card-image img {
        max-height: 200px;
    }
    
    .card-content {
        padding: 24px;
    }
    
    .card-title {
        font-size: 1.4rem;
    }
    
    .card-description {
        font-size: 0.95rem;
    }
}
</style>
