<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps({
    items: Object,
    categories: Array,
    selectedCategory: [String, Number],
});

const deleteItem = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
        router.delete(route('admin.service-items.destroy', id));
    }
};

const filterByCategory = (categoryId) => {
    router.get(route('admin.service-items.index'), categoryId ? { category: categoryId } : {}, {
        preserveState: true,
    });
};
</script>

<template>
    <Head title="Services" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Services</h2>
                <Link :href="route('admin.service-items.create')" class="btn btn-primary">
                    Add Service
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3">
                            <label class="form-label mb-0">Filter by Category:</label>
                            <select 
                                class="form-select" 
                                style="width: auto;"
                                @change="filterByCategory($event.target.value)"
                            >
                                <option value="">All Categories</option>
                                <option 
                                    v-for="cat in categories" 
                                    :key="cat.id" 
                                    :value="cat.id"
                                    :selected="selectedCategory == cat.id"
                                >
                                    {{ cat.name_en }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Duration</th>
                                        <th>Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in items.data" :key="item.id">
                                        <td>
                                            <strong>{{ item.name_en }}</strong>
                                            <br>
                                            <small class="text-muted">{{ item.name_mk }}</small>
                                        </td>
                                        <td>
                                            <span class="badge bg-secondary">
                                                {{ item.category?.name_en }}
                                            </span>
                                        </td>
                                        <td>
                                            <template v-if="item.price_from && item.price_to">
                                                {{ item.price_from }} - {{ item.price_to }} MKD
                                            </template>
                                            <template v-else-if="item.price_from">
                                                од {{ item.price_from }} MKD
                                            </template>
                                            <template v-else-if="item.price_to">
                                                до {{ item.price_to }} MKD
                                            </template>
                                            <template v-else-if="item.price">
                                                {{ item.price }} MKD
                                            </template>
                                            <template v-else>-</template>
                                        </td>
                                        <td>{{ item.duration || '-' }}</td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="item.is_active ? 'bg-success' : 'bg-danger'"
                                            >
                                                {{ item.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.service-items.edit', item.id)"
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    @click="deleteItem(item.id)"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="items.data.length === 0">
                                        <td colspan="6" class="text-center py-4 text-muted">
                                            No services yet. Add your first service.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div v-if="items.last_page > 1" class="d-flex justify-content-center mt-4">
                    <nav>
                        <ul class="pagination">
                            <li v-for="link in items.links" :key="link.label" class="page-item" :class="{ active: link.active, disabled: !link.url }">
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
