<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const props = defineProps({
    services: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const sectionTitle = computed(() => locale.value === 'mk' ? 'Третмани' : 'Treatments');
const sectionSubtitle = computed(() => locale.value === 'mk' ? 'Кои третмани ви ги нудиме ние?' : 'What treatments do we offer?');

const activeServices = computed(() => props.services || []);

const getTitle = (service) => {
    return locale.value === 'mk' && service.title_mk ? service.title_mk : service.title;
};

const getDescription = (service) => {
    return locale.value === 'mk' && service.description_mk ? service.description_mk : service.description;
};
</script>

<template>
    <section class="services-section">
        <div class="services-bg"></div>
        <div class="container">
            <div class="section-header fade-in-up">
                <span class="section-badge">{{ locale === 'mk' ? 'НАШИТЕ УСЛУГИ' : 'OUR SERVICES' }}</span>
                <h2 class="section-title">{{ sectionTitle }}</h2>
                <p class="section-subtitle">{{ sectionSubtitle }}</p>
            </div>

            <div class="services-grid">
                <a 
                    v-for="(service, index) in activeServices" 
                    :key="index"
                    :href="service.link || '#'"
                    class="service-card fade-in-up"
                    :class="[`card-${index + 1}`, `stagger-${index + 1}`]"
                >
                    <div class="card-glow"></div>
                    <div class="card-content">
                        <div class="icon-container">
                            <svg v-if="service.icon === 'face'" class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
                                <path d="M9 10h.01M15 10h.01"/>
                                <path d="M9.5 15a3.5 3.5 0 0 0 5 0"/>
                                <path d="M7 3.34V6a1 1 0 0 0 1 1h1"/>
                                <path d="M17 3.34V6a1 1 0 0 1-1 1h-1"/>
                            </svg>
                            <svg v-else-if="service.icon === 'laser'" class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="5" r="3"/>
                                <path d="M12 8v4"/>
                                <path d="M8 12l4 10 4-10"/>
                                <path d="M6 4l2 2M18 4l-2 2M4 8l3 1M20 8l-3 1"/>
                            </svg>
                            <svg v-else-if="service.icon === 'body'" class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <path d="M12 8v6"/>
                                <path d="M9 11l3 3 3-3"/>
                            </svg>
                            <svg v-else-if="service.icon === 'product'" class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 3h6v4H9z"/>
                                <path d="M7 7h10v14H7z"/>
                                <path d="M10 11h4"/>
                                <path d="M12 11v4"/>
                                <circle cx="12" cy="18" r="1"/>
                            </svg>
                            <svg v-else class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        </div>
                        <h3 class="service-title">{{ getTitle(service) }}</h3>
                        <p class="service-description">{{ getDescription(service) }}</p>
                        <span class="service-link" :aria-label="locale === 'mk' ? `Дознај повеќе за ${getTitle(service)}` : `Learn more about ${getTitle(service)}`">
                            {{ locale === 'mk' ? 'Дознај повеќе' : 'Learn more' }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-section {
    padding: 80px 0 120px;
    background: transparent;
    position: relative;
    overflow: visible;
}

.services-bg {
    display: none;
}

.section-header {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    z-index: 1;
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

.section-title {
    font-size: 3.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
}

.section-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.7;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    position: relative;
    z-index: 1;
}

.service-card {
    position: relative;
    text-decoration: none;
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-glow {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.card-1 .card-glow { background: linear-gradient(135deg, #c9a87c 0%, #e8d5c4 100%); }
.card-2 .card-glow { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.card-3 .card-glow { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.card-4 .card-glow { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }

.card-content {
    position: relative;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 50px 32px 40px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
}

.service-card:hover {
    transform: translateY(-10px) scale(1.02);
}

.service-card:hover .card-glow {
    opacity: 1;
}

.service-card:hover .card-content {
    background: rgba(255, 255, 255, 0.95);
    border-color: transparent;
}

.icon-container {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
}

.service-icon {
    width: 50px;
    height: 50px;
    color: #c9a87c;
    transition: all 0.4s ease;
}

.service-card:hover .service-icon {
    color: #3D4F5F;
    transform: scale(1.1);
}

.service-card:hover .icon-container {
    transform: scale(1.1);
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 14px;
    transition: color 0.4s ease;
}

.service-card:hover .service-title {
    color: #1a1a2e;
}

.service-description {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    margin: 0 0 24px 0;
    flex-grow: 1;
    transition: color 0.4s ease;
}

.service-card:hover .service-description {
    color: #666;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #c9a87c;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
}

.service-link svg {
    transition: transform 0.3s ease;
}

.service-card:hover .service-link {
    color: #1a1a2e;
}

.service-card:hover .service-link svg {
    transform: translateX(5px);
}

@media (max-width: 1199.98px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .section-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 767.98px) {
    .services-section {
        padding: 80px 0;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .section-badge {
        font-size: 0.7rem;
        letter-spacing: 2px;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        max-width: 380px;
        margin: 0 auto;
        gap: 20px;
    }
    
    .card-content {
        padding: 40px 28px 35px;
    }
    
    .icon-container {
        width: 70px;
        height: 70px;
    }
    
    .service-img, .icon-fallback {
        width: 55px;
        height: 55px;
    }
}
</style>
