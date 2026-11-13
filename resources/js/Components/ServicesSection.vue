<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Icon from '@/Components/Site/Icon.vue';

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

const iconFor = (icon) => (['face', 'laser', 'body', 'product'].includes(icon) ? icon : 'star');
const pad = (n) => String(n).padStart(2, '0');
</script>

<template>
    <section class="services-section bm-services bm-dark bm-section bm-grain">
        <div class="bm-container">
            <div class="section-header bm-services__head">
                <div>
                    <span class="section-badge bm-eyebrow" data-reveal>{{ locale === 'mk' ? 'НАШИТЕ УСЛУГИ' : 'OUR SERVICES' }}</span>
                    <h2 class="section-title bm-h1 bm-services__title"><MaskText :text="sectionTitle" /></h2>
                </div>
                <p class="section-subtitle bm-services__sub" data-reveal style="--d: 0.2s">{{ sectionSubtitle }}</p>
            </div>

            <div class="services-grid bm-services__grid">
                <a
                    v-for="(service, index) in activeServices"
                    :key="index"
                    :href="service.link || '#'"
                    class="service-card bm-svc"
                    data-reveal
                    :style="{ '--d': `${index * 0.1}s` }"
                >
                    <span class="bm-svc__num bm-numeral" aria-hidden="true">{{ pad(index + 1) }}</span>
                    <span class="bm-svc__icon"><Icon :name="iconFor(service.icon)" :size="26" :stroke="1.4" /></span>
                    <h3 class="service-title bm-svc__title">{{ getTitle(service) }}</h3>
                    <p class="service-description bm-svc__desc">{{ getDescription(service) }}</p>
                    <span class="service-link bm-svc__link" :aria-label="locale === 'mk' ? `Дознај повеќе за ${getTitle(service)}` : `Learn more about ${getTitle(service)}`">
                        {{ locale === 'mk' ? 'Дознај повеќе' : 'Learn more' }}
                        <span class="bm-svc__arrow"><Icon name="arrow-up-right" :size="16" :stroke="1.8" /></span>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bm-services { overflow: hidden; }
.bm-services__head {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px 48px;
    margin-bottom: clamp(48px, 6vw, 88px);
}
.bm-services__title { margin-top: 22px; }
.bm-services__sub {
    max-width: 340px;
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.25rem, 1.8vw, 1.6rem);
    line-height: 1.35;
    color: var(--on-dark-muted);
}

.bm-services__grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
}

.bm-svc {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 480px;
    padding: 36px 30px 34px;
    border-left: 1px solid var(--line-dark);
    color: var(--on-dark);
    isolation: isolate;
    overflow: hidden;
}
.bm-svc:last-child { border-right: 1px solid var(--line-dark); }
.bm-svc::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(120% 70% at 50% 0%, rgba(217, 185, 149, 0.18), transparent 60%),
        linear-gradient(180deg, var(--wine-700), var(--wine-800));
    transform: translateY(101%);
    transition: transform 0.8s var(--ease-out);
}
.bm-svc:hover::before, .bm-svc:focus-visible::before { transform: translateY(0); }

.bm-svc__num {
    font-size: clamp(4rem, 6vw, 6.2rem);
    transition: color 0.6s, -webkit-text-stroke-color 0.6s;
}
.bm-svc:hover .bm-svc__num { color: rgba(217, 185, 149, 0.16); }

.bm-svc__icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin-top: auto;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    color: var(--gold-300);
    transition: background 0.6s, color 0.6s, transform 0.8s var(--ease-out);
}
.bm-svc:hover .bm-svc__icon { background: var(--beige-200); color: var(--wine-800); transform: rotate(-10deg); }

.bm-svc__title { margin-top: 26px; font-size: clamp(1.45rem, 1.9vw, 1.85rem); font-weight: 400; }
.bm-svc__desc { margin-top: 12px; font-size: 0.95rem; line-height: 1.7; color: var(--on-dark-muted); min-height: 4.8em; }
.bm-svc__link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 26px;
    padding-top: 20px;
    border-top: 1px solid var(--line-dark);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}
.bm-svc__arrow {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    transition: background 0.5s, color 0.5s, transform 0.6s var(--ease-out), border-color 0.5s;
}
.bm-svc:hover .bm-svc__arrow { background: var(--beige-200); color: var(--wine-800); border-color: var(--beige-200); transform: rotate(45deg); }

@media (max-width: 1199.98px) {
    .bm-services__grid { grid-template-columns: repeat(2, 1fr); }
    .bm-svc { min-height: 400px; border-bottom: 1px solid var(--line-dark); }
    .bm-svc:nth-child(2n) { border-right: 1px solid var(--line-dark); }
}
@media (max-width: 575.98px) {
    .bm-services__grid { grid-template-columns: 1fr; border-bottom: 0; }
    .bm-svc { min-height: 0; padding: 30px 24px; border-right: 1px solid var(--line-dark); }
    .bm-svc__num { font-size: 3.6rem; }
    .bm-svc__icon { margin-top: 18px; }
    .bm-svc__desc { min-height: 0; }
}
</style>
