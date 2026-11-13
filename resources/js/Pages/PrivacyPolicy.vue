<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, nextTick, onMounted, onUnmounted, ref, useId } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import Icon from '@/Components/Site/Icon.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Политика за приватност - Babor Medical' 
        : 'Privacy Policy - Babor Medical';
});

const companyInfo = {
    name: 'Торзо Велнес ДООЕЛ',
    address: 'Ул. Илинден бр.74',
    embs: '6234992',
    edb: '4030007637200',
    phone: '+389 75 340 933',
    email: 'torzo.wellness@yahoo.com',
};

const contentMk = {
    title: 'Политика за приватност',
    subtitle: 'Вашата приватност е важна за нас',
    lastUpdated: 'Последно ажурирано: Февруари 2026',
    sections: [
        {
            title: '1. Основни информации',
            content: `Оваа веб-страница (babormedical.com) е во сопственост и управување на:

Име на фирма: ${companyInfo.name}
Адреса: ${companyInfo.address}
ЕМБС: ${companyInfo.embs}
ЕДБ: ${companyInfo.edb}
Телефон: ${companyInfo.phone}
Е-пошта: ${companyInfo.email}

Фирмата е контролор на лични податоци согласно Законот за заштита на лични податоци.`
        },
        {
            title: '2. Кои податоци ги собираме',
            content: `Преку оваа веб-страница можеме да ги собираме следните лични податоци:`,
            list: [
                'Име и презиме',
                'Телефонски број',
                'Е-пошта',
                'Пораки испратени преку контакт форма',
                'Податоци за закажување термин',
                'IP адреса',
                'Податоци за користење на веб-страницата'
            ]
        },
        {
            title: '3. За што ги користиме податоците',
            content: `Вашите податоци се користат исклучиво за:`,
            list: [
                'Контакт со корисници',
                'Закажување и потврда на термини',
                'Одговор на прашања',
                'Подобрување на услугите',
                'Внатрешна статистика',
                'Законски обврски'
            ]
        },
        {
            title: '4. Споделување со трети страни',
            content: `Податоците може да се споделат само со:`,
            list: [
                'IT провајдери',
                'Хостинг компании',
                'Платформи за аналитика (пример: Google Analytics)',
                'Државни органи кога тоа е законски побарано'
            ],
            footer: 'Податоците не се продаваат и не се злоупотребуваат.'
        },
        {
            title: '5. Заштита на податоците',
            content: `Фирмата применува соодветни технички и организациски мерки за заштита на податоците од:`,
            list: [
                'Неовластен пристап',
                'Губење',
                'Злоупотреба',
                'Уништување'
            ]
        },
        {
            title: '6. Колку долго ги чуваме податоците',
            content: `Податоците се чуваат онолку долго колку што е потребно за целите за кои се собрани, или согласно закон.`
        },
        {
            title: '7. Права на корисниците',
            content: `Корисниците имаат право да:`,
            list: [
                'Побараат увид',
                'Корекција',
                'Бришење',
                'Ограничување на обработка',
                'Приговор на обработка'
            ],
            footer: `Барањата се доставуваат на: ${companyInfo.email}`
        },
        {
            title: '8. Промени на политиката',
            content: `Фирмата го задржува правото на измена на оваа политика во секое време.`
        },
        {
            title: '9. Контакт',
            content: `За прашања поврзани со приватноста:`,
            contact: true
        }
    ]
};

const contentEn = {
    title: 'Privacy Policy',
    subtitle: 'Your privacy is important to us',
    lastUpdated: 'Last updated: February 2026',
    sections: [
        {
            title: '1. General Information',
            content: `This website (babormedical.com) is owned and operated by:

Company Name: ${companyInfo.name}
Address: ${companyInfo.address}
Registration No.: ${companyInfo.embs}
Tax ID: ${companyInfo.edb}
Phone: ${companyInfo.phone}
Email: ${companyInfo.email}

The company acts as the Data Controller.`
        },
        {
            title: '2. Data We Collect',
            content: `We may collect the following personal data:`,
            list: [
                'Name and surname',
                'Phone number',
                'Email address',
                'Messages submitted via contact forms',
                'Appointment booking details',
                'IP address',
                'Website usage data'
            ]
        },
        {
            title: '3. Purpose of Data Processing',
            content: `We process personal data for:`,
            list: [
                'User communication',
                'Appointment scheduling',
                'Customer support',
                'Service improvement',
                'Internal analytics',
                'Legal compliance'
            ]
        },
        {
            title: '4. Data Sharing',
            content: `Data may be shared only with:`,
            list: [
                'IT providers',
                'Hosting companies',
                'Analytics platforms (e.g., Google Analytics)',
                'Public authorities when legally required'
            ],
            footer: 'We do not sell personal data.'
        },
        {
            title: '5. Data Security',
            content: `We apply appropriate technical and organizational measures to protect personal data from:`,
            list: [
                'Unauthorized access',
                'Loss',
                'Misuse',
                'Destruction'
            ]
        },
        {
            title: '6. Data Retention',
            content: `Data is retained only for as long as necessary to fulfill its purpose or legal obligations.`
        },
        {
            title: '7. User Rights',
            content: `Users have the right to:`,
            list: [
                'Access their data',
                'Rectify incorrect data',
                'Request deletion',
                'Restrict processing',
                'Object to processing'
            ],
            footer: `Requests can be sent to: ${companyInfo.email}`
        },
        {
            title: '8. Policy Updates',
            content: `We reserve the right to update this policy at any time.`
        },
        {
            title: '9. Contact',
            content: `For privacy-related inquiries:`,
            contact: true
        }
    ]
};

