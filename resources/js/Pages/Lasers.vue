<script setup>
import { Head, usePage, Link } from '@inertiajs/vue3';
import { computed, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    equipment: {
        type: Array,
        default: () => [],
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Ласери и Опрема - Babor Medical' 
        : 'Lasers & Equipment - Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Запознајте се со нашата најсовремена ласерска технологија и медицинска опрема за естетски третмани.'
        : 'Discover our state-of-the-art laser technology and medical equipment for aesthetic treatments.';
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'ТЕХНОЛОГИЈА' : 'TECHNOLOGY',
    title: locale.value === 'mk' ? 'Наши Ласери' : 'Our Lasers',
    subtitle: locale.value === 'mk' 
        ? 'Најсовремена технологија за извонредни резултати'
        : 'State-of-the-art technology for exceptional results',
    viewDetails: locale.value === 'mk' ? 'Погледни детали' : 'View Details',
}));

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MedicalBusiness',
                '@id': 'https://babormedical.com/#organization',
                'name': 'Babor Medical',
                'url': 'https://babormedical.com',
                'logo': 'https://babormedical.com/logo.webp'
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои ласери ги користи Babor Medical?' : 'What lasers does Babor Medical use?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување и ресурфејсинг, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење.' : 'Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation and resurfacing, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Што е Alma Soprano Titanium?' : 'What is Alma Soprano Titanium?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење.' : 'Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Што е Ultraformer лифтинг?' : 'What is Ultraformer lifting?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Ultraformer е HIFU (High Intensity Focused Ultrasound) технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција.' : 'Ultraformer is HIFU (High Intensity Focused Ultrasound) technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention.'
                        }
                    }
                ]
            }
        ]
    });
});

