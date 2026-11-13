<script setup>
import { Head, usePage, Link } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    equipment: {
        type: Object,
        required: true,
    },
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    if (props.equipment.slug === 'alma-soprano-titanium') {
        return locale.value === 'mk'
            ? 'Alma Soprano Titanium – Ласерска Епилација Скопје | Babor Medical'
            : 'Alma Soprano Titanium – Laser Hair Removal Skopje | Babor Medical';
    }
    if (props.equipment.slug === 'vonewmer-rf') {
        return locale.value === 'mk'
            ? 'Vonewmer RF Скопје | Затегнување на кожа без игли | Babor Medical'
            : 'Vonewmer RF Skopje | Skin Tightening Without Needles | Babor Medical';
    }
    return `${props.equipment.title} - Babor Medical`;
});

const seoDescription = computed(() => {
    if (props.equipment.slug === 'alma-soprano-titanium') {
        return locale.value === 'mk'
            ? 'Alma Soprano Titanium ласер за безболна ласерска епилација во Скопје. Три бранови должини, сите типови кожа и влакна. Златен стандард во ласерско отстранување на влакна – Babor Medical.'
            : 'Alma Soprano Titanium laser for painless laser hair removal in Skopje. Three wavelengths, all skin and hair types. Gold standard in laser hair removal – Babor Medical.';
    }
    if (props.equipment.slug === 'vonewmer-rf') {
        return locale.value === 'mk'
            ? 'Vonewmer RF – наградувана радиофреквентна технологија за затегнување на кожа без игли во Скопје. Добитник на ELLE Beauty Awards 2025 и K-Brand Awards 2026. Неинвазивен лифтинг и биостимулација – Babor Medical.'
            : 'Vonewmer RF – award-winning radiofrequency technology for skin tightening without needles in Skopje. Winner of ELLE Beauty Awards 2025 and K-Brand Awards 2026. Non-invasive lifting and biostimulation – Babor Medical.';
    }
    return props.equipment.description;
});

const seoKeywords = computed(() => {
    if (props.equipment.slug === 'alma-soprano-titanium') {
        return locale.value === 'mk'
            ? 'alma soprano titanium, ласерска епилација, ласерска епилација скопје, безболна ласерска епилација, ласер за епилација, alma laser, soprano titanium, отстранување влакна, babor medical'
            : 'alma soprano titanium, laser hair removal, laser hair removal skopje, painless laser hair removal, laser epilation, alma laser, soprano titanium, hair removal, babor medical';
    }
    if (props.equipment.slug === 'vonewmer-rf') {
        return locale.value === 'mk'
            ? 'vonewmer rf, vonewmer rf скопје, затегнување кожа без игли, rf лифтинг скопје, радиофреквенција лице, skin tightening скопје, anti-aging третман скопје, неинвазивен лифтинг, babor medical'
            : 'vonewmer rf, vonewmer rf skopje, skin tightening without needles, rf lifting skopje, radiofrequency face, skin tightening skopje, anti-aging treatment skopje, non-invasive lifting, babor medical';
    }
    return `${props.equipment.title}, laser, ласер, Babor Medical, ${props.equipment.category}`;
});