const content = computed(() => locale.value === 'mk' ? contentMk : contentEn);

// ---------- UI-only helpers (presentation, no content changes) ----------

// Hero: the last word of the title renders as the italic accent line.
const heroTitle = computed(() => {
    const words = String(content.value.title || '').trim().split(/\s+/).filter(Boolean);
    if (words.length < 2) return { main: words.join(' '), accent: '' };
    return { main: words.slice(0, -1).join(' '), accent: words[words.length - 1] };
});

// "1. General Information" -> number + name, so the number can sit in the margin.
const titleParts = (title) => {
    const m = String(title || '').match(/^(\d+\.)\s+(.*)$/);
    return m ? { num: m[1], text: m[2] } : { num: '', text: title };
};
const pad = (n) => String(n).padStart(2, '0');
const anchorId = (index) => `policy-${index + 1}`;
const tocLabel = computed(() => (locale.value === 'mk' ? 'Содржина' : 'Contents'));
const tocId = useId();

// Table of contents: active section + reading progress (client only).
const tocOpen = ref(false);
const activeSection = ref(0);
const tocEl = ref(null);
const docEl = ref(null);
let raf = 0;

const updateActive = () => {
    raf = 0;
    const line = window.innerHeight * 0.35;
    let idx = 0;
    content.value.sections.forEach((_, i) => {
        const el = document.getElementById(anchorId(i));
        if (el && el.getBoundingClientRect().top <= line) idx = i;
    });
    activeSection.value = idx;
    if (docEl.value && tocEl.value) {
        const r = docEl.value.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (line - r.top) / Math.max(1, r.height - line * 0.5)));
        tocEl.value.style.setProperty('--pp-p', p.toFixed(4));
    }
};
const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(updateActive);
};

