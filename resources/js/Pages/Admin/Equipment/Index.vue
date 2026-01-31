<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    equipment: Array,
});

const deleteEquipment = (id) => {
    if (confirm('Are you sure you want to delete this equipment?')) {
        router.delete(route('admin.equipment.destroy', id));
    }
};
</script>

<template>
    <Head title="Equipment - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Equipment</h2>
                <Link :href="route('admin.equipment.create')" class="btn btn-primary">
                    Add Equipment
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <div v-if="equipment.length === 0" class="text-center py-5 text-muted">
                            <p class="mb-3">No equipment yet.</p>
                            <Link :href="route('admin.equipment.create')" class="btn btn-primary">
                                Add your first equipment
                            </Link>
                        </div>

                        <div v-else class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th style="width: 80px;">Image</th>
                                        <th>Title (EN)</th>
                                        <th>Title (MK)</th>
                                        <th style="width: 100px;">Category</th>
                                        <th style="width: 100px;">Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in equipment" :key="item.id">
                                        <td>
                                            <img 
                                                v-if="item.image" 
                                                :src="'/storage/' + item.image" 
                                                :alt="item.title_en"
                                                class="img-thumbnail"
                                                style="width: 60px; height: 60px; object-fit: contain;"
                                            />
                                            <div v-else class="bg-light rounded d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                                <small class="text-muted">No img</small>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>{{ item.title_en }}</strong>
                                        </td>
                                        <td>{{ item.title_mk }}</td>
                                        <td>
                                            <span class="badge bg-info">{{ item.category }}</span>
                                        </td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="item.is_active ? 'bg-success' : 'bg-secondary'"
                                            >
                                                {{ item.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.equipment.edit', item.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    type="button"
                                                    class="btn btn-outline-danger"
                                                    @click="deleteEquipment(item.id)"
                                                >
                                                    Delete
                                                </button>
                                            </div>
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