const jsonLd = computed(() => {
    const graph = [
        {
            '@type': 'MedicalWebPage',
            'name': seoTitle.value,
            'description': seoDescription.value,
            'url': `https://babormedical.com/lasers/${props.equipment.slug}`,
            'publisher': {
                '@type': 'MedicalBusiness',
                '@id': 'https://babormedical.com/#organization',
                'name': 'Babor Medical',
                'image': 'https://babormedical.com/logo.webp',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                }
            }
        }
    ];

    if (props.equipment.slug === 'alma-soprano-titanium') {
        graph[0]['about'] = {
            '@type': 'MedicalProcedure',
            'name': locale.value === 'mk' ? 'Ласерска епилација со Alma Soprano Titanium' : 'Laser Hair Removal with Alma Soprano Titanium',
            'procedureType': 'https://schema.org/NoninvasiveProcedure',
            'description': seoDescription.value,
            'howPerformed': locale.value === 'mk'
                ? 'Тројна бранова должина (755nm, 808nm, 1064nm) за третман на сите типови кожа и влакна'
                : 'Triple wavelength (755nm, 808nm, 1064nm) for treatment of all skin and hair types',
            'bodyLocation': locale.value === 'mk' ? 'Лице и тело' : 'Face and body'
        };
        graph[0]['mainEntity'] = {
            '@type': 'MedicalDevice',
            'name': 'Alma Soprano Titanium',
            'description': seoDescription.value,
            'sameAs': 'https://www.almalasers.com/alma-soprano-titanium/'
        };
        graph.push({
            '@type': 'FAQPage',
            'mainEntity': [
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
                    'name': locale.value === 'mk' ? 'Дали Alma Soprano Titanium е безболен?' : 'Is Alma Soprano Titanium painless?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Да, Alma Soprano Titanium користи ICE Plus технологија за ладење која ја заштитува кожата и обезбедува практично безболен третман. Пациентите чувствуваат само благо топло чувство за време на процедурата.' : 'Yes, Alma Soprano Titanium uses ICE Plus cooling technology that protects the skin and provides a virtually painless treatment. Patients only feel a mild warming sensation during the procedure.'
                    }
                },
                {
                    '@type': 'Question',
                    'name': locale.value === 'mk' ? 'За кои делови од телото е ефективен Soprano Titanium?' : 'For which body areas is Soprano Titanium effective?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Soprano Titanium е ефективен за сите делови од телото: лице, пазуви, раце, нозе, бикини зона, грб, стомак и цело тело. Тројната бранова должина овозможува третман на сите типови влакна и кожа.' : 'Soprano Titanium is effective for all body areas: face, underarms, arms, legs, bikini area, back, abdomen and full body. The triple wavelength enables treatment of all hair and skin types.'
                    }
                }
            ]
        });
    }

    if (props.equipment.slug === 'vonewmer-rf') {
        graph[0]['about'] = {
            '@type': 'MedicalProcedure',
            'name': locale.value === 'mk' ? 'RF затегнување на кожа со Vonewmer RF' : 'RF Skin Tightening with Vonewmer RF',
            'procedureType': 'https://schema.org/NoninvasiveProcedure',
            'description': seoDescription.value,
            'howPerformed': locale.value === 'mk'
                ? 'Контролирана радиофреквентна енергија за дермална биостимулација и неоколагенеза'
                : 'Controlled radiofrequency energy for dermal biostimulation and neocollagenesis',
            'bodyLocation': locale.value === 'mk' ? 'Лице и врат' : 'Face and neck'
        };
        graph[0]['mainEntity'] = {
            '@type': 'MedicalDevice',
            'name': 'Vonewmer RF',
            'description': locale.value === 'mk'
                ? 'Наградуван радиофреквентен систем за неинвазивно затегнување на кожа'
                : 'Award-winning radiofrequency system for non-invasive skin tightening'
        };
        graph.push({
            '@type': 'FAQPage',
            'mainEntity': [
                {
                    '@type': 'Question',
                    'name': locale.value === 'mk' ? 'Што е Vonewmer RF?' : 'What is Vonewmer RF?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Vonewmer RF е наградувана радиофреквентна технологија за неинвазивно затегнување на кожа и биостимулација. Добитник на ELLE International Beauty Awards 2025 и K-Brand Awards 2026, користи контролирана RF енергија за стимулација на колаген и еластин без игли и без downtime.' : 'Vonewmer RF is an award-winning radiofrequency technology for non-invasive skin tightening and biostimulation. Winner of ELLE International Beauty Awards 2025 and K-Brand Awards 2026, it uses controlled RF energy to stimulate collagen and elastin without needles and without downtime.'
                    }
                },
                {
                    '@type': 'Question',
                    'name': locale.value === 'mk' ? 'Дали Vonewmer RF третманот е болен?' : 'Is the Vonewmer RF treatment painful?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Не, Vonewmer RF третманот е комфорен и безболен. Пациентите чувствуваат само пријатна топлина за време на процедурата. Не е потребна анестезија и нема период на закрепнување.' : 'No, the Vonewmer RF treatment is comfortable and painless. Patients only feel pleasant warmth during the procedure. No anesthesia is needed and there is no recovery period.'
                    }
                },
                {
                    '@type': 'Question',
                    'name': locale.value === 'mk' ? 'Колку третмани се потребни за видливи резултати?' : 'How many treatments are needed for visible results?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Обично се препорачуваат 3-4 третмани на интервал од 2-4 недели. Резултатите се подобруваат постепено благодарение на колагенската биостимулација, со максимален ефект по неколку месеци.' : 'Usually 3-4 treatments are recommended at 2-4 week intervals. Results improve gradually thanks to collagen biostimulation, with maximum effect after several months.'
                    }
                },
                {
                    '@type': 'Question',
                    'name': locale.value === 'mk' ? 'За кого е наменет Vonewmer RF?' : 'Who is Vonewmer RF suitable for?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': locale.value === 'mk' ? 'Vonewmer RF е идеален за пациенти над 30 години со почетна до умерена опуштеност на кожата, фини линии, нарушена текстура и намален тонус. Особено е погоден за пациенти кои сакаат природен anti-aging пристап без игли и без агресивни процедури.' : 'Vonewmer RF is ideal for patients over 30 with mild to moderate skin laxity, fine lines, impaired texture and reduced tone. It is especially suitable for patients who want a natural anti-aging approach without needles and without aggressive procedures.'
                    }
                }
            ]
        });
    }

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
});

