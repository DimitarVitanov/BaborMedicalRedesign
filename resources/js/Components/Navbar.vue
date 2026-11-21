<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import Icon from '@/Components/Site/Icon.vue';

const page = usePage();
const currentLocale = computed(() => page.props.locale || 'en');
const locations = computed(() => page.props.sharedLocations || []);
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const isHidden = ref(false);
const openDropdown = ref(null); // 'services' | 'prices' | null
const mobileServicesOpen = ref(false);
const mobilePriceListOpen = ref(false);
const progress = ref(0);
const currentPath = ref('');

let lastY = 0;
let raf = 0;
let closeTimer = null;

const onScrollFrame = () => {
    raf = 0;
    const y = window.scrollY;
    isScrolled.value = y > 40;
    // hide while scrolling down, reveal on the way up
    if (!mobileMenuOpen.value && !openDropdown.value) {
        isHidden.value = y > 420 && y > lastY + 2;
        if (y < lastY - 2) isHidden.value = false;
    }
    lastY = y;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = max > 0 ? Math.min(1, y / max) : 0;
};

const handleScroll = () => {
    if (!raf) raf = requestAnimationFrame(onScrollFrame);
};

const openMenu = (name) => {
    clearTimeout(closeTimer);
    openDropdown.value = name;
};

const scheduleClose = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => (openDropdown.value = null), 160);
};

const toggleDropdown = (name, e) => {
    e.preventDefault();
    openDropdown.value = openDropdown.value === name ? null : name;
};

const closeDropdownOutside = (e) => {
    if (!e.target.closest?.('.bm-nav__item--dd')) openDropdown.value = null;
};

const onKey = (e) => {
    if (e.key === 'Escape') {
        openDropdown.value = null;
        if (mobileMenuOpen.value) toggleMobileMenu();
    }
};

const switchLanguage = (lang) => {
    if (typeof window !== 'undefined') {
        window.location.href = `${window.location.pathname}?lang=${lang}`;
    }
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    isHidden.value = false;
    if (typeof document !== 'undefined') {
        document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
    }
};

const closeMobileMenu = () => {
    if (mobileMenuOpen.value) toggleMobileMenu();
};

const toggleMobileServices = () => {
    mobileServicesOpen.value = !mobileServicesOpen.value;
};

const toggleMobilePriceList = () => {
    mobilePriceListOpen.value = !mobilePriceListOpen.value;
};

const isActive = (href) => {
    if (!currentPath.value || !href || href.startsWith('http')) return false;
    if (href === '/') return currentPath.value === '/';
    return currentPath.value === href || currentPath.value.startsWith(`${href}/`);
};

onMounted(() => {
    currentPath.value = window.location.pathname;
    // A fresh navbar always starts with the menu closed — clear any scroll
    // lock left behind by a navigation that happened while the menu was open.
    document.body.style.overflow = '';
    lastY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', closeDropdownOutside);
    document.addEventListener('keydown', onKey);
    onScrollFrame();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', closeDropdownOutside);
    document.removeEventListener('keydown', onKey);
    if (raf) cancelAnimationFrame(raf);
    clearTimeout(closeTimer);
    if (typeof document !== 'undefined') document.body.style.overflow = '';
});

const navLinks = computed(() => [
    { name: currentLocale.value === 'mk' ? 'Почетна' : 'Home', href: '/' },
    { name: currentLocale.value === 'mk' ? 'За нас' : 'About', href: '/about' },
    { name: currentLocale.value === 'mk' ? 'Ласери' : 'Lasers', href: '/lasers' },
    { name: currentLocale.value === 'mk' ? 'Онлајн продавница' : 'Online Store', href: 'https://www.skinboutique.mk', external: true },
    { name: currentLocale.value === 'mk' ? 'Кариера' : 'Careers', href: '/careers' },
    { name: currentLocale.value === 'mk' ? 'Контакт' : 'Contact', href: '/contact' },
]);

