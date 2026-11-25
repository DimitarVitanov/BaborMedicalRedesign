<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';

/**
 * Black Friday "spisanie" — a magazine popup shown once per session on entry.
 * Pages: cover → -50% laser epilation → product spreads → store CTA.
 * Product data is dynamically imported so it never weighs on first paint.
 */
const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const LAST_DAY = '2026-11-28'; // shows from now until the end of Black Friday weekend
const mounted = ref(false); // render the Teleport only client-side (SSR hydration safety)
const open = ref(false);
const products = ref([]);
const current = ref(0);
const flipDir = ref('next');

const mk = computed(() => locale.value === 'mk');
const t = (en, m) => (locale.value === 'mk' ? m : en);

const PER_PAGE = 4;

const pages = computed(() => {
    const list = [{ type: 'cover' }, { type: 'epilation' }];
    for (let i = 0; i < products.value.length; i += PER_PAGE) {
        list.push({ type: 'products', items: products.value.slice(i, i + PER_PAGE) });
    }
    list.push({ type: 'outro' });
    return list;
});

const pad = (n) => String(n + 1).padStart(2, '0');

const go = (dir) => {
    const next = current.value + dir;
    if (next < 0 || next >= pages.value.length) return;
    flipDir.value = dir > 0 ? 'next' : 'prev';
    current.value = next;
};

const close = () => {
    open.value = false;
    document.documentElement.style.overflow = '';
};

const onKey = (e) => {
    if (!open.value) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
};

let touchX = 0;
const onTouchStart = (e) => { touchX = e.touches[0].clientX; };
const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
};

onMounted(() => {
    mounted.value = true;
    if (!page.props.blackFriday) return; // admin toggle: Settings > Promotions
    // ?bf=1 opens it on any page, any day (preview / direct link for socials)
    const force = new URLSearchParams(window.location.search).has('bf');
    if (!force) {
        if (new Date() > new Date(LAST_DAY + 'T23:59:59')) return;
        if (page.component !== 'Welcome') return; // landing page only
    }

    // wait for full load + a beat, so the popup never competes with LCP
    const show = () => setTimeout(async () => {
        const data = await import('../../data/black-friday.json');
        products.value = data.default;
        open.value = true;
        document.documentElement.style.overflow = 'hidden';
    }, force ? 400 : 1400);
    if (document.readyState === 'complete') show();
    else window.addEventListener('load', show, { once: true });

    document.addEventListener('keydown', onKey);
});

onUnmounted(() => {
    document.removeEventListener('keydown', onKey);
    if (open.value) document.documentElement.style.overflow = '';
});
</script>