const content = computed(() => ({
    backToLasers: locale.value === 'mk' ? '← Назад кон ласери' : '← Back to Lasers',
    learnMore: locale.value === 'mk' ? 'Официјална страница' : 'Official Website',
    contactUs: locale.value === 'mk' ? 'Контактирајте нè' : 'Contact Us',
    contactDesc: locale.value === 'mk' 
        ? 'Заинтересирани сте за овој третман? Контактирајте нè за консултација.'
        : 'Interested in this treatment? Contact us for a consultation.',
}));

// ---- UI-only helpers (presentation) ----
const pad = (n) => String(n).padStart(2, '0');
const heroTitle = computed(() => {
    const words = String(props.equipment.title || '').trim().split(/\s+/);
    return words.length > 1
        ? { main: words.slice(0, -1).join(' '), accent: words[words.length - 1] }
        : { main: words[0] || '', accent: '' };
});

// Section index for the long description: anchors are added to the
// top-level headings (h2, or h4 when the CMS text has no h2s) so a sticky
// "contents" column can link to them. The text itself is untouched.
const decode = (s) => s
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();
const proseTag = computed(() => (/<h2[\s>]/i.test(props.equipment.detailed_description || '') ? 'h2' : 'h4'));
const anchorBase = computed(() => `sec-${props.equipment.slug || props.equipment.id || 'laser'}`);
const proseSections = computed(() => {
    const html = props.equipment.detailed_description || '';
    const re = new RegExp(`<${proseTag.value}(?:\\s[^>]*)?>([\\s\\S]*?)</${proseTag.value}>`, 'gi');
    const list = [];
    let m;
    while ((m = re.exec(html))) {
        list.push({ id: `${anchorBase.value}-${list.length + 1}`, title: decode(m[1]) });
    }
    return list;
});
const hasToc = computed(() => proseSections.value.length >= 3);
const proseHtml = computed(() => {
    const html = props.equipment.detailed_description || '';
    if (!hasToc.value) return html;
    let i = 0;
    const re = new RegExp(`<${proseTag.value}(?=[\\s>])`, 'gi');
    return html.replace(re, (tag) => {
        i += 1;
        return `${tag} id="${anchorBase.value}-${i}" data-sec="${pad(i)}"`;
    });
});

