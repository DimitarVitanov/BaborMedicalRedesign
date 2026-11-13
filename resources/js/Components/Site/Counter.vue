<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

// Odometer-style counter: "25+", "10K+", "5.0", "100%" roll up digit by digit
// when scrolled into view. The real value lives in a visually-hidden span for
// screen readers / crawlers; the rolling columns are decorative.
const props = defineProps({
    value: { type: [String, Number], required: true },
});

const parts = computed(() => {
    const str = String(props.value);
    const m = str.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return { prefix: str, chars: [], suffix: '' };
    return { prefix: m[1], chars: m[2].split(''), suffix: m[3] };
});

const el = ref(null);
const armed = ref(false);
const rolled = ref(true);
let io = null;

onMounted(() => {
    armed.value = true;
    rolled.value = false;
    if (!('IntersectionObserver' in window)) {
        rolled.value = true;
        return;
    }
    io = new IntersectionObserver(
        (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                requestAnimationFrame(() => (rolled.value = true));
                io.disconnect();
            }
        },
        { threshold: 0.4 },
    );
    io.observe(el.value);
});

onUnmounted(() => io?.disconnect());
</script>

<template>
    <span ref="el" class="bm-odo" :data-armed="armed ? '' : null">
        <span class="visually-hidden-bm">{{ value }}</span>
        <span class="bm-odo__visual" aria-hidden="true">
            <span v-if="parts.prefix">{{ parts.prefix }}</span>
            <template v-for="(c, i) in parts.chars" :key="i">
                <span v-if="/\d/.test(c)" class="bm-odo__col">
                    <span
                        class="bm-odo__strip"
                        :style="{ transform: `translate3d(0, ${rolled ? -Number(c) * 10 : 0}%, 0)`, transitionDelay: `${i * 120}ms` }"
                    ></span>
                    <span class="bm-odo__ghost">{{ c }}</span>
                </span>
                <span v-else>{{ c }}</span>
            </template>
            <span v-if="parts.suffix">{{ parts.suffix }}</span>
        </span>
    </span>
</template>

<style scoped>
.bm-odo { display: inline-block; font-variant-numeric: tabular-nums; }
.bm-odo__visual { display: inline-flex; align-items: baseline; }
.bm-odo__col {
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 1em;
    line-height: 1;
}
.bm-odo__ghost { visibility: hidden; display: inline-block; }
.bm-odo__strip {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.bm-odo__strip::before {
    content: '0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9';
    white-space: pre;
    display: block;
    line-height: 1;
}
/* No JS: the SSR markup already shows the final digits.
   JS on: hold every column at 0 until hydrated, then roll up when in view. */
.bm-odo:not([data-armed]) .bm-odo__strip { transition: none; }
.js .bm-odo:not([data-armed]) .bm-odo__strip { transform: translate3d(0, 0, 0) !important; }
</style>