const goTo = async (event, index) => {
    if (!document.getElementById(anchorId(index))) return;
    event.preventDefault();
    tocOpen.value = false;
    await nextTick(); // the mobile list collapses first, then we measure
    const el = document.getElementById(anchorId(index));
    const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${anchorId(index)}`);
};

onMounted(() => {
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="content.subtitle" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="content.subtitle" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://babormedical.com/privacy-policy" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/privacy-policy?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/privacy-policy?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/privacy-policy" />
    </Head>

    <SiteLayout>
        <PageHero
            :eyebrow="locale === 'mk' ? 'ПРАВНИ ИНФОРМАЦИИ' : 'LEGAL'"
            :title="heroTitle.main"
            :accent="heroTitle.accent"
            :subtitle="content.subtitle"
            :crumb="content.title"
            align="center"
            compact
        >
            <p class="pp-updated">
                <Icon name="clock" :size="16" :stroke="1.6" />
                <span>{{ content.lastUpdated }}</span>
            </p>
        </PageHero>

        <section class="pp-doc bm-cream bm-sheet">
            <div class="bm-container pp-doc__grid">
                <!-- Table of contents -->
                <aside ref="tocEl" class="pp-toc">
                    <div class="pp-toc__inner">
                        <button
                            type="button"
                            class="pp-toc__toggle"
                            :aria-expanded="tocOpen ? 'true' : 'false'"
                            :aria-controls="tocId"
                            @click="tocOpen = !tocOpen"
                        >
                            <span class="bm-eyebrow">{{ tocLabel }}</span>
                            <span class="pp-toc__chev" aria-hidden="true"><Icon name="chevron-down" :size="18" :stroke="1.8" /></span>
                        </button>
                        <nav :id="tocId" class="pp-toc__nav" :class="{ 'is-open': tocOpen }" :aria-label="tocLabel">
                            <ol class="pp-toc__list">
                                <li v-for="(section, index) in content.sections" :key="index">
                                    <a
                                        :href="`#${anchorId(index)}`"
                                        class="pp-toc__link"
                                        :class="{ 'is-active': activeSection === index }"
                                        :aria-current="activeSection === index ? 'location' : null"
                                        @click="goTo($event, index)"
                                    >
                                        <span class="pp-toc__n">{{ pad(index + 1) }}</span>
                                        <span class="pp-toc__t">{{ titleParts(section.title).text }}</span>
                                    </a>
                                </li>
                            </ol>
                            <span class="pp-toc__track" aria-hidden="true"><span></span></span>
                        </nav>
                    </div>
                </aside>

                <!-- Document -->
                <div ref="docEl" class="pp-doc__body">
                    <article
                        v-for="(section, index) in content.sections"
                        :key="index"
                        :id="anchorId(index)"
                        class="pp-sec"
                        data-reveal
                    >
                        <h2 class="pp-sec__title">
                            <span v-if="titleParts(section.title).num" class="pp-sec__num">{{ titleParts(section.title).num }}</span>{{ titleParts(section.title).num ? ' ' : '' }}<span class="pp-sec__name">{{ titleParts(section.title).text }}</span>
                        </h2>
                        <div class="pp-sec__content">
                            <p class="pp-sec__text" v-html="section.content.replace(/\n/g, '<br>')"></p>
                            <ul v-if="section.list" class="bm-list pp-sec__list">
                                <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
                            </ul>
                            <p v-if="section.footer" class="pp-sec__note">{{ section.footer }}</p>
                            <div v-if="section.contact" class="pp-contact">
                                <a :href="`mailto:${companyInfo.email}`" class="pp-contact__link">
                                    <span class="pp-contact__icon"><Icon name="mail" :size="18" /></span>
                                    <span class="pp-contact__value">{{ companyInfo.email }}</span>
                                    <span class="pp-contact__arrow"><Icon name="arrow-up-right" :size="18" /></span>
                                </a>
                                <a :href="`tel:${companyInfo.phone}`" class="pp-contact__link">
                                    <span class="pp-contact__icon"><Icon name="phone" :size="18" /></span>
                                    <span class="pp-contact__value">{{ companyInfo.phone }}</span>
                                    <span class="pp-contact__arrow"><Icon name="arrow-up-right" :size="18" /></span>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- Closing seal, like the stamp on a signed document -->
                    <div class="pp-seal" data-reveal="scale">
                        <RotatingBadge :size="132" />
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- hero extra ---------- */
.pp-updated {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
    background: rgba(246, 238, 230, 0.04);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--on-dark-muted);
}
.pp-updated svg { color: var(--gold-300); flex: none; }

/* ---------- document sheet ---------- */
.pp-doc {
    padding-block: clamp(72px, 9vw, 136px) clamp(96px, 11vw, 168px);
}
.pp-doc__grid {
    display: grid;
    grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
    gap: clamp(48px, 8vw, 136px);
}

/* ---------- TOC ---------- */
.pp-toc__inner {
    position: sticky;
    top: calc(var(--header-h) + 36px);
}
.pp-toc__toggle {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0;
    background: none;
    border: 0;
    color: inherit;
    text-align: left;
    pointer-events: none;
}
.pp-toc__chev { display: none; }
.pp-toc__nav {
    position: relative;
    margin-top: 26px;
    padding-left: 22px;
}
.pp-toc__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 2px;
}
.pp-toc__link {
    position: relative;
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 8px;
    padding: 8px 0;
    font-size: 0.92rem;
    line-height: 1.45;
    color: var(--ink-soft);
    transition: color 0.4s var(--ease-out), transform 0.5s var(--ease-out);
}
.pp-toc__link::before {
    content: '';
    position: absolute;
    left: -25px;
    top: calc(8px + 0.725em - 3.5px);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--wine-600);
    transform: scale(0);
    transition: transform 0.4s var(--ease-out);
}
.pp-toc__link:hover { color: var(--ink); transform: translateX(3px); }
.pp-toc__link.is-active { color: var(--wine-600); }
.pp-toc__link.is-active::before { transform: scale(1); }
.pp-toc__n {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 0.95rem;
    color: var(--wine-500);
    opacity: 0.7;
}
.pp-toc__link.is-active .pp-toc__n { opacity: 1; }
.pp-toc__t { font-weight: 600; }
.pp-toc__track {
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: var(--line-light);
}
.pp-toc__track span {
    position: absolute;
    inset: 0;
    background: var(--wine-600);
    transform-origin: top;
    transform: scaleY(var(--pp-p, 0));
}