// Highlight the contents entry of the section currently being read
const activeSec = ref('');
let spy = null;
onMounted(() => {
    if (!hasToc.value || !('IntersectionObserver' in window)) return;
    spy = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) activeSec.value = e.target.id; }),
        { rootMargin: '-18% 0px -72% 0px' },
    );
    proseSections.value.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) spy.observe(el);
    });
});
onUnmounted(() => spy?.disconnect());
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="seoKeywords" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="article" />
        <meta property="og:url" :content="`https://babormedical.com/lasers/${equipment.slug}`" />
        <meta property="og:image" :content="equipment.image ? 'https://babormedical.com/storage/' + equipment.image : 'https://babormedical.com/logo.webp'" />
        <meta property="og:site_name" content="Babor Medical" />
        <meta property="og:locale" :content="locale === 'mk' ? 'mk_MK' : 'en_US'" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" :content="equipment.image ? 'https://babormedical.com/storage/' + equipment.image : 'https://babormedical.com/logo.webp'" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
        <link rel="canonical" :href="`https://babormedical.com/lasers/${equipment.slug}`" />
        <link rel="alternate" hreflang="en" :href="`https://babormedical.com/lasers/${equipment.slug}?lang=en`" />
        <link rel="alternate" hreflang="mk" :href="`https://babormedical.com/lasers/${equipment.slug}?lang=mk`" />
        <link rel="alternate" hreflang="x-default" :href="`https://babormedical.com/lasers/${equipment.slug}`" />
    </Head>

    <SiteLayout>
        <div class="laser-detail-page">
            <!-- Hero -->
            <PageHero
                :eyebrow="equipment.category"
                :title="heroTitle.main"
                :accent="heroTitle.accent"
                :subtitle="equipment.description"
                :crumb="equipment.title"
            >
                <div class="ld-actions">
                    <a
                        v-if="equipment.link"
                        :href="equipment.link"
                        target="_blank"
                        class="bm-btn"
                    >
                        <span>{{ content.learnMore }}</span>
                        <span class="bm-btn__icon"><Icon name="arrow-up-right" :stroke="2" /></span>
                    </a>
                    <Link href="/contact" class="bm-btn bm-btn--ghost">
                        {{ content.contactUs }}
                    </Link>
                </div>
                <Link href="/lasers" class="ld-back">
                    {{ content.backToLasers }}
                </Link>

                <template #aside>
                    <div class="ld-visual">
                        <div class="ld-stage bm-stage">
                            <span class="ld-stage__ring" aria-hidden="true"></span>
                            <span class="ld-stage__beam" aria-hidden="true"></span>
                            <div class="ld-stage__float">
                                <picture>
                                    <source
                                        v-if="equipment.image_mobile_webp"
                                        :srcset="'/storage/' + equipment.image_mobile_webp"
                                        media="(max-width: 768px)"
                                        type="image/webp"
                                    />
                                    <source
                                        v-if="equipment.image_desktop_webp"
                                        :srcset="'/storage/' + equipment.image_desktop_webp"
                                        media="(min-width: 769px)"
                                        type="image/webp"
                                    />
                                    <img
                                        :src="equipment.image ? '/storage/' + equipment.image : '/images/placeholder.webp'"
                                        :alt="equipment.title"
                                        width="800"
                                        height="1000"
                                        fetchpriority="high"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                        <RotatingBadge class="ld-seal" :size="136" />
                        <span class="ld-caption" aria-hidden="true">
                            <span>{{ equipment.category }}</span>
                            <span class="ld-caption__line"></span>
                            <span>{{ heroTitle.accent || heroTitle.main }}</span>
                        </span>
                    </div>
                </template>
            </PageHero>

            <!-- Detailed content -->
            <section v-if="equipment.detailed_description" class="ld-body bm-cream bm-sheet bm-section">
                <div class="bm-container ld-body__grid" :class="{ 'has-toc': hasToc }">
                    <aside v-if="hasToc" class="ld-toc" data-reveal>
                        <span class="bm-eyebrow ld-toc__eyebrow">{{ equipment.title }}</span>
                        <ol class="ld-toc__list">
                            <li v-for="(sec, i) in proseSections" :key="sec.id">
                                <a :href="`#${sec.id}`" :class="{ 'is-active': activeSec === sec.id }">
                                    <span class="ld-toc__n">{{ pad(i + 1) }}</span>
                                    <span class="ld-toc__t">{{ sec.title }}</span>
                                </a>
                            </li>
                        </ol>
                        <Link href="/contact" class="bm-btn bm-btn--wine bm-btn--sm ld-toc__cta">
                            <span>{{ content.contactUs }}</span>
                            <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                        </Link>
                    </aside>

                    <article class="ld-sheet">
                        <span class="ld-sheet__mark" aria-hidden="true">
                            <img src="/logo.webp" alt="" width="64" height="64" loading="lazy" decoding="async" />
                        </span>
                        <div
                            class="ld-prose bm-prose"
                            v-html="proseHtml"
                        ></div>
                    </article>
                </div>
            </section>

            <!-- Cross-link to Laser Treatments -->
            <section
                v-if="equipment.slug === 'alma-soprano-titanium'"
                class="ld-cross bm-cream"
                :class="{ 'bm-sheet': !equipment.detailed_description }"
            >
                <div class="bm-container">
                    <div class="ld-cross__card bm-grain" data-reveal>
                        <span class="ld-cross__arch" aria-hidden="true"></span>
                        <Icon class="ld-cross__icon" name="laser" :size="40" :stroke="1.1" />
                        <p class="ld-cross__text">{{ locale === 'mk' ? 'Видете ги сите наши ласерски третмани и цени за ласерска епилација во Скопје' : 'See all our laser treatments and laser hair removal prices in Skopje' }}</p>
                        <Link href="/services/laser-aesthetic" class="bm-btn ld-cross__btn">
                            <span>{{ locale === 'mk' ? 'Ласерски третмани и ценовник →' : 'Laser Treatments & Pricing →' }}</span>
                        </Link>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section class="ld-cta bm-wine bm-section bm-grain">
                <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
                <span class="ld-cta__arcs" aria-hidden="true"><span></span><span></span><span></span></span>
                <div class="bm-container ld-cta__inner">
                    <h2 class="bm-display ld-cta__title"><MaskText :text="content.contactUs" /></h2>
                    <p class="bm-lead ld-cta__desc" data-reveal style="--d: 0.2s">{{ content.contactDesc }}</p>
                    <div class="ld-cta__actions" data-reveal style="--d: 0.35s">
                        <Link href="/contact" class="bm-btn">
                            <span>{{ content.contactUs }}</span>
                            <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero ---------- */
