<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { useScrollAnimation } from '@/Composables/useScrollAnimation';

useScrollAnimation();

const page = usePage();
const locale = computed(() => page.props.locale || 'en');

const seoTitle = computed(() => {
    return locale.value === 'mk' 
        ? 'Политика за приватност - Babor Medical' 
        : 'Privacy Policy - Babor Medical';
});

const companyInfo = {
    name: 'Торзо Велнес ДООЕЛ',
    address: 'Ул. Илинден бр.74',
    embs: '6234992',
    edb: '4030007637200',
    phone: '+389 75 340 933',
    email: 'torzo.wellness@yahoo.com',
};

const contentMk = {
    title: 'Политика за приватност',
    subtitle: 'Вашата приватност е важна за нас',
    lastUpdated: 'Последно ажурирано: Февруари 2026',
    sections: [
        {
            title: '1. Основни информации',
            content: `Оваа веб-страница (babormedical.com) е во сопственост и управување на:

Име на фирма: ${companyInfo.name}
Адреса: ${companyInfo.address}
ЕМБС: ${companyInfo.embs}
ЕДБ: ${companyInfo.edb}
Телефон: ${companyInfo.phone}
Е-пошта: ${companyInfo.email}

Фирмата е контролор на лични податоци согласно Законот за заштита на лични податоци.`
        },
        {
            title: '2. Кои податоци ги собираме',
            content: `Преку оваа веб-страница можеме да ги собираме следните лични податоци:`,
            list: [
                'Име и презиме',
                'Телефонски број',
                'Е-пошта',
                'Пораки испратени преку контакт форма',
                'Податоци за закажување термин',
                'IP адреса',
                'Податоци за користење на веб-страницата'
            ]
        },
        {
            title: '3. За што ги користиме податоците',
            content: `Вашите податоци се користат исклучиво за:`,
            list: [
                'Контакт со корисници',
                'Закажување и потврда на термини',
                'Одговор на прашања',
                'Подобрување на услугите',
                'Внатрешна статистика',
                'Законски обврски'
            ]
        },
        {
            title: '4. Споделување со трети страни',
            content: `Податоците може да се споделат само со:`,
            list: [
                'IT провајдери',
                'Хостинг компании',
                'Платформи за аналитика (пример: Google Analytics)',
                'Државни органи кога тоа е законски побарано'
            ],
            footer: 'Податоците не се продаваат и не се злоупотребуваат.'
        },
        {
            title: '5. Заштита на податоците',
            content: `Фирмата применува соодветни технички и организациски мерки за заштита на податоците од:`,
            list: [
                'Неовластен пристап',
                'Губење',
                'Злоупотреба',
                'Уништување'
            ]
        },
        {
            title: '6. Колку долго ги чуваме податоците',
            content: `Податоците се чуваат онолку долго колку што е потребно за целите за кои се собрани, или согласно закон.`
        },
        {
            title: '7. Права на корисниците',
            content: `Корисниците имаат право да:`,
            list: [
                'Побараат увид',
                'Корекција',
                'Бришење',
                'Ограничување на обработка',
                'Приговор на обработка'
            ],
            footer: `Барањата се доставуваат на: ${companyInfo.email}`
        },
        {
            title: '8. Промени на политиката',
            content: `Фирмата го задржува правото на измена на оваа политика во секое време.`
        },
        {
            title: '9. Контакт',
            content: `За прашања поврзани со приватноста:`,
            contact: true
        }
    ]
};

const contentEn = {
    title: 'Privacy Policy',
    subtitle: 'Your privacy is important to us',
    lastUpdated: 'Last updated: February 2026',
    sections: [
        {
            title: '1. General Information',
            content: `This website (babormedical.com) is owned and operated by:

Company Name: ${companyInfo.name}
Address: ${companyInfo.address}
Registration No.: ${companyInfo.embs}
Tax ID: ${companyInfo.edb}
Phone: ${companyInfo.phone}
Email: ${companyInfo.email}

The company acts as the Data Controller.`
        },
        {
            title: '2. Data We Collect',
            content: `We may collect the following personal data:`,
            list: [
                'Name and surname',
                'Phone number',
                'Email address',
                'Messages submitted via contact forms',
                'Appointment booking details',
                'IP address',
                'Website usage data'
            ]
        },
        {
            title: '3. Purpose of Data Processing',
            content: `We process personal data for:`,
            list: [
                'User communication',
                'Appointment scheduling',
                'Customer support',
                'Service improvement',
                'Internal analytics',
                'Legal compliance'
            ]
        },
        {
            title: '4. Data Sharing',
            content: `Data may be shared only with:`,
            list: [
                'IT providers',
                'Hosting companies',
                'Analytics platforms (e.g., Google Analytics)',
                'Public authorities when legally required'
            ],
            footer: 'We do not sell personal data.'
        },
        {
            title: '5. Data Security',
            content: `We apply appropriate technical and organizational measures to protect personal data from:`,
            list: [
                'Unauthorized access',
                'Loss',
                'Misuse',
                'Destruction'
            ]
        },
        {
            title: '6. Data Retention',
            content: `Data is retained only for as long as necessary to fulfill its purpose or legal obligations.`
        },
        {
            title: '7. User Rights',
            content: `Users have the right to:`,
            list: [
                'Access their data',
                'Rectify incorrect data',
                'Request deletion',
                'Restrict processing',
                'Object to processing'
            ],
            footer: `Requests can be sent to: ${companyInfo.email}`
        },
        {
            title: '8. Policy Updates',
            content: `We reserve the right to update this policy at any time.`
        },
        {
            title: '9. Contact',
            content: `For privacy-related inquiries:`,
            contact: true
        }
    ]
};

