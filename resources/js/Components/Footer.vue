<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Icon from '@/Components/Site/Icon.vue';
import MaskText from '@/Components/Site/MaskText.vue';

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
    poweredBy: locale.value === 'mk' ? 'Изработено од' : 'Powered by',
    mondayFriday: locale.value === 'mk' ? 'Понеделник - Петок' : 'Monday - Friday',
    saturday: locale.value === 'mk' ? 'Сабота' : 'Saturday',
    sunday: locale.value === 'mk' ? 'Недела' : 'Sunday',
    bookConsultation: locale.value === 'mk' ? 'Закажи консултација' : 'Book Consultation',
    backToTop: locale.value === 'mk' ? 'Назад на врвот' : 'Back to top',
    links: [
        { name: locale.value === 'mk' ? 'Почетна' : 'Home', href: '/' },
        { name: locale.value === 'mk' ? 'За нас' : 'About', href: '/about' },
        { name: locale.value === 'mk' ? 'Услуги' : 'Services', href: '/services' },
        { name: locale.value === 'mk' ? 'Ласери' : 'Lasers', href: '/lasers' },
        { name: locale.value === 'mk' ? 'Кариера' : 'Careers', href: '/careers' },
        { name: locale.value === 'mk' ? 'Контакт' : 'Contact', href: '/contact' },
        { name: locale.value === 'mk' ? 'Политика за приватност' : 'Privacy Policy', href: '/privacy-policy' },
    ],
    serviceLinks: [
        { name: locale.value === 'mk' ? 'Третмани за лице' : 'Face Treatments', href: '/services' },
        { name: locale.value === 'mk' ? 'Ласерски третмани' : 'Laser Treatments', href: '/lasers' },
        { name: locale.value === 'mk' ? 'Третмани за тело' : 'Body Treatments', href: '/services' },
        { name: locale.value === 'mk' ? 'Бабор продукти' : 'Babor Products', href: '/services' },
    ],
}));

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <footer class="site-footer bm-footer bm-grain">
        <div class="bm-aura" aria-hidden="true"><span></span><span></span><span></span></div>

        <!-- Closing statement + CTA -->
        <div class="bm-container bm-footer__cta">
            <h2 class="bm-h1 bm-footer__statement">
                <MaskText :text="content.tagline" />
            </h2>
            <div class="bm-footer__cta-actions" data-reveal style="--d: 0.3s">
                <a href="/contact" class="bm-btn">
                    <span>{{ content.bookConsultation }}</span>
                    <span class="bm-btn__icon"><Icon name="arrow-right" :stroke="2" /></span>
                </a>
            </div>
        </div>

        <div class="bm-container">
            <div class="bm-footer__grid">
                <div class="bm-footer__brand">
                    <a href="/" class="bm-footer__logo" aria-label="Babor Medical - Home">
                        <img src="/logo-light.webp" alt="Babor Medical" width="96" height="96" loading="lazy" />
                    </a>
                    <p class="bm-footer__desc">{{ content.description }}</p>
                    <div class="bm-footer__social" :aria-label="content.followUs">
                        <a v-if="socialLinks?.social_facebook" :href="socialLinks.social_facebook" target="_blank" rel="noopener" aria-label="Facebook">
                            <Icon name="facebook" :size="18" />
                        </a>
                        <a v-if="socialLinks?.social_instagram" :href="socialLinks.social_instagram" target="_blank" rel="noopener" aria-label="Instagram">
                            <Icon name="instagram" :size="18" />
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

                <div class="bm-footer__col">
                    <p class="footer-heading bm-footer__heading">{{ content.quickLinks }}</p>
                    <ul>
                        <li v-for="link in content.links" :key="link.name">
                            <a :href="link.href">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>

                <div class="bm-footer__col">
                    <p class="footer-heading bm-footer__heading">{{ content.services }}</p>
                    <ul>
                        <li v-for="link in content.serviceLinks" :key="link.name">
                            <a :href="link.href">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>

                <div class="bm-footer__col bm-footer__contact">
                    <p class="footer-heading bm-footer__heading">{{ content.contact }}</p>
                    <div v-for="location in locations" :key="location.id" class="bm-footer__loc">
                        <div v-if="locations.length > 1" class="bm-footer__locname">{{ location.name }}</div>
                        <div class="bm-footer__item">
                            <Icon name="pin" :size="17" />
                            <span>{{ location.address }}</span>
                        </div>
                        <div v-if="location.phone" class="bm-footer__item">
                            <Icon name="phone" :size="17" />
                            <a :href="`tel:${location.phone}`">{{ location.phone }}</a>
                        </div>
                        <div v-if="location.email" class="bm-footer__item">
                            <Icon name="mail" :size="17" />
                            <a :href="`mailto:${location.email}`">{{ location.email }}</a>
                        </div>
                        <div v-if="location.show_working_hours" class="bm-footer__hours">
                            <p class="bm-footer__hours-title">{{ content.workingHours }}</p>
                            <div class="bm-footer__hrow">
                                <span>{{ content.mondayFriday }}</span>
                                <span>{{ location.working_hours_weekdays }}</span>
                            </div>
                            <div class="bm-footer__hrow">
                                <span>{{ content.saturday }}</span>
                                <span>{{ location.working_hours_saturday }}</span>
                            </div>
                            <div class="bm-footer__hrow">
                                <span>{{ content.sunday }}</span>
                                <span>{{ location.working_hours_sunday }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bm-footer__wordmark" aria-hidden="true">Babor Medical</div>

        <div class="bm-footer__bottom">
            <div class="bm-container bm-footer__bottom-inner">
                <p>{{ content.copyright }}</p>
                <p class="powered-by">
                    {{ content.poweredBy }} <a href="https://nyxeon.io" target="_blank" rel="noopener">nyxeon.io</a>
                </p>
                <button type="button" class="bm-footer__top" @click="scrollTop">
                    {{ content.backToTop }}
                    <span><Icon name="arrow-right" :size="14" :stroke="2" /></span>
                </button>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.bm-footer {
    position: relative;
    overflow: hidden;
    background: var(--wine-900);
    color: var(--on-dark);
    padding-top: clamp(96px, 12vw, 180px);
}

.bm-footer__cta {
    position: relative;
    z-index: 1;
    max-width: var(--container);
    padding-inline: 0;
    margin-inline: max(var(--gutter), calc((100% - var(--container)) / 2));
    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: clamp(64px, 8vw, 110px);
    border-bottom: 1px solid var(--line-dark);
}
.bm-footer__statement { max-width: 900px; }
.bm-footer__cta-actions { padding-bottom: 12px; }

.bm-footer__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
    gap: clamp(36px, 4vw, 64px);
    padding-block: clamp(56px, 7vw, 96px);
}
.bm-footer__logo { display: inline-block; width: 96px; margin-bottom: 18px; }
.bm-footer__tagline {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.35rem;
    font-weight: 300;
    line-height: 1.3;
    color: var(--gold-300);
    margin-bottom: 12px;
}
.bm-footer__desc { color: var(--on-dark-muted); font-size: 0.95rem; max-width: 300px; }
.bm-footer__social { display: flex; gap: 10px; margin-top: 26px; }
.bm-footer__social a {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    color: var(--on-dark);
    transition: background 0.4s, color 0.4s, border-color 0.4s, transform 0.4s var(--ease-out);
}
.bm-footer__social a:hover { background: var(--beige-200); color: var(--wine-800); border-color: var(--beige-200); transform: translateY(-3px); }

