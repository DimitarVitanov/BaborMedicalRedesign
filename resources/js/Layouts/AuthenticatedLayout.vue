<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const showingSidebar = ref(true);
const showingMobileMenu = ref(false);
const showFlash = ref(true);

const page = usePage();

const flash = computed(() => ({
    success: page.props.flash?.success,
    error: page.props.flash?.error,
}));

const hideFlashAfterDelay = () => {
    if (page.props.flash?.success || page.props.flash?.error) {
        showFlash.value = true;
        setTimeout(() => {
            showFlash.value = false;
        }, 3000);
    }
};

watch(() => page.props.flash, hideFlashAfterDelay, { deep: true, immediate: true });

const navigation = [
    { name: 'Dashboard', href: 'dashboard', icon: 'dashboard' },
    { name: 'Hero Slides', href: 'admin.hero-slides.index', icon: 'slides' },
    { name: 'Service Categories', href: 'admin.service-categories.index', icon: 'categories' },
    { name: 'Services', href: 'admin.service-items.index', icon: 'services' },
    { name: 'Equipment', href: 'admin.equipment.index', icon: 'equipment' },
    { name: 'About', href: 'admin.about.index', icon: 'about' },
    { name: 'Locations', href: 'admin.locations.index', icon: 'locations' },
    { name: 'Newsletter', href: 'admin.newsletter.index', icon: 'newsletter' },
    { name: 'Messages', href: 'admin.contact-messages.index', icon: 'messages' },
    { name: 'Settings', href: 'admin.settings.index', icon: 'settings' },
];

const isActive = (routeName) => {
    return route().current(routeName) || route().current(routeName + '.*');
};
</script>

