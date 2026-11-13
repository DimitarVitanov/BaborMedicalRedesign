import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { a as _sfc_main$1 } from "./Footer-CNheNTSo.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: { type: String, default: "" },
    title: { type: String, default: "" },
    accent: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    crumb: { type: String, default: "" },
    align: { type: String, default: "left" },
    // left | center
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const homeLabel = computed(() => page.props.locale === "mk" ? "Почетна" : "Home");
    const titleWords = computed(() => String(props.title || "").trim().split(/\s+/).filter(Boolean).length);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["bm-phero bm-grain", [`is-${__props.align}`, { "is-compact": __props.compact, "has-aside": _ctx.$slots.aside }]]
      }, _attrs))} data-v-936ae39c><div class="bm-aura" aria-hidden="true" data-v-936ae39c><span data-v-936ae39c></span><span data-v-936ae39c></span><span data-v-936ae39c></span></div><div class="bm-container bm-phero__inner" data-v-936ae39c><div class="bm-phero__main" data-v-936ae39c>`);
      if (__props.crumb) {
        _push(`<nav class="bm-phero__crumbs bm-intro bm-intro--fade" aria-label="Breadcrumb" data-v-936ae39c><a href="/" data-v-936ae39c>${ssrInterpolate(homeLabel.value)}</a><span aria-hidden="true" data-v-936ae39c>/</span><span data-v-936ae39c>${ssrInterpolate(__props.crumb)}</span></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.eyebrow) {
        _push(`<span class="${ssrRenderClass([{ "bm-eyebrow--center": __props.align === "center" }, "bm-eyebrow bm-intro"])}" style="${ssrRenderStyle({ "--d": "0.1s" })}" data-v-936ae39c>${ssrInterpolate(__props.eyebrow)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="bm-h1 bm-phero__title" data-v-936ae39c>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        text: __props.title,
        delay: 0.15,
        instant: ""
      }, null, _parent));
      if (__props.accent) {
        _push(`<!--[-->${ssrInterpolate(" ")}<br data-v-936ae39c>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          text: __props.accent,
          class: "bm-accent",
          delay: 0.15,
          start: titleWords.value,
          instant: ""
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h1>`);
      if (__props.subtitle) {
        _push(`<p class="bm-lead bm-muted bm-phero__sub bm-intro" style="${ssrRenderStyle({ "--d": "0.45s" })}" data-v-936ae39c>${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.default) {
        _push(`<div class="bm-phero__extra bm-intro" style="${ssrRenderStyle({ "--d": "0.6s" })}" data-v-936ae39c>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.aside) {
        _push(`<div class="bm-phero__aside bm-intro bm-intro--scale" style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-936ae39c>`);
        ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><span id="bm-above-fold" hidden data-v-936ae39c></span></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-936ae39c"]]);
export {
  PageHero as P
};
