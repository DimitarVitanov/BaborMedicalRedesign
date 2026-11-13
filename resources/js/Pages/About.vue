<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import ScrollWords from '@/Components/Site/ScrollWords.vue';
import Counter from '@/Components/Site/Counter.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    about: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'За нас - Babor Medical' 
        : 'About Us - Babor Medical';
});

const stats = computed(() => [
    { number: '25+', label: locale.value === 'mk' ? 'Години искуство' : 'Years Experience', icon: 'calendar' },
    { number: '10K+', label: locale.value === 'mk' ? 'Задоволни клиенти' : 'Happy Clients', icon: 'users' },
    { number: '50+', label: locale.value === 'mk' ? 'Третмани' : 'Treatments', icon: 'sparkle' },
    { number: '15+', label: locale.value === 'mk' ? 'Експерти' : 'Experts', icon: 'award' },
]);

const values = computed(() => [
    {
        icon: 'heart',
        title: locale.value === 'mk' ? 'Посветеност' : 'Dedication',
        desc: locale.value === 'mk' ? 'Посветени сме на вашата убавина и благосостојба' : 'We are dedicated to your beauty and wellness'
    },
    {
        icon: 'shield',
        title: locale.value === 'mk' ? 'Квалитет' : 'Quality',
        desc: locale.value === 'mk' ? 'Користиме само премиум Babor производи' : 'We use only premium Babor products'
    },
    {
        icon: 'star',
        title: locale.value === 'mk' ? 'Извонредност' : 'Excellence',
        desc: locale.value === 'mk' ? 'Континуирано образование и усовршување' : 'Continuous education and improvement'
    },
]);

const formatContent = (content) => {
    if (!content) return [];
    return content.split('\n\n').filter(p => p.trim());
};

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MedicalBusiness',
                '@id': 'https://babormedical.com/#organization',
                'name': 'Babor Medical',
                'url': 'https://babormedical.com',
                'logo': 'https://babormedical.com/logo.webp',
                'image': 'https://babormedical.com/logo.webp',
                'telephone': '+389 75 340 933',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$',
                'description': locale.value === 'mk' ? 'Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Нудиме ласерска епилација, козметолошки третмани, инјектибилни методи и третмани на тело.' : 'Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We offer laser hair removal, cosmetology treatments, injectable methods and body treatments.'
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Што е Babor Medical?' : 'What is Babor Medical?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Специјализирани сме за ласерска епилација, козметологија, инјектибилни методи и третмани на тело со најсовремена технологија и стручен медицински тим.' : 'Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We specialize in laser hair removal, cosmetology, injectable methods and body treatments with state-of-the-art technology and expert medical team.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои технологии ги користите?' : 'What technologies do you use?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Користиме најсовремена опрема од Alma Lasers: Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Ultraformer за лифтинг, и премиум BABOR козметички протоколи.' : 'We use state-of-the-art equipment from Alma Lasers: Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Ultraformer for lifting, and premium BABOR cosmetic protocols.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Каде се наоѓа Babor Medical?' : 'Where is Babor Medical located?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical се наоѓа во Скопје, Македонија. За точна адреса, работно време и закажување, контактирајте нè на +389 75 340 933 или посетете babormedical.com/contact.' : 'Babor Medical is located in Skopje, Macedonia. For exact address, working hours and appointments, contact us at +389 75 340 933 or visit babormedical.com/contact.'
                        }
                    }
                ]
            }
        ]
    });
});

// ---------- UI-only helpers (presentation, no content changes) ----------

// Headings: the last word renders as the italic accent line.
const splitAccent = (text) => {
    const words = String(text || '').trim().split(/\s+/).filter(Boolean);
    if (words.length < 2) return { main: words.join(' '), accent: '' };
    return { main: words.slice(0, -1).join(' '), accent: words[words.length - 1] };
};
const heroTitle = computed(() => splitAccent(props.about.title));