.ld-actions { display: flex; flex-wrap: wrap; gap: 14px; }
.ld-back {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 34px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--line-dark);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
    transition: color 0.4s, border-color 0.4s;
}
.ld-back:hover { color: var(--gold-300); border-color: var(--gold-300); }

.ld-visual {
    position: relative;
    width: min(100%, 470px);
    margin-inline: auto 0;
}
.ld-stage {
    aspect-ratio: 4 / 5.2;
    width: 100%;
    border-radius: 999px 999px var(--radius-md) var(--radius-md);
    border: 1px solid rgba(217, 185, 149, 0.24);
    box-shadow: 0 60px 120px -50px rgba(0, 0, 0, 0.8);
}
.ld-stage__ring {
    position: absolute;
    inset: 6%;
    border-radius: 999px 999px 14px 14px;
    border: 1px solid rgba(217, 185, 149, 0.18);
    pointer-events: none;
}
.ld-stage__beam {
    position: absolute;
    left: 50%;
    top: -10%;
    width: 46%;
    height: 80%;
    transform: translateX(-50%);
    background: radial-gradient(50% 60% at 50% 0%, rgba(246, 238, 230, 0.16), transparent 70%);
    filter: blur(6px);
    animation: ld-breathe 6s var(--ease-in-out) infinite alternate;
    pointer-events: none;
}
.ld-stage__float {
    position: relative;
    z-index: 1;
    width: 80%;
    height: 80%;
    margin-top: 12%;
    animation: ld-float 8s var(--ease-in-out) infinite alternate;
}
.ld-stage__float picture { display: contents; }
.ld-stage__float img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 40px 50px rgba(0, 0, 0, 0.55));
}
.ld-seal { position: absolute; left: -58px; top: 16%; z-index: 2; }
.ld-caption {
    position: absolute;
    right: -14px;
    bottom: 34px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    background: rgba(22, 10, 14, 0.72);
    border: 1px solid var(--line-dark);
    backdrop-filter: blur(10px);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
}
.ld-caption span:first-child { color: var(--gold-300); }
.ld-caption__line { width: 26px; height: 1px; background: var(--line-dark); }

@keyframes ld-float {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(0, -12px, 0); }
}
@keyframes ld-breathe {
    from { opacity: 0.55; }
    to { opacity: 1; }
}

/* ---------- Long description ---------- */
.ld-body__grid { display: block; }
.ld-body__grid:not(.has-toc) .ld-sheet { max-width: 900px; margin-inline: auto; }
.ld-body__grid.has-toc {
    display: grid;
    grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: start;
}

