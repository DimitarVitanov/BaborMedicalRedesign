<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';

const props = defineProps({
    location: Object,
});

const form = useForm({
    name_en: props.location.name_en,
    name_mk: props.location.name_mk,
    address_en: props.location.address_en,
    address_mk: props.location.address_mk,
    phone: props.location.phone || '',
    email: props.location.email || '',
    working_hours_weekdays_en: props.location.working_hours_weekdays_en || '',
    working_hours_weekdays_mk: props.location.working_hours_weekdays_mk || '',
    working_hours_saturday_en: props.location.working_hours_saturday_en || '',
    working_hours_saturday_mk: props.location.working_hours_saturday_mk || '',
    working_hours_sunday_en: props.location.working_hours_sunday_en || '',
    working_hours_sunday_mk: props.location.working_hours_sunday_mk || '',
    show_working_hours: props.location.show_working_hours,
    map_embed_url: props.location.map_embed_url || '',
    is_active: props.location.is_active,
});

const submit = () => {
    form.post(route('admin.locations.update', props.location.id));
};
</script>

<template>
    <Head title="Edit Location" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Location</h2>
                <Link :href="route('admin.locations.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <form @submit.prevent="submit">
                    <!-- Basic Info -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Basic Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Location Name (English) *</label>
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
                                    <label class="form-label">Location Name (Macedonian) *</label>
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
                                    <label class="form-label">Address (English) *</label>
                                    <input 
                                        v-model="form.address_en"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.address_en }"
                                        required
                                    />
                                    <div v-if="form.errors.address_en" class="invalid-feedback">
                                        {{ form.errors.address_en }}
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Address (Macedonian) *</label>
                                    <input 
                                        v-model="form.address_mk"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.address_mk }"
                                        required
                                    />
                                    <div v-if="form.errors.address_mk" class="invalid-feedback">
                                        {{ form.errors.address_mk }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Phone</label>
                                    <input 
                                        v-model="form.phone"
                                        type="text"
                                        class="form-control"
                                        placeholder="+389 XX XXX XXX"
                                    />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Email</label>
                                    <input 
                                        v-model="form.email"
                                        type="email"
                                        class="form-control"
                                        placeholder="info@babormedical.mk"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Working Hours -->
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Working Hours</h5>
                            <div class="form-check form-switch">
                                <input 
                                    v-model="form.show_working_hours"
                                    type="checkbox"
                                    class="form-check-input"
                                    id="showWorkingHours"
                                />
                                <label class="form-check-label" for="showWorkingHours">
                                    Show on website
                                </label>
                            </div>
                        </div>
                        <div class="card-body" :class="{ 'opacity-50': !form.show_working_hours }">
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <label class="form-label fw-bold">Monday - Friday</label>
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_weekdays_en"
                                        type="text"
                                        class="form-control"
                                        placeholder="09:00 - 20:00"
                                    />
                                    <small class="text-muted">English</small>
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_weekdays_mk"
                                        type="text"
                                        class="form-control"
                                        placeholder="09:00 - 20:00"
                                    />
                                    <small class="text-muted">Macedonian</small>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <label class="form-label fw-bold">Saturday</label>
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_saturday_en"
                                        type="text"
                                        class="form-control"
                                        placeholder="10:00 - 18:00"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_saturday_mk"
                                        type="text"
                                        class="form-control"
                                        placeholder="10:00 - 18:00"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label fw-bold">Sunday</label>
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_sunday_en"
                                        type="text"
                                        class="form-control"
                                        placeholder="Closed"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <input 
                                        v-model="form.working_hours_sunday_mk"
                                        type="text"
                                        class="form-control"
                                        placeholder="Затворено"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Map & Status -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Map & Status</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Google Maps Embed URL</label>
                                <input 
                                    v-model="form.map_embed_url"
                                    type="text"
                                    class="form-control"
                                    placeholder="https://www.google.com/maps/embed?pb=..."
                                />
                                <small class="text-muted">Paste the embed URL from Google Maps</small>
                            </div>
                            <div class="form-check form-switch">
                                <input 
                                    v-model="form.is_active"
                                    type="checkbox"
                                    class="form-check-input"
                                    id="isActive"
                                />
                                <label class="form-check-label" for="isActive">
                                    Active (show on website)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2">
                        <Link :href="route('admin.locations.index')" class="btn btn-outline-secondary">
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
