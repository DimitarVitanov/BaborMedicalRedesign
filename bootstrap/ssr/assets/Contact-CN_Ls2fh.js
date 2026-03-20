import { computed, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { usePage, useForm, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    locations: Array,
    socialLinks: Object
  },
  setup(__props) {
    useScrollAnimation();
    const props = __props;
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const locations = computed(() => props.locations || page.props.sharedLocations || []);
    computed(() => props.socialLinks || page.props.sharedSocialLinks || {});
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Контакт - Babor Medical" : "Contact - Babor Medical";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Контактирајте нè за закажување на термин или за повеќе информации за нашите третмани." : "Contact us to book an appointment or for more information about our treatments.";
    });
    const form = useForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    const submitted = ref(false);
    const services = computed(() => [
      { value: "", label: locale.value === "mk" ? "Изберете услуга" : "Select a service" },
      { value: "face", label: locale.value === "mk" ? "Третмани за лице" : "Face Treatments" },
      { value: "laser", label: locale.value === "mk" ? "Ласерски третмани" : "Laser Treatments" },
      { value: "body", label: locale.value === "mk" ? "Третмани за тело" : "Body Treatments" },
      { value: "products", label: locale.value === "mk" ? "Babor производи" : "Babor Products" },
      { value: "consultation", label: locale.value === "mk" ? "Консултација" : "Consultation" },
      { value: "other", label: locale.value === "mk" ? "Друго" : "Other" }
    ]);
    const content = computed(() => ({
      badge: locale.value === "mk" ? "КОНТАКТ" : "CONTACT",
      title: locale.value === "mk" ? "Контактирајте нè" : "Get in Touch",
      subtitle: locale.value === "mk" ? "Имате прашања или сакате да закажете термин? Ние сме тука за вас." : "Have questions or want to book an appointment? We are here for you.",
      formTitle: locale.value === "mk" ? "Испратете порака" : "Send a Message",
      infoTitle: locale.value === "mk" ? "Информации за контакт" : "Contact Information",
      name: locale.value === "mk" ? "Име и презиме" : "Full Name",
      email: locale.value === "mk" ? "Е-пошта" : "Email",
      phone: locale.value === "mk" ? "Телефон" : "Phone",
      service: locale.value === "mk" ? "Услуга" : "Service",
      message: locale.value === "mk" ? "Порака" : "Message",
      submit: locale.value === "mk" ? "Испрати порака" : "Send Message",
      successTitle: locale.value === "mk" ? "Пораката е испратена!" : "Message Sent!",
      successText: locale.value === "mk" ? "Ви благодариме за вашата порака. Ќе ви одговориме наскоро." : "Thank you for your message. We will get back to you soon.",
      workingHoursLabel: locale.value === "mk" ? "Работно време" : "Working Hours",
      mondayFriday: locale.value === "mk" ? "Понеделник - Петок" : "Monday - Friday",
      saturday: locale.value === "mk" ? "Сабота" : "Saturday",
      sunday: locale.value === "mk" ? "Недела" : "Sunday",
      followUs: locale.value === "mk" ? "Следете нè" : "Follow Us"
    }));
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-72b073de${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-72b073de${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, контакт, закажи термин, Скопје" : "Babor Medical, contact, book appointment, Skopje")} data-v-72b073de${_scopeId}><meta name="robots" content="index, follow" data-v-72b073de${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-72b073de${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-72b073de${_scopeId}><meta property="og:type" content="website" data-v-72b073de${_scopeId}><meta property="og:image" content="/logo.webp" data-v-72b073de${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-72b073de${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-72b073de${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-72b073de${_scopeId}><meta name="twitter:image" content="/logo.webp" data-v-72b073de${_scopeId}><link rel="canonical" href="https://babormedical.com/contact" data-v-72b073de${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/contact?lang=en" data-v-72b073de${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/contact?lang=mk" data-v-72b073de${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/contact" data-v-72b073de${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "Babor Medical, контакт, закажи термин, Скопје" : "Babor Medical, contact, book appointment, Skopje"
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
              createVNode("meta", {
                name: "twitter:image",
                content: "/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/contact"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/contact?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/contact?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/contact"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-wrapper" data-v-72b073de>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="contact-hero" data-v-72b073de><div class="container" data-v-72b073de><div class="hero-content fade-in-up" data-v-72b073de><span class="section-badge" data-v-72b073de>${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title" data-v-72b073de>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle" data-v-72b073de>${ssrInterpolate(content.value.subtitle)}</p></div></div></section><section class="contact-section" data-v-72b073de><div class="container" data-v-72b073de><div class="contact-grid" data-v-72b073de><div class="contact-form-wrapper fade-in-left" data-v-72b073de><h2 class="form-title" data-v-72b073de>${ssrInterpolate(content.value.formTitle)}</h2>`);
      if (submitted.value) {
        _push(`<div class="success-message" data-v-72b073de><div class="success-icon" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-72b073de></path><polyline points="22 4 12 14.01 9 11.01" data-v-72b073de></polyline></svg></div><h3 data-v-72b073de>${ssrInterpolate(content.value.successTitle)}</h3><p data-v-72b073de>${ssrInterpolate(content.value.successText)}</p></div>`);
      } else {
        _push(`<form class="contact-form" data-v-72b073de><div class="form-group" data-v-72b073de><label${ssrRenderAttr("for", "name")} data-v-72b073de>${ssrInterpolate(content.value.name)}</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required${ssrRenderAttr("placeholder", content.value.name)} data-v-72b073de></div><div class="form-row" data-v-72b073de><div class="form-group" data-v-72b073de><label${ssrRenderAttr("for", "email")} data-v-72b073de>${ssrInterpolate(content.value.email)}</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required${ssrRenderAttr("placeholder", content.value.email)} data-v-72b073de></div><div class="form-group" data-v-72b073de><label${ssrRenderAttr("for", "phone")} data-v-72b073de>${ssrInterpolate(content.value.phone)}</label><input type="tel" id="phone"${ssrRenderAttr("value", unref(form).phone)}${ssrRenderAttr("placeholder", content.value.phone)} data-v-72b073de></div></div><div class="form-group" data-v-72b073de><label${ssrRenderAttr("for", "service")} data-v-72b073de>${ssrInterpolate(content.value.service)}</label><select id="service" data-v-72b073de><!--[-->`);
        ssrRenderList(services.value, (service) => {
          _push(`<option${ssrRenderAttr("value", service.value)} data-v-72b073de${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, service.value) : ssrLooseEqual(unref(form).service, service.value)) ? " selected" : ""}>${ssrInterpolate(service.label)}</option>`);
        });
        _push(`<!--]--></select></div><div class="form-group" data-v-72b073de><label${ssrRenderAttr("for", "message")} data-v-72b073de>${ssrInterpolate(content.value.message)}</label><textarea id="message" rows="5" required${ssrRenderAttr("placeholder", content.value.message)} data-v-72b073de>${ssrInterpolate(unref(form).message)}</textarea></div>`);
        if (errorMessage.value) {
          _push(`<div class="error-message" data-v-72b073de>${ssrInterpolate(errorMessage.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="btn-cta submit-btn"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-72b073de>${ssrInterpolate(isSubmitting.value ? locale.value === "mk" ? "Се испраќа..." : "Sending..." : content.value.submit)} `);
        if (!isSubmitting.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" data-v-72b073de></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></form>`);
      }
      _push(`</div><div class="contact-info-wrapper fade-in-right" data-v-72b073de><h2 class="info-title" data-v-72b073de>${ssrInterpolate(content.value.infoTitle)}</h2><!--[-->`);
      ssrRenderList(locations.value, (location) => {
        _push(`<div class="location-card" data-v-72b073de><h3 class="location-name" data-v-72b073de>${ssrInterpolate(location.name)}</h3><div class="info-cards" data-v-72b073de><div class="info-card" data-v-72b073de><div class="info-icon" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-72b073de></path><circle cx="12" cy="10" r="3" data-v-72b073de></circle></svg></div><div class="info-content" data-v-72b073de><h4 data-v-72b073de>${ssrInterpolate(locale.value === "mk" ? "Адреса" : "Address")}</h4><p data-v-72b073de>${ssrInterpolate(location.address)}</p></div></div>`);
        if (location.phone) {
          _push(`<div class="info-card" data-v-72b073de><div class="info-icon" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-72b073de></path></svg></div><div class="info-content" data-v-72b073de><h4 data-v-72b073de>${ssrInterpolate(locale.value === "mk" ? "Телефон" : "Phone")}</h4><p data-v-72b073de><a${ssrRenderAttr("href", `tel:${location.phone}`)} data-v-72b073de>${ssrInterpolate(location.phone)}</a></p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.email) {
          _push(`<div class="info-card" data-v-72b073de><div class="info-icon" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-72b073de></path><polyline points="22,6 12,13 2,6" data-v-72b073de></polyline></svg></div><div class="info-content" data-v-72b073de><h4 data-v-72b073de>${ssrInterpolate(locale.value === "mk" ? "Е-пошта" : "Email")}</h4><p data-v-72b073de><a${ssrRenderAttr("href", `mailto:${location.email}`)} data-v-72b073de>${ssrInterpolate(location.email)}</a></p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (location.show_working_hours) {
          _push(`<div class="info-card" data-v-72b073de><div class="info-icon" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><circle cx="12" cy="12" r="10" data-v-72b073de></circle><polyline points="12 6 12 12 16 14" data-v-72b073de></polyline></svg></div><div class="info-content" data-v-72b073de><h4 data-v-72b073de>${ssrInterpolate(content.value.workingHoursLabel)}</h4><div class="hours-list" data-v-72b073de><div class="hour-item" data-v-72b073de><span class="day" data-v-72b073de>${ssrInterpolate(content.value.mondayFriday)}</span><span class="time" data-v-72b073de>${ssrInterpolate(location.working_hours_weekdays)}</span></div><div class="hour-item" data-v-72b073de><span class="day" data-v-72b073de>${ssrInterpolate(content.value.saturday)}</span><span class="time" data-v-72b073de>${ssrInterpolate(location.working_hours_saturday)}</span></div><div class="hour-item" data-v-72b073de><span class="day" data-v-72b073de>${ssrInterpolate(content.value.sunday)}</span><span class="time" data-v-72b073de>${ssrInterpolate(location.working_hours_sunday)}</span></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="social-section" data-v-72b073de><h4 data-v-72b073de>${ssrInterpolate(content.value.followUs)}</h4><div class="social-links" data-v-72b073de><a href="https://facebook.com/babormedical" target="_blank" rel="noopener" aria-label="Facebook" data-v-72b073de><svg viewBox="0 0 24 24" fill="currentColor" data-v-72b073de><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-72b073de></path></svg></a><a href="https://instagram.com/babormedical" target="_blank" rel="noopener" aria-label="Instagram" data-v-72b073de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-72b073de><rect x="2" y="2" width="20" height="20" rx="5" data-v-72b073de></rect><circle cx="12" cy="12" r="4" data-v-72b073de></circle><circle cx="18" cy="6" r="1" data-v-72b073de></circle></svg></a></div></div></div></div></div></section><section class="map-section fade-in-up" data-v-72b073de><div class="container" data-v-72b073de><div class="map-wrapper" data-v-72b073de><iframe src="https://maps.google.com/maps?q=East+Gate+Mall,+Skopje&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="400" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-72b073de></iframe></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72b073de"]]);
export {
  Contact as default
};
