<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import HeroSection from '@/Components/HeroSection.vue';
import ServiceCategoriesSection from '@/Components/ServiceCategoriesSection.vue';
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

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                'name': 'Babor Medical',
                'url': 'https://babormedical.com',
                'potentialAction': {
                    '@type': 'SearchAction',
                    'target': 'https://babormedical.com/?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                }
            },
            {
                '@type': 'MedicalBusiness',
                '@id': 'https://babormedical.com/#organization',
                'name': 'Babor Medical',
                'url': 'https://babormedical.com',
                'logo': 'https://babormedical.com/logo.webp',
                'image': 'https://babormedical.com/logo.webp',
                'telephone': '+389 75 340 933',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Skopje',
                    'addressCountry': 'MK'
                },
                'priceRange': '$$',
                'description': locale.value === 'mk' ? 'Ласерски центар, естетски центар и ласерско естетски центар во Скопје. Ласерска епилација, козметологија, инјектибилни методи, третмани на тело.' : 'Laser center, aesthetic center and laser aesthetic center in Skopje. Laser hair removal, cosmetology, injectable methods, body treatments.',
                'hasOfferCatalog': {
                    '@type': 'OfferCatalog',
                    'name': locale.value === 'mk' ? 'Третмани' : 'Treatments',
                    'itemListElement': [
                        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': locale.value === 'mk' ? 'Ласерска епилација' : 'Laser Hair Removal', 'url': 'https://babormedical.com/services/laser-aesthetic' } },
                        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': locale.value === 'mk' ? 'Козметологија' : 'Cosmetology', 'url': 'https://babormedical.com/services/cosmetology' } },
                        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': locale.value === 'mk' ? 'Инјектибилни методи' : 'Injectable Methods', 'url': 'https://babormedical.com/services/injectable-methods' } },
                        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': locale.value === 'mk' ? 'Третмани на тело' : 'Body Treatments', 'url': 'https://babormedical.com/services/body-treatments' } }
                    ]
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Кои третмани ги нуди Babor Medical во Скопје?' : 'What treatments does Babor Medical offer in Skopje?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Babor Medical нуди ласерска епилација со Alma Soprano Titanium, козметолошки третмани со BABOR протоколи, инјектибилни методи (филери, ботокс, биостимулација) и апаратурни третмани на тело со Accent Prime, Ultraformer и EM Time.' : 'Babor Medical offers laser hair removal with Alma Soprano Titanium, cosmetology treatments with BABOR protocols, injectable methods (fillers, botox, biostimulation) and body treatments with Accent Prime, Ultraformer and EM Time.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': locale.value === 'mk' ? 'Како да закажам термин?' : 'How do I book an appointment?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': locale.value === 'mk' ? 'Можете да закажете термин преку нашата контакт страница, преку телефон на +389 75 340 933, или преку Instagram @babormedical.' : 'You can book an appointment through our contact page, by phone at +389 75 340 933, or via Instagram @babormedical.'
                        }
                    }
                ]
            }
        ]
    });
});
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
        <meta property="og:image" content="https://babormedical.com/logo.webp" />
        <meta property="og:locale" :content="ogLocale" />
        <meta property="og:site_name" content="Babor Medical" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="seoTitle" />
        <meta name="twitter:description" :content="seoDescription" />
        <meta name="twitter:image" content="https://babormedical.com/logo.webp" />
        
        <link rel="alternate" hreflang="en" href="https://babormedical.com/?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/" />
        <component is="script" type="application/ld+json" v-html="jsonLd" />
    </Head>

    <div class="main-wrapper">
        <Navbar />
        <main>
            <HeroSection :slides="slides" />
            <AboutSection :about="about" />
            <ServicesSection :services="services" />
            <ServiceCategoriesSection />
            <EquipmentSection :equipment="equipment" />
            <NewsletterSection />
        </main>
        <Footer />
    </div>
</template>
