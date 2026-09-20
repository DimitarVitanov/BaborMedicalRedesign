<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    application: Object,
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const deleteApplication = () => {
    if (confirm('Are you sure you want to delete this application? The CV file will also be deleted.')) {
        router.delete(route('admin.job-applications.destroy', props.application.id));
    }
};
</script>

<template>
    <Head :title="`Application from ${application.name}`" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Application Details</h2>
                <Link :href="route('admin.job-applications.index')" class="btn btn-outline-secondary">
                    Back to Applications
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-primary me-2">
                                {{ application.job_posting ? application.job_posting.title_en : 'Position removed' }}
                            </span>
                            <span class="text-muted">{{ formatDate(application.created_at) }}</span>
                        </div>
                        <button
                            @click="deleteApplication"
                            class="btn btn-outline-danger btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Name</h6>
                                <p class="mb-0 fs-5">{{ application.name }}</p>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Email</h6>
                                <p class="mb-0 fs-5">
                                    <a :href="`mailto:${application.email}`">{{ application.email }}</a>
                                </p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Phone</h6>
                                <p class="mb-0">
                                    <a v-if="application.phone" :href="`tel:${application.phone}`">{{ application.phone }}</a>
                                    <span v-else class="text-muted">Not provided</span>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">CV / Resume</h6>
                                <p class="mb-0">
                                    <a
                                        v-if="application.cv_path"
                                        :href="route('admin.job-applications.cv', application.id)"
                                        class="btn btn-sm btn-outline-primary"
                                    >
                                        Download {{ application.cv_original_name || 'CV' }}
                                    </a>
                                    <span v-else class="text-muted">Not provided</span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h6 class="text-muted mb-2">Cover Letter / Message</h6>
                            <div v-if="application.message" class="bg-light p-3 rounded" style="white-space: pre-wrap;">{{ application.message }}</div>
                            <p v-else class="text-muted">No message provided.</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a
                            :href="`mailto:${application.email}?subject=Re: Your application to Babor Medical`"
                            class="btn btn-primary"
                        >
                            Reply via Email
                        </a>
                        <a
                            v-if="application.phone"
                            :href="`tel:${application.phone}`"
                            class="btn btn-outline-primary ms-2"
                        >
                            Call Applicant
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
