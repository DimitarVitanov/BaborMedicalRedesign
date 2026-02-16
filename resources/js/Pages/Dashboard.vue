<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
    searchConsole: Object,
});

// Donut Chart for Top Queries
const queriesChartOptions = computed(() => ({
    chart: {
        type: 'donut',
        fontFamily: 'Poppins, sans-serif',
    },
    labels: props.searchConsole?.topQueries?.slice(0, 5).map(q => q.query?.substring(0, 20)) || [],
    colors: ['#c9a87c', '#3D4F5F', '#667eea', '#11998e', '#f093fb'],
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1e2d3d',
                    },
                    value: {
                        show: true,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#1e2d3d',
                        formatter: (val) => val,
                    },
                    total: {
                        show: true,
                        label: 'Total Clicks',
                        fontSize: '12px',
                        color: '#6c757d',
                        formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0),
                    },
                },
            },
        },
    },
    dataLabels: { enabled: false },
    legend: {
        position: 'bottom',
        fontSize: '12px',
        fontWeight: 500,
        markers: { width: 10, height: 10, radius: 3 },
        itemMargin: { horizontal: 10, vertical: 5 },
    },
    stroke: { width: 0 },
    tooltip: {
        y: { formatter: (val) => `${val} clicks` },
    },
}));

const queriesChartSeries = computed(() => 
    props.searchConsole?.topQueries?.slice(0, 5).map(q => q.clicks) || []
);

// Donut Chart for Top Pages
const pagesChartOptions = computed(() => ({
    chart: {
        type: 'donut',
        fontFamily: 'Poppins, sans-serif',
    },
    labels: props.searchConsole?.topPages?.slice(0, 5).map(p => {
        try {
            return new URL(p.page).pathname.substring(0, 20);
        } catch {
            return p.page?.substring(0, 20);
        }
    }) || [],
    colors: ['#3D4F5F', '#c9a87c', '#764ba2', '#38ef7d', '#fc8181'],
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1e2d3d',
                    },
                    value: {
                        show: true,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#1e2d3d',
                        formatter: (val) => val,
                    },
                    total: {
                        show: true,
                        label: 'Total Clicks',
                        fontSize: '12px',
                        color: '#6c757d',
                        formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0),
                    },
                },
            },
        },
    },
    dataLabels: { enabled: false },
    legend: {
        position: 'bottom',
        fontSize: '12px',
        fontWeight: 500,
        markers: { width: 10, height: 10, radius: 3 },
        itemMargin: { horizontal: 10, vertical: 5 },
    },
    stroke: { width: 0 },
    tooltip: {
        y: { formatter: (val) => `${val} clicks` },
    },
}));

const pagesChartSeries = computed(() => 
    props.searchConsole?.topPages?.slice(0, 5).map(p => p.clicks) || []
);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <div class="header-content">
                <h2 class="page-title">Dashboard</h2>
                <p class="page-subtitle" v-if="searchConsole?.dateRange">
                    Analytics from {{ searchConsole.dateRange.start }} to {{ searchConsole.dateRange.end }}
                </p>
            </div>
        </template>

        <div class="dashboard-container">
            <!-- Error Message -->
            <div v-if="searchConsole?.error" class="error-banner">
                <div class="error-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                </div>
                <div class="error-text">
                    <strong>Search Console Error</strong>
                    <span>{{ searchConsole.error }}</span>
                </div>
            </div>

            <!-- Summary Cards -->
            <div class="stats-grid" v-if="searchConsole?.summary">
                <div class="stat-card stat-clicks">
                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .557.103z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <span class="stat-value">{{ searchConsole.summary.clicks?.toLocaleString() || 0 }}</span>
                        <span class="stat-label">Total Clicks</span>
                    </div>
                </div>
                
                <div class="stat-card stat-impressions">
                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <span class="stat-value">{{ searchConsole.summary.impressions?.toLocaleString() || 0 }}</span>
                        <span class="stat-label">Impressions</span>
                    </div>
                </div>
                
                <div class="stat-card stat-ctr">
                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <span class="stat-value">{{ searchConsole.summary.ctr || 0 }}%</span>
                        <span class="stat-label">Avg CTR</span>
                    </div>
                </div>
                
                <div class="stat-card stat-position">
                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <span class="stat-value">{{ searchConsole.summary.position || 0 }}</span>
                        <span class="stat-label">Avg Position</span>
                    </div>
                </div>
            </div>

            <!-- Charts Row -->
            <div class="charts-grid">
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">Top Search Queries</h3>
                        <span class="chart-badge">Last 28 days</span>
                    </div>
                    <div class="chart-body">
                        <VueApexCharts
                            v-if="searchConsole?.topQueries?.length"
                            type="donut"
                            height="320"
                            :options="queriesChartOptions"
                            :series="queriesChartSeries"
                        />
                        <div v-else class="empty-state">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <p>No query data available</p>
                        </div>
                    </div>
                </div>

                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">Top Pages</h3>
                        <span class="chart-badge">Last 28 days</span>
                    </div>
                    <div class="chart-body">
                        <VueApexCharts
                            v-if="searchConsole?.topPages?.length"
                            type="donut"
                            height="320"
                            :options="pagesChartOptions"
                            :series="pagesChartSeries"
                        />
                        <div v-else class="empty-state">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                            <p>No page data available</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Tables -->
            <div class="tables-grid">
                <div class="table-card">
                    <div class="table-header">
                        <h3 class="table-title">Query Performance</h3>
                    </div>
                    <div class="table-body">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Search Query</th>
                                    <th class="text-end">Clicks</th>
                                    <th class="text-end">Impressions</th>
                                    <th class="text-end">CTR</th>
                                    <th class="text-end">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(query, index) in searchConsole?.topQueries" :key="query.query">
                                    <td>
                                        <div class="query-cell">
                                            <span class="rank-badge">{{ index + 1 }}</span>
                                            <span class="query-text">{{ query.query }}</span>
                                        </div>
                                    </td>
                                    <td class="text-end"><span class="metric clicks">{{ query.clicks }}</span></td>
                                    <td class="text-end"><span class="metric">{{ query.impressions }}</span></td>
                                    <td class="text-end"><span class="metric ctr">{{ query.ctr }}%</span></td>
                                    <td class="text-end"><span class="metric position">{{ query.position }}</span></td>
                                </tr>
                                <tr v-if="!searchConsole?.topQueries?.length">
                                    <td colspan="5" class="empty-row">No data available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table-card">
                    <div class="table-header">
                        <h3 class="table-title">Page Performance</h3>
                    </div>
                    <div class="table-body">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Page URL</th>
                                    <th class="text-end">Clicks</th>
                                    <th class="text-end">Impressions</th>
                                    <th class="text-end">CTR</th>
                                    <th class="text-end">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(page, index) in searchConsole?.topPages" :key="page.page">
                                    <td>
                                        <div class="query-cell">
                                            <span class="rank-badge">{{ index + 1 }}</span>
                                            <span class="query-text page-url">{{ page.page }}</span>
                                        </div>
                                    </td>
                                    <td class="text-end"><span class="metric clicks">{{ page.clicks }}</span></td>
                                    <td class="text-end"><span class="metric">{{ page.impressions }}</span></td>
                                    <td class="text-end"><span class="metric ctr">{{ page.ctr }}%</span></td>
                                    <td class="text-end"><span class="metric position">{{ page.position }}</span></td>
                                </tr>
                                <tr v-if="!searchConsole?.topPages?.length">
                                    <td colspan="5" class="empty-row">No data available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.header-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.page-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e2d3d;
    margin: 0;
}

