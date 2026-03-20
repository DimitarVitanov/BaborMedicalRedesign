import { unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    messages: Object,
    unreadCount: Number
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
    const deleteMessage = (id) => {
      if (confirm("Are you sure you want to delete this message?")) {
        router.delete(route("admin.contact-messages.destroy", id));
      }
    };
    const toggleRead = (message) => {
      const routeName = message.is_read ? "admin.contact-messages.mark-unread" : "admin.contact-messages.mark-read";
      router.post(route(routeName, message.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Contact Messages" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}> Contact Messages `);
            if (__props.unreadCount > 0) {
              _push2(`<span class="badge bg-danger ms-2"${_scopeId}>${ssrInterpolate(__props.unreadCount)} unread</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, [
                  createTextVNode(" Contact Messages "),
                  __props.unreadCount > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "badge bg-danger ms-2"
                  }, toDisplayString(__props.unreadCount) + " unread", 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-body p-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-hover mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th style="${ssrRenderStyle({ "width": "40px" })}"${_scopeId}></th><th${_scopeId}>Name</th><th${_scopeId}>Email</th><th${_scopeId}>Service</th><th${_scopeId}>Date</th><th style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.messages.data, (message) => {
              _push2(`<tr class="${ssrRenderClass({ "table-warning": !message.is_read })}"${_scopeId}><td class="text-center"${_scopeId}>`);
              if (!message.is_read) {
                _push2(`<span class="badge bg-primary rounded-circle" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "padding": "0" })}"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}><strong${_scopeId}>${ssrInterpolate(message.name)}</strong></td><td${_scopeId}><a${ssrRenderAttr("href", `mailto:${message.email}`)}${_scopeId}>${ssrInterpolate(message.email)}</a></td><td${_scopeId}>${ssrInterpolate(message.service || "-")}</td><td${_scopeId}>${ssrInterpolate(formatDate(message.created_at))}</td><td${_scopeId}><div class="btn-group btn-group-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.contact-messages.show", message.id),
                class: "btn btn-outline-primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View `);
                  } else {
                    return [
                      createTextVNode(" View ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="btn btn-outline-secondary"${ssrRenderAttr("title", message.is_read ? "Mark as unread" : "Mark as read")}${_scopeId}>${ssrInterpolate(message.is_read ? "📭" : "📬")}</button><button class="btn btn-outline-danger"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.messages.data.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="6" class="text-center py-4 text-muted"${_scopeId}> No messages yet. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
            if (__props.messages.last_page > 1) {
              _push2(`<div class="d-flex justify-content-center mt-4"${_scopeId}><nav${_scopeId}><ul class="pagination"${_scopeId}><!--[-->`);
              ssrRenderList(__props.messages.links, (link) => {
                _push2(`<li class="${ssrRenderClass([{ active: link.active, disabled: !link.url }, "page-item"])}"${_scopeId}>`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: "page-link"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="page-link"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body p-0" }, [
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table table-hover mb-0" }, [
                          createVNode("thead", { class: "table-light" }, [
                            createVNode("tr", null, [
                              createVNode("th", { style: { "width": "40px" } }),
                              createVNode("th", null, "Name"),
                              createVNode("th", null, "Email"),
                              createVNode("th", null, "Service"),
                              createVNode("th", null, "Date"),
                              createVNode("th", { style: { "width": "150px" } }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.messages.data, (message) => {
                              return openBlock(), createBlock("tr", {
                                key: message.id,
                                class: { "table-warning": !message.is_read }
                              }, [
                                createVNode("td", { class: "text-center" }, [
                                  !message.is_read ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "badge bg-primary rounded-circle",
                                    style: { "width": "10px", "height": "10px", "padding": "0" }
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("td", null, [
                                  createVNode("strong", null, toDisplayString(message.name), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("a", {
                                    href: `mailto:${message.email}`
                                  }, toDisplayString(message.email), 9, ["href"])
                                ]),
                                createVNode("td", null, toDisplayString(message.service || "-"), 1),
                                createVNode("td", null, toDisplayString(formatDate(message.created_at)), 1),
                                createVNode("td", null, [
                                  createVNode("div", { class: "btn-group btn-group-sm" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("admin.contact-messages.show", message.id),
                                      class: "btn btn-outline-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" View ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode("button", {
                                      onClick: ($event) => toggleRead(message),
                                      class: "btn btn-outline-secondary",
                                      title: message.is_read ? "Mark as unread" : "Mark as read"
                                    }, toDisplayString(message.is_read ? "📭" : "📬"), 9, ["onClick", "title"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteMessage(message.id),
                                      class: "btn btn-outline-danger"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])
                              ], 2);
                            }), 128)),
                            __props.messages.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center py-4 text-muted"
                              }, " No messages yet. ")
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  __props.messages.last_page > 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex justify-content-center mt-4"
                  }, [
                    createVNode("nav", null, [
                      createVNode("ul", { class: "pagination" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.messages.links, (link) => {
                          return openBlock(), createBlock("li", {
                            key: link.label,
                            class: ["page-item", { active: link.active, disabled: !link.url }]
                          }, [
                            link.url ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: link.url,
                              class: "page-link",
                              innerHTML: link.label
                            }, null, 8, ["href", "innerHTML"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "page-link",
                              innerHTML: link.label
                            }, null, 8, ["innerHTML"]))
                          ], 2);
                        }), 128))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ContactMessages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
