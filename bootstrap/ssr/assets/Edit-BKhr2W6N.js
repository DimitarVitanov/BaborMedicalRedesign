import { ref, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vShow, Fragment, renderList, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const activeTab = ref("en");
    const props = __props;
    const form = useForm({
      title: props.service.title,
      title_mk: props.service.title_mk || "",
      description: props.service.description,
      description_mk: props.service.description_mk || "",
      icon: props.service.icon || "",
      link: props.service.link || "",
      order: props.service.order,
      is_active: props.service.is_active
    });
    const submit = () => {
      form.post(route("admin.services.update", props.service.id));
    };
    const iconOptions = [
      { value: "face", label: "Face Treatment" },
      { value: "laser", label: "Laser Treatment" },
      { value: "body", label: "Body Treatment" },
      { value: "product", label: "Products" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Service - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Edit Service</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.services.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Edit Service"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.services.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><ul class="nav nav-tabs mb-4"${_scopeId}><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "en" }, "nav-link"])}"${_scopeId}> 🇬🇧 English </button></li><li class="nav-item"${_scopeId}><button type="button" class="${ssrRenderClass([{ active: activeTab.value === "mk" }, "nav-link"])}"${_scopeId}> 🇲🇰 Македонски </button></li></ul><div style="${ssrRenderStyle(activeTab.value === "en" ? null : { display: "none" })}"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (EN)</label><input type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.title }, "form-control"])}"${ssrRenderAttr("value", unref(form).title)} placeholder="e.g., Face Treatments"${_scopeId}>`);
            if (unref(form).errors.title) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (EN)</label><textarea class="${ssrRenderClass([{ "is-invalid": unref(form).errors.description }, "form-control"])}" rows="3" placeholder="e.g., Explore our face treatments"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (unref(form).errors.description) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div style="${ssrRenderStyle(activeTab.value === "mk" ? null : { display: "none" })}"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Title (MK)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).title_mk)} placeholder="пр., Третмани за лице"${_scopeId}></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (MK)</label><textarea class="form-control" rows="3" placeholder="пр., Разгледете ги нашите третмани на лице"${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div></div><hr class="my-4"${_scopeId}><h6 class="mb-3"${_scopeId}>Settings</h6><div class="row"${_scopeId}><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Icon Type</label><select class="form-select"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).icon) ? ssrLooseContain(unref(form).icon, "") : ssrLooseEqual(unref(form).icon, "")) ? " selected" : ""}${_scopeId}>Select icon...</option><!--[-->`);
            ssrRenderList(iconOptions, (opt) => {
              _push2(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).icon) ? ssrLooseContain(unref(form).icon, opt.value) : ssrLooseEqual(unref(form).icon, opt.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(opt.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="col-md-4 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Link (optional)</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).link)} placeholder="e.g., /services/face"${_scopeId}></div><div class="col-md-2 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Order</label><input type="number" class="form-control"${ssrRenderAttr("value", unref(form).order)} min="0"${_scopeId}></div><div class="col-md-2 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Status</label><div class="form-check form-switch mt-2"${_scopeId}><input class="form-check-input" type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""}${_scopeId}><label class="form-check-label" for="is_active"${_scopeId}>${ssrInterpolate(unref(form).is_active ? "Active" : "Inactive")}</label></div></div></div><div class="d-flex gap-2 mt-4"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.services.index"),
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
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "e.g., Face Treatments"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title]
                            ]),
                            unref(form).errors.title ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (EN)"),
                            withDirectives(createVNode("textarea", {
                              class: ["form-control", { "is-invalid": unref(form).errors.description }],
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              rows: "3",
                              placeholder: "e.g., Explore our face treatments"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description]
                            ]),
                            unref(form).errors.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "invalid-feedback"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "en"]
                        ]),
                        withDirectives(createVNode("div", null, [
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Title (MK)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).title_mk = $event,
                              placeholder: "пр., Третмани за лице"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).title_mk]
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Description (MK)"),
                            withDirectives(createVNode("textarea", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event,
                              rows: "3",
                              placeholder: "пр., Разгледете ги нашите третмани на лице"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description_mk]
                            ])
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "mk"]
                        ]),
                        createVNode("hr", { class: "my-4" }),
                        createVNode("h6", { class: "mb-3" }, "Settings"),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Icon Type"),
                            withDirectives(createVNode("select", {
                              class: "form-select",
                              "onUpdate:modelValue": ($event) => unref(form).icon = $event
                            }, [
                              createVNode("option", { value: "" }, "Select icon..."),
                              (openBlock(), createBlock(Fragment, null, renderList(iconOptions, (opt) => {
                                return createVNode("option", {
                                  key: opt.value,
                                  value: opt.value
                                }, toDisplayString(opt.label), 9, ["value"]);
                              }), 64))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).icon]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Link (optional)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(form).link = $event,
                              placeholder: "e.g., /services/face"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).link]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-2 mb-3" }, [
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
                          createVNode("div", { class: "col-md-2 mb-3" }, [
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
                            href: _ctx.route("admin.services.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Services/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