/* ---------- sections ---------- */
.pp-doc__body {
    max-width: 820px;
    border-top: 1px solid var(--line-light);
}
.pp-sec {
    position: relative;
    padding: clamp(40px, 5vw, 64px) 0 clamp(40px, 5vw, 64px) clamp(84px, 8vw, 120px);
    border-bottom: 1px solid var(--line-light);
    scroll-margin-top: calc(var(--header-h) + 20px);
}
.pp-sec__title {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.6rem, 2.4vw, 2.25rem);
    line-height: 1.15;
    letter-spacing: -0.015em;
    color: var(--ink);
}
.pp-sec__num {
    position: absolute;
    left: 0;
    top: clamp(28px, 3.6vw, 46px);
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(3.2rem, 5vw, 4.6rem);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(110, 32, 57, 0.5);
    transition: color 0.6s var(--ease-out), -webkit-text-stroke-color 0.6s;
}
.pp-sec:hover .pp-sec__num { color: rgba(110, 32, 57, 0.08); -webkit-text-stroke-color: var(--wine-600); }
.pp-sec__content {
    margin-top: 22px;
    max-width: 660px;
    font-size: 1.04rem;
    line-height: 1.85;
    color: var(--ink-soft);
}
.pp-sec__text { color: var(--ink-soft); }
.pp-sec__list {
    margin-top: 22px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 36px;
    color: var(--ink);
}
.pp-sec__note {
    margin-top: 28px;
    padding: 18px 24px;
    border-left: 2px solid var(--wine-600);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    background: rgba(110, 32, 57, 0.05);
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.55;
    color: var(--wine-700);
    overflow-wrap: anywhere;
}

/* ---------- contact rows ---------- */
.pp-contact {
    display: grid;
    margin-top: 26px;
    border-top: 1px solid var(--line-light);
}
.pp-contact__link {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 18px;
    padding: 18px 12px;
    border-bottom: 1px solid var(--line-light);
    color: var(--ink);
    overflow: hidden;
    transition: color 0.5s var(--ease-out);
}
.pp-contact__link::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--wine-600);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.6s var(--ease-out);
}
.pp-contact__link:hover { color: var(--cream-50); }
.pp-contact__link:hover::before { transform: scaleY(1); }
.pp-contact__icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(110, 32, 57, 0.3);
    color: var(--wine-600);
    transition: border-color 0.5s, color 0.5s, background 0.5s;
}
.pp-contact__link:hover .pp-contact__icon { border-color: transparent; background: var(--cream-50); color: var(--wine-600); }
.pp-contact__value {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.6vw, 1.4rem);
    line-height: 1.3;
    overflow-wrap: anywhere;
}
.pp-contact__arrow { display: grid; transition: transform 0.5s var(--ease-out); }
.pp-contact__link:hover .pp-contact__arrow { transform: translate(3px, -3px); }

.pp-seal {
    display: flex;
    justify-content: flex-end;
    margin-top: clamp(40px, 5vw, 64px);
}

/* ---------- responsive ---------- */
@media (max-width: 991.98px) {
    .pp-doc__grid { grid-template-columns: 1fr; gap: 40px; }
    .pp-toc__inner {
        position: static;
        padding: 18px 22px;
        border: 1px solid var(--line-light);
        border-radius: var(--radius-md);
        background: #fffaf5;
    }
    .pp-toc__toggle { pointer-events: auto; cursor: pointer; min-height: 32px; }
    .pp-toc__chev { display: grid; transition: transform 0.5s var(--ease-out); color: var(--wine-600); }
    .pp-toc__toggle[aria-expanded='true'] .pp-toc__chev { transform: rotate(180deg); }
    .pp-toc__nav { display: none; margin-top: 16px; }
    .pp-toc__nav.is-open { display: block; }
    .pp-doc__body { max-width: none; }
}

@media (max-width: 575.98px) {
    .pp-sec { padding: 40px 0 44px; }
    .pp-sec__num {
        position: static;
        display: block;
        margin-bottom: 10px;
        font-size: 3rem;
    }
    .pp-sec__list { grid-template-columns: 1fr; }
    .pp-sec__content { font-size: 1rem; }
    .pp-contact__link { gap: 14px; padding: 16px 6px; }
}
</style>
