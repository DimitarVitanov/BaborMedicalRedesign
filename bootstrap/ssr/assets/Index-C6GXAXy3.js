import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    equipment: Array
  },
  setup(__props) {
    const deleteEquipment = (id) => {
      if (confirm("Are you sure you want to delete this equipment?")) {
        router.delete(route("admin.equipment.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Equipment - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Equipment</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.equipment.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Equipment `);
                } else {
                  return [
                    createTextVNode(" Add Equipment ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Equipment"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.equipment.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Equipment ")
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
            if (__props.equipment.length === 0) {
              _push2(`<div class="text-center py-5 text-muted"${_scopeId}><p class="mb-3"${_scopeId}>No equipment yet.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.equipment.create"),
                class: "btn btn-primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Add your first equipment `);
                  } else {
                    return [
                      createTextVNode(" Add your first equipment ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="table-responsive"${_scopeId}><table class="table table-hover align-middle"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th style="${ssrRenderStyle({ "width": "80px" })}"${_scopeId}>Image</th><th${_scopeId}>Title (EN)</th><th${_scopeId}>Title (MK)</th><th style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>Category</th><th style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.equipment, (item) => {
                _push2(`<tr${_scopeId}><td${_scopeId}>`);
                if (item.image) {
                  _push2(`<img${ssrRenderAttr("src", "/storage/" + item.image)}${ssrRenderAttr("alt", item.title_en)} class="img-thumbnail" style="${ssrRenderStyle({ "width": "60px", "height": "60px", "object-fit": "contain" })}"${_scopeId}>`);
                } else {
                  _push2(`<div class="bg-light rounded d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}"${_scopeId}><small class="text-muted"${_scopeId}>No img</small></div>`);
                }
                _push2(`</td><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(item.title_en)}</strong></td><td${_scopeId}>${ssrInterpolate(item.title_mk)}</td><td${_scopeId}><span class="badge bg-info"${_scopeId}>${ssrInterpolate(item.category)}</span></td><td${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.equipment.edit", item.id),
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
                _push2(`<button type="button" class="btn btn-outline-danger"${_scopeId}> Delete </button></div></td></tr>`);
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
                      __props.equipment.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-5 text-muted"
                      }, [
                        createVNode("p", { class: "mb-3" }, "No equipment yet."),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.equipment.create"),
                          class: "btn btn-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add your first equipment ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "table-responsive"
                      }, [
                        createVNode("table", { class: "table table-hover align-middle" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { style: { "width": "80px" } }, "Image"),
                              createVNode("th", null, "Title (EN)"),
                              createVNode("th", null, "Title (MK)"),
                              createVNode("th", { style: { "width": "100px" } }, "Category"),
                              createVNode("th", { style: { "width": "100px" } }, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment, (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.id
                              }, [
                                createVNode("td", null, [
                                  item.image ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: "/storage/" + item.image,
                                    alt: item.title_en,
                                    class: "img-thumbnail",
                                    style: { "width": "60px", "height": "60px", "object-fit": "contain" }
                                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "bg-light rounded d-flex align-items-center justify-content-center",
                                    style: { "width": "60px", "height": "60px" }
                                  }, [
                                    createVNode("small", { class: "text-muted" }, "No img")
                                  ]))
                                ]),
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(item.title_en), 1)
                                ]),
                                createVNode("td", null, toDisplayString(item.title_mk), 1),
                                createVNode("td", null, [
                                  createVNode("span", { class: "badge bg-info" }, toDisplayString(item.category), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", item.is_active ? "bg-success" : "bg-secondary"]
                                  }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.equipment.edit", item.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-outline-danger",
                                      onClick: ($event) => deleteEquipment(item.id)
                                    }, " Delete ", 8, ["onClick"])
                                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
