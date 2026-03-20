import { ref, computed, onMounted, onUnmounted, mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
    ref(null);
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
    onMounted(() => {
      autoplayInterval = setInterval(nextSlide, 6e3);
    });
    onUnmounted(() => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-da4c37d1><div class="hero-slider" data-v-da4c37d1><!--[-->`);
      ssrRenderList(activeSlides.value, (slide, index) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value === index }, "hero-slide"])}" data-v-da4c37d1><div class="container" data-v-da4c37d1><div class="row align-items-center justify-content-between" data-v-da4c37d1><div class="col-lg-5" data-v-da4c37d1><p class="hero-subtitle animate-fade-up" style="${ssrRenderStyle({ animationDelay: "0.1s" })}" data-v-da4c37d1>${ssrInterpolate(slide.subtitle)}</p><h1 class="hero-title animate-fade-up" style="${ssrRenderStyle({ animationDelay: "0.2s" })}" data-v-da4c37d1>${ssrInterpolate(slide.title)}<br data-v-da4c37d1><span data-v-da4c37d1>${ssrInterpolate(slide.highlight)}</span></h1><p class="hero-description mb-4 animate-fade-up" style="${ssrRenderStyle({ animationDelay: "0.3s" })}" data-v-da4c37d1>${ssrInterpolate(slide.description)}</p><div class="d-flex gap-3 flex-wrap animate-fade-up" style="${ssrRenderStyle({ animationDelay: "0.4s" })}" data-v-da4c37d1><a${ssrRenderAttr("href", slide.cta_link || "#")} class="btn btn-cta btn-lg" data-v-da4c37d1>${ssrInterpolate(slide.cta_text)}</a><a${ssrRenderAttr("href", slide.secondary_link || "#")} class="btn btn-outline-light btn-lg rounded-pill px-4" data-v-da4c37d1>${ssrInterpolate(slide.secondary_text)}</a></div></div><div class="col-lg-5 hero-image-container d-flex align-items-center justify-content-center mt-5 mt-lg-0" data-v-da4c37d1><div class="hero-glow animate-pulse" data-v-da4c37d1></div>`);
        if (slide.image || slide.image_desktop_webp) {
          _push(`<div class="hero-image-wrapper animate-fade-up" style="${ssrRenderStyle({ animationDelay: "0.3s" })}" data-v-da4c37d1><picture data-v-da4c37d1>`);
          if (slide.image_mobile_webp) {
            _push(`<source media="(max-width: 768px)"${ssrRenderAttr("srcset", "/storage/" + slide.image_mobile_webp)} type="image/webp" data-v-da4c37d1>`);
          } else {
            _push(`<!---->`);
          }
          if (slide.image_desktop_webp) {
            _push(`<source media="(min-width: 769px)"${ssrRenderAttr("srcset", "/storage/" + slide.image_desktop_webp)} type="image/webp" data-v-da4c37d1>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img${ssrRenderAttr("src", slide.image ? "/storage/" + slide.image : "/storage/" + slide.image_desktop_webp)}${ssrRenderAttr("alt", slide.title)} class="hero-image" loading="eager" decoding="async" data-v-da4c37d1></picture></div>`);
        } else {
          _push(`<div class="glass-card mx-auto animate-fade-up" style="${ssrRenderStyle([{ "max-width": "400px" }, { animationDelay: "0.3s" }])}" data-v-da4c37d1><div class="text-center py-5" data-v-da4c37d1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="var(--primary-light)" viewBox="0 0 16 16" data-v-da4c37d1><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-da4c37d1></path><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" data-v-da4c37d1></path></svg><p class="text-white mt-3 mb-0" data-v-da4c37d1>No image uploaded</p></div></div>`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="slider-controls d-none d-lg-flex" data-v-da4c37d1><button class="slider-btn slider-prev" aria-label="Previous slide" data-v-da4c37d1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-da4c37d1><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" data-v-da4c37d1></path></svg></button><button class="slider-btn slider-next" aria-label="Next slide" data-v-da4c37d1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-da4c37d1><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-da4c37d1></path></svg></button></div><div class="slider-dots" data-v-da4c37d1><!--[-->`);
      ssrRenderList(activeSlides.value, (slide, index) => {
        _push(`<button class="${ssrRenderClass([{ active: currentSlide.value === index }, "slider-dot"])}"${ssrRenderAttr("aria-label", `Go to slide ${index + 1}`)} data-v-da4c37d1></button>`);
      });
      _push(`<!--]--></div><div class="stats-row" data-v-da4c37d1><div class="container" data-v-da4c37d1><div class="row" data-v-da4c37d1><div class="col-md-3 col-6" data-v-da4c37d1><div class="stat-item animate-fade-up" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-da4c37d1><div class="stat-number" data-v-da4c37d1>+50</div><div class="stat-label" data-v-da4c37d1>Products</div></div></div><div class="col-md-3 col-6" data-v-da4c37d1><div class="stat-item animate-fade-up" style="${ssrRenderStyle({ "animation-delay": "0.6s" })}" data-v-da4c37d1><div class="stat-number" data-v-da4c37d1>+10K</div><div class="stat-label" data-v-da4c37d1>Happy Clients</div></div></div><div class="col-md-3 col-6" data-v-da4c37d1><div class="stat-item animate-fade-up" style="${ssrRenderStyle({ "animation-delay": "0.7s" })}" data-v-da4c37d1><div class="stat-number" data-v-da4c37d1>+25</div><div class="stat-label" data-v-da4c37d1>Years Experience</div></div></div><div class="col-md-3 col-6" data-v-da4c37d1><div class="stat-item animate-fade-up" style="${ssrRenderStyle({ "animation-delay": "0.8s" })}" data-v-da4c37d1><div class="stat-number" data-v-da4c37d1>5★</div><div class="stat-label" data-v-da4c37d1>Client Reviews</div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-da4c37d1"]]);
const _sfc_main$5 = {
  __name: "ServiceCategoriesSection",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    computed(() => locale.value === "mk" ? "Наши Услуги" : "Our Services");
    const sectionSubtitle = computed(() => locale.value === "mk" ? "Изберете категорија на третмани" : "Choose a treatment category");
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-categories-section" }, _attrs))} data-v-889e64ce><div class="container" data-v-889e64ce><div class="section-header fade-in-up" data-v-889e64ce><h2 class="section-title" data-v-889e64ce>${ssrInterpolate(sectionSubtitle.value)}</h2></div><div class="categories-grid" data-v-889e64ce><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<a${ssrRenderAttr("href", category.href)} class="category-box fade-in-up" data-v-889e64ce><div class="box-icon" data-v-889e64ce>`);
        if (category.icon === "sparkles") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-889e64ce><path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" data-v-889e64ce></path><path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z" data-v-889e64ce></path><path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z" data-v-889e64ce></path></svg>`);
        } else if (category.icon === "laser") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-889e64ce><path d="M12 2C12 2 14 6 14 10C14 14 12 18 12 22" data-v-889e64ce></path><path d="M12 2C12 2 10 6 10 10C10 14 12 18 12 22" data-v-889e64ce></path><path d="M4 12H20" data-v-889e64ce></path><circle cx="12" cy="12" r="10" data-v-889e64ce></circle></svg>`);
        } else if (category.icon === "injectable") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-889e64ce><path d="M12 2v6M12 16v6" data-v-889e64ce></path><path d="M9 8h6l-1 8H10L9 8z" data-v-889e64ce></path><circle cx="12" cy="5" r="1" data-v-889e64ce></circle></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-889e64ce><path d="M12 2a4 4 0 0 1 4 4c0 2-1.5 3.5-4 5-2.5-1.5-4-3-4-5a4 4 0 0 1 4-4z" data-v-889e64ce></path><path d="M8 11c-2 1-4 3-4 6 0 2.5 3 5 8 5s8-2.5 8-5c0-3-2-5-4-6" data-v-889e64ce></path><path d="M9 16h6" data-v-889e64ce></path></svg>`);
        }
        _push(`</div><h3 class="box-title" data-v-889e64ce>${ssrInterpolate(category.name)}</h3><p class="box-description" data-v-889e64ce>${ssrInterpolate(category.description)}</p><div class="box-cta" data-v-889e64ce><span data-v-889e64ce>${ssrInterpolate(ctaLabel.value)}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-889e64ce><path d="M5 12h14M12 5l7 7-7 7" data-v-889e64ce></path></svg></div></a>`);
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
const ServiceCategoriesSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-889e64ce"]]);
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
    useScrollAnimation();
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))} data-v-cac2e581><div class="services-bg" data-v-cac2e581></div><div class="container" data-v-cac2e581><div class="section-header fade-in-up" data-v-cac2e581><span class="section-badge" data-v-cac2e581>${ssrInterpolate(locale.value === "mk" ? "НАШИТЕ УСЛУГИ" : "OUR SERVICES")}</span><h2 class="section-title" data-v-cac2e581>${ssrInterpolate(sectionTitle.value)}</h2><p class="section-subtitle" data-v-cac2e581>${ssrInterpolate(sectionSubtitle.value)}</p></div><div class="services-grid" data-v-cac2e581><!--[-->`);
      ssrRenderList(activeServices.value, (service, index) => {
        _push(`<a${ssrRenderAttr("href", service.link || "#")} class="${ssrRenderClass([[`card-${index + 1}`, `stagger-${index + 1}`], "service-card fade-in-up"])}" data-v-cac2e581><div class="card-glow" data-v-cac2e581></div><div class="card-content" data-v-cac2e581><div class="icon-container" data-v-cac2e581>`);
        if (service.icon === "face") {
          _push(`<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-cac2e581><path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" data-v-cac2e581></path><path d="M9 10h.01M15 10h.01" data-v-cac2e581></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0" data-v-cac2e581></path><path d="M7 3.34V6a1 1 0 0 0 1 1h1" data-v-cac2e581></path><path d="M17 3.34V6a1 1 0 0 1-1 1h-1" data-v-cac2e581></path></svg>`);
        } else if (service.icon === "laser") {
          _push(`<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-cac2e581><circle cx="12" cy="5" r="3" data-v-cac2e581></circle><path d="M12 8v4" data-v-cac2e581></path><path d="M8 12l4 10 4-10" data-v-cac2e581></path><path d="M6 4l2 2M18 4l-2 2M4 8l3 1M20 8l-3 1" data-v-cac2e581></path></svg>`);
        } else if (service.icon === "body") {
          _push(`<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-cac2e581><path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" data-v-cac2e581></path><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-cac2e581></path><path d="M12 8v6" data-v-cac2e581></path><path d="M9 11l3 3 3-3" data-v-cac2e581></path></svg>`);
        } else if (service.icon === "product") {
          _push(`<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-cac2e581><path d="M9 3h6v4H9z" data-v-cac2e581></path><path d="M7 7h10v14H7z" data-v-cac2e581></path><path d="M10 11h4" data-v-cac2e581></path><path d="M12 11v4" data-v-cac2e581></path><circle cx="12" cy="18" r="1" data-v-cac2e581></circle></svg>`);
        } else {
          _push(`<svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-cac2e581><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-cac2e581></polygon></svg>`);
        }
        _push(`</div><h3 class="service-title" data-v-cac2e581>${ssrInterpolate(getTitle(service))}</h3><p class="service-description" data-v-cac2e581>${ssrInterpolate(getDescription(service))}</p><span class="service-link"${ssrRenderAttr("aria-label", locale.value === "mk" ? `Дознај повеќе за ${getTitle(service)}` : `Learn more about ${getTitle(service)}`)} data-v-cac2e581>${ssrInterpolate(locale.value === "mk" ? "Дознај повеќе" : "Learn more")} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-cac2e581><path d="M5 12h14M12 5l7 7-7 7" data-v-cac2e581></path></svg></span></div></a>`);
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
const ServicesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cac2e581"]]);
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
    useScrollAnimation();
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section" }, _attrs))} data-v-16ac09ca><div class="container" data-v-16ac09ca><div class="about-grid" data-v-16ac09ca><div class="about-content fade-in-left" data-v-16ac09ca><span class="section-badge" data-v-16ac09ca>${ssrInterpolate(content.value.badge)}</span><h2 class="about-title" data-v-16ac09ca>${ssrInterpolate(content.value.title)}</h2><div class="about-subtitle" data-v-16ac09ca>${content.value.subtitle ?? ""}</div><div class="about-description" data-v-16ac09ca>${content.value.description ?? ""}</div><div class="features-list d-none" data-v-16ac09ca><!--[-->`);
      ssrRenderList(content.value.features, (feature, index) => {
        _push(`<div class="feature-item" data-v-16ac09ca><div class="feature-icon" data-v-16ac09ca>`);
        if (feature.icon === "certified") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-16ac09ca><path d="M12 15l-2 5l1.5-1l1.5 1l1.5-1l1.5 1l-2-5" data-v-16ac09ca></path><circle cx="12" cy="9" r="6" data-v-16ac09ca></circle><path d="M9 9l2 2l4-4" data-v-16ac09ca></path></svg>`);
        } else if (feature.icon === "technology") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-16ac09ca><rect x="2" y="3" width="20" height="14" rx="2" data-v-16ac09ca></rect><path d="M8 21h8" data-v-16ac09ca></path><path d="M12 17v4" data-v-16ac09ca></path><path d="M7 8h2m2 0h2m2 0h2" data-v-16ac09ca></path><path d="M7 11h10" data-v-16ac09ca></path></svg>`);
        } else if (feature.icon === "products") {
          _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-16ac09ca><path d="M12 2L2 7l10 5l10-5l-10-5z" data-v-16ac09ca></path><path d="M2 17l10 5l10-5" data-v-16ac09ca></path><path d="M2 12l10 5l10-5" data-v-16ac09ca></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="feature-text" data-v-16ac09ca><h4 data-v-16ac09ca>${ssrInterpolate(feature.title)}</h4><p data-v-16ac09ca>${ssrInterpolate(feature.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="about-cta-group" data-v-16ac09ca><a href="/about" class="btn-cta about-cta"${ssrRenderAttr("aria-label", content.value.ctaAriaLabel)} data-v-16ac09ca>${ssrInterpolate(content.value.cta)} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-16ac09ca><path d="M5 12h14M12 5l7 7-7 7" data-v-16ac09ca></path></svg></a><a href="/contact" class="btn-outline about-cta-secondary"${ssrRenderAttr("aria-label", locale.value === "mk" ? "Закажи консултација во Babor Medical" : "Book a consultation at Babor Medical")} data-v-16ac09ca>${ssrInterpolate(content.value.ctaContact)}</a></div></div><div class="about-visual fade-in-right" data-v-16ac09ca><div class="visual-wrapper" data-v-16ac09ca><picture class="about-image-wrapper" data-v-16ac09ca><source media="(max-width: 575px)" srcset="/images/about-mobile.webp" type="image/webp" data-v-16ac09ca><source srcset="/images/about.webp" type="image/webp" data-v-16ac09ca><img src="/images/about.webp" alt="Babor Medical Team" class="about-image" loading="lazy" decoding="async" width="800" height="534" data-v-16ac09ca></picture><div class="floating-card card-1" data-v-16ac09ca><div class="card-icon" data-v-16ac09ca><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-16ac09ca><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-16ac09ca></path><polyline points="22 4 12 14.01 9 11.01" data-v-16ac09ca></polyline></svg></div><div class="card-text" data-v-16ac09ca><span class="card-number" data-v-16ac09ca>100%</span><span class="card-label" data-v-16ac09ca>${ssrInterpolate(locale.value === "mk" ? "Задоволство" : "Satisfaction")}</span></div></div><div class="floating-card card-2" data-v-16ac09ca><div class="card-icon" data-v-16ac09ca><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-16ac09ca><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-16ac09ca></path></svg></div><div class="card-text" data-v-16ac09ca><span class="card-number" data-v-16ac09ca>5.0</span><span class="card-label" data-v-16ac09ca>${ssrInterpolate(locale.value === "mk" ? "Рејтинг" : "Rating")}</span></div></div></div><div class="stats-grid" data-v-16ac09ca><!--[-->`);
      ssrRenderList(content.value.stats, (stat, index) => {
        _push(`<div class="${ssrRenderClass([`stagger-${index + 1}`, "stat-box fade-in-up"])}" data-v-16ac09ca><span class="stat-number" data-v-16ac09ca>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-16ac09ca>${ssrInterpolate(stat.label)}</span></div>`);
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
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-16ac09ca"]]);
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
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const currentIndex = ref(0);
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ОПРЕМА" : "EQUIPMENT",
      title: locale.value === "mk" ? "Алма Ласери" : "Alma Lasers",
      subtitle: locale.value === "mk" ? "Најсовремена технологија за третмани на кожа и тело" : "State-of-the-art technology for skin and body treatments",
      learnMore: locale.value === "mk" ? "Погледни детали за ласерот" : "View laser details"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "equipment-section",
        id: "equipment"
      }, _attrs))} data-v-13ab05af><div class="container" data-v-13ab05af><div class="section-header text-center fade-in-up" data-v-13ab05af><span class="section-badge" data-v-13ab05af>${ssrInterpolate(content.value.badge)}</span><h2 class="section-title" data-v-13ab05af>${ssrInterpolate(content.value.title)}</h2><p class="section-subtitle" data-v-13ab05af>${ssrInterpolate(content.value.subtitle)}</p></div><div class="carousel-container fade-in-up" data-v-13ab05af><button class="carousel-btn prev" aria-label="Previous" data-v-13ab05af><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-13ab05af><path d="M15 18l-6-6 6-6" data-v-13ab05af></path></svg></button><div class="carousel-viewport" data-v-13ab05af><div class="carousel-track" style="${ssrRenderStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })}" data-v-13ab05af><!--[-->`);
      ssrRenderList(__props.equipment, (item, index) => {
        _push(`<div class="carousel-slide" data-v-13ab05af><div class="${ssrRenderClass([{ active: index === currentIndex.value }, "equipment-card"])}" data-v-13ab05af><div class="card-inner" data-v-13ab05af><div class="card-image" data-v-13ab05af><div class="image-glow" data-v-13ab05af></div>`);
        if (item.image || item.image_desktop_webp) {
          _push(`<picture data-v-13ab05af>`);
          if (item.image_mobile_webp) {
            _push(`<source media="(max-width: 768px)"${ssrRenderAttr("srcset", "/storage/" + item.image_mobile_webp)} type="image/webp" data-v-13ab05af>`);
          } else {
            _push(`<!---->`);
          }
          if (item.image_desktop_webp) {
            _push(`<source media="(min-width: 769px)"${ssrRenderAttr("srcset", "/storage/" + item.image_desktop_webp)} type="image/webp" data-v-13ab05af>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img${ssrRenderAttr("src", item.image ? "/storage/" + item.image : "/storage/" + item.image_desktop_webp)}${ssrRenderAttr("alt", item.title)} data-v-13ab05af></picture>`);
        } else {
          _push(`<div class="image-placeholder" data-v-13ab05af><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-13ab05af><rect x="3" y="3" width="18" height="18" rx="2" data-v-13ab05af></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-13ab05af></circle><path d="M21 15l-5-5L5 21" data-v-13ab05af></path></svg></div>`);
        }
        _push(`</div><div class="card-content" data-v-13ab05af><h3 class="card-title" data-v-13ab05af>${ssrInterpolate(item.title)}</h3>`);
        if (item.description) {
          _push(`<p class="card-description" data-v-13ab05af>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<a${ssrRenderAttr("href", item.link || "#")} class="card-link"${ssrRenderAttr("aria-label", locale.value === "mk" ? `Погледни детали за ${item.title}` : `View ${item.title} details`)} data-v-13ab05af>${ssrInterpolate(locale.value === "mk" ? "Погледни детали" : "View details")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-13ab05af><path d="M5 12h14M12 5l7 7-7 7" data-v-13ab05af></path></svg></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div><button class="carousel-btn next" aria-label="Next" data-v-13ab05af><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-13ab05af><path d="M9 18l6-6-6-6" data-v-13ab05af></path></svg></button></div><div class="carousel-dots" data-v-13ab05af><!--[-->`);
      ssrRenderList(__props.equipment, (item, index) => {
        _push(`<button class="${ssrRenderClass([{ active: index === currentIndex.value }, "dot"])}"${ssrRenderAttr("aria-label", `Go to slide ${index + 1}`)} data-v-13ab05af></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EquipmentSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EquipmentSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-13ab05af"]]);
const _sfc_main$1 = {
  __name: "NewsletterSection",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnimation();
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "newsletter-section" }, _attrs))} data-v-9813c727><div class="container" data-v-9813c727><div class="newsletter-wrapper fade-in-up" data-v-9813c727><div class="newsletter-content" data-v-9813c727><span class="section-badge" data-v-9813c727>${ssrInterpolate(content.value.badge)}</span><h2 class="newsletter-title" data-v-9813c727>${ssrInterpolate(content.value.title)}</h2><p class="newsletter-subtitle" data-v-9813c727>${ssrInterpolate(content.value.subtitle)}</p></div><div class="newsletter-form-wrapper" data-v-9813c727>`);
      if (isSubscribed.value) {
        _push(`<div class="success-message" data-v-9813c727><div class="success-icon" data-v-9813c727><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9813c727><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-9813c727></path><polyline points="22 4 12 14.01 9 11.01" data-v-9813c727></polyline></svg></div><h3 data-v-9813c727>${ssrInterpolate(content.value.successTitle)}</h3><p data-v-9813c727>${ssrInterpolate(content.value.successMessage)}</p></div>`);
      } else {
        _push(`<form class="newsletter-form" data-v-9813c727><div class="form-group" data-v-9813c727><input type="email"${ssrRenderAttr("value", email.value)}${ssrRenderAttr("placeholder", content.value.placeholder)}${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} required data-v-9813c727><button type="submit" class="btn-subscribe"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-9813c727>`);
        if (isLoading.value) {
          _push(`<span class="spinner" data-v-9813c727></span>`);
        } else {
          _push(`<span data-v-9813c727>${ssrInterpolate(content.value.button)}</span>`);
        }
        if (!isLoading.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9813c727><path d="M5 12h14M12 5l7 7-7 7" data-v-9813c727></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
        if (errorMessage.value) {
          _push(`<p class="error-message" data-v-9813c727>${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NewsletterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsletterSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9813c727"]]);
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
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Babor Medical - Ласерски Центар, Естетски Центар и Ласерско Естетски Центар" : "Babor Medical - Laser Center, Aesthetic Center & Laser Aesthetic Center";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Ласерски центар, естетски центар и ласерско естетски центар во Македонија. Премиум третмани за нега на кожа и естетика." : "Laser center, aesthetic center and laser aesthetic center in Macedonia. Premium skincare treatments and aesthetic solutions.";
    });
    const seoKeywords = computed(() => {
      return locale.value === "mk" ? "ласерски центар, laserski centar, естетски центар, estetski centar, ласерско естетски центар, lasersko estetski centar, најдобар спа центар, najdobar spa center, најдобар ласерски центар, najdobar laserski centar, најдобар дерматолошки центар, najdobar dermatoloski centar, babor medical, нега на кожа" : "laser center, aesthetic center, laser aesthetic center, babor medical, skincare, dermatology, spa center, laser treatments, skin care, premium skincare, beauty treatments";
    });
    const ogLocale = computed(() => locale.value === "mk" ? "mk_MK" : "en_US");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", seoKeywords.value)}${_scopeId}><meta name="author" content="Babor Medical"${_scopeId}><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"${_scopeId}><meta property="og:type" content="website"${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)}${_scopeId}><meta property="og:image" content="/logo.webp"${_scopeId}><meta property="og:locale"${ssrRenderAttr("content", ogLocale.value)}${_scopeId}><meta property="og:site_name" content="Babor Medical"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)}${_scopeId}><meta name="twitter:image" content="/logo.webp"${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/?lang=en"${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/?lang=mk"${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/"${_scopeId}>`);
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
                content: "/logo.webp"
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
                content: "/logo.webp"
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-wrapper">`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(HeroSection, { slides: __props.slides }, null, _parent));
      _push(ssrRenderComponent(AboutSection, { about: __props.about }, null, _parent));
      _push(ssrRenderComponent(ServicesSection, { services: __props.services }, null, _parent));
      _push(ssrRenderComponent(ServiceCategoriesSection, null, null, _parent));
      _push(ssrRenderComponent(EquipmentSection, { equipment: __props.equipment }, null, _parent));
      _push(ssrRenderComponent(NewsletterSection, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
