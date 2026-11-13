<script setup>
import { Head, usePage, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    locations: Array,
    socialLinks: Object,
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

// Use props if passed, otherwise fall back to shared data
const locations = computed(() => props.locations || page.props.sharedLocations || []);
const socialLinks = computed(() => props.socialLinks || page.props.sharedSocialLinks || {});

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Контакт - Babor Medical' 
        : 'Contact - Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Контактирајте нè за закажување на термин или за повеќе информации за нашите третмани.'
        : 'Contact us to book an appointment or for more information about our treatments.';
});

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
                'telephone': '+389 75 340 933',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$',
                'openingHoursSpecification': {
                    '@type': 'OpeningHoursSpecification',
                    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    'opens': '09:00',
                    'closes': '20:00'
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Како да закажам термин во Babor Medical?' : 'How to book an appointment at Babor Medical?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Можете да закажете термин преку нашата контакт форма на веб страницата, преку телефон на +389 75 340 933 или преку нашите социјални мрежи.' : 'You can book an appointment through our contact form on the website, by phone at +389 75 340 933 or through our social media channels.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кое е работното време на Babor Medical?' : 'What are the working hours of Babor Medical?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical работи од понеделник до сабота. За точно работно време и достапни термини, контактирајте нè на +389 75 340 933.' : 'Babor Medical is open Monday to Saturday. For exact working hours and available appointments, contact us at +389 75 340 933.'
                        }
                    }
                ]
            }
        ]
    });
});

const form = useForm({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
});

const submitted = ref(false);

const services = computed(() => [
    { value: '', label: locale.value === 'mk' ? 'Изберете услуга' : 'Select a service' },
    { value: 'face', label: locale.value === 'mk' ? 'Третмани за лице' : 'Face Treatments' },
    { value: 'laser', label: locale.value === 'mk' ? 'Ласерски третмани' : 'Laser Treatments' },
    { value: 'body', label: locale.value === 'mk' ? 'Третмани за тело' : 'Body Treatments' },
    { value: 'products', label: locale.value === 'mk' ? 'Babor производи' : 'Babor Products' },
    { value: 'consultation', label: locale.value === 'mk' ? 'Консултација' : 'Consultation' },
    { value: 'other', label: locale.value === 'mk' ? 'Друго' : 'Other' },
]);

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'КОНТАКТ' : 'CONTACT',
    title: locale.value === 'mk' ? 'Контактирајте нè' : 'Get in Touch',
    subtitle: locale.value === 'mk' 
        ? 'Имате прашања или сакате да закажете термин? Ние сме тука за вас.'
        : 'Have questions or want to book an appointment? We are here for you.',
    formTitle: locale.value === 'mk' ? 'Испратете порака' : 'Send a Message',
    infoTitle: locale.value === 'mk' ? 'Информации за контакт' : 'Contact Information',
    name: locale.value === 'mk' ? 'Име и презиме' : 'Full Name',
    email: locale.value === 'mk' ? 'Е-пошта' : 'Email',
    phone: locale.value === 'mk' ? 'Телефон' : 'Phone',
    service: locale.value === 'mk' ? 'Услуга' : 'Service',
    message: locale.value === 'mk' ? 'Порака' : 'Message',
    submit: locale.value === 'mk' ? 'Испрати порака' : 'Send Message',
    successTitle: locale.value === 'mk' ? 'Пораката е испратена!' : 'Message Sent!',
    successText: locale.value === 'mk' 
        ? 'Ви благодариме за вашата порака. Ќе ви одговориме наскоро.'
        : 'Thank you for your message. We will get back to you soon.',
    workingHoursLabel: locale.value === 'mk' ? 'Работно време' : 'Working Hours',
    mondayFriday: locale.value === 'mk' ? 'Понеделник - Петок' : 'Monday - Friday',
    saturday: locale.value === 'mk' ? 'Сабота' : 'Saturday',
    sunday: locale.value === 'mk' ? 'Недела' : 'Sunday',
    followUs: locale.value === 'mk' ? 'Следете нè' : 'Follow Us',
}));

