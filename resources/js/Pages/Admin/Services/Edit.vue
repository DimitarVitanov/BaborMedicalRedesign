<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const activeTab = ref('en');

const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    title: props.service.title,
    title_mk: props.service.title_mk || '',
    description: props.service.description,
    description_mk: props.service.description_mk || '',
    icon: props.service.icon || '',
    link: props.service.link || '',
    order: props.service.order,
    is_active: props.service.is_active,
});

const submit = () => {
    form.post(route('admin.services.update', props.service.id));
};

const iconOptions = [
    { value: 'face', label: 'Face Treatment' },
    { value: 'laser', label: 'Laser Treatment' },
    { value: 'body', label: 'Body Treatment' },
    { value: 'product', label: 'Products' },
];
</script>

<template>
    <Head title="Edit Service - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Service</h2>
                <Link :href="route('admin.services.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <ul class="nav nav-tabs mb-4">
                                <li class="nav-item">
                                    <button 
                                        type="button"
                                        class="nav-link" 
                                        :class="{ active: activeTab === 'en' }"
                                        @click="activeTab = 'en'"
                                    >
                                        🇬🇧 English
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button 
                                        type="button"
                                        class="nav-link" 
                                        :class="{ active: activeTab === 'mk' }"
                                        @click="activeTab = 'mk'"
                                    >
                                        🇲🇰 Македонски
                                    </button>
                                </li>
                            </ul>

                            <div v-show="activeTab === 'en'">
                                <div class="mb-3">
                                    <label class="form-label">Title (EN)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        :class="{ 'is-invalid': form.errors.title }"
                                        v-model="form.title"
                                        placeholder="e.g., Face Treatments"
                                    />
                                    <div v-if="form.errors.title" class="invalid-feedback">
                                        {{ form.errors.title }}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description (EN)</label>
                                    <textarea 
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.description }"
                                        v-model="form.description"
                                        rows="3"
                                        placeholder="e.g., Explore our face treatments"
                                    ></textarea>
                                    <div v-if="form.errors.description" class="invalid-feedback">
                                        {{ form.errors.description }}
                                    </div>
                                </div>
                            </div>

                            <div v-show="activeTab === 'mk'">
                                <div class="mb-3">
                                    <label class="form-label">Title (MK)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="form.title_mk"
                                        placeholder="пр., Третмани за лице"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description (MK)</label>
                                    <textarea 
                                        class="form-control"
                                        v-model="form.description_mk"
                                        rows="3"
                                        placeholder="пр., Разгледете ги нашите третмани на лице"
                                    ></textarea>
                                </div>
                            </div>

                            <hr class="my-4" />
                            <h6 class="mb-3">Settings</h6>

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Icon Type</label>
                                    <select class="form-select" v-model="form.icon">
                                        <option value="">Select icon...</option>
                                        <option v-for="opt in iconOptions" :key="opt.value" :value="opt.value">
                                            {{ opt.label }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Link (optional)</label>
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        v-model="form.link"
                                        placeholder="e.g., /services/face"
                                    />
                                </div>

                                <div class="col-md-2 mb-3">
                                    <label class="form-label">Order</label>
                                    <input 
                                        type="number" 
                                        class="form-control"
                                        v-model="form.order"
                                        min="0"
                                    />
                                </div>

                                <div class="col-md-2 mb-3">
                                    <label class="form-label">Status</label>
                                    <div class="form-check form-switch mt-2">
                                        <input 
                                            class="form-check-input" 
                                            type="checkbox" 
                                            id="is_active"
                                            v-model="form.is_active"
                                        />
                                        <label class="form-check-label" for="is_active">
                                            {{ form.is_active ? 'Active' : 'Inactive' }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex gap-2 mt-4">
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    :disabled="form.processing"
                                >
                                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                                </button>
                                <Link :href="route('admin.services.index')" class="btn btn-outline-secondary">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
