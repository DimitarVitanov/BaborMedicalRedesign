import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name_en: "",
      name_mk: "",
      address_en: "",
      address_mk: "",
      phone: "",
      email: "",
      working_hours_weekdays_en: "09:00 - 20:00",
      working_hours_weekdays_mk: "09:00 - 20:00",
      working_hours_saturday_en: "10:00 - 18:00",
      working_hours_saturday_mk: "10:00 - 18:00",
      working_hours_sunday_en: "Closed",
      working_hours_sunday_mk: "Затворено",
      show_working_hours: true,
      map_embed_url: "",
      is_active: true
    });
    const submit = () => {
      form.post(route("admin.locations.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Location" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Add Location</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.locations.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Add Location"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.locations.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><form${_scopeId}><div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Basic Information</h5></div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Location Name (English) *</label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.name_en }, "form-control"])}" placeholder="e.g., Main Office" required${_scopeId}>`);
            if (unref(form).errors.name_en) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Location Name (Macedonian) *</label><input${ssrRenderAttr("value", unref(form).name_mk)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.name_mk }, "form-control"])}" placeholder="e.g., Главна канцеларија" required${_scopeId}>`);
            if (unref(form).errors.name_mk) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.name_mk)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Address (English) *</label><input${ssrRenderAttr("value", unref(form).address_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.address_en }, "form-control"])}" placeholder="e.g., Skopje, Macedonia" required${_scopeId}>`);
            if (unref(form).errors.address_en) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.address_en)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Address (Macedonian) *</label><input${ssrRenderAttr("value", unref(form).address_mk)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.address_mk }, "form-control"])}" placeholder="e.g., Скопје, Македонија" required${_scopeId}>`);
            if (unref(form).errors.address_mk) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.address_mk)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Phone</label><input${ssrRenderAttr("value", unref(form).phone)} type="text" class="form-control" placeholder="+389 XX XXX XXX"${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="form-control" placeholder="info@babormedical.mk"${_scopeId}></div></div></div></div><div class="card mb-4"${_scopeId}><div class="card-header d-flex justify-content-between align-items-center"${_scopeId}><h5 class="mb-0"${_scopeId}>Working Hours</h5><div class="form-check form-switch"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).show_working_hours) ? ssrLooseContain(unref(form).show_working_hours, null) : unref(form).show_working_hours) ? " checked" : ""} type="checkbox" class="form-check-input" id="showWorkingHours"${_scopeId}><label class="form-check-label" for="showWorkingHours"${_scopeId}> Show on website </label></div></div><div class="${ssrRenderClass([{ "opacity-50": !unref(form).show_working_hours }, "card-body"])}"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-md-4"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Monday - Friday</label></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_weekdays_en)} type="text" class="form-control" placeholder="09:00 - 20:00"${_scopeId}><small class="text-muted"${_scopeId}>English</small></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_weekdays_mk)} type="text" class="form-control" placeholder="09:00 - 20:00"${_scopeId}><small class="text-muted"${_scopeId}>Macedonian</small></div></div><div class="row mb-3"${_scopeId}><div class="col-md-4"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Saturday</label></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_saturday_en)} type="text" class="form-control" placeholder="10:00 - 18:00"${_scopeId}></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_saturday_mk)} type="text" class="form-control" placeholder="10:00 - 18:00"${_scopeId}></div></div><div class="row"${_scopeId}><div class="col-md-4"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Sunday</label></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_sunday_en)} type="text" class="form-control" placeholder="Closed"${_scopeId}></div><div class="col-md-4"${_scopeId}><input${ssrRenderAttr("value", unref(form).working_hours_sunday_mk)} type="text" class="form-control" placeholder="Затворено"${_scopeId}></div></div></div></div><div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Map &amp; Status</h5></div><div class="card-body"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Google Maps Embed URL</label><input${ssrRenderAttr("value", unref(form).map_embed_url)} type="text" class="form-control" placeholder="https://www.google.com/maps/embed?pb=..."${_scopeId}><small class="text-muted"${_scopeId}>Paste the embed URL from Google Maps</small></div><div class="form-check form-switch"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" class="form-check-input" id="isActive"${_scopeId}><label class="form-check-label" for="isActive"${_scopeId}> Active (show on website) </label></div></div></div><div class="d-flex justify-content-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.locations.index"),
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
            _push2(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Location")}</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Basic Information")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Location Name (English) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).name_en = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.name_en }],
                              placeholder: "e.g., Main Office",
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).name_en]
                            ]),
                            unref(form).errors.name_en ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.name_en), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Location Name (Macedonian) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).name_mk = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.name_mk }],
                              placeholder: "e.g., Главна канцеларија",
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).name_mk]
                            ]),
                            unref(form).errors.name_mk ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.name_mk), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Address (English) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).address_en = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.address_en }],
                              placeholder: "e.g., Skopje, Macedonia",
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).address_en]
                            ]),
                            unref(form).errors.address_en ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.address_en), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Address (Macedonian) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).address_mk = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.address_mk }],
                              placeholder: "e.g., Скопје, Македонија",
                              required: ""
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).address_mk]
                            ]),
                            unref(form).errors.address_mk ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.address_mk), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Phone"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "+389 XX XXX XXX"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).phone]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Email"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              class: "form-control",
                              placeholder: "info@babormedical.mk"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).email]
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header d-flex justify-content-between align-items-center" }, [
                        createVNode("h5", { class: "mb-0" }, "Working Hours"),
                        createVNode("div", { class: "form-check form-switch" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).show_working_hours = $event,
                            type: "checkbox",
                            class: "form-check-input",
                            id: "showWorkingHours"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).show_working_hours]
                          ]),
                          createVNode("label", {
                            class: "form-check-label",
                            for: "showWorkingHours"
                          }, " Show on website ")
                        ])
                      ]),
                      createVNode("div", {
                        class: ["card-body", { "opacity-50": !unref(form).show_working_hours }]
                      }, [
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-4" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Monday - Friday")
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_weekdays_en = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "09:00 - 20:00"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_weekdays_en]
                            ]),
                            createVNode("small", { class: "text-muted" }, "English")
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_weekdays_mk = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "09:00 - 20:00"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_weekdays_mk]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Macedonian")
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-4" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Saturday")
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_saturday_en = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "10:00 - 18:00"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_saturday_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_saturday_mk = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "10:00 - 18:00"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_saturday_mk]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-4" }, [
                            createVNode("label", { class: "form-label fw-bold" }, "Sunday")
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_sunday_en = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "Closed"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_sunday_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).working_hours_sunday_mk = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "Затворено"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).working_hours_sunday_mk]
                            ])
                          ])
                        ])
                      ], 2)
                    ]),
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Map & Status")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Google Maps Embed URL"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).map_embed_url = $event,
                            type: "text",
                            class: "form-control",
                            placeholder: "https://www.google.com/maps/embed?pb=..."
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).map_embed_url]
                          ]),
                          createVNode("small", { class: "text-muted" }, "Paste the embed URL from Google Maps")
                        ]),
                        createVNode("div", { class: "form-check form-switch" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                            type: "checkbox",
                            class: "form-check-input",
                            id: "isActive"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_active]
                          ]),
                          createVNode("label", {
                            class: "form-check-label",
                            for: "isActive"
                          }, " Active (show on website) ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-content-end gap-2" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.locations.index"),
                        class: "btn btn-outline-secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary",
                        disabled: unref(form).processing
                      }, toDisplayString(unref(form).processing ? "Creating..." : "Create Location"), 9, ["disabled"])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Locations/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
