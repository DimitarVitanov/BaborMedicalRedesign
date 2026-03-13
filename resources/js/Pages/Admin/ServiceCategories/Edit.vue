<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({
    category: Object,
});

const form = useForm({
    name_en: props.category.name_en,
    name_mk: props.category.name_mk,
    slug: props.category.slug,
    parent_type: props.category.parent_type || 'cosmetology',
    description_en: props.category.description_en || '',
    description_mk: props.category.description_mk || '',
    display_type: props.category.display_type,
    is_active: props.category.is_active,
    extra_data_en: props.category.extra_data_en || {},
    extra_data_mk: props.category.extra_data_mk || {},
    price_list_items_en: props.category.price_list_items_en || [],
    price_list_items_mk: props.category.price_list_items_mk || [],
});

const extraDataKeys = computed(() => {
    const enKeys = Object.keys(form.extra_data_en || {});
    const mkKeys = Object.keys(form.extra_data_mk || {});
    return [...new Set([...enKeys, ...mkKeys])];
});

const keyLabel = (key) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const isObjectList = (key) => {
    const enItems = form.extra_data_en?.[key] || [];
    const mkItems = form.extra_data_mk?.[key] || [];
    const allItems = [...enItems, ...mkItems];
    return allItems.length > 0 && typeof allItems[0] === 'object' && allItems[0] !== null;
};

const getObjectKeys = (key) => {
    const enItems = form.extra_data_en?.[key] || [];
    const mkItems = form.extra_data_mk?.[key] || [];
    const allItems = [...enItems, ...mkItems];
    const keys = new Set();
    allItems.forEach(item => {
        if (typeof item === 'object' && item !== null) {
            Object.keys(item).forEach(k => keys.add(k));
        }
    });
    return [...keys];
};