const servicesLabel = computed(() => currentLocale.value === 'mk' ? 'Услуги' : 'Services');

const serviceGroups = computed(() => [
    {
        label: currentLocale.value === 'mk' ? 'Лице, врат, деколте' : 'Face, Neck, Décolleté',
        items: [
            { name: currentLocale.value === 'mk' ? 'Козметологија' : 'Cosmetology', href: '/services/cosmetology' },
            { name: currentLocale.value === 'mk' ? 'Ласерско Естетски Третмани' : 'Laser Aesthetic Treatments', href: '/services/laser-aesthetic' },
            { name: currentLocale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods', href: '/services/injectable-methods' },
        ],
    },
    {
        label: currentLocale.value === 'mk' ? 'Тело' : 'Body',
        items: [
            { name: currentLocale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments', href: '/services/body-treatments' },
        ],
    },
]);

const priceListGroupLabel = computed(() => currentLocale.value === 'mk' ? 'Ценовници по категорија' : 'Price Lists by Category');

const priceLists = computed(() => [
    { name: currentLocale.value === 'mk' ? 'Ласерска Естетика' : 'Laser Aesthetic', href: '/services/laser-aesthetic/price-list.pdf' },
    { name: currentLocale.value === 'mk' ? 'Инјектибилни Методи' : 'Injectable Methods', href: '/services/injectable-methods/price-list.pdf' },
    { name: currentLocale.value === 'mk' ? 'Третмани на Тело' : 'Body Treatments', href: '/services/body-treatments/price-list.pdf' },
]);

const ctaText = computed(() => currentLocale.value === 'mk' ? 'Контакт' : 'Contact');
const priceListLabel = computed(() => currentLocale.value === 'mk' ? 'Ценовник' : 'Price List');
const menuLabel = computed(() => currentLocale.value === 'mk' ? 'Отвори мени' : 'Open menu');
const primaryPhone = computed(() => locations.value.find((l) => l.phone)?.phone || null);
const primaryEmail = computed(() => locations.value.find((l) => l.email)?.email || null);
</script>

<template>
    <header
        class="site-header bm-header"
        :class="{ 'is-scrolled': isScrolled, 'is-hidden': isHidden, 'is-menu-open': mobileMenuOpen }"
    >
        <div class="bm-header__bar">
            <Link href="/" class="bm-header__logo" aria-label="Babor Medical - Home">
                <img src="/logo-light.webp" alt="Babor Medical" width="64" height="64" />
            </Link>

            <!-- Desktop navigation -->
            <nav class="bm-nav" aria-label="Main">
                <Link
                    v-for="link in navLinks.slice(0, 3)"
                    :key="link.name"
                    :href="link.href"
                    class="bm-nav__link"
                    :class="{ 'is-active': isActive(link.href) }"
                >{{ link.name }}</Link>

                <div
                    class="bm-nav__item--dd"
                    @mouseenter="openMenu('services')"
                    @mouseleave="scheduleClose"
                >
                    <a
                        href="/services"
                        class="bm-nav__link bm-nav__trigger"
                        :class="{ 'is-active': isActive('/services'), 'is-open': openDropdown === 'services' }"
                        :aria-expanded="openDropdown === 'services' ? 'true' : 'false'"
                        @click="toggleDropdown('services', $event)"
                    >
                        {{ servicesLabel }}
                        <Icon name="chevron-down" :size="14" :stroke="2" />
                    </a>
                    <div class="bm-dd" :class="{ 'is-open': openDropdown === 'services' }">
                        <div class="bm-dd__panel">
                            <div v-for="group in serviceGroups" :key="group.label" class="bm-dd__group">
                                <div class="bm-dd__label">{{ group.label }}</div>
                                <Link v-for="item in group.items" :key="item.href" :href="item.href" class="bm-dd__item">
                                    <span>{{ item.name }}</span>
                                    <Icon name="arrow-up-right" :size="15" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bm-nav__item--dd"
                    @mouseenter="openMenu('prices')"
                    @mouseleave="scheduleClose"
                >
                    <a
                        href="#"
                        class="bm-nav__link bm-nav__trigger"
                        :class="{ 'is-open': openDropdown === 'prices' }"
                        :aria-expanded="openDropdown === 'prices' ? 'true' : 'false'"
                        @click="toggleDropdown('prices', $event)"
                    >
                        {{ priceListLabel }}
                        <Icon name="chevron-down" :size="14" :stroke="2" />
                    </a>
                    <div class="bm-dd" :class="{ 'is-open': openDropdown === 'prices' }">
                        <div class="bm-dd__panel bm-dd__panel--narrow">
                            <div class="bm-dd__group">
                                <div class="bm-dd__label">{{ priceListGroupLabel }}</div>
                                <a v-for="item in priceLists" :key="item.href" :href="item.href" target="_blank" class="bm-dd__item">
                                    <span class="bm-dd__file"><Icon name="file" :size="16" /></span>
                                    <span>{{ item.name }}</span>
                                    <Icon name="arrow-up-right" :size="15" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <component
                    :is="link.external ? 'a' : Link"
                    v-for="link in navLinks.slice(3)"
                    :key="link.name"
                    :href="link.href"
                    class="bm-nav__link"
                    :class="{ 'is-active': isActive(link.href) }"
                    :target="link.external ? '_blank' : null"
                    :rel="link.external ? 'noopener' : null"
                >{{ link.name }}<Icon v-if="link.external" name="arrow-up-right" :size="12" :stroke="2" class="bm-nav__ext" /></component>
            </nav>

            <div class="bm-header__right">
                <div class="bm-lang" role="group" aria-label="Language">
                    <button class="bm-lang__btn" :class="{ active: currentLocale === 'en' }" @click="switchLanguage('en')">EN</button>
                    <button class="bm-lang__btn" :class="{ active: currentLocale === 'mk' }" @click="switchLanguage('mk')">MK</button>
                </div>

                <Link href="/contact" class="bm-btn bm-btn--sm bm-header__cta" :aria-label="currentLocale === 'mk' ? 'Контактирајте го Babor Medical' : 'Contact Babor Medical'">
                    <span>{{ ctaText }}</span>
                    <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                </Link>

                <button class="bm-burger" :class="{ active: mobileMenuOpen }" :aria-label="menuLabel" :aria-expanded="mobileMenuOpen ? 'true' : 'false'" @click="toggleMobileMenu">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <div class="bm-header__progress" aria-hidden="true" :style="{ transform: `scaleX(${progress})` }"></div>
    </header>

    <!-- Mobile menu -->
    <div class="mobile-menu bm-mmenu" :class="{ open: mobileMenuOpen }" data-lenis-prevent>
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <nav class="bm-mmenu__nav" aria-label="Mobile">
            <Link
                v-for="(link, i) in navLinks.slice(0, 3)"
                :key="link.name"
                :href="link.href"
                class="bm-mmenu__link"
                :style="{ '--k': i }"
                @click="closeMobileMenu"
            >
                <span class="bm-mmenu__idx">0{{ i + 1 }}</span>{{ link.name }}
            </Link>

            <div class="bm-mmenu__group" :style="{ '--k': 3 }">
                <button class="bm-mmenu__link bm-mmenu__trigger" :aria-expanded="mobileServicesOpen ? 'true' : 'false'" @click="toggleMobileServices">
                    <span class="bm-mmenu__idx">04</span>{{ servicesLabel }}
                    <Icon name="plus" :size="22" class="bm-mmenu__plus" :class="{ rotated: mobileServicesOpen }" />
                </button>
                <div class="bm-mmenu__sub" :class="{ open: mobileServicesOpen }">
                    <div>
                        <template v-for="group in serviceGroups" :key="group.label">
                            <span class="bm-mmenu__sublabel">{{ group.label }}</span>
                            <Link v-for="item in group.items" :key="item.href" :href="item.href" class="bm-mmenu__subitem" @click="closeMobileMenu">{{ item.name }}</Link>
                        </template>
                    </div>
                </div>
            </div>

            <div class="bm-mmenu__group" :style="{ '--k': 4 }">
                <button class="bm-mmenu__link bm-mmenu__trigger" :aria-expanded="mobilePriceListOpen ? 'true' : 'false'" @click="toggleMobilePriceList">
                    <span class="bm-mmenu__idx">05</span>{{ priceListLabel }}
                    <Icon name="plus" :size="22" class="bm-mmenu__plus" :class="{ rotated: mobilePriceListOpen }" />
                </button>
                <div class="bm-mmenu__sub" :class="{ open: mobilePriceListOpen }">
                    <div>
                        <a v-for="item in priceLists" :key="item.href" :href="item.href" target="_blank" class="bm-mmenu__subitem" @click="closeMobileMenu">
                            <Icon name="file" :size="16" />{{ item.name }}
                        </a>
                    </div>
                </div>
            </div>

            <component
                :is="link.external ? 'a' : Link"
                v-for="(link, i) in navLinks.slice(3)"
                :key="link.name"
                :href="link.href"
                class="bm-mmenu__link"
                :style="{ '--k': i + 5 }"
                :target="link.external ? '_blank' : null"
                :rel="link.external ? 'noopener' : null"
                @click="closeMobileMenu"
            >
                <span class="bm-mmenu__idx">0{{ i + 6 }}</span>{{ link.name }}
            </component>
        </nav>

        <div class="bm-mmenu__footer">
            <div class="bm-mmenu__lang">
                <button class="bm-lang__btn" :class="{ active: currentLocale === 'en' }" @click="switchLanguage('en')">English</button>
                <button class="bm-lang__btn" :class="{ active: currentLocale === 'mk' }" @click="switchLanguage('mk')">Македонски</button>
            </div>
            <div class="bm-mmenu__contact">
                <a v-if="primaryPhone" :href="`tel:${primaryPhone}`"><Icon name="phone" :size="16" />{{ primaryPhone }}</a>
                <a v-if="primaryEmail" :href="`mailto:${primaryEmail}`"><Icon name="mail" :size="16" />{{ primaryEmail }}</a>
            </div>
            <a href="/contact" class="bm-btn bm-mmenu__cta" @click="closeMobileMenu">
                <span>{{ ctaText }}</span>
                <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
            </a>
        </div>
    </div>
</template>

<style scoped>
/* ---------- Header bar ---------- */
.bm-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding-top: env(safe-area-inset-top, 0px);
    color: var(--on-dark);
    transition: transform 0.6s var(--ease-out), background-color 0.5s ease, backdrop-filter 0.5s ease;
}
.bm-header::before {
    content: '';
    position: absolute;
    inset: 0 0 -40px;
    background: linear-gradient(180deg, rgba(22, 10, 14, 0.55), transparent);
    pointer-events: none;
    transition: opacity 0.5s;
}
.bm-header.is-scrolled {
    background: rgba(22, 10, 14, 0.92);
    backdrop-filter: blur(18px) saturate(140%);
    -webkit-backdrop-filter: blur(18px) saturate(140%);
}
.bm-header.is-scrolled::before { opacity: 0; }
.bm-header.is-hidden { transform: translate3d(0, -110%, 0); }
.bm-header.is-menu-open { background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; }

.bm-header__bar {
    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;
    height: var(--header-h);
    max-width: calc(1480px + var(--gutter) * 2);
    margin: 0 auto;
    padding-inline: var(--gutter);
}
.bm-header__logo { display: block; flex: none; width: 72px; height: 72px; margin-left: -8px; }
.bm-header__logo img { width: 100%; height: 100%; object-fit: contain; }

.bm-header__progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--wine-500), var(--gold-300));
    transform-origin: left;
    opacity: 0;
    transition: opacity 0.4s;
}
.bm-header.is-scrolled .bm-header__progress { opacity: 1; }

