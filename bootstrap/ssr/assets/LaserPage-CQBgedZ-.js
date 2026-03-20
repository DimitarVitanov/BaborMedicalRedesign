import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "LaserPage",
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
        return "Ласерски третмани и ласерска епилација Скопје | Babor Medical";
      }
      return "Laser Treatments & Laser Hair Removal Skopje | Babor Medical";
    });
    const seoDescription = computed(() => {
      if (locale.value === "mk") {
        return "Ласерска епилација и ласерски третмани во Скопје со Alma Soprano Titanium. Професионални ласерски третмани за лице и тело во Babor Medical.";
      }
      return "Laser hair removal and laser treatments in Skopje with Alma Soprano Titanium. Professional laser treatments for face and body at Babor Medical.";
    });
    const seoKeywords = computed(() => {
      if (locale.value === "mk") {
        return "ласерска епилација скопје, ласерски третмани скопје, Alma Soprano Titanium, ласерска епилација цена, ласер за лице, ласерско подмладување, Babor Medical, естетска медицина скопје, ласерска епилација лице, ласерска епилација тело, Ultraformer, Accent Prime, Alma Hybrid, ласер за пигментации";
      }
      return "laser hair removal skopje, laser treatments skopje, Alma Soprano Titanium, laser hair removal price, facial laser, laser rejuvenation, Babor Medical, aesthetic medicine skopje, laser hair removal face, laser hair removal body, Ultraformer, Accent Prime, Alma Hybrid, laser for pigmentation";
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
            "image": "https://babormedical.com/logo.webp",
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
            "name": locale.value === "mk" ? "Ласерска епилација" : "Laser Hair Removal",
            "description": locale.value === "mk" ? "Професионална ласерска епилација со Alma Soprano Titanium во Babor Medical Скопје. Безболна и трајна епилација за лице и тело." : "Professional laser hair removal with Alma Soprano Titanium at Babor Medical Skopje. Painless and permanent hair removal for face and body.",
            "provider": { "@id": "https://babormedical.com/#organization" },
            "areaServed": { "@type": "City", "name": "Skopje" },
            "serviceType": "Laser Hair Removal",
            "url": "https://babormedical.com/services/laser-aesthetic"
          },
          {
            "@type": "Service",
            "name": locale.value === "mk" ? "Ласерски третмани за лице" : "Laser Facial Treatments",
            "description": locale.value === "mk" ? "Ласерски третмани за подмладување, пигментации, розацеа и лузни со Alma Q, Alma Hybrid и Ultraformer во Babor Medical Скопје." : "Laser treatments for rejuvenation, pigmentation, rosacea and scars with Alma Q, Alma Hybrid and Ultraformer at Babor Medical Skopje.",
            "provider": { "@id": "https://babormedical.com/#organization" },
            "areaServed": { "@type": "City", "name": "Skopje" },
            "serviceType": "Laser Skin Treatment",
            "url": "https://babormedical.com/services/laser-aesthetic"
          },
          {
            "@type": "WebPage",
            "name": seoTitle.value,
            "description": seoDescription.value,
            "url": "https://babormedical.com/services/laser-aesthetic",
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
    const technologies = computed(() => {
      if (!props.categories) return [];
      return props.categories.flatMap((cat) => cat.items || []);
    });
    const treatmentAreas = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.treatment_areas) || [];
    });
    const approachStrategies = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.approach_strategies) || [];
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
            _push2(`<title data-v-d18621ed${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-d18621ed${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-d18621ed${_scopeId}><meta name="author" content="Babor Medical" data-v-d18621ed${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-d18621ed${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-d18621ed${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-d18621ed${_scopeId}><meta property="og:type" content="website" data-v-d18621ed${_scopeId}><meta property="og:url" content="https://babormedical.com/services/laser-aesthetic" data-v-d18621ed${_scopeId}><meta property="og:image" content="/logo.webp" data-v-d18621ed${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-d18621ed${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-d18621ed${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-d18621ed${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-d18621ed${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-d18621ed${_scopeId}><meta name="twitter:image" content="/logo.webp" data-v-d18621ed${_scopeId}><link rel="canonical" href="https://babormedical.com/services/laser-aesthetic" data-v-d18621ed${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/laser-aesthetic?lang=en" data-v-d18621ed${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/laser-aesthetic?lang=mk" data-v-d18621ed${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/laser-aesthetic" data-v-d18621ed${_scopeId}>`);
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
                content: "https://babormedical.com/services/laser-aesthetic"
              }),
              createVNode("meta", {
                property: "og:image",
                content: "/logo.webp"
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
                content: "/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/services/laser-aesthetic"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services/laser-aesthetic?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services/laser-aesthetic?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services/laser-aesthetic"
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
      _push(`<div class="laser-page" data-v-d18621ed>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="laser-hero" data-v-d18621ed><div class="hero-bg" data-v-d18621ed><div class="gradient-orb orb-1" data-v-d18621ed></div><div class="gradient-orb orb-2" data-v-d18621ed></div><div class="gradient-orb orb-3" data-v-d18621ed></div></div><div class="container" data-v-d18621ed><div class="hero-content" data-v-d18621ed><span class="hero-badge fade-in-up" data-v-d18621ed><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d18621ed><circle cx="12" cy="12" r="3" data-v-d18621ed></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" data-v-d18621ed></path></svg> ${ssrInterpolate(t("ЛАСЕРСКИ ТРЕТМАНИ", "LASER TREATMENTS"))}</span><h1 class="hero-title fade-in-up" data-v-d18621ed>${ssrInterpolate(__props.pageTitle)}</h1><p class="hero-subtitle fade-in-up" data-v-d18621ed>${ssrInterpolate(__props.pageSubtitle)}</p><div class="hero-stats fade-in-up" data-v-d18621ed><div class="stat" data-v-d18621ed><span class="stat-number" data-v-d18621ed>${ssrInterpolate(technologies.value.length)}</span><span class="stat-label" data-v-d18621ed>${ssrInterpolate(t("Технологии", "Technologies"))}</span></div><div class="stat-divider" data-v-d18621ed></div><div class="stat" data-v-d18621ed><span class="stat-number" data-v-d18621ed>7+</span><span class="stat-label" data-v-d18621ed>${ssrInterpolate(t("Индикации", "Indications"))}</span></div><div class="stat-divider" data-v-d18621ed></div><div class="stat" data-v-d18621ed><span class="stat-number" data-v-d18621ed>10+</span><span class="stat-label" data-v-d18621ed>${ssrInterpolate(t("Години", "Years"))}</span></div></div><a href="/services/cosmetology" class="other-category-link fade-in-up" data-v-d18621ed>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Козметологија", "Cosmetology"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d18621ed><path d="M5 12h14M12 5l7 7-7 7" data-v-d18621ed></path></svg></a></div></div><div class="scroll-indicator" data-v-d18621ed><div class="mouse" data-v-d18621ed><div class="wheel" data-v-d18621ed></div></div></div></section><section class="laser-content" data-v-d18621ed><div class="container" data-v-d18621ed>`);
      if (categoryDescription.value) {
        _push(`<div class="content-block fade-in-up" data-v-d18621ed><p class="intro-text" data-v-d18621ed>${ssrInterpolate(categoryDescription.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content-block fade-in-up" data-v-d18621ed><h2 class="block-title" data-v-d18621ed>${ssrInterpolate(t("Што третираме со ласерска технологија?", "What do we treat with laser technology?"))}</h2><ul class="styled-list" data-v-d18621ed><!--[-->`);
      ssrRenderList(treatmentAreas.value, (area) => {
        _push(`<li data-v-d18621ed>${ssrInterpolate(area)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="content-block fade-in-up" data-v-d18621ed><h2 class="block-title" data-v-d18621ed>${ssrInterpolate(t("Наши технологии", "Our Technologies"))}</h2><div class="tech-grid" data-v-d18621ed><!--[-->`);
      ssrRenderList(technologies.value, (tech) => {
        _push(`<div class="tech-card fade-in-up" data-v-d18621ed><h3 class="tech-name" data-v-d18621ed>${ssrInterpolate(tech.name)}</h3>`);
        if (tech.description) {
          _push(`<div class="tech-desc" data-v-d18621ed>${tech.description ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (tech.url) {
          _push(`<a${ssrRenderAttr("href", tech.url)} class="tech-link" data-v-d18621ed>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d18621ed><path d="M5 12h14M12 5l7 7-7 7" data-v-d18621ed></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="content-block fade-in-up" data-v-d18621ed><h2 class="block-title" data-v-d18621ed>${ssrInterpolate(t("Нашиот пристап – протокол наместо изолирана процедура", "Our approach – protocol instead of isolated procedure"))}</h2><p class="block-text" data-v-d18621ed>${ssrInterpolate(t("Во Babor Medical развиваме комбинирани стратегии:", "At Babor Medical we develop combined strategies:"))}</p><ul class="styled-list" data-v-d18621ed><!--[-->`);
      ssrRenderList(approachStrategies.value, (strategy) => {
        _push(`<li data-v-d18621ed>${ssrInterpolate(strategy)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-d18621ed>${ssrInterpolate(t("Целта не е само моментален ефект, туку долгорочна регенерација и стабилизација на кожата.", "The goal is not just an immediate effect, but long-term regeneration and stabilization of the skin."))}</p></div><div class="content-block fade-in-up" data-v-d18621ed><h2 class="block-title" data-v-d18621ed>${ssrInterpolate(t("Стручна проценка и безбедност", "Expert assessment and safety"))}</h2><p class="block-text" data-v-d18621ed>${ssrInterpolate(t("Секој третман започнува со детална проценка и структурирано интервју. Врз основа на клиничката слика се одредува:", "Every treatment starts with a detailed assessment and structured interview. Based on the clinical picture, the following is determined:"))}</p><ul class="styled-list" data-v-d18621ed><!--[-->`);
      ssrRenderList(assessmentPoints.value, (point) => {
        _push(`<li data-v-d18621ed>${ssrInterpolate(point)}</li>`);
      });
      _push(`<!--]--></ul><p class="block-note" data-v-d18621ed>${ssrInterpolate(t("Безбедноста, индивидуалниот пристап и природниот резултат се наш приоритет.", "Safety, individual approach and natural result are our priority."))}</p></div>`);
      if (__props.priceListPdf) {
        _push(`<div class="content-block fade-in-up pricing-block" data-v-d18621ed><h2 class="block-title" data-v-d18621ed>${ssrInterpolate(t("Ценовник", "Pricing"))}</h2><p class="block-text" data-v-d18621ed>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за ласерски третмани.", "View our complete price list for laser treatments."))}</p><div class="pdf-actions" data-v-d18621ed><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" class="pdf-btn" data-v-d18621ed><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-d18621ed><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-d18621ed></path><polyline points="14 2 14 8 20 8" data-v-d18621ed></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-d18621ed></line><line x1="16" y1="17" x2="8" y2="17" data-v-d18621ed></line><polyline points="10 9 9 9 8 9" data-v-d18621ed></polyline></svg> ${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="pdf-btn pdf-btn-secondary" data-v-d18621ed><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-d18621ed><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-d18621ed></path><polyline points="7 10 12 15 17 10" data-v-d18621ed></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-d18621ed></line></svg> ${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="closing-block fade-in-up" data-v-d18621ed><h2 class="closing-title" data-v-d18621ed>${ssrInterpolate(t("Ласерот е алатка. Протоколот е стратегија.", "The laser is a tool. The protocol is the strategy."))}</h2><p class="closing-text" data-v-d18621ed>${ssrInterpolate(t("Нашата цел е да создадеме стабилен, здрав и природен изглед преку внимателно планирани и персонализирани третмани.", "Our goal is to create a stable, healthy and natural look through carefully planned and personalized treatments."))}</p><a href="/contact" class="cta-btn" data-v-d18621ed>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d18621ed><path d="M5 12h14M12 5l7 7-7 7" data-v-d18621ed></path></svg></a></div></div></section><section class="seo-content" data-v-d18621ed><div class="container" data-v-d18621ed><h2 data-v-d18621ed>${ssrInterpolate(t("Ласерска епилација во Скопје – Babor Medical", "Laser Hair Removal in Skopje – Babor Medical"))}</h2><p data-v-d18621ed>${ssrInterpolate(t("Babor Medical е водечки центар за ласерска епилација во Скопје. Со најнапредната технологија Alma Soprano Titanium нудиме безболна и ефективна ласерска епилација за лице и тело, за жени и мажи. Нашите сертифицирани специјалисти обезбедуваат персонализиран пристап за секој пациент, со јасни резултати од првиот третман.", "Babor Medical is a leading center for laser hair removal in Skopje. With the most advanced Alma Soprano Titanium technology, we offer painless and effective laser hair removal for face and body, for women and men. Our certified specialists provide a personalized approach for each patient, with clear results from the first treatment."))}</p><h3 data-v-d18621ed>${ssrInterpolate(t("Зошто да изберете Babor Medical за ласерска епилација?", "Why choose Babor Medical for laser hair removal?"))}</h3><ul data-v-d18621ed><li data-v-d18621ed>${ssrInterpolate(t("Alma Soprano Titanium – златен стандард за ласерска епилација", "Alma Soprano Titanium – gold standard for laser hair removal"))}</li><li data-v-d18621ed>${ssrInterpolate(t("Безболна процедура со систем за ладење", "Painless procedure with cooling system"))}</li><li data-v-d18621ed>${ssrInterpolate(t("Ефективна за сите типови кожа и влакна", "Effective for all skin and hair types"))}</li><li data-v-d18621ed>${ssrInterpolate(t("Стручен тим со повеќегодишно искуство", "Expert team with years of experience"))}</li><li data-v-d18621ed>${ssrInterpolate(t("Третмани за лице, тело, бикини зона и цело тело", "Treatments for face, body, bikini area and full body"))}</li><li data-v-d18621ed>${ssrInterpolate(t("Поволни пакет цени за ласерска епилација", "Affordable package prices for laser hair removal"))}</li></ul><h3 data-v-d18621ed>${ssrInterpolate(t("Ласерски третмани за подмладување и регенерација", "Laser treatments for rejuvenation and regeneration"))}</h3><p data-v-d18621ed>${ssrInterpolate(t("Покрај ласерска епилација, во Babor Medical нудиме широк спектар на ласерски третмани за лице и тело: Alma Q за пигментации и тетоважи, Alma Hybrid за подмладување и ресурфејсинг, Ultraformer за лифтинг без операција, и Accent Prime за обликување на тело и стрии. Сите третмани се изведуваат со најсовремена опрема во Скопје.", "In addition to laser hair removal, at Babor Medical we offer a wide range of laser treatments for face and body: Alma Q for pigmentation and tattoos, Alma Hybrid for rejuvenation and resurfacing, Ultraformer for non-surgical lifting, and Accent Prime for body contouring and stretch marks. All treatments are performed with state-of-the-art equipment in Skopje."))}</p><h3 data-v-d18621ed>${ssrInterpolate(t("Повеќе за Alma Soprano Titanium", "More about Alma Soprano Titanium"))}</h3><p data-v-d18621ed>${ssrInterpolate(t("Прочитајте детално за нашиот Alma Soprano Titanium ласер – златниот стандард во ласерска епилација со три бранови должини во една сонда за безболно и трајно отстранување на влакна.", "Read in detail about our Alma Soprano Titanium laser – the gold standard in laser hair removal with three wavelengths in one probe for painless and permanent hair removal."))} <a href="/lasers/alma-soprano-titanium" class="seo-link" data-v-d18621ed>${ssrInterpolate(t("Alma Soprano Titanium – Ласерска Епилација", "Alma Soprano Titanium – Laser Hair Removal"))}</a></p></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/LaserPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LaserPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d18621ed"]]);
export {
  LaserPage as default
};
