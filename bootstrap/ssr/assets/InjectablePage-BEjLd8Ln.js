import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DJ_FlRZp.js";
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
            "priceRange": "$$"
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
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои инјектибилни третмани ги нудите во Скопје?" : "What injectable treatments do you offer in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим." : "At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Дали филерите и ботоксот се безбедни?" : "Are fillers and botox safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност." : "Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку трае ефектот од филери и ботокс?" : "How long do fillers and botox last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години." : "Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку чини ботокс и филери во Скопје?" : "How much do botox and fillers cost in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933." : "Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933."
                }
              }
            ]
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
            _push2(`<title data-v-6952717b${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-6952717b${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-6952717b${_scopeId}><meta name="author" content="Babor Medical" data-v-6952717b${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-6952717b${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6952717b${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-6952717b${_scopeId}><meta property="og:type" content="website" data-v-6952717b${_scopeId}><meta property="og:url" content="https://babormedical.com/services/injectable-methods" data-v-6952717b${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-6952717b${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-6952717b${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-6952717b${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-6952717b${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6952717b${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-6952717b${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-6952717b${_scopeId}><link rel="canonical" href="https://babormedical.com/services/injectable-methods" data-v-6952717b${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/injectable-methods?lang=en" data-v-6952717b${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/injectable-methods?lang=mk" data-v-6952717b${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/injectable-methods" data-v-6952717b${_scopeId}>`);
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
      _push(`<div class="injectable-page" data-v-6952717b>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="injectable-hero" data-v-6952717b><div class="hero-bg" data-v-6952717b><div class="gradient-orb orb-1" data-v-6952717b></div><div class="gradient-orb orb-2" data-v-6952717b></div><div class="gradient-orb orb-3" data-v-6952717b></div></div><div class="container" data-v-6952717b><div class="hero-content" data-v-6952717b><span class="hero-badge fade-in-up" data-v-6952717b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6952717b><path d="M12 2v6M12 16v6" data-v-6952717b></path><path d="M9 8h6l-1 8H10L9 8z" data-v-6952717b></path><circle cx="12" cy="5" r="1" data-v-6952717b></circle></svg> ${ssrInterpolate(t("ИНЈЕКТБИЛНИ МЕТОДИ", "INJECTABLE METHODS"))}</span><h1 class="hero-title fade-in-up" data-v-6952717b>${ssrInterpolate(__props.pageTitle)}</h1><p class="hero-subtitle fade-in-up" data-v-6952717b>${ssrInterpolate(__props.pageSubtitle)}</p><div class="hero-stats fade-in-up" data-v-6952717b><div class="stat" data-v-6952717b><span class="stat-number" data-v-6952717b>${ssrInterpolate(treatments.value.length)}</span><span class="stat-label" data-v-6952717b>${ssrInterpolate(t("Методи", "Methods"))}</span></div><div class="stat-divider" data-v-6952717b></div><div class="stat" data-v-6952717b><span class="stat-number" data-v-6952717b>6+</span><span class="stat-label" data-v-6952717b>${ssrInterpolate(t("Протоколи", "Protocols"))}</span></div><div class="stat-divider" data-v-6952717b></div><div class="stat" data-v-6952717b><span class="stat-number" data-v-6952717b>10+</span><span class="stat-label" data-v-6952717b>${ssrInterpolate(t("Години", "Years"))}</span></div></div><a href="/services/cosmetology" class="other-category-link fade-in-up" data-v-6952717b>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Козметологија", "Cosmetology"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6952717b><path d="M5 12h14M12 5l7 7-7 7" data-v-6952717b></path></svg></a></div></div><div class="scroll-indicator" data-v-6952717b><div class="mouse" data-v-6952717b><div class="wheel" data-v-6952717b></div></div></div></section><section class="injectable-content" data-v-6952717b><div class="container" data-v-6952717b>`);
      if (categoryDescription.value) {
        _push(`<div class="content-block fade-in-up" data-v-6952717b><p class="intro-text" data-v-6952717b>${ssrInterpolate(categoryDescription.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content-block fade-in-up" data-v-6952717b><h2 class="block-title" data-v-6952717b>${ssrInterpolate(t("Што опфаќаат инјектбилните протоколи?", "What do injectable protocols cover?"))}</h2><ul class="styled-list" data-v-6952717b><!--[-->`);
      ssrRenderList(protocolAreas.value, (area) => {
        _push(`<li data-v-6952717b>${ssrInterpolate(area)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-6952717b>${ssrInterpolate(t("Секоја од овие категории има различна биолошка улога и различна индикација.", "Each of these categories has a different biological role and different indication."))}</p></div><div class="content-block fade-in-up" data-v-6952717b><h2 class="block-title" data-v-6952717b>${ssrInterpolate(t("Наши методи", "Our Methods"))}</h2><div class="tech-grid" data-v-6952717b><!--[-->`);
      ssrRenderList(treatments.value, (item) => {
        _push(`<div class="tech-card fade-in-up" data-v-6952717b><h3 class="tech-name" data-v-6952717b>${ssrInterpolate(item.name)}</h3>`);
        if (item.description) {
          _push(`<div class="tech-desc" data-v-6952717b>${item.description ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.url) {
          _push(`<a${ssrRenderAttr("href", item.url)} class="tech-link" data-v-6952717b>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6952717b><path d="M5 12h14M12 5l7 7-7 7" data-v-6952717b></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="content-block fade-in-up" data-v-6952717b><h2 class="block-title" data-v-6952717b>${ssrInterpolate(t("Протокол наместо изолирана процедура", "Protocol instead of isolated procedure"))}</h2><p class="block-text" data-v-6952717b>${ssrInterpolate(t("Во Babor Medical развиваме комбинирани стратегии како:", "At Babor Medical we develop combined strategies such as:"))}</p><ul class="styled-list" data-v-6952717b><!--[-->`);
      ssrRenderList(combinedStrategies.value, (strategy) => {
        _push(`<li data-v-6952717b>${ssrInterpolate(strategy)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-6952717b>${ssrInterpolate(t("Целта е долгорочна стабилност, природен изглед и постепена регенерација.", "The goal is long-term stability, natural look and gradual regeneration."))}</p></div><div class="content-block fade-in-up" data-v-6952717b><h2 class="block-title" data-v-6952717b>${ssrInterpolate(t("Индивидуална проценка", "Individual Assessment"))}</h2><p class="block-text" data-v-6952717b>${ssrInterpolate(t("Секој третман започнува со детална анализа на:", "Every treatment starts with a detailed analysis of:"))}</p><ul class="styled-list" data-v-6952717b><!--[-->`);
      ssrRenderList(assessmentPoints.value, (point) => {
        _push(`<li data-v-6952717b>${ssrInterpolate(point)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-6952717b>${ssrInterpolate(t("Врз основа на тоа се креира персонализиран план.", "Based on this, a personalized plan is created."))}</p></div>`);
      if (__props.priceListPdf) {
        _push(`<div class="content-block fade-in-up pricing-block" data-v-6952717b><h2 class="block-title" data-v-6952717b>${ssrInterpolate(t("Ценовник", "Pricing"))}</h2><p class="block-text" data-v-6952717b>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за инјектибилни третмани.", "View our complete price list for injectable treatments."))}</p><div class="pdf-actions" data-v-6952717b><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" class="pdf-btn" data-v-6952717b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-6952717b><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-6952717b></path><polyline points="14 2 14 8 20 8" data-v-6952717b></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-6952717b></line><line x1="16" y1="17" x2="8" y2="17" data-v-6952717b></line><polyline points="10 9 9 9 8 9" data-v-6952717b></polyline></svg> ${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="pdf-btn pdf-btn-secondary" data-v-6952717b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-6952717b><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-6952717b></path><polyline points="7 10 12 15 17 10" data-v-6952717b></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-6952717b></line></svg> ${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="closing-block fade-in-up" data-v-6952717b><h2 class="closing-title" data-v-6952717b>${ssrInterpolate(t("Природноста е наш приоритет", "Naturalness is our priority"))}</h2><p class="closing-text" data-v-6952717b>${ssrInterpolate(t("Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.", "Injectable methods are a powerful tool when applied with clinical logic and measure."))}</p><p class="closing-tagline" data-v-6952717b>${ssrInterpolate(t("Нашата стратегија е стабилизација, не претерување.", "Our strategy is stabilization, not excess."))}<br data-v-6952717b> ${ssrInterpolate(t("Регенерација, не маскирање.", "Regeneration, not masking."))}</p><a href="/contact" class="cta-btn" data-v-6952717b>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6952717b><path d="M5 12h14M12 5l7 7-7 7" data-v-6952717b></path></svg></a></div></div></section><section class="faq-section" data-v-6952717b><div class="container" data-v-6952717b><div class="faq-header fade-in-up" data-v-6952717b><h2 class="faq-title" data-v-6952717b>${ssrInterpolate(t("Најчесто поставувани прашања", "Frequently Asked Questions"))}</h2></div><div class="faq-grid" data-v-6952717b><div class="faq-item fade-in-up" data-v-6952717b><h3 class="faq-question" data-v-6952717b>${ssrInterpolate(t("Кои инјектибилни третмани ги нудите во Скопје?", "What injectable treatments do you offer in Skopje?"))}</h3><p class="faq-answer" data-v-6952717b>${ssrInterpolate(t("Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.", "At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team."))}</p></div><div class="faq-item fade-in-up" data-v-6952717b><h3 class="faq-question" data-v-6952717b>${ssrInterpolate(t("Дали филерите и ботоксот се безбедни?", "Are fillers and botox safe?"))}</h3><p class="faq-answer" data-v-6952717b>${ssrInterpolate(t("Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.", "Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols."))}</p></div><div class="faq-item fade-in-up" data-v-6952717b><h3 class="faq-question" data-v-6952717b>${ssrInterpolate(t("Колку трае ефектот од филери и ботокс?", "How long do fillers and botox last?"))}</h3><p class="faq-answer" data-v-6952717b>${ssrInterpolate(t("Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.", "Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years."))}</p></div><div class="faq-item fade-in-up" data-v-6952717b><h3 class="faq-question" data-v-6952717b>${ssrInterpolate(t("Колку чини ботокс и филери во Скопје?", "How much do botox and fillers cost in Skopje?"))}</h3><p class="faq-answer" data-v-6952717b>${ssrInterpolate(t("Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.", "Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933."))}</p></div></div></div></section>`);
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
const InjectablePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6952717b"]]);
export {
  InjectablePage as default
};
