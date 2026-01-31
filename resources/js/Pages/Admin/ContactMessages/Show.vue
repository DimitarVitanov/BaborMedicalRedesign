<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    message: Object,
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

const deleteMessage = () => {
    if (confirm('Are you sure you want to delete this message?')) {
        router.delete(route('admin.contact-messages.destroy', props.message.id));
    }
};

const toggleRead = () => {
    const routeName = props.message.is_read ? 'admin.contact-messages.mark-unread' : 'admin.contact-messages.mark-read';
    router.post(route(routeName, props.message.id));
};
</script>

<template>
    <Head :title="`Message from ${message.name}`" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Message Details</h2>
                <Link :href="route('admin.contact-messages.index')" class="btn btn-outline-secondary">
                    Back to Messages
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <span 
                                class="badge me-2"
                                :class="message.is_read ? 'bg-secondary' : 'bg-primary'"
                            >
                                {{ message.is_read ? 'Read' : 'Unread' }}
                            </span>
                            <span class="text-muted">{{ formatDate(message.created_at) }}</span>
                        </div>
                        <div class="btn-group btn-group-sm">
                            <button 
                                @click="toggleRead"
                                class="btn btn-outline-secondary"
                            >
                                {{ message.is_read ? 'Mark as Unread' : 'Mark as Read' }}
                            </button>
                            <button 
                                @click="deleteMessage"
                                class="btn btn-outline-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Name</h6>
                                <p class="mb-0 fs-5">{{ message.name }}</p>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Email</h6>
                                <p class="mb-0 fs-5">
                                    <a :href="`mailto:${message.email}`">{{ message.email }}</a>
                                </p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Phone</h6>
                                <p class="mb-0">
                                    <a v-if="message.phone" :href="`tel:${message.phone}`">{{ message.phone }}</a>
                                    <span v-else class="text-muted">Not provided</span>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-muted mb-1">Service Interest</h6>
                                <p class="mb-0">{{ message.service || 'Not specified' }}</p>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h6 class="text-muted mb-2">Message</h6>
                            <div class="bg-light p-3 rounded" style="white-space: pre-wrap;">{{ message.message }}</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a 
                            :href="`mailto:${message.email}?subject=Re: Your inquiry to Babor Medical`"
                            class="btn btn-primary"
                        >
                            Reply via Email
                        </a>
                        <a 
                            v-if="message.phone"
                            :href="`tel:${message.phone}`"
                            class="btn btn-outline-primary ms-2"
                        >
                            Call Customer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
