import { computed, ref, onMounted, onUnmounted, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-Den8Gs11.js";
import { P as PageHero } from "./PageHero-DJ_0bjbt.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-D-2r2JUh.js";
import { R as RotatingBadge } from "./RotatingBadge-139J2yQu.js";
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
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "Alma Soprano Titanium – Ласерска Епилација Скопје | Babor Medical" : "Alma Soprano Titanium – Laser Hair Removal Skopje | Babor Medical";
      }
      if (props.equipment.slug === "vonewmer-rf") {
        return locale.value === "mk" ? "Vonewmer RF Скопје | Затегнување на кожа без игли | Babor Medical" : "Vonewmer RF Skopje | Skin Tightening Without Needles | Babor Medical";
      }
      return `${props.equipment.title} - Babor Medical`;
    });
    const seoDescription = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "Alma Soprano Titanium ласер за безболна ласерска епилација во Скопје. Три бранови должини, сите типови кожа и влакна. Златен стандард во ласерско отстранување на влакна – Babor Medical." : "Alma Soprano Titanium laser for painless laser hair removal in Skopje. Three wavelengths, all skin and hair types. Gold standard in laser hair removal – Babor Medical.";
      }
      if (props.equipment.slug === "vonewmer-rf") {
        return locale.value === "mk" ? "Vonewmer RF – наградувана радиофреквентна технологија за затегнување на кожа без игли во Скопје. Добитник на ELLE Beauty Awards 2025 и K-Brand Awards 2026. Неинвазивен лифтинг и биостимулација – Babor Medical." : "Vonewmer RF – award-winning radiofrequency technology for skin tightening without needles in Skopje. Winner of ELLE Beauty Awards 2025 and K-Brand Awards 2026. Non-invasive lifting and biostimulation – Babor Medical.";
      }
      return props.equipment.description;
    });
    const seoKeywords = computed(() => {
      if (props.equipment.slug === "alma-soprano-titanium") {
        return locale.value === "mk" ? "alma soprano titanium, ласерска епилација, ласерска епилација скопје, безболна ласерска епилација, ласер за епилација, alma laser, soprano titanium, отстранување влакна, babor medical" : "alma soprano titanium, laser hair removal, laser hair removal skopje, painless laser hair removal, laser epilation, alma laser, soprano titanium, hair removal, babor medical";
      }
      if (props.equipment.slug === "vonewmer-rf") {
        return locale.value === "mk" ? "vonewmer rf, vonewmer rf скопје, затегнување кожа без игли, rf лифтинг скопје, радиофреквенција лице, skin tightening скопје, anti-aging третман скопје, неинвазивен лифтинг, babor medical" : "vonewmer rf, vonewmer rf skopje, skin tightening without needles, rf lifting skopje, radiofrequency face, skin tightening skopje, anti-aging treatment skopje, non-invasive lifting, babor medical";
      }
      return `${props.equipment.title}, laser, ласер, Babor Medical, ${props.equipment.category}`;
    });
    const jsonLd = computed(() => {
      const graph = [
        {
          "@type": "MedicalWebPage",
          "name": seoTitle.value,
          "description": seoDescription.value,
          "url": `https://babormedical.com/lasers/${props.equipment.slug}`,
          "publisher": {
            "@type": "MedicalBusiness",
            "@id": "https://babormedical.com/#organization",
            "name": "Babor Medical",
            "image": "https://babormedical.com/logo.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Skopje",
              "addressCountry": "MK"
            }
          }
        }
      ];
      if (props.equipment.slug === "alma-soprano-titanium") {
        graph[0]["about"] = {
          "@type": "MedicalProcedure",
          "name": locale.value === "mk" ? "Ласерска епилација со Alma Soprano Titanium" : "Laser Hair Removal with Alma Soprano Titanium",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "description": seoDescription.value,
          "howPerformed": locale.value === "mk" ? "Тројна бранова должина (755nm, 808nm, 1064nm) за третман на сите типови кожа и влакна" : "Triple wavelength (755nm, 808nm, 1064nm) for treatment of all skin and hair types",
          "bodyLocation": locale.value === "mk" ? "Лице и тело" : "Face and body"
        };
        graph[0]["mainEntity"] = {
          "@type": "MedicalDevice",
          "name": "Alma Soprano Titanium",
          "description": seoDescription.value,
          "sameAs": "https://www.almalasers.com/alma-soprano-titanium/"
        };
        graph.push({
          "@type": "FAQPage",
          "mainEntity": [
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
              "name": locale.value === "mk" ? "Дали Alma Soprano Titanium е безболен?" : "Is Alma Soprano Titanium painless?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Да, Alma Soprano Titanium користи ICE Plus технологија за ладење која ја заштитува кожата и обезбедува практично безболен третман. Пациентите чувствуваат само благо топло чувство за време на процедурата." : "Yes, Alma Soprano Titanium uses ICE Plus cooling technology that protects the skin and provides a virtually painless treatment. Patients only feel a mild warming sensation during the procedure."
              }
            },
            {
              "@type": "Question",
              "name": locale.value === "mk" ? "За кои делови од телото е ефективен Soprano Titanium?" : "For which body areas is Soprano Titanium effective?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Soprano Titanium е ефективен за сите делови од телото: лице, пазуви, раце, нозе, бикини зона, грб, стомак и цело тело. Тројната бранова должина овозможува третман на сите типови влакна и кожа." : "Soprano Titanium is effective for all body areas: face, underarms, arms, legs, bikini area, back, abdomen and full body. The triple wavelength enables treatment of all hair and skin types."
              }
            }
          ]
        });
      }
      if (props.equipment.slug === "vonewmer-rf") {
        graph[0]["about"] = {
          "@type": "MedicalProcedure",
          "name": locale.value === "mk" ? "RF затегнување на кожа со Vonewmer RF" : "RF Skin Tightening with Vonewmer RF",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "description": seoDescription.value,
          "howPerformed": locale.value === "mk" ? "Контролирана радиофреквентна енергија за дермална биостимулација и неоколагенеза" : "Controlled radiofrequency energy for dermal biostimulation and neocollagenesis",
          "bodyLocation": locale.value === "mk" ? "Лице и врат" : "Face and neck"
        };
        graph[0]["mainEntity"] = {
          "@type": "MedicalDevice",
          "name": "Vonewmer RF",
          "description": locale.value === "mk" ? "Наградуван радиофреквентен систем за неинвазивно затегнување на кожа" : "Award-winning radiofrequency system for non-invasive skin tightening"
        };
        graph.push({
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": locale.value === "mk" ? "Што е Vonewmer RF?" : "What is Vonewmer RF?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Vonewmer RF е наградувана радиофреквентна технологија за неинвазивно затегнување на кожа и биостимулација. Добитник на ELLE International Beauty Awards 2025 и K-Brand Awards 2026, користи контролирана RF енергија за стимулација на колаген и еластин без игли и без downtime." : "Vonewmer RF is an award-winning radiofrequency technology for non-invasive skin tightening and biostimulation. Winner of ELLE International Beauty Awards 2025 and K-Brand Awards 2026, it uses controlled RF energy to stimulate collagen and elastin without needles and without downtime."
              }
            },
            {
              "@type": "Question",
              "name": locale.value === "mk" ? "Дали Vonewmer RF третманот е болен?" : "Is the Vonewmer RF treatment painful?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Не, Vonewmer RF третманот е комфорен и безболен. Пациентите чувствуваат само пријатна топлина за време на процедурата. Не е потребна анестезија и нема период на закрепнување." : "No, the Vonewmer RF treatment is comfortable and painless. Patients only feel pleasant warmth during the procedure. No anesthesia is needed and there is no recovery period."
              }
            },
            {
              "@type": "Question",
              "name": locale.value === "mk" ? "Колку третмани се потребни за видливи резултати?" : "How many treatments are needed for visible results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Обично се препорачуваат 3-4 третмани на интервал од 2-4 недели. Резултатите се подобруваат постепено благодарение на колагенската биостимулација, со максимален ефект по неколку месеци." : "Usually 3-4 treatments are recommended at 2-4 week intervals. Results improve gradually thanks to collagen biostimulation, with maximum effect after several months."
              }
            },
            {
              "@type": "Question",
              "name": locale.value === "mk" ? "За кого е наменет Vonewmer RF?" : "Who is Vonewmer RF suitable for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": locale.value === "mk" ? "Vonewmer RF е идеален за пациенти над 30 години со почетна до умерена опуштеност на кожата, фини линии, нарушена текстура и намален тонус. Особено е погоден за пациенти кои сакаат природен anti-aging пристап без игли и без агресивни процедури." : "Vonewmer RF is ideal for patients over 30 with mild to moderate skin laxity, fine lines, impaired texture and reduced tone. It is especially suitable for patients who want a natural anti-aging approach without needles and without aggressive procedures."
              }
            }
          ]
        });
      }
      return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    });
    const content = computed(() => ({
      backToLasers: locale.value === "mk" ? "← Назад кон ласери" : "← Back to Lasers",
      learnMore: locale.value === "mk" ? "Официјална страница" : "Official Website",
      contactUs: locale.value === "mk" ? "Контактирајте нè" : "Contact Us",
      contactDesc: locale.value === "mk" ? "Заинтересирани сте за овој третман? Контактирајте нè за консултација." : "Interested in this treatment? Contact us for a consultation."
    }));
    const pad = (n) => String(n).padStart(2, "0");
    const heroTitle = computed(() => {
      const words = String(props.equipment.title || "").trim().split(/\s+/);
      return words.length > 1 ? { main: words.slice(0, -1).join(" "), accent: words[words.length - 1] } : { main: words[0] || "", accent: "" };
    });
    const decode = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/\s+/g, " ").trim();
    const proseTag = computed(() => /<h2[\s>]/i.test(props.equipment.detailed_description || "") ? "h2" : "h4");
    const anchorBase = computed(() => `sec-${props.equipment.slug || props.equipment.id || "laser"}`);
    const proseSections = computed(() => {
      const html = props.equipment.detailed_description || "";
      const re = new RegExp(`<${proseTag.value}(?:\\s[^>]*)?>([\\s\\S]*?)</${proseTag.value}>`, "gi");
      const list = [];
      let m;
      while (m = re.exec(html)) {
        list.push({ id: `${anchorBase.value}-${list.length + 1}`, title: decode(m[1]) });
      }
      return list;
    });
    const hasToc = computed(() => proseSections.value.length >= 3);
    const proseHtml = computed(() => {
      const html = props.equipment.detailed_description || "";
      if (!hasToc.value) return html;
      let i = 0;
      const re = new RegExp(`<${proseTag.value}(?=[\\s>])`, "gi");
      return html.replace(re, (tag) => {
        i += 1;
        return `${tag} id="${anchorBase.value}-${i}" data-sec="${pad(i)}"`;
      });
    });
    const activeSec = ref("");
    let spy = null;
    onMounted(() => {
      if (!hasToc.value || !("IntersectionObserver" in window)) return;
      spy = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) activeSec.value = e.target.id;
        }),
        { rootMargin: "-18% 0px -72% 0px" }
      );
      proseSections.value.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) spy.observe(el);
      });
    });
    onUnmounted(() => spy == null ? void 0 : spy.disconnect());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-3fec4ecc${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-3fec4ecc${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-3fec4ecc${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-3fec4ecc${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-3fec4ecc${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-3fec4ecc${_scopeId}><meta property="og:type" content="article" data-v-3fec4ecc${_scopeId}><meta property="og:url"${ssrRenderAttr("content", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-3fec4ecc${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.equipment.image ? "https://babormedical.com/storage/" + __props.equipment.image : "https://babormedical.com/logo.webp")} data-v-3fec4ecc${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-3fec4ecc${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-3fec4ecc${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-3fec4ecc${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-3fec4ecc${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-3fec4ecc${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", __props.equipment.image ? "https://babormedical.com/storage/" + __props.equipment.image : "https://babormedical.com/logo.webp")} data-v-3fec4ecc${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
            _push2(`<link rel="canonical"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-3fec4ecc${_scopeId}><link rel="alternate" hreflang="en"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}?lang=en`)} data-v-3fec4ecc${_scopeId}><link rel="alternate" hreflang="mk"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}?lang=mk`)} data-v-3fec4ecc${_scopeId}><link rel="alternate" hreflang="x-default"${ssrRenderAttr("href", `https://babormedical.com/lasers/${__props.equipment.slug}`)} data-v-3fec4ecc${_scopeId}>`);
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
                content: __props.equipment.image ? "https://babormedical.com/storage/" + __props.equipment.image : "https://babormedical.com/logo.webp"
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
                content: __props.equipment.image ? "https://babormedical.com/storage/" + __props.equipment.image : "https://babormedical.com/logo.webp"
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="laser-detail-page" data-v-3fec4ecc${_scopeId}>`);
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: __props.equipment.category,
              title: heroTitle.value.main,
              accent: heroTitle.value.accent,
              subtitle: __props.equipment.description,
              crumb: __props.equipment.title
            }, {
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ld-visual" data-v-3fec4ecc${_scopeId2}><div class="ld-stage bm-stage" data-v-3fec4ecc${_scopeId2}><span class="ld-stage__ring" aria-hidden="true" data-v-3fec4ecc${_scopeId2}></span><span class="ld-stage__beam" aria-hidden="true" data-v-3fec4ecc${_scopeId2}></span><div class="ld-stage__float" data-v-3fec4ecc${_scopeId2}><picture data-v-3fec4ecc${_scopeId2}>`);
                  if (__props.equipment.image_mobile_webp) {
                    _push3(`<source${ssrRenderAttr("srcset", "/storage/" + __props.equipment.image_mobile_webp)} media="(max-width: 768px)" type="image/webp" data-v-3fec4ecc${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.equipment.image_desktop_webp) {
                    _push3(`<source${ssrRenderAttr("srcset", "/storage/" + __props.equipment.image_desktop_webp)} media="(min-width: 769px)" type="image/webp" data-v-3fec4ecc${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<img${ssrRenderAttr("src", __props.equipment.image ? "/storage/" + __props.equipment.image : "/images/placeholder.webp")}${ssrRenderAttr("alt", __props.equipment.title)} width="800" height="1000" fetchpriority="high" decoding="async" data-v-3fec4ecc${_scopeId2}></picture></div></div>`);
                  _push3(ssrRenderComponent(RotatingBadge, {
                    class: "ld-seal",
                    size: 136
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="ld-caption" aria-hidden="true" data-v-3fec4ecc${_scopeId2}><span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(__props.equipment.category)}</span><span class="ld-caption__line" data-v-3fec4ecc${_scopeId2}></span><span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(heroTitle.value.accent || heroTitle.value.main)}</span></span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "ld-visual" }, [
                      createVNode("div", { class: "ld-stage bm-stage" }, [
                        createVNode("span", {
                          class: "ld-stage__ring",
                          "aria-hidden": "true"
                        }),
                        createVNode("span", {
                          class: "ld-stage__beam",
                          "aria-hidden": "true"
                        }),
                        createVNode("div", { class: "ld-stage__float" }, [
                          createVNode("picture", null, [
                            __props.equipment.image_mobile_webp ? (openBlock(), createBlock("source", {
                              key: 0,
                              srcset: "/storage/" + __props.equipment.image_mobile_webp,
                              media: "(max-width: 768px)",
                              type: "image/webp"
                            }, null, 8, ["srcset"])) : createCommentVNode("", true),
                            __props.equipment.image_desktop_webp ? (openBlock(), createBlock("source", {
                              key: 1,
                              srcset: "/storage/" + __props.equipment.image_desktop_webp,
                              media: "(min-width: 769px)",
                              type: "image/webp"
                            }, null, 8, ["srcset"])) : createCommentVNode("", true),
                            createVNode("img", {
                              src: __props.equipment.image ? "/storage/" + __props.equipment.image : "/images/placeholder.webp",
                              alt: __props.equipment.title,
                              width: "800",
                              height: "1000",
                              fetchpriority: "high",
                              decoding: "async"
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ]),
                      createVNode(RotatingBadge, {
                        class: "ld-seal",
                        size: 136
                      }),
                      createVNode("span", {
                        class: "ld-caption",
                        "aria-hidden": "true"
                      }, [
                        createVNode("span", null, toDisplayString(__props.equipment.category), 1),
                        createVNode("span", { class: "ld-caption__line" }),
                        createVNode("span", null, toDisplayString(heroTitle.value.accent || heroTitle.value.main), 1)
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ld-actions" data-v-3fec4ecc${_scopeId2}>`);
                  if (__props.equipment.link) {
                    _push3(`<a${ssrRenderAttr("href", __props.equipment.link)} target="_blank" class="bm-btn" data-v-3fec4ecc${_scopeId2}><span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(content.value.learnMore)}</span><span class="bm-btn__icon" data-v-3fec4ecc${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: "arrow-up-right",
                      stroke: 2
                    }, null, _parent3, _scopeId2));
                    _push3(`</span></a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/contact",
                    class: "bm-btn bm-btn--ghost"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(content.value.contactUs)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(content.value.contactUs), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/lasers",
                    class: "ld-back"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(content.value.backToLasers)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(content.value.backToLasers), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "ld-actions" }, [
                      __props.equipment.link ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: __props.equipment.link,
                        target: "_blank",
                        class: "bm-btn"
                      }, [
                        createVNode("span", null, toDisplayString(content.value.learnMore), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "arrow-up-right",
                            stroke: 2
                          })
                        ])
                      ], 8, ["href"])) : createCommentVNode("", true),
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "bm-btn bm-btn--ghost"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(content.value.contactUs), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(Link), {
                      href: "/lasers",
                      class: "ld-back"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(content.value.backToLasers), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.equipment.detailed_description) {
              _push2(`<section class="ld-body bm-cream bm-sheet bm-section" data-v-3fec4ecc${_scopeId}><div class="${ssrRenderClass([{ "has-toc": hasToc.value }, "bm-container ld-body__grid"])}" data-v-3fec4ecc${_scopeId}>`);
              if (hasToc.value) {
                _push2(`<aside class="ld-toc" data-reveal data-v-3fec4ecc${_scopeId}><span class="bm-eyebrow ld-toc__eyebrow" data-v-3fec4ecc${_scopeId}>${ssrInterpolate(__props.equipment.title)}</span><ol class="ld-toc__list" data-v-3fec4ecc${_scopeId}><!--[-->`);
                ssrRenderList(proseSections.value, (sec, i) => {
                  _push2(`<li data-v-3fec4ecc${_scopeId}><a${ssrRenderAttr("href", `#${sec.id}`)} class="${ssrRenderClass({ "is-active": activeSec.value === sec.id })}" data-v-3fec4ecc${_scopeId}><span class="ld-toc__n" data-v-3fec4ecc${_scopeId}>${ssrInterpolate(pad(i + 1))}</span><span class="ld-toc__t" data-v-3fec4ecc${_scopeId}>${ssrInterpolate(sec.title)}</span></a></li>`);
                });
                _push2(`<!--]--></ol>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: "/contact",
                  class: "bm-btn bm-btn--wine bm-btn--sm ld-toc__cta"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(content.value.contactUs)}</span><span class="bm-btn__icon" data-v-3fec4ecc${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        name: "arrow-right",
                        stroke: 2
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(content.value.contactUs), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "arrow-right",
                            stroke: 2
                          })
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</aside>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<article class="ld-sheet" data-v-3fec4ecc${_scopeId}><span class="ld-sheet__mark" aria-hidden="true" data-v-3fec4ecc${_scopeId}><img src="/logo.webp" alt="" width="64" height="64" loading="lazy" decoding="async" data-v-3fec4ecc${_scopeId}></span><div class="ld-prose bm-prose" data-v-3fec4ecc${_scopeId}>${proseHtml.value ?? ""}</div></article></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.equipment.slug === "alma-soprano-titanium") {
              _push2(`<section class="${ssrRenderClass([{ "bm-sheet": !__props.equipment.detailed_description }, "ld-cross bm-cream"])}" data-v-3fec4ecc${_scopeId}><div class="bm-container" data-v-3fec4ecc${_scopeId}><div class="ld-cross__card bm-grain" data-reveal data-v-3fec4ecc${_scopeId}><span class="ld-cross__arch" aria-hidden="true" data-v-3fec4ecc${_scopeId}></span>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "ld-cross__icon",
                name: "laser",
                size: 40,
                stroke: 1.1
              }, null, _parent2, _scopeId));
              _push2(`<p class="ld-cross__text" data-v-3fec4ecc${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Видете ги сите наши ласерски третмани и цени за ласерска епилација во Скопје" : "See all our laser treatments and laser hair removal prices in Skopje")}</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/services/laser-aesthetic",
                class: "bm-btn ld-cross__btn"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(locale.value === "mk" ? "Ласерски третмани и ценовник →" : "Laser Treatments & Pricing →")}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(locale.value === "mk" ? "Ласерски третмани и ценовник →" : "Laser Treatments & Pricing →"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="ld-cta bm-wine bm-section bm-grain" data-v-3fec4ecc${_scopeId}><div class="bm-aura" aria-hidden="true" data-v-3fec4ecc${_scopeId}><span data-v-3fec4ecc${_scopeId}></span><span data-v-3fec4ecc${_scopeId}></span><span data-v-3fec4ecc${_scopeId}></span></div><span class="ld-cta__arcs" aria-hidden="true" data-v-3fec4ecc${_scopeId}><span data-v-3fec4ecc${_scopeId}></span><span data-v-3fec4ecc${_scopeId}></span><span data-v-3fec4ecc${_scopeId}></span></span><div class="bm-container ld-cta__inner" data-v-3fec4ecc${_scopeId}><h2 class="bm-display ld-cta__title" data-v-3fec4ecc${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: content.value.contactUs
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="bm-lead ld-cta__desc" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-3fec4ecc${_scopeId}>${ssrInterpolate(content.value.contactDesc)}</p><div class="ld-cta__actions" data-reveal style="${ssrRenderStyle({ "--d": "0.35s" })}" data-v-3fec4ecc${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact",
              class: "bm-btn"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-3fec4ecc${_scopeId2}>${ssrInterpolate(content.value.contactUs)}</span><span class="bm-btn__icon" data-v-3fec4ecc${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "arrow-right",
                    stroke: 2
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(content.value.contactUs), 1),
                    createVNode("span", { class: "bm-btn__icon" }, [
                      createVNode(_sfc_main$2, {
                        name: "arrow-right",
                        stroke: 2
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "laser-detail-page" }, [
                createVNode(PageHero, {
                  eyebrow: __props.equipment.category,
                  title: heroTitle.value.main,
                  accent: heroTitle.value.accent,
                  subtitle: __props.equipment.description,
                  crumb: __props.equipment.title
                }, {
                  aside: withCtx(() => [
                    createVNode("div", { class: "ld-visual" }, [
                      createVNode("div", { class: "ld-stage bm-stage" }, [
                        createVNode("span", {
                          class: "ld-stage__ring",
                          "aria-hidden": "true"
                        }),
                        createVNode("span", {
                          class: "ld-stage__beam",
                          "aria-hidden": "true"
                        }),
                        createVNode("div", { class: "ld-stage__float" }, [
                          createVNode("picture", null, [
                            __props.equipment.image_mobile_webp ? (openBlock(), createBlock("source", {
                              key: 0,
                              srcset: "/storage/" + __props.equipment.image_mobile_webp,
                              media: "(max-width: 768px)",
                              type: "image/webp"
                            }, null, 8, ["srcset"])) : createCommentVNode("", true),
                            __props.equipment.image_desktop_webp ? (openBlock(), createBlock("source", {
                              key: 1,
                              srcset: "/storage/" + __props.equipment.image_desktop_webp,
                              media: "(min-width: 769px)",
                              type: "image/webp"
                            }, null, 8, ["srcset"])) : createCommentVNode("", true),
                            createVNode("img", {
                              src: __props.equipment.image ? "/storage/" + __props.equipment.image : "/images/placeholder.webp",
                              alt: __props.equipment.title,
                              width: "800",
                              height: "1000",
                              fetchpriority: "high",
                              decoding: "async"
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ]),
                      createVNode(RotatingBadge, {
                        class: "ld-seal",
                        size: 136
                      }),
                      createVNode("span", {
                        class: "ld-caption",
                        "aria-hidden": "true"
                      }, [
                        createVNode("span", null, toDisplayString(__props.equipment.category), 1),
                        createVNode("span", { class: "ld-caption__line" }),
                        createVNode("span", null, toDisplayString(heroTitle.value.accent || heroTitle.value.main), 1)
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "ld-actions" }, [
                      __props.equipment.link ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: __props.equipment.link,
                        target: "_blank",
                        class: "bm-btn"
                      }, [
                        createVNode("span", null, toDisplayString(content.value.learnMore), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "arrow-up-right",
                            stroke: 2
                          })
                        ])
                      ], 8, ["href"])) : createCommentVNode("", true),
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "bm-btn bm-btn--ghost"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(content.value.contactUs), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(Link), {
                      href: "/lasers",
                      class: "ld-back"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(content.value.backToLasers), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["eyebrow", "title", "accent", "subtitle", "crumb"]),
                __props.equipment.detailed_description ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "ld-body bm-cream bm-sheet bm-section"
                }, [
                  createVNode("div", {
                    class: ["bm-container ld-body__grid", { "has-toc": hasToc.value }]
                  }, [
                    hasToc.value ? (openBlock(), createBlock("aside", {
                      key: 0,
                      class: "ld-toc",
                      "data-reveal": ""
                    }, [
                      createVNode("span", { class: "bm-eyebrow ld-toc__eyebrow" }, toDisplayString(__props.equipment.title), 1),
                      createVNode("ol", { class: "ld-toc__list" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(proseSections.value, (sec, i) => {
                          return openBlock(), createBlock("li", {
                            key: sec.id
                          }, [
                            createVNode("a", {
                              href: `#${sec.id}`,
                              class: { "is-active": activeSec.value === sec.id }
                            }, [
                              createVNode("span", { class: "ld-toc__n" }, toDisplayString(pad(i + 1)), 1),
                              createVNode("span", { class: "ld-toc__t" }, toDisplayString(sec.title), 1)
                            ], 10, ["href"])
                          ]);
                        }), 128))
                      ]),
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "bm-btn bm-btn--wine bm-btn--sm ld-toc__cta"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(content.value.contactUs), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-right",
                              stroke: 2
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createVNode("article", { class: "ld-sheet" }, [
                      createVNode("span", {
                        class: "ld-sheet__mark",
                        "aria-hidden": "true"
                      }, [
                        createVNode("img", {
                          src: "/logo.webp",
                          alt: "",
                          width: "64",
                          height: "64",
                          loading: "lazy",
                          decoding: "async"
                        })
                      ]),
                      createVNode("div", {
                        class: "ld-prose bm-prose",
                        innerHTML: proseHtml.value
                      }, null, 8, ["innerHTML"])
                    ])
                  ], 2)
                ])) : createCommentVNode("", true),
                __props.equipment.slug === "alma-soprano-titanium" ? (openBlock(), createBlock("section", {
                  key: 1,
                  class: ["ld-cross bm-cream", { "bm-sheet": !__props.equipment.detailed_description }]
                }, [
                  createVNode("div", { class: "bm-container" }, [
                    createVNode("div", {
                      class: "ld-cross__card bm-grain",
                      "data-reveal": ""
                    }, [
                      createVNode("span", {
                        class: "ld-cross__arch",
                        "aria-hidden": "true"
                      }),
                      createVNode(_sfc_main$2, {
                        class: "ld-cross__icon",
                        name: "laser",
                        size: 40,
                        stroke: 1.1
                      }),
                      createVNode("p", { class: "ld-cross__text" }, toDisplayString(locale.value === "mk" ? "Видете ги сите наши ласерски третмани и цени за ласерска епилација во Скопје" : "See all our laser treatments and laser hair removal prices in Skopje"), 1),
                      createVNode(unref(Link), {
                        href: "/services/laser-aesthetic",
                        class: "bm-btn ld-cross__btn"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(locale.value === "mk" ? "Ласерски третмани и ценовник →" : "Laser Treatments & Pricing →"), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("section", { class: "ld-cta bm-wine bm-section bm-grain" }, [
                  createVNode("div", {
                    class: "bm-aura",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("span", {
                    class: "ld-cta__arcs",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span"),
                    createVNode("span"),
                    createVNode("span")
                  ]),
                  createVNode("div", { class: "bm-container ld-cta__inner" }, [
                    createVNode("h2", { class: "bm-display ld-cta__title" }, [
                      createVNode(_sfc_main$3, {
                        text: content.value.contactUs
                      }, null, 8, ["text"])
                    ]),
                    createVNode("p", {
                      class: "bm-lead ld-cta__desc",
                      "data-reveal": "",
                      style: { "--d": "0.2s" }
                    }, toDisplayString(content.value.contactDesc), 1),
                    createVNode("div", {
                      class: "ld-cta__actions",
                      "data-reveal": "",
                      style: { "--d": "0.35s" }
                    }, [
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "bm-btn"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(content.value.contactUs), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "arrow-right",
                              stroke: 2
                            })
                          ])
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LaserDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LaserDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fec4ecc"]]);
export {
  LaserDetail as default
};
