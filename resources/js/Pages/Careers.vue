<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, reactive } from 'vue';
import SiteLayout from '@/Layouts/SiteLayout.vue';
import PageHero from '@/Components/Site/PageHero.vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Marquee from '@/Components/Site/Marquee.vue';
import Counter from '@/Components/Site/Counter.vue';
import RotatingBadge from '@/Components/Site/RotatingBadge.vue';
import Icon from '@/Components/Site/Icon.vue';

const props = defineProps({
    postings: Array,
});

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk'
        ? 'Кариера - Babor Medical'
        : 'Careers - Babor Medical';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Придружете се на тимот на Babor Medical. Погледнете ги отворените позиции и аплицирајте онлајн.'
        : 'Join the Babor Medical team. Browse our open positions and apply online.';
});

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'КАРИЕРА' : 'CAREERS',
    title: locale.value === 'mk' ? 'Придружете се на нашиот тим' : 'Join Our Team',
    subtitle: locale.value === 'mk'
        ? 'Изградете кариера во светот на естетската медицина и убавината. Погледнете ги нашите отворени позиции.'
        : 'Build a career in the world of aesthetic medicine and beauty. Take a look at our open positions.',
    openPositions: locale.value === 'mk' ? 'Отворени позиции' : 'Open Positions',
    noPositionsTitle: locale.value === 'mk' ? 'Моментално нема отворени позиции' : 'No Open Positions Right Now',
    noPositionsText: locale.value === 'mk'
        ? 'Следете нè на социјалните мрежи или проверете повторно наскоро за нови можности.'
        : 'Follow us on social media or check back soon for new opportunities.',
    requirements: locale.value === 'mk' ? 'Потребни квалификации' : 'Requirements',
    apply: locale.value === 'mk' ? 'Аплицирај' : 'Apply Now',
    close: locale.value === 'mk' ? 'Затвори' : 'Close',
    applyFor: locale.value === 'mk' ? 'Аплицирај за' : 'Apply for',
    name: locale.value === 'mk' ? 'Име и презиме' : 'Full Name',
    email: locale.value === 'mk' ? 'Е-пошта' : 'Email',
    phone: locale.value === 'mk' ? 'Телефон' : 'Phone',
    message: locale.value === 'mk' ? 'Мотивационо писмо (опционално)' : 'Cover Letter (optional)',
    cv: locale.value === 'mk' ? 'Кратка биографија (CV)' : 'CV / Resume',
    cvHint: locale.value === 'mk' ? 'PDF, DOC или DOCX, максимум 5MB' : 'PDF, DOC or DOCX, max 5MB',
    chooseFile: locale.value === 'mk' ? 'Изберете датотека' : 'Choose file',
    submit: locale.value === 'mk' ? 'Испрати апликација' : 'Submit Application',
    submitting: locale.value === 'mk' ? 'Се испраќа...' : 'Submitting...',
    successTitle: locale.value === 'mk' ? 'Апликацијата е испратена!' : 'Application Sent!',
    successText: locale.value === 'mk'
        ? 'Ви благодариме за интересот. Ќе ве контактираме најбрзо што е можно. Потврда е испратена на вашата е-пошта.'
        : 'Thank you for your interest. We will get back to you as soon as possible. A confirmation has been sent to your email.',
    genericError: locale.value === 'mk'
        ? 'Нешто тргна наопаку. Ве молиме обидете се повторно.'
        : 'Something went wrong. Please try again.',
}));

const employmentTypeLabel = (type) => {
    const labels = {
        full_time: locale.value === 'mk' ? 'Полно работно време' : 'Full-time',
        part_time: locale.value === 'mk' ? 'Скратено работно време' : 'Part-time',
        contract: locale.value === 'mk' ? 'Договор' : 'Contract',
        internship: locale.value === 'mk' ? 'Пракса' : 'Internship',
    };
    return labels[type] || type;
};