const isSubmitting = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
    isSubmitting.value = true;
    errorMessage.value = '';
    
    try {
        const response = await fetch('/contact/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                phone: form.phone,
                service: form.service,
                message: form.message,
            }),
        });
        
        const data = await response.json();
        
        if (data.success) {
            submitted.value = true;
            form.reset();
        } else {
            errorMessage.value = data.message || 'Something went wrong. Please try again.';
        }
    } catch (error) {
        errorMessage.value = 'Something went wrong. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};

// ---- Presentation-only helpers (redesign) ----
const pad = (n) => String(n).padStart(2, '0');
const primaryLocation = computed(() => locations.value[0] || null);
const ribbonServices = computed(() => services.value.filter((s) => s.value && s.value !== 'other').map((s) => s.label));
const ribbonContact = computed(() => {
    const words = [content.value.title, content.value.formTitle, content.value.followUs];
    return [...words, ...words];
});
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="locale === 'mk' ? 'Babor Medical, контакт, закажи термин, Скопје' : 'Babor Medical, contact, book appointment, Skopje'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/contact" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/contact?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/contact?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/contact" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>
    <SiteLayout>
        <PageHero
            :eyebrow="content.badge"
            :title="content.title"
            :subtitle="content.subtitle"
            :crumb="locale === 'mk' ? 'Контакт' : 'Contact'"
            class="ct-hero"
        >
            <template v-if="primaryLocation && (primaryLocation.phone || primaryLocation.email)" #default>
                <div class="ct-quick">
                    <a v-if="primaryLocation.phone" :href="`tel:${primaryLocation.phone}`" class="bm-btn ct-quick__btn">
                        <span>{{ primaryLocation.phone }}</span>
                        <span class="bm-btn__icon"><Icon name="phone" :stroke="1.8" /></span>
                    </a>
                    <a v-if="primaryLocation.email" :href="`mailto:${primaryLocation.email}`" class="bm-btn bm-btn--ghost ct-quick__btn ct-quick__btn--mail">
                        <Icon name="mail" :size="18" :stroke="1.6" />
                        <span>{{ primaryLocation.email }}</span>
                    </a>
                </div>
            </template>
            <template #aside>
                <div class="ct-art" aria-hidden="true">
                    <div class="ct-art__arch">
                        <span class="ct-art__line ct-art__line--1"></span>
                        <span class="ct-art__line ct-art__line--2"></span>
                        <RotatingBadge :size="184" class="ct-art__seal" />
                    </div>
                    <span class="ct-art__chip ct-art__chip--pin"><Icon name="pin" :size="22" /></span>
                    <span class="ct-art__chip ct-art__chip--phone"><Icon name="phone" :size="22" /></span>
                    <span class="ct-art__chip ct-art__chip--mail"><Icon name="mail" :size="22" /></span>
                </div>
            </template>
        </PageHero>

        <!-- Form + contact details -->
        <section class="ct-main bm-cream bm-sheet bm-section">
            <div class="bm-container ct-main__grid">
                <div class="ct-form">
                    <div class="ct-form__head">
                        <span class="bm-numeral ct-form__num" aria-hidden="true">01</span>
                        <h2 class="bm-h2 ct-form__title"><MaskText :text="content.formTitle" /></h2>
                    </div>

                    <Transition name="ct-swap" mode="out-in">
                        <div v-if="submitted" class="ct-success" data-reveal="scale">
                            <div class="ct-success__icon">
                                <Icon name="check" :size="30" :stroke="1.8" />
                            </div>
                            <h3 class="bm-h3">{{ content.successTitle }}</h3>
                            <p class="bm-muted">{{ content.successText }}</p>
                        </div>

                        <form v-else @submit.prevent="submitForm" class="ct-form__form">
                            <div class="bm-field" data-reveal style="--d: 0.05s">
                                <label class="bm-label" :for="'name'">{{ content.name }}</label>
                                <input
                                    type="text"
                                    id="name"
                                    class="bm-input"
                                    v-model="form.name"
                                    required
                                    :placeholder="content.name"
                                >
                            </div>

                            <div class="ct-form__row">
                                <div class="bm-field" data-reveal style="--d: 0.1s">
                                    <label class="bm-label" :for="'email'">{{ content.email }}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        class="bm-input"
                                        v-model="form.email"
                                        required
                                        :placeholder="content.email"
                                    >
                                </div>
                                <div class="bm-field" data-reveal style="--d: 0.15s">
                                    <label class="bm-label" :for="'phone'">{{ content.phone }}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        class="bm-input"
                                        v-model="form.phone"
                                        :placeholder="content.phone"
                                    >
                                </div>
                            </div>

                            <div class="bm-field" data-reveal style="--d: 0.2s">
                                <label class="bm-label" :for="'service'">{{ content.service }}</label>
                                <select id="service" class="bm-input ct-select" v-model="form.service">
                                    <option v-for="service in services" :key="service.value" :value="service.value">
                                        {{ service.label }}
                                    </option>
                                </select>
                            </div>

                            <div class="bm-field" data-reveal style="--d: 0.25s">
                                <label class="bm-label" :for="'message'">{{ content.message }}</label>
                                <textarea
                                    id="message"
                                    class="bm-input"
                                    v-model="form.message"
                                    rows="5"
                                    required
                                    :placeholder="content.message"
                                ></textarea>
                            </div>

                            <div v-if="errorMessage" class="ct-error" role="alert">
                                <Icon name="info" :size="18" :stroke="1.8" />
                                <span>{{ errorMessage }}</span>
                            </div>

                            <div class="ct-form__actions" data-reveal style="--d: 0.3s">
                                <button type="submit" class="bm-btn bm-btn--wine ct-submit" :disabled="isSubmitting">
                                    <span>{{ isSubmitting ? (locale === 'mk' ? 'Се испраќа...' : 'Sending...') : content.submit }}</span>
                                    <span class="bm-btn__icon">
                                        <Icon v-if="!isSubmitting" name="arrow-up-right" :stroke="2" />
                                        <span v-else class="ct-spinner" aria-hidden="true"></span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </Transition>
                </div>

                <aside class="ct-info" data-reveal="right" style="--d: 0.15s">
                    <div class="ct-info__glow" aria-hidden="true"></div>
                    <h2 class="ct-info__title">{{ content.infoTitle }}</h2>

                    <!-- Loop through locations -->
                    <div v-for="(location, li) in locations" :key="location.id" class="ct-loc">
                        <div class="ct-loc__head">
                            <span class="ct-loc__num" aria-hidden="true">{{ pad(li + 1) }}</span>
                            <h3 class="ct-loc__name">{{ location.name }}</h3>
                        </div>

                        <div class="ct-loc__rows">
                            <div class="ct-row">
                                <span class="ct-row__icon"><Icon name="pin" :size="18" /></span>
                                <div class="ct-row__body">
                                    <h4 class="ct-row__label">{{ locale === 'mk' ? 'Адреса' : 'Address' }}</h4>
                                    <p class="ct-row__value">{{ location.address }}</p>
                                </div>
                            </div>

                            <div v-if="location.phone" class="ct-row">
                                <span class="ct-row__icon"><Icon name="phone" :size="18" /></span>
                                <div class="ct-row__body">
                                    <h4 class="ct-row__label">{{ locale === 'mk' ? 'Телефон' : 'Phone' }}</h4>
                                    <p><a class="ct-big" :href="`tel:${location.phone}`">{{ location.phone }}</a></p>
                                </div>
                            </div>

                            <div v-if="location.email" class="ct-row">
                                <span class="ct-row__icon"><Icon name="mail" :size="18" /></span>
                                <div class="ct-row__body">
                                    <h4 class="ct-row__label">{{ locale === 'mk' ? 'Е-пошта' : 'Email' }}</h4>
                                    <p><a class="ct-big" :href="`mailto:${location.email}`">{{ location.email }}</a></p>
                                </div>
                            </div>

                            <div v-if="location.show_working_hours" class="ct-row">
                                <span class="ct-row__icon"><Icon name="clock" :size="18" /></span>
                                <div class="ct-row__body">
                                    <h4 class="ct-row__label">{{ content.workingHoursLabel }}</h4>
                                    <div class="ct-hours">
                                        <div class="ct-hours__row">
                                            <span class="ct-hours__day">{{ content.mondayFriday }}</span>
                                            <span class="ct-hours__time">{{ location.working_hours_weekdays }}</span>
                                        </div>
                                        <div class="ct-hours__row">
                                            <span class="ct-hours__day">{{ content.saturday }}</span>
                                            <span class="ct-hours__time">{{ location.working_hours_saturday }}</span>
                                        </div>
                                        <div class="ct-hours__row">
                                            <span class="ct-hours__day">{{ content.sunday }}</span>
                                            <span class="ct-hours__time">{{ location.working_hours_sunday }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ct-social">
                        <h4 class="ct-row__label">{{ content.followUs }}</h4>
                        <div class="ct-social__links">
                            <a href="https://facebook.com/babormedical" target="_blank" rel="noopener" aria-label="Facebook">
                                <Icon name="facebook" :size="19" />
                            </a>
                            <a href="https://instagram.com/babormedical" target="_blank" rel="noopener" aria-label="Instagram">
                                <Icon name="instagram" :size="19" />
                            </a>
                            <!--
                            <a href="https://tiktok.com/@babormedical" target="_blank" rel="noopener" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                            -->
                        </div>
                    </div>
                </aside>
            </div>
        </section>

        <!-- Crossing ribbons (decorative) -->
        <div class="ct-ribbons" aria-hidden="true">
            <Marquee :items="ribbonServices" variant="wine" :tilt="-2.6" :duration="44" />
            <Marquee :items="ribbonContact" variant="outline" :tilt="2" :duration="52" reverse />
        </div>

        <!-- Map -->
        <section class="ct-map bm-dark">
            <div class="bm-container">
                <div class="ct-map__frame" data-reveal="scale">
                    <iframe 
                        src="https://maps.google.com/maps?q=East+Gate+Mall,+Skopje&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="400" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div v-if="primaryLocation" class="ct-map__card">
                        <span class="ct-map__pin"><Icon name="pin" :size="20" :stroke="1.7" /></span>
                        <span class="ct-map__text">
                            <span class="ct-map__name">{{ primaryLocation.name }}</span>
                            <span class="ct-map__addr">{{ primaryLocation.address }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero quick actions ---------- */
.ct-quick {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
}
.ct-quick__btn { letter-spacing: 0.08em; }
.ct-quick__btn--mail {
    gap: 12px;
    text-transform: none;
    letter-spacing: 0.02em;
    font-size: 0.92rem;
    font-weight: 600;
}

/* ---------- Hero visual ---------- */
.ct-art {
    position: relative;
    width: min(100%, 440px);
    margin-left: auto;
    margin-right: clamp(0px, 3vw, 40px);
    padding: 28px 0;
}
.ct-art__arch {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px var(--radius-md) var(--radius-md);
    border: 1px solid rgba(217, 185, 149, 0.28);
    overflow: hidden;
    background:
        radial-gradient(60% 50% at 50% 45%, rgba(217, 185, 149, 0.22) 0%, transparent 70%),
        radial-gradient(90% 60% at 50% 100%, rgba(140, 42, 72, 0.65) 0%, transparent 70%),
        linear-gradient(180deg, var(--wine-850) 0%, var(--wine-800) 100%);
}
.ct-art__line {
    position: absolute;
    border: 1px solid rgba(217, 185, 149, 0.16);
    border-radius: 999px 999px 10px 10px;
    pointer-events: none;
}
.ct-art__line--1 { inset: 22px; }
.ct-art__line--2 { inset: 48px; border-color: rgba(217, 185, 149, 0.1); }
.ct-art__chip {
    position: absolute;
    display: grid;
    place-items: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.3);
    background: rgba(41, 16, 27, 0.72);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    color: var(--gold-300);
    box-shadow: 0 24px 50px -24px rgba(0, 0, 0, 0.8);
    animation: ct-float 7s var(--ease-in-out) infinite alternate;
}
.ct-art__chip--pin { left: -34px; top: 26%; }
.ct-art__chip--phone { right: -30px; top: 52%; animation-delay: -2.4s; }
.ct-art__chip--mail { left: 12%; bottom: 0; animation-delay: -4.6s; background: var(--beige-200); color: var(--wine-700); border-color: transparent; }
@keyframes ct-float {
    from { transform: translate3d(0, -8px, 0); }
    to { transform: translate3d(0, 10px, 0); }
}
@media (prefers-reduced-motion: reduce) {
    .ct-art__chip { animation: none; }
}

/* ---------- Main: form + details ---------- */
.ct-main__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    gap: clamp(48px, 6vw, 104px);
    align-items: start;
}

.ct-form__head {
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 22px;
    margin-bottom: clamp(36px, 4.5vw, 56px);
}
.ct-form__num {
    font-size: clamp(3.4rem, 6vw, 5.6rem);
    flex: none;
    margin-bottom: -0.08em;
}
.ct-form__title { color: var(--ink); }

.ct-form__form {
    display: grid;
    gap: 22px;
}
.ct-form__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
}
.ct-form__row > .bm-field { align-content: start; }
.ct-form .bm-label { color: var(--wine-800); opacity: 0.85; }
.ct-form .bm-input { color: var(--ink); }
/* `.bm-cream .bm-input { background: … }` resets the select chevron, so re-apply it here */
.ct-select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%236e2039' stroke-width='1.5'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 20px center;
    padding-right: 48px;
}

