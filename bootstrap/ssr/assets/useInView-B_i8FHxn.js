import { computed, ref, onMounted, onUnmounted, useSSRContext, mergeProps } from "vue";
import { ssrRenderTeleport, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./Footer-D-2r2JUh.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const LAST_DAY = "2026-11-30";
const PER_PAGE = 4;
const _sfc_main$1 = {
  __name: "BlackFridayJournal",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const open = ref(false);
    const products = ref([]);
    const current = ref(0);
    const flipDir = ref("next");
    computed(() => locale.value === "mk");
    const t = (en, m) => locale.value === "mk" ? m : en;
    const pages = computed(() => {
      const list = [{ type: "cover" }, { type: "epilation" }];
      for (let i = 0; i < products.value.length; i += PER_PAGE) {
        list.push({ type: "products", items: products.value.slice(i, i + PER_PAGE) });
      }
      list.push({ type: "outro" });
      return list;
    });
    const pad = (n) => String(n + 1).padStart(2, "0");
    const go = (dir) => {
      const next = current.value + dir;
      if (next < 0 || next >= pages.value.length) return;
      flipDir.value = dir > 0 ? "next" : "prev";
      current.value = next;
    };
    const close = () => {
      open.value = false;
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem("bm-bf-journal", "1");
      } catch (e) {
      }
    };
    const onKey = (e) => {
      if (!open.value) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    onMounted(() => {
      if (!page.props.blackFriday) return;
      if (/* @__PURE__ */ new Date() > /* @__PURE__ */ new Date(LAST_DAY + "T23:59:59")) return;
      try {
        if (sessionStorage.getItem("bm-bf-journal")) return;
      } catch (e) {
      }
      const show = () => setTimeout(async () => {
        const data = await import("./black-friday-Cbd3cBlI.js");
        products.value = data.default;
        open.value = true;
        document.documentElement.style.overflow = "hidden";
      }, 1400);
      if (document.readyState === "complete") show();
      else window.addEventListener("load", show, { once: true });
      document.addEventListener("keydown", onKey);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", onKey);
      if (open.value) document.documentElement.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (open.value) {
          _push2(`<div class="bfj" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", t("Black Friday offers", "Black Friday понуди"))} data-v-0d660ae5><div class="bfj__scrim" data-v-0d660ae5></div><div class="bfj__book" data-v-0d660ae5><button class="bfj__close"${ssrRenderAttr("aria-label", t("Close", "Затвори"))} data-v-0d660ae5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-0d660ae5><path d="M5 5l14 14M19 5L5 19" data-v-0d660ae5></path></svg></button>`);
          if (pages.value[current.value].type === "cover") {
            _push2(`<div class="bfj__page bfj__page--dark" data-v-0d660ae5><div class="bfj__rings" aria-hidden="true" data-v-0d660ae5></div><div class="bfj__cover" data-v-0d660ae5><p class="bfj__kicker" data-v-0d660ae5>babormedical.com</p><p class="bfj__bf" data-v-0d660ae5>Black<br data-v-0d660ae5><em data-v-0d660ae5>Friday</em></p><div class="bfj__coverline" data-v-0d660ae5></div><p class="bfj__coveroffer" data-v-0d660ae5>−50% ${ssrInterpolate(t("laser hair removal", "на ласерска епилација"))}</p><p class="bfj__covermeta" data-v-0d660ae5>${ssrInterpolate(t("+ up to −50% on BABOR skincare", "+ до −50% на BABOR нега"))}</p><button class="bfj__cta" data-v-0d660ae5>${ssrInterpolate(t("Browse the journal", "Прелистај го списанието"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0d660ae5><path d="M5 12h14m-6-6 6 6-6 6" data-v-0d660ae5></path></svg></button></div></div>`);
          } else if (pages.value[current.value].type === "epilation") {
            _push2(`<div class="bfj__page bfj__page--dark" data-v-0d660ae5><div class="bfj__rings" aria-hidden="true" data-v-0d660ae5></div><div class="bfj__epi" data-v-0d660ae5><p class="bfj__kicker" data-v-0d660ae5>${ssrInterpolate(t("In the clinic", "Во клиниката"))}</p><p class="bfj__epi-off" data-v-0d660ae5>−50%</p><h3 class="bfj__epi-title" data-v-0d660ae5>${ssrInterpolate(t("Laser hair removal", "Ласерска епилација"))}</h3><p class="bfj__epi-sub" data-v-0d660ae5>Alma Soprano Titanium · ${ssrInterpolate(t("all packages", "сите пакети"))}</p><a href="/contact" class="bfj__cta" data-v-0d660ae5>${ssrInterpolate(t("Book an appointment", "Закажи термин"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0d660ae5><path d="M5 12h14m-6-6 6 6-6 6" data-v-0d660ae5></path></svg></a></div></div>`);
          } else if (pages.value[current.value].type === "products") {
            _push2(`<div class="bfj__page bfj__page--paper" data-v-0d660ae5><div class="bfj__paperhead" data-v-0d660ae5><span data-v-0d660ae5>Black Friday</span><span class="bfj__paperhead-brand" data-v-0d660ae5>skinboutique.mk</span></div><div class="bfj__grid" data-v-0d660ae5><!--[-->`);
            ssrRenderList(pages.value[current.value].items, (item) => {
              _push2(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener" class="bfj__card" data-v-0d660ae5><span class="bfj__badge" data-v-0d660ae5>−${ssrInterpolate(item.disc)}</span><span class="bfj__imgwrap" data-v-0d660ae5><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)} loading="lazy" decoding="async" data-v-0d660ae5></span><span class="bfj__name" data-v-0d660ae5>${ssrInterpolate(item.name)}</span><span class="bfj__prices" data-v-0d660ae5><s data-v-0d660ae5>${ssrInterpolate(item.old)}</s><strong data-v-0d660ae5>${ssrInterpolate(item.new)} ${ssrInterpolate(t("MKD", "ден."))}</strong></span><span class="bfj__order" data-v-0d660ae5>${ssrInterpolate(t("Order at our online store", "Нарачајте преку нашата онлајн продавница"))} → <u data-v-0d660ae5>skinboutique.mk</u></span></a>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<div class="bfj__page bfj__page--dark" data-v-0d660ae5><div class="bfj__rings" aria-hidden="true" data-v-0d660ae5></div><div class="bfj__cover" data-v-0d660ae5><p class="bfj__kicker" data-v-0d660ae5>${ssrInterpolate(t("The whole catalogue", "Целата понуда"))}</p><p class="bfj__bf bfj__bf--sm" data-v-0d660ae5>skin<em data-v-0d660ae5>boutique</em>.mk</p><p class="bfj__covermeta" data-v-0d660ae5>${ssrInterpolate(t("Order online — delivery across Macedonia", "Нарачај онлајн — достава низ цела Македонија"))}</p><a href="https://www.skinboutique.mk" target="_blank" rel="noopener" class="bfj__cta" data-v-0d660ae5>${ssrInterpolate(t("Shop Black Friday", "Купувај Black Friday"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0d660ae5><path d="M5 12h14m-6-6 6 6-6 6" data-v-0d660ae5></path></svg></a></div></div>`);
          }
          _push2(`<div class="bfj__nav" data-v-0d660ae5><button class="bfj__arrow"${ssrIncludeBooleanAttr(current.value === 0) ? " disabled" : ""}${ssrRenderAttr("aria-label", t("Previous page", "Претходна страница"))} data-v-0d660ae5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-0d660ae5><path d="M15 6l-6 6 6 6" data-v-0d660ae5></path></svg></button><span class="bfj__count" data-v-0d660ae5>${ssrInterpolate(pad(current.value))} <i data-v-0d660ae5>/ ${ssrInterpolate(pad(pages.value.length - 1))}</i></span><button class="bfj__arrow"${ssrIncludeBooleanAttr(current.value === pages.value.length - 1) ? " disabled" : ""}${ssrRenderAttr("aria-label", t("Next page", "Следна страница"))} data-v-0d660ae5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-0d660ae5><path d="M9 6l6 6-6 6" data-v-0d660ae5></path></svg></button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/BlackFridayJournal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlackFridayJournal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d660ae5"]]);
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
      _push(ssrRenderComponent(BlackFridayJournal, null, null, _parent));
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
