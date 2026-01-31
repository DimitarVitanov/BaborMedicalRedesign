<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const activeTab = ref('en');

const form = useForm({
    subtitle: '',
    subtitle_mk: '',
    title: '',
    title_mk: '',
    highlight: '',
    highlight_mk: '',
    description: '',
    description_mk: '',
    cta_text: '',
    cta_text_mk: '',
    cta_link: '',
    secondary_text: '',
    secondary_text_mk: '',
    secondary_link: '',
    image: null,
    image_desktop_webp: null,
    image_mobile_webp: null,
    order: 0,
    is_active: true,
});

const submit = () => {
    form.post(route('admin.hero-slides.store'));
};
</script>

<template>
    <Head title="Create Hero Slide - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Create Hero Slide</h2>
                <Link :href="route('admin.hero-slides.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <!-- Language Tabs -->
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

                            <!-- English Fields -->
                            <div v-show="activeTab === 'en'">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Subtitle (EN)</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            :class="{ 'is-invalid': form.errors.subtitle }"
                                            v-model="form.subtitle"
                                            placeholder="e.g., Welcome to Babor Medical"
                                        />
                                        <div v-if="form.errors.subtitle" class="invalid-feedback">
                                            {{ form.errors.subtitle }}
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">Title (EN)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid': form.errors.title }"
                                            v-model="form.title"
                                            placeholder="e.g., Premium"
                                        />
                                        <div v-if="form.errors.title" class="invalid-feedback">
                                            {{ form.errors.title }}
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">Highlight (EN)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid': form.errors.highlight }"
                                            v-model="form.highlight"
                                            placeholder="e.g., Skincare"
                                        />
                                        <div v-if="form.errors.highlight" class="invalid-feedback">
                                            {{ form.errors.highlight }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description (EN)</label>
                                    <textarea 
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.description }"
                                        v-model="form.description"
                                        rows="3"
                                        placeholder="Enter slide description..."
                                    ></textarea>
                                    <div v-if="form.errors.description" class="invalid-feedback">
                                        {{ form.errors.description }}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Primary Button Text (EN)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid': form.errors.cta_text }"
                                            v-model="form.cta_text"
                                            placeholder="e.g., Explore Products"
                                        />
                                        <div v-if="form.errors.cta_text" class="invalid-feedback">
                                            {{ form.errors.cta_text }}
                                        </div>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Secondary Button Text (EN)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid': form.errors.secondary_text }"
                                            v-model="form.secondary_text"
                                            placeholder="e.g., Learn More"
                                        />
                                        <div v-if="form.errors.secondary_text" class="invalid-feedback">
                                            {{ form.errors.secondary_text }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Macedonian Fields -->
                            <div v-show="activeTab === 'mk'">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Subtitle (MK)</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            v-model="form.subtitle_mk"
                                            placeholder="пр., Добредојдовте во Babor Medical"
                                        />
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">Title (MK)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            v-model="form.title_mk"
                                            placeholder="пр., Премиум"
                                        />
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">Highlight (MK)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            v-model="form.highlight_mk"
                                            placeholder="пр., Нега на кожа"
                                        />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description (MK)</label>
                                    <textarea 
                                        class="form-control"
                                        v-model="form.description_mk"
                                        rows="3"
                                        placeholder="Внесете опис на слајдот..."
                                    ></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Primary Button Text (MK)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            v-model="form.cta_text_mk"
                                            placeholder="пр., Истражи производи"
                                        />
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Secondary Button Text (MK)</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            v-model="form.secondary_text_mk"
                                            placeholder="пр., Дознај повеќе"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Shared Fields (Links, Image, etc.) -->
                            <hr class="my-4" />
                            <h6 class="mb-3">Links & Settings</h6>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Primary Button Link</label>
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        v-model="form.cta_link"
                                        placeholder="e.g., /products"
                                    />
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Secondary Button Link</label>
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        v-model="form.secondary_link"
                                        placeholder="e.g., /about"
                                    />
                                </div>
                            </div>

                            <!-- Responsive Images Section -->
                            <div class="card bg-light mb-4">
                                <div class="card-header">
                                    <h6 class="mb-0">Responsive Images (WebP)</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Fallback Image</label>
                                            <input 
                                                type="file" 
                                                class="form-control form-control-sm"
                                                :class="{ 'is-invalid': form.errors.image }"
                                                @input="form.image = $event.target.files[0]"
                                                accept="image/*"
                                            />
                                            <div v-if="form.errors.image" class="invalid-feedback">
                                                {{ form.errors.image }}
                                            </div>
                                            <small class="text-muted">JPG/PNG fallback</small>
                                        </div>

                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Desktop WebP</label>
                                            <input 
                                                type="file" 
                                                class="form-control form-control-sm"
                                                :class="{ 'is-invalid': form.errors.image_desktop_webp }"
                                                @input="form.image_desktop_webp = $event.target.files[0]"
                                                accept="image/webp"
                                            />
                                            <div v-if="form.errors.image_desktop_webp" class="invalid-feedback">
                                                {{ form.errors.image_desktop_webp }}
                                            </div>
                                            <small class="text-muted">Optimized for desktop (1920px+)</small>
                                        </div>

                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Mobile WebP</label>
                                            <input 
                                                type="file" 
                                                class="form-control form-control-sm"
                                                :class="{ 'is-invalid': form.errors.image_mobile_webp }"
                                                @input="form.image_mobile_webp = $event.target.files[0]"
                                                accept="image/webp"
                                            />
                                            <div v-if="form.errors.image_mobile_webp" class="invalid-feedback">
                                                {{ form.errors.image_mobile_webp }}
                                            </div>
                                            <small class="text-muted">Optimized for mobile (768px)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Order</label>
                                    <input 
                                        type="number" 
                                        class="form-control"
                                        v-model="form.order"
                                        min="0"
                                    />
                                </div>

                                <div class="col-md-3 mb-3">
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
                                    {{ form.processing ? 'Creating...' : 'Create Slide' }}
                                </button>
                                <Link :href="route('admin.hero-slides.index')" class="btn btn-outline-secondary">
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