/* ---------- Desktop nav ---------- */
.bm-nav {
    display: flex;
    align-items: center;
    gap: clamp(4px, 1vw, 14px);
    margin-inline: auto;
}
.bm-nav__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 10px;
    font-size: 0.86rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--on-dark-muted);
    white-space: nowrap;
    transition: color 0.3s;
}
.bm-nav__link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--gold-300);
    transform: translateX(-50%) scale(0);
    transition: transform 0.4s var(--ease-out);
}
.bm-nav__link:hover, .bm-nav__link.is-open { color: var(--on-dark); }
.bm-nav__link.is-active { color: var(--on-dark); }
.bm-nav__link.is-active::after, .bm-nav__link:hover::after { transform: translateX(-50%) scale(1); }
.bm-nav__trigger svg { transition: transform 0.4s var(--ease-out); }
.bm-nav__trigger.is-open svg { transform: rotate(180deg); }
.bm-nav__ext { opacity: 0.6; }

.bm-nav__item--dd { position: relative; }
.bm-dd {
    position: absolute;
    top: 100%;
    left: 50%;
    padding-top: 14px;
    transform: translate3d(-50%, 10px, 0);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.35s ease, transform 0.5s var(--ease-out), visibility 0.35s;
}
.bm-dd.is-open { opacity: 1; visibility: visible; pointer-events: auto; transform: translate3d(-50%, 0, 0); }
.bm-dd__panel {
    display: grid;
    gap: 18px;
    min-width: 320px;
    padding: 22px;
    border-radius: 22px;
    background: rgba(31, 12, 20, 0.97);
    border: 1px solid var(--line-dark);
    box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
}
.bm-dd__group { display: grid; gap: 2px; }
.bm-dd__group + .bm-dd__group { padding-top: 16px; border-top: 1px solid var(--line-dark); }
.bm-dd__label {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--gold-300);
    padding: 0 12px 8px;
}
.bm-dd__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 12px;
    border-radius: 12px;
    font-size: 0.92rem;
    color: var(--on-dark);
    transition: background 0.3s, color 0.3s;
}
.bm-dd__item > span:not(.bm-dd__file) { flex: 1; }
.bm-dd__item > svg { opacity: 0; transform: translate(-6px, 6px); transition: opacity 0.3s, transform 0.4s var(--ease-out); color: var(--gold-300); }
.bm-dd__item:hover { background: rgba(246, 238, 230, 0.06); }
.bm-dd__item:hover > svg { opacity: 1; transform: none; }
.bm-dd__file {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: rgba(217, 185, 149, 0.12);
    color: var(--gold-300);
    flex: none;
}