// Content containing HTML tags / entities is rendered with v-html as before.
const hasMarkup = (s) => /<[a-z!/][\s\S]*>|&[a-z#0-9]+;/i.test(s || '');

// Story: plain-text full_content (blank-line paragraphs) is laid out editorially —
// opening paragraphs, one short paragraph as a scroll-lit statement, and the
// closing lines as a sign-off. Order is preserved. HTML content falls back to v-html.
const story = computed(() => {
    const raw = props.about.full_content || '';
    if (hasMarkup(raw)) return null;
    const paras = raw.split(/\r?\n[ \t]*\r?\n/).map((p) => p.trim()).filter(Boolean);
    const plain = { intro: paras, statement: '', closing: [] };
    if (paras.length < 4) return plain;
    const k = paras.length - 3;
    if (paras[k].split(/\s+/).length > 40) return plain;
    return { intro: paras.slice(0, k), statement: paras[k], closing: paras.slice(k + 1) };
});

// Decorative ribbons reuse the page's own words.
const ribbonValues = computed(() => {
    const titles = values.value.map((v) => v.title);
    return [...titles, 'Babor Medical', ...titles, 'Babor Medical'];
});
const ribbonStats = computed(() => stats.value.map((s) => `${s.number} ${s.label}`));

// FAQ accordion state
const openFaq = ref(0);
const faqUid = useId();
const toggleFaq = (i) => {
    openFaq.value = openFaq.value === i ? -1 : i;
};
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="about.subtitle" />
        <meta name="keywords" :content="locale === 'mk' ? 'Babor Medical, за нас, дерматологија, спа, козметика, Македонија' : 'Babor Medical, about us, dermatology, spa, cosmetics, Macedonia'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="about.subtitle" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="about.subtitle" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/about" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/about?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/about?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/about" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <SiteLayout>
        <!-- ============ HERO ============ -->
        <PageHero
            :eyebrow="locale === 'mk' ? 'ЗА НАС' : 'ABOUT US'"
            :title="heroTitle.main"
            :accent="heroTitle.accent"
            :crumb="locale === 'mk' ? 'За нас' : 'About'"
        >
            <div class="ab-hero__sub bm-lead bm-muted" v-html="about.subtitle"></div>
            <a href="#ab-story" class="bm-link ab-hero__down">
                <span>{{ locale === 'mk' ? 'Нашата приказна' : 'Our Story' }}</span>
                <Icon name="arrow-down" :stroke="1.8" />
            </a>

            <template #aside>
                <div class="ab-hero__visual">
                    <div class="ab-hero__outline" aria-hidden="true"></div>
                    <div class="ab-hero__arch">
                        <picture>
                            <source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp">
                            <source srcset="/images/about.webp" type="image/webp">
                            <img
                                :src="about.image || '/images/about.webp'"
                                alt="Babor Medical Team"
                                class="ab-hero__img"
                                width="800"
                                height="534"
                                loading="eager"
                                fetchpriority="high"
                            >
                        </picture>
                    </div>
                    <div class="ab-hero__chip" aria-hidden="true">
                        <span class="ab-hero__chip-num">{{ stats[0].number }}</span>
                        <span class="ab-hero__chip-label">{{ stats[0].label }}</span>
                    </div>
                </div>
            </template>
        </PageHero>

        <!-- ============ RIBBONS ============ -->
        <div class="ab-ribbons" aria-hidden="true">
            <Marquee :items="ribbonValues" variant="wine" :tilt="-3" :duration="46" />
            <Marquee :items="ribbonStats" variant="outline" :tilt="2.2" :duration="54" reverse />
        </div>

        <!-- ============ STORY ============ -->
        <section id="ab-story" class="ab-story bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <div class="ab-story__grid">
                    <div class="ab-story__side">
                        <div class="ab-story__sticky">
                            <span class="bm-numeral ab-num" aria-hidden="true">01</span>
                            <h2 class="bm-h2 ab-story__title">
                                <MaskText :text="locale === 'mk' ? 'Нашата приказна' : 'Our Story'" />
                            </h2>
                            <div class="ab-story__arch" data-reveal="mask" style="--d: 0.15s">
                                <div class="ab-story__arch-in bm-duotone">
                                    <img src="/images/about.webp" alt="" width="800" height="534" loading="lazy" decoding="async">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ab-story__body">
                        <template v-if="story">
                            <p
                                v-for="(paragraph, index) in story.intro"
                                :key="`intro-${index}`"
                                class="ab-story__p"
                                :class="{ 'ab-story__p--lead': index === 0 }"
                                data-reveal
                                :style="{ '--d': `${Math.min(index, 3) * 0.06}s` }"
                                v-html="paragraph"
                            ></p>
                        </template>
                        <div v-else class="bm-prose ab-story__prose" data-reveal v-html="about.full_content"></div>

                        <figure class="ab-story__pano" data-reveal="mask">
                            <div>
                                <div class="ab-story__pano-in">
                                    <img src="/images/about-two.webp" alt="" width="800" height="170" loading="lazy" decoding="async">
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>

                <template v-if="story && story.statement">
                    <ScrollWords :text="story.statement" tag="p" class="ab-story__statement" />
                </template>

                <div v-if="story && story.closing.length" class="ab-story__signoff">
                    <div class="ab-story__sign-text" data-reveal>
                        <p
                            v-for="(paragraph, index) in story.closing"
                            :key="`closing-${index}`"
                            class="ab-story__sign-line"
                            :class="{ 'is-last': index === story.closing.length - 1 }"
                            v-html="paragraph"
                        ></p>
                    </div>
                    <div class="ab-story__seal" data-reveal="scale" style="--d: 0.2s">
                        <RotatingBadge :size="150" />
                    </div>
                </div>
            </div>
        </section>

        <!-- ============ NUMBERS + VALUES ============ -->
        <section class="ab-values bm-dark bm-section bm-grain">
            <div class="bm-columns-bg" aria-hidden="true"></div>
            <div class="bm-container ab-values__inner">
                <div class="ab-stats">
                    <div
                        v-for="(stat, index) in stats"
                        :key="index"
                        class="ab-stat"
                        data-reveal
                        :style="{ '--d': `${index * 0.1}s` }"
                    >
                        <span class="ab-stat__num"><Counter :value="stat.number" /></span>
                        <span class="ab-stat__label">{{ stat.label }}</span>
                    </div>
                </div>

                <div class="ab-values__head">
                    <span class="bm-numeral ab-num" aria-hidden="true">02</span>
                    <h2 class="bm-h2 ab-values__title">
                        <MaskText :text="locale === 'mk' ? 'Нашите вредности' : 'Our Values'" />
                    </h2>
                </div>

                <div class="ab-values__grid">
                    <article
                        v-for="(value, index) in values"
                        :key="index"
                        class="ab-value"
                        data-reveal
                        :style="{ '--d': `${index * 0.12}s` }"
                    >
                        <span class="ab-value__num" aria-hidden="true">0{{ index + 1 }}</span>
                        <span class="ab-value__icon" aria-hidden="true">
                            <svg v-if="value.icon === 'heart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                            <svg v-else-if="value.icon === 'shield'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>
                            <svg v-else-if="value.icon === 'star'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </span>
                        <h3 class="bm-h3 ab-value__title">{{ value.title }}</h3>
                        <p class="ab-value__desc">{{ value.desc }}</p>
                    </article>
                </div>

                <!-- CTA panel -->
                <div class="ab-cta bm-wine bm-grain" data-reveal="scale">
                    <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                    <div class="ab-cta__inner">
                        <div class="ab-cta__copy">
                            <h2 class="bm-h2 ab-cta__title">
                                <MaskText :text="splitAccent(locale === 'mk' ? 'Подготвени сте за трансформација?' : 'Ready for transformation?').main" />
                                <br />
                                <MaskText
                                    class="bm-accent"
                                    :text="splitAccent(locale === 'mk' ? 'Подготвени сте за трансформација?' : 'Ready for transformation?').accent"
                                    :start="3"
                                />
                            </h2>
                            <p class="bm-lead bm-muted ab-cta__text">{{ locale === 'mk' ? 'Закажете консултација и започнете го вашето патување кон убавина' : 'Book a consultation and start your journey to beauty' }}</p>
                        </div>
                        <div class="ab-cta__actions">
                            <a href="#contact" class="bm-btn">
                                <span>{{ locale === 'mk' ? 'Закажи консултација' : 'Book Consultation' }}</span>
                                <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                            </a>
                        </div>
                    </div>
                    <span class="ab-cta__star" aria-hidden="true"><Icon name="sparkle" :size="22" :stroke="1.3" /></span>
                </div>
            </div>
        </section>

        <!-- ============ FAQ ============ -->
        <section class="ab-faq bm-paper bm-sheet bm-section">
            <div class="bm-container ab-faq__grid">
                <div class="ab-faq__side">
                    <div class="ab-faq__sticky">
                        <span class="bm-numeral ab-num" aria-hidden="true">03</span>
                        <h2 class="bm-h2 ab-faq__title">
                            <MaskText :text="locale === 'mk' ? 'Најчесто поставувани прашања' : 'Frequently Asked Questions'" />
                        </h2>
                    </div>
                </div>

                <div class="bm-faq ab-faq__list" data-reveal>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 0 }">
                        <h3 class="ab-faq__h">
                            <button
                                type="button"
                                class="bm-faq__q"
                                :id="`${faqUid}-q0`"
                                :aria-expanded="openFaq === 0 ? 'true' : 'false'"
                                :aria-controls="`${faqUid}-a0`"
                                @click="toggleFaq(0)"
                            >
                                <span>{{ locale === 'mk' ? 'Што е Babor Medical?' : 'What is Babor Medical?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div class="bm-faq__a" :id="`${faqUid}-a0`" role="region" :aria-labelledby="`${faqUid}-q0`">
                            <div>
                                <p>{{ locale === 'mk' ? 'Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Специјализирани сме за ласерска епилација, козметологија, инјектибилни методи и третмани на тело со најсовремена технологија и стручен медицински тим.' : 'Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We specialize in laser hair removal, cosmetology, injectable methods and body treatments with state-of-the-art technology and expert medical team.' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 1 }">
                        <h3 class="ab-faq__h">
                            <button
                                type="button"
                                class="bm-faq__q"
                                :id="`${faqUid}-q1`"
                                :aria-expanded="openFaq === 1 ? 'true' : 'false'"
                                :aria-controls="`${faqUid}-a1`"
                                @click="toggleFaq(1)"
                            >
                                <span>{{ locale === 'mk' ? 'Кои технологии ги користите?' : 'What technologies do you use?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div class="bm-faq__a" :id="`${faqUid}-a1`" role="region" :aria-labelledby="`${faqUid}-q1`">
                            <div>
                                <p>{{ locale === 'mk' ? 'Користиме најсовремена опрема од Alma Lasers: Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Ultraformer за лифтинг, и премиум BABOR козметички протоколи.' : 'We use state-of-the-art equipment from Alma Lasers: Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Ultraformer for lifting, and premium BABOR cosmetic protocols.' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bm-faq__item" :class="{ 'is-open': openFaq === 2 }">
                        <h3 class="ab-faq__h">
                            <button
                                type="button"
                                class="bm-faq__q"
                                :id="`${faqUid}-q2`"
                                :aria-expanded="openFaq === 2 ? 'true' : 'false'"
                                :aria-controls="`${faqUid}-a2`"
                                @click="toggleFaq(2)"
                            >
                                <span>{{ locale === 'mk' ? 'Каде се наоѓа Babor Medical?' : 'Where is Babor Medical located?' }}</span>
                                <span class="bm-faq__icon" aria-hidden="true"></span>
                            </button>
                        </h3>
                        <div class="bm-faq__a" :id="`${faqUid}-a2`" role="region" :aria-labelledby="`${faqUid}-q2`">
                            <div>
                                <p>{{ locale === 'mk' ? 'Babor Medical се наоѓа во Скопје, Македонија. За точна адреса, работно време и закажување, контактирајте нè на +389 75 340 933 или посетете babormedical.com/contact.' : 'Babor Medical is located in Skopje, Macedonia. For exact address, working hours and appointments, contact us at +389 75 340 933 or visit babormedical.com/contact.' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- target for the "#contact" CTA: lands on the footer's contact block -->
        <div id="contact" class="ab-anchor" aria-hidden="true"></div>
    </SiteLayout>
</template>

<style scoped>
/* ---------- shared bits ---------- */
.ab-num {
    display: block;
    font-size: clamp(3.4rem, 5.4vw, 5.6rem);
    margin-bottom: 18px;
}

/* ---------- HERO ---------- */
.ab-hero__sub { max-width: 600px; }
.ab-hero__sub :deep(p) { margin: 0; }
.ab-hero__down {
    margin-top: 40px;
    color: var(--gold-300);
}
.ab-hero__down svg { transition: transform 0.5s var(--ease-out); }
.ab-hero__down:hover svg { transform: translateY(4px); }

.ab-hero__visual {
    position: relative;
    width: min(100%, 480px);
    margin-left: auto;
    padding: 0 0 28px 28px;
}
.ab-hero__outline {
    position: absolute;
    inset: 28px 28px 0 0;
    border: 1px solid rgba(217, 185, 149, 0.35);
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    pointer-events: none;
}
.ab-hero__arch {
    position: relative;
    overflow: hidden;
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    box-shadow: 0 60px 100px -50px rgba(0, 0, 0, 0.8);
    background: var(--wine-800);
}
.ab-hero__arch picture,
.ab-hero__arch img {
    display: block;
    width: 100%;
    height: 100%;
}
.ab-hero__arch img { object-fit: cover; object-position: 38% 50%; }
.ab-hero__arch::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(22, 10, 14, 0) 45%, rgba(22, 10, 14, 0.55) 100%),
        linear-gradient(160deg, rgba(110, 32, 57, 0.28), rgba(110, 32, 57, 0) 55%);
    pointer-events: none;
}
.ab-hero__chip {
    position: absolute;
    left: 0;
    bottom: 13%;
    display: grid;
    gap: 2px;
    padding: 16px 26px 16px 22px;
    border-radius: 22px;
    background: rgba(31, 12, 20, 0.72);
    border: 1px solid rgba(217, 185, 149, 0.28);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8);
}
.ab-hero__chip-num {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: 2.3rem;
    line-height: 1;
    color: var(--gold-300);
}
.ab-hero__chip-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}

/* ---------- RIBBONS ---------- */
.ab-ribbons {
    position: relative;
    z-index: 1;
    display: grid;
    background: var(--wine-950);
    padding: clamp(24px, 4vw, 56px) 0 clamp(96px, 10vw, 150px);
    overflow: hidden;
}
.ab-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- STORY ---------- */
.ab-story { scroll-margin-top: 40px; }
.ab-story__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.ab-story__sticky {
    position: sticky;
    top: calc(var(--header-h) + 32px);
}
.ab-story__title { max-width: 420px; }
.ab-story__arch {
    width: min(100%, 300px);
    margin-top: clamp(32px, 4vw, 48px);
}
.ab-story__arch-in {
    aspect-ratio: 3 / 4;
    border-radius: 999px 999px var(--radius-md) var(--radius-md);
    box-shadow: 0 40px 70px -40px rgba(82, 26, 47, 0.6);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.ab-story__arch-in img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 92% 60%;
}
.ab-story__body { max-width: 680px; }
.ab-story__p {
    font-size: 1.06rem;
    line-height: 1.9;
    color: var(--ink-soft);
}
.ab-story__p + .ab-story__p { margin-top: 1.4em; }
.ab-story__p--lead {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.28rem, 1.65vw, 1.58rem);
    line-height: 1.55;
    letter-spacing: -0.01em;
    color: var(--ink);
}
.ab-story__prose { color: var(--ink-soft); }

.ab-story__pano {
    margin: clamp(44px, 5vw, 64px) 0 0;
}
.ab-story__pano-in {
    position: relative;
    overflow: hidden;
    border-radius: 999px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    aspect-ratio: 800 / 170;
    box-shadow: 0 40px 70px -45px rgba(82, 26, 47, 0.55);
}
.ab-story__pano img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.85) contrast(1.02);
}
.ab-story__pano-in::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(42, 18, 25, 0.08);
    background: linear-gradient(90deg, rgba(110, 32, 57, 0.18), transparent 30%, transparent 70%, rgba(110, 32, 57, 0.18));
    pointer-events: none;
}

.ab-story__statement {
    position: relative;
    margin: clamp(80px, 11vw, 160px) 0 0;
    padding-top: clamp(48px, 5vw, 72px);
    border-top: 1px solid var(--line-light);
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(2rem, 4.6vw, 4.5rem);
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 1200px;
}
.ab-story__statement::before {
    content: '\201C';
    position: absolute;
    top: clamp(-34px, -2.6vw, -22px);
    left: 0;
    padding-right: 18px;
    background: var(--cream-100);
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(4rem, 7vw, 6.5rem);
    line-height: 1;
    height: 0.62em;
    overflow: hidden;
    color: var(--wine-600);
}

.ab-story__signoff {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(28px, 4vw, 56px);
    margin-top: clamp(56px, 7vw, 96px);
}
.ab-story__sign-text { text-align: right; }
.ab-story__sign-line {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.25rem, 1.8vw, 1.6rem);
    line-height: 1.4;
    color: var(--ink-soft);
}
.ab-story__sign-line.is-last {
    margin-top: 10px;
    font-style: italic;
    font-size: clamp(1.5rem, 2.4vw, 2.2rem);
    color: var(--wine-600);
}
.ab-story__seal { flex: none; }

