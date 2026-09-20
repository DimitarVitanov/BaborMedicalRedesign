<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';

const props = defineProps({
    posting: Object,
});

const form = useForm({
    title_en: props.posting.title_en,
    title_mk: props.posting.title_mk,
    location_en: props.posting.location_en || '',
    location_mk: props.posting.location_mk || '',
    employment_type: props.posting.employment_type,
    description_en: props.posting.description_en || '',
    description_mk: props.posting.description_mk || '',
    requirements_en: props.posting.requirements_en || '',
    requirements_mk: props.posting.requirements_mk || '',
    is_active: props.posting.is_active,
});

const submit = () => {
    form.post(route('admin.job-postings.update', props.posting.id));
};
</script>

<template>
    <Head title="Edit Job Posting - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Job Posting</h2>
                <Link :href="route('admin.job-postings.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Title (English) *</label>
                                    <input
                                        v-model="form.title_en"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.title_en }"
                                        required
                                    />
                                    <div v-if="form.errors.title_en" class="invalid-feedback">
                                        {{ form.errors.title_en }}
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Title (Macedonian) *</label>
                                    <input
                                        v-model="form.title_mk"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.title_mk }"
                                        required
                                    />
                                    <div v-if="form.errors.title_mk" class="invalid-feedback">
                                        {{ form.errors.title_mk }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Location (English)</label>
                                    <input
                                        v-model="form.location_en"
                                        type="text"
                                        class="form-control"
                                        placeholder="e.g. Skopje"
                                    />
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Location (Macedonian)</label>
                                    <input
                                        v-model="form.location_mk"
                                        type="text"
                                        class="form-control"
                                        placeholder="пр. Скопје"
                                    />
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Employment Type *</label>
                                    <select v-model="form.employment_type" class="form-select" required>
                                        <option value="full_time">Full-time</option>
                                        <option value="part_time">Part-time</option>
                                        <option value="contract">Contract</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (English)</label>
                                    <textarea
                                        v-model="form.description_en"
                                        rows="5"
                                        class="form-control"
                                    ></textarea>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (Macedonian)</label>
                                    <textarea
                                        v-model="form.description_mk"
                                        rows="5"
                                        class="form-control"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Requirements (English)</label>
                                    <textarea
                                        v-model="form.requirements_en"
                                        rows="5"
                                        class="form-control"
                                    ></textarea>
                                    <small class="text-muted">Write one requirement per line.</small>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Requirements (Macedonian)</label>
                                    <textarea
                                        v-model="form.requirements_mk"
                                        rows="5"
                                        class="form-control"
                                    ></textarea>
                                    <small class="text-muted">Напишете по едно барање во секој ред.</small>
                                </div>
                            </div>

                            <div class="form-check mb-4">
                                <input
                                    v-model="form.is_active"
                                    type="checkbox"
                                    id="is_active"
                                    class="form-check-input"
                                />
                                <label for="is_active" class="form-check-label">
                                    Active (visible on the Careers page)
                                </label>
                            </div>

                            <div class="d-flex gap-2">
                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                    :disabled="form.processing"
                                >
                                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                                </button>
                                <Link :href="route('admin.job-postings.index')" class="btn btn-outline-secondary">
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
