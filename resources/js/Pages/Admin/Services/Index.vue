<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    services: {
        type: Array,
        default: () => [],
    },
});

const deleteService = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
        router.delete(route('admin.services.destroy', id));
    }
};
</script>

<template>
    <Head title="Services - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Services / Treatments</h2>
                <Link :href="route('admin.services.create')" class="btn btn-primary">
                    + Add Service
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <div v-if="services.length === 0" class="text-center py-5 text-muted">
                            <p>No services yet. Create your first service!</p>
                        </div>
                        
                        <div class="table-responsive" v-else>
                            <table class="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Title</th>
                                        <th>Title (MK)</th>
                                        <th>Icon</th>
                                        <th>Status</th>
                                        <th class="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="service in services" :key="service.id">
                                        <td>{{ service.order }}</td>
                                        <td>{{ service.title }}</td>
                                        <td>{{ service.title_mk || '-' }}</td>
                                        <td>
                                            <span v-if="service.icon" class="badge bg-secondary">{{ service.icon }}</span>
                                            <span v-else class="text-muted">-</span>
                                        </td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="service.is_active ? 'bg-success' : 'bg-secondary'"
                                            >
                                                {{ service.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td class="text-end">
                                            <Link 
                                                :href="route('admin.services.edit', service.id)" 
                                                class="btn btn-sm btn-outline-primary me-2"
                                            >
                                                Edit
                                            </Link>
                                            <button 
                                                @click="deleteService(service.id)"
                                                class="btn btn-sm btn-outline-danger"
                                            >
                                                Delete
                                            </button>
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
