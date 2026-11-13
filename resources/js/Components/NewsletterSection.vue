<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import MaskText from '@/Components/Site/MaskText.vue';
import Icon from '@/Components/Site/Icon.vue';


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
    <section class="newsletter-section bm-news bm-wine bm-grain">
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="bm-container bm-news__inner">
            <div class="newsletter-content bm-news__copy">
                <span class="section-badge bm-eyebrow" data-reveal>{{ content.badge }}</span>
                <h2 class="newsletter-title bm-h1 bm-news__title"><MaskText :text="content.title" /></h2>
                <p class="newsletter-subtitle bm-lead bm-muted bm-news__sub" data-reveal style="--d: 0.2s">{{ content.subtitle }}</p>
            </div>

            <div class="newsletter-form-wrapper bm-news__form-wrap" data-reveal style="--d: 0.3s">
                <div v-if="isSubscribed" class="success-message bm-news__success">
                    <div class="success-icon bm-news__success-icon">
                        <Icon name="check" :size="26" :stroke="2" />
                    </div>
                    <h3 class="bm-h3">{{ content.successTitle }}</h3>
                    <p class="bm-muted">{{ content.successMessage }}</p>
                </div>

                <form v-else @submit.prevent="subscribe" class="newsletter-form bm-news__form">
                    <div class="form-group bm-news__field">
                        <input
                            type="email"
                            v-model="email"
                            :placeholder="content.placeholder"
                            :disabled="isLoading"
                            :aria-label="content.placeholder"
                            required
                        >
                        <button type="submit" class="btn-subscribe bm-btn bm-news__submit" :disabled="isLoading">
                            <span v-if="isLoading" class="spinner bm-news__spinner"></span>
                            <span v-else>{{ content.button }}</span>
                            <span v-if="!isLoading" class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                        </button>
                    </div>
                    <p v-if="errorMessage" class="error-message bm-news__error">{{ errorMessage }}</p>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bm-news {
    position: relative;
    overflow: hidden;
    padding-block: clamp(84px, 10vw, 150px);
}
.bm-news__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: end;
}
.bm-news__title { margin-top: 22px; }
.bm-news__sub { margin-top: 24px; max-width: 520px; }

.bm-news__field {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 8px 8px 28px;
    border-radius: 999px;
    border: 1px solid rgba(246, 238, 230, 0.28);
    background: rgba(22, 10, 14, 0.25);
    transition: border-color 0.4s, background 0.4s;
}
.bm-news__field:focus-within { border-color: var(--gold-300); background: rgba(22, 10, 14, 0.4); }
.bm-news__field input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--on-dark);
    font-family: var(--font-sans);
    font-size: 1.05rem;
    padding: 12px 0;
    outline: none;
}
.bm-news__field input::placeholder { color: var(--on-dark-faint); }
.bm-news__submit { flex: none; }
.bm-news__spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(56, 19, 34, 0.25);
    border-top-color: var(--wine-800);
    border-radius: 50%;
    animation: bm-spin 0.8s linear infinite;
    margin-right: 18px;
}
@keyframes bm-spin { to { transform: rotate(360deg); } }
.bm-news__error { margin-top: 14px; padding-left: 28px; color: #f3b5b5; font-size: 0.92rem; }

.bm-news__success {
    display: grid;
    gap: 10px;
    padding: 32px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-dark);
    background: rgba(22, 10, 14, 0.3);
}
.bm-news__success-icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--beige-200);
    color: var(--wine-800);
    margin-bottom: 6px;
}

@media (max-width: 991.98px) {
    .bm-news__inner { grid-template-columns: 1fr; align-items: start; }
}
@media (max-width: 575.98px) {
    .bm-news__field { flex-direction: column; align-items: stretch; padding: 8px; border-radius: 28px; }
    .bm-news__field input { padding: 14px 18px; }
    .bm-news__submit { justify-content: space-between; }
}
</style>
