<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    postings: Array,
});

const employmentTypeLabels = {
    full_time: 'Full-time',
    part_time: 'Part-time',
    contract: 'Contract',
    internship: 'Internship',
};

const deletePosting = (id) => {
    if (confirm('Are you sure you want to delete this job posting? Applications for it will be kept.')) {
        router.delete(route('admin.job-postings.destroy', id));
    }
};
</script>

<template>
    <Head title="Job Postings - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Job Postings</h2>
                <Link :href="route('admin.job-postings.create')" class="btn btn-primary">
                    Add Job Posting
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Title (EN)</th>
                                        <th>Title (MK)</th>
                                        <th>Type</th>
                                        <th>Applications</th>
                                        <th>Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="posting in postings" :key="posting.id">
                                        <td><strong>{{ posting.title_en }}</strong></td>
                                        <td>{{ posting.title_mk }}</td>
                                        <td>{{ employmentTypeLabels[posting.employment_type] || posting.employment_type }}</td>
                                        <td>
                                            <span class="badge bg-secondary">{{ posting.applications_count }}</span>
                                        </td>
                                        <td>
                                            <span
                                                class="badge"
                                                :class="posting.is_active ? 'bg-success' : 'bg-secondary'"
                                            >
                                                {{ posting.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link
                                                    :href="route('admin.job-postings.edit', posting.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    @click="deletePosting(posting.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="postings.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No job postings yet. Click "Add Job Posting" to create one.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
