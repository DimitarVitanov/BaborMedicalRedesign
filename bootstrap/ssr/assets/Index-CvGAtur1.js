import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    about: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "About Content - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>About Section Content</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "About Section Content")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}>`);
            if (!__props.about) {
              _push2(`<div class="alert alert-warning"${_scopeId}> No about content found. Please run the seeder. </div>`);
            } else {
              _push2(`<div class="card"${_scopeId}><div class="card-header d-flex justify-content-between align-items-center"${_scopeId}><h5 class="mb-0"${_scopeId}>Current Content</h5>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.about.edit", __props.about.id),
                class: "btn btn-primary btn-sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit Content `);
                  } else {
                    return [
                      createTextVNode(" Edit Content ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-2"${_scopeId}>English</h6><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Title</label><p${_scopeId}>${ssrInterpolate(__props.about.title)}</p></div><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Subtitle</label><p${_scopeId}>${ssrInterpolate(__props.about.subtitle)}</p></div><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Short Description</label><p class="text-muted small"${_scopeId}>${ssrInterpolate(__props.about.short_description)}</p></div></div><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-2"${_scopeId}>Македонски</h6><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Наслов</label><p${_scopeId}>${ssrInterpolate(__props.about.title_mk || "-")}</p></div><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Поднаслов</label><p${_scopeId}>${ssrInterpolate(__props.about.subtitle_mk || "-")}</p></div><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Краток опис</label><p class="text-muted small"${_scopeId}>${ssrInterpolate(__props.about.short_description_mk || "-")}</p></div></div></div><hr${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Image</label><p${_scopeId}>${ssrInterpolate(__props.about.image || "No image set")}</p></div><div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Status</label><span class="${ssrRenderClass([__props.about.is_active ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(__props.about.is_active ? "Active" : "Inactive")}</span></div></div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  !__props.about ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "alert alert-warning"
                  }, " No about content found. Please run the seeder. ")) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "card"
                  }, [
                    createVNode("div", { class: "card-header d-flex justify-content-between align-items-center" }, [
                      createVNode("h5", { class: "mb-0" }, "Current Content"),
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.about.edit", __props.about.id),
                        class: "btn btn-primary btn-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Edit Content ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-2" }, "English"),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Title"),
                            createVNode("p", null, toDisplayString(__props.about.title), 1)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Subtitle"),
                            createVNode("p", null, toDisplayString(__props.about.subtitle), 1)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Short Description"),
                            createVNode("p", { class: "text-muted small" }, toDisplayString(__props.about.short_description), 1)
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-2" }, "Македонски"),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Наслов"),
                            createVNode("p", null, toDisplayString(__props.about.title_mk || "-"), 1)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Поднаслов"),
                            createVNode("p", null, toDisplayString(__props.about.subtitle_mk || "-"), 1)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Краток опис"),
                            createVNode("p", { class: "text-muted small" }, toDisplayString(__props.about.short_description_mk || "-"), 1)
                          ])
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("label", { class: "form-label fw-bold" }, "Image"),
                        createVNode("p", null, toDisplayString(__props.about.image || "No image set"), 1)
                      ]),
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("label", { class: "form-label fw-bold" }, "Status"),
                        createVNode("span", {
                          class: ["badge", __props.about.is_active ? "bg-success" : "bg-secondary"]
                        }, toDisplayString(__props.about.is_active ? "Active" : "Inactive"), 3)
                      ])
                    ])
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/About/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
