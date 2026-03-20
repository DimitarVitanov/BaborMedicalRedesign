import { computed, ref, watch, onMounted, onUnmounted, mergeProps, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderTeleport, ssrRenderStyle } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const currentLocale = computed(() => page.props.locale || "en");
    const mobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const servicesDropdownOpen = ref(false);
    const mobileServicesOpen = ref(false);
    const triggerRef = ref(null);
    const dropdownStyle = ref({});
    const positionDropdown = () => {
      if (triggerRef.value) {
        const rect = triggerRef.value.getBoundingClientRect();
        dropdownStyle.value = {
          position: "fixed",
          top: `${rect.bottom + 8}px`,
          left: `${rect.left + rect.width / 2}px`,
          transform: "translateX(-50%)",
          zIndex: "999999"
        };
      }
    };
    watch(isScrolled, () => {
      if (servicesDropdownOpen.value) {
        positionDropdown();
      }
    });
    const closeDropdownOutside = (e) => {
      if (triggerRef.value && triggerRef.value.contains(e.target)) return;
      const dd = document.getElementById("services-dropdown");
      if (dd && dd.contains(e.target)) return;
      servicesDropdownOpen.value = false;
    };
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      document.addEventListener("click", closeDropdownOutside);
      handleScroll();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeDropdownOutside);
    });
    const navLinks = computed(() => [
      { name: currentLocale.value === "mk" ? "Почетна" : "Home", href: "/" },
      { name: currentLocale.value === "mk" ? "За нас" : "About", href: "/about" },
      { name: currentLocale.value === "mk" ? "Ласери" : "Lasers", href: "/lasers" },
      { name: currentLocale.value === "mk" ? "Контакт" : "Contact", href: "/contact" }
    ]);
    const servicesLabel = computed(() => currentLocale.value === "mk" ? "Услуги" : "Services");
    computed(() => [
      {
        name: currentLocale.value === "mk" ? "Козметологија" : "Cosmetology",
        href: "/services/cosmetology"
      },
      {
        name: currentLocale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments",
        href: "/services/laser-aesthetic"
      }
    ]);
    const ctaText = computed(() => currentLocale.value === "mk" ? "Контакт" : "Contact");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["site-header", { scrolled: isScrolled.value }]
      }, _attrs))} data-v-23ec8b2b><div class="container" data-v-23ec8b2b><div class="header-inner" data-v-23ec8b2b><nav class="desktop-nav" data-v-23ec8b2b><a href="/" class="nav-logo" aria-label="Babor Medical - Home" data-v-23ec8b2b><img src="/logo.webp" alt="Babor Medical" data-v-23ec8b2b></a><!--[-->`);
      ssrRenderList(navLinks.value.slice(0, 3), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="nav-link" data-v-23ec8b2b>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--><a href="/services" class="nav-link dropdown-trigger" data-v-23ec8b2b>${ssrInterpolate(servicesLabel.value)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${ssrRenderClass({ rotated: servicesDropdownOpen.value })}" data-v-23ec8b2b><polyline points="6 9 12 15 18 9" data-v-23ec8b2b></polyline></svg></a><!--[-->`);
      ssrRenderList(navLinks.value.slice(3), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="nav-link" data-v-23ec8b2b>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></nav><a href="/" class="header-logo-mobile" aria-label="Babor Medical - Home" data-v-23ec8b2b><img src="/logo.webp" alt="Babor Medical" data-v-23ec8b2b></a>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div id="services-dropdown" style="${ssrRenderStyle([
          dropdownStyle.value,
          servicesDropdownOpen.value ? null : { display: "none" }
        ])}" class="services-dropdown-portal" data-v-23ec8b2b><div class="sdd-group-label" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Лице, врат, деколте" : "Face, Neck, Décolleté")}</div><a href="/services/cosmetology" class="sdd-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Козметологија" : "Cosmetology")}</a><a href="/services/laser-aesthetic" class="sdd-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments")}</a><a href="/services/injectable-methods" class="sdd-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods")}</a><div class="sdd-divider" data-v-23ec8b2b></div><div class="sdd-group-label" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Тело" : "Body")}</div><a href="/services/body-treatments" class="sdd-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Третмани на тело" : "Body Treatments")}</a></div>`);
      }, "body", false, _parent);
      _push(`<div class="header-right" data-v-23ec8b2b><div class="lang-switcher" data-v-23ec8b2b><button class="${ssrRenderClass([{ active: currentLocale.value === "en" }, "lang-btn"])}" data-v-23ec8b2b>EN</button><button class="${ssrRenderClass([{ active: currentLocale.value === "mk" }, "lang-btn"])}" data-v-23ec8b2b>MK</button></div><a href="/contact" class="header-cta"${ssrRenderAttr("aria-label", currentLocale.value === "mk" ? "Контактирајте го Babor Medical" : "Contact Babor Medical")} data-v-23ec8b2b><span data-v-23ec8b2b>${ssrInterpolate(ctaText.value)}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-23ec8b2b><path d="M5 12h14M12 5l7 7-7 7" data-v-23ec8b2b></path></svg></a><button class="${ssrRenderClass([{ active: mobileMenuOpen.value }, "mobile-toggle"])}"${ssrRenderAttr("aria-label", currentLocale.value === "mk" ? "Отвори мени" : "Open menu")} data-v-23ec8b2b><span data-v-23ec8b2b></span><span data-v-23ec8b2b></span><span data-v-23ec8b2b></span></button></div></div></div><div class="${ssrRenderClass([{ open: mobileMenuOpen.value }, "mobile-menu"])}" data-v-23ec8b2b><nav class="mobile-nav" data-v-23ec8b2b><!--[-->`);
      ssrRenderList(navLinks.value.slice(0, 3), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="mobile-link" data-v-23ec8b2b>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--><div class="mobile-dropdown" data-v-23ec8b2b><button class="mobile-link mobile-dropdown-trigger" data-v-23ec8b2b>${ssrInterpolate(servicesLabel.value)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${ssrRenderClass({ rotated: mobileServicesOpen.value })}" data-v-23ec8b2b><polyline points="6 9 12 15 18 9" data-v-23ec8b2b></polyline></svg></button><div class="${ssrRenderClass([{ open: mobileServicesOpen.value }, "mobile-dropdown-menu"])}" data-v-23ec8b2b><span class="mobile-group-label" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Лице, врат, деколте" : "Face, Neck, Décolleté")}</span><a href="/services/cosmetology" class="mobile-dropdown-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Козметологија" : "Cosmetology")}</a><a href="/services/laser-aesthetic" class="mobile-dropdown-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Ласерско Естетски Третмани" : "Laser Aesthetic Treatments")}</a><a href="/services/injectable-methods" class="mobile-dropdown-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Инјектибилни методи" : "Injectable Methods")}</a><span class="mobile-group-label mobile-group-body" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Тело" : "Body")}</span><a href="/services/body-treatments" class="mobile-dropdown-item" data-v-23ec8b2b>${ssrInterpolate(currentLocale.value === "mk" ? "Третмани на тело" : "Body Treatments")}</a></div></div><!--[-->`);
      ssrRenderList(navLinks.value.slice(3), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="mobile-link" data-v-23ec8b2b>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></nav><div class="mobile-footer" data-v-23ec8b2b><div class="mobile-lang" data-v-23ec8b2b><button class="${ssrRenderClass([{ active: currentLocale.value === "en" }, "lang-btn"])}" data-v-23ec8b2b>English</button><button class="${ssrRenderClass([{ active: currentLocale.value === "mk" }, "lang-btn"])}" data-v-23ec8b2b>Македонски</button></div><a href="/contact" class="mobile-cta" data-v-23ec8b2b>${ssrInterpolate(ctaText.value)}</a></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23ec8b2b"]]);
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
      mondayFriday: locale.value === "mk" ? "Понеделник - Петок" : "Monday - Friday",
      saturday: locale.value === "mk" ? "Сабота" : "Saturday",
      sunday: locale.value === "mk" ? "Недела" : "Sunday",
      links: [
        { name: locale.value === "mk" ? "Почетна" : "Home", href: "/" },
        { name: locale.value === "mk" ? "За нас" : "About", href: "/about" },
        { name: locale.value === "mk" ? "Услуги" : "Services", href: "/services" },
        { name: locale.value === "mk" ? "Ласери" : "Lasers", href: "/lasers" },
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
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-c9bd21cf><div class="footer-top" data-v-c9bd21cf><div class="container" data-v-c9bd21cf><div class="footer-grid" data-v-c9bd21cf><div class="footer-brand" data-v-c9bd21cf><a href="/" class="footer-logo" aria-label="Babor Medical - Home" data-v-c9bd21cf><img src="/logo.webp" alt="Babor Medical" data-v-c9bd21cf></a><p class="footer-tagline" data-v-c9bd21cf>${ssrInterpolate(content.value.tagline)}</p><p class="footer-description" data-v-c9bd21cf>${ssrInterpolate(content.value.description)}</p><div class="social-links" data-v-c9bd21cf>`);
      if ((_a = socialLinks.value) == null ? void 0 : _a.social_facebook) {
        _push(`<a${ssrRenderAttr("href", socialLinks.value.social_facebook)} target="_blank" rel="noopener" aria-label="Facebook" data-v-c9bd21cf><svg viewBox="0 0 24 24" fill="currentColor" data-v-c9bd21cf><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-c9bd21cf></path></svg></a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = socialLinks.value) == null ? void 0 : _b.social_instagram) {
        _push(`<a${ssrRenderAttr("href", socialLinks.value.social_instagram)} target="_blank" rel="noopener" aria-label="Instagram" data-v-c9bd21cf><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-c9bd21cf><rect x="2" y="2" width="20" height="20" rx="5" data-v-c9bd21cf></rect><circle cx="12" cy="12" r="4" data-v-c9bd21cf></circle><circle cx="18" cy="6" r="1" data-v-c9bd21cf></circle></svg></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="footer-links" data-v-c9bd21cf><h4 data-v-c9bd21cf>${ssrInterpolate(content.value.quickLinks)}</h4><ul data-v-c9bd21cf><!--[-->`);
      ssrRenderList(content.value.links, (link) => {
        _push(`<li data-v-c9bd21cf><a${ssrRenderAttr("href", link.href)} data-v-c9bd21cf>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-links" data-v-c9bd21cf><h4 data-v-c9bd21cf>${ssrInterpolate(content.value.services)}</h4><ul data-v-c9bd21cf><!--[-->`);
      ssrRenderList(content.value.serviceLinks, (link) => {
        _push(`<li data-v-c9bd21cf><a${ssrRenderAttr("href", link.href)} data-v-c9bd21cf>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-contact" data-v-c9bd21cf><h4 data-v-c9bd21cf>${ssrInterpolate(content.value.contact)}</h4><!--[-->`);
      ssrRenderList(locations.value, (location) => {
        _push(`<div class="location-block" data-v-c9bd21cf>`);
        if (locations.value.length > 1) {
          _push(`<div class="location-name" data-v-c9bd21cf>${ssrInterpolate(location.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="contact-item" data-v-c9bd21cf><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-c9bd21cf><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-c9bd21cf></path><circle cx="12" cy="10" r="3" data-v-c9bd21cf></circle></svg><span data-v-c9bd21cf>${ssrInterpolate(location.address)}</span></div>`);
        if (location.phone) {
          _push(`<div class="contact-item" data-v-c9bd21cf><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-c9bd21cf><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-c9bd21cf></path></svg><a${ssrRenderAttr("href", `tel:${location.phone}`)} data-v-c9bd21cf>${ssrInterpolate(location.phone)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.email) {
          _push(`<div class="contact-item" data-v-c9bd21cf><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-c9bd21cf><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-c9bd21cf></path><polyline points="22,6 12,13 2,6" data-v-c9bd21cf></polyline></svg><a${ssrRenderAttr("href", `mailto:${location.email}`)} data-v-c9bd21cf>${ssrInterpolate(location.email)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.show_working_hours) {
          _push(`<div class="working-hours-block" data-v-c9bd21cf><h5 data-v-c9bd21cf>${ssrInterpolate(content.value.workingHours)}</h5><div class="hours-item" data-v-c9bd21cf><span class="day" data-v-c9bd21cf>${ssrInterpolate(content.value.mondayFriday)}</span><span class="time" data-v-c9bd21cf>${ssrInterpolate(location.working_hours_weekdays)}</span></div><div class="hours-item" data-v-c9bd21cf><span class="day" data-v-c9bd21cf>${ssrInterpolate(content.value.saturday)}</span><span class="time" data-v-c9bd21cf>${ssrInterpolate(location.working_hours_saturday)}</span></div><div class="hours-item" data-v-c9bd21cf><span class="day" data-v-c9bd21cf>${ssrInterpolate(content.value.sunday)}</span><span class="time" data-v-c9bd21cf>${ssrInterpolate(location.working_hours_sunday)}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="footer-bottom" data-v-c9bd21cf><div class="container" data-v-c9bd21cf><p data-v-c9bd21cf>${ssrInterpolate(content.value.copyright)}</p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c9bd21cf"]]);
function useScrollAnimation() {
  let observer = null;
  const initScrollAnimation = () => {
    const options = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.05
    };
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, options);
    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .fade-in");
    elements.forEach((el) => observer.observe(el));
    setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    }, 100);
  };
  onMounted(() => {
    nextTick(() => {
      initScrollAnimation();
    });
  });
  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
  return {
    initScrollAnimation
  };
}
export {
  Footer as F,
  Navbar as N,
  useScrollAnimation as u
};
