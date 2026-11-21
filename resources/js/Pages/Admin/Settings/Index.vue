<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    settings: Object,
});

const defaultSettings = [
    { key: 'social_facebook', label: 'Facebook URL', group: 'social' },
    { key: 'social_instagram', label: 'Instagram URL', group: 'social' },
    { key: 'social_tiktok', label: 'TikTok URL', group: 'social' },
    { key: 'notification_emails', label: 'Notification Emails', group: 'notifications' },
    { key: 'black_friday_popup', label: 'Black Friday Journal Popup', group: 'promo' },
];

const getSettingValue = (key, lang) => {
    if (!props.settings) return '';
    for (const group of Object.values(props.settings)) {
        const setting = group.find(s => s.key === key);
        if (setting) {
            return lang === 'en' ? setting.value_en : setting.value_mk;
        }
    }
    return '';
};

const formData = {};
defaultSettings.forEach(s => {
    formData[`${s.key}_en`] = getSettingValue(s.key, 'en');
    formData[`${s.key}_mk`] = getSettingValue(s.key, 'mk');
});

const form = useForm(formData);

const submit = () => {
    const settings = defaultSettings.map(s => ({
        key: s.key,
        value_en: form[`${s.key}_en`],
        value_mk: form[`${s.key}_mk`],
    }));

    form.transform(() => ({ settings })).post(route('admin.settings.update'));
};

const socialSettings = defaultSettings.filter(s => s.group === 'social');
const notificationSettings = defaultSettings.filter(s => s.group === 'notifications');
const promoSettings = defaultSettings.filter(s => s.group === 'promo');
</script>

<template>
    <Head title="Settings" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="h4 mb-0">Site Settings</h2>
        </template>

        <div class="py-4">
            <div class="container">
                <form @submit.prevent="submit">
                    <!-- Social Media Links -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Social Media Links</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted small mb-3">Social media links are the same for both languages.</p>
                            <div v-for="setting in socialSettings" :key="setting.key" class="mb-3">
                                <label class="form-label fw-bold">{{ setting.label }}</label>
                                <input 
                                    v-model="form[`${setting.key}_en`]"
                                    @input="form[`${setting.key}_mk`] = form[`${setting.key}_en`]"
                                    type="url"
                                    class="form-control"
                                    :placeholder="`https://...`"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Email Notifications -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Email Notifications</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted small mb-3">
                                Contact form inquiries and job applications are sent to these email addresses.
                                Separate multiple addresses with a comma, e.g. <code>vitanov1@yahoo.com, info@babormedical.com</code>
                            </p>
                            <div v-for="setting in notificationSettings" :key="setting.key" class="mb-3">
                                <label class="form-label fw-bold">{{ setting.label }}</label>
                                <input
                                    v-model="form[`${setting.key}_en`]"
                                    @input="form[`${setting.key}_mk`] = form[`${setting.key}_en`]"
                                    type="text"
                                    class="form-control"
                                    placeholder="email@example.com, another@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Promotions -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Promotions</h5>
                        </div>
                        <div class="card-body">
                            <div v-for="setting in promoSettings" :key="setting.key" class="mb-3">
                                <label class="form-label fw-bold">{{ setting.label }}</label>
                                <select
                                    v-model="form[`${setting.key}_en`]"
                                    @change="form[`${setting.key}_mk`] = form[`${setting.key}_en`]"
                                    class="form-select"
                                >
                                    <option value="1">On — visitors see the popup</option>
                                    <option value="0">Off</option>
                                </select>
                                <small class="text-muted">The popup also turns itself off automatically after November 30.</small>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? 'Saving...' : 'Save Settings' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
