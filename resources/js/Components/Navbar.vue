<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue';

const page = usePage();
const currentLocale = computed(() => page.props.locale || 'en');
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const servicesDropdownOpen = ref(false);
const priceListDropdownOpen = ref(false);
const mobileServicesOpen = ref(false);
const mobilePriceListOpen = ref(false);
const triggerRef = ref(null);
const priceListTriggerRef = ref(null);
const dropdownStyle = ref({});
const priceListDropdownStyle = ref({});
const isMounted = ref(false);

const positionDropdown = () => {
    if (triggerRef.value) {
        const rect = triggerRef.value.getBoundingClientRect();
        dropdownStyle.value = {
            position: 'fixed',
            top: `${rect.bottom + 8}px`,
            left: `${rect.left + rect.width / 2}px`,
            transform: 'translateX(-50%)',
            zIndex: '999999',
        };
    }
};

const positionPriceListDropdown = () => {
    if (priceListTriggerRef.value) {
        const rect = priceListTriggerRef.value.getBoundingClientRect();
        priceListDropdownStyle.value = {
            position: 'fixed',
            top: `${rect.bottom + 8}px`,
            left: `${rect.left + rect.width / 2}px`,
            transform: 'translateX(-50%)',
            zIndex: '999999',
        };
    }
};

const toggleServicesDropdown = (e) => {
    e.preventDefault();
    servicesDropdownOpen.value = !servicesDropdownOpen.value;
    priceListDropdownOpen.value = false;
    if (servicesDropdownOpen.value) {
        nextTick(positionDropdown);
    }
};

const togglePriceListDropdown = (e) => {
    e.preventDefault();
    priceListDropdownOpen.value = !priceListDropdownOpen.value;
    servicesDropdownOpen.value = false;
    if (priceListDropdownOpen.value) {
        nextTick(positionPriceListDropdown);
    }
};

watch(isScrolled, () => {
    if (servicesDropdownOpen.value) {
        positionDropdown();
    }
    if (priceListDropdownOpen.value) {
        positionPriceListDropdown();
    }
});

const closeDropdownOutside = (e) => {
    if (typeof document === 'undefined') return;

    const clickedServicesTrigger = triggerRef.value && triggerRef.value.contains(e.target);
    const clickedServicesDropdown = document.getElementById('services-dropdown')?.contains(e.target);
    if (!clickedServicesTrigger && !clickedServicesDropdown) {
        servicesDropdownOpen.value = false;
    }

    const clickedPriceListTrigger = priceListTriggerRef.value && priceListTriggerRef.value.contains(e.target);
    const clickedPriceListDropdown = document.getElementById('pricelist-dropdown')?.contains(e.target);
    if (!clickedPriceListTrigger && !clickedPriceListDropdown) {
        priceListDropdownOpen.value = false;
    }
};

const switchLanguage = (lang) => {
    if (typeof window !== 'undefined') {
        window.location.href = `${window.location.pathname}?lang=${lang}`;
    }
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (typeof document !== 'undefined') {
        document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
    }
};

const toggleMobileServices = () => {
    mobileServicesOpen.value = !mobileServicesOpen.value;
};

const toggleMobilePriceList = () => {
    mobilePriceListOpen.value = !mobilePriceListOpen.value;
};

const handleScroll = () => {
    if (typeof window !== 'undefined') {
        isScrolled.value = window.scrollY > 50;
    }
};

onMounted(() => {
    isMounted.value = true;
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
    if (typeof document !== 'undefined') {
        document.addEventListener('click', closeDropdownOutside);
    }
});

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
    }
    if (typeof document !== 'undefined') {
        document.removeEventListener('click', closeDropdownOutside);
    }
});

const navLinks = computed(() => [
    { name: currentLocale.value === 'mk' ? 'Почетна' : 'Home', href: '/' },
    { name: currentLocale.value === 'mk' ? 'За нас' : 'About', href: '/about' },
    { name: currentLocale.value === 'mk' ? 'Ласери' : 'Lasers', href: '/lasers' },
    { name: currentLocale.value === 'mk' ? 'Контакт' : 'Contact', href: '/contact' },
]);

const servicesLabel = computed(() => currentLocale.value === 'mk' ? 'Услуги' : 'Services');

const servicesDropdownItems = computed(() => [
    { 
        name: currentLocale.value === 'mk' ? 'Козметологија' : 'Cosmetology', 
        href: '/services/cosmetology' 
    },
    { 
        name: currentLocale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments', 
        href: '/services/laser-aesthetic' 
    },
]);

const ctaText = computed(() => currentLocale.value === 'mk' ? 'Контакт' : 'Contact');
const priceListLabel = computed(() => currentLocale.value === 'mk' ? 'Ценовник' : 'Price List');
</script>

