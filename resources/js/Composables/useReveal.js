import { onMounted, onUnmounted } from 'vue';

const SELECTOR = '[data-reveal], [data-mask]';

/**
 * Reveals [data-reveal] / [data-mask] elements inside `rootRef` as they enter
 * the viewport by setting a `data-in` attribute (an attribute, not a class,
 * so Vue :class re-renders never wipe it). New nodes are picked up through a
 * MutationObserver, so v-if content and late-rendered sections animate too.
 */
export function useReveal(rootRef) {
    let io = null;
    let mo = null;

    const observeAll = (scope) => {
        if (!scope || !io) return;
        if (scope.matches && scope.matches(SELECTOR) && !scope.hasAttribute('data-in')) io.observe(scope);
        scope.querySelectorAll?.(SELECTOR).forEach((el) => {
            if (!el.hasAttribute('data-in')) io.observe(el);
        });
    };

    onMounted(() => {
        const root = rootRef.value;
        if (!root) return;

        if (!('IntersectionObserver' in window)) {
            root.querySelectorAll(SELECTOR).forEach((el) => el.setAttribute('data-in', ''));
            return;
        }

        io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-in', '');
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
        );

        observeAll(root);

        mo = new MutationObserver((mutations) => {
            mutations.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && observeAll(n)));
        });
        mo.observe(root, { childList: true, subtree: true });

        // Safety net: never leave content hidden (e.g. very tall elements that
        // never reach the 12% threshold on small screens).
        window.setTimeout(() => {
            root.querySelectorAll(SELECTOR).forEach((el) => {
                if (el.hasAttribute('data-in')) return;
                const r = el.getBoundingClientRect();
                if (r.top < window.innerHeight && r.bottom > 0) el.setAttribute('data-in', '');
            });
        }, 1600);
    });

    onUnmounted(() => {
        io?.disconnect();
        mo?.disconnect();
    });
}
