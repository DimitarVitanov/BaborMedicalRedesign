import { onMounted, onUnmounted, ref } from 'vue';

/**
 * Tracks whether an element is (near) the viewport, so continuous work —
 * looping animations, scroll handlers — can pause while it's off-screen.
 * Falls back to "always visible" when IntersectionObserver is missing.
 */
export function useInView(elRef, rootMargin = '200px 0px 200px 0px') {
    const inView = ref(false);
    let io = null;

    onMounted(() => {
        const el = elRef.value;
        if (!el) return;
        if (!('IntersectionObserver' in window)) {
            inView.value = true;
            return;
        }
        io = new IntersectionObserver(
            ([entry]) => { inView.value = entry.isIntersecting; },
            { rootMargin },
        );
        io.observe(el);
    });

    onUnmounted(() => io?.disconnect());

    return inView;
}