const activeFormId = ref(null);
const submittedId = ref(null);
const isSubmitting = ref(false);
const errorMessage = ref('');
const fieldErrors = ref({});

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null,
});

const cvFileName = ref('');

const toggleForm = (postingId) => {
    if (activeFormId.value === postingId) {
        activeFormId.value = null;
        return;
    }
    activeFormId.value = postingId;
    errorMessage.value = '';
    fieldErrors.value = {};
    form.name = '';
    form.email = '';
    form.phone = '';
    form.message = '';
    form.cv = null;
    cvFileName.value = '';
};

const handleCvChange = (e) => {
    const file = e.target.files[0];
    form.cv = file || null;
    cvFileName.value = file ? file.name : '';
};

const submitApplication = async (postingId) => {
    isSubmitting.value = true;
    errorMessage.value = '';
    fieldErrors.value = {};

    try {
        const formData = new FormData();
        formData.append('job_posting_id', postingId);
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('message', form.message);
        if (form.cv) {
            formData.append('cv', form.cv);
        }

        const response = await fetch('/careers/apply', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
            },
            body: formData,
        });

        const data = await response.json();

        if (response.ok && data.success) {
            submittedId.value = postingId;
            activeFormId.value = null;
        } else if (response.status === 422 && data.errors) {
            fieldErrors.value = Object.fromEntries(
                Object.entries(data.errors).map(([key, messages]) => [key, messages[0]])
            );
            errorMessage.value = data.message || content.value.genericError;
        } else {
            errorMessage.value = data.message || content.value.genericError;
        }
    } catch (error) {
        errorMessage.value = content.value.genericError;
    } finally {
        isSubmitting.value = false;
    }
};