// ---- UI-only helpers (presentation) ----
const pad = (n) => String(n).padStart(2, '0');
const heroTitle = computed(() => {
    const words = String(content.value.title || '').trim().split(/\s+/);
    return words.length > 1
        ? { main: words.slice(0, -1).join(' '), accent: words[words.length - 1] }
        : { main: words[0] || '', accent: '' };
});
const anchorFor = (item) => item.slug || `device-${item.id}`;
const heroDevices = computed(() => (props.equipment || []).slice(0, 3));
const deviceNames = computed(() => (props.equipment || []).map((item) => item.title).filter(Boolean));
const openFaq = ref(0);
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? -1 : i; };
const faqId = useId();
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="locale === 'mk' ? 'ласери, ласерска епилација, Alma Soprano, естетска медицина, Babor Medical, Скопје' : 'lasers, laser hair removal, Alma Soprano, aesthetic medicine, Babor Medical, Skopje'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <link rel="canonical" href="https://babormedical.com/lasers" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/lasers?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/lasers?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/lasers" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <div class="lasers-page">
            <!-- Hero -->
            <PageHero
                :eyebrow="content.badge"
                :title="heroTitle.main"
                :accent="heroTitle.accent"
                :subtitle="content.subtitle"
                :crumb="content.title"
            >
                <nav v-if="equipment.length" class="lz-jump" :aria-label="content.title">
                    <a
                        v-for="(item, index) in equipment"
                        :key="`jump-${item.id}`"
                        :href="`#${anchorFor(item)}`"
                        class="lz-jump__item"
                    >
                        <span class="lz-jump__n">{{ pad(index + 1) }}</span>
                        <span class="lz-jump__t">{{ item.title }}</span>
                        <Icon name="arrow-down" :size="14" :stroke="1.8" />
                    </a>
                </nav>

                <template v-if="heroDevices.length" #aside>
                    <div class="lz-fan" aria-hidden="true">
                        <div
                            v-for="(item, i) in heroDevices"
                            :key="`fan-${item.id}`"
                            class="lz-fan__arch bm-stage"
                            :class="`is-${i + 1}`"
                        >
                            <span class="lz-fan__ring"></span>
                            <img
                                :src="'/storage/' + (item.image_desktop_webp || item.image)"
                                alt=""
                                width="400"
                                height="400"
                                loading="eager"
                                decoding="async"
                            />
                            <span class="lz-fan__num">{{ pad(i + 1) }}</span>
                        </div>
                        <RotatingBadge class="lz-fan__seal" :size="120" />
                    </div>
                </template>
            </PageHero>

            <!-- Equipment list -->
            <section class="lz-devices bm-cream bm-sheet bm-section">
                <div class="bm-container">
                    <article
                        v-for="(item, index) in equipment"
                        :id="anchorFor(item)"
                        :key="item.id"
                        class="lz-device"
                        :class="{ 'is-reverse': index % 2 === 1 }"
                    >
                        <div class="lz-device__visual" data-reveal="scale">
                            <div class="lz-device__stage bm-stage">
                                <span class="lz-device__ring" aria-hidden="true"></span>
                                <span class="lz-device__glow" aria-hidden="true"></span>
                                <div class="lz-device__float">
                                    <picture>
                                        <source
                                            v-if="item.image_mobile_webp"
                                            :srcset="'/storage/' + item.image_mobile_webp"
                                            media="(max-width: 768px)"
                                            type="image/webp"
                                        />
                                        <source
                                            v-if="item.image_desktop_webp"
                                            :srcset="'/storage/' + item.image_desktop_webp"
                                            media="(min-width: 769px)"
                                            type="image/webp"
                                        />
                                        <img
                                            :src="item.image ? '/storage/' + item.image : '/images/placeholder.webp'"
                                            :alt="item.title"
                                            width="800"
                                            height="800"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <span class="lz-device__tag" aria-hidden="true">
                                <span>{{ pad(index + 1) }}</span>
                                <span class="lz-device__tag-line"></span>
                                <span>{{ pad(equipment.length) }}</span>
                            </span>
                        </div>

                        <div class="lz-device__body">
                            <div class="lz-device__head">
                                <span class="lz-device__num bm-numeral" aria-hidden="true" data-reveal="fade">{{ pad(index + 1) }}</span>
                                <span class="lz-device__cat" data-reveal style="--d: 0.05s">{{ item.category }}</span>
                            </div>
                            <h2 class="bm-h2 lz-device__title"><MaskText :text="item.title" :delay="0.1" /></h2>
                            <span class="lz-device__rule" data-reveal="fade" style="--d: 0.2s" aria-hidden="true"></span>
                            <p class="bm-lead lz-device__desc" data-reveal style="--d: 0.25s">{{ item.description }}</p>

                            <div class="lz-device__actions" data-reveal style="--d: 0.35s">
                                <Link
                                    v-if="item.slug"
                                    :href="`/lasers/${item.slug}`"
                                    class="bm-btn bm-btn--wine"
                                >
                                    <span>{{ content.viewDetails }}</span>
                                    <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <!-- Ribbons -->
            <div v-if="deviceNames.length" class="lz-ribbons" aria-hidden="true">
                <Marquee :items="deviceNames" variant="wine" :tilt="-2.5" :duration="44" />
                <Marquee :items="deviceNames" variant="outline" :tilt="2" :duration="52" reverse />
            </div>
        </div>

        <!-- FAQ -->
        <section class="lz-faq bm-wine bm-section bm-grain">
            <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="bm-container lz-faq__grid">
                <div class="lz-faq__head">
                    <span class="lz-faq__mark bm-numeral" aria-hidden="true">?</span>
                    <h2 class="bm-h2 lz-faq__title">
                        <MaskText :text="locale === 'mk' ? 'Најчесто поставувани прашања' : 'Frequently Asked Questions'" />
                    </h2>
                </div>

                <div class="bm-faq lz-faq__list" data-reveal style="--d: 0.15s">
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                        <h3 class="lz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 0 ? 'true' : 'false'" :aria-controls="`${faqId}-0`" @click="toggleFaq(0)">
                                <span>{{ locale === 'mk' ? 'Кои ласери ги користи Babor Medical?' : 'What lasers does Babor Medical use?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-0`" class="bm-faq__a" role="region">
                            <div><p>{{ locale === 'mk' ? 'Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење.' : 'Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing.' }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                        <h3 class="lz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 1 ? 'true' : 'false'" :aria-controls="`${faqId}-1`" @click="toggleFaq(1)">
                                <span>{{ locale === 'mk' ? 'Што е Alma Soprano Titanium?' : 'What is Alma Soprano Titanium?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-1`" class="bm-faq__a" role="region">
                            <div><p>{{ locale === 'mk' ? 'Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење.' : 'Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system.' }}</p></div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                        <h3 class="lz-faq__h">
                            <button type="button" class="bm-faq__q" :aria-expanded="openFaq === 2 ? 'true' : 'false'" :aria-controls="`${faqId}-2`" @click="toggleFaq(2)">
                                <span>{{ locale === 'mk' ? 'Што е Ultraformer лифтинг?' : 'What is Ultraformer lifting?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div :id="`${faqId}-2`" class="bm-faq__a" role="region">
                            <div><p>{{ locale === 'mk' ? 'Ultraformer е HIFU технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција.' : 'Ultraformer is HIFU technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention.' }}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero: jump index ---------- */
.lz-jump {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 640px;
}
.lz-jump__item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 9px 16px 9px 10px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
    background: rgba(246, 238, 230, 0.03);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--on-dark-muted);
    transition: color 0.4s, border-color 0.4s, background 0.4s;
}
.lz-jump__n {
    display: inline-grid;
    place-items: center;
    min-width: 30px;
    height: 30px;
    padding: 0 6px;
    border-radius: 999px;
    background: rgba(217, 185, 149, 0.12);
    color: var(--gold-300);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
}
.lz-jump__item svg { opacity: 0.5; transition: transform 0.5s var(--ease-out), opacity 0.4s; }
.lz-jump__item:hover {
    color: var(--on-dark);
    border-color: rgba(217, 185, 149, 0.45);
    background: rgba(217, 185, 149, 0.08);
}
.lz-jump__item:hover svg { opacity: 1; transform: translateY(3px); }

/* ---------- Hero: device fan ---------- */
.lz-fan {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: min(100%, 560px);
    margin-inline: auto 0;
    aspect-ratio: 1 / 0.92;
}
.lz-fan__arch {
    position: relative;
    flex: none;
    width: 38%;
    aspect-ratio: 4 / 6.2;
    border-radius: 999px 999px 18px 18px;
    border: 1px solid rgba(217, 185, 149, 0.2);
    box-shadow: 0 40px 70px -30px rgba(0, 0, 0, 0.7);
    animation: lz-bob 7s var(--ease-in-out) infinite alternate;
}
.lz-fan__arch.is-1 { margin-right: -7%; margin-bottom: 4%; z-index: 1; animation-delay: -2s; }
.lz-fan__arch.is-2 { width: 44%; z-index: 2; margin-bottom: 12%; animation-delay: -4s; }
.lz-fan__arch.is-3 { margin-left: -7%; margin-bottom: 0; z-index: 1; animation-delay: -1s; }
.lz-fan__ring {
    position: absolute;
    inset: 6%;
    border-radius: 999px 999px 12px 12px;
    border: 1px solid rgba(217, 185, 149, 0.16);
    pointer-events: none;
}
.lz-fan__arch img {
    width: 80%;
    height: 72%;
    margin-top: 18%;
    filter: drop-shadow(0 24px 30px rgba(0, 0, 0, 0.55));
}
.lz-fan__num {
    position: absolute;
    left: 50%;
    bottom: 7%;
    z-index: 2;
    transform: translateX(-50%);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    color: var(--gold-300);
}
.lz-fan__seal { position: absolute; left: -2%; top: 4%; z-index: 3; }
@keyframes lz-bob {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(0, -14px, 0); }
}

/* ---------- Devices ---------- */
.lz-devices { overflow: hidden; }
.lz-devices .bm-container {
    display: grid;
    gap: clamp(96px, 12vw, 190px);
}
.lz-device {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: center;
    scroll-margin-top: calc(var(--header-h) + 24px);
}
.lz-device.is-reverse { grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); }
.lz-device.is-reverse .lz-device__visual { order: 2; }

.lz-device__visual { position: relative; width: min(100%, 500px); justify-self: center; }
.lz-device__head { display: flex; align-items: flex-end; gap: 4px 22px; flex-wrap: wrap; }
.lz-device__stage {
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.22);
    box-shadow: 0 70px 100px -60px rgba(56, 19, 34, 0.75), 0 0 0 10px rgba(110, 32, 57, 0.05);
    transition: box-shadow 0.8s var(--ease-out), border-color 0.6s;
}
.lz-device__ring {
    position: absolute;
    inset: 6%;
    border-radius: 999px 999px 14px 14px;
    border: 1px solid rgba(217, 185, 149, 0.16);
    pointer-events: none;
    transition: inset 0.9s var(--ease-out), border-color 0.6s;
}
.lz-device__glow {
    position: absolute;
    left: 50%;
    top: 40%;
    width: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.85);
    background: radial-gradient(circle, rgba(217, 185, 149, 0.22), transparent 65%);
    opacity: 0.6;
    transition: transform 1.1s var(--ease-out), opacity 0.8s;
    pointer-events: none;
}
.lz-device__float {
    position: relative;
    z-index: 1;
    width: 78%;
    height: 78%;
    margin-top: 12%;
    transition: transform 1.1s var(--ease-out);
}
.lz-device__float picture { display: contents; }
.lz-device__float img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 34px 40px rgba(0, 0, 0, 0.5));
}
.lz-device:hover .lz-device__float { transform: translate3d(0, -16px, 0) scale(1.03); }
.lz-device:hover .lz-device__stage {
    border-color: rgba(217, 185, 149, 0.5);
    box-shadow: 0 90px 110px -60px rgba(56, 19, 34, 0.9), 0 0 0 10px rgba(110, 32, 57, 0.08);
}
.lz-device:hover .lz-device__ring { inset: 4%; border-color: rgba(217, 185, 149, 0.32); }
.lz-device:hover .lz-device__glow { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }

