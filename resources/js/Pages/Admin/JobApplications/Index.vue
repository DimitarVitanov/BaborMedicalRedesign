<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    applications: Object,
    unreadCount: Number,
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const deleteApplication = (id) => {
    if (confirm('Are you sure you want to delete this application? The CV file will also be deleted.')) {
        router.delete(route('admin.job-applications.destroy', id));
    }
};

const toggleRead = (application) => {
    const routeName = application.is_read ? 'admin.job-applications.mark-unread' : 'admin.job-applications.mark-read';
    router.post(route(routeName, application.id));
};
</script>

<template>
    <Head title="Job Applications - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">
                    Job Applications
                    <span v-if="unreadCount > 0" class="badge bg-danger ms-2">{{ unreadCount }} unread</span>
                </h2>
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
                                        <th style="width: 40px;"></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                        <th>Date</th>
                                        <th style="width: 200px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="application in applications.data"
                                        :key="application.id"
                                        :class="{ 'table-warning': !application.is_read }"
                                    >
                                        <td class="text-center">
                                            <span
                                                v-if="!application.is_read"
                                                class="badge bg-primary rounded-circle"
                                                style="width: 10px; height: 10px; padding: 0;"
                                            ></span>
                                        </td>
                                        <td>
                                            <strong>{{ application.name }}</strong>
                                        </td>
                                        <td>
                                            <a :href="`mailto:${application.email}`">{{ application.email }}</a>
                                        </td>
                                        <td>{{ application.job_posting ? application.job_posting.title_en : '-' }}</td>
                                        <td>{{ formatDate(application.created_at) }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link
                                                    :href="route('admin.job-applications.show', application.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    View
                                                </Link>
                                                <a
                                                    v-if="application.cv_path"
                                                    :href="route('admin.job-applications.cv', application.id)"
                                                    class="btn btn-outline-secondary"
                                                    title="Download CV"
                                                >
                                                    CV
                                                </a>
                                                <button
                                                    @click="toggleRead(application)"
                                                    class="btn btn-outline-secondary"
                                                    :title="application.is_read ? 'Mark as unread' : 'Mark as read'"
                                                >
                                                    {{ application.is_read ? '📭' : '📬' }}
                                                </button>
                                                <button
                                                    @click="deleteApplication(application.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="applications.data.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No applications yet.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div v-if="applications.last_page > 1" class="d-flex justify-content-center mt-4">
                    <nav>
                        <ul class="pagination">
                            <li
                                v-for="link in applications.links"
                                :key="link.label"
                                class="page-item"
                                :class="{ active: link.active, disabled: !link.url }"
                            >
                                <Link
                                    v-if="link.url"
                                    :href="link.url"
                                    class="page-link"
                                    v-html="link.label"
                                />
                                <span v-else class="page-link" v-html="link.label" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