/* ---------- NUMBERS + VALUES ---------- */
.ab-values { overflow: hidden; }
.ab-values__inner { position: relative; z-index: 1; }
.ab-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
}
.ab-stat {
    display: grid;
    align-content: start;
    gap: 18px;
    padding: clamp(32px, 4vw, 52px) clamp(16px, 2.4vw, 36px);
    border-left: 1px solid var(--line-dark);
    transition: background 0.6s var(--ease-out);
}
.ab-stat:first-child { border-left: 0; }
.ab-stat:hover { background: rgba(246, 238, 230, 0.03); }
.ab-stat__num {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(3rem, 6.2vw, 6.4rem);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--gold-300);
}
.ab-stat__label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}
.ab-stat__label::before {
    content: '';
    width: 22px;
    height: 1px;
    background: var(--gold-400);
    flex: none;
}

.ab-values__head {
    display: grid;
    justify-items: center;
    text-align: center;
    margin-top: clamp(96px, 12vw, 176px);
}
.ab-values__title { max-width: 900px; }

.ab-values__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(18px, 2.2vw, 32px);
    margin-top: clamp(56px, 7vw, 96px);
}
.ab-value {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: clamp(440px, 38vw, 540px);
    padding: 0 clamp(24px, 3vw, 44px) clamp(36px, 4vw, 56px);
    text-align: center;
    border: 1px solid var(--line-dark);
    border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
    background: linear-gradient(180deg, #26111b 0%, #1a0b11 70%);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    transition: border-color 0.6s var(--ease-out), transform 0.8s var(--ease-out);
}
.ab-value::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        radial-gradient(90% 60% at 50% 0%, rgba(217, 185, 149, 0.22), transparent 70%),
        linear-gradient(180deg, var(--wine-600), var(--wine-800));
    transform: translateY(101%);
    transition: transform 0.9s var(--ease-out);
}
.ab-value:hover { border-color: rgba(217, 185, 149, 0.45); transform: translateY(-6px); }
.ab-value:hover::before { transform: translateY(0); }
.ab-value__num {
    position: absolute;
    top: clamp(64px, 6vw, 88px);
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(5rem, 8vw, 8.4rem);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(217, 185, 149, 0.5);
    transition: -webkit-text-stroke-color 0.6s;
}
.ab-value:hover .ab-value__num { -webkit-text-stroke-color: rgba(246, 238, 230, 0.75); }
.ab-value__icon {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    padding: 16px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.4);
    color: var(--gold-300);
    transition: background 0.6s var(--ease-out), color 0.6s var(--ease-out), border-color 0.6s;
}
.ab-value__icon svg { width: 100%; height: 100%; }
.ab-value:hover .ab-value__icon { background: var(--beige-200); border-color: var(--beige-200); color: var(--wine-700); }
.ab-value__title { margin-top: 26px; }
.ab-value__desc {
    margin-top: 12px;
    min-height: 3.4em;
    max-width: 280px;
    font-size: 0.98rem;
    line-height: 1.7;
    color: var(--on-dark-muted);
    transition: color 0.6s;
}
.ab-value:hover .ab-value__desc { color: rgba(246, 238, 230, 0.85); }

