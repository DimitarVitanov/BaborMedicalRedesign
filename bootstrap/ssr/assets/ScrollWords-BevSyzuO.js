import { computed, ref, watch, onMounted, onUnmounted, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { u as useInView } from "./useInView-CQuBxUZh.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ScrollWords",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "" },
    tag: { type: String, default: "p" }
  },
  setup(__props) {
    const props = __props;
    const words = computed(() => String(props.text ?? "").trim().split(/\s+/).filter(Boolean));
    const el = ref(null);
    const inView = useInView(el, "25% 0px 25% 0px");
    let raf = 0;
    let listening = false;
    let reduced = false;
    const update = () => {
      raf = 0;
      const node = el.value;
      if (!node) return;
      const r = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.45;
      const total = start - end + r.height;
      const p = Math.min(1, Math.max(0, (start - r.top) / total));
      node.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const setListening = (on) => {
      if (reduced || on === listening) return;
      listening = on;
      if (on) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    };
    watch(inView, (visible) => setListening(visible));
    onMounted(() => {
      var _a, _b;
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        (_a = el.value) == null ? void 0 : _a.style.setProperty("--p", "1");
        return;
      }
      (_b = el.value) == null ? void 0 : _b.setAttribute("data-live", "");
      update();
      if (inView.value) setListening(true);
    });
    onUnmounted(() => setListening(false));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps({
        ref_key: "el",
        ref: el,
        class: "bm-sw",
        style: { "--n": words.value.length }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(words.value, (word, i) => {
              _push2(`<!--[--><span class="bm-sw__w" style="${ssrRenderStyle({ "--i": i })}" data-v-bc8a599e${_scopeId}>${ssrInterpolate(word)}</span>${ssrInterpolate(i < words.value.length - 1 ? " " : "")}<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(words.value, (word, i) => {
                return openBlock(), createBlock(Fragment, { key: i }, [
                  createVNode("span", {
                    class: "bm-sw__w",
                    style: { "--i": i }
                  }, toDisplayString(word), 5),
                  createTextVNode(toDisplayString(i < words.value.length - 1 ? " " : ""), 1)
                ], 64);
              }), 128))
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/ScrollWords.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ScrollWords = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc8a599e"]]);
export {
  ScrollWords as S
};
