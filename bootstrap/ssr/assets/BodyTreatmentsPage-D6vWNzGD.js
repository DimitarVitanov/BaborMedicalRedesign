import { computed, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-6nhil2vG.js";
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
    useScrollAnimation();
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-21623900${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-21623900${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-21623900${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-v-21623900${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-21623900${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-21623900${_scopeId}><meta property="og:type" content="website" data-v-21623900${_scopeId}><meta property="og:url" content="https://babormedical.com/services/body-treatments" data-v-21623900${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-21623900${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-21623900${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", locale.value === "mk" ? "mk_MK" : "en_US")} data-v-21623900${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-21623900${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-21623900${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-21623900${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-21623900${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, null), _parent2, _scopeId);
            _push2(`<link rel="canonical" href="https://babormedical.com/services/body-treatments" data-v-21623900${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services/body-treatments?lang=en" data-v-21623900${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services/body-treatments?lang=mk" data-v-21623900${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services/body-treatments" data-v-21623900${_scopeId}>`);
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
      _push(`<div class="body-page" data-v-21623900>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="body-hero" data-v-21623900><div class="hero-bg" data-v-21623900><div class="gradient-orb orb-1" data-v-21623900></div><div class="gradient-orb orb-2" data-v-21623900></div><div class="gradient-orb orb-3" data-v-21623900></div></div><div class="container" data-v-21623900><div class="hero-content" data-v-21623900><span class="hero-badge fade-in-up" data-v-21623900><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-21623900><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" data-v-21623900></path><path d="M9 21h6M10 17v4M14 17v4" data-v-21623900></path></svg> ${ssrInterpolate(t("ТРЕТМАНИ НА ТЕЛО", "BODY TREATMENTS"))}</span><h1 class="hero-title fade-in-up" data-v-21623900>${ssrInterpolate(__props.pageTitle)}</h1><p class="hero-subtitle fade-in-up" data-v-21623900>${ssrInterpolate(__props.pageSubtitle)}</p><div class="hero-stats fade-in-up" data-v-21623900><div class="stat" data-v-21623900><span class="stat-number" data-v-21623900>5</span><span class="stat-label" data-v-21623900>${ssrInterpolate(t("Технологии", "Technologies"))}</span></div><div class="stat-divider" data-v-21623900></div><div class="stat" data-v-21623900><span class="stat-number" data-v-21623900>3</span><span class="stat-label" data-v-21623900>${ssrInterpolate(t("Програми", "Programs"))}</span></div><div class="stat-divider" data-v-21623900></div><div class="stat" data-v-21623900><span class="stat-number" data-v-21623900>100%</span><span class="stat-label" data-v-21623900>${ssrInterpolate(t("Неинвазивно", "Non-invasive"))}</span></div></div><a href="/services/laser-aesthetic" class="other-category-link fade-in-up" data-v-21623900>${ssrInterpolate(t("Погледни", "View"))} ${ssrInterpolate(t("Ласерски третмани", "Laser Treatments"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-21623900><path d="M5 12h14M12 5l7 7-7 7" data-v-21623900></path></svg></a></div></div><div class="scroll-indicator" data-v-21623900><div class="mouse" data-v-21623900><div class="wheel" data-v-21623900></div></div></div></section><section class="body-content" data-v-21623900><div class="container" data-v-21623900>`);
      if (categoryDescription.value) {
        _push(`<div class="content-block fade-in-up" data-v-21623900><p class="intro-text" data-v-21623900>${ssrInterpolate(categoryDescription.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (technologies.value.length) {
        _push(`<div class="content-block fade-in-up" data-v-21623900><h2 class="block-title" data-v-21623900>${ssrInterpolate(t("Технологии кои ги користиме", "Technologies We Use"))}</h2><div class="tech-showcase" data-v-21623900><!--[-->`);
        ssrRenderList(technologies.value, (tech, index) => {
          _push(`<div class="tech-item fade-in-up" data-v-21623900><div class="tech-header" data-v-21623900><div class="tech-number" data-v-21623900>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div><h3 class="tech-name" data-v-21623900>${ssrInterpolate(tech.name || tech)}</h3></div>`);
          if (tech.desc) {
            _push(`<p class="tech-desc" data-v-21623900>${ssrInterpolate(tech.desc)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (tech.suitable_for || tech.areas) {
            _push(`<div class="tech-details" data-v-21623900><div class="detail-group" data-v-21623900><span class="detail-label" data-v-21623900>${ssrInterpolate(tech.areas ? t("Зони:", "Areas:") : t("Погодно за:", "Suitable for:"))}</span><ul class="detail-list" data-v-21623900><!--[-->`);
            ssrRenderList(tech.areas || tech.suitable_for, (item) => {
              _push(`<li data-v-21623900>${ssrInterpolate(item)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
            if (tech.areas && tech.suitable_for) {
              _push(`<div class="detail-group" data-v-21623900><span class="detail-label" data-v-21623900>${ssrInterpolate(t("Ефекти:", "Effects:"))}</span><ul class="detail-list" data-v-21623900><!--[-->`);
              ssrRenderList(tech.suitable_for, (item) => {
                _push(`<li data-v-21623900>${ssrInterpolate(item)}</li>`);
              });
              _push(`<!--]--></ul></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (programs.value.length) {
        _push(`<div class="content-block fade-in-up" data-v-21623900><h2 class="block-title" data-v-21623900>${ssrInterpolate(t("Програмски пристап", "Program Approach"))}</h2><p class="block-text" data-v-21623900>${ssrInterpolate(t("Најдобри резултати се постигнуваат кога третманите се комбинираат во структуриран план.", "Best results are achieved when treatments are combined in a structured plan."))}</p><div class="programs-grid" data-v-21623900><!--[-->`);
        ssrRenderList(programs.value, (program, index) => {
          _push(`<div class="program-card fade-in-up" data-v-21623900><h3 class="program-name" data-v-21623900>${ssrInterpolate(program.name || program)}</h3>`);
          if (program.desc) {
            _push(`<p class="program-desc" data-v-21623900>${ssrInterpolate(program.desc)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (individualPlanPoints.value.length) {
        _push(`<div class="content-block fade-in-up" data-v-21623900><h2 class="block-title" data-v-21623900>${ssrInterpolate(t("Индивидуален план", "Individual Plan"))}</h2><p class="block-text" data-v-21623900>${ssrInterpolate(t("Секој клиент добива индивидуална препорака според:", "Every client receives an individual recommendation based on:"))}</p><ul class="styled-list" data-v-21623900><!--[-->`);
        ssrRenderList(individualPlanPoints.value, (point) => {
          _push(`<li data-v-21623900>${ssrInterpolate(point)}</li>`);
        });
        _push(`<!--]--></ul><p class="block-note" data-v-21623900>${ssrInterpolate(t("Нашата цел е постепено, безбедно и природно подобрување на контурата на телото.", "Our goal is gradual, safe and natural improvement of body contours."))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (treatments.value.length) {
        _push(`<div class="content-block fade-in-up" data-v-21623900><h2 class="block-title" data-v-21623900>${ssrInterpolate(t("Наши третмани", "Our Treatments"))}</h2><div class="tech-grid" data-v-21623900><!--[-->`);
        ssrRenderList(treatments.value, (item) => {
          _push(`<div class="treatment-card fade-in-up" data-v-21623900><h3 class="treatment-name" data-v-21623900>${ssrInterpolate(item.name)}</h3>`);
          if (item.description) {
            _push(`<div class="treatment-desc" data-v-21623900>${item.description ?? ""}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.url) {
            _push(`<a${ssrRenderAttr("href", item.url)} class="treatment-link" data-v-21623900>${ssrInterpolate(t("Прочитај повеќе", "Learn more"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-21623900><path d="M5 12h14M12 5l7 7-7 7" data-v-21623900></path></svg></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.priceListPdf) {
        _push(`<div class="content-block fade-in-up pricing-block" data-v-21623900><h2 class="block-title" data-v-21623900>${ssrInterpolate(t("Ценовник", "Pricing"))}</h2><p class="block-text" data-v-21623900>${ssrInterpolate(t("Погледнете го нашиот комплетен ценовник за третмани на тело.", "View our complete price list for body treatments."))}</p><div class="pdf-actions" data-v-21623900><a${ssrRenderAttr("href", __props.priceListPdf)} target="_blank" class="pdf-btn" data-v-21623900><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-21623900><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-21623900></path><polyline points="14 2 14 8 20 8" data-v-21623900></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-21623900></line><line x1="16" y1="17" x2="8" y2="17" data-v-21623900></line><polyline points="10 9 9 9 8 9" data-v-21623900></polyline></svg> ${ssrInterpolate(t("Отвори ценовник (PDF)", "View Price List (PDF)"))}</a><a${ssrRenderAttr("href", __props.priceListPdf)} download class="pdf-btn pdf-btn-secondary" data-v-21623900><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-21623900><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-21623900></path><polyline points="7 10 12 15 17 10" data-v-21623900></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-21623900></line></svg> ${ssrInterpolate(t("Преземи ценовник", "Download Price List"))}</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="closing-block fade-in-up" data-v-21623900><h2 class="closing-title" data-v-21623900>${ssrInterpolate(t("Интегриран естетски план", "Integrated Aesthetic Plan"))}</h2><p class="closing-text" data-v-21623900>${ssrInterpolate(t("За оптимален резултат, третманите на тело често се комбинираат со козметолошки и медицинско‑естетски процедури во рамките на интегриран естетски план.", "For optimal results, body treatments are often combined with cosmetological and medical-aesthetic procedures within an integrated aesthetic plan."))}</p><a href="/contact" class="cta-btn" data-v-21623900>${ssrInterpolate(t("Закажи консултација", "Book a consultation"))} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-21623900><path d="M5 12h14M12 5l7 7-7 7" data-v-21623900></path></svg></a></div></div></section><section class="seo-content" data-v-21623900><div class="container" data-v-21623900><h2 data-v-21623900>${ssrInterpolate(t("Третмани на тело во Скопје – Babor Medical", "Body Treatments in Skopje – Babor Medical"))}</h2><p data-v-21623900>${ssrInterpolate(t("Babor Medical нуди напредни третмани на тело во Скопје со најсовремена апаратурна естетика. Нашите неинвазивни технологии – Ultraformer, Accent Prime, LaserShape, EM Time и Бодипрес терапија – овозможуваат обликување на тело, намалување на целулит, затегнување на кожа и подобрување на циркулацијата. Индивидуален пристап и програмски третмани за долгорочни резултати.", "Babor Medical offers advanced body treatments in Skopje with state-of-the-art aesthetic technology. Our non-invasive technologies – Ultraformer, Accent Prime, LaserShape, EM Time and Body Press therapy – enable body contouring, cellulite reduction, skin tightening and circulation improvement. Individual approach and program treatments for long-term results."))}</p></div></section><section class="faq-section" data-v-21623900><div class="container" data-v-21623900><div class="faq-header fade-in-up" data-v-21623900><h2 class="faq-title" data-v-21623900>${ssrInterpolate(t("Најчесто поставувани прашања", "Frequently Asked Questions"))}</h2></div><div class="faq-grid" data-v-21623900><div class="faq-item fade-in-up" data-v-21623900><h3 class="faq-question" data-v-21623900>${ssrInterpolate(t("Кои третмани за тело ги нудите во Babor Medical?", "What body treatments do you offer at Babor Medical?"))}</h3><p class="faq-answer" data-v-21623900>${ssrInterpolate(t("Нудиме широк спектар на апаратурни третмани за тело: Accent Prime за обликување и затегнување, EM Time за мускулна стимулација, LaserShape за намалување на масни наслаги, лимфна дренажа и третмани за стрии и целулит.", "We offer a wide range of body treatments: Accent Prime for contouring and tightening, EM Time for muscle stimulation, LaserShape for fat reduction, lymphatic drainage and treatments for stretch marks and cellulite."))}</p></div><div class="faq-item fade-in-up" data-v-21623900><h3 class="faq-question" data-v-21623900>${ssrInterpolate(t("Дали третманите за обликување на тело се болни?", "Are body contouring treatments painful?"))}</h3><p class="faq-answer" data-v-21623900>${ssrInterpolate(t("Не, нашите апаратурни третмани за тело се неинвазивни и безболни. Accent Prime и EM Time користат напредна технологија која обезбедува комфортен третман без период на закрепнување.", "No, our body treatments are non-invasive and painless. Accent Prime and EM Time use advanced technology that ensures a comfortable treatment with no downtime."))}</p></div><div class="faq-item fade-in-up" data-v-21623900><h3 class="faq-question" data-v-21623900>${ssrInterpolate(t("Колку третмани се потребни за видливи резултати?", "How many treatments are needed for visible results?"))}</h3><p class="faq-answer" data-v-21623900>${ssrInterpolate(t("Обично се препорачуваат 4-8 третмани за оптимални резултати, во зависност од третманот и индивидуалната состојба. Првите резултати може да се видат по 2-3 третмани.", "Usually 4-8 treatments are recommended for optimal results, depending on the treatment and individual condition. First results can be seen after 2-3 treatments."))}</p></div><div class="faq-item fade-in-up" data-v-21623900><h3 class="faq-question" data-v-21623900>${ssrInterpolate(t("Колку чинат третманите за тело во Скопје?", "How much do body treatments cost in Skopje?"))}</h3><p class="faq-answer" data-v-21623900>${ssrInterpolate(t("Цените за третмани на тело варираат зависно од процедурата и бројот на зони. За детален ценовник контактирајте нè на +389 75 340 933 или посетете го нашиот центар во Скопје.", "Body treatment prices vary depending on the procedure and number of zones. For a detailed price list, contact us at +389 75 340 933 or visit our center in Skopje."))}</p></div></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/BodyTreatmentsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BodyTreatmentsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21623900"]]);
export {
  BodyTreatmentsPage as default
};
