import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelText, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  props: {
    categories: Array
  },
  setup(__props) {
    const form = useForm({
      service_category_id: "",
      name_en: "",
      name_mk: "",
      subtitle_en: "",
      subtitle_mk: "",
      description_en: "",
      description_mk: "",
      includes_en: "",
      includes_mk: "",
      indications_en: "",
      indications_mk: "",
      components_en: "",
      components_mk: "",
      effects_en: "",
      effects_mk: "",
      suitable_for_en: "",
      suitable_for_mk: "",
      note_en: "",
      note_mk: "",
      price: "",
      price_from: "",
      price_to: "",
      duration: "",
      url: "",
      is_expandable: true,
      is_active: true
    });
    const submit = () => {
      form.post(route("admin.service-items.store"), {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Service" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Add Service</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-items.index"),
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
                createVNode("h2", { class: "h4 mb-0" }, "Add Service"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.service-items.index"),
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
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><form${_scopeId}><div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Service Information</h5></div><div class="card-body"${_scopeId}><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Category *</label><select class="${ssrRenderClass([{ "is-invalid": unref(form).errors.service_category_id }, "form-select"])}" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).service_category_id) ? ssrLooseContain(unref(form).service_category_id, "") : ssrLooseEqual(unref(form).service_category_id, "")) ? " selected" : ""}${_scopeId}>Select a category</option><!--[-->`);
            ssrRenderList(__props.categories, (cat) => {
              _push2(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).service_category_id) ? ssrLooseContain(unref(form).service_category_id, cat.id) : ssrLooseEqual(unref(form).service_category_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.name_en)} / ${ssrInterpolate(cat.name_mk)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (unref(form).errors.service_category_id) {
              _push2(`<div class="invalid-feedback"${_scopeId}>${ssrInterpolate(unref(form).errors.service_category_id)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Name (English) *</label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.name_en }, "form-control"])}" required${_scopeId}>`);
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
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Subtitle (English)</label><input${ssrRenderAttr("value", unref(form).subtitle_en)} type="text" class="form-control" placeholder="e.g., Initial diagnostic treatment"${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Subtitle (Macedonian)</label><input${ssrRenderAttr("value", unref(form).subtitle_mk)} type="text" class="form-control" placeholder="e.g., Почетен дијагностички третман"${_scopeId}></div></div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).description_en,
              "onUpdate:modelValue": ($event) => unref(form).description_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).description_mk,
              "onUpdate:modelValue": ($event) => unref(form).description_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Includes (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).includes_en,
              "onUpdate:modelValue": ($event) => unref(form).includes_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Includes (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).includes_mk,
              "onUpdate:modelValue": ($event) => unref(form).includes_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Indications (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).indications_en,
              "onUpdate:modelValue": ($event) => unref(form).indications_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Indications (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).indications_mk,
              "onUpdate:modelValue": ($event) => unref(form).indications_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Active Components (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).components_en,
              "onUpdate:modelValue": ($event) => unref(form).components_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Active Components (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).components_mk,
              "onUpdate:modelValue": ($event) => unref(form).components_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Effects (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).effects_en,
              "onUpdate:modelValue": ($event) => unref(form).effects_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Effects (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).effects_mk,
              "onUpdate:modelValue": ($event) => unref(form).effects_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Suitable For (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).suitable_for_en,
              "onUpdate:modelValue": ($event) => unref(form).suitable_for_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Suitable For (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).suitable_for_mk,
              "onUpdate:modelValue": ($event) => unref(form).suitable_for_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Note (English)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).note_en,
              "onUpdate:modelValue": ($event) => unref(form).note_en = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-3"${_scopeId}><label class="form-label"${_scopeId}>Note (Macedonian)</label>`);
            _push2(ssrRenderComponent(RichTextEditor, {
              modelValue: unref(form).note_mk,
              "onUpdate:modelValue": ($event) => unref(form).note_mk = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="row"${_scopeId}><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Price (MKD)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" step="0.01" min="0" class="form-control" placeholder="e.g., 2500"${_scopeId}><small class="text-muted"${_scopeId}>Single fixed price</small></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Price From (MKD)</label><input${ssrRenderAttr("value", unref(form).price_from)} type="number" step="0.01" min="0" class="form-control"${_scopeId}><small class="text-muted"${_scopeId}>од / from</small></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Price To (MKD)</label><input${ssrRenderAttr("value", unref(form).price_to)} type="number" step="0.01" min="0" class="form-control"${_scopeId}><small class="text-muted"${_scopeId}>до / to</small></div><div class="col-md-3 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Duration</label><input${ssrRenderAttr("value", unref(form).duration)} type="text" class="form-control" placeholder="e.g., 30 min"${_scopeId}></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>URL (for button links)</label><input${ssrRenderAttr("value", unref(form).url)} type="text" class="form-control" placeholder="/lasers/almaq"${_scopeId}><small class="text-muted"${_scopeId}>Optional: Link for button-style categories</small></div></div><div class="d-flex gap-4"${_scopeId}><div class="form-check form-switch"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_expandable) ? ssrLooseContain(unref(form).is_expandable, null) : unref(form).is_expandable) ? " checked" : ""} type="checkbox" class="form-check-input" id="isExpandable"${_scopeId}><label class="form-check-label" for="isExpandable"${_scopeId}> Expandable (show description on click) </label></div><div class="form-check form-switch"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" class="form-check-input" id="isActive"${_scopeId}><label class="form-check-label" for="isActive"${_scopeId}> Active </label></div></div></div></div><div class="d-flex justify-content-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-items.index"),
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
            _push2(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Service")}</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Service Information")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Category *"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).service_category_id = $event,
                            class: ["form-select", { "is-invalid": unref(form).errors.service_category_id }],
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select a category"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
                              return openBlock(), createBlock("option", {
                                key: cat.id,
                                value: cat.id
                              }, toDisplayString(cat.name_en) + " / " + toDisplayString(cat.name_mk), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).service_category_id]
                          ]),
                          unref(form).errors.service_category_id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "invalid-feedback"
                          }, toDisplayString(unref(form).errors.service_category_id), 1)) : createCommentVNode("", true)
                        ]),
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
                            createVNode("label", { class: "form-label" }, "Subtitle (English)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).subtitle_en = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "e.g., Initial diagnostic treatment"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).subtitle_en]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Subtitle (Macedonian)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).subtitle_mk = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "e.g., Почетен дијагностички третман"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).subtitle_mk]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Description (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).description_en,
                            "onUpdate:modelValue": ($event) => unref(form).description_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Description (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).description_mk,
                            "onUpdate:modelValue": ($event) => unref(form).description_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Includes (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).includes_en,
                            "onUpdate:modelValue": ($event) => unref(form).includes_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Includes (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).includes_mk,
                            "onUpdate:modelValue": ($event) => unref(form).includes_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Indications (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).indications_en,
                            "onUpdate:modelValue": ($event) => unref(form).indications_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Indications (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).indications_mk,
                            "onUpdate:modelValue": ($event) => unref(form).indications_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Active Components (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).components_en,
                            "onUpdate:modelValue": ($event) => unref(form).components_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Active Components (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).components_mk,
                            "onUpdate:modelValue": ($event) => unref(form).components_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Effects (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).effects_en,
                            "onUpdate:modelValue": ($event) => unref(form).effects_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Effects (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).effects_mk,
                            "onUpdate:modelValue": ($event) => unref(form).effects_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Suitable For (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).suitable_for_en,
                            "onUpdate:modelValue": ($event) => unref(form).suitable_for_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Suitable For (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).suitable_for_mk,
                            "onUpdate:modelValue": ($event) => unref(form).suitable_for_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Note (English)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).note_en,
                            "onUpdate:modelValue": ($event) => unref(form).note_en = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", { class: "form-label" }, "Note (Macedonian)"),
                          createVNode(RichTextEditor, {
                            modelValue: unref(form).note_mk,
                            "onUpdate:modelValue": ($event) => unref(form).note_mk = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-3 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Price (MKD)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).price = $event,
                              type: "number",
                              step: "0.01",
                              min: "0",
                              class: "form-control",
                              placeholder: "e.g., 2500"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).price]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Single fixed price")
                          ]),
                          createVNode("div", { class: "col-md-3 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Price From (MKD)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).price_from = $event,
                              type: "number",
                              step: "0.01",
                              min: "0",
                              class: "form-control"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).price_from]
                            ]),
                            createVNode("small", { class: "text-muted" }, "од / from")
                          ]),
                          createVNode("div", { class: "col-md-3 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Price To (MKD)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).price_to = $event,
                              type: "number",
                              step: "0.01",
                              min: "0",
                              class: "form-control"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).price_to]
                            ]),
                            createVNode("small", { class: "text-muted" }, "до / to")
                          ]),
                          createVNode("div", { class: "col-md-3 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Duration"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "e.g., 30 min"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).duration]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "URL (for button links)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).url = $event,
                              type: "text",
                              class: "form-control",
                              placeholder: "/lasers/almaq"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).url]
                            ]),
                            createVNode("small", { class: "text-muted" }, "Optional: Link for button-style categories")
                          ])
                        ]),
                        createVNode("div", { class: "d-flex gap-4" }, [
                          createVNode("div", { class: "form-check form-switch" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).is_expandable = $event,
                              type: "checkbox",
                              class: "form-check-input",
                              id: "isExpandable"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_expandable]
                            ]),
                            createVNode("label", {
                              class: "form-check-label",
                              for: "isExpandable"
                            }, " Expandable (show description on click) ")
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
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-content-end gap-2" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.service-items.index"),
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
                      }, toDisplayString(unref(form).processing ? "Creating..." : "Create Service"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServiceItems/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