.bm-footer__heading {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold-300);
    margin-bottom: 22px;
}
.bm-footer__col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.bm-footer__col ul a {
    position: relative;
    color: var(--on-dark-muted);
    font-size: 0.95rem;
    transition: color 0.3s, padding 0.4s var(--ease-out);
}
.bm-footer__col ul a::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 1px;
    background: var(--gold-300);
    transition: width 0.4s var(--ease-out);
}
.bm-footer__col ul a:hover { color: var(--on-dark); padding-left: 20px; }
.bm-footer__col ul a:hover::before { width: 12px; }

.bm-footer__loc + .bm-footer__loc { margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line-dark); }
.bm-footer__locname { font-family: var(--font-display); font-size: 1.15rem; margin-bottom: 12px; }
.bm-footer__item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 12px;
    color: var(--on-dark-muted);
    font-size: 0.95rem;
    line-height: 1.5;
}
.bm-footer__item svg { flex: none; margin-top: 2px; color: var(--gold-300); }
.bm-footer__item a:hover { color: var(--on-dark); }
.bm-footer__hours {
    margin-top: 20px;
    padding: 18px 20px;
    border-radius: 18px;
    border: 1px solid var(--line-dark);
    background: rgba(246, 238, 230, 0.03);
}
.bm-footer__hours-title {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-300);
    margin-bottom: 10px;
}
.bm-footer__hrow {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 6px 0;
    font-size: 0.88rem;
    color: var(--on-dark-muted);
}
.bm-footer__hrow span:last-child { color: var(--on-dark); font-variant-numeric: tabular-nums; text-align: right; }

.bm-footer__wordmark {
    position: relative;
    z-index: 0;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: 15.4vw;
    line-height: 0.8;
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-align: center;
    margin-bottom: 0;
    background: linear-gradient(180deg, rgba(217, 185, 149, 0.82) 0%, rgba(217, 185, 149, 0.34) 70%, rgba(217, 185, 149, 0.12) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    user-select: none;
    pointer-events: none;
}

.bm-footer__bottom {
    position: relative;
    z-index: 1;
    border-top: 1px solid var(--line-dark);
    background: rgba(22, 10, 14, 0.6);
}
.bm-footer__bottom-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 14px 28px;
    padding-block: 22px;
    font-size: 0.82rem;
    color: var(--on-dark-faint);
}
.powered-by a { color: var(--gold-300); font-weight: 600; transition: color 0.3s; }
.powered-by a:hover { color: var(--on-dark); }
.bm-footer__top {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 0;
    background: none;
    color: var(--on-dark-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
}
.bm-footer__top span {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid var(--line-dark);
    transform: rotate(-90deg);
    transition: background 0.3s, color 0.3s;
}
.bm-footer__top:hover span { background: var(--beige-200); color: var(--wine-800); }

@media (max-width: 991.98px) {
    .bm-footer__grid { grid-template-columns: 1fr 1fr; }
    .bm-footer__brand, .bm-footer__contact { grid-column: span 2; }
}
@media (max-width: 575.98px) {
    .bm-footer__grid { grid-template-columns: 1fr; }
    .bm-footer__brand, .bm-footer__contact { grid-column: auto; }
    .bm-footer__bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>
