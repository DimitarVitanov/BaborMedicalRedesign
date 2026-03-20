import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "LaserDetail",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    useScrollAnimation();
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "Alma Soprano Titanium – Ласерска Епилација Скопје | Babor Medical" : "Alma Soprano Titanium – Laser Hair Removal Skopje | Babor Medical";
      }
      return `${props.equipment.title} - Babor Medical`;
    });
    const seoDescription = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "Alma Soprano Titanium ласер за безболна ласерска епилација во Скопје. Три бранови должини, сите типови кожа и влакна. Златен стандард во ласерско отстранување на влакна – Babor Medical." : "Alma Soprano Titanium laser for painless laser hair removal in Skopje. Three wavelengths, all skin and hair types. Gold standard in laser hair removal – Babor Medical.";
      }
      return props.equipment.description;
    });
    const seoKeywords = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "alma soprano titanium, ласерска епилација, ласерска епилација скопје, безболна ласерска епилација, ласер за епилација, alma laser, soprano titanium, отстранување влакна, babor medical" : "alma soprano titanium, laser hair removal, laser hair removal skopje, painless laser hair removal, laser epilation, alma laser, soprano titanium, hair removal, babor medical";
      }
      return `${props.equipment.title}, laser, ласер, Babor Medical, ${props.equipment.category}`;
    });
    const jsonLd = computed(() => {
      const baseData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": seoTitle.value,
        "description": seoDescription.value,
        "url": `https://babormedical.com/lasers/${props.equipment.slug}`,
        "publisher": {
          "@type": "MedicalBusiness",
          "name": "Babor Medical",
          "image": "https://babormedical.com/logo.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Skopje",
            "addressCountry": "MK"
          }
        }
      };
      if (props.equipment.slug === "alma-soprano-titanium") {
        baseData["@type"] = "MedicalWebPage";
        baseData["about"] = {
          "@type": "MedicalProcedure",
          "name": locale.value === "mk" ? "Ласерска епилација со Alma Soprano Titanium" : "Laser Hair Removal with Alma Soprano Titanium",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "description": seoDescription.value,
          "howPerformed": locale.value === "mk" ? "Тројна бранова должина (755nm, 808nm, 1064nm) за третман на сите типови кожа и влакна" : "Triple wavelength (755nm, 808nm, 1064nm) for treatment of all skin and hair types",
          "bodyLocation": locale.value === "mk" ? "Лице и тело" : "Face and body"
        };
        baseData["mainEntity"] = {
          "@type": "Product",
          "name": "Alma Soprano Titanium",
          "brand": { "@type": "Brand", "name": "Alma Lasers" },
          "description": seoDescription.value,
          "category": locale.value === "mk" ? "Ласерска опрема за епилација" : "Laser hair removal equipment"
        };
      }
      return JSON.stringify(baseData);
    });
    const content = computed(() => ({
      backToLasers: locale.value === "mk" ? "← Назад кон ласери" : "← Back to Lasers",
      learnMore: locale.value === "mk" ? "Официјална страница" : "Official Website",
      contactUs: locale.value === "mk" ? "Контактирајте нè" : "Contact Us",
      contactDesc: locale.value === "mk" ? "Заинтересирани сте за овој третман? Контактирајте нè за консултација." : "Interested in this treatment? Contact us for a consultation."
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-33840b3f${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-33840b3f${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-33840b3f${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-33840b3f${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-33840b3f${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-33840b3f${_scopeId}><meta property="og:type" content="article" data-v-33840b3f${_scopeId}><meta property="og:url"${ssrRenderAttr("content", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-33840b3f${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.equipment.image ? "/storage/" + __props.equipment.image : "/logo.webp")} data-v-33840b3f${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-33840b3f${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-33840b3f${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-33840b3f${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-33840b3f${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-33840b3f${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", __props.equipment.image ? "/storage/" + __props.equipment.image : "/logo.webp")} data-v-33840b3f${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
            _push2(`<link rel="canonical"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-33840b3f${_scopeId}><link rel="alternate" hreflang="en"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}?lang=en`)} data-v-33840b3f${_scopeId}><link rel="alternate" hreflang="mk"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}?lang=mk`)} data-v-33840b3f${_scopeId}><link rel="alternate" hreflang="x-default"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-33840b3f${_scopeId}>`);
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
                name: "robots",
                content: "index, follow, max-image-preview:large, max-snippet:-1"
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
                content: "article"
              }),
              createVNode("meta", {
                property: "og:url",
                content: `https://babormedical.com/lasers/${__props.equipment.slug}`
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: __props.equipment.image ? "/storage/" + __props.equipment.image : "/logo.webp"
              }, null, 8, ["content"]),
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
                content: __props.equipment.image ? "/storage/" + __props.equipment.image : "/logo.webp"
              }, null, 8, ["content"]),
              (openBlock(), createBlock(resolveDynamicComponent("script"), {
                type: "application/ld+json",
                innerHTML: jsonLd.value
              }, null, 8, ["innerHTML"])),
              createVNode("link", {
                rel: "canonical",
                href: `https://babormedical.com/lasers/${__props.equipment.slug}`
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: `https://babormedical.com/lasers/${__props.equipment.slug}?lang=en`
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: `https://babormedical.com/lasers/${__props.equipment.slug}?lang=mk`
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: `https://babormedical.com/lasers/${__props.equipment.slug}`
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="laser-detail-page" data-v-33840b3f><section class="detail-hero" data-v-33840b3f><div class="container" data-v-33840b3f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/lasers",
        class: "back-link fade-in-up"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(content.value.backToLasers)}`);
          } else {
            return [
              createTextVNode(toDisplayString(content.value.backToLasers), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hero-grid" data-v-33840b3f><div class="hero-content fade-in-up" data-v-33840b3f><span class="equipment-category" data-v-33840b3f>${ssrInterpolate(__props.equipment.category)}</span><h1 class="hero-title" data-v-33840b3f>${ssrInterpolate(__props.equipment.title)}</h1><p class="hero-description" data-v-33840b3f>${ssrInterpolate(__props.equipment.description)}</p><div class="hero-actions" data-v-33840b3f>`);
      if (__props.equipment.link) {
        _push(`<a${ssrRenderAttr("href", __props.equipment.link)} target="_blank" class="btn-primary" data-v-33840b3f>${ssrInterpolate(content.value.learnMore)} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-33840b3f><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-33840b3f></path><polyline points="15 3 21 3 21 9" data-v-33840b3f></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-33840b3f></line></svg></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(content.value.contactUs)}`);
          } else {
            return [
              createTextVNode(toDisplayString(content.value.contactUs), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-image fade-in-up" style="${ssrRenderStyle({ "--delay": "0.2s" })}" data-v-33840b3f><picture data-v-33840b3f>`);
      if (__props.equipment.image_mobile_webp) {
        _push(`<source${ssrRenderAttr("srcset", "/storage/" + __props.equipment.image_mobile_webp)} media="(max-width: 768px)" type="image/webp" data-v-33840b3f>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.equipment.image_desktop_webp) {
        _push(`<source${ssrRenderAttr("srcset", "/storage/" + __props.equipment.image_desktop_webp)} media="(min-width: 769px)" type="image/webp" data-v-33840b3f>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", __props.equipment.image ? "/storage/" + __props.equipment.image : "/images/placeholder.webp")}${ssrRenderAttr("alt", __props.equipment.title)} data-v-33840b3f></picture><div class="image-glow" data-v-33840b3f></div></div></div></div></section>`);
      if (__props.equipment.detailed_description) {
        _push(`<section class="detail-content" data-v-33840b3f><div class="container" data-v-33840b3f><div class="content-wrapper fade-in-up" data-v-33840b3f><div class="prose-content" data-v-33840b3f>${__props.equipment.detailed_description ?? ""}</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.equipment.slug === "alma-soprano-titanium") {
        _push(`<section class="cross-link-section" data-v-33840b3f><div class="container" data-v-33840b3f><div class="cross-link-card fade-in-up" data-v-33840b3f><p class="cross-link-text" data-v-33840b3f>${ssrInterpolate(locale.value === "mk" ? "Видете ги сите наши ласерски третмани и цени за ласерска епилација во Скопје" : "See all our laser treatments and laser hair removal prices in Skopje")}</p>`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/services/laser-aesthetic",
          class: "cross-link-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(locale.value === "mk" ? "Ласерски третмани и ценовник →" : "Laser Treatments & Pricing →")}`);
            } else {
              return [
                createTextVNode(toDisplayString(locale.value === "mk" ? "Ласерски третмани и ценовник →" : "Laser Treatments & Pricing →"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="detail-cta" data-v-33840b3f><div class="container" data-v-33840b3f><div class="cta-card fade-in-up" data-v-33840b3f><h2 data-v-33840b3f>${ssrInterpolate(content.value.contactUs)}</h2><p data-v-33840b3f>${ssrInterpolate(content.value.contactDesc)}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(content.value.contactUs)} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-33840b3f${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-33840b3f${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(toDisplayString(content.value.contactUs) + " ", 1),
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
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LaserDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LaserDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33840b3f"]]);
export {
  LaserDetail as default
};