// ---- Presentation-only helpers (redesign) ----
const pad = (n) => String(n).padStart(2, '0');
// Requirements are entered "one per line" in the admin; show each line as a bullet.
const requirementLines = (text) => String(text || '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
const dragOver = ref(false);
const ribbonItems = computed(() => {
    const items = [content.value.title, ...(props.postings || []).map((p) => p.title), content.value.openPositions];
    return items.length < 5 ? [...items, ...items] : items;
});
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="locale === 'mk' ? 'Babor Medical, кариера, вработување, работа, Скопје' : 'Babor Medical, careers, jobs, employment, Skopje'" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <link rel="canonical" href="https://babormedical.com/careers" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/careers?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/careers?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/careers" />
    </Head>
    <SiteLayout>
        <PageHero
            :eyebrow="content.badge"
            :title="content.title"
            :subtitle="content.subtitle"
            :crumb="locale === 'mk' ? 'Кариера' : 'Careers'"
            class="cr-hero"
        >
            <template v-if="postings.length > 0" #default>
                <a href="#open-positions" class="bm-btn">
                    <span>{{ content.openPositions }}</span>
                    <span class="bm-btn__icon"><Icon name="arrow-down" :stroke="2" /></span>
                </a>
            </template>
            <template #aside>
                <div class="cr-art" aria-hidden="true">
                    <div class="cr-art__arch">
                        <span class="cr-art__line cr-art__line--1"></span>
                        <span class="cr-art__line cr-art__line--2"></span>
                        <template v-if="postings.length > 0">
                            <span class="cr-art__count"><Counter :value="pad(postings.length)" /></span>
                            <span class="cr-art__label">{{ content.openPositions }}</span>
                        </template>
                        <span v-else class="cr-art__icon"><Icon name="briefcase" :size="44" :stroke="1.2" /></span>
                    </div>
                    <RotatingBadge :size="150" class="cr-art__seal" />
                </div>
            </template>
        </PageHero>

        <section id="open-positions" class="cr-main bm-cream bm-sheet bm-section">
            <div class="bm-container">
                <template v-if="postings.length > 0">
                    <div class="cr-head">
                        <h2 class="bm-h2 cr-head__title"><MaskText :text="content.openPositions" /></h2>
                    </div>

                    <div class="cr-list">
                        <article
                            v-for="(posting, index) in postings"
                            :key="posting.id"
                            class="cr-role"
                            :class="{ 'is-open': activeFormId === posting.id, 'is-sent': submittedId === posting.id }"
                            data-reveal
                            :style="{ '--d': `${index * 0.08}s` }"
                        >
                            <header class="cr-role__head">
                                <span class="bm-numeral cr-role__num" aria-hidden="true">{{ pad(index + 1) }}</span>
                                <div class="cr-role__heading">
                                    <h3 class="cr-role__title">{{ posting.title }}</h3>
                                    <div class="cr-role__meta">
                                        <span v-if="posting.location" class="cr-meta">
                                            <Icon name="pin" :size="16" :stroke="1.7" />
                                            {{ posting.location }}
                                        </span>
                                        <span class="cr-meta">
                                            <Icon name="clock" :size="16" :stroke="1.7" />
                                            {{ employmentTypeLabel(posting.employment_type) }}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    v-if="submittedId !== posting.id"
                                    type="button"
                                    class="bm-btn bm-btn--wine cr-role__apply"
                                    :class="{ 'is-active': activeFormId === posting.id }"
                                    :aria-expanded="activeFormId === posting.id ? 'true' : 'false'"
                                    @click="toggleForm(posting.id)"
                                >
                                    <span>{{ activeFormId === posting.id ? content.close : content.apply }}</span>
                                    <span class="bm-btn__icon"><Icon :name="activeFormId === posting.id ? 'close' : 'arrow-right'" :stroke="2" /></span>
                                </button>
                            </header>

                            <div v-if="posting.description || posting.requirements" class="cr-role__body">
                                <div v-if="posting.description" class="cr-role__desc">{{ posting.description }}</div>

                                <div v-if="posting.requirements" class="cr-role__req">
                                    <h4 class="cr-role__req-title">{{ content.requirements }}</h4>
                                    <ul class="bm-list cr-role__req-list">
                                        <li v-for="(line, li) in requirementLines(posting.requirements)" :key="li">{{ line }}</li>
                                    </ul>
                                </div>
                            </div>

                            <Transition name="cr-unfold" mode="out-in">
                                <!-- Success message -->
                                <div v-if="submittedId === posting.id" class="cr-success" role="status">
                                    <div class="cr-success__icon">
                                        <Icon name="check" :size="30" :stroke="1.8" />
                                    </div>
                                    <h3 class="bm-h3">{{ content.successTitle }}</h3>
                                    <p>{{ content.successText }}</p>
                                </div>

                                <!-- Application form -->
                                <form
                                    v-else-if="activeFormId === posting.id"
                                    @submit.prevent="submitApplication(posting.id)"
                                    class="cr-apply"
                                >
                                    <div class="cr-apply__glow" aria-hidden="true"></div>
                                    <h4 class="cr-apply__title">{{ content.applyFor }}: <em>{{ posting.title }}</em></h4>

                                    <div class="cr-apply__grid">
                                        <div class="bm-field">
                                            <label class="bm-label" :for="`name-${posting.id}`">{{ content.name }} *</label>
                                            <input
                                                type="text"
                                                class="bm-input"
                                                :id="`name-${posting.id}`"
                                                v-model="form.name"
                                                required
                                                :placeholder="content.name"
                                            >
                                            <span v-if="fieldErrors.name" class="cr-field-error">{{ fieldErrors.name }}</span>
                                        </div>
                                        <div class="bm-field">
                                            <label class="bm-label" :for="`email-${posting.id}`">{{ content.email }} *</label>
                                            <input
                                                type="email"
                                                class="bm-input"
                                                :id="`email-${posting.id}`"
                                                v-model="form.email"
                                                required
                                                :placeholder="content.email"
                                            >
                                            <span v-if="fieldErrors.email" class="cr-field-error">{{ fieldErrors.email }}</span>
                                        </div>

                                        <div class="bm-field">
                                            <label class="bm-label" :for="`phone-${posting.id}`">{{ content.phone }}</label>
                                            <input
                                                type="tel"
                                                class="bm-input"
                                                :id="`phone-${posting.id}`"
                                                v-model="form.phone"
                                                :placeholder="content.phone"
                                            >
                                            <span v-if="fieldErrors.phone" class="cr-field-error">{{ fieldErrors.phone }}</span>
                                        </div>

                                        <div class="bm-field cr-apply__full">
                                            <label class="bm-label" :for="`message-${posting.id}`">{{ content.message }}</label>
                                            <textarea
                                                class="bm-input"
                                                :id="`message-${posting.id}`"
                                                v-model="form.message"
                                                rows="4"
                                                :placeholder="content.message"
                                            ></textarea>
                                            <span v-if="fieldErrors.message" class="cr-field-error">{{ fieldErrors.message }}</span>
                                        </div>

                                        <div class="bm-field cr-apply__full">
                                            <label class="bm-label" :for="`cv-${posting.id}`">{{ content.cv }} *</label>
                                            <label
                                                class="cr-drop"
                                                :class="{ 'has-file': cvFileName, 'is-drag': dragOver }"
                                                :for="`cv-${posting.id}`"
                                                @dragenter="dragOver = true"
                                                @dragleave="dragOver = false"
                                                @drop="dragOver = false"
                                            >
                                                <input
                                                    type="file"
                                                    :id="`cv-${posting.id}`"
                                                    @change="handleCvChange"
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                    class="cr-drop__input"
                                                >
                                                <span class="cr-drop__icon">
                                                    <Icon :name="cvFileName ? 'file' : 'upload'" :size="24" :stroke="1.6" />
                                                </span>
                                                <span class="cr-drop__text">
                                                    <span class="cr-drop__name">{{ cvFileName || content.chooseFile }}</span>
                                                    <small class="cr-drop__hint">{{ content.cvHint }}</small>
                                                </span>
                                                <span class="cr-drop__mark" aria-hidden="true">
                                                    <Icon :name="cvFileName ? 'check' : 'plus'" :size="18" :stroke="2" />
                                                </span>
                                            </label>
                                            <span v-if="fieldErrors.cv" class="cr-field-error">{{ fieldErrors.cv }}</span>
                                        </div>
                                    </div>

                                    <div v-if="errorMessage" class="cr-error" role="alert">
                                        <Icon name="info" :size="18" :stroke="1.8" />
                                        <span>{{ errorMessage }}</span>
                                    </div>

                                    <div class="cr-apply__actions">
                                        <button type="submit" class="bm-btn cr-submit" :disabled="isSubmitting">
                                            <span>{{ isSubmitting ? content.submitting : content.submit }}</span>
                                            <span class="bm-btn__icon">
                                                <Icon v-if="!isSubmitting" name="arrow-up-right" :stroke="2" />
                                                <span v-else class="cr-spinner" aria-hidden="true"></span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </Transition>
                        </article>
                    </div>
                </template>

                <div v-else class="cr-empty" data-reveal>
                    <div class="cr-empty__icon">
                        <Icon name="briefcase" :size="40" :stroke="1.3" />
                    </div>
                    <h2 class="bm-h2 cr-empty__title">{{ content.noPositionsTitle }}</h2>
                    <p class="bm-lead bm-muted">{{ content.noPositionsText }}</p>
                </div>
            </div>
        </section>

        <!-- Crossing ribbons (decorative) -->
        <div class="cr-ribbons" aria-hidden="true">
            <Marquee :items="ribbonItems" variant="wine" :tilt="-2.4" :duration="46" />
            <Marquee :items="ribbonItems" variant="outline" :tilt="1.8" :duration="54" reverse />
        </div>
    </SiteLayout>
</template>

<style scoped>
/* ---------- Hero visual ---------- */
.cr-art {
    position: relative;
    width: min(100%, 420px);
    margin-left: auto;
    margin-right: clamp(0px, 3vw, 40px);
}
.cr-art__arch {
    position: relative;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 18px;
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px var(--radius-md) var(--radius-md);
    border: 1px solid rgba(217, 185, 149, 0.28);
    overflow: hidden;
    background:
        radial-gradient(60% 50% at 50% 45%, rgba(217, 185, 149, 0.2) 0%, transparent 70%),
        radial-gradient(90% 60% at 50% 100%, rgba(140, 42, 72, 0.65) 0%, transparent 70%),
        linear-gradient(180deg, var(--wine-850) 0%, var(--wine-800) 100%);
}
.cr-art__line {
    position: absolute;
    border: 1px solid rgba(217, 185, 149, 0.16);
    border-radius: 999px 999px 10px 10px;
    pointer-events: none;
}
.cr-art__line--1 { inset: 22px; }
.cr-art__line--2 { inset: 48px; border-color: rgba(217, 185, 149, 0.1); }
.cr-art__count {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(7rem, 12vw, 11rem);
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--gold-300);
}
.cr-art__label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
    text-align: center;
    padding-inline: 60px;
}
.cr-art__icon {
    display: grid;
    place-items: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid rgba(217, 185, 149, 0.35);
    color: var(--gold-300);
}
.cr-art__seal {
    position: absolute;
    left: -56px;
    bottom: 36px;
}