.page-subtitle {
    font-size: 0.875rem;
    color: #6c757d;
    margin: 0;
}

.dashboard-container {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* Error Banner */
.error-banner {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 20px;
    background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
    border: 1px solid #feb2b2;
    border-radius: 12px;
    color: #c53030;
}

.error-icon {
    flex-shrink: 0;
    padding: 8px;
    background: #fc8181;
    border-radius: 8px;
    color: #fff;
}

.error-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.error-text strong {
    font-weight: 600;
}

.error-text span {
    font-size: 0.875rem;
    opacity: 0.9;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

@media (max-width: 1200px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    flex-shrink: 0;
}

.stat-clicks .stat-icon {
    background: linear-gradient(135deg, #c9a87c 0%, #a88a5c 100%);
    color: #fff;
}

.stat-impressions .stat-icon {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
}

.stat-ctr .stat-icon {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: #fff;
}

.stat-position .stat-icon {
    background: linear-gradient(135deg, #3D4F5F 0%, #1e2d3d 100%);
    color: #fff;
}

.stat-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e2d3d;
    line-height: 1.2;
}

.stat-label {
    font-size: 0.875rem;
    color: #6c757d;
    font-weight: 500;
}

/* Charts Grid */
.charts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 992px) {
    .charts-grid {
        grid-template-columns: 1fr;
    }
}

.chart-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid #f1f1f1;
}

.chart-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1e2d3d;
    margin: 0;
}

.chart-badge {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 4px 10px;
    background: #f0f4f8;
    color: #6c757d;
    border-radius: 20px;
}

.chart-body {
    padding: 16px 20px 20px;
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: #adb5bd;
    gap: 12px;
}

.empty-state p {
    margin: 0;
    font-size: 0.875rem;
}

/* Tables Grid */
.tables-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 1200px) {
    .tables-grid {
        grid-template-columns: 1fr;
    }
}

.table-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.table-header {
    padding: 20px 24px;
    border-bottom: 1px solid #f1f1f1;
}

.table-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1e2d3d;
    margin: 0;
}

.table-body {
    overflow-x: auto;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th {
    padding: 14px 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #6c757d;
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
}

.data-table td {
    padding: 14px 20px;
    font-size: 0.875rem;
    color: #495057;
    border-bottom: 1px solid #f1f1f1;
}

.data-table tbody tr:hover {
    background: #f8f9fa;
}

.data-table tbody tr:last-child td {
    border-bottom: none;
}

.query-cell {
    display: flex;
    align-items: center;
    gap: 12px;
}

.rank-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
    font-weight: 600;
    background: linear-gradient(135deg, #c9a87c 0%, #a88a5c 100%);
    color: #fff;
    border-radius: 6px;
    flex-shrink: 0;
}

.query-text {
    font-weight: 500;
    color: #1e2d3d;
}

.page-url {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.metric {
    font-weight: 500;
}

.metric.clicks {
    color: #c9a87c;
    font-weight: 600;
}

.metric.ctr {
    color: #11998e;
}

.metric.position {
    color: #667eea;
}

.empty-row {
    text-align: center;
    color: #adb5bd;
    padding: 40px 20px !important;
}

.text-end {
    text-align: right;
}
</style>
