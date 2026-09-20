import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-C2Ae6j-N.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title_en: "",
      title_mk: "",
      location_en: "",
      location_mk: "",
      employment_type: "full_time",
      description_en: "",
      description_mk: "",
      requirements_en: "",
      requirements_mk: "",
      is_active: true
    });
    const submit = () => {
      form.post(route("admin.job-postings.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Job Posting - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Add Job Posting</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.job-postings.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Add Job Posting"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.job-postings.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (English) *</label><input${ssrRenderAttr("value", unref(form).title_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title_en }, "form-control"])}" placeholder="e.g. Cosmetologist" required${_scopeId}>`);
            if (unref(form).errors.title_en) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title_en)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (Macedonian) *</label><input${ssrRenderAttr("value", unref(form).title_mk)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title_mk }, "form-control"])}" placeholder="пр. Козметолог" required${_scopeId}>`);
            if (unref(form).errors.title_mk) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title_mk)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Location (English)</label><input${ssrRenderAttr("value", unref(form).location_en)} type="text" class="form-control" placeholder="e.g. Skopje"${_scopeId}></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Location (Macedonian)</label><input${ssrRenderAttr("value", unref(form).location_mk)} type="text" class="form-control" placeholder="пр. Скопје"${_scopeId}></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Employment Type *</label><select class="form-select" required${_scopeId}><option value="full_time"${ssrIncludeBooleanAttr(Array.isArray(unref(form).employment_type) ? ssrLooseContain(unref(form).employment_type, "full_time") : ssrLooseEqual(unref(form).employment_type, "full_time")) ? " selected" : ""}${_scopeId}>Full-time</option><option value="part_time"${ssrIncludeBooleanAttr(Array.isArray(unref(form).employment_type) ? ssrLooseContain(unref(form).employment_type, "part_time") : ssrLooseEqual(unref(form).employment_type, "part_time")) ? " selected" : ""}${_scopeId}>Part-time</option><option value="contract"${ssrIncludeBooleanAttr(Array.isArray(unref(form).employment_type) ? ssrLooseContain(unref(form).employment_type, "contract") : ssrLooseEqual(unref(form).employment_type, "contract")) ? " selected" : ""}${_scopeId}>Contract</option><option value="internship"${ssrIncludeBooleanAttr(Array.isArray(unref(form).employment_type) ? ssrLooseContain(unref(form).employment_type, "internship") : ssrLooseEqual(unref(form).employment_type, "internship")) ? " selected" : ""}${_scopeId}>Internship</option></select></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (English)</label><textarea rows="5" class="form-control" placeholder="What the role is about, responsibilities..."${_scopeId}>${ssrInterpolate(unref(form).description_en)}</textarea></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (Macedonian)</label><textarea rows="5" class="form-control" placeholder="За што е позицијата, одговорности..."${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Requirements (English)</label><textarea rows="5" class="form-control" placeholder="One requirement per line"${_scopeId}>${ssrInterpolate(unref(form).requirements_en)}</textarea><small class="text-muted"${_scopeId}>Write one requirement per line.</small></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Requirements (Macedonian)</label><textarea rows="5" class="form-control" placeholder="По едно барање во секој ред"${_scopeId}>${ssrInterpolate(unref(form).requirements_mk)}</textarea><small class="text-muted"${_scopeId}>Напишете по едно барање во секој ред.</small></div></div><div class="form-check mb-4"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" id="is_active" class="form-check-input"${_scopeId}><label for="is_active" class="form-check-label"${_scopeId}> Active (visible on the Careers page) </label></div><div class="d-flex gap-2"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Job Posting")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.job-postings.index"),
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
                            createVNode("label", { class: "form-label" }, "Title (English) *"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).title_en = $event,
                              type: "text",
                              class: ["form-control", { "is-invalid": unref(form).errors.title_en }],
                              placeholder: "e.g. Cosmetologist",
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
                              placeholder: "пр. Козметолог",
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
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Location (English)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).location_en = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "e.g. Skopje"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).location_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Location (Macedonian)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).location_mk = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "пр. Скопје"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).location_mk]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Employment Type *"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).employment_type = $event,
                              class: "form-select",
                              required: ""
                            }, [
                              createVNode("option", { value: "full_time" }, "Full-time"),
                              createVNode("option", { value: "part_time" }, "Part-time"),
                              createVNode("option", { value: "contract" }, "Contract"),
                              createVNode("option", { value: "internship" }, "Internship")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).employment_type]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (English)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_en = $event,
                              rows: "5",
                              class: "form-control",
                              placeholder: "What the role is about, responsibilities..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (Macedonian)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event,
                              rows: "5",
                              class: "form-control",
                              placeholder: "За што е позицијата, одговорности..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_mk]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Requirements (English)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).requirements_en = $event,
                              rows: "5",
                              class: "form-control",
                              placeholder: "One requirement per line"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).requirements_en]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Write one requirement per line.")
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Requirements (Macedonian)"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).requirements_mk = $event,
                              rows: "5",
                              class: "form-control",
                              placeholder: "По едно барање во секој ред"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).requirements_mk]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Напишете по едно барање во секој ред.")
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
                          }, " Active (visible on the Careers page) ")
                        ]),
                        createVNode("div", { class: "d-flex gap-2" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-primary",
                            disabled: unref(form).processing
                          }, toDisplayString(unref(form).processing ? "Creating..." : "Create Job Posting"), 9, ["disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("admin.job-postings.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/JobPostings/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
