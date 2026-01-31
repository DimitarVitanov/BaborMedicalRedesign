<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const activeTab = ref('en');

const props = defineProps({
    about: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    title: props.about.title,
    title_mk: props.about.title_mk || '',
    subtitle: props.about.subtitle,
    subtitle_mk: props.about.subtitle_mk || '',
    short_description: props.about.short_description,
    short_description_mk: props.about.short_description_mk || '',
    full_content: props.about.full_content,
    full_content_mk: props.about.full_content_mk || '',
    image: props.about.image || '',
    is_active: props.about.is_active,
});

const submit = () => {
    form.post(route('admin.about.update', props.about.id));
};
</script>

<template>
    <Head title="Edit About Content - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit About Content</h2>
                <Link :href="route('admin.about.index')" class="btn btn-outline-secondary">
                    Back
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <ul class="nav nav-tabs mb-4">
                                <li class="nav-item">
                                    <button 
                                        type="button"
                                        class="nav-link" 
                                        :class="{ active: activeTab === 'en' }"
                                        @click="activeTab = 'en'"
                                    >
                                        🇬🇧 English
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button 
                                        type="button"
                                        class="nav-link" 
                                        :class="{ active: activeTab === 'mk' }"
                                        @click="activeTab = 'mk'"
                                    >
                                        🇲🇰 Македонски
                                    </button>
                                </li>
                            </ul>

                            <div v-show="activeTab === 'en'">
                                <div class="mb-3">
                                    <label class="form-label">Title (EN)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        :class="{ 'is-invalid': form.errors.title }"
                                        v-model="form.title"
                                    />
                                    <div v-if="form.errors.title" class="invalid-feedback">
                                        {{ form.errors.title }}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Subtitle (EN)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        :class="{ 'is-invalid': form.errors.subtitle }"
                                        v-model="form.subtitle"
                                    />
                                    <div v-if="form.errors.subtitle" class="invalid-feedback">
                                        {{ form.errors.subtitle }}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Short Description (EN)</label>
                                    <textarea 
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.short_description }"
                                        v-model="form.short_description"
                                        rows="3"
                                    ></textarea>
                                    <small class="text-muted">Shown on homepage</small>
                                    <div v-if="form.errors.short_description" class="invalid-feedback">
                                        {{ form.errors.short_description }}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Full Content (EN)</label>
                                    <textarea 
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.full_content }"
                                        v-model="form.full_content"
                                        rows="8"
                                    ></textarea>
                                    <small class="text-muted">Shown on dedicated About page</small>
                                    <div v-if="form.errors.full_content" class="invalid-feedback">
                                        {{ form.errors.full_content }}
                                    </div>
                                </div>
                            </div>

                            <div v-show="activeTab === 'mk'">
                                <div class="mb-3">
                                    <label class="form-label">Наслов (MK)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="form.title_mk"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Поднаслов (MK)</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="form.subtitle_mk"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Краток опис (MK)</label>
                                    <textarea 
                                        class="form-control"
                                        v-model="form.short_description_mk"
                                        rows="3"
                                    ></textarea>
                                    <small class="text-muted">Прикажано на почетна страница</small>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Целосна содржина (MK)</label>
                                    <textarea 
                                        class="form-control"
                                        v-model="form.full_content_mk"
                                        rows="8"
                                    ></textarea>
                                    <small class="text-muted">Прикажано на За нас страница</small>
                                </div>
                            </div>

                            <hr class="my-4" />
                            <h6 class="mb-3">Settings</h6>

                            <div class="row">
                                <div class="col-md-8 mb-3">
                                    <label class="form-label">Image Path</label>
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        v-model="form.image"
                                        placeholder="/images/about.webp"
                                    />
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Status</label>
                                    <div class="form-check form-switch mt-2">
                                        <input 
                                            class="form-check-input" 
                                            type="checkbox" 
                                            id="is_active"
                                            v-model="form.is_active"
                                        />
                                        <label class="form-check-label" for="is_active">
                                            {{ form.is_active ? 'Active' : 'Inactive' }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex gap-2 mt-4">
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    :disabled="form.processing"
                                >
                                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                                </button>
                                <Link :href="route('admin.about.index')" class="btn btn-outline-secondary">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