<template>
    <div class="admin-wrapper">
        <!-- Sidebar -->
        <aside class="admin-sidebar" :class="{ 'collapsed': !showingSidebar }">
            <div class="sidebar-header">
                <Link href="/" class="sidebar-logo">
                    <img src="/logo.webp" alt="Babor Medical" />
                </Link>
                <button class="sidebar-toggle d-none d-lg-flex" @click="showingSidebar = !showingSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
            </div>

            <nav class="sidebar-nav">
                <Link 
                    v-for="item in navigation" 
                    :key="item.name"
                    :href="route(item.href)"
                    class="nav-item"
                    :class="{ 'active': isActive(item.href) }"
                >
                    <span class="nav-icon">
                        <svg v-if="item.icon === 'dashboard'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                        </svg>
                        <svg v-if="item.icon === 'slides'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z"/>
                            <path d="M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg v-if="item.icon === 'categories'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                        </svg>
                        <svg v-if="item.icon === 'services'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z"/>
                        </svg>
                        <svg v-if="item.icon === 'equipment'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z"/>
                        </svg>
                        <svg v-if="item.icon === 'about'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <svg v-if="item.icon === 'locations'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <svg v-if="item.icon === 'newsletter'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <svg v-if="item.icon === 'messages'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg v-if="item.icon === 'settings'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                        </svg>
                    </span>
                    <span class="nav-text">{{ item.name }}</span>
                </Link>
            </nav>

            <div class="sidebar-footer">
                <div class="user-info">
                    <div class="user-avatar">
                        {{ $page.props.auth.user?.name?.charAt(0) || 'A' }}
                    </div>
                    <div class="user-details" v-if="showingSidebar">
                        <div class="user-name">{{ $page.props.auth.user?.name }}</div>
                        <div class="user-email">{{ $page.props.auth.user?.email }}</div>
                    </div>
                </div>
                <Link :href="route('logout')" method="post" as="button" class="logout-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    <span v-if="showingSidebar">Logout</span>
                </Link>
            </div>
        </aside>

        <!-- Mobile Header -->
        <header class="mobile-header d-lg-none">
            <button class="mobile-menu-btn" @click="showingMobileMenu = !showingMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <img src="/logo.webp" alt="Babor Medical" class="mobile-logo" />
        </header>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-overlay" :class="{ 'show': showingMobileMenu }" @click="showingMobileMenu = false"></div>
        
        <!-- Mobile Sidebar -->
        <aside class="mobile-sidebar" :class="{ 'show': showingMobileMenu }">
            <div class="sidebar-header">
                <img src="/logo.webp" alt="Babor Medical" class="sidebar-logo-img" />
                <button class="close-btn" @click="showingMobileMenu = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>
            <nav class="sidebar-nav">
                <Link 
                    v-for="item in navigation" 
                    :key="item.name"
                    :href="route(item.href)"
                    class="nav-item"
                    :class="{ 'active': isActive(item.href) }"
                    @click="showingMobileMenu = false"
                >
                    <span class="nav-icon">
                        <svg v-if="item.icon === 'dashboard'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                        </svg>
                        <svg v-if="item.icon === 'slides'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm-5 3V4H1v7h9zm-4.5-1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2z"/>
                            <path d="M4 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg v-if="item.icon === 'categories'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                        </svg>
                        <svg v-if="item.icon === 'services'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6.5.5A1.5 1.5 0 0 1 9 1.5h3A1.5 1.5 0 0 1 13.5 3v3A1.5 1.5 0 0 1 12 7.5H9A1.5 1.5 0 0 1 7.5 6V3zM1 9.5A1.5 1.5 0 0 1 2.5 8h3A1.5 1.5 0 0 1 7 9.5v3A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5v-3zm6.5.5A1.5 1.5 0 0 1 9 8.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13v-3z"/>
                        </svg>
                        <svg v-if="item.icon === 'equipment'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242l-.914.305-.968-.968 5.478-5.478a1 1 0 0 0-.707-1.707H10.5l-.724-2.17a1 1 0 0 0-.95-.69H6.17a1 1 0 0 0-.95.69L4.5 3H3a1 1 0 0 0-.707 1.707l.707.707H1.707A1 1 0 0 0 1 5.707V7h2V5.707L1.293 4H3.5l.724 2.17a1 1 0 0 0 .95.69h2.006a1 1 0 0 0 .95-.69L8.854 4H11v2h2V4.707a1 1 0 0 0-.293-.707L11 2.293V1h-.293a1 1 0 0 0-.707.293L8.293 3H6.707L5 1.293A1 1 0 0 0 4.293 1H3V0H1z"/>
                        </svg>
                        <svg v-if="item.icon === 'about'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <svg v-if="item.icon === 'locations'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <svg v-if="item.icon === 'newsletter'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <svg v-if="item.icon === 'messages'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg v-if="item.icon === 'settings'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                        </svg>
                    </span>
                    <span class="nav-text">{{ item.name }}</span>
                </Link>
            </nav>
        </aside>

        <!-- Toast Container (Fixed Position) -->
        <div class="toast-container">
            <Transition name="toast">
                <div v-if="showFlash && flash.success" class="toast toast-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <span>{{ flash.success }}</span>
                    <button class="toast-close" @click="showFlash = false">&times;</button>
                </div>
            </Transition>
            <Transition name="toast">
                <div v-if="showFlash && flash.error" class="toast toast-error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                    <span>{{ flash.error }}</span>
                    <button class="toast-close" @click="showFlash = false">&times;</button>
                </div>
            </Transition>
        </div>

        <!-- Main Content -->
        <main class="admin-main" :class="{ 'sidebar-collapsed': !showingSidebar }">
            <!-- Page Header -->
            <header class="page-header" v-if="$slots.header">
                <slot name="header" />
            </header>

            <!-- Page Content -->
            <div class="page-content">
                <slot />
            </div>
        </main>
    </div>
</template>

<style scoped>
.admin-wrapper {
    display: flex;
    min-height: 100vh;
    background: #f8f9fa;
}

