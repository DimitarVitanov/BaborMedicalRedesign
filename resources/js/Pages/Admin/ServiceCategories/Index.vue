<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    categories: Array,
});

const deleteCategory = (id) => {
    if (confirm('Are you sure? This will also delete all services in this category.')) {
        router.delete(route('admin.service-categories.destroy', id));
    }
};
</script>

<template>
    <Head title="Service Categories" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Service Categories</h2>
                <Link :href="route('admin.service-categories.create')" class="btn btn-primary">
                    Add Category
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
                                        <th>Slug</th>
                                        <th>Display Type</th>
                                        <th>Services</th>
                                        <th>Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="category in categories" :key="category.id">
                                        <td>
                                            <strong>{{ category.name_en }}</strong>
                                            <br>
                                            <small class="text-muted">{{ category.name_mk }}</small>
                                        </td>
                                        <td><code>{{ category.slug }}</code></td>
                                        <td>
                                            <span class="badge" :class="category.display_type === 'accordion' ? 'bg-info' : 'bg-warning'">
                                                {{ category.display_type }}
                                            </span>
                                        </td>
                                        <td>{{ category.items_count }}</td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="category.is_active ? 'bg-success' : 'bg-danger'"
                                            >
                                                {{ category.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.service-categories.edit', category.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    @click="deleteCategory(category.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="categories.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No categories yet. Add your first category.
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
