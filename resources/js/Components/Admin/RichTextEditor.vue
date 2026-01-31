<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Start writing...',
    },
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
    content: props.modelValue,
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [2, 3, 4],
            },
        }),
        Link.configure({
            openOnClick: false,
        }),
        Underline,
    ],
    editorProps: {
        attributes: {
            class: 'rich-editor-content',
        },
    },
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML());
    },
});

watch(() => props.modelValue, (value) => {
    if (editor.value && value !== editor.value.getHTML()) {
        editor.value.commands.setContent(value, false);
    }
});

const setLink = () => {
    const url = window.prompt('Enter URL:');
    if (url) {
        editor.value.chain().focus().setLink({ href: url }).run();
    }
};
</script>

<template>
    <div class="rich-editor">
        <div class="editor-toolbar" v-if="editor">
            <div class="toolbar-group">
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleBold().run()"
                    :class="{ active: editor.isActive('bold') }"
                    title="Bold"
                >
                    <strong>B</strong>
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ active: editor.isActive('italic') }"
                    title="Italic"
                >
                    <em>I</em>
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleUnderline().run()"
                    :class="{ active: editor.isActive('underline') }"
                    title="Underline"
                >
                    <u>U</u>
                </button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group">
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ active: editor.isActive('heading', { level: 2 }) }"
                    title="Heading 2"
                >
                    H2
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="{ active: editor.isActive('heading', { level: 3 }) }"
                    title="Heading 3"
                >
                    H3
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                    :class="{ active: editor.isActive('heading', { level: 4 }) }"
                    title="Heading 4"
                >
                    H4
                </button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group">
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ active: editor.isActive('bulletList') }"
                    title="Bullet List"
                >
                    • List
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="{ active: editor.isActive('orderedList') }"
                    title="Numbered List"
                >
                    1. List
                </button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group">
                <button 
                    type="button"
                    @click="setLink"
                    :class="{ active: editor.isActive('link') }"
                    title="Add Link"
                >
                    🔗
                </button>
                <button 
                    type="button"
                    v-if="editor.isActive('link')"
                    @click="editor.chain().focus().unsetLink().run()"
                    title="Remove Link"
                >
                    ❌
                </button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group">
                <button 
                    type="button"
                    @click="editor.chain().focus().undo().run()"
                    :disabled="!editor.can().undo()"
                    title="Undo"
                >
                    ↩
                </button>
                <button 
                    type="button"
                    @click="editor.chain().focus().redo().run()"
                    :disabled="!editor.can().redo()"
                    title="Redo"
                >
                    ↪
                </button>
            </div>
        </div>

        <EditorContent :editor="editor" />
    </div>
</template>

<style scoped>
.rich-editor {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
}

.editor-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 8px 12px;
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

.toolbar-group {
    display: flex;
    gap: 2px;
}

.toolbar-divider {
    width: 1px;
    background: #dee2e6;
    margin: 0 8px;
}

.editor-toolbar button {
    padding: 6px 10px;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    color: #495057;
    transition: all 0.2s;
}

.editor-toolbar button:hover:not(:disabled) {
    background: #e9ecef;
}

.editor-toolbar button.active {
    background: #c9a87c;
    color: #1e2d3d;
}

.editor-toolbar button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

:deep(.rich-editor-content) {
    padding: 16px;
    min-height: 250px;
    max-height: 500px;
    overflow-y: auto;
    outline: none;
}

:deep(.rich-editor-content p) {
    margin: 0 0 12px;
}

:deep(.rich-editor-content h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 24px 0 12px;
}

:deep(.rich-editor-content h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 20px 0 10px;
}

:deep(.rich-editor-content h4) {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 16px 0 8px;
}

:deep(.rich-editor-content ul),
:deep(.rich-editor-content ol) {
    margin: 12px 0;
    padding-left: 24px;
}

:deep(.rich-editor-content li) {
    margin: 6px 0;
}

:deep(.rich-editor-content a) {
    color: #c9a87c;
    text-decoration: underline;
}

:deep(.rich-editor-content strong) {
    font-weight: 600;
}

@media (max-width: 768px) {
    .editor-toolbar {
        gap: 2px;
        padding: 6px 8px;
    }
    
    .toolbar-divider {
        display: none;
    }
    
    .editor-toolbar button {
        padding: 4px 8px;
        font-size: 12px;
    }
}
</style>
