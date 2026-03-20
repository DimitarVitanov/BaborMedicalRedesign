import { ref, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vShow, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const activeTab = ref("en");
    const props = __props;
    const form = useForm({
      subtitle: props.slide.subtitle,
      subtitle_mk: props.slide.subtitle_mk || "",
      title: props.slide.title,
      title_mk: props.slide.title_mk || "",
      highlight: props.slide.highlight,
      highlight_mk: props.slide.highlight_mk || "",
      description: props.slide.description,
      description_mk: props.slide.description_mk || "",
      cta_text: props.slide.cta_text,
      cta_text_mk: props.slide.cta_text_mk || "",
      cta_link: props.slide.cta_link || "",
      secondary_text: props.slide.secondary_text,
      secondary_text_mk: props.slide.secondary_text_mk || "",
      secondary_link: props.slide.secondary_link || "",
      image: null,
      image_desktop_webp: null,
      image_mobile_webp: null,
      order: props.slide.order,
      is_active: props.slide.is_active
    });
    const submit = () => {
      form.post(route("admin.hero-slides.update", props.slide.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Hero Slide - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Edit Hero Slide</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.hero-slides.index"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to List `);
                } else {
                  return [
                    createTextVNode(" Back to List ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Edit Hero Slide"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.hero-slides.index"),
                  class: "btn btn-outline-secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back to List ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><ul class="nav nav-tabs mb-4"${_scopeId}><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "en" }, "nav-link"])}"${_scopeId}> 🇬🇧 English </button></li><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "mk" }, "nav-link"])}"${_scopeId}> 🇲🇰 Македонски </button></li></ul><div style="${ssrRenderStyle(activeTab.value === "en" ? null : { display: "none" })}"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Subtitle (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.subtitle }, "form-control"])}"${ssrRenderAttr("value", unref(form).subtitle)} placeholder="e.g., Welcome to Babor Medical"${_scopeId}>`);
            if (unref(form).errors.subtitle) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.subtitle)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title }, "form-control"])}"${ssrRenderAttr("value", unref(form).title)} placeholder="e.g., Premium"${_scopeId}>`);
            if (unref(form).errors.title) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Highlight (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.highlight }, "form-control"])}"${ssrRenderAttr("value", unref(form).highlight)} placeholder="e.g., Skincare"${_scopeId}>`);
            if (unref(form).errors.highlight) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.highlight)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (EN)</label><textarea class="${ssrRenderClass([{ "is-invalid": unref(form).errors.description }, "form-control"])}" rows="3" placeholder="Enter slide description..."${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (unref(form).errors.description) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Primary Button Text (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.cta_text }, "form-control"])}"${ssrRenderAttr("value", unref(form).cta_text)} placeholder="e.g., Explore Products"${_scopeId}>`);
            if (unref(form).errors.cta_text) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.cta_text)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Secondary Button Text (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.secondary_text }, "form-control"])}"${ssrRenderAttr("value", unref(form).secondary_text)} placeholder="e.g., Learn More"${_scopeId}>`);
            if (unref(form).errors.secondary_text) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.secondary_text)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div style="${ssrRenderStyle(activeTab.value === "mk" ? null : { display: "none" })}"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Subtitle (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).subtitle_mk)} placeholder="пр., Добредојдовте во Babor Medical"${_scopeId}></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).title_mk)} placeholder="пр., Премиум"${_scopeId}></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Highlight (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).highlight_mk)} placeholder="пр., Нега на кожа"${_scopeId}></div></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (MK)</label><textarea class="form-control" rows="3" placeholder="Внесете опис на слајдот..."${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Primary Button Text (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).cta_text_mk)} placeholder="пр., Истражи производи"${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Secondary Button Text (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).secondary_text_mk)} placeholder="пр., Дознај повеќе"${_scopeId}></div></div></div><hr class="my-4"${_scopeId}><h6 class="mb-3"${_scopeId}>Links &amp; Settings</h6><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Primary Button Link</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).cta_link)} placeholder="e.g., /products"${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Secondary Button Link</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).secondary_link)} placeholder="e.g., /about"${_scopeId}></div></div><div class="card bg-light mb-4"${_scopeId}><div class="card-header"${_scopeId}><h6 class="mb-0"${_scopeId}>Responsive Images (WebP)</h6></div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Fallback Image</label>`);
            if (__props.slide.image) {
              _push2(`<div class="mb-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.slide.image}`)} alt="Current image" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input type="file" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.image }, "form-control form-control-sm"])}" accept="image/*"${_scopeId}>`);
            if (unref(form).errors.image) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.image)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<small class="text-muted"${_scopeId}>JPG/PNG fallback</small></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Desktop WebP</label>`);
            if (__props.slide.image_desktop_webp) {
              _push2(`<div class="mb-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.slide.image_desktop_webp}`)} alt="Desktop WebP" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input type="file" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.image_desktop_webp }, "form-control form-control-sm"])}" accept="image/webp"${_scopeId}>`);
            if (unref(form).errors.image_desktop_webp) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.image_desktop_webp)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<small class="text-muted"${_scopeId}>Optimized for desktop (1920px+)</small></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Mobile WebP</label>`);
            if (__props.slide.image_mobile_webp) {
              _push2(`<div class="mb-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.slide.image_mobile_webp}`)} alt="Mobile WebP" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input type="file" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.image_mobile_webp }, "form-control form-control-sm"])}" accept="image/webp"${_scopeId}>`);
            if (unref(form).errors.image_mobile_webp) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.image_mobile_webp)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<small class="text-muted"${_scopeId}>Optimized for mobile (768px)</small></div></div></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Order</label><input type="number" class="form-control"${ssrRenderAttr("value", unref(form).order)} min="0"${_scopeId}></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Status</label><div class="form-check form-switch mt-2"${_scopeId}><input class="form-check-input" type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""}${_scopeId}><label class="form-check-label" for="is_active"${_scopeId}>${ssrInterpolate(unref(form).is_active ? "Active" : "Inactive")}</label></div></div></div><div class="d-flex gap-2 mt-4"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.hero-slides.index"),
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
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Subtitle (EN)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: ["form-control", { "is-invalid": unref(form).errors.subtitle }],
                                "onUpdate:modelValue": ($event) => unref(form).subtitle = $event,
                                placeholder: "e.g., Welcome to Babor Medical"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).subtitle]
                              ]),
                              unref(form).errors.subtitle ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "invalid-feedback"
                              }, toDisplayString(unref(form).errors.subtitle), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "col-md-3 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Title (EN)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: ["form-control", { "is-invalid": unref(form).errors.title }],
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                placeholder: "e.g., Premium"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).title]
                              ]),
                              unref(form).errors.title ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "invalid-feedback"
                              }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "col-md-3 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Highlight (EN)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: ["form-control", { "is-invalid": unref(form).errors.highlight }],
                                "onUpdate:modelValue": ($event) => unref(form).highlight = $event,
                                placeholder: "e.g., Skincare"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).highlight]
                              ]),
                              unref(form).errors.highlight ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "invalid-feedback"
                              }, toDisplayString(unref(form).errors.highlight), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (EN)"),
                            withDirectives(createVNode("textarea", {
                              class: ["form-control", { "is-invalid": unref(form).errors.description }],
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              rows: "3",
                              placeholder: "Enter slide description..."
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description]
                            ]),
                            unref(form).errors.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Primary Button Text (EN)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: ["form-control", { "is-invalid": unref(form).errors.cta_text }],
                                "onUpdate:modelValue": ($event) => unref(form).cta_text = $event,
                                placeholder: "e.g., Explore Products"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).cta_text]
                              ]),
                              unref(form).errors.cta_text ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "invalid-feedback"
                              }, toDisplayString(unref(form).errors.cta_text), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Secondary Button Text (EN)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: ["form-control", { "is-invalid": unref(form).errors.secondary_text }],
                                "onUpdate:modelValue": ($event) => unref(form).secondary_text = $event,
                                placeholder: "e.g., Learn More"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).secondary_text]
                              ]),
                              unref(form).errors.secondary_text ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "invalid-feedback"
                              }, toDisplayString(unref(form).errors.secondary_text), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "en"]
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Subtitle (MK)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": ($event) => unref(form).subtitle_mk = $event,
                                placeholder: "пр., Добредојдовте во Babor Medical"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).subtitle_mk]
                              ])
                            ]),
                            createVNode("div", { class: "col-md-3 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Title (MK)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": ($event) => unref(form).title_mk = $event,
                                placeholder: "пр., Премиум"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).title_mk]
                              ])
                            ]),
                            createVNode("div", { class: "col-md-3 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Highlight (MK)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": ($event) => unref(form).highlight_mk = $event,
                                placeholder: "пр., Нега на кожа"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).highlight_mk]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (MK)"),
                            withDirectives(createVNode("textarea", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event,
                              rows: "3",
                              placeholder: "Внесете опис на слајдот..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_mk]
                            ])
                          ]),
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Primary Button Text (MK)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": ($event) => unref(form).cta_text_mk = $event,
                                placeholder: "пр., Истражи производи"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).cta_text_mk]
                              ])
                            ]),
                            createVNode("div", { class: "col-md-6 mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Secondary Button Text (MK)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": ($event) => unref(form).secondary_text_mk = $event,
                                placeholder: "пр., Дознај повеќе"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).secondary_text_mk]
                              ])
                            ])
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "mk"]
                        ]),
                        createVNode("hr", { class: "my-4" }),
                        createVNode("h6", { class: "mb-3" }, "Links & Settings"),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Primary Button Link"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).cta_link = $event,
                              placeholder: "e.g., /products"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).cta_link]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Secondary Button Link"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).secondary_link = $event,
                              placeholder: "e.g., /about"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).secondary_link]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "card bg-light mb-4" }, [
                          createVNode("div", { class: "card-header" }, [
                            createVNode("h6", { class: "mb-0" }, "Responsive Images (WebP)")
                          ]),
                          createVNode("div", { class: "card-body" }, [
                            createVNode("div", { class: "row" }, [
                              createVNode("div", { class: "col-md-4 mb-3" }, [
                                createVNode("label", { class: "form-label" }, "Fallback Image"),
                                __props.slide.image ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mb-2"
                                }, [
                                  createVNode("img", {
                                    src: `/storage/${__props.slide.image}`,
                                    alt: "Current image",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true),
                                createVNode("input", {
                                  type: "file",
                                  class: ["form-control form-control-sm", { "is-invalid": unref(form).errors.image }],
                                  onInput: ($event) => unref(form).image = $event.target.files[0],
                                  accept: "image/*"
                                }, null, 42, ["onInput"]),
                                unref(form).errors.image ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "invalid-feedback"
                                }, toDisplayString(unref(form).errors.image), 1)) : createCommentVNode("", true),
                                createVNode("small", { class: "text-muted" }, "JPG/PNG fallback")
                              ]),
                              createVNode("div", { class: "col-md-4 mb-3" }, [
                                createVNode("label", { class: "form-label" }, "Desktop WebP"),
                                __props.slide.image_desktop_webp ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mb-2"
                                }, [
                                  createVNode("img", {
                                    src: `/storage/${__props.slide.image_desktop_webp}`,
                                    alt: "Desktop WebP",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true),
                                createVNode("input", {
                                  type: "file",
                                  class: ["form-control form-control-sm", { "is-invalid": unref(form).errors.image_desktop_webp }],
                                  onInput: ($event) => unref(form).image_desktop_webp = $event.target.files[0],
                                  accept: "image/webp"
                                }, null, 42, ["onInput"]),
                                unref(form).errors.image_desktop_webp ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "invalid-feedback"
                                }, toDisplayString(unref(form).errors.image_desktop_webp), 1)) : createCommentVNode("", true),
                                createVNode("small", { class: "text-muted" }, "Optimized for desktop (1920px+)")
                              ]),
                              createVNode("div", { class: "col-md-4 mb-3" }, [
                                createVNode("label", { class: "form-label" }, "Mobile WebP"),
                                __props.slide.image_mobile_webp ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mb-2"
                                }, [
                                  createVNode("img", {
                                    src: `/storage/${__props.slide.image_mobile_webp}`,
                                    alt: "Mobile WebP",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true),
                                createVNode("input", {
                                  type: "file",
                                  class: ["form-control form-control-sm", { "is-invalid": unref(form).errors.image_mobile_webp }],
                                  onInput: ($event) => unref(form).image_mobile_webp = $event.target.files[0],
                                  accept: "image/webp"
                                }, null, 42, ["onInput"]),
                                unref(form).errors.image_mobile_webp ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "invalid-feedback"
                                }, toDisplayString(unref(form).errors.image_mobile_webp), 1)) : createCommentVNode("", true),
                                createVNode("small", { class: "text-muted" }, "Optimized for mobile (768px)")
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Order"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).order = $event,
                              min: "0"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).order]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-3 mb-3" }, [
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
                            href: _ctx.route("admin.hero-slides.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/HeroSlides/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
