<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import BlackFridayJournal from '@/Components/Site/BlackFridayJournal.vue';
import { useReveal } from '@/Composables/useReveal';

// Shell for every public page: header, <main>, footer + the reveal observer.
const root = ref(null);
useReveal(root);
</script>

<template>
    <div ref="root" class="bm">
        <Navbar />
        <main id="main">
            <slot />
        </main>
        <Footer />
        <BlackFridayJournal />
    </div>
</template>
