<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import MaskText from '@/Components/Site/MaskText.vue';

// Shared hero for inner pages. Title words slide up from a mask; an optional
// `accent` line renders in italic champagne underneath.
const props = defineProps({
    eyebrow: { type: String, default: '' },
    title: { type: String, default: '' },
    accent: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    crumb: { type: String, default: '' },
    align: { type: String, default: 'left' }, // left | center
    compact: { type: Boolean, default: false },
});

const page = usePage();
const homeLabel = computed(() => (page.props.locale === 'mk' ? 'Почетна' : 'Home'));
const titleWords = computed(() => String(props.title || '').trim().split(/\s+/).filter(Boolean).length);
</script>

<template>
    <section class="bm-phero bm-grain" :class="[`is-${align}`, { 'is-compact': compact, 'has-aside': $slots.aside }]">
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="bm-container bm-phero__inner">
            <div class="bm-phero__main">
                <nav v-if="crumb" class="bm-phero__crumbs bm-intro bm-intro--fade" aria-label="Breadcrumb">
                    <a href="/">{{ homeLabel }}</a>
                    <span aria-hidden="true">/</span>
                    <span>{{ crumb }}</span>
                </nav>
                <span v-if="eyebrow" class="bm-eyebrow bm-intro" :class="{ 'bm-eyebrow--center': align === 'center' }" style="--d: 0.1s">{{ eyebrow }}</span>
                <h1 class="bm-h1 bm-phero__title">
                    <MaskText :text="title" :delay="0.15" instant />
                    <template v-if="accent">
                        {{ ' ' }}<br />
                        <MaskText :text="accent" class="bm-accent" :delay="0.15" :start="titleWords" instant />
                    </template>
                </h1>
                <p v-if="subtitle" class="bm-lead bm-muted bm-phero__sub bm-intro" style="--d: 0.45s">{{ subtitle }}</p>
                <div v-if="$slots.default" class="bm-phero__extra bm-intro" style="--d: 0.6s">
                    <slot />
                </div>
            </div>
            <div v-if="$slots.aside" class="bm-phero__aside bm-intro bm-intro--scale" style="--d: 0.3s">
                <slot name="aside" />
            </div>
        </div>
        <span id="bm-above-fold" hidden></span>
    </section>
</template>

<style scoped>
.bm-phero {
    position: relative;
    overflow: hidden;
    background: var(--wine-950);
    color: var(--on-dark);
    padding: calc(var(--header-h) + clamp(64px, 9vw, 130px)) 0 clamp(96px, 11vw, 168px);
}
.bm-phero.is-compact { padding-bottom: clamp(72px, 8vw, 120px); }
.bm-phero__inner { position: relative; z-index: 1; }
.bm-phero.has-aside .bm-phero__inner {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: center;
}
.bm-phero.is-center .bm-phero__main { text-align: center; max-width: 1000px; margin-inline: auto; }
.bm-phero__crumbs {
    display: flex;
    gap: 10px;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: var(--on-dark-faint);
    margin-bottom: 28px;
}
.bm-phero.is-center .bm-phero__crumbs { justify-content: center; }
.bm-phero__crumbs a { color: var(--on-dark-muted); transition: color 0.3s; }
.bm-phero__crumbs a:hover { color: var(--gold-300); }
.bm-phero__title { margin-top: 26px; }
.bm-phero__sub { margin-top: 30px; max-width: 640px; }
.bm-phero.is-center .bm-phero__sub { margin-inline: auto; }
.bm-phero__extra { margin-top: 44px; }

@media (max-width: 991.98px) {
    .bm-phero.has-aside .bm-phero__inner { grid-template-columns: 1fr; }
}
</style>
