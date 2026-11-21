import { mergeProps, useSSRContext, computed, ref, onMounted, onUnmounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$3 = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    size: { type: [Number, String], default: null },
    stroke: { type: [Number, String], default: 1.6 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": __props.stroke,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        width: __props.size,
        height: __props.size,
        "aria-hidden": "true",
        focusable: "false"
      }, _attrs))}>`);
      if (__props.name === "arrow-right") {
        _push(`<path d="M4 12h16M14 6l6 6-6 6"></path>`);
      } else if (__props.name === "arrow-up-right") {
        _push(`<path d="M7 17L17 7M8 7h9v9"></path>`);
      } else if (__props.name === "arrow-left") {
        _push(`<path d="M20 12H4M10 6l-6 6 6 6"></path>`);
      } else if (__props.name === "arrow-down") {
        _push(`<path d="M12 4v16M6 14l6 6 6-6"></path>`);
      } else if (__props.name === "chevron-down") {
        _push(`<path d="M6 9l6 6 6-6"></path>`);
      } else if (__props.name === "chevron-left") {
        _push(`<path d="M15 18l-6-6 6-6"></path>`);
      } else if (__props.name === "chevron-right") {
        _push(`<path d="M9 18l6-6-6-6"></path>`);
      } else if (__props.name === "plus") {
        _push(`<path d="M12 5v14M5 12h14"></path>`);
      } else if (__props.name === "check") {
        _push(`<path d="M5 12.5l4.5 4.5L19 7.5"></path>`);
      } else if (__props.name === "close") {
        _push(`<path d="M6 6l12 12M18 6L6 18"></path>`);
      } else if (__props.name === "phone") {
        _push(`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>`);
      } else if (__props.name === "mail") {
        _push(`<!--[--><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"></rect><path d="M3 7l9 6 9-6"></path><!--]-->`);
      } else if (__props.name === "pin") {
        _push(`<!--[--><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle><!--]-->`);
      } else if (__props.name === "clock") {
        _push(`<!--[--><circle cx="12" cy="12" r="9.5"></circle><path d="M12 6.5V12l3.5 2"></path><!--]-->`);
      } else if (__props.name === "file") {
        _push(`<!--[--><path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"></path><path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h7"></path><!--]-->`);
      } else if (__props.name === "download") {
        _push(`<path d="M12 3v12M7 10l5 5 5-5M4 20h16"></path>`);
      } else if (__props.name === "external") {
        _push(`<path d="M14 4h6v6M20 4l-9 9M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6H10"></path>`);
      } else if (__props.name === "instagram") {
        _push(`<!--[--><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"></circle><!--]-->`);
      } else if (__props.name === "facebook") {
        _push(`<path d="M17 2.5h-3a5 5 0 0 0-5 5v3H6v4h3v7h4v-7h3l1-4h-4v-3a1 1 0 0 1 1-1h3z"></path>`);
      } else if (__props.name === "sparkle") {
        _push(`<!--[--><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"></path><path d="M19 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"></path><!--]-->`);
      } else if (__props.name === "laser") {
        _push(`<!--[--><circle cx="12" cy="12" r="9.5"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"></path><!--]-->`);
      } else if (__props.name === "injectable") {
        _push(`<path d="M18 3l3 3M16.5 4.5l3 3M19.5 6L9 16.5l-3-3L16.5 3zM7.5 15l-4.5 4.5M10.5 9l1.5 1.5M13 6.5l1.5 1.5"></path>`);
      } else if (__props.name === "body") {
        _push(`<!--[--><circle cx="12" cy="4.5" r="2"></circle><path d="M8 22l1.5-8L7 10.5 9 7h6l2 3.5-2.5 3.5L16 22M9.5 14h5"></path><!--]-->`);
      } else if (__props.name === "face") {
        _push(`<!--[--><path d="M12 2.5c4.4 0 7.5 3.4 7.5 8 0 5.6-3.6 11-7.5 11s-7.5-5.4-7.5-11c0-4.6 3.1-8 7.5-8z"></path><path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"></path><!--]-->`);
      } else if (__props.name === "product") {
        _push(`<path d="M9 2.5h6v4H9zM7 6.5h10v15H7zM10 11h4M12 11v4"></path>`);
      } else if (__props.name === "shield") {
        _push(`<!--[--><path d="M12 2.5l8 3v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10v-6z"></path><path d="M8.5 12l2.5 2.5 4.5-5"></path><!--]-->`);
      } else if (__props.name === "star") {
        _push(`<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>`);
      } else if (__props.name === "briefcase") {
        _push(`<!--[--><rect x="2.5" y="7" width="19" height="13.5" rx="2"></rect><path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M2.5 13h19"></path><!--]-->`);
      } else if (__props.name === "upload") {
        _push(`<path d="M12 15V3M7 8l5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path>`);
      } else if (__props.name === "info") {
        _push(`<!--[--><circle cx="12" cy="12" r="9.5"></circle><path d="M12 11v6M12 7.5h.01"></path><!--]-->`);
      } else {
        _push(`<circle cx="12" cy="12" r="9.5"></circle>`);
      }
      _push(`</svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/Icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const currentLocale = computed(() => page.props.locale || "en");
    const locations = computed(() => page.props.sharedLocations || []);
    const mobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const isHidden = ref(false);
    const openDropdown = ref(null);
    const mobileServicesOpen = ref(false);
    const mobilePriceListOpen = ref(false);
    const progress = ref(0);
    const currentPath = ref("");
    let lastY = 0;
    let raf = 0;
    let closeTimer = null;
    const onScrollFrame = () => {
      raf = 0;
      const y = window.scrollY;
      isScrolled.value = y > 40;
      if (!mobileMenuOpen.value && !openDropdown.value) {
        isHidden.value = y > 420 && y > lastY + 2;
        if (y < lastY - 2) isHidden.value = false;
      }
      lastY = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.value = max > 0 ? Math.min(1, y / max) : 0;
    };
    const handleScroll = () => {
      if (!raf) raf = requestAnimationFrame(onScrollFrame);
    };
    const closeDropdownOutside = (e) => {
      var _a, _b;
      if (!((_b = (_a = e.target).closest) == null ? void 0 : _b.call(_a, ".bm-nav__item--dd"))) openDropdown.value = null;
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        openDropdown.value = null;
        if (mobileMenuOpen.value) toggleMobileMenu();
      }
    };
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
      isHidden.value = false;
      if (typeof document !== "undefined") {
        document.body.style.overflow = mobileMenuOpen.value ? "hidden" : "";
      }
    };
    const closeMobileMenu = () => {
      if (mobileMenuOpen.value) toggleMobileMenu();
    };
    const isActive = (href) => {
      if (!currentPath.value || !href || href.startsWith("http")) return false;
      if (href === "/") return currentPath.value === "/";
      return currentPath.value === href || currentPath.value.startsWith(`${href}/`);
    };
    onMounted(() => {
      currentPath.value = window.location.pathname;
      document.body.style.overflow = "";
      lastY = window.scrollY;
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("click", closeDropdownOutside);
      document.addEventListener("keydown", onKey);
      onScrollFrame();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeDropdownOutside);
      document.removeEventListener("keydown", onKey);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(closeTimer);
      if (typeof document !== "undefined") document.body.style.overflow = "";
    });
    const navLinks = computed(() => [
      { name: currentLocale.value === "mk" ? "Почетна" : "Home", href: "/" },
      { name: currentLocale.value === "mk" ? "За нас" : "About", href: "/about" },
      { name: currentLocale.value === "mk" ? "Ласери" : "Lasers", href: "/lasers" },
      { name: currentLocale.value === "mk" ? "Онлајн продавница" : "Online Store", href: "https://www.skinboutique.mk", external: true },
      { name: currentLocale.value === "mk" ? "Кариера" : "Careers", href: "/careers" },
      { name: currentLocale.value === "mk" ? "Контакт" : "Contact", href: "/contact" }
    ]);
    const servicesLabel = computed(() => currentLocale.value === "mk" ? "Услуги" : "Services");
    const serviceGroups = computed(() => [
      {
        label: currentLocale.value === "mk" ? "Лице, врат, деколте" : "Face, Neck, Décolleté",
        items: [
          { name: currentLocale.value === "mk" ? "Козметологија" : "Cosmetology", href: "/services/cosmetology" },
          { name: currentLocale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments", href: "/services/laser-aesthetic" },
          { name: currentLocale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods", href: "/services/injectable-methods" }
        ]
      },
      {
        label: currentLocale.value === "mk" ? "Тело" : "Body",
        items: [
          { name: currentLocale.value === "mk" ? "Третмани на тело" : "Body Treatments", href: "/services/body-treatments" }
        ]
      }
    ]);
    const priceListGroupLabel = computed(() => currentLocale.value === "mk" ? "Ценовници по категорија" : "Price Lists by Category");
    const priceLists = computed(() => [
      { name: currentLocale.value === "mk" ? "Ласерска Естетика" : "Laser Aesthetic", href: "/services/laser-aesthetic/price-list.pdf" },
      { name: currentLocale.value === "mk" ? "Инјектибилни Методи" : "Injectable Methods", href: "/services/injectable-methods/price-list.pdf" },
      { name: currentLocale.value === "mk" ? "Третмани на Тело" : "Body Treatments", href: "/services/body-treatments/price-list.pdf" }
    ]);
    const ctaText = computed(() => currentLocale.value === "mk" ? "Контакт" : "Contact");
    const priceListLabel = computed(() => currentLocale.value === "mk" ? "Ценовник" : "Price List");
    const menuLabel = computed(() => currentLocale.value === "mk" ? "Отвори мени" : "Open menu");
    const primaryPhone = computed(() => {
      var _a;
      return ((_a = locations.value.find((l) => l.phone)) == null ? void 0 : _a.phone) || null;
    });
    const primaryEmail = computed(() => {
      var _a;
      return ((_a = locations.value.find((l) => l.email)) == null ? void 0 : _a.email) || null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="${ssrRenderClass([{ "is-scrolled": isScrolled.value, "is-hidden": isHidden.value, "is-menu-open": mobileMenuOpen.value }, "site-header bm-header"])}" data-v-968ad9a7><div class="bm-header__bar" data-v-968ad9a7>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "bm-header__logo",
        "aria-label": "Babor Medical - Home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/logo-light.webp" alt="Babor Medical" width="64" height="64" data-v-968ad9a7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/logo-light.webp",
                alt: "Babor Medical",
                width: "64",
                height: "64"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="bm-nav" aria-label="Main" data-v-968ad9a7><!--[-->`);
      ssrRenderList(navLinks.value.slice(0, 3), (link) => {
        _push(ssrRenderComponent(unref(Link), {
          key: link.name,
          href: link.href,
          class: ["bm-nav__link", { "is-active": isActive(link.href) }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="bm-nav__item--dd" data-v-968ad9a7><a href="/services" class="${ssrRenderClass([{ "is-active": isActive("/services"), "is-open": openDropdown.value === "services" }, "bm-nav__link bm-nav__trigger"])}"${ssrRenderAttr("aria-expanded", openDropdown.value === "services" ? "true" : "false")} data-v-968ad9a7>${ssrInterpolate(servicesLabel.value)} `);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "chevron-down",
        size: 14,
        stroke: 2
      }, null, _parent));
      _push(`</a><div class="${ssrRenderClass([{ "is-open": openDropdown.value === "services" }, "bm-dd"])}" data-v-968ad9a7><div class="bm-dd__panel" data-v-968ad9a7><!--[-->`);
      ssrRenderList(serviceGroups.value, (group) => {
        _push(`<div class="bm-dd__group" data-v-968ad9a7><div class="bm-dd__label" data-v-968ad9a7>${ssrInterpolate(group.label)}</div><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(ssrRenderComponent(unref(Link), {
            key: item.href,
            href: item.href,
            class: "bm-dd__item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-968ad9a7${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                _push2(ssrRenderComponent(_sfc_main$3, {
                  name: "arrow-up-right",
                  size: 15
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.name), 1),
                  createVNode(_sfc_main$3, {
                    name: "arrow-up-right",
                    size: 15
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div><div class="bm-nav__item--dd" data-v-968ad9a7><a href="#" class="${ssrRenderClass([{ "is-open": openDropdown.value === "prices" }, "bm-nav__link bm-nav__trigger"])}"${ssrRenderAttr("aria-expanded", openDropdown.value === "prices" ? "true" : "false")} data-v-968ad9a7>${ssrInterpolate(priceListLabel.value)} `);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "chevron-down",
        size: 14,
        stroke: 2
      }, null, _parent));
      _push(`</a><div class="${ssrRenderClass([{ "is-open": openDropdown.value === "prices" }, "bm-dd"])}" data-v-968ad9a7><div class="bm-dd__panel bm-dd__panel--narrow" data-v-968ad9a7><div class="bm-dd__group" data-v-968ad9a7><div class="bm-dd__label" data-v-968ad9a7>${ssrInterpolate(priceListGroupLabel.value)}</div><!--[-->`);
      ssrRenderList(priceLists.value, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="bm-dd__item" data-v-968ad9a7><span class="bm-dd__file" data-v-968ad9a7>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "file",
          size: 16
        }, null, _parent));
        _push(`</span><span data-v-968ad9a7>${ssrInterpolate(item.name)}</span>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "arrow-up-right",
          size: 15
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></div><!--[-->`);
      ssrRenderList(navLinks.value.slice(3), (link) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.external ? "a" : unref(Link)), {
          key: link.name,
          href: link.href,
          class: ["bm-nav__link", { "is-active": isActive(link.href) }],
          target: link.external ? "_blank" : null,
          rel: link.external ? "noopener" : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
              if (link.external) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  name: "arrow-up-right",
                  size: 12,
                  stroke: 2,
                  class: "bm-nav__ext"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1),
                link.external ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  name: "arrow-up-right",
                  size: 12,
                  stroke: 2,
                  class: "bm-nav__ext"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></nav><div class="bm-header__right" data-v-968ad9a7><div class="bm-lang" role="group" aria-label="Language" data-v-968ad9a7><button class="${ssrRenderClass([{ active: currentLocale.value === "en" }, "bm-lang__btn"])}" data-v-968ad9a7>EN</button><button class="${ssrRenderClass([{ active: currentLocale.value === "mk" }, "bm-lang__btn"])}" data-v-968ad9a7>MK</button></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "bm-btn bm-btn--sm bm-header__cta",
        "aria-label": currentLocale.value === "mk" ? "Контактирајте го Babor Medical" : "Contact Babor Medical"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-968ad9a7${_scopeId}>${ssrInterpolate(ctaText.value)}</span><span class="bm-btn__icon" data-v-968ad9a7${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "arrow-right",
              stroke: 2
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(ctaText.value), 1),
              createVNode("span", { class: "bm-btn__icon" }, [
                createVNode(_sfc_main$3, {
                  name: "arrow-right",
                  stroke: 2
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([{ active: mobileMenuOpen.value }, "bm-burger"])}"${ssrRenderAttr("aria-label", menuLabel.value)}${ssrRenderAttr("aria-expanded", mobileMenuOpen.value ? "true" : "false")} data-v-968ad9a7><span data-v-968ad9a7></span><span data-v-968ad9a7></span></button></div></div><div class="bm-header__progress" aria-hidden="true" style="${ssrRenderStyle({ transform: `scaleX(${progress.value})` })}" data-v-968ad9a7></div></header><div class="${ssrRenderClass([{ open: mobileMenuOpen.value }, "mobile-menu bm-mmenu"])}" data-lenis-prevent data-v-968ad9a7><div class="bm-aura" aria-hidden="true" data-v-968ad9a7><span data-v-968ad9a7></span><span data-v-968ad9a7></span><span data-v-968ad9a7></span></div><nav class="bm-mmenu__nav" aria-label="Mobile" data-v-968ad9a7><!--[-->`);
      ssrRenderList(navLinks.value.slice(0, 3), (link, i) => {
        _push(ssrRenderComponent(unref(Link), {
          key: link.name,
          href: link.href,
          class: "bm-mmenu__link",
          style: { "--k": i },
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="bm-mmenu__idx" data-v-968ad9a7${_scopeId}>0${ssrInterpolate(i + 1)}</span>${ssrInterpolate(link.name)}`);
            } else {
              return [
                createVNode("span", { class: "bm-mmenu__idx" }, "0" + toDisplayString(i + 1), 1),
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="bm-mmenu__group" style="${ssrRenderStyle({ "--k": 3 })}" data-v-968ad9a7><button class="bm-mmenu__link bm-mmenu__trigger"${ssrRenderAttr("aria-expanded", mobileServicesOpen.value ? "true" : "false")} data-v-968ad9a7><span class="bm-mmenu__idx" data-v-968ad9a7>04</span>${ssrInterpolate(servicesLabel.value)} `);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "plus",
        size: 22,
        class: ["bm-mmenu__plus", { rotated: mobileServicesOpen.value }]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([{ open: mobileServicesOpen.value }, "bm-mmenu__sub"])}" data-v-968ad9a7><div data-v-968ad9a7><!--[-->`);
      ssrRenderList(serviceGroups.value, (group) => {
        _push(`<!--[--><span class="bm-mmenu__sublabel" data-v-968ad9a7>${ssrInterpolate(group.label)}</span><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(ssrRenderComponent(unref(Link), {
            key: item.href,
            href: item.href,
            class: "bm-mmenu__subitem",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></div></div></div><div class="bm-mmenu__group" style="${ssrRenderStyle({ "--k": 4 })}" data-v-968ad9a7><button class="bm-mmenu__link bm-mmenu__trigger"${ssrRenderAttr("aria-expanded", mobilePriceListOpen.value ? "true" : "false")} data-v-968ad9a7><span class="bm-mmenu__idx" data-v-968ad9a7>05</span>${ssrInterpolate(priceListLabel.value)} `);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "plus",
        size: 22,
        class: ["bm-mmenu__plus", { rotated: mobilePriceListOpen.value }]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([{ open: mobilePriceListOpen.value }, "bm-mmenu__sub"])}" data-v-968ad9a7><div data-v-968ad9a7><!--[-->`);
      ssrRenderList(priceLists.value, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="bm-mmenu__subitem" data-v-968ad9a7>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "file",
          size: 16
        }, null, _parent));
        _push(`${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div></div></div><!--[-->`);
      ssrRenderList(navLinks.value.slice(3), (link, i) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.external ? "a" : unref(Link)), {
          key: link.name,
          href: link.href,
          class: "bm-mmenu__link",
          style: { "--k": i + 5 },
          target: link.external ? "_blank" : null,
          rel: link.external ? "noopener" : null,
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="bm-mmenu__idx" data-v-968ad9a7${_scopeId}>0${ssrInterpolate(i + 6)}</span>${ssrInterpolate(link.name)}`);
            } else {
              return [
                createVNode("span", { class: "bm-mmenu__idx" }, "0" + toDisplayString(i + 6), 1),
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></nav><div class="bm-mmenu__footer" data-v-968ad9a7><div class="bm-mmenu__lang" data-v-968ad9a7><button class="${ssrRenderClass([{ active: currentLocale.value === "en" }, "bm-lang__btn"])}" data-v-968ad9a7>English</button><button class="${ssrRenderClass([{ active: currentLocale.value === "mk" }, "bm-lang__btn"])}" data-v-968ad9a7>Македонски</button></div><div class="bm-mmenu__contact" data-v-968ad9a7>`);
      if (primaryPhone.value) {
        _push(`<a${ssrRenderAttr("href", `tel:${primaryPhone.value}`)} data-v-968ad9a7>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "phone",
          size: 16
        }, null, _parent));
        _push(`${ssrInterpolate(primaryPhone.value)}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (primaryEmail.value) {
        _push(`<a${ssrRenderAttr("href", `mailto:${primaryEmail.value}`)} data-v-968ad9a7>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "mail",
          size: 16
        }, null, _parent));
        _push(`${ssrInterpolate(primaryEmail.value)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><a href="/contact" class="bm-btn bm-mmenu__cta" data-v-968ad9a7><span data-v-968ad9a7>${ssrInterpolate(ctaText.value)}</span><span class="bm-btn__icon" data-v-968ad9a7>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "arrow-right",
        stroke: 2
      }, null, _parent));
      _push(`</span></a></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-968ad9a7"]]);
const _sfc_main$1 = {
  __name: "MaskText",
  __ssrInlineRender: true,
  props: {
    text: { type: [String, Number], default: "" },
    tag: { type: String, default: "span" },
    delay: { type: Number, default: 0 },
    // seconds
    start: { type: Number, default: 0 },
    // index offset for stagger when chaining several MaskTexts
    instant: { type: Boolean, default: false }
    // above the fold: animate on first paint via CSS, no observer
  },
  setup(__props) {
    const props = __props;
    const words = computed(() => String(props.text ?? "").trim().split(/\s+/).filter(Boolean));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps({
        "data-mask": __props.instant ? null : "",
        "data-mask-instant": __props.instant ? "" : null,
        style: { "--md": `${__props.delay}s` }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(words.value, (word, i) => {
              _push2(`<!--[--><span class="bm-mw"${_scopeId}><span class="bm-mw__i" style="${ssrRenderStyle({ "--i": __props.start + i })}"${_scopeId}>${ssrInterpolate(word)}</span></span>${ssrInterpolate(i < words.value.length - 1 ? " " : "")}<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(words.value, (word, i) => {
                return openBlock(), createBlock(Fragment, { key: i }, [
                  createVNode("span", { class: "bm-mw" }, [
                    createVNode("span", {
                      class: "bm-mw__i",
                      style: { "--i": __props.start + i }
                    }, toDisplayString(word), 5)
                  ]),
                  createTextVNode(toDisplayString(i < words.value.length - 1 ? " " : ""), 1)
                ], 64);
              }), 128))
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Site/MaskText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const locations = computed(() => page.props.sharedLocations || []);
    const socialLinks = computed(() => page.props.sharedSocialLinks || {});
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const content = computed(() => ({
      tagline: locale.value === "mk" ? "Вашиот партнер за убавина и благосостојба" : "Your Partner in Beauty & Wellness",
      description: locale.value === "mk" ? "Премиум дерматолошки и спа третмани со Babor производи." : "Premium dermatology and spa treatments with Babor products.",
      quickLinks: locale.value === "mk" ? "Брзи линкови" : "Quick Links",
      services: locale.value === "mk" ? "Услуги" : "Services",
      contact: locale.value === "mk" ? "Контакт" : "Contact",
      workingHours: locale.value === "mk" ? "Работно време" : "Working Hours",
      followUs: locale.value === "mk" ? "Следете нè" : "Follow Us",
      copyright: locale.value === "mk" ? `© ${currentYear} Babor Medical. Сите права задржани.` : `© ${currentYear} Babor Medical. All rights reserved.`,
      poweredBy: locale.value === "mk" ? "Изработено од" : "Powered by",
      mondayFriday: locale.value === "mk" ? "Понеделник - Петок" : "Monday - Friday",
      saturday: locale.value === "mk" ? "Сабота" : "Saturday",
      sunday: locale.value === "mk" ? "Недела" : "Sunday",
      bookConsultation: locale.value === "mk" ? "Закажи консултација" : "Book Consultation",
      backToTop: locale.value === "mk" ? "Назад на врвот" : "Back to top",
      links: [
        { name: locale.value === "mk" ? "Почетна" : "Home", href: "/" },
        { name: locale.value === "mk" ? "За нас" : "About", href: "/about" },
        { name: locale.value === "mk" ? "Услуги" : "Services", href: "/services" },
        { name: locale.value === "mk" ? "Ласери" : "Lasers", href: "/lasers" },
        { name: locale.value === "mk" ? "Кариера" : "Careers", href: "/careers" },
        { name: locale.value === "mk" ? "Контакт" : "Contact", href: "/contact" },
        { name: locale.value === "mk" ? "Политика за приватност" : "Privacy Policy", href: "/privacy-policy" }
      ],
      serviceLinks: [
        { name: locale.value === "mk" ? "Третмани за лице" : "Face Treatments", href: "/services" },
        { name: locale.value === "mk" ? "Ласерски третмани" : "Laser Treatments", href: "/lasers" },
        { name: locale.value === "mk" ? "Третмани за тело" : "Body Treatments", href: "/services" },
        { name: locale.value === "mk" ? "Бабор продукти" : "Babor Products", href: "/services" }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer bm-footer bm-grain" }, _attrs))} data-v-0e3098c3><div class="bm-aura" aria-hidden="true" data-v-0e3098c3><span data-v-0e3098c3></span><span data-v-0e3098c3></span><span data-v-0e3098c3></span></div><div class="bm-container bm-footer__cta" data-v-0e3098c3><h2 class="bm-h1 bm-footer__statement" data-v-0e3098c3>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        text: content.value.tagline
      }, null, _parent));
      _push(`</h2><div class="bm-footer__cta-actions" data-reveal style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-0e3098c3><a href="/contact" class="bm-btn" data-v-0e3098c3><span data-v-0e3098c3>${ssrInterpolate(content.value.bookConsultation)}</span><span class="bm-btn__icon" data-v-0e3098c3>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "arrow-right",
        stroke: 2
      }, null, _parent));
      _push(`</span></a></div></div><div class="bm-container" data-v-0e3098c3><div class="bm-footer__grid" data-v-0e3098c3><div class="bm-footer__brand" data-v-0e3098c3><a href="/" class="bm-footer__logo" aria-label="Babor Medical - Home" data-v-0e3098c3><img src="/logo-light.webp" alt="Babor Medical" width="96" height="96" loading="lazy" data-v-0e3098c3></a><p class="bm-footer__desc" data-v-0e3098c3>${ssrInterpolate(content.value.description)}</p><div class="bm-footer__social"${ssrRenderAttr("aria-label", content.value.followUs)} data-v-0e3098c3>`);
      if ((_a = socialLinks.value) == null ? void 0 : _a.social_facebook) {
        _push(`<a${ssrRenderAttr("href", socialLinks.value.social_facebook)} target="_blank" rel="noopener" aria-label="Facebook" data-v-0e3098c3>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "facebook",
          size: 18
        }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = socialLinks.value) == null ? void 0 : _b.social_instagram) {
        _push(`<a${ssrRenderAttr("href", socialLinks.value.social_instagram)} target="_blank" rel="noopener" aria-label="Instagram" data-v-0e3098c3>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "instagram",
          size: 18
        }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bm-footer__col" data-v-0e3098c3><p class="footer-heading bm-footer__heading" data-v-0e3098c3>${ssrInterpolate(content.value.quickLinks)}</p><ul data-v-0e3098c3><!--[-->`);
      ssrRenderList(content.value.links, (link) => {
        _push(`<li data-v-0e3098c3><a${ssrRenderAttr("href", link.href)} data-v-0e3098c3>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="bm-footer__col" data-v-0e3098c3><p class="footer-heading bm-footer__heading" data-v-0e3098c3>${ssrInterpolate(content.value.services)}</p><ul data-v-0e3098c3><!--[-->`);
      ssrRenderList(content.value.serviceLinks, (link) => {
        _push(`<li data-v-0e3098c3><a${ssrRenderAttr("href", link.href)} data-v-0e3098c3>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="bm-footer__col bm-footer__contact" data-v-0e3098c3><p class="footer-heading bm-footer__heading" data-v-0e3098c3>${ssrInterpolate(content.value.contact)}</p><!--[-->`);
      ssrRenderList(locations.value, (location) => {
        _push(`<div class="bm-footer__loc" data-v-0e3098c3>`);
        if (locations.value.length > 1) {
          _push(`<div class="bm-footer__locname" data-v-0e3098c3>${ssrInterpolate(location.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bm-footer__item" data-v-0e3098c3>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: "pin",
          size: 17
        }, null, _parent));
        _push(`<span data-v-0e3098c3>${ssrInterpolate(location.address)}</span></div>`);
        if (location.phone) {
          _push(`<div class="bm-footer__item" data-v-0e3098c3>`);
          _push(ssrRenderComponent(_sfc_main$3, {
            name: "phone",
            size: 17
          }, null, _parent));
          _push(`<a${ssrRenderAttr("href", `tel:${location.phone}`)} data-v-0e3098c3>${ssrInterpolate(location.phone)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.email) {
          _push(`<div class="bm-footer__item" data-v-0e3098c3>`);
          _push(ssrRenderComponent(_sfc_main$3, {
            name: "mail",
            size: 17
          }, null, _parent));
          _push(`<a${ssrRenderAttr("href", `mailto:${location.email}`)} data-v-0e3098c3>${ssrInterpolate(location.email)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.show_working_hours) {
          _push(`<div class="bm-footer__hours" data-v-0e3098c3><p class="bm-footer__hours-title" data-v-0e3098c3>${ssrInterpolate(content.value.workingHours)}</p><div class="bm-footer__hrow" data-v-0e3098c3><span data-v-0e3098c3>${ssrInterpolate(content.value.mondayFriday)}</span><span data-v-0e3098c3>${ssrInterpolate(location.working_hours_weekdays)}</span></div><div class="bm-footer__hrow" data-v-0e3098c3><span data-v-0e3098c3>${ssrInterpolate(content.value.saturday)}</span><span data-v-0e3098c3>${ssrInterpolate(location.working_hours_saturday)}</span></div><div class="bm-footer__hrow" data-v-0e3098c3><span data-v-0e3098c3>${ssrInterpolate(content.value.sunday)}</span><span data-v-0e3098c3>${ssrInterpolate(location.working_hours_sunday)}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="bm-footer__wordmark" aria-hidden="true" data-v-0e3098c3>Babor Medical</div><div class="bm-footer__bottom" data-v-0e3098c3><div class="bm-container bm-footer__bottom-inner" data-v-0e3098c3><p data-v-0e3098c3>${ssrInterpolate(content.value.copyright)}</p><p class="powered-by" data-v-0e3098c3>${ssrInterpolate(content.value.poweredBy)} <a href="https://nyxeon.io" target="_blank" rel="noopener" data-v-0e3098c3>nyxeon.io</a></p><button type="button" class="bm-footer__top" data-v-0e3098c3>${ssrInterpolate(content.value.backToTop)} <span data-v-0e3098c3>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "arrow-right",
        size: 14,
        stroke: 2
      }, null, _parent));
      _push(`</span></button></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e3098c3"]]);
export {
  Footer as F,
  Navbar as N,
  _sfc_main$3 as _,
  _sfc_main$1 as a
};
