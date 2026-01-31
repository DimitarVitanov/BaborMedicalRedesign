<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const email = ref('');
const isLoading = ref(false);
const isSubscribed = ref(false);
const errorMessage = ref('');

const content = computed(() => ({
    badge: locale.value === 'mk' ? 'БИЛТЕН' : 'NEWSLETTER',
    title: locale.value === 'mk' ? 'Останете во тек' : 'Stay Updated',
    subtitle: locale.value === 'mk' 
        ? 'Претплатете се на нашиот билтен за најновите понуди, третмани и совети за убавина.'
        : 'Subscribe to our newsletter for the latest offers, treatments and beauty tips.',
    placeholder: locale.value === 'mk' ? 'Вашата е-пошта' : 'Your email address',
    button: locale.value === 'mk' ? 'Претплати се' : 'Subscribe',
    successTitle: locale.value === 'mk' ? 'Успешно!' : 'Success!',
    successMessage: locale.value === 'mk' 
        ? 'Ви благодариме за претплатата. Ќе ве известуваме за најновите понуди!'
        : 'Thank you for subscribing. We will keep you updated with the latest offers!',
    errorInvalid: locale.value === 'mk' ? 'Внесете валидна е-пошта' : 'Please enter a valid email',
    errorAlready: locale.value === 'mk' ? 'Оваа е-пошта е веќе регистрирана' : 'This email is already subscribed',
    errorGeneral: locale.value === 'mk' ? 'Настана грешка. Обидете се повторно.' : 'An error occurred. Please try again.',
}));

const subscribe = async () => {
    if (!email.value || !email.value.includes('@')) {
        errorMessage.value = content.value.errorInvalid;
        return;
    }
    
    isLoading.value = true;
    errorMessage.value = '';
    
    try {
        const response = await fetch('/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                locale: locale.value,
            }),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            isSubscribed.value = true;
            email.value = '';
        } else {
            if (data.message === 'already_subscribed') {
                errorMessage.value = content.value.errorAlready;
            } else if (data.message === 'invalid_email') {
                errorMessage.value = content.value.errorInvalid;
            } else {
                errorMessage.value = content.value.errorGeneral;
            }
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        errorMessage.value = content.value.errorGeneral;
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <section class="newsletter-section">
        <div class="container">
            <div class="newsletter-wrapper fade-in-up">
                <div class="newsletter-content">
                    <span class="section-badge">{{ content.badge }}</span>
                    <h2 class="newsletter-title">{{ content.title }}</h2>
                    <p class="newsletter-subtitle">{{ content.subtitle }}</p>
                </div>
                
                <div class="newsletter-form-wrapper">
                    <div v-if="isSubscribed" class="success-message">
                        <div class="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <h3>{{ content.successTitle }}</h3>
                        <p>{{ content.successMessage }}</p>
                    </div>
                    
                    <form v-else @submit.prevent="subscribe" class="newsletter-form">
                        <div class="form-group">
                            <input 
                                type="email" 
                                v-model="email"
                                :placeholder="content.placeholder"
                                :disabled="isLoading"
                                required
                            >
                            <button type="submit" class="btn-subscribe" :disabled="isLoading">
                                <span v-if="isLoading" class="spinner"></span>
                                <span v-else>{{ content.button }}</span>
                                <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.newsletter-section {
    padding: 100px 0;
}

.newsletter-wrapper {
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.15), rgba(201, 168, 124, 0.05));
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 32px;
    padding: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.3), rgba(201, 168, 124, 0.15));
    border: 1px solid rgba(201, 168, 124, 0.4);
    border-radius: 30px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.newsletter-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.2;
}

.newsletter-subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin: 0;
}

.newsletter-form {
    width: 100%;
}

.form-group {
    display: flex;
    gap: 12px;
}

.form-group input {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50px;
    padding: 16px 24px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus {
    outline: none;
    border-color: #c9a87c;
    background: rgba(201, 168, 124, 0.1);
}

.btn-subscribe {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #c9a87c 0%, #b8956a 100%);
    color: #1e2d3d;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.btn-subscribe:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
}

.btn-subscribe:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(30, 45, 61, 0.3);
    border-top-color: #1e2d3d;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.error-message {
    color: #ff6b6b;
    font-size: 0.9rem;
    margin-top: 12px;
    margin-left: 24px;
}

.success-message {
    text-align: center;
    padding: 20px;
}

.success-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.3), rgba(201, 168, 124, 0.15));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a87c;
}

.success-icon svg {
    width: 35px;
    height: 35px;
}

.success-message h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 10px;
}

.success-message p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0;
}

@media (max-width: 991.98px) {
    .newsletter-wrapper {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 40px;
        text-align: center;
    }
    
    .newsletter-title {
        font-size: 2rem;
    }
    
    .form-group {
        flex-direction: column;
    }
    
    .btn-subscribe {
        justify-content: center;
    }
}

@media (max-width: 575.98px) {
    .newsletter-section {
        padding: 60px 0;
    }
    
    .newsletter-wrapper {
        padding: 30px 20px;
        border-radius: 24px;
    }
    
    .newsletter-title {
        font-size: 1.5rem;
    }
    
    .form-group input {
        padding: 14px 20px;
    }
    
    .btn-subscribe {
        padding: 14px 24px;
    }
}
</style>
