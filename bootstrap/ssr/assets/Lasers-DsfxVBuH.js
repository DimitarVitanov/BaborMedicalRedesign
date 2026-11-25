import { computed, ref, useId, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createSlots, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-BRbHwAyL.js";
import { P as PageHero } from "./PageHero-weEXGCUL.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-Dygre8wB.js";
import { M as Marquee } from "./Marquee-CLHOaSZR.js";
import { R as RotatingBadge } from "./RotatingBadge-DteQ512n.js";
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
    const props = __props;
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
    const pad = (n) => String(n).padStart(2, "0");
    const heroTitle = computed(() => {
      const words = String(content.value.title || "").trim().split(/\s+/);
      return words.length > 1 ? { main: words.slice(0, -1).join(" "), accent: words[words.length - 1] } : { main: words[0] || "", accent: "" };
    });
    const anchorFor = (item) => item.slug || `device-${item.id}`;
    const heroDevices = computed(() => (props.equipment || []).slice(0, 3));
    const deviceNames = computed(() => (props.equipment || []).map((item) => item.title).filter(Boolean));
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
            _push2(`<title data-v-ebeaa77f${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-ebeaa77f${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "ласери, ласерска епилација, Alma Soprano, естетска медицина, Babor Medical, Скопје" : "lasers, laser hair removal, Alma Soprano, aesthetic medicine, Babor Medical, Skopje")} data-v-ebeaa77f${_scopeId}><meta name="robots" content="index, follow" data-v-ebeaa77f${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-ebeaa77f${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-ebeaa77f${_scopeId}><meta property="og:type" content="website" data-v-ebeaa77f${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-ebeaa77f${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-ebeaa77f${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-ebeaa77f${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-ebeaa77f${_scopeId}><link rel="canonical" href="https://babormedical.com/lasers" data-v-ebeaa77f${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/lasers?lang=en" data-v-ebeaa77f${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/lasers?lang=mk" data-v-ebeaa77f${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/lasers" data-v-ebeaa77f${_scopeId}>`);
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lasers-page" data-v-ebeaa77f${_scopeId}>`);
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: content.value.badge,
              title: heroTitle.value.main,
              accent: heroTitle.value.accent,
              subtitle: content.value.subtitle,
              crumb: content.value.title
            }, createSlots({
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.equipment.length) {
                    _push3(`<nav class="lz-jump"${ssrRenderAttr("aria-label", content.value.title)} data-v-ebeaa77f${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.equipment, (item, index) => {
                      _push3(`<a${ssrRenderAttr("href", `#${anchorFor(item)}`)} class="lz-jump__item" data-v-ebeaa77f${_scopeId2}><span class="lz-jump__n" data-v-ebeaa77f${_scopeId2}>${ssrInterpolate(pad(index + 1))}</span><span class="lz-jump__t" data-v-ebeaa77f${_scopeId2}>${ssrInterpolate(item.title)}</span>`);
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        name: "arrow-down",
                        size: 14,
                        stroke: 1.8
                      }, null, _parent3, _scopeId2));
                      _push3(`</a>`);
                    });
                    _push3(`<!--]--></nav>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.equipment.length ? (openBlock(), createBlock("nav", {
                      key: 0,
                      class: "lz-jump",
                      "aria-label": content.value.title
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment, (item, index) => {
                        return openBlock(), createBlock("a", {
                          key: `jump-${item.id}`,
                          href: `#${anchorFor(item)}`,
                          class: "lz-jump__item"
                        }, [
                          createVNode("span", { class: "lz-jump__n" }, toDisplayString(pad(index + 1)), 1),
                          createVNode("span", { class: "lz-jump__t" }, toDisplayString(item.title), 1),
                          createVNode(_sfc_main$2, {
                            name: "arrow-down",
                            size: 14,
                            stroke: 1.8
                          })
                        ], 8, ["href"]);
                      }), 128))
                    ], 8, ["aria-label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              heroDevices.value.length ? {
                name: "aside",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="lz-fan" aria-hidden="true" data-v-ebeaa77f${_scopeId2}><!--[-->`);
                    ssrRenderList(heroDevices.value, (item, i) => {
                      _push3(`<div class="${ssrRenderClass([`is-${i + 1}`, "lz-fan__arch bm-stage"])}" data-v-ebeaa77f${_scopeId2}><span class="lz-fan__ring" data-v-ebeaa77f${_scopeId2}></span><img${ssrRenderAttr("src", "/storage/" + (item.image_desktop_webp || item.image))} alt="" width="400" height="400" loading="eager" decoding="async" data-v-ebeaa77f${_scopeId2}><span class="lz-fan__num" data-v-ebeaa77f${_scopeId2}>${ssrInterpolate(pad(i + 1))}</span></div>`);
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(RotatingBadge, {
                      class: "lz-fan__seal",
                      size: 120
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "lz-fan",
                        "aria-hidden": "true"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(heroDevices.value, (item, i) => {
                          return openBlock(), createBlock("div", {
                            key: `fan-${item.id}`,
                            class: ["lz-fan__arch bm-stage", `is-${i + 1}`]
                          }, [
                            createVNode("span", { class: "lz-fan__ring" }),
                            createVNode("img", {
                              src: "/storage/" + (item.image_desktop_webp || item.image),
                              alt: "",
                              width: "400",
                              height: "400",
                              loading: "eager",
                              decoding: "async"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "lz-fan__num" }, toDisplayString(pad(i + 1)), 1)
                          ], 2);
                        }), 128)),
                        createVNode(RotatingBadge, {
                          class: "lz-fan__seal",
                          size: 120
                        })
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(`<section class="lz-devices bm-cream bm-sheet bm-section" data-v-ebeaa77f${_scopeId}><div class="bm-container" data-v-ebeaa77f${_scopeId}><!--[-->`);
            ssrRenderList(__props.equipment, (item, index) => {
              _push2(`<article${ssrRenderAttr("id", anchorFor(item))} class="${ssrRenderClass([{ "is-reverse": index % 2 === 1 }, "lz-device"])}" data-v-ebeaa77f${_scopeId}><div class="lz-device__visual" data-reveal="scale" data-v-ebeaa77f${_scopeId}><div class="lz-device__stage bm-stage" data-v-ebeaa77f${_scopeId}><span class="lz-device__ring" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span><span class="lz-device__glow" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span><div class="lz-device__float" data-v-ebeaa77f${_scopeId}><picture data-v-ebeaa77f${_scopeId}>`);
              if (item.image_mobile_webp) {
                _push2(`<source${ssrRenderAttr("srcset", "/storage/" + item.image_mobile_webp)} media="(max-width: 768px)" type="image/webp" data-v-ebeaa77f${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.image_desktop_webp) {
                _push2(`<source${ssrRenderAttr("srcset", "/storage/" + item.image_desktop_webp)} media="(min-width: 769px)" type="image/webp" data-v-ebeaa77f${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<img${ssrRenderAttr("src", item.image ? "/storage/" + item.image : "/images/placeholder.webp")}${ssrRenderAttr("alt", item.title)} width="800" height="800" loading="lazy" decoding="async" data-v-ebeaa77f${_scopeId}></picture></div></div><span class="lz-device__tag" aria-hidden="true" data-v-ebeaa77f${_scopeId}><span data-v-ebeaa77f${_scopeId}>${ssrInterpolate(pad(index + 1))}</span><span class="lz-device__tag-line" data-v-ebeaa77f${_scopeId}></span><span data-v-ebeaa77f${_scopeId}>${ssrInterpolate(pad(__props.equipment.length))}</span></span></div><div class="lz-device__body" data-v-ebeaa77f${_scopeId}><div class="lz-device__head" data-v-ebeaa77f${_scopeId}><span class="lz-device__num bm-numeral" aria-hidden="true" data-reveal="fade" data-v-ebeaa77f${_scopeId}>${ssrInterpolate(pad(index + 1))}</span><span class="lz-device__cat" data-reveal style="${ssrRenderStyle({ "--d": "0.05s" })}" data-v-ebeaa77f${_scopeId}>${ssrInterpolate(item.category)}</span></div><h2 class="bm-h2 lz-device__title" data-v-ebeaa77f${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: item.title,
                delay: 0.1
              }, null, _parent2, _scopeId));
              _push2(`</h2><span class="lz-device__rule" data-reveal="fade" style="${ssrRenderStyle({ "--d": "0.2s" })}" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span><p class="bm-lead lz-device__desc" data-reveal style="${ssrRenderStyle({ "--d": "0.25s" })}" data-v-ebeaa77f${_scopeId}>${ssrInterpolate(item.description)}</p><div class="lz-device__actions" data-reveal style="${ssrRenderStyle({ "--d": "0.35s" })}" data-v-ebeaa77f${_scopeId}>`);
              if (item.slug) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: `/lasers/${item.slug}`,
                  class: "bm-btn bm-btn--wine"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-ebeaa77f${_scopeId2}>${ssrInterpolate(content.value.viewDetails)}</span><span class="bm-btn__icon" data-v-ebeaa77f${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        name: "arrow-right",
                        stroke: 2
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(content.value.viewDetails), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "arrow-right",
                            stroke: 2
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></article>`);
            });
            _push2(`<!--]--></div></section>`);
            if (deviceNames.value.length) {
              _push2(`<div class="lz-ribbons" aria-hidden="true" data-v-ebeaa77f${_scopeId}>`);
              _push2(ssrRenderComponent(Marquee, {
                items: deviceNames.value,
                variant: "wine",
                tilt: -2.5,
                duration: 44
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Marquee, {
                items: deviceNames.value,
                variant: "outline",
                tilt: 2,
                duration: 52,
                reverse: ""
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><section class="lz-faq bm-wine bm-section bm-grain" data-v-ebeaa77f${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-ebeaa77f${_scopeId}><span data-v-ebeaa77f${_scopeId}></span><span data-v-ebeaa77f${_scopeId}></span><span data-v-ebeaa77f${_scopeId}></span></div><div class="bm-container lz-faq__grid" data-v-ebeaa77f${_scopeId}><div class="lz-faq__head" data-v-ebeaa77f${_scopeId}><span class="lz-faq__mark bm-numeral" aria-hidden="true" data-v-ebeaa77f${_scopeId}>?</span><h2 class="bm-h2 lz-faq__title" data-v-ebeaa77f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="bm-faq lz-faq__list" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-ebeaa77f${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-ebeaa77f${_scopeId}><h3 class="lz-faq__h" data-v-ebeaa77f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 0 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-0`)} data-v-ebeaa77f${_scopeId}><span data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Кои ласери ги користи Babor Medical?" : "What lasers does Babor Medical use?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-0`)} class="bm-faq__a" role="region" data-v-ebeaa77f${_scopeId}><div data-v-ebeaa77f${_scopeId}><p data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење." : "Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-ebeaa77f${_scopeId}><h3 class="lz-faq__h" data-v-ebeaa77f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 1 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-1`)} data-v-ebeaa77f${_scopeId}><span data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Што е Alma Soprano Titanium?" : "What is Alma Soprano Titanium?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-1`)} class="bm-faq__a" role="region" data-v-ebeaa77f${_scopeId}><div data-v-ebeaa77f${_scopeId}><p data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење." : "Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-ebeaa77f${_scopeId}><h3 class="lz-faq__h" data-v-ebeaa77f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 2 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqId)}-2`)} data-v-ebeaa77f${_scopeId}><span data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Што е Ultraformer лифтинг?" : "What is Ultraformer lifting?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-ebeaa77f${_scopeId}></span></button></h3><div${ssrRenderAttr("id", `${unref(faqId)}-2`)} class="bm-faq__a" role="region" data-v-ebeaa77f${_scopeId}><div data-v-ebeaa77f${_scopeId}><p data-v-ebeaa77f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Ultraformer е HIFU технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција." : "Ultraformer is HIFU technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention.")}</p></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode("div", { class: "lasers-page" }, [
                createVNode(PageHero, {
                  eyebrow: content.value.badge,
                  title: heroTitle.value.main,
                  accent: heroTitle.value.accent,
                  subtitle: content.value.subtitle,
                  crumb: content.value.title
                }, createSlots({
                  default: withCtx(() => [
                    __props.equipment.length ? (openBlock(), createBlock("nav", {
                      key: 0,
                      class: "lz-jump",
                      "aria-label": content.value.title
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment, (item, index) => {
                        return openBlock(), createBlock("a", {
                          key: `jump-${item.id}`,
                          href: `#${anchorFor(item)}`,
                          class: "lz-jump__item"
                        }, [
                          createVNode("span", { class: "lz-jump__n" }, toDisplayString(pad(index + 1)), 1),
                          createVNode("span", { class: "lz-jump__t" }, toDisplayString(item.title), 1),
                          createVNode(_sfc_main$2, {
                            name: "arrow-down",
                            size: 14,
                            stroke: 1.8
                          })
                        ], 8, ["href"]);
                      }), 128))
                    ], 8, ["aria-label"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, [
                  heroDevices.value.length ? {
                    name: "aside",
                    fn: withCtx(() => [
                      createVNode("div", {
                        class: "lz-fan",
                        "aria-hidden": "true"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(heroDevices.value, (item, i) => {
                          return openBlock(), createBlock("div", {
                            key: `fan-${item.id}`,
                            class: ["lz-fan__arch bm-stage", `is-${i + 1}`]
                          }, [
                            createVNode("span", { class: "lz-fan__ring" }),
                            createVNode("img", {
                              src: "/storage/" + (item.image_desktop_webp || item.image),
                              alt: "",
                              width: "400",
                              height: "400",
                              loading: "eager",
                              decoding: "async"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "lz-fan__num" }, toDisplayString(pad(i + 1)), 1)
                          ], 2);
                        }), 128)),
                        createVNode(RotatingBadge, {
                          class: "lz-fan__seal",
                          size: 120
                        })
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["eyebrow", "title", "accent", "subtitle", "crumb"]),
                createVNode("section", { class: "lz-devices bm-cream bm-sheet bm-section" }, [
                  createVNode("div", { class: "bm-container" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment, (item, index) => {
                      return openBlock(), createBlock("article", {
                        id: anchorFor(item),
                        key: item.id,
                        class: ["lz-device", { "is-reverse": index % 2 === 1 }]
                      }, [
                        createVNode("div", {
                          class: "lz-device__visual",
                          "data-reveal": "scale"
                        }, [
                          createVNode("div", { class: "lz-device__stage bm-stage" }, [
                            createVNode("span", {
                              class: "lz-device__ring",
                              "aria-hidden": "true"
                            }),
                            createVNode("span", {
                              class: "lz-device__glow",
                              "aria-hidden": "true"
                            }),
                            createVNode("div", { class: "lz-device__float" }, [
                              createVNode("picture", null, [
                                item.image_mobile_webp ? (openBlock(), createBlock("source", {
                                  key: 0,
                                  srcset: "/storage/" + item.image_mobile_webp,
                                  media: "(max-width: 768px)",
                                  type: "image/webp"
                                }, null, 8, ["srcset"])) : createCommentVNode("", true),
                                item.image_desktop_webp ? (openBlock(), createBlock("source", {
                                  key: 1,
                                  srcset: "/storage/" + item.image_desktop_webp,
                                  media: "(min-width: 769px)",
                                  type: "image/webp"
                                }, null, 8, ["srcset"])) : createCommentVNode("", true),
                                createVNode("img", {
                                  src: item.image ? "/storage/" + item.image : "/images/placeholder.webp",
                                  alt: item.title,
                                  width: "800",
                                  height: "800",
                                  loading: "lazy",
                                  decoding: "async"
                                }, null, 8, ["src", "alt"])
                              ])
                            ])
                          ]),
                          createVNode("span", {
                            class: "lz-device__tag",
                            "aria-hidden": "true"
                          }, [
                            createVNode("span", null, toDisplayString(pad(index + 1)), 1),
                            createVNode("span", { class: "lz-device__tag-line" }),
                            createVNode("span", null, toDisplayString(pad(__props.equipment.length)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "lz-device__body" }, [
                          createVNode("div", { class: "lz-device__head" }, [
                            createVNode("span", {
                              class: "lz-device__num bm-numeral",
                              "aria-hidden": "true",
                              "data-reveal": "fade"
                            }, toDisplayString(pad(index + 1)), 1),
                            createVNode("span", {
                              class: "lz-device__cat",
                              "data-reveal": "",
                              style: { "--d": "0.05s" }
                            }, toDisplayString(item.category), 1)
                          ]),
                          createVNode("h2", { class: "bm-h2 lz-device__title" }, [
                            createVNode(_sfc_main$3, {
                              text: item.title,
                              delay: 0.1
                            }, null, 8, ["text"])
                          ]),
                          createVNode("span", {
                            class: "lz-device__rule",
                            "data-reveal": "fade",
                            style: { "--d": "0.2s" },
                            "aria-hidden": "true"
                          }),
                          createVNode("p", {
                            class: "bm-lead lz-device__desc",
                            "data-reveal": "",
                            style: { "--d": "0.25s" }
                          }, toDisplayString(item.description), 1),
                          createVNode("div", {
                            class: "lz-device__actions",
                            "data-reveal": "",
                            style: { "--d": "0.35s" }
                          }, [
                            item.slug ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: `/lasers/${item.slug}`,
                              class: "bm-btn bm-btn--wine"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(content.value.viewDetails), 1),
                                createVNode("span", { class: "bm-btn__icon" }, [
                                  createVNode(_sfc_main$2, {
                                    name: "arrow-right",
                                    stroke: 2
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ])
                      ], 10, ["id"]);
                    }), 128))
                  ])
                ]),
                deviceNames.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "lz-ribbons",
                  "aria-hidden": "true"
                }, [
                  createVNode(Marquee, {
                    items: deviceNames.value,
                    variant: "wine",
                    tilt: -2.5,
                    duration: 44
                  }, null, 8, ["items"]),
                  createVNode(Marquee, {
                    items: deviceNames.value,
                    variant: "outline",
                    tilt: 2,
                    duration: 52,
                    reverse: ""
                  }, null, 8, ["items"])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("section", { class: "lz-faq bm-wine bm-section bm-grain" }, [
                createVNode("div", {
                  class: "bm-aura",
                  "aria-hidden": "true"
                }, [
                  createVNode("span"),
                  createVNode("span"),
                  createVNode("span")
                ]),
                createVNode("div", { class: "bm-container lz-faq__grid" }, [
                  createVNode("div", { class: "lz-faq__head" }, [
                    createVNode("span", {
                      class: "lz-faq__mark bm-numeral",
                      "aria-hidden": "true"
                    }, "?"),
                    createVNode("h2", { class: "bm-h2 lz-faq__title" }, [
                      createVNode(_sfc_main$3, {
                        text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
                      }, null, 8, ["text"])
                    ])
                  ]),
                  createVNode("div", {
                    class: "bm-faq lz-faq__list",
                    "data-reveal": "",
                    style: { "--d": "0.15s" }
                  }, [
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                    }, [
                      createVNode("h3", { class: "lz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 0 ? "true" : "false",
                          "aria-controls": `${unref(faqId)}-0`,
                          onClick: ($event) => toggleFaq(0)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Кои ласери ги користи Babor Medical?" : "What lasers does Babor Medical use?"), 1),
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
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Babor Medical користи Alma Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Alma Q за пигментации, Ultraformer за HIFU лифтинг, Derma Clear за акни и Hydrafacial Syndeo за длабоко чистење." : "Babor Medical uses Alma Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Alma Q for pigmentation, Ultraformer for HIFU lifting, Derma Clear for acne and Hydrafacial Syndeo for deep cleansing."), 1)
                        ])
                      ], 8, ["id"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                    }, [
                      createVNode("h3", { class: "lz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 1 ? "true" : "false",
                          "aria-controls": `${unref(faqId)}-1`,
                          onClick: ($event) => toggleFaq(1)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Што е Alma Soprano Titanium?" : "What is Alma Soprano Titanium?"), 1),
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
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Alma Soprano Titanium е најнапредниот ласер за епилација кој комбинира три бранови должини (755nm, 810nm, 1064nm) во една сонда. Обезбедува безболна и ефективна ласерска епилација за сите типови кожа со ICE Plus систем за ладење." : "Alma Soprano Titanium is the most advanced laser for hair removal combining three wavelengths (755nm, 810nm, 1064nm) in one probe. It provides painless and effective laser hair removal for all skin types with ICE Plus cooling system."), 1)
                        ])
                      ], 8, ["id"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                    }, [
                      createVNode("h3", { class: "lz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 2 ? "true" : "false",
                          "aria-controls": `${unref(faqId)}-2`,
                          onClick: ($event) => toggleFaq(2)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Што е Ultraformer лифтинг?" : "What is Ultraformer lifting?"), 1),
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
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Ultraformer е HIFU технологија за неинвазивен лифтинг на лице и тело. Стимулира продукција на колаген и обезбедува затегнување на кожата без хируршка интервенција." : "Ultraformer is HIFU technology for non-invasive face and body lifting. It stimulates collagen production and provides skin tightening without surgical intervention."), 1)
                        ])
                      ], 8, ["id"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lasers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Lasers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebeaa77f"]]);
export {
  Lasers as default
};