<template>
    <header class="site-header" :class="{ scrolled: isScrolled }">
        <div class="container">
            <div class="header-inner">
                <!-- Desktop Navigation (with logo inside) -->
                <nav class="desktop-nav">
                    <a href="/" class="nav-logo" aria-label="Babor Medical - Home">
                        <img src="/logo.webp" alt="Babor Medical" width="150" height="50" fetchpriority="high" />
                    </a>
                    
                    <a 
                        v-for="link in navLinks.slice(0, 3)" 
                        :key="link.name" 
                        :href="link.href"
                        class="nav-link"
                    >
                        {{ link.name }}
                    </a>
                    
                    <a 
                        id="services-trigger"
                        ref="triggerRef"
                        href="/services" 
                        class="nav-link dropdown-trigger"
                        @click="toggleServicesDropdown"
                    >
                        {{ servicesLabel }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: servicesDropdownOpen }">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </a>
                    
                    <a 
                        id="pricelist-trigger"
                        ref="priceListTriggerRef"
                        href="#" 
                        class="nav-link dropdown-trigger"
                        @click="togglePriceListDropdown"
                    >
                        {{ priceListLabel }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: priceListDropdownOpen }">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </a>

                    <a 
                        v-for="link in navLinks.slice(3)" 
                        :key="link.name" 
                        :href="link.href"
                        class="nav-link"
                    >
                        {{ link.name }}
                    </a>
                </nav>

                <!-- Mobile Logo (visible only on mobile) -->
                <a href="/" class="header-logo-mobile" aria-label="Babor Medical - Home">
                    <img src="/logo.webp" alt="Babor Medical" width="120" height="40" fetchpriority="high" />
                </a>

                <!-- Teleported dropdowns -->
                <Teleport v-if="isMounted" to="body">
                    <div 
                        v-show="servicesDropdownOpen"
                        id="services-dropdown"
                        :style="dropdownStyle"
                        class="services-dropdown-portal"
                    >
                        <div class="sdd-group-label">{{ currentLocale === 'mk' ? 'Лице, врат, деколте' : 'Face, Neck, Décolleté' }}</div>
                        <a href="/services/cosmetology" class="sdd-item">
                            {{ currentLocale === 'mk' ? 'Козметологија' : 'Cosmetology' }}
                        </a>
                        <a href="/services/laser-aesthetic" class="sdd-item">
                            {{ currentLocale === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments' }}
                        </a>
                        <a href="/services/injectable-methods" class="sdd-item">
                            {{ currentLocale === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods' }}
                        </a>
                        <div class="sdd-divider"></div>
                        <div class="sdd-group-label">{{ currentLocale === 'mk' ? 'Тело' : 'Body' }}</div>
                        <a href="/services/body-treatments" class="sdd-item">
                            {{ currentLocale === 'mk' ? 'Третмани на тело' : 'Body Treatments' }}
                        </a>
                    </div>
                </Teleport>

                <Teleport v-if="isMounted" to="body">
                    <div 
                        v-show="priceListDropdownOpen"
                        id="pricelist-dropdown"
                        :style="priceListDropdownStyle"
                        class="services-dropdown-portal"
                    >
                        <div class="sdd-group-label">{{ currentLocale === 'mk' ? 'Ценовници по категорија' : 'Price Lists by Category' }}</div>
                        <a href="/services/laser-aesthetic/price-list.pdf" target="_blank" class="sdd-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="sdd-item-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            {{ currentLocale === 'mk' ? 'Ласерска Естетика' : 'Laser Aesthetic' }}
                        </a>
                        <a href="/services/injectable-methods/price-list.pdf" target="_blank" class="sdd-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="sdd-item-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            {{ currentLocale === 'mk' ? 'Инјектибилни Методи' : 'Injectable Methods' }}
                        </a>
                        <a href="/services/body-treatments/price-list.pdf" target="_blank" class="sdd-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="sdd-item-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            {{ currentLocale === 'mk' ? 'Третмани на Тело' : 'Body Treatments' }}
                        </a>
                    </div>
                </Teleport>

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
                    <a href="/contact" class="header-cta" :aria-label="currentLocale === 'mk' ? 'Контактирајте го Babor Medical' : 'Contact Babor Medical'">
                        <span>{{ ctaText }}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }" :aria-label="currentLocale === 'mk' ? 'Отвори мени' : 'Open menu'">
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
                    v-for="link in navLinks.slice(0, 3)" 
                    :key="link.name" 
                    :href="link.href"
                    class="mobile-link"
                    @click="mobileMenuOpen = false"
                >
                    {{ link.name }}
                </a>
                
                <!-- Mobile Services Dropdown -->
                <div class="mobile-dropdown">
                    <button 
                        class="mobile-link mobile-dropdown-trigger"
                        @click="toggleMobileServices"
                    >
                        {{ servicesLabel }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: mobileServicesOpen }">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu" :class="{ open: mobileServicesOpen }">
                        <span class="mobile-group-label">{{ currentLocale === 'mk' ? 'Лице, врат, деколте' : 'Face, Neck, Décolleté' }}</span>
                        <a href="/services/cosmetology" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Козметологија' : 'Cosmetology' }}
                        </a>
                        <a href="/services/laser-aesthetic" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments' }}
                        </a>
                        <a href="/services/injectable-methods" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods' }}
                        </a>
                        <span class="mobile-group-label mobile-group-body">{{ currentLocale === 'mk' ? 'Тело' : 'Body' }}</span>
                        <a href="/services/body-treatments" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Третмани на тело' : 'Body Treatments' }}
                        </a>
                    </div>
                </div>

                <!-- Mobile Price List Dropdown -->
                <div class="mobile-dropdown">
                    <button 
                        class="mobile-link mobile-dropdown-trigger"
                        @click="toggleMobilePriceList"
                    >
                        {{ priceListLabel }}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: mobilePriceListOpen }">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu" :class="{ open: mobilePriceListOpen }">
                        <a href="/services/laser-aesthetic/price-list.pdf" target="_blank" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Ласерска Естетика' : 'Laser Aesthetic' }}
                        </a>
                        <a href="/services/injectable-methods/price-list.pdf" target="_blank" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Инјектибилни Методи' : 'Injectable Methods' }}
                        </a>
                        <a href="/services/body-treatments/price-list.pdf" target="_blank" class="mobile-dropdown-item" @click="mobileMenuOpen = false">
                            {{ currentLocale === 'mk' ? 'Третмани на Тело' : 'Body Treatments' }}
                        </a>
                    </div>
                </div>
                
                <a 
                    v-for="link in navLinks.slice(3)" 
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
    padding-top: calc(12px + env(safe-area-inset-top, 0px));
    transition: all 0.3s ease;
}

.site-header.scrolled {
    background: rgba(30, 45, 61, 0.95);
    backdrop-filter: blur(20px);
    padding: 12px 0;
    padding-top: calc(12px + env(safe-area-inset-top, 0px));
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}


.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
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

.nav-logo {
    display: flex;
    align-items: center;
    padding: 0 12px 0 8px;
    margin-right: 4px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    overflow: visible;
}

.nav-logo img {
    height: 56px;
    width: auto;
    margin: -12px 0;
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
}

.site-header.scrolled .nav-logo img {
    height: 50px;
    margin: -10px 0;
}

.nav-logo:hover img {
    transform: scale(1.05);
}

/* Mobile Logo (hidden on desktop) */
.header-logo-mobile {
    display: none;
}

.header-logo-mobile img {
    height: 80px;
    width: auto;
    transition: all 0.3s ease;
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

/* Services Dropdown */
.dropdown-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.dropdown-trigger svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
}

.dropdown-trigger svg.rotated {
    transform: rotate(180deg);
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
    padding-top: calc(120px + env(safe-area-inset-top, 0px));
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

/* Mobile Dropdown */
.mobile-dropdown {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: none;
    cursor: pointer;
    text-align: left;
}

.mobile-dropdown-trigger svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.mobile-dropdown-trigger svg.rotated {
    transform: rotate(180deg);
}

.mobile-dropdown-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.mobile-dropdown-menu.open {
    max-height: 500px;
}

.mobile-group-label {
    display: block;
    padding: 12px 0 4px 12px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(201, 168, 124, 0.5);
}

.mobile-group-body {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-dropdown-item {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 400;
    padding: 12px 0 12px 24px;
    transition: color 0.3s ease;
}

.mobile-dropdown-item:hover {
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
    
    .header-logo-mobile {
        display: block;
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
    
    .header-logo-mobile img {
        height: 85px;
    }
}

@media (max-width: 767.98px) {
    .site-header {
        padding: 12px 0;
    }
    
    .header-logo-mobile img {
        height: 70px;
    }
    
    .mobile-link {
        font-size: 1.25rem;
    }
}
</style>

<style>
.services-dropdown-portal {
    min-width: 280px;
    background: rgba(30, 45, 61, 0.98);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    padding: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(-6px);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

.sdd-group-label {
    padding: 10px 18px 4px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(201, 168, 124, 0.6);
}

.sdd-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
    margin: 6px 12px;
}

.sdd-item {
    display: block;
    padding: 12px 18px 12px 28px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.2s ease;
}

.sdd-item:hover {
    color: #fff;
    background: rgba(201, 168, 124, 0.15);
}

.sdd-item-icon {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    opacity: 0.6;
}

.sdd-item:hover .sdd-item-icon {
    opacity: 1;
}
</style>
