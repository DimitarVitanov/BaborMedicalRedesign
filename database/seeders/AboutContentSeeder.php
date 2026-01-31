<?php

namespace Database\Seeders;

use App\Models\AboutContent;
use Illuminate\Database\Seeder;

class AboutContentSeeder extends Seeder
{
    public function run(): void
    {
        AboutContent::create([
            'title' => 'Your Partner in Beauty & Wellness',
            'title_mk' => 'Вашиот партнер за убавина и благосостојба',
            'subtitle' => 'With over 25 years of experience, Babor Medical is the leading dermatology and spa center in Macedonia.',
            'subtitle_mk' => 'Со повеќе од 25 години искуство, Babor Medical е водечки центар за дерматологија и спа третмани во Македонија.',
            'short_description' => 'At our BABOR&MEDICAL center, we offer individual cosmetic treatments where you will quickly forget about the stress of everyday life. You can completely relax in a pleasant atmosphere where we guarantee well-being and harmony of body and soul while we take care of your beauty and skin care.',
            'short_description_mk' => 'Во нашиот BABOR&MEDICAL центар ви нудиме индивидуални козметички третмани, каде за кратко ќе заборавите на стресот од секојдневниот живот. Можете целосно да се опуштите во пријатна атмосфера со која ви гарантираме благосостојба и хармонија на телото и душата додека ние се грижиме за вашата убавина и нега на вашата кожа.',
            'full_content' => 'At our BABOR&MEDICAL center, we offer individual cosmetic treatments where you will quickly forget about the stress of everyday life. You can completely relax in a pleasant atmosphere where we guarantee well-being and harmony of body and soul while we take care of your beauty and skin care. Our team works exclusively with high-quality BABOR products to achieve the best possible result for you and your individual beauty potential.

As professionals in the beauty business, we maintain our level of excellence through continuous education so that we can provide the best for every client. Our retail center is fully stocked with Babor and Doctor Babor products, and we also offer an ONLINE STORE that serves customers throughout the country.

The BABOR Beauty philosophy is clearly visible in a relaxing and soothing atmosphere. Special facial treatments, body care oriented towards problem areas and soothing massages.

At our BABOR&MEDICAL center, we combine medical expertise with innovative, effective cosmetics.

We look forward to your visit!

Your Babor&Medical team.',
            'full_content_mk' => 'Во нашиот BABOR&MEDICAL центар ви нудиме индивидуални козметички третмани, каде за кратко ќе заборавите на стресот од секојдневниот живот. Можете целосно да се опуштите во пријатна атмосфера со која ви гарантираме благосостојба и хармонија на телото и душата додека ние се грижиме за вашата убавина и нега на вашата кожа. Нашиот тим работи исклучиво со висококвалитетни производи од BABOR за да го постигне најдобриот можен резултат за вас и вашиот индивидуален потенцијал за убавина.

Како професионалци во бизнисот за убавина, го одржуваме нашето ниво на извонредност преку континуирано образование за да можеме на секој клиент да му го обезбедиме најдоброто. Нашиот малопродажен центар е целосно снабден со производите на Бабор и Доктор Бабор, а нудиме и ОНЛАЈН ПРОДАВНИЦА која им служи на клиентите низ целата земјa.

Филозофијата на BABOR Beauty е јасно забележлива во релаксирачка и смирувачка атмосфера. Специјални третмани за лице, нега на тело ориентирана кон проблематичните регии и смирувачки масажи.

Во нашиот BABOR&MEDICAL центар ја комбинираме медицинската експертиза со иновативна, ефективна козметика.

Со нетрпение ја очекуваме вашата посета!

Вашиот Babor&Medical тим.',
            'image' => '/images/about.webp',
            'is_active' => true,
        ]);
    }
}
