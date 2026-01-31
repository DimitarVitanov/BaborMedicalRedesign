<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';

const props = defineProps({
    subscribers: Object,
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

const toggleActive = (id) => {
    router.post(route('admin.newsletter.toggle', id));
};

const deleteSubscriber = (id) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
        router.delete(route('admin.newsletter.destroy', id));
    }
};
</script>

<template>
    <Head title="Newsletter Subscribers - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Newsletter Subscribers</h2>
                <span class="badge bg-primary fs-6">Total: {{ subscribers.total }}</span>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <div v-if="subscribers.data.length === 0" class="text-center py-5 text-muted">
                            <p class="mb-0">No subscribers yet.</p>
                        </div>

                        <div v-else class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th style="width: 100px;">Language</th>
                                        <th style="width: 100px;">Status</th>
                                        <th style="width: 180px;">Subscribed At</th>
                                        <th style="width: 180px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="subscriber in subscribers.data" :key="subscriber.id">
                                        <td>
                                            <strong>{{ subscriber.email }}</strong>
                                        </td>
                                        <td>
                                            <span class="badge bg-info">
                                                {{ subscriber.locale.toUpperCase() }}
                                            </span>
                                        </td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="subscriber.is_active ? 'bg-success' : 'bg-secondary'"
                                            >
                                                {{ subscriber.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td class="text-muted">
                                            {{ formatDate(subscriber.subscribed_at) }}
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button 
                                                    type="button"
                                                    class="btn"
                                                    :class="subscriber.is_active ? 'btn-outline-warning' : 'btn-outline-success'"
                                                    @click="toggleActive(subscriber.id)"
                                                >
                                                    {{ subscriber.is_active ? 'Deactivate' : 'Activate' }}
                                                </button>
                                                <button 
                                                    type="button"
                                                    class="btn btn-outline-danger"
                                                    @click="deleteSubscriber(subscriber.id)"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Pagination -->
                        <nav v-if="subscribers.last_page > 1" class="mt-4">
                            <ul class="pagination justify-content-center mb-0">
                                <li 
                                    v-for="link in subscribers.links" 
                                    :key="link.label"
                                    class="page-item"
                                    :class="{ active: link.active, disabled: !link.url }"
                                >
                                    <a 
                                        class="page-link"
                                        :href="link.url || '#'"
                                        v-html="link.label"
                                    ></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
