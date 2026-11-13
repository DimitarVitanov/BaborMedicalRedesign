import { computed, ref, useId, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-ETDl10rA.js";
import { P as PageHero } from "./PageHero-SbIYNtpQ.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-CNheNTSo.js";
import { S as ScrollWords } from "./ScrollWords-BW4zjJFw.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { M as Marquee } from "./Marquee-Be2tHA8B.js";
import { R as RotatingBadge } from "./RotatingBadge-DozfcJMK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    about: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "За нас - Babor Medical" : "About Us - Babor Medical";
    });
    const stats = computed(() => [
      { number: "25+", label: locale.value === "mk" ? "Години искуство" : "Years Experience", icon: "calendar" },
      { number: "10K+", label: locale.value === "mk" ? "Задоволни клиенти" : "Happy Clients", icon: "users" },
      { number: "50+", label: locale.value === "mk" ? "Третмани" : "Treatments", icon: "sparkle" },
      { number: "15+", label: locale.value === "mk" ? "Експерти" : "Experts", icon: "award" }
    ]);
    const values = computed(() => [
      {
        icon: "heart",
        title: locale.value === "mk" ? "Посветеност" : "Dedication",
        desc: locale.value === "mk" ? "Посветени сме на вашата убавина и благосостојба" : "We are dedicated to your beauty and wellness"
      },
      {
        icon: "shield",
        title: locale.value === "mk" ? "Квалитет" : "Quality",
        desc: locale.value === "mk" ? "Користиме само премиум Babor производи" : "We use only premium Babor products"
      },
      {
        icon: "star",
        title: locale.value === "mk" ? "Извонредност" : "Excellence",
        desc: locale.value === "mk" ? "Континуирано образование и усовршување" : "Continuous education and improvement"
      }
    ]);
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
            "telephone": "+389 75 340 933",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Skopje",
              "addressCountry": "MK"
            },
            "priceRange": "$$",
            "description": locale.value === "mk" ? "Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Нудиме ласерска епилација, козметолошки третмани, инјектибилни методи и третмани на тело." : "Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We offer laser hair removal, cosmetology treatments, injectable methods and body treatments."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Што е Babor Medical?" : "What is Babor Medical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Специјализирани сме за ласерска епилација, козметологија, инјектибилни методи и третмани на тело со најсовремена технологија и стручен медицински тим." : "Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We specialize in laser hair removal, cosmetology, injectable methods and body treatments with state-of-the-art technology and expert medical team."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои технологии ги користите?" : "What technologies do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Користиме најсовремена опрема од Alma Lasers: Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Ultraformer за лифтинг, и премиум BABOR козметички протоколи." : "We use state-of-the-art equipment from Alma Lasers: Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Ultraformer for lifting, and premium BABOR cosmetic protocols."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Каде се наоѓа Babor Medical?" : "Where is Babor Medical located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical се наоѓа во Скопје, Македонија. За точна адреса, работно време и закажување, контактирајте нè на +389 75 340 933 или посетете babormedical.com/contact." : "Babor Medical is located in Skopje, Macedonia. For exact address, working hours and appointments, contact us at +389 75 340 933 or visit babormedical.com/contact."
                }
              }
            ]
          }
        ]
      });
    });
    const splitAccent = (text) => {
      const words = String(text || "").trim().split(/\s+/).filter(Boolean);
      if (words.length < 2) return { main: words.join(" "), accent: "" };
      return { main: words.slice(0, -1).join(" "), accent: words[words.length - 1] };
    };
    const heroTitle = computed(() => splitAccent(props.about.title));
    const hasMarkup = (s) => /<[a-z!/][\s\S]*>|&[a-z#0-9]+;/i.test(s || "");
    const story = computed(() => {
      const raw = props.about.full_content || "";
      if (hasMarkup(raw)) return null;
      const paras = raw.split(/\r?\n[ \t]*\r?\n/).map((p) => p.trim()).filter(Boolean);
      const plain = { intro: paras, statement: "", closing: [] };
      if (paras.length < 4) return plain;
      const k = paras.length - 3;
      if (paras[k].split(/\s+/).length > 40) return plain;
      return { intro: paras.slice(0, k), statement: paras[k], closing: paras.slice(k + 1) };
    });
    const ribbonValues = computed(() => {
      const titles = values.value.map((v) => v.title);
      return [...titles, "Babor Medical", ...titles, "Babor Medical"];
    });
    const ribbonStats = computed(() => stats.value.map((s) => `${s.number} ${s.label}`));
    const openFaq = ref(0);
    const faqUid = useId();
    const toggleFaq = (i) => {
      openFaq.value = openFaq.value === i ? -1 : i;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-c494ad9f${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-c494ad9f${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, за нас, дерматологија, спа, козметика, Македонија" : "Babor Medical, about us, dermatology, spa, cosmetics, Macedonia")} data-v-c494ad9f${_scopeId}><meta name="robots" content="index, follow" data-v-c494ad9f${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-c494ad9f${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-c494ad9f${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-c494ad9f${_scopeId}><meta property="og:type" content="website" data-v-c494ad9f${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-c494ad9f${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-c494ad9f${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.about.subtitle)} data-v-c494ad9f${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-c494ad9f${_scopeId}><link rel="canonical" href="https://babormedical.com/about" data-v-c494ad9f${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/about?lang=en" data-v-c494ad9f${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/about?lang=mk" data-v-c494ad9f${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/about" data-v-c494ad9f${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "Babor Medical, за нас, дерматологија, спа, козметика, Македонија" : "Babor Medical, about us, dermatology, spa, cosmetics, Macedonia"
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
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("meta", {
                property: "og:type",
                content: "website"
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
                content: __props.about.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/about"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/about?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/about?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/about"
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
              eyebrow: locale.value === "mk" ? "ЗА НАС" : "ABOUT US",
              title: heroTitle.value.main,
              accent: heroTitle.value.accent,
              crumb: locale.value === "mk" ? "За нас" : "About"
            }, {
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ab-hero__visual" data-v-c494ad9f${_scopeId2}><div class="ab-hero__outline" aria-hidden="true" data-v-c494ad9f${_scopeId2}></div><div class="ab-hero__arch" data-v-c494ad9f${_scopeId2}><picture data-v-c494ad9f${_scopeId2}><source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp" data-v-c494ad9f${_scopeId2}><source srcset="/images/about.webp" type="image/webp" data-v-c494ad9f${_scopeId2}><img${ssrRenderAttr("src", __props.about.image || "/images/about.webp")} alt="Babor Medical Team" class="ab-hero__img" width="800" height="534" loading="eager" fetchpriority="high" data-v-c494ad9f${_scopeId2}></picture></div><div class="ab-hero__chip" aria-hidden="true" data-v-c494ad9f${_scopeId2}><span class="ab-hero__chip-num" data-v-c494ad9f${_scopeId2}>${ssrInterpolate(stats.value[0].number)}</span><span class="ab-hero__chip-label" data-v-c494ad9f${_scopeId2}>${ssrInterpolate(stats.value[0].label)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "ab-hero__visual" }, [
                      createVNode("div", {
                        class: "ab-hero__outline",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", { class: "ab-hero__arch" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            media: "(max-width: 575px)",
                            srcset: "/images/about-mobile.webp",
                            type: "image/webp"
                          }),
                          createVNode("source", {
                            srcset: "/images/about.webp",
                            type: "image/webp"
                          }),
                          createVNode("img", {
                            src: __props.about.image || "/images/about.webp",
                            alt: "Babor Medical Team",
                            class: "ab-hero__img",
                            width: "800",
                            height: "534",
                            loading: "eager",
                            fetchpriority: "high"
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", {
                        class: "ab-hero__chip",
                        "aria-hidden": "true"
                      }, [
                        createVNode("span", { class: "ab-hero__chip-num" }, toDisplayString(stats.value[0].number), 1),
                        createVNode("span", { class: "ab-hero__chip-label" }, toDisplayString(stats.value[0].label), 1)
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ab-hero__sub bm-lead bm-muted" data-v-c494ad9f${_scopeId2}>${__props.about.subtitle ?? ""}</div><a href="#ab-story" class="bm-link ab-hero__down" data-v-c494ad9f${_scopeId2}><span data-v-c494ad9f${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Нашата приказна" : "Our Story")}</span>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-down",
                    stroke: 1.8
                  }, null, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "ab-hero__sub bm-lead bm-muted",
                      innerHTML: __props.about.subtitle
                    }, null, 8, ["innerHTML"]),
                    createVNode("a", {
                      href: "#ab-story",
                      class: "bm-link ab-hero__down"
                    }, [
                      createVNode("span", null, toDisplayString(locale.value === "mk" ? "Нашата приказна" : "Our Story"), 1),
                      createVNode(_sfc_main$2, {
                        name: "arrow-down",
                        stroke: 1.8
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ab-ribbons" aria-hidden="true" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonValues.value,
              variant: "wine",
              tilt: -3,
              duration: 46
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonStats.value,
              variant: "outline",
              tilt: 2.2,
              duration: 54,
              reverse: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><section id="ab-story" class="ab-story bm-cream bm-sheet bm-section" data-v-c494ad9f${_scopeId}><div class="bm-container" data-v-c494ad9f${_scopeId}><div class="ab-story__grid" data-v-c494ad9f${_scopeId}><div class="ab-story__side" data-v-c494ad9f${_scopeId}><div class="ab-story__sticky" data-v-c494ad9f${_scopeId}><span class="bm-numeral ab-num" aria-hidden="true" data-v-c494ad9f${_scopeId}>01</span><h2 class="bm-h2 ab-story__title" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Нашата приказна" : "Our Story"
            }, null, _parent2, _scopeId));
            _push2(`</h2><div class="ab-story__arch" data-reveal="mask" style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-c494ad9f${_scopeId}><div class="ab-story__arch-in bm-duotone" data-v-c494ad9f${_scopeId}><img src="/images/about.webp" alt="" width="800" height="534" loading="lazy" decoding="async" data-v-c494ad9f${_scopeId}></div></div></div></div><div class="ab-story__body" data-v-c494ad9f${_scopeId}>`);
            if (story.value) {
              _push2(`<!--[-->`);
              ssrRenderList(story.value.intro, (paragraph, index) => {
                _push2(`<p class="${ssrRenderClass([{ "ab-story__p--lead": index === 0 }, "ab-story__p"])}" data-reveal style="${ssrRenderStyle({ "--d": `${Math.min(index, 3) * 0.06}s` })}" data-v-c494ad9f${_scopeId}>${paragraph ?? ""}</p>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<div class="bm-prose ab-story__prose" data-reveal data-v-c494ad9f${_scopeId}>${__props.about.full_content ?? ""}</div>`);
            }
            _push2(`<figure class="ab-story__pano" data-reveal="mask" data-v-c494ad9f${_scopeId}><div data-v-c494ad9f${_scopeId}><div class="ab-story__pano-in" data-v-c494ad9f${_scopeId}><img src="/images/about-two.webp" alt="" width="800" height="170" loading="lazy" decoding="async" data-v-c494ad9f${_scopeId}></div></div></figure></div></div>`);
            if (story.value && story.value.statement) {
              _push2(ssrRenderComponent(ScrollWords, {
                text: story.value.statement,
                tag: "p",
                class: "ab-story__statement"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (story.value && story.value.closing.length) {
              _push2(`<div class="ab-story__signoff" data-v-c494ad9f${_scopeId}><div class="ab-story__sign-text" data-reveal data-v-c494ad9f${_scopeId}><!--[-->`);
              ssrRenderList(story.value.closing, (paragraph, index) => {
                _push2(`<p class="${ssrRenderClass([{ "is-last": index === story.value.closing.length - 1 }, "ab-story__sign-line"])}" data-v-c494ad9f${_scopeId}>${paragraph ?? ""}</p>`);
              });
              _push2(`<!--]--></div><div class="ab-story__seal" data-reveal="scale" style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-c494ad9f${_scopeId}>`);
              _push2(ssrRenderComponent(RotatingBadge, { size: 150 }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section class="ab-values bm-dark bm-section bm-grain" data-v-c494ad9f${_scopeId}><div class="bm-columns-bg" aria-hidden="true" data-v-c494ad9f${_scopeId}></div><div class="bm-container ab-values__inner" data-v-c494ad9f${_scopeId}><div class="ab-stats" data-v-c494ad9f${_scopeId}><!--[-->`);
            ssrRenderList(stats.value, (stat, index) => {
              _push2(`<div class="ab-stat" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.1}s` })}" data-v-c494ad9f${_scopeId}><span class="ab-stat__num" data-v-c494ad9f${_scopeId}>`);
              _push2(ssrRenderComponent(Counter, {
                value: stat.number
              }, null, _parent2, _scopeId));
              _push2(`</span><span class="ab-stat__label" data-v-c494ad9f${_scopeId}>${ssrInterpolate(stat.label)}</span></div>`);
            });
            _push2(`<!--]--></div><div class="ab-values__head" data-v-c494ad9f${_scopeId}><span class="bm-numeral ab-num" aria-hidden="true" data-v-c494ad9f${_scopeId}>02</span><h2 class="bm-h2 ab-values__title" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Нашите вредности" : "Our Values"
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="ab-values__grid" data-v-c494ad9f${_scopeId}><!--[-->`);
            ssrRenderList(values.value, (value, index) => {
              _push2(`<article class="ab-value" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.12}s` })}" data-v-c494ad9f${_scopeId}><span class="ab-value__num" aria-hidden="true" data-v-c494ad9f${_scopeId}>0${ssrInterpolate(index + 1)}</span><span class="ab-value__icon" aria-hidden="true" data-v-c494ad9f${_scopeId}>`);
              if (value.icon === "heart") {
                _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-c494ad9f${_scopeId}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-c494ad9f${_scopeId}></path></svg>`);
              } else if (value.icon === "shield") {
                _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-c494ad9f${_scopeId}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-c494ad9f${_scopeId}></path><path d="M9 12l2 2 4-4" data-v-c494ad9f${_scopeId}></path></svg>`);
              } else if (value.icon === "star") {
                _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-c494ad9f${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-c494ad9f${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span><h3 class="bm-h3 ab-value__title" data-v-c494ad9f${_scopeId}>${ssrInterpolate(value.title)}</h3><p class="ab-value__desc" data-v-c494ad9f${_scopeId}>${ssrInterpolate(value.desc)}</p></article>`);
            });
            _push2(`<!--]--></div><div class="ab-cta bm-wine bm-grain" data-reveal="scale" data-v-c494ad9f${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-c494ad9f${_scopeId}><span data-v-c494ad9f${_scopeId}></span><span data-v-c494ad9f${_scopeId}></span><span data-v-c494ad9f${_scopeId}></span></div><div class="ab-cta__inner" data-v-c494ad9f${_scopeId}><div class="ab-cta__copy" data-v-c494ad9f${_scopeId}><h2 class="bm-h2 ab-cta__title" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: splitAccent(locale.value === "mk" ? "Подготвени сте за трансформација?" : "Ready for transformation?").main
            }, null, _parent2, _scopeId));
            _push2(`<br data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "bm-accent",
              text: splitAccent(locale.value === "mk" ? "Подготвени сте за трансформација?" : "Ready for transformation?").accent,
              start: 3
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead bm-muted ab-cta__text" data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Закажете консултација и започнете го вашето патување кон убавина" : "Book a consultation and start your journey to beauty")}</p></div><div class="ab-cta__actions" data-v-c494ad9f${_scopeId}><a href="#contact" class="bm-btn" data-v-c494ad9f${_scopeId}><span data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Закажи консултација" : "Book Consultation")}</span><span class="bm-btn__icon" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span></a></div></div><span class="ab-cta__star" aria-hidden="true" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "sparkle",
              size: 22,
              stroke: 1.3
            }, null, _parent2, _scopeId));
            _push2(`</span></div></div></section><section class="ab-faq bm-paper bm-sheet bm-section" data-v-c494ad9f${_scopeId}><div class="bm-container ab-faq__grid" data-v-c494ad9f${_scopeId}><div class="ab-faq__side" data-v-c494ad9f${_scopeId}><div class="ab-faq__sticky" data-v-c494ad9f${_scopeId}><span class="bm-numeral ab-num" aria-hidden="true" data-v-c494ad9f${_scopeId}>03</span><h2 class="bm-h2 ab-faq__title" data-v-c494ad9f${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
            }, null, _parent2, _scopeId));
            _push2(`</h2></div></div><div class="bm-faq ab-faq__list" data-reveal data-v-c494ad9f${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-c494ad9f${_scopeId}><h3 class="ab-faq__h" data-v-c494ad9f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("id", `${unref(faqUid)}-q0`)}${ssrRenderAttr("aria-expanded", openFaq.value === 0 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqUid)}-a0`)} data-v-c494ad9f${_scopeId}><span data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Што е Babor Medical?" : "What is Babor Medical?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-c494ad9f${_scopeId}></span></button></h3><div class="bm-faq__a"${ssrRenderAttr("id", `${unref(faqUid)}-a0`)} role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqUid)}-q0`)} data-v-c494ad9f${_scopeId}><div data-v-c494ad9f${_scopeId}><p data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Специјализирани сме за ласерска епилација, козметологија, инјектибилни методи и третмани на тело со најсовремена технологија и стручен медицински тим." : "Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We specialize in laser hair removal, cosmetology, injectable methods and body treatments with state-of-the-art technology and expert medical team.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-c494ad9f${_scopeId}><h3 class="ab-faq__h" data-v-c494ad9f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("id", `${unref(faqUid)}-q1`)}${ssrRenderAttr("aria-expanded", openFaq.value === 1 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqUid)}-a1`)} data-v-c494ad9f${_scopeId}><span data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Кои технологии ги користите?" : "What technologies do you use?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-c494ad9f${_scopeId}></span></button></h3><div class="bm-faq__a"${ssrRenderAttr("id", `${unref(faqUid)}-a1`)} role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqUid)}-q1`)} data-v-c494ad9f${_scopeId}><div data-v-c494ad9f${_scopeId}><p data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Користиме најсовремена опрема од Alma Lasers: Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Ultraformer за лифтинг, и премиум BABOR козметички протоколи." : "We use state-of-the-art equipment from Alma Lasers: Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Ultraformer for lifting, and premium BABOR cosmetic protocols.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-c494ad9f${_scopeId}><h3 class="ab-faq__h" data-v-c494ad9f${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("id", `${unref(faqUid)}-q2`)}${ssrRenderAttr("aria-expanded", openFaq.value === 2 ? "true" : "false")}${ssrRenderAttr("aria-controls", `${unref(faqUid)}-a2`)} data-v-c494ad9f${_scopeId}><span data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Каде се наоѓа Babor Medical?" : "Where is Babor Medical located?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-c494ad9f${_scopeId}></span></button></h3><div class="bm-faq__a"${ssrRenderAttr("id", `${unref(faqUid)}-a2`)} role="region"${ssrRenderAttr("aria-labelledby", `${unref(faqUid)}-q2`)} data-v-c494ad9f${_scopeId}><div data-v-c494ad9f${_scopeId}><p data-v-c494ad9f${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Babor Medical се наоѓа во Скопје, Македонија. За точна адреса, работно време и закажување, контактирајте нè на +389 75 340 933 или посетете babormedical.com/contact." : "Babor Medical is located in Skopje, Macedonia. For exact address, working hours and appointments, contact us at +389 75 340 933 or visit babormedical.com/contact.")}</p></div></div></div></div></div></section><div id="contact" class="ab-anchor" aria-hidden="true" data-v-c494ad9f${_scopeId}></div>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: locale.value === "mk" ? "ЗА НАС" : "ABOUT US",
                title: heroTitle.value.main,
                accent: heroTitle.value.accent,
                crumb: locale.value === "mk" ? "За нас" : "About"
              }, {
                aside: withCtx(() => [
                  createVNode("div", { class: "ab-hero__visual" }, [
                    createVNode("div", {
                      class: "ab-hero__outline",
                      "aria-hidden": "true"
                    }),
                    createVNode("div", { class: "ab-hero__arch" }, [
                      createVNode("picture", null, [
                        createVNode("source", {
                          media: "(max-width: 575px)",
                          srcset: "/images/about-mobile.webp",
                          type: "image/webp"
                        }),
                        createVNode("source", {
                          srcset: "/images/about.webp",
                          type: "image/webp"
                        }),
                        createVNode("img", {
                          src: __props.about.image || "/images/about.webp",
                          alt: "Babor Medical Team",
                          class: "ab-hero__img",
                          width: "800",
                          height: "534",
                          loading: "eager",
                          fetchpriority: "high"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", {
                      class: "ab-hero__chip",
                      "aria-hidden": "true"
                    }, [
                      createVNode("span", { class: "ab-hero__chip-num" }, toDisplayString(stats.value[0].number), 1),
                      createVNode("span", { class: "ab-hero__chip-label" }, toDisplayString(stats.value[0].label), 1)
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", {
                    class: "ab-hero__sub bm-lead bm-muted",
                    innerHTML: __props.about.subtitle
                  }, null, 8, ["innerHTML"]),
                  createVNode("a", {
                    href: "#ab-story",
                    class: "bm-link ab-hero__down"
                  }, [
                    createVNode("span", null, toDisplayString(locale.value === "mk" ? "Нашата приказна" : "Our Story"), 1),
                    createVNode(_sfc_main$2, {
                      name: "arrow-down",
                      stroke: 1.8
                    })
                  ])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "accent", "crumb"]),
              createVNode("div", {
                class: "ab-ribbons",
                "aria-hidden": "true"
              }, [
                createVNode(Marquee, {
                  items: ribbonValues.value,
                  variant: "wine",
                  tilt: -3,
                  duration: 46
                }, null, 8, ["items"]),
                createVNode(Marquee, {
                  items: ribbonStats.value,
                  variant: "outline",
                  tilt: 2.2,
                  duration: 54,
                  reverse: ""
                }, null, 8, ["items"])
              ]),
              createVNode("section", {
                id: "ab-story",
                class: "ab-story bm-cream bm-sheet bm-section"
              }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("div", { class: "ab-story__grid" }, [
                    createVNode("div", { class: "ab-story__side" }, [
                      createVNode("div", { class: "ab-story__sticky" }, [
                        createVNode("span", {
                          class: "bm-numeral ab-num",
                          "aria-hidden": "true"
                        }, "01"),
                        createVNode("h2", { class: "bm-h2 ab-story__title" }, [
                          createVNode(_sfc_main$3, {
                            text: locale.value === "mk" ? "Нашата приказна" : "Our Story"
                          }, null, 8, ["text"])
                        ]),
                        createVNode("div", {
                          class: "ab-story__arch",
                          "data-reveal": "mask",
                          style: { "--d": "0.15s" }
                        }, [
                          createVNode("div", { class: "ab-story__arch-in bm-duotone" }, [
                            createVNode("img", {
                              src: "/images/about.webp",
                              alt: "",
                              width: "800",
                              height: "534",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "ab-story__body" }, [
                      story.value ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(story.value.intro, (paragraph, index) => {
                        return openBlock(), createBlock("p", {
                          key: `intro-${index}`,
                          class: ["ab-story__p", { "ab-story__p--lead": index === 0 }],
                          "data-reveal": "",
                          style: { "--d": `${Math.min(index, 3) * 0.06}s` },
                          innerHTML: paragraph
                        }, null, 14, ["innerHTML"]);
                      }), 128)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bm-prose ab-story__prose",
                        "data-reveal": "",
                        innerHTML: __props.about.full_content
                      }, null, 8, ["innerHTML"])),
                      createVNode("figure", {
                        class: "ab-story__pano",
                        "data-reveal": "mask"
                      }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "ab-story__pano-in" }, [
                            createVNode("img", {
                              src: "/images/about-two.webp",
                              alt: "",
                              width: "800",
                              height: "170",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  story.value && story.value.statement ? (openBlock(), createBlock(ScrollWords, {
                    key: 0,
                    text: story.value.statement,
                    tag: "p",
                    class: "ab-story__statement"
                  }, null, 8, ["text"])) : createCommentVNode("", true),
                  story.value && story.value.closing.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "ab-story__signoff"
                  }, [
                    createVNode("div", {
                      class: "ab-story__sign-text",
                      "data-reveal": ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(story.value.closing, (paragraph, index) => {
                        return openBlock(), createBlock("p", {
                          key: `closing-${index}`,
                          class: ["ab-story__sign-line", { "is-last": index === story.value.closing.length - 1 }],
                          innerHTML: paragraph
                        }, null, 10, ["innerHTML"]);
                      }), 128))
                    ]),
                    createVNode("div", {
                      class: "ab-story__seal",
                      "data-reveal": "scale",
                      style: { "--d": "0.2s" }
                    }, [
                      createVNode(RotatingBadge, { size: 150 })
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("section", { class: "ab-values bm-dark bm-section bm-grain" }, [
                createVNode("div", {
                  class: "bm-columns-bg",
                  "aria-hidden": "true"
                }),
                createVNode("div", { class: "bm-container ab-values__inner" }, [
                  createVNode("div", { class: "ab-stats" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(stats.value, (stat, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "ab-stat",
                        "data-reveal": "",
                        style: { "--d": `${index * 0.1}s` }
                      }, [
                        createVNode("span", { class: "ab-stat__num" }, [
                          createVNode(Counter, {
                            value: stat.number
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "ab-stat__label" }, toDisplayString(stat.label), 1)
                      ], 4);
                    }), 128))
                  ]),
                  createVNode("div", { class: "ab-values__head" }, [
                    createVNode("span", {
                      class: "bm-numeral ab-num",
                      "aria-hidden": "true"
                    }, "02"),
                    createVNode("h2", { class: "bm-h2 ab-values__title" }, [
                      createVNode(_sfc_main$3, {
                        text: locale.value === "mk" ? "Нашите вредности" : "Our Values"
                      }, null, 8, ["text"])
                    ])
                  ]),
                  createVNode("div", { class: "ab-values__grid" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(values.value, (value, index) => {
                      return openBlock(), createBlock("article", {
                        key: index,
                        class: "ab-value",
                        "data-reveal": "",
                        style: { "--d": `${index * 0.12}s` }
                      }, [
                        createVNode("span", {
                          class: "ab-value__num",
                          "aria-hidden": "true"
                        }, "0" + toDisplayString(index + 1), 1),
                        createVNode("span", {
                          class: "ab-value__icon",
                          "aria-hidden": "true"
                        }, [
                          value.icon === "heart" ? (openBlock(), createBlock("svg", {
                            key: 0,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.5"
                          }, [
                            createVNode("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                          ])) : value.icon === "shield" ? (openBlock(), createBlock("svg", {
                            key: 1,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.5"
                          }, [
                            createVNode("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
                            createVNode("path", { d: "M9 12l2 2 4-4" })
                          ])) : value.icon === "star" ? (openBlock(), createBlock("svg", {
                            key: 2,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.5"
                          }, [
                            createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("h3", { class: "bm-h3 ab-value__title" }, toDisplayString(value.title), 1),
                        createVNode("p", { class: "ab-value__desc" }, toDisplayString(value.desc), 1)
                      ], 4);
                    }), 128))
                  ]),
                  createVNode("div", {
                    class: "ab-cta bm-wine bm-grain",
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
                    createVNode("div", { class: "ab-cta__inner" }, [
                      createVNode("div", { class: "ab-cta__copy" }, [
                        createVNode("h2", { class: "bm-h2 ab-cta__title" }, [
                          createVNode(_sfc_main$3, {
                            text: splitAccent(locale.value === "mk" ? "Подготвени сте за трансформација?" : "Ready for transformation?").main
                          }, null, 8, ["text"]),
                          createVNode("br"),
                          createVNode(_sfc_main$3, {
                            class: "bm-accent",
                            text: splitAccent(locale.value === "mk" ? "Подготвени сте за трансформација?" : "Ready for transformation?").accent,
                            start: 3
                          }, null, 8, ["text"])
                        ]),
                        createVNode("p", { class: "bm-lead bm-muted ab-cta__text" }, toDisplayString(locale.value === "mk" ? "Закажете консултација и започнете го вашето патување кон убавина" : "Book a consultation and start your journey to beauty"), 1)
                      ]),
                      createVNode("div", { class: "ab-cta__actions" }, [
                        createVNode("a", {
                          href: "#contact",
                          class: "bm-btn"
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Закажи консултација" : "Book Consultation"), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-right",
                              stroke: 2
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("span", {
                      class: "ab-cta__star",
                      "aria-hidden": "true"
                    }, [
                      createVNode(_sfc_main$2, {
                        name: "sparkle",
                        size: 22,
                        stroke: 1.3
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "ab-faq bm-paper bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container ab-faq__grid" }, [
                  createVNode("div", { class: "ab-faq__side" }, [
                    createVNode("div", { class: "ab-faq__sticky" }, [
                      createVNode("span", {
                        class: "bm-numeral ab-num",
                        "aria-hidden": "true"
                      }, "03"),
                      createVNode("h2", { class: "bm-h2 ab-faq__title" }, [
                        createVNode(_sfc_main$3, {
                          text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
                        }, null, 8, ["text"])
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "bm-faq ab-faq__list",
                    "data-reveal": ""
                  }, [
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                    }, [
                      createVNode("h3", { class: "ab-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          id: `${unref(faqUid)}-q0`,
                          "aria-expanded": openFaq.value === 0 ? "true" : "false",
                          "aria-controls": `${unref(faqUid)}-a0`,
                          onClick: ($event) => toggleFaq(0)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Што е Babor Medical?" : "What is Babor Medical?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        class: "bm-faq__a",
                        id: `${unref(faqUid)}-a0`,
                        role: "region",
                        "aria-labelledby": `${unref(faqUid)}-q0`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Babor Medical е водечки ласерски и естетски центар во Скопје, Македонија. Специјализирани сме за ласерска епилација, козметологија, инјектибилни методи и третмани на тело со најсовремена технологија и стручен медицински тим." : "Babor Medical is a leading laser and aesthetic center in Skopje, Macedonia. We specialize in laser hair removal, cosmetology, injectable methods and body treatments with state-of-the-art technology and expert medical team."), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                    }, [
                      createVNode("h3", { class: "ab-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          id: `${unref(faqUid)}-q1`,
                          "aria-expanded": openFaq.value === 1 ? "true" : "false",
                          "aria-controls": `${unref(faqUid)}-a1`,
                          onClick: ($event) => toggleFaq(1)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Кои технологии ги користите?" : "What technologies do you use?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        class: "bm-faq__a",
                        id: `${unref(faqUid)}-a1`,
                        role: "region",
                        "aria-labelledby": `${unref(faqUid)}-q1`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Користиме најсовремена опрема од Alma Lasers: Soprano Titanium за ласерска епилација, Alma Hybrid за подмладување, Accent Prime за обликување на тело, Ultraformer за лифтинг, и премиум BABOR козметички протоколи." : "We use state-of-the-art equipment from Alma Lasers: Soprano Titanium for laser hair removal, Alma Hybrid for rejuvenation, Accent Prime for body contouring, Ultraformer for lifting, and premium BABOR cosmetic protocols."), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                    }, [
                      createVNode("h3", { class: "ab-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          id: `${unref(faqUid)}-q2`,
                          "aria-expanded": openFaq.value === 2 ? "true" : "false",
                          "aria-controls": `${unref(faqUid)}-a2`,
                          onClick: ($event) => toggleFaq(2)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Каде се наоѓа Babor Medical?" : "Where is Babor Medical located?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["id", "aria-expanded", "aria-controls", "onClick"])
                      ]),
                      createVNode("div", {
                        class: "bm-faq__a",
                        id: `${unref(faqUid)}-a2`,
                        role: "region",
                        "aria-labelledby": `${unref(faqUid)}-q2`
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Babor Medical се наоѓа во Скопје, Македонија. За точна адреса, работно време и закажување, контактирајте нè на +389 75 340 933 или посетете babormedical.com/contact." : "Babor Medical is located in Skopje, Macedonia. For exact address, working hours and appointments, contact us at +389 75 340 933 or visit babormedical.com/contact."), 1)
                        ])
                      ], 8, ["id", "aria-labelledby"])
                    ], 2)
                  ])
                ])
              ]),
              createVNode("div", {
                id: "contact",
                class: "ab-anchor",
                "aria-hidden": "true"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c494ad9f"]]);
export {
  About as default
};