/* ---------- Section head ---------- */
.cr-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    padding-bottom: clamp(28px, 3.5vw, 44px);
    margin-bottom: clamp(36px, 4.5vw, 64px);
    border-bottom: 1px solid var(--line-light);
}

/* ---------- Roles ---------- */
.cr-list { display: grid; gap: clamp(20px, 2.4vw, 32px); }

.cr-role {
    position: relative;
    padding: clamp(26px, 3.6vw, 52px);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-light);
    background: #fffaf5;
    box-shadow: 0 40px 80px -56px rgba(82, 26, 47, 0.4);
    transition: border-color 0.5s var(--ease-out), box-shadow 0.6s var(--ease-out);
}
.cr-role:hover,
.cr-role.is-open {
    border-color: rgba(110, 32, 57, 0.3);
    box-shadow: 0 50px 90px -50px rgba(82, 26, 47, 0.5);
}

.cr-role__head {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: clamp(18px, 2.6vw, 40px);
    align-items: center;
}
.cr-role__num { font-size: clamp(3.2rem, 5.4vw, 5rem); }
.cr-role__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.7rem, 3vw, 2.75rem);
    line-height: 1.1;
    letter-spacing: -0.015em;
    color: var(--ink);
}
.cr-role__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
}
.cr-meta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px 7px 12px;
    border-radius: 999px;
    border: 1px solid var(--line-light);
    background: var(--cream-100);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--wine-700);
    line-height: 1.3;
}
.cr-meta svg { flex: none; color: var(--wine-600); }

