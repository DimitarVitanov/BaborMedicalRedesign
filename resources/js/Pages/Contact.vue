<script setup>
import { Head, usePage, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

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
        <meta property="og:image" content="/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="/logo.webp" />
        <link rel="canonical" href="/contact" />
    </Head>

    <div class="main-wrapper">
        <Navbar />
        
        <section class="contact-hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <span class="section-badge">{{ content.badge }}</span>
                    <h1 class="hero-title">{{ content.title }}</h1>
                    <p class="hero-subtitle">{{ content.subtitle }}</p>
                </div>
            </div>
        </section>

        <section class="contact-section">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-form-wrapper fade-in-left">
                        <h2 class="form-title">{{ content.formTitle }}</h2>
                        
                        <div v-if="submitted" class="success-message">
                            <div class="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <h3>{{ content.successTitle }}</h3>
                            <p>{{ content.successText }}</p>
                        </div>
                        
                        <form v-else @submit.prevent="submitForm" class="contact-form">
                            <div class="form-group">
                                <label :for="'name'">{{ content.name }}</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    v-model="form.name" 
                                    required
                                    :placeholder="content.name"
                                >
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label :for="'email'">{{ content.email }}</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="form.email" 
                                        required
                                        :placeholder="content.email"
                                    >
                                </div>
                                <div class="form-group">
                                    <label :for="'phone'">{{ content.phone }}</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        v-model="form.phone"
                                        :placeholder="content.phone"
                                    >
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label :for="'service'">{{ content.service }}</label>
                                <select id="service" v-model="form.service">
                                    <option v-for="service in services" :key="service.value" :value="service.value">
                                        {{ service.label }}
                                    </option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label :for="'message'">{{ content.message }}</label>
                                <textarea 
                                    id="message" 
                                    v-model="form.message" 
                                    rows="5"
                                    required
                                    :placeholder="content.message"
                                ></textarea>
                            </div>
                            
                            <div v-if="errorMessage" class="error-message">
                                {{ errorMessage }}
                            </div>
                            
                            <button type="submit" class="btn-cta submit-btn" :disabled="isSubmitting">
                                {{ isSubmitting ? (locale === 'mk' ? 'Се испраќа...' : 'Sending...') : content.submit }}
                                <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div class="contact-info-wrapper fade-in-right">
                        <h2 class="info-title">{{ content.infoTitle }}</h2>
                        
                        <!-- Loop through locations -->
                        <div v-for="location in locations" :key="location.id" class="location-card">
                            <h3 class="location-name">{{ location.name }}</h3>
                            
                            <div class="info-cards">
                                <div class="info-card">
                                    <div class="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <div class="info-content">
                                        <h4>{{ locale === 'mk' ? 'Адреса' : 'Address' }}</h4>
                                        <p>{{ location.address }}</p>
                                    </div>
                                </div>
                                
                                <div v-if="location.phone" class="info-card">
                                    <div class="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                    </div>
                                    <div class="info-content">
                                        <h4>{{ locale === 'mk' ? 'Телефон' : 'Phone' }}</h4>
                                        <p><a :href="`tel:${location.phone}`">{{ location.phone }}</a></p>
                                    </div>
                                </div>
                                
                                <div v-if="location.email" class="info-card">
                                    <div class="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                            <polyline points="22,6 12,13 2,6"/>
                                        </svg>
                                    </div>
                                    <div class="info-content">
                                        <h4>{{ locale === 'mk' ? 'Е-пошта' : 'Email' }}</h4>
                                        <p><a :href="`mailto:${location.email}`">{{ location.email }}</a></p>
                                    </div>
                                </div>
                                
                                <div v-if="location.show_working_hours" class="info-card">
                                    <div class="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                    </div>
                                    <div class="info-content">
                                        <h4>{{ content.workingHoursLabel }}</h4>
                                        <div class="hours-list">
                                            <div class="hour-item">
                                                <span class="day">{{ content.mondayFriday }}</span>
                                                <span class="time">{{ location.working_hours_weekdays }}</span>
                                            </div>
                                            <div class="hour-item">
                                                <span class="day">{{ content.saturday }}</span>
                                                <span class="time">{{ location.working_hours_saturday }}</span>
                                            </div>
                                            <div class="hour-item">
                                                <span class="day">{{ content.sunday }}</span>
                                                <span class="time">{{ location.working_hours_sunday }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="social-section">
                            <h4>{{ content.followUs }}</h4>
                            <div class="social-links">
                                <a href="https://facebook.com/babormedical" target="_blank" rel="noopener" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/babormedical" target="_blank" rel="noopener" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                                        <circle cx="12" cy="12" r="4"/>
                                        <circle cx="18" cy="6" r="1"/>
                                    </svg>
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
                    </div>
                </div>
            </div>
        </section>

        <section class="map-section fade-in-up">
            <div class="container">
                <div class="map-wrapper">
                    <iframe 
                        src="https://maps.google.com/maps?q=East+Gate+Mall,+Skopje&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="400" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.contact-hero {
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

.contact-section {
    padding: 60px 0 100px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: start;
}

.contact-form-wrapper,
.contact-info-wrapper {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 40px;
}

.form-title,
.info-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 30px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
.form-group select,
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
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #c9a87c;
    background: rgba(201, 168, 124, 0.1);
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23c9a87c' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
}

.form-group select option {
    background: #1e2d3d;
    color: #fff;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
}

.success-message {
    text-align: center;
    padding: 40px 20px;
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
}

.location-card {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.location-card:last-of-type {
    border-bottom: none;
    margin-bottom: 20px;
    padding-bottom: 0;
}

.location-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #c9a87c;
    margin-bottom: 20px;
}

.info-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 0;
}

.info-content a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
}

.info-content a:hover {
    color: #c9a87c;
}

.info-card {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.info-icon {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a87c;
}

.info-icon svg {
    width: 22px;
    height: 22px;
}

.info-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
}

.info-content p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
}

.hours-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hour-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}

.hour-item .day {
    color: rgba(255, 255, 255, 0.6);
}

.hour-item .time {
    color: #c9a87c;
    font-weight: 500;
}

.social-section h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
}

.social-links {
    display: flex;
    gap: 12px;
}

.social-links a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: #c9a87c;
    border-color: #c9a87c;
    color: #1e2d3d;
}

.social-links svg {
    width: 20px;
    height: 20px;
}

.error-message {
    background: rgba(220, 53, 69, 0.15);
    border: 1px solid rgba(220, 53, 69, 0.3);
    color: #ff6b6b;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 0.9rem;
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.map-section {
    padding: 0 0 100px;
}

.map-wrapper {
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.map-wrapper iframe {
    display: block;
    filter: grayscale(100%) invert(92%) contrast(83%);
}

@media (max-width: 991.98px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .hero-title {
        font-size: 2.2rem;
    }
}

@media (max-width: 575.98px) {
    .contact-hero {
        padding: 60px 0 40px;
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .contact-section {
        padding: 40px 0 60px;
    }
    
    .contact-form-wrapper,
    .contact-info-wrapper {
        padding: 24px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .map-section {
        padding: 0 0 60px;
    }
}
</style>