.ld-toc {
    position: sticky;
    top: calc(var(--header-h) + 32px);
    max-height: calc(100vh - var(--header-h) - 64px);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding-bottom: 8px;
}
.ld-toc::-webkit-scrollbar { display: none; }
.ld-toc__list {
    list-style: none;
    margin: 26px 0 0;
    padding: 0;
    border-top: 1px solid var(--line-light);
}
.ld-toc__list li { border-bottom: 1px solid var(--line-light); }
.ld-toc__list a {
    position: relative;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
    padding: 14px 0;
    font-size: 0.9rem;
    line-height: 1.45;
    color: var(--ink-soft);
    transition: color 0.4s, padding 0.5s var(--ease-out);
}
.ld-toc__list a::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--wine-600);
    transform: translateY(-50%) scale(0);
    transition: transform 0.5s var(--ease-out);
}
.ld-toc__n {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 0.95rem;
    color: var(--wine-500);
    opacity: 0.7;
}
.ld-toc__list a:hover,
.ld-toc__list a.is-active { color: var(--ink); padding-left: 6px; }
.ld-toc__list a.is-active::before { transform: translateY(-50%) scale(1); }
.ld-toc__list a.is-active .ld-toc__n { opacity: 1; }
.ld-toc__cta { margin-top: 28px; }

.ld-sheet {
    position: relative;
    min-width: 0;
    padding: clamp(32px, 6vw, 88px) clamp(24px, 6vw, 92px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-light);
    background: #fffaf5;
    box-shadow: 0 60px 100px -70px rgba(82, 26, 47, 0.35);
}
.ld-sheet__mark {
    position: absolute;
    top: 0;
    left: 50%;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid var(--line-light);
    background: var(--cream-100);
    transform: translate(-50%, -50%);
}
.ld-sheet__mark img { width: 60%; height: auto; }

/* CMS rich text */
.ld-prose {
    color: #4a3138;
    font-size: 1.06rem;
    line-height: 1.9;
    counter-reset: ld-ol;
}
.ld-prose > :deep(* + *) { margin-top: 1.15em; }
.ld-prose > :deep(:first-child) { margin-top: 0; }
.ld-prose :deep(p:empty) { display: none; }
.ld-prose :deep(h2),
.ld-prose :deep(h4) {
    margin-top: 2.3em;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.8rem, 2.9vw, 2.6rem);
    line-height: 1.14;
    letter-spacing: -0.015em;
    color: var(--ink);
    scroll-margin-top: calc(var(--header-h) + 32px);
}
.ld-prose :deep(h4 strong),
.ld-prose :deep(h2 strong) { font-weight: inherit; color: inherit; }
.ld-prose :deep([data-sec]::before) {
    content: attr(data-sec);
    display: block;
    width: max-content;
    margin-bottom: 18px;
    padding-left: 50px;
    background: linear-gradient(var(--wine-500), var(--wine-500)) left center / 36px 1px no-repeat;
    font-family: var(--font-sans);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    line-height: 1.4;
    color: var(--wine-600);
}
.ld-prose :deep(h3) {
    margin-top: 1.9em;
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.3rem, 1.8vw, 1.6rem);
    line-height: 1.3;
    color: var(--wine-600);
}
.ld-prose :deep(h2 + p),
.ld-prose :deep(h3 + p),
.ld-prose :deep(h4 + p) { margin-top: 0.9em; }
.ld-prose :deep(strong) { font-weight: 700; color: var(--ink); }
.ld-prose :deep(a) { color: var(--wine-600); text-decoration: underline; text-underline-offset: 3px; }
.ld-prose :deep(a:hover) { color: var(--wine-800); }
.ld-prose :deep(ul),
.ld-prose :deep(ol) {
    list-style: none;
    margin-block: 1.2em 0;
    padding: 0;
    display: grid;
    gap: 0.6em;
}
.ld-prose :deep(li) { position: relative; padding-left: 34px; margin: 0; }
.ld-prose :deep(li + li) { margin-top: 0; }
.ld-prose :deep(li > p) { margin: 0; }
.ld-prose :deep(ul > li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.95em;
    width: 16px;
    height: 1px;
    background: var(--wine-500);
    opacity: 0.6;
}
.ld-prose :deep(ul > li::after) {
    content: '';
    position: absolute;
    left: 14px;
    top: calc(0.95em - 2px);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--wine-600);
}
.ld-prose :deep(ol) { counter-reset: ld-ol; }
.ld-prose :deep(ol > li) { counter-increment: ld-ol; padding-left: 44px; }
.ld-prose :deep(ol > li::before) {
    content: counter(ld-ol, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 0.1em;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.6;
    color: var(--wine-500);
}
.ld-prose :deep(hr) {
    position: relative;
    height: 14px;
    margin: 3.2em 0;
    border: 0;
    opacity: 1;
    color: inherit;
    background: linear-gradient(var(--line-light), var(--line-light)) center / 100% 1px no-repeat;
}
.ld-prose :deep(hr::after) {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 9px;
    border: 1px solid var(--wine-500);
    background: #fffaf5;
    transform: translate(-50%, -50%) rotate(45deg);
}
.ld-prose :deep(hr + h2),
.ld-prose :deep(hr + h4) { margin-top: 0; }
.ld-prose :deep(blockquote) {
    margin: 1.6em 0 0;
    padding: 6px 0 6px 28px;
    border-left: 1px solid var(--wine-500);
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.3rem;
    line-height: 1.5;
    color: var(--ink);
}
.ld-prose :deep(table) {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
}
.ld-prose :deep(th),
.ld-prose :deep(td) { padding: 12px 14px; border-bottom: 1px solid var(--line-light); text-align: left; vertical-align: top; }
.ld-prose :deep(th) { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--wine-600); }
.ld-prose :deep(img) { max-width: 100%; height: auto; border-radius: var(--radius-md); }

