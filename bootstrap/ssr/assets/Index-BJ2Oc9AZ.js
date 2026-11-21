import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-B_i8FHxn.js";
import { P as PageHero } from "./PageHero-DJ_0bjbt.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-D-2r2JUh.js";
import { M as Marquee } from "./Marquee-DRBFwWuw.js";
import { S as ScrollWords } from "./ScrollWords-Cljcku_x.js";
import { R as RotatingBadge } from "./RotatingBadge-BD3v2tF1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const content = computed(() => ({
      badge: locale.value === "mk" ? "НАШИ УСЛУГИ" : "OUR SERVICES",
      title: locale.value === "mk" ? "Изберете Категорија" : "Choose a Category",
      subtitle: locale.value === "mk" ? "Откријте ги нашите професионални третмани за убавина и подмладување" : "Discover our professional beauty and rejuvenation treatments"
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
            "logo": "https://babormedical.com/logo.webp",
            "telephone": "+389 75 340 933",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Skopje",
              "addressCountry": "MK"
            },
            "priceRange": "$$"
          },
          {
            "@type": "ItemList",
            "name": locale.value === "mk" ? "Естетски услуги на Babor Medical" : "Babor Medical Aesthetic Services",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": locale.value === "mk" ? "Козметологија" : "Cosmetology", "url": "https://babormedical.com/services/cosmetology" },
              { "@type": "ListItem", "position": 2, "name": locale.value === "mk" ? "Ласерско естетски третмани" : "Laser Aesthetic Treatments", "url": "https://babormedical.com/services/laser-aesthetic" },
              { "@type": "ListItem", "position": 3, "name": locale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods", "url": "https://babormedical.com/services/injectable-methods" },
              { "@type": "ListItem", "position": 4, "name": locale.value === "mk" ? "Третмани на тело" : "Body Treatments", "url": "https://babormedical.com/services/body-treatments" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои естетски услуги ги нуди Babor Medical?" : "What aesthetic services does Babor Medical offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical нуди четири категории на услуги: козметологија со BABOR протоколи, ласерско естетски третмани (ласерска епилација, подмладување, пигментации), инјектибилни методи (филери, ботокс, биостимулација, мезотерапија) и апаратурни третмани на тело (обликување, затегнување, антицелулит)." : "Babor Medical offers four service categories: cosmetology with BABOR protocols, laser aesthetic treatments (hair removal, rejuvenation, pigmentation), injectable methods (fillers, botox, biostimulation, mesotherapy) and body treatments (contouring, tightening, anti-cellulite)."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Како да изберам вистински третман?" : "How do I choose the right treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Закажете бесплатна консултација во Babor Medical каде нашите специјалисти ќе ги проценат вашите потреби и ќе ви препорачаат најсоодветен третман. Контактирајте нè на +389 75 340 933." : "Book a free consultation at Babor Medical where our specialists will assess your needs and recommend the most suitable treatment. Contact us at +389 75 340 933."
                }
              }
            ]
          }
        ]
      });
    });
    const categories = computed(() => [
      {
        id: "cosmetology",
        name: locale.value === "mk" ? "Козметологија" : "Cosmetology",
        description: locale.value === "mk" ? "Професионални козметички третмани за совршена кожа и природна убавина" : "Professional cosmetic treatments for perfect skin and natural beauty",
        href: "/services/cosmetology",
        icon: "sparkles"
      },
      {
        id: "laser",
        name: locale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments",
        description: locale.value === "mk" ? "Напредни ласерски третмани за подмладување, депилација и корекција на кожата" : "Advanced laser treatments for rejuvenation, hair removal and skin correction",
        href: "/services/laser-aesthetic",
        icon: "laser"
      },
      {
        id: "injectable",
        name: locale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods",
        description: locale.value === "mk" ? "Прецизна апликација, биолошка регенерација и контролирана естетика" : "Precise application, biological regeneration and controlled aesthetics",
        href: "/services/injectable-methods",
        icon: "injectable"
      },
      {
        id: "body",
        name: locale.value === "mk" ? "Третмани на тело" : "Body Treatments",
        description: locale.value === "mk" ? "Апаратурна естетика за обликување на телото и подобрување на квалитетот на кожата" : "Advanced aesthetics for body contouring and skin quality improvement",
        href: "/services/body-treatments",
        icon: "body"
      }
    ]);
    const pad = (n) => String(n).padStart(2, "0");
    const iconFor = (icon) => icon === "sparkles" ? "sparkle" : icon;
    const splitLast = (text) => {
      const words = String(text || "").trim().split(/\s+/);
      return words.length > 1 ? [words.slice(0, -1).join(" "), words[words.length - 1]] : [String(text || ""), ""];
    };
    const heroTitle = computed(() => splitLast(content.value.title));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-d0cf8504${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Услуги – Ласерски третмани, Козметологија, Инјектибилни методи | Babor Medical" : "Services – Laser Treatments, Cosmetology, Injectable Methods | Babor Medical")}</title><meta name="description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје: ласерски третмани, козметологија, инјектибилни методи и третмани на тело." : "Professional aesthetic services at Babor Medical Skopje: laser treatments, cosmetology, injectable methods and body treatments.")} data-v-d0cf8504${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "услуги скопје, естетски третмани, ласерски третмани скопје, козметологија, инјектибилни методи, третмани на тело, Babor Medical" : "services skopje, aesthetic treatments, laser treatments skopje, cosmetology, injectable methods, body treatments, Babor Medical")} data-v-d0cf8504${_scopeId}><meta name="author" content="Babor Medical" data-v-d0cf8504${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-d0cf8504${_scopeId}><meta property="og:title"${ssrRenderAttr("content", locale.value === "mk" ? "Услуги – Babor Medical Скопје" : "Services – Babor Medical Skopje")} data-v-d0cf8504${_scopeId}><meta property="og:description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje.")} data-v-d0cf8504${_scopeId}><meta property="og:type" content="website" data-v-d0cf8504${_scopeId}><meta property="og:url" content="https://babormedical.com/services" data-v-d0cf8504${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-d0cf8504${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-d0cf8504${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-d0cf8504${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-d0cf8504${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", locale.value === "mk" ? "Услуги – Babor Medical" : "Services – Babor Medical")} data-v-d0cf8504${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje.")} data-v-d0cf8504${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-d0cf8504${_scopeId}><link rel="canonical" href="https://babormedical.com/services" data-v-d0cf8504${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services?lang=en" data-v-d0cf8504${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services?lang=mk" data-v-d0cf8504${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services" data-v-d0cf8504${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
          } else {
            return [
              createVNode("title", null, toDisplayString(locale.value === "mk" ? "Услуги – Ласерски третмани, Козметологија, Инјектибилни методи | Babor Medical" : "Services – Laser Treatments, Cosmetology, Injectable Methods | Babor Medical"), 1),
              createVNode("meta", {
                name: "description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје: ласерски третмани, козметологија, инјектибилни методи и третмани на тело." : "Professional aesthetic services at Babor Medical Skopje: laser treatments, cosmetology, injectable methods and body treatments."
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "услуги скопје, естетски третмани, ласерски третмани скопје, козметологија, инјектибилни методи, третмани на тело, Babor Medical" : "services skopje, aesthetic treatments, laser treatments skopje, cosmetology, injectable methods, body treatments, Babor Medical"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "author",
                content: "Babor Medical"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index, follow, max-image-preview:large, max-snippet:-1"
              }),
              createVNode("meta", {
                property: "og:title",
                content: locale.value === "mk" ? "Услуги – Babor Medical Скопје" : "Services – Babor Medical Skopje"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje."
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://babormedical.com/services"
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
                content: locale.value === "mk" ? "Услуги – Babor Medical" : "Services – Babor Medical"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: locale.value === "mk" ? "Професионални естетски услуги во Babor Medical Скопје." : "Professional aesthetic services at Babor Medical Skopje."
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/services"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services"
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
              eyebrow: content.value.badge,
              title: heroTitle.value[0],
              accent: heroTitle.value[1],
              crumb: locale.value === "mk" ? "Услуги" : "Services",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<nav class="sv-jump"${ssrRenderAttr("aria-label", locale.value === "mk" ? "Категории" : "Categories")} data-v-d0cf8504${_scopeId2}><!--[-->`);
                  ssrRenderList(categories.value, (category, index) => {
                    _push3(`<a${ssrRenderAttr("href", category.href)} class="sv-jump__chip" data-v-d0cf8504${_scopeId2}><span class="sv-jump__idx" data-v-d0cf8504${_scopeId2}>${ssrInterpolate(pad(index + 1))}</span>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: iconFor(category.icon),
                      size: 16,
                      stroke: 1.5
                    }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-d0cf8504${_scopeId2}>${ssrInterpolate(category.name)}</span></a>`);
                  });
                  _push3(`<!--]--></nav>`);
                } else {
                  return [
                    createVNode("nav", {
                      class: "sv-jump",
                      "aria-label": locale.value === "mk" ? "Категории" : "Categories"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, index) => {
                        return openBlock(), createBlock("a", {
                          key: `jump-${category.id}`,
                          href: category.href,
                          class: "sv-jump__chip"
                        }, [
                          createVNode("span", { class: "sv-jump__idx" }, toDisplayString(pad(index + 1)), 1),
                          createVNode(_sfc_main$2, {
                            name: iconFor(category.icon),
                            size: 16,
                            stroke: 1.5
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(category.name), 1)
                        ], 8, ["href"]);
                      }), 128))
                    ], 8, ["aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="sv-ribbons" aria-hidden="true" data-v-d0cf8504${_scopeId}>`);
            _push2(ssrRenderComponent(Marquee, {
              items: categories.value.map((c) => c.name),
              variant: "wine",
              tilt: -3,
              duration: 40
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Marquee, {
              items: categories.value.map((c) => c.name),
              variant: "outline",
              tilt: 2.2,
              duration: 46,
              reverse: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><section class="sv-cats bm-cream bm-sheet bm-section" data-v-d0cf8504${_scopeId}><div class="bm-container" data-v-d0cf8504${_scopeId}><div class="sv-cats__head" data-v-d0cf8504${_scopeId}><div class="sv-cats__intro" data-v-d0cf8504${_scopeId}><span class="bm-eyebrow" data-reveal data-v-d0cf8504${_scopeId}>${ssrInterpolate(content.value.badge)}</span>`);
            _push2(ssrRenderComponent(ScrollWords, {
              text: content.value.subtitle,
              tag: "p",
              class: "sv-cats__lede"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="sv-cats__count bm-numeral" aria-hidden="true" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-d0cf8504${_scopeId}>${ssrInterpolate(pad(categories.value.length))}</span></div><div class="sv-list" data-v-d0cf8504${_scopeId}><!--[-->`);
            ssrRenderList(categories.value, (category, index) => {
              _push2(`<a${ssrRenderAttr("href", category.href)} class="sv-row" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.08}s` })}" data-v-d0cf8504${_scopeId}><span class="sv-row__num bm-numeral" aria-hidden="true" data-v-d0cf8504${_scopeId}>${ssrInterpolate(pad(index + 1))}</span><div class="sv-row__main" data-v-d0cf8504${_scopeId}><span class="sv-row__icon" data-v-d0cf8504${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: iconFor(category.icon),
                size: 22,
                stroke: 1.4
              }, null, _parent2, _scopeId));
              _push2(`</span><h2 class="sv-row__name" data-v-d0cf8504${_scopeId}>${ssrInterpolate(category.name)}</h2></div><p class="sv-row__desc" data-v-d0cf8504${_scopeId}>${ssrInterpolate(category.description)}</p><span class="sv-row__cta" data-v-d0cf8504${_scopeId}><span class="sv-row__cta-label" data-v-d0cf8504${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Погледни Третмани" : "View Treatments")}</span><span class="sv-row__cta-icon" data-v-d0cf8504${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "arrow-right",
                size: 20,
                stroke: 1.6
              }, null, _parent2, _scopeId));
              _push2(`</span></span></a>`);
            });
            _push2(`<!--]--></div><div class="sv-cta bm-wine bm-grain" data-reveal data-v-d0cf8504${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-d0cf8504${_scopeId}><span data-v-d0cf8504${_scopeId}></span><span data-v-d0cf8504${_scopeId}></span><span data-v-d0cf8504${_scopeId}></span></div><div class="sv-cta__inner" data-v-d0cf8504${_scopeId}><h2 class="bm-h2 sv-cta__title" data-v-d0cf8504${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Не сте сигурни кој третман е за вас?" : "Not sure which treatment is for you?"
            }, null, _parent2, _scopeId));
            _push2(`</h2><div class="sv-cta__side" data-v-d0cf8504${_scopeId}><p class="bm-lead sv-cta__text" data-v-d0cf8504${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Закажете бесплатна консултација со нашите експерти" : "Book a free consultation with our experts")}</p><a href="/contact" class="bm-btn sv-cta__btn" data-v-d0cf8504${_scopeId}><span data-v-d0cf8504${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation")}</span><span class="bm-btn__icon" data-v-d0cf8504${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span></a></div></div><div class="sv-cta__seal" aria-hidden="true" data-v-d0cf8504${_scopeId}>`);
            _push2(ssrRenderComponent(RotatingBadge, { size: 140 }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: content.value.badge,
                title: heroTitle.value[0],
                accent: heroTitle.value[1],
                crumb: locale.value === "mk" ? "Услуги" : "Services",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("nav", {
                    class: "sv-jump",
                    "aria-label": locale.value === "mk" ? "Категории" : "Categories"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, index) => {
                      return openBlock(), createBlock("a", {
                        key: `jump-${category.id}`,
                        href: category.href,
                        class: "sv-jump__chip"
                      }, [
                        createVNode("span", { class: "sv-jump__idx" }, toDisplayString(pad(index + 1)), 1),
                        createVNode(_sfc_main$2, {
                          name: iconFor(category.icon),
                          size: 16,
                          stroke: 1.5
                        }, null, 8, ["name"]),
                        createVNode("span", null, toDisplayString(category.name), 1)
                      ], 8, ["href"]);
                    }), 128))
                  ], 8, ["aria-label"])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "accent", "crumb"]),
              createVNode("div", {
                class: "sv-ribbons",
                "aria-hidden": "true"
              }, [
                createVNode(Marquee, {
                  items: categories.value.map((c) => c.name),
                  variant: "wine",
                  tilt: -3,
                  duration: 40
                }, null, 8, ["items"]),
                createVNode(Marquee, {
                  items: categories.value.map((c) => c.name),
                  variant: "outline",
                  tilt: 2.2,
                  duration: 46,
                  reverse: ""
                }, null, 8, ["items"])
              ]),
              createVNode("section", { class: "sv-cats bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("div", { class: "sv-cats__head" }, [
                    createVNode("div", { class: "sv-cats__intro" }, [
                      createVNode("span", {
                        class: "bm-eyebrow",
                        "data-reveal": ""
                      }, toDisplayString(content.value.badge), 1),
                      createVNode(ScrollWords, {
                        text: content.value.subtitle,
                        tag: "p",
                        class: "sv-cats__lede"
                      }, null, 8, ["text"])
                    ]),
                    createVNode("span", {
                      class: "sv-cats__count bm-numeral",
                      "aria-hidden": "true",
                      "data-reveal": "",
                      style: { "--d": "0.15s" }
                    }, toDisplayString(pad(categories.value.length)), 1)
                  ]),
                  createVNode("div", { class: "sv-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, index) => {
                      return openBlock(), createBlock("a", {
                        key: category.id,
                        href: category.href,
                        class: "sv-row",
                        "data-reveal": "",
                        style: { "--d": `${index * 0.08}s` }
                      }, [
                        createVNode("span", {
                          class: "sv-row__num bm-numeral",
                          "aria-hidden": "true"
                        }, toDisplayString(pad(index + 1)), 1),
                        createVNode("div", { class: "sv-row__main" }, [
                          createVNode("span", { class: "sv-row__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: iconFor(category.icon),
                              size: 22,
                              stroke: 1.4
                            }, null, 8, ["name"])
                          ]),
                          createVNode("h2", { class: "sv-row__name" }, toDisplayString(category.name), 1)
                        ]),
                        createVNode("p", { class: "sv-row__desc" }, toDisplayString(category.description), 1),
                        createVNode("span", { class: "sv-row__cta" }, [
                          createVNode("span", { class: "sv-row__cta-label" }, toDisplayString(locale.value === "mk" ? "Погледни Третмани" : "View Treatments"), 1),
                          createVNode("span", { class: "sv-row__cta-icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-right",
                              size: 20,
                              stroke: 1.6
                            })
                          ])
                        ])
                      ], 12, ["href"]);
                    }), 128))
                  ]),
                  createVNode("div", {
                    class: "sv-cta bm-wine bm-grain",
                    "data-reveal": ""
                  }, [
                    createVNode("div", {
                      class: "bm-aura",
                      "aria-hidden": "true"
                    }, [
                      createVNode("span"),
                      createVNode("span"),
                      createVNode("span")
                    ]),
                    createVNode("div", { class: "sv-cta__inner" }, [
                      createVNode("h2", { class: "bm-h2 sv-cta__title" }, [
                        createVNode(_sfc_main$3, {
                          text: locale.value === "mk" ? "Не сте сигурни кој третман е за вас?" : "Not sure which treatment is for you?"
                        }, null, 8, ["text"])
                      ]),
                      createVNode("div", { class: "sv-cta__side" }, [
                        createVNode("p", { class: "bm-lead sv-cta__text" }, toDisplayString(locale.value === "mk" ? "Закажете бесплатна консултација со нашите експерти" : "Book a free consultation with our experts"), 1),
                        createVNode("a", {
                          href: "/contact",
                          class: "bm-btn sv-cta__btn"
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation"), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-right",
                              stroke: 2
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "sv-cta__seal",
                      "aria-hidden": "true"
                    }, [
                      createVNode(RotatingBadge, { size: 140 })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0cf8504"]]);
export {
  Index as default
};
