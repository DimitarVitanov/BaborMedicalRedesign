import { unref, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { useForm, Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    settings: Object
  },
  setup(__props) {
    const props = __props;
    const defaultSettings = [
      { key: "social_facebook", label: "Facebook URL", group: "social" },
      { key: "social_instagram", label: "Instagram URL", group: "social" },
      { key: "social_tiktok", label: "TikTok URL", group: "social" }
    ];
    const getSettingValue = (key, lang) => {
      if (!props.settings) return "";
      for (const group of Object.values(props.settings)) {
        const setting = group.find((s) => s.key === key);
        if (setting) {
          return lang === "en" ? setting.value_en : setting.value_mk;
        }
      }
      return "";
    };
    const formData = {};
    defaultSettings.forEach((s) => {
      formData[`${s.key}_en`] = getSettingValue(s.key, "en");
      formData[`${s.key}_mk`] = getSettingValue(s.key, "mk");
    });
    const form = useForm(formData);
    const submit = () => {
      const settings = defaultSettings.map((s) => ({
        key: s.key,
        value_en: form[`${s.key}_en`],
        value_mk: form[`${s.key}_mk`]
      }));
      form.transform(() => ({ settings })).post(route("admin.settings.update"));
    };
    const socialSettings = defaultSettings.filter((s) => s.group === "social");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Settings" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h4 mb-0"${_scopeId}>Site Settings</h2>`);
          } else {
            return [
              createVNode("h2", { class: "h4 mb-0" }, "Site Settings")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><form${_scopeId}><div class="card mb-4"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Social Media Links</h5></div><div class="card-body"${_scopeId}><p class="text-muted small mb-3"${_scopeId}>Social media links are the same for both languages.</p><!--[-->`);
            ssrRenderList(unref(socialSettings), (setting) => {
              _push2(`<div class="mb-3"${_scopeId}><label class="form-label fw-bold"${_scopeId}>${ssrInterpolate(setting.label)}</label><input${ssrRenderAttr("value", unref(form)[`${setting.key}_en`])} type="url" class="form-control"${ssrRenderAttr("placeholder", `https://...`)}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div><div class="d-flex justify-content-end"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Settings")}</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "card mb-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Social Media Links")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("p", { class: "text-muted small mb-3" }, "Social media links are the same for both languages."),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(socialSettings), (setting) => {
                          return openBlock(), createBlock("div", {
                            key: setting.key,
                            class: "mb-3"
                          }, [
                            createVNode("label", { class: "form-label fw-bold" }, toDisplayString(setting.label), 1),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form)[`${setting.key}_en`] = $event,
                              onInput: ($event) => unref(form)[`${setting.key}_mk`] = unref(form)[`${setting.key}_en`],
                              type: "url",
                              class: "form-control",
                              placeholder: `https://...`
                            }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                              [vModelText, unref(form)[`${setting.key}_en`]]
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-content-end" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary",
                        disabled: unref(form).processing
                      }, toDisplayString(unref(form).processing ? "Saving..." : "Save Settings"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
