import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    subscribers: Object
  },
  setup(__props) {
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const toggleActive = (id) => {
      router.post(route("admin.newsletter.toggle", id));
    };
    const deleteSubscriber = (id) => {
      if (confirm("Are you sure you want to delete this subscriber?")) {
        router.delete(route("admin.newsletter.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Newsletter Subscribers - Admin" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Newsletter Subscribers</h2><span class="badge bg-primary fs-6"${_scopeId}>Total: ${ssrInterpolate(__props.subscribers.total)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Newsletter Subscribers"),
                createVNode("span", { class: "badge bg-primary fs-6" }, "Total: " + toDisplayString(__props.subscribers.total), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}>`);
            if (__props.subscribers.data.length === 0) {
              _push2(`<div class="text-center py-5 text-muted"${_scopeId}><p class="mb-0"${_scopeId}>No subscribers yet.</p></div>`);
            } else {
              _push2(`<div class="table-responsive"${_scopeId}><table class="table table-hover align-middle"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Email</th><th style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>Language</th><th style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>Status</th><th style="${ssrRenderStyle({ "width": "180px" })}"${_scopeId}>Subscribed At</th><th style="${ssrRenderStyle({ "width": "180px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.subscribers.data, (subscriber) => {
                _push2(`<tr${_scopeId}><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(subscriber.email)}</strong></td><td${_scopeId}><span class="badge bg-info"${_scopeId}>${ssrInterpolate(subscriber.locale.toUpperCase())}</span></td><td${_scopeId}><span class="${ssrRenderClass([subscriber.is_active ? "bg-success" : "bg-secondary", "badge"])}"${_scopeId}>${ssrInterpolate(subscriber.is_active ? "Active" : "Inactive")}</span></td><td class="text-muted"${_scopeId}>${ssrInterpolate(formatDate(subscriber.subscribed_at))}</td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}><button type="button" class="${ssrRenderClass([subscriber.is_active ? "btn-outline-warning" : "btn-outline-success", "btn"])}"${_scopeId}>${ssrInterpolate(subscriber.is_active ? "Deactivate" : "Activate")}</button><button type="button" class="btn btn-outline-danger"${_scopeId}> Delete </button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            if (__props.subscribers.last_page > 1) {
              _push2(`<nav class="mt-4"${_scopeId}><ul class="pagination justify-content-center mb-0"${_scopeId}><!--[-->`);
              ssrRenderList(__props.subscribers.links, (link) => {
                _push2(`<li class="${ssrRenderClass([{ active: link.active, disabled: !link.url }, "page-item"])}"${_scopeId}><a class="page-link"${ssrRenderAttr("href", link.url || "#")}${_scopeId}>${link.label ?? ""}</a></li>`);
              });
              _push2(`<!--]--></ul></nav>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body" }, [
                      __props.subscribers.data.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-5 text-muted"
                      }, [
                        createVNode("p", { class: "mb-0" }, "No subscribers yet.")
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "table-responsive"
                      }, [
                        createVNode("table", { class: "table table-hover align-middle" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "Email"),
                              createVNode("th", { style: { "width": "100px" } }, "Language"),
                              createVNode("th", { style: { "width": "100px" } }, "Status"),
                              createVNode("th", { style: { "width": "180px" } }, "Subscribed At"),
                              createVNode("th", { style: { "width": "180px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.subscribers.data, (subscriber) => {
                              return openBlock(), createBlock("tr", {
                                key: subscriber.id
                              }, [
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(subscriber.email), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", { class: "badge bg-info" }, toDisplayString(subscriber.locale.toUpperCase()), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("span", {
                                    class: ["badge", subscriber.is_active ? "bg-success" : "bg-secondary"]
                                  }, toDisplayString(subscriber.is_active ? "Active" : "Inactive"), 3)
                                ]),
                                createVNode("td", { class: "text-muted" }, toDisplayString(formatDate(subscriber.subscribed_at)), 1),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: ["btn", subscriber.is_active ? "btn-outline-warning" : "btn-outline-success"],
                                      onClick: ($event) => toggleActive(subscriber.id)
                                    }, toDisplayString(subscriber.is_active ? "Deactivate" : "Activate"), 11, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-outline-danger",
                                      onClick: ($event) => deleteSubscriber(subscriber.id)
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])),
                      __props.subscribers.last_page > 1 ? (openBlock(), createBlock("nav", {
                        key: 2,
                        class: "mt-4"
                      }, [
                        createVNode("ul", { class: "pagination justify-content-center mb-0" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.subscribers.links, (link) => {
                            return openBlock(), createBlock("li", {
                              key: link.label,
                              class: ["page-item", { active: link.active, disabled: !link.url }]
                            }, [
                              createVNode("a", {
                                class: "page-link",
                                href: link.url || "#",
                                innerHTML: link.label
                              }, null, 8, ["href", "innerHTML"])
                            ], 2);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Newsletter/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