const content = computed(() => locale.value === 'mk' ? contentMk : contentEn);
</script>

<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="content.subtitle" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="content.subtitle" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://babormedical.com/privacy-policy" />
        <link rel="alternate" hreflang="en" href="https://babormedical.com/privacy-policy?lang=en" />
        <link rel="alternate" hreflang="mk" href="https://babormedical.com/privacy-policy?lang=mk" />
        <link rel="alternate" hreflang="x-default" href="https://babormedical.com/privacy-policy" />
    </Head>

    <div class="main-wrapper">
        <Navbar />
        
        <section class="privacy-hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <span class="section-badge">{{ locale === 'mk' ? 'ПРАВНИ ИНФОРМАЦИИ' : 'LEGAL' }}</span>
                    <h1 class="hero-title">{{ content.title }}</h1>
                    <p class="hero-subtitle">{{ content.subtitle }}</p>
                    <p class="last-updated">{{ content.lastUpdated }}</p>
                </div>
            </div>
        </section>

        <section class="privacy-content">
            <div class="container">
                <div class="content-wrapper">
                    <div 
                        v-for="(section, index) in content.sections" 
                        :key="index" 
                        class="policy-section fade-in-up"
                        :class="`stagger-${(index % 4) + 1}`"
                    >
                        <h2 class="section-title">{{ section.title }}</h2>
                        <div class="section-content">
                            <p class="section-text" v-html="section.content.replace(/\n/g, '<br>')"></p>
                            <ul v-if="section.list" class="section-list">
                                <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
                            </ul>
                            <p v-if="section.footer" class="section-footer">{{ section.footer }}</p>
                            <div v-if="section.contact" class="contact-info">
                                <a :href="`mailto:${companyInfo.email}`" class="contact-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    {{ companyInfo.email }}
                                </a>
                                <a :href="`tel:${companyInfo.phone}`" class="contact-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    {{ companyInfo.phone }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.privacy-hero {
    padding: 80px 0 60px;
    text-align: center;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
}

.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(201, 168, 124, 0.2), rgba(201, 168, 124, 0.1));
    border: 1px solid rgba(201, 168, 124, 0.3);
    border-radius: 30px;
    color: #c9a87c;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 24px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 12px;
}

.last-updated {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
}

.privacy-content {
    padding: 60px 0 100px;
}

.content-wrapper {
    max-width: 900px;
    margin: 0 auto;
}

.policy-section {
    margin-bottom: 40px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.policy-section:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(201, 168, 124, 0.2);
}

.policy-section:last-child {
    margin-bottom: 0;
}

.section-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: #c9a87c;
    margin-bottom: 20px;
}

.section-content {
    color: rgba(255, 255, 255, 0.75);
}

.section-text {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 16px;
}

.section-text:last-child {
    margin-bottom: 0;
}

.section-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
}

.section-list li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.6;
}

.section-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #c9a87c, #b8956b);
    border-radius: 50%;
}

.section-list li:last-child {
    margin-bottom: 0;
}

.section-footer {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #c9a87c;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.contact-link:hover {
    color: #fff;
}

.contact-link svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

@media (max-width: 991.98px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .policy-section {
        padding: 30px;
    }
}

@media (max-width: 575.98px) {
    .privacy-hero {
        padding: 40px 0;
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .privacy-content {
        padding: 40px 0 60px;
    }
    
    .policy-section {
        padding: 24px;
        margin-bottom: 20px;
    }
    
    .section-title {
        font-size: 1.15rem;
    }
    
    .section-text,
    .section-list li {
        font-size: 0.95rem;
    }
}
</style>