.ct-form__actions { margin-top: 8px; }
.ct-submit { min-width: 240px; justify-content: space-between; }
.ct-spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(110, 32, 57, 0.25);
    border-top-color: var(--wine-600);
    animation: ct-spin 0.8s linear infinite;
}
@keyframes ct-spin { to { transform: rotate(360deg); } }

.ct-error {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(160, 36, 56, 0.28);
    background: rgba(160, 36, 56, 0.07);
    color: #8f1d33;
    font-size: 0.94rem;
    line-height: 1.5;
}
.ct-error svg { flex: none; margin-top: 1px; }

.ct-success {
    display: grid;
    justify-items: start;
    gap: 14px;
    padding: clamp(32px, 4vw, 52px);
    border-radius: var(--radius-lg);
    background: #fffaf5;
    border: 1px solid var(--line-light);
    box-shadow: 0 40px 80px -50px rgba(82, 26, 47, 0.35);
}
.ct-success__icon {
    display: grid;
    place-items: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    margin-bottom: 8px;
    box-shadow: 0 0 0 10px rgba(110, 32, 57, 0.08);
}
.ct-success .bm-h3 { color: var(--ink); }
.ct-success p { max-width: 460px; }

.ct-swap-enter-active, .ct-swap-leave-active { transition: opacity 0.45s var(--ease-out), transform 0.6s var(--ease-out); }
.ct-swap-enter-from { opacity: 0; transform: translateY(24px); }
.ct-swap-leave-to { opacity: 0; transform: translateY(-12px); }

