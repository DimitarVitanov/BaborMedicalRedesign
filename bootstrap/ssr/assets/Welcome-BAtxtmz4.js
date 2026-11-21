import { computed, ref, onMounted, onUnmounted, mergeProps, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, Fragment, toDisplayString, createTextVNode, useSSRContext, renderList, createCommentVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderVNode, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./useInView-B_i8FHxn.js";
import { M as Marquee } from "./Marquee-DRBFwWuw.js";
import { a as _sfc_main$7, _ as _sfc_main$8 } from "./Footer-D-2r2JUh.js";
import { R as RotatingBadge } from "./RotatingBadge-BD3v2tF1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { S as ScrollWords } from "./ScrollWords-Cljcku_x.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { H as HorizontalScroll } from "./HorizontalScroll-DjxgOk6L.js";
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    ref(null);
    const sectionRef = ref(null);
    const defaultSlides = [
      {
        subtitle: "Welcome to Babor Medical",
        title: "Premium",
        highlight: "Skincare",
        description: "Great skincare should feel luxurious. Experience the perfect blend of science and nature for radiant, healthy skin.",
        cta_text: "Explore Products",
        cta_link: "#",
        secondary_text: "Learn More",
        secondary_link: "#"
      },
      {
        subtitle: "Advanced Treatments",
        title: "Medical",
        highlight: "Excellence",
        description: "Cutting-edge dermatological solutions backed by decades of research and innovation for transformative results.",
        cta_text: "Our Services",
        cta_link: "#",
        secondary_text: "Book Now",
        secondary_link: "#"
      },
      {
        subtitle: "Natural Beauty",
        title: "Radiant",
        highlight: "Results",
        description: "Discover the power of nature combined with science. Our treatments reveal your skin's natural beauty.",
        cta_text: "View Products",
        cta_link: "#",
        secondary_text: "Contact Us",
        secondary_link: "#"
      }
    ];
    const activeSlides = computed(() => {
      return props.slides && props.slides.length > 0 ? props.slides : defaultSlides;
    });
    const currentSlide = ref(0);
    const isAnimating = ref(false);
    let autoplayInterval = null;
    const nextSlide = () => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentSlide.value = (currentSlide.value + 1) % activeSlides.value.length;
      setTimeout(() => {
        isAnimating.value = false;
      }, 800);
    };
    const startAutoplay = () => {
      if (!autoplayInterval && activeSlides.value.length > 1) {
        autoplayInterval = setInterval(nextSlide, 8e3);
      }
    };
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        var _a;
        raf = 0;
        const y = Math.min(window.scrollY, window.innerHeight);
        (_a = sectionRef.value) == null ? void 0 : _a.style.setProperty("--hy", `${y}`);
      });
    };
    const pad = (n) => String(n).padStart(2, "0");
    const sealText = computed(() => locale.value === "mk" ? "Babor Medical · Ласерски естетски центар · Скопје · " : "Babor Medical · Laser Aesthetic Center · Skopje · ");
    const scrollLabel = computed(() => locale.value === "mk" ? "Скролај" : "Scroll");
    onMounted(() => {
      const events = ["click", "touchstart", "scroll"];
      const handler = () => {
        startAutoplay();
        events.forEach((e) => window.removeEventListener(e, handler));
      };
      events.forEach((e) => window.addEventListener(e, handler, { once: false, passive: true }));
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.addEventListener("scroll", onScroll, { passive: true });
      }
    });
    onUnmounted(() => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "hero-section bm-hero bm-grain"
      }, _attrs))} data-v-8563acb4><div class="bm-aura" aria-hidden="true" data-v-8563acb4><span data-v-8563acb4></span><span data-v-8563acb4></span><span data-v-8563acb4></span></div><div class="bm-columns-bg" aria-hidden="true" data-v-8563acb4></div><div class="bm-hero__slider" data-v-8563acb4><!--[-->`);
      ssrRenderList(activeSlides.value, (slide, index) => {
        _push(`<div class="${ssrRenderClass([{ "is-active": currentSlide.value === index }, "bm-hero__slide"])}"${ssrRenderAttr("aria-hidden", currentSlide.value === index ? null : "true")} data-v-8563acb4><div class="bm-container bm-hero__grid" data-v-8563acb4><div class="bm-hero__copy" data-v-8563acb4><p class="bm-eyebrow bm-hero__eyebrow bm-intro" style="${ssrRenderStyle({ "--d": "0s" })}" data-v-8563acb4>${ssrInterpolate(slide.subtitle)}</p>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(index === 0 ? "h1" : "h2"), { class: "bm-display bm-hero__title" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (index === 0) {
                _push2(`<!--[--><span data-v-8563acb4${_scopeId}>${ssrInterpolate(slide.title)}</span> ${ssrInterpolate(" ")}<br data-v-8563acb4${_scopeId}><span class="bm-accent" data-v-8563acb4${_scopeId}>${ssrInterpolate(slide.highlight)}</span><!--]-->`);
              } else {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  text: slide.title,
                  delay: 0.1,
                  instant: ""
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(" ")}<br data-v-8563acb4${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  text: slide.highlight,
                  class: "bm-accent",
                  delay: 0.1,
                  start: String(slide.title || "").split(" ").length,
                  instant: ""
                }, null, _parent2, _scopeId));
                _push2(`<!--]-->`);
              }
            } else {
              return [
                index === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("span", null, toDisplayString(slide.title), 1),
                  createTextVNode(" " + toDisplayString(" ")),
                  createVNode("br"),
                  createVNode("span", { class: "bm-accent" }, toDisplayString(slide.highlight), 1)
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_sfc_main$7, {
                    text: slide.title,
                    delay: 0.1,
                    instant: ""
                  }, null, 8, ["text"]),
                  createTextVNode(" " + toDisplayString(" ")),
                  createVNode("br"),
                  createVNode(_sfc_main$7, {
                    text: slide.highlight,
                    class: "bm-accent",
                    delay: 0.1,
                    start: String(slide.title || "").split(" ").length,
                    instant: ""
                  }, null, 8, ["text", "start"])
                ], 64))
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`<p class="bm-lead bm-hero__desc bm-intro" style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-8563acb4>${ssrInterpolate(slide.description)}</p><div class="bm-hero__actions bm-intro" style="${ssrRenderStyle({ "--d": "0.32s" })}" data-v-8563acb4><a${ssrRenderAttr("href", slide.cta_link || "#")} class="bm-btn" data-v-8563acb4><span data-v-8563acb4>${ssrInterpolate(slide.cta_text)}<span class="visually-hidden" data-v-8563acb4> - ${ssrInterpolate(slide.title)} ${ssrInterpolate(slide.highlight)}</span></span><span class="bm-btn__icon" data-v-8563acb4>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "arrow-right",
          stroke: 2
        }, null, _parent));
        _push(`</span></a><a${ssrRenderAttr("href", slide.secondary_link || "#")} class="bm-btn bm-btn--ghost" data-v-8563acb4>${ssrInterpolate(slide.secondary_text)}<span class="visually-hidden" data-v-8563acb4> - ${ssrInterpolate(slide.title)} ${ssrInterpolate(slide.highlight)}</span></a></div></div><div class="bm-hero__visual" data-v-8563acb4><div class="${ssrRenderClass([index === 0 ? "" : "bm-intro bm-intro--scale", "bm-hero__visual-in"])}" style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-8563acb4><div class="bm-hero__arch bm-arch bm-stage" data-v-8563acb4><span class="bm-hero__ring" aria-hidden="true" data-v-8563acb4></span>`);
        if (slide.image || slide.image_desktop_webp) {
          _push(`<picture data-v-8563acb4>`);
          if (slide.image_mobile_webp) {
            _push(`<source media="(max-width: 768px)"${ssrRenderAttr("srcset", "/storage/" + slide.image_mobile_webp)} type="image/webp" data-v-8563acb4>`);
          } else {
            _push(`<!---->`);
          }
          if (slide.image_desktop_webp) {
            _push(`<source media="(min-width: 769px)"${ssrRenderAttr("srcset", "/storage/" + slide.image_desktop_webp)} type="image/webp" data-v-8563acb4>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img${ssrRenderAttr("src", slide.image ? "/storage/" + slide.image : "/storage/" + slide.image_desktop_webp)}${ssrRenderAttr("alt", slide.title)} class="hero-image bm-hero__img" width="450" height="500"${ssrRenderAttr("loading", index === 0 ? "eager" : "lazy")} decoding="async"${ssrRenderAttr("fetchpriority", index === 0 ? "high" : "auto")} data-v-8563acb4></picture>`);
        } else {
          _push(`<div class="bm-hero__noimg" data-v-8563acb4>`);
          _push(ssrRenderComponent(_sfc_main$8, {
            name: "sparkle",
            size: 56,
            stroke: 1
          }, null, _parent));
          _push(`<p data-v-8563acb4>No image uploaded</p></div>`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(RotatingBadge, {
          class: "bm-hero__seal",
          text: sealText.value,
          logo: "/logo.webp",
          size: 148
        }, null, _parent));
        _push(`<div class="bm-hero__caption" aria-hidden="true" data-v-8563acb4><span data-v-8563acb4>${ssrInterpolate(pad(index + 1))}</span><span class="bm-hero__caption-line" data-v-8563acb4></span><span data-v-8563acb4>${ssrInterpolate(slide.highlight)}</span></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="bm-container bm-hero__footer" data-v-8563acb4><div class="bm-hero__scroll" aria-hidden="true" data-v-8563acb4><span class="bm-hero__scroll-line" data-v-8563acb4></span> ${ssrInterpolate(scrollLabel.value)}</div>`);
      if (activeSlides.value.length > 1) {
        _push(`<div class="bm-hero__controls" data-v-8563acb4><span class="bm-hero__count" data-v-8563acb4>${ssrInterpolate(pad(currentSlide.value + 1))} <i data-v-8563acb4>/ ${ssrInterpolate(pad(activeSlides.value.length))}</i></span><div class="slider-dots bm-hero__dots" data-v-8563acb4><!--[-->`);
        ssrRenderList(activeSlides.value, (slide, index) => {
          _push(`<button class="${ssrRenderClass([{ active: currentSlide.value === index }, "slider-dot bm-hero__dot"])}"${ssrRenderAttr("aria-label", `Go to slide ${index + 1}`)} data-v-8563acb4><span data-v-8563acb4></span></button>`);
        });
        _push(`<!--]--></div><button class="slider-btn bm-hero__arrow" aria-label="Previous slide" data-v-8563acb4>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "arrow-left",
          size: 18
        }, null, _parent));
        _push(`</button><button class="slider-btn bm-hero__arrow" aria-label="Next slide" data-v-8563acb4>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "arrow-right",
          size: 18
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><span id="bm-above-fold" hidden data-v-8563acb4></span></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8563acb4"]]);
const _sfc_main$5 = {
  __name: "ServiceCategoriesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const sectionTitle = computed(() => locale.value === "mk" ? "Наши Услуги" : "Our Services");
    const sectionSubtitle = computed(() => locale.value === "mk" ? "Изберете категорија на третмани" : "Choose a treatment category");
    const categories = computed(() => [
      {
        id: "cosmetology",
        name: locale.value === "mk" ? "Козметологија" : "Cosmetology",
        description: locale.value === "mk" ? "Професионални козметички третмани за совршена кожа и природна убавина" : "Professional cosmetic treatments for perfect skin and natural beauty",
        href: "/services/cosmetology",
        icon: "sparkle"
      },
      {
        id: "laser",
        name: locale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments",
        description: locale.value === "mk" ? "Напредни ласерски третмани за подмладување, ласерска епилација и корекција на кожата" : "Advanced laser treatments for rejuvenation, hair removal and skin correction",
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
    const ctaLabel = computed(() => locale.value === "mk" ? "Погледни Третмани" : "View Treatments");
    const pad = (n) => String(n).padStart(2, "0");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-categories-section bm-cats bm-paper bm-sheet bm-section" }, _attrs))} data-v-d140d628><div class="bm-container" data-v-d140d628><div class="section-header bm-cats__head" data-v-d140d628><span class="bm-eyebrow" data-reveal data-v-d140d628>${ssrInterpolate(sectionTitle.value)}</span><h2 class="section-title bm-h2 bm-cats__title" data-v-d140d628>`);
      _push(ssrRenderComponent(_sfc_main$7, { text: sectionSubtitle.value }, null, _parent));
      _push(`</h2></div><div class="categories-grid bm-cats__list" data-v-d140d628><!--[-->`);
      ssrRenderList(categories.value, (category, index) => {
        _push(`<a${ssrRenderAttr("href", category.href)} class="category-box bm-cat" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.08}s` })}" data-v-d140d628><span class="bm-cat__idx" data-v-d140d628>${ssrInterpolate(pad(index + 1))}</span><span class="bm-cat__icon" data-v-d140d628>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: category.icon,
          size: 24,
          stroke: 1.4
        }, null, _parent));
        _push(`</span><h3 class="box-title bm-cat__name" data-v-d140d628>${ssrInterpolate(category.name)}</h3><p class="box-description bm-cat__desc" data-v-d140d628>${ssrInterpolate(category.description)}</p><span class="box-cta bm-cat__cta" data-v-d140d628><span class="bm-cat__cta-label" data-v-d140d628>${ssrInterpolate(ctaLabel.value)}</span><span class="bm-cat__cta-icon" data-v-d140d628>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "arrow-right",
          size: 18,
          stroke: 1.8
        }, null, _parent));
        _push(`</span></span></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServiceCategoriesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ServiceCategoriesSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d140d628"]]);
const _sfc_main$4 = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const sectionTitle = computed(() => locale.value === "mk" ? "Третмани" : "Treatments");
    const sectionSubtitle = computed(() => locale.value === "mk" ? "Кои третмани ви ги нудиме ние?" : "What treatments do we offer?");
    const activeServices = computed(() => props.services || []);
    const getTitle = (service) => {
      return locale.value === "mk" && service.title_mk ? service.title_mk : service.title;
    };
    const getDescription = (service) => {
      return locale.value === "mk" && service.description_mk ? service.description_mk : service.description;
    };
    const iconFor = (icon) => ["face", "laser", "body", "product"].includes(icon) ? icon : "star";
    const pad = (n) => String(n).padStart(2, "0");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section bm-services bm-dark bm-section bm-grain" }, _attrs))} data-v-eee35c24><div class="bm-container" data-v-eee35c24><div class="section-header bm-services__head" data-v-eee35c24><div data-v-eee35c24><span class="section-badge bm-eyebrow" data-reveal data-v-eee35c24>${ssrInterpolate(locale.value === "mk" ? "НАШИТЕ УСЛУГИ" : "OUR SERVICES")}</span><h2 class="section-title bm-h1 bm-services__title" data-v-eee35c24>`);
      _push(ssrRenderComponent(_sfc_main$7, { text: sectionTitle.value }, null, _parent));
      _push(`</h2></div><p class="section-subtitle bm-services__sub" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-eee35c24>${ssrInterpolate(sectionSubtitle.value)}</p></div><div class="services-grid bm-services__grid" data-v-eee35c24><!--[-->`);
      ssrRenderList(activeServices.value, (service, index) => {
        _push(`<a${ssrRenderAttr("href", service.link || "#")} class="service-card bm-svc" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.1}s` })}" data-v-eee35c24><span class="bm-svc__num bm-numeral" aria-hidden="true" data-v-eee35c24>${ssrInterpolate(pad(index + 1))}</span><span class="bm-svc__icon" data-v-eee35c24>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: iconFor(service.icon),
          size: 26,
          stroke: 1.4
        }, null, _parent));
        _push(`</span><h3 class="service-title bm-svc__title" data-v-eee35c24>${ssrInterpolate(getTitle(service))}</h3><p class="service-description bm-svc__desc" data-v-eee35c24>${ssrInterpolate(getDescription(service))}</p><span class="service-link bm-svc__link"${ssrRenderAttr("aria-label", locale.value === "mk" ? `Дознај повеќе за ${getTitle(service)}` : `Learn more about ${getTitle(service)}`)} data-v-eee35c24>${ssrInterpolate(locale.value === "mk" ? "Дознај повеќе" : "Learn more")} <span class="bm-svc__arrow" data-v-eee35c24>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "arrow-up-right",
          size: 16,
          stroke: 1.8
        }, null, _parent));
        _push(`</span></span></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServicesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ServicesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-eee35c24"]]);
const _sfc_main$3 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  props: {
    about: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const content = computed(() => {
      var _a, _b, _c, _d;
      return {
        badge: locale.value === "mk" ? "ЗА НАС" : "ABOUT US",
        title: ((_a = props.about) == null ? void 0 : _a.title) || (locale.value === "mk" ? "Вашиот партнер за убавина и здравје" : "Your Partner in Beauty & Wellness"),
        subtitle: ((_b = props.about) == null ? void 0 : _b.subtitle) || (locale.value === "mk" ? "Со повеќе од 25 години искуство, Babor Medical е водечки центар за дерматологија и спа третмани во Македонија." : "With over 25 years of experience, Babor Medical is the leading dermatology and spa center in Macedonia."),
        description: ((_c = props.about) == null ? void 0 : _c.short_description) || (locale.value === "mk" ? "Нашиот тим од сертифицирани дерматолози и козметичари користи најсовремена технологија и премиум Babor производи за да ви обезбеди исклучителни резултати." : "Our team of certified dermatologists and aestheticians uses cutting-edge technology and premium Babor products to deliver exceptional results."),
        image: ((_d = props.about) == null ? void 0 : _d.image) || "/images/about.webp",
        stats: [
          { number: "25+", label: locale.value === "mk" ? "Години искуство" : "Years Experience" },
          { number: "10K+", label: locale.value === "mk" ? "Задоволни клиенти" : "Happy Clients" },
          { number: "50+", label: locale.value === "mk" ? "Третмани" : "Treatments" },
          { number: "15+", label: locale.value === "mk" ? "Експерти" : "Experts" }
        ],
        // Kept for content parity — this list was hidden (d-none) in the previous design too.
        features: [
          {
            icon: "certified",
            title: locale.value === "mk" ? "Сертифицирани експерти" : "Certified Experts",
            desc: locale.value === "mk" ? "Тим од лиценцирани дерматолози" : "Team of licensed dermatologists"
          },
          {
            icon: "technology",
            title: locale.value === "mk" ? "Модерна технологија" : "Modern Technology",
            desc: locale.value === "mk" ? "Најнова опрема и техники" : "Latest equipment and techniques"
          },
          {
            icon: "products",
            title: locale.value === "mk" ? "Премиум производи" : "Premium Products",
            desc: locale.value === "mk" ? "Официјален Babor партнер" : "Official Babor partner"
          }
        ],
        cta: locale.value === "mk" ? "Прочитај повеќе" : "Read more",
        ctaAriaLabel: locale.value === "mk" ? "Прочитај повеќе за Babor Medical" : "Read more about Babor Medical",
        ctaContact: locale.value === "mk" ? "Закажи консултација" : "Book Consultation"
      };
    });
    const subtitleIsPlain = computed(() => !/<[a-z!/][\s\S]*>/i.test(content.value.subtitle || ""));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section bm-about bm-cream bm-sheet bm-section" }, _attrs))} data-v-6b37fb70><div class="bm-container" data-v-6b37fb70><div class="bm-about__head" data-v-6b37fb70><span class="section-badge bm-eyebrow" data-reveal data-v-6b37fb70>${ssrInterpolate(content.value.badge)}</span><h2 class="about-title bm-h2 bm-about__title" data-v-6b37fb70>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        text: content.value.title
      }, null, _parent));
      _push(`</h2></div>`);
      if (subtitleIsPlain.value) {
        _push(ssrRenderComponent(ScrollWords, {
          text: content.value.subtitle,
          tag: "p",
          class: "about-subtitle bm-about__statement"
        }, null, _parent));
      } else {
        _push(`<div class="about-subtitle bm-about__statement" data-v-6b37fb70>${content.value.subtitle ?? ""}</div>`);
      }
      _push(`<div class="bm-about__grid" data-v-6b37fb70><div class="bm-about__visual" data-v-6b37fb70><div class="bm-about__frame" data-reveal="mask" data-v-6b37fb70><picture class="about-image-wrapper" data-v-6b37fb70><source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp" data-v-6b37fb70><source srcset="/images/about.webp" type="image/webp" data-v-6b37fb70><img src="/images/about.webp" alt="Babor Medical Team" class="about-image" loading="lazy" decoding="async" width="800" height="534" data-v-6b37fb70></picture></div><div class="bm-about__float bm-about__float--a" data-reveal style="${ssrRenderStyle({ "--d": "0.35s" })}" data-v-6b37fb70><span class="bm-about__float-icon" data-v-6b37fb70>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        name: "check",
        size: 18,
        stroke: 2
      }, null, _parent));
      _push(`</span><span class="bm-about__float-text" data-v-6b37fb70><strong data-v-6b37fb70>100%</strong><span data-v-6b37fb70>${ssrInterpolate(locale.value === "mk" ? "Задоволство" : "Satisfaction")}</span></span></div><div class="bm-about__float bm-about__float--b" data-reveal style="${ssrRenderStyle({ "--d": "0.5s" })}" data-v-6b37fb70><span class="bm-about__float-icon" data-v-6b37fb70>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        name: "star",
        size: 18,
        stroke: 1.8
      }, null, _parent));
      _push(`</span><span class="bm-about__float-text" data-v-6b37fb70><strong data-v-6b37fb70>5.0</strong><span data-v-6b37fb70>${ssrInterpolate(locale.value === "mk" ? "Рејтинг" : "Rating")}</span></span></div></div><div class="bm-about__content" data-v-6b37fb70><div class="about-description bm-about__desc bm-prose" data-reveal data-v-6b37fb70>${content.value.description ?? ""}</div><div class="features-list d-none" data-v-6b37fb70><!--[-->`);
      ssrRenderList(content.value.features, (feature, index) => {
        _push(`<div class="feature-item" data-v-6b37fb70><h4 data-v-6b37fb70>${ssrInterpolate(feature.title)}</h4><p data-v-6b37fb70>${ssrInterpolate(feature.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="about-cta-group bm-about__actions" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-6b37fb70><a href="/about" class="bm-btn bm-btn--wine" data-v-6b37fb70><span data-v-6b37fb70>${ssrInterpolate(content.value.cta)}<span class="visually-hidden" data-v-6b37fb70> about Babor Medical</span></span><span class="bm-btn__icon" data-v-6b37fb70>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        name: "arrow-right",
        stroke: 2
      }, null, _parent));
      _push(`</span></a><a href="/contact" class="bm-btn bm-btn--ghost"${ssrRenderAttr("aria-label", locale.value === "mk" ? "Закажи консултација во Babor Medical" : "Book a consultation at Babor Medical")} data-v-6b37fb70>${ssrInterpolate(content.value.ctaContact)}</a></div><div class="stats-grid bm-about__stats" data-v-6b37fb70><!--[-->`);
      ssrRenderList(content.value.stats, (stat, index) => {
        _push(`<div class="stat-box bm-about__stat" data-reveal style="${ssrRenderStyle({ "--d": `${0.1 * index}s` })}" data-v-6b37fb70><span class="stat-number bm-about__stat-num" data-v-6b37fb70>`);
        _push(ssrRenderComponent(Counter, {
          value: stat.number
        }, null, _parent));
        _push(`</span><span class="stat-label bm-about__stat-label" data-v-6b37fb70>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6b37fb70"]]);
const _sfc_main$2 = {
  __name: "EquipmentSection",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ОПРЕМА" : "EQUIPMENT",
      title: locale.value === "mk" ? "Алма Ласери" : "Alma Lasers",
      subtitle: locale.value === "mk" ? "Најсовремена технологија за третмани на кожа и тело" : "State-of-the-art technology for skin and body treatments",
      learnMore: locale.value === "mk" ? "Погледни детали за ласерот" : "View laser details",
      scrollHint: locale.value === "mk" ? "Скролај за да ги видиш сите" : "Scroll to explore"
    }));
    const pad = (n) => String(n).padStart(2, "0");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "equipment-section bm-equip bm-dark bm-grain",
        id: "equipment"
      }, _attrs))} data-v-09abc613><div class="bm-aura" aria-hidden="true" data-v-09abc613><span data-v-09abc613></span><span data-v-09abc613></span><span data-v-09abc613></span></div>`);
      _push(ssrRenderComponent(HorizontalScroll, null, {
        intro: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bm-equip__intro" data-v-09abc613${_scopeId}><span class="section-badge bm-eyebrow" data-reveal data-v-09abc613${_scopeId}>${ssrInterpolate(content.value.badge)}</span><h2 class="section-title bm-display bm-equip__title" data-v-09abc613${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              text: content.value.title
            }, null, _parent2, _scopeId));
            _push2(`</h2><p class="section-subtitle bm-lead bm-muted bm-equip__sub" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-09abc613${_scopeId}>${ssrInterpolate(content.value.subtitle)}</p><div class="bm-equip__hint" data-reveal style="${ssrRenderStyle({ "--d": "0.35s" })}" aria-hidden="true" data-v-09abc613${_scopeId}><span class="bm-equip__hint-line" data-v-09abc613${_scopeId}></span>${ssrInterpolate(content.value.scrollHint)} `);
            _push2(ssrRenderComponent(_sfc_main$8, {
              name: "arrow-right",
              size: 16
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "bm-equip__intro" }, [
                createVNode("span", {
                  class: "section-badge bm-eyebrow",
                  "data-reveal": ""
                }, toDisplayString(content.value.badge), 1),
                createVNode("h2", { class: "section-title bm-display bm-equip__title" }, [
                  createVNode(_sfc_main$7, {
                    text: content.value.title
                  }, null, 8, ["text"])
                ]),
                createVNode("p", {
                  class: "section-subtitle bm-lead bm-muted bm-equip__sub",
                  "data-reveal": "",
                  style: { "--d": "0.2s" }
                }, toDisplayString(content.value.subtitle), 1),
                createVNode("div", {
                  class: "bm-equip__hint",
                  "data-reveal": "",
                  style: { "--d": "0.35s" },
                  "aria-hidden": "true"
                }, [
                  createVNode("span", { class: "bm-equip__hint-line" }),
                  createTextVNode(toDisplayString(content.value.scrollHint) + " ", 1),
                  createVNode(_sfc_main$8, {
                    name: "arrow-right",
                    size: 16
                  })
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.equipment, (item, index) => {
              _push2(`<article class="equipment-card bm-device" data-v-09abc613${_scopeId}><a${ssrRenderAttr("href", item.link || "#")} class="bm-device__stage bm-stage" tabindex="-1" aria-hidden="true" data-v-09abc613${_scopeId}><span class="bm-device__num bm-numeral" data-v-09abc613${_scopeId}>${ssrInterpolate(pad(index + 1))}</span>`);
              if (item.image || item.image_desktop_webp) {
                _push2(`<picture data-v-09abc613${_scopeId}>`);
                if (item.image_mobile_webp) {
                  _push2(`<source media="(max-width: 768px)"${ssrRenderAttr("srcset", "/storage/" + item.image_mobile_webp)} type="image/webp" data-v-09abc613${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.image_desktop_webp) {
                  _push2(`<source media="(min-width: 769px)"${ssrRenderAttr("srcset", "/storage/" + item.image_desktop_webp)} type="image/webp" data-v-09abc613${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<img${ssrRenderAttr("src", item.image ? "/storage/" + item.image : "/storage/" + item.image_desktop_webp)}${ssrRenderAttr("alt", item.title)} width="400" height="400" loading="lazy" data-v-09abc613${_scopeId}></picture>`);
              } else {
                _push2(`<span class="bm-device__placeholder" data-v-09abc613${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8, {
                  name: "laser",
                  size: 64,
                  stroke: 1
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              }
              _push2(`</a><div class="bm-device__body" data-v-09abc613${_scopeId}><h3 class="card-title bm-device__title" data-v-09abc613${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
              if (item.description) {
                _push2(`<p class="card-description bm-device__desc" data-v-09abc613${_scopeId}>${ssrInterpolate(item.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<a${ssrRenderAttr("href", item.link || "#")} class="card-link bm-link bm-device__link"${ssrRenderAttr("aria-label", locale.value === "mk" ? `Погледни детали за ${item.title}` : `View ${item.title} details`)} data-v-09abc613${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Погледни детали" : "View details")} `);
              _push2(ssrRenderComponent(_sfc_main$8, { name: "arrow-right" }, null, _parent2, _scopeId));
              _push2(`</a></div></article>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment, (item, index) => {
                return openBlock(), createBlock("article", {
                  key: item.id,
                  class: "equipment-card bm-device"
                }, [
                  createVNode("a", {
                    href: item.link || "#",
                    class: "bm-device__stage bm-stage",
                    tabindex: "-1",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span", { class: "bm-device__num bm-numeral" }, toDisplayString(pad(index + 1)), 1),
                    item.image || item.image_desktop_webp ? (openBlock(), createBlock("picture", { key: 0 }, [
                      item.image_mobile_webp ? (openBlock(), createBlock("source", {
                        key: 0,
                        media: "(max-width: 768px)",
                        srcset: "/storage/" + item.image_mobile_webp,
                        type: "image/webp"
                      }, null, 8, ["srcset"])) : createCommentVNode("", true),
                      item.image_desktop_webp ? (openBlock(), createBlock("source", {
                        key: 1,
                        media: "(min-width: 769px)",
                        srcset: "/storage/" + item.image_desktop_webp,
                        type: "image/webp"
                      }, null, 8, ["srcset"])) : createCommentVNode("", true),
                      createVNode("img", {
                        src: item.image ? "/storage/" + item.image : "/storage/" + item.image_desktop_webp,
                        alt: item.title,
                        width: "400",
                        height: "400",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "bm-device__placeholder"
                    }, [
                      createVNode(_sfc_main$8, {
                        name: "laser",
                        size: 64,
                        stroke: 1
                      })
                    ]))
                  ], 8, ["href"]),
                  createVNode("div", { class: "bm-device__body" }, [
                    createVNode("h3", { class: "card-title bm-device__title" }, toDisplayString(item.title), 1),
                    item.description ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "card-description bm-device__desc"
                    }, toDisplayString(item.description), 1)) : createCommentVNode("", true),
                    createVNode("a", {
                      href: item.link || "#",
                      class: "card-link bm-link bm-device__link",
                      "aria-label": locale.value === "mk" ? `Погледни детали за ${item.title}` : `View ${item.title} details`
                    }, [
                      createTextVNode(toDisplayString(locale.value === "mk" ? "Погледни детали" : "View details") + " ", 1),
                      createVNode(_sfc_main$8, { name: "arrow-right" })
                    ], 8, ["href", "aria-label"])
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EquipmentSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EquipmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-09abc613"]]);
const _sfc_main$1 = {
  __name: "NewsletterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const email = ref("");
    const isLoading = ref(false);
    const isSubscribed = ref(false);
    const errorMessage = ref("");
    const content = computed(() => ({
      badge: locale.value === "mk" ? "БИЛТЕН" : "NEWSLETTER",
      title: locale.value === "mk" ? "Останете во тек" : "Stay Updated",
      subtitle: locale.value === "mk" ? "Претплатете се на нашиот билтен за најновите понуди, третмани и совети за убавина." : "Subscribe to our newsletter for the latest offers, treatments and beauty tips.",
      placeholder: locale.value === "mk" ? "Вашата е-пошта" : "Your email address",
      button: locale.value === "mk" ? "Претплати се" : "Subscribe",
      successTitle: locale.value === "mk" ? "Успешно!" : "Success!",
      successMessage: locale.value === "mk" ? "Ви благодариме за претплатата. Ќе ве известуваме за најновите понуди!" : "Thank you for subscribing. We will keep you updated with the latest offers!",
      errorInvalid: locale.value === "mk" ? "Внесете валидна е-пошта" : "Please enter a valid email",
      errorAlready: locale.value === "mk" ? "Оваа е-пошта е веќе регистрирана" : "This email is already subscribed",
      errorGeneral: locale.value === "mk" ? "Настана грешка. Обидете се повторно." : "An error occurred. Please try again."
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "newsletter-section bm-news bm-wine bm-grain" }, _attrs))} data-v-8f6d1fe3><div class="bm-aura" aria-hidden="true" data-v-8f6d1fe3><span data-v-8f6d1fe3></span><span data-v-8f6d1fe3></span><span data-v-8f6d1fe3></span></div><div class="bm-container bm-news__inner" data-v-8f6d1fe3><div class="newsletter-content bm-news__copy" data-v-8f6d1fe3><span class="section-badge bm-eyebrow" data-reveal data-v-8f6d1fe3>${ssrInterpolate(content.value.badge)}</span><h2 class="newsletter-title bm-h1 bm-news__title" data-v-8f6d1fe3>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        text: content.value.title
      }, null, _parent));
      _push(`</h2><p class="newsletter-subtitle bm-lead bm-muted bm-news__sub" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-8f6d1fe3>${ssrInterpolate(content.value.subtitle)}</p></div><div class="newsletter-form-wrapper bm-news__form-wrap" data-reveal style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-8f6d1fe3>`);
      if (isSubscribed.value) {
        _push(`<div class="success-message bm-news__success" data-v-8f6d1fe3><div class="success-icon bm-news__success-icon" data-v-8f6d1fe3>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          name: "check",
          size: 26,
          stroke: 2
        }, null, _parent));
        _push(`</div><h3 class="bm-h3" data-v-8f6d1fe3>${ssrInterpolate(content.value.successTitle)}</h3><p class="bm-muted" data-v-8f6d1fe3>${ssrInterpolate(content.value.successMessage)}</p></div>`);
      } else {
        _push(`<form class="newsletter-form bm-news__form" data-v-8f6d1fe3><div class="form-group bm-news__field" data-v-8f6d1fe3><input type="email"${ssrRenderAttr("value", email.value)}${ssrRenderAttr("placeholder", content.value.placeholder)}${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""}${ssrRenderAttr("aria-label", content.value.placeholder)} required data-v-8f6d1fe3><button type="submit" class="btn-subscribe bm-btn bm-news__submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-8f6d1fe3>`);
        if (isLoading.value) {
          _push(`<span class="spinner bm-news__spinner" data-v-8f6d1fe3></span>`);
        } else {
          _push(`<span data-v-8f6d1fe3>${ssrInterpolate(content.value.button)}</span>`);
        }
        if (!isLoading.value) {
          _push(`<span class="bm-btn__icon" data-v-8f6d1fe3>`);
          _push(ssrRenderComponent(_sfc_main$8, {
            name: "arrow-right",
            stroke: 2
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
        if (errorMessage.value) {
          _push(`<p class="error-message bm-news__error" data-v-8f6d1fe3>${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NewsletterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsletterSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8f6d1fe3"]]);
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    services: {
      type: Array,
      default: () => []
    },
    about: {
      type: Object,
      default: null
    },
    equipment: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const props = __props;
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Babor Medical - Ласерски Центар, Естетски Центар и Ласерско Естетски Центар" : "Babor Medical - Laser Center, Aesthetic Center & Laser Aesthetic Center";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Ласерски центар, естетски центар и ласерско естетски центар во Македонија. Премиум третмани за нега на кожа и естетика." : "Laser center, aesthetic center and laser aesthetic center in Macedonia. Premium skincare treatments and aesthetic solutions.";
    });
    const seoKeywords = computed(() => {
      return locale.value === "mk" ? "ласерски центар, laserski centar, естетски центар, estetski centar, ласерско естетски центар, lasersko estetski centar, најдобар спа центар, najdobar spa center, најдобар ласерски центар, najdobar laserski centar, најдобар дерматолошки центар, najdobar dermatoloski centar, babor medical, нега на кожа" : "laser center, aesthetic center, laser aesthetic center, babor medical, skincare, dermatology, spa center, laser treatments, skin care, premium skincare, beauty treatments";
    });
    const ribbonTreatments = computed(() => locale.value === "mk" ? ["Ласерска естетика", "Козметологија", "Инјектибилни методи", "Третмани на тело", "BABOR нега на кожа"] : ["Laser Aesthetics", "Cosmetology", "Injectable Methods", "Body Treatments", "BABOR Skincare"]);
    const ribbonDevices = computed(() => {
      const names = (props.equipment || []).map((item) => item.title).filter(Boolean);
      return names.length ? [...names, "BABOR"] : ["Alma Soprano Titanium", "Alma Hybrid", "Alma Accent Prime", "Alma Q", "BABOR"];
    });
    const ogLocale = computed(() => locale.value === "mk" ? "mk_MK" : "en_US");
    const jsonLd = computed(() => {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "name": "Babor Medical",
            "url": "https://babormedical.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://babormedical.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
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
            "description": locale.value === "mk" ? "Ласерски центар, естетски центар и ласерско естетски центар во Скопје. Ласерска епилација, козметологија, инјектибилни методи, третмани на тело." : "Laser center, aesthetic center and laser aesthetic center in Skopje. Laser hair removal, cosmetology, injectable methods, body treatments.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": locale.value === "mk" ? "Третмани" : "Treatments",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale.value === "mk" ? "Ласерска епилација" : "Laser Hair Removal", "url": "https://babormedical.com/services/laser-aesthetic" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale.value === "mk" ? "Козметологија" : "Cosmetology", "url": "https://babormedical.com/services/cosmetology" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods", "url": "https://babormedical.com/services/injectable-methods" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale.value === "mk" ? "Третмани на тело" : "Body Treatments", "url": "https://babormedical.com/services/body-treatments" } }
              ]
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кои третмани ги нуди Babor Medical во Скопје?" : "What treatments does Babor Medical offer in Skopje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical нуди ласерска епилација со Alma Soprano Titanium, козметолошки третмани со BABOR протоколи, инјектибилни методи (филери, ботокс, биостимулација) и апаратурни третмани на тело со Accent Prime, Ultraformer и EM Time." : "Babor Medical offers laser hair removal with Alma Soprano Titanium, cosmetology treatments with BABOR protocols, injectable methods (fillers, botox, biostimulation) and body treatments with Accent Prime, Ultraformer and EM Time."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Како да закажам термин?" : "How do I book an appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Можете да закажете термин преку нашата контакт страница, преку телефон на +389 75 340 933, или преку Instagram @babormedical." : "You can book an appointment through our contact page, by phone at +389 75 340 933, or via Instagram @babormedical."
                }
              }
            ]
          }
        ]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-21bc3e46${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-21bc3e46${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)} data-v-21bc3e46${_scopeId}><meta name="author" content="Babor Medical" data-v-21bc3e46${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-v-21bc3e46${_scopeId}><meta property="og:type" content="website" data-v-21bc3e46${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-21bc3e46${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-21bc3e46${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-21bc3e46${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", ogLocale.value)} data-v-21bc3e46${_scopeId}><meta property="og:site_name" content="Babor Medical" data-v-21bc3e46${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-21bc3e46${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-21bc3e46${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-21bc3e46${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-21bc3e46${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/?lang=en" data-v-21bc3e46${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/?lang=mk" data-v-21bc3e46${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/" data-v-21bc3e46${_scopeId}>`);
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
                property: "og:type",
                content: "website"
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
                property: "og:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("meta", {
                property: "og:locale",
                content: ogLocale.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: "Babor Medical"
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
              createVNode("meta", {
                name: "twitter:image",
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/"
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
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroSection, { slides: __props.slides }, null, _parent2, _scopeId));
            _push2(`<div class="bm-ribbons" aria-label="Babor Medical" data-v-21bc3e46${_scopeId}>`);
            _push2(ssrRenderComponent(Marquee, {
              items: [...ribbonTreatments.value, ...ribbonDevices.value],
              variant: "wine",
              duration: 74
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(AboutSection, { about: __props.about }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ServicesSection, { services: __props.services }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ServiceCategoriesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(EquipmentSection, { equipment: __props.equipment }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(NewsletterSection, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroSection, { slides: __props.slides }, null, 8, ["slides"]),
              createVNode("div", {
                class: "bm-ribbons",
                "aria-label": "Babor Medical"
              }, [
                createVNode(Marquee, {
                  items: [...ribbonTreatments.value, ...ribbonDevices.value],
                  variant: "wine",
                  duration: 74
                }, null, 8, ["items"])
              ]),
              createVNode(AboutSection, { about: __props.about }, null, 8, ["about"]),
              createVNode(ServicesSection, { services: __props.services }, null, 8, ["services"]),
              createVNode(ServiceCategoriesSection),
              createVNode(EquipmentSection, { equipment: __props.equipment }, null, 8, ["equipment"]),
              createVNode(NewsletterSection)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21bc3e46"]]);
export {
  Welcome as default
};
