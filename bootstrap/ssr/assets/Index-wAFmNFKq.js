import { computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const content = computed(() => ({
      badge: locale.value === "mk" ? "НАШИ УСЛУГИ" : "OUR SERVICES",
      title: locale.value === "mk" ? "Изберете Категорија" : "Choose a Category",
      subtitle: locale.value === "mk" ? "Откријте ги нашите професионални третмани за убавина и подмладување" : "Discover our professional beauty and rejuvenation treatments"
    }));
    const categories = computed(() => [
      {
        id: "cosmetology",
        name: locale.value === "mk" ? "Козметологија" : "Cosmetology",
        description: locale.value === "mk" ? "Професионални козметички третмани за совршена кожа и природна убавина" : "Professional cosmetic treatments for perfect skin and natural beauty",
        href: "/services/cosmetology",
        icon: "sparkles"
      },
      {
        id: "laser",
        name: locale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments",
        description: locale.value === "mk" ? "Напредни ласерски третмани за подмладување, депилација и корекција на кожата" : "Advanced laser treatments for rejuvenation, hair removal and skin correction",
        href: "/services/laser-aesthetic",
        icon: "laser"
      },
      {
        id: "injectable",
        name: locale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods",
        description: locale.value === "mk" ? "Прецизна апликација, биолошка регенерација и контролирана естетика" : "Precise application, biological regeneration and controlled aesthetics",
        href: "/services/injectable-methods",
        icon: "injectable"
      },
      {
        id: "body",
        name: locale.value === "mk" ? "Третмани на тело" : "Body Treatments",
        description: locale.value === "mk" ? "Апаратурна естетика за обликување на телото и подобрување на квалитетот на кожата" : "Advanced aesthetics for body contouring and skin quality improvement",
        href: "/services/body-treatments",
        icon: "body"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-52cab280${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Услуги – Ласерски третмани, Козметологија, Инјектибилни методи | Babor Medical" : "Services – Laser Treatments, Cosmetology, Injectable Methods | Babor Medical")}</title><meta name="description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје: ласерски третмани, козметологија, инјектибилни методи и третмани на тело." : "Professional aesthetic services at Babor Medical Skopje: laser treatments, cosmetology, injectable methods and body treatments.")} data-v-52cab280${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "услуги скопје, естетски третмани, ласерски третмани скопје, козметологија, инјектибилни методи, третмани на тело, Babor Medical" : "services skopje, aesthetic treatments, laser treatments skopje, cosmetology, injectable methods, body treatments, Babor Medical")} data-v-52cab280${_scopeId}><meta name="author" content="Babor Medical" data-v-52cab280${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-52cab280${_scopeId}><meta property="og:title"${ssrRenderAttr("content", locale.value === "mk" ? "Услуги – Babor Medical Скопје" : "Services – Babor Medical Skopje")} data-v-52cab280${_scopeId}><meta property="og:description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje.")} data-v-52cab280${_scopeId}><meta property="og:type" content="website" data-v-52cab280${_scopeId}><meta property="og:url" content="https://babormedical.com/services" data-v-52cab280${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-52cab280${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-52cab280${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-52cab280${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-52cab280${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", locale.value === "mk" ? "Услуги – Babor Medical" : "Services – Babor Medical")} data-v-52cab280${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje.")} data-v-52cab280${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-52cab280${_scopeId}><link rel="canonical" href="https://babormedical.com/services" data-v-52cab280${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services?lang=en" data-v-52cab280${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services?lang=mk" data-v-52cab280${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services" data-v-52cab280${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(locale.value === "mk" ? "Услуги – Ласерски третмани, Козметологија, Инјектибилни методи | Babor Medical" : "Services – Laser Treatments, Cosmetology, Injectable Methods | Babor Medical"), 1),
              createVNode("meta", {
                name: "description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје: ласерски третмани, козметологија, инјектибилни методи и третмани на тело." : "Professional aesthetic services at Babor Medical Skopje: laser treatments, cosmetology, injectable methods and body treatments."
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "услуги скопје, естетски третмани, ласерски третмани скопје, козметологија, инјектибилни методи, третмани на тело, Babor Medical" : "services skopje, aesthetic treatments, laser treatments skopje, cosmetology, injectable methods, body treatments, Babor Medical"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "author",
                content: "Babor Medical"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index, follow, max-image-preview:large, max-snippet:-1"
              }),
              createVNode("meta", {
                property: "og:title",
                content: locale.value === "mk" ? "Услуги – Babor Medical Скопје" : "Services – Babor Medical Skopje"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje."
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://babormedical.com/services"
              }),
              createVNode("meta", {
                property: "og:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("meta", {
                property: "og:site_name",
                content: "Babor Medical"
              }),
              createVNode("meta", {
                property: "og:locale",
                content: locale.value === "mk" ? "mk_MK" : "en_US"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: locale.value === "mk" ? "Услуги – Babor Medical" : "Services – Babor Medical"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje."
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/services"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="services-page" data-v-52cab280>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="services-hero" data-v-52cab280><div class="hero-bg" data-v-52cab280><div class="gradient-orb orb-1" data-v-52cab280></div><div class="gradient-orb orb-2" data-v-52cab280></div></div><div class="container" data-v-52cab280><div class="hero-content" data-v-52cab280><span class="hero-badge fade-in-up" data-v-52cab280><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-52cab280><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" data-v-52cab280></path></svg> ${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title fade-in-up" data-v-52cab280>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle fade-in-up" data-v-52cab280>${ssrInterpolate(content.value.subtitle)}</p></div></div></section><section class="categories-section" data-v-52cab280><div class="container" data-v-52cab280><div class="categories-grid" data-v-52cab280><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<a${ssrRenderAttr("href", category.href)} class="category-box fade-in-up" data-v-52cab280><div class="box-icon" data-v-52cab280>`);
        if (category.icon === "sparkles") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-52cab280><path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" data-v-52cab280></path><path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z" data-v-52cab280></path><path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z" data-v-52cab280></path></svg>`);
        } else if (category.icon === "laser") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-52cab280><path d="M12 2C12 2 14 6 14 10C14 14 12 18 12 22" data-v-52cab280></path><path d="M12 2C12 2 10 6 10 10C10 14 12 18 12 22" data-v-52cab280></path><path d="M4 12H20" data-v-52cab280></path><circle cx="12" cy="12" r="10" data-v-52cab280></circle></svg>`);
        } else if (category.icon === "injectable") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-52cab280><path d="M12 2v6M12 16v6" data-v-52cab280></path><path d="M9 8h6l-1 8H10L9 8z" data-v-52cab280></path><circle cx="12" cy="5" r="1" data-v-52cab280></circle></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-52cab280><path d="M12 2a4 4 0 0 1 4 4c0 2-1.5 3.5-4 5-2.5-1.5-4-3-4-5a4 4 0 0 1 4-4z" data-v-52cab280></path><path d="M8 11c-2 1-4 3-4 6 0 2.5 3 5 8 5s8-2.5 8-5c0-3-2-5-4-6" data-v-52cab280></path><path d="M9 16h6" data-v-52cab280></path></svg>`);
        }
        _push(`</div><h2 class="box-title" data-v-52cab280>${ssrInterpolate(category.name)}</h2><p class="box-description" data-v-52cab280>${ssrInterpolate(category.description)}</p><div class="box-cta" data-v-52cab280><span data-v-52cab280>${ssrInterpolate(locale.value === "mk" ? "Погледни Третмани" : "View Treatments")}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-52cab280><path d="M5 12h14M12 5l7 7-7 7" data-v-52cab280></path></svg></div></a>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section" data-v-52cab280><div class="container" data-v-52cab280><div class="cta-card fade-in-up" data-v-52cab280><div class="cta-content" data-v-52cab280><h2 data-v-52cab280>${ssrInterpolate(locale.value === "mk" ? "Не сте сигурни кој третман е за вас?" : "Not sure which treatment is for you?")}</h2><p data-v-52cab280>${ssrInterpolate(locale.value === "mk" ? "Закажете бесплатна консултација со нашите експерти" : "Book a free consultation with our experts")}</p></div><a href="/contact" class="cta-btn" data-v-52cab280>${ssrInterpolate(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-52cab280><line x1="5" y1="12" x2="19" y2="12" data-v-52cab280></line><polyline points="12 5 19 12 12 19" data-v-52cab280></polyline></svg></a></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52cab280"]]);
export {
  Index as default
};
