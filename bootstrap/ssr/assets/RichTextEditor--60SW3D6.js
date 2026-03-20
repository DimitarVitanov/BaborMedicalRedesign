import { watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "RichTextEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Start writing..."
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useEditor({
      content: props.modelValue,
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [2, 3, 4]
          }
        }),
        Link.configure({
          openOnClick: false
        }),
        Underline
      ],
      editorProps: {
        attributes: {
          class: "rich-editor-content"
        }
      },
      onUpdate: ({ editor: editor2 }) => {
        emit("update:modelValue", editor2.getHTML());
      }
    });
    watch(() => props.modelValue, (value) => {
      if (editor.value && value !== editor.value.getHTML()) {
        editor.value.commands.setContent(value, false);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rich-editor" }, _attrs))} data-v-2b388d9d>`);
      if (unref(editor)) {
        _push(`<div class="editor-toolbar" data-v-2b388d9d><div class="toolbar-group" data-v-2b388d9d><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("bold") })}" title="Bold" data-v-2b388d9d><strong data-v-2b388d9d>B</strong></button><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("italic") })}" title="Italic" data-v-2b388d9d><em data-v-2b388d9d>I</em></button><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("underline") })}" title="Underline" data-v-2b388d9d><u data-v-2b388d9d>U</u></button></div><div class="toolbar-divider" data-v-2b388d9d></div><div class="toolbar-group" data-v-2b388d9d><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("heading", { level: 2 }) })}" title="Heading 2" data-v-2b388d9d> H2 </button><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("heading", { level: 3 }) })}" title="Heading 3" data-v-2b388d9d> H3 </button><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("heading", { level: 4 }) })}" title="Heading 4" data-v-2b388d9d> H4 </button></div><div class="toolbar-divider" data-v-2b388d9d></div><div class="toolbar-group" data-v-2b388d9d><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("bulletList") })}" title="Bullet List" data-v-2b388d9d> • List </button><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("orderedList") })}" title="Numbered List" data-v-2b388d9d> 1. List </button></div><div class="toolbar-divider" data-v-2b388d9d></div><div class="toolbar-group" data-v-2b388d9d><button type="button" class="${ssrRenderClass({ active: unref(editor).isActive("link") })}" title="Add Link" data-v-2b388d9d> 🔗 </button>`);
        if (unref(editor).isActive("link")) {
          _push(`<button type="button" title="Remove Link" data-v-2b388d9d> ❌ </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="toolbar-divider" data-v-2b388d9d></div><div class="toolbar-group" data-v-2b388d9d><button type="button"${ssrIncludeBooleanAttr(!unref(editor).can().undo()) ? " disabled" : ""} title="Undo" data-v-2b388d9d> ↩ </button><button type="button"${ssrIncludeBooleanAttr(!unref(editor).can().redo()) ? " disabled" : ""} title="Redo" data-v-2b388d9d> ↪ </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/RichTextEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RichTextEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b388d9d"]]);
export {
  RichTextEditor as R
};
