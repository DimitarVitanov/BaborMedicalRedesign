import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CaxIWzVU.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    message: Object
  },
  setup(__props) {
    const props = __props;
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const deleteMessage = () => {
      if (confirm("Are you sure you want to delete this message?")) {
        router.delete(route("admin.contact-messages.destroy", props.message.id));
      }
    };
    const toggleRead = () => {
      const routeName = props.message.is_read ? "admin.contact-messages.mark-unread" : "admin.contact-messages.mark-read";
      router.post(route(routeName, props.message.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Message from ${__props.message.name}`
      }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Message Details</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.contact-messages.index"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Messages `);
                } else {
                  return [
                    createTextVNode(" Back to Messages ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Message Details"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.contact-messages.index"),
                  class: "btn btn-outline-secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back to Messages ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-header d-flex justify-content-between align-items-center"${_scopeId}><div${_scopeId}><span class="${ssrRenderClass([__props.message.is_read ? "bg-secondary" : "bg-primary", "badge me-2"])}"${_scopeId}>${ssrInterpolate(__props.message.is_read ? "Read" : "Unread")}</span><span class="text-muted"${_scopeId}>${ssrInterpolate(formatDate(__props.message.created_at))}</span></div><div class="btn-group btn-group-sm"${_scopeId}><button class="btn btn-outline-secondary"${_scopeId}>${ssrInterpolate(__props.message.is_read ? "Mark as Unread" : "Mark as Read")}</button><button class="btn btn-outline-danger"${_scopeId}> Delete </button></div></div><div class="card-body"${_scopeId}><div class="row mb-4"${_scopeId}><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Name</h6><p class="mb-0 fs-5"${_scopeId}>${ssrInterpolate(__props.message.name)}</p></div><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Email</h6><p class="mb-0 fs-5"${_scopeId}><a${ssrRenderAttr("href", `mailto:${__props.message.email}`)}${_scopeId}>${ssrInterpolate(__props.message.email)}</a></p></div></div><div class="row mb-4"${_scopeId}><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Phone</h6><p class="mb-0"${_scopeId}>`);
            if (__props.message.phone) {
              _push2(`<a${ssrRenderAttr("href", `tel:${__props.message.phone}`)}${_scopeId}>${ssrInterpolate(__props.message.phone)}</a>`);
            } else {
              _push2(`<span class="text-muted"${_scopeId}>Not provided</span>`);
            }
            _push2(`</p></div><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Service Interest</h6><p class="mb-0"${_scopeId}>${ssrInterpolate(__props.message.service || "Not specified")}</p></div></div><hr${_scopeId}><div${_scopeId}><h6 class="text-muted mb-2"${_scopeId}>Message</h6><div class="bg-light p-3 rounded" style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId}>${ssrInterpolate(__props.message.message)}</div></div></div><div class="card-footer"${_scopeId}><a${ssrRenderAttr("href", `mailto:${__props.message.email}?subject=Re: Your inquiry to Babor Medical`)} class="btn btn-primary"${_scopeId}> Reply via Email </a>`);
            if (__props.message.phone) {
              _push2(`<a${ssrRenderAttr("href", `tel:${__props.message.phone}`)} class="btn btn-outline-primary ms-2"${_scopeId}> Call Customer </a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header d-flex justify-content-between align-items-center" }, [
                      createVNode("div", null, [
                        createVNode("span", {
                          class: ["badge me-2", __props.message.is_read ? "bg-secondary" : "bg-primary"]
                        }, toDisplayString(__props.message.is_read ? "Read" : "Unread"), 3),
                        createVNode("span", { class: "text-muted" }, toDisplayString(formatDate(__props.message.created_at)), 1)
                      ]),
                      createVNode("div", { class: "btn-group btn-group-sm" }, [
                        createVNode("button", {
                          onClick: toggleRead,
                          class: "btn btn-outline-secondary"
                        }, toDisplayString(__props.message.is_read ? "Mark as Unread" : "Mark as Read"), 1),
                        createVNode("button", {
                          onClick: deleteMessage,
                          class: "btn btn-outline-danger"
                        }, " Delete ")
                      ])
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Name"),
                          createVNode("p", { class: "mb-0 fs-5" }, toDisplayString(__props.message.name), 1)
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Email"),
                          createVNode("p", { class: "mb-0 fs-5" }, [
                            createVNode("a", {
                              href: `mailto:${__props.message.email}`
                            }, toDisplayString(__props.message.email), 9, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Phone"),
                          createVNode("p", { class: "mb-0" }, [
                            __props.message.phone ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: `tel:${__props.message.phone}`
                            }, toDisplayString(__props.message.phone), 9, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-muted"
                            }, "Not provided"))
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Service Interest"),
                          createVNode("p", { class: "mb-0" }, toDisplayString(__props.message.service || "Not specified"), 1)
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-muted mb-2" }, "Message"),
                        createVNode("div", {
                          class: "bg-light p-3 rounded",
                          style: { "white-space": "pre-wrap" }
                        }, toDisplayString(__props.message.message), 1)
                      ])
                    ]),
                    createVNode("div", { class: "card-footer" }, [
                      createVNode("a", {
                        href: `mailto:${__props.message.email}?subject=Re: Your inquiry to Babor Medical`,
                        class: "btn btn-primary"
                      }, " Reply via Email ", 8, ["href"]),
                      __props.message.phone ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: `tel:${__props.message.phone}`,
                        class: "btn btn-outline-primary ms-2"
                      }, " Call Customer ", 8, ["href"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ContactMessages/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
