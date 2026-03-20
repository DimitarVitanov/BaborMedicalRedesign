import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CategoryPage",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    parentType: String,
    pageTitle: String,
    pageSubtitle: String
  },
  setup(__props) {
    useScrollAnimation();
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      if (locale.value === "mk") {
        return "Козметологија и BABOR третмани Скопје | Babor Medical";
      }
      return "Cosmetology & BABOR Treatments Skopje | Babor Medical";
    });
    const seoDescription = computed(() => {
      if (locale.value === "mk") {
        return "Професионални козметолошки третмани и BABOR протоколи во Babor Medical Скопје. Структуриран пристап кон здравјето и квалитетот на кожата.";
      }
      return "Professional cosmetology treatments and BABOR protocols at Babor Medical Skopje. A structured approach to skin health and quality.";
    });
    const seoKeywords = computed(() => {
      if (locale.value === "mk") {
        return "козметологија скопје, BABOR третмани, третмани за лице скопје, нега на кожа, Babor Medical, естетска козметика скопје, професионални третмани за лице, козметички третмани";
      }
      return "cosmetology skopje, BABOR treatments, facial treatments skopje, skin care, Babor Medical, aesthetic cosmetology skopje, professional facial treatments, cosmetic treatments";
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
            "name": locale.value === "mk" ? "Козметолошки третмани" : "Cosmetology Treatments",
            "description": seoDescription.value,
            "provider": { "@id": "https://babormedical.com/#organization" },
            "areaServed": { "@type": "City", "name": "Skopje" },
            "serviceType": "Cosmetology",
            "url": "https://babormedical.com/services/cosmetology"
          },
          {
            "@type": "WebPage",
            "name": seoTitle.value,
            "description": seoDescription.value,
            "url": "https://babormedical.com/services/cosmetology",
            "inLanguage": locale.value === "mk" ? "mk-MK" : "en",
            "isPartOf": { "@type": "WebSite", "url": "https://babormedical.com" }
          }
        ]
      });
    });
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ПРЕМИУМ ТРЕТМАНИ" : "PREMIUM TREATMENTS",
      title: props.pageTitle,
      subtitle: props.pageSubtitle
    }));
    const totalTreatments = computed(() => {
      var _a;
      return ((_a = props.categories) == null ? void 0 : _a.reduce((sum, cat) => {
        var _a2;
        return sum + (((_a2 = cat.items) == null ? void 0 : _a2.length) || 0);
      }, 0)) || 0;
    });
    const otherCategoryLink = computed(() => {
      if (props.parentType === "cosmetology") {
        return {
          href: "/services/laser-aesthetic",
          name: locale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments"
        };
      }
      return {
        href: "/services/cosmetology",
        name: locale.value === "mk" ? "Козметологија" : "Cosmetology"
      };
    });
    const treatments = computed(() => {
      if (!props.categories) return [];
      return props.categories.flatMap((cat) => cat.items || []);
    });
    const formatPrice = (item) => {
      if (item.price_from && item.price_to) {
        return `${Number(item.price_from).toLocaleString()} – ${Number(item.price_to).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      } else if (item.price_from) {
        return `${locale.value === "mk" ? "од" : "from"} ${Number(item.price_from).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      } else if (item.price) {
        return `${Number(item.price).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      }
      return null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-7fd19c11${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-7fd19c11${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-7fd19c11${_scopeId}><meta name="author" content="Babor Medical" data-v-7fd19c11${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-7fd19c11${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-7fd19c11${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-7fd19c11${_scopeId}><meta property="og:type" content="website" data-v-7fd19c11${_scopeId}><meta property="og:url" content="https://babormedical.com/services/cosmetology" data-v-7fd19c11${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-7fd19c11${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-7fd19c11${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-7fd19c11${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-7fd19c11${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-7fd19c11${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-7fd19c11${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-7fd19c11${_scopeId}><link rel="canonical" href="https://babormedical.com/services/cosmetology" data-v-7fd19c11${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/cosmetology?lang=en" data-v-7fd19c11${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/cosmetology?lang=mk" data-v-7fd19c11${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/cosmetology" data-v-7fd19c11${_scopeId}>`);
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
                content: "https://babormedical.com/services/cosmetology"
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
                href: "https://babormedical.com/services/cosmetology"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services/cosmetology?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services/cosmetology?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services/cosmetology"
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
      _push(`<div class="services-page" data-v-7fd19c11>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="services-hero" data-v-7fd19c11><div class="hero-bg" data-v-7fd19c11><div class="gradient-orb orb-1" data-v-7fd19c11></div><div class="gradient-orb orb-2" data-v-7fd19c11></div><div class="gradient-orb orb-3" data-v-7fd19c11></div></div><div class="container" data-v-7fd19c11><div class="hero-content" data-v-7fd19c11><span class="hero-badge fade-in-up" data-v-7fd19c11><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-7fd19c11><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" data-v-7fd19c11></path></svg> ${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title fade-in-up" data-v-7fd19c11>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle fade-in-up" data-v-7fd19c11>${ssrInterpolate(content.value.subtitle)}</p><div class="hero-stats fade-in-up" data-v-7fd19c11><div class="stat" data-v-7fd19c11><span class="stat-number" data-v-7fd19c11>${ssrInterpolate(totalTreatments.value)}+</span><span class="stat-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Третмани" : "Treatments")}</span></div><div class="stat-divider" data-v-7fd19c11></div><div class="stat" data-v-7fd19c11><span class="stat-number" data-v-7fd19c11>${ssrInterpolate(((_a = __props.categories) == null ? void 0 : _a.length) || 0)}</span><span class="stat-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Категории" : "Categories")}</span></div><div class="stat-divider" data-v-7fd19c11></div><div class="stat" data-v-7fd19c11><span class="stat-number" data-v-7fd19c11>10+</span><span class="stat-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Години" : "Years")}</span></div></div><a${ssrRenderAttr("href", otherCategoryLink.value.href)} class="other-category-link fade-in-up" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Погледни" : "View")} ${ssrInterpolate(otherCategoryLink.value.name)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-7fd19c11><path d="M5 12h14M12 5l7 7-7 7" data-v-7fd19c11></path></svg></a></div></div><div class="scroll-indicator" data-v-7fd19c11><div class="mouse" data-v-7fd19c11><div class="wheel" data-v-7fd19c11></div></div></div></section><section class="treatments-section" data-v-7fd19c11><div class="container" data-v-7fd19c11><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<div class="intro fade-in-up" data-v-7fd19c11>`);
        if (category.description) {
          _push(`<p class="intro-text" data-v-7fd19c11>${ssrInterpolate(category.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="protocol-box fade-in-up" data-v-7fd19c11><p class="protocol-title" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Секој третман започнува со:" : "Every treatment starts with:")}</p><ul class="protocol-list" data-v-7fd19c11><li data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "професионална анализа на кожата" : "professional skin analysis")}</li><li data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "структурирана консултација" : "structured consultation")}</li><li data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "индивидуален избор на активни состојки" : "individual selection of active ingredients")}</li><li data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "препорака за домашна нега" : "home care recommendation")}</li></ul><p class="protocol-note" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Работиме исклучиво со оригинални BABOR и DOCTOR BABOR формули, произведени во Германија според фармацевтски стандарди." : "We work exclusively with original BABOR and DOCTOR BABOR formulas, manufactured in Germany according to pharmaceutical standards.")}</p></div><div class="treatments-list" data-v-7fd19c11><!--[-->`);
      ssrRenderList(treatments.value, (item, idx) => {
        _push(`<article class="treatment fade-in-up" data-v-7fd19c11><div class="treatment-header" data-v-7fd19c11><span class="treatment-num" data-v-7fd19c11>${ssrInterpolate(idx + 1)}.</span><div data-v-7fd19c11><h2 class="treatment-name" data-v-7fd19c11>${ssrInterpolate(item.name)}</h2>`);
        if (item.subtitle) {
          _push(`<p class="treatment-subtitle" data-v-7fd19c11>${ssrInterpolate(item.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (item.description) {
          _push(`<div class="treatment-desc" data-v-7fd19c11>${item.description ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.includes) {
          _push(`<div class="treatment-section" data-v-7fd19c11><h3 class="section-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Вклучува:" : "Includes:")}</h3><div class="section-content" data-v-7fd19c11>${item.includes ?? ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.indications) {
          _push(`<div class="treatment-section" data-v-7fd19c11><h3 class="section-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Индикации:" : "Indications:")}</h3><div class="section-content" data-v-7fd19c11>${item.indications ?? ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.components) {
          _push(`<div class="treatment-section" data-v-7fd19c11><h3 class="section-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Активни компоненти:" : "Active components:")}</h3><div class="section-content" data-v-7fd19c11>${item.components ?? ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.effects) {
          _push(`<div class="treatment-section" data-v-7fd19c11><h3 class="section-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Дејство:" : "Effects:")}</h3><div class="section-content" data-v-7fd19c11>${item.effects ?? ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.suitable_for) {
          _push(`<div class="treatment-section" data-v-7fd19c11><h3 class="section-label" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Погоден за:" : "Suitable for:")}</h3><div class="section-content" data-v-7fd19c11>${item.suitable_for ?? ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.note) {
          _push(`<p class="treatment-note" data-v-7fd19c11>${item.note ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (formatPrice(item)) {
          _push(`<p class="treatment-price" data-v-7fd19c11>${ssrInterpolate(locale.value === "mk" ? "Цена" : "Price")}: ${ssrInterpolate(formatPrice(item))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/CategoryPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7fd19c11"]]);
export {
  CategoryPage as default
};
