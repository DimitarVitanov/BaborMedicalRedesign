import { ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "HorizontalScroll",
  __ssrInlineRender: true,
  setup(__props) {
    const outer = ref(null);
    const viewport = ref(null);
    const track = ref(null);
    const pinned = ref(false);
    let raf = 0;
    let distance = 0;
    let mq = null;
    const measure = () => {
      if (!pinned.value || !track.value || !outer.value || !viewport.value) return;
      distance = Math.max(0, track.value.scrollWidth - viewport.value.clientWidth);
      outer.value.style.height = `${window.innerHeight + distance}px`;
      update();
    };
    const update = () => {
      raf = 0;
      if (!pinned.value || !outer.value || !track.value) return;
      const r = outer.value.getBoundingClientRect();
      const scrollable = outer.value.offsetHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -r.top / scrollable)) : 0;
      track.value.style.transform = `translate3d(${(-p * distance).toFixed(1)}px, 0, 0)`;
      outer.value.style.setProperty("--hs-p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const setMode = () => {
      const shouldPin = mq.matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      pinned.value = shouldPin;
      if (!shouldPin) {
        if (outer.value) outer.value.style.height = "";
        if (track.value) track.value.style.transform = "";
        return;
      }
      requestAnimationFrame(measure);
    };
    let io = null;
    let listening = false;
    const setListening = (on) => {
      if (on === listening) return;
      listening = on;
      if (on) {
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      } else {
        window.removeEventListener("scroll", onScroll);
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    };
    onMounted(() => {
      var _a;
      mq = window.matchMedia("(min-width: 992px)");
      setMode();
      (_a = mq.addEventListener) == null ? void 0 : _a.call(mq, "change", setMode);
      window.addEventListener("resize", measure);
      window.addEventListener("load", measure);
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          ([entry]) => setListening(entry.isIntersecting),
          { rootMargin: "50% 0px 50% 0px" }
        );
        io.observe(outer.value);
      } else {
        setListening(true);
      }
    });
    onUnmounted(() => {
      var _a;
      (_a = mq == null ? void 0 : mq.removeEventListener) == null ? void 0 : _a.call(mq, "change", setMode);
      io == null ? void 0 : io.disconnect();
      setListening(false);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "outer",
        ref: outer,
        class: ["bm-hs", { "is-pinned": pinned.value, "has-intro": _ctx.$slots.intro }]
      }, _attrs))} data-v-d2e7d824><div class="bm-hs__sticky" data-v-d2e7d824>`);
      if (_ctx.$slots.intro) {
        _push(`<div class="bm-hs__intro" data-v-d2e7d824>`);
        ssrRenderSlot(_ctx.$slots, "intro", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bm-hs__viewport" data-v-d2e7d824><div class="bm-hs__track" data-v-d2e7d824>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="bm-hs__progress" aria-hidden="true" data-v-d2e7d824><span data-v-d2e7d824></span></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/HorizontalScroll.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HorizontalScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2e7d824"]]);
export {
  HorizontalScroll as H
};
