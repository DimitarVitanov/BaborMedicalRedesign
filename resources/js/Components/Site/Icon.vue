<script setup>
// Small line-icon set shared by the public site.
defineProps({
    name: { type: String, required: true },
    size: { type: [Number, String], default: null },
    stroke: { type: [Number, String], default: 1.6 },
});
</script>

<template>
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        :stroke-width="stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        :width="size"
        :height="size"
        aria-hidden="true"
        focusable="false"
    >
        <template v-if="name === 'arrow-right'"><path d="M4 12h16M14 6l6 6-6 6" /></template>
        <template v-else-if="name === 'arrow-up-right'"><path d="M7 17L17 7M8 7h9v9" /></template>
        <template v-else-if="name === 'arrow-left'"><path d="M20 12H4M10 6l-6 6 6 6" /></template>
        <template v-else-if="name === 'arrow-down'"><path d="M12 4v16M6 14l6 6 6-6" /></template>
        <template v-else-if="name === 'chevron-down'"><path d="M6 9l6 6 6-6" /></template>
        <template v-else-if="name === 'chevron-left'"><path d="M15 18l-6-6 6-6" /></template>
        <template v-else-if="name === 'chevron-right'"><path d="M9 18l6-6-6-6" /></template>
        <template v-else-if="name === 'plus'"><path d="M12 5v14M5 12h14" /></template>
        <template v-else-if="name === 'check'"><path d="M5 12.5l4.5 4.5L19 7.5" /></template>
        <template v-else-if="name === 'close'"><path d="M6 6l12 12M18 6L6 18" /></template>
        <template v-else-if="name === 'phone'"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></template>
        <template v-else-if="name === 'mail'"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="M3 7l9 6 9-6" /></template>
        <template v-else-if="name === 'pin'"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></template>
        <template v-else-if="name === 'clock'"><circle cx="12" cy="12" r="9.5" /><path d="M12 6.5V12l3.5 2" /></template>
        <template v-else-if="name === 'file'"><path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z" /><path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h7" /></template>
        <template v-else-if="name === 'download'"><path d="M12 3v12M7 10l5 5 5-5M4 20h16" /></template>
        <template v-else-if="name === 'external'"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6H10" /></template>
        <template v-else-if="name === 'instagram'"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" /></template>
        <template v-else-if="name === 'facebook'"><path d="M17 2.5h-3a5 5 0 0 0-5 5v3H6v4h3v7h4v-7h3l1-4h-4v-3a1 1 0 0 1 1-1h3z" /></template>
        <template v-else-if="name === 'sparkle'"><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z" /><path d="M19 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></template>
        <template v-else-if="name === 'laser'"><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="3" /><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" /></template>
        <template v-else-if="name === 'injectable'"><path d="M18 3l3 3M16.5 4.5l3 3M19.5 6L9 16.5l-3-3L16.5 3zM7.5 15l-4.5 4.5M10.5 9l1.5 1.5M13 6.5l1.5 1.5" /></template>
        <template v-else-if="name === 'body'"><circle cx="12" cy="4.5" r="2" /><path d="M8 22l1.5-8L7 10.5 9 7h6l2 3.5-2.5 3.5L16 22M9.5 14h5" /></template>
        <template v-else-if="name === 'face'"><path d="M12 2.5c4.4 0 7.5 3.4 7.5 8 0 5.6-3.6 11-7.5 11s-7.5-5.4-7.5-11c0-4.6 3.1-8 7.5-8z" /><path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" /></template>
        <template v-else-if="name === 'product'"><path d="M9 2.5h6v4H9zM7 6.5h10v15H7zM10 11h4M12 11v4" /></template>
        <template v-else-if="name === 'shield'"><path d="M12 2.5l8 3v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10v-6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></template>
        <template v-else-if="name === 'star'"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></template>
        <template v-else-if="name === 'briefcase'"><rect x="2.5" y="7" width="19" height="13.5" rx="2" /><path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M2.5 13h19" /></template>
        <template v-else-if="name === 'upload'"><path d="M12 15V3M7 8l5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /></template>
        <template v-else-if="name === 'info'"><circle cx="12" cy="12" r="9.5" /><path d="M12 11v6M12 7.5h.01" /></template>
        <template v-else><circle cx="12" cy="12" r="9.5" /></template>
    </svg>
</template>
