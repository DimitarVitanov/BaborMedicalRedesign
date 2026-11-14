import { computed, ref, useId, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-Cf0EHO41.js";
import { P as PageHero } from "./PageHero-D52u8HZ6.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-T_gtoxyK.js";
import { S as ScrollWords } from "./ScrollWords-C_qmDd1u.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { M as Marquee } from "./Marquee-CyiQLmo3.js";
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
            "priceRange": "$$"
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
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку чини ласерска епилација во Скопје?" : "How much does laser hair removal cost in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933." : "Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Дали ласерската епилација е болна?" : "Is laser hair removal painful?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот." : "No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку третмани се потребни за трајно отстранување на влакна?" : "How many treatments are needed for permanent hair removal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно." : "Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кој ласер го користите за ласерска епилација?" : "Which laser do you use for hair removal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна." : "At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Каде се наоѓа Babor Medical во Скопје?" : "Where is Babor Medical located in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница на babormedical.com/contact." : "Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page at babormedical.com/contact."
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
    const pad = (n) => String(n).padStart(2, "0");
    const sentences = (text) => {
      const str = String(text || "").trim();
      const m = str.match(/^(.+?[.!?])\s+(\S[\s\S]*)$/);
      return m ? [m[1], m[2]] : [str];
    };
    const introParts = computed(() => sentences(categoryDescription.value));
    const techNames = computed(() => technologies.value.map((tech) => tech.name).filter(Boolean));
    const openFaq = ref(0);
    const toggleFaq = (i) => {
      openFaq.value = openFaq.value === i ? -1 : i;
    };
    const faqId = useId();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-7d3cbd26${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-7d3cbd26${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-7d3cbd26${_scopeId}><meta name="author" content="Babor Medical" data-v-7d3cbd26${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-7d3cbd26${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-7d3cbd26${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-7d3cbd26${_scopeId}><meta property="og:type" content="website" data-v-7d3cbd26${_scopeId}><meta property="og:url" content="https://babormedical.com/services/laser-aesthetic" data-v-7d3cbd26${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-7d3cbd26${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-7d3cbd26${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-7d3cbd26${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-7d3cbd26${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-7d3cbd26${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-7d3cbd26${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-7d3cbd26${_scopeId}><link rel="canonical" href="https://babormedical.com/services/laser-aesthetic" data-v-7d3cbd26${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/laser-aesthetic?lang=en" data-v-7d3cbd26${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/laser-aesthetic?lang=mk" data-v-7d3cbd26${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/laser-aesthetic" data-v-7d3cbd26${_scopeId}>`);
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageHero, {
              class: "lsr-hero",
              eyebrow: t("ЛАСЕРСКИ ТРЕТМАНИ", "LASER TREATMENTS"),
              title: __props.pageTitle,
              subtitle: __props.pageSubtitle,
              crumb: __props.pageTitle
            }, {
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="lsr-lens" aria-hidden="true" data-v-7d3cbd26${_scopeId2}><div class="lsr-lens__arch" data-v-7d3cbd26${_scopeId2}><span class="lsr-lens__grid" data-v-7d3cbd26${_scopeId2}></span><!--[-->`);
                  ssrRenderList(4, (n) => {
                    _push3(`<span class="lsr-lens__ring" style="${ssrRenderStyle({ "--n": n })}" data-v-7d3cbd26${_scopeId2}></span>`);
                  });
                  _push3(`<!--]--><span class="lsr-lens__sweep" data-v-7d3cbd26${_scopeId2}></span><span class="lsr-lens__beam" data-v-7d3cbd26${_scopeId2}></span><span class="lsr-lens__core" data-v-7d3cbd26${_scopeId2}></span>`);
                  if (techNames.value.length) {
                    _push3(`<ul class="lsr-lens__tags" data-v-7d3cbd26${_scopeId2}><!--[-->`);
                    ssrRenderList(techNames.value, (name) => {
                      _push3(`<li data-v-7d3cbd26${_scopeId2}>${ssrInterpolate(name)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "lsr-lens",
                      "aria-hidden": "true"
                    }, [
                      createVNode("div", { class: "lsr-lens__arch" }, [
                        createVNode("span", { class: "lsr-lens__grid" }),
                        (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                          return createVNode("span", {
                            key: n,
                            class: "lsr-lens__ring",
                            style: { "--n": n }
                          }, null, 4);
                        }), 64)),
                        createVNode("span", { class: "lsr-lens__sweep" }),
                        createVNode("span", { class: "lsr-lens__beam" }),
                        createVNode("span", { class: "lsr-lens__core" }),
                        techNames.value.length ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: "lsr-lens__tags"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(techNames.value, (name) => {
                            return openBlock(), createBlock("li", { key: name }, toDisplayString(name), 1);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="lsr-stats" data-v-7d3cbd26${_scopeId2}><div class="lsr-stat" data-v-7d3cbd26${_scopeId2}><span class="lsr-stat__num" data-v-7d3cbd26${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, {
                    value: technologies.value.length
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="lsr-stat__label" data-v-7d3cbd26${_scopeId2}>${ssrInterpolate(t("Технологии", "Technologies"))}</span></div><div class="lsr-stat" data-v-7d3cbd26${_scopeId2}><span class="lsr-stat__num" data-v-7d3cbd26${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "7+" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="lsr-stat__label" data-v-7d3cbd26${_scopeId2}>${ssrInterpolate(t("Индикации", "Indications"))}</span></div><div class="lsr-stat" data-v-7d3cbd26${_scopeId2}><span class="lsr-stat__num" data-v-7d3cbd26${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "10+" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="lsr-stat__label" data-v-7d3cbd26${_scopeId2}>${ssrInterpolate(t("Години", "Years"))}</span></div></div><a href="/services/cosmetology" class="bm-btn bm-btn--ghost bm-btn--sm lsr-hero__switch" data-v-7d3cbd26${_scopeId2}><span data-v-7d3cbd26${_scopeId2}>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Козметологија", "Cosmetology"))}</span>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-up-right",
                    size: 16,
                    stroke: 1.8
                  }, null, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("div", { class: "lsr-stats" }, [
                      createVNode("div", { class: "lsr-stat" }, [
                        createVNode("span", { class: "lsr-stat__num" }, [
                          createVNode(Counter, {
                            value: technologies.value.length
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Технологии", "Technologies")), 1)
                      ]),
                      createVNode("div", { class: "lsr-stat" }, [
                        createVNode("span", { class: "lsr-stat__num" }, [
                          createVNode(Counter, { value: "7+" })
                        ]),
                        createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Индикации", "Indications")), 1)
                      ]),
                      createVNode("div", { class: "lsr-stat" }, [
                        createVNode("span", { class: "lsr-stat__num" }, [
                          createVNode(Counter, { value: "10+" })
                        ]),
                        createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Години", "Years")), 1)
                      ])
                    ]),
                    createVNode("a", {
                      href: "/services/cosmetology",
                      class: "bm-btn bm-btn--ghost bm-btn--sm lsr-hero__switch"
                    }, [
                      createVNode("span", null, toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Козметологија", "Cosmetology")), 1),
                      createVNode(_sfc_main$2, {
                        name: "arrow-up-right",
                        size: 16,
                        stroke: 1.8
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="lsr-intro bm-cream bm-sheet bm-section" data-v-7d3cbd26${_scopeId}><div class="bm-container" data-v-7d3cbd26${_scopeId}>`);
            if (categoryDescription.value) {
              _push2(`<div class="lsr-intro__lead" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(ScrollWords, {
                text: introParts.value[0],
                tag: "p",
                class: "lsr-intro__statement"
              }, null, _parent2, _scopeId));
              if (introParts.value[1]) {
                _push2(`<div class="lsr-intro__rest" data-v-7d3cbd26${_scopeId}><span class="lsr-intro__mark" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "laser",
                  size: 22,
                  stroke: 1.3
                }, null, _parent2, _scopeId));
                _push2(`</span><p class="bm-lead bm-muted" data-reveal data-v-7d3cbd26${_scopeId}>${ssrInterpolate(introParts.value[1])}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="lsr-treat" data-v-7d3cbd26${_scopeId}><div class="lsr-treat__head" data-v-7d3cbd26${_scopeId}><h2 class="bm-h2 lsr-ital" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Што третираме со ласерска технологија?", "What do we treat with laser technology?")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><ol class="lsr-treat__list" data-v-7d3cbd26${_scopeId}><!--[-->`);
            ssrRenderList(treatmentAreas.value, (area, i) => {
              _push2(`<li class="lsr-treat__row" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.06}s` })}" data-v-7d3cbd26${_scopeId}><span class="lsr-treat__idx" aria-hidden="true" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="lsr-treat__name" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(area)}</span><span class="lsr-treat__mark" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "plus",
                size: 16,
                stroke: 1.6
              }, null, _parent2, _scopeId));
              _push2(`</span></li>`);
            });
            _push2(`<!--]--></ol></div></div></section><section class="lsr-tech bm-dark bm-grain bm-section" data-v-7d3cbd26${_scopeId}><div class="bm-columns-bg" aria-hidden="true" data-v-7d3cbd26${_scopeId}></div><div class="bm-container lsr-tech__inner" data-v-7d3cbd26${_scopeId}><div class="lsr-tech__head" data-v-7d3cbd26${_scopeId}><h2 class="bm-display lsr-ital" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Наши технологии", "Our Technologies")
            }, null, _parent2, _scopeId));
            _push2(`</h2><span class="lsr-tech__count bm-numeral" aria-hidden="true" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(pad(technologies.value.length))}</span></div><div class="lsr-tech__grid" data-v-7d3cbd26${_scopeId}><!--[-->`);
            ssrRenderList(technologies.value, (tech, i) => {
              _push2(`<article class="lsr-tcard" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.1}s` })}" data-v-7d3cbd26${_scopeId}><span class="lsr-tcard__beam" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span><div class="lsr-tcard__mark" aria-hidden="true" data-v-7d3cbd26${_scopeId}><span class="lsr-tcard__halo" data-v-7d3cbd26${_scopeId}></span><span class="lsr-tcard__halo" data-v-7d3cbd26${_scopeId}></span><span class="lsr-tcard__num bm-numeral" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(pad(i + 1))}</span></div><div class="lsr-tcard__body" data-v-7d3cbd26${_scopeId}><h3 class="lsr-tcard__name" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(tech.name)}</h3>`);
              if (tech.description) {
                _push2(`<div class="lsr-tcard__desc bm-prose" data-v-7d3cbd26${_scopeId}>${tech.description ?? ""}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (tech.url) {
                _push2(`<a${ssrRenderAttr("href", tech.url)} class="bm-link lsr-tcard__link" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} `);
                _push2(ssrRenderComponent(_sfc_main$2, { name: "arrow-right" }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></article>`);
            });
            _push2(`<!--]--></div></div></section>`);
            if (treatmentAreas.value.length || techNames.value.length) {
              _push2(`<div class="lsr-ribbons" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
              if (treatmentAreas.value.length) {
                _push2(ssrRenderComponent(Marquee, {
                  items: treatmentAreas.value,
                  variant: "wine",
                  tilt: -2.6,
                  duration: 70
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (techNames.value.length) {
                _push2(ssrRenderComponent(Marquee, {
                  items: techNames.value,
                  variant: "outline",
                  tilt: 2,
                  duration: 36,
                  reverse: ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="lsr-method bm-paper bm-sheet bm-section" data-v-7d3cbd26${_scopeId}><div class="bm-container" data-v-7d3cbd26${_scopeId}><div class="lsr-split" data-v-7d3cbd26${_scopeId}><div class="lsr-split__head" data-v-7d3cbd26${_scopeId}><span class="lsr-split__badge" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "sparkle",
              size: 26,
              stroke: 1.3
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="bm-h2 lsr-ital" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Нашиот пристап – протокол наместо изолирана процедура", "Our approach – protocol instead of isolated procedure")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="lsr-split__body" data-v-7d3cbd26${_scopeId}><p class="bm-lead lsr-split__intro" data-reveal data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Во Babor Medical развиваме комбинирани стратегии:", "At Babor Medical we develop combined strategies:"))}</p><ol class="lsr-steps" data-v-7d3cbd26${_scopeId}><!--[-->`);
            ssrRenderList(approachStrategies.value, (strategy, i) => {
              _push2(`<li class="lsr-step" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.08}s` })}" data-v-7d3cbd26${_scopeId}><span class="lsr-step__idx" aria-hidden="true" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="lsr-step__text" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(strategy)}</span></li>`);
            });
            _push2(`<!--]--></ol><p class="lsr-note" data-reveal data-v-7d3cbd26${_scopeId}><span class="lsr-note__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "star",
              size: 16,
              stroke: 1.6
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Целта не е само моментален ефект, туку долгорочна регенерација и стабилизација на кожата.", "The goal is not just an immediate effect, but long-term regeneration and stabilization of the skin."))}</span></p></div></div><div class="lsr-split lsr-split--safety" data-v-7d3cbd26${_scopeId}><div class="lsr-split__head" data-v-7d3cbd26${_scopeId}><span class="lsr-split__badge" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "shield",
              size: 26,
              stroke: 1.3
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="bm-h2 lsr-ital" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Стручна проценка и безбедност", "Expert assessment and safety")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="lsr-split__body" data-v-7d3cbd26${_scopeId}><p class="bm-lead lsr-split__intro" data-reveal data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Секој третман започнува со детална проценка и структурирано интервју. Врз основа на клиничката слика се одредува:", "Every treatment starts with a detailed assessment and structured interview. Based on the clinical picture, the following is determined:"))}</p><ul class="lsr-checks" data-v-7d3cbd26${_scopeId}><!--[-->`);
            ssrRenderList(assessmentPoints.value, (point, i) => {
              _push2(`<li class="lsr-check" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.08}s` })}" data-v-7d3cbd26${_scopeId}><span class="lsr-check__top" aria-hidden="true" data-v-7d3cbd26${_scopeId}><span class="lsr-check__icon" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "check",
                size: 16,
                stroke: 2
              }, null, _parent2, _scopeId));
              _push2(`</span><span class="lsr-check__idx" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(pad(i + 1))}</span></span><span class="lsr-check__text" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(point)}</span></li>`);
            });
            _push2(`<!--]--></ul><p class="lsr-note" data-reveal data-v-7d3cbd26${_scopeId}><span class="lsr-note__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "shield",
              size: 16,
              stroke: 1.6
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Безбедноста, индивидуалниот пристап и природниот резултат се наш приоритет.", "Safety, individual approach and natural result are our priority."))}</span></p></div></div>`);
            if (__props.priceListPdf) {
              _push2(`<div id="pricing" class="lsr-price bm-grain" data-reveal="scale" data-v-7d3cbd26${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}></span><span data-v-7d3cbd26${_scopeId}></span><span data-v-7d3cbd26${_scopeId}></span></div><div class="lsr-price__copy" data-v-7d3cbd26${_scopeId}><h2 class="bm-h2 lsr-ital lsr-price__title" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Ценовник", "Pricing")
              }, null, _parent2, _scopeId));
              _push2(`</h2><p class="bm-lead lsr-price__sub" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за ласерски третмани.", "View our complete price list for laser treatments."))}</p><div class="lsr-price__actions" data-v-7d3cbd26${_scopeId}><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" rel="noopener" class="bm-btn" data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</span><span class="bm-btn__icon" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "file",
                stroke: 1.8
              }, null, _parent2, _scopeId));
              _push2(`</span></a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="bm-btn bm-btn--ghost lsr-price__dl" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "download",
                size: 16,
                stroke: 1.8
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</span></a></div></div><div class="lsr-price__doc" aria-hidden="true" data-v-7d3cbd26${_scopeId}><span class="lsr-price__sheet lsr-price__sheet--back" data-v-7d3cbd26${_scopeId}></span><span class="lsr-price__sheet" data-v-7d3cbd26${_scopeId}><span class="lsr-price__sheet-head" data-v-7d3cbd26${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "laser",
                size: 18,
                stroke: 1.4
              }, null, _parent2, _scopeId));
              _push2(`</span><!--[-->`);
              ssrRenderList(6, (n) => {
                _push2(`<span class="lsr-price__line" data-v-7d3cbd26${_scopeId}></span>`);
              });
              _push2(`<!--]--></span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section class="lsr-cta bm-dark bm-grain" data-v-7d3cbd26${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}></span><span data-v-7d3cbd26${_scopeId}></span><span data-v-7d3cbd26${_scopeId}></span></div><div class="bm-container lsr-cta__inner" data-v-7d3cbd26${_scopeId}><h2 class="bm-h1 lsr-cta__title" data-v-7d3cbd26${_scopeId}><!--[-->`);
            ssrRenderList(sentences(t("Ласерот е алатка. Протоколот е стратегија.", "The laser is a tool. The protocol is the strategy.")), (part, i) => {
              _push2(`<!--[-->`);
              if (i) {
                _push2(`<br data-v-7d3cbd26${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: part,
                class: { "bm-accent": i },
                start: i * 4
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></h2><div class="lsr-cta__foot" data-v-7d3cbd26${_scopeId}><p class="bm-lead bm-muted" data-reveal data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Нашата цел е да создадеме стабилен, здрав и природен изглед преку внимателно планирани и персонализирани третмани.", "Our goal is to create a stable, healthy and natural look through carefully planned and personalized treatments."))}</p><a href="/contact" class="bm-btn" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))}</span><span class="bm-btn__icon" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span></a></div></div></section><section class="lsr-seo bm-cream bm-sheet bm-section" data-v-7d3cbd26${_scopeId}><div class="bm-container bm-container--narrow" data-v-7d3cbd26${_scopeId}><article class="lsr-seo__block" data-reveal data-v-7d3cbd26${_scopeId}><h2 class="lsr-seo__title" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Ласерска епилација во Скопје – Babor Medical", "Laser Hair Removal in Skopje – Babor Medical"))}</h2><p class="lsr-seo__text lsr-seo__text--drop" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Babor Medical е водечки центар за ласерска епилација во Скопје. Со најнапредната технологија Alma Soprano Titanium нудиме безболна и ефективна ласерска епилација за лице и тело, за жени и мажи. Нашите сертифицирани специјалисти обезбедуваат персонализиран пристап за секој пациент, со јасни резултати од првиот третман.", "Babor Medical is a leading center for laser hair removal in Skopje. With the most advanced Alma Soprano Titanium technology, we offer painless and effective laser hair removal for face and body, for women and men. Our certified specialists provide a personalized approach for each patient, with clear results from the first treatment."))}</p></article><article class="lsr-seo__block" data-reveal data-v-7d3cbd26${_scopeId}><h2 class="lsr-seo__title" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Зошто да изберете Babor Medical за ласерска епилација?", "Why choose Babor Medical for laser hair removal?"))}</h2><ul class="lsr-seo__checks" data-v-7d3cbd26${_scopeId}><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Alma Soprano Titanium – златен стандард за ласерска епилација", "Alma Soprano Titanium – gold standard for laser hair removal"))}</span></li><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Безболна процедура со систем за ладење", "Painless procedure with cooling system"))}</span></li><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Ефективна за сите типови кожа и влакна", "Effective for all skin and hair types"))}</span></li><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Стручен тим со повеќегодишно искуство", "Expert team with years of experience"))}</span></li><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Третмани за лице, тело, бикини зона и цело тело", "Treatments for face, body, bikini area and full body"))}</span></li><li data-v-7d3cbd26${_scopeId}><span class="lsr-seo__tick" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 13,
              stroke: 2.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Поволни пакет цени за ласерска епилација", "Affordable package prices for laser hair removal"))}</span></li></ul></article><article class="lsr-seo__block" data-reveal data-v-7d3cbd26${_scopeId}><h2 class="lsr-seo__title" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Ласерски третмани за подмладување и регенерација", "Laser treatments for rejuvenation and regeneration"))}</h2><p class="lsr-seo__text" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Покрај ласерска епилација, во Babor Medical нудиме широк спектар на ласерски третмани за лице и тело: Alma Q за пигментации и тетоважи, Alma Hybrid за подмладување и ресурфејсинг, Ultraformer за лифтинг без операција, и Accent Prime за обликување на тело и стрии. Сите третмани се изведуваат со најсовремена опрема во Скопје.", "In addition to laser hair removal, at Babor Medical we offer a wide range of laser treatments for face and body: Alma Q for pigmentation and tattoos, Alma Hybrid for rejuvenation and resurfacing, Ultraformer for non-surgical lifting, and Accent Prime for body contouring and stretch marks. All treatments are performed with state-of-the-art equipment in Skopje."))}</p></article><article class="lsr-seo__card" data-reveal data-v-7d3cbd26${_scopeId}><span class="lsr-seo__card-icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "laser",
              size: 26,
              stroke: 1.3
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="lsr-seo__card-body" data-v-7d3cbd26${_scopeId}><h2 class="lsr-seo__title" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Повеќе за Alma Soprano Titanium", "More about Alma Soprano Titanium"))}</h2><p class="lsr-seo__text" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Прочитајте детално за нашиот Alma Soprano Titanium ласер – златниот стандард во ласерска епилација со три бранови должини во една сонда за безболно и трајно отстранување на влакна.", "Read in detail about our Alma Soprano Titanium laser – the gold standard in laser hair removal with three wavelengths in one probe for painless and permanent hair removal."))}</p><a href="/lasers/alma-soprano-titanium" class="bm-link lsr-seo__link" data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Alma Soprano Titanium – Ласерска Епилација", "Alma Soprano Titanium – Laser Hair Removal"))}</span>`);
            _push2(ssrRenderComponent(_sfc_main$2, { name: "arrow-right" }, null, _parent2, _scopeId));
            _push2(`</a></div></article></div></section><section class="lsr-faq bm-paper bm-section" data-v-7d3cbd26${_scopeId}><div class="bm-container lsr-faq__grid" data-v-7d3cbd26${_scopeId}><div class="lsr-faq__head" data-v-7d3cbd26${_scopeId}><h2 class="bm-h2 lsr-ital" data-v-7d3cbd26${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead bm-muted lsr-faq__sub" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Одговори на најчестите прашања за ласерска епилација и ласерски третмани", "Answers to the most common questions about laser hair removal and laser treatments"))}</p></div><div class="bm-faq lsr-faq__list" data-reveal style="${ssrRenderStyle({ "--d": "0.1s" })}" data-v-7d3cbd26${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q0`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 0)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a0`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Колку чини ласерска епилација во Скопје?", "How much does laser hair removal cost in Skopje?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a0`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q0`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933.", "Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q1`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 1)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a1`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Дали ласерската епилација е болна?", "Is laser hair removal painful?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a1`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q1`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот.", "No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q2`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 2)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a2`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Колку третмани се потребни за трајно отстранување на влакна?", "How many treatments are needed for permanent hair removal?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a2`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q2`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно.", "Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 3 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q3`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 3)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a3`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Кој ласер го користите за ласерска епилација?", "Which laser do you use for hair removal?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a3`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q3`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна.", "At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 4 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q4`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 4)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a4`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Каде се наоѓа Babor Medical во Скопје?", "Where is Babor Medical located in Skopje?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a4`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q4`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница.", "Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 5 }, "bm-faq__item"])}" data-v-7d3cbd26${_scopeId}><h3 class="lsr-faq__h" data-v-7d3cbd26${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q5`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 5)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a5`)} data-v-7d3cbd26${_scopeId}><span data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Дали ласерската епилација е ефективна за сите типови кожа?", "Is laser hair removal effective for all skin types?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-7d3cbd26${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a5`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q5`)} data-v-7d3cbd26${_scopeId}><div data-v-7d3cbd26${_scopeId}><p data-v-7d3cbd26${_scopeId}>${ssrInterpolate(t("Да, Alma Soprano Titanium е ефективен за сите типови кожа (I-VI по Фицпатрик скала), вклучувајќи потемна кожа. Тројната бранова должина овозможува прилагодување на третманот за секој пациент.", "Yes, Alma Soprano Titanium is effective for all skin types (I-VI on the Fitzpatrick scale), including darker skin. The triple wavelength allows treatment customization for each patient."))}</p></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                class: "lsr-hero",
                eyebrow: t("ЛАСЕРСКИ ТРЕТМАНИ", "LASER TREATMENTS"),
                title: __props.pageTitle,
                subtitle: __props.pageSubtitle,
                crumb: __props.pageTitle
              }, {
                aside: withCtx(() => [
                  createVNode("div", {
                    class: "lsr-lens",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", { class: "lsr-lens__arch" }, [
                      createVNode("span", { class: "lsr-lens__grid" }),
                      (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                        return createVNode("span", {
                          key: n,
                          class: "lsr-lens__ring",
                          style: { "--n": n }
                        }, null, 4);
                      }), 64)),
                      createVNode("span", { class: "lsr-lens__sweep" }),
                      createVNode("span", { class: "lsr-lens__beam" }),
                      createVNode("span", { class: "lsr-lens__core" }),
                      techNames.value.length ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: "lsr-lens__tags"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(techNames.value, (name) => {
                          return openBlock(), createBlock("li", { key: name }, toDisplayString(name), 1);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "lsr-stats" }, [
                    createVNode("div", { class: "lsr-stat" }, [
                      createVNode("span", { class: "lsr-stat__num" }, [
                        createVNode(Counter, {
                          value: technologies.value.length
                        }, null, 8, ["value"])
                      ]),
                      createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Технологии", "Technologies")), 1)
                    ]),
                    createVNode("div", { class: "lsr-stat" }, [
                      createVNode("span", { class: "lsr-stat__num" }, [
                        createVNode(Counter, { value: "7+" })
                      ]),
                      createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Индикации", "Indications")), 1)
                    ]),
                    createVNode("div", { class: "lsr-stat" }, [
                      createVNode("span", { class: "lsr-stat__num" }, [
                        createVNode(Counter, { value: "10+" })
                      ]),
                      createVNode("span", { class: "lsr-stat__label" }, toDisplayString(t("Години", "Years")), 1)
                    ])
                  ]),
                  createVNode("a", {
                    href: "/services/cosmetology",
                    class: "bm-btn bm-btn--ghost bm-btn--sm lsr-hero__switch"
                  }, [
                    createVNode("span", null, toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Козметологија", "Cosmetology")), 1),
                    createVNode(_sfc_main$2, {
                      name: "arrow-up-right",
                      size: 16,
                      stroke: 1.8
                    })
                  ])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "subtitle", "crumb"]),
              createVNode("section", { class: "lsr-intro bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container" }, [
                  categoryDescription.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "lsr-intro__lead"
                  }, [
                    createVNode(ScrollWords, {
                      text: introParts.value[0],
                      tag: "p",
                      class: "lsr-intro__statement"
                    }, null, 8, ["text"]),
                    introParts.value[1] ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "lsr-intro__rest"
                    }, [
                      createVNode("span", {
                        class: "lsr-intro__mark",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "laser",
                          size: 22,
                          stroke: 1.3
                        })
                      ]),
                      createVNode("p", {
                        class: "bm-lead bm-muted",
                        "data-reveal": ""
                      }, toDisplayString(introParts.value[1]), 1)
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "lsr-treat" }, [
                    createVNode("div", { class: "lsr-treat__head" }, [
                      createVNode("h2", { class: "bm-h2 lsr-ital" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Што третираме со ласерска технологија?", "What do we treat with laser technology?")
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("ol", { class: "lsr-treat__list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(treatmentAreas.value, (area, i) => {
                        return openBlock(), createBlock("li", {
                          key: area,
                          class: "lsr-treat__row",
                          "data-reveal": "",
                          style: { "--d": `${i * 0.06}s` }
                        }, [
                          createVNode("span", {
                            class: "lsr-treat__idx",
                            "aria-hidden": "true"
                          }, toDisplayString(pad(i + 1)), 1),
                          createVNode("span", { class: "lsr-treat__name" }, toDisplayString(area), 1),
                          createVNode("span", {
                            class: "lsr-treat__mark",
                            "aria-hidden": "true"
                          }, [
                            createVNode(_sfc_main$2, {
                              name: "plus",
                              size: 16,
                              stroke: 1.6
                            })
                          ])
                        ], 4);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "lsr-tech bm-dark bm-grain bm-section" }, [
                createVNode("div", {
                  class: "bm-columns-bg",
                  "aria-hidden": "true"
                }),
                createVNode("div", { class: "bm-container lsr-tech__inner" }, [
                  createVNode("div", { class: "lsr-tech__head" }, [
                    createVNode("h2", { class: "bm-display lsr-ital" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Наши технологии", "Our Technologies")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("span", {
                      class: "lsr-tech__count bm-numeral",
                      "aria-hidden": "true"
                    }, toDisplayString(pad(technologies.value.length)), 1)
                  ]),
                  createVNode("div", { class: "lsr-tech__grid" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(technologies.value, (tech, i) => {
                      return openBlock(), createBlock("article", {
                        key: tech.id,
                        class: "lsr-tcard",
                        "data-reveal": "",
                        style: { "--d": `${i * 0.1}s` }
                      }, [
                        createVNode("span", {
                          class: "lsr-tcard__beam",
                          "aria-hidden": "true"
                        }),
                        createVNode("div", {
                          class: "lsr-tcard__mark",
                          "aria-hidden": "true"
                        }, [
                          createVNode("span", { class: "lsr-tcard__halo" }),
                          createVNode("span", { class: "lsr-tcard__halo" }),
                          createVNode("span", { class: "lsr-tcard__num bm-numeral" }, toDisplayString(pad(i + 1)), 1)
                        ]),
                        createVNode("div", { class: "lsr-tcard__body" }, [
                          createVNode("h3", { class: "lsr-tcard__name" }, toDisplayString(tech.name), 1),
                          tech.description ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "lsr-tcard__desc bm-prose",
                            innerHTML: tech.description
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          tech.url ? (openBlock(), createBlock("a", {
                            key: 1,
                            href: tech.url,
                            class: "bm-link lsr-tcard__link"
                          }, [
                            createTextVNode(toDisplayString(t("Прочитај повеќе", "Learn more")) + " ", 1),
                            createVNode(_sfc_main$2, { name: "arrow-right" })
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ], 4);
                    }), 128))
                  ])
                ])
              ]),
              treatmentAreas.value.length || techNames.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "lsr-ribbons",
                "aria-hidden": "true"
              }, [
                treatmentAreas.value.length ? (openBlock(), createBlock(Marquee, {
                  key: 0,
                  items: treatmentAreas.value,
                  variant: "wine",
                  tilt: -2.6,
                  duration: 70
                }, null, 8, ["items"])) : createCommentVNode("", true),
                techNames.value.length ? (openBlock(), createBlock(Marquee, {
                  key: 1,
                  items: techNames.value,
                  variant: "outline",
                  tilt: 2,
                  duration: 36,
                  reverse: ""
                }, null, 8, ["items"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("section", { class: "lsr-method bm-paper bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("div", { class: "lsr-split" }, [
                    createVNode("div", { class: "lsr-split__head" }, [
                      createVNode("span", {
                        class: "lsr-split__badge",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "sparkle",
                          size: 26,
                          stroke: 1.3
                        })
                      ]),
                      createVNode("h2", { class: "bm-h2 lsr-ital" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Нашиот пристап – протокол наместо изолирана процедура", "Our approach – protocol instead of isolated procedure")
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("div", { class: "lsr-split__body" }, [
                      createVNode("p", {
                        class: "bm-lead lsr-split__intro",
                        "data-reveal": ""
                      }, toDisplayString(t("Во Babor Medical развиваме комбинирани стратегии:", "At Babor Medical we develop combined strategies:")), 1),
                      createVNode("ol", { class: "lsr-steps" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(approachStrategies.value, (strategy, i) => {
                          return openBlock(), createBlock("li", {
                            key: strategy,
                            class: "lsr-step",
                            "data-reveal": "",
                            style: { "--d": `${i * 0.08}s` }
                          }, [
                            createVNode("span", {
                              class: "lsr-step__idx",
                              "aria-hidden": "true"
                            }, toDisplayString(pad(i + 1)), 1),
                            createVNode("span", { class: "lsr-step__text" }, toDisplayString(strategy), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("p", {
                        class: "lsr-note",
                        "data-reveal": ""
                      }, [
                        createVNode("span", {
                          class: "lsr-note__icon",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "star",
                            size: 16,
                            stroke: 1.6
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Целта не е само моментален ефект, туку долгорочна регенерација и стабилизација на кожата.", "The goal is not just an immediate effect, but long-term regeneration and stabilization of the skin.")), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lsr-split lsr-split--safety" }, [
                    createVNode("div", { class: "lsr-split__head" }, [
                      createVNode("span", {
                        class: "lsr-split__badge",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "shield",
                          size: 26,
                          stroke: 1.3
                        })
                      ]),
                      createVNode("h2", { class: "bm-h2 lsr-ital" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Стручна проценка и безбедност", "Expert assessment and safety")
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("div", { class: "lsr-split__body" }, [
                      createVNode("p", {
                        class: "bm-lead lsr-split__intro",
                        "data-reveal": ""
                      }, toDisplayString(t("Секој третман започнува со детална проценка и структурирано интервју. Врз основа на клиничката слика се одредува:", "Every treatment starts with a detailed assessment and structured interview. Based on the clinical picture, the following is determined:")), 1),
                      createVNode("ul", { class: "lsr-checks" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(assessmentPoints.value, (point, i) => {
                          return openBlock(), createBlock("li", {
                            key: point,
                            class: "lsr-check",
                            "data-reveal": "",
                            style: { "--d": `${i * 0.08}s` }
                          }, [
                            createVNode("span", {
                              class: "lsr-check__top",
                              "aria-hidden": "true"
                            }, [
                              createVNode("span", { class: "lsr-check__icon" }, [
                                createVNode(_sfc_main$2, {
                                  name: "check",
                                  size: 16,
                                  stroke: 2
                                })
                              ]),
                              createVNode("span", { class: "lsr-check__idx" }, toDisplayString(pad(i + 1)), 1)
                            ]),
                            createVNode("span", { class: "lsr-check__text" }, toDisplayString(point), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("p", {
                        class: "lsr-note",
                        "data-reveal": ""
                      }, [
                        createVNode("span", {
                          class: "lsr-note__icon",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "shield",
                            size: 16,
                            stroke: 1.6
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Безбедноста, индивидуалниот пристап и природниот резултат се наш приоритет.", "Safety, individual approach and natural result are our priority.")), 1)
                      ])
                    ])
                  ]),
                  __props.priceListPdf ? (openBlock(), createBlock("div", {
                    key: 0,
                    id: "pricing",
                    class: "lsr-price bm-grain",
                    "data-reveal": "scale"
                  }, [
                    createVNode("div", {
                      class: "bm-aura",
                      "aria-hidden": "true"
                    }, [
                      createVNode("span"),
                      createVNode("span"),
                      createVNode("span")
                    ]),
                    createVNode("div", { class: "lsr-price__copy" }, [
                      createVNode("h2", { class: "bm-h2 lsr-ital lsr-price__title" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Ценовник", "Pricing")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("p", { class: "bm-lead lsr-price__sub" }, toDisplayString(t("Погледнете го нашиот комплетен ценовник за ласерски третмани.", "View our complete price list for laser treatments.")), 1),
                      createVNode("div", { class: "lsr-price__actions" }, [
                        createVNode("a", {
                          href: __props.priceListPdf,
                          target: "_blank",
                          rel: "noopener",
                          class: "bm-btn"
                        }, [
                          createVNode("span", null, toDisplayString(t("Отвори ценовник (PDF)", "View Price List (PDF)")), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "file",
                              stroke: 1.8
                            })
                          ])
                        ], 8, ["href"]),
                        createVNode("a", {
                          href: __props.priceListPdf,
                          download: "",
                          class: "bm-btn bm-btn--ghost lsr-price__dl"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "download",
                            size: 16,
                            stroke: 1.8
                          }),
                          createVNode("span", null, toDisplayString(t("Преземи ценовник", "Download Price List")), 1)
                        ], 8, ["href"])
                      ])
                    ]),
                    createVNode("div", {
                      class: "lsr-price__doc",
                      "aria-hidden": "true"
                    }, [
                      createVNode("span", { class: "lsr-price__sheet lsr-price__sheet--back" }),
                      createVNode("span", { class: "lsr-price__sheet" }, [
                        createVNode("span", { class: "lsr-price__sheet-head" }, [
                          createVNode(_sfc_main$2, {
                            name: "laser",
                            size: 18,
                            stroke: 1.4
                          })
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(6, (n) => {
                          return createVNode("span", {
                            key: n,
                            class: "lsr-price__line"
                          });
                        }), 64))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("section", { class: "lsr-cta bm-dark bm-grain" }, [
                createVNode("div", {
                  class: "bm-aura",
                  "aria-hidden": "true"
                }, [
                  createVNode("span"),
                  createVNode("span"),
                  createVNode("span")
                ]),
                createVNode("div", { class: "bm-container lsr-cta__inner" }, [
                  createVNode("h2", { class: "bm-h1 lsr-cta__title" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(sentences(t("Ласерот е алатка. Протоколот е стратегија.", "The laser is a tool. The protocol is the strategy.")), (part, i) => {
                      return openBlock(), createBlock(Fragment, { key: i }, [
                        i ? (openBlock(), createBlock("br", { key: 0 })) : createCommentVNode("", true),
                        createVNode(_sfc_main$3, {
                          text: part,
                          class: { "bm-accent": i },
                          start: i * 4
                        }, null, 8, ["text", "class", "start"])
                      ], 64);
                    }), 128))
                  ]),
                  createVNode("div", { class: "lsr-cta__foot" }, [
                    createVNode("p", {
                      class: "bm-lead bm-muted",
                      "data-reveal": ""
                    }, toDisplayString(t("Нашата цел е да создадеме стабилен, здрав и природен изглед преку внимателно планирани и персонализирани третмани.", "Our goal is to create a stable, healthy and natural look through carefully planned and personalized treatments.")), 1),
                    createVNode("a", {
                      href: "/contact",
                      class: "bm-btn",
                      "data-reveal": "",
                      style: { "--d": "0.15s" }
                    }, [
                      createVNode("span", null, toDisplayString(t("Закажи консултација", "Book a consultation")), 1),
                      createVNode("span", { class: "bm-btn__icon" }, [
                        createVNode(_sfc_main$2, {
                          name: "arrow-right",
                          stroke: 2
                        })
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "lsr-seo bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container bm-container--narrow" }, [
                  createVNode("article", {
                    class: "lsr-seo__block",
                    "data-reveal": ""
                  }, [
                    createVNode("h2", { class: "lsr-seo__title" }, toDisplayString(t("Ласерска епилација во Скопје – Babor Medical", "Laser Hair Removal in Skopje – Babor Medical")), 1),
                    createVNode("p", { class: "lsr-seo__text lsr-seo__text--drop" }, toDisplayString(t("Babor Medical е водечки центар за ласерска епилација во Скопје. Со најнапредната технологија Alma Soprano Titanium нудиме безболна и ефективна ласерска епилација за лице и тело, за жени и мажи. Нашите сертифицирани специјалисти обезбедуваат персонализиран пристап за секој пациент, со јасни резултати од првиот третман.", "Babor Medical is a leading center for laser hair removal in Skopje. With the most advanced Alma Soprano Titanium technology, we offer painless and effective laser hair removal for face and body, for women and men. Our certified specialists provide a personalized approach for each patient, with clear results from the first treatment.")), 1)
                  ]),
                  createVNode("article", {
                    class: "lsr-seo__block",
                    "data-reveal": ""
                  }, [
                    createVNode("h2", { class: "lsr-seo__title" }, toDisplayString(t("Зошто да изберете Babor Medical за ласерска епилација?", "Why choose Babor Medical for laser hair removal?")), 1),
                    createVNode("ul", { class: "lsr-seo__checks" }, [
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Alma Soprano Titanium – златен стандард за ласерска епилација", "Alma Soprano Titanium – gold standard for laser hair removal")), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Безболна процедура со систем за ладење", "Painless procedure with cooling system")), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Ефективна за сите типови кожа и влакна", "Effective for all skin and hair types")), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Стручен тим со повеќегодишно искуство", "Expert team with years of experience")), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Третмани за лице, тело, бикини зона и цело тело", "Treatments for face, body, bikini area and full body")), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", {
                          class: "lsr-seo__tick",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "check",
                            size: 13,
                            stroke: 2.2
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Поволни пакет цени за ласерска епилација", "Affordable package prices for laser hair removal")), 1)
                      ])
                    ])
                  ]),
                  createVNode("article", {
                    class: "lsr-seo__block",
                    "data-reveal": ""
                  }, [
                    createVNode("h2", { class: "lsr-seo__title" }, toDisplayString(t("Ласерски третмани за подмладување и регенерација", "Laser treatments for rejuvenation and regeneration")), 1),
                    createVNode("p", { class: "lsr-seo__text" }, toDisplayString(t("Покрај ласерска епилација, во Babor Medical нудиме широк спектар на ласерски третмани за лице и тело: Alma Q за пигментации и тетоважи, Alma Hybrid за подмладување и ресурфејсинг, Ultraformer за лифтинг без операција, и Accent Prime за обликување на тело и стрии. Сите третмани се изведуваат со најсовремена опрема во Скопје.", "In addition to laser hair removal, at Babor Medical we offer a wide range of laser treatments for face and body: Alma Q for pigmentation and tattoos, Alma Hybrid for rejuvenation and resurfacing, Ultraformer for non-surgical lifting, and Accent Prime for body contouring and stretch marks. All treatments are performed with state-of-the-art equipment in Skopje.")), 1)
                  ]),
                  createVNode("article", {
                    class: "lsr-seo__card",
                    "data-reveal": ""
                  }, [
                    createVNode("span", {
                      class: "lsr-seo__card-icon",
                      "aria-hidden": "true"
                    }, [
                      createVNode(_sfc_main$2, {
                        name: "laser",
                        size: 26,
                        stroke: 1.3
                      })
                    ]),
                    createVNode("div", { class: "lsr-seo__card-body" }, [
                      createVNode("h2", { class: "lsr-seo__title" }, toDisplayString(t("Повеќе за Alma Soprano Titanium", "More about Alma Soprano Titanium")), 1),
                      createVNode("p", { class: "lsr-seo__text" }, toDisplayString(t("Прочитајте детално за нашиот Alma Soprano Titanium ласер – златниот стандард во ласерска епилација со три бранови должини во една сонда за безболно и трајно отстранување на влакна.", "Read in detail about our Alma Soprano Titanium laser – the gold standard in laser hair removal with three wavelengths in one probe for painless and permanent hair removal.")), 1),
                      createVNode("a", {
                        href: "/lasers/alma-soprano-titanium",
                        class: "bm-link lsr-seo__link"
                      }, [
                        createVNode("span", null, toDisplayString(t("Alma Soprano Titanium – Ласерска Епилација", "Alma Soprano Titanium – Laser Hair Removal")), 1),
                        createVNode(_sfc_main$2, { name: "arrow-right" })
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "lsr-faq bm-paper bm-section" }, [
                createVNode("div", { class: "bm-container lsr-faq__grid" }, [
                  createVNode("div", { class: "lsr-faq__head" }, [
                    createVNode("h2", { class: "bm-h2 lsr-ital" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("p", {
                      class: "bm-lead bm-muted lsr-faq__sub",
                      "data-reveal": "",
                      style: { "--d": "0.15s" }
                    }, toDisplayString(t("Одговори на најчестите прашања за ласерска епилација и ласерски третмани", "Answers to the most common questions about laser hair removal and laser treatments")), 1)
                  ]),
                  createVNode("div", {
                    class: "bm-faq lsr-faq__list",
                    "data-reveal": "",
                    style: { "--d": "0.1s" }
                  }, [
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q0`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 0,
                          "aria-controls": `${unref(faqId)}-a0`,
                          onClick: ($event) => toggleFaq(0)
                        }, [
                          createVNode("span", null, toDisplayString(t("Колку чини ласерска епилација во Скопје?", "How much does laser hair removal cost in Skopje?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a0`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q0`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Цените за ласерска епилација во Babor Medical Скопје зависат од зоната на третман. Нудиме поволни пакет цени за повеќе третмани. За детален ценовник посетете ја нашата страница или контактирајте нè на +389 75 340 933.", "Laser hair removal prices at Babor Medical Skopje depend on the treatment area. We offer affordable package prices for multiple treatments. For a detailed price list, visit our page or contact us at +389 75 340 933.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q1`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 1,
                          "aria-controls": `${unref(faqId)}-a1`,
                          onClick: ($event) => toggleFaq(1)
                        }, [
                          createVNode("span", null, toDisplayString(t("Дали ласерската епилација е болна?", "Is laser hair removal painful?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a1`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q1`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Не, ласерската епилација со Alma Soprano Titanium е практично безболна. Апаратот користи ICE Plus систем за ладење кој ја заштитува кожата и обезбедува комфорт за време на третманот.", "No, laser hair removal with Alma Soprano Titanium is virtually painless. The device uses an ICE Plus cooling system that protects the skin and ensures comfort during treatment.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q2`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 2,
                          "aria-controls": `${unref(faqId)}-a2`,
                          onClick: ($event) => toggleFaq(2)
                        }, [
                          createVNode("span", null, toDisplayString(t("Колку третмани се потребни за трајно отстранување на влакна?", "How many treatments are needed for permanent hair removal?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a2`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q2`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Обично се потребни 6-8 третмани на растојание од 4-6 недели за оптимални резултати. Бројот на третмани зависи од зоната, типот на влакна и кожата. По завршување на циклусот, одржувачки третмани се препорачуваат 1-2 пати годишно.", "Usually 6-8 treatments at 4-6 week intervals are needed for optimal results. The number of treatments depends on the area, hair type and skin. After completing the cycle, maintenance treatments are recommended 1-2 times a year.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 3 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q3`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 3,
                          "aria-controls": `${unref(faqId)}-a3`,
                          onClick: ($event) => toggleFaq(3)
                        }, [
                          createVNode("span", null, toDisplayString(t("Кој ласер го користите за ласерска епилација?", "Which laser do you use for hair removal?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a3`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q3`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Во Babor Medical користиме Alma Soprano Titanium – златен стандард во ласерска епилација. Тој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда за ефективен третман на сите типови кожа и влакна.", "At Babor Medical we use Alma Soprano Titanium – the gold standard in laser hair removal. It combines three wavelengths (755nm, 810nm, 1064nm) in one probe for effective treatment of all skin and hair types.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 4 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q4`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 4,
                          "aria-controls": `${unref(faqId)}-a4`,
                          onClick: ($event) => toggleFaq(4)
                        }, [
                          createVNode("span", null, toDisplayString(t("Каде се наоѓа Babor Medical во Скопје?", "Where is Babor Medical located in Skopje?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a4`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q4`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Babor Medical се наоѓа во Скопје. За точна адреса и закажување на консултација, контактирајте нè на +389 75 340 933 или посетете ја нашата контакт страница.", "Babor Medical is located in Skopje. For the exact address and to schedule a consultation, contact us at +389 75 340 933 or visit our contact page.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 5 }]
                    }, [
                      createVNode("h3", { class: "lsr-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q5`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 5,
                          "aria-controls": `${unref(faqId)}-a5`,
                          onClick: ($event) => toggleFaq(5)
                        }, [
                          createVNode("span", null, toDisplayString(t("Дали ласерската епилација е ефективна за сите типови кожа?", "Is laser hair removal effective for all skin types?")), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        id: `${unref(faqId)}-a5`,
                        class: "bm-faq__a",
                        role: "region",
                        "aria-labelledby": `${unref(faqId)}-q5`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(t("Да, Alma Soprano Titanium е ефективен за сите типови кожа (I-VI по Фицпатрик скала), вклучувајќи потемна кожа. Тројната бранова должина овозможува прилагодување на третманот за секој пациент.", "Yes, Alma Soprano Titanium is effective for all skin types (I-VI on the Fitzpatrick scale), including darker skin. The triple wavelength allows treatment customization for each patient.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/LaserPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LaserPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d3cbd26"]]);
export {
  LaserPage as default
};
