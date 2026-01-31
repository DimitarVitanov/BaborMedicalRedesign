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
