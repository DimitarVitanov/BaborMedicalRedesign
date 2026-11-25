import { computed, useId, ref, onMounted, onUnmounted, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./useInView-BRbHwAyL.js";
import { P as PageHero } from "./PageHero-weEXGCUL.js";
import { _ as _sfc_main$2 } from "./Footer-Dygre8wB.js";
import { R as RotatingBadge } from "./RotatingBadge-DteQ512n.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
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
    const heroTitle = computed(() => {
      const words = String(content.value.title || "").trim().split(/\s+/).filter(Boolean);
      if (words.length < 2) return { main: words.join(" "), accent: "" };
      return { main: words.slice(0, -1).join(" "), accent: words[words.length - 1] };
    });
    const titleParts = (title) => {
      const m = String(title || "").match(/^(\d+\.)\s+(.*)$/);
      return m ? { num: m[1], text: m[2] } : { num: "", text: title };
    };
    const pad = (n) => String(n).padStart(2, "0");
    const anchorId = (index) => `policy-${index + 1}`;
    const tocLabel = computed(() => locale.value === "mk" ? "Содржина" : "Contents");
    const tocId = useId();
    const tocOpen = ref(false);
    const activeSection = ref(0);
    const tocEl = ref(null);
    const docEl = ref(null);
    let raf = 0;
    const updateActive = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let idx = 0;
      content.value.sections.forEach((_, i) => {
        const el = document.getElementById(anchorId(i));
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      activeSection.value = idx;
      if (docEl.value && tocEl.value) {
        const r = docEl.value.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (line - r.top) / Math.max(1, r.height - line * 0.5)));
        tocEl.value.style.setProperty("--pp-p", p.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateActive);
    };
    const goTo = async (event, index) => {
      if (!document.getElementById(anchorId(index))) return;
      event.preventDefault();
      tocOpen.value = false;
      await nextTick();
      const el = document.getElementById(anchorId(index));
      const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", `#${anchorId(index)}`);
    };
    onMounted(() => {
      updateActive();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-703048fe${_scopeId}>${ssrInterpolate(seoTitle.value)}</title><meta name="description"${ssrRenderAttr("content", content.value.subtitle)} data-v-703048fe${_scopeId}><meta name="robots" content="index, follow" data-v-703048fe${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} data-v-703048fe${_scopeId}><meta property="og:description"${ssrRenderAttr("content", content.value.subtitle)} data-v-703048fe${_scopeId}><meta property="og:image" content="https://babormedical.com/logo.webp" data-v-703048fe${_scopeId}><meta property="og:type" content="website" data-v-703048fe${_scopeId}><link rel="canonical" href="https://babormedical.com/privacy-policy" data-v-703048fe${_scopeId}><link rel="alternate" hreflang="en" href="https://babormedical.com/privacy-policy?lang=en" data-v-703048fe${_scopeId}><link rel="alternate" hreflang="mk" href="https://babormedical.com/privacy-policy?lang=mk" data-v-703048fe${_scopeId}><link rel="alternate" hreflang="x-default" href="https://babormedical.com/privacy-policy" data-v-703048fe${_scopeId}>`);
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
                content: "https://babormedical.com/logo.webp"
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageHero, {
              eyebrow: locale.value === "mk" ? "ПРАВНИ ИНФОРМАЦИИ" : "LEGAL",
              title: heroTitle.value.main,
              accent: heroTitle.value.accent,
              subtitle: content.value.subtitle,
              crumb: content.value.title,
              align: "center",
              compact: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="pp-updated" data-v-703048fe${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    name: "clock",
                    size: 16,
                    stroke: 1.6
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-703048fe${_scopeId2}>${ssrInterpolate(content.value.lastUpdated)}</span></p>`);
                } else {
                  return [
                    createVNode("p", { class: "pp-updated" }, [
                      createVNode(_sfc_main$2, {
                        name: "clock",
                        size: 16,
                        stroke: 1.6
                      }),
                      createVNode("span", null, toDisplayString(content.value.lastUpdated), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="pp-doc bm-cream bm-sheet" data-v-703048fe${_scopeId}><div class="bm-container pp-doc__grid" data-v-703048fe${_scopeId}><aside class="pp-toc" data-v-703048fe${_scopeId}><div class="pp-toc__inner" data-v-703048fe${_scopeId}><button type="button" class="pp-toc__toggle"${ssrRenderAttr("aria-expanded", tocOpen.value ? "true" : "false")}${ssrRenderAttr("aria-controls", unref(tocId))} data-v-703048fe${_scopeId}><span class="bm-eyebrow" data-v-703048fe${_scopeId}>${ssrInterpolate(tocLabel.value)}</span><span class="pp-toc__chev" aria-hidden="true" data-v-703048fe${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "chevron-down",
              size: 18,
              stroke: 1.8
            }, null, _parent2, _scopeId));
            _push2(`</span></button><nav${ssrRenderAttr("id", unref(tocId))} class="${ssrRenderClass([{ "is-open": tocOpen.value }, "pp-toc__nav"])}"${ssrRenderAttr("aria-label", tocLabel.value)} data-v-703048fe${_scopeId}><ol class="pp-toc__list" data-v-703048fe${_scopeId}><!--[-->`);
            ssrRenderList(content.value.sections, (section, index) => {
              _push2(`<li data-v-703048fe${_scopeId}><a${ssrRenderAttr("href", `#${anchorId(index)}`)} class="${ssrRenderClass([{ "is-active": activeSection.value === index }, "pp-toc__link"])}"${ssrRenderAttr("aria-current", activeSection.value === index ? "location" : null)} data-v-703048fe${_scopeId}><span class="pp-toc__n" data-v-703048fe${_scopeId}>${ssrInterpolate(pad(index + 1))}</span><span class="pp-toc__t" data-v-703048fe${_scopeId}>${ssrInterpolate(titleParts(section.title).text)}</span></a></li>`);
            });
            _push2(`<!--]--></ol><span class="pp-toc__track" aria-hidden="true" data-v-703048fe${_scopeId}><span data-v-703048fe${_scopeId}></span></span></nav></div></aside><div class="pp-doc__body" data-v-703048fe${_scopeId}><!--[-->`);
            ssrRenderList(content.value.sections, (section, index) => {
              _push2(`<article${ssrRenderAttr("id", anchorId(index))} class="pp-sec" data-reveal data-v-703048fe${_scopeId}><h2 class="pp-sec__title" data-v-703048fe${_scopeId}>`);
              if (titleParts(section.title).num) {
                _push2(`<span class="pp-sec__num" data-v-703048fe${_scopeId}>${ssrInterpolate(titleParts(section.title).num)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${ssrInterpolate(titleParts(section.title).num ? " " : "")}<span class="pp-sec__name" data-v-703048fe${_scopeId}>${ssrInterpolate(titleParts(section.title).text)}</span></h2><div class="pp-sec__content" data-v-703048fe${_scopeId}><p class="pp-sec__text" data-v-703048fe${_scopeId}>${section.content.replace(/\n/g, "<br>") ?? ""}</p>`);
              if (section.list) {
                _push2(`<ul class="bm-list pp-sec__list" data-v-703048fe${_scopeId}><!--[-->`);
                ssrRenderList(section.list, (item, i) => {
                  _push2(`<li data-v-703048fe${_scopeId}>${ssrInterpolate(item)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              if (section.footer) {
                _push2(`<p class="pp-sec__note" data-v-703048fe${_scopeId}>${ssrInterpolate(section.footer)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (section.contact) {
                _push2(`<div class="pp-contact" data-v-703048fe${_scopeId}><a${ssrRenderAttr("href", `mailto:${companyInfo.email}`)} class="pp-contact__link" data-v-703048fe${_scopeId}><span class="pp-contact__icon" data-v-703048fe${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "mail",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span><span class="pp-contact__value" data-v-703048fe${_scopeId}>${ssrInterpolate(companyInfo.email)}</span><span class="pp-contact__arrow" data-v-703048fe${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "arrow-up-right",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span></a><a${ssrRenderAttr("href", `tel:${companyInfo.phone}`)} class="pp-contact__link" data-v-703048fe${_scopeId}><span class="pp-contact__icon" data-v-703048fe${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "phone",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span><span class="pp-contact__value" data-v-703048fe${_scopeId}>${ssrInterpolate(companyInfo.phone)}</span><span class="pp-contact__arrow" data-v-703048fe${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: "arrow-up-right",
                  size: 18
                }, null, _parent2, _scopeId));
                _push2(`</span></a></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></article>`);
            });
            _push2(`<!--]--><div class="pp-seal" data-reveal="scale" data-v-703048fe${_scopeId}>`);
            _push2(ssrRenderComponent(RotatingBadge, { size: 132 }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode(PageHero, {
                eyebrow: locale.value === "mk" ? "ПРАВНИ ИНФОРМАЦИИ" : "LEGAL",
                title: heroTitle.value.main,
                accent: heroTitle.value.accent,
                subtitle: content.value.subtitle,
                crumb: content.value.title,
                align: "center",
                compact: ""
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "pp-updated" }, [
                    createVNode(_sfc_main$2, {
                      name: "clock",
                      size: 16,
                      stroke: 1.6
                    }),
                    createVNode("span", null, toDisplayString(content.value.lastUpdated), 1)
                  ])
                ]),
                _: 1
              }, 8, ["eyebrow", "title", "accent", "subtitle", "crumb"]),
              createVNode("section", { class: "pp-doc bm-cream bm-sheet" }, [
                createVNode("div", { class: "bm-container pp-doc__grid" }, [
                  createVNode("aside", {
                    ref_key: "tocEl",
                    ref: tocEl,
                    class: "pp-toc"
                  }, [
                    createVNode("div", { class: "pp-toc__inner" }, [
                      createVNode("button", {
                        type: "button",
                        class: "pp-toc__toggle",
                        "aria-expanded": tocOpen.value ? "true" : "false",
                        "aria-controls": unref(tocId),
                        onClick: ($event) => tocOpen.value = !tocOpen.value
                      }, [
                        createVNode("span", { class: "bm-eyebrow" }, toDisplayString(tocLabel.value), 1),
                        createVNode("span", {
                          class: "pp-toc__chev",
                          "aria-hidden": "true"
                        }, [
                          createVNode(_sfc_main$2, {
                            name: "chevron-down",
                            size: 18,
                            stroke: 1.8
                          })
                        ])
                      ], 8, ["aria-expanded", "aria-controls", "onClick"]),
                      createVNode("nav", {
                        id: unref(tocId),
                        class: ["pp-toc__nav", { "is-open": tocOpen.value }],
                        "aria-label": tocLabel.value
                      }, [
                        createVNode("ol", { class: "pp-toc__list" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(content.value.sections, (section, index) => {
                            return openBlock(), createBlock("li", { key: index }, [
                              createVNode("a", {
                                href: `#${anchorId(index)}`,
                                class: ["pp-toc__link", { "is-active": activeSection.value === index }],
                                "aria-current": activeSection.value === index ? "location" : null,
                                onClick: ($event) => goTo($event, index)
                              }, [
                                createVNode("span", { class: "pp-toc__n" }, toDisplayString(pad(index + 1)), 1),
                                createVNode("span", { class: "pp-toc__t" }, toDisplayString(titleParts(section.title).text), 1)
                              ], 10, ["href", "aria-current", "onClick"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("span", {
                          class: "pp-toc__track",
                          "aria-hidden": "true"
                        }, [
                          createVNode("span")
                        ])
                      ], 10, ["id", "aria-label"])
                    ])
                  ], 512),
                  createVNode("div", {
                    ref_key: "docEl",
                    ref: docEl,
                    class: "pp-doc__body"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(content.value.sections, (section, index) => {
                      return openBlock(), createBlock("article", {
                        key: index,
                        id: anchorId(index),
                        class: "pp-sec",
                        "data-reveal": ""
                      }, [
                        createVNode("h2", { class: "pp-sec__title" }, [
                          titleParts(section.title).num ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "pp-sec__num"
                          }, toDisplayString(titleParts(section.title).num), 1)) : createCommentVNode("", true),
                          createTextVNode(toDisplayString(titleParts(section.title).num ? " " : ""), 1),
                          createVNode("span", { class: "pp-sec__name" }, toDisplayString(titleParts(section.title).text), 1)
                        ]),
                        createVNode("div", { class: "pp-sec__content" }, [
                          createVNode("p", {
                            class: "pp-sec__text",
                            innerHTML: section.content.replace(/\n/g, "<br>")
                          }, null, 8, ["innerHTML"]),
                          section.list ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "bm-list pp-sec__list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(section.list, (item, i) => {
                              return openBlock(), createBlock("li", { key: i }, toDisplayString(item), 1);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          section.footer ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "pp-sec__note"
                          }, toDisplayString(section.footer), 1)) : createCommentVNode("", true),
                          section.contact ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "pp-contact"
                          }, [
                            createVNode("a", {
                              href: `mailto:${companyInfo.email}`,
                              class: "pp-contact__link"
                            }, [
                              createVNode("span", { class: "pp-contact__icon" }, [
                                createVNode(_sfc_main$2, {
                                  name: "mail",
                                  size: 18
                                })
                              ]),
                              createVNode("span", { class: "pp-contact__value" }, toDisplayString(companyInfo.email), 1),
                              createVNode("span", { class: "pp-contact__arrow" }, [
                                createVNode(_sfc_main$2, {
                                  name: "arrow-up-right",
                                  size: 18
                                })
                              ])
                            ], 8, ["href"]),
                            createVNode("a", {
                              href: `tel:${companyInfo.phone}`,
                              class: "pp-contact__link"
                            }, [
                              createVNode("span", { class: "pp-contact__icon" }, [
                                createVNode(_sfc_main$2, {
                                  name: "phone",
                                  size: 18
                                })
                              ]),
                              createVNode("span", { class: "pp-contact__value" }, toDisplayString(companyInfo.phone), 1),
                              createVNode("span", { class: "pp-contact__arrow" }, [
                                createVNode(_sfc_main$2, {
                                  name: "arrow-up-right",
                                  size: 18
                                })
                              ])
                            ], 8, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ], 8, ["id"]);
                    }), 128)),
                    createVNode("div", {
                      class: "pp-seal",
                      "data-reveal": "scale"
                    }, [
                      createVNode(RotatingBadge, { size: 132 })
                    ])
                  ], 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-703048fe"]]);
export {
  PrivacyPolicy as default
};
