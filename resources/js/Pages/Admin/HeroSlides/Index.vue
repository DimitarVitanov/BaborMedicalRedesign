<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
});

const deleteSlide = (id) => {
    if (confirm('Are you sure you want to delete this slide?')) {
        router.delete(route('admin.hero-slides.destroy', id));
    }
};

const toggleActive = (slide) => {
    router.patch(route('admin.hero-slides.update', slide.id), {
        ...slide,
        is_active: !slide.is_active,
    });
};
</script>

<template>
    <Head title="Hero Slides - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Hero Slides</h2>
                <Link :href="route('admin.hero-slides.create')" class="btn btn-primary">
                    Add New Slide
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <div v-if="slides.length === 0" class="text-center py-5 text-muted">
                            <p class="mb-3">No hero slides yet.</p>
                            <Link :href="route('admin.hero-slides.create')" class="btn btn-primary">
                                Create your first slide
                            </Link>
                        </div>

                        <div v-else class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th style="width: 60px;">Order</th>
                                        <th>Title</th>
                                        <th>Subtitle</th>
                                        <th style="width: 100px;">Status</th>
                                        <th style="width: 150px;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="slide in slides" :key="slide.id">
                                        <td>{{ slide.order }}</td>
                                        <td>
                                            <strong>{{ slide.title }}</strong>
                                            <span class="text-primary ms-1">{{ slide.highlight }}</span>
                                        </td>
                                        <td>{{ slide.subtitle }}</td>
                                        <td>
                                            <span 
                                                class="badge"
                                                :class="slide.is_active ? 'bg-success' : 'bg-secondary'"
                                                style="cursor: pointer;"
                                                @click="toggleActive(slide)"
                                            >
                                                {{ slide.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <Link 
                                                    :href="route('admin.hero-slides.edit', slide.id)" 
                                                    class="btn btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    type="button" 
                                                    class="btn btn-outline-danger"
                                                    @click="deleteSlide(slide.id)"
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
