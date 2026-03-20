import { computed, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelSelect, vModelCheckbox, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    category: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name_en: props.category.name_en,
      name_mk: props.category.name_mk,
      slug: props.category.slug,
      parent_type: props.category.parent_type || "cosmetology",
      description_en: props.category.description_en || "",
      description_mk: props.category.description_mk || "",
      display_type: props.category.display_type,
      is_active: props.category.is_active,
      extra_data_en: props.category.extra_data_en || {},
      extra_data_mk: props.category.extra_data_mk || {},
      price_list_items_en: props.category.price_list_items_en || [],
      price_list_items_mk: props.category.price_list_items_mk || []
    });
    const extraDataKeys = computed(() => {
      const enKeys = Object.keys(form.extra_data_en || {});
      const mkKeys = Object.keys(form.extra_data_mk || {});
      return [.../* @__PURE__ */ new Set([...enKeys, ...mkKeys])];
    });
    const keyLabel = (key) => {
      return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    };
    const isObjectList = (key) => {
      var _a, _b;
      const enItems = ((_a = form.extra_data_en) == null ? void 0 : _a[key]) || [];
      const mkItems = ((_b = form.extra_data_mk) == null ? void 0 : _b[key]) || [];
      const allItems = [...enItems, ...mkItems];
      return allItems.length > 0 && typeof allItems[0] === "object" && allItems[0] !== null;
    };
    const getObjectKeys = (key) => {
      var _a, _b;
      const enItems = ((_a = form.extra_data_en) == null ? void 0 : _a[key]) || [];
      const mkItems = ((_b = form.extra_data_mk) == null ? void 0 : _b[key]) || [];
      const allItems = [...enItems, ...mkItems];
      const keys = /* @__PURE__ */ new Set();
      allItems.forEach((item) => {
        if (typeof item === "object" && item !== null) {
          Object.keys(item).forEach((k) => keys.add(k));
        }
      });
      return [...keys];
    };
    const fieldLabel = (field) => {
      return field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    };
    const addItem = (key, lang) => {
      const data = lang === "en" ? form.extra_data_en : form.extra_data_mk;
      if (!data[key]) data[key] = [];
      if (isObjectList(key)) {
        const template = {};
        getObjectKeys(key).forEach((k) => {
          template[k] = Array.isArray((data[key][0] || {})[k]) ? [] : "";
        });
        data[key].push(template);
      } else {
        data[key].push("");
      }
    };
    const removeItem = (key, lang, index) => {
      const data = lang === "en" ? form.extra_data_en : form.extra_data_mk;
      if (data[key]) data[key].splice(index, 1);
    };
    const addNewListKey = () => {
      const key = prompt("Enter list key name (e.g. treatment_areas, combined_strategies):");
      if (key && key.trim()) {
        const cleanKey = key.trim().toLowerCase().replace(/\s+/g, "_");
        if (!form.extra_data_en[cleanKey]) form.extra_data_en[cleanKey] = [];
        if (!form.extra_data_mk[cleanKey]) form.extra_data_mk[cleanKey] = [];
      }
    };
    const removeListKey = (key) => {
      if (confirm(`Remove the entire "${keyLabel(key)}" list?`)) {
        delete form.extra_data_en[key];
        delete form.extra_data_mk[key];
      }
    };
    const addPriceItem = (lang) => {
      const list = lang === "en" ? form.price_list_items_en : form.price_list_items_mk;
      list.push({ name: "", price: 0 });
    };
    const removePriceItem = (lang, index) => {
      const list = lang === "en" ? form.price_list_items_en : form.price_list_items_mk;
      list.splice(index, 1);
    };
    const submit = () => {
      form.post(route("admin.service-categories.update", props.category.id), {
        onError: (errors) => {
          console.error("Validation errors:", errors);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Service Category" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Edit Service Category</h2>`);
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
                createVNode("h2", { class: "h4 mb-0" }, "Edit Service Category"),
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
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="form-control"${_scopeId}></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Display Type *</label><select class="form-select"${_scopeId}><option value="accordion"${ssrIncludeBooleanAttr(Array.isArray(unref(form).display_type) ? ssrLooseContain(unref(form).display_type, "accordion") : ssrLooseEqual(unref(form).display_type, "accordion")) ? " selected" : ""}${_scopeId}>Accordion (expandable items)</option><option value="buttons"${ssrIncludeBooleanAttr(Array.isArray(unref(form).display_type) ? ssrLooseContain(unref(form).display_type, "buttons") : ssrLooseEqual(unref(form).display_type, "buttons")) ? " selected" : ""}${_scopeId}>Buttons (non-expandable)</option><option value="cards"${ssrIncludeBooleanAttr(Array.isArray(unref(form).display_type) ? ssrLooseContain(unref(form).display_type, "cards") : ssrLooseEqual(unref(form).display_type, "cards")) ? " selected" : ""}${_scopeId}>Cards</option></select></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Parent Category *</label><select class="form-select"${_scopeId}><option value="cosmetology"${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_type) ? ssrLooseContain(unref(form).parent_type, "cosmetology") : ssrLooseEqual(unref(form).parent_type, "cosmetology")) ? " selected" : ""}${_scopeId}>Козметологија / Cosmetology</option><option value="laser_aesthetic"${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_type) ? ssrLooseContain(unref(form).parent_type, "laser_aesthetic") : ssrLooseEqual(unref(form).parent_type, "laser_aesthetic")) ? " selected" : ""}${_scopeId}>Ласерско Естетски Третмани / Laser Aesthetic Treatments</option><option value="injectable"${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_type) ? ssrLooseContain(unref(form).parent_type, "injectable") : ssrLooseEqual(unref(form).parent_type, "injectable")) ? " selected" : ""}${_scopeId}>Инјектибилни методи / Injectable Methods</option></select><small class="text-muted"${_scopeId}>Choose which main service category this belongs to</small></div></div><div class="row"${_scopeId}><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (English)</label><textarea class="form-control" rows="3"${_scopeId}>${ssrInterpolate(unref(form).description_en)}</textarea></div><div class="col-md-6 mb-3"${_scopeId}><label class="form-label"${_scopeId}>Description (Macedonian)</label><textarea class="form-control" rows="3"${_scopeId}>${ssrInterpolate(unref(form).description_mk)}</textarea></div></div><div class="form-check form-switch mb-3"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" class="form-check-input" id="isActive"${_scopeId}><label class="form-check-label" for="isActive"${_scopeId}> Active </label></div></div></div>`);
            if (extraDataKeys.value.length > 0 || unref(form).parent_type === "laser_aesthetic" || unref(form).parent_type === "injectable" || unref(form).parent_type === "body_treatments") {
              _push2(`<div class="card mb-4"${_scopeId}><div class="card-header d-flex justify-content-between align-items-center"${_scopeId}><h5 class="mb-0"${_scopeId}>Page Content Lists</h5><button type="button" class="btn btn-sm btn-outline-primary"${_scopeId}> + Add List </button></div><div class="card-body"${_scopeId}><!--[-->`);
              ssrRenderList(extraDataKeys.value, (key) => {
                _push2(`<div class="mb-4 border rounded p-3"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-3"${_scopeId}><h6 class="mb-0 text-primary"${_scopeId}>${ssrInterpolate(keyLabel(key))}</h6><button type="button" class="btn btn-sm btn-outline-danger"${_scopeId}> Remove List </button></div>`);
                if (!isObjectList(key)) {
                  _push2(`<div class="row"${_scopeId}><div class="col-md-6"${_scopeId}><label class="form-label fw-bold"${_scopeId}>English</label><!--[-->`);
                  ssrRenderList(unref(form).extra_data_en[key] || [], (item, index) => {
                    _push2(`<div class="input-group mb-2"${_scopeId}><input${ssrRenderAttr("value", unref(form).extra_data_en[key][index])} type="text" class="form-control form-control-sm"${_scopeId}><button type="button" class="btn btn-sm btn-outline-danger"${_scopeId}> × </button></div>`);
                  });
                  _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary"${_scopeId}> + Add Item (EN) </button></div><div class="col-md-6"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Macedonian</label><!--[-->`);
                  ssrRenderList(unref(form).extra_data_mk[key] || [], (item, index) => {
                    _push2(`<div class="input-group mb-2"${_scopeId}><input${ssrRenderAttr("value", unref(form).extra_data_mk[key][index])} type="text" class="form-control form-control-sm"${_scopeId}><button type="button" class="btn btn-sm btn-outline-danger"${_scopeId}> × </button></div>`);
                  });
                  _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary"${_scopeId}> + Add Item (MK) </button></div></div>`);
                } else {
                  _push2(`<div${_scopeId}><div class="row"${_scopeId}><div class="col-md-6"${_scopeId}><label class="form-label fw-bold"${_scopeId}>English</label><!--[-->`);
                  ssrRenderList(unref(form).extra_data_en[key] || [], (item, index) => {
                    _push2(`<div class="border rounded p-2 mb-2 bg-light"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-1"${_scopeId}><small class="text-muted fw-bold"${_scopeId}>#${ssrInterpolate(index + 1)}</small><button type="button" class="btn btn-sm btn-outline-danger py-0 px-1"${_scopeId}>×</button></div><!--[-->`);
                    ssrRenderList(getObjectKeys(key), (field) => {
                      _push2(`<div class="mb-1"${_scopeId}><label class="form-label mb-0" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>${ssrInterpolate(fieldLabel(field))}</label>`);
                      if (field === "desc") {
                        _push2(`<textarea class="form-control form-control-sm" rows="2"${_scopeId}>${ssrInterpolate(unref(form).extra_data_en[key][index][field])}</textarea>`);
                      } else if (!Array.isArray(item[field])) {
                        _push2(`<input${ssrRenderAttr("value", unref(form).extra_data_en[key][index][field])} type="text" class="form-control form-control-sm"${_scopeId}>`);
                      } else {
                        _push2(`<div${_scopeId}><!--[-->`);
                        ssrRenderList(item[field], (subItem, si) => {
                          _push2(`<div class="input-group input-group-sm mb-1"${_scopeId}><input${ssrRenderAttr("value", unref(form).extra_data_en[key][index][field][si])} type="text" class="form-control form-control-sm"${_scopeId}><button type="button" class="btn btn-sm btn-outline-danger py-0 px-1"${_scopeId}>×</button></div>`);
                        });
                        _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary py-0"${_scopeId}>+ Add</button></div>`);
                      }
                      _push2(`</div>`);
                    });
                    _push2(`<!--]--></div>`);
                  });
                  _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary"${_scopeId}> + Add Item (EN) </button></div><div class="col-md-6"${_scopeId}><label class="form-label fw-bold"${_scopeId}>Macedonian</label><!--[-->`);
                  ssrRenderList(unref(form).extra_data_mk[key] || [], (item, index) => {
                    _push2(`<div class="border rounded p-2 mb-2 bg-light"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-1"${_scopeId}><small class="text-muted fw-bold"${_scopeId}>#${ssrInterpolate(index + 1)}</small><button type="button" class="btn btn-sm btn-outline-danger py-0 px-1"${_scopeId}>×</button></div><!--[-->`);
                    ssrRenderList(getObjectKeys(key), (field) => {
                      _push2(`<div class="mb-1"${_scopeId}><label class="form-label mb-0" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>${ssrInterpolate(fieldLabel(field))}</label>`);
                      if (field === "desc") {
                        _push2(`<textarea class="form-control form-control-sm" rows="2"${_scopeId}>${ssrInterpolate(unref(form).extra_data_mk[key][index][field])}</textarea>`);
                      } else if (!Array.isArray(item[field])) {
                        _push2(`<input${ssrRenderAttr("value", unref(form).extra_data_mk[key][index][field])} type="text" class="form-control form-control-sm"${_scopeId}>`);
                      } else {
                        _push2(`<div${_scopeId}><!--[-->`);
                        ssrRenderList(item[field], (subItem, si) => {
                          _push2(`<div class="input-group input-group-sm mb-1"${_scopeId}><input${ssrRenderAttr("value", unref(form).extra_data_mk[key][index][field][si])} type="text" class="form-control form-control-sm"${_scopeId}><button type="button" class="btn btn-sm btn-outline-danger py-0 px-1"${_scopeId}>×</button></div>`);
                        });
                        _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary py-0"${_scopeId}>+ Add</button></div>`);
                      }
                      _push2(`</div>`);
                    });
                    _push2(`<!--]--></div>`);
                  });
                  _push2(`<!--]--><button type="button" class="btn btn-sm btn-outline-secondary"${_scopeId}> + Add Item (MK) </button></div></div></div>`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (extraDataKeys.value.length === 0) {
                _push2(`<p class="text-muted mb-0"${_scopeId}> No content lists yet. Click &quot;+ Add List&quot; to create one. </p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).parent_type === "injectable" || unref(form).parent_type === "laser_aesthetic" || unref(form).parent_type === "body_treatments") {
              _push2(`<div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Price List Items</h5></div><div class="card-body"${_scopeId}><p class="text-muted small mb-3"${_scopeId}>These items are used to auto-generate the PDF price list shown on the frontend.</p><div class="row"${_scopeId}><div class="col-md-6 mb-4"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-2"${_scopeId}><label class="form-label fw-bold mb-0"${_scopeId}>Macedonian</label><button type="button" class="btn btn-sm btn-outline-primary"${_scopeId}>+ Add</button></div><!--[-->`);
              ssrRenderList(unref(form).price_list_items_mk, (item, index) => {
                _push2(`<div class="input-group input-group-sm mb-2"${_scopeId}><input${ssrRenderAttr("value", item.name)} type="text" class="form-control" placeholder="Service name"${_scopeId}><input${ssrRenderAttr("value", item.price)} type="number" class="form-control" style="${ssrRenderStyle({ "max-width": "100px" })}" placeholder="Price"${_scopeId}><button type="button" class="btn btn-outline-danger btn-sm"${_scopeId}>×</button></div>`);
              });
              _push2(`<!--]-->`);
              if (!unref(form).price_list_items_mk.length) {
                _push2(`<p class="text-muted small"${_scopeId}>No items yet.</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="col-md-6 mb-4"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-2"${_scopeId}><label class="form-label fw-bold mb-0"${_scopeId}>English</label><button type="button" class="btn btn-sm btn-outline-primary"${_scopeId}>+ Add</button></div><!--[-->`);
              ssrRenderList(unref(form).price_list_items_en, (item, index) => {
                _push2(`<div class="input-group input-group-sm mb-2"${_scopeId}><input${ssrRenderAttr("value", item.name)} type="text" class="form-control" placeholder="Service name"${_scopeId}><input${ssrRenderAttr("value", item.price)} type="number" class="form-control" style="${ssrRenderStyle({ "max-width": "100px" })}" placeholder="Price"${_scopeId}><button type="button" class="btn btn-outline-danger btn-sm"${_scopeId}>×</button></div>`);
              });
              _push2(`<!--]-->`);
              if (!unref(form).price_list_items_en.length) {
                _push2(`<p class="text-muted small"${_scopeId}>No items yet.</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="d-flex justify-content-end gap-2"${_scopeId}>`);
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
            _push2(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button></div></form></div></div>`);
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
                              class: "form-control"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).slug]
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6 mb-3" }, [
                            createVNode("label", { class: "form-label" }, "Display Type *"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).display_type = $event,
                              class: "form-select"
                            }, [
                              createVNode("option", { value: "accordion" }, "Accordion (expandable items)"),
                              createVNode("option", { value: "buttons" }, "Buttons (non-expandable)"),
                              createVNode("option", { value: "cards" }, "Cards")
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
                              createVNode("option", { value: "laser_aesthetic" }, "Ласерско Естетски Третмани / Laser Aesthetic Treatments"),
                              createVNode("option", { value: "injectable" }, "Инјектибилни методи / Injectable Methods")
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
                        createVNode("div", { class: "form-check form-switch mb-3" }, [
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
                    extraDataKeys.value.length > 0 || unref(form).parent_type === "laser_aesthetic" || unref(form).parent_type === "injectable" || unref(form).parent_type === "body_treatments" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "card mb-4"
                    }, [
                      createVNode("div", { class: "card-header d-flex justify-content-between align-items-center" }, [
                        createVNode("h5", { class: "mb-0" }, "Page Content Lists"),
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-sm btn-outline-primary",
                          onClick: addNewListKey
                        }, " + Add List ")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(extraDataKeys.value, (key) => {
                          return openBlock(), createBlock("div", {
                            key,
                            class: "mb-4 border rounded p-3"
                          }, [
                            createVNode("div", { class: "d-flex justify-content-between align-items-center mb-3" }, [
                              createVNode("h6", { class: "mb-0 text-primary" }, toDisplayString(keyLabel(key)), 1),
                              createVNode("button", {
                                type: "button",
                                class: "btn btn-sm btn-outline-danger",
                                onClick: ($event) => removeListKey(key)
                              }, " Remove List ", 8, ["onClick"])
                            ]),
                            !isObjectList(key) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "row"
                            }, [
                              createVNode("div", { class: "col-md-6" }, [
                                createVNode("label", { class: "form-label fw-bold" }, "English"),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).extra_data_en[key] || [], (item, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: "en-" + index,
                                    class: "input-group mb-2"
                                  }, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => unref(form).extra_data_en[key][index] = $event,
                                      type: "text",
                                      class: "form-control form-control-sm"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(form).extra_data_en[key][index]]
                                    ]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-sm btn-outline-danger",
                                      onClick: ($event) => removeItem(key, "en", index)
                                    }, " × ", 8, ["onClick"])
                                  ]);
                                }), 128)),
                                createVNode("button", {
                                  type: "button",
                                  class: "btn btn-sm btn-outline-secondary",
                                  onClick: ($event) => addItem(key, "en")
                                }, " + Add Item (EN) ", 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "col-md-6" }, [
                                createVNode("label", { class: "form-label fw-bold" }, "Macedonian"),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).extra_data_mk[key] || [], (item, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: "mk-" + index,
                                    class: "input-group mb-2"
                                  }, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => unref(form).extra_data_mk[key][index] = $event,
                                      type: "text",
                                      class: "form-control form-control-sm"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(form).extra_data_mk[key][index]]
                                    ]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-sm btn-outline-danger",
                                      onClick: ($event) => removeItem(key, "mk", index)
                                    }, " × ", 8, ["onClick"])
                                  ]);
                                }), 128)),
                                createVNode("button", {
                                  type: "button",
                                  class: "btn btn-sm btn-outline-secondary",
                                  onClick: ($event) => addItem(key, "mk")
                                }, " + Add Item (MK) ", 8, ["onClick"])
                              ])
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("div", { class: "row" }, [
                                createVNode("div", { class: "col-md-6" }, [
                                  createVNode("label", { class: "form-label fw-bold" }, "English"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(form).extra_data_en[key] || [], (item, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: "en-obj-" + index,
                                      class: "border rounded p-2 mb-2 bg-light"
                                    }, [
                                      createVNode("div", { class: "d-flex justify-content-between align-items-center mb-1" }, [
                                        createVNode("small", { class: "text-muted fw-bold" }, "#" + toDisplayString(index + 1), 1),
                                        createVNode("button", {
                                          type: "button",
                                          class: "btn btn-sm btn-outline-danger py-0 px-1",
                                          onClick: ($event) => removeItem(key, "en", index)
                                        }, "×", 8, ["onClick"])
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(getObjectKeys(key), (field) => {
                                        return openBlock(), createBlock("div", {
                                          key: "en-" + index + "-" + field,
                                          class: "mb-1"
                                        }, [
                                          createVNode("label", {
                                            class: "form-label mb-0",
                                            style: { "font-size": "0.75rem" }
                                          }, toDisplayString(fieldLabel(field)), 1),
                                          field === "desc" ? withDirectives((openBlock(), createBlock("textarea", {
                                            key: 0,
                                            "onUpdate:modelValue": ($event) => unref(form).extra_data_en[key][index][field] = $event,
                                            class: "form-control form-control-sm",
                                            rows: "2"
                                          }, null, 8, ["onUpdate:modelValue"])), [
                                            [vModelText, unref(form).extra_data_en[key][index][field]]
                                          ]) : !Array.isArray(item[field]) ? withDirectives((openBlock(), createBlock("input", {
                                            key: 1,
                                            "onUpdate:modelValue": ($event) => unref(form).extra_data_en[key][index][field] = $event,
                                            type: "text",
                                            class: "form-control form-control-sm"
                                          }, null, 8, ["onUpdate:modelValue"])), [
                                            [vModelText, unref(form).extra_data_en[key][index][field]]
                                          ]) : (openBlock(), createBlock("div", { key: 2 }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item[field], (subItem, si) => {
                                              return openBlock(), createBlock("div", {
                                                key: "en-sub-" + si,
                                                class: "input-group input-group-sm mb-1"
                                              }, [
                                                withDirectives(createVNode("input", {
                                                  "onUpdate:modelValue": ($event) => unref(form).extra_data_en[key][index][field][si] = $event,
                                                  type: "text",
                                                  class: "form-control form-control-sm"
                                                }, null, 8, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(form).extra_data_en[key][index][field][si]]
                                                ]),
                                                createVNode("button", {
                                                  type: "button",
                                                  class: "btn btn-sm btn-outline-danger py-0 px-1",
                                                  onClick: ($event) => item[field].splice(si, 1)
                                                }, "×", 8, ["onClick"])
                                              ]);
                                            }), 128)),
                                            createVNode("button", {
                                              type: "button",
                                              class: "btn btn-sm btn-outline-secondary py-0",
                                              onClick: ($event) => item[field].push("")
                                            }, "+ Add", 8, ["onClick"])
                                          ]))
                                        ]);
                                      }), 128))
                                    ]);
                                  }), 128)),
                                  createVNode("button", {
                                    type: "button",
                                    class: "btn btn-sm btn-outline-secondary",
                                    onClick: ($event) => addItem(key, "en")
                                  }, " + Add Item (EN) ", 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "col-md-6" }, [
                                  createVNode("label", { class: "form-label fw-bold" }, "Macedonian"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(form).extra_data_mk[key] || [], (item, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: "mk-obj-" + index,
                                      class: "border rounded p-2 mb-2 bg-light"
                                    }, [
                                      createVNode("div", { class: "d-flex justify-content-between align-items-center mb-1" }, [
                                        createVNode("small", { class: "text-muted fw-bold" }, "#" + toDisplayString(index + 1), 1),
                                        createVNode("button", {
                                          type: "button",
                                          class: "btn btn-sm btn-outline-danger py-0 px-1",
                                          onClick: ($event) => removeItem(key, "mk", index)
                                        }, "×", 8, ["onClick"])
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(getObjectKeys(key), (field) => {
                                        return openBlock(), createBlock("div", {
                                          key: "mk-" + index + "-" + field,
                                          class: "mb-1"
                                        }, [
                                          createVNode("label", {
                                            class: "form-label mb-0",
                                            style: { "font-size": "0.75rem" }
                                          }, toDisplayString(fieldLabel(field)), 1),
                                          field === "desc" ? withDirectives((openBlock(), createBlock("textarea", {
                                            key: 0,
                                            "onUpdate:modelValue": ($event) => unref(form).extra_data_mk[key][index][field] = $event,
                                            class: "form-control form-control-sm",
                                            rows: "2"
                                          }, null, 8, ["onUpdate:modelValue"])), [
                                            [vModelText, unref(form).extra_data_mk[key][index][field]]
                                          ]) : !Array.isArray(item[field]) ? withDirectives((openBlock(), createBlock("input", {
                                            key: 1,
                                            "onUpdate:modelValue": ($event) => unref(form).extra_data_mk[key][index][field] = $event,
                                            type: "text",
                                            class: "form-control form-control-sm"
                                          }, null, 8, ["onUpdate:modelValue"])), [
                                            [vModelText, unref(form).extra_data_mk[key][index][field]]
                                          ]) : (openBlock(), createBlock("div", { key: 2 }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item[field], (subItem, si) => {
                                              return openBlock(), createBlock("div", {
                                                key: "mk-sub-" + si,
                                                class: "input-group input-group-sm mb-1"
                                              }, [
                                                withDirectives(createVNode("input", {
                                                  "onUpdate:modelValue": ($event) => unref(form).extra_data_mk[key][index][field][si] = $event,
                                                  type: "text",
                                                  class: "form-control form-control-sm"
                                                }, null, 8, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(form).extra_data_mk[key][index][field][si]]
                                                ]),
                                                createVNode("button", {
                                                  type: "button",
                                                  class: "btn btn-sm btn-outline-danger py-0 px-1",
                                                  onClick: ($event) => item[field].splice(si, 1)
                                                }, "×", 8, ["onClick"])
                                              ]);
                                            }), 128)),
                                            createVNode("button", {
                                              type: "button",
                                              class: "btn btn-sm btn-outline-secondary py-0",
                                              onClick: ($event) => item[field].push("")
                                            }, "+ Add", 8, ["onClick"])
                                          ]))
                                        ]);
                                      }), 128))
                                    ]);
                                  }), 128)),
                                  createVNode("button", {
                                    type: "button",
                                    class: "btn btn-sm btn-outline-secondary",
                                    onClick: ($event) => addItem(key, "mk")
                                  }, " + Add Item (MK) ", 8, ["onClick"])
                                ])
                              ])
                            ]))
                          ]);
                        }), 128)),
                        extraDataKeys.value.length === 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-muted mb-0"
                        }, ' No content lists yet. Click "+ Add List" to create one. ')) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(form).parent_type === "injectable" || unref(form).parent_type === "laser_aesthetic" || unref(form).parent_type === "body_treatments" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "card mb-4"
                    }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Price List Items")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("p", { class: "text-muted small mb-3" }, "These items are used to auto-generate the PDF price list shown on the frontend."),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6 mb-4" }, [
                            createVNode("div", { class: "d-flex justify-content-between align-items-center mb-2" }, [
                              createVNode("label", { class: "form-label fw-bold mb-0" }, "Macedonian"),
                              createVNode("button", {
                                type: "button",
                                class: "btn btn-sm btn-outline-primary",
                                onClick: ($event) => addPriceItem("mk")
                              }, "+ Add", 8, ["onClick"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).price_list_items_mk, (item, index) => {
                              return openBlock(), createBlock("div", {
                                key: "mk-" + index,
                                class: "input-group input-group-sm mb-2"
                              }, [
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => item.name = $event,
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "Service name"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, item.name]
                                ]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => item.price = $event,
                                  type: "number",
                                  class: "form-control",
                                  style: { "max-width": "100px" },
                                  placeholder: "Price"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [
                                    vModelText,
                                    item.price,
                                    void 0,
                                    { number: true }
                                  ]
                                ]),
                                createVNode("button", {
                                  type: "button",
                                  class: "btn btn-outline-danger btn-sm",
                                  onClick: ($event) => removePriceItem("mk", index)
                                }, "×", 8, ["onClick"])
                              ]);
                            }), 128)),
                            !unref(form).price_list_items_mk.length ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-muted small"
                            }, "No items yet.")) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-md-6 mb-4" }, [
                            createVNode("div", { class: "d-flex justify-content-between align-items-center mb-2" }, [
                              createVNode("label", { class: "form-label fw-bold mb-0" }, "English"),
                              createVNode("button", {
                                type: "button",
                                class: "btn btn-sm btn-outline-primary",
                                onClick: ($event) => addPriceItem("en")
                              }, "+ Add", 8, ["onClick"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).price_list_items_en, (item, index) => {
                              return openBlock(), createBlock("div", {
                                key: "en-" + index,
                                class: "input-group input-group-sm mb-2"
                              }, [
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => item.name = $event,
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "Service name"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, item.name]
                                ]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => item.price = $event,
                                  type: "number",
                                  class: "form-control",
                                  style: { "max-width": "100px" },
                                  placeholder: "Price"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [
                                    vModelText,
                                    item.price,
                                    void 0,
                                    { number: true }
                                  ]
                                ]),
                                createVNode("button", {
                                  type: "button",
                                  class: "btn btn-outline-danger btn-sm",
                                  onClick: ($event) => removePriceItem("en", index)
                                }, "×", 8, ["onClick"])
                              ]);
                            }), 128)),
                            !unref(form).price_list_items_en.length ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-muted small"
                            }, "No items yet.")) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true),
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
                      }, toDisplayString(unref(form).processing ? "Saving..." : "Save Changes"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServiceCategories/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
