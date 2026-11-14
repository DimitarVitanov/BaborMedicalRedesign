import { computed, ref, onMounted, onUnmounted, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, createTextVNode, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-Den8Gs11.js";
import { P as PageHero } from "./PageHero-DJ_0bjbt.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-D-2r2JUh.js";
import { S as ScrollWords } from "./ScrollWords-BXYuyk_1.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { M as Marquee } from "./Marquee-BW44XveL.js";
import { R as RotatingBadge } from "./RotatingBadge-139J2yQu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CategoryPage",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    parentType: String,
    pageTitle: String,
    pageSubtitle: String
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      if (locale.value === "mk") {
        return "Козметологија и BABOR третмани Скопје | Babor Medical";
      }
      return "Cosmetology & BABOR Treatments Skopje | Babor Medical";
    });
    const seoDescription = computed(() => {
      if (locale.value === "mk") {
        return "Професионални козметолошки третмани и BABOR протоколи во Babor Medical Скопје. Структуриран пристап кон здравјето и квалитетот на кожата.";
      }
      return "Professional cosmetology treatments and BABOR protocols at Babor Medical Skopje. A structured approach to skin health and quality.";
    });
    const seoKeywords = computed(() => {
      if (locale.value === "mk") {
        return "козметологија скопје, BABOR третмани, третмани за лице скопје, нега на кожа, Babor Medical, естетска козметика скопје, професионални третмани за лице, козметички третмани";
      }
      return "cosmetology skopje, BABOR treatments, facial treatments skopje, skin care, Babor Medical, aesthetic cosmetology skopje, professional facial treatments, cosmetic treatments";
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
            "name": locale.value === "mk" ? "Козметолошки третмани" : "Cosmetology Treatments",
            "description": seoDescription.value,
            "provider": { "@id": "https://babormedical.com/#organization" },
            "areaServed": { "@type": "City", "name": "Skopje" },
            "serviceType": "Cosmetology",
            "url": "https://babormedical.com/services/cosmetology"
          },
          {
            "@type": "WebPage",
            "name": seoTitle.value,
            "description": seoDescription.value,
            "url": "https://babormedical.com/services/cosmetology",
            "inLanguage": locale.value === "mk" ? "mk-MK" : "en",
            "isPartOf": { "@type": "WebSite", "url": "https://babormedical.com" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Што е козметологија и кои третмани ги нудите?" : "What is cosmetology and what treatments do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Козметологијата опфаќа професионални третмани за нега на кожата. Во Babor Medical нудиме BABOR протоколи за лице вклучувајќи Welcome Experience, Classic, Lift & Firm, Bright & Glow и Calm & Repair третмани прилагодени за секој тип на кожа." : "Cosmetology encompasses professional skin care treatments. At Babor Medical we offer BABOR facial protocols including Welcome Experience, Classic, Lift & Firm, Bright & Glow and Calm & Repair treatments tailored for every skin type."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку чинат козметичките третмани во Babor Medical?" : "How much do cosmetic treatments cost at Babor Medical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Цените варираат зависно од типот на третман. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје." : "Prices vary depending on the treatment type. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "За кого се наменети BABOR третманите?" : "Who are BABOR treatments suitable for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "BABOR третманите се погодни за сите типови кожа – суva, масна, чувствителна, зрела кожа и кожа со пигментации. Нашите специјалисти прават индивидуална анализа и препорачуваат протокол прилагоден за вашите потреби." : "BABOR treatments are suitable for all skin types – dry, oily, sensitive, mature skin and skin with pigmentation. Our specialists perform individual analysis and recommend a protocol tailored to your needs."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Колку често треба да се прават козметички третмани?" : "How often should cosmetic treatments be done?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Препорачуваме третмани на секои 2-4 недели за оптимални резултати. Фреквенцијата зависи од типот на третман и состојбата на кожата. Нашиот тим ќе ви помогне да креирате план за нега." : "We recommend treatments every 2-4 weeks for optimal results. Frequency depends on the treatment type and skin condition. Our team will help you create a care plan."
                }
              }
            ]
          }
        ]
      });
    });
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ПРЕМИУМ ТРЕТМАНИ" : "PREMIUM TREATMENTS",
      title: props.pageTitle,
      subtitle: props.pageSubtitle
    }));
    const totalTreatments = computed(() => {
      var _a2;
      return ((_a2 = props.categories) == null ? void 0 : _a2.reduce((sum, cat) => {
        var _a3;
        return sum + (((_a3 = cat.items) == null ? void 0 : _a3.length) || 0);
      }, 0)) || 0;
    });
    const otherCategoryLink = computed(() => {
      if (props.parentType === "cosmetology") {
        return {
          href: "/services/laser-aesthetic",
          name: locale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments"
        };
      }
      return {
        href: "/services/cosmetology",
        name: locale.value === "mk" ? "Козметологија" : "Cosmetology"
      };
    });
    const treatments = computed(() => {
      if (!props.categories) return [];
      return props.categories.flatMap((cat) => cat.items || []);
    });
    const formatPrice = (item) => {
      if (item.price_from && item.price_to) {
        return `${Number(item.price_from).toLocaleString()} – ${Number(item.price_to).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      } else if (item.price_from) {
        return `${locale.value === "mk" ? "од" : "from"} ${Number(item.price_from).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      } else if (item.price) {
        return `${Number(item.price).toLocaleString()} ${locale.value === "mk" ? "ден." : "MKD"}`;
      }
      return null;
    };
    const pad = (n) => String(n).padStart(2, "0");
    const splitLast = (text) => {
      const words = String(text || "").trim().split(/\s+/);
      return words.length > 1 ? [words.slice(0, -1).join(" "), words[words.length - 1]] : [String(text || ""), ""];
    };
    const heroTitle = computed(() => splitLast(content.value.title));
    const leadOf = (html) => {
      const m = String(html || "").match(/^\s*<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/i);
      return m && m[2].replace(/<[^>]*>/g, "").trim() ? m[2] : "";
    };
    const hasDetails = (item) => !!(item.includes || item.indications || item.components || item.effects || item.suitable_for);
    const firstId = (_d = (_c = (_b = (_a = props.categories) == null ? void 0 : _a[0]) == null ? void 0 : _b.items) == null ? void 0 : _c[0]) == null ? void 0 : _d.id;
    const openIds = ref(firstId !== void 0 ? { [firstId]: true } : {});
    const isOpen = (id) => !!openIds.value[id];
    const toggle = (id) => {
      openIds.value = { ...openIds.value, [id]: !openIds.value[id] };
    };
    const allOpen = computed(() => treatments.value.length > 0 && treatments.value.every((t) => openIds.value[t.id]));
    const toggleAll = () => {
      const next = !allOpen.value;
      openIds.value = Object.fromEntries(treatments.value.map((t) => [t.id, next]));
    };
    const openFaq = ref(0);
    const toggleFaq = (i) => {
      openFaq.value = openFaq.value === i ? -1 : i;
    };
    const hydrated = ref(false);
    const activeId = ref(firstId ?? null);
    const menuRef = ref(null);
    let spy = null;
    const goTo = (id) => {
      openIds.value = { ...openIds.value, [id]: true };
      activeId.value = id;
      nextTick(() => {
        const el = document.getElementById(`treatment-${id}`);
        if (!el) return;
        let top = 0;
        for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
        top -= 110;
        window.scrollTo({ top, behavior: "smooth" });
      });
    };
    onMounted(() => {
      hydrated.value = true;
      if (!("IntersectionObserver" in window) || !menuRef.value) return;
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) activeId.value = Number(e.target.dataset.itemId) || e.target.dataset.itemId;
          });
        },
        { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
      );
      menuRef.value.querySelectorAll("[data-item-id]").forEach((el) => spy.observe(el));
    });
    onUnmounted(() => spy == null ? void 0 : spy.disconnect());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-3f478c1b${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-3f478c1b${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-3f478c1b${_scopeId}><meta name="author" content="Babor Medical" data-v-3f478c1b${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-3f478c1b${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-3f478c1b${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-3f478c1b${_scopeId}><meta property="og:type" content="website" data-v-3f478c1b${_scopeId}><meta property="og:url" content="https://babormedical.com/services/cosmetology" data-v-3f478c1b${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-3f478c1b${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-3f478c1b${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-3f478c1b${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-3f478c1b${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-3f478c1b${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-3f478c1b${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-3f478c1b${_scopeId}><link rel="canonical" href="https://babormedical.com/services/cosmetology" data-v-3f478c1b${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/cosmetology?lang=en" data-v-3f478c1b${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/cosmetology?lang=mk" data-v-3f478c1b${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/cosmetology" data-v-3f478c1b${_scopeId}>`);
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
                content: "https://babormedical.com/services/cosmetology"
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
                href: "https://babormedical.com/services/cosmetology"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/services/cosmetology?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/services/cosmetology?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/services/cosmetology"
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
              subtitle: content.value.subtitle,
              crumb: locale.value === "mk" ? "Козметологија" : "Cosmetology"
            }, {
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="cz-arch" data-v-3f478c1b${_scopeId2}><div class="cz-arch__seal" aria-hidden="true" data-v-3f478c1b${_scopeId2}>`);
                  _push3(ssrRenderComponent(RotatingBadge, { size: 124 }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="cz-arch__big" data-v-3f478c1b${_scopeId2}><span class="cz-arch__num" data-v-3f478c1b${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, {
                    value: `${totalTreatments.value}+`
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="cz-arch__label" data-v-3f478c1b${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Третмани" : "Treatments")}</span></div><div class="cz-arch__row" data-v-3f478c1b${_scopeId2}><div class="cz-arch__stat" data-v-3f478c1b${_scopeId2}><span class="cz-arch__num cz-arch__num--sm" data-v-3f478c1b${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, {
                    value: ((_a2 = __props.categories) == null ? void 0 : _a2.length) || 0
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="cz-arch__label" data-v-3f478c1b${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Категории" : "Categories")}</span></div><div class="cz-arch__stat" data-v-3f478c1b${_scopeId2}><span class="cz-arch__num cz-arch__num--sm" data-v-3f478c1b${_scopeId2}>`);
                  _push3(ssrRenderComponent(Counter, { value: "10+" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="cz-arch__label" data-v-3f478c1b${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Години" : "Years")}</span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "cz-arch" }, [
                      createVNode("div", {
                        class: "cz-arch__seal",
                        "aria-hidden": "true"
                      }, [
                        createVNode(RotatingBadge, { size: 124 })
                      ]),
                      createVNode("div", { class: "cz-arch__big" }, [
                        createVNode("span", { class: "cz-arch__num" }, [
                          createVNode(Counter, {
                            value: `${totalTreatments.value}+`
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Третмани" : "Treatments"), 1)
                      ]),
                      createVNode("div", { class: "cz-arch__row" }, [
                        createVNode("div", { class: "cz-arch__stat" }, [
                          createVNode("span", { class: "cz-arch__num cz-arch__num--sm" }, [
                            createVNode(Counter, {
                              value: ((_b2 = __props.categories) == null ? void 0 : _b2.length) || 0
                            }, null, 8, ["value"])
                          ]),
                          createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Категории" : "Categories"), 1)
                        ]),
                        createVNode("div", { class: "cz-arch__stat" }, [
                          createVNode("span", { class: "cz-arch__num cz-arch__num--sm" }, [
                            createVNode(Counter, { value: "10+" })
                          ]),
                          createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Години" : "Years"), 1)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", otherCategoryLink.value.href)} class="bm-btn bm-btn--ghost cz-other" data-v-3f478c1b${_scopeId2}><span data-v-3f478c1b${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Погледни" : "View")} ${ssrInterpolate(otherCategoryLink.value.name)}</span>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-up-right",
                    size: 16,
                    stroke: 1.8
                  }, null, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: otherCategoryLink.value.href,
                      class: "bm-btn bm-btn--ghost cz-other"
                    }, [
                      createVNode("span", null, toDisplayString(locale.value === "mk" ? "Погледни" : "View") + " " + toDisplayString(otherCategoryLink.value.name), 1),
                      createVNode(_sfc_main$2, {
                        name: "arrow-up-right",
                        size: 16,
                        stroke: 1.8
                      })
                    ], 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (treatments.value.length) {
              _push2(`<div class="cz-ribbons" aria-hidden="true" data-v-3f478c1b${_scopeId}>`);
              _push2(ssrRenderComponent(Marquee, {
                items: treatments.value.map((t) => t.name),
                variant: "wine",
                tilt: -3,
                duration: 150
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Marquee, {
                items: treatments.value.map((t) => t.name).reverse(),
                variant: "outline",
                tilt: 2.2,
                duration: 170,
                reverse: ""
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="cz-proto bm-cream bm-sheet bm-section" data-v-3f478c1b${_scopeId}><div class="bm-container" data-v-3f478c1b${_scopeId}><div class="cz-proto__grid" data-v-3f478c1b${_scopeId}><div class="cz-proto__head" data-v-3f478c1b${_scopeId}><span class="cz-proto__mark bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>04</span><h2 class="bm-h2 cz-proto__title" data-v-3f478c1b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Секој третман започнува со:" : "Every treatment starts with:"
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><ol class="cz-steps" data-v-3f478c1b${_scopeId}><li class="cz-step" data-reveal data-v-3f478c1b${_scopeId}><span class="cz-step__num bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>01</span><span class="cz-step__text" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "професионална анализа на кожата" : "professional skin analysis")}</span></li><li class="cz-step" data-reveal style="${ssrRenderStyle({ "--d": "0.08s" })}" data-v-3f478c1b${_scopeId}><span class="cz-step__num bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>02</span><span class="cz-step__text" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "структурирана консултација" : "structured consultation")}</span></li><li class="cz-step" data-reveal style="${ssrRenderStyle({ "--d": "0.16s" })}" data-v-3f478c1b${_scopeId}><span class="cz-step__num bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>03</span><span class="cz-step__text" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "индивидуален избор на активни состојки" : "individual selection of active ingredients")}</span></li><li class="cz-step" data-reveal style="${ssrRenderStyle({ "--d": "0.24s" })}" data-v-3f478c1b${_scopeId}><span class="cz-step__num bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>04</span><span class="cz-step__text" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "препорака за домашна нега" : "home care recommendation")}</span></li></ol></div><div class="cz-proto__note" data-v-3f478c1b${_scopeId}><span class="cz-proto__rule" aria-hidden="true" data-v-3f478c1b${_scopeId}></span>`);
            _push2(ssrRenderComponent(ScrollWords, {
              tag: "p",
              class: "cz-proto__statement",
              text: locale.value === "mk" ? "Работиме исклучиво со оригинални BABOR и DOCTOR BABOR формули, произведени во Германија според фармацевтски стандарди." : "We work exclusively with original BABOR and DOCTOR BABOR formulas, manufactured in Germany according to pharmaceutical standards."
            }, null, _parent2, _scopeId));
            _push2(`</div></div></section><section class="cz-menu bm-paper bm-section" data-v-3f478c1b${_scopeId}><div class="bm-container cz-menu__grid" data-v-3f478c1b${_scopeId}><aside class="cz-index"${ssrRenderAttr("aria-label", locale.value === "mk" ? "Третмани" : "Treatments")} data-v-3f478c1b${_scopeId}><div class="cz-index__inner" data-lenis-prevent data-v-3f478c1b${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<!--[--><span class="cz-index__cat" data-v-3f478c1b${_scopeId}>${ssrInterpolate(category.name)}</span><ol class="cz-index__list" data-v-3f478c1b${_scopeId}><!--[-->`);
              ssrRenderList(category.items, (item) => {
                _push2(`<li data-v-3f478c1b${_scopeId}><a${ssrRenderAttr("href", `#treatment-${item.id}`)} class="${ssrRenderClass([{ "is-active": activeId.value === item.id }, "cz-index__link"])}" data-v-3f478c1b${_scopeId}><span class="cz-index__n" data-v-3f478c1b${_scopeId}>${ssrInterpolate(pad(treatments.value.indexOf(item) + 1))}</span><span class="cz-index__name" data-v-3f478c1b${_scopeId}>${ssrInterpolate(item.name)}</span></a></li>`);
              });
              _push2(`<!--]--></ol><!--]-->`);
            });
            _push2(`<!--]--></div></aside><div class="cz-menu__body" data-v-3f478c1b${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category, ci) => {
              var _a2;
              _push2(`<div class="cz-cat" data-v-3f478c1b${_scopeId}><div class="cz-cat__head" data-v-3f478c1b${_scopeId}><div class="cz-cat__titles" data-v-3f478c1b${_scopeId}><span class="bm-eyebrow" data-reveal data-v-3f478c1b${_scopeId}>${ssrInterpolate(content.value.badge)}</span><p class="cz-cat__name" data-reveal style="${ssrRenderStyle({ "--d": "0.08s" })}" data-v-3f478c1b${_scopeId}>${ssrInterpolate(category.name)} <span class="cz-cat__count" data-v-3f478c1b${_scopeId}>${ssrInterpolate(pad(((_a2 = category.items) == null ? void 0 : _a2.length) || 0))}</span></p>`);
              if (category.description) {
                _push2(`<p class="intro-text cz-cat__desc" data-reveal style="${ssrRenderStyle({ "--d": "0.16s" })}" data-v-3f478c1b${_scopeId}>${ssrInterpolate(category.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (ci === 0 && treatments.value.length) {
                _push2(`<button type="button" class="cz-toggle" data-v-3f478c1b${_scopeId}><span data-v-3f478c1b${_scopeId}>${ssrInterpolate(allOpen.value ? locale.value === "mk" ? "Затвори ги сите" : "Collapse all" : locale.value === "mk" ? "Отвори ги сите" : "Expand all")}</span><span class="${ssrRenderClass([{ "is-open": allOpen.value }, "cz-toggle__icon"])}" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><!--[-->`);
              ssrRenderList(category.items, (item) => {
                _push2(`<article${ssrRenderAttr("id", `treatment-${item.id}`)} class="${ssrRenderClass([{ "is-open": isOpen(item.id) }, "cz-item"])}"${ssrRenderAttr("data-item-id", item.id)} data-reveal data-v-3f478c1b${_scopeId}><div class="cz-item__head" data-v-3f478c1b${_scopeId}><span class="cz-item__num bm-numeral" data-v-3f478c1b${_scopeId}>${ssrInterpolate(treatments.value.indexOf(item) + 1)}.</span><div class="cz-item__titles" data-v-3f478c1b${_scopeId}><h2 class="cz-item__name" data-v-3f478c1b${_scopeId}><button${ssrRenderAttr("id", `treatment-btn-${item.id}`)} type="button" class="cz-item__btn"${ssrRenderAttr("aria-expanded", isOpen(item.id) ? "true" : "false")}${ssrRenderAttr("aria-controls", `treatment-panel-${item.id}`)} data-v-3f478c1b${_scopeId}>${ssrInterpolate(item.name)}</button></h2>`);
                if (item.subtitle) {
                  _push2(`<p class="cz-item__sub" data-v-3f478c1b${_scopeId}>${ssrInterpolate(item.subtitle)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (leadOf(item.description)) {
                  _push2(`<p class="cz-item__lead" data-v-3f478c1b${_scopeId}>${leadOf(item.description) ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (formatPrice(item)) {
                  _push2(`<p class="cz-item__price" data-v-3f478c1b${_scopeId}><span class="cz-item__price-label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Цена" : "Price")}:</span><span class="cz-item__price-value" data-v-3f478c1b${_scopeId}>${ssrInterpolate(formatPrice(item))}</span></p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="cz-item__icon" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></div><div${ssrRenderAttr("id", `treatment-panel-${item.id}`)} class="cz-item__panel"${ssrIncludeBooleanAttr(hydrated.value && !isOpen(item.id)) ? " inert" : ""} data-v-3f478c1b${_scopeId}><div class="cz-item__clip" data-v-3f478c1b${_scopeId}><div class="cz-item__body" data-v-3f478c1b${_scopeId}>`);
                if (item.description) {
                  _push2(`<div class="${ssrRenderClass([{ "has-lead": !!leadOf(item.description) }, "treatment-desc bm-prose cz-prose"])}" data-v-3f478c1b${_scopeId}>${item.description ?? ""}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (hasDetails(item)) {
                  _push2(`<div class="cz-details" data-v-3f478c1b${_scopeId}>`);
                  if (item.includes) {
                    _push2(`<div class="cz-detail" data-v-3f478c1b${_scopeId}><h3 class="cz-detail__label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Вклучува:" : "Includes:")}</h3><div class="cz-detail__content bm-prose cz-prose" data-v-3f478c1b${_scopeId}>${item.includes ?? ""}</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.indications) {
                    _push2(`<div class="cz-detail" data-v-3f478c1b${_scopeId}><h3 class="cz-detail__label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Индикации:" : "Indications:")}</h3><div class="cz-detail__content bm-prose cz-prose" data-v-3f478c1b${_scopeId}>${item.indications ?? ""}</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.components) {
                    _push2(`<div class="cz-detail" data-v-3f478c1b${_scopeId}><h3 class="cz-detail__label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Активни компоненти:" : "Active components:")}</h3><div class="cz-detail__content bm-prose cz-prose" data-v-3f478c1b${_scopeId}>${item.components ?? ""}</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.effects) {
                    _push2(`<div class="cz-detail" data-v-3f478c1b${_scopeId}><h3 class="cz-detail__label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Дејство:" : "Effects:")}</h3><div class="cz-detail__content bm-prose cz-prose" data-v-3f478c1b${_scopeId}>${item.effects ?? ""}</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.suitable_for) {
                    _push2(`<div class="cz-detail" data-v-3f478c1b${_scopeId}><h3 class="cz-detail__label" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Погоден за:" : "Suitable for:")}</h3><div class="cz-detail__content bm-prose cz-prose" data-v-3f478c1b${_scopeId}>${item.suitable_for ?? ""}</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.note) {
                  _push2(`<p class="cz-item__note" data-v-3f478c1b${_scopeId}>${item.note ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="cz-item__foot" data-v-3f478c1b${_scopeId}><a href="/contact" class="bm-link cz-item__book" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation")} `);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "arrow-right",
                  stroke: 1.8
                }, null, _parent2, _scopeId));
                _push2(`</a></div></div></div></div></article>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="cz-faq bm-dark bm-section bm-grain" data-v-3f478c1b${_scopeId}><div class="bm-container cz-faq__grid" data-v-3f478c1b${_scopeId}><div class="cz-faq__head" data-v-3f478c1b${_scopeId}><span class="cz-faq__mark bm-numeral" aria-hidden="true" data-v-3f478c1b${_scopeId}>?</span><h2 class="bm-h2 cz-faq__title" data-v-3f478c1b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
            }, null, _parent2, _scopeId));
            _push2(`</h2></div><div class="bm-faq cz-faq__list" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-3f478c1b${_scopeId}><div class="${ssrRenderClass([{ "is-open": openFaq.value === 0 }, "bm-faq__item"])}" data-v-3f478c1b${_scopeId}><h3 class="cz-faq__h" data-v-3f478c1b${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 0 ? "true" : "false")} aria-controls="cz-faq-a-0" data-v-3f478c1b${_scopeId}><span data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Што е козметологија и кои третмани ги нудите?" : "What is cosmetology and what treatments do you offer?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></button></h3><div id="cz-faq-a-0" class="bm-faq__a" data-v-3f478c1b${_scopeId}><div data-v-3f478c1b${_scopeId}><p data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Козметологијата опфаќа професионални третмани за нега на кожата. Во Babor Medical нудиме BABOR протоколи за лице вклучувајќи Welcome Experience, Classic, Lift & Firm, Bright & Glow и Calm & Repair третмани прилагодени за секој тип на кожа." : "Cosmetology encompasses professional skin care treatments. At Babor Medical we offer BABOR facial protocols including Welcome Experience, Classic, Lift & Firm, Bright & Glow and Calm & Repair treatments tailored for every skin type.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 1 }, "bm-faq__item"])}" data-v-3f478c1b${_scopeId}><h3 class="cz-faq__h" data-v-3f478c1b${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 1 ? "true" : "false")} aria-controls="cz-faq-a-1" data-v-3f478c1b${_scopeId}><span data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Колку чинат козметичките третмани во Babor Medical?" : "How much do cosmetic treatments cost at Babor Medical?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></button></h3><div id="cz-faq-a-1" class="bm-faq__a" data-v-3f478c1b${_scopeId}><div data-v-3f478c1b${_scopeId}><p data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Цените варираат зависно од типот на третман. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје." : "Prices vary depending on the treatment type. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 2 }, "bm-faq__item"])}" data-v-3f478c1b${_scopeId}><h3 class="cz-faq__h" data-v-3f478c1b${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 2 ? "true" : "false")} aria-controls="cz-faq-a-2" data-v-3f478c1b${_scopeId}><span data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "За кого се наменети BABOR третманите?" : "Who are BABOR treatments suitable for?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></button></h3><div id="cz-faq-a-2" class="bm-faq__a" data-v-3f478c1b${_scopeId}><div data-v-3f478c1b${_scopeId}><p data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "BABOR третманите се погодни за сите типови кожа – сува, масна, чувствителна, зрела кожа и кожа со пигментации. Нашите специјалисти прават индивидуална анализа и препорачуваат протокол прилагоден за вашите потреби." : "BABOR treatments are suitable for all skin types – dry, oily, sensitive, mature skin and skin with pigmentation. Our specialists perform individual analysis and recommend a protocol tailored to your needs.")}</p></div></div></div><div class="${ssrRenderClass([{ "is-open": openFaq.value === 3 }, "bm-faq__item"])}" data-v-3f478c1b${_scopeId}><h3 class="cz-faq__h" data-v-3f478c1b${_scopeId}><button type="button" class="bm-faq__q"${ssrRenderAttr("aria-expanded", openFaq.value === 3 ? "true" : "false")} aria-controls="cz-faq-a-3" data-v-3f478c1b${_scopeId}><span data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Колку често треба да се прават козметички третмани?" : "How often should cosmetic treatments be done?")}</span><span class="bm-faq__icon" aria-hidden="true" data-v-3f478c1b${_scopeId}></span></button></h3><div id="cz-faq-a-3" class="bm-faq__a" data-v-3f478c1b${_scopeId}><div data-v-3f478c1b${_scopeId}><p data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Препорачуваме третмани на секои 2-4 недели за оптимални резултати. Фреквенцијата зависи од типот на третман и состојбата на кожата. Нашиот тим ќе ви помогне да креирате план за нега." : "We recommend treatments every 2-4 weeks for optimal results. Frequency depends on the treatment type and skin condition. Our team will help you create a care plan.")}</p></div></div></div></div></div></section><section class="cz-next bm-cream bm-sheet" data-v-3f478c1b${_scopeId}><div class="bm-container" data-v-3f478c1b${_scopeId}><a${ssrRenderAttr("href", otherCategoryLink.value.href)} class="cz-next__link" data-reveal data-v-3f478c1b${_scopeId}><span class="bm-eyebrow cz-next__eyebrow" data-v-3f478c1b${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Погледни" : "View")}</span><span class="cz-next__row" data-v-3f478c1b${_scopeId}><span class="cz-next__name" data-v-3f478c1b${_scopeId}>${ssrInterpolate(otherCategoryLink.value.name)}</span><span class="cz-next__arrow" data-v-3f478c1b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "arrow-up-right",
              size: 30,
              stroke: 1.3
            }, null, _parent2, _scopeId));
            _push2(`</span></span></a></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: content.value.badge,
                title: heroTitle.value[0],
                accent: heroTitle.value[1],
                subtitle: content.value.subtitle,
                crumb: locale.value === "mk" ? "Козметологија" : "Cosmetology"
              }, {
                aside: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("div", { class: "cz-arch" }, [
                      createVNode("div", {
                        class: "cz-arch__seal",
                        "aria-hidden": "true"
                      }, [
                        createVNode(RotatingBadge, { size: 124 })
                      ]),
                      createVNode("div", { class: "cz-arch__big" }, [
                        createVNode("span", { class: "cz-arch__num" }, [
                          createVNode(Counter, {
                            value: `${totalTreatments.value}+`
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Третмани" : "Treatments"), 1)
                      ]),
                      createVNode("div", { class: "cz-arch__row" }, [
                        createVNode("div", { class: "cz-arch__stat" }, [
                          createVNode("span", { class: "cz-arch__num cz-arch__num--sm" }, [
                            createVNode(Counter, {
                              value: ((_a2 = __props.categories) == null ? void 0 : _a2.length) || 0
                            }, null, 8, ["value"])
                          ]),
                          createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Категории" : "Categories"), 1)
                        ]),
                        createVNode("div", { class: "cz-arch__stat" }, [
                          createVNode("span", { class: "cz-arch__num cz-arch__num--sm" }, [
                            createVNode(Counter, { value: "10+" })
                          ]),
                          createVNode("span", { class: "cz-arch__label" }, toDisplayString(locale.value === "mk" ? "Години" : "Years"), 1)
                        ])
                      ])
                    ])
                  ];
                }),
                default: withCtx(() => [
                  createVNode("a", {
                    href: otherCategoryLink.value.href,
                    class: "bm-btn bm-btn--ghost cz-other"
                  }, [
                    createVNode("span", null, toDisplayString(locale.value === "mk" ? "Погледни" : "View") + " " + toDisplayString(otherCategoryLink.value.name), 1),
                    createVNode(_sfc_main$2, {
                      name: "arrow-up-right",
                      size: 16,
                      stroke: 1.8
                    })
                  ], 8, ["href"])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "accent", "subtitle", "crumb"]),
              treatments.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "cz-ribbons",
                "aria-hidden": "true"
              }, [
                createVNode(Marquee, {
                  items: treatments.value.map((t) => t.name),
                  variant: "wine",
                  tilt: -3,
                  duration: 150
                }, null, 8, ["items"]),
                createVNode(Marquee, {
                  items: treatments.value.map((t) => t.name).reverse(),
                  variant: "outline",
                  tilt: 2.2,
                  duration: 170,
                  reverse: ""
                }, null, 8, ["items"])
              ])) : createCommentVNode("", true),
              createVNode("section", { class: "cz-proto bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("div", { class: "cz-proto__grid" }, [
                    createVNode("div", { class: "cz-proto__head" }, [
                      createVNode("span", {
                        class: "cz-proto__mark bm-numeral",
                        "aria-hidden": "true"
                      }, "04"),
                      createVNode("h2", { class: "bm-h2 cz-proto__title" }, [
                        createVNode(_sfc_main$3, {
                          text: locale.value === "mk" ? "Секој третман започнува со:" : "Every treatment starts with:"
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("ol", { class: "cz-steps" }, [
                      createVNode("li", {
                        class: "cz-step",
                        "data-reveal": ""
                      }, [
                        createVNode("span", {
                          class: "cz-step__num bm-numeral",
                          "aria-hidden": "true"
                        }, "01"),
                        createVNode("span", { class: "cz-step__text" }, toDisplayString(locale.value === "mk" ? "професионална анализа на кожата" : "professional skin analysis"), 1)
                      ]),
                      createVNode("li", {
                        class: "cz-step",
                        "data-reveal": "",
                        style: { "--d": "0.08s" }
                      }, [
                        createVNode("span", {
                          class: "cz-step__num bm-numeral",
                          "aria-hidden": "true"
                        }, "02"),
                        createVNode("span", { class: "cz-step__text" }, toDisplayString(locale.value === "mk" ? "структурирана консултација" : "structured consultation"), 1)
                      ]),
                      createVNode("li", {
                        class: "cz-step",
                        "data-reveal": "",
                        style: { "--d": "0.16s" }
                      }, [
                        createVNode("span", {
                          class: "cz-step__num bm-numeral",
                          "aria-hidden": "true"
                        }, "03"),
                        createVNode("span", { class: "cz-step__text" }, toDisplayString(locale.value === "mk" ? "индивидуален избор на активни состојки" : "individual selection of active ingredients"), 1)
                      ]),
                      createVNode("li", {
                        class: "cz-step",
                        "data-reveal": "",
                        style: { "--d": "0.24s" }
                      }, [
                        createVNode("span", {
                          class: "cz-step__num bm-numeral",
                          "aria-hidden": "true"
                        }, "04"),
                        createVNode("span", { class: "cz-step__text" }, toDisplayString(locale.value === "mk" ? "препорака за домашна нега" : "home care recommendation"), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "cz-proto__note" }, [
                    createVNode("span", {
                      class: "cz-proto__rule",
                      "aria-hidden": "true"
                    }),
                    createVNode(ScrollWords, {
                      tag: "p",
                      class: "cz-proto__statement",
                      text: locale.value === "mk" ? "Работиме исклучиво со оригинални BABOR и DOCTOR BABOR формули, произведени во Германија според фармацевтски стандарди." : "We work exclusively with original BABOR and DOCTOR BABOR formulas, manufactured in Germany according to pharmaceutical standards."
                    }, null, 8, ["text"])
                  ])
                ])
              ]),
              createVNode("section", {
                ref_key: "menuRef",
                ref: menuRef,
                class: "cz-menu bm-paper bm-section"
              }, [
                createVNode("div", { class: "bm-container cz-menu__grid" }, [
                  createVNode("aside", {
                    class: "cz-index",
                    "aria-label": locale.value === "mk" ? "Третмани" : "Treatments"
                  }, [
                    createVNode("div", {
                      class: "cz-index__inner",
                      "data-lenis-prevent": ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                        return openBlock(), createBlock(Fragment, {
                          key: `idx-${category.id}`
                        }, [
                          createVNode("span", { class: "cz-index__cat" }, toDisplayString(category.name), 1),
                          createVNode("ol", { class: "cz-index__list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item) => {
                              return openBlock(), createBlock("li", {
                                key: `idx-${item.id}`
                              }, [
                                createVNode("a", {
                                  href: `#treatment-${item.id}`,
                                  class: ["cz-index__link", { "is-active": activeId.value === item.id }],
                                  onClick: withModifiers(($event) => goTo(item.id), ["prevent"])
                                }, [
                                  createVNode("span", { class: "cz-index__n" }, toDisplayString(pad(treatments.value.indexOf(item) + 1)), 1),
                                  createVNode("span", { class: "cz-index__name" }, toDisplayString(item.name), 1)
                                ], 10, ["href", "onClick"])
                              ]);
                            }), 128))
                          ])
                        ], 64);
                      }), 128))
                    ])
                  ], 8, ["aria-label"]),
                  createVNode("div", { class: "cz-menu__body" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, ci) => {
                      var _a2;
                      return openBlock(), createBlock("div", {
                        key: category.id,
                        class: "cz-cat"
                      }, [
                        createVNode("div", { class: "cz-cat__head" }, [
                          createVNode("div", { class: "cz-cat__titles" }, [
                            createVNode("span", {
                              class: "bm-eyebrow",
                              "data-reveal": ""
                            }, toDisplayString(content.value.badge), 1),
                            createVNode("p", {
                              class: "cz-cat__name",
                              "data-reveal": "",
                              style: { "--d": "0.08s" }
                            }, [
                              createTextVNode(toDisplayString(category.name) + " ", 1),
                              createVNode("span", { class: "cz-cat__count" }, toDisplayString(pad(((_a2 = category.items) == null ? void 0 : _a2.length) || 0)), 1)
                            ]),
                            category.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "intro-text cz-cat__desc",
                              "data-reveal": "",
                              style: { "--d": "0.16s" }
                            }, toDisplayString(category.description), 1)) : createCommentVNode("", true)
                          ]),
                          ci === 0 && treatments.value.length ? (openBlock(), createBlock("button", {
                            key: 0,
                            type: "button",
                            class: "cz-toggle",
                            onClick: toggleAll
                          }, [
                            createVNode("span", null, toDisplayString(allOpen.value ? locale.value === "mk" ? "Затвори ги сите" : "Collapse all" : locale.value === "mk" ? "Отвори ги сите" : "Expand all"), 1),
                            createVNode("span", {
                              class: ["cz-toggle__icon", { "is-open": allOpen.value }],
                              "aria-hidden": "true"
                            }, null, 2)
                          ])) : createCommentVNode("", true)
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item) => {
                          return openBlock(), createBlock("article", {
                            id: `treatment-${item.id}`,
                            key: item.id,
                            class: ["cz-item", { "is-open": isOpen(item.id) }],
                            "data-item-id": item.id,
                            "data-reveal": ""
                          }, [
                            createVNode("div", { class: "cz-item__head" }, [
                              createVNode("span", { class: "cz-item__num bm-numeral" }, toDisplayString(treatments.value.indexOf(item) + 1) + ".", 1),
                              createVNode("div", { class: "cz-item__titles" }, [
                                createVNode("h2", { class: "cz-item__name" }, [
                                  createVNode("button", {
                                    id: `treatment-btn-${item.id}`,
                                    type: "button",
                                    class: "cz-item__btn",
                                    "aria-expanded": isOpen(item.id) ? "true" : "false",
                                    "aria-controls": `treatment-panel-${item.id}`,
                                    onClick: ($event) => toggle(item.id)
                                  }, toDisplayString(item.name), 9, ["id", "aria-expanded", "aria-controls", "onClick"])
                                ]),
                                item.subtitle ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "cz-item__sub"
                                }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true),
                                leadOf(item.description) ? (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "cz-item__lead",
                                  innerHTML: leadOf(item.description)
                                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                              ]),
                              formatPrice(item) ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "cz-item__price"
                              }, [
                                createVNode("span", { class: "cz-item__price-label" }, toDisplayString(locale.value === "mk" ? "Цена" : "Price") + ":", 1),
                                createVNode("span", { class: "cz-item__price-value" }, toDisplayString(formatPrice(item)), 1)
                              ])) : createCommentVNode("", true),
                              createVNode("span", {
                                class: "cz-item__icon",
                                "aria-hidden": "true"
                              })
                            ]),
                            createVNode("div", {
                              id: `treatment-panel-${item.id}`,
                              class: "cz-item__panel",
                              inert: hydrated.value && !isOpen(item.id)
                            }, [
                              createVNode("div", { class: "cz-item__clip" }, [
                                createVNode("div", { class: "cz-item__body" }, [
                                  item.description ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: ["treatment-desc bm-prose cz-prose", { "has-lead": !!leadOf(item.description) }],
                                    innerHTML: item.description
                                  }, null, 10, ["innerHTML"])) : createCommentVNode("", true),
                                  hasDetails(item) ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "cz-details"
                                  }, [
                                    item.includes ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "cz-detail"
                                    }, [
                                      createVNode("h3", { class: "cz-detail__label" }, toDisplayString(locale.value === "mk" ? "Вклучува:" : "Includes:"), 1),
                                      createVNode("div", {
                                        class: "cz-detail__content bm-prose cz-prose",
                                        innerHTML: item.includes
                                      }, null, 8, ["innerHTML"])
                                    ])) : createCommentVNode("", true),
                                    item.indications ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "cz-detail"
                                    }, [
                                      createVNode("h3", { class: "cz-detail__label" }, toDisplayString(locale.value === "mk" ? "Индикации:" : "Indications:"), 1),
                                      createVNode("div", {
                                        class: "cz-detail__content bm-prose cz-prose",
                                        innerHTML: item.indications
                                      }, null, 8, ["innerHTML"])
                                    ])) : createCommentVNode("", true),
                                    item.components ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "cz-detail"
                                    }, [
                                      createVNode("h3", { class: "cz-detail__label" }, toDisplayString(locale.value === "mk" ? "Активни компоненти:" : "Active components:"), 1),
                                      createVNode("div", {
                                        class: "cz-detail__content bm-prose cz-prose",
                                        innerHTML: item.components
                                      }, null, 8, ["innerHTML"])
                                    ])) : createCommentVNode("", true),
                                    item.effects ? (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "cz-detail"
                                    }, [
                                      createVNode("h3", { class: "cz-detail__label" }, toDisplayString(locale.value === "mk" ? "Дејство:" : "Effects:"), 1),
                                      createVNode("div", {
                                        class: "cz-detail__content bm-prose cz-prose",
                                        innerHTML: item.effects
                                      }, null, 8, ["innerHTML"])
                                    ])) : createCommentVNode("", true),
                                    item.suitable_for ? (openBlock(), createBlock("div", {
                                      key: 4,
                                      class: "cz-detail"
                                    }, [
                                      createVNode("h3", { class: "cz-detail__label" }, toDisplayString(locale.value === "mk" ? "Погоден за:" : "Suitable for:"), 1),
                                      createVNode("div", {
                                        class: "cz-detail__content bm-prose cz-prose",
                                        innerHTML: item.suitable_for
                                      }, null, 8, ["innerHTML"])
                                    ])) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  item.note ? (openBlock(), createBlock("p", {
                                    key: 2,
                                    class: "cz-item__note",
                                    innerHTML: item.note
                                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                                  createVNode("div", { class: "cz-item__foot" }, [
                                    createVNode("a", {
                                      href: "/contact",
                                      class: "bm-link cz-item__book"
                                    }, [
                                      createTextVNode(toDisplayString(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation") + " ", 1),
                                      createVNode(_sfc_main$2, {
                                        name: "arrow-right",
                                        stroke: 1.8
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ], 8, ["id", "inert"])
                          ], 10, ["id", "data-item-id"]);
                        }), 128))
                      ]);
                    }), 128))
                  ])
                ])
              ], 512),
              createVNode("section", { class: "cz-faq bm-dark bm-section bm-grain" }, [
                createVNode("div", { class: "bm-container cz-faq__grid" }, [
                  createVNode("div", { class: "cz-faq__head" }, [
                    createVNode("span", {
                      class: "cz-faq__mark bm-numeral",
                      "aria-hidden": "true"
                    }, "?"),
                    createVNode("h2", { class: "bm-h2 cz-faq__title" }, [
                      createVNode(_sfc_main$3, {
                        text: locale.value === "mk" ? "Најчесто поставувани прашања" : "Frequently Asked Questions"
                      }, null, 8, ["text"])
                    ])
                  ]),
                  createVNode("div", {
                    class: "bm-faq cz-faq__list",
                    "data-reveal": "",
                    style: { "--d": "0.15s" }
                  }, [
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 0 }]
                    }, [
                      createVNode("h3", { class: "cz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 0 ? "true" : "false",
                          "aria-controls": "cz-faq-a-0",
                          onClick: ($event) => toggleFaq(0)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Што е козметологија и кои третмани ги нудите?" : "What is cosmetology and what treatments do you offer?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["aria-expanded", "onClick"])
                      ]),
                      createVNode("div", {
                        id: "cz-faq-a-0",
                        class: "bm-faq__a"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Козметологијата опфаќа професионални третмани за нега на кожата. Во Babor Medical нудиме BABOR протоколи за лице вклучувајќи Welcome Experience, Classic, Lift & Firm, Bright & Glow и Calm & Repair третмани прилагодени за секој тип на кожа." : "Cosmetology encompasses professional skin care treatments. At Babor Medical we offer BABOR facial protocols including Welcome Experience, Classic, Lift & Firm, Bright & Glow and Calm & Repair treatments tailored for every skin type."), 1)
                        ])
                      ])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 1 }]
                    }, [
                      createVNode("h3", { class: "cz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 1 ? "true" : "false",
                          "aria-controls": "cz-faq-a-1",
                          onClick: ($event) => toggleFaq(1)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Колку чинат козметичките третмани во Babor Medical?" : "How much do cosmetic treatments cost at Babor Medical?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["aria-expanded", "onClick"])
                      ]),
                      createVNode("div", {
                        id: "cz-faq-a-1",
                        class: "bm-faq__a"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Цените варираат зависно од типот на третман. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје." : "Prices vary depending on the treatment type. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje."), 1)
                        ])
                      ])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 2 }]
                    }, [
                      createVNode("h3", { class: "cz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 2 ? "true" : "false",
                          "aria-controls": "cz-faq-a-2",
                          onClick: ($event) => toggleFaq(2)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "За кого се наменети BABOR третманите?" : "Who are BABOR treatments suitable for?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["aria-expanded", "onClick"])
                      ]),
                      createVNode("div", {
                        id: "cz-faq-a-2",
                        class: "bm-faq__a"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "BABOR третманите се погодни за сите типови кожа – сува, масна, чувствителна, зрела кожа и кожа со пигментации. Нашите специјалисти прават индивидуална анализа и препорачуваат протокол прилагоден за вашите потреби." : "BABOR treatments are suitable for all skin types – dry, oily, sensitive, mature skin and skin with pigmentation. Our specialists perform individual analysis and recommend a protocol tailored to your needs."), 1)
                        ])
                      ])
                    ], 2),
                    createVNode("div", {
                      class: ["bm-faq__item", { "is-open": openFaq.value === 3 }]
                    }, [
                      createVNode("h3", { class: "cz-faq__h" }, [
                        createVNode("button", {
                          type: "button",
                          class: "bm-faq__q",
                          "aria-expanded": openFaq.value === 3 ? "true" : "false",
                          "aria-controls": "cz-faq-a-3",
                          onClick: ($event) => toggleFaq(3)
                        }, [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Колку често треба да се прават козметички третмани?" : "How often should cosmetic treatments be done?"), 1),
                          createVNode("span", {
                            class: "bm-faq__icon",
                            "aria-hidden": "true"
                          })
                        ], 8, ["aria-expanded", "onClick"])
                      ]),
                      createVNode("div", {
                        id: "cz-faq-a-3",
                        class: "bm-faq__a"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(locale.value === "mk" ? "Препорачуваме третмани на секои 2-4 недели за оптимални резултати. Фреквенцијата зависи од типот на третман и состојбата на кожата. Нашиот тим ќе ви помогне да креирате план за нега." : "We recommend treatments every 2-4 weeks for optimal results. Frequency depends on the treatment type and skin condition. Our team will help you create a care plan."), 1)
                        ])
                      ])
                    ], 2)
                  ])
                ])
              ]),
              createVNode("section", { class: "cz-next bm-cream bm-sheet" }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("a", {
                    href: otherCategoryLink.value.href,
                    class: "cz-next__link",
                    "data-reveal": ""
                  }, [
                    createVNode("span", { class: "bm-eyebrow cz-next__eyebrow" }, toDisplayString(locale.value === "mk" ? "Погледни" : "View"), 1),
                    createVNode("span", { class: "cz-next__row" }, [
                      createVNode("span", { class: "cz-next__name" }, toDisplayString(otherCategoryLink.value.name), 1),
                      createVNode("span", { class: "cz-next__arrow" }, [
                        createVNode(_sfc_main$2, {
                          name: "arrow-up-right",
                          size: 30,
                          stroke: 1.3
                        })
                      ])
                    ])
                  ], 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/CategoryPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f478c1b"]]);
export {
  CategoryPage as default
};
