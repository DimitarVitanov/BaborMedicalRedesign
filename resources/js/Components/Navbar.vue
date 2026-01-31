<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed, ref, onMounted, onUnmounted } from 'vue';

const page = usePage();
const currentLocale = computed(() => page.props.locale || 'en');
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const switchLanguage = (lang) => {
    window.location.href = `${window.location.pathname}?lang=${lang}`;
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const navLinks = computed(() => [
    { name: currentLocale.value === 'mk' ? 'Почетна' : 'Home', href: '/' },
    { name: currentLocale.value === 'mk' ? 'За нас' : 'About', href: '/about' },
    { name: currentLocale.value === 'mk' ? 'Ласери' : 'Lasers', href: '/lasers' },
    { name: currentLocale.value === 'mk' ? 'Услуги' : 'Services', href: '/services' },
    { name: currentLocale.value === 'mk' ? 'Контакт' : 'Contact', href: '/contact' },
]);

const ctaText = computed(() => currentLocale.value === 'mk' ? 'Контакт' : 'Contact');
</script>

<template>
    <header class="site-header" :class="{ scrolled: isScrolled }">
        <div class="container">
            <div class="header-inner">
                <!-- Logo -->
                <a href="/" class="header-logo">
                    <img src="/logo.webp" alt="Babor Medical" />
                </a>

                <!-- Desktop Navigation -->
                <nav class="desktop-nav">
                    <a 
                        v-for="link in navLinks" 
                        :key="link.name" 
                        :href="link.href"
                        class="nav-link"
                    >
                        {{ link.name }}
                    </a>
                </nav>

                <!-- Right Section -->
                <div class="header-right">
                    <!-- Language Switcher -->
                    <div class="lang-switcher">
                        <button 
                            class="lang-btn" 
                            :class="{ active: currentLocale === 'en' }"
                            @click="switchLanguage('en')"
                        >EN</button>
                        <button 
                            class="lang-btn" 
                            :class="{ active: currentLocale === 'mk' }"
                            @click="switchLanguage('mk')"
                        >MK</button>
                    </div>

                    <!-- CTA Button -->
                    <a href="/contact" class="header-cta">
                        <span>{{ ctaText }}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
            <nav class="mobile-nav">
                <a 
                    v-for="link in navLinks" 
                    :key="link.name" 
                    :href="link.href"
                    class="mobile-link"
                    @click="mobileMenuOpen = false"
                >
                    {{ link.name }}
                </a>
            </nav>
            <div class="mobile-footer">
                <div class="mobile-lang">
                    <button 
                        class="lang-btn" 
                        :class="{ active: currentLocale === 'en' }"
                        @click="switchLanguage('en')"
                    >English</button>
                    <button 
                        class="lang-btn" 
                        :class="{ active: currentLocale === 'mk' }"
                        @click="switchLanguage('mk')"
                    >Македонски</button>
                </div>
                <a href="/contact" class="mobile-cta">
                    {{ ctaText }}
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 12px 0;
    transition: all 0.3s ease;
}

.site-header.scrolled {
    background: rgba(30, 45, 61, 0.95);
    backdrop-filter: blur(20px);
    padding: 12px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.site-header.scrolled .header-logo img {
    height: 75px;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.header-logo img {
    height: 90px;
    width: auto;
    transition: all 0.3s ease;
}

.header-logo:hover img {
    transform: scale(1.02);
}

/* Desktop Navigation */
.desktop-nav {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 8px;
}

.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #fff;
    background: rgba(201, 168, 124, 0.2);
}

/* Header Right */
.header-right {
    display: flex;
    align-items: center;
    gap: 16px;
}

.lang-switcher {
    display: flex;
    gap: 4px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 4px;
}

.lang-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.lang-btn:hover {
    color: #fff;
}

.lang-btn.active {
    color: #1e2d3d;
    background: #c9a87c;
}

.header-cta {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #c9a87c 0%, #b8956a 100%);
    color: #1e2d3d;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.header-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
    color: #1e2d3d;
}

.header-cta svg {
    width: 16px;
    height: 16px;
}

/* Mobile Toggle */
.mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    position: relative;
    z-index: 100000;
}

.mobile-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #1e2d3d !important;
    padding: 120px 24px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 99998;
    isolation: isolate;
}

.mobile-menu.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.mobile-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e2d3d;
    z-index: -1;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mobile-link {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.3s ease;
}

.mobile-link:hover {
    color: #c9a87c;
}

.mobile-footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.mobile-lang {
    display: flex;
    gap: 12px;
}

.mobile-lang .lang-btn {
    flex: 1;
    padding: 12px;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
}

.mobile-lang .lang-btn.active {
    background: #c9a87c;
    border-color: #c9a87c;
    color: #1e2d3d;
}

.mobile-cta {
    display: block;
    text-align: center;
    background: linear-gradient(135deg, #c9a87c 0%, #b8956a 100%);
    color: #1e2d3d;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 16px;
    border-radius: 50px;
}

/* Responsive */
@media (max-width: 1199.98px) {
    .nav-link {
        padding: 10px 16px;
        font-size: 0.85rem;
    }
}

@media (max-width: 991.98px) {
    .desktop-nav {
        display: none;
    }
    
    .header-cta {
        display: none;
    }
    
    .lang-switcher {
        display: none;
    }
    
    .mobile-toggle {
        display: flex;
    }
    
    .header-logo img {
        height: 85px;
    }
}

@media (max-width: 767.98px) {
    .site-header {
        padding: 12px 0;
    }
    
    .header-logo img {
        height: 70px;
    }
    
    .mobile-link {
        font-size: 1.25rem;
    }
}
</style>
