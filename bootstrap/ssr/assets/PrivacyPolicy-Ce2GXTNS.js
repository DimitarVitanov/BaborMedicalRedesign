import { computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { u as useScrollAnimation, N as Navbar, F as Footer } from "./useScrollAnimation-DxAAWq3P.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnimation();
    const page = usePage();
    const locale = computed(() => page.props.locale || "en");
    const seoTitle = computed(() => {
      return locale.value === "mk" ? "Политика за приватност - Babor Medical" : "Privacy Policy - Babor Medical";
    });
    const companyInfo = {
      name: "Торзо Велнес ДООЕЛ",
      address: "Ул. Илинден бр.74",
      embs: "6234992",
      edb: "4030007637200",
      phone: "+389 75 340 933",
      email: "torzo.wellness@yahoo.com"
    };
    const contentMk = {
      title: "Политика за приватност",
      subtitle: "Вашата приватност е важна за нас",
      lastUpdated: "Последно ажурирано: Февруари 2026",
      sections: [
        {
          title: "1. Основни информации",
          content: `Оваа веб-страница (babormedical.com) е во сопственост и управување на:

Име на фирма: ${companyInfo.name}
Адреса: ${companyInfo.address}
ЕМБС: ${companyInfo.embs}
ЕДБ: ${companyInfo.edb}
Телефон: ${companyInfo.phone}
Е-пошта: ${companyInfo.email}

Фирмата е контролор на лични податоци согласно Законот за заштита на лични податоци.`
        },
        {
          title: "2. Кои податоци ги собираме",
          content: `Преку оваа веб-страница можеме да ги собираме следните лични податоци:`,
          list: [
            "Име и презиме",
            "Телефонски број",
            "Е-пошта",
            "Пораки испратени преку контакт форма",
            "Податоци за закажување термин",
            "IP адреса",
            "Податоци за користење на веб-страницата"
          ]
        },
        {
          title: "3. За што ги користиме податоците",
          content: `Вашите податоци се користат исклучиво за:`,
          list: [
            "Контакт со корисници",
            "Закажување и потврда на термини",
            "Одговор на прашања",
            "Подобрување на услугите",
            "Внатрешна статистика",
            "Законски обврски"
          ]
        },
        {
          title: "4. Споделување со трети страни",
          content: `Податоците може да се споделат само со:`,
          list: [
            "IT провајдери",
            "Хостинг компании",
            "Платформи за аналитика (пример: Google Analytics)",
            "Државни органи кога тоа е законски побарано"
          ],
          footer: "Податоците не се продаваат и не се злоупотребуваат."
        },
        {
          title: "5. Заштита на податоците",
          content: `Фирмата применува соодветни технички и организациски мерки за заштита на податоците од:`,
          list: [
            "Неовластен пристап",
            "Губење",
            "Злоупотреба",
            "Уништување"
          ]
        },
        {
          title: "6. Колку долго ги чуваме податоците",
          content: `Податоците се чуваат онолку долго колку што е потребно за целите за кои се собрани, или согласно закон.`
        },
        {
          title: "7. Права на корисниците",
          content: `Корисниците имаат право да:`,
          list: [
            "Побараат увид",
            "Корекција",
            "Бришење",
            "Ограничување на обработка",
            "Приговор на обработка"
          ],
          footer: `Барањата се доставуваат на: ${companyInfo.email}`
        },
        {
          title: "8. Промени на политиката",
          content: `Фирмата го задржува правото на измена на оваа политика во секое време.`
        },
        {
          title: "9. Контакт",
          content: `За прашања поврзани со приватноста:`,
          contact: true
        }
      ]
    };
    const contentEn = {
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us",
      lastUpdated: "Last updated: February 2026",
      sections: [
        {
          title: "1. General Information",
          content: `This website (babormedical.com) is owned and operated by:

Company Name: ${companyInfo.name}
Address: ${companyInfo.address}
Registration No.: ${companyInfo.embs}
Tax ID: ${companyInfo.edb}
Phone: ${companyInfo.phone}
Email: ${companyInfo.email}

The company acts as the Data Controller.`
        },
        {
          title: "2. Data We Collect",
          content: `We may collect the following personal data:`,
          list: [
            "Name and surname",
            "Phone number",
            "Email address",
            "Messages submitted via contact forms",
            "Appointment booking details",
            "IP address",
            "Website usage data"
          ]
        },
        {
          title: "3. Purpose of Data Processing",
          content: `We process personal data for:`,
          list: [
            "User communication",
            "Appointment scheduling",
            "Customer support",
            "Service improvement",
            "Internal analytics",
            "Legal compliance"
          ]
        },
        {
          title: "4. Data Sharing",
          content: `Data may be shared only with:`,
          list: [
            "IT providers",
            "Hosting companies",
            "Analytics platforms (e.g., Google Analytics)",
            "Public authorities when legally required"
          ],
          footer: "We do not sell personal data."
        },
        {
          title: "5. Data Security",
          content: `We apply appropriate technical and organizational measures to protect personal data from:`,
          list: [
            "Unauthorized access",
            "Loss",
            "Misuse",
            "Destruction"
          ]
        },
        {
          title: "6. Data Retention",
          content: `Data is retained only for as long as necessary to fulfill its purpose or legal obligations.`
        },
        {
          title: "7. User Rights",
          content: `Users have the right to:`,
          list: [
            "Access their data",
            "Rectify incorrect data",
            "Request deletion",
            "Restrict processing",
            "Object to processing"
          ],
          footer: `Requests can be sent to: ${companyInfo.email}`
        },
        {
          title: "8. Policy Updates",
          content: `We reserve the right to update this policy at any time.`
        },
        {
          title: "9. Contact",
          content: `For privacy-related inquiries:`,
          contact: true
        }
      ]
    };
    const content = computed(() => locale.value === "mk" ? contentMk : contentEn);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-ddb2f345${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", content.value.subtitle)} data-v-ddb2f345${_scopeId}><meta name="robots" content="index, follow" data-v-ddb2f345${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-ddb2f345${_scopeId}><meta property="og:description"${ssrRenderAttr("content", content.value.subtitle)} data-v-ddb2f345${_scopeId}><meta property="og:image" content="/logo.webp" data-v-ddb2f345${_scopeId}><meta property="og:type" content="website" data-v-ddb2f345${_scopeId}><link rel="canonical" href="https://babormedical.com/privacy-policy" data-v-ddb2f345${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/privacy-policy?lang=en" data-v-ddb2f345${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/privacy-policy?lang=mk" data-v-ddb2f345${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/privacy-policy" data-v-ddb2f345${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(seoTitle.value), 1),
              createVNode("meta", {
                name: "description",
                content: content.value.subtitle
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
                content: content.value.subtitle
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: "/logo.webp"
              }),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://babormedical.com/privacy-policy"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: "https://babormedical.com/privacy-policy?lang=en"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "mk",
                href: "https://babormedical.com/privacy-policy?lang=mk"
              }),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: "https://babormedical.com/privacy-policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-wrapper" data-v-ddb2f345>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<section class="privacy-hero" data-v-ddb2f345><div class="container" data-v-ddb2f345><div class="hero-content fade-in-up" data-v-ddb2f345><span class="section-badge" data-v-ddb2f345>${ssrInterpolate(locale.value === "mk" ? "ПРАВНИ ИНФОРМАЦИИ" : "LEGAL")}</span><h1 class="hero-title" data-v-ddb2f345>${ssrInterpolate(content.value.title)}</h1><p class="hero-subtitle" data-v-ddb2f345>${ssrInterpolate(content.value.subtitle)}</p><p class="last-updated" data-v-ddb2f345>${ssrInterpolate(content.value.lastUpdated)}</p></div></div></section><section class="privacy-content" data-v-ddb2f345><div class="container" data-v-ddb2f345><div class="content-wrapper" data-v-ddb2f345><!--[-->`);
      ssrRenderList(content.value.sections, (section, index) => {
        _push(`<div class="${ssrRenderClass([`stagger-${index % 4 + 1}`, "policy-section fade-in-up"])}" data-v-ddb2f345><h2 class="section-title" data-v-ddb2f345>${ssrInterpolate(section.title)}</h2><div class="section-content" data-v-ddb2f345><p class="section-text" data-v-ddb2f345>${section.content.replace(/\n/g, "<br>") ?? ""}</p>`);
        if (section.list) {
          _push(`<ul class="section-list" data-v-ddb2f345><!--[-->`);
          ssrRenderList(section.list, (item, i) => {
            _push(`<li data-v-ddb2f345>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (section.footer) {
          _push(`<p class="section-footer" data-v-ddb2f345>${ssrInterpolate(section.footer)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (section.contact) {
          _push(`<div class="contact-info" data-v-ddb2f345><a${ssrRenderAttr("href", `mailto:${companyInfo.email}`)} class="contact-link" data-v-ddb2f345><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ddb2f345><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-ddb2f345></path><polyline points="22,6 12,13 2,6" data-v-ddb2f345></polyline></svg> ${ssrInterpolate(companyInfo.email)}</a><a${ssrRenderAttr("href", `tel:${companyInfo.phone}`)} class="contact-link" data-v-ddb2f345><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ddb2f345><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-ddb2f345></path></svg> ${ssrInterpolate(companyInfo.phone)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ddb2f345"]]);
export {
  PrivacyPolicy as default
};
