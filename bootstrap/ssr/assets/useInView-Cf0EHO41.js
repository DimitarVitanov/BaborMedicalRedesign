import { onMounted, onUnmounted, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./Footer-T_gtoxyK.js";
const SELECTOR = "[data-reveal], [data-mask]";
function useReveal(rootRef) {
  let io = null;
  let mo = null;
  const observeAll = (scope) => {
    var _a;
    if (!scope || !io) return;
    if (scope.matches && scope.matches(SELECTOR) && !scope.hasAttribute("data-in")) io.observe(scope);
    (_a = scope.querySelectorAll) == null ? void 0 : _a.call(scope, SELECTOR).forEach((el) => {
      if (!el.hasAttribute("data-in")) io.observe(el);
    });
  };
  onMounted(() => {
    const root = rootRef.value;
    if (!root) return;
    if (!("IntersectionObserver" in window)) {
      root.querySelectorAll(SELECTOR).forEach((el) => el.setAttribute("data-in", ""));
      return;
    }
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    observeAll(root);
    mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && observeAll(n)));
    });
    mo.observe(root, { childList: true, subtree: true });
    window.setTimeout(() => {
      root.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.hasAttribute("data-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.setAttribute("data-in", "");
      });
    }, 1600);
  });
  onUnmounted(() => {
    io == null ? void 0 : io.disconnect();
    mo == null ? void 0 : mo.disconnect();
  });
}
const _sfc_main = {
  __name: "SiteLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const root = ref(null);
    useReveal(root);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        class: "bm"
      }, _attrs))}>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main id="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/SiteLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useInView(elRef, rootMargin = "200px 0px 200px 0px") {
  const inView = ref(false);
  let io = null;
  onMounted(() => {
    const el = elRef.value;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      inView.value = true;
      return;
    }
    io = new IntersectionObserver(
      ([entry]) => {
        inView.value = entry.isIntersecting;
      },
      { rootMargin }
    );
    io.observe(el);
  });
  onUnmounted(() => io == null ? void 0 : io.disconnect());
  return inView;
}
export {
  _sfc_main as _,
  useInView as u
};
