import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const deleteSlide = (id) => {
      if (confirm("Are you sure you want to delete this slide?")) {
        router.delete(route("admin.hero-slides.destroy", id));
      }
    };
    const toggleActive = (slide) => {
      router.patch(route("admin.hero-slides.update", slide.id), {
        ...slide,
        is_active: !slide.is_active
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Hero Slides - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Hero Slides</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.hero-slides.create"),
              class: "btn btn-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add New Slide `);
                } else {
                  return [
                    createTextVNode(" Add New Slide ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Hero Slides"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.hero-slides.create"),
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add New Slide ")
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
            if (__props.slides.length === 0) {
              _push2(`<div class="text-center py-5 text-muted"${_scopeId}><p class="mb-3"${_scopeId}>No hero slides yet.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.hero-slides.create"),
                class: "btn btn-primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Create your first slide `);
                  } else {
                    return [
                      createTextVNode(" Create your first slide ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="table-responsive"${_scopeId}><table class="table table-hover align-middle"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th style="${ssrRenderStyle({ "width": "60px" })}"${_scopeId}>Order</th><th${_scopeId}>Title</th><th${_scopeId}>Subtitle</th><th style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.slides, (slide) => {
                _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(slide.order)}</td><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(slide.title)}</strong><span class="text-primary ms-1"${_scopeId}>${ssrInterpolate(slide.highlight)}</span></td><td${_scopeId}>${ssrInterpolate(slide.subtitle)}</td><td${_scopeId}><span class="${ssrRenderClass([slide.is_active ? "bg-success" : "bg-secondary", "badge"])}" style="${ssrRenderStyle({ "cursor": "pointer" })}"${_scopeId}>${ssrInterpolate(slide.is_active ? "Active" : "Inactive")}</span></td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.hero-slides.edit", slide.id),
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
                      __props.slides.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-5 text-muted"
                      }, [
                        createVNode("p", { class: "mb-3" }, "No hero slides yet."),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.hero-slides.create"),
                          class: "btn btn-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create your first slide ")
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
                              createVNode("th", { style: { "width": "60px" } }, "Order"),
                              createVNode("th", null, "Title"),
                              createVNode("th", null, "Subtitle"),
                              createVNode("th", { style: { "width": "100px" } }, "Status"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.slides, (slide) => {
                              return openBlock(), createBlock("tr", {
                                key: slide.id
                              }, [
                                createVNode("td", null, toDisplayString(slide.order), 1),
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(slide.title), 1),
                                  createVNode("span", { class: "text-primary ms-1" }, toDisplayString(slide.highlight), 1)
                                ]),
                                createVNode("td", null, toDisplayString(slide.subtitle), 1),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", slide.is_active ? "bg-success" : "bg-secondary"],
                                    style: { "cursor": "pointer" },
                                    onClick: ($event) => toggleActive(slide)
                                  }, toDisplayString(slide.is_active ? "Active" : "Inactive"), 11, ["onClick"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.hero-slides.edit", slide.id),
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
                                      onClick: ($event) => deleteSlide(slide.id)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/HeroSlides/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