/* ---------- Details panel (dark, on the cream sheet) ---------- */
.ct-info {
    position: sticky;
    top: calc(var(--header-h) + 24px);
    overflow: hidden;
    isolation: isolate;
    padding: clamp(30px, 3.4vw, 48px);
    border-radius: 200px 200px var(--radius-lg) var(--radius-lg);
    padding-top: clamp(84px, 9vw, 120px);
    background:
        radial-gradient(120% 70% at 50% 0%, rgba(140, 42, 72, 0.55) 0%, transparent 62%),
        linear-gradient(170deg, var(--wine-800) 0%, var(--wine-900) 100%);
    color: var(--on-dark);
    box-shadow: 0 60px 100px -60px rgba(56, 19, 34, 0.75);
}
.ct-info::before {
    content: '';
    position: absolute;
    inset: 12px;
    border: 1px solid rgba(217, 185, 149, 0.22);
    border-radius: 190px 190px calc(var(--radius-lg) - 8px) calc(var(--radius-lg) - 8px);
    pointer-events: none;
    z-index: -1;
}
.ct-info__glow {
    position: absolute;
    width: 70%;
    aspect-ratio: 1;
    left: 50%;
    top: -18%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(217, 185, 149, 0.22), transparent 65%);
    filter: blur(20px);
    z-index: -1;
    pointer-events: none;
}
.ct-info__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.7rem, 2.4vw, 2.3rem);
    line-height: 1.12;
    text-align: center;
    margin-bottom: clamp(28px, 3vw, 40px);
}

