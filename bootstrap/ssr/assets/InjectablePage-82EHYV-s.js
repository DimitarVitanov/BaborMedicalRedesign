import { computed, ref, useId, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createSlots, createTextVNode, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-Cf0EHO41.js";
import { P as PageHero } from "./PageHero-D52u8HZ6.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-T_gtoxyK.js";
import { S as ScrollWords } from "./ScrollWords-C_qmDd1u.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { M as Marquee } from "./Marquee-CyiQLmo3.js";
import { R as RotatingBadge } from "./RotatingBadge-DPQSOizg.js";
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
    const pad = (n) => String(n).padStart(2, "0");
    const heroTitle = computed(() => {
      const words = String(props.pageTitle || "").trim().split(/\s+/);
      return words.length > 1 ? { main: words.slice(0, -1).join(" "), accent: words[words.length - 1] } : { main: words[0] || "", accent: "" };
    });
    const methodAnchor = (item, i) => `method-${item.id ?? i + 1}`;
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
            _push2(`<title data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-fb7ca4a1${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-fb7ca4a1${_scopeId}><meta name="author" content="Babor Medical" data-v-fb7ca4a1${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-fb7ca4a1${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-fb7ca4a1${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-fb7ca4a1${_scopeId}><meta property="og:type" content="website" data-v-fb7ca4a1${_scopeId}><meta property="og:url" content="https://babormedical.com/services/injectable-methods" data-v-fb7ca4a1${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-fb7ca4a1${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-fb7ca4a1${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-fb7ca4a1${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-fb7ca4a1${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-fb7ca4a1${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-fb7ca4a1${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-fb7ca4a1${_scopeId}><link rel="canonical" href="https://babormedical.com/services/injectable-methods" data-v-fb7ca4a1${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/injectable-methods?lang=en" data-v-fb7ca4a1${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/injectable-methods?lang=mk" data-v-fb7ca4a1${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/injectable-methods" data-v-fb7ca4a1${_scopeId}>`);
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="injectable-page" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: t("ИНЈЕКТБИЛНИ МЕТОДИ", "INJECTABLE METHODS"),
              title: heroTitle.value.main,
              accent: heroTitle.value.accent,
              subtitle: __props.pageSubtitle,
              crumb: __props.pageTitle
            }, createSlots({
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ij-stats" data-v-fb7ca4a1${_scopeId2}><div class="ij-stat" data-v-fb7ca4a1${_scopeId2}><span class="ij-stat__num" data-v-fb7ca4a1${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, {
                    value: treatments.value.length
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="ij-stat__label" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(t("Методи", "Methods"))}</span></div><span class="ij-stat__div" aria-hidden="true" data-v-fb7ca4a1${_scopeId2}></span><div class="ij-stat" data-v-fb7ca4a1${_scopeId2}><span class="ij-stat__num" data-v-fb7ca4a1${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "6+" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="ij-stat__label" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(t("Протоколи", "Protocols"))}</span></div><span class="ij-stat__div" aria-hidden="true" data-v-fb7ca4a1${_scopeId2}></span><div class="ij-stat" data-v-fb7ca4a1${_scopeId2}><span class="ij-stat__num" data-v-fb7ca4a1${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "10+" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="ij-stat__label" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(t("Години", "Years"))}</span></div></div><a href="/services/cosmetology" class="bm-btn bm-btn--ghost ij-hero__link" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Козметологија", "Cosmetology"))} `);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-right",
                    size: 16,
                    stroke: 1.8
                  }, null, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("div", { class: "ij-stats" }, [
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, {
                            value: treatments.value.length
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Методи", "Methods")), 1)
                      ]),
                      createVNode("span", {
                        class: "ij-stat__div",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, { value: "6+" })
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Протоколи", "Protocols")), 1)
                      ]),
                      createVNode("span", {
                        class: "ij-stat__div",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, { value: "10+" })
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Години", "Years")), 1)
                      ])
                    ]),
                    createVNode("a", {
                      href: "/services/cosmetology",
                      class: "bm-btn bm-btn--ghost ij-hero__link"
                    }, [
                      createTextVNode(toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Козметологија", "Cosmetology")) + " ", 1),
                      createVNode(_sfc_main$2, {
                        name: "arrow-right",
                        size: 16,
                        stroke: 1.8
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, [
              treatments.value.length ? {
                name: "aside",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="ij-menu" data-v-fb7ca4a1${_scopeId2}><div class="ij-menu__arch" data-v-fb7ca4a1${_scopeId2}><span class="ij-menu__ring" aria-hidden="true" data-v-fb7ca4a1${_scopeId2}></span><span class="ij-menu__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: "injectable",
                      size: 28,
                      stroke: 1.2
                    }, null, _parent3, _scopeId2));
                    _push3(`</span><span class="ij-menu__eyebrow" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(t("Наши методи", "Our Methods"))}</span><ol class="ij-menu__list" data-v-fb7ca4a1${_scopeId2}><!--[-->`);
                    ssrRenderList(treatments.value, (item, i) => {
                      _push3(`<li data-v-fb7ca4a1${_scopeId2}><a${ssrRenderAttr("href", `#${methodAnchor(item, i)}`)} data-v-fb7ca4a1${_scopeId2}><span class="ij-menu__n" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(pad(i + 1))}</span><span class="ij-menu__t" data-v-fb7ca4a1${_scopeId2}>${ssrInterpolate(item.name)}</span></a></li>`);
                    });
                    _push3(`<!--]--></ol></div>`);
                    _push3(ssrRenderComponent(RotatingBadge, {
                      class: "ij-menu__seal",
                      size: 124
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "ij-menu" }, [
                        createVNode("div", { class: "ij-menu__arch" }, [
                          createVNode("span", {
                            class: "ij-menu__ring",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", {
                            class: "ij-menu__icon",
                            "aria-hidden": "true"
                          }, [
                            createVNode(_sfc_main$2, {
                              name: "injectable",
                              size: 28,
                              stroke: 1.2
                            })
                          ]),
                          createVNode("span", { class: "ij-menu__eyebrow" }, toDisplayString(t("Наши методи", "Our Methods")), 1),
                          createVNode("ol", { class: "ij-menu__list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(treatments.value, (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: `menu-${item.id}`
                              }, [
                                createVNode("a", {
                                  href: `#${methodAnchor(item, i)}`
                                }, [
                                  createVNode("span", { class: "ij-menu__n" }, toDisplayString(pad(i + 1)), 1),
                                  createVNode("span", { class: "ij-menu__t" }, toDisplayString(item.name), 1)
                                ], 8, ["href"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(RotatingBadge, {
                          class: "ij-menu__seal",
                          size: 124
                        })
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(`<section class="ij-intro bm-cream bm-sheet bm-section" data-v-fb7ca4a1${_scopeId}><div class="bm-container" data-v-fb7ca4a1${_scopeId}>`);
            if (categoryDescription.value) {
              _push2(`<div class="ij-intro__lead" data-v-fb7ca4a1${_scopeId}><span class="ij-intro__mark" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>“</span>`);
              _push2(ssrRenderComponent(ScrollWords, {
                text: categoryDescription.value,
                tag: "p",
                class: "ij-intro__statement"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="ij-split" data-v-fb7ca4a1${_scopeId}><div class="ij-split__head" data-v-fb7ca4a1${_scopeId}><span class="ij-split__num bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>01</span><h2 class="bm-h2 ij-split__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Што опфаќаат инјектбилните протоколи?", "What do injectable protocols cover?")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="ij-split__body" data-v-fb7ca4a1${_scopeId}><ul class="ij-areas" data-v-fb7ca4a1${_scopeId}><!--[-->`);
            ssrRenderList(protocolAreas.value, (area, i) => {
              _push2(`<li class="ij-areas__item" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.06}s` })}" data-v-fb7ca4a1${_scopeId}><span class="ij-areas__n" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="ij-areas__t" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(area)}</span><span class="ij-areas__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "arrow-up-right",
                size: 16,
                stroke: 1.6
              }, null, _parent2, _scopeId));
              _push2(`</span></li>`);
            });
            _push2(`<!--]--></ul><p class="ij-note" data-reveal data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Секоја од овие категории има различна биолошка улога и различна индикација.", "Each of these categories has a different biological role and different indication."))}</p></div></div></div></section><section id="methods" class="ij-methods bm-dark bm-section bm-grain" data-v-fb7ca4a1${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span></div><div class="bm-container ij-methods__inner" data-v-fb7ca4a1${_scopeId}><div class="ij-methods__head" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><span class="ij-split__num bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>02</span><h2 class="bm-h1 ij-methods__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Наши методи", "Our Methods")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><span class="ij-methods__count" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(Counter, {
              value: pad(treatments.value.length)
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="ij-methods__list" data-v-fb7ca4a1${_scopeId}><!--[-->`);
            ssrRenderList(treatments.value, (item, i) => {
              _push2(`<article${ssrRenderAttr("id", methodAnchor(item, i))} class="ij-method" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.06}s` })}" data-v-fb7ca4a1${_scopeId}><span class="ij-method__num bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><h3 class="ij-method__name" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(item.name)}</h3><div class="ij-method__body" data-v-fb7ca4a1${_scopeId}>`);
              if (item.description) {
                _push2(`<div class="ij-method__desc bm-prose" data-v-fb7ca4a1${_scopeId}>${item.description ?? ""}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.url) {
                _push2(`<a${ssrRenderAttr("href", item.url)} class="bm-link ij-method__link" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} `);
                _push2(ssrRenderComponent(_sfc_main$2, { name: "arrow-right" }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="ij-method__arrow" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "arrow-up-right",
                size: 18,
                stroke: 1.6
              }, null, _parent2, _scopeId));
              _push2(`</span></article>`);
            });
            _push2(`<!--]--></div></div>`);
            if (protocolAreas.value.length) {
              _push2(`<div class="ij-methods__ribbon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(Marquee, {
                items: protocolAreas.value,
                variant: "wine",
                tilt: -2,
                duration: 46
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section><section class="ij-protocol bm-paper bm-sheet bm-section" data-v-fb7ca4a1${_scopeId}><div class="bm-container ij-split" data-v-fb7ca4a1${_scopeId}><div class="ij-split__head" data-v-fb7ca4a1${_scopeId}><span class="ij-split__num bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>03</span><h2 class="bm-h2 ij-split__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Протокол наместо изолирана процедура", "Protocol instead of isolated procedure")
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead bm-muted ij-protocol__lead" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Во Babor Medical развиваме комбинирани стратегии како:", "At Babor Medical we develop combined strategies such as:"))}</p></div><div class="ij-split__body" data-v-fb7ca4a1${_scopeId}><ul class="ij-combos" data-v-fb7ca4a1${_scopeId}><!--[-->`);
            ssrRenderList(combinedStrategies.value, (strategy, i) => {
              _push2(`<li class="ij-combo" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.08}s` })}" data-v-fb7ca4a1${_scopeId}><span class="ij-combo__top" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span class="ij-combo__n" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="ij-combo__icon" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "plus",
                size: 16,
                stroke: 1.6
              }, null, _parent2, _scopeId));
              _push2(`</span></span><span class="ij-combo__t" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(strategy)}</span></li>`);
            });
            _push2(`<!--]--></ul><p class="ij-quote" data-reveal data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Целта е долгорочна стабилност, природен изглед и постепена регенерација.", "The goal is long-term stability, natural look and gradual regeneration."))}</p></div></div></section><section class="ij-assess bm-wine bm-section bm-grain" data-v-fb7ca4a1${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span></div><div class="bm-container ij-assess__inner" data-v-fb7ca4a1${_scopeId}><div class="ij-assess__head" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><span class="ij-split__num bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>04</span><h2 class="bm-h1 ij-assess__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Индивидуална проценка", "Individual Assessment")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><p class="bm-lead ij-assess__lead" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Секој третман започнува со детална анализа на:", "Every treatment starts with a detailed analysis of:"))}</p></div><ul class="ij-steps" data-v-fb7ca4a1${_scopeId}><!--[-->`);
            ssrRenderList(assessmentPoints.value, (point, i) => {
              _push2(`<li class="ij-step" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.1}s` })}" data-v-fb7ca4a1${_scopeId}><span class="ij-step__n bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="ij-step__dot" aria-hidden="true" data-v-fb7ca4a1${_scopeId}></span><span class="ij-step__t" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(point)}</span></li>`);
            });
            _push2(`<!--]--></ul><p class="ij-assess__note" data-reveal data-v-fb7ca4a1${_scopeId}><span class="ij-assess__check" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "check",
              size: 16,
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Врз основа на тоа се креира персонализиран план.", "Based on this, a personalized plan is created."))}</span></p></div></section>`);
            if (__props.priceListPdf) {
              _push2(`<section class="ij-pricing bm-dark bm-section--tight" data-v-fb7ca4a1${_scopeId}><div class="bm-container" data-v-fb7ca4a1${_scopeId}><div class="ij-price" data-reveal="scale" data-v-fb7ca4a1${_scopeId}><div class="ij-price__visual" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span class="ij-price__arch" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "file",
                size: 40,
                stroke: 1.1
              }, null, _parent2, _scopeId));
              _push2(`<span class="ij-price__pdf" data-v-fb7ca4a1${_scopeId}>PDF</span></span></div><div class="ij-price__copy" data-v-fb7ca4a1${_scopeId}><h2 class="bm-h2 ij-price__title" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Ценовник", "Pricing")
              }, null, _parent2, _scopeId));
              _push2(`</h2><p class="ij-price__text" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за инјектибилни третмани.", "View our complete price list for injectable treatments."))}</p></div><div class="ij-price__actions" data-v-fb7ca4a1${_scopeId}><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" class="bm-btn" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</span><span class="bm-btn__icon" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "arrow-up-right",
                stroke: 2
              }, null, _parent2, _scopeId));
              _push2(`</span></a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="bm-btn bm-btn--ghost ij-price__dl" data-v-fb7ca4a1${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "download",
                size: 17,
                stroke: 1.8
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</a></div></div></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="ij-faq bm-cream bm-sheet bm-section" data-v-fb7ca4a1${_scopeId}><div class="bm-container ij-split" data-v-fb7ca4a1${_scopeId}><div class="ij-split__head" data-v-fb7ca4a1${_scopeId}><span class="ij-faq__mark bm-numeral" aria-hidden="true" data-v-fb7ca4a1${_scopeId}>?</span><h2 class="bm-h2 ij-split__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="bm-faq ij-faq__list" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-fb7ca4a1${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-fb7ca4a1${_scopeId}><h3 class="ij-faq__h" data-v-fb7ca4a1${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 0 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-0`)} data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Кои инјектибилни третмани ги нудите во Скопје?", "What injectable treatments do you offer in Skopje?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-0`)} class="bm-faq__a" role="region" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><p data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.", "At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-fb7ca4a1${_scopeId}><h3 class="ij-faq__h" data-v-fb7ca4a1${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 1 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-1`)} data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Дали филерите и ботоксот се безбедни?", "Are fillers and botox safe?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-1`)} class="bm-faq__a" role="region" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><p data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.", "Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-fb7ca4a1${_scopeId}><h3 class="ij-faq__h" data-v-fb7ca4a1${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 2 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-2`)} data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Колку трае ефектот од филери и ботокс?", "How long do fillers and botox last?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-2`)} class="bm-faq__a" role="region" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><p data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.", "Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 3 }, "bm-faq__item"])}" data-v-fb7ca4a1${_scopeId}><h3 class="ij-faq__h" data-v-fb7ca4a1${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 3 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-3`)} data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Колку чини ботокс и филери во Скопје?", "How much do botox and fillers cost in Skopje?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-fb7ca4a1${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-3`)} class="bm-faq__a" role="region" data-v-fb7ca4a1${_scopeId}><div data-v-fb7ca4a1${_scopeId}><p data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.", "Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933."))}</p></div></div></div></div></div></section><section class="ij-closing bm-wine bm-section bm-grain" data-v-fb7ca4a1${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span></div><span class="ij-closing__arcs" aria-hidden="true" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span><span data-v-fb7ca4a1${_scopeId}></span></span><div class="bm-container ij-closing__inner" data-v-fb7ca4a1${_scopeId}><h2 class="bm-display ij-closing__title" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Природноста е наш приоритет", "Naturalness is our priority")
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead ij-closing__text" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.", "Injectable methods are a powerful tool when applied with clinical logic and measure."))}</p><p class="ij-closing__tagline" data-reveal style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Нашата стратегија е стабилизација, не претерување.", "Our strategy is stabilization, not excess."))}<br data-v-fb7ca4a1${_scopeId}> ${ssrInterpolate(t("Регенерација, не маскирање.", "Regeneration, not masking."))}</p><div class="ij-closing__actions" data-reveal style="${ssrRenderStyle({ "--d": "0.4s" })}" data-v-fb7ca4a1${_scopeId}><a href="/contact" class="bm-btn" data-v-fb7ca4a1${_scopeId}><span data-v-fb7ca4a1${_scopeId}>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))}</span><span class="bm-btn__icon" data-v-fb7ca4a1${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span></a></div></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "injectable-page" }, [
                createVNode(PageHero, {
                  eyebrow: t("ИНЈЕКТБИЛНИ МЕТОДИ", "INJECTABLE METHODS"),
                  title: heroTitle.value.main,
                  accent: heroTitle.value.accent,
                  subtitle: __props.pageSubtitle,
                  crumb: __props.pageTitle
                }, createSlots({
                  default: withCtx(() => [
                    createVNode("div", { class: "ij-stats" }, [
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, {
                            value: treatments.value.length
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Методи", "Methods")), 1)
                      ]),
                      createVNode("span", {
                        class: "ij-stat__div",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, { value: "6+" })
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Протоколи", "Protocols")), 1)
                      ]),
                      createVNode("span", {
                        class: "ij-stat__div",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", { class: "ij-stat" }, [
                        createVNode("span", { class: "ij-stat__num" }, [
                          createVNode(Counter, { value: "10+" })
                        ]),
                        createVNode("span", { class: "ij-stat__label" }, toDisplayString(t("Години", "Years")), 1)
                      ])
                    ]),
                    createVNode("a", {
                      href: "/services/cosmetology",
                      class: "bm-btn bm-btn--ghost ij-hero__link"
                    }, [
                      createTextVNode(toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Козметологија", "Cosmetology")) + " ", 1),
                      createVNode(_sfc_main$2, {
                        name: "arrow-right",
                        size: 16,
                        stroke: 1.8
                      })
                    ])
                  ]),
                  _: 2
                }, [
                  treatments.value.length ? {
                    name: "aside",
                    fn: withCtx(() => [
                      createVNode("div", { class: "ij-menu" }, [
                        createVNode("div", { class: "ij-menu__arch" }, [
                          createVNode("span", {
                            class: "ij-menu__ring",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", {
                            class: "ij-menu__icon",
                            "aria-hidden": "true"
                          }, [
                            createVNode(_sfc_main$2, {
                              name: "injectable",
                              size: 28,
                              stroke: 1.2
                            })
                          ]),
                          createVNode("span", { class: "ij-menu__eyebrow" }, toDisplayString(t("Наши методи", "Our Methods")), 1),
                          createVNode("ol", { class: "ij-menu__list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(treatments.value, (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: `menu-${item.id}`
                              }, [
                                createVNode("a", {
                                  href: `#${methodAnchor(item, i)}`
                                }, [
                                  createVNode("span", { class: "ij-menu__n" }, toDisplayString(pad(i + 1)), 1),
                                  createVNode("span", { class: "ij-menu__t" }, toDisplayString(item.name), 1)
                                ], 8, ["href"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(RotatingBadge, {
                          class: "ij-menu__seal",
                          size: 124
                        })
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["eyebrow", "title", "accent", "subtitle", "crumb"]),
                createVNode("section", { class: "ij-intro bm-cream bm-sheet bm-section" }, [
                  createVNode("div", { class: "bm-container" }, [
                    categoryDescription.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "ij-intro__lead"
                    }, [
                      createVNode("span", {
                        class: "ij-intro__mark",
                        "aria-hidden": "true"
                      }, "“"),
                      createVNode(ScrollWords, {
                        text: categoryDescription.value,
                        tag: "p",
                        class: "ij-intro__statement"
                      }, null, 8, ["text"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "ij-split" }, [
                      createVNode("div", { class: "ij-split__head" }, [
                        createVNode("span", {
                          class: "ij-split__num bm-numeral",
                          "aria-hidden": "true"
                        }, "01"),
                        createVNode("h2", { class: "bm-h2 ij-split__title" }, [
                          createVNode(_sfc_main$3, {
                            text: t("Што опфаќаат инјектбилните протоколи?", "What do injectable protocols cover?")
                          }, null, 8, ["text"])
                        ])
                      ]),
                      createVNode("div", { class: "ij-split__body" }, [
                        createVNode("ul", { class: "ij-areas" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(protocolAreas.value, (area, i) => {
                            return openBlock(), createBlock("li", {
                              key: area,
                              class: "ij-areas__item",
                              "data-reveal": "",
                              style: { "--d": `${i * 0.06}s` }
                            }, [
                              createVNode("span", {
                                class: "ij-areas__n",
                                "aria-hidden": "true"
                              }, toDisplayString(pad(i + 1)), 1),
                              createVNode("span", { class: "ij-areas__t" }, toDisplayString(area), 1),
                              createVNode("span", {
                                class: "ij-areas__icon",
                                "aria-hidden": "true"
                              }, [
                                createVNode(_sfc_main$2, {
                                  name: "arrow-up-right",
                                  size: 16,
                                  stroke: 1.6
                                })
                              ])
                            ], 4);
                          }), 128))
                        ]),
                        createVNode("p", {
                          class: "ij-note",
                          "data-reveal": ""
                        }, toDisplayString(t("Секоја од овие категории има различна биолошка улога и различна индикација.", "Each of these categories has a different biological role and different indication.")), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("section", {
                  id: "methods",
                  class: "ij-methods bm-dark bm-section bm-grain"
                }, [
                  createVNode("div", {
                    class: "bm-aura",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("div", { class: "bm-container ij-methods__inner" }, [
                    createVNode("div", { class: "ij-methods__head" }, [
                      createVNode("div", null, [
                        createVNode("span", {
                          class: "ij-split__num bm-numeral",
                          "aria-hidden": "true"
                        }, "02"),
                        createVNode("h2", { class: "bm-h1 ij-methods__title" }, [
                          createVNode(_sfc_main$3, {
                            text: t("Наши методи", "Our Methods")
                          }, null, 8, ["text"])
                        ])
                      ]),
                      createVNode("span", {
                        class: "ij-methods__count",
                        "aria-hidden": "true"
                      }, [
                        createVNode(Counter, {
                          value: pad(treatments.value.length)
                        }, null, 8, ["value"])
                      ])
                    ]),
                    createVNode("div", { class: "ij-methods__list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(treatments.value, (item, i) => {
                        return openBlock(), createBlock("article", {
                          id: methodAnchor(item, i),
                          key: item.id,
                          class: "ij-method",
                          "data-reveal": "",
                          style: { "--d": `${i * 0.06}s` }
                        }, [
                          createVNode("span", {
                            class: "ij-method__num bm-numeral",
                            "aria-hidden": "true"
                          }, toDisplayString(pad(i + 1)), 1),
                          createVNode("h3", { class: "ij-method__name" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "ij-method__body" }, [
                            item.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "ij-method__desc bm-prose",
                              innerHTML: item.description
                            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                            item.url ? (openBlock(), createBlock("a", {
                              key: 1,
                              href: item.url,
                              class: "bm-link ij-method__link"
                            }, [
                              createTextVNode(toDisplayString(t("Прочитај повеќе", "Learn more")) + " ", 1),
                              createVNode(_sfc_main$2, { name: "arrow-right" })
                            ], 8, ["href"])) : createCommentVNode("", true)
                          ]),
                          createVNode("span", {
                            class: "ij-method__arrow",
                            "aria-hidden": "true"
                          }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-up-right",
                              size: 18,
                              stroke: 1.6
                            })
                          ])
                        ], 12, ["id"]);
                      }), 128))
                    ])
                  ]),
                  protocolAreas.value.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "ij-methods__ribbon",
                    "aria-hidden": "true"
                  }, [
                    createVNode(Marquee, {
                      items: protocolAreas.value,
                      variant: "wine",
                      tilt: -2,
                      duration: 46
                    }, null, 8, ["items"])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("section", { class: "ij-protocol bm-paper bm-sheet bm-section" }, [
                  createVNode("div", { class: "bm-container ij-split" }, [
                    createVNode("div", { class: "ij-split__head" }, [
                      createVNode("span", {
                        class: "ij-split__num bm-numeral",
                        "aria-hidden": "true"
                      }, "03"),
                      createVNode("h2", { class: "bm-h2 ij-split__title" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Протокол наместо изолирана процедура", "Protocol instead of isolated procedure")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("p", {
                        class: "bm-lead bm-muted ij-protocol__lead",
                        "data-reveal": "",
                        style: { "--d": "0.2s" }
                      }, toDisplayString(t("Во Babor Medical развиваме комбинирани стратегии како:", "At Babor Medical we develop combined strategies such as:")), 1)
                    ]),
                    createVNode("div", { class: "ij-split__body" }, [
                      createVNode("ul", { class: "ij-combos" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(combinedStrategies.value, (strategy, i) => {
                          return openBlock(), createBlock("li", {
                            key: strategy,
                            class: "ij-combo",
                            "data-reveal": "",
                            style: { "--d": `${i * 0.08}s` }
                          }, [
                            createVNode("span", {
                              class: "ij-combo__top",
                              "aria-hidden": "true"
                            }, [
                              createVNode("span", { class: "ij-combo__n" }, toDisplayString(pad(i + 1)), 1),
                              createVNode("span", { class: "ij-combo__icon" }, [
                                createVNode(_sfc_main$2, {
                                  name: "plus",
                                  size: 16,
                                  stroke: 1.6
                                })
                              ])
                            ]),
                            createVNode("span", { class: "ij-combo__t" }, toDisplayString(strategy), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("p", {
                        class: "ij-quote",
                        "data-reveal": ""
                      }, toDisplayString(t("Целта е долгорочна стабилност, природен изглед и постепена регенерација.", "The goal is long-term stability, natural look and gradual regeneration.")), 1)
                    ])
                  ])
                ]),
                createVNode("section", { class: "ij-assess bm-wine bm-section bm-grain" }, [
                  createVNode("div", {
                    class: "bm-aura",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("div", { class: "bm-container ij-assess__inner" }, [
                    createVNode("div", { class: "ij-assess__head" }, [
                      createVNode("div", null, [
                        createVNode("span", {
                          class: "ij-split__num bm-numeral",
                          "aria-hidden": "true"
                        }, "04"),
                        createVNode("h2", { class: "bm-h1 ij-assess__title" }, [
                          createVNode(_sfc_main$3, {
                            text: t("Индивидуална проценка", "Individual Assessment")
                          }, null, 8, ["text"])
                        ])
                      ]),
                      createVNode("p", {
                        class: "bm-lead ij-assess__lead",
                        "data-reveal": "",
                        style: { "--d": "0.2s" }
                      }, toDisplayString(t("Секој третман започнува со детална анализа на:", "Every treatment starts with a detailed analysis of:")), 1)
                    ]),
                    createVNode("ul", { class: "ij-steps" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(assessmentPoints.value, (point, i) => {
                        return openBlock(), createBlock("li", {
                          key: point,
                          class: "ij-step",
                          "data-reveal": "",
                          style: { "--d": `${i * 0.1}s` }
                        }, [
                          createVNode("span", {
                            class: "ij-step__n bm-numeral",
                            "aria-hidden": "true"
                          }, toDisplayString(pad(i + 1)), 1),
                          createVNode("span", {
                            class: "ij-step__dot",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "ij-step__t" }, toDisplayString(point), 1)
                        ], 4);
                      }), 128))
                    ]),
                    createVNode("p", {
                      class: "ij-assess__note",
                      "data-reveal": ""
                    }, [
                      createVNode("span", {
                        class: "ij-assess__check",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "check",
                          size: 16,
                          stroke: 2
                        })
                      ]),
                      createVNode("span", null, toDisplayString(t("Врз основа на тоа се креира персонализиран план.", "Based on this, a personalized plan is created.")), 1)
                    ])
                  ])
                ]),
                __props.priceListPdf ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "ij-pricing bm-dark bm-section--tight"
                }, [
                  createVNode("div", { class: "bm-container" }, [
                    createVNode("div", {
                      class: "ij-price",
                      "data-reveal": "scale"
                    }, [
                      createVNode("div", {
                        class: "ij-price__visual",
                        "aria-hidden": "true"
                      }, [
                        createVNode("span", { class: "ij-price__arch" }, [
                          createVNode(_sfc_main$2, {
                            name: "file",
                            size: 40,
                            stroke: 1.1
                          }),
                          createVNode("span", { class: "ij-price__pdf" }, "PDF")
                        ])
                      ]),
                      createVNode("div", { class: "ij-price__copy" }, [
                        createVNode("h2", { class: "bm-h2 ij-price__title" }, [
                          createVNode(_sfc_main$3, {
                            text: t("Ценовник", "Pricing")
                          }, null, 8, ["text"])
                        ]),
                        createVNode("p", { class: "ij-price__text" }, toDisplayString(t("Погледнете го нашиот комплетен ценовник за инјектибилни третмани.", "View our complete price list for injectable treatments.")), 1)
                      ]),
                      createVNode("div", { class: "ij-price__actions" }, [
                        createVNode("a", {
                          href: __props.priceListPdf,
                          target: "_blank",
                          class: "bm-btn"
                        }, [
                          createVNode("span", null, toDisplayString(t("Отвори ценовник (PDF)", "View Price List (PDF)")), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-up-right",
                              stroke: 2
                            })
                          ])
                        ], 8, ["href"]),
                        createVNode("a", {
                          href: __props.priceListPdf,
                          download: "",
                          class: "bm-btn bm-btn--ghost ij-price__dl"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "download",
                            size: 17,
                            stroke: 1.8
                          }),
                          createTextVNode(" " + toDisplayString(t("Преземи ценовник", "Download Price List")), 1)
                        ], 8, ["href"])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("section", { class: "ij-faq bm-cream bm-sheet bm-section" }, [
                  createVNode("div", { class: "bm-container ij-split" }, [
                    createVNode("div", { class: "ij-split__head" }, [
                      createVNode("span", {
                        class: "ij-faq__mark bm-numeral",
                        "aria-hidden": "true"
                      }, "?"),
                      createVNode("h2", { class: "bm-h2 ij-split__title" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("div", {
                      class: "bm-faq ij-faq__list",
                      "data-reveal": "",
                      style: { "--d": "0.15s" }
                    }, [
                      createVNode("div", {
                        class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                      }, [
                        createVNode("h3", { class: "ij-faq__h" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bm-faq__q",
                            "aria-expanded": openFaq.value === 0 ? "true" : "false",
                            "aria-controls": `${unref(faqId)}-0`,
                            onClick: ($event) => toggleFaq(0)
                          }, [
                            createVNode("span", null, toDisplayString(t("Кои инјектибилни третмани ги нудите во Скопје?", "What injectable treatments do you offer in Skopje?")), 1),
                            createVNode("span", {
                              class: "bm-faq__icon",
                              "aria-hidden": "true"
                            })
                          ], 8, ["aria-expanded", "aria-controls", "onClick"])
                        ]),
                        createVNode("div", {
                          id: `${unref(faqId)}-0`,
                          class: "bm-faq__a",
                          role: "region"
                        }, [
                          createVNode("div", null, [
                            createVNode("p", null, toDisplayString(t("Во Babor Medical нудиме филери (хијалуронски), ботокс (ботулинска терапија), колаген стимулатори, мезотерапија, биоревитализација и PRP третмани. Сите процедури се изведуваат од стручен медицински тим.", "At Babor Medical we offer fillers (hyaluronic), botox (botulinum therapy), collagen stimulators, mesotherapy, biorevitalization and PRP treatments. All procedures are performed by an expert medical team.")), 1)
                          ])
                        ], 8, ["id"])
                      ], 2),
                      createVNode("div", {
                        class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                      }, [
                        createVNode("h3", { class: "ij-faq__h" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bm-faq__q",
                            "aria-expanded": openFaq.value === 1 ? "true" : "false",
                            "aria-controls": `${unref(faqId)}-1`,
                            onClick: ($event) => toggleFaq(1)
                          }, [
                            createVNode("span", null, toDisplayString(t("Дали филерите и ботоксот се безбедни?", "Are fillers and botox safe?")), 1),
                            createVNode("span", {
                              class: "bm-faq__icon",
                              "aria-hidden": "true"
                            })
                          ], 8, ["aria-expanded", "aria-controls", "onClick"])
                        ]),
                        createVNode("div", {
                          id: `${unref(faqId)}-1`,
                          class: "bm-faq__a",
                          role: "region"
                        }, [
                          createVNode("div", null, [
                            createVNode("p", null, toDisplayString(t("Да, кога се аплицираат од обучен медицински персонал, филерите и ботоксот се безбедни процедури. Во Babor Medical користиме само сертифицирани препарати и следиме строги медицински протоколи за безбедност.", "Yes, when applied by trained medical staff, fillers and botox are safe procedures. At Babor Medical we use only certified products and follow strict medical safety protocols.")), 1)
                          ])
                        ], 8, ["id"])
                      ], 2),
                      createVNode("div", {
                        class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                      }, [
                        createVNode("h3", { class: "ij-faq__h" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bm-faq__q",
                            "aria-expanded": openFaq.value === 2 ? "true" : "false",
                            "aria-controls": `${unref(faqId)}-2`,
                            onClick: ($event) => toggleFaq(2)
                          }, [
                            createVNode("span", null, toDisplayString(t("Колку трае ефектот од филери и ботокс?", "How long do fillers and botox last?")), 1),
                            createVNode("span", {
                              class: "bm-faq__icon",
                              "aria-hidden": "true"
                            })
                          ], 8, ["aria-expanded", "aria-controls", "onClick"])
                        ]),
                        createVNode("div", {
                          id: `${unref(faqId)}-2`,
                          class: "bm-faq__a",
                          role: "region"
                        }, [
                          createVNode("div", null, [
                            createVNode("p", null, toDisplayString(t("Ефектот од хијалуронски филери трае 6-18 месеци, а ботоксот 3-6 месеци, зависно од зоната и индивидуалниот метаболизам. Колаген стимулаторите имаат постепен ефект кој трае до 2 години.", "Hyaluronic fillers last 6-18 months, and botox 3-6 months, depending on the area and individual metabolism. Collagen stimulators have a gradual effect lasting up to 2 years.")), 1)
                          ])
                        ], 8, ["id"])
                      ], 2),
                      createVNode("div", {
                        class: ["bm-faq__item", { "is-open": openFaq.value === 3 }]
                      }, [
                        createVNode("h3", { class: "ij-faq__h" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bm-faq__q",
                            "aria-expanded": openFaq.value === 3 ? "true" : "false",
                            "aria-controls": `${unref(faqId)}-3`,
                            onClick: ($event) => toggleFaq(3)
                          }, [
                            createVNode("span", null, toDisplayString(t("Колку чини ботокс и филери во Скопје?", "How much do botox and fillers cost in Skopje?")), 1),
                            createVNode("span", {
                              class: "bm-faq__icon",
                              "aria-hidden": "true"
                            })
                          ], 8, ["aria-expanded", "aria-controls", "onClick"])
                        ]),
                        createVNode("div", {
                          id: `${unref(faqId)}-3`,
                          class: "bm-faq__a",
                          role: "region"
                        }, [
                          createVNode("div", null, [
                            createVNode("p", null, toDisplayString(t("Цените за инјектибилни третмани во Babor Medical зависат од типот на препарат и зоната на третман. За детален ценовник контактирајте нè на +389 75 340 933.", "Injectable treatment prices at Babor Medical depend on the product type and treatment area. For a detailed price list, contact us at +389 75 340 933.")), 1)
                          ])
                        ], 8, ["id"])
                      ], 2)
                    ])
                  ])
                ]),
                createVNode("section", { class: "ij-closing bm-wine bm-section bm-grain" }, [
                  createVNode("div", {
                    class: "bm-aura",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("span", {
                    class: "ij-closing__arcs",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("div", { class: "bm-container ij-closing__inner" }, [
                    createVNode("h2", { class: "bm-display ij-closing__title" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Природноста е наш приоритет", "Naturalness is our priority")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("p", {
                      class: "bm-lead ij-closing__text",
                      "data-reveal": "",
                      style: { "--d": "0.2s" }
                    }, toDisplayString(t("Инјектбилните методи се моќна алатка кога се применуваат со клиничка логика и мерка.", "Injectable methods are a powerful tool when applied with clinical logic and measure.")), 1),
                    createVNode("p", {
                      class: "ij-closing__tagline",
                      "data-reveal": "",
                      style: { "--d": "0.3s" }
                    }, [
                      createTextVNode(toDisplayString(t("Нашата стратегија е стабилизација, не претерување.", "Our strategy is stabilization, not excess.")), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(t("Регенерација, не маскирање.", "Regeneration, not masking.")), 1)
                    ]),
                    createVNode("div", {
                      class: "ij-closing__actions",
                      "data-reveal": "",
                      style: { "--d": "0.4s" }
                    }, [
                      createVNode("a", {
                        href: "/contact",
                        class: "bm-btn"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/InjectablePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InjectablePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb7ca4a1"]]);
export {
  InjectablePage as default
};
