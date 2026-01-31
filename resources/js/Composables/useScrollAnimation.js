import { onMounted, onUnmounted, nextTick } from 'vue';

export function useScrollAnimation() {
    let observer = null;

    const initScrollAnimation = () => {
        const options = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.05
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);

        const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in');
        elements.forEach(el => observer.observe(el));
        
        // Fallback: if elements are already in viewport on load, make them visible
        setTimeout(() => {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('is-visible');
                }
            });
        }, 100);
    };

    onMounted(() => {
        nextTick(() => {
            initScrollAnimation();
        });
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    return {
        initScrollAnimation
    };
}
