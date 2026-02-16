<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

// Props from the controller
const props = defineProps({
    summary: Object,
    topQueries: Array,
    topPages: Array,
    dateRange: Object,
    error: String,
});

// Chart for Top Queries (Bar Chart)
const queriesChartOptions = computed(() => ({
    chart: {
        type: 'bar',
        toolbar: { show: false },
    },
    plotOptions: {
        bar: { horizontal: true, borderRadius: 4 },
    },
    colors: ['#c9a87c'],
    xaxis: {
        categories: props.topQueries?.map(q => q.query.substring(0, 30)) || [],
    },
    tooltip: {
        y: { formatter: (val) => `${val} clicks` },
    },
}));

const queriesChartSeries = computed(() => [{
    name: 'Clicks',
    data: props.topQueries?.map(q => q.clicks) || [],
}]);

// Chart for Top Pages (Bar Chart)
const pagesChartOptions = computed(() => ({
    chart: {
        type: 'bar',
        toolbar: { show: false },
    },
    plotOptions: {
        bar: { horizontal: true, borderRadius: 4 },
    },
    colors: ['#3D4F5F'],
    xaxis: {
        categories: props.topPages?.map(p => {
            // Show only the path, not full URL
            try {
                return new URL(p.page).pathname.substring(0, 30);
            } catch {
                return p.page.substring(0, 30);
            }
        }) || [],
    },
    tooltip: {
        y: { formatter: (val) => `${val} clicks` },
    },
}));

const pagesChartSeries = computed(() => [{
    name: 'Clicks',
    data: props.topPages?.map(p => p.clicks) || [],
}]);
</script>

<template>
    <Head title="Search Console" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="h4 mb-0">Google Search Console</h2>
        </template>

        <div class="container-fluid py-4">
            <!-- Error Message -->
            <div v-if="error" class="alert alert-danger">
                <strong>Error:</strong> {{ error }}
            </div>

            <!-- Date Range Info -->
            <p class="text-muted mb-4">
                Data from {{ dateRange?.start }} to {{ dateRange?.end }}
            </p>

            <!-- Summary Cards -->
            <div class="row g-4 mb-4" v-if="summary">
                <div class="col-md-3">
                    <div class="card text-center p-4">
                        <h3 class="text-primary mb-1">{{ summary.clicks?.toLocaleString() }}</h3>
                        <p class="text-muted mb-0">Total Clicks</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center p-4">
                        <h3 class="text-primary mb-1">{{ summary.impressions?.toLocaleString() }}</h3>
                        <p class="text-muted mb-0">Impressions</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center p-4">
                        <h3 class="text-primary mb-1">{{ summary.ctr }}%</h3>
                        <p class="text-muted mb-0">Avg CTR</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center p-4">
                        <h3 class="text-primary mb-1">{{ summary.position }}</h3>
                        <p class="text-muted mb-0">Avg Position</p>
                    </div>
                </div>
            </div>

            <!-- Charts Row -->
            <div class="row g-4">
                <!-- Top Queries Chart -->
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Top Search Queries</h5>
                        <VueApexCharts
                            v-if="topQueries?.length"
                            type="bar"
                            height="350"
                            :options="queriesChartOptions"
                            :series="queriesChartSeries"
                        />
                        <p v-else class="text-muted">No query data available</p>
                    </div>
                </div>

                <!-- Top Pages Chart -->
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Top Pages</h5>
                        <VueApexCharts
                            v-if="topPages?.length"
                            type="bar"
                            height="350"
                            :options="pagesChartOptions"
                            :series="pagesChartSeries"
                        />
                        <p v-else class="text-muted">No page data available</p>
                    </div>
                </div>
            </div>

            <!-- Data Tables -->
            <div class="row g-4 mt-2">
                <!-- Top Queries Table -->
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Query Details</h5>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Query</th>
                                        <th class="text-end">Clicks</th>
                                        <th class="text-end">Impressions</th>
                                        <th class="text-end">CTR</th>
                                        <th class="text-end">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="query in topQueries" :key="query.query">
                                        <td>{{ query.query }}</td>
                                        <td class="text-end">{{ query.clicks }}</td>
                                        <td class="text-end">{{ query.impressions }}</td>
                                        <td class="text-end">{{ query.ctr }}%</td>
                                        <td class="text-end">{{ query.position }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Top Pages Table -->
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Page Details</h5>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Page</th>
                                        <th class="text-end">Clicks</th>
                                        <th class="text-end">Impressions</th>
                                        <th class="text-end">CTR</th>
                                        <th class="text-end">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="page in topPages" :key="page.page">
                                        <td class="text-truncate" style="max-width: 200px;">{{ page.page }}</td>
                                        <td class="text-end">{{ page.clicks }}</td>
                                        <td class="text-end">{{ page.impressions }}</td>
                                        <td class="text-end">{{ page.ctr }}%</td>
                                        <td class="text-end">{{ page.position }}</td>
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

<style scoped>
.card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: none;
}

.text-primary {
    color: #c9a87c !important;
}

h3 {
    font-size: 2rem;
    font-weight: 600;
}
</style>
