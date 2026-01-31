<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    about: {
        type: Object,
        default: null,
    },
});
</script>

<template>
    <Head title="About Content - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">About Section Content</h2>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div v-if="!about" class="alert alert-warning">
                    No about content found. Please run the seeder.
                </div>
                
                <div v-else class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Current Content</h5>
                        <Link :href="route('admin.about.edit', about.id)" class="btn btn-primary btn-sm">
                            Edit Content
                        </Link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="text-muted mb-2">English</h6>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Title</label>
                                    <p>{{ about.title }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Subtitle</label>
                                    <p>{{ about.subtitle }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Short Description</label>
                                    <p class="text-muted small">{{ about.short_description }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-muted mb-2">Македонски</h6>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Наслов</label>
                                    <p>{{ about.title_mk || '-' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Поднаслов</label>
                                    <p>{{ about.subtitle_mk || '-' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Краток опис</label>
                                    <p class="text-muted small">{{ about.short_description_mk || '-' }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <hr />
                        
                        <div class="mb-3">
                            <label class="form-label fw-bold">Image</label>
                            <p>{{ about.image || 'No image set' }}</p>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label fw-bold">Status</label>
                            <span 
                                class="badge"
                                :class="about.is_active ? 'bg-success' : 'bg-secondary'"
                            >
                                {{ about.is_active ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