<template>
    <Teleport v-if="mounted" to="body">
        <Transition name="bfj">
            <div v-if="open" class="bfj" role="dialog" aria-modal="true" :aria-label="t('Black Friday offers', 'Black Friday понуди')">
                <div class="bfj__scrim" @click="close"></div>

                <div class="bfj__book" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
                    <button class="bfj__close" :aria-label="t('Close', 'Затвори')" @click="close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 5l14 14M19 5L5 19"/></svg>
                    </button>

                    <Transition :name="flipDir === 'next' ? 'bfj-flip-next' : 'bfj-flip-prev'" mode="out-in">
                        <!-- ============ COVER ============ -->
                        <div v-if="pages[current].type === 'cover'" :key="'p' + current" class="bfj__page bfj__page--dark">
                            <div class="bfj__rings" aria-hidden="true"></div>
                            <div class="bfj__cover">
                                <p class="bfj__kicker">babormedical.com</p>
                                <p class="bfj__bf">Black<br><em>Friday</em></p>
                                <div class="bfj__coverline"></div>
                                <p class="bfj__coveroffer">−50% {{ t('laser hair removal', 'на ласерска епилација' ) }}</p>
                                <p class="bfj__covermeta">{{ t('+ up to −50% on BABOR skincare', '+ до −50% на BABOR нега' ) }}</p>
                                <button class="bfj__cta" @click="go(1)">
                                    {{ t('Browse the journal', 'Прелистај го списанието') }}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                                </button>
                            </div>
                        </div>

                        <!-- ============ EPILATION ============ -->
                        <div v-else-if="pages[current].type === 'epilation'" :key="'p' + current" class="bfj__page bfj__page--dark">
                            <div class="bfj__rings" aria-hidden="true"></div>
                            <div class="bfj__epi">
                                <p class="bfj__kicker">{{ t('In the clinic', 'Во клиниката') }}</p>
                                <p class="bfj__epi-off">−50%</p>
                                <h3 class="bfj__epi-title">{{ t('Laser hair removal', 'Ласерска епилација') }}</h3>
                                <p class="bfj__epi-sub">Alma Soprano Titanium · {{ t('all packages', 'сите пакети') }}</p>
                                <a href="/contact" class="bfj__cta" @click="close">
                                    {{ t('Book an appointment', 'Закажи термин') }}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                                </a>
                            </div>
                        </div>

                        <!-- ============ PRODUCTS ============ -->
                        <div v-else-if="pages[current].type === 'products'" :key="'p' + current" class="bfj__page bfj__page--paper">
                            <div class="bfj__paperhead">
                                <span>Black Friday</span>
                                <span class="bfj__paperhead-brand">skinboutique.mk</span>
                            </div>
                            <div class="bfj__grid">
                                <a
                                    v-for="item in pages[current].items"
                                    :key="item.name"
                                    :href="item.url"
                                    target="_blank"
                                    rel="noopener"
                                    class="bfj__card"
                                >
                                    <span class="bfj__badge">−{{ item.disc }}</span>
                                    <span class="bfj__imgwrap"><img :src="item.img" :alt="item.name" loading="lazy" decoding="async" /></span>
                                    <span class="bfj__name">{{ item.name }}</span>
                                    <span class="bfj__prices">
                                        <s>{{ item.old }}</s>
                                        <strong>{{ item.new }} {{ t('MKD', 'ден.') }}</strong>
                                    </span>
                                    <span class="bfj__order">{{ t('Order at our online store', 'Нарачајте преку нашата онлајн продавница') }} → <u>skinboutique.mk</u></span>
                                </a>
                            </div>
                        </div>

                        <!-- ============ OUTRO ============ -->
                        <div v-else :key="'p' + current" class="bfj__page bfj__page--dark">
                            <div class="bfj__rings" aria-hidden="true"></div>
                            <div class="bfj__cover">
                                <p class="bfj__kicker">{{ t('The whole catalogue', 'Целата понуда') }}</p>
                                <p class="bfj__bf bfj__bf--sm">skin<em>boutique</em>.mk</p>
                                <p class="bfj__covermeta">{{ t('Order online — delivery across Macedonia', 'Нарачај онлајн — достава низ цела Македонија') }}</p>
                                <a href="https://www.skinboutique.mk" target="_blank" rel="noopener" class="bfj__cta">
                                    {{ t('Shop Black Friday', 'Купувај Black Friday') }}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                                </a>
                            </div>
                        </div>
                    </Transition>

                    <!-- controls -->
                    <div class="bfj__nav">
                        <button class="bfj__arrow" :disabled="current === 0" :aria-label="t('Previous page', 'Претходна страница')" @click="go(-1)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6"/></svg>
                        </button>
                        <span class="bfj__count">{{ pad(current) }} <i>/ {{ pad(pages.length - 1) }}</i></span>
                        <button class="bfj__arrow" :disabled="current === pages.length - 1" :aria-label="t('Next page', 'Следна страница')" @click="go(1)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6l6 6-6 6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.bfj { position: fixed; inset: 0; z-index: 4000; display: grid; place-items: center; padding: 18px; }
.bfj__scrim { position: absolute; inset: 0; background: rgba(10, 4, 7, 0.78); backdrop-filter: blur(6px); }

.bfj__book {
    position: relative;
    width: min(920px, 100%);
    height: min(640px, calc(100dvh - 56px));
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 60px 120px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(217, 185, 149, 0.28);
    perspective: 1800px;
    background: #160a0e;
}

