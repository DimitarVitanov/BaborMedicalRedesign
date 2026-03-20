import { computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    about: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "За нас - Babor Medical" : "About Us - Babor Medical";
    });
    const stats = computed(() => [
      { number: "25+", label: locale.value === "mk" ? "Години искуство" : "Years Experience", icon: "calendar" },
      { number: "10K+", label: locale.value === "mk" ? "Задоволни клиенти" : "Happy Clients", icon: "users" },
      { number: "50+", label: locale.value === "mk" ? "Третмани" : "Treatments", icon: "sparkle" },
      { number: "15+", label: locale.value === "mk" ? "Експерти" : "Experts", icon: "award" }
    ]);
    const values = computed(() => [
      {
        icon: "heart",
        title: locale.value === "mk" ? "Посветеност" : "Dedication",
        desc: locale.value === "mk" ? "Посветени сме на вашата убавина и благосостојба" : "We are dedicated to your beauty and wellness"
      },
      {
        icon: "shield",
        title: locale.value === "mk" ? "Квалитет" : "Quality",
        desc: locale.value === "mk" ? "Користиме само премиум Babor производи" : "We use only premium Babor products"
      },
      {
        icon: "star",
        title: locale.value === "mk" ? "Извонредност" : "Excellence",
        desc: locale.value === "mk" ? "Континуирано образование и усовршување" : "Continuous education and improvement"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-6cc5a7a5${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-6cc5a7a5${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, за нас, дерматологија, спа, козметика, Македонија" : "Babor Medical, about us, dermatology, spa, cosmetics, Macedonia")} data-v-6cc5a7a5${_scopeId}><meta name="robots" content="index, follow" data-v-6cc5a7a5${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6cc5a7a5${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-6cc5a7a5${_scopeId}><meta property="og:image" content="/logo.webp" data-v-6cc5a7a5${_scopeId}><meta property="og:type" content="website" data-v-6cc5a7a5${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-6cc5a7a5${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6cc5a7a5${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-6cc5a7a5${_scopeId}><meta name="twitter:image" content="/logo.webp" data-v-6cc5a7a5${_scopeId}><link rel="canonical" href="https://babormedical.com/about" data-v-6cc5a7a5${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/about?lang=en" data-v-6cc5a7a5${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/about?lang=mk" data-v-6cc5a7a5${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/about" data-v-6cc5a7a5${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "Babor Medical, за нас, дерматологија, спа, козметика, Македонија" : "Babor Medical, about us, dermatology, spa, cosmetics, Macedonia"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: "index, follow"
              }),
              createVNode("meta", {
                property: "og:title",
                content: seoTitle.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: "/logo.webp"
              }),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: seoTitle.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: "/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/about"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/about?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/about?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/about"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-wrapper" data-v-6cc5a7a5>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="about-hero" data-v-6cc5a7a5><div class="container" data-v-6cc5a7a5><div class="hero-grid" data-v-6cc5a7a5><div class="hero-content fade-in-left" data-v-6cc5a7a5><span class="section-badge" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "ЗА НАС" : "ABOUT US")}</span><h1 class="hero-title" data-v-6cc5a7a5>${ssrInterpolate(__props.about.title)}</h1><div class="hero-subtitle" data-v-6cc5a7a5>${__props.about.subtitle ?? ""}</div></div><div class="hero-image fade-in-right" data-v-6cc5a7a5><picture data-v-6cc5a7a5><source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp" data-v-6cc5a7a5><source srcset="/images/about.webp" type="image/webp" data-v-6cc5a7a5><img${ssrRenderAttr("src", __props.about.image || "/images/about.webp")} alt="Babor Medical Team" class="hero-img" loading="eager" data-v-6cc5a7a5></picture></div></div></div></section><section class="stats-section" data-v-6cc5a7a5><div class="container" data-v-6cc5a7a5><div class="stats-grid" data-v-6cc5a7a5><!--[-->`);
      ssrRenderList(stats.value, (stat, index) => {
        _push(`<div class="${ssrRenderClass([`stagger-${index + 1}`, "stat-card fade-in-up"])}" data-v-6cc5a7a5><div class="stat-icon" data-v-6cc5a7a5>`);
        if (stat.icon === "calendar") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><rect x="3" y="4" width="18" height="18" rx="2" data-v-6cc5a7a5></rect><path d="M16 2v4M8 2v4M3 10h18" data-v-6cc5a7a5></path></svg>`);
        } else if (stat.icon === "users") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-6cc5a7a5></path><circle cx="9" cy="7" r="4" data-v-6cc5a7a5></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" data-v-6cc5a7a5></path></svg>`);
        } else if (stat.icon === "sparkle") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-6cc5a7a5></path></svg>`);
        } else if (stat.icon === "award") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><circle cx="12" cy="8" r="6" data-v-6cc5a7a5></circle><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" data-v-6cc5a7a5></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="stat-number" data-v-6cc5a7a5>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-6cc5a7a5>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="story-section" data-v-6cc5a7a5><div class="container" data-v-6cc5a7a5><div class="story-header fade-in-up" data-v-6cc5a7a5><h2 class="section-title" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "Нашата приказна" : "Our Story")}</h2></div><div class="story-content fade-in-up" data-v-6cc5a7a5><div class="content-paragraphs" data-v-6cc5a7a5><div class="content-paragraph" data-v-6cc5a7a5>${__props.about.full_content ?? ""}</div></div></div></div></section><section class="values-section" data-v-6cc5a7a5><div class="container" data-v-6cc5a7a5><h2 class="values-title fade-in-up" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "Нашите вредности" : "Our Values")}</h2><div class="values-grid" data-v-6cc5a7a5><!--[-->`);
      ssrRenderList(values.value, (value, index) => {
        _push(`<div class="${ssrRenderClass([`stagger-${index + 1}`, "value-card fade-in-up"])}" data-v-6cc5a7a5><div class="value-icon" data-v-6cc5a7a5>`);
        if (value.icon === "heart") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-6cc5a7a5></path></svg>`);
        } else if (value.icon === "shield") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-6cc5a7a5></path><path d="M9 12l2 2 4-4" data-v-6cc5a7a5></path></svg>`);
        } else if (value.icon === "star") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6cc5a7a5><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-6cc5a7a5></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h3 class="value-title" data-v-6cc5a7a5>${ssrInterpolate(value.title)}</h3><p class="value-desc" data-v-6cc5a7a5>${ssrInterpolate(value.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section" data-v-6cc5a7a5><div class="container" data-v-6cc5a7a5><div class="cta-content fade-in-up" data-v-6cc5a7a5><h2 class="cta-title" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "Подготвени сте за трансформација?" : "Ready for transformation?")}</h2><p class="cta-text" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "Закажете консултација и започнете го вашето патување кон убавина" : "Book a consultation and start your journey to beauty")}</p><a href="#contact" class="btn-cta" data-v-6cc5a7a5>${ssrInterpolate(locale.value === "mk" ? "Закажи консултација" : "Book Consultation")} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6cc5a7a5><path d="M5 12h14M12 5l7 7-7 7" data-v-6cc5a7a5></path></svg></a></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cc5a7a5"]]);
export {
  About as default
};
