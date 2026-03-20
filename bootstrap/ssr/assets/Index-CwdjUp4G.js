import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    items: Object,
    categories: Array,
    selectedCategory: [String, Number]
  },
  setup(__props) {
    const deleteItem = (id) => {
      if (confirm("Are you sure you want to delete this service?")) {
        router.delete(route("admin.service-items.destroy", id));
      }
    };
    const filterByCategory = (categoryId) => {
      router.get(route("admin.service-items.index"), categoryId ? { category: categoryId } : {}, {
        preserveState: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Services" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Services</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-items.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Service `);
                } else {
                  return [
                    createTextVNode(" Add Service ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Services"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.service-items.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Service ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card mb-4"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex align-items-center gap-3"${_scopeId}><label class="form-label mb-0"${_scopeId}>Filter by Category:</label><select class="form-select" style="${ssrRenderStyle({ "width": "auto" })}"${_scopeId}><option value=""${_scopeId}>All Categories</option><!--[-->`);
            ssrRenderList(__props.categories, (cat) => {
              _push2(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(__props.selectedCategory == cat.id) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.name_en)}</option>`);
            });
            _push2(`<!--]--></select></div></div></div><div class="card"${_scopeId}><div class="card-body p-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-hover mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>Category</th><th${_scopeId}>Price</th><th${_scopeId}>Duration</th><th${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.items.data, (item) => {
              var _a;
              _push2(`<tr${_scopeId}><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(item.name_en)}</strong><br${_scopeId}><small class="text-muted"${_scopeId}>${ssrInterpolate(item.name_mk)}</small></td><td${_scopeId}><span class="badge bg-secondary"${_scopeId}>${ssrInterpolate((_a = item.category) == null ? void 0 : _a.name_en)}</span></td><td${_scopeId}>`);
              if (item.price_from && item.price_to) {
                _push2(`<!--[-->${ssrInterpolate(item.price_from)} - ${ssrInterpolate(item.price_to)} MKD <!--]-->`);
              } else if (item.price_from) {
                _push2(`<!--[--> од ${ssrInterpolate(item.price_from)} MKD <!--]-->`);
              } else if (item.price_to) {
                _push2(`<!--[--> до ${ssrInterpolate(item.price_to)} MKD <!--]-->`);
              } else if (item.price) {
                _push2(`<!--[-->${ssrInterpolate(item.price)} MKD <!--]-->`);
              } else {
                _push2(`<!--[-->-<!--]-->`);
              }
              _push2(`</td><td${_scopeId}>${ssrInterpolate(item.duration || "-")}</td><td${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-success" : "bg-danger", "badge"])}"${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.service-items.edit", item.id),
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
            if (__props.items.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="6" class="text-center py-4 text-muted"${_scopeId}> No services yet. Add your first service. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
            if (__props.items.last_page > 1) {
              _push2(`<div class="d-flex justify-content-center mt-4"${_scopeId}><nav${_scopeId}><ul class="pagination"${_scopeId}><!--[-->`);
              ssrRenderList(__props.items.links, (link) => {
                _push2(`<li class="${ssrRenderClass([{ active: link.active, disabled: !link.url }, "page-item"])}"${_scopeId}>`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: "page-link"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="page-link"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card mb-4" }, [
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "d-flex align-items-center gap-3" }, [
                        createVNode("label", { class: "form-label mb-0" }, "Filter by Category:"),
                        createVNode("select", {
                          class: "form-select",
                          style: { "width": "auto" },
                          onChange: ($event) => filterByCategory($event.target.value)
                        }, [
                          createVNode("option", { value: "" }, "All Categories"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
                            return openBlock(), createBlock("option", {
                              key: cat.id,
                              value: cat.id,
                              selected: __props.selectedCategory == cat.id
                            }, toDisplayString(cat.name_en), 9, ["value", "selected"]);
                          }), 128))
                        ], 40, ["onChange"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body p-0" }, [
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table table-hover mb-0" }, [
                          createVNode("thead", { class: "table-light" }, [
                            createVNode("tr", null, [
                              createVNode("th", null, "Name"),
                              createVNode("th", null, "Category"),
                              createVNode("th", null, "Price"),
                              createVNode("th", null, "Duration"),
                              createVNode("th", null, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.items.data, (item) => {
                              var _a;
                              return openBlock(), createBlock("tr", {
                                key: item.id
                              }, [
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(item.name_en), 1),
                                  createVNode("br"),
                                  createVNode("small", { class: "text-muted" }, toDisplayString(item.name_mk), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", { class: "badge bg-secondary" }, toDisplayString((_a = item.category) == null ? void 0 : _a.name_en), 1)
                                ]),
                                createVNode("td", null, [
                                  item.price_from && item.price_to ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(item.price_from) + " - " + toDisplayString(item.price_to) + " MKD ", 1)
                                  ], 64)) : item.price_from ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" од " + toDisplayString(item.price_from) + " MKD ", 1)
                                  ], 64)) : item.price_to ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                    createTextVNode(" до " + toDisplayString(item.price_to) + " MKD ", 1)
                                  ], 64)) : item.price ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                    createTextVNode(toDisplayString(item.price) + " MKD ", 1)
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 4 }, [
                                    createTextVNode("-")
                                  ], 64))
                                ]),
                                createVNode("td", null, toDisplayString(item.duration || "-"), 1),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", item.is_active ? "bg-success" : "bg-danger"]
                                  }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.service-items.edit", item.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteItem(item.id),
                                      class: "btn btn-outline-danger"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            __props.items.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center py-4 text-muted"
                              }, " No services yet. Add your first service. ")
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  __props.items.last_page > 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex justify-content-center mt-4"
                  }, [
                    createVNode("nav", null, [
                      createVNode("ul", { class: "pagination" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.items.links, (link) => {
                          return openBlock(), createBlock("li", {
                            key: link.label,
                            class: ["page-item", { active: link.active, disabled: !link.url }]
                          }, [
                            link.url ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: link.url,
                              class: "page-link",
                              innerHTML: link.label
                            }, null, 8, ["href", "innerHTML"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "page-link",
                              innerHTML: link.label
                            }, null, 8, ["innerHTML"]))
                          ], 2);
                        }), 128))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServiceItems/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
