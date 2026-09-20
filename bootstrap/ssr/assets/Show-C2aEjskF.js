import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-C2Ae6j-N.js";
import { Head, Link, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    application: Object
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
    const deleteApplication = () => {
      if (confirm("Are you sure you want to delete this application? The CV file will also be deleted.")) {
        router.delete(route("admin.job-applications.destroy", props.application.id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Application from ${__props.application.name}`
      }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-between align-items-center"${_scopeId}><h2 class="h4 mb-0"${_scopeId}>Application Details</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.job-applications.index"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Applications `);
                } else {
                  return [
                    createTextVNode(" Back to Applications ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                createVNode("h2", { class: "h4 mb-0" }, "Application Details"),
                createVNode(unref(Link), {
                  href: _ctx.route("admin.job-applications.index"),
                  class: "btn btn-outline-secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back to Applications ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="container"${_scopeId}><div class="card"${_scopeId}><div class="card-header d-flex justify-content-between align-items-center"${_scopeId}><div${_scopeId}><span class="badge bg-primary me-2"${_scopeId}>${ssrInterpolate(__props.application.job_posting ? __props.application.job_posting.title_en : "Position removed")}</span><span class="text-muted"${_scopeId}>${ssrInterpolate(formatDate(__props.application.created_at))}</span></div><button class="btn btn-outline-danger btn-sm"${_scopeId}> Delete </button></div><div class="card-body"${_scopeId}><div class="row mb-4"${_scopeId}><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Name</h6><p class="mb-0 fs-5"${_scopeId}>${ssrInterpolate(__props.application.name)}</p></div><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Email</h6><p class="mb-0 fs-5"${_scopeId}><a${ssrRenderAttr("href", `mailto:${__props.application.email}`)}${_scopeId}>${ssrInterpolate(__props.application.email)}</a></p></div></div><div class="row mb-4"${_scopeId}><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>Phone</h6><p class="mb-0"${_scopeId}>`);
            if (__props.application.phone) {
              _push2(`<a${ssrRenderAttr("href", `tel:${__props.application.phone}`)}${_scopeId}>${ssrInterpolate(__props.application.phone)}</a>`);
            } else {
              _push2(`<span class="text-muted"${_scopeId}>Not provided</span>`);
            }
            _push2(`</p></div><div class="col-md-6"${_scopeId}><h6 class="text-muted mb-1"${_scopeId}>CV / Resume</h6><p class="mb-0"${_scopeId}>`);
            if (__props.application.cv_path) {
              _push2(`<a${ssrRenderAttr("href", _ctx.route("admin.job-applications.cv", __props.application.id))} class="btn btn-sm btn-outline-primary"${_scopeId}> Download ${ssrInterpolate(__props.application.cv_original_name || "CV")}</a>`);
            } else {
              _push2(`<span class="text-muted"${_scopeId}>Not provided</span>`);
            }
            _push2(`</p></div></div><hr${_scopeId}><div${_scopeId}><h6 class="text-muted mb-2"${_scopeId}>Cover Letter / Message</h6>`);
            if (__props.application.message) {
              _push2(`<div class="bg-light p-3 rounded" style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId}>${ssrInterpolate(__props.application.message)}</div>`);
            } else {
              _push2(`<p class="text-muted"${_scopeId}>No message provided.</p>`);
            }
            _push2(`</div></div><div class="card-footer"${_scopeId}><a${ssrRenderAttr("href", `mailto:${__props.application.email}?subject=Re: Your application to Babor Medical`)} class="btn btn-primary"${_scopeId}> Reply via Email </a>`);
            if (__props.application.phone) {
              _push2(`<a${ssrRenderAttr("href", `tel:${__props.application.phone}`)} class="btn btn-outline-primary ms-2"${_scopeId}> Call Applicant </a>`);
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
                        createVNode("span", { class: "badge bg-primary me-2" }, toDisplayString(__props.application.job_posting ? __props.application.job_posting.title_en : "Position removed"), 1),
                        createVNode("span", { class: "text-muted" }, toDisplayString(formatDate(__props.application.created_at)), 1)
                      ]),
                      createVNode("button", {
                        onClick: deleteApplication,
                        class: "btn btn-outline-danger btn-sm"
                      }, " Delete ")
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Name"),
                          createVNode("p", { class: "mb-0 fs-5" }, toDisplayString(__props.application.name), 1)
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Email"),
                          createVNode("p", { class: "mb-0 fs-5" }, [
                            createVNode("a", {
                              href: `mailto:${__props.application.email}`
                            }, toDisplayString(__props.application.email), 9, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-4" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "Phone"),
                          createVNode("p", { class: "mb-0" }, [
                            __props.application.phone ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: `tel:${__props.application.phone}`
                            }, toDisplayString(__props.application.phone), 9, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-muted"
                            }, "Not provided"))
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("h6", { class: "text-muted mb-1" }, "CV / Resume"),
                          createVNode("p", { class: "mb-0" }, [
                            __props.application.cv_path ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: _ctx.route("admin.job-applications.cv", __props.application.id),
                              class: "btn btn-sm btn-outline-primary"
                            }, " Download " + toDisplayString(__props.application.cv_original_name || "CV"), 9, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-muted"
                            }, "Not provided"))
                          ])
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-muted mb-2" }, "Cover Letter / Message"),
                        __props.application.message ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "bg-light p-3 rounded",
                          style: { "white-space": "pre-wrap" }
                        }, toDisplayString(__props.application.message), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-muted"
                        }, "No message provided."))
                      ])
                    ]),
                    createVNode("div", { class: "card-footer" }, [
                      createVNode("a", {
                        href: `mailto:${__props.application.email}?subject=Re: Your application to Babor Medical`,
                        class: "btn btn-primary"
                      }, " Reply via Email ", 8, ["href"]),
                      __props.application.phone ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: `tel:${__props.application.phone}`,
                        class: "btn btn-outline-primary ms-2"
                      }, " Call Applicant ", 8, ["href"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/JobApplications/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
