<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import RichTextEditor from '@/Components/Admin/RichTextEditor.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps({
    equipment: Object,
});

const form = useForm({
    slug: props.equipment.slug || '',
    title_en: props.equipment.title_en,
    title_mk: props.equipment.title_mk,
    description_en: props.equipment.description_en || '',
    description_mk: props.equipment.description_mk || '',
    detailed_description_en: props.equipment.detailed_description_en || '',
    detailed_description_mk: props.equipment.detailed_description_mk || '',
    link: props.equipment.link || '',
    category: props.equipment.category,
    is_active: props.equipment.is_active,
    image: null,
    image_desktop_webp: null,
    image_mobile_webp: null,
});

const imagePreview = ref(props.equipment.image ? '/storage/' + props.equipment.image : null);
const desktopWebpPreview = ref(props.equipment.image_desktop_webp ? '/storage/' + props.equipment.image_desktop_webp : null);
const mobileWebpPreview = ref(props.equipment.image_mobile_webp ? '/storage/' + props.equipment.image_mobile_webp : null);

const handleImageChange = (e, type = 'image') => {
    const file = e.target.files[0];
    form[type] = file;
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (type === 'image') imagePreview.value = event.target.result;
            else if (type === 'image_desktop_webp') desktopWebpPreview.value = event.target.result;
            else if (type === 'image_mobile_webp') mobileWebpPreview.value = event.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const submit = () => {
    form.post(route('admin.equipment.update', props.equipment.id), {
        forceFormData: true,
    });
};
</script>

<template>
    <Head title="Edit Equipment - Admin" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Equipment</h2>
                <Link :href="route('admin.equipment.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">URL Slug *</label>
                                    <input 
                                        v-model="form.slug"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.slug }"
                                        placeholder="alma-soprano-titanium"
                                        required
                                    />
                                    <small class="text-muted">Used in URL: /lasers/{{ form.slug || 'slug' }}</small>
                                    <div v-if="form.errors.slug" class="invalid-feedback">
                                        {{ form.errors.slug }}
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Category *</label>
                                    <select v-model="form.category" class="form-select" required>
                                        <option value="laser">Laser</option>
                                        <option value="device">Device</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Title (English) *</label>
                                    <input 
                                        v-model="form.title_en"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.title_en }"
                                        required
                                    />
                                    <div v-if="form.errors.title_en" class="invalid-feedback">
                                        {{ form.errors.title_en }}
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Title (Macedonian) *</label>
                                    <input 
                                        v-model="form.title_mk"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.title_mk }"
                                        required
                                    />
                                    <div v-if="form.errors.title_mk" class="invalid-feedback">
                                        {{ form.errors.title_mk }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Short Description (English)</label>
                                    <textarea 
                                        v-model="form.description_en"
                                        rows="2"
                                        class="form-control"
                                        placeholder="Brief description for homepage carousel"
                                    ></textarea>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Short Description (Macedonian)</label>
                                    <textarea 
                                        v-model="form.description_mk"
                                        rows="2"
                                        class="form-control"
                                        placeholder="Краток опис за почетна страница"
                                    ></textarea>
                                </div>
                            </div>

                            <!-- Detailed Description Section -->
                            <div class="card bg-light mb-4">
                                <div class="card-header">
                                    <h6 class="mb-0">Detailed Description (for Lasers page)</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-4">
                                        <label class="form-label">Detailed Description (English)</label>
                                        <RichTextEditor 
                                            v-model="form.detailed_description_en"
                                            placeholder="Full description with features, benefits, specifications..."
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Detailed Description (Macedonian)</label>
                                        <RichTextEditor 
                                            v-model="form.detailed_description_mk"
                                            placeholder="Целосен опис со карактеристики, придобивки, спецификации..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Link URL</label>
                                    <input 
                                        v-model="form.link"
                                        type="text"
                                        class="form-control"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Category</label>
                                    <select v-model="form.category" class="form-select">
                                        <option value="laser">Laser</option>
                                        <option value="device">Device</option>
                                        <option value="other">Other</option>
                                    </select>
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
                                                @change="handleImageChange($event, 'image')"
                                                accept="image/*"
                                                class="form-control form-control-sm"
                                            />
                                            <small class="text-muted">JPG/PNG fallback</small>
                                            <div v-if="imagePreview" class="mt-2">
                                                <img :src="imagePreview" alt="Preview" class="img-thumbnail" style="max-height: 80px;" />
                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Desktop WebP</label>
                                            <input 
                                                type="file"
                                                @change="handleImageChange($event, 'image_desktop_webp')"
                                                accept="image/webp"
                                                class="form-control form-control-sm"
                                            />
                                            <small class="text-muted">Optimized for desktop</small>
                                            <div v-if="desktopWebpPreview" class="mt-2">
                                                <img :src="desktopWebpPreview" alt="Desktop Preview" class="img-thumbnail" style="max-height: 80px;" />
                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Mobile WebP</label>
                                            <input 
                                                type="file"
                                                @change="handleImageChange($event, 'image_mobile_webp')"
                                                accept="image/webp"
                                                class="form-control form-control-sm"
                                            />
                                            <small class="text-muted">Optimized for mobile</small>
                                            <div v-if="mobileWebpPreview" class="mt-2">
                                                <img :src="mobileWebpPreview" alt="Mobile Preview" class="img-thumbnail" style="max-height: 80px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check mb-4">
                                <input 
                                    v-model="form.is_active"
                                    type="checkbox"
                                    id="is_active"
                                    class="form-check-input"
                                />
                                <label for="is_active" class="form-check-label">
                                    Active
                                </label>
                            </div>

                            <div class="d-flex gap-2">
                                <button 
                                    type="submit"
                                    class="btn btn-primary"
                                    :disabled="form.processing"
                                >
                                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                                </button>
                                <Link :href="route('admin.equipment.index')" class="btn btn-outline-secondary">
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
