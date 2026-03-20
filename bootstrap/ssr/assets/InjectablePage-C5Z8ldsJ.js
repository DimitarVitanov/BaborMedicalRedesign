import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "InjectablePage",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    pageTitle: String,
    pageSubtitle: String,
    extraData: {
      type: Object,
      default: () => ({})
    },
    priceListPdf: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    useScrollAnimation();
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const t = (mk, en) => locale.value === "mk" ? mk : en;
    const seoTitle = computed(() => {
      if (locale.value === "mk") {
        return "Инјектибилни методи Скопје – Филери, Ботокс, Биостимулација | Babor Medical";
      }
      return "Injectable Methods Skopje – Fillers, Botox, Biostimulation | Babor Medical";
    });
    const seoDescription = computed(() => {
      if (locale.value === "mk") {
        return "Инјектибилни третмани во Babor Medical Скопје: филери, ботокс, биостимулација, мезотерапија. Прецизна апликација и персонализирани протоколи.";
      }
      return "Injectable treatments at Babor Medical Skopje: fillers, botox, biostimulation, mesotherapy. Precise application and personalized protocols.";
    });
    const seoKeywords = computed(() => {
      if (locale.value === "mk") {
        return "инјектибилни методи скопје, филери скопје, ботокс скопје, биостимулација, мезотерапија, хијалуронски филери, Babor Medical, естетска медицина скопје";
      }
      return "injectable methods skopje, fillers skopje, botox skopje, biostimulation, mesotherapy, hyaluronic fillers, Babor Medical, aesthetic medicine skopje";
    });
    const jsonLd = computed(() => {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalBusiness",
            "@id": "https://babormedical.com/#organization",
            "name": "Babor Medical",
            "url": "https://babormedical.com",
            "logo": "https://babormedical.com/logo.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Skopje",
              "addressCountry": "MK"
            },
            "priceRange": "$$",
            "medicalSpecialty": "Dermatology"
          },
          {
            "@type": "Service",
            "name": locale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods",
            "description": seoDescription.value,
            "provider": { "@id": "https://babormedical.com/#organization" },
            "areaServed": { "@type": "City", "name": "Skopje" },
            "serviceType": "Injectable Aesthetics",
            "url": "https://babormedical.com/services/injectable-methods"
          },
          {
            "@type": "WebPage",
            "name": seoTitle.value,
            "description": seoDescription.value,
            "url": "https://babormedical.com/services/injectable-methods",
            "inLanguage": locale.value === "mk" ? "mk-MK" : "en",
            "isPartOf": { "@type": "WebSite", "url": "https://babormedical.com" }
          }
        ]
      });
    });
    const categoryDescription = computed(() => {
      if (!props.categories || !props.categories.length) return "";
      return props.categories[0].description || "";
    });
    const treatments = computed(() => {
      if (!props.categories) return [];
      return props.categories.flatMap((cat) => cat.items || []);
    });
    const protocolAreas = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.protocol_areas) || [];
    });
    const combinedStrategies = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.combined_strategies) || [];
    });
    const assessmentPoints = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.assessment_points) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-87c6382f${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-87c6382f${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-87c6382f${_scopeId}><meta name="author" content="Babor Medical" data-v-87c6382f${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-87c6382f${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-87c6382f${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-87c6382f${_scopeId}><meta property="og:type" content="website" data-v-87c6382f${_scopeId}><meta property="og:url" content="https://babormedical.com/services/injectable-methods" data-v-87c6382f${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-87c6382f${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-87c6382f${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-87c6382f${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-87c6382f${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-87c6382f${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-87c6382f${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-87c6382f${_scopeId}><link rel="canonical" href="https://babormedical.com/services/injectable-methods" data-v-87c6382f${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/injectable-methods?lang=en" data-v-87c6382f${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/injectable-methods?lang=mk" data-v-87c6382f${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/injectable-methods" data-v-87c6382f${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: seoKeywords.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "author",
                content: "Babor Medical"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
              }),
              createVNode("meta", {
                property: "og:title",
                content: seoTitle.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://babormedical.com/services/injectable-methods"
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
                content: seoTitle.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/services/injectable-methods"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services/injectable-methods?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services/injectable-methods?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services/injectable-methods"
              }),
              (openBlock(), createBlock(resolveDynamicComponent("script"), {
                type: "application/ld+json",
                innerHTML: jsonLd.value
              }, null, 8, ["innerHTML"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="injectable-page" data-v-87c6382f>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="injectable-hero" data-v-87c6382f><div class="hero-bg" data-v-87c6382f><div class="gradient-orb orb-1" data-v-87c6382f></div><div class="gradient-orb orb-2" data-v-87c6382f></div><div class="gradient-orb orb-3" data-v-87c6382f></div></div><div class="container" data-v-87c6382f><div class="hero-content" data-v-87c6382f><span class="hero-badge fade-in-up" data-v-87c6382f><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-87c6382f><path d="M12 2v6M12 16v6" data-v-87c6382f></path><path d="M9 8h6l-1 8H10L9 8z" data-v-87c6382f></path><circle cx="12" cy="5" r="1" data-v-87c6382f></circle></svg> ${ssrInterpolate(t("ИНЈЕКТБИЛНИ МЕТОДИ", "INJECTABLE METHODS"))}</span><h1 class="hero-title fade-in-up" data-v-87c6382f>${ssrInterpolate(__props.pageTitle)}</h1><p class="hero-subtitle fade-in-up" data-v-87c6382f>${ssrInterpolate(__props.pageSubtitle)}</p><div class="hero-stats fade-in-up" data-v-87c6382f><div class="stat" data-v-87c6382f><span class="stat-number" data-v-87c6382f>${ssrInterpolate(treatments.value.length)}</span><span class="stat-label" data-v-87c6382f>${ssrInterpolate(t("Методи", "Methods"))}</span></div><div class="stat-divider" data-v-87c6382f></div><div class="stat" data-v-87c6382f><span class="stat-number" data-v-87c6382f>6+</span><span class="stat-label" data-v-87c6382f>${ssrInterpolate(t("Протоколи", "Protocols"))}</span></div><div class="stat-divider" data-v-87c6382f></div><div class="stat" data-v-87c6382f><span class="stat-number" data-v-87c6382f>10+</span><span class="stat-label" data-v-87c6382f>${ssrInterpolate(t("Години", "Years"))}</span></div></div><a href="/services/cosmetology" class="other-category-link fade-in-up" data-v-87c6382f>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Козметологија", "Cosmetology"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-87c6382f><path d="M5 12h14M12 5l7 7-7 7" data-v-87c6382f></path></svg></a></div></div><div class="scroll-indicator" data-v-87c6382f><div class="mouse" data-v-87c6382f><div class="wheel" data-v-87c6382f></div></div></div></section><section class="injectable-content" data-v-87c6382f><div class="container" data-v-87c6382f>`);
      if (categoryDescription.value) {
        _push(`<div class="content-block fade-in-up" data-v-87c6382f><p class="intro-text" data-v-87c6382f>${ssrInterpolate(categoryDescription.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content-block fade-in-up" data-v-87c6382f><h2 class="block-title" data-v-87c6382f>${ssrInterpolate(t("Што опфаќаат инјектбилните протоколи?", "What do injectable protocols cover?"))}</h2><ul class="styled-list" data-v-87c6382f><!--[-->`);
      ssrRenderList(protocolAreas.value, (area) => {
        _push(`<li data-v-87c6382f>${ssrInterpolate(area)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-87c6382f>${ssrInterpolate(t("Секоја од овие категории има различна биолошка улога и различна индикација.", "Each of these categories has a different biological role and different indication."))}</p></div><div class="content-block fade-in-up" data-v-87c6382f><h2 class="block-title" data-v-87c6382f>${ssrInterpolate(t("Наши методи", "Our Methods"))}</h2><div class="tech-grid" data-v-87c6382f><!--[-->`);
      ssrRenderList(treatments.value, (item) => {
        _push(`<div class="tech-card fade-in-up" data-v-87c6382f><h3 class="tech-name" data-v-87c6382f>${ssrInterpolate(item.name)}</h3>`);
        if (item.description) {
          _push(`<div class="tech-desc" data-v-87c6382f>${item.description ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.url) {
          _push(`<a${ssrRenderAttr("href", item.url)} class="tech-link" data-v-87c6382f>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-87c6382f><path d="M5 12h14M12 5l7 7-7 7" data-v-87c6382f></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="content-block fade-in-up" data-v-87c6382f><h2 class="block-title" data-v-87c6382f>${ssrInterpolate(t("Протокол наместо изолирана процедура", "Protocol instead of isolated procedure"))}</h2><p class="block-text" data-v-87c6382f>${ssrInterpolate(t("Во Babor Medical развиваме комбинирани стратегии како:", "At Babor Medical we develop combined strategies such as:"))}</p><ul class="styled-list" data-v-87c6382f><!--[-->`);
      ssrRenderList(combinedStrategies.value, (strategy) => {
        _push(`<li data-v-87c6382f>${ssrInterpolate(strategy)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-87c6382f>${ssrInterpolate(t("Целта е долгорочна стабилност, природен изглед и постепена регенерација.", "The goal is long-term stability, natural look and gradual regeneration."))}</p></div><div class="content-block fade-in-up" data-v-87c6382f><h2 class="block-title" data-v-87c6382f>${ssrInterpolate(t("Индивидуална проценка", "Individual Assessment"))}</h2><p class="block-text" data-v-87c6382f>${ssrInterpolate(t("Секој третман започнува со детална анализа на:", "Every treatment starts with a detailed analysis of:"))}</p><ul class="styled-list" data-v-87c6382f><!--[-->`);
      ssrRenderList(assessmentPoints.value, (point) => {
        _push(`<li data-v-87c6382f>${ssrInterpolate(point)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-87c6382f>${ssrInterpolate(t("Врз основа на тоа се креира персонализиран план.", "Based on this, a personalized plan is created."))}</p></div>`);
      if (__props.priceListPdf) {
        _push(`<div class="content-block fade-in-up pricing-block" data-v-87c6382f><h2 class="block-title" data-v-87c6382f>${ssrInterpolate(t("Ценовник", "Pricing"))}</h2><p class="block-text" data-v-87c6382f>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за инјектибилни третмани.", "View our complete price list for injectable treatments."))}</p><div class="pdf-actions" data-v-87c6382f><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" class="pdf-btn" data-v-87c6382f><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-87c6382f><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-87c6382f></path><polyline points="14 2 14 8 20 8" data-v-87c6382f></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-87c6382f></line><line x1="16" y1="17" x2="8" y2="17" data-v-87c6382f></line><polyline points="10 9 9 9 8 9" data-v-87c6382f></polyline></svg> ${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="pdf-btn pdf-btn-secondary" data-v-87c6382f><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-87c6382f><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-87c6382f></path><polyline points="7 10 12 15 17 10" data-v-87c6382f></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-87c6382f></line></svg> ${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="closing-block fade-in-up" data-v-87c6382f><h2 class="closing-title" data-v-87c6382f>${ssrInterpolate(t("Природноста е наш приоритет", "Naturalness is our priority"))}</h2><p class="closing-text" data-v-87c6382f>${ssrInterpolate(t("Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.", "Injectable methods are a powerful tool when applied with clinical logic and measure."))}</p><p class="closing-tagline" data-v-87c6382f>${ssrInterpolate(t("Нашата стратегија е стабилизација, не претерување.", "Our strategy is stabilization, not excess."))}<br data-v-87c6382f> ${ssrInterpolate(t("Регенерација, не маскирање.", "Regeneration, not masking."))}</p><a href="/contact" class="cta-btn" data-v-87c6382f>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-87c6382f><path d="M5 12h14M12 5l7 7-7 7" data-v-87c6382f></path></svg></a></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/InjectablePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InjectablePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87c6382f"]]);
export {
  InjectablePage as default
};
