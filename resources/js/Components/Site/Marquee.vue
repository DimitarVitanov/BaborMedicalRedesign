<script setup>
import { ref } from 'vue';
import { useInView } from '@/Composables/useInView';

// Endless ribbon of words. The second copy is aria-hidden so screen readers
// read the list once. The loop only runs while the ribbon is on screen.
defineProps({
    items: { type: Array, default: () => [] },
    variant: { type: String, default: 'wine' }, // wine | cream | outline
    reverse: { type: Boolean, default: false },
    duration: { type: Number, default: 38 }, // seconds per loop
    tilt: { type: Number, default: 0 }, // degrees
});

const el = ref(null);
const inView = useInView(el);
</script>

<template>
    <div ref="el" class="bm-marquee" :class="[`bm-marquee--${variant}`, { 'is-off': !inView }]" :style="{ '--tilt': `${tilt}deg`, '--dur': `${duration}s` }">
        <div class="bm-marquee__track" :class="{ 'is-reverse': reverse }">
            <ul class="bm-marquee__group">
                <li v-for="(item, i) in items" :key="`a${i}`">
                    <span>{{ item }}</span>
                    <svg class="bm-marquee__star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="currentColor" /></svg>
                </li>
            </ul>
            <ul class="bm-marquee__group" aria-hidden="true">
                <li v-for="(item, i) in items" :key="`b${i}`">
                    <span>{{ item }}</span>
                    <svg class="bm-marquee__star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="currentColor" /></svg>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.bm-marquee {
    position: relative;
    width: 106%;
    margin-left: -3%;
    overflow: hidden;
    transform: rotate(var(--tilt));
    padding: 18px 0;
}
.bm-marquee--wine {
    background: linear-gradient(90deg, var(--wine-700), var(--wine-600) 50%, var(--wine-700));
    color: var(--cream-50);
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
}
.bm-marquee--cream {
    background: var(--beige-200);
    color: var(--wine-800);
}
.bm-marquee--outline {
    background: var(--wine-900);
    color: transparent;
    border-block: 1px solid var(--line-dark);
}
.bm-marquee__track {
    display: flex;
    width: max-content;
    animation: bm-marquee var(--dur) linear infinite;
}
.bm-marquee__track.is-reverse { animation-direction: reverse; }
.bm-marquee:hover .bm-marquee__track,
.bm-marquee.is-off .bm-marquee__track { animation-play-state: paused; }
.bm-marquee__group {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: none;
}
.bm-marquee__group li {
    display: flex;
    align-items: center;
    gap: clamp(22px, 3vw, 44px);
    padding-right: clamp(22px, 3vw, 44px);
    white-space: nowrap;
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3.2vw, 2.9rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.1;
    letter-spacing: -0.01em;
}
.bm-marquee--outline li span { -webkit-text-stroke: 1px rgba(217, 185, 149, 0.6); }
.bm-marquee__star { width: 0.5em; height: 0.5em; color: var(--gold-300); flex: none; }
.bm-marquee--cream .bm-marquee__star { color: var(--wine-600); }

@keyframes bm-marquee {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-50%, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
    .bm-marquee__track { animation-duration: calc(var(--dur) * 4); }
}
</style>