/* ---------- FAQ ---------- */
.ab-faq__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(40px, 7vw, 120px);
    align-items: start;
}
.ab-faq__sticky {
    position: sticky;
    top: calc(var(--header-h) + 32px);
}
.ab-faq__title { max-width: 480px; }
.ab-faq__h { margin: 0; font-size: inherit; }
.ab-faq__list .bm-faq__q > span:first-child { flex: 1; }
.ab-faq__list .bm-faq__q:hover { color: var(--wine-600); }
.ab-faq__list .bm-faq__a p { color: var(--ink-soft); font-size: 1.02rem; line-height: 1.8; }

/* ---------- CTA panel ---------- */
.ab-cta {
    position: relative;
    overflow: hidden;
    margin-top: clamp(80px, 10vw, 140px);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(217, 185, 149, 0.18);
    box-shadow: 0 60px 120px -60px rgba(0, 0, 0, 0.9);
}
.ab-cta__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: clamp(32px, 5vw, 80px);
    align-items: end;
    padding: clamp(40px, 6vw, 88px) clamp(28px, 6vw, 88px);
}
.ab-cta__title { max-width: 760px; }
.ab-cta__text { margin-top: 24px; max-width: 520px; }
.ab-cta__star {
    position: absolute;
    z-index: 1;
    top: clamp(20px, 3vw, 36px);
    right: clamp(20px, 3vw, 36px);
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.4);
    color: var(--gold-300);
    animation: ab-spin 18s linear infinite;
}
@keyframes ab-spin { to { transform: rotate(360deg); } }

