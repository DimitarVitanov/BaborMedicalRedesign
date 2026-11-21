import { computed, ref, unref, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createSlots, createCommentVNode, Transition, withModifiers, withDirectives, vModelText, Fragment, renderList, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { usePage, useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-B_i8FHxn.js";
import { P as PageHero } from "./PageHero-DJ_0bjbt.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Footer-D-2r2JUh.js";
import { M as Marquee } from "./Marquee-DRBFwWuw.js";
import { R as RotatingBadge } from "./RotatingBadge-BD3v2tF1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    locations: Array,
    socialLinks: Object
  },
  setup(__props) {
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
    const jsonLd = computed(() => {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalBusiness",
            "@id": "https://babormedical.com/#organization",
            "name": "Babor Medical",
            "url": "https://babormedical.com",
            "logo": "https://babormedical.com/logo.webp",
            "telephone": "+389 75 340 933",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Skopje",
              "addressCountry": "MK"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Како да закажам термин во Babor Medical?" : "How to book an appointment at Babor Medical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Можете да закажете термин преку нашата контакт форма на веб страницата, преку телефон на +389 75 340 933 или преку нашите социјални мрежи." : "You can book an appointment through our contact form on the website, by phone at +389 75 340 933 or through our social media channels."
                }
              },
              {
                "@type": "Question",
                "name": locale.value === "mk" ? "Кое е работното време на Babor Medical?" : "What are the working hours of Babor Medical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale.value === "mk" ? "Babor Medical работи од понеделник до сабота. За точно работно време и достапни термини, контактирајте нè на +389 75 340 933." : "Babor Medical is open Monday to Saturday. For exact working hours and available appointments, contact us at +389 75 340 933."
                }
              }
            ]
          }
        ]
      });
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
    const submitForm = async () => {
      var _a;
      isSubmitting.value = true;
      errorMessage.value = "";
      try {
        const response = await fetch("/contact/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN": (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content")
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message
          })
        });
        const data = await response.json();
        if (data.success) {
          submitted.value = true;
          form.reset();
        } else {
          errorMessage.value = data.message || "Something went wrong. Please try again.";
        }
      } catch (error) {
        errorMessage.value = "Something went wrong. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };
    const pad = (n) => String(n).padStart(2, "0");
    const primaryLocation = computed(() => locations.value[0] || null);
    const ribbonServices = computed(() => services.value.filter((s) => s.value && s.value !== "other").map((s) => s.label));
    const ribbonContact = computed(() => {
      const words = [content.value.title, content.value.formTitle, content.value.followUs];
      return [...words, ...words];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-6e6e8553${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", seoDescription.value)} data-v-6e6e8553${_scopeId}><meta name="keywords"${ssrRenderAttr("content", locale.value === "mk" ? "Babor Medical, контакт, закажи термин, Скопје" : "Babor Medical, contact, book appointment, Skopje")} data-v-6e6e8553${_scopeId}><meta name="robots" content="index, follow" data-v-6e6e8553${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6e6e8553${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} data-v-6e6e8553${_scopeId}><meta property="og:type" content="website" data-v-6e6e8553${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-6e6e8553${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-6e6e8553${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} data-v-6e6e8553${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} data-v-6e6e8553${_scopeId}><meta name="twitter:image" content="https://babormedical.com/logo.webp" data-v-6e6e8553${_scopeId}><link rel="canonical" href="https://babormedical.com/contact" data-v-6e6e8553${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/contact?lang=en" data-v-6e6e8553${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/contact?lang=mk" data-v-6e6e8553${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/contact" data-v-6e6e8553${_scopeId}>`);
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
                content: "https://babormedical.com/logo.webp"
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: content.value.badge,
              title: content.value.title,
              subtitle: content.value.subtitle,
              crumb: locale.value === "mk" ? "Контакт" : "Contact",
              class: "ct-hero"
            }, createSlots({
              aside: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ct-art" aria-hidden="true" data-v-6e6e8553${_scopeId2}><div class="ct-art__arch" data-v-6e6e8553${_scopeId2}><span class="ct-art__line ct-art__line--1" data-v-6e6e8553${_scopeId2}></span><span class="ct-art__line ct-art__line--2" data-v-6e6e8553${_scopeId2}></span>`);
                  _push3(ssrRenderComponent(RotatingBadge, {
                    size: 184,
                    class: "ct-art__seal"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><span class="ct-art__chip ct-art__chip--pin" data-v-6e6e8553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "pin",
                    size: 22
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="ct-art__chip ct-art__chip--phone" data-v-6e6e8553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "phone",
                    size: 22
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="ct-art__chip ct-art__chip--mail" data-v-6e6e8553${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "mail",
                    size: 22
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "ct-art",
                      "aria-hidden": "true"
                    }, [
                      createVNode("div", { class: "ct-art__arch" }, [
                        createVNode("span", { class: "ct-art__line ct-art__line--1" }),
                        createVNode("span", { class: "ct-art__line ct-art__line--2" }),
                        createVNode(RotatingBadge, {
                          size: 184,
                          class: "ct-art__seal"
                        })
                      ]),
                      createVNode("span", { class: "ct-art__chip ct-art__chip--pin" }, [
                        createVNode(_sfc_main$2, {
                          name: "pin",
                          size: 22
                        })
                      ]),
                      createVNode("span", { class: "ct-art__chip ct-art__chip--phone" }, [
                        createVNode(_sfc_main$2, {
                          name: "phone",
                          size: 22
                        })
                      ]),
                      createVNode("span", { class: "ct-art__chip ct-art__chip--mail" }, [
                        createVNode(_sfc_main$2, {
                          name: "mail",
                          size: 22
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, [
              primaryLocation.value && (primaryLocation.value.phone || primaryLocation.value.email) ? {
                name: "default",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="ct-quick" data-v-6e6e8553${_scopeId2}>`);
                    if (primaryLocation.value.phone) {
                      _push3(`<a${ssrRenderAttr("href", `tel:${primaryLocation.value.phone}`)} class="bm-btn ct-quick__btn" data-v-6e6e8553${_scopeId2}><span data-v-6e6e8553${_scopeId2}>${ssrInterpolate(primaryLocation.value.phone)}</span><span class="bm-btn__icon" data-v-6e6e8553${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        name: "phone",
                        stroke: 1.8
                      }, null, _parent3, _scopeId2));
                      _push3(`</span></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (primaryLocation.value.email) {
                      _push3(`<a${ssrRenderAttr("href", `mailto:${primaryLocation.value.email}`)} class="bm-btn bm-btn--ghost ct-quick__btn ct-quick__btn--mail" data-v-6e6e8553${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        name: "mail",
                        size: 18,
                        stroke: 1.6
                      }, null, _parent3, _scopeId2));
                      _push3(`<span data-v-6e6e8553${_scopeId2}>${ssrInterpolate(primaryLocation.value.email)}</span></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "ct-quick" }, [
                        primaryLocation.value.phone ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: `tel:${primaryLocation.value.phone}`,
                          class: "bm-btn ct-quick__btn"
                        }, [
                          createVNode("span", null, toDisplayString(primaryLocation.value.phone), 1),
                          createVNode("span", { class: "bm-btn__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "phone",
                              stroke: 1.8
                            })
                          ])
                        ], 8, ["href"])) : createCommentVNode("", true),
                        primaryLocation.value.email ? (openBlock(), createBlock("a", {
                          key: 1,
                          href: `mailto:${primaryLocation.value.email}`,
                          class: "bm-btn bm-btn--ghost ct-quick__btn ct-quick__btn--mail"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "mail",
                            size: 18,
                            stroke: 1.6
                          }),
                          createVNode("span", null, toDisplayString(primaryLocation.value.email), 1)
                        ], 8, ["href"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(`<section class="ct-main bm-cream bm-sheet bm-section" data-v-6e6e8553${_scopeId}><div class="bm-container ct-main__grid" data-v-6e6e8553${_scopeId}><div class="ct-form" data-v-6e6e8553${_scopeId}><div class="ct-form__head" data-v-6e6e8553${_scopeId}><span class="bm-numeral ct-form__num" aria-hidden="true" data-v-6e6e8553${_scopeId}>01</span><h2 class="bm-h2 ct-form__title" data-v-6e6e8553${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              text: content.value.formTitle
            }, null, _parent2, _scopeId));
            _push2(`</h2></div>`);
            if (submitted.value) {
              _push2(`<div class="ct-success" data-reveal="scale" data-v-6e6e8553${_scopeId}><div class="ct-success__icon" data-v-6e6e8553${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "check",
                size: 30,
                stroke: 1.8
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="bm-h3" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.successTitle)}</h3><p class="bm-muted" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.successText)}</p></div>`);
            } else {
              _push2(`<form class="ct-form__form" data-v-6e6e8553${_scopeId}><div class="bm-field" data-reveal style="${ssrRenderStyle({ "--d": "0.05s" })}" data-v-6e6e8553${_scopeId}><label class="bm-label"${ssrRenderAttr("for", "name")} data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.name)}</label><input type="text" id="name" class="bm-input"${ssrRenderAttr("value", unref(form).name)} required${ssrRenderAttr("placeholder", content.value.name)} data-v-6e6e8553${_scopeId}></div><div class="ct-form__row" data-v-6e6e8553${_scopeId}><div class="bm-field" data-reveal style="${ssrRenderStyle({ "--d": "0.1s" })}" data-v-6e6e8553${_scopeId}><label class="bm-label"${ssrRenderAttr("for", "email")} data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.email)}</label><input type="email" id="email" class="bm-input"${ssrRenderAttr("value", unref(form).email)} required${ssrRenderAttr("placeholder", content.value.email)} data-v-6e6e8553${_scopeId}></div><div class="bm-field" data-reveal style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-6e6e8553${_scopeId}><label class="bm-label"${ssrRenderAttr("for", "phone")} data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.phone)}</label><input type="tel" id="phone" class="bm-input"${ssrRenderAttr("value", unref(form).phone)}${ssrRenderAttr("placeholder", content.value.phone)} data-v-6e6e8553${_scopeId}></div></div><div class="bm-field" data-reveal style="${ssrRenderStyle({ "--d": "0.2s" })}" data-v-6e6e8553${_scopeId}><label class="bm-label"${ssrRenderAttr("for", "service")} data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.service)}</label><select id="service" class="bm-input ct-select" data-v-6e6e8553${_scopeId}><!--[-->`);
              ssrRenderList(services.value, (service) => {
                _push2(`<option${ssrRenderAttr("value", service.value)} data-v-6e6e8553${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, service.value) : ssrLooseEqual(unref(form).service, service.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(service.label)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="bm-field" data-reveal style="${ssrRenderStyle({ "--d": "0.25s" })}" data-v-6e6e8553${_scopeId}><label class="bm-label"${ssrRenderAttr("for", "message")} data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.message)}</label><textarea id="message" class="bm-input" rows="5" required${ssrRenderAttr("placeholder", content.value.message)} data-v-6e6e8553${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div>`);
              if (errorMessage.value) {
                _push2(`<div class="ct-error" role="alert" data-v-6e6e8553${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "info",
                  size: 18,
                  stroke: 1.8
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-6e6e8553${_scopeId}>${ssrInterpolate(errorMessage.value)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="ct-form__actions" data-reveal style="${ssrRenderStyle({ "--d": "0.3s" })}" data-v-6e6e8553${_scopeId}><button type="submit" class="bm-btn bm-btn--wine ct-submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-6e6e8553${_scopeId}><span data-v-6e6e8553${_scopeId}>${ssrInterpolate(isSubmitting.value ? locale.value === "mk" ? "Се испраќа..." : "Sending..." : content.value.submit)}</span><span class="bm-btn__icon" data-v-6e6e8553${_scopeId}>`);
              if (!isSubmitting.value) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "arrow-up-right",
                  stroke: 2
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<span class="ct-spinner" aria-hidden="true" data-v-6e6e8553${_scopeId}></span>`);
              }
              _push2(`</span></button></div></form>`);
            }
            _push2(`</div><aside class="ct-info" data-reveal="right" style="${ssrRenderStyle({ "--d": "0.15s" })}" data-v-6e6e8553${_scopeId}><div class="ct-info__glow" aria-hidden="true" data-v-6e6e8553${_scopeId}></div><h2 class="ct-info__title" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.infoTitle)}</h2><!--[-->`);
            ssrRenderList(locations.value, (location, li) => {
              _push2(`<div class="ct-loc" data-v-6e6e8553${_scopeId}><div class="ct-loc__head" data-v-6e6e8553${_scopeId}><span class="ct-loc__num" aria-hidden="true" data-v-6e6e8553${_scopeId}>${ssrInterpolate(pad(li + 1))}</span><h3 class="ct-loc__name" data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.name)}</h3></div><div class="ct-loc__rows" data-v-6e6e8553${_scopeId}><div class="ct-row" data-v-6e6e8553${_scopeId}><span class="ct-row__icon" data-v-6e6e8553${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "pin",
                size: 18
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="ct-row__body" data-v-6e6e8553${_scopeId}><h4 class="ct-row__label" data-v-6e6e8553${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Адреса" : "Address")}</h4><p class="ct-row__value" data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.address)}</p></div></div>`);
              if (location.phone) {
                _push2(`<div class="ct-row" data-v-6e6e8553${_scopeId}><span class="ct-row__icon" data-v-6e6e8553${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "phone",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span><div class="ct-row__body" data-v-6e6e8553${_scopeId}><h4 class="ct-row__label" data-v-6e6e8553${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Телефон" : "Phone")}</h4><p data-v-6e6e8553${_scopeId}><a class="ct-big"${ssrRenderAttr("href", `tel:${location.phone}`)} data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.phone)}</a></p></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (location.email) {
                _push2(`<div class="ct-row" data-v-6e6e8553${_scopeId}><span class="ct-row__icon" data-v-6e6e8553${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "mail",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span><div class="ct-row__body" data-v-6e6e8553${_scopeId}><h4 class="ct-row__label" data-v-6e6e8553${_scopeId}>${ssrInterpolate(locale.value === "mk" ? "Е-пошта" : "Email")}</h4><p data-v-6e6e8553${_scopeId}><a class="ct-big"${ssrRenderAttr("href", `mailto:${location.email}`)} data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.email)}</a></p></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (location.show_working_hours) {
                _push2(`<div class="ct-row" data-v-6e6e8553${_scopeId}><span class="ct-row__icon" data-v-6e6e8553${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "clock",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span><div class="ct-row__body" data-v-6e6e8553${_scopeId}><h4 class="ct-row__label" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.workingHoursLabel)}</h4><div class="ct-hours" data-v-6e6e8553${_scopeId}><div class="ct-hours__row" data-v-6e6e8553${_scopeId}><span class="ct-hours__day" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.mondayFriday)}</span><span class="ct-hours__time" data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.working_hours_weekdays)}</span></div><div class="ct-hours__row" data-v-6e6e8553${_scopeId}><span class="ct-hours__day" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.saturday)}</span><span class="ct-hours__time" data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.working_hours_saturday)}</span></div><div class="ct-hours__row" data-v-6e6e8553${_scopeId}><span class="ct-hours__day" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.sunday)}</span><span class="ct-hours__time" data-v-6e6e8553${_scopeId}>${ssrInterpolate(location.working_hours_sunday)}</span></div></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--><div class="ct-social" data-v-6e6e8553${_scopeId}><h4 class="ct-row__label" data-v-6e6e8553${_scopeId}>${ssrInterpolate(content.value.followUs)}</h4><div class="ct-social__links" data-v-6e6e8553${_scopeId}><a href="https://facebook.com/babormedical" target="_blank" rel="noopener" aria-label="Facebook" data-v-6e6e8553${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "facebook",
              size: 19
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://instagram.com/babormedical" target="_blank" rel="noopener" aria-label="Instagram" data-v-6e6e8553${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "instagram",
              size: 19
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div></aside></div></section><div class="ct-ribbons" aria-hidden="true" data-v-6e6e8553${_scopeId}>`);
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonServices.value,
              variant: "wine",
              tilt: -2.6,
              duration: 44
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Marquee, {
              items: ribbonContact.value,
              variant: "outline",
              tilt: 2,
              duration: 52,
              reverse: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><section class="ct-map bm-dark" data-v-6e6e8553${_scopeId}><div class="bm-container" data-v-6e6e8553${_scopeId}><div class="ct-map__frame" data-reveal="scale" data-v-6e6e8553${_scopeId}><iframe src="https://maps.google.com/maps?q=East+Gate+Mall,+Skopje&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="400" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-6e6e8553${_scopeId}></iframe>`);
            if (primaryLocation.value) {
              _push2(`<div class="ct-map__card" data-v-6e6e8553${_scopeId}><span class="ct-map__pin" data-v-6e6e8553${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                name: "pin",
                size: 20,
                stroke: 1.7
              }, null, _parent2, _scopeId));
              _push2(`</span><span class="ct-map__text" data-v-6e6e8553${_scopeId}><span class="ct-map__name" data-v-6e6e8553${_scopeId}>${ssrInterpolate(primaryLocation.value.name)}</span><span class="ct-map__addr" data-v-6e6e8553${_scopeId}>${ssrInterpolate(primaryLocation.value.address)}</span></span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: content.value.badge,
                title: content.value.title,
                subtitle: content.value.subtitle,
                crumb: locale.value === "mk" ? "Контакт" : "Contact",
                class: "ct-hero"
              }, createSlots({
                aside: withCtx(() => [
                  createVNode("div", {
                    class: "ct-art",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", { class: "ct-art__arch" }, [
                      createVNode("span", { class: "ct-art__line ct-art__line--1" }),
                      createVNode("span", { class: "ct-art__line ct-art__line--2" }),
                      createVNode(RotatingBadge, {
                        size: 184,
                        class: "ct-art__seal"
                      })
                    ]),
                    createVNode("span", { class: "ct-art__chip ct-art__chip--pin" }, [
                      createVNode(_sfc_main$2, {
                        name: "pin",
                        size: 22
                      })
                    ]),
                    createVNode("span", { class: "ct-art__chip ct-art__chip--phone" }, [
                      createVNode(_sfc_main$2, {
                        name: "phone",
                        size: 22
                      })
                    ]),
                    createVNode("span", { class: "ct-art__chip ct-art__chip--mail" }, [
                      createVNode(_sfc_main$2, {
                        name: "mail",
                        size: 22
                      })
                    ])
                  ])
                ]),
                _: 2
              }, [
                primaryLocation.value && (primaryLocation.value.phone || primaryLocation.value.email) ? {
                  name: "default",
                  fn: withCtx(() => [
                    createVNode("div", { class: "ct-quick" }, [
                      primaryLocation.value.phone ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: `tel:${primaryLocation.value.phone}`,
                        class: "bm-btn ct-quick__btn"
                      }, [
                        createVNode("span", null, toDisplayString(primaryLocation.value.phone), 1),
                        createVNode("span", { class: "bm-btn__icon" }, [
                          createVNode(_sfc_main$2, {
                            name: "phone",
                            stroke: 1.8
                          })
                        ])
                      ], 8, ["href"])) : createCommentVNode("", true),
                      primaryLocation.value.email ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: `mailto:${primaryLocation.value.email}`,
                        class: "bm-btn bm-btn--ghost ct-quick__btn ct-quick__btn--mail"
                      }, [
                        createVNode(_sfc_main$2, {
                          name: "mail",
                          size: 18,
                          stroke: 1.6
                        }),
                        createVNode("span", null, toDisplayString(primaryLocation.value.email), 1)
                      ], 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["eyebrow", "title", "subtitle", "crumb"]),
              createVNode("section", { class: "ct-main bm-cream bm-sheet bm-section" }, [
                createVNode("div", { class: "bm-container ct-main__grid" }, [
                  createVNode("div", { class: "ct-form" }, [
                    createVNode("div", { class: "ct-form__head" }, [
                      createVNode("span", {
                        class: "bm-numeral ct-form__num",
                        "aria-hidden": "true"
                      }, "01"),
                      createVNode("h2", { class: "bm-h2 ct-form__title" }, [
                        createVNode(_sfc_main$3, {
                          text: content.value.formTitle
                        }, null, 8, ["text"])
                      ])
                    ]),
                    createVNode(Transition, {
                      name: "ct-swap",
                      mode: "out-in"
                    }, {
                      default: withCtx(() => [
                        submitted.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "ct-success",
                          "data-reveal": "scale"
                        }, [
                          createVNode("div", { class: "ct-success__icon" }, [
                            createVNode(_sfc_main$2, {
                              name: "check",
                              size: 30,
                              stroke: 1.8
                            })
                          ]),
                          createVNode("h3", { class: "bm-h3" }, toDisplayString(content.value.successTitle), 1),
                          createVNode("p", { class: "bm-muted" }, toDisplayString(content.value.successText), 1)
                        ])) : (openBlock(), createBlock("form", {
                          key: 1,
                          onSubmit: withModifiers(submitForm, ["prevent"]),
                          class: "ct-form__form"
                        }, [
                          createVNode("div", {
                            class: "bm-field",
                            "data-reveal": "",
                            style: { "--d": "0.05s" }
                          }, [
                            createVNode("label", {
                              class: "bm-label",
                              for: "name"
                            }, toDisplayString(content.value.name), 1),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "name",
                              class: "bm-input",
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: "",
                              placeholder: content.value.name
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vModelText, unref(form).name]
                            ])
                          ]),
                          createVNode("div", { class: "ct-form__row" }, [
                            createVNode("div", {
                              class: "bm-field",
                              "data-reveal": "",
                              style: { "--d": "0.1s" }
                            }, [
                              createVNode("label", {
                                class: "bm-label",
                                for: "email"
                              }, toDisplayString(content.value.email), 1),
                              withDirectives(createVNode("input", {
                                type: "email",
                                id: "email",
                                class: "bm-input",
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                required: "",
                                placeholder: content.value.email
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, unref(form).email]
                              ])
                            ]),
                            createVNode("div", {
                              class: "bm-field",
                              "data-reveal": "",
                              style: { "--d": "0.15s" }
                            }, [
                              createVNode("label", {
                                class: "bm-label",
                                for: "phone"
                              }, toDisplayString(content.value.phone), 1),
                              withDirectives(createVNode("input", {
                                type: "tel",
                                id: "phone",
                                class: "bm-input",
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                placeholder: content.value.phone
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, unref(form).phone]
                              ])
                            ])
                          ]),
                          createVNode("div", {
                            class: "bm-field",
                            "data-reveal": "",
                            style: { "--d": "0.2s" }
                          }, [
                            createVNode("label", {
                              class: "bm-label",
                              for: "service"
                            }, toDisplayString(content.value.service), 1),
                            withDirectives(createVNode("select", {
                              id: "service",
                              class: "bm-input ct-select",
                              "onUpdate:modelValue": ($event) => unref(form).service = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(services.value, (service) => {
                                return openBlock(), createBlock("option", {
                                  key: service.value,
                                  value: service.value
                                }, toDisplayString(service.label), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).service]
                            ])
                          ]),
                          createVNode("div", {
                            class: "bm-field",
                            "data-reveal": "",
                            style: { "--d": "0.25s" }
                          }, [
                            createVNode("label", {
                              class: "bm-label",
                              for: "message"
                            }, toDisplayString(content.value.message), 1),
                            withDirectives(createVNode("textarea", {
                              id: "message",
                              class: "bm-input",
                              "onUpdate:modelValue": ($event) => unref(form).message = $event,
                              rows: "5",
                              required: "",
                              placeholder: content.value.message
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vModelText, unref(form).message]
                            ])
                          ]),
                          errorMessage.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ct-error",
                            role: "alert"
                          }, [
                            createVNode(_sfc_main$2, {
                              name: "info",
                              size: 18,
                              stroke: 1.8
                            }),
                            createVNode("span", null, toDisplayString(errorMessage.value), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("div", {
                            class: "ct-form__actions",
                            "data-reveal": "",
                            style: { "--d": "0.3s" }
                          }, [
                            createVNode("button", {
                              type: "submit",
                              class: "bm-btn bm-btn--wine ct-submit",
                              disabled: isSubmitting.value
                            }, [
                              createVNode("span", null, toDisplayString(isSubmitting.value ? locale.value === "mk" ? "Се испраќа..." : "Sending..." : content.value.submit), 1),
                              createVNode("span", { class: "bm-btn__icon" }, [
                                !isSubmitting.value ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  name: "arrow-up-right",
                                  stroke: 2
                                })) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "ct-spinner",
                                  "aria-hidden": "true"
                                }))
                              ])
                            ], 8, ["disabled"])
                          ])
                        ], 32))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("aside", {
                    class: "ct-info",
                    "data-reveal": "right",
                    style: { "--d": "0.15s" }
                  }, [
                    createVNode("div", {
                      class: "ct-info__glow",
                      "aria-hidden": "true"
                    }),
                    createVNode("h2", { class: "ct-info__title" }, toDisplayString(content.value.infoTitle), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(locations.value, (location, li) => {
                      return openBlock(), createBlock("div", {
                        key: location.id,
                        class: "ct-loc"
                      }, [
                        createVNode("div", { class: "ct-loc__head" }, [
                          createVNode("span", {
                            class: "ct-loc__num",
                            "aria-hidden": "true"
                          }, toDisplayString(pad(li + 1)), 1),
                          createVNode("h3", { class: "ct-loc__name" }, toDisplayString(location.name), 1)
                        ]),
                        createVNode("div", { class: "ct-loc__rows" }, [
                          createVNode("div", { class: "ct-row" }, [
                            createVNode("span", { class: "ct-row__icon" }, [
                              createVNode(_sfc_main$2, {
                                name: "pin",
                                size: 18
                              })
                            ]),
                            createVNode("div", { class: "ct-row__body" }, [
                              createVNode("h4", { class: "ct-row__label" }, toDisplayString(locale.value === "mk" ? "Адреса" : "Address"), 1),
                              createVNode("p", { class: "ct-row__value" }, toDisplayString(location.address), 1)
                            ])
                          ]),
                          location.phone ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ct-row"
                          }, [
                            createVNode("span", { class: "ct-row__icon" }, [
                              createVNode(_sfc_main$2, {
                                name: "phone",
                                size: 18
                              })
                            ]),
                            createVNode("div", { class: "ct-row__body" }, [
                              createVNode("h4", { class: "ct-row__label" }, toDisplayString(locale.value === "mk" ? "Телефон" : "Phone"), 1),
                              createVNode("p", null, [
                                createVNode("a", {
                                  class: "ct-big",
                                  href: `tel:${location.phone}`
                                }, toDisplayString(location.phone), 9, ["href"])
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          location.email ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "ct-row"
                          }, [
                            createVNode("span", { class: "ct-row__icon" }, [
                              createVNode(_sfc_main$2, {
                                name: "mail",
                                size: 18
                              })
                            ]),
                            createVNode("div", { class: "ct-row__body" }, [
                              createVNode("h4", { class: "ct-row__label" }, toDisplayString(locale.value === "mk" ? "Е-пошта" : "Email"), 1),
                              createVNode("p", null, [
                                createVNode("a", {
                                  class: "ct-big",
                                  href: `mailto:${location.email}`
                                }, toDisplayString(location.email), 9, ["href"])
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          location.show_working_hours ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "ct-row"
                          }, [
                            createVNode("span", { class: "ct-row__icon" }, [
                              createVNode(_sfc_main$2, {
                                name: "clock",
                                size: 18
                              })
                            ]),
                            createVNode("div", { class: "ct-row__body" }, [
                              createVNode("h4", { class: "ct-row__label" }, toDisplayString(content.value.workingHoursLabel), 1),
                              createVNode("div", { class: "ct-hours" }, [
                                createVNode("div", { class: "ct-hours__row" }, [
                                  createVNode("span", { class: "ct-hours__day" }, toDisplayString(content.value.mondayFriday), 1),
                                  createVNode("span", { class: "ct-hours__time" }, toDisplayString(location.working_hours_weekdays), 1)
                                ]),
                                createVNode("div", { class: "ct-hours__row" }, [
                                  createVNode("span", { class: "ct-hours__day" }, toDisplayString(content.value.saturday), 1),
                                  createVNode("span", { class: "ct-hours__time" }, toDisplayString(location.working_hours_saturday), 1)
                                ]),
                                createVNode("div", { class: "ct-hours__row" }, [
                                  createVNode("span", { class: "ct-hours__day" }, toDisplayString(content.value.sunday), 1),
                                  createVNode("span", { class: "ct-hours__time" }, toDisplayString(location.working_hours_sunday), 1)
                                ])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "ct-social" }, [
                      createVNode("h4", { class: "ct-row__label" }, toDisplayString(content.value.followUs), 1),
                      createVNode("div", { class: "ct-social__links" }, [
                        createVNode("a", {
                          href: "https://facebook.com/babormedical",
                          target: "_blank",
                          rel: "noopener",
                          "aria-label": "Facebook"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "facebook",
                            size: 19
                          })
                        ]),
                        createVNode("a", {
                          href: "https://instagram.com/babormedical",
                          target: "_blank",
                          rel: "noopener",
                          "aria-label": "Instagram"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "instagram",
                            size: 19
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                class: "ct-ribbons",
                "aria-hidden": "true"
              }, [
                createVNode(Marquee, {
                  items: ribbonServices.value,
                  variant: "wine",
                  tilt: -2.6,
                  duration: 44
                }, null, 8, ["items"]),
                createVNode(Marquee, {
                  items: ribbonContact.value,
                  variant: "outline",
                  tilt: 2,
                  duration: 52,
                  reverse: ""
                }, null, 8, ["items"])
              ]),
              createVNode("section", { class: "ct-map bm-dark" }, [
                createVNode("div", { class: "bm-container" }, [
                  createVNode("div", {
                    class: "ct-map__frame",
                    "data-reveal": "scale"
                  }, [
                    createVNode("iframe", {
                      src: "https://maps.google.com/maps?q=East+Gate+Mall,+Skopje&t=&z=15&ie=UTF8&iwloc=&output=embed",
                      width: "100%",
                      height: "400",
                      style: { "border": "0" },
                      allowfullscreen: "",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade"
                    }),
                    primaryLocation.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "ct-map__card"
                    }, [
                      createVNode("span", { class: "ct-map__pin" }, [
                        createVNode(_sfc_main$2, {
                          name: "pin",
                          size: 20,
                          stroke: 1.7
                        })
                      ]),
                      createVNode("span", { class: "ct-map__text" }, [
                        createVNode("span", { class: "ct-map__name" }, toDisplayString(primaryLocation.value.name), 1),
                        createVNode("span", { class: "ct-map__addr" }, toDisplayString(primaryLocation.value.address), 1)
                      ])
                    ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e6e8553"]]);
export {
  Contact as default
};
