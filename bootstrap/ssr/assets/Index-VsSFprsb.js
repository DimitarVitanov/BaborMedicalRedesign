import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-C2Ae6j-N.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    postings: Array
  },
  setup(__props) {
    const employmentTypeLabels = {
      full_time: "Full-time",
      part_time: "Part-time",
      contract: "Contract",
      internship: "Internship"
    };
    const deletePosting = (id) => {
      if (confirm("Are you sure you want to delete this job posting? Applications for it will be kept.")) {
        router.delete(route("admin.job-postings.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Job Postings - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Job Postings</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.job-postings.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Job Posting `);
                } else {
                  return [
                    createTextVNode(" Add Job Posting ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Job Postings"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.job-postings.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Job Posting ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body p-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-hover mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th${_scopeId}>Title (EN)</th><th${_scopeId}>Title (MK)</th><th${_scopeId}>Type</th><th${_scopeId}>Applications</th><th${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.postings, (posting) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(posting.title_en)}</strong></td><td${_scopeId}>${ssrInterpolate(posting.title_mk)}</td><td${_scopeId}>${ssrInterpolate(employmentTypeLabels[posting.employment_type] || posting.employment_type)}</td><td${_scopeId}><span class="badge bg-secondary"${_scopeId}>${ssrInterpolate(posting.applications_count)}</span></td><td${_scopeId}><span class="${ssrRenderClass([posting.is_active ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(posting.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.job-postings.edit", posting.id),
                class: "btn btn-outline-primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="btn btn-outline-danger"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.postings.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="6" class="text-center py-4 text-muted"${_scopeId}> No job postings yet. Click &quot;Add Job Posting&quot; to create one. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body p-0" }, [
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table table-hover mb-0" }, [
                          createVNode("thead", { class: "table-light" }, [
                            createVNode("tr", null, [
                              createVNode("th", null, "Title (EN)"),
                              createVNode("th", null, "Title (MK)"),
                              createVNode("th", null, "Type"),
                              createVNode("th", null, "Applications"),
                              createVNode("th", null, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.postings, (posting) => {
                              return openBlock(), createBlock("tr", {
                                key: posting.id
                              }, [
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(posting.title_en), 1)
                                ]),
                                createVNode("td", null, toDisplayString(posting.title_mk), 1),
                                createVNode("td", null, toDisplayString(employmentTypeLabels[posting.employment_type] || posting.employment_type), 1),
                                createVNode("td", null, [
                                  createVNode("span", { class: "badge bg-secondary" }, toDisplayString(posting.applications_count), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", posting.is_active ? "bg-success" : "bg-secondary"]
                                  }, toDisplayString(posting.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.job-postings.edit", posting.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      onClick: ($event) => deletePosting(posting.id),
                                      class: "btn btn-outline-danger"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            __props.postings.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center py-4 text-muted"
                              }, ' No job postings yet. Click "Add Job Posting" to create one. ')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/JobPostings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
