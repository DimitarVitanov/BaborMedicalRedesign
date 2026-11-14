import { computed, ref, reactive, unref, withCtx, createVNode, toDisplayString, createSlots, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, Transition, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-Den8Gs11.js";
import { P as PageHero } from "./PageHero-DJ_0bjbt.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-D-2r2JUh.js";
import { M as Marquee } from "./Marquee-BW44XveL.js";
import { C as Counter } from "./Counter-D9QhkEw9.js";
import { R as RotatingBadge } from "./RotatingBadge-139J2yQu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Careers",
  __ssrInlineRender: true,
  props: {
    postings: Array
  },
  setup(__props) {
    const props = __props;
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
    const toggleForm = (postingId) => {
      if (activeFormId.value === postingId) {
        activeFormId.value = null;
        return;
      }
      activeFormId.value = postingId;
      errorMessage.value = "";
      fieldErrors.value = {};
      form.name = "";
      form.email = "";
      form.phone = "";
      form.message = "";
      form.cv = null;
      cvFileName.value = "";
    };
    const handleCvChange = (e) => {
      const file = e.target.files[0];
      form.cv = file || null;
      cvFileName.value = file ? file.name : "";
    };
    const submitApplication = async (postingId) => {
      var _a;
      isSubmitting.value = true;
      errorMessage.value = "";
      fieldErrors.value = {};
      try {
        const formData = new FormData();
        formData.append("job_posting_id", postingId);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("message", form.message);
        if (form.cv) {
          formData.append("cv", form.cv);
        }
        const response = await fetch("/careers/apply", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "X-CSRF-TOKEN": (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content")
          },
          body: formData
        });
        const data = await response.json();
        if (response.ok && data.success) {
          submittedId.value = postingId;
          activeFormId.value = null;
        } else if (response.status === 422 && data.errors) {
          fieldErrors.value = Object.fromEntries(
            Object.entries(data.errors).map(([key, messages]) => [key, messages[0]])
          );
          errorMessage.value = data.message || content.value.genericError;
        } else {
          errorMessage.value = data.message || content.value.genericError;
        }
      } catch (error) {
        errorMessage.value = content.value.genericError;
      } finally {
        isSubmitting.value = false;
      }
    };
    const pad = (n) => String(n).padStart(2, "0");
    const requirementLines = (text) => String(text || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const dragOver = ref(false);
    const ribbonItems = computed(() => {
      const items = [content.value.title, ...(props.postings || []).map((p) => p.title), content.value.openPositions];
      return items.length < 5 ? [...items, ...items] : items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-00838ea5${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-00838ea5${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, кариера, вработување, работа, Скопје" : "Babor Medical, careers, jobs, employment, Skopje")} data-v-00838ea5${_scopeId}><meta name="robots" content="index, follow" data-v-00838ea5${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-00838ea5${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-00838ea5${_scopeId}><meta property="og:type" content="website" data-v-00838ea5${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-00838ea5${_scopeId}><link rel="canonical" href="https://babormedical.com/careers" data-v-00838ea5${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/careers?lang=en" data-v-00838ea5${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/careers?lang=mk" data-v-00838ea5${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/careers" data-v-00838ea5${_scopeId}>`);
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: content.value.badge,
              title: content.value.title,
              subtitle: content.value.subtitle,
              crumb: locale.value === "mk" ? "Кариера" : "Careers",
              class: "cr-hero"
            }, createSlots({
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="cr-art" aria-hidden="true" data-v-00838ea5${_scopeId2}><div class="cr-art__arch" data-v-00838ea5${_scopeId2}><span class="cr-art__line cr-art__line--1" data-v-00838ea5${_scopeId2}></span><span class="cr-art__line cr-art__line--2" data-v-00838ea5${_scopeId2}></span>`);
                  if (__props.postings.length > 0) {
                    _push3(`<!--[--><span class="cr-art__count" data-v-00838ea5${_scopeId2}>`);
                    _push3(ssrRenderComponent(Counter, {
                      value: pad(__props.postings.length)
                    }, null, _parent3, _scopeId2));
                    _push3(`</span><span class="cr-art__label" data-v-00838ea5${_scopeId2}>${ssrInterpolate(content.value.openPositions)}</span><!--]-->`);
                  } else {
                    _push3(`<span class="cr-art__icon" data-v-00838ea5${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: "briefcase",
                      size: 44,
                      stroke: 1.2
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(RotatingBadge, {
                    size: 150,
                    class: "cr-art__seal"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "cr-art",
                      "aria-hidden": "true"
                    }, [
                      createVNode("div", { class: "cr-art__arch" }, [
                        createVNode("span", { class: "cr-art__line cr-art__line--1" }),
                        createVNode("span", { class: "cr-art__line cr-art__line--2" }),
                        __props.postings.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("span", { class: "cr-art__count" }, [
                            createVNode(Counter, {
                              value: pad(__props.postings.length)
                            }, null, 8, ["value"])
                          ]),
                          createVNode("span", { class: "cr-art__label" }, toDisplayString(content.value.openPositions), 1)
                        ], 64)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "cr-art__icon"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "briefcase",
                            size: 44,
                            stroke: 1.2
                          })
                        ]))
                      ]),
                      createVNode(RotatingBadge, {
                        size: 150,
                        class: "cr-art__seal"
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, [
              __props.postings.length > 0 ? {
                name: "default",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a href="#open-positions" class="bm-btn" data-v-00838ea5${_scopeId2}><span data-v-00838ea5${_scopeId2}>${ssrInterpolate(content.value.openPositions)}</span><span class="bm-btn__icon" data-v-00838ea5${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      name: "arrow-down",
                      stroke: 2
                    }, null, _parent3, _scopeId2));
                    _push3(`</span></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: "#open-positions",
                        class: "bm-btn"
                      }, [
                        createVNode("span", null, toDisplayString(content.value.openPositions), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "arrow-down",
                            stroke: 2
                          })
                        ])
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(`<section id="open-positions" class="cr-main bm-cream bm-sheet bm-section" data-v-00838ea5${_scopeId}><div class="bm-container" data-v-00838ea5${_scopeId}>`);
            if (__props.postings.length > 0) {
              _push2(`<!--[--><div class="cr-head" data-v-00838ea5${_scopeId}><h2 class="bm-h2 cr-head__title" data-v-00838ea5${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                text: content.value.openPositions
              }, null, _parent2, _scopeId));
              _push2(`</h2></div><div class="cr-list" data-v-00838ea5${_scopeId}><!--[-->`);
              ssrRenderList(__props.postings, (posting, index) => {
                _push2(`<article class="${ssrRenderClass([{ "is-open": activeFormId.value === posting.id, "is-sent": submittedId.value === posting.id }, "cr-role"])}" data-reveal style="${ssrRenderStyle({ "--d": `${index * 0.08}s` })}" data-v-00838ea5${_scopeId}><header class="cr-role__head" data-v-00838ea5${_scopeId}><span class="bm-numeral cr-role__num" aria-hidden="true" data-v-00838ea5${_scopeId}>${ssrInterpolate(pad(index + 1))}</span><div class="cr-role__heading" data-v-00838ea5${_scopeId}><h3 class="cr-role__title" data-v-00838ea5${_scopeId}>${ssrInterpolate(posting.title)}</h3><div class="cr-role__meta" data-v-00838ea5${_scopeId}>`);
                if (posting.location) {
                  _push2(`<span class="cr-meta" data-v-00838ea5${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    name: "pin",
                    size: 16,
                    stroke: 1.7
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(posting.location)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="cr-meta" data-v-00838ea5${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "clock",
                  size: 16,
                  stroke: 1.7
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(employmentTypeLabel(posting.employment_type))}</span></div></div>`);
                if (submittedId.value !== posting.id) {
                  _push2(`<button type="button" class="${ssrRenderClass([{ "is-active": activeFormId.value === posting.id }, "bm-btn bm-btn--wine cr-role__apply"])}"${ssrRenderAttr("aria-expanded", activeFormId.value === posting.id ? "true" : "false")} data-v-00838ea5${_scopeId}><span data-v-00838ea5${_scopeId}>${ssrInterpolate(activeFormId.value === posting.id ? content.value.close : content.value.apply)}</span><span class="bm-btn__icon" data-v-00838ea5${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    name: activeFormId.value === posting.id ? "close" : "arrow-right",
                    stroke: 2
                  }, null, _parent2, _scopeId));
                  _push2(`</span></button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</header>`);
                if (posting.description || posting.requirements) {
                  _push2(`<div class="cr-role__body" data-v-00838ea5${_scopeId}>`);
                  if (posting.description) {
                    _push2(`<div class="cr-role__desc" data-v-00838ea5${_scopeId}>${ssrInterpolate(posting.description)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (posting.requirements) {
                    _push2(`<div class="cr-role__req" data-v-00838ea5${_scopeId}><h4 class="cr-role__req-title" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.requirements)}</h4><ul class="bm-list cr-role__req-list" data-v-00838ea5${_scopeId}><!--[-->`);
                    ssrRenderList(requirementLines(posting.requirements), (line, li) => {
                      _push2(`<li data-v-00838ea5${_scopeId}>${ssrInterpolate(line)}</li>`);
                    });
                    _push2(`<!--]--></ul></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (submittedId.value === posting.id) {
                  _push2(`<div class="cr-success" role="status" data-v-00838ea5${_scopeId}><div class="cr-success__icon" data-v-00838ea5${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    name: "check",
                    size: 30,
                    stroke: 1.8
                  }, null, _parent2, _scopeId));
                  _push2(`</div><h3 class="bm-h3" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.successTitle)}</h3><p data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.successText)}</p></div>`);
                } else if (activeFormId.value === posting.id) {
                  _push2(`<form class="cr-apply" data-v-00838ea5${_scopeId}><div class="cr-apply__glow" aria-hidden="true" data-v-00838ea5${_scopeId}></div><h4 class="cr-apply__title" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.applyFor)}: <em data-v-00838ea5${_scopeId}>${ssrInterpolate(posting.title)}</em></h4><div class="cr-apply__grid" data-v-00838ea5${_scopeId}><div class="bm-field" data-v-00838ea5${_scopeId}><label class="bm-label"${ssrRenderAttr("for", `name-${posting.id}`)} data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.name)} *</label><input type="text" class="bm-input"${ssrRenderAttr("id", `name-${posting.id}`)}${ssrRenderAttr("value", form.name)} required${ssrRenderAttr("placeholder", content.value.name)} data-v-00838ea5${_scopeId}>`);
                  if (fieldErrors.value.name) {
                    _push2(`<span class="cr-field-error" data-v-00838ea5${_scopeId}>${ssrInterpolate(fieldErrors.value.name)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="bm-field" data-v-00838ea5${_scopeId}><label class="bm-label"${ssrRenderAttr("for", `email-${posting.id}`)} data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.email)} *</label><input type="email" class="bm-input"${ssrRenderAttr("id", `email-${posting.id}`)}${ssrRenderAttr("value", form.email)} required${ssrRenderAttr("placeholder", content.value.email)} data-v-00838ea5${_scopeId}>`);
                  if (fieldErrors.value.email) {
                    _push2(`<span class="cr-field-error" data-v-00838ea5${_scopeId}>${ssrInterpolate(fieldErrors.value.email)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="bm-field" data-v-00838ea5${_scopeId}><label class="bm-label"${ssrRenderAttr("for", `phone-${posting.id}`)} data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.phone)}</label><input type="tel" class="bm-input"${ssrRenderAttr("id", `phone-${posting.id}`)}${ssrRenderAttr("value", form.phone)}${ssrRenderAttr("placeholder", content.value.phone)} data-v-00838ea5${_scopeId}>`);
                  if (fieldErrors.value.phone) {
                    _push2(`<span class="cr-field-error" data-v-00838ea5${_scopeId}>${ssrInterpolate(fieldErrors.value.phone)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="bm-field cr-apply__full" data-v-00838ea5${_scopeId}><label class="bm-label"${ssrRenderAttr("for", `message-${posting.id}`)} data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.message)}</label><textarea class="bm-input"${ssrRenderAttr("id", `message-${posting.id}`)} rows="4"${ssrRenderAttr("placeholder", content.value.message)} data-v-00838ea5${_scopeId}>${ssrInterpolate(form.message)}</textarea>`);
                  if (fieldErrors.value.message) {
                    _push2(`<span class="cr-field-error" data-v-00838ea5${_scopeId}>${ssrInterpolate(fieldErrors.value.message)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="bm-field cr-apply__full" data-v-00838ea5${_scopeId}><label class="bm-label"${ssrRenderAttr("for", `cv-${posting.id}`)} data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.cv)} *</label><label class="${ssrRenderClass([{ "has-file": cvFileName.value, "is-drag": dragOver.value }, "cr-drop"])}"${ssrRenderAttr("for", `cv-${posting.id}`)} data-v-00838ea5${_scopeId}><input type="file"${ssrRenderAttr("id", `cv-${posting.id}`)} accept=".pdf,.doc,.docx" required class="cr-drop__input" data-v-00838ea5${_scopeId}><span class="cr-drop__icon" data-v-00838ea5${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    name: cvFileName.value ? "file" : "upload",
                    size: 24,
                    stroke: 1.6
                  }, null, _parent2, _scopeId));
                  _push2(`</span><span class="cr-drop__text" data-v-00838ea5${_scopeId}><span class="cr-drop__name" data-v-00838ea5${_scopeId}>${ssrInterpolate(cvFileName.value || content.value.chooseFile)}</span><small class="cr-drop__hint" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.cvHint)}</small></span><span class="cr-drop__mark" aria-hidden="true" data-v-00838ea5${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    name: cvFileName.value ? "check" : "plus",
                    size: 18,
                    stroke: 2
                  }, null, _parent2, _scopeId));
                  _push2(`</span></label>`);
                  if (fieldErrors.value.cv) {
                    _push2(`<span class="cr-field-error" data-v-00838ea5${_scopeId}>${ssrInterpolate(fieldErrors.value.cv)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                  if (errorMessage.value) {
                    _push2(`<div class="cr-error" role="alert" data-v-00838ea5${_scopeId}>`);
                    _push2(ssrRenderComponent(_sfc_main$2, {
                      name: "info",
                      size: 18,
                      stroke: 1.8
                    }, null, _parent2, _scopeId));
                    _push2(`<span data-v-00838ea5${_scopeId}>${ssrInterpolate(errorMessage.value)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="cr-apply__actions" data-v-00838ea5${_scopeId}><button type="submit" class="bm-btn cr-submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-00838ea5${_scopeId}><span data-v-00838ea5${_scopeId}>${ssrInterpolate(isSubmitting.value ? content.value.submitting : content.value.submit)}</span><span class="bm-btn__icon" data-v-00838ea5${_scopeId}>`);
                  if (!isSubmitting.value) {
                    _push2(ssrRenderComponent(_sfc_main$2, {
                      name: "arrow-up-right",
                      stroke: 2
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<span class="cr-spinner" aria-hidden="true" data-v-00838ea5${_scopeId}></span>`);
                  }
                  _push2(`</span></button></div></form>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div><!--]-->`);
            } else {
              _push2(`<div class="cr-empty" data-reveal data-v-00838ea5${_scopeId}><div class="cr-empty__icon" data-v-00838ea5${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "briefcase",
                size: 40,
                stroke: 1.3
              }, null, _parent2, _scopeId));
              _push2(`</div><h2 class="bm-h2 cr-empty__title" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.noPositionsTitle)}</h2><p class="bm-lead bm-muted" data-v-00838ea5${_scopeId}>${ssrInterpolate(content.value.noPositionsText)}</p></div>`);
            }
            _push2(`</div></section><div class="cr-ribbons" aria-hidden="true" data-v-00838ea5${_scopeId}>`);
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonItems.value,
              variant: "wine",
              tilt: -2.4,
              duration: 46
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonItems.value,
              variant: "outline",
              tilt: 1.8,
              duration: 54,
              reverse: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: content.value.badge,
                title: content.value.title,
                subtitle: content.value.subtitle,
                crumb: locale.value === "mk" ? "Кариера" : "Careers",
                class: "cr-hero"
              }, createSlots({
                aside: withCtx(() => [
                  createVNode("div", {
                    class: "cr-art",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", { class: "cr-art__arch" }, [
                      createVNode("span", { class: "cr-art__line cr-art__line--1" }),
                      createVNode("span", { class: "cr-art__line cr-art__line--2" }),
                      __props.postings.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("span", { class: "cr-art__count" }, [
                          createVNode(Counter, {
                            value: pad(__props.postings.length)
                          }, null, 8, ["value"])
                        ]),
                        createVNode("span", { class: "cr-art__label" }, toDisplayString(content.value.openPositions), 1)
                      ], 64)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "cr-art__icon"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "briefcase",
                          size: 44,
                          stroke: 1.2
                        })
                      ]))
                    ]),
                    createVNode(RotatingBadge, {
                      size: 150,
                      class: "cr-art__seal"
                    })
                  ])
                ]),
                _: 2
              }, [
                __props.postings.length > 0 ? {
                  name: "default",
                  fn: withCtx(() => [
                    createVNode("a", {
                      href: "#open-positions",
                      class: "bm-btn"
                    }, [
                      createVNode("span", null, toDisplayString(content.value.openPositions), 1),
                      createVNode("span", { class: "bm-btn__icon" }, [
                        createVNode(_sfc_main$2, {
                          name: "arrow-down",
                          stroke: 2
                        })
                      ])
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["eyebrow", "title", "subtitle", "crumb"]),
              createVNode("section", {
                id: "open-positions",
                class: "cr-main bm-cream bm-sheet bm-section"
              }, [
                createVNode("div", { class: "bm-container" }, [
                  __props.postings.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "cr-head" }, [
                      createVNode("h2", { class: "bm-h2 cr-head__title" }, [
                        createVNode(_sfc_main$3, {
                          text: content.value.openPositions
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode("div", { class: "cr-list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.postings, (posting, index) => {
                        return openBlock(), createBlock("article", {
                          key: posting.id,
                          class: ["cr-role", { "is-open": activeFormId.value === posting.id, "is-sent": submittedId.value === posting.id }],
                          "data-reveal": "",
                          style: { "--d": `${index * 0.08}s` }
                        }, [
                          createVNode("header", { class: "cr-role__head" }, [
                            createVNode("span", {
                              class: "bm-numeral cr-role__num",
                              "aria-hidden": "true"
                            }, toDisplayString(pad(index + 1)), 1),
                            createVNode("div", { class: "cr-role__heading" }, [
                              createVNode("h3", { class: "cr-role__title" }, toDisplayString(posting.title), 1),
                              createVNode("div", { class: "cr-role__meta" }, [
                                posting.location ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "cr-meta"
                                }, [
                                  createVNode(_sfc_main$2, {
                                    name: "pin",
                                    size: 16,
                                    stroke: 1.7
                                  }),
                                  createTextVNode(" " + toDisplayString(posting.location), 1)
                                ])) : createCommentVNode("", true),
                                createVNode("span", { class: "cr-meta" }, [
                                  createVNode(_sfc_main$2, {
                                    name: "clock",
                                    size: 16,
                                    stroke: 1.7
                                  }),
                                  createTextVNode(" " + toDisplayString(employmentTypeLabel(posting.employment_type)), 1)
                                ])
                              ])
                            ]),
                            submittedId.value !== posting.id ? (openBlock(), createBlock("button", {
                              key: 0,
                              type: "button",
                              class: ["bm-btn bm-btn--wine cr-role__apply", { "is-active": activeFormId.value === posting.id }],
                              "aria-expanded": activeFormId.value === posting.id ? "true" : "false",
                              onClick: ($event) => toggleForm(posting.id)
                            }, [
                              createVNode("span", null, toDisplayString(activeFormId.value === posting.id ? content.value.close : content.value.apply), 1),
                              createVNode("span", { class: "bm-btn__icon" }, [
                                createVNode(_sfc_main$2, {
                                  name: activeFormId.value === posting.id ? "close" : "arrow-right",
                                  stroke: 2
                                }, null, 8, ["name"])
                              ])
                            ], 10, ["aria-expanded", "onClick"])) : createCommentVNode("", true)
                          ]),
                          posting.description || posting.requirements ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "cr-role__body"
                          }, [
                            posting.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "cr-role__desc"
                            }, toDisplayString(posting.description), 1)) : createCommentVNode("", true),
                            posting.requirements ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "cr-role__req"
                            }, [
                              createVNode("h4", { class: "cr-role__req-title" }, toDisplayString(content.value.requirements), 1),
                              createVNode("ul", { class: "bm-list cr-role__req-list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(requirementLines(posting.requirements), (line, li) => {
                                  return openBlock(), createBlock("li", { key: li }, toDisplayString(line), 1);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          createVNode(Transition, {
                            name: "cr-unfold",
                            mode: "out-in"
                          }, {
                            default: withCtx(() => [
                              submittedId.value === posting.id ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "cr-success",
                                role: "status"
                              }, [
                                createVNode("div", { class: "cr-success__icon" }, [
                                  createVNode(_sfc_main$2, {
                                    name: "check",
                                    size: 30,
                                    stroke: 1.8
                                  })
                                ]),
                                createVNode("h3", { class: "bm-h3" }, toDisplayString(content.value.successTitle), 1),
                                createVNode("p", null, toDisplayString(content.value.successText), 1)
                              ])) : activeFormId.value === posting.id ? (openBlock(), createBlock("form", {
                                key: 1,
                                onSubmit: withModifiers(($event) => submitApplication(posting.id), ["prevent"]),
                                class: "cr-apply"
                              }, [
                                createVNode("div", {
                                  class: "cr-apply__glow",
                                  "aria-hidden": "true"
                                }),
                                createVNode("h4", { class: "cr-apply__title" }, [
                                  createTextVNode(toDisplayString(content.value.applyFor) + ": ", 1),
                                  createVNode("em", null, toDisplayString(posting.title), 1)
                                ]),
                                createVNode("div", { class: "cr-apply__grid" }, [
                                  createVNode("div", { class: "bm-field" }, [
                                    createVNode("label", {
                                      class: "bm-label",
                                      for: `name-${posting.id}`
                                    }, toDisplayString(content.value.name) + " *", 9, ["for"]),
                                    withDirectives(createVNode("input", {
                                      type: "text",
                                      class: "bm-input",
                                      id: `name-${posting.id}`,
                                      "onUpdate:modelValue": ($event) => form.name = $event,
                                      required: "",
                                      placeholder: content.value.name
                                    }, null, 8, ["id", "onUpdate:modelValue", "placeholder"]), [
                                      [vModelText, form.name]
                                    ]),
                                    fieldErrors.value.name ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cr-field-error"
                                    }, toDisplayString(fieldErrors.value.name), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "bm-field" }, [
                                    createVNode("label", {
                                      class: "bm-label",
                                      for: `email-${posting.id}`
                                    }, toDisplayString(content.value.email) + " *", 9, ["for"]),
                                    withDirectives(createVNode("input", {
                                      type: "email",
                                      class: "bm-input",
                                      id: `email-${posting.id}`,
                                      "onUpdate:modelValue": ($event) => form.email = $event,
                                      required: "",
                                      placeholder: content.value.email
                                    }, null, 8, ["id", "onUpdate:modelValue", "placeholder"]), [
                                      [vModelText, form.email]
                                    ]),
                                    fieldErrors.value.email ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cr-field-error"
                                    }, toDisplayString(fieldErrors.value.email), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "bm-field" }, [
                                    createVNode("label", {
                                      class: "bm-label",
                                      for: `phone-${posting.id}`
                                    }, toDisplayString(content.value.phone), 9, ["for"]),
                                    withDirectives(createVNode("input", {
                                      type: "tel",
                                      class: "bm-input",
                                      id: `phone-${posting.id}`,
                                      "onUpdate:modelValue": ($event) => form.phone = $event,
                                      placeholder: content.value.phone
                                    }, null, 8, ["id", "onUpdate:modelValue", "placeholder"]), [
                                      [vModelText, form.phone]
                                    ]),
                                    fieldErrors.value.phone ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cr-field-error"
                                    }, toDisplayString(fieldErrors.value.phone), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "bm-field cr-apply__full" }, [
                                    createVNode("label", {
                                      class: "bm-label",
                                      for: `message-${posting.id}`
                                    }, toDisplayString(content.value.message), 9, ["for"]),
                                    withDirectives(createVNode("textarea", {
                                      class: "bm-input",
                                      id: `message-${posting.id}`,
                                      "onUpdate:modelValue": ($event) => form.message = $event,
                                      rows: "4",
                                      placeholder: content.value.message
                                    }, null, 8, ["id", "onUpdate:modelValue", "placeholder"]), [
                                      [vModelText, form.message]
                                    ]),
                                    fieldErrors.value.message ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cr-field-error"
                                    }, toDisplayString(fieldErrors.value.message), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "bm-field cr-apply__full" }, [
                                    createVNode("label", {
                                      class: "bm-label",
                                      for: `cv-${posting.id}`
                                    }, toDisplayString(content.value.cv) + " *", 9, ["for"]),
                                    createVNode("label", {
                                      class: ["cr-drop", { "has-file": cvFileName.value, "is-drag": dragOver.value }],
                                      for: `cv-${posting.id}`,
                                      onDragenter: ($event) => dragOver.value = true,
                                      onDragleave: ($event) => dragOver.value = false,
                                      onDrop: ($event) => dragOver.value = false
                                    }, [
                                      createVNode("input", {
                                        type: "file",
                                        id: `cv-${posting.id}`,
                                        onChange: handleCvChange,
                                        accept: ".pdf,.doc,.docx",
                                        required: "",
                                        class: "cr-drop__input"
                                      }, null, 40, ["id"]),
                                      createVNode("span", { class: "cr-drop__icon" }, [
                                        createVNode(_sfc_main$2, {
                                          name: cvFileName.value ? "file" : "upload",
                                          size: 24,
                                          stroke: 1.6
                                        }, null, 8, ["name"])
                                      ]),
                                      createVNode("span", { class: "cr-drop__text" }, [
                                        createVNode("span", { class: "cr-drop__name" }, toDisplayString(cvFileName.value || content.value.chooseFile), 1),
                                        createVNode("small", { class: "cr-drop__hint" }, toDisplayString(content.value.cvHint), 1)
                                      ]),
                                      createVNode("span", {
                                        class: "cr-drop__mark",
                                        "aria-hidden": "true"
                                      }, [
                                        createVNode(_sfc_main$2, {
                                          name: cvFileName.value ? "check" : "plus",
                                          size: 18,
                                          stroke: 2
                                        }, null, 8, ["name"])
                                      ])
                                    ], 42, ["for", "onDragenter", "onDragleave", "onDrop"]),
                                    fieldErrors.value.cv ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "cr-field-error"
                                    }, toDisplayString(fieldErrors.value.cv), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                errorMessage.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "cr-error",
                                  role: "alert"
                                }, [
                                  createVNode(_sfc_main$2, {
                                    name: "info",
                                    size: 18,
                                    stroke: 1.8
                                  }),
                                  createVNode("span", null, toDisplayString(errorMessage.value), 1)
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "cr-apply__actions" }, [
                                  createVNode("button", {
                                    type: "submit",
                                    class: "bm-btn cr-submit",
                                    disabled: isSubmitting.value
                                  }, [
                                    createVNode("span", null, toDisplayString(isSubmitting.value ? content.value.submitting : content.value.submit), 1),
                                    createVNode("span", { class: "bm-btn__icon" }, [
                                      !isSubmitting.value ? (openBlock(), createBlock(_sfc_main$2, {
                                        key: 0,
                                        name: "arrow-up-right",
                                        stroke: 2
                                      })) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "cr-spinner",
                                        "aria-hidden": "true"
                                      }))
                                    ])
                                  ], 8, ["disabled"])
                                ])
                              ], 40, ["onSubmit"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ], 6);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "cr-empty",
                    "data-reveal": ""
                  }, [
                    createVNode("div", { class: "cr-empty__icon" }, [
                      createVNode(_sfc_main$2, {
                        name: "briefcase",
                        size: 40,
                        stroke: 1.3
                      })
                    ]),
                    createVNode("h2", { class: "bm-h2 cr-empty__title" }, toDisplayString(content.value.noPositionsTitle), 1),
                    createVNode("p", { class: "bm-lead bm-muted" }, toDisplayString(content.value.noPositionsText), 1)
                  ]))
                ])
              ]),
              createVNode("div", {
                class: "cr-ribbons",
                "aria-hidden": "true"
              }, [
                createVNode(Marquee, {
                  items: ribbonItems.value,
                  variant: "wine",
                  tilt: -2.4,
                  duration: 46
                }, null, 8, ["items"]),
                createVNode(Marquee, {
                  items: ribbonItems.value,
                  variant: "outline",
                  tilt: 1.8,
                  duration: 54,
                  reverse: ""
                }, null, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Careers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00838ea5"]]);
export {
  Careers as default
};