.lz-device__tag {
    position: absolute;
    right: -14px;
    bottom: 40px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    background: var(--cream-50);
    box-shadow: 0 20px 40px -20px rgba(56, 19, 34, 0.45);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: var(--ink-soft);
}
.lz-device__tag span:first-child { color: var(--wine-600); }
.lz-device__tag-line { width: 26px; height: 1px; background: var(--line-light); }
.lz-device.is-reverse .lz-device__tag { right: auto; left: -14px; }

.lz-device__body { position: relative; display: flex; flex-direction: column; align-items: flex-start; }
.lz-device__num {
    font-size: clamp(5.5rem, 10vw, 9.5rem);
    margin-left: -0.04em;
    transition: color 0.8s var(--ease-out);
}
.lz-device:hover .lz-device__num { color: rgba(110, 32, 57, 0.08); }
.lz-device__cat {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid var(--line-light);
    background: #fffaf5;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--wine-600);
    margin-bottom: 1.2em;
}
.lz-device__title { margin-top: 26px; max-width: 12ch; }
.lz-device__rule {
    display: block;
    width: 72px;
    height: 1px;
    margin-top: 30px;
    background: var(--wine-500);
    opacity: 0.5;
}
.lz-device__desc { margin-top: 24px; max-width: 520px; color: var(--ink-soft); }
.lz-device__actions { margin-top: 36px; display: flex; flex-wrap: wrap; gap: 14px; }

