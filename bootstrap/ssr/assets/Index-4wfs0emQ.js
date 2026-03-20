import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    locations: Array
  },
  setup(__props) {
    const deleteLocation = (id) => {
      if (confirm("Are you sure you want to delete this location?")) {
        router.delete(route("admin.locations.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Locations" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Locations</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.locations.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Location `);
                } else {
                  return [
                    createTextVNode(" Add Location ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Locations"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.locations.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Location ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body p-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-hover mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>Address</th><th${_scopeId}>Phone</th><th${_scopeId}>Working Hours</th><th${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.locations, (location) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(location.name_en)}</strong><br${_scopeId}><small class="text-muted"${_scopeId}>${ssrInterpolate(location.name_mk)}</small></td><td${_scopeId}>${ssrInterpolate(location.address_en)} <br${_scopeId}><small class="text-muted"${_scopeId}>${ssrInterpolate(location.address_mk)}</small></td><td${_scopeId}>${ssrInterpolate(location.phone || "-")}</td><td${_scopeId}><span class="${ssrRenderClass([location.show_working_hours ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(location.show_working_hours ? "Shown" : "Hidden")}</span></td><td${_scopeId}><span class="${ssrRenderClass([location.is_active ? "bg-success" : "bg-danger", "badge"])}"${_scopeId}>${ssrInterpolate(location.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.locations.edit", location.id),
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
            if (__props.locations.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="6" class="text-center py-4 text-muted"${_scopeId}> No locations yet. Add your first location. </td></tr>`);
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
                              createVNode("th", null, "Address"),
                              createVNode("th", null, "Phone"),
                              createVNode("th", null, "Working Hours"),
                              createVNode("th", null, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.locations, (location) => {
                              return openBlock(), createBlock("tr", {
                                key: location.id
                              }, [
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(location.name_en), 1),
                                  createVNode("br"),
                                  createVNode("small", { class: "text-muted" }, toDisplayString(location.name_mk), 1)
                                ]),
                                createVNode("td", null, [
                                  createTextVNode(toDisplayString(location.address_en) + " ", 1),
                                  createVNode("br"),
                                  createVNode("small", { class: "text-muted" }, toDisplayString(location.address_mk), 1)
                                ]),
                                createVNode("td", null, toDisplayString(location.phone || "-"), 1),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", location.show_working_hours ? "bg-success" : "bg-secondary"]
                                  }, toDisplayString(location.show_working_hours ? "Shown" : "Hidden"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", location.is_active ? "bg-success" : "bg-danger"]
                                  }, toDisplayString(location.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.locations.edit", location.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteLocation(location.id),
                                      class: "btn btn-outline-danger"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            __props.locations.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center py-4 text-muted"
                              }, " No locations yet. Add your first location. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Locations/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
