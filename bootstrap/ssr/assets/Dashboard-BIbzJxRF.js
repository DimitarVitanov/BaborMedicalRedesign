import { computed, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head } from "@inertiajs/vue3";
import VueApexCharts from "vue3-apexcharts";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    searchConsole: Object
  },
  setup(__props) {
    const props = __props;
    const queriesChartOptions = computed(() => {
      var _a, _b;
      return {
        chart: {
          type: "donut",
          fontFamily: "Poppins, sans-serif"
        },
        labels: ((_b = (_a = props.searchConsole) == null ? void 0 : _a.topQueries) == null ? void 0 : _b.slice(0, 5).map((q) => {
          var _a2;
          return (_a2 = q.query) == null ? void 0 : _a2.substring(0, 20);
        })) || [],
        colors: ["#c9a87c", "#3D4F5F", "#667eea", "#11998e", "#f093fb"],
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1e2d3d"
                },
                value: {
                  show: true,
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1e2d3d",
                  formatter: (val) => val
                },
                total: {
                  show: true,
                  label: "Total Clicks",
                  fontSize: "12px",
                  color: "#6c757d",
                  formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                }
              }
            }
          }
        },
        dataLabels: { enabled: false },
        legend: {
          position: "bottom",
          fontSize: "12px",
          fontWeight: 500,
          markers: { width: 10, height: 10, radius: 3 },
          itemMargin: { horizontal: 10, vertical: 5 }
        },
        stroke: { width: 0 },
        tooltip: {
          y: { formatter: (val) => `${val} clicks` }
        }
      };
    });
    const queriesChartSeries = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = props.searchConsole) == null ? void 0 : _a.topQueries) == null ? void 0 : _b.slice(0, 5).map((q) => q.clicks)) || [];
      }
    );
    const pagesChartOptions = computed(() => {
      var _a, _b;
      return {
        chart: {
          type: "donut",
          fontFamily: "Poppins, sans-serif"
        },
        labels: ((_b = (_a = props.searchConsole) == null ? void 0 : _a.topPages) == null ? void 0 : _b.slice(0, 5).map((p) => {
          var _a2;
          try {
            return new URL(p.page).pathname.substring(0, 20);
          } catch {
            return (_a2 = p.page) == null ? void 0 : _a2.substring(0, 20);
          }
        })) || [],
        colors: ["#3D4F5F", "#c9a87c", "#764ba2", "#38ef7d", "#fc8181"],
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1e2d3d"
                },
                value: {
                  show: true,
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1e2d3d",
                  formatter: (val) => val
                },
                total: {
                  show: true,
                  label: "Total Clicks",
                  fontSize: "12px",
                  color: "#6c757d",
                  formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                }
              }
            }
          }
        },
        dataLabels: { enabled: false },
        legend: {
          position: "bottom",
          fontSize: "12px",
          fontWeight: 500,
          markers: { width: 10, height: 10, radius: 3 },
          itemMargin: { horizontal: 10, vertical: 5 }
        },
        stroke: { width: 0 },
        tooltip: {
          y: { formatter: (val) => `${val} clicks` }
        }
      };
    });
    const pagesChartSeries = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = props.searchConsole) == null ? void 0 : _a.topPages) == null ? void 0 : _b.slice(0, 5).map((p) => p.clicks)) || [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="header-content" data-v-7c13fe97${_scopeId}><h2 class="page-title" data-v-7c13fe97${_scopeId}>Dashboard</h2>`);
            if ((_a = __props.searchConsole) == null ? void 0 : _a.dateRange) {
              _push2(`<p class="page-subtitle" data-v-7c13fe97${_scopeId}> Analytics from ${ssrInterpolate(__props.searchConsole.dateRange.start)} to ${ssrInterpolate(__props.searchConsole.dateRange.end)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "header-content" }, [
                createVNode("h2", { class: "page-title" }, "Dashboard"),
                ((_b = __props.searchConsole) == null ? void 0 : _b.dateRange) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "page-subtitle"
                }, " Analytics from " + toDisplayString(__props.searchConsole.dateRange.start) + " to " + toDisplayString(__props.searchConsole.dateRange.end), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<div class="dashboard-container" data-v-7c13fe97${_scopeId}>`);
            if ((_a = __props.searchConsole) == null ? void 0 : _a.error) {
              _push2(`<div class="error-banner" data-v-7c13fe97${_scopeId}><div class="error-icon" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-7c13fe97${_scopeId}></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" data-v-7c13fe97${_scopeId}></path></svg></div><div class="error-text" data-v-7c13fe97${_scopeId}><strong data-v-7c13fe97${_scopeId}>Search Console Error</strong><span data-v-7c13fe97${_scopeId}>${ssrInterpolate(__props.searchConsole.error)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_b = __props.searchConsole) == null ? void 0 : _b.summary) {
              _push2(`<div class="stats-grid" data-v-7c13fe97${_scopeId}><div class="stat-card stat-clicks" data-v-7c13fe97${_scopeId}><div class="stat-icon" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .557.103z" data-v-7c13fe97${_scopeId}></path></svg></div><div class="stat-content" data-v-7c13fe97${_scopeId}><span class="stat-value" data-v-7c13fe97${_scopeId}>${ssrInterpolate(((_c = __props.searchConsole.summary.clicks) == null ? void 0 : _c.toLocaleString()) || 0)}</span><span class="stat-label" data-v-7c13fe97${_scopeId}>Total Clicks</span></div></div><div class="stat-card stat-impressions" data-v-7c13fe97${_scopeId}><div class="stat-icon" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" data-v-7c13fe97${_scopeId}></path><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" data-v-7c13fe97${_scopeId}></path></svg></div><div class="stat-content" data-v-7c13fe97${_scopeId}><span class="stat-value" data-v-7c13fe97${_scopeId}>${ssrInterpolate(((_d = __props.searchConsole.summary.impressions) == null ? void 0 : _d.toLocaleString()) || 0)}</span><span class="stat-label" data-v-7c13fe97${_scopeId}>Impressions</span></div></div><div class="stat-card stat-ctr" data-v-7c13fe97${_scopeId}><div class="stat-icon" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" data-v-7c13fe97${_scopeId}></path><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" data-v-7c13fe97${_scopeId}></path></svg></div><div class="stat-content" data-v-7c13fe97${_scopeId}><span class="stat-value" data-v-7c13fe97${_scopeId}>${ssrInterpolate(__props.searchConsole.summary.ctr || 0)}%</span><span class="stat-label" data-v-7c13fe97${_scopeId}>Avg CTR</span></div></div><div class="stat-card stat-position" data-v-7c13fe97${_scopeId}><div class="stat-icon" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2z" data-v-7c13fe97${_scopeId}></path></svg></div><div class="stat-content" data-v-7c13fe97${_scopeId}><span class="stat-value" data-v-7c13fe97${_scopeId}>${ssrInterpolate(__props.searchConsole.summary.position || 0)}</span><span class="stat-label" data-v-7c13fe97${_scopeId}>Avg Position</span></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="charts-grid" data-v-7c13fe97${_scopeId}><div class="chart-card" data-v-7c13fe97${_scopeId}><div class="chart-header" data-v-7c13fe97${_scopeId}><h3 class="chart-title" data-v-7c13fe97${_scopeId}>Top Search Queries</h3><span class="chart-badge" data-v-7c13fe97${_scopeId}>Last 28 days</span></div><div class="chart-body" data-v-7c13fe97${_scopeId}>`);
            if ((_f = (_e = __props.searchConsole) == null ? void 0 : _e.topQueries) == null ? void 0 : _f.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "donut",
                height: "320",
                options: queriesChartOptions.value,
                series: queriesChartSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="empty-state" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" data-v-7c13fe97${_scopeId}></path></svg><p data-v-7c13fe97${_scopeId}>No query data available</p></div>`);
            }
            _push2(`</div></div><div class="chart-card" data-v-7c13fe97${_scopeId}><div class="chart-header" data-v-7c13fe97${_scopeId}><h3 class="chart-title" data-v-7c13fe97${_scopeId}>Top Pages</h3><span class="chart-badge" data-v-7c13fe97${_scopeId}>Last 28 days</span></div><div class="chart-body" data-v-7c13fe97${_scopeId}>`);
            if ((_h = (_g = __props.searchConsole) == null ? void 0 : _g.topPages) == null ? void 0 : _h.length) {
              _push2(ssrRenderComponent(unref(VueApexCharts), {
                type: "donut",
                height: "320",
                options: pagesChartOptions.value,
                series: pagesChartSeries.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="empty-state" data-v-7c13fe97${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16" data-v-7c13fe97${_scopeId}><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" data-v-7c13fe97${_scopeId}></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" data-v-7c13fe97${_scopeId}></path></svg><p data-v-7c13fe97${_scopeId}>No page data available</p></div>`);
            }
            _push2(`</div></div></div><div class="tables-grid" data-v-7c13fe97${_scopeId}><div class="table-card" data-v-7c13fe97${_scopeId}><div class="table-header" data-v-7c13fe97${_scopeId}><h3 class="table-title" data-v-7c13fe97${_scopeId}>Query Performance</h3></div><div class="table-body" data-v-7c13fe97${_scopeId}><table class="data-table" data-v-7c13fe97${_scopeId}><thead data-v-7c13fe97${_scopeId}><tr data-v-7c13fe97${_scopeId}><th data-v-7c13fe97${_scopeId}>Search Query</th><th class="text-end" data-v-7c13fe97${_scopeId}>Clicks</th><th class="text-end" data-v-7c13fe97${_scopeId}>Impressions</th><th class="text-end" data-v-7c13fe97${_scopeId}>CTR</th><th class="text-end" data-v-7c13fe97${_scopeId}>Position</th></tr></thead><tbody data-v-7c13fe97${_scopeId}><!--[-->`);
            ssrRenderList((_i = __props.searchConsole) == null ? void 0 : _i.topQueries, (query, index) => {
              _push2(`<tr data-v-7c13fe97${_scopeId}><td data-v-7c13fe97${_scopeId}><div class="query-cell" data-v-7c13fe97${_scopeId}><span class="rank-badge" data-v-7c13fe97${_scopeId}>${ssrInterpolate(index + 1)}</span><span class="query-text" data-v-7c13fe97${_scopeId}>${ssrInterpolate(query.query)}</span></div></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric clicks" data-v-7c13fe97${_scopeId}>${ssrInterpolate(query.clicks)}</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric" data-v-7c13fe97${_scopeId}>${ssrInterpolate(query.impressions)}</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric ctr" data-v-7c13fe97${_scopeId}>${ssrInterpolate(query.ctr)}%</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric position" data-v-7c13fe97${_scopeId}>${ssrInterpolate(query.position)}</span></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (!((_k = (_j = __props.searchConsole) == null ? void 0 : _j.topQueries) == null ? void 0 : _k.length)) {
              _push2(`<tr data-v-7c13fe97${_scopeId}><td colspan="5" class="empty-row" data-v-7c13fe97${_scopeId}>No data available</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div><div class="table-card" data-v-7c13fe97${_scopeId}><div class="table-header" data-v-7c13fe97${_scopeId}><h3 class="table-title" data-v-7c13fe97${_scopeId}>Page Performance</h3></div><div class="table-body" data-v-7c13fe97${_scopeId}><table class="data-table" data-v-7c13fe97${_scopeId}><thead data-v-7c13fe97${_scopeId}><tr data-v-7c13fe97${_scopeId}><th data-v-7c13fe97${_scopeId}>Page URL</th><th class="text-end" data-v-7c13fe97${_scopeId}>Clicks</th><th class="text-end" data-v-7c13fe97${_scopeId}>Impressions</th><th class="text-end" data-v-7c13fe97${_scopeId}>CTR</th><th class="text-end" data-v-7c13fe97${_scopeId}>Position</th></tr></thead><tbody data-v-7c13fe97${_scopeId}><!--[-->`);
            ssrRenderList((_l = __props.searchConsole) == null ? void 0 : _l.topPages, (page, index) => {
              _push2(`<tr data-v-7c13fe97${_scopeId}><td data-v-7c13fe97${_scopeId}><div class="query-cell" data-v-7c13fe97${_scopeId}><span class="rank-badge" data-v-7c13fe97${_scopeId}>${ssrInterpolate(index + 1)}</span><span class="query-text page-url" data-v-7c13fe97${_scopeId}>${ssrInterpolate(page.page)}</span></div></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric clicks" data-v-7c13fe97${_scopeId}>${ssrInterpolate(page.clicks)}</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric" data-v-7c13fe97${_scopeId}>${ssrInterpolate(page.impressions)}</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric ctr" data-v-7c13fe97${_scopeId}>${ssrInterpolate(page.ctr)}%</span></td><td class="text-end" data-v-7c13fe97${_scopeId}><span class="metric position" data-v-7c13fe97${_scopeId}>${ssrInterpolate(page.position)}</span></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (!((_n = (_m = __props.searchConsole) == null ? void 0 : _m.topPages) == null ? void 0 : _n.length)) {
              _push2(`<tr data-v-7c13fe97${_scopeId}><td colspan="5" class="empty-row" data-v-7c13fe97${_scopeId}>No data available</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "dashboard-container" }, [
                ((_o = __props.searchConsole) == null ? void 0 : _o.error) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "error-banner"
                }, [
                  createVNode("div", { class: "error-icon" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      fill: "currentColor",
                      viewBox: "0 0 16 16"
                    }, [
                      createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                      createVNode("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" })
                    ]))
                  ]),
                  createVNode("div", { class: "error-text" }, [
                    createVNode("strong", null, "Search Console Error"),
                    createVNode("span", null, toDisplayString(__props.searchConsole.error), 1)
                  ])
                ])) : createCommentVNode("", true),
                ((_p = __props.searchConsole) == null ? void 0 : _p.summary) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "stats-grid"
                }, [
                  createVNode("div", { class: "stat-card stat-clicks" }, [
                    createVNode("div", { class: "stat-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .557.103z" })
                      ]))
                    ]),
                    createVNode("div", { class: "stat-content" }, [
                      createVNode("span", { class: "stat-value" }, toDisplayString(((_q = __props.searchConsole.summary.clicks) == null ? void 0 : _q.toLocaleString()) || 0), 1),
                      createVNode("span", { class: "stat-label" }, "Total Clicks")
                    ])
                  ]),
                  createVNode("div", { class: "stat-card stat-impressions" }, [
                    createVNode("div", { class: "stat-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" }),
                        createVNode("path", { d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" })
                      ]))
                    ]),
                    createVNode("div", { class: "stat-content" }, [
                      createVNode("span", { class: "stat-value" }, toDisplayString(((_r = __props.searchConsole.summary.impressions) == null ? void 0 : _r.toLocaleString()) || 0), 1),
                      createVNode("span", { class: "stat-label" }, "Impressions")
                    ])
                  ]),
                  createVNode("div", { class: "stat-card stat-ctr" }, [
                    createVNode("div", { class: "stat-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" }),
                        createVNode("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" })
                      ]))
                    ]),
                    createVNode("div", { class: "stat-content" }, [
                      createVNode("span", { class: "stat-value" }, toDisplayString(__props.searchConsole.summary.ctr || 0) + "%", 1),
                      createVNode("span", { class: "stat-label" }, "Avg CTR")
                    ])
                  ]),
                  createVNode("div", { class: "stat-card stat-position" }, [
                    createVNode("div", { class: "stat-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2z" })
                      ]))
                    ]),
                    createVNode("div", { class: "stat-content" }, [
                      createVNode("span", { class: "stat-value" }, toDisplayString(__props.searchConsole.summary.position || 0), 1),
                      createVNode("span", { class: "stat-label" }, "Avg Position")
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "charts-grid" }, [
                  createVNode("div", { class: "chart-card" }, [
                    createVNode("div", { class: "chart-header" }, [
                      createVNode("h3", { class: "chart-title" }, "Top Search Queries"),
                      createVNode("span", { class: "chart-badge" }, "Last 28 days")
                    ]),
                    createVNode("div", { class: "chart-body" }, [
                      ((_t = (_s = __props.searchConsole) == null ? void 0 : _s.topQueries) == null ? void 0 : _t.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "donut",
                        height: "320",
                        options: queriesChartOptions.value,
                        series: queriesChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "empty-state"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "48",
                          height: "48",
                          fill: "currentColor",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
                        ])),
                        createVNode("p", null, "No query data available")
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "chart-card" }, [
                    createVNode("div", { class: "chart-header" }, [
                      createVNode("h3", { class: "chart-title" }, "Top Pages"),
                      createVNode("span", { class: "chart-badge" }, "Last 28 days")
                    ]),
                    createVNode("div", { class: "chart-body" }, [
                      ((_v = (_u = __props.searchConsole) == null ? void 0 : _u.topPages) == null ? void 0 : _v.length) ? (openBlock(), createBlock(unref(VueApexCharts), {
                        key: 0,
                        type: "donut",
                        height: "320",
                        options: pagesChartOptions.value,
                        series: pagesChartSeries.value
                      }, null, 8, ["options", "series"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "empty-state"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "48",
                          height: "48",
                          fill: "currentColor",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" }),
                          createVNode("path", { d: "M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" })
                        ])),
                        createVNode("p", null, "No page data available")
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "tables-grid" }, [
                  createVNode("div", { class: "table-card" }, [
                    createVNode("div", { class: "table-header" }, [
                      createVNode("h3", { class: "table-title" }, "Query Performance")
                    ]),
                    createVNode("div", { class: "table-body" }, [
                      createVNode("table", { class: "data-table" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "Search Query"),
                            createVNode("th", { class: "text-end" }, "Clicks"),
                            createVNode("th", { class: "text-end" }, "Impressions"),
                            createVNode("th", { class: "text-end" }, "CTR"),
                            createVNode("th", { class: "text-end" }, "Position")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_w = __props.searchConsole) == null ? void 0 : _w.topQueries, (query, index) => {
                            return openBlock(), createBlock("tr", {
                              key: query.query
                            }, [
                              createVNode("td", null, [
                                createVNode("div", { class: "query-cell" }, [
                                  createVNode("span", { class: "rank-badge" }, toDisplayString(index + 1), 1),
                                  createVNode("span", { class: "query-text" }, toDisplayString(query.query), 1)
                                ])
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric clicks" }, toDisplayString(query.clicks), 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric" }, toDisplayString(query.impressions), 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric ctr" }, toDisplayString(query.ctr) + "%", 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric position" }, toDisplayString(query.position), 1)
                              ])
                            ]);
                          }), 128)),
                          !((_y = (_x = __props.searchConsole) == null ? void 0 : _x.topQueries) == null ? void 0 : _y.length) ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "5",
                              class: "empty-row"
                            }, "No data available")
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "table-card" }, [
                    createVNode("div", { class: "table-header" }, [
                      createVNode("h3", { class: "table-title" }, "Page Performance")
                    ]),
                    createVNode("div", { class: "table-body" }, [
                      createVNode("table", { class: "data-table" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "Page URL"),
                            createVNode("th", { class: "text-end" }, "Clicks"),
                            createVNode("th", { class: "text-end" }, "Impressions"),
                            createVNode("th", { class: "text-end" }, "CTR"),
                            createVNode("th", { class: "text-end" }, "Position")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_z = __props.searchConsole) == null ? void 0 : _z.topPages, (page, index) => {
                            return openBlock(), createBlock("tr", {
                              key: page.page
                            }, [
                              createVNode("td", null, [
                                createVNode("div", { class: "query-cell" }, [
                                  createVNode("span", { class: "rank-badge" }, toDisplayString(index + 1), 1),
                                  createVNode("span", { class: "query-text page-url" }, toDisplayString(page.page), 1)
                                ])
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric clicks" }, toDisplayString(page.clicks), 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric" }, toDisplayString(page.impressions), 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric ctr" }, toDisplayString(page.ctr) + "%", 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("span", { class: "metric position" }, toDisplayString(page.position), 1)
                              ])
                            ]);
                          }), 128)),
                          !((_B = (_A = __props.searchConsole) == null ? void 0 : _A.topPages) == null ? void 0 : _B.length) ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "5",
                              class: "empty-row"
                            }, "No data available")
                          ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c13fe97"]]);
export {
  Dashboard as default
};