.bfj__close {
    position: absolute; top: 14px; right: 14px; z-index: 10;
    width: 42px; height: 42px; border-radius: 50%;
    display: grid; place-items: center;
    border: 1px solid rgba(217, 185, 149, 0.4);
    background: rgba(22, 10, 14, 0.65);
    color: #f6eee6; cursor: pointer;
    transition: background 0.25s, transform 0.25s;
}
.bfj__close:hover { background: #8c2a48; transform: rotate(90deg); }
.bfj__close svg { width: 17px; height: 17px; }

/* ---------- pages ---------- */
.bfj__page { position: absolute; inset: 0; display: grid; overflow: hidden; }
.bfj__page--dark {
    background:
        radial-gradient(85% 70% at 50% 115%, rgba(140, 42, 72, 0.5), transparent 70%),
        linear-gradient(170deg, #1f0c14, #160a0e);
    color: #f6eee6;
    place-items: center;
    padding: 20px 20px 48px;
}
.bfj__rings {
    position: absolute; left: 50%; top: -4%; width: 1100px; aspect-ratio: 2/1; transform: translateX(-50%);
    background: repeating-radial-gradient(circle at 50% 0, transparent 0 89px, rgba(217, 185, 149, 0.1) 89px 90px);
    -webkit-mask-image: linear-gradient(180deg, #000, transparent 85%);
    mask-image: linear-gradient(180deg, #000, transparent 85%);
    pointer-events: none;
}

.bfj__cover, .bfj__epi { position: relative; text-align: center; padding: 24px; max-width: 560px; }
.bfj__kicker {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
    color: #d9b995; margin-bottom: 18px;
}
.bfj__bf {
    font-family: 'Noto Serif Display', Georgia, serif;
    font-weight: 300; font-size: clamp(3.4rem, 9vw, 5.6rem); line-height: 0.95; letter-spacing: -0.02em;
}
.bfj__bf--sm { font-size: clamp(2.2rem, 6vw, 3.6rem); }
.bfj__bf em { font-style: italic; color: #d9b995; }
.bfj__coverline { width: 72px; height: 1px; background: rgba(217, 185, 149, 0.6); margin: 26px auto; }
.bfj__coveroffer {
    font-family: 'Noto Serif Display', Georgia, serif;
    font-size: clamp(1.3rem, 3vw, 1.8rem); font-style: italic; color: #f6eee6;
}
.bfj__covermeta { margin-top: 10px; font-size: 0.92rem; color: rgba(246, 238, 230, 0.6); }

.bfj__cta {
    display: inline-flex; align-items: center; gap: 12px;
    margin-top: 26px; padding: 14px 28px; border-radius: 999px;
    background: #e8d5c4; color: #381322; border: 0; cursor: pointer;
    font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    font-family: inherit; text-decoration: none;
    transition: transform 0.3s, background 0.3s;
}
.bfj__cta:hover { transform: translateY(-2px); background: #f4ece4; }
.bfj__cta svg { width: 16px; height: 16px; }

.bfj__epi-off {
    font-family: 'Noto Serif Display', Georgia, serif; font-style: italic; font-weight: 300;
    font-size: clamp(4.4rem, 12vw, 7rem); line-height: 1; color: #d9b995;
}
.bfj__epi-title {
    font-family: 'Noto Serif Display', Georgia, serif; font-weight: 300;
    font-size: clamp(1.7rem, 4vw, 2.5rem); margin-top: 6px;
}
.bfj__epi-sub { margin-top: 10px; font-size: 0.95rem; color: rgba(246, 238, 230, 0.62); }

/* ---------- paper (product) pages ---------- */
.bfj__page--paper { background: #f4ece4; color: #2a1219; grid-template-rows: auto 1fr; }
.bfj__paperhead {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 64px 12px 24px; border-bottom: 1px solid rgba(42, 18, 25, 0.14);
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.26em; text-transform: uppercase; color: #6e2039;
}
.bfj__grid {
    display: grid; grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr;
    gap: 1px; background: rgba(42, 18, 25, 0.12); overflow-y: auto;
    /* last row of cards stays clear of the pager pill */
    padding-bottom: 64px;
}
.bfj__card {
    position: relative; display: flex; flex-direction: column; align-items: center; text-align: center;
    background: #faf6f1; padding: 18px 16px 14px; text-decoration: none; color: inherit;
    transition: background 0.25s;
}
.bfj__card:hover { background: #fff; }
.bfj__badge {
    position: absolute; top: 10px; left: 10px;
    padding: 5px 10px; border-radius: 999px; background: #6e2039; color: #f4ece4;
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em;
}
.bfj__imgwrap { width: 100%; height: 108px; display: grid; place-items: center; margin-bottom: 10px; }
.bfj__imgwrap img { max-width: 100%; max-height: 108px; object-fit: contain; mix-blend-mode: multiply; }
.bfj__name {
    font-family: 'Noto Serif Display', Georgia, serif; font-size: 0.95rem; line-height: 1.25; font-weight: 400;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    min-height: 2.5em;
}
.bfj__prices { display: flex; align-items: baseline; gap: 10px; margin-top: 7px; }
.bfj__prices s { color: rgba(42, 18, 25, 0.45); font-size: 0.82rem; }
.bfj__prices strong { color: #6e2039; font-size: 1.02rem; font-weight: 700; }
.bfj__order { margin-top: 7px; font-size: 0.66rem; letter-spacing: 0.04em; color: rgba(42, 18, 25, 0.55); }
.bfj__order u { color: #6e2039; text-decoration-color: rgba(110, 32, 57, 0.4); }

/* ---------- nav ---------- */
.bfj__nav {
    position: absolute; right: 16px; bottom: 14px; z-index: 10;
    display: flex; align-items: center; gap: 14px;
    padding: 7px 14px; border-radius: 999px;
    background: rgba(22, 10, 14, 0.82); border: 1px solid rgba(217, 185, 149, 0.3);
    color: #f6eee6;
}
.bfj__arrow {
    width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center;
    border: 1px solid rgba(217, 185, 149, 0.35); background: transparent; color: #f6eee6; cursor: pointer;
    transition: background 0.25s, color 0.25s;
}
.bfj__arrow:hover:not(:disabled) { background: #e8d5c4; color: #381322; }
.bfj__arrow:disabled { opacity: 0.35; cursor: default; }
.bfj__arrow svg { width: 16px; height: 16px; }
.bfj__count { font-size: 0.82rem; letter-spacing: 0.1em; font-variant-numeric: tabular-nums; }
.bfj__count i { font-style: normal; opacity: 0.55; font-size: 0.72rem; }

/* ---------- transitions ---------- */
.bfj-enter-active { transition: opacity 0.45s ease; }
.bfj-leave-active { transition: opacity 0.3s ease; }
.bfj-enter-from, .bfj-leave-to { opacity: 0; }

/* simple, GPU-safe page turn: slide + fade (3D rotate flashed on some GPUs) */
.bfj-flip-next-enter-active, .bfj-flip-prev-enter-active { transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.32s ease; }
.bfj-flip-next-leave-active, .bfj-flip-prev-leave-active { transition: transform 0.18s ease-in, opacity 0.18s ease; }
.bfj-flip-next-enter-from { transform: translateX(5%); opacity: 0; }
.bfj-flip-next-leave-to { transform: translateX(-5%); opacity: 0; }
.bfj-flip-prev-enter-from { transform: translateX(-5%); opacity: 0; }
.bfj-flip-prev-leave-to { transform: translateX(5%); opacity: 0; }

/* ---------- mobile: a framed card, not a fullscreen takeover ---------- */
@media (max-width: 639.98px) {
    .bfj { padding: 16px; }
    .bfj__book { width: min(420px, 100%); height: min(76dvh, 680px); border-radius: 20px; }
    .bfj__grid {
        grid-template-columns: 1fr 1fr; grid-auto-rows: auto; align-content: start;
        background: transparent; gap: 10px; padding: 12px 12px 70px;
    }
    .bfj__card { padding: 14px 12px 12px; border: 1px solid rgba(42, 18, 25, 0.12); border-radius: 14px; }
    .bfj__imgwrap { height: 76px; margin-bottom: 8px; }
    .bfj__imgwrap img { max-height: 76px; }
    .bfj__name { font-size: 0.8rem; min-height: 2.4em; }
    .bfj__order { font-size: 0.58rem; margin-top: 5px; }
    .bfj__prices { margin-top: 5px; }
    .bfj__prices strong { font-size: 0.9rem; }
    .bfj__prices s { font-size: 0.74rem; }
    .bfj__badge { top: 7px; left: 7px; padding: 4px 8px; font-size: 0.64rem; }
    .bfj__close { top: 10px; right: 10px; width: 38px; height: 38px; }
    .bfj__page--dark { padding-bottom: 92px; }
    .bfj__nav { right: auto; left: 50%; transform: translateX(-50%); bottom: 10px; padding: 5px 10px; gap: 10px; }
    .bfj__arrow { width: 32px; height: 32px; }
    .bfj__paperhead { padding: 15px 62px 11px 16px; font-size: 0.58rem; }
    .bfj__bf { font-size: clamp(2.6rem, 16vw, 3.6rem); }
    .bfj__epi-off { font-size: clamp(3.4rem, 20vw, 4.6rem); }
    .bfj__cta { margin-top: 20px; padding: 12px 22px; font-size: 0.72rem; }
}

@media (prefers-reduced-motion: reduce) {
    .bfj-flip-next-enter-active, .bfj-flip-prev-enter-active,
    .bfj-flip-next-leave-active, .bfj-flip-prev-leave-active { transition: opacity 0.2s; transform: none !important; }
}
</style>
