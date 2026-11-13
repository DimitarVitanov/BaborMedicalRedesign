<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useInView } from '@/Composables/useInView';

// Statement text whose words "light up" one after another as the block
// scrolls through the viewport. Pure CSS opacity driven by a single --p var.
// The scroll listener only exists while the block is near the viewport.
const props = defineProps({
    text: { type: String, default: '' },
    tag: { type: String, default: 'p' },
});

const words = computed(() => String(props.text ?? '').trim().split(/\s+/).filter(Boolean));
const el = ref(null);
const inView = useInView(el, '25% 0px 25% 0px');
let raf = 0;
let listening = false;
let reduced = false;

const update = () => {
    raf = 0;
    const node = el.value;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the block's top hits 85% of the viewport, 1 when its bottom reaches 45%
    const start = vh * 0.85;
    const end = vh * 0.45;
    const total = start - end + r.height;
    const p = Math.min(1, Math.max(0, (start - r.top) / total));
    node.style.setProperty('--p', p.toFixed(4));
};

const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
};

const setListening = (on) => {
    if (reduced || on === listening) return;
    listening = on;
    if (on) {
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
    } else {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }
};

watch(inView, (visible) => setListening(visible));

onMounted(() => {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
        el.value?.style.setProperty('--p', '1');
        return;
    }
    el.value?.setAttribute('data-live', '');
    update();
    if (inView.value) setListening(true);
});

onUnmounted(() => setListening(false));
</script>

<template>
    <component :is="tag" ref="el" class="bm-sw" :style="{ '--n': words.length }">
        <template v-for="(word, i) in words" :key="i">
            <span class="bm-sw__w" :style="{ '--i': i }">{{ word }}</span>{{ i < words.length - 1 ? ' ' : '' }}
        </template>
    </component>
</template>

<style scoped>
.bm-sw__w { transition: opacity 0.25s linear, color 0.25s linear; }
.bm-sw[data-live] .bm-sw__w {
    opacity: clamp(0.16, calc((var(--p, 0) * (var(--n) + 4) - var(--i)) / 4), 1);
}
</style>
