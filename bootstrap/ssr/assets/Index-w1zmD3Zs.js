import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const deleteCategory = (id) => {
      if (confirm("Are you sure? This will also delete all services in this category.")) {
        router.delete(route("admin.service-categories.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Service Categories" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Service Categories</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-categories.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Category `);
                } else {
                  return [
                    createTextVNode(" Add Category ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Service Categories"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.service-categories.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Category ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body p-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-hover mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>Parent Category</th><th${_scopeId}>Display Type</th><th${_scopeId}>Services</th><th${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(category.name_en)}</strong><br${_scopeId}><small class="text-muted"${_scopeId}>${ssrInterpolate(category.name_mk)}</small></td><td${_scopeId}><span class="${ssrRenderClass([category.parent_type === "cosmetology" ? "bg-primary" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(category.parent_type === "cosmetology" ? "Козметологија" : "Ласерско Естетски")}</span></td><td${_scopeId}><span class="${ssrRenderClass([category.display_type === "accordion" ? "bg-info" : "bg-warning", "badge"])}"${_scopeId}>${ssrInterpolate(category.display_type)}</span></td><td${_scopeId}>${ssrInterpolate(category.items_count)}</td><td${_scopeId}><span class="${ssrRenderClass([category.is_active ? "bg-success" : "bg-danger", "badge"])}"${_scopeId}>${ssrInterpolate(category.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.service-categories.edit", category.id),
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
            if (__props.categories.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="6" class="text-center py-4 text-muted"${_scopeId}> No categories yet. Add your first category. </td></tr>`);
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
                              createVNode("th", null, "Name"),
                              createVNode("th", null, "Parent Category"),
                              createVNode("th", null, "Display Type"),
                              createVNode("th", null, "Services"),
                              createVNode("th", null, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("tr", {
                                key: category.id
                              }, [
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(category.name_en), 1),
                                  createVNode("br"),
                                  createVNode("small", { class: "text-muted" }, toDisplayString(category.name_mk), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", category.parent_type === "cosmetology" ? "bg-primary" : "bg-secondary"]
                                  }, toDisplayString(category.parent_type === "cosmetology" ? "Козметологија" : "Ласерско Естетски"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", category.display_type === "accordion" ? "bg-info" : "bg-warning"]
                                  }, toDisplayString(category.display_type), 3)
                                ]),
                                createVNode("td", null, toDisplayString(category.items_count), 1),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", category.is_active ? "bg-success" : "bg-danger"]
                                  }, toDisplayString(category.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.service-categories.edit", category.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteCategory(category.id),
                                      class: "btn btn-outline-danger"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            __props.categories.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center py-4 text-muted"
                              }, " No categories yet. Add your first category. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServiceCategories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
