<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    messages: Object,
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

const deleteMessage = (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
        router.delete(route('admin.contact-messages.destroy', id));
    }
};

const toggleRead = (message) => {
    const routeName = message.is_read ? 'admin.contact-messages.mark-unread' : 'admin.contact-messages.mark-read';
    router.post(route(routeName, message.id));
};
</script>

<template>
    <Head title="Contact Messages" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">
                    Contact Messages
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
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr 
                                        v-for="message in messages.data" 
                                        :key="message.id"
                                        :class="{ 'table-warning': !message.is_read }"
                                    >
                                        <td class="text-center">
                                            <span 
                                                v-if="!message.is_read" 
                                                class="badge bg-primary rounded-circle"
                                                style="width: 10px; height: 10px; padding: 0;"
                                            ></span>
                                        </td>
                                        <td>
                                            <strong>{{ message.name }}</strong>
                                        </td>
                                        <td>
                                            <a :href="`mailto:${message.email}`">{{ message.email }}</a>
                                        </td>
                                        <td>{{ message.service || '-' }}</td>
                                        <td>{{ formatDate(message.created_at) }}</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.contact-messages.show', message.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    View
                                                </Link>
                                                <button 
                                                    @click="toggleRead(message)"
                                                    class="btn btn-outline-secondary"
                                                    :title="message.is_read ? 'Mark as unread' : 'Mark as read'"
                                                >
                                                    {{ message.is_read ? '📭' : '📬' }}
                                                </button>
                                                <button 
                                                    @click="deleteMessage(message.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="messages.data.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No messages yet.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div v-if="messages.last_page > 1" class="d-flex justify-content-center mt-4">
                    <nav>
                        <ul class="pagination">
                            <li 
                                v-for="link in messages.links" 
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