/* ---------- Ribbons ---------- */
.lz-ribbons {
    position: relative;
    z-index: 3;
    display: grid;
    background: var(--wine-950);
    padding: clamp(70px, 9vw, 120px) 0;
    overflow: hidden;
}
.lz-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- FAQ ---------- */
.lz-faq { overflow: hidden; }
.lz-faq__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.lz-faq__head { position: sticky; top: calc(var(--header-h) + 32px); }
.lz-faq__mark { display: block; font-size: clamp(7rem, 12vw, 11rem); margin-bottom: -0.1em; }
.lz-faq__title { max-width: 11ch; }
.lz-faq__h { margin: 0; font: inherit; letter-spacing: normal; line-height: inherit; }
.lz-faq__list .bm-faq__a p { color: var(--on-dark-muted); }

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
    .lz-fan { margin-inline: auto; width: min(100%, 460px); }
    .lz-device,
    .lz-device.is-reverse { grid-template-columns: 1fr; gap: 36px; }
    .lz-device.is-reverse .lz-device__visual { order: 0; }
    .lz-device__visual { width: min(100%, 460px); margin-inline: auto; }
    .lz-device__num { font-size: clamp(5rem, 22vw, 8rem); }
    .lz-faq__grid { grid-template-columns: 1fr; }
    .lz-faq__head { position: static; }
}
@media (max-width: 575.98px) {
    .lz-jump__item { font-size: 0.78rem; }
    .lz-fan__seal { width: 88px !important; height: 88px !important; left: -4px; top: 0; }
    .lz-device__tag { right: 10px; bottom: 22px; }
    .lz-device.is-reverse .lz-device__tag { left: auto; right: 10px; }
    .lz-device__title { max-width: none; }
    .lz-device__actions .bm-btn { width: 100%; justify-content: space-between; }
    .lz-faq__mark { font-size: 6rem; }
}
@media (prefers-reduced-motion: reduce) {
    .lz-fan__arch { animation: none; }
}
</style>
