import { ref, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, toDisplayString, openBlock, createBlock, createCommentVNode, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { R as RichTextEditor } from "./RichTextEditor--60SW3D6.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@tiptap/vue-3";
import "@tiptap/starter-kit";
import "@tiptap/extension-link";
import "@tiptap/extension-underline";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      slug: "",
      title_en: "",
      title_mk: "",
      description_en: "",
      description_mk: "",
      detailed_description_en: "",
      detailed_description_mk: "",
      link: "",
      category: "laser",
      is_active: true,
      image: null,
      image_desktop_webp: null,
      image_mobile_webp: null
    });
    const imagePreview = ref(null);
    const desktopWebpPreview = ref(null);
    const mobileWebpPreview = ref(null);
    const handleImageChange = (e, type = "image") => {
      const file = e.target.files[0];
      form[type] = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (type === "image") imagePreview.value = event.target.result;
          else if (type === "image_desktop_webp") desktopWebpPreview.value = event.target.result;
          else if (type === "image_mobile_webp") mobileWebpPreview.value = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const submit = () => {
      form.post(route("admin.equipment.store"), {
        forceFormData: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Equipment - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Add Equipment</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.equipment.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Add Equipment"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.equipment.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>URL Slug *</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.slug }, "form-control"])}" placeholder="alma-soprano-titanium" required${_scopeId}><small class="text-muted"${_scopeId}>Used in URL: /lasers/${ssrInterpolate(unref(form).slug || "slug")}</small>`);
            if (unref(form).errors.slug) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.slug)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Category *</label><select class="form-select" required${_scopeId}><option value="laser"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "laser") : ssrLooseEqual(unref(form).category, "laser")) ? " selected" : ""}${_scopeId}>Laser</option><option value="device"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "device") : ssrLooseEqual(unref(form).category, "device")) ? " selected" : ""}${_scopeId}>Device</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "other") : ssrLooseEqual(unref(form).category, "other")) ? " selected" : ""}${_scopeId}>Other</option></select></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (English) *</label><input${ssrRenderAttr("value", unref(form).title_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title_en }, "form-control"])}" required${_scopeId}>`);
            if (unref(form).errors.title_en) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title_en)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (Macedonian) *</label><input${ssrRenderAttr("value", unref(form).title_mk)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title_mk }, "form-control"])}" required${_scopeId}>`);
            if (unref(form).errors.title_mk) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title_mk)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Short Description (English)</label><textarea rows="2" class="form-control" placeholder="Brief description for homepage carousel"${_scopeId}>${ssrInterpolate(unref(form).description_en)}</textarea></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Short Description (Macedonian)</label><textarea rows="2" class="form-control" placeholder="Краток опис за почетна страница"${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div></div><div class="card bg-light mb-4"${_scopeId}><div class="card-header"${_scopeId}><h6 class="mb-0"${_scopeId}>Detailed Description (for Lasers page)</h6></div><div class="card-body"${_scopeId}><div class="mb-4"${_scopeId}><label class="form-label"${_scopeId}>Detailed Description (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).detailed_description_en,
              "onUpdate:modelValue": ($event) => unref(form).detailed_description_en = $event,
              placeholder: "Full description with features, benefits, specifications..."
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Detailed Description (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).detailed_description_mk,
              "onUpdate:modelValue": ($event) => unref(form).detailed_description_mk = $event,
              placeholder: "Целосен опис со карактеристики, придобивки, спецификации..."
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Link URL</label><input${ssrRenderAttr("value", unref(form).link)} type="text" class="form-control" placeholder="https://..."${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Category</label><select class="form-select"${_scopeId}><option value="laser"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "laser") : ssrLooseEqual(unref(form).category, "laser")) ? " selected" : ""}${_scopeId}>Laser</option><option value="device"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "device") : ssrLooseEqual(unref(form).category, "device")) ? " selected" : ""}${_scopeId}>Device</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "other") : ssrLooseEqual(unref(form).category, "other")) ? " selected" : ""}${_scopeId}>Other</option></select></div></div><div class="card bg-light mb-4"${_scopeId}><div class="card-header"${_scopeId}><h6 class="mb-0"${_scopeId}>Responsive Images (WebP)</h6></div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Fallback Image</label><input type="file" accept="image/*" class="form-control form-control-sm"${_scopeId}><small class="text-muted"${_scopeId}>JPG/PNG fallback</small>`);
            if (imagePreview.value) {
              _push2(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", imagePreview.value)} alt="Preview" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Desktop WebP</label><input type="file" accept="image/webp" class="form-control form-control-sm"${_scopeId}><small class="text-muted"${_scopeId}>Optimized for desktop</small>`);
            if (desktopWebpPreview.value) {
              _push2(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", desktopWebpPreview.value)} alt="Desktop Preview" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Mobile WebP</label><input type="file" accept="image/webp" class="form-control form-control-sm"${_scopeId}><small class="text-muted"${_scopeId}>Optimized for mobile</small>`);
            if (mobileWebpPreview.value) {
              _push2(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", mobileWebpPreview.value)} alt="Mobile Preview" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "80px" })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="form-check mb-4"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" id="is_active" class="form-check-input"${_scopeId}><label for="is_active" class="form-check-label"${_scopeId}> Active </label></div><div class="d-flex gap-2"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Equipment")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.equipment.index"),
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
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "URL Slug *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.slug }],
                              placeholder: "alma-soprano-titanium",
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).slug]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Used in URL: /lasers/" + toDisplayString(unref(form).slug || "slug"), 1),
                            unref(form).errors.slug ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.slug), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Category *"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).category = $event,
                              class: "form-select",
                              required: ""
                            }, [
                              createVNode("option", { value: "laser" }, "Laser"),
                              createVNode("option", { value: "device" }, "Device"),
                              createVNode("option", { value: "other" }, "Other")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).category]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Title (English) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).title_en = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.title_en }],
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title_en]
                            ]),
                            unref(form).errors.title_en ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.title_en), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Title (Macedonian) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).title_mk = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.title_mk }],
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title_mk]
                            ]),
                            unref(form).errors.title_mk ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.title_mk), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Short Description (English)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_en = $event,
                              rows: "2",
                              class: "form-control",
                              placeholder: "Brief description for homepage carousel"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Short Description (Macedonian)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event,
                              rows: "2",
                              class: "form-control",
                              placeholder: "Краток опис за почетна страница"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_mk]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "card bg-light mb-4" }, [
                          createVNode("div", { class: "card-header" }, [
                            createVNode("h6", { class: "mb-0" }, "Detailed Description (for Lasers page)")
                          ]),
                          createVNode("div", { class: "card-body" }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "form-label" }, "Detailed Description (English)"),
                              createVNode(RichTextEditor, {
                                modelValue: unref(form).detailed_description_en,
                                "onUpdate:modelValue": ($event) => unref(form).detailed_description_en = $event,
                                placeholder: "Full description with features, benefits, specifications..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-3" }, [
                              createVNode("label", { class: "form-label" }, "Detailed Description (Macedonian)"),
                              createVNode(RichTextEditor, {
                                modelValue: unref(form).detailed_description_mk,
                                "onUpdate:modelValue": ($event) => unref(form).detailed_description_mk = $event,
                                placeholder: "Целосен опис со карактеристики, придобивки, спецификации..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Link URL"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).link = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "https://..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).link]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Category"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).category = $event,
                              class: "form-select"
                            }, [
                              createVNode("option", { value: "laser" }, "Laser"),
                              createVNode("option", { value: "device" }, "Device"),
                              createVNode("option", { value: "other" }, "Other")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).category]
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
                                createVNode("input", {
                                  type: "file",
                                  onChange: ($event) => handleImageChange($event, "image"),
                                  accept: "image/*",
                                  class: "form-control form-control-sm"
                                }, null, 40, ["onChange"]),
                                createVNode("small", { class: "text-muted" }, "JPG/PNG fallback"),
                                imagePreview.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-2"
                                }, [
                                  createVNode("img", {
                                    src: imagePreview.value,
                                    alt: "Preview",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "col-md-4 mb-3" }, [
                                createVNode("label", { class: "form-label" }, "Desktop WebP"),
                                createVNode("input", {
                                  type: "file",
                                  onChange: ($event) => handleImageChange($event, "image_desktop_webp"),
                                  accept: "image/webp",
                                  class: "form-control form-control-sm"
                                }, null, 40, ["onChange"]),
                                createVNode("small", { class: "text-muted" }, "Optimized for desktop"),
                                desktopWebpPreview.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-2"
                                }, [
                                  createVNode("img", {
                                    src: desktopWebpPreview.value,
                                    alt: "Desktop Preview",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "col-md-4 mb-3" }, [
                                createVNode("label", { class: "form-label" }, "Mobile WebP"),
                                createVNode("input", {
                                  type: "file",
                                  onChange: ($event) => handleImageChange($event, "image_mobile_webp"),
                                  accept: "image/webp",
                                  class: "form-control form-control-sm"
                                }, null, 40, ["onChange"]),
                                createVNode("small", { class: "text-muted" }, "Optimized for mobile"),
                                mobileWebpPreview.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-2"
                                }, [
                                  createVNode("img", {
                                    src: mobileWebpPreview.value,
                                    alt: "Mobile Preview",
                                    class: "img-thumbnail",
                                    style: { "max-height": "80px" }
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "form-check mb-4" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                            type: "checkbox",
                            id: "is_active",
                            class: "form-check-input"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_active]
                          ]),
                          createVNode("label", {
                            for: "is_active",
                            class: "form-check-label"
                          }, " Active ")
                        ]),
                        createVNode("div", { class: "d-flex gap-2" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-primary",
                            disabled: unref(form).processing
                          }, toDisplayString(unref(form).processing ? "Creating..." : "Create Equipment"), 9, ["disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("admin.equipment.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Equipment/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
