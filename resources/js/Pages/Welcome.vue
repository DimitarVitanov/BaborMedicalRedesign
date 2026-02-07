<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import HeroSection from '@/Components/HeroSection.vue';
import ServicesSection from '@/Components/ServicesSection.vue';
import AboutSection from '@/Components/AboutSection.vue';
import EquipmentSection from '@/Components/EquipmentSection.vue';
import NewsletterSection from '@/Components/NewsletterSection.vue';
import Footer from '@/Components/Footer.vue';

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
    services: {
        type: Array,
        default: () => [],
    },
    about: {
        type: Object,
        default: null,
    },
    equipment: {
        type: Array,
        default: () => [],
    },
});

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Babor Medical - Ласерски Центар, Естетски Центар и Ласерско Естетски Центар' 
        : 'Babor Medical - Laser Center, Aesthetic Center & Laser Aesthetic Center';
});

const seoDescription = computed(() => {
    return locale.value === 'mk'
        ? 'Ласерски центар, естетски центар и ласерско естетски центар во Македонија. Премиум третмани за нега на кожа и естетика.'
        : 'Laser center, aesthetic center and laser aesthetic center in Macedonia. Premium skincare treatments and aesthetic solutions.';
});

const seoKeywords = computed(() => {
    return locale.value === 'mk'
        ? 'ласерски центар, laserski centar, естетски центар, estetski centar, ласерско естетски центар, lasersko estetski centar, најдобар спа центар, najdobar spa center, најдобар ласерски центар, najdobar laserski centar, најдобар дерматолошки центар, najdobar dermatoloski centar, babor medical, нега на кожа'
        : 'laser center, aesthetic center, laser aesthetic center, babor medical, skincare, dermatology, spa center, laser treatments, skin care, premium skincare, beauty treatments';
});

const ogLocale = computed(() => locale.value === 'mk' ? 'mk_MK' : 'en_US');
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta name="keywords" :content="seoKeywords" />
        <meta name="author" content="Babor Medical" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:locale" :content="ogLocale" />
        <meta property="og:site_name" content="Babor Medical" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="/logo.webp" />
        
        <link rel="alternate" hreflang="en" href="https://babormedical.com/?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/" />
    </Head>

    <div class="main-wrapper">
        <Navbar />
        <HeroSection :slides="slides" />
        <AboutSection :about="about" />
        <ServicesSection :services="services" />
        <EquipmentSection :equipment="equipment" />
        <NewsletterSection />
        <Footer />
    </div>
</template>
