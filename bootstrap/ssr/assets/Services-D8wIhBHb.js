import { computed, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Услуги - Babor Medical" : "Services - Babor Medical";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Откријте ги нашите премиум третмани и услуги за убавина и благосостојба." : "Discover our premium beauty and wellness treatments and services.";
    });
    const content = computed(() => ({
      badge: locale.value === "mk" ? "ПРЕМИУМ ТРЕТМАНИ" : "PREMIUM TREATMENTS",
      title: locale.value === "mk" ? "Нашите Услуги" : "Our Services",
      subtitle: locale.value === "mk" ? "Искусете ја трансформацијата со нашите врвни естетски третмани" : "Experience transformation with our cutting-edge aesthetic treatments"
    }));
    const expandedItemId = ref(null);
    const isExpanded = (itemId) => {
      return expandedItemId.value === itemId;
    };
    const formatPrice = (item) => {
      const fromLabel = locale.value === "mk" ? "од" : "from";
      const toLabel = locale.value === "mk" ? "до" : "to";
      if (item.price_from && item.price_to) {
        return `${fromLabel} ${Number(item.price_from).toLocaleString()} ${toLabel} ${Number(item.price_to).toLocaleString()} MKD`;
      } else if (item.price_from) {
        return `${fromLabel} ${Number(item.price_from).toLocaleString()} MKD`;
      } else if (item.price_to) {
        return `${toLabel} ${Number(item.price_to).toLocaleString()} MKD`;
      } else if (item.price) {
        return `${fromLabel} ${Number(item.price).toLocaleString()} MKD`;
      }
      return null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-0642fa95${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-0642fa95${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "услуги, третмани, Babor Medical, козметички третмани, спа, Скопје" : "services, treatments, Babor Medical, cosmetic treatments, spa, Skopje")} data-v-0642fa95${_scopeId}><meta name="robots" content="index, follow" data-v-0642fa95${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-0642fa95${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-0642fa95${_scopeId}><meta property="og:type" content="website" data-v-0642fa95${_scopeId}><meta property="og:image" content="/logo.webp" data-v-0642fa95${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-0642fa95${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-0642fa95${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-0642fa95${_scopeId}><link rel="canonical" href="https://babormedical.com/services" data-v-0642fa95${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/services?lang=en" data-v-0642fa95${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/services?lang=mk" data-v-0642fa95${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/services" data-v-0642fa95${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "услуги, третмани, Babor Medical, козметички третмани, спа, Скопје" : "services, treatments, Babor Medical, cosmetic treatments, spa, Skopje"
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
                content: "/logo.webp"
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="services-page" data-v-0642fa95>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="services-hero" data-v-0642fa95><div class="hero-bg" data-v-0642fa95><div class="gradient-orb orb-1" data-v-0642fa95></div><div class="gradient-orb orb-2" data-v-0642fa95></div><div class="gradient-orb orb-3" data-v-0642fa95></div></div><div class="container" data-v-0642fa95><div class="hero-content" data-v-0642fa95><span class="hero-badge fade-in-up" data-v-0642fa95><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-0642fa95><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" data-v-0642fa95></path></svg> ${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title fade-in-up" data-v-0642fa95>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle fade-in-up" data-v-0642fa95>${ssrInterpolate(content.value.subtitle)}</p><div class="hero-stats fade-in-up" data-v-0642fa95><div class="stat" data-v-0642fa95><span class="stat-number" data-v-0642fa95>50+</span><span class="stat-label" data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Третмани" : "Treatments")}</span></div><div class="stat-divider" data-v-0642fa95></div><div class="stat" data-v-0642fa95><span class="stat-number" data-v-0642fa95>5</span><span class="stat-label" data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Категории" : "Categories")}</span></div><div class="stat-divider" data-v-0642fa95></div><div class="stat" data-v-0642fa95><span class="stat-number" data-v-0642fa95>10+</span><span class="stat-label" data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Години" : "Years")}</span></div></div></div></div><div class="scroll-indicator" data-v-0642fa95><div class="mouse" data-v-0642fa95><div class="wheel" data-v-0642fa95></div></div></div></section><section class="services-content" data-v-0642fa95><div class="container" data-v-0642fa95><div class="categories-list" data-v-0642fa95><!--[-->`);
      ssrRenderList(__props.categories, (category, index) => {
        var _a;
        _push(`<div class="category-section fade-in-up" data-v-0642fa95><div class="category-header" data-v-0642fa95><div class="category-info" data-v-0642fa95><span class="category-number" data-v-0642fa95>0${ssrInterpolate(index + 1)}</span><h2 class="category-title" data-v-0642fa95>${ssrInterpolate(category.name)}</h2></div><span class="item-count" data-v-0642fa95>${ssrInterpolate(((_a = category.items) == null ? void 0 : _a.length) || 0)} ${ssrInterpolate(locale.value === "mk" ? "третмани" : "treatments")}</span></div><div class="category-content" data-v-0642fa95>`);
        if (category.display_type === "accordion") {
          _push(`<div class="services-grid" data-v-0642fa95><!--[-->`);
          ssrRenderList(category.items, (item) => {
            _push(`<div class="${ssrRenderClass([{ "expanded": isExpanded(item.id) }, "service-card"])}" data-v-0642fa95><div class="${ssrRenderClass([{ "clickable": item.is_expandable }, "service-header"])}" data-v-0642fa95><div class="service-info" data-v-0642fa95><h3 class="service-name" data-v-0642fa95>${ssrInterpolate(item.name)}</h3>`);
            if (item.price || item.price_from || item.price_to || item.duration) {
              _push(`<div class="service-quick-info" data-v-0642fa95>`);
              if (item.duration) {
                _push(`<span class="duration" data-v-0642fa95><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0642fa95><circle cx="12" cy="12" r="10" data-v-0642fa95></circle><polyline points="12 6 12 12 16 14" data-v-0642fa95></polyline></svg> ${ssrInterpolate(item.duration)}</span>`);
              } else {
                _push(`<!---->`);
              }
              if (formatPrice(item)) {
                _push(`<span class="price" data-v-0642fa95>${ssrInterpolate(formatPrice(item))}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (item.is_expandable) {
              _push(`<div class="expand-btn" data-v-0642fa95><svg class="${ssrRenderClass({ "rotated": isExpanded(item.id) })}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0642fa95><polyline points="6 9 12 15 18 9" data-v-0642fa95></polyline></svg></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="service-details" style="${ssrRenderStyle(isExpanded(item.id) && item.description ? null : { display: "none" })}" data-v-0642fa95><div class="description" data-v-0642fa95>${item.description ?? ""}</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="buttons-grid" data-v-0642fa95><!--[-->`);
          ssrRenderList(category.items, (item) => {
            _push(`<a${ssrRenderAttr("href", item.url)} class="service-link"${ssrRenderAttr("aria-label", locale.value === "mk" ? `Погледни ${item.name}` : `View ${item.name}`)} data-v-0642fa95><span class="link-name" data-v-0642fa95>${ssrInterpolate(item.name)}</span><div class="link-right" data-v-0642fa95>`);
            if (formatPrice(item)) {
              _push(`<span class="link-price" data-v-0642fa95>${ssrInterpolate(formatPrice(item))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0642fa95><path d="M5 12h14M12 5l7 7-7 7" data-v-0642fa95></path></svg></div></a>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section" data-v-0642fa95><div class="container" data-v-0642fa95><div class="cta-card fade-in-up" data-v-0642fa95><div class="cta-content" data-v-0642fa95><h2 data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Подготвени за трансформација?" : "Ready for transformation?")}</h2><p data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Закажете бесплатна консултација со нашите експерти" : "Book a free consultation with our experts")}</p></div><a href="/contact" class="cta-btn" data-v-0642fa95>${ssrInterpolate(locale.value === "mk" ? "Закажи Консултација" : "Book Consultation")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0642fa95><line x1="5" y1="12" x2="19" y2="12" data-v-0642fa95></line><polyline points="12 5 19 12 12 19" data-v-0642fa95></polyline></svg></a></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0642fa95"]]);
export {
  Services as default
};
