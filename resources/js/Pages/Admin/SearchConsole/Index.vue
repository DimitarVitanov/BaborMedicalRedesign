<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { computed, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
    summary: Object,
    prevSummary: Object,
    topQueries: Array,
    topPages: Array,
    currentDaily: Array,
    previousDaily: Array,
    pageTimeSeries: Object,
    trackedPages: Array,
    dateRange: Object,
    prevDateRange: Object,
    error: String,
});

const selectedPage = ref(props.trackedPages?.[0] || '');

// Comparison helpers
const calcChange = (current, previous) => {
    if (!previous || previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
};

const clicksChange = computed(() => calcChange(props.summary?.clicks, props.prevSummary?.clicks));
const impressionsChange = computed(() => calcChange(props.summary?.impressions, props.prevSummary?.impressions));
const ctrChange = computed(() => {
    const diff = (props.summary?.ctr || 0) - (props.prevSummary?.ctr || 0);
    return Math.round(diff * 100) / 100;
});
const positionChange = computed(() => {
    const diff = (props.prevSummary?.position || 0) - (props.summary?.position || 0);
    return Math.round(diff * 10) / 10;
});

// Shared chart theme
const chartTheme = {
    fontFamily: 'Poppins, sans-serif',
};

// Domain-wide Clicks line chart (current vs previous)
const domainClicksOptions = computed(() => ({
    chart: { type: 'area', toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
    colors: ['#c9a87c', '#d4d4d4'],
    stroke: { curve: 'smooth', width: [3, 2] },
    fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] },
    },
    dataLabels: { enabled: false },
    xaxis: {
        categories: props.currentDaily?.map(d => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
        }) || [],
        labels: { style: { fontSize: '11px', colors: '#999' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    yaxis: { labels: { style: { fontSize: '11px', colors: '#999' } } },
    grid: { borderColor: '#f0f0f0', strokeDashArray: 4 },
    legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px', fontWeight: 500 },
    tooltip: { shared: true, intersect: false, y: { formatter: (val) => `${val} clicks` } },
}));

const domainClicksSeries = computed(() => [
    { name: 'Current Period', data: props.currentDaily?.map(d => d.clicks) || [] },
    { name: 'Previous Period', data: props.previousDaily?.map(d => d.clicks) || [] },
]);

// Domain-wide Impressions line chart
const domainImpressionsOptions = computed(() => ({
    chart: { type: 'area', toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
    colors: ['#3D4F5F', '#d4d4d4'],
    stroke: { curve: 'smooth', width: [3, 2] },
    fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] },
    },
    dataLabels: { enabled: false },
    xaxis: {
        categories: props.currentDaily?.map(d => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
        }) || [],
        labels: { style: { fontSize: '11px', colors: '#999' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    yaxis: { labels: { style: { fontSize: '11px', colors: '#999' } } },
    grid: { borderColor: '#f0f0f0', strokeDashArray: 4 },
    legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px', fontWeight: 500 },
    tooltip: { shared: true, intersect: false, y: { formatter: (val) => `${val} impressions` } },
}));

const domainImpressionsSeries = computed(() => [
    { name: 'Current Period', data: props.currentDaily?.map(d => d.impressions) || [] },
    { name: 'Previous Period', data: props.previousDaily?.map(d => d.impressions) || [] },
]);

// Per-page clicks line chart
const pageChartOptions = computed(() => {
    const data = props.pageTimeSeries?.[selectedPage.value] || [];
    return {
        chart: { type: 'area', toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ['#667eea'],
        stroke: { curve: 'smooth', width: 3 },
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: data.map(d => {
                const date = new Date(d.date);
                return `${date.getDate()}/${date.getMonth() + 1}`;
            }),
            labels: { style: { fontSize: '11px', colors: '#999' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { labels: { style: { fontSize: '11px', colors: '#999' } } },
        grid: { borderColor: '#f0f0f0', strokeDashArray: 4 },
        tooltip: { y: { formatter: (val) => `${val} clicks` } },
    };
});

const pageChartSeries = computed(() => {
    const data = props.pageTimeSeries?.[selectedPage.value] || [];
    return [{ name: 'Clicks', data: data.map(d => d.clicks) }];
});

const pageImpressionsChartSeries = computed(() => {
    const data = props.pageTimeSeries?.[selectedPage.value] || [];
    return [{ name: 'Impressions', data: data.map(d => d.impressions) }];
});

const pageImpressionsChartOptions = computed(() => {
    const data = props.pageTimeSeries?.[selectedPage.value] || [];
    return {
        chart: { type: 'area', toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ['#11998e'],
        stroke: { curve: 'smooth', width: 3 },
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: data.map(d => {
                const date = new Date(d.date);
                return `${date.getDate()}/${date.getMonth() + 1}`;
            }),
            labels: { style: { fontSize: '11px', colors: '#999' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { labels: { style: { fontSize: '11px', colors: '#999' } } },
        grid: { borderColor: '#f0f0f0', strokeDashArray: 4 },
        tooltip: { y: { formatter: (val) => `${val} impressions` } },
    };
});

// Top Queries bar chart
const queriesChartOptions = computed(() => ({
    chart: { type: 'bar', toolbar: { show: false }, fontFamily: chartTheme.fontFamily },
    plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
    colors: ['#c9a87c'],
    xaxis: { categories: props.topQueries?.map(q => q.query.substring(0, 30)) || [] },
    tooltip: { y: { formatter: (val) => `${val} clicks` } },
}));

const queriesChartSeries = computed(() => [{
    name: 'Clicks',
    data: props.topQueries?.map(q => q.clicks) || [],
}]);

// Top Pages bar chart
const pagesChartOptions = computed(() => ({
    chart: { type: 'bar', toolbar: { show: false }, fontFamily: chartTheme.fontFamily },
    plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
    colors: ['#3D4F5F'],
    xaxis: {
        categories: props.topPages?.map(p => {
            try { return new URL(p.page).pathname.substring(0, 30); }
            catch { return p.page.substring(0, 30); }
        }) || [],
    },
    tooltip: { y: { formatter: (val) => `${val} clicks` } },
}));

const pagesChartSeries = computed(() => [{
    name: 'Clicks',
    data: props.topPages?.map(p => p.clicks) || [],
}]);

const pageName = (path) => {
    const names = {
        '/services/laser-aesthetic': 'Laser Treatments',
        '/services/body-treatments': 'Body Treatments',
        '/services/injectable-methods': 'Injectable Methods',
        '/services/cosmetology': 'Cosmetology',
        '/lasers/alma-soprano-titanium': 'Alma Soprano Titanium',
        '/': 'Homepage',
    };
    return names[path] || path;
};
</script>

<template>
    <Head title="Search Console" />

    <AuthenticatedLayout>
        <template #header>
            <div>
                <h2 class="h4 mb-1">Google Search Console</h2>
                <p class="text-muted mb-0 small" v-if="dateRange">
                    {{ dateRange.start }} to {{ dateRange.end }} vs {{ prevDateRange?.start }} to {{ prevDateRange?.end }}
                </p>
            </div>
        </template>

        <div class="container-fluid py-4">
            <!-- Error Message -->
            <div v-if="error" class="alert alert-danger">
                <strong>Error:</strong> {{ error }}
            </div>

            <!-- Summary Cards with Comparison -->
            <div class="row g-3 mb-4" v-if="summary">
                <div class="col-md-3">
                    <div class="card stat-card p-4">
                        <div class="stat-label">Total Clicks</div>
                        <div class="stat-value">{{ summary.clicks?.toLocaleString() || 0 }}</div>
                        <div class="stat-change" :class="clicksChange >= 0 ? 'up' : 'down'">
                            <span class="arrow">{{ clicksChange >= 0 ? '↑' : '↓' }}</span>
                            {{ Math.abs(clicksChange) }}% vs prev period
                        </div>
                        <div class="stat-prev">Prev: {{ prevSummary?.clicks?.toLocaleString() || 0 }}</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card p-4">
                        <div class="stat-label">Impressions</div>
                        <div class="stat-value">{{ summary.impressions?.toLocaleString() || 0 }}</div>
                        <div class="stat-change" :class="impressionsChange >= 0 ? 'up' : 'down'">
                            <span class="arrow">{{ impressionsChange >= 0 ? '↑' : '↓' }}</span>
                            {{ Math.abs(impressionsChange) }}% vs prev period
                        </div>
                        <div class="stat-prev">Prev: {{ prevSummary?.impressions?.toLocaleString() || 0 }}</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card p-4">
                        <div class="stat-label">Avg CTR</div>
                        <div class="stat-value">{{ summary.ctr || 0 }}%</div>
                        <div class="stat-change" :class="ctrChange >= 0 ? 'up' : 'down'">
                            <span class="arrow">{{ ctrChange >= 0 ? '↑' : '↓' }}</span>
                            {{ Math.abs(ctrChange) }}pp vs prev period
                        </div>
                        <div class="stat-prev">Prev: {{ prevSummary?.ctr || 0 }}%</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card p-4">
                        <div class="stat-label">Avg Position</div>
                        <div class="stat-value">{{ summary.position || 0 }}</div>
                        <div class="stat-change" :class="positionChange >= 0 ? 'up' : 'down'">
                            <span class="arrow">{{ positionChange >= 0 ? '↑' : '↓' }}</span>
                            {{ Math.abs(positionChange) }} positions
                        </div>
                        <div class="stat-prev">Prev: {{ prevSummary?.position || 0 }}</div>
                    </div>
                </div>
            </div>

            <!-- Domain-wide Line Charts -->
            <div class="row g-3 mb-4">
                <div class="col-lg-6">
                    <div class="card p-4">
                        <div class="chart-header">
                            <h5 class="mb-0">Daily Clicks</h5>
                            <span class="badge-period">Current vs Previous 28 days</span>
                        </div>
                        <VueApexCharts
                            v-if="currentDaily?.length"
                            type="area"
                            height="300"
                            :options="domainClicksOptions"
                            :series="domainClicksSeries"
                        />
                        <p v-else class="text-muted mt-3">No daily data available</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card p-4">
                        <div class="chart-header">
                            <h5 class="mb-0">Daily Impressions</h5>
                            <span class="badge-period">Current vs Previous 28 days</span>
                        </div>
                        <VueApexCharts
                            v-if="currentDaily?.length"
                            type="area"
                            height="300"
                            :options="domainImpressionsOptions"
                            :series="domainImpressionsSeries"
                        />
                        <p v-else class="text-muted mt-3">No daily data available</p>
                    </div>
                </div>
            </div>

            <!-- Per-Page Line Charts -->
            <div class="card p-4 mb-4" v-if="trackedPages?.length">
                <div class="chart-header mb-3">
                    <h5 class="mb-0">Page Performance</h5>
                    <select v-model="selectedPage" class="form-select form-select-sm page-select">
                        <option v-for="page in trackedPages" :key="page" :value="page">
                            {{ pageName(page) }}
                        </option>
                    </select>
                </div>
                <div class="row g-3">
                    <div class="col-lg-6">
                        <h6 class="text-muted small mb-2">Clicks – {{ pageName(selectedPage) }}</h6>
                        <VueApexCharts
                            v-if="pageTimeSeries?.[selectedPage]?.length"
                            type="area"
                            height="250"
                            :options="pageChartOptions"
                            :series="pageChartSeries"
                        />
                        <p v-else class="text-muted">No data for this page</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="text-muted small mb-2">Impressions – {{ pageName(selectedPage) }}</h6>
                        <VueApexCharts
                            v-if="pageTimeSeries?.[selectedPage]?.length"
                            type="area"
                            height="250"
                            :options="pageImpressionsChartOptions"
                            :series="pageImpressionsChartSeries"
                        />
                        <p v-else class="text-muted">No data for this page</p>
                    </div>
                </div>
            </div>

            <!-- Top Queries & Pages Bar Charts -->
            <div class="row g-3 mb-4">
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
            <div class="row g-3">
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Query Details</h5>
                        <div class="table-responsive">
                            <table class="table table-sm table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Query</th>
                                        <th class="text-end">Clicks</th>
                                        <th class="text-end">Impressions</th>
                                        <th class="text-end">CTR</th>
                                        <th class="text-end">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(query, i) in topQueries" :key="query.query">
                                        <td><span class="rank">{{ i + 1 }}</span></td>
                                        <td>{{ query.query }}</td>
                                        <td class="text-end fw-bold">{{ query.clicks }}</td>
                                        <td class="text-end">{{ query.impressions }}</td>
                                        <td class="text-end">{{ query.ctr }}%</td>
                                        <td class="text-end">{{ query.position }}</td>
                                    </tr>
                                    <tr v-if="!topQueries?.length">
                                        <td colspan="6" class="text-muted text-center">No data</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 class="mb-3">Page Details</h5>
                        <div class="table-responsive">
                            <table class="table table-sm table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Page</th>
                                        <th class="text-end">Clicks</th>
                                        <th class="text-end">Impressions</th>
                                        <th class="text-end">CTR</th>
                                        <th class="text-end">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(page, i) in topPages" :key="page.page">
                                        <td><span class="rank">{{ i + 1 }}</span></td>
                                        <td class="text-truncate" style="max-width: 200px;">{{ page.page }}</td>
                                        <td class="text-end fw-bold">{{ page.clicks }}</td>
                                        <td class="text-end">{{ page.impressions }}</td>
                                        <td class="text-end">{{ page.ctr }}%</td>
                                        <td class="text-end">{{ page.position }}</td>
                                    </tr>
                                    <tr v-if="!topPages?.length">
                                        <td colspan="6" class="text-muted text-center">No data</td>
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border: none;
}

.stat-card {
    position: relative;
    overflow: hidden;
}

.stat-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c757d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #1e2d3d;
    line-height: 1.1;
    margin-bottom: 8px;
}

.stat-change {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 4px;
}

.stat-change.up {
    color: #22c55e;
}

.stat-change.down {
    color: #ef4444;
}

.stat-change .arrow {
    font-size: 0.9rem;
}

.stat-prev {
    font-size: 0.75rem;
    color: #aaa;
}

.chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.badge-period {
    font-size: 0.7rem;
    font-weight: 500;
    padding: 4px 10px;
    background: #f0f0f0;
    border-radius: 20px;
    color: #666;
}

.page-select {
    width: auto;
    min-width: 200px;
    font-size: 0.85rem;
}

.rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background: #f0f0f0;
    font-size: 0.75rem;
    font-weight: 600;
    color: #666;
}

h5 {
    font-weight: 600;
    color: #1e2d3d;
}
</style>
