import { useId, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useInView } from "./useInView-Cf0EHO41.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "RotatingBadge",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "Babor Medical · Skopje · Laser & Aesthetic ·" },
    size: { type: Number, default: 156 },
    logo: { type: String, default: "/logo.webp" }
  },
  setup(__props) {
    const pathId = `bm-seal-${useId()}`;
    const el = ref(null);
    const inView = useInView(el);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: ["bm-seal", { "is-off": !unref(inView) }],
        style: { width: `${__props.size}px`, height: `${__props.size}px` }
      }, _attrs))} data-v-723ac42a><svg class="bm-seal__ring" viewBox="0 0 200 200" aria-hidden="true" data-v-723ac42a><defs data-v-723ac42a><path${ssrRenderAttr("id", pathId)} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" data-v-723ac42a></path></defs><text data-v-723ac42a><textPath${ssrRenderAttr("href", `#${pathId}`)} textLength="486" data-v-723ac42a>${ssrInterpolate(__props.text)}</textPath></text></svg><div class="bm-seal__core" data-v-723ac42a><img${ssrRenderAttr("src", __props.logo)} alt="" width="120" height="120" loading="lazy" decoding="async" data-v-723ac42a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/RotatingBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RotatingBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-723ac42a"]]);
export {
  RotatingBadge as R
};
