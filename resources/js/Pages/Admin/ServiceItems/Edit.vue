<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import RichTextEditor from '@/Components/Admin/RichTextEditor.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';

const props = defineProps({
    item: Object,
    categories: Array,
});

const form = useForm({
    service_category_id: props.item.service_category_id,
    name_en: props.item.name_en,
    name_mk: props.item.name_mk,
    description_en: props.item.description_en || '',
    description_mk: props.item.description_mk || '',
    price: props.item.price || '',
    duration: props.item.duration || '',
    url: props.item.url || '',
    is_expandable: props.item.is_expandable,
    is_active: props.item.is_active,
});

const submit = () => {
    form.post(route('admin.service-items.update', props.item.id));
};
</script>

<template>
    <Head title="Edit Service" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Service</h2>
                <Link :href="route('admin.service-items.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <form @submit.prevent="submit">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Service Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Category *</label>
                                <select 
                                    v-model="form.service_category_id"
                                    class="form-select"
                                    :class="{ 'is-invalid': form.errors.service_category_id }"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                                        {{ cat.name_en }} / {{ cat.name_mk }}
                                    </option>
                                </select>
                                <div v-if="form.errors.service_category_id" class="invalid-feedback">
                                    {{ form.errors.service_category_id }}
                                </div>
                            </div>

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

                            <div class="mb-3">
                                <label class="form-label">Description (English)</label>
                                <RichTextEditor v-model="form.description_en" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description (Macedonian)</label>
                                <RichTextEditor v-model="form.description_mk" />
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Price (MKD)</label>
                                    <input 
                                        v-model="form.price"
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Duration</label>
                                    <input 
                                        v-model="form.duration"
                                        type="text"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">URL (for button links)</label>
                                    <input 
                                        v-model="form.url"
                                        type="text"
                                        class="form-control"
                                        placeholder="/lasers/almaq"
                                    />
                                    <small class="text-muted">Optional: Link for button-style categories</small>
                                </div>
                            </div>

                            <div class="d-flex gap-4">
                                <div class="form-check form-switch">
                                    <input 
                                        v-model="form.is_expandable"
                                        type="checkbox"
                                        class="form-check-input"
                                        id="isExpandable"
                                    />
                                    <label class="form-check-label" for="isExpandable">
                                        Expandable (show description on click)
                                    </label>
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
                    </div>

                    <div class="d-flex justify-content-end gap-2">
                        <Link :href="route('admin.service-items.index')" class="btn btn-outline-secondary">
                            Cancel
                        </Link>
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