.ab-anchor { height: 0; scroll-margin-top: var(--header-h); }

/* ---------- responsive ---------- */
@media (max-width: 991.98px) {
    .ab-hero__visual { margin: 12px auto 0; width: min(100%, 420px); }
    .ab-story__grid,
    .ab-faq__grid { grid-template-columns: 1fr; }
    .ab-story__sticky,
    .ab-faq__sticky { position: static; }
    .ab-story__body { max-width: none; }
    .ab-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ab-stat:nth-child(3) { border-left: 0; }
    .ab-stat:nth-child(n + 3) { border-top: 1px solid var(--line-dark); }
    .ab-values__grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; }
    .ab-cta__inner { grid-template-columns: 1fr; align-items: start; }
    .ab-story__arch { display: none; }
}

@media (max-width: 575.98px) {
    .ab-num { font-size: 3rem; margin-bottom: 10px; }
    .ab-hero__visual { padding: 0 0 18px 18px; }
    .ab-hero__outline { inset: 18px 18px 0 0; }
    .ab-hero__chip { padding: 12px 18px 12px 16px; border-radius: 18px; }
    .ab-hero__chip-num { font-size: 1.8rem; }
    .ab-story__p--lead { font-size: 1.2rem; }
    .ab-story__pano-in { aspect-ratio: 3 / 1; }
    .ab-story__signoff { flex-direction: column-reverse; align-items: flex-end; gap: 28px; }
    .ab-stat { padding: 28px 14px 26px; gap: 12px; }
    .ab-stat:nth-child(odd) { padding-left: 0; }
    .ab-stat__label { font-size: 0.66rem; letter-spacing: 0.14em; gap: 8px; }
    .ab-stat__label::before { width: 14px; }
    .ab-value { min-height: 400px; }
    .ab-cta__inner { padding: 72px 24px 32px; }
    .ab-cta__actions .bm-btn { width: 100%; justify-content: space-between; }
}

@media (prefers-reduced-motion: reduce) {
    .ab-cta__star { animation: none; }
}
</style>
