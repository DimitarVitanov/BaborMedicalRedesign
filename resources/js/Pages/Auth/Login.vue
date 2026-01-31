<script setup>
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Admin Login - Babor Medical" />

    <div class="login-wrapper">
        <div class="login-container">
            <div class="login-card">
                <div class="login-header">
                    <img src="/logo.webp" alt="Babor Medical" class="login-logo" />
                    <h1 class="login-title">Admin Panel</h1>
                    <p class="login-subtitle">Sign in to manage your website</p>
                </div>

                <div v-if="status" class="alert alert-success mb-4">
                    {{ status }}
                </div>

                <form @submit.prevent="submit" class="login-form">
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <div class="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                            <input 
                                id="email"
                                type="email"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.email }"
                                v-model="form.email"
                                placeholder="admin@example.com"
                                required
                                autofocus
                            />
                        </div>
                        <div v-if="form.errors.email" class="invalid-feedback d-block">
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <div class="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                            <input 
                                id="password"
                                type="password"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.password }"
                                v-model="form.password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div v-if="form.errors.password" class="invalid-feedback d-block">
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <div class="form-group-inline">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="remember"
                                v-model="form.remember"
                            />
                            <label class="form-check-label" for="remember">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        class="btn btn-login"
                        :disabled="form.processing"
                    >
                        <span v-if="form.processing">
                            <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                            </svg>
                            Signing in...
                        </span>
                        <span v-else>
                            Sign In
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </span>
                    </button>
                </form>

                <div class="login-footer">
                    <a href="/" class="back-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        Back to Website
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-wrapper {
    min-height: 100vh;
    background: linear-gradient(160deg, #1e2d3d, #3D4F5F);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.login-container {
    width: 100%;
    max-width: 440px;
}

.login-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.login-header {
    text-align: center;
    margin-bottom: 32px;
}

.login-logo {
    height: 120px;
    width: auto;
    margin-bottom: 24px;
}

.login-title {
    color: #fff;
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.login-subtitle {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    margin: 0;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    font-weight: 500;
}

.input-wrapper {
    position: relative;
}

.input-wrapper svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.4);
    pointer-events: none;
}

.input-wrapper .form-control {
    padding-left: 48px;
}

.form-control {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    color: #fff;
    padding: 14px 16px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-control::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-control:focus {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--primary-light);
    box-shadow: 0 0 0 3px rgba(232, 213, 196, 0.15);
    outline: none;
}

.form-control.is-invalid {
    border-color: #dc3545;
}

.invalid-feedback {
    color: #f87171;
    font-size: 0.85rem;
}

.form-group-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-check {
    display: flex;
    align-items: center;
    gap: 8px;
}

.form-check-input {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    cursor: pointer;
}

.form-check-input:checked {
    background: var(--primary-light);
    border-color: var(--primary-light);
}

.form-check-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    cursor: pointer;
}

.btn-login {
    background: linear-gradient(135deg, var(--primary-light) 0%, #d4c4b5 100%);
    color: var(--primary-dark);
    border: none;
    border-radius: 12px;
    padding: 16px 24px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;
}

.btn-login:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(232, 213, 196, 0.3);
}

.btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.login-footer {
    margin-top: 24px;
    text-align: center;
}

.back-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
}

.back-link:hover {
    color: var(--primary-light);
}

.alert-success {
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #86efac;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 0.9rem;
}

@media (max-width: 480px) {
    .login-card {
        padding: 30px 24px;
    }
    
    .login-logo {
        height: 100px;
    }
    
    .login-title {
        font-size: 1.5rem;
    }
}
</style>
