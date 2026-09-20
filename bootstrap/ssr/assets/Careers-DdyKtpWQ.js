import { computed, ref, reactive, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-D2kxU4zH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Careers",
  __ssrInlineRender: true,
  props: {
    postings: Array
  },
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Кариера - Babor Medical" : "Careers - Babor Medical";
    });
    const seoDescription = computed(() => {
      return locale.value === "mk" ? "Придружете се на тимот на Babor Medical. Погледнете ги отворените позиции и аплицирајте онлајн." : "Join the Babor Medical team. Browse our open positions and apply online.";
    });
    const content = computed(() => ({
      badge: locale.value === "mk" ? "КАРИЕРА" : "CAREERS",
      title: locale.value === "mk" ? "Придружете се на нашиот тим" : "Join Our Team",
      subtitle: locale.value === "mk" ? "Изградете кариера во светот на естетската медицина и убавината. Погледнете ги нашите отворени позиции." : "Build a career in the world of aesthetic medicine and beauty. Take a look at our open positions.",
      openPositions: locale.value === "mk" ? "Отворени позиции" : "Open Positions",
      noPositionsTitle: locale.value === "mk" ? "Моментално нема отворени позиции" : "No Open Positions Right Now",
      noPositionsText: locale.value === "mk" ? "Следете нè на социјалните мрежи или проверете повторно наскоро за нови можности." : "Follow us on social media or check back soon for new opportunities.",
      requirements: locale.value === "mk" ? "Потребни квалификации" : "Requirements",
      apply: locale.value === "mk" ? "Аплицирај" : "Apply Now",
      close: locale.value === "mk" ? "Затвори" : "Close",
      applyFor: locale.value === "mk" ? "Аплицирај за" : "Apply for",
      name: locale.value === "mk" ? "Име и презиме" : "Full Name",
      email: locale.value === "mk" ? "Е-пошта" : "Email",
      phone: locale.value === "mk" ? "Телефон" : "Phone",
      message: locale.value === "mk" ? "Мотивационо писмо (опционално)" : "Cover Letter (optional)",
      cv: locale.value === "mk" ? "Кратка биографија (CV)" : "CV / Resume",
      cvHint: locale.value === "mk" ? "PDF, DOC или DOCX, максимум 5MB" : "PDF, DOC or DOCX, max 5MB",
      chooseFile: locale.value === "mk" ? "Изберете датотека" : "Choose file",
      submit: locale.value === "mk" ? "Испрати апликација" : "Submit Application",
      submitting: locale.value === "mk" ? "Се испраќа..." : "Submitting...",
      successTitle: locale.value === "mk" ? "Апликацијата е испратена!" : "Application Sent!",
      successText: locale.value === "mk" ? "Ви благодариме за интересот. Ќе ве контактираме најбрзо што е можно. Потврда е испратена на вашата е-пошта." : "Thank you for your interest. We will get back to you as soon as possible. A confirmation has been sent to your email.",
      genericError: locale.value === "mk" ? "Нешто тргна наопаку. Ве молиме обидете се повторно." : "Something went wrong. Please try again."
    }));
    const employmentTypeLabel = (type) => {
      const labels = {
        full_time: locale.value === "mk" ? "Полно работно време" : "Full-time",
        part_time: locale.value === "mk" ? "Скратено работно време" : "Part-time",
        contract: locale.value === "mk" ? "Договор" : "Contract",
        internship: locale.value === "mk" ? "Пракса" : "Internship"
      };
      return labels[type] || type;
    };
    const activeFormId = ref(null);
    const submittedId = ref(null);
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const fieldErrors = ref({});
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      message: "",
      cv: null
    });
    const cvFileName = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-08600885${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-08600885${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, кариера, вработување, работа, Скопје" : "Babor Medical, careers, jobs, employment, Skopje")} data-v-08600885${_scopeId}><meta name="robots" content="index, follow" data-v-08600885${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-08600885${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-08600885${_scopeId}><meta property="og:type" content="website" data-v-08600885${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-08600885${_scopeId}><link rel="canonical" href="https://babormedical.com/careers" data-v-08600885${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/careers?lang=en" data-v-08600885${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/careers?lang=mk" data-v-08600885${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/careers" data-v-08600885${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: seoDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: locale.value === "mk" ? "Babor Medical, кариера, вработување, работа, Скопје" : "Babor Medical, careers, jobs, employment, Skopje"
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
                content: "https://babormedical.com/logo.webp"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/careers"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/careers?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/careers?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/careers"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-wrapper" data-v-08600885>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="careers-hero" data-v-08600885><div class="container" data-v-08600885><div class="hero-content fade-in-up" data-v-08600885><span class="section-badge" data-v-08600885>${ssrInterpolate(content.value.badge)}</span><h1 class="hero-title" data-v-08600885>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle" data-v-08600885>${ssrInterpolate(content.value.subtitle)}</p></div></div></section><section class="careers-section" data-v-08600885><div class="container" data-v-08600885>`);
      if (__props.postings.length > 0) {
        _push(`<!--[--><h2 class="section-title fade-in-up" data-v-08600885>${ssrInterpolate(content.value.openPositions)}</h2><div class="postings-list" data-v-08600885><!--[-->`);
        ssrRenderList(__props.postings, (posting) => {
          _push(`<div class="posting-card fade-in-up" data-v-08600885><div class="posting-header" data-v-08600885><div class="posting-info" data-v-08600885><h3 class="posting-title" data-v-08600885>${ssrInterpolate(posting.title)}</h3><div class="posting-meta" data-v-08600885>`);
          if (posting.location) {
            _push(`<span class="meta-item" data-v-08600885><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-08600885><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-08600885></path><circle cx="12" cy="10" r="3" data-v-08600885></circle></svg> ${ssrInterpolate(posting.location)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="meta-item" data-v-08600885><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-08600885><circle cx="12" cy="12" r="10" data-v-08600885></circle><polyline points="12 6 12 12 16 14" data-v-08600885></polyline></svg> ${ssrInterpolate(employmentTypeLabel(posting.employment_type))}</span></div></div>`);
          if (submittedId.value !== posting.id) {
            _push(`<button class="btn-cta apply-btn" data-v-08600885>${ssrInterpolate(activeFormId.value === posting.id ? content.value.close : content.value.apply)}</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (posting.description) {
            _push(`<div class="posting-description" data-v-08600885>${ssrInterpolate(posting.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (posting.requirements) {
            _push(`<div class="posting-requirements" data-v-08600885><h4 data-v-08600885>${ssrInterpolate(content.value.requirements)}</h4><div class="requirements-text" data-v-08600885>${ssrInterpolate(posting.requirements)}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (submittedId.value === posting.id) {
            _push(`<div class="success-message" data-v-08600885><div class="success-icon" data-v-08600885><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-08600885><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-08600885></path><polyline points="22 4 12 14.01 9 11.01" data-v-08600885></polyline></svg></div><h3 data-v-08600885>${ssrInterpolate(content.value.successTitle)}</h3><p data-v-08600885>${ssrInterpolate(content.value.successText)}</p></div>`);
          } else if (activeFormId.value === posting.id) {
            _push(`<form class="application-form" data-v-08600885><h4 class="form-heading" data-v-08600885>${ssrInterpolate(content.value.applyFor)}: ${ssrInterpolate(posting.title)}</h4><div class="form-row" data-v-08600885><div class="form-group" data-v-08600885><label${ssrRenderAttr("for", `name-${posting.id}`)} data-v-08600885>${ssrInterpolate(content.value.name)} *</label><input type="text"${ssrRenderAttr("id", `name-${posting.id}`)}${ssrRenderAttr("value", form.name)} required${ssrRenderAttr("placeholder", content.value.name)} data-v-08600885>`);
            if (fieldErrors.value.name) {
              _push(`<span class="field-error" data-v-08600885>${ssrInterpolate(fieldErrors.value.name)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="form-group" data-v-08600885><label${ssrRenderAttr("for", `email-${posting.id}`)} data-v-08600885>${ssrInterpolate(content.value.email)} *</label><input type="email"${ssrRenderAttr("id", `email-${posting.id}`)}${ssrRenderAttr("value", form.email)} required${ssrRenderAttr("placeholder", content.value.email)} data-v-08600885>`);
            if (fieldErrors.value.email) {
              _push(`<span class="field-error" data-v-08600885>${ssrInterpolate(fieldErrors.value.email)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div><div class="form-group" data-v-08600885><label${ssrRenderAttr("for", `phone-${posting.id}`)} data-v-08600885>${ssrInterpolate(content.value.phone)}</label><input type="tel"${ssrRenderAttr("id", `phone-${posting.id}`)}${ssrRenderAttr("value", form.phone)}${ssrRenderAttr("placeholder", content.value.phone)} data-v-08600885>`);
            if (fieldErrors.value.phone) {
              _push(`<span class="field-error" data-v-08600885>${ssrInterpolate(fieldErrors.value.phone)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="form-group" data-v-08600885><label${ssrRenderAttr("for", `message-${posting.id}`)} data-v-08600885>${ssrInterpolate(content.value.message)}</label><textarea${ssrRenderAttr("id", `message-${posting.id}`)} rows="4"${ssrRenderAttr("placeholder", content.value.message)} data-v-08600885>${ssrInterpolate(form.message)}</textarea>`);
            if (fieldErrors.value.message) {
              _push(`<span class="field-error" data-v-08600885>${ssrInterpolate(fieldErrors.value.message)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="form-group" data-v-08600885><label${ssrRenderAttr("for", `cv-${posting.id}`)} data-v-08600885>${ssrInterpolate(content.value.cv)} *</label><label class="file-input-wrapper"${ssrRenderAttr("for", `cv-${posting.id}`)} data-v-08600885><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-08600885><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" data-v-08600885></path></svg><span data-v-08600885>${ssrInterpolate(cvFileName.value || content.value.chooseFile)}</span></label><input type="file"${ssrRenderAttr("id", `cv-${posting.id}`)} accept=".pdf,.doc,.docx" required class="file-input-hidden" data-v-08600885><small class="file-hint" data-v-08600885>${ssrInterpolate(content.value.cvHint)}</small>`);
            if (fieldErrors.value.cv) {
              _push(`<span class="field-error" data-v-08600885>${ssrInterpolate(fieldErrors.value.cv)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (errorMessage.value) {
              _push(`<div class="error-message" data-v-08600885>${ssrInterpolate(errorMessage.value)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<button type="submit" class="btn-cta submit-btn"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-08600885>${ssrInterpolate(isSubmitting.value ? content.value.submitting : content.value.submit)} `);
            if (!isSubmitting.value) {
              _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-08600885><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" data-v-08600885></path></svg>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</button></form>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<div class="no-positions fade-in-up" data-v-08600885><div class="no-positions-icon" data-v-08600885><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-08600885><rect x="2" y="7" width="20" height="14" rx="2" ry="2" data-v-08600885></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" data-v-08600885></path></svg></div><h2 data-v-08600885>${ssrInterpolate(content.value.noPositionsTitle)}</h2><p data-v-08600885>${ssrInterpolate(content.value.noPositionsText)}</p></div>`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Careers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08600885"]]);
export {
  Careers as default
};
