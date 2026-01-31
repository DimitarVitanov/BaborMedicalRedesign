<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage();
const locale = computed(() => page.props.locale || 'en');
const locations = computed(() => page.props.sharedLocations || []);
const socialLinks = computed(() => page.props.sharedSocialLinks || {});

const currentYear = new Date().getFullYear();

const content = computed(() => ({
    tagline: locale.value === 'mk' 
        ? 'Вашиот партнер за убавина и благосостојба' 
        : 'Your Partner in Beauty & Wellness',
    description: locale.value === 'mk'
        ? 'Премиум дерматолошки и спа третмани со Babor производи.'
        : 'Premium dermatology and spa treatments with Babor products.',
    quickLinks: locale.value === 'mk' ? 'Брзи линкови' : 'Quick Links',
    services: locale.value === 'mk' ? 'Услуги' : 'Services',
    contact: locale.value === 'mk' ? 'Контакт' : 'Contact',
    workingHours: locale.value === 'mk' ? 'Работно време' : 'Working Hours',
    followUs: locale.value === 'mk' ? 'Следете нè' : 'Follow Us',
    copyright: locale.value === 'mk' 
        ? `© ${currentYear} Babor Medical. Сите права задржани.`
        : `© ${currentYear} Babor Medical. All rights reserved.`,
    mondayFriday: locale.value === 'mk' ? 'Понеделник - Петок' : 'Monday - Friday',
    saturday: locale.value === 'mk' ? 'Сабота' : 'Saturday',
    sunday: locale.value === 'mk' ? 'Недела' : 'Sunday',
    links: [
        { name: locale.value === 'mk' ? 'Почетна' : 'Home', href: '/' },
        { name: locale.value === 'mk' ? 'За нас' : 'About', href: '/about' },
        { name: locale.value === 'mk' ? 'Услуги' : 'Services', href: '/services' },
        { name: locale.value === 'mk' ? 'Ласери' : 'Lasers', href: '/lasers' },
        { name: locale.value === 'mk' ? 'Контакт' : 'Contact', href: '/contact' },
    ],
    serviceLinks: [
        { name: locale.value === 'mk' ? 'Третмани за лице' : 'Face Treatments', href: '/services' },
        { name: locale.value === 'mk' ? 'Ласерски третмани' : 'Laser Treatments', href: '/lasers' },
        { name: locale.value === 'mk' ? 'Третмани за тело' : 'Body Treatments', href: '/services' },
        { name: locale.value === 'mk' ? 'Бабор продукти' : 'Babor Products', href: '/services' },
    ],
}));
</script>

<template>
    <footer class="site-footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="/" class="footer-logo">
                            <img src="/logo.webp" alt="Babor Medical" />
                        </a>
                        <p class="footer-tagline">{{ content.tagline }}</p>
                        <p class="footer-description">{{ content.description }}</p>
                        
                        <div class="social-links">
                            <a v-if="socialLinks?.social_facebook" :href="socialLinks.social_facebook" target="_blank" rel="noopener" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a v-if="socialLinks?.social_instagram" :href="socialLinks.social_instagram" target="_blank" rel="noopener" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="18" cy="6" r="1"/>
                                </svg>
                            </a>
                            <!--
                            <a v-if="socialLinks?.social_tiktok" :href="socialLinks.social_tiktok" target="_blank" rel="noopener" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                        -->
                        </div>
                    </div>

                    <div class="footer-links">
                        <h4>{{ content.quickLinks }}</h4>
                        <ul>
                            <li v-for="link in content.links" :key="link.name">
                                <a :href="link.href">{{ link.name }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <h4>{{ content.services }}</h4>
                        <ul>
                            <li v-for="link in content.serviceLinks" :key="link.name">
                                <a :href="link.href">{{ link.name }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-contact">
                        <h4>{{ content.contact }}</h4>
                        
                        <div v-for="location in locations" :key="location.id" class="location-block">
                            <div class="location-name" v-if="locations.length > 1">{{ location.name }}</div>
                            <div class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>{{ location.address }}</span>
                            </div>
                            <div v-if="location.phone" class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <a :href="`tel:${location.phone}`">{{ location.phone }}</a>
                            </div>
                            <div v-if="location.email" class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <a :href="`mailto:${location.email}`">{{ location.email }}</a>
                            </div>

                            <div v-if="location.show_working_hours" class="working-hours-block">
                                <h5>{{ content.workingHours }}</h5>
                                <div class="hours-item">
                                    <span class="day">{{ content.mondayFriday }}</span>
                                    <span class="time">{{ location.working_hours_weekdays }}</span>
                                </div>
                                <div class="hours-item">
                                    <span class="day">{{ content.saturday }}</span>
                                    <span class="time">{{ location.working_hours_saturday }}</span>
                                </div>
                                <div class="hours-item">
                                    <span class="day">{{ content.sunday }}</span>
                                    <span class="time">{{ location.working_hours_sunday }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <p>{{ content.copyright }}</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-top {
    padding: 80px 0 60px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    gap: 50px;
}

.footer-brand {
    max-width: 300px;
}

.footer-logo img {
    height: 100px;
    width: auto;
    margin-bottom: 20px;
}

.footer-tagline {
    font-size: 1.1rem;
    font-weight: 600;
    color: #c9a87c;
    margin-bottom: 12px;
}

.footer-description {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin-bottom: 24px;
}

.social-links {
    display: flex;
    gap: 12px;
}

.social-links a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: #c9a87c;
    border-color: #c9a87c;
    color: #1e2d3d;
}

.social-links svg {
    width: 18px;
    height: 18px;
}

.footer-links h4,
.footer-contact h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #c9a87c;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
}

.contact-item svg {
    width: 18px;
    height: 18px;
    color: #c9a87c;
    flex-shrink: 0;
}

.contact-item a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: #c9a87c;
}

.location-block {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.location-block:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.location-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #c9a87c;
    margin-bottom: 12px;
}

.working-hours-block {
    margin-top: 16px;
}

.working-hours-block h5 {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.hours-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 0.9rem;
}

.hours-item .day {
    color: rgba(255, 255, 255, 0.6);
}

.hours-item .time {
    color: #c9a87c;
    font-weight: 500;
}

.footer-bottom {
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.85rem;
    margin: 0;
}

@media (max-width: 991.98px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    
    .footer-brand {
        grid-column: span 2;
        max-width: 100%;
        text-align: center;
    }
    
    .social-links {
        justify-content: center;
    }
}

@media (max-width: 575.98px) {
    .footer-top {
        padding: 60px 0 40px;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
    
    .footer-brand {
        grid-column: span 1;
    }
    
    .footer-links h4,
    .footer-contact h4 {
        margin-bottom: 16px;
    }
    
    .contact-item {
        justify-content: center;
    }
    
    .hours-item {
        justify-content: center;
        gap: 20px;
    }
}
</style>
