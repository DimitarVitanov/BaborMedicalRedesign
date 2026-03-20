import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Admin Login - Babor Medical" }, null, _parent));
      _push(`<div class="login-wrapper" data-v-156127ad><div class="login-container" data-v-156127ad><div class="login-card" data-v-156127ad><div class="login-header" data-v-156127ad><img src="/logo.webp" alt="Babor Medical" class="login-logo" data-v-156127ad><h1 class="login-title" data-v-156127ad>Admin Panel</h1><p class="login-subtitle" data-v-156127ad>Sign in to manage your website</p></div>`);
      if (__props.status) {
        _push(`<div class="alert alert-success mb-4" data-v-156127ad>${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="login-form" data-v-156127ad><div class="form-group" data-v-156127ad><label for="email" class="form-label" data-v-156127ad>Email Address</label><div class="input-wrapper" data-v-156127ad><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-156127ad><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" data-v-156127ad></path></svg><input id="email" type="email" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.email }, "form-control"])}"${ssrRenderAttr("value", unref(form).email)} placeholder="admin@example.com" required autofocus data-v-156127ad></div>`);
      if (unref(form).errors.email) {
        _push(`<div class="invalid-feedback d-block" data-v-156127ad>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-156127ad><label for="password" class="form-label" data-v-156127ad>Password</label><div class="input-wrapper" data-v-156127ad><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-156127ad><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" data-v-156127ad></path></svg><input id="password" type="password" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.password }, "form-control"])}"${ssrRenderAttr("value", unref(form).password)} placeholder="••••••••" required data-v-156127ad></div>`);
      if (unref(form).errors.password) {
        _push(`<div class="invalid-feedback d-block" data-v-156127ad>${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group-inline" data-v-156127ad><div class="form-check" data-v-156127ad><input class="form-check-input" type="checkbox" id="remember"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} data-v-156127ad><label class="form-check-label" for="remember" data-v-156127ad> Remember me </label></div></div><button type="submit" class="btn btn-login"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-156127ad>`);
      if (unref(form).processing) {
        _push(`<span data-v-156127ad><svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-156127ad><path d="M21 12a9 9 0 1 1-6.219-8.56" data-v-156127ad></path></svg> Signing in... </span>`);
      } else {
        _push(`<span data-v-156127ad> Sign In <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-156127ad><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" data-v-156127ad></path></svg></span>`);
      }
      _push(`</button></form><div class="login-footer" data-v-156127ad><a href="/" class="back-link" data-v-156127ad><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-v-156127ad><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" data-v-156127ad></path></svg> Back to Website </a></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-156127ad"]]);
export {
  Login as default
};
