import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const deleteService = (id) => {
      if (confirm("Are you sure you want to delete this service?")) {
        router.delete(route("admin.services.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Services - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Services / Treatments</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.services.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` + Add Service `);
                } else {
                  return [
                    createTextVNode(" + Add Service ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Services / Treatments"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.services.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" + Add Service ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}>`);
            if (__props.services.length === 0) {
              _push2(`<div class="text-center py-5 text-muted"${_scopeId}><p${_scopeId}>No services yet. Create your first service!</p></div>`);
            } else {
              _push2(`<div class="table-responsive"${_scopeId}><table class="table table-hover align-middle"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Order</th><th${_scopeId}>Title</th><th${_scopeId}>Title (MK)</th><th${_scopeId}>Icon</th><th${_scopeId}>Status</th><th class="text-end"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.services, (service) => {
                _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(service.order)}</td><td${_scopeId}>${ssrInterpolate(service.title)}</td><td${_scopeId}>${ssrInterpolate(service.title_mk || "-")}</td><td${_scopeId}>`);
                if (service.icon) {
                  _push2(`<span class="badge bg-secondary"${_scopeId}>${ssrInterpolate(service.icon)}</span>`);
                } else {
                  _push2(`<span class="text-muted"${_scopeId}>-</span>`);
                }
                _push2(`</td><td${_scopeId}><span class="${ssrRenderClass([service.is_active ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(service.is_active ? "Active" : "Inactive")}</span></td><td class="text-end"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.services.edit", service.id),
                  class: "btn btn-sm btn-outline-primary me-2"
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
                _push2(`<button class="btn btn-sm btn-outline-danger"${_scopeId}> Delete </button></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body" }, [
                      __props.services.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-5 text-muted"
                      }, [
                        createVNode("p", null, "No services yet. Create your first service!")
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "table-responsive"
                      }, [
                        createVNode("table", { class: "table table-hover align-middle" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "Order"),
                              createVNode("th", null, "Title"),
                              createVNode("th", null, "Title (MK)"),
                              createVNode("th", null, "Icon"),
                              createVNode("th", null, "Status"),
                              createVNode("th", { class: "text-end" }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.services, (service) => {
                              return openBlock(), createBlock("tr", {
                                key: service.id
                              }, [
                                createVNode("td", null, toDisplayString(service.order), 1),
                                createVNode("td", null, toDisplayString(service.title), 1),
                                createVNode("td", null, toDisplayString(service.title_mk || "-"), 1),
                                createVNode("td", null, [
                                  service.icon ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "badge bg-secondary"
                                  }, toDisplayString(service.icon), 1)) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "text-muted"
                                  }, "-"))
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", service.is_active ? "bg-success" : "bg-secondary"]
                                  }, toDisplayString(service.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("admin.services.edit", service.id),
                                    class: "btn btn-sm btn-outline-primary me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"]),
                                  createVNode("button", {
                                    onClick: ($event) => deleteService(service.id),
                                    class: "btn btn-sm btn-outline-danger"
                                  }, " Delete ", 8, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Services/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
