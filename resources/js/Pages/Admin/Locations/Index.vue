<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    locations: Array,
});

const deleteLocation = (id) => {
    if (confirm('Are you sure you want to delete this location?')) {
        router.delete(route('admin.locations.destroy', id));
    }
};
</script>

<template>
    <Head title="Locations" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Locations</h2>
                <Link :href="route('admin.locations.create')" class="btn btn-primary">
                    Add Location
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
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Working Hours</th>
                                        <th>Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="location in locations" :key="location.id">
                                        <td>
                                            <strong>{{ location.name_en }}</strong>
                                            <br>
                                            <small class="text-muted">{{ location.name_mk }}</small>
                                        </td>
                                        <td>
                                            {{ location.address_en }}
                                            <br>
                                            <small class="text-muted">{{ location.address_mk }}</small>
                                        </td>
                                        <td>{{ location.phone || '-' }}</td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="location.show_working_hours ? 'bg-success' : 'bg-secondary'"
                                            >
                                                {{ location.show_working_hours ? 'Shown' : 'Hidden' }}
                                            </span>
                                        </td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="location.is_active ? 'bg-success' : 'bg-danger'"
                                            >
                                                {{ location.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.locations.edit', location.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    @click="deleteLocation(location.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="locations.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No locations yet. Add your first location.
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
