<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed, ref, reactive } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

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

    <div class="main-wrapper">
        <Navbar />

        <section class="careers-hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <span class="section-badge">{{ content.badge }}</span>
                    <h1 class="hero-title">{{ content.title }}</h1>
                    <p class="hero-subtitle">{{ content.subtitle }}</p>
                </div>
            </div>
        </section>

        <section class="careers-section">
            <div class="container">
                <template v-if="postings.length > 0">
                    <h2 class="section-title fade-in-up">{{ content.openPositions }}</h2>

                    <div class="postings-list">
                        <div
                            v-for="posting in postings"
                            :key="posting.id"
                            class="posting-card fade-in-up"
                        >
                            <div class="posting-header">
                                <div class="posting-info">
                                    <h3 class="posting-title">{{ posting.title }}</h3>
                                    <div class="posting-meta">
                                        <span v-if="posting.location" class="meta-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                            {{ posting.location }}
                                        </span>
                                        <span class="meta-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"/>
                                                <polyline points="12 6 12 12 16 14"/>
                                            </svg>
                                            {{ employmentTypeLabel(posting.employment_type) }}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    v-if="submittedId !== posting.id"
                                    class="btn-cta apply-btn"
                                    @click="toggleForm(posting.id)"
                                >
                                    {{ activeFormId === posting.id ? content.close : content.apply }}
                                </button>
                            </div>

                            <div v-if="posting.description" class="posting-description">{{ posting.description }}</div>

                            <div v-if="posting.requirements" class="posting-requirements">
                                <h4>{{ content.requirements }}</h4>
                                <div class="requirements-text">{{ posting.requirements }}</div>
                            </div>

                            <!-- Success message -->
                            <div v-if="submittedId === posting.id" class="success-message">
                                <div class="success-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                </div>
                                <h3>{{ content.successTitle }}</h3>
                                <p>{{ content.successText }}</p>
                            </div>

                            <!-- Application form -->
                            <form
                                v-else-if="activeFormId === posting.id"
                                @submit.prevent="submitApplication(posting.id)"
                                class="application-form"
                            >
                                <h4 class="form-heading">{{ content.applyFor }}: {{ posting.title }}</h4>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label :for="`name-${posting.id}`">{{ content.name }} *</label>
                                        <input
                                            type="text"
                                            :id="`name-${posting.id}`"
                                            v-model="form.name"
                                            required
                                            :placeholder="content.name"
                                        >
                                        <span v-if="fieldErrors.name" class="field-error">{{ fieldErrors.name }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label :for="`email-${posting.id}`">{{ content.email }} *</label>
                                        <input
                                            type="email"
                                            :id="`email-${posting.id}`"
                                            v-model="form.email"
                                            required
                                            :placeholder="content.email"
                                        >
                                        <span v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</span>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label :for="`phone-${posting.id}`">{{ content.phone }}</label>
                                    <input
                                        type="tel"
                                        :id="`phone-${posting.id}`"
                                        v-model="form.phone"
                                        :placeholder="content.phone"
                                    >
                                    <span v-if="fieldErrors.phone" class="field-error">{{ fieldErrors.phone }}</span>
                                </div>

                                <div class="form-group">
                                    <label :for="`message-${posting.id}`">{{ content.message }}</label>
                                    <textarea
                                        :id="`message-${posting.id}`"
                                        v-model="form.message"
                                        rows="4"
                                        :placeholder="content.message"
                                    ></textarea>
                                    <span v-if="fieldErrors.message" class="field-error">{{ fieldErrors.message }}</span>
                                </div>

                                <div class="form-group">
                                    <label :for="`cv-${posting.id}`">{{ content.cv }} *</label>
                                    <label class="file-input-wrapper" :for="`cv-${posting.id}`">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                                        </svg>
                                        <span>{{ cvFileName || content.chooseFile }}</span>
                                    </label>
                                    <input
                                        type="file"
                                        :id="`cv-${posting.id}`"
                                        @change="handleCvChange"
                                        accept=".pdf,.doc,.docx"
                                        required
                                        class="file-input-hidden"
                                    >
                                    <small class="file-hint">{{ content.cvHint }}</small>
                                    <span v-if="fieldErrors.cv" class="field-error">{{ fieldErrors.cv }}</span>
                                </div>

                                <div v-if="errorMessage" class="error-message">
                                    {{ errorMessage }}
                                </div>

                                <button type="submit" class="btn-cta submit-btn" :disabled="isSubmitting">
                                    {{ isSubmitting ? content.submitting : content.submit }}
                                    <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </template>

                <div v-else class="no-positions fade-in-up">
                    <div class="no-positions-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                    </div>
                    <h2>{{ content.noPositionsTitle }}</h2>
                    <p>{{ content.noPositionsText }}</p>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.careers-hero {
    padding: 80px 0 60px;
    text-align: center;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
}

.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 30px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 24px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
}

.careers-section {
    padding: 40px 0 100px;
}

.section-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 30px;
}

.postings-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.posting-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 32px 40px;
    transition: border-color 0.3s ease;
}

.posting-card:hover {
    border-color: rgba(201, 168, 124, 0.3);
}

.posting-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
}

.posting-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
}

.posting-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.meta-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #c9a87c;
    font-size: 0.9rem;
}

.meta-item svg {
    width: 16px;
    height: 16px;
}

.apply-btn {
    flex-shrink: 0;
}

.posting-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-top: 20px;
    white-space: pre-line;
}

.posting-requirements {
    margin-top: 20px;
}

.posting-requirements h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
}

.requirements-text {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    white-space: pre-line;
}

.application-form {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #c9a87c;
    margin-bottom: 4px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 14px 18px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #c9a87c;
    background: rgba(201, 168, 124, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.file-input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px dashed rgba(201, 168, 124, 0.4);
    border-radius: 12px;
    padding: 14px 18px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-input-wrapper:hover {
    border-color: #c9a87c;
    background: rgba(201, 168, 124, 0.1);
}

.file-input-wrapper svg {
    width: 18px;
    height: 18px;
    color: #c9a87c;
    flex-shrink: 0;
}

.file-input-wrapper span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.file-input-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
}

.file-hint {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
}

.field-error {
    color: #ff6b6b;
    font-size: 0.85rem;
}

.error-message {
    background: rgba(220, 53, 69, 0.15);
    border: 1px solid rgba(220, 53, 69, 0.3);
    color: #ff6b6b;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.9rem;
}

.submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    align-self: flex-start;
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.success-message {
    text-align: center;
    padding: 40px 20px;
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.success-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a87c;
}

.success-icon svg {
    width: 40px;
    height: 40px;
}

.success-message h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 12px;
}

.success-message p {
    color: rgba(255, 255, 255, 0.7);
    max-width: 500px;
    margin: 0 auto;
}

.no-positions {
    text-align: center;
    padding: 60px 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    max-width: 600px;
    margin: 0 auto;
}

.no-positions-icon {
    width: 90px;
    height: 90px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a87c;
}

.no-positions-icon svg {
    width: 44px;
    height: 44px;
}

.no-positions h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 12px;
}

.no-positions p {
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 991.98px) {
    .hero-title {
        font-size: 2.2rem;
    }
}

@media (max-width: 575.98px) {
    .careers-hero {
        padding: 60px 0 40px;
    }

    .hero-title {
        font-size: 1.8rem;
    }

    .careers-section {
        padding: 20px 0 60px;
    }

    .posting-card {
        padding: 24px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .submit-btn {
        align-self: stretch;
    }
}
</style>