/* ---------- Right side ---------- */
.bm-header__right { display: flex; align-items: center; gap: 14px; flex: none; }
.bm-lang {
    display: inline-flex;
    padding: 4px;
    border-radius: 999px;
    border: 1px solid var(--line-dark);
}
.bm-lang__btn {
    border: 0;
    background: transparent;
    color: var(--on-dark-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    padding: 7px 12px;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}
.bm-lang__btn:hover { color: var(--on-dark); }
.bm-lang__btn.active { background: var(--beige-200); color: var(--wine-800); }

.bm-burger {
    display: none;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    background: rgba(246, 238, 230, 0.04);
    cursor: pointer;
}
.bm-burger span {
    position: absolute;
    left: 15px;
    right: 15px;
    height: 1.5px;
    background: var(--on-dark);
    transition: transform 0.5s var(--ease-out), top 0.5s var(--ease-out);
}
.bm-burger span:nth-child(1) { top: 20px; }
.bm-burger span:nth-child(2) { top: 28px; }
.bm-burger.active span:nth-child(1) { top: 24px; transform: rotate(45deg); }
.bm-burger.active span:nth-child(2) { top: 24px; transform: rotate(-45deg); }

/* ---------- Mobile menu ---------- */
.bm-mmenu {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    padding: calc(var(--header-h) + 24px + env(safe-area-inset-top, 0px)) var(--gutter) calc(28px + env(safe-area-inset-bottom, 0px));
    background: var(--wine-950);
    color: var(--on-dark);
    overflow-y: auto;
    clip-path: circle(0% at calc(100% - 50px) 44px);
    visibility: hidden;
    transition: clip-path 0.38s var(--ease-in-out), visibility 0s linear 0.38s;
}
.bm-mmenu.open {
    clip-path: circle(150% at calc(100% - 50px) 44px);
    visibility: visible;
    transition: clip-path 0.5s var(--ease-in-out), visibility 0s;
}
.bm-mmenu__nav { position: relative; display: grid; }
.bm-mmenu__link {
    display: flex;
    align-items: baseline;
    gap: 16px;
    width: 100%;
    padding: 12px 0;
    border: 0;
    border-bottom: 1px solid var(--line-dark);
    background: none;
    color: var(--on-dark);
    font-family: var(--font-display);
    font-size: clamp(1.7rem, 7vw, 2.4rem);
    font-weight: 300;
    line-height: 1.15;
    text-align: left;
    opacity: 0;
    transform: translate3d(0, 24px, 0);
    transition: opacity 0.4s var(--ease-out), transform 0.5s var(--ease-out), color 0.3s;
}
.bm-mmenu__group .bm-mmenu__link { opacity: 1; transform: none; }
.bm-mmenu__group {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
    transition: opacity 0.4s var(--ease-out), transform 0.5s var(--ease-out);
}
.bm-mmenu.open .bm-mmenu__link,
.bm-mmenu.open .bm-mmenu__group {
    opacity: 1;
    transform: none;
    transition-delay: calc(0.08s + var(--k, 0) * 0.035s);
}
.bm-mmenu__link:hover { color: var(--gold-300); }
.bm-mmenu__idx {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--gold-300);
    min-width: 22px;
}
.bm-mmenu__trigger { cursor: pointer; }
.bm-mmenu__plus { margin-left: auto; align-self: center; transition: transform 0.5s var(--ease-out); color: var(--gold-300); }
.bm-mmenu__plus.rotated { transform: rotate(45deg); }
.bm-mmenu__sub { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.5s var(--ease-out); }
.bm-mmenu__sub.open { grid-template-rows: 1fr; }
.bm-mmenu__sub > div { overflow: hidden; display: grid; padding-left: 38px; }
.bm-mmenu__sub.open > div { padding-block: 10px 16px; }
.bm-mmenu__sublabel {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-300);
    margin: 10px 0 4px;
}
.bm-mmenu__subitem {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 0;
    font-size: 1.02rem;
    color: var(--on-dark-muted);
}
.bm-mmenu__subitem:hover { color: var(--on-dark); }

.bm-mmenu__footer { position: relative; display: grid; gap: 20px; }
.bm-mmenu__lang { display: flex; gap: 8px; }
.bm-mmenu__lang .bm-lang__btn { border: 1px solid var(--line-dark); padding: 10px 18px; }
.bm-mmenu__contact { display: grid; gap: 8px; font-size: 0.95rem; color: var(--on-dark-muted); }
.bm-mmenu__contact a { display: inline-flex; align-items: center; gap: 10px; }
.bm-mmenu__cta { width: 100%; justify-content: space-between; }

@media (max-width: 1279.98px) {
    .bm-nav { display: none; }
    .bm-header__right { margin-left: auto; }
    .bm-burger { display: inline-block; }
}
@media (max-width: 575.98px) {
    .bm-header__bar { height: 76px; gap: 12px; }
    .bm-header__logo { width: 54px; height: 54px; }
    .bm-header__cta { display: none; }
    .bm-lang__btn { padding: 7px 10px; }
}
@media (min-width: 1280px) {
    .bm-mmenu { display: none; }
}
</style>
