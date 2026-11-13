<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Icon from '@/Components/Site/Icon.vue';

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
        icon: 'sparkle',
    },
    {
        id: 'laser',
        name: locale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments',
        description: locale.value === 'mk'
            ? 'Напредни ласерски третмани за подмладување, ласерска епилација и корекција на кожата'
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
    {
        id: 'body',
        name: locale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments',
        description: locale.value === 'mk'
            ? 'Апаратурна естетика за обликување на телото и подобрување на квалитетот на кожата'
            : 'Advanced aesthetics for body contouring and skin quality improvement',
        href: '/services/body-treatments',
        icon: 'body',
    },
]);

const ctaLabel = computed(() => locale.value === 'mk' ? 'Погледни Третмани' : 'View Treatments');
const pad = (n) => String(n).padStart(2, '0');
</script>

<template>
    <section class="service-categories-section bm-cats bm-paper bm-sheet bm-section">
        <div class="bm-container">
            <div class="section-header bm-cats__head">
                <span class="bm-eyebrow" data-reveal>{{ sectionTitle }}</span>
                <h2 class="section-title bm-h2 bm-cats__title"><MaskText :text="sectionSubtitle" /></h2>
            </div>

            <div class="categories-grid bm-cats__list">
                <a
                    v-for="(category, index) in categories"
                    :key="category.id"
                    :href="category.href"
                    class="category-box bm-cat"
                    data-reveal
                    :style="{ '--d': `${index * 0.08}s` }"
                >
                    <span class="bm-cat__idx">{{ pad(index + 1) }}</span>
                    <span class="bm-cat__icon"><Icon :name="category.icon" :size="24" :stroke="1.4" /></span>
                    <h3 class="box-title bm-cat__name">{{ category.name }}</h3>
                    <p class="box-description bm-cat__desc">{{ category.description }}</p>
                    <span class="box-cta bm-cat__cta">
                        <span class="bm-cat__cta-label">{{ ctaLabel }}</span>
                        <span class="bm-cat__cta-icon"><Icon name="arrow-right" :size="18" :stroke="1.8" /></span>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bm-cats__head {
    display: grid;
    grid-template-columns: minmax(180px, 0.42fr) 1fr;
    gap: 32px;
    align-items: baseline;
    margin-bottom: clamp(44px, 6vw, 80px);
}

.bm-cats__list { border-top: 1px solid var(--line-light); }

.bm-cat {
    position: relative;
    display: grid;
    grid-template-columns: 60px 64px minmax(0, 1.25fr) minmax(0, 1fr) auto;
    gap: clamp(16px, 2.5vw, 36px);
    align-items: center;
    padding: clamp(26px, 3vw, 40px) clamp(8px, 2vw, 28px);
    border-bottom: 1px solid var(--line-light);
    color: var(--ink);
    isolation: isolate;
    overflow: hidden;
    transition: color 0.6s var(--ease-out);
}
.bm-cat::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(80% 140% at 100% 50%, rgba(140, 42, 72, 0.6), transparent 60%),
        linear-gradient(90deg, var(--wine-800), var(--wine-700));
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.8s var(--ease-out);
}
.bm-cat:hover, .bm-cat:focus-visible { color: var(--cream-50); }
.bm-cat:hover::before, .bm-cat:focus-visible::before { clip-path: inset(0 0 0 0); }

.bm-cat__idx {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: var(--wine-600);
    transition: color 0.6s;
}
.bm-cat:hover .bm-cat__idx { color: var(--gold-300); }

.bm-cat__icon {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid var(--line-light);
    color: var(--wine-600);
    transition: border-color 0.6s, color 0.6s, transform 0.8s var(--ease-out);
}
.bm-cat:hover .bm-cat__icon { border-color: rgba(217, 185, 149, 0.45); color: var(--gold-300); transform: rotate(-12deg) scale(1.05); }

.bm-cat__name {
    font-size: clamp(1.6rem, 2.9vw, 2.75rem);
    font-weight: 300;
    line-height: 1.1;
    transition: transform 0.8s var(--ease-out);
}
.bm-cat:hover .bm-cat__name { transform: translateX(10px); }

.bm-cat__desc { font-size: 0.98rem; line-height: 1.65; color: var(--ink-soft); transition: color 0.6s; }
.bm-cat:hover .bm-cat__desc { color: rgba(246, 238, 230, 0.75); }

.bm-cat__cta { display: inline-flex; align-items: center; gap: 14px; }
.bm-cat__cta-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    white-space: nowrap;
}
.bm-cat__cta-icon {
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    transition: background 0.6s, color 0.6s, transform 0.8s var(--ease-out);
}
.bm-cat:hover .bm-cat__cta-icon { background: var(--beige-200); color: var(--wine-800); transform: rotate(-45deg); }

@media (max-width: 1199.98px) {
    .bm-cat { grid-template-columns: 44px 60px minmax(0, 1fr) auto; }
    .bm-cat__desc { grid-column: 3 / 4; grid-row: 2; }
    .bm-cat__cta { grid-row: 1 / span 2; grid-column: 4; }
    .bm-cat__cta-label { display: none; }
}
@media (max-width: 767.98px) {
    .bm-cats__head { grid-template-columns: 1fr; gap: 18px; }
    .bm-cat { grid-template-columns: 1fr auto; gap: 12px 16px; padding-inline: 4px; }
    .bm-cat__idx { grid-column: 1; grid-row: 1; }
    .bm-cat__icon { display: none; }
    .bm-cat__name { grid-column: 1; grid-row: 2; }
    .bm-cat__desc { grid-column: 1 / -1; grid-row: 3; }
    .bm-cat__cta { grid-column: 2; grid-row: 1 / span 2; align-self: center; }
    .bm-cat__cta-icon { width: 48px; height: 48px; }
}
</style>
