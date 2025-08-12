'use client';
import Link from 'next/link';

export default function NefesKocluguBlog() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-green)] mt-6 mb-4">
            Kozmik Enerji, Biyoenerji, Nefes, Meditasyon ve EFT: Holistik Şifanın Kapsamlı Gücü
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>5 dakika okuma</span>
            <span>•</span>
            <span>Kozmik Enerji</span>
            <span>•</span>
            <span>Nefes Koçluğu</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="/blog-anxiety.jpg" 
            alt="Nefes Koçluğu ve Kozmik Enerji" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Holistik şifa, bireyi bir bütün olarak ele alan, fiziksel, zihinsel, duygusal ve ruhsal sağlığın birbiriyle ayrılmaz bir bütün olduğunu savunan bir yaklaşımdır. Bu bütünlüğü sağlamak için kullanılan en güçlü araçlardan bazıları <strong>kozmik enerji</strong>, <strong>biyoenerji</strong>, <strong>nefes teknikleri</strong>, <strong>meditasyon</strong> ve <strong>EFT (Duygusal Özgürleşme Teknikleri)</strong> gibi yöntemlerdir. Bu teknikler, bedenin ve zihnin doğal iyileşme mekanizmalarını harekete geçirerek yaşamın her alanında derin ve kalıcı bir dönüşüm sağlar.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Tedaviye ve Rahatsızlıklara Pozitif Katkıları
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu holistik teknikler, bir hastalık teşhisi veya tedavisi olmaktan ziyade, çeşitli rahatsızlıkların temelinde yatan enerjisel ve duygusal blokajları çözmeye odaklanır.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Fiziksel Rahatsızlıklar
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Kozmik enerji</strong> ve <strong>biyoenerji</strong>, bedenin doğal enerji akışını dengeleyerek bağışıklık sistemini güçlendirir ve iyileşme sürecini hızlandırır. <strong>Nefes teknikleri</strong> ve <strong>meditasyon</strong>, stresi ve kaygıyı azaltarak bedenin gevşemesine ve kronik ağrı, migren, sindirim sorunları gibi rahatsızlıkların hafiflemesine yardımcı olur. <strong>EFT</strong> ise fiziksel ağrıların duygusal kök nedenlerini bulup serbest bırakarak kalıcı rahatlama sağlayabilir.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Zihinsel ve Duygusal Denge
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu tekniklerin en belirgin faydası, zihinsel ve duygusal sağlığa olan katkılarıdır. <strong>Meditasyon</strong>, zihni sakinleştirerek odaklanmayı artırır ve negatif düşünce kalıplarını kırmaya yardımcı olur. <strong>EFT</strong>, travmatik anıların ve negatif duygusal yüklerin serbest bırakılmasını sağlayarak kaygı, depresyon ve fobilerin etkilerini azaltabilir. Bu süreçler, kişinin daha güçlü, dengeli ve huzurlu hissetmesini sağlar.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Ruhsal ve Bedensel Gençleştirici Faydaları
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu holistik teknikler, sadece mevcut rahatsızlıkları iyileştirmekle kalmaz, aynı zamanda ruhsal bir uyanışa ve bedensel bir gençleşmeye de katkıda bulunur.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Ruhsal Gelişim
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Kozmik enerji</strong>, <strong>biyoenerji</strong> ve <strong>meditasyon</strong> pratikleri, bireyin içsel bilgeliğiyle ve evrensel enerjiyle bağlantı kurmasını sağlar. Bu, daha yüksek bir farkındalık düzeyine ulaşmaya, yaşam amacını keşfetmeye ve derin bir içsel huzur hissetmeye yardımcı olur. Bu süreç, kişinin ruhsal yolculuğunda önemli bir dönüşüm yaratır.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Bedensel Gençleşme
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kronik stres, bedenin erken yaşlanmasının en büyük nedenlerinden biridir. <strong>Nefes teknikleri</strong> ve <strong>meditasyon</strong>, stresi azaltarak hücrelerin yenilenmesine ve bedenin daha canlı kalmasına katkıda bulunur. <strong>Kozmik enerji</strong> ve <strong>biyoenerji</strong> ise bedendeki enerji akışını artırarak hücrelerin ve dokuların daha iyi beslenmesini sağlar. Bu da cildin daha parlak ve genç görünmesine yardımcı olabilir.
            </p>

            <hr className="my-8 border-gray-300" />

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Yaşam Alanlarına Pozitif Katkıları
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu teknikler, bireyin içsel dünyasındaki dengeyi sağlayarak dış dünyayla olan etkileşimini de olumlu yönde etkiler.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Kilo Kontrolü
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kilo kontrolü, sadece fiziksel bir durum değildir; duygusal yeme alışkanlıkları ve stres gibi faktörlerle yakından ilişkilidir. <strong>Meditasyon</strong> ve <strong>nefes teknikleri</strong>, stresi azaltarak duygusal yeme krizlerini önleyebilir. <strong>EFT</strong> ise kilo alma ve beden imajı ile ilgili bilinçaltındaki negatif inançları ve duygusal blokajları çözerek daha sağlıklı yeme alışkanlıkları geliştirilmesine destek olur. <strong>Kozmik enerji</strong> ve <strong>biyoenerji</strong> ise bedenin metabolizmasını dengeleyerek kilo verme sürecine pozitif katkı sağlar.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Bolluk ve Bereket
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Holistik yaklaşıma göre, bolluk ve bereket sadece maddi zenginlik değildir; yaşamın her alanında tatmin edici ve zengin bir deneyime sahip olmaktır. <strong>EFT</strong>, para ve başarı ile ilgili bilinçaltındaki negatif inançları temizleyerek bolluk bilincinin oluşmasına katkıda bulunur. <strong>Kozmik enerji</strong> ve <strong>biyoenerji</strong> ise evrenin sınırsız bolluğuna açılmamızı sağlar. Bu sayede kişi, bolluğu çekmeye daha açık hale gelir ve finansal durumunun yanı sıra hayatına giren fırsatları, şansları ve güzel deneyimleri de artırır.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              İlişkiler
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              İlişkiler, enerji alışverişinin en yoğun yaşandığı alanlardır. Bu teknikler, hem kendimizle olan ilişkimizi hem de başkalarıyla kurduğumuz bağları dönüştürebilir. <strong>Meditasyon</strong>, kendi içimizdeki dengeyi sağlayarak kendimize olan sevgimizi ve saygımızı artırır. Bu da başkalarının bize olan tutumunu olumlu yönde etkiler. <strong>EFT</strong> ve <strong>nefes teknikleri</strong>, ilişkilerde yaşanan anlaşmazlıkların ve çatışmaların temelinde yatan duygusal ve enerjisel blokajların çözülmesine yardımcı olur. Bu sayede, empati yeteneğimiz gelişir ve daha uyumlu, sevgi dolu ve derin bağlar kurabiliriz.
            </p>

            <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
              Başarı
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Başarı, sadece hedeflere ulaşmak değil, aynı zamanda kişisel potansiyeli en üst seviyede kullanabilmektir. <strong>Meditasyon</strong>, zihinsel berraklığı ve odaklanmayı artırarak başarıya giden yolda önemli bir destek sağlar. <strong>EFT</strong>, başarının önündeki korkuları, şüpheleri ve engelleri ortadan kaldırarak motivasyonumuzu güçlendirir. <strong>Kozmik enerji</strong> ve <strong>biyoenerji</strong> ise yaratıcılığımızı ve enerjimizi artırarak hedeflerimize daha kararlı bir şekilde ilerlememize yardımcı olur. Bu sayede kişi, zorluklar karşısında daha dirençli ve çözüm odaklı hale gelir ve başarıya giden yol daha akıcı ve kolay hale gelir.
            </p>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-6">
                Kozmik Enerji, Biyoenerji, Nefes, Meditasyon ve EFT: Holistik Şifanın Kapsamlı Gücü
              </h3>
              <Link 
                href="/#contact" 
                className="button-modern inline-block"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </article>


      </div>
    </div>
  );
} 