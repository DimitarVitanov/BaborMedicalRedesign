<script setup>
import { computed } from 'vue';

// Splits a string into words that slide up out of a mask when revealed.
// Rendered on the server, so text stays crawlable and hydration-safe.
const props = defineProps({
    text: { type: [String, Number], default: '' },
    tag: { type: String, default: 'span' },
    delay: { type: Number, default: 0 }, // seconds
    start: { type: Number, default: 0 }, // index offset for stagger when chaining several MaskTexts
    instant: { type: Boolean, default: false }, // above the fold: animate on first paint via CSS, no observer
});

const words = computed(() => String(props.text ?? '').trim().split(/\s+/).filter(Boolean));
</script>

<template>
    <component
        :is="tag"
        :data-mask="instant ? null : ''"
        :data-mask-instant="instant ? '' : null"
        :style="{ '--md': `${delay}s` }"
    >
        <template v-for="(word, i) in words" :key="i">
            <span class="bm-mw"><span class="bm-mw__i" :style="{ '--i': start + i }">{{ word }}</span></span>{{ i < words.length - 1 ? ' ' : '' }}
        </template>
    </component>
</template>
