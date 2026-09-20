import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-D2kxU4zH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Lasers",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Ласери и Опрема - Babor Medical" : "Lasers & Equipment - Babor Medical";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Запознајте се со нашата најсовремена ласерска технологија и медицинска опрема за естетски третмани." : "Discover our state-of-the-art laser technology and medical equipment for aesthetic treatments.";
    });
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ТЕХНОЛОГИЈА" : "TECHNOLOGY",
      title: locale.value === "mk" ? "Наши Ласери" : "Our Lasers",
      subtitle: locale.value === "mk" ? "Најсовремена технологија за извонредни резултати" : "State-of-the-art technology for exceptional results",
      viewDetails: locale.value === "mk" ? "Погледни детали" : "View Details"
    }));
    const jsonLd = computed(() => {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalBusiness",
            "@id": "https://babormedical.com/#organization",
            "name": "Babor Medical",
            "url": "https://babormedical.com",
            "logo": "https://babormedical.com/logo.webp"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои ласери ги користи Babor Medical?" : "What lasers does Babor Medical use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување и ресурфејсинг, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење." : "Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation and resurfacing, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Што е Alma Soprano Titanium?" : "What is Alma Soprano Titanium?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење." : "Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Што е Ultraformer лифтинг?" : "What is Ultraformer lifting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Ultraformer е HIFU (High Intensity Focused Ultrasound) технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција." : "Ultraformer is HIFU (High Intensity Focused Ultrasound) technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention."
                }
              }
            ]
          }
        ]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-70bab236${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-70bab236${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "ласери, ласерска епилација, Alma Soprano, естетска медицина, Babor Medical, Скопје" : "lasers, laser hair removal, Alma Soprano, aesthetic medicine, Babor Medical, Skopje")} data-v-70bab236${_scopeId}><meta name="robots" content="index, follow" data-v-70bab236${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-70bab236${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-70bab236${_scopeId}><meta property="og:type" content="website" data-v-70bab236${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-70bab236${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-70bab236${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-70bab236${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-70bab236${_scopeId}><link rel="canonical" href="https://babormedical.com/lasers" data-v-70bab236${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/lasers?lang=en" data-v-70bab236${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/lasers?lang=mk" data-v-70bab236${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/lasers" data-v-70bab236${_scopeId}>`);
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
                content: locale.value === "mk" ? "ласери, ласерска епилација, Alma Soprano, естетска медицина, Babor Medical, Скопје" : "lasers, laser hair removal, Alma Soprano, aesthetic medicine, Babor Medical, Skopje"
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
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:image",
                content: "https://babormedical.com/logo.webp"
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
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/lasers"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/lasers?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/lasers?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/lasers"
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
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="lasers-page" data-v-70bab236><section class="lasers-hero" data-v-70bab236><div class="container" data-v-70bab236><div class="hero-content fade-in-up" data-v-70bab236><span class="section-badge" data-v-70bab236>${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title" data-v-70bab236>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle" data-v-70bab236>${ssrInterpolate(content.value.subtitle)}</p></div></div><div class="hero-glow" data-v-70bab236></div></section><section class="equipment-section" data-v-70bab236><div class="container" data-v-70bab236><!--[-->`);
      ssrRenderList(__props.equipment, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "reverse": index % 2 === 1 }, "equipment-card fade-in-up"])}" style="${ssrRenderStyle({ "--delay": `${index * 0.1}s` })}" data-v-70bab236><div class="equipment-image" data-v-70bab236><picture data-v-70bab236>`);
        if (item.image_mobile_webp) {
          _push(`<source${ssrRenderAttr("srcset", "/storage/" + item.image_mobile_webp)} media="(max-width: 768px)" type="image/webp" data-v-70bab236>`);
        } else {
          _push(`<!---->`);
        }
        if (item.image_desktop_webp) {
          _push(`<source${ssrRenderAttr("srcset", "/storage/" + item.image_desktop_webp)} media="(min-width: 769px)" type="image/webp" data-v-70bab236>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", item.image ? "/storage/" + item.image : "/images/placeholder.webp")}${ssrRenderAttr("alt", item.title)} loading="lazy" data-v-70bab236></picture><div class="image-glow" data-v-70bab236></div></div><div class="equipment-content" data-v-70bab236><span class="equipment-category" data-v-70bab236>${ssrInterpolate(item.category)}</span><h2 class="equipment-title" data-v-70bab236>${ssrInterpolate(item.title)}</h2><p class="equipment-description" data-v-70bab236>${ssrInterpolate(item.description)}</p>`);
        if (item.slug) {
          _push(ssrRenderComponent(unref(Link), {
            href: `/lasers/${item.slug}`,
            class: "equipment-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(content.value.viewDetails)} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-70bab236${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-70bab236${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(toDisplayString(content.value.viewDetails) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section></main><section class="faq-section" data-v-70bab236><div class="container" data-v-70bab236><div class="faq-header fade-in-up" data-v-70bab236><h2 class="faq-title" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions")}</h2></div><div class="faq-grid" data-v-70bab236><div class="faq-item fade-in-up" data-v-70bab236><h3 class="faq-question" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Кои ласери ги користи Babor Medical?" : "What lasers does Babor Medical use?")}</h3><p class="faq-answer" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење." : "Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing.")}</p></div><div class="faq-item fade-in-up" data-v-70bab236><h3 class="faq-question" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Што е Alma Soprano Titanium?" : "What is Alma Soprano Titanium?")}</h3><p class="faq-answer" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење." : "Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system.")}</p></div><div class="faq-item fade-in-up" data-v-70bab236><h3 class="faq-question" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Што е Ultraformer лифтинг?" : "What is Ultraformer lifting?")}</h3><p class="faq-answer" data-v-70bab236>${ssrInterpolate(locale.value === "mk" ? "Ultraformer е HIFU технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција." : "Ultraformer is HIFU technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention.")}</p></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lasers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Lasers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70bab236"]]);
export {
  Lasers as default
};
