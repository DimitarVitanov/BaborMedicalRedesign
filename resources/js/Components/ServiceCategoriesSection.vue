<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const sectionTitle = computed(() => locale.value === 'mk' ? 'Наши Услуги' : 'Our Services');
const sectionSubtitle = computed(() => locale.value === 'mk' ? 'Изберете категорија на третмани' : 'Choose a treatment category');

const categories = computed(() => [
    {
        id: 'cosmetology',
        name: locale.value === 'mk' ? 'Козметологија' : 'Cosmetology',
        description: locale.value === 'mk' 
            ? 'Професионални козметички третмани за совршена кожа и природна убавина'
            : 'Professional cosmetic treatments for perfect skin and natural beauty',
        href: '/services/cosmetology',
        icon: 'sparkles',
    },
    {
        id: 'laser',
        name: locale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments',
        description: locale.value === 'mk' 
            ? 'Напредни ласерски третмани за подмладување, депилација и корекција на кожата'
            : 'Advanced laser treatments for rejuvenation, hair removal and skin correction',
        href: '/services/laser-aesthetic',
        icon: 'laser',
    },
    {
        id: 'injectable',
        name: locale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods',
        description: locale.value === 'mk' 
            ? 'Прецизна апликација, биолошка регенерација и контролирана естетика'
            : 'Precise application, biological regeneration and controlled aesthetics',
        href: '/services/injectable-methods',
        icon: 'injectable',
    },
]);

const ctaLabel = computed(() => locale.value === 'mk' ? 'Погледни Третмани' : 'View Treatments');
</script>

<template>
    <section class="service-categories-section">
        <div class="container">
            <div class="section-header fade-in-up">
              
                <h2 class="section-title">{{ sectionSubtitle }}</h2>
            </div>

            <div class="categories-grid">
                <a 
                    v-for="category in categories" 
                    :key="category.id"
                    :href="category.href"
                    class="category-box fade-in-up"
                >
                    <div class="box-icon">
                        <svg v-if="category.icon === 'sparkles'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/>
                            <path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z"/>
                            <path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z"/>
                        </svg>
                        <svg v-else-if="category.icon === 'laser'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2C12 2 14 6 14 10C14 14 12 18 12 22"/>
                            <path d="M12 2C12 2 10 6 10 10C10 14 12 18 12 22"/>
                            <path d="M4 12H20"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2v6M12 16v6"/>
                            <path d="M9 8h6l-1 8H10L9 8z"/>
                            <circle cx="12" cy="5" r="1"/>
                        </svg>
                    </div>
                    <h3 class="box-title">{{ category.name }}</h3>
                    <p class="box-description">{{ category.description }}</p>
                    <div class="box-cta">
                        <span>{{ ctaLabel }}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-categories-section {
    padding: 100px 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 100px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.section-badge svg {
    width: 16px;
    height: 16px;
}

.section-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #fff;
    margin: 0;
}

.categories-grid {
    display: flex;
    gap: 32px;
}

.categories-grid .category-box {
    flex: 1;
}

.category-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 36px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    text-decoration: none;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.category-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.1), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.category-box:hover {
    border-color: rgba(201, 168, 124, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
}

.category-box:hover::before {
    opacity: 1;
}

.box-icon {
    position: relative;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.15), rgba(201, 168, 124, 0.05));
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 50%;
    margin-bottom: 28px;
    transition: all 0.4s ease;
}

.category-box:hover .box-icon {
    transform: scale(1.08);
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.25), rgba(201, 168, 124, 0.1));
}

.box-icon svg {
    width: 40px;
    height: 40px;
    color: #c9a87c;
}

.box-title {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 14px;
    transition: color 0.3s ease;
}

.category-box:hover .box-title {
    color: #c9a87c;
}

.box-description {
    position: relative;
    z-index: 1;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    margin: 0 0 28px;
    max-width: 280px;
}

.box-cta {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    background: rgba(201, 168, 124, 0.1);
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 100px;
    color: #c9a87c;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: auto;
}

.category-box:hover .box-cta {
    background: #c9a87c;
    color: #0a0f14;
    border-color: #c9a87c;
}

.box-cta svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
}

.category-box:hover .box-cta svg {
    transform: translateX(4px);
}

@media (max-width: 767.98px) {
    .service-categories-section {
        padding: 60px 0;
    }
    
    .categories-grid {
        flex-direction: column;
        align-items: center;
    }
    
    .categories-grid .category-box {
        width: 100%;
        max-width: 400px;
        flex: none;
    }
    
    .category-box {
        padding: 36px 24px;
    }
    
    .box-icon {
        width: 72px;
        height: 72px;
    }
    
    .box-icon svg {
        width: 32px;
        height: 32px;
    }
    
    .box-title {
        font-size: 1.3rem;
    }
}
</style>
