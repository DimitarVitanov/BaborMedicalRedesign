<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';

const form = useForm({
    name_en: '',
    name_mk: '',
    slug: '',
    description_en: '',
    description_mk: '',
    display_type: 'accordion',
    is_active: true,
});

const submit = () => {
    form.post(route('admin.service-categories.store'));
};
</script>

<template>
    <Head title="Add Service Category" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Add Service Category</h2>
                <Link :href="route('admin.service-categories.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <form @submit.prevent="submit">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Category Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Name (English) *</label>
                                    <input 
                                        v-model="form.name_en"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.name_en }"
                                        required
                                    />
                                    <div v-if="form.errors.name_en" class="invalid-feedback">
                                        {{ form.errors.name_en }}
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Name (Macedonian) *</label>
                                    <input 
                                        v-model="form.name_mk"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.name_mk }"
                                        required
                                    />
                                    <div v-if="form.errors.name_mk" class="invalid-feedback">
                                        {{ form.errors.name_mk }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Slug</label>
                                    <input 
                                        v-model="form.slug"
                                        type="text"
                                        class="form-control"
                                        placeholder="auto-generated if empty"
                                    />
                                    <small class="text-muted">Leave empty to auto-generate from English name</small>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Display Type *</label>
                                    <select v-model="form.display_type" class="form-select">
                                        <option value="accordion">Accordion (expandable items)</option>
                                        <option value="buttons">Buttons (non-expandable)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (English)</label>
                                    <textarea 
                                        v-model="form.description_en"
                                        class="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (Macedonian)</label>
                                    <textarea 
                                        v-model="form.description_mk"
                                        class="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="form-check form-switch">
                                <input 
                                    v-model="form.is_active"
                                    type="checkbox"
                                    class="form-check-input"
                                    id="isActive"
                                />
                                <label class="form-check-label" for="isActive">
                                    Active
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2">
                        <Link :href="route('admin.service-categories.index')" class="btn btn-outline-secondary">
                            Cancel
                        </Link>
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? 'Creating...' : 'Create Category' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