.cr-role__apply.is-active { --btn-bg: var(--wine-800); --btn-fill: var(--wine-600); }

.cr-role__body {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: clamp(32px, 5vw, 80px);
    margin-top: clamp(28px, 3.4vw, 44px);
    padding-top: clamp(28px, 3.4vw, 44px);
    border-top: 1px solid var(--line-light);
}
.cr-role__body > :only-child { grid-column: 1 / -1; max-width: 860px; }
.cr-role__desc {
    color: var(--ink-soft);
    font-size: 1.05rem;
    line-height: 1.85;
    white-space: pre-line;
}
.cr-role__req-title {
    font-family: var(--font-sans);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--wine-600);
    margin-bottom: 20px;
}
.cr-role__req-list { color: var(--ink); gap: 0; }
.cr-role__req-list li {
    padding-block: 12px;
    border-bottom: 1px solid var(--line-light);
    font-size: 0.98rem;
}
.cr-role__req-list li:first-child { padding-top: 0; }
.cr-role__req-list li:first-child::before { top: 0.62em; }
.cr-role__req-list li:first-child::after { top: calc(0.62em - 2px); }
.cr-role__req-list li:not(:first-child)::before { top: calc(12px + 0.62em); }
.cr-role__req-list li:not(:first-child)::after { top: calc(12px + 0.62em - 2px); }
.cr-role__req-list li:last-child { border-bottom: 0; }

