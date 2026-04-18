import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from 'vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function fixJsonLdTags(head) {
    if (!Array.isArray(head)) return head;
    return head.map(tag => {
        if (typeof tag === 'string' && tag.includes('application/ld+json') && tag.includes('innerHTML="')) {
            const match = tag.match(/innerHTML="([^"]*)"/);
            if (match) {
                const decoded = match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                return `<script type="application/ld+json">${decoded}</script>`;
            }
        }
        return tag;
    });
}

createServer(async (page) => {
    const result = await createInertiaApp({
        page,
        render: renderToString,
        title: (title) => title || appName,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob('./Pages/**/*.vue'),
            ),
        setup({ App, props, plugin }) {
            const ziggyData = page.props.ziggy || {};
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...ziggyData,
                    location: ziggyData.location ? new URL(ziggyData.location) : undefined,
                });
        },
    });
    if (result && result.head) {
        result.head = fixJsonLdTags(result.head);
    }
    return result;
});
