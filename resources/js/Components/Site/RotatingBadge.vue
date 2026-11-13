<script setup>
import { ref, useId } from 'vue';
import { useInView } from '@/Composables/useInView';

// Circular rotating text seal with the monogram in the middle.
// The rotation only runs while the seal is on screen.
defineProps({
    text: { type: String, default: 'Babor Medical · Skopje · Laser & Aesthetic ·' },
    size: { type: Number, default: 156 },
    logo: { type: String, default: '/logo.webp' },
});

const pathId = `bm-seal-${useId()}`;
const el = ref(null);
const inView = useInView(el);
</script>

<template>
    <div ref="el" class="bm-seal" :class="{ 'is-off': !inView }" :style="{ width: `${size}px`, height: `${size}px` }">
        <svg class="bm-seal__ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
                <path :id="pathId" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
                <textPath :href="`#${pathId}`" textLength="486">{{ text }}</textPath>
            </text>
        </svg>
        <div class="bm-seal__core">
            <img :src="logo" alt="" width="120" height="120" loading="lazy" decoding="async" />
        </div>
    </div>
</template>

<style scoped>
.bm-seal {
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--cream-100);
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55);
}
.bm-seal__ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: bm-spin 26s linear infinite;
}
.bm-seal.is-off .bm-seal__ring { animation-play-state: paused; }
.bm-seal__ring text {
    font-family: var(--font-sans);
    font-size: 13.5px;
    font-weight: 700;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    fill: var(--wine-700);
}
.bm-seal__core {
    width: 52%;
    height: 52%;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1px solid rgba(110, 32, 57, 0.25);
}
.bm-seal__core img { width: 78%; height: auto; }

@keyframes bm-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
    .bm-seal__ring { animation: none; }
}
</style>
