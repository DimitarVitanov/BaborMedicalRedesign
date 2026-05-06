<?php

namespace Database\Seeders;

use App\Models\Equipment;
use Illuminate\Database\Seeder;

class VonewmerRfSeeder extends Seeder
{
    public function run(): void
    {
        Equipment::updateOrCreate(
            ['slug' => 'vonewmer-rf'],
            [
                'title_en' => 'Vonewmer RF',
                'title_mk' => 'Vonewmer RF',
                'description_en' => 'Award-winning RF technology for intelligent skin tightening and biostimulation without needles. Winner of ELLE International Beauty Awards 2025 and K-Brand Awards 2026.',
                'description_mk' => 'Наградувана RF технологија за интелигентно затегнување и биостимулација на кожа без игли. Добитник на ELLE International Beauty Awards 2025 и K-Brand Awards 2026.',
                'detailed_description_en' => '<h2>Innovative RF Technology with International Awards</h2>
<p>Vonewmer RF represents a new generation of medical radiofrequency technology designed for non-invasive skin tightening, texture improvement and stimulation of natural collagen regeneration – without needles and without downtime.</p>
<p>In recent years, Vonewmer RF has received significant attention in the global aesthetic industry and is a winner of:</p>
<ul>
<li><strong>🏆 ELLE International Beauty Awards 2025</strong> – Tools & Treatments Winner</li>
<li><strong>🏆 K-Brand Awards 2026</strong> – K-Medical Technology Category</li>
</ul>
<p>These awards confirm Vonewmer RF\'s position as one of the most innovative and promising RF technologies for skin tightening and skin quality treatments.</p>

<h2>How Does Vonewmer RF Work?</h2>
<p>Vonewmer RF uses controlled radiofrequency energy that penetrates the dermal layers of the skin, creating a precise thermal effect that:</p>
<ul>
<li>Stimulates fibroblasts</li>
<li>Promotes creation of new collagen and elastin</li>
<li>Improves microcirculation</li>
<li>Improves skin tone and structure</li>
</ul>
<p>The result is gradual tightening, improvement of skin quality and a natural lifting effect – without damaging the skin surface.</p>

<h2>Key Benefits</h2>
<ul>
<li>✔ Skin tightening and improved tone</li>
<li>✔ Reduction of fine lines and early wrinkles</li>
<li>✔ Improvement of texture and pores</li>
<li>✔ Improvement of skin quality and elasticity</li>
<li>✔ Comfortable treatment without needles</li>
<li>✔ No downtime – quick return to daily activities</li>
</ul>

<h2>Indications</h2>
<p>Vonewmer RF is ideal for patients with:</p>
<ul>
<li>Mild to moderate skin laxity</li>
<li>Impaired texture and reduced tone</li>
<li>Fine lines and early signs of aging</li>
<li>Enlarged pores and reduced skin quality</li>
<li>Patients seeking a natural anti-aging approach without aggressive procedures</li>
</ul>
<p>The treatment is suitable for various skin types and can be used throughout the year.</p>

<h2>Vonewmer RF in Babor Medical Protocols</h2>
<p>At Babor Medical, we don\'t use Vonewmer RF as an isolated treatment, but as part of personalized, multi-layered medical protocols.</p>
<p>Depending on the indication, we often combine it with:</p>
<ul>
<li><strong>Alma Hybrid Laser</strong> – for skin remodeling, texture and scars</li>
<li><strong>Alma Q</strong> – for pigmentation, vascular changes and skin rejuvenation</li>
<li><strong>Ultraformer III</strong> – for deep lifting and structural support</li>
<li><strong>Collagen stimulators and bioremodeling protocols</strong> – for long-term dermal regeneration</li>
</ul>
<p>This integrated approach enables natural, structured and long-lasting results, adapted to the individual needs of the patient.</p>

<h2>Treatment Plan</h2>
<ul>
<li><strong>Duration:</strong> 30–45 minutes</li>
<li><strong>Anesthesia:</strong> Not required</li>
<li><strong>Downtime:</strong> None</li>
<li><strong>Recommended protocol:</strong> 3–4 sessions, every 2–4 weeks</li>
</ul>
<p>Results improve gradually, with maximum effect after several months, thanks to collagen biostimulation.</p>

<h2>Natural Anti-Aging Approach</h2>
<p>Our philosophy at Babor Medical is not to change the face – but to improve the structure, quality and biological function of the skin. Vonewmer RF represents an important part of this strategy: an intelligent, safe and clinically precise approach to modern rejuvenation.</p>',

                'detailed_description_mk' => '<h2>Иновативна RF технологија со меѓународни признанија</h2>
<p>Vonewmer RF претставува нова генерација на медицинска радиофреквентна технологија, дизајнирана за неинвазивно затегнување на кожа, подобрување на текстурата и стимулирање на природната колагенска регенерација – без игли и без downtime.</p>
<p>Во последните години, Vonewmer RF добива значајно внимание во глобалната естетска индустрија и е добитник на:</p>
<ul>
<li><strong>🏆 ELLE International Beauty Awards 2025</strong> – Tools & Treatments Winner</li>
<li><strong>🏆 K-Brand Awards 2026</strong> – K-Medical Technology Category</li>
</ul>
<p>Овие признанија ја потврдуваат позицијата на Vonewmer RF како една од најиновативните и најперспективни RF технологии за skin tightening и skin quality третмани.</p>

<h2>Како делува Vonewmer RF?</h2>
<p>Vonewmer RF користи контролирана радиофреквентна енергија која продира во дермалните слоеви на кожата, создавајќи прецизен термален ефект кој:</p>
<ul>
<li>Стимулира фибробласти</li>
<li>Поттикнува создавање на нов колаген и еластин</li>
<li>Ја подобрува микроциркулацијата</li>
<li>Го подобрува тонусот и структурата на кожата</li>
</ul>
<p>Резултатот е постепено затегнување, подобрување на квалитетот на кожата и природен lifting ефект – без оштетување на површината на кожата.</p>

<h2>Клучни придобивки</h2>
<ul>
<li>✔ Затегнување и подобрување на тонусот на кожата</li>
<li>✔ Намалување на фини линии и рани брчки</li>
<li>✔ Подобрување на текстура и пори</li>
<li>✔ Подобрување на skin quality и еластичност</li>
<li>✔ Комфорен третман без игли</li>
<li>✔ Без downtime и брзо враќање на секојдневните активности</li>
</ul>

<h2>Индикации</h2>
<p>Vonewmer RF е идеален за пациенти со:</p>
<ul>
<li>Почетна до умерена опуштеност на кожата</li>
<li>Нарушена текстура и намален тонус</li>
<li>Фини линии и рани знаци на стареење</li>
<li>Проширени пори и намален skin quality</li>
<li>Пациенти кои сакаат природен anti-aging пристап без агресивни процедури</li>
</ul>
<p>Третманот е погоден за различни типови кожа и може да се користи во текот на целата година.</p>

<h2>Vonewmer RF во протоколите на Babor Medical</h2>
<p>Во Babor Medical, Vonewmer RF не го користиме како изолиран третман, туку како дел од персонализирани, мулти-слојни медицински протоколи.</p>
<p>Во зависност од индикацијата, често го комбинираме со:</p>
<ul>
<li><strong>Alma Hybrid Laser</strong> – за ремоделирање на кожа, текстура и лузни</li>
<li><strong>Alma Q</strong> – за пигментации, васкуларни промени и skin rejuvenation</li>
<li><strong>Ultraformer III</strong> – за длабок лифтинг и структурна поддршка</li>
<li><strong>Колаген стимулатори и биоремоделирачки протоколи</strong> – за долгорочна дермална регенерација</li>
</ul>
<p>Овој интегриран пристап овозможува природен, структуриран и долготраен резултат, адаптиран според индивидуалните потреби на пациентот.</p>

<h2>Третман план</h2>
<ul>
<li><strong>Времетраење:</strong> 30–45 минути</li>
<li><strong>Анестезија:</strong> Не е потребна</li>
<li><strong>Downtime:</strong> Нема</li>
<li><strong>Препорачан протокол:</strong> 3–4 сесии, на секои 2–4 недели</li>
</ul>
<p>Резултатите се подобруваат постепено, со максимален ефект по неколку месеци, благодарение на колагенската биостимулација.</p>

<h2>Природен anti-aging пристап</h2>
<p>Нашата филозофија во Babor Medical не е да го промениме лицето – туку да ја подобриме структурата, квалитетот и биолошката функција на кожата. Vonewmer RF претставува важен дел од оваа стратегија: интелигентен, безбеден и клинички прецизен пристап кон современото подмладување.</p>',

                'link' => null,
                'category' => 'rf',
                'is_active' => true,
                'sort_order' => 6,
            ]
        );
    }
}