/* ---------- Cross-link ---------- */
.ld-cross { padding-bottom: clamp(84px, 10vw, 150px); }
.ld-cross.bm-sheet { padding-top: clamp(84px, 10vw, 150px); }
.ld-body:has(+ .ld-cross) { padding-bottom: clamp(48px, 6vw, 80px); }
.ld-cross__card {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: clamp(20px, 3vw, 40px);
    padding: clamp(30px, 4vw, 52px) clamp(26px, 4vw, 56px);
    border-radius: var(--radius-lg);
    background:
        radial-gradient(90% 120% at 100% 0%, rgba(140, 42, 72, 0.6), transparent 60%),
        linear-gradient(135deg, var(--wine-800), var(--wine-700));
    color: var(--on-dark);
    box-shadow: 0 50px 90px -50px rgba(56, 19, 34, 0.7);
}
.ld-cross__arch {
    position: absolute;
    right: 8%;
    top: 30%;
    width: 280px;
    height: 360px;
    border-radius: 999px 999px 0 0;
    border: 1px solid rgba(217, 185, 149, 0.16);
    pointer-events: none;
}
.ld-cross__icon { position: relative; color: var(--gold-300); }
.ld-cross__text {
    position: relative;
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 2vw, 1.75rem);
    font-weight: 300;
    line-height: 1.35;
}
.ld-cross__btn { position: relative; padding: 0 28px; }

/* ---------- CTA ---------- */
.ld-cta { overflow: hidden; text-align: center; }
.ld-cta__inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
.ld-cta__title { max-width: 14ch; }
.ld-cta__desc { margin-top: 28px; max-width: 560px; color: var(--on-dark-muted); }
.ld-cta__actions { margin-top: 42px; }
.ld-cta__arcs {
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: min(1100px, 130vw);
    aspect-ratio: 2 / 1;
    transform: translateX(-50%);
    pointer-events: none;
}
.ld-cta__arcs span {
    position: absolute;
    left: 50%;
    bottom: 0;
    border: 1px solid rgba(217, 185, 149, 0.14);
    border-bottom: 0;
    border-radius: 999px 999px 0 0;
    transform: translateX(-50%);
}
.ld-cta__arcs span:nth-child(1) { width: 100%; height: 100%; }
.ld-cta__arcs span:nth-child(2) { width: 76%; height: 76%; }
.ld-cta__arcs span:nth-child(3) { width: 52%; height: 52%; border-color: rgba(217, 185, 149, 0.22); }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .ld-seal { left: -30px; }
}
@media (max-width: 991.98px) {
    .ld-visual { margin-inline: auto; width: min(100%, 420px); }
    .ld-body__grid.has-toc { grid-template-columns: 1fr; }
    .ld-toc { position: static; max-height: none; overflow: visible; }
    .ld-toc__cta { display: none; }
    .ld-cross__card { grid-template-columns: 1fr; justify-items: start; }
}
@media (max-width: 575.98px) {
    .ld-actions .bm-btn { flex: 1 1 100%; }
    .ld-seal { width: 104px !important; height: 104px !important; left: -10px; top: 6%; }
    .ld-caption { right: 8px; bottom: 22px; }
    .ld-sheet { border-radius: var(--radius-md); }
    .ld-prose { font-size: 1rem; line-height: 1.85; }
    .ld-cross__btn { width: 100%; }
}
@media (prefers-reduced-motion: reduce) {
    .ld-stage__float, .ld-stage__beam { animation: none; }
}
</style>