/* Sidebar */
.admin-sidebar {
    width: 260px;
    background: linear-gradient(180deg, #1e2d3d 0%, #2a3f50 100%);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    transition: width 0.3s ease;
}

.admin-sidebar.collapsed {
    width: 80px;
}

.admin-sidebar.collapsed .nav-text,
.admin-sidebar.collapsed .user-details,
.admin-sidebar.collapsed .logout-btn span {
    display: none;
}

.admin-sidebar.collapsed .sidebar-header {
    justify-content: center;
}

.admin-sidebar.collapsed .sidebar-logo img {
    height: 50px;
}

.admin-sidebar.collapsed .sidebar-toggle svg {
    transform: rotate(180deg);
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo img,
.sidebar-logo-img {
    height: 80px;
    width: auto;
}

.sidebar-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: rgba(255, 255, 255, 0.7);
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.sidebar-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
}

.sidebar-toggle svg {
    transition: transform 0.3s ease;
}

.sidebar-nav {
    flex: 1;
    padding: 20px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}

.nav-item.active {
    background: rgba(232, 213, 196, 0.15);
    color: var(--primary-light);
}

.nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.nav-text {
    font-size: 0.95rem;
    font-weight: 500;
}

.sidebar-footer {
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.user-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-light) 0%, #d4c4b5 100%);
    color: var(--primary-dark);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.1rem;
}

.user-name {
    color: #fff;
    font-weight: 500;
    font-size: 0.9rem;
}

.user-email {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
}

.logout-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 16px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.2);
    color: #f87171;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.logout-btn:hover {
    background: rgba(239, 68, 68, 0.2);
}

/* Main Content */
.admin-main {
    flex: 1;
    margin-left: 260px;
    transition: margin-left 0.3s ease;
}

.admin-main.sidebar-collapsed {
    margin-left: 80px;
}

.page-header {
    background: #fff;
    padding: 20px 30px;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.page-content {
    padding: 30px;
}

/* Mobile */
.mobile-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(180deg, #1e2d3d 0%, #2a3f50 100%);
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
}

.mobile-menu-btn {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.mobile-logo {
    height: 60px;
    width: auto;
}

.mobile-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.mobile-overlay.show {
    display: block;
    opacity: 1;
}

.mobile-sidebar {
    display: none;
    position: fixed;
    top: 0;
    left: -280px;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, #1e2d3d 0%, #2a3f50 100%);
    z-index: 101;
    transition: left 0.3s ease;
}

.mobile-sidebar.show {
    left: 0;
}

.mobile-sidebar .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

@media (max-width: 991.98px) {
    .admin-sidebar {
        display: none;
    }
    
    .mobile-header {
        display: flex;
    }
    
    .mobile-sidebar {
        display: flex;
        flex-direction: column;
    }
    
    .admin-main {
        margin-left: 0;
        padding-top: 60px;
    }
    
    .page-content {
        padding: 20px;
    }
}

/* Cards */
:deep(.card) {
    border: none;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

:deep(.card-body) {
    padding: 24px;
}

:deep(.table) {
    margin-bottom: 0;
}

:deep(.table th) {
    font-weight: 600;
    color: #374151;
    border-top: none;
}

:deep(.btn-primary) {
    background: linear-gradient(135deg, var(--primary-light) 0%, #d4c4b5 100%);
    color: var(--primary-dark);
    border: none;
    font-weight: 600;
}

:deep(.btn-primary:hover) {
    background: linear-gradient(135deg, #d4c4b5 0%, var(--primary-light) 100%);
    color: var(--primary-dark);
}

/* Toast Container - Fixed top-right */
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.toast {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    min-width: 280px;
    max-width: 400px;
}

.toast-success {
    background: #065f46;
    color: #fff;
}

.toast-error {
    background: #991b1b;
    color: #fff;
}

.toast svg {
    flex-shrink: 0;
}

.toast span {
    flex: 1;
}

.toast-close {
    background: none;
    border: none;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    opacity: 0.7;
    padding: 0;
    color: inherit;
}

.toast-close:hover {
    opacity: 1;
}

/* Toast Transition */
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>
