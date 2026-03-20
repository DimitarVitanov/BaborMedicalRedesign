import { ref, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vShow, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { R as RichTextEditor } from "./RichTextEditor--60SW3D6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@tiptap/vue-3";
import "@tiptap/starter-kit";
import "@tiptap/extension-link";
import "@tiptap/extension-underline";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    about: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const activeTab = ref("en");
    const props = __props;
    const form = useForm({
      title: props.about.title,
      title_mk: props.about.title_mk || "",
      subtitle: props.about.subtitle,
      subtitle_mk: props.about.subtitle_mk || "",
      short_description: props.about.short_description,
      short_description_mk: props.about.short_description_mk || "",
      full_content: props.about.full_content,
      full_content_mk: props.about.full_content_mk || "",
      image: props.about.image || "",
      is_active: props.about.is_active
    });
    const submit = () => {
      form.post(route("admin.about.update", props.about.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit About Content - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Edit About Content</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.about.index"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back `);
                } else {
                  return [
                    createTextVNode(" Back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Edit About Content"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.about.index"),
                  class: "btn btn-outline-secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><ul class="nav nav-tabs mb-4"${_scopeId}><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "en" }, "nav-link"])}"${_scopeId}> 🇬🇧 English </button></li><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "mk" }, "nav-link"])}"${_scopeId}> 🇲🇰 Македонски </button></li></ul><div style="${ssrRenderStyle(activeTab.value === "en" ? null : { display: "none" })}"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title }, "form-control"])}"${ssrRenderAttr("value", unref(form).title)}${_scopeId}>`);
            if (unref(form).errors.title) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Subtitle (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.subtitle }, "form-control"])}"${ssrRenderAttr("value", unref(form).subtitle)}${_scopeId}>`);
            if (unref(form).errors.subtitle) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.subtitle)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Short Description (EN)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).short_description,
              "onUpdate:modelValue": ($event) => unref(form).short_description = $event,
              placeholder: "Short description..."
            }, null, _parent2, _scopeId));
            _push2(`<small class="text-muted"${_scopeId}>Shown on homepage</small>`);
            if (unref(form).errors.short_description) {
              _push2(`<div class="text-danger small mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.short_description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Full Content (EN)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).full_content,
              "onUpdate:modelValue": ($event) => unref(form).full_content = $event,
              placeholder: "Full about content..."
            }, null, _parent2, _scopeId));
            _push2(`<small class="text-muted"${_scopeId}>Shown on dedicated About page</small>`);
            if (unref(form).errors.full_content) {
              _push2(`<div class="text-danger small mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.full_content)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div style="${ssrRenderStyle(activeTab.value === "mk" ? null : { display: "none" })}"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Наслов (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).title_mk)}${_scopeId}></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Поднаслов (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).subtitle_mk)}${_scopeId}></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Краток опис (MK)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).short_description_mk,
              "onUpdate:modelValue": ($event) => unref(form).short_description_mk = $event,
              placeholder: "Краток опис..."
            }, null, _parent2, _scopeId));
            _push2(`<small class="text-muted"${_scopeId}>Прикажано на почетна страница</small></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Целосна содржина (MK)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).full_content_mk,
              "onUpdate:modelValue": ($event) => unref(form).full_content_mk = $event,
              placeholder: "Целосна содржина..."
            }, null, _parent2, _scopeId));
            _push2(`<small class="text-muted"${_scopeId}>Прикажано на За нас страница</small></div></div><hr class="my-4"${_scopeId}><h6 class="mb-3"${_scopeId}>Settings</h6><div class="row"${_scopeId}><div class="col-md-8 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Image Path</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).image)} placeholder="/images/about.webp"${_scopeId}></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Status</label><div class="form-check form-switch mt-2"${_scopeId}><input class="form-check-input" type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""}${_scopeId}><label class="form-check-label" for="is_active"${_scopeId}>${ssrInterpolate(unref(form).is_active ? "Active" : "Inactive")}</label></div></div></div><div class="d-flex gap-2 mt-4"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.about.index"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("ul", { class: "nav nav-tabs mb-4" }, [
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["nav-link", { active: activeTab.value === "en" }],
                              onClick: ($event) => activeTab.value = "en"
                            }, " 🇬🇧 English ", 10, ["onClick"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["nav-link", { active: activeTab.value === "mk" }],
                              onClick: ($event) => activeTab.value = "mk"
                            }, " 🇲🇰 Македонски ", 10, ["onClick"])
                          ])
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Title (EN)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.title }],
                              "onUpdate:modelValue": ($event) => unref(form).title = $event
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title]
                            ]),
                            unref(form).errors.title ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Subtitle (EN)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.subtitle }],
                              "onUpdate:modelValue": ($event) => unref(form).subtitle = $event
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).subtitle]
                            ]),
                            unref(form).errors.subtitle ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.subtitle), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Short Description (EN)"),
                            createVNode(RichTextEditor, {
                              modelValue: unref(form).short_description,
                              "onUpdate:modelValue": ($event) => unref(form).short_description = $event,
                              placeholder: "Short description..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("small", { class: "text-muted" }, "Shown on homepage"),
                            unref(form).errors.short_description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-danger small mt-1"
                            }, toDisplayString(unref(form).errors.short_description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Full Content (EN)"),
                            createVNode(RichTextEditor, {
                              modelValue: unref(form).full_content,
                              "onUpdate:modelValue": ($event) => unref(form).full_content = $event,
                              placeholder: "Full about content..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("small", { class: "text-muted" }, "Shown on dedicated About page"),
                            unref(form).errors.full_content ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-danger small mt-1"
                            }, toDisplayString(unref(form).errors.full_content), 1)) : createCommentVNode("", true)
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "en"]
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Наслов (MK)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).title_mk = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title_mk]
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Поднаслов (MK)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).subtitle_mk = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).subtitle_mk]
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Краток опис (MK)"),
                            createVNode(RichTextEditor, {
                              modelValue: unref(form).short_description_mk,
                              "onUpdate:modelValue": ($event) => unref(form).short_description_mk = $event,
                              placeholder: "Краток опис..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("small", { class: "text-muted" }, "Прикажано на почетна страница")
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Целосна содржина (MK)"),
                            createVNode(RichTextEditor, {
                              modelValue: unref(form).full_content_mk,
                              "onUpdate:modelValue": ($event) => unref(form).full_content_mk = $event,
                              placeholder: "Целосна содржина..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("small", { class: "text-muted" }, "Прикажано на За нас страница")
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "mk"]
                        ]),
                        createVNode("hr", { class: "my-4" }),
                        createVNode("h6", { class: "mb-3" }, "Settings"),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-8 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Image Path"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).image = $event,
                              placeholder: "/images/about.webp"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).image]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Status"),
                            createVNode("div", { class: "form-check form-switch mt-2" }, [
                              withDirectives(createVNode("input", {
                                class: "form-check-input",
                                type: "checkbox",
                                id: "is_active",
                                "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).is_active]
                              ]),
                              createVNode("label", {
                                class: "form-check-label",
                                for: "is_active"
                              }, toDisplayString(unref(form).is_active ? "Active" : "Inactive"), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "d-flex gap-2 mt-4" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-primary",
                            disabled: unref(form).processing
                          }, toDisplayString(unref(form).processing ? "Saving..." : "Save Changes"), 9, ["disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("admin.about.index"),
                            class: "btn btn-outline-secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/About/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