/* ---------- Application form (refined dark panel) ---------- */
.cr-apply {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    margin-top: clamp(28px, 3.4vw, 44px);
    padding: clamp(26px, 3.6vw, 52px);
    border-radius: calc(var(--radius-lg) - 6px);
    background:
        radial-gradient(90% 80% at 100% 0%, rgba(140, 42, 72, 0.5) 0%, transparent 60%),
        linear-gradient(160deg, var(--wine-800) 0%, var(--wine-900) 100%);
    color: var(--on-dark);
    display: grid;
    gap: 26px;
}
.cr-apply__glow {
    position: absolute;
    width: 420px;
    height: 420px;
    left: -140px;
    bottom: -220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217, 185, 149, 0.16), transparent 65%);
    z-index: -1;
    pointer-events: none;
}
.cr-apply__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    line-height: 1.2;
}
.cr-apply__title em { color: var(--gold-300); }
.cr-apply__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
}
.cr-apply__grid > .bm-field { align-content: start; }
.cr-apply__full { grid-column: 1 / -1; }

.cr-apply .bm-input {
    border-color: var(--line-dark);
    background: rgba(246, 238, 230, 0.05);
    color: var(--on-dark);
}
.cr-apply .bm-input::placeholder { color: var(--on-dark-faint); }
.cr-apply .bm-input:focus {
    border-color: var(--gold-300);
    background: rgba(246, 238, 230, 0.08);
    box-shadow: 0 0 0 4px rgba(217, 185, 149, 0.12);
}
.cr-apply textarea.bm-input { min-height: 140px; }

.cr-field-error { color: #f3b5b5; font-size: 0.85rem; line-height: 1.4; }

/* File drop zone — the real <input type=file> covers the whole zone, so
   clicking, keyboard and native drag-and-drop all work. */
.cr-drop {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 26px 26px;
    border-radius: 20px;
    border: 1px dashed rgba(217, 185, 149, 0.45);
    background: rgba(22, 10, 14, 0.25);
    cursor: pointer;
    transition: border-color 0.4s var(--ease-out), background 0.4s var(--ease-out), box-shadow 0.4s;
}
.cr-drop:hover,
.cr-drop.is-drag {
    border-color: var(--gold-300);
    background: rgba(217, 185, 149, 0.08);
}
.cr-drop.is-drag { border-style: solid; box-shadow: 0 0 0 6px rgba(217, 185, 149, 0.1); }
.cr-drop:focus-within { border-color: var(--gold-300); box-shadow: 0 0 0 4px rgba(217, 185, 149, 0.16); }
.cr-drop.has-file { border-style: solid; border-color: rgba(217, 185, 149, 0.6); }
.cr-drop__input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
}
.cr-drop__icon {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    flex: none;
    background: var(--beige-200);
    color: var(--wine-700);
    transition: transform 0.6s var(--ease-out);
}
.cr-drop:hover .cr-drop__icon,
.cr-drop.is-drag .cr-drop__icon { transform: translateY(-4px); }
.cr-drop__text { display: grid; gap: 4px; min-width: 0; flex: 1; }
.cr-drop__name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    overflow-wrap: anywhere;
    font-family: var(--font-display);
    font-size: 1.2rem;
    line-height: 1.3;
}
.cr-drop__hint { color: var(--on-dark-faint); font-size: 0.82rem; letter-spacing: 0.02em; }
.cr-drop__mark {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    color: var(--gold-300);
    flex: none;
}
.cr-drop.has-file .cr-drop__mark { background: var(--gold-300); border-color: var(--gold-300); color: var(--wine-800); }

