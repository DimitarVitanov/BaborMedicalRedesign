<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MaskText from '@/Components/Site/MaskText.vue';
import HorizontalScroll from '@/Components/Site/HorizontalScroll.vue';
import Icon from '@/Components/Site/Icon.vue';

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

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
    learnMore: locale.value === 'mk' ? 'Погледни детали за ласерот' : 'View laser details',
    scrollHint: locale.value === 'mk' ? 'Скролај за да ги видиш сите' : 'Scroll to explore',
}));

const pad = (n) => String(n).padStart(2, '0');
</script>

<template>
    <section class="equipment-section bm-equip bm-dark bm-grain" id="equipment">
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <HorizontalScroll>
            <template #intro>
            <div class="bm-equip__intro">
                <span class="section-badge bm-eyebrow" data-reveal>{{ content.badge }}</span>
                <h2 class="section-title bm-display bm-equip__title"><MaskText :text="content.title" /></h2>
                <p class="section-subtitle bm-lead bm-muted bm-equip__sub" data-reveal style="--d: 0.2s">{{ content.subtitle }}</p>
                <div class="bm-equip__hint" data-reveal style="--d: 0.35s" aria-hidden="true">
                    <span class="bm-equip__hint-line"></span>{{ content.scrollHint }}
                    <Icon name="arrow-right" :size="16" />
                </div>
            </div>
            </template>

            <article
                v-for="(item, index) in equipment"
                :key="item.id"
                class="equipment-card bm-device"
            >
                <a :href="item.link || '#'" class="bm-device__stage bm-stage" tabindex="-1" aria-hidden="true">
                    <span class="bm-device__num bm-numeral">{{ pad(index + 1) }}</span>
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
                            width="400"
                            height="400"
                            loading="lazy"
                        />
                    </picture>
                    <span v-else class="bm-device__placeholder"><Icon name="laser" :size="64" :stroke="1" /></span>
                </a>
                <div class="bm-device__body">
                    <h3 class="card-title bm-device__title">{{ item.title }}</h3>
                    <p v-if="item.description" class="card-description bm-device__desc">{{ item.description }}</p>
                    <a :href="item.link || '#'" class="card-link bm-link bm-device__link" :aria-label="locale === 'mk' ? `Погледни детали за ${item.title}` : `View ${item.title} details`">
                        {{ locale === 'mk' ? 'Погледни детали' : 'View details' }}
                        <Icon name="arrow-right" />
                    </a>
                </div>
            </article>
        </HorizontalScroll>
    </section>
</template>

<style scoped>
.bm-equip {
    position: relative;
    padding-block: clamp(84px, 11vw, 140px);
}

.bm-equip__title { margin-top: 22px; }
.bm-equip__sub { margin-top: 24px; max-width: 420px; }
.bm-equip__hint {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-top: 40px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--gold-300);
}
.bm-equip__hint-line { width: 40px; height: 1px; background: currentColor; }

.bm-device {
    width: clamp(270px, 25vw, 380px);
    display: flex;
    flex-direction: column;
}
.bm-device__stage {
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.16);
    transition: border-color 0.6s;
}
.bm-device__stage picture { display: contents; }
.bm-device__stage img {
    width: 78%;
    height: 80%;
    margin-top: 12%;
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.5));
    transition: transform 1.1s var(--ease-out);
}
.bm-device:hover .bm-device__stage { border-color: rgba(217, 185, 149, 0.45); }
.bm-device:hover .bm-device__stage img { transform: translateY(-10px) scale(1.04); }
.bm-device__num {
    position: absolute;
    left: 24px;
    bottom: 12px;
    z-index: 2;
    font-size: 4.4rem;
}
.bm-device__placeholder { color: var(--on-dark-faint); position: relative; z-index: 1; }

.bm-device__body { padding: 24px 6px 0; display: flex; flex-direction: column; flex: 1; }
.bm-device__title { font-size: clamp(1.5rem, 2vw, 1.9rem); font-weight: 400; }
.bm-device__desc {
    margin-top: 10px;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--on-dark-muted);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.bm-device__link { margin-top: 20px; align-self: flex-start; color: var(--gold-300); }

/* When pinned the section supplies its own vertical breathing room */
.bm-equip :deep(.bm-hs.is-pinned) { margin-block: calc(clamp(84px, 11vw, 140px) * -1); }

@media (max-width: 991.98px) {
    .bm-device { width: min(76vw, 330px); }
    .bm-equip__hint { display: none; }
}
</style>
