<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Desktop: the section pins while vertical scrolling slides the track sideways;
// the optional #intro slot stays put on the left.
// Mobile / reduced motion: intro on top, then a native swipe row with scroll-snap.
const outer = ref(null);
const viewport = ref(null);
const track = ref(null);
const pinned = ref(false);
let raf = 0;
let distance = 0;
let mq = null;

const measure = () => {
    if (!pinned.value || !track.value || !outer.value || !viewport.value) return;
    distance = Math.max(0, track.value.scrollWidth - viewport.value.clientWidth);
    outer.value.style.height = `${window.innerHeight + distance}px`;
    update();
};

const update = () => {
    raf = 0;
    if (!pinned.value || !outer.value || !track.value) return;
    const r = outer.value.getBoundingClientRect();
    const scrollable = outer.value.offsetHeight - window.innerHeight;
    const p = scrollable > 0 ? Math.min(1, Math.max(0, -r.top / scrollable)) : 0;
    track.value.style.transform = `translate3d(${(-p * distance).toFixed(1)}px, 0, 0)`;
    outer.value.style.setProperty('--hs-p', p.toFixed(4));
};

const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
};

const setMode = () => {
    const shouldPin = mq.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    pinned.value = shouldPin;
    if (!shouldPin) {
        if (outer.value) outer.value.style.height = '';
        if (track.value) track.value.style.transform = '';
        return;
    }
    requestAnimationFrame(measure);
};

// Only track scrolling while the section is near the viewport.
let io = null;
let listening = false;
const setListening = (on) => {
    if (on === listening) return;
    listening = on;
    if (on) {
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    } else {
        window.removeEventListener('scroll', onScroll);
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }
};

onMounted(() => {
    mq = window.matchMedia('(min-width: 992px)');
    setMode();
    mq.addEventListener?.('change', setMode);
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);

    if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(
            ([entry]) => setListening(entry.isIntersecting),
            { rootMargin: '50% 0px 50% 0px' },
        );
        io.observe(outer.value);
    } else {
        setListening(true);
    }
});

onUnmounted(() => {
    mq?.removeEventListener?.('change', setMode);
    io?.disconnect();
    setListening(false);
    window.removeEventListener('resize', measure);
    window.removeEventListener('load', measure);
});
</script>

<template>
    <div ref="outer" class="bm-hs" :class="{ 'is-pinned': pinned, 'has-intro': $slots.intro }">
        <div class="bm-hs__sticky">
            <div v-if="$slots.intro" class="bm-hs__intro">
                <slot name="intro" />
            </div>
            <div ref="viewport" class="bm-hs__viewport">
                <div ref="track" class="bm-hs__track">
                    <slot />
                </div>
                <div class="bm-hs__progress" aria-hidden="true"><span></span></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bm-hs { position: relative; }
.bm-hs__intro { padding-inline: var(--gutter); margin-bottom: 44px; }
.bm-hs__viewport {
    position: relative;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
}
.bm-hs__viewport::-webkit-scrollbar { display: none; }
.bm-hs__track {
    display: flex;
    gap: clamp(16px, 2vw, 28px);
    width: max-content;
    padding-inline: var(--gutter);
}
.bm-hs__track > :deep(*) { scroll-snap-align: center; flex: none; }
.bm-hs__progress { display: none; }

/* ---- pinned (desktop) ---- */
.bm-hs.is-pinned .bm-hs__sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.bm-hs.is-pinned .bm-hs__intro {
    flex: 0 0 clamp(320px, 34vw, 540px);
    margin: 0;
    padding-right: clamp(24px, 3vw, 56px);
    position: relative;
    z-index: 2;
}
.bm-hs.is-pinned .bm-hs__viewport {
    flex: 1;
    min-width: 0;
    overflow: visible;
    scroll-snap-type: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 64px);
    mask-image: linear-gradient(90deg, transparent 0, #000 64px);
}
.bm-hs.is-pinned.has-intro .bm-hs__track { padding-left: 64px; }
.bm-hs.is-pinned .bm-hs__track { will-change: transform; }
.bm-hs.is-pinned .bm-hs__progress {
    display: block;
    position: absolute;
    left: 64px;
    right: var(--gutter);
    bottom: 48px;
    height: 1px;
    background: var(--line-dark);
}
.bm-hs.is-pinned .bm-hs__progress span {
    position: absolute;
    inset: 0;
    background: var(--gold-300);
    transform-origin: left;
    transform: scaleX(var(--hs-p, 0));
}
</style>
