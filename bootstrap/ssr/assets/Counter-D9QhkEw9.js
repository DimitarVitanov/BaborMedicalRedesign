import { computed, ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Counter",
  __ssrInlineRender: true,
  props: {
    value: { type: [String, Number], required: true }
  },
  setup(__props) {
    const props = __props;
    const parts = computed(() => {
      const str = String(props.value);
      const m = str.match(/^(\D*)([\d.,]+)(.*)$/);
      if (!m) return { prefix: str, chars: [], suffix: "" };
      return { prefix: m[1], chars: m[2].split(""), suffix: m[3] };
    });
    const el = ref(null);
    const armed = ref(false);
    const rolled = ref(true);
    let io = null;
    onMounted(() => {
      armed.value = true;
      rolled.value = false;
      if (!("IntersectionObserver" in window)) {
        rolled.value = true;
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            requestAnimationFrame(() => rolled.value = true);
            io.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(el.value);
    });
    onUnmounted(() => io == null ? void 0 : io.disconnect());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "bm-odo",
        "data-armed": armed.value ? "" : null
      }, _attrs))} data-v-169fdf02><span class="visually-hidden-bm" data-v-169fdf02>${ssrInterpolate(__props.value)}</span><span class="bm-odo__visual" aria-hidden="true" data-v-169fdf02>`);
      if (parts.value.prefix) {
        _push(`<span data-v-169fdf02>${ssrInterpolate(parts.value.prefix)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(parts.value.chars, (c, i) => {
        _push(`<!--[-->`);
        if (/\d/.test(c)) {
          _push(`<span class="bm-odo__col" data-v-169fdf02><span class="bm-odo__strip" style="${ssrRenderStyle({ transform: `translate3d(0, ${rolled.value ? -Number(c) * 10 : 0}%, 0)`, transitionDelay: `${i * 120}ms` })}" data-v-169fdf02></span><span class="bm-odo__ghost" data-v-169fdf02>${ssrInterpolate(c)}</span></span>`);
        } else {
          _push(`<span data-v-169fdf02>${ssrInterpolate(c)}</span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      if (parts.value.suffix) {
        _push(`<span data-v-169fdf02>${ssrInterpolate(parts.value.suffix)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/Counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-169fdf02"]]);
export {
  Counter as C
};