const fieldLabel = (field) => {
    return field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const addItem = (key, lang) => {
    const data = lang === 'en' ? form.extra_data_en : form.extra_data_mk;
    if (!data[key]) data[key] = [];
    if (isObjectList(key)) {
        const template = {};
        getObjectKeys(key).forEach(k => {
            template[k] = Array.isArray((data[key][0] || {})[k]) ? [] : '';
        });
        data[key].push(template);
    } else {
        data[key].push('');
    }
};

const removeItem = (key, lang, index) => {
    const data = lang === 'en' ? form.extra_data_en : form.extra_data_mk;
    if (data[key]) data[key].splice(index, 1);
};

const addNewListKey = () => {
    const key = prompt('Enter list key name (e.g. treatment_areas, combined_strategies):');
    if (key && key.trim()) {
        const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
        if (!form.extra_data_en[cleanKey]) form.extra_data_en[cleanKey] = [];
        if (!form.extra_data_mk[cleanKey]) form.extra_data_mk[cleanKey] = [];
    }
};

const removeListKey = (key) => {
    if (confirm(`Remove the entire "${keyLabel(key)}" list?`)) {
        delete form.extra_data_en[key];
        delete form.extra_data_mk[key];
    }
};

const addPriceItem = (lang) => {
    const list = lang === 'en' ? form.price_list_items_en : form.price_list_items_mk;
    list.push({ name: '', price: 0 });
};

const removePriceItem = (lang, index) => {
    const list = lang === 'en' ? form.price_list_items_en : form.price_list_items_mk;
    list.splice(index, 1);
};

const submit = () => {
    form.post(route('admin.service-categories.update', props.category.id), {
        onError: (errors) => {
            console.error('Validation errors:', errors);
        },
    });
};
</script>

<template>
    <Head title="Edit Service Category" />

    <AuthenticatedLayout>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Edit Service Category</h2>
                <Link :href="route('admin.service-categories.index')" class="btn btn-outline-secondary">
                    Back to List
                </Link>
            </div>
        </template>

        <div class="py-4">
            <div class="container">
                <form @submit.prevent="submit">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Category Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Name (English) *</label>
                                    <input 
                                        v-model="form.name_en"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.name_en }"
                                        required
                                    />
                                    <div v-if="form.errors.name_en" class="invalid-feedback">
                                        {{ form.errors.name_en }}
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Name (Macedonian) *</label>
                                    <input 
                                        v-model="form.name_mk"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.name_mk }"
                                        required
                                    />
                                    <div v-if="form.errors.name_mk" class="invalid-feedback">
                                        {{ form.errors.name_mk }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Slug</label>
                                    <input 
                                        v-model="form.slug"
                                        type="text"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Display Type *</label>
                                    <select v-model="form.display_type" class="form-select">
                                        <option value="accordion">Accordion (expandable items)</option>
                                        <option value="buttons">Buttons (non-expandable)</option>
                                        <option value="cards">Cards</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Parent Category *</label>
                                    <select v-model="form.parent_type" class="form-select">
                                        <option value="cosmetology">Козметологија / Cosmetology</option>
                                        <option value="laser_aesthetic">Ласерско Естетски Третмани / Laser Aesthetic Treatments</option>
                                        <option value="injectable">Инјектибилни методи / Injectable Methods</option>
                                    </select>
                                    <small class="text-muted">Choose which main service category this belongs to</small>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (English)</label>
                                    <textarea 
                                        v-model="form.description_en"
                                        class="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Description (Macedonian)</label>
                                    <textarea 
                                        v-model="form.description_mk"
                                        class="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="form-check form-switch mb-3">
                                <input 
                                    v-model="form.is_active"
                                    type="checkbox"
                                    class="form-check-input"
                                    id="isActive"
                                />
                                <label class="form-check-label" for="isActive">
                                    Active
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4" v-if="extraDataKeys.length > 0 || form.parent_type === 'laser_aesthetic' || form.parent_type === 'injectable' || form.parent_type === 'body_treatments'">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Page Content Lists</h5>
                            <button type="button" class="btn btn-sm btn-outline-primary" @click="addNewListKey">
                                + Add List
                            </button>
                        </div>
                        <div class="card-body">
                            <div v-for="key in extraDataKeys" :key="key" class="mb-4 border rounded p-3">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h6 class="mb-0 text-primary">{{ keyLabel(key) }}</h6>
                                    <button type="button" class="btn btn-sm btn-outline-danger" @click="removeListKey(key)">
                                        Remove List
                                    </button>
                                </div>
                                <div class="row" v-if="!isObjectList(key)">
                                    <div class="col-md-6">
                                        <label class="form-label fw-bold">English</label>
                                        <div v-for="(item, index) in (form.extra_data_en[key] || [])" :key="'en-'+index" class="input-group mb-2">
                                            <input 
                                                v-model="form.extra_data_en[key][index]"
                                                type="text"
                                                class="form-control form-control-sm"
                                            />
                                            <button type="button" class="btn btn-sm btn-outline-danger" @click="removeItem(key, 'en', index)">
                                                &times;
                                            </button>
                                        </div>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="addItem(key, 'en')">
                                            + Add Item (EN)
                                        </button>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label fw-bold">Macedonian</label>
                                        <div v-for="(item, index) in (form.extra_data_mk[key] || [])" :key="'mk-'+index" class="input-group mb-2">
                                            <input 
                                                v-model="form.extra_data_mk[key][index]"
                                                type="text"
                                                class="form-control form-control-sm"
                                            />
                                            <button type="button" class="btn btn-sm btn-outline-danger" @click="removeItem(key, 'mk', index)">
                                                &times;
                                            </button>
                                        </div>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="addItem(key, 'mk')">
                                            + Add Item (MK)
                                        </button>
                                    </div>
                                </div>

                                <!-- Rich object list editor -->
                                <div v-else>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="form-label fw-bold">English</label>
                                            <div v-for="(item, index) in (form.extra_data_en[key] || [])" :key="'en-obj-'+index" class="border rounded p-2 mb-2 bg-light">
                                                <div class="d-flex justify-content-between align-items-center mb-1">
                                                    <small class="text-muted fw-bold">#{{ index + 1 }}</small>
                                                    <button type="button" class="btn btn-sm btn-outline-danger py-0 px-1" @click="removeItem(key, 'en', index)">&times;</button>
                                                </div>
                                                <div v-for="field in getObjectKeys(key)" :key="'en-'+index+'-'+field" class="mb-1">
                                                    <label class="form-label mb-0" style="font-size: 0.75rem;">{{ fieldLabel(field) }}</label>
                                                    <textarea
                                                        v-if="field === 'desc'"
                                                        v-model="form.extra_data_en[key][index][field]"
                                                        class="form-control form-control-sm"
                                                        rows="2"
                                                    ></textarea>
                                                    <input
                                                        v-else-if="!Array.isArray(item[field])"
                                                        v-model="form.extra_data_en[key][index][field]"
                                                        type="text"
                                                        class="form-control form-control-sm"
                                                    />
                                                    <div v-else>
                                                        <div v-for="(subItem, si) in item[field]" :key="'en-sub-'+si" class="input-group input-group-sm mb-1">
                                                            <input v-model="form.extra_data_en[key][index][field][si]" type="text" class="form-control form-control-sm" />
                                                            <button type="button" class="btn btn-sm btn-outline-danger py-0 px-1" @click="item[field].splice(si, 1)">&times;</button>
                                                        </div>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary py-0" @click="item[field].push('')">+ Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addItem(key, 'en')">
                                                + Add Item (EN)
                                            </button>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label fw-bold">Macedonian</label>
                                            <div v-for="(item, index) in (form.extra_data_mk[key] || [])" :key="'mk-obj-'+index" class="border rounded p-2 mb-2 bg-light">
                                                <div class="d-flex justify-content-between align-items-center mb-1">
                                                    <small class="text-muted fw-bold">#{{ index + 1 }}</small>
                                                    <button type="button" class="btn btn-sm btn-outline-danger py-0 px-1" @click="removeItem(key, 'mk', index)">&times;</button>
                                                </div>
                                                <div v-for="field in getObjectKeys(key)" :key="'mk-'+index+'-'+field" class="mb-1">
                                                    <label class="form-label mb-0" style="font-size: 0.75rem;">{{ fieldLabel(field) }}</label>
                                                    <textarea
                                                        v-if="field === 'desc'"
                                                        v-model="form.extra_data_mk[key][index][field]"
                                                        class="form-control form-control-sm"
                                                        rows="2"
                                                    ></textarea>
                                                    <input
                                                        v-else-if="!Array.isArray(item[field])"
                                                        v-model="form.extra_data_mk[key][index][field]"
                                                        type="text"
                                                        class="form-control form-control-sm"
                                                    />
                                                    <div v-else>
                                                        <div v-for="(subItem, si) in item[field]" :key="'mk-sub-'+si" class="input-group input-group-sm mb-1">
                                                            <input v-model="form.extra_data_mk[key][index][field][si]" type="text" class="form-control form-control-sm" />
                                                            <button type="button" class="btn btn-sm btn-outline-danger py-0 px-1" @click="item[field].splice(si, 1)">&times;</button>
                                                        </div>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary py-0" @click="item[field].push('')">+ Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addItem(key, 'mk')">
                                                + Add Item (MK)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p v-if="extraDataKeys.length === 0" class="text-muted mb-0">
                                No content lists yet. Click "+ Add List" to create one.
                            </p>
                        </div>
                    </div>

                    <div class="card mb-4" v-if="form.parent_type === 'injectable' || form.parent_type === 'laser_aesthetic' || form.parent_type === 'body_treatments'">
                        <div class="card-header">
                            <h5 class="mb-0">Price List Items</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted small mb-3">These items are used to auto-generate the PDF price list shown on the frontend.</p>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <label class="form-label fw-bold mb-0">Macedonian</label>
                                        <button type="button" class="btn btn-sm btn-outline-primary" @click="addPriceItem('mk')">+ Add</button>
                                    </div>
                                    <div v-for="(item, index) in form.price_list_items_mk" :key="'mk-'+index" class="input-group input-group-sm mb-2">
                                        <input v-model="item.name" type="text" class="form-control" placeholder="Service name" />
                                        <input v-model.number="item.price" type="number" class="form-control" style="max-width: 100px;" placeholder="Price" />
                                        <button type="button" class="btn btn-outline-danger btn-sm" @click="removePriceItem('mk', index)">&times;</button>
                                    </div>
                                    <p v-if="!form.price_list_items_mk.length" class="text-muted small">No items yet.</p>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <label class="form-label fw-bold mb-0">English</label>
                                        <button type="button" class="btn btn-sm btn-outline-primary" @click="addPriceItem('en')">+ Add</button>
                                    </div>
                                    <div v-for="(item, index) in form.price_list_items_en" :key="'en-'+index" class="input-group input-group-sm mb-2">
                                        <input v-model="item.name" type="text" class="form-control" placeholder="Service name" />
                                        <input v-model.number="item.price" type="number" class="form-control" style="max-width: 100px;" placeholder="Price" />
                                        <button type="button" class="btn btn-outline-danger btn-sm" @click="removePriceItem('en', index)">&times;</button>
                                    </div>
                                    <p v-if="!form.price_list_items_en.length" class="text-muted small">No items yet.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2">
                        <Link :href="route('admin.service-categories.index')" class="btn btn-outline-secondary">
                            Cancel
                        </Link>
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
