import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useInView } from "./useInView-B_i8FHxn.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => [] },
    variant: { type: String, default: "wine" },
    // wine | cream | outline
    reverse: { type: Boolean, default: false },
    duration: { type: Number, default: 38 },
    // seconds per loop
    tilt: { type: Number, default: 0 }
    // degrees
  },
  setup(__props) {
    const el = ref(null);
    const inView = useInView(el);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: ["bm-marquee", [`bm-marquee--${__props.variant}`, { "is-off": !unref(inView) }]],
        style: { "--tilt": `${__props.tilt}deg`, "--dur": `${__props.duration}s` }
      }, _attrs))} data-v-5abe1ba4><div class="${ssrRenderClass([{ "is-reverse": __props.reverse }, "bm-marquee__track"])}" data-v-5abe1ba4><ul class="bm-marquee__group" data-v-5abe1ba4><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li data-v-5abe1ba4><span data-v-5abe1ba4>${ssrInterpolate(item)}</span><svg class="bm-marquee__star" viewBox="0 0 24 24" aria-hidden="true" data-v-5abe1ba4><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="currentColor" data-v-5abe1ba4></path></svg></li>`);
      });
      _push(`<!--]--></ul><ul class="bm-marquee__group" aria-hidden="true" data-v-5abe1ba4><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li data-v-5abe1ba4><span data-v-5abe1ba4>${ssrInterpolate(item)}</span><svg class="bm-marquee__star" viewBox="0 0 24 24" aria-hidden="true" data-v-5abe1ba4><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="currentColor" data-v-5abe1ba4></path></svg></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/Marquee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5abe1ba4"]]);
export {
  Marquee as M
};
