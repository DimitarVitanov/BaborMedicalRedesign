import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingSidebar = ref(true);
    const showingMobileMenu = ref(false);
    const showFlash = ref(true);
    const page = usePage();
    const flash = computed(() => {
      var _a, _b;
      return {
        success: (_a = page.props.flash) == null ? void 0 : _a.success,
        error: (_b = page.props.flash) == null ? void 0 : _b.error
      };
    });
    const hideFlashAfterDelay = () => {
      var _a, _b;
      if (((_a = page.props.flash) == null ? void 0 : _a.success) || ((_b = page.props.flash) == null ? void 0 : _b.error)) {
        showFlash.value = true;
        setTimeout(() => {
          showFlash.value = false;
        }, 3e3);
      }
    };
    watch(() => page.props.flash, hideFlashAfterDelay, { deep: true, immediate: true });
    const navigation = [
      { name: "Dashboard", href: "dashboard", icon: "dashboard" },
      { name: "Hero Slides", href: "admin.hero-slides.index", icon: "slides" },
      { name: "Service Categories", href: "admin.service-categories.index", icon: "categories" },
      { name: "Services", href: "admin.service-items.index", icon: "services" },
      { name: "Equipment", href: "admin.equipment.index", icon: "equipment" },
      { name: "About", href: "admin.about.index", icon: "about" },
      { name: "Locations", href: "admin.locations.index", icon: "locations" },
      { name: "Newsletter", href: "admin.newsletter.index", icon: "newsletter" },
      { name: "Messages", href: "admin.contact-messages.index", icon: "messages" },
      { name: "Search Console", href: "admin.search-console.index", icon: "analytics" },
      { name: "Settings", href: "admin.settings.index", icon: "settings" }
    ];
    const isActive = (routeName) => {
      return route().current(routeName) || route().current(routeName + ".*");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-wrapper" }, _attrs))} data-v-6f7ef548><aside class="${ssrRenderClass([{ "collapsed": !showingSidebar.value }, "admin-sidebar"])}" data-v-6f7ef548><div class="sidebar-header" data-v-6f7ef548>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "sidebar-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/logo.webp" alt="Babor Medical" data-v-6f7ef548${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/logo.webp",
                alt: "Babor Medical"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="sidebar-toggle d-none d-lg-flex" data-v-6f7ef548><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" data-v-6f7ef548></path></svg></button></div><nav class="sidebar-nav" data-v-6f7ef548><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(unref(Link), {
          key: item.name,
          href: _ctx.route(item.href),
          class: ["nav-item", { "active": isActive(item.href) }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="nav-icon" data-v-6f7ef548${_scopeId}>`);
              if (item.icon === "dashboard") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" data-v-6f7ef548${_scopeId}></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "analytics") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "slides") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z" data-v-6f7ef548${_scopeId}></path><path d="M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "categories") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" data-v-6f7ef548${_scopeId}></path><path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "services") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "equipment") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "about") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-6f7ef548${_scopeId}></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "locations") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "newsletter") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "messages") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" data-v-6f7ef548${_scopeId}></path><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "settings") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" data-v-6f7ef548${_scopeId}></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span><span class="nav-text" data-v-6f7ef548${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "nav-icon" }, [
                  item.icon === "dashboard" ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" }),
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                    })
                  ])) : createCommentVNode("", true),
                  item.icon === "analytics" ? (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "slides" ? (openBlock(), createBlock("svg", {
                    key: 2,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z" }),
                    createVNode("path", { d: "M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "categories" ? (openBlock(), createBlock("svg", {
                    key: 3,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" }),
                    createVNode("path", { d: "M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "services" ? (openBlock(), createBlock("svg", {
                    key: 4,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "equipment" ? (openBlock(), createBlock("svg", {
                    key: 5,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "about" ? (openBlock(), createBlock("svg", {
                    key: 6,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    createVNode("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "locations" ? (openBlock(), createBlock("svg", {
                    key: 7,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "newsletter" ? (openBlock(), createBlock("svg", {
                    key: 8,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "messages" ? (openBlock(), createBlock("svg", {
                    key: 9,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }),
                    createVNode("path", { d: "M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "settings" ? (openBlock(), createBlock("svg", {
                    key: 10,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" }),
                    createVNode("path", { d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("span", { class: "nav-text" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="sidebar-footer" data-v-6f7ef548><div class="user-info" data-v-6f7ef548><div class="user-avatar" data-v-6f7ef548>${ssrInterpolate(((_b = (_a = _ctx.$page.props.auth.user) == null ? void 0 : _a.name) == null ? void 0 : _b.charAt(0)) || "A")}</div>`);
      if (showingSidebar.value) {
        _push(`<div class="user-details" data-v-6f7ef548><div class="user-name" data-v-6f7ef548>${ssrInterpolate((_c = _ctx.$page.props.auth.user) == null ? void 0 : _c.name)}</div><div class="user-email" data-v-6f7ef548>${ssrInterpolate((_d = _ctx.$page.props.auth.user) == null ? void 0 : _d.email)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "logout-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" data-v-6f7ef548${_scopeId}></path><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" data-v-6f7ef548${_scopeId}></path></svg>`);
            if (showingSidebar.value) {
              _push2(`<span data-v-6f7ef548${_scopeId}>Logout</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                }),
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                })
              ])),
              showingSidebar.value ? (openBlock(), createBlock("span", { key: 0 }, "Logout")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside><header class="mobile-header d-lg-none" data-v-6f7ef548><button class="mobile-menu-btn" data-v-6f7ef548><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" data-v-6f7ef548></path></svg></button><img src="/logo.webp" alt="Babor Medical" class="mobile-logo" data-v-6f7ef548></header><div class="${ssrRenderClass([{ "show": showingMobileMenu.value }, "mobile-overlay"])}" data-v-6f7ef548></div><aside class="${ssrRenderClass([{ "show": showingMobileMenu.value }, "mobile-sidebar"])}" data-v-6f7ef548><div class="sidebar-header" data-v-6f7ef548><img src="/logo.webp" alt="Babor Medical" class="sidebar-logo-img" data-v-6f7ef548><button class="close-btn" data-v-6f7ef548><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" data-v-6f7ef548></path></svg></button></div><nav class="sidebar-nav" data-v-6f7ef548><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(unref(Link), {
          key: item.name,
          href: _ctx.route(item.href),
          class: ["nav-item", { "active": isActive(item.href) }],
          onClick: ($event) => showingMobileMenu.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="nav-icon" data-v-6f7ef548${_scopeId}>`);
              if (item.icon === "dashboard") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" data-v-6f7ef548${_scopeId}></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "analytics") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "slides") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z" data-v-6f7ef548${_scopeId}></path><path d="M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "categories") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" data-v-6f7ef548${_scopeId}></path><path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "services") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "equipment") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "about") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-6f7ef548${_scopeId}></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "locations") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "newsletter") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "messages") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" data-v-6f7ef548${_scopeId}></path><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "settings") {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548${_scopeId}><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" data-v-6f7ef548${_scopeId}></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" data-v-6f7ef548${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span><span class="nav-text" data-v-6f7ef548${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "nav-icon" }, [
                  item.icon === "dashboard" ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" }),
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                    })
                  ])) : createCommentVNode("", true),
                  item.icon === "analytics" ? (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "slides" ? (openBlock(), createBlock("svg", {
                    key: 2,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z" }),
                    createVNode("path", { d: "M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "categories" ? (openBlock(), createBlock("svg", {
                    key: 3,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" }),
                    createVNode("path", { d: "M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "services" ? (openBlock(), createBlock("svg", {
                    key: 4,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "equipment" ? (openBlock(), createBlock("svg", {
                    key: 5,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "about" ? (openBlock(), createBlock("svg", {
                    key: 6,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    createVNode("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "locations" ? (openBlock(), createBlock("svg", {
                    key: 7,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "newsletter" ? (openBlock(), createBlock("svg", {
                    key: 8,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "messages" ? (openBlock(), createBlock("svg", {
                    key: 9,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }),
                    createVNode("path", { d: "M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" })
                  ])) : createCommentVNode("", true),
                  item.icon === "settings" ? (openBlock(), createBlock("svg", {
                    key: 10,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" }),
                    createVNode("path", { d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("span", { class: "nav-text" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></aside><div class="toast-container" data-v-6f7ef548>`);
      if (showFlash.value && flash.value.success) {
        _push(`<div class="toast toast-success" data-v-6f7ef548><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" data-v-6f7ef548></path></svg><span data-v-6f7ef548>${ssrInterpolate(flash.value.success)}</span><button class="toast-close" data-v-6f7ef548>×</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showFlash.value && flash.value.error) {
        _push(`<div class="toast toast-error" data-v-6f7ef548><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" data-v-6f7ef548><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" data-v-6f7ef548></path></svg><span data-v-6f7ef548>${ssrInterpolate(flash.value.error)}</span><button class="toast-close" data-v-6f7ef548>×</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><main class="${ssrRenderClass([{ "sidebar-collapsed": !showingSidebar.value }, "admin-main"])}" data-v-6f7ef548>`);
      if (_ctx.$slots.header) {
        _push(`<header class="page-header" data-v-6f7ef548>`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="page-content" data-v-6f7ef548>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthenticatedLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f7ef548"]]);
export {
  AuthenticatedLayout as A
};