.ct-loc + .ct-loc { margin-top: 36px; padding-top: 32px; border-top: 1px solid var(--line-dark); }
.ct-loc__head {
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--line-dark);
}
.ct-loc__num {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1rem;
    color: var(--gold-300);
    flex: none;
}
.ct-loc__name {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.3rem, 1.7vw, 1.6rem);
    line-height: 1.25;
    color: var(--gold-300);
}

.ct-loc__rows { display: grid; }
.ct-row {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
    padding: 22px 0;
    border-bottom: 1px solid var(--line-dark);
}
.ct-row__icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    color: var(--gold-300);
}
.ct-row__label {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--on-dark-faint);
    line-height: 1.4;
    margin-bottom: 6px;
}
.ct-row__value { color: var(--on-dark); font-size: 1.02rem; line-height: 1.55; }

.ct-big {
    position: relative;
    display: inline-block;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.32rem, 1.85vw, 1.75rem);
    line-height: 1.25;
    color: var(--on-dark);
    overflow-wrap: anywhere;
    padding-bottom: 4px;
    transition: color 0.4s var(--ease-out);
}
.ct-big::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s var(--ease-out);
}
.ct-big:hover { color: var(--gold-300); }
.ct-big:hover::after { transform: scaleX(1); transform-origin: left; }

