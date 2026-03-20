import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
      slug: "",
      parent_type: "cosmetology",
      description_en: "",
      description_mk: "",
      display_type: "accordion",
      is_active: true
    });
    const submit = () => {
      form.post(route("admin.service-categories.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Service Category" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Add Service Category</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-categories.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Add Service Category"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.service-categories.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><form${_scopeId}><div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Category Information</h5></div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Name (English) *</label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.name_en }, "form-control"])}" required${_scopeId}>`);
            if (unref(form).errors.name_en) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Name (Macedonian) *</label><input${ssrRenderAttr("value", unref(form).name_mk)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.name_mk }, "form-control"])}" required${_scopeId}>`);
            if (unref(form).errors.name_mk) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.name_mk)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="form-control" placeholder="auto-generated if empty"${_scopeId}><small class="text-muted"${_scopeId}>Leave empty to auto-generate from English name</small></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Display Type *</label><select class="form-select"${_scopeId}><option value="accordion"${ssrIncludeBooleanAttr(Array.isArray(unref(form).display_type) ? ssrLooseContain(unref(form).display_type, "accordion") : ssrLooseEqual(unref(form).display_type, "accordion")) ? " selected" : ""}${_scopeId}>Accordion (expandable items)</option><option value="buttons"${ssrIncludeBooleanAttr(Array.isArray(unref(form).display_type) ? ssrLooseContain(unref(form).display_type, "buttons") : ssrLooseEqual(unref(form).display_type, "buttons")) ? " selected" : ""}${_scopeId}>Buttons (non-expandable)</option></select></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Parent Category *</label><select class="form-select"${_scopeId}><option value="cosmetology"${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_type) ? ssrLooseContain(unref(form).parent_type, "cosmetology") : ssrLooseEqual(unref(form).parent_type, "cosmetology")) ? " selected" : ""}${_scopeId}>Козметологија / Cosmetology</option><option value="laser_aesthetic"${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_type) ? ssrLooseContain(unref(form).parent_type, "laser_aesthetic") : ssrLooseEqual(unref(form).parent_type, "laser_aesthetic")) ? " selected" : ""}${_scopeId}>Ласерско Естетски Третмани / Laser Aesthetic Treatments</option></select><small class="text-muted"${_scopeId}>Choose which main service category this belongs to</small></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (English)</label><textarea class="form-control" rows="3"${_scopeId}>${ssrInterpolate(unref(form).description_en)}</textarea></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (Macedonian)</label><textarea class="form-control" rows="3"${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div></div><div class="form-check form-switch"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" class="form-check-input" id="isActive"${_scopeId}><label class="form-check-label" for="isActive"${_scopeId}> Active </label></div></div></div><div class="d-flex justify-content-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-categories.index"),
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
            _push2(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Category")}</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Category Information")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Name (English) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).name_en = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.name_en }],
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
                            createVNode("label", { class: "form-label" }, "Name (Macedonian) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).name_mk = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.name_mk }],
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
                            createVNode("label", { class: "form-label" }, "Slug"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "auto-generated if empty"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).slug]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Leave empty to auto-generate from English name")
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Display Type *"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).display_type = $event,
                              class: "form-select"
                            }, [
                              createVNode("option", { value: "accordion" }, "Accordion (expandable items)"),
                              createVNode("option", { value: "buttons" }, "Buttons (non-expandable)")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).display_type]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Parent Category *"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).parent_type = $event,
                              class: "form-select"
                            }, [
                              createVNode("option", { value: "cosmetology" }, "Козметологија / Cosmetology"),
                              createVNode("option", { value: "laser_aesthetic" }, "Ласерско Естетски Третмани / Laser Aesthetic Treatments")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).parent_type]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Choose which main service category this belongs to")
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (English)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_en = $event,
                              class: "form-control",
                              rows: "3"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (Macedonian)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event,
                              class: "form-control",
                              rows: "3"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_mk]
                            ])
                          ])
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
                          }, " Active ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-content-end gap-2" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.service-categories.index"),
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
                      }, toDisplayString(unref(form).processing ? "Creating..." : "Create Category"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServiceCategories/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
