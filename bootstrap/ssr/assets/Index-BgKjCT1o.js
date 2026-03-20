import { ref, computed, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, withDirectives, Fragment, renderList, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import VueApexCharts from "vue3-apexcharts";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
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
    error: String
  },
  setup(__props) {
    var _a;
    const props = __props;
    const selectedPage = ref(((_a = props.trackedPages) == null ? void 0 : _a[0]) || "");
    const calcChange = (current, previous) => {
      if (!previous || previous === 0) return current > 0 ? 100 : 0;
      return Math.round((current - previous) / previous * 100);
    };
    const clicksChange = computed(() => {
      var _a2, _b;
      return calcChange((_a2 = props.summary) == null ? void 0 : _a2.clicks, (_b = props.prevSummary) == null ? void 0 : _b.clicks);
    });
    const impressionsChange = computed(() => {
      var _a2, _b;
      return calcChange((_a2 = props.summary) == null ? void 0 : _a2.impressions, (_b = props.prevSummary) == null ? void 0 : _b.impressions);
    });
    const ctrChange = computed(() => {
      var _a2, _b;
      const diff = (((_a2 = props.summary) == null ? void 0 : _a2.ctr) || 0) - (((_b = props.prevSummary) == null ? void 0 : _b.ctr) || 0);
      return Math.round(diff * 100) / 100;
    });
    const positionChange = computed(() => {
      var _a2, _b;
      const diff = (((_a2 = props.prevSummary) == null ? void 0 : _a2.position) || 0) - (((_b = props.summary) == null ? void 0 : _b.position) || 0);
      return Math.round(diff * 10) / 10;
    });
    const chartTheme = {
      fontFamily: "Poppins, sans-serif"
    };
    const domainClicksOptions = computed(() => {
      var _a2;
      return {
        chart: { type: "area", toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ["#c9a87c", "#d4d4d4"],
        stroke: { curve: "smooth", width: [3, 2] },
        fill: {
          type: "gradient",
          gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: ((_a2 = props.currentDaily) == null ? void 0 : _a2.map((d) => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
          })) || [],
          labels: { style: { fontSize: "11px", colors: "#999" } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { labels: { style: { fontSize: "11px", colors: "#999" } } },
        grid: { borderColor: "#f0f0f0", strokeDashArray: 4 },
        legend: { position: "top", horizontalAlign: "right", fontSize: "12px", fontWeight: 500 },
        tooltip: { shared: true, intersect: false, y: { formatter: (val) => `${val} clicks` } }
      };
    });
    const domainClicksSeries = computed(() => {
      var _a2, _b;
      return [
        { name: "Current Period", data: ((_a2 = props.currentDaily) == null ? void 0 : _a2.map((d) => d.clicks)) || [] },
        { name: "Previous Period", data: ((_b = props.previousDaily) == null ? void 0 : _b.map((d) => d.clicks)) || [] }
      ];
    });
    const domainImpressionsOptions = computed(() => {
      var _a2;
      return {
        chart: { type: "area", toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ["#3D4F5F", "#d4d4d4"],
        stroke: { curve: "smooth", width: [3, 2] },
        fill: {
          type: "gradient",
          gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: ((_a2 = props.currentDaily) == null ? void 0 : _a2.map((d) => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
          })) || [],
          labels: { style: { fontSize: "11px", colors: "#999" } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { labels: { style: { fontSize: "11px", colors: "#999" } } },
        grid: { borderColor: "#f0f0f0", strokeDashArray: 4 },
        legend: { position: "top", horizontalAlign: "right", fontSize: "12px", fontWeight: 500 },
        tooltip: { shared: true, intersect: false, y: { formatter: (val) => `${val} impressions` } }
      };
    });
    const domainImpressionsSeries = computed(() => {
      var _a2, _b;
      return [
        { name: "Current Period", data: ((_a2 = props.currentDaily) == null ? void 0 : _a2.map((d) => d.impressions)) || [] },
        { name: "Previous Period", data: ((_b = props.previousDaily) == null ? void 0 : _b.map((d) => d.impressions)) || [] }
      ];
    });
    const pageChartOptions = computed(() => {
      var _a2;
      const data = ((_a2 = props.pageTimeSeries) == null ? void 0 : _a2[selectedPage.value]) || [];
      return {
        chart: { type: "area", toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ["#667eea"],
        stroke: { curve: "smooth", width: 3 },
        fill: {
          type: "gradient",
          gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: data.map((d) => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
          }),
          labels: { style: { fontSize: "11px", colors: "#999" } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { labels: { style: { fontSize: "11px", colors: "#999" } } },
        grid: { borderColor: "#f0f0f0", strokeDashArray: 4 },
        tooltip: { y: { formatter: (val) => `${val} clicks` } }
      };
    });
    const pageChartSeries = computed(() => {
      var _a2;
      const data = ((_a2 = props.pageTimeSeries) == null ? void 0 : _a2[selectedPage.value]) || [];
      return [{ name: "Clicks", data: data.map((d) => d.clicks) }];
    });
    const pageImpressionsChartSeries = computed(() => {
      var _a2;
      const data = ((_a2 = props.pageTimeSeries) == null ? void 0 : _a2[selectedPage.value]) || [];
      return [{ name: "Impressions", data: data.map((d) => d.impressions) }];
    });
    const pageImpressionsChartOptions = computed(() => {
      var _a2;
      const data = ((_a2 = props.pageTimeSeries) == null ? void 0 : _a2[selectedPage.value]) || [];
      return {
        chart: { type: "area", toolbar: { show: false }, fontFamily: chartTheme.fontFamily, zoom: { enabled: false } },
        colors: ["#11998e"],
        stroke: { curve: "smooth", width: 3 },
        fill: {
          type: "gradient",
          gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 100] }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: data.map((d) => {
            const date = new Date(d.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
          }),
          labels: { style: { fontSize: "11px", colors: "#999" } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { labels: { style: { fontSize: "11px", colors: "#999" } } },
        grid: { borderColor: "#f0f0f0", strokeDashArray: 4 },
        tooltip: { y: { formatter: (val) => `${val} impressions` } }
      };
    });
    const queriesChartOptions = computed(() => {
      var _a2;
      return {
        chart: { type: "bar", toolbar: { show: false }, fontFamily: chartTheme.fontFamily },
        plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
        colors: ["#c9a87c"],
        xaxis: { categories: ((_a2 = props.topQueries) == null ? void 0 : _a2.map((q) => q.query.substring(0, 30))) || [] },
        tooltip: { y: { formatter: (val) => `${val} clicks` } }
      };
    });
    const queriesChartSeries = computed(() => {
      var _a2;
      return [{
        name: "Clicks",
        data: ((_a2 = props.topQueries) == null ? void 0 : _a2.map((q) => q.clicks)) || []
      }];
    });
    const pagesChartOptions = computed(() => {
      var _a2;
      return {
        chart: { type: "bar", toolbar: { show: false }, fontFamily: chartTheme.fontFamily },
        plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
        colors: ["#3D4F5F"],
        xaxis: {
          categories: ((_a2 = props.topPages) == null ? void 0 : _a2.map((p) => {
            try {
              return new URL(p.page).pathname.substring(0, 30);
            } catch {
              return p.page.substring(0, 30);
            }
          })) || []
        },
        tooltip: { y: { formatter: (val) => `${val} clicks` } }
      };
    });
    const pagesChartSeries = computed(() => {
      var _a2;
      return [{
        name: "Clicks",
        data: ((_a2 = props.topPages) == null ? void 0 : _a2.map((p) => p.clicks)) || []
      }];
    });
    const pageName = (path) => {
      const names = {
        "/services/laser-aesthetic": "Laser Treatments",
        "/services/body-treatments": "Body Treatments",
        "/services/injectable-methods": "Injectable Methods",
        "/services/cosmetology": "Cosmetology",
        "/lasers/alma-soprano-titanium": "Alma Soprano Titanium",
        "/": "Homepage"
      };
      return names[path] || path;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Search Console" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<div data-v-e4f142ab${_scopeId}><h2 class="h4 mb-1" data-v-e4f142ab${_scopeId}>Google Search Console</h2>`);
            if (__props.dateRange) {
              _push2(`<p class="text-muted mb-0 small" data-v-e4f142ab${_scopeId}>${ssrInterpolate(__props.dateRange.start)} to ${ssrInterpolate(__props.dateRange.end)} vs ${ssrInterpolate((_a2 = __props.prevDateRange) == null ? void 0 : _a2.start)} to ${ssrInterpolate((_b = __props.prevDateRange) == null ? void 0 : _b.end)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "h4 mb-1" }, "Google Search Console"),
                __props.dateRange ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-muted mb-0 small"
                }, toDisplayString(__props.dateRange.start) + " to " + toDisplayString(__props.dateRange.end) + " vs " + toDisplayString((_c = __props.prevDateRange) == null ? void 0 : _c.start) + " to " + toDisplayString((_d = __props.prevDateRange) == null ? void 0 : _d.end), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
          if (_push2) {
            _push2(`<div class="container-fluid py-4" data-v-e4f142ab${_scopeId}>`);
            if (__props.error) {
              _push2(`<div class="alert alert-danger" data-v-e4f142ab${_scopeId}><strong data-v-e4f142ab${_scopeId}>Error:</strong> ${ssrInterpolate(__props.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.summary) {
              _push2(`<div class="row g-3 mb-4" data-v-e4f142ab${_scopeId}><div class="col-md-3" data-v-e4f142ab${_scopeId}><div class="card stat-card p-4" data-v-e4f142ab${_scopeId}><div class="stat-label" data-v-e4f142ab${_scopeId}>Total Clicks</div><div class="stat-value" data-v-e4f142ab${_scopeId}>${ssrInterpolate(((_a2 = __props.summary.clicks) == null ? void 0 : _a2.toLocaleString()) || 0)}</div><div class="${ssrRenderClass([clicksChange.value >= 0 ? "up" : "down", "stat-change"])}" data-v-e4f142ab${_scopeId}><span class="arrow" data-v-e4f142ab${_scopeId}>${ssrInterpolate(clicksChange.value >= 0 ? "↑" : "↓")}</span> ${ssrInterpolate(Math.abs(clicksChange.value))}% vs prev period </div><div class="stat-prev" data-v-e4f142ab${_scopeId}>Prev: ${ssrInterpolate(((_c = (_b = __props.prevSummary) == null ? void 0 : _b.clicks) == null ? void 0 : _c.toLocaleString()) || 0)}</div></div></div><div class="col-md-3" data-v-e4f142ab${_scopeId}><div class="card stat-card p-4" data-v-e4f142ab${_scopeId}><div class="stat-label" data-v-e4f142ab${_scopeId}>Impressions</div><div class="stat-value" data-v-e4f142ab${_scopeId}>${ssrInterpolate(((_d = __props.summary.impressions) == null ? void 0 : _d.toLocaleString()) || 0)}</div><div class="${ssrRenderClass([impressionsChange.value >= 0 ? "up" : "down", "stat-change"])}" data-v-e4f142ab${_scopeId}><span class="arrow" data-v-e4f142ab${_scopeId}>${ssrInterpolate(impressionsChange.value >= 0 ? "↑" : "↓")}</span> ${ssrInterpolate(Math.abs(impressionsChange.value))}% vs prev period </div><div class="stat-prev" data-v-e4f142ab${_scopeId}>Prev: ${ssrInterpolate(((_f = (_e = __props.prevSummary) == null ? void 0 : _e.impressions) == null ? void 0 : _f.toLocaleString()) || 0)}</div></div></div><div class="col-md-3" data-v-e4f142ab${_scopeId}><div class="card stat-card p-4" data-v-e4f142ab${_scopeId}><div class="stat-label" data-v-e4f142ab${_scopeId}>Avg CTR</div><div class="stat-value" data-v-e4f142ab${_scopeId}>${ssrInterpolate(__props.summary.ctr || 0)}%</div><div class="${ssrRenderClass([ctrChange.value >= 0 ? "up" : "down", "stat-change"])}" data-v-e4f142ab${_scopeId}><span class="arrow" data-v-e4f142ab${_scopeId}>${ssrInterpolate(ctrChange.value >= 0 ? "↑" : "↓")}</span> ${ssrInterpolate(Math.abs(ctrChange.value))}pp vs prev period </div><div class="stat-prev" data-v-e4f142ab${_scopeId}>Prev: ${ssrInterpolate(((_g = __props.prevSummary) == null ? void 0 : _g.ctr) || 0)}%</div></div></div><div class="col-md-3" data-v-e4f142ab${_scopeId}><div class="card stat-card p-4" data-v-e4f142ab${_scopeId}><div class="stat-label" data-v-e4f142ab${_scopeId}>Avg Position</div><div class="stat-value" data-v-e4f142ab${_scopeId}>${ssrInterpolate(__props.summary.position || 0)}</div><div class="${ssrRenderClass([positionChange.value >= 0 ? "up" : "down", "stat-change"])}" data-v-e4f142ab${_scopeId}><span class="arrow" data-v-e4f142ab${_scopeId}>${ssrInterpolate(positionChange.value >= 0 ? "↑" : "↓")}</span> ${ssrInterpolate(Math.abs(positionChange.value))} positions </div><div class="stat-prev" data-v-e4f142ab${_scopeId}>Prev: ${ssrInterpolate(((_h = __props.prevSummary) == null ? void 0 : _h.position) || 0)}</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="row g-3 mb-4" data-v-e4f142ab${_scopeId}><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><div class="chart-header" data-v-e4f142ab${_scopeId}><h5 class="mb-0" data-v-e4f142ab${_scopeId}>Daily Clicks</h5><span class="badge-period" data-v-e4f142ab${_scopeId}>Current vs Previous 28 days</span></div>`);
            if ((_i = __props.currentDaily) == null ? void 0 : _i.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "area",
                height: "300",
                options: domainClicksOptions.value,
                series: domainClicksSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<p class="text-muted mt-3" data-v-e4f142ab${_scopeId}>No daily data available</p>`);
            }
            _push2(`</div></div><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><div class="chart-header" data-v-e4f142ab${_scopeId}><h5 class="mb-0" data-v-e4f142ab${_scopeId}>Daily Impressions</h5><span class="badge-period" data-v-e4f142ab${_scopeId}>Current vs Previous 28 days</span></div>`);
            if ((_j = __props.currentDaily) == null ? void 0 : _j.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "area",
                height: "300",
                options: domainImpressionsOptions.value,
                series: domainImpressionsSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<p class="text-muted mt-3" data-v-e4f142ab${_scopeId}>No daily data available</p>`);
            }
            _push2(`</div></div></div>`);
            if ((_k = __props.trackedPages) == null ? void 0 : _k.length) {
              _push2(`<div class="card p-4 mb-4" data-v-e4f142ab${_scopeId}><div class="chart-header mb-3" data-v-e4f142ab${_scopeId}><h5 class="mb-0" data-v-e4f142ab${_scopeId}>Page Performance</h5><select class="form-select form-select-sm page-select" data-v-e4f142ab${_scopeId}><!--[-->`);
              ssrRenderList(__props.trackedPages, (page) => {
                _push2(`<option${ssrRenderAttr("value", page)} data-v-e4f142ab${ssrIncludeBooleanAttr(Array.isArray(selectedPage.value) ? ssrLooseContain(selectedPage.value, page) : ssrLooseEqual(selectedPage.value, page)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(pageName(page))}</option>`);
              });
              _push2(`<!--]--></select></div><div class="row g-3" data-v-e4f142ab${_scopeId}><div class="col-lg-6" data-v-e4f142ab${_scopeId}><h6 class="text-muted small mb-2" data-v-e4f142ab${_scopeId}>Clicks – ${ssrInterpolate(pageName(selectedPage.value))}</h6>`);
              if ((_m = (_l = __props.pageTimeSeries) == null ? void 0 : _l[selectedPage.value]) == null ? void 0 : _m.length) {
                _push2(ssrRenderComponent(unref(VueApexCharts), {
                  type: "area",
                  height: "250",
                  options: pageChartOptions.value,
                  series: pageChartSeries.value
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<p class="text-muted" data-v-e4f142ab${_scopeId}>No data for this page</p>`);
              }
              _push2(`</div><div class="col-lg-6" data-v-e4f142ab${_scopeId}><h6 class="text-muted small mb-2" data-v-e4f142ab${_scopeId}>Impressions – ${ssrInterpolate(pageName(selectedPage.value))}</h6>`);
              if ((_o = (_n = __props.pageTimeSeries) == null ? void 0 : _n[selectedPage.value]) == null ? void 0 : _o.length) {
                _push2(ssrRenderComponent(unref(VueApexCharts), {
                  type: "area",
                  height: "250",
                  options: pageImpressionsChartOptions.value,
                  series: pageImpressionsChartSeries.value
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<p class="text-muted" data-v-e4f142ab${_scopeId}>No data for this page</p>`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="row g-3 mb-4" data-v-e4f142ab${_scopeId}><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><h5 class="mb-3" data-v-e4f142ab${_scopeId}>Top Search Queries</h5>`);
            if ((_p = __props.topQueries) == null ? void 0 : _p.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "bar",
                height: "350",
                options: queriesChartOptions.value,
                series: queriesChartSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<p class="text-muted" data-v-e4f142ab${_scopeId}>No query data available</p>`);
            }
            _push2(`</div></div><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><h5 class="mb-3" data-v-e4f142ab${_scopeId}>Top Pages</h5>`);
            if ((_q = __props.topPages) == null ? void 0 : _q.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "bar",
                height: "350",
                options: pagesChartOptions.value,
                series: pagesChartSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<p class="text-muted" data-v-e4f142ab${_scopeId}>No page data available</p>`);
            }
            _push2(`</div></div></div><div class="row g-3" data-v-e4f142ab${_scopeId}><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><h5 class="mb-3" data-v-e4f142ab${_scopeId}>Query Details</h5><div class="table-responsive" data-v-e4f142ab${_scopeId}><table class="table table-sm table-hover" data-v-e4f142ab${_scopeId}><thead data-v-e4f142ab${_scopeId}><tr data-v-e4f142ab${_scopeId}><th data-v-e4f142ab${_scopeId}>#</th><th data-v-e4f142ab${_scopeId}>Query</th><th class="text-end" data-v-e4f142ab${_scopeId}>Clicks</th><th class="text-end" data-v-e4f142ab${_scopeId}>Impressions</th><th class="text-end" data-v-e4f142ab${_scopeId}>CTR</th><th class="text-end" data-v-e4f142ab${_scopeId}>Position</th></tr></thead><tbody data-v-e4f142ab${_scopeId}><!--[-->`);
            ssrRenderList(__props.topQueries, (query, i) => {
              _push2(`<tr data-v-e4f142ab${_scopeId}><td data-v-e4f142ab${_scopeId}><span class="rank" data-v-e4f142ab${_scopeId}>${ssrInterpolate(i + 1)}</span></td><td data-v-e4f142ab${_scopeId}>${ssrInterpolate(query.query)}</td><td class="text-end fw-bold" data-v-e4f142ab${_scopeId}>${ssrInterpolate(query.clicks)}</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(query.impressions)}</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(query.ctr)}%</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(query.position)}</td></tr>`);
            });
            _push2(`<!--]-->`);
            if (!((_r = __props.topQueries) == null ? void 0 : _r.length)) {
              _push2(`<tr data-v-e4f142ab${_scopeId}><td colspan="6" class="text-muted text-center" data-v-e4f142ab${_scopeId}>No data</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div><div class="col-lg-6" data-v-e4f142ab${_scopeId}><div class="card p-4" data-v-e4f142ab${_scopeId}><h5 class="mb-3" data-v-e4f142ab${_scopeId}>Page Details</h5><div class="table-responsive" data-v-e4f142ab${_scopeId}><table class="table table-sm table-hover" data-v-e4f142ab${_scopeId}><thead data-v-e4f142ab${_scopeId}><tr data-v-e4f142ab${_scopeId}><th data-v-e4f142ab${_scopeId}>#</th><th data-v-e4f142ab${_scopeId}>Page</th><th class="text-end" data-v-e4f142ab${_scopeId}>Clicks</th><th class="text-end" data-v-e4f142ab${_scopeId}>Impressions</th><th class="text-end" data-v-e4f142ab${_scopeId}>CTR</th><th class="text-end" data-v-e4f142ab${_scopeId}>Position</th></tr></thead><tbody data-v-e4f142ab${_scopeId}><!--[-->`);
            ssrRenderList(__props.topPages, (page, i) => {
              _push2(`<tr data-v-e4f142ab${_scopeId}><td data-v-e4f142ab${_scopeId}><span class="rank" data-v-e4f142ab${_scopeId}>${ssrInterpolate(i + 1)}</span></td><td class="text-truncate" style="${ssrRenderStyle({ "max-width": "200px" })}" data-v-e4f142ab${_scopeId}>${ssrInterpolate(page.page)}</td><td class="text-end fw-bold" data-v-e4f142ab${_scopeId}>${ssrInterpolate(page.clicks)}</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(page.impressions)}</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(page.ctr)}%</td><td class="text-end" data-v-e4f142ab${_scopeId}>${ssrInterpolate(page.position)}</td></tr>`);
            });
            _push2(`<!--]-->`);
            if (!((_s = __props.topPages) == null ? void 0 : _s.length)) {
              _push2(`<tr data-v-e4f142ab${_scopeId}><td colspan="6" class="text-muted text-center" data-v-e4f142ab${_scopeId}>No data</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container-fluid py-4" }, [
                __props.error ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "alert alert-danger"
                }, [
                  createVNode("strong", null, "Error:"),
                  createTextVNode(" " + toDisplayString(__props.error), 1)
                ])) : createCommentVNode("", true),
                __props.summary ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "row g-3 mb-4"
                }, [
                  createVNode("div", { class: "col-md-3" }, [
                    createVNode("div", { class: "card stat-card p-4" }, [
                      createVNode("div", { class: "stat-label" }, "Total Clicks"),
                      createVNode("div", { class: "stat-value" }, toDisplayString(((_t = __props.summary.clicks) == null ? void 0 : _t.toLocaleString()) || 0), 1),
                      createVNode("div", {
                        class: ["stat-change", clicksChange.value >= 0 ? "up" : "down"]
                      }, [
                        createVNode("span", { class: "arrow" }, toDisplayString(clicksChange.value >= 0 ? "↑" : "↓"), 1),
                        createTextVNode(" " + toDisplayString(Math.abs(clicksChange.value)) + "% vs prev period ", 1)
                      ], 2),
                      createVNode("div", { class: "stat-prev" }, "Prev: " + toDisplayString(((_v = (_u = __props.prevSummary) == null ? void 0 : _u.clicks) == null ? void 0 : _v.toLocaleString()) || 0), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-3" }, [
                    createVNode("div", { class: "card stat-card p-4" }, [
                      createVNode("div", { class: "stat-label" }, "Impressions"),
                      createVNode("div", { class: "stat-value" }, toDisplayString(((_w = __props.summary.impressions) == null ? void 0 : _w.toLocaleString()) || 0), 1),
                      createVNode("div", {
                        class: ["stat-change", impressionsChange.value >= 0 ? "up" : "down"]
                      }, [
                        createVNode("span", { class: "arrow" }, toDisplayString(impressionsChange.value >= 0 ? "↑" : "↓"), 1),
                        createTextVNode(" " + toDisplayString(Math.abs(impressionsChange.value)) + "% vs prev period ", 1)
                      ], 2),
                      createVNode("div", { class: "stat-prev" }, "Prev: " + toDisplayString(((_y = (_x = __props.prevSummary) == null ? void 0 : _x.impressions) == null ? void 0 : _y.toLocaleString()) || 0), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-3" }, [
                    createVNode("div", { class: "card stat-card p-4" }, [
                      createVNode("div", { class: "stat-label" }, "Avg CTR"),
                      createVNode("div", { class: "stat-value" }, toDisplayString(__props.summary.ctr || 0) + "%", 1),
                      createVNode("div", {
                        class: ["stat-change", ctrChange.value >= 0 ? "up" : "down"]
                      }, [
                        createVNode("span", { class: "arrow" }, toDisplayString(ctrChange.value >= 0 ? "↑" : "↓"), 1),
                        createTextVNode(" " + toDisplayString(Math.abs(ctrChange.value)) + "pp vs prev period ", 1)
                      ], 2),
                      createVNode("div", { class: "stat-prev" }, "Prev: " + toDisplayString(((_z = __props.prevSummary) == null ? void 0 : _z.ctr) || 0) + "%", 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-3" }, [
                    createVNode("div", { class: "card stat-card p-4" }, [
                      createVNode("div", { class: "stat-label" }, "Avg Position"),
                      createVNode("div", { class: "stat-value" }, toDisplayString(__props.summary.position || 0), 1),
                      createVNode("div", {
                        class: ["stat-change", positionChange.value >= 0 ? "up" : "down"]
                      }, [
                        createVNode("span", { class: "arrow" }, toDisplayString(positionChange.value >= 0 ? "↑" : "↓"), 1),
                        createTextVNode(" " + toDisplayString(Math.abs(positionChange.value)) + " positions ", 1)
                      ], 2),
                      createVNode("div", { class: "stat-prev" }, "Prev: " + toDisplayString(((_A = __props.prevSummary) == null ? void 0 : _A.position) || 0), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "row g-3 mb-4" }, [
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("div", { class: "chart-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Daily Clicks"),
                        createVNode("span", { class: "badge-period" }, "Current vs Previous 28 days")
                      ]),
                      ((_B = __props.currentDaily) == null ? void 0 : _B.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "area",
                        height: "300",
                        options: domainClicksOptions.value,
                        series: domainClicksSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted mt-3"
                      }, "No daily data available"))
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("div", { class: "chart-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Daily Impressions"),
                        createVNode("span", { class: "badge-period" }, "Current vs Previous 28 days")
                      ]),
                      ((_C = __props.currentDaily) == null ? void 0 : _C.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "area",
                        height: "300",
                        options: domainImpressionsOptions.value,
                        series: domainImpressionsSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted mt-3"
                      }, "No daily data available"))
                    ])
                  ])
                ]),
                ((_D = __props.trackedPages) == null ? void 0 : _D.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "card p-4 mb-4"
                }, [
                  createVNode("div", { class: "chart-header mb-3" }, [
                    createVNode("h5", { class: "mb-0" }, "Page Performance"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => selectedPage.value = $event,
                      class: "form-select form-select-sm page-select"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.trackedPages, (page) => {
                        return openBlock(), createBlock("option", {
                          key: page,
                          value: page
                        }, toDisplayString(pageName(page)), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, selectedPage.value]
                    ])
                  ]),
                  createVNode("div", { class: "row g-3" }, [
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("h6", { class: "text-muted small mb-2" }, "Clicks – " + toDisplayString(pageName(selectedPage.value)), 1),
                      ((_F = (_E = __props.pageTimeSeries) == null ? void 0 : _E[selectedPage.value]) == null ? void 0 : _F.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "area",
                        height: "250",
                        options: pageChartOptions.value,
                        series: pageChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted"
                      }, "No data for this page"))
                    ]),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("h6", { class: "text-muted small mb-2" }, "Impressions – " + toDisplayString(pageName(selectedPage.value)), 1),
                      ((_H = (_G = __props.pageTimeSeries) == null ? void 0 : _G[selectedPage.value]) == null ? void 0 : _H.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "area",
                        height: "250",
                        options: pageImpressionsChartOptions.value,
                        series: pageImpressionsChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted"
                      }, "No data for this page"))
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "row g-3 mb-4" }, [
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("h5", { class: "mb-3" }, "Top Search Queries"),
                      ((_I = __props.topQueries) == null ? void 0 : _I.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "bar",
                        height: "350",
                        options: queriesChartOptions.value,
                        series: queriesChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted"
                      }, "No query data available"))
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("h5", { class: "mb-3" }, "Top Pages"),
                      ((_J = __props.topPages) == null ? void 0 : _J.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "bar",
                        height: "350",
                        options: pagesChartOptions.value,
                        series: pagesChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-muted"
                      }, "No page data available"))
                    ])
                  ])
                ]),
                createVNode("div", { class: "row g-3" }, [
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("h5", { class: "mb-3" }, "Query Details"),
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table table-sm table-hover" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "#"),
                              createVNode("th", null, "Query"),
                              createVNode("th", { class: "text-end" }, "Clicks"),
                              createVNode("th", { class: "text-end" }, "Impressions"),
                              createVNode("th", { class: "text-end" }, "CTR"),
                              createVNode("th", { class: "text-end" }, "Position")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.topQueries, (query, i) => {
                              return openBlock(), createBlock("tr", {
                                key: query.query
                              }, [
                                createVNode("td", null, [
                                  createVNode("span", { class: "rank" }, toDisplayString(i + 1), 1)
                                ]),
                                createVNode("td", null, toDisplayString(query.query), 1),
                                createVNode("td", { class: "text-end fw-bold" }, toDisplayString(query.clicks), 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(query.impressions), 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(query.ctr) + "%", 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(query.position), 1)
                              ]);
                            }), 128)),
                            !((_K = __props.topQueries) == null ? void 0 : _K.length) ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-muted text-center"
                              }, "No data")
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "card p-4" }, [
                      createVNode("h5", { class: "mb-3" }, "Page Details"),
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table table-sm table-hover" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "#"),
                              createVNode("th", null, "Page"),
                              createVNode("th", { class: "text-end" }, "Clicks"),
                              createVNode("th", { class: "text-end" }, "Impressions"),
                              createVNode("th", { class: "text-end" }, "CTR"),
                              createVNode("th", { class: "text-end" }, "Position")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.topPages, (page, i) => {
                              return openBlock(), createBlock("tr", {
                                key: page.page
                              }, [
                                createVNode("td", null, [
                                  createVNode("span", { class: "rank" }, toDisplayString(i + 1), 1)
                                ]),
                                createVNode("td", {
                                  class: "text-truncate",
                                  style: { "max-width": "200px" }
                                }, toDisplayString(page.page), 1),
                                createVNode("td", { class: "text-end fw-bold" }, toDisplayString(page.clicks), 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(page.impressions), 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(page.ctr) + "%", 1),
                                createVNode("td", { class: "text-end" }, toDisplayString(page.position), 1)
                              ]);
                            }), 128)),
                            !((_L = __props.topPages) == null ? void 0 : _L.length) ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-muted text-center"
                              }, "No data")
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/SearchConsole/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4f142ab"]]);
export {
  Index as default
};