.cr-error {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(243, 181, 181, 0.35);
    background: rgba(243, 181, 181, 0.08);
    color: #f6c6c6;
    font-size: 0.94rem;
    line-height: 1.5;
}
.cr-error svg { flex: none; margin-top: 1px; }

.cr-submit { min-width: 260px; justify-content: space-between; }
.cr-spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(232, 213, 196, 0.3);
    border-top-color: var(--beige-200);
    animation: cr-spin 0.8s linear infinite;
}
@keyframes cr-spin { to { transform: rotate(360deg); } }

/* ---------- Success ---------- */
.cr-success {
    display: grid;
    justify-items: center;
    gap: 12px;
    text-align: center;
    margin-top: clamp(28px, 3.4vw, 44px);
    padding: clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px);
    border-radius: calc(var(--radius-lg) - 6px);
    background:
        radial-gradient(70% 90% at 50% 0%, rgba(140, 42, 72, 0.45) 0%, transparent 65%),
        linear-gradient(160deg, var(--wine-800) 0%, var(--wine-900) 100%);
    color: var(--on-dark);
}
.cr-success__icon {
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: var(--beige-200);
    color: var(--wine-800);
    margin-bottom: 8px;
    box-shadow: 0 0 0 12px rgba(232, 213, 196, 0.08);
}
.cr-success p { color: var(--on-dark-muted); max-width: 540px; }

.cr-unfold-enter-active { transition: opacity 0.6s var(--ease-out), transform 0.8s var(--ease-out), clip-path 0.9s var(--ease-out); }
.cr-unfold-leave-active { transition: opacity 0.3s ease, transform 0.4s ease; }
.cr-unfold-enter-from { opacity: 0; transform: translateY(24px); clip-path: inset(0 0 100% 0 round 22px); }
.cr-unfold-enter-to { clip-path: inset(0 0 0 0 round 22px); }
.cr-unfold-leave-to { opacity: 0; transform: translateY(-10px); }

/* ---------- Empty state ---------- */
.cr-empty {
    display: grid;
    justify-items: center;
    gap: 22px;
    max-width: 720px;
    margin-inline: auto;
    text-align: center;
}
.cr-empty__icon {
    display: grid;
    place-items: center;
    width: 132px;
    height: 160px;
    border-radius: 999px 999px 18px 18px;
    background: linear-gradient(170deg, var(--wine-700), var(--wine-900));
    color: var(--gold-300);
    box-shadow: 0 40px 80px -40px rgba(82, 26, 47, 0.6);
    margin-bottom: 8px;
}
.cr-empty__title { color: var(--ink); }

/* ---------- Ribbons ---------- */
.cr-ribbons {
    position: relative;
    display: grid;
    background: var(--wine-950);
    padding: clamp(64px, 8vw, 116px) 0 clamp(40px, 5vw, 72px);
    overflow: hidden;
}
.cr-ribbons > * { grid-area: 1 / 1; align-self: center; }

/* ---------- Responsive ---------- */
@media (max-width: 1199.98px) {
    .cr-apply__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 991.98px) {
    .cr-hero :deep(.bm-phero__aside) { display: none; }
    .cr-role__head { grid-template-columns: auto minmax(0, 1fr); }
    .cr-role__apply { grid-column: 1 / -1; justify-self: start; }
    .cr-role__body { grid-template-columns: 1fr; }
}

@media (max-width: 575.98px) {
    .cr-role__head { grid-template-columns: 1fr; gap: 12px; }
    .cr-role__num { font-size: 2.8rem; }
    .cr-role__apply { width: 100%; justify-content: space-between; }
    .cr-apply { margin-inline: -10px; padding: 24px 18px; }
    .cr-apply__grid { grid-template-columns: 1fr; }
    .cr-drop { padding: 18px; gap: 14px; }
    .cr-drop__icon { width: 50px; height: 50px; }
    .cr-drop__mark { display: none; }
    .cr-submit { width: 100%; min-width: 0; }
}
</style>