.ct-hours { display: grid; gap: 10px; margin-top: 6px; }
.ct-hours__row {
    display: flex;
    align-items: baseline;
    gap: 12px;
    font-size: 0.95rem;
}
.ct-hours__day { color: var(--on-dark-muted); flex: 0 1 auto; min-width: 0; }
.ct-hours__row::after {
    content: '';
    order: 1;
    flex: 1;
    min-width: 16px;
    border-bottom: 1px dotted rgba(217, 185, 149, 0.4);
    transform: translateY(-4px);
}
.ct-hours__time {
    order: 2;
    color: var(--gold-300);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    text-align: right;
    white-space: nowrap;
}

.ct-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-top: 26px;
}
.ct-social .ct-row__label { margin: 0; }
.ct-social__links { display: flex; gap: 10px; }
.ct-social__links a {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    color: var(--on-dark);
    transition: background 0.4s var(--ease-out), color 0.4s var(--ease-out), border-color 0.4s, transform 0.4s var(--ease-out);
}
.ct-social__links a:hover {
    background: var(--beige-200);
    border-color: var(--beige-200);
    color: var(--wine-800);
    transform: translateY(-3px);
}

/* ---------- Ribbons ---------- */
.ct-ribbons {
    position: relative;
    display: grid;
    background: var(--wine-950);
    padding: clamp(64px, 8vw, 110px) 0 clamp(40px, 5vw, 70px);
    overflow: hidden;
}
.ct-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- Map ---------- */
.ct-map { padding-bottom: clamp(84px, 10vw, 150px); }
.ct-map__frame {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-dark);
    background: var(--wine-900);
    box-shadow: 0 60px 120px -60px rgba(0, 0, 0, 0.8);
}
.ct-map__frame iframe {
    display: block;
    width: 100%;
    height: clamp(380px, 46vw, 600px);
    /* burgundy night-mode map; natural colours while the visitor interacts with it */
    filter: grayscale(1) invert(0.92) contrast(0.88) sepia(0.5) hue-rotate(290deg) saturate(1.6) brightness(0.9);
    transition: filter 0.9s var(--ease-out);
}
.ct-map__frame:hover iframe,
.ct-map__frame:focus-within iframe { filter: none; }
.ct-map__frame::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(217, 185, 149, 0.12), inset 0 0 120px rgba(22, 10, 14, 0.55);
    pointer-events: none;
}
.ct-map__card {
    position: absolute;
    z-index: 2;
    right: clamp(16px, 2.4vw, 32px);
    top: clamp(16px, 2.4vw, 32px);
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: min(420px, calc(100% - 32px));
    padding: 14px 26px 14px 14px;
    border-radius: 999px;
    background: var(--cream-50);
    color: var(--ink);
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.7);
}
.ct-map__pin {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--wine-600);
    color: var(--cream-50);
    flex: none;
}
.ct-map__text { display: grid; gap: 2px; min-width: 0; }
.ct-map__name { font-family: var(--font-display); font-size: 1.12rem; line-height: 1.25; }
.ct-map__addr { font-size: 0.82rem; color: var(--ink-soft); line-height: 1.4; }

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
    .ct-hero :deep(.bm-phero__aside) { display: none; }
    .ct-main__grid { grid-template-columns: 1fr; }
    .ct-info { position: relative; top: 0; }
}

@media (max-width: 575.98px) {
    .ct-quick__btn { width: 100%; justify-content: space-between; }
    .ct-quick__btn--mail { justify-content: center; }
    .ct-form__row { grid-template-columns: 1fr; }
    .ct-submit { width: 100%; min-width: 0; }
    .ct-info { border-radius: 140px 140px var(--radius-lg) var(--radius-lg); padding-inline: 22px; }
    .ct-info::before { border-radius: 130px 130px calc(var(--radius-lg) - 8px) calc(var(--radius-lg) - 8px); }
    .ct-row { grid-template-columns: 40px minmax(0, 1fr); gap: 14px; }
    .ct-row__icon { width: 40px; height: 40px; }
    .ct-social { flex-direction: column; align-items: flex-start; }
    .ct-map__frame iframe { height: 420px; }
    .ct-map__card {
        position: relative;
        right: auto;
        top: auto;
        max-width: none;
        margin: -1px 0 0;
        border-radius: 0;
        padding: 18px;
    }
}
</style>
