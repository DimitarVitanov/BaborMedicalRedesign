import { computed, ref, useId, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-BRbHwAyL.js";
import { P as PageHero } from "./PageHero-weEXGCUL.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-Dygre8wB.js";
import { S as ScrollWords } from "./ScrollWords-BQPNVrbz.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { H as HorizontalScroll } from "./HorizontalScroll-DjxgOk6L.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "BodyTreatmentsPage",
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
      return locale.value === "mk" ? "Третмани на тело – Апаратурна естетика Скопје | Babor Medical" : "Body Treatments – Aesthetic Body Contouring Skopje | Babor Medical";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Третмани на тело во Babor Medical Скопје. Ultraformer, Accent Prime, лимфна дренажа, EM Time, LaserShape. Обликување на тело, антицелулит, затегнување на кожа." : "Body treatments at Babor Medical Skopje. Ultraformer, Accent Prime, lymphatic drainage, EM Time, LaserShape. Body contouring, anti-cellulite, skin tightening.";
    });
    const seoKeywords = computed(() => {
      return locale.value === "mk" ? "третмани на тело, апаратурна естетика, обликување на тело скопје, антицелулит, затегнување кожа, ultraformer, accent prime, лимфна дренажа, EM time, lasershape, babor medical" : "body treatments, body contouring skopje, anti-cellulite, skin tightening, ultraformer, accent prime, lymphatic drainage, EM time, lasershape, babor medical";
    });
    const jsonLd = computed(() => {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalWebPage",
            "name": seoTitle.value,
            "description": seoDescription.value,
            "url": "https://babormedical.com/services/body-treatments",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "Babor Medical",
              "image": "https://babormedical.com/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Skopje",
                "addressCountry": "MK"
              }
            },
            "mainEntity": {
              "@type": "MedicalProcedure",
              "name": locale.value === "mk" ? "Третмани на тело" : "Body Treatments",
              "procedureType": "https://schema.org/NoninvasiveProcedure",
              "description": seoDescription.value,
              "bodyLocation": locale.value === "mk" ? "Тело" : "Body"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои третмани за тело ги нудите во Babor Medical?" : "What body treatments do you offer at Babor Medical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит." : "We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Дали третманите за обликување на тело се болни?" : "Are body contouring treatments painful?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување." : "No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку третмани се потребни за видливи резултати?" : "How many treatments are needed for visible results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани." : "Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку чинат третманите за тело во Скопје?" : "How much do body treatments cost in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје." : "Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje."
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
    const technologies = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.technologies) || [];
    });
    const programs = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.programs) || [];
    });
    const individualPlanPoints = computed(() => {
      var _a;
      return ((_a = props.extraData) == null ? void 0 : _a.individual_plan_points) || [];
    });
    const pad = (n) => String(n).padStart(2, "0");
    const sentences = (text) => {
      const str = String(text || "").trim();
      const m = str.match(/^(.+?[.!?])\s+(\S[\s\S]*)$/);
      return m ? [m[1], m[2]] : [str];
    };
    const introParts = computed(() => sentences(categoryDescription.value));
    const contourPaths = Array.from({ length: 11 }, (_, i) => {
      const dx = (i - 5) * 34;
      const x = (k) => (200 + dx * k).toFixed(1);
      return `M${x(1)} -10 C${x(1)} 60 ${x(0.96)} 110 ${x(0.9)} 160 S${x(0.66)} 250 ${x(0.7)} 290 S${x(1.14)} 380 ${x(1.08)} 430 S${x(0.98)} 500 ${x(1)} 520`;
    });
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
            _push2(`<title data-v-a14e35c8${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-a14e35c8${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-a14e35c8${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-a14e35c8${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-a14e35c8${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-a14e35c8${_scopeId}><meta property="og:type" content="website" data-v-a14e35c8${_scopeId}><meta property="og:url" content="https://babormedical.com/services/body-treatments" data-v-a14e35c8${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-a14e35c8${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-a14e35c8${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-a14e35c8${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-a14e35c8${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-a14e35c8${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-a14e35c8${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-a14e35c8${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
            _push2(`<link rel="canonical" href="https://babormedical.com/services/body-treatments" data-v-a14e35c8${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/body-treatments?lang=en" data-v-a14e35c8${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/body-treatments?lang=mk" data-v-a14e35c8${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/body-treatments" data-v-a14e35c8${_scopeId}>`);
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
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://babormedical.com/services/body-treatments"
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
              (openBlock(), createBlock(resolveDynamicComponent("script"), {
                type: "application/ld+json",
                innerHTML: jsonLd.value
              }, null, 8, ["innerHTML"])),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/services/body-treatments"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services/body-treatments?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services/body-treatments?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services/body-treatments"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageHero, {
              class: "bdy-hero",
              eyebrow: t("ТРЕТМАНИ НА ТЕЛО", "BODY TREATMENTS"),
              title: __props.pageTitle,
              subtitle: __props.pageSubtitle,
              crumb: __props.pageTitle
            }, {
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bdy-contour" aria-hidden="true" data-v-a14e35c8${_scopeId2}><div class="bdy-contour__arch" data-v-a14e35c8${_scopeId2}><svg class="bdy-contour__lines" viewBox="0 0 400 500" preserveAspectRatio="none" focusable="false" data-v-a14e35c8${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(contourPaths), (d, i) => {
                    _push3(`<path${ssrRenderAttr("d", d)} style="${ssrRenderStyle({ "--i": i })}" data-v-a14e35c8${_scopeId2}></path>`);
                  });
                  _push3(`<!--]--></svg><span class="bdy-contour__glow" data-v-a14e35c8${_scopeId2}></span><span class="bdy-contour__scan" data-v-a14e35c8${_scopeId2}></span><span class="bdy-contour__icon" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "body",
                    size: 34,
                    stroke: 1.1
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div><span class="bdy-contour__chip bdy-contour__chip--a" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "sparkle",
                    size: 18,
                    stroke: 1.5
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="bdy-contour__chip bdy-contour__chip--b" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "shield",
                    size: 18,
                    stroke: 1.5
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bdy-contour",
                      "aria-hidden": "true"
                    }, [
                      createVNode("div", { class: "bdy-contour__arch" }, [
                        (openBlock(), createBlock("svg", {
                          class: "bdy-contour__lines",
                          viewBox: "0 0 400 500",
                          preserveAspectRatio: "none",
                          focusable: "false"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(contourPaths), (d, i) => {
                            return openBlock(), createBlock("path", {
                              key: i,
                              d,
                              style: { "--i": i }
                            }, null, 12, ["d"]);
                          }), 128))
                        ])),
                        createVNode("span", { class: "bdy-contour__glow" }),
                        createVNode("span", { class: "bdy-contour__scan" }),
                        createVNode("span", { class: "bdy-contour__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "body",
                            size: 34,
                            stroke: 1.1
                          })
                        ])
                      ]),
                      createVNode("span", { class: "bdy-contour__chip bdy-contour__chip--a" }, [
                        createVNode(_sfc_main$2, {
                          name: "sparkle",
                          size: 18,
                          stroke: 1.5
                        })
                      ]),
                      createVNode("span", { class: "bdy-contour__chip bdy-contour__chip--b" }, [
                        createVNode(_sfc_main$2, {
                          name: "shield",
                          size: 18,
                          stroke: 1.5
                        })
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bdy-stats" data-v-a14e35c8${_scopeId2}><div class="bdy-stat" data-v-a14e35c8${_scopeId2}><span class="bdy-stat__num" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "5" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="bdy-stat__label" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(t("Технологии", "Technologies"))}</span></div><div class="bdy-stat" data-v-a14e35c8${_scopeId2}><span class="bdy-stat__num" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "3" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="bdy-stat__label" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(t("Програми", "Programs"))}</span></div><div class="bdy-stat" data-v-a14e35c8${_scopeId2}><span class="bdy-stat__num" data-v-a14e35c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "100%" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="bdy-stat__label" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(t("Неинвазивно", "Non-invasive"))}</span></div></div><a href="/services/laser-aesthetic" class="bm-btn bm-btn--ghost bm-btn--sm bdy-hero__switch" data-v-a14e35c8${_scopeId2}><span data-v-a14e35c8${_scopeId2}>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Ласерски третмани", "Laser Treatments"))}</span>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-up-right",
                    size: 16,
                    stroke: 1.8
                  }, null, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("div", { class: "bdy-stats" }, [
                      createVNode("div", { class: "bdy-stat" }, [
                        createVNode("span", { class: "bdy-stat__num" }, [
                          createVNode(Counter, { value: "5" })
                        ]),
                        createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Технологии", "Technologies")), 1)
                      ]),
                      createVNode("div", { class: "bdy-stat" }, [
                        createVNode("span", { class: "bdy-stat__num" }, [
                          createVNode(Counter, { value: "3" })
                        ]),
                        createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Програми", "Programs")), 1)
                      ]),
                      createVNode("div", { class: "bdy-stat" }, [
                        createVNode("span", { class: "bdy-stat__num" }, [
                          createVNode(Counter, { value: "100%" })
                        ]),
                        createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Неинвазивно", "Non-invasive")), 1)
                      ])
                    ]),
                    createVNode("a", {
                      href: "/services/laser-aesthetic",
                      class: "bm-btn bm-btn--ghost bm-btn--sm bdy-hero__switch"
                    }, [
                      createVNode("span", null, toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Ласерски третмани", "Laser Treatments")), 1),
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
            if (categoryDescription.value) {
              _push2(`<section class="bdy-intro bm-cream bm-sheet bm-section" data-v-a14e35c8${_scopeId}><div class="bm-container" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(ScrollWords, {
                text: introParts.value[0],
                tag: "p",
                class: "bdy-intro__statement"
              }, null, _parent2, _scopeId));
              if (introParts.value[1]) {
                _push2(`<div class="bdy-intro__rest" data-v-a14e35c8${_scopeId}><span class="bdy-intro__rule" aria-hidden="true" data-v-a14e35c8${_scopeId}></span><p class="bdy-intro__text" data-reveal data-v-a14e35c8${_scopeId}>${ssrInterpolate(introParts.value[1])}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (technologies.value.length) {
              _push2(`<section class="${ssrRenderClass([{ "bdy-tech--first": !categoryDescription.value }, "bdy-tech bm-dark bm-grain"])}" data-v-a14e35c8${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}></span><span data-v-a14e35c8${_scopeId}></span><span data-v-a14e35c8${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(HorizontalScroll, null, {
                intro: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bdy-tech__intro" data-v-a14e35c8${_scopeId2}><span class="bdy-tech__count bm-numeral" aria-hidden="true" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(String(technologies.value.length).padStart(2, "0"))}</span><h2 class="bm-h2 bdy-ital bdy-tech__title" data-v-a14e35c8${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      text: t("Технологии кои ги користиме", "Technologies We Use")
                    }, null, _parent3, _scopeId2));
                    _push3(`</h2><span class="bdy-tech__hint" aria-hidden="true" data-v-a14e35c8${_scopeId2}><span class="bdy-tech__hint-line" data-v-a14e35c8${_scopeId2}></span>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: "arrow-right",
                      size: 16
                    }, null, _parent3, _scopeId2));
                    _push3(`</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bdy-tech__intro" }, [
                        createVNode("span", {
                          class: "bdy-tech__count bm-numeral",
                          "aria-hidden": "true"
                        }, toDisplayString(String(technologies.value.length).padStart(2, "0")), 1),
                        createVNode("h2", { class: "bm-h2 bdy-ital bdy-tech__title" }, [
                          createVNode(_sfc_main$3, {
                            text: t("Технологии кои ги користиме", "Technologies We Use")
                          }, null, 8, ["text"])
                        ]),
                        createVNode("span", {
                          class: "bdy-tech__hint",
                          "aria-hidden": "true"
                        }, [
                          createVNode("span", { class: "bdy-tech__hint-line" }),
                          createVNode(_sfc_main$2, {
                            name: "arrow-right",
                            size: 16
                          })
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(technologies.value, (tech, index) => {
                      _push3(`<article class="bdy-tcard" data-v-a14e35c8${_scopeId2}><div class="bdy-tcard__top" data-v-a14e35c8${_scopeId2}><span class="bdy-tcard__num bm-numeral" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="bdy-tcard__orb" aria-hidden="true" data-v-a14e35c8${_scopeId2}></span></div><h3 class="bdy-tcard__name" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(tech.name || tech)}</h3>`);
                      if (tech.desc) {
                        _push3(`<p class="bdy-tcard__desc" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(tech.desc)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (tech.suitable_for || tech.areas) {
                        _push3(`<div class="bdy-tcard__details" data-v-a14e35c8${_scopeId2}><div class="bdy-tcard__group" data-v-a14e35c8${_scopeId2}><span class="bdy-tcard__label" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(tech.areas ? t("Зони:", "Areas:") : t("Погодно за:", "Suitable for:"))}</span><ul class="bdy-tcard__chips" data-v-a14e35c8${_scopeId2}><!--[-->`);
                        ssrRenderList(tech.areas || tech.suitable_for, (item) => {
                          _push3(`<li data-v-a14e35c8${_scopeId2}>${ssrInterpolate(item)}</li>`);
                        });
                        _push3(`<!--]--></ul></div>`);
                        if (tech.areas && tech.suitable_for) {
                          _push3(`<div class="bdy-tcard__group" data-v-a14e35c8${_scopeId2}><span class="bdy-tcard__label" data-v-a14e35c8${_scopeId2}>${ssrInterpolate(t("Ефекти:", "Effects:"))}</span><ul class="bdy-tcard__chips bdy-tcard__chips--fx" data-v-a14e35c8${_scopeId2}><!--[-->`);
                          ssrRenderList(tech.suitable_for, (item) => {
                            _push3(`<li data-v-a14e35c8${_scopeId2}>${ssrInterpolate(item)}</li>`);
                          });
                          _push3(`<!--]--></ul></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</article>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(technologies.value, (tech, index) => {
                        return openBlock(), createBlock("article", {
                          key: index,
                          class: "bdy-tcard"
                        }, [
                          createVNode("div", { class: "bdy-tcard__top" }, [
                            createVNode("span", { class: "bdy-tcard__num bm-numeral" }, toDisplayString(String(index + 1).padStart(2, "0")), 1),
                            createVNode("span", {
                              class: "bdy-tcard__orb",
                              "aria-hidden": "true"
                            })
                          ]),
                          createVNode("h3", { class: "bdy-tcard__name" }, toDisplayString(tech.name || tech), 1),
                          tech.desc ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "bdy-tcard__desc"
                          }, toDisplayString(tech.desc), 1)) : createCommentVNode("", true),
                          tech.suitable_for || tech.areas ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "bdy-tcard__details"
                          }, [
                            createVNode("div", { class: "bdy-tcard__group" }, [
                              createVNode("span", { class: "bdy-tcard__label" }, toDisplayString(tech.areas ? t("Зони:", "Areas:") : t("Погодно за:", "Suitable for:")), 1),
                              createVNode("ul", { class: "bdy-tcard__chips" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(tech.areas || tech.suitable_for, (item) => {
                                  return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                                }), 128))
                              ])
                            ]),
                            tech.areas && tech.suitable_for ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "bdy-tcard__group"
                            }, [
                              createVNode("span", { class: "bdy-tcard__label" }, toDisplayString(t("Ефекти:", "Effects:")), 1),
                              createVNode("ul", { class: "bdy-tcard__chips bdy-tcard__chips--fx" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(tech.suitable_for, (item) => {
                                  return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="bdy-plan-sec bm-paper bm-sheet bm-section" data-v-a14e35c8${_scopeId}><div class="bm-container" data-v-a14e35c8${_scopeId}>`);
            if (programs.value.length) {
              _push2(`<div class="bdy-programs" data-v-a14e35c8${_scopeId}><div class="bdy-programs__head" data-v-a14e35c8${_scopeId}><h2 class="bm-h2 bdy-ital" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Програмски пристап", "Program Approach")
              }, null, _parent2, _scopeId));
              _push2(`</h2><p class="bm-lead bm-muted bdy-programs__lead" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Најдобри резултати се постигнуваат кога третманите се комбинираат во структуриран план.", "Best results are achieved when treatments are combined in a structured plan."))}</p></div><div class="bdy-programs__grid" data-v-a14e35c8${_scopeId}><!--[-->`);
              ssrRenderList(programs.value, (program, index) => {
                _push2(`<article class="bdy-prog" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.12}s` })}" data-v-a14e35c8${_scopeId}><div class="bdy-prog__arch" aria-hidden="true" data-v-a14e35c8${_scopeId}><span class="bdy-prog__ring" data-v-a14e35c8${_scopeId}></span><span class="bdy-prog__ring" data-v-a14e35c8${_scopeId}></span><span class="bdy-prog__ring" data-v-a14e35c8${_scopeId}></span><span class="bdy-prog__num bm-numeral" data-v-a14e35c8${_scopeId}>${ssrInterpolate(pad(index + 1))}</span></div><h3 class="bdy-prog__name" data-v-a14e35c8${_scopeId}>${ssrInterpolate(program.name || program)}</h3>`);
                if (program.desc) {
                  _push2(`<p class="bdy-prog__desc" data-v-a14e35c8${_scopeId}>${ssrInterpolate(program.desc)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (individualPlanPoints.value.length) {
              _push2(`<div class="bdy-plan" data-v-a14e35c8${_scopeId}><div class="bdy-plan__head" data-v-a14e35c8${_scopeId}><span class="bdy-plan__badge" aria-hidden="true" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "body",
                size: 28,
                stroke: 1.3
              }, null, _parent2, _scopeId));
              _push2(`</span><h2 class="bm-h2 bdy-ital" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Индивидуален план", "Individual Plan")
              }, null, _parent2, _scopeId));
              _push2(`</h2><p class="bm-lead bdy-plan__lead" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Секој клиент добива индивидуална препорака според:", "Every client receives an individual recommendation based on:"))}</p></div><div class="bdy-plan__body" data-v-a14e35c8${_scopeId}><ol class="bdy-plan__list" data-v-a14e35c8${_scopeId}><!--[-->`);
              ssrRenderList(individualPlanPoints.value, (point, i) => {
                _push2(`<li class="bdy-plan__item" data-reveal style="${ssrRenderStyle({ "--d": `${i * 0.08}s` })}" data-v-a14e35c8${_scopeId}><span class="bdy-plan__num bm-numeral" aria-hidden="true" data-v-a14e35c8${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="bdy-plan__text" data-v-a14e35c8${_scopeId}>${ssrInterpolate(point)}</span></li>`);
              });
              _push2(`<!--]--></ol><p class="bdy-note" data-reveal data-v-a14e35c8${_scopeId}><span class="bdy-note__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "sparkle",
                size: 18,
                stroke: 1.5
              }, null, _parent2, _scopeId));
              _push2(`</span><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Нашата цел е постепено, безбедно и природно подобрување на контурата на телото.", "Our goal is gradual, safe and natural improvement of body contours."))}</span></p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (treatments.value.length) {
              _push2(`<div class="bdy-items" data-v-a14e35c8${_scopeId}><h2 class="bm-h2 bdy-ital" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Наши третмани", "Our Treatments")
              }, null, _parent2, _scopeId));
              _push2(`</h2><div class="bdy-items__grid" data-v-a14e35c8${_scopeId}><!--[-->`);
              ssrRenderList(treatments.value, (item, i) => {
                _push2(`<article class="bdy-item" data-reveal style="${ssrRenderStyle({ "--d": `${i % 3 * 0.08}s` })}" data-v-a14e35c8${_scopeId}><span class="bdy-item__num" aria-hidden="true" data-v-a14e35c8${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><h3 class="bdy-item__name" data-v-a14e35c8${_scopeId}>${ssrInterpolate(item.name)}</h3>`);
                if (item.description) {
                  _push2(`<div class="bdy-item__desc bm-prose" data-v-a14e35c8${_scopeId}>${item.description ?? ""}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.url) {
                  _push2(`<a${ssrRenderAttr("href", item.url)} class="bm-link bdy-item__link" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} `);
                  _push2(ssrRenderComponent(_sfc_main$2, { name: "arrow-right" }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.priceListPdf) {
              _push2(`<div id="pricing" class="bdy-price bm-grain" data-reveal="scale" data-v-a14e35c8${_scopeId}><span class="bdy-price__ghost" aria-hidden="true" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "file",
                stroke: 0.5
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="bdy-price__copy" data-v-a14e35c8${_scopeId}><span class="bdy-price__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "file",
                size: 24,
                stroke: 1.4
              }, null, _parent2, _scopeId));
              _push2(`</span><h2 class="bm-h2 bdy-ital bdy-price__title" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: t("Ценовник", "Pricing")
              }, null, _parent2, _scopeId));
              _push2(`</h2><p class="bdy-price__sub" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за третмани на тело.", "View our complete price list for body treatments."))}</p></div><div class="bdy-price__actions" data-v-a14e35c8${_scopeId}><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" rel="noopener" class="bm-btn bdy-price__btn" data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</span><span class="bm-btn__icon" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "arrow-up-right",
                stroke: 2
              }, null, _parent2, _scopeId));
              _push2(`</span></a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="bm-btn bm-btn--ghost bdy-price__dl" data-v-a14e35c8${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "download",
                size: 16,
                stroke: 1.8
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</span></a></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section class="bdy-cta bm-wine bm-grain" data-v-a14e35c8${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}></span><span data-v-a14e35c8${_scopeId}></span><span data-v-a14e35c8${_scopeId}></span></div><div class="bm-container bdy-cta__inner" data-v-a14e35c8${_scopeId}><div class="bdy-cta__copy" data-v-a14e35c8${_scopeId}><h2 class="bm-h1 bdy-ital bdy-cta__title" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Интегриран естетски план", "Integrated Aesthetic Plan")
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead bm-muted bdy-cta__text" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("За оптимален резултат, третманите на тело често се комбинираат со козметолошки и медицинско‑естетски процедури во рамките на интегриран естетски план.", "For optimal results, body treatments are often combined with cosmetological and medical-aesthetic procedures within an integrated aesthetic plan."))}</p><a href="/contact" class="bm-btn bdy-cta__btn" data-reveal style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))}</span><span class="bm-btn__icon" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span></a></div><div class="bdy-venn" aria-hidden="true" data-reveal="scale" style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-a14e35c8${_scopeId}><span class="bdy-venn__c bdy-venn__c--a" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "body",
              size: 30,
              stroke: 1.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="bdy-venn__c bdy-venn__c--b" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "face",
              size: 30,
              stroke: 1.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="bdy-venn__c bdy-venn__c--c" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "injectable",
              size: 30,
              stroke: 1.2
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="bdy-venn__core" data-v-a14e35c8${_scopeId}></span></div></div></section><section class="bdy-seo bm-cream bm-sheet bm-section" data-v-a14e35c8${_scopeId}><div class="bm-container bdy-seo__grid" data-v-a14e35c8${_scopeId}><h2 class="bdy-seo__title" data-reveal data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Третмани на тело во Скопје – Babor Medical", "Body Treatments in Skopje – Babor Medical"))}</h2><p class="bdy-seo__text" data-reveal style="${ssrRenderStyle({ "--d": "0.12s" })}" data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Babor Medical нуди напредни третмани на тело во Скопје со најсовремена апаратурна естетика. Нашите неинвазивни технологии – Ultraformer, Accent Prime, LaserShape, EM Time и Бодипрес терапија – овозможуваат обликување на тело, намалување на целулит, затегнување на кожа и подобрување на циркулацијата. Индивидуален пристап и програмски третмани за долгорочни резултати.", "Babor Medical offers advanced body treatments in Skopje with state-of-the-art aesthetic technology. Our non-invasive technologies – Ultraformer, Accent Prime, LaserShape, EM Time and Body Press therapy – enable body contouring, cellulite reduction, skin tightening and circulation improvement. Individual approach and program treatments for long-term results."))}</p></div></section><section class="bdy-faq bm-paper bm-section" data-v-a14e35c8${_scopeId}><div class="bm-container bdy-faq__grid" data-v-a14e35c8${_scopeId}><div class="bdy-faq__head" data-v-a14e35c8${_scopeId}><h2 class="bm-h2 bdy-ital" data-v-a14e35c8${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
            }, null, _parent2, _scopeId));
            _push2(`</h2><span class="bdy-faq__mark" aria-hidden="true" data-v-a14e35c8${_scopeId}>?</span></div><div class="bm-faq bdy-faq__list" data-reveal style="${ssrRenderStyle({ "--d": "0.1s" })}" data-v-a14e35c8${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-a14e35c8${_scopeId}><h3 class="bdy-faq__h" data-v-a14e35c8${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q0`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 0)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a0`)} data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Кои третмани за тело ги нудите во Babor Medical?", "What body treatments do you offer at Babor Medical?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a0`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q0`)} data-v-a14e35c8${_scopeId}><div data-v-a14e35c8${_scopeId}><p data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит.", "We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-a14e35c8${_scopeId}><h3 class="bdy-faq__h" data-v-a14e35c8${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q1`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 1)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a1`)} data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Дали третманите за обликување на тело се болни?", "Are body contouring treatments painful?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a1`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q1`)} data-v-a14e35c8${_scopeId}><div data-v-a14e35c8${_scopeId}><p data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување.", "No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-a14e35c8${_scopeId}><h3 class="bdy-faq__h" data-v-a14e35c8${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q2`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 2)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a2`)} data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Колку третмани се потребни за видливи резултати?", "How many treatments are needed for visible results?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a2`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q2`)} data-v-a14e35c8${_scopeId}><div data-v-a14e35c8${_scopeId}><p data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани.", "Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments."))}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 3 }, "bm-faq__item"])}" data-v-a14e35c8${_scopeId}><h3 class="bdy-faq__h" data-v-a14e35c8${_scopeId}><button${ssrRenderAttr("id", `${unref(faqId)}-q3`)} type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 3)}${ssrRenderAttr("aria-controls", `${unref(faqId)}-a3`)} data-v-a14e35c8${_scopeId}><span data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Колку чинат третманите за тело во Скопје?", "How much do body treatments cost in Skopje?"))}</span><span class="bm-faq__icon" aria-hidden="true" data-v-a14e35c8${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-a3`)} class="bm-faq__a" role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqId)}-q3`)} data-v-a14e35c8${_scopeId}><div data-v-a14e35c8${_scopeId}><p data-v-a14e35c8${_scopeId}>${ssrInterpolate(t("Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.", "Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje."))}</p></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                class: "bdy-hero",
                eyebrow: t("ТРЕТМАНИ НА ТЕЛО", "BODY TREATMENTS"),
                title: __props.pageTitle,
                subtitle: __props.pageSubtitle,
                crumb: __props.pageTitle
              }, {
                aside: withCtx(() => [
                  createVNode("div", {
                    class: "bdy-contour",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", { class: "bdy-contour__arch" }, [
                      (openBlock(), createBlock("svg", {
                        class: "bdy-contour__lines",
                        viewBox: "0 0 400 500",
                        preserveAspectRatio: "none",
                        focusable: "false"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(contourPaths), (d, i) => {
                          return openBlock(), createBlock("path", {
                            key: i,
                            d,
                            style: { "--i": i }
                          }, null, 12, ["d"]);
                        }), 128))
                      ])),
                      createVNode("span", { class: "bdy-contour__glow" }),
                      createVNode("span", { class: "bdy-contour__scan" }),
                      createVNode("span", { class: "bdy-contour__icon" }, [
                        createVNode(_sfc_main$2, {
                          name: "body",
                          size: 34,
                          stroke: 1.1
                        })
                      ])
                    ]),
                    createVNode("span", { class: "bdy-contour__chip bdy-contour__chip--a" }, [
                      createVNode(_sfc_main$2, {
                        name: "sparkle",
                        size: 18,
                        stroke: 1.5
                      })
                    ]),
                    createVNode("span", { class: "bdy-contour__chip bdy-contour__chip--b" }, [
                      createVNode(_sfc_main$2, {
                        name: "shield",
                        size: 18,
                        stroke: 1.5
                      })
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "bdy-stats" }, [
                    createVNode("div", { class: "bdy-stat" }, [
                      createVNode("span", { class: "bdy-stat__num" }, [
                        createVNode(Counter, { value: "5" })
                      ]),
                      createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Технологии", "Technologies")), 1)
                    ]),
                    createVNode("div", { class: "bdy-stat" }, [
                      createVNode("span", { class: "bdy-stat__num" }, [
                        createVNode(Counter, { value: "3" })
                      ]),
                      createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Програми", "Programs")), 1)
                    ]),
                    createVNode("div", { class: "bdy-stat" }, [
                      createVNode("span", { class: "bdy-stat__num" }, [
                        createVNode(Counter, { value: "100%" })
                      ]),
                      createVNode("span", { class: "bdy-stat__label" }, toDisplayString(t("Неинвазивно", "Non-invasive")), 1)
                    ])
                  ]),
                  createVNode("a", {
                    href: "/services/laser-aesthetic",
                    class: "bm-btn bm-btn--ghost bm-btn--sm bdy-hero__switch"
                  }, [
                    createVNode("span", null, toDisplayString(t("Погледни", "View")) + " " + toDisplayString(t("Ласерски третмани", "Laser Treatments")), 1),
                    createVNode(_sfc_main$2, {
                      name: "arrow-up-right",
                      size: 16,
                      stroke: 1.8
                    })
                  ])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "subtitle", "crumb"]),
              categoryDescription.value ? (openBlock(), createBlock("section", {
                key: 0,
                class: "bdy-intro bm-cream bm-sheet bm-section"
              }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode(ScrollWords, {
                    text: introParts.value[0],
                    tag: "p",
                    class: "bdy-intro__statement"
                  }, null, 8, ["text"]),
                  introParts.value[1] ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "bdy-intro__rest"
                  }, [
                    createVNode("span", {
                      class: "bdy-intro__rule",
                      "aria-hidden": "true"
                    }),
                    createVNode("p", {
                      class: "bdy-intro__text",
                      "data-reveal": ""
                    }, toDisplayString(introParts.value[1]), 1)
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              technologies.value.length ? (openBlock(), createBlock("section", {
                key: 1,
                class: ["bdy-tech bm-dark bm-grain", { "bdy-tech--first": !categoryDescription.value }]
              }, [
                createVNode("div", {
                  class: "bm-aura",
                  "aria-hidden": "true"
                }, [
                  createVNode("span"),
                  createVNode("span"),
                  createVNode("span")
                ]),
                createVNode(HorizontalScroll, null, {
                  intro: withCtx(() => [
                    createVNode("div", { class: "bdy-tech__intro" }, [
                      createVNode("span", {
                        class: "bdy-tech__count bm-numeral",
                        "aria-hidden": "true"
                      }, toDisplayString(String(technologies.value.length).padStart(2, "0")), 1),
                      createVNode("h2", { class: "bm-h2 bdy-ital bdy-tech__title" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Технологии кои ги користиме", "Technologies We Use")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("span", {
                        class: "bdy-tech__hint",
                        "aria-hidden": "true"
                      }, [
                        createVNode("span", { class: "bdy-tech__hint-line" }),
                        createVNode(_sfc_main$2, {
                          name: "arrow-right",
                          size: 16
                        })
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(technologies.value, (tech, index) => {
                      return openBlock(), createBlock("article", {
                        key: index,
                        class: "bdy-tcard"
                      }, [
                        createVNode("div", { class: "bdy-tcard__top" }, [
                          createVNode("span", { class: "bdy-tcard__num bm-numeral" }, toDisplayString(String(index + 1).padStart(2, "0")), 1),
                          createVNode("span", {
                            class: "bdy-tcard__orb",
                            "aria-hidden": "true"
                          })
                        ]),
                        createVNode("h3", { class: "bdy-tcard__name" }, toDisplayString(tech.name || tech), 1),
                        tech.desc ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "bdy-tcard__desc"
                        }, toDisplayString(tech.desc), 1)) : createCommentVNode("", true),
                        tech.suitable_for || tech.areas ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "bdy-tcard__details"
                        }, [
                          createVNode("div", { class: "bdy-tcard__group" }, [
                            createVNode("span", { class: "bdy-tcard__label" }, toDisplayString(tech.areas ? t("Зони:", "Areas:") : t("Погодно за:", "Suitable for:")), 1),
                            createVNode("ul", { class: "bdy-tcard__chips" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(tech.areas || tech.suitable_for, (item) => {
                                return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                              }), 128))
                            ])
                          ]),
                          tech.areas && tech.suitable_for ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "bdy-tcard__group"
                          }, [
                            createVNode("span", { class: "bdy-tcard__label" }, toDisplayString(t("Ефекти:", "Effects:")), 1),
                            createVNode("ul", { class: "bdy-tcard__chips bdy-tcard__chips--fx" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(tech.suitable_for, (item) => {
                                return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true),
              createVNode("section", { class: "bdy-plan-sec bm-paper bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container" }, [
                  programs.value.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "bdy-programs"
                  }, [
                    createVNode("div", { class: "bdy-programs__head" }, [
                      createVNode("h2", { class: "bm-h2 bdy-ital" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Програмски пристап", "Program Approach")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("p", {
                        class: "bm-lead bm-muted bdy-programs__lead",
                        "data-reveal": "",
                        style: { "--d": "0.15s" }
                      }, toDisplayString(t("Најдобри резултати се постигнуваат кога третманите се комбинираат во структуриран план.", "Best results are achieved when treatments are combined in a structured plan.")), 1)
                    ]),
                    createVNode("div", { class: "bdy-programs__grid" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(programs.value, (program, index) => {
                        return openBlock(), createBlock("article", {
                          key: index,
                          class: "bdy-prog",
                          "data-reveal": "",
                          style: { "--d": `${index * 0.12}s` }
                        }, [
                          createVNode("div", {
                            class: "bdy-prog__arch",
                            "aria-hidden": "true"
                          }, [
                            createVNode("span", { class: "bdy-prog__ring" }),
                            createVNode("span", { class: "bdy-prog__ring" }),
                            createVNode("span", { class: "bdy-prog__ring" }),
                            createVNode("span", { class: "bdy-prog__num bm-numeral" }, toDisplayString(pad(index + 1)), 1)
                          ]),
                          createVNode("h3", { class: "bdy-prog__name" }, toDisplayString(program.name || program), 1),
                          program.desc ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "bdy-prog__desc"
                          }, toDisplayString(program.desc), 1)) : createCommentVNode("", true)
                        ], 4);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  individualPlanPoints.value.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "bdy-plan"
                  }, [
                    createVNode("div", { class: "bdy-plan__head" }, [
                      createVNode("span", {
                        class: "bdy-plan__badge",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "body",
                          size: 28,
                          stroke: 1.3
                        })
                      ]),
                      createVNode("h2", { class: "bm-h2 bdy-ital" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Индивидуален план", "Individual Plan")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("p", {
                        class: "bm-lead bdy-plan__lead",
                        "data-reveal": "",
                        style: { "--d": "0.15s" }
                      }, toDisplayString(t("Секој клиент добива индивидуална препорака според:", "Every client receives an individual recommendation based on:")), 1)
                    ]),
                    createVNode("div", { class: "bdy-plan__body" }, [
                      createVNode("ol", { class: "bdy-plan__list" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(individualPlanPoints.value, (point, i) => {
                          return openBlock(), createBlock("li", {
                            key: point,
                            class: "bdy-plan__item",
                            "data-reveal": "",
                            style: { "--d": `${i * 0.08}s` }
                          }, [
                            createVNode("span", {
                              class: "bdy-plan__num bm-numeral",
                              "aria-hidden": "true"
                            }, toDisplayString(pad(i + 1)), 1),
                            createVNode("span", { class: "bdy-plan__text" }, toDisplayString(point), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("p", {
                        class: "bdy-note",
                        "data-reveal": ""
                      }, [
                        createVNode("span", {
                          class: "bdy-note__icon",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "sparkle",
                            size: 18,
                            stroke: 1.5
                          })
                        ]),
                        createVNode("span", null, toDisplayString(t("Нашата цел е постепено, безбедно и природно подобрување на контурата на телото.", "Our goal is gradual, safe and natural improvement of body contours.")), 1)
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  treatments.value.length ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "bdy-items"
                  }, [
                    createVNode("h2", { class: "bm-h2 bdy-ital" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Наши третмани", "Our Treatments")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("div", { class: "bdy-items__grid" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(treatments.value, (item, i) => {
                        return openBlock(), createBlock("article", {
                          key: item.id,
                          class: "bdy-item",
                          "data-reveal": "",
                          style: { "--d": `${i % 3 * 0.08}s` }
                        }, [
                          createVNode("span", {
                            class: "bdy-item__num",
                            "aria-hidden": "true"
                          }, toDisplayString(pad(i + 1)), 1),
                          createVNode("h3", { class: "bdy-item__name" }, toDisplayString(item.name), 1),
                          item.description ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "bdy-item__desc bm-prose",
                            innerHTML: item.description
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          item.url ? (openBlock(), createBlock("a", {
                            key: 1,
                            href: item.url,
                            class: "bm-link bdy-item__link"
                          }, [
                            createTextVNode(toDisplayString(t("Прочитај повеќе", "Learn more")) + " ", 1),
                            createVNode(_sfc_main$2, { name: "arrow-right" })
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ], 4);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  __props.priceListPdf ? (openBlock(), createBlock("div", {
                    key: 3,
                    id: "pricing",
                    class: "bdy-price bm-grain",
                    "data-reveal": "scale"
                  }, [
                    createVNode("span", {
                      class: "bdy-price__ghost",
                      "aria-hidden": "true"
                    }, [
                      createVNode(_sfc_main$2, {
                        name: "file",
                        stroke: 0.5
                      })
                    ]),
                    createVNode("div", { class: "bdy-price__copy" }, [
                      createVNode("span", {
                        class: "bdy-price__icon",
                        "aria-hidden": "true"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "file",
                          size: 24,
                          stroke: 1.4
                        })
                      ]),
                      createVNode("h2", { class: "bm-h2 bdy-ital bdy-price__title" }, [
                        createVNode(_sfc_main$3, {
                          text: t("Ценовник", "Pricing")
                        }, null, 8, ["text"])
                      ]),
                      createVNode("p", { class: "bdy-price__sub" }, toDisplayString(t("Погледнете го нашиот комплетен ценовник за третмани на тело.", "View our complete price list for body treatments.")), 1)
                    ]),
                    createVNode("div", { class: "bdy-price__actions" }, [
                      createVNode("a", {
                        href: __props.priceListPdf,
                        target: "_blank",
                        rel: "noopener",
                        class: "bm-btn bdy-price__btn"
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
                        class: "bm-btn bm-btn--ghost bdy-price__dl"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "download",
                          size: 16,
                          stroke: 1.8
                        }),
                        createVNode("span", null, toDisplayString(t("Преземи ценовник", "Download Price List")), 1)
                      ], 8, ["href"])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("section", { class: "bdy-cta bm-wine bm-grain" }, [
                createVNode("div", {
                  class: "bm-aura",
                  "aria-hidden": "true"
                }, [
                  createVNode("span"),
                  createVNode("span"),
                  createVNode("span")
                ]),
                createVNode("div", { class: "bm-container bdy-cta__inner" }, [
                  createVNode("div", { class: "bdy-cta__copy" }, [
                    createVNode("h2", { class: "bm-h1 bdy-ital bdy-cta__title" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Интегриран естетски план", "Integrated Aesthetic Plan")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("p", {
                      class: "bm-lead bm-muted bdy-cta__text",
                      "data-reveal": "",
                      style: { "--d": "0.15s" }
                    }, toDisplayString(t("За оптимален резултат, третманите на тело често се комбинираат со козметолошки и медицинско‑естетски процедури во рамките на интегриран естетски план.", "For optimal results, body treatments are often combined with cosmetological and medical-aesthetic procedures within an integrated aesthetic plan.")), 1),
                    createVNode("a", {
                      href: "/contact",
                      class: "bm-btn bdy-cta__btn",
                      "data-reveal": "",
                      style: { "--d": "0.3s" }
                    }, [
                      createVNode("span", null, toDisplayString(t("Закажи консултација", "Book a consultation")), 1),
                      createVNode("span", { class: "bm-btn__icon" }, [
                        createVNode(_sfc_main$2, {
                          name: "arrow-right",
                          stroke: 2
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "bdy-venn",
                    "aria-hidden": "true",
                    "data-reveal": "scale",
                    style: { "--d": "0.2s" }
                  }, [
                    createVNode("span", { class: "bdy-venn__c bdy-venn__c--a" }, [
                      createVNode(_sfc_main$2, {
                        name: "body",
                        size: 30,
                        stroke: 1.2
                      })
                    ]),
                    createVNode("span", { class: "bdy-venn__c bdy-venn__c--b" }, [
                      createVNode(_sfc_main$2, {
                        name: "face",
                        size: 30,
                        stroke: 1.2
                      })
                    ]),
                    createVNode("span", { class: "bdy-venn__c bdy-venn__c--c" }, [
                      createVNode(_sfc_main$2, {
                        name: "injectable",
                        size: 30,
                        stroke: 1.2
                      })
                    ]),
                    createVNode("span", { class: "bdy-venn__core" })
                  ])
                ])
              ]),
              createVNode("section", { class: "bdy-seo bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container bdy-seo__grid" }, [
                  createVNode("h2", {
                    class: "bdy-seo__title",
                    "data-reveal": ""
                  }, toDisplayString(t("Третмани на тело во Скопје – Babor Medical", "Body Treatments in Skopje – Babor Medical")), 1),
                  createVNode("p", {
                    class: "bdy-seo__text",
                    "data-reveal": "",
                    style: { "--d": "0.12s" }
                  }, toDisplayString(t("Babor Medical нуди напредни третмани на тело во Скопје со најсовремена апаратурна естетика. Нашите неинвазивни технологии – Ultraformer, Accent Prime, LaserShape, EM Time и Бодипрес терапија – овозможуваат обликување на тело, намалување на целулит, затегнување на кожа и подобрување на циркулацијата. Индивидуален пристап и програмски третмани за долгорочни резултати.", "Babor Medical offers advanced body treatments in Skopje with state-of-the-art aesthetic technology. Our non-invasive technologies – Ultraformer, Accent Prime, LaserShape, EM Time and Body Press therapy – enable body contouring, cellulite reduction, skin tightening and circulation improvement. Individual approach and program treatments for long-term results.")), 1)
                ])
              ]),
              createVNode("section", { class: "bdy-faq bm-paper bm-section" }, [
                createVNode("div", { class: "bm-container bdy-faq__grid" }, [
                  createVNode("div", { class: "bdy-faq__head" }, [
                    createVNode("h2", { class: "bm-h2 bdy-ital" }, [
                      createVNode(_sfc_main$3, {
                        text: t("Најчесто поставувани прашања", "Frequently Asked Questions")
                      }, null, 8, ["text"])
                    ]),
                    createVNode("span", {
                      class: "bdy-faq__mark",
                      "aria-hidden": "true"
                    }, "?")
                  ]),
                  createVNode("div", {
                    class: "bm-faq bdy-faq__list",
                    "data-reveal": "",
                    style: { "--d": "0.1s" }
                  }, [
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                    }, [
                      createVNode("h3", { class: "bdy-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q0`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 0,
                          "aria-controls": `${unref(faqId)}-a0`,
                          onClick: ($event) => toggleFaq(0)
                        }, [
                          createVNode("span", null, toDisplayString(t("Кои третмани за тело ги нудите во Babor Medical?", "What body treatments do you offer at Babor Medical?")), 1),
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
                          createVNode("p", null, toDisplayString(t("Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит.", "We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                    }, [
                      createVNode("h3", { class: "bdy-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q1`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 1,
                          "aria-controls": `${unref(faqId)}-a1`,
                          onClick: ($event) => toggleFaq(1)
                        }, [
                          createVNode("span", null, toDisplayString(t("Дали третманите за обликување на тело се болни?", "Are body contouring treatments painful?")), 1),
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
                          createVNode("p", null, toDisplayString(t("Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување.", "No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                    }, [
                      createVNode("h3", { class: "bdy-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q2`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 2,
                          "aria-controls": `${unref(faqId)}-a2`,
                          onClick: ($event) => toggleFaq(2)
                        }, [
                          createVNode("span", null, toDisplayString(t("Колку третмани се потребни за видливи резултати?", "How many treatments are needed for visible results?")), 1),
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
                          createVNode("p", null, toDisplayString(t("Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани.", "Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments.")), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 3 }]
                    }, [
                      createVNode("h3", { class: "bdy-faq__h" }, [
                        createVNode("button", {
                          id: `${unref(faqId)}-q3`,
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 3,
                          "aria-controls": `${unref(faqId)}-a3`,
                          onClick: ($event) => toggleFaq(3)
                        }, [
                          createVNode("span", null, toDisplayString(t("Колку чинат третманите за тело во Скопје?", "How much do body treatments cost in Skopje?")), 1),
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
                          createVNode("p", null, toDisplayString(t("Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.", "Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/BodyTreatmentsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BodyTreatmentsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a14e35c8"]]);
export {
  BodyTreatmentsPage as default
};
