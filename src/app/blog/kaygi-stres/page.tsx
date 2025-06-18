'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AnxietyBlogPage() {
  // Sayfa yüklendiğinde yukarıdan aşağıya doğru animasyon
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/blog-anxiety.jpg"
          alt="Kaygı ve Stres"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-heading mb-4 animate-fade-in">
              Kaygı ve Stresle Başa Çıkma Yöntemleri
            </h1>
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Geri Dönüş Linki */}
        <Link 
          href="/#blogs" 
          className="inline-block mb-8 text-gold hover:text-white transition-colors duration-300"
        >
          ← Blog Yazılarına Dön
        </Link>

        {/* Makale İçeriği */}
        <article className="prose prose-invert prose-lg max-w-none py-12">
          {/* Kullanıcıdan gelen yeni içerik */}
          <div className="mb-10 mt-8 text-white">
            <p>Günümüz dünyasında neredeyse herkesin ortaklaştığı bir deneyim varsa, o da kaygı ve stres. Yoğun iş temposu, belirsizlikler, sosyal ilişkiler ve içsel beklentiler zaman zaman hepimizi zorlayabilir. Ancak önemli olan, bu duyguların farkında olmak ve onlarla sağlıklı yollarla başa çıkabilmektir. Psikolog olarak bu yazımda, bilimsel temellere dayanan ve günlük hayatta kolaylıkla uygulanabilecek kaygı ve stresle başa çıkma yöntemlerini sizlerle paylaşmak istiyorum.</p>
            <h3>1. Kaygıyı ve Stresi Tanımak: Baş Etmenin İlk Adımı</h3>
            <p>Kaygı ve stres, tehdit ya da baskı algısı karşısında bedenimizin verdiği doğal tepkilerdir. Ancak bu tepkiler süreklilik kazandığında, uyum sağlayıcı olmaktan çıkıp yaşam kalitesini düşüren bir hale gelebilir.</p>
            <ul>
              <li>Kaygı, geleceğe yönelik belirsizlikler karşısında hissedilen zihinsel gerilimdir.</li>
              <li>Stres ise dışsal bir olay ya da durum karşısında bedenin ve zihnin gösterdiği tepkidir.</li>
            </ul>
            <p>Bu farkı bilmek, neyle mücadele ettiğimizi anlamamıza yardımcı olur.</p>
            <h3>2. Nefes ve Bedensel Farkındalık Egzersizleri</h3>
            <p>Vücudumuz kaygı anında "savaş ya da kaç" tepkisine girer. Kalp atışı hızlanır, nefes yüzeyselleşir. Bu durumda nefesimizi bilinçli bir şekilde düzenlemek, sinir sistemimizi sakinleştirmede çok etkilidir.</p>
            <p><strong>Diyafram Nefesi Egzersizi (4-4-6 Tekniği):</strong></p>
            <ul>
              <li>4 saniye boyunca burundan derin nefes al</li>
              <li>4 saniye tut</li>
              <li>6 saniye boyunca ağızdan yavaşça ver</li>
            </ul>
            <p>Günde 2-3 kez, 3-5 dakika bu egzersizi yapmak bile sinir sisteminizi dengelemeye başlayacaktır.</p>
            <h3>3. Düşüncelerle Çalışmak: Kaygıyı Tetikleyen Zihinsel Kalıplar</h3>
            <p>Kaygının temelinde çoğu zaman olumsuz otomatik düşünceler yatar. Bunlar genellikle şu kalıplarla karşımıza çıkar:</p>
            <ul>
              <li>"Ya hata yaparsam..."</li>
              <li>"Kesin kötü bir şey olacak..."</li>
              <li>"Yeterince iyi değilim..."</li>
            </ul>
            <p><strong>Ne yapmalı?</strong><br/>Bu düşünceleri fark edip sorgulamak, kaygının etkisini azaltır. Kendinize şu soruları sorun:</p>
            <ul>
              <li>"Bu düşüncenin kanıtı ne?"</li>
              <li>"Bu düşünceyi bir arkadaşım kurmuş olsaydı, ona ne söylerdim?"</li>
            </ul>
            <p>Bu tür bilişsel yeniden yapılandırma teknikleri, Bilişsel Davranışçı Terapi (BDT) temelli etkili yöntemlerdir.</p>
            <h3>4. Günlük Rutinlere Küçük ve Anlamlı Molalar Eklemek</h3>
            <p>Gün içinde 5-10 dakikalık küçük molalar vermek, zihninizi dinlendirmek açısından oldukça faydalıdır.</p>
            <ul>
              <li>Kısa yürüyüşler</li>
              <li>Meditasyon veya mindfulness uygulamaları</li>
              <li>Sıcak bir içecek eşliğinde birkaç dakikalık sessizlik</li>
            </ul>
            <p>gibi basit uygulamalar bile zihinsel dayanıklılığı artırabilir.</p>
            <h3>5. Uyku, Beslenme ve Hareketin Gücünü Hafife Almayın</h3>
            <p>Stres altında olan bir bedenin bağışıklık sistemi de zihinsel dayanıklılığı da zayıflar. Bu yüzden:</p>
            <ul>
              <li>Günde en az 7 saat uyku</li>
              <li>Düzenli ve dengeli beslenme (özellikle B vitamini, magnezyum ve omega-3 açısından zengin gıdalar)</li>
              <li>Haftada en az 3 gün, 30 dakika fiziksel aktivite</li>
            </ul>
            <p>beden-zihin dengenizi güçlendirir.</p>
            <h3>6. Ne Zaman Destek Almalıyım?</h3>
            <p>Kaygı ve stres zaman zaman hepimizin yaşadığı bir deneyimdir. Ancak bu duygular:</p>
            <ul>
              <li>Günlük işlevlerinizi etkiliyorsa,</li>
              <li>Uyku düzeninizi bozuyorsa,</li>
              <li>Sürekli bir huzursuzluk haline geldiyse</li>
            </ul>
            <p>Bir uzmandan destek almak en doğru adım olacaktır.</p>
            <h3>Sonuç: Kaygı Yönetilebilir Bir Duygudur</h3>
            <p>Stresli ya da kaygılı hissetmek sizi zayıf yapmaz. Aksine, bu duyguları fark etmek ve onlarla başa çıkmak için adım atmak, psikolojik dayanıklılığın ilk göstergesidir. Unutmayın, bazen sadece birkaç küçük değişiklik, büyük farklar yaratabilir.</p>
            <p>Duygularınızı yönetmekte zorlandığınızda profesyonel destek almak bir lüks değil, ihtiyaçtır.</p>
            <p>Siz de kaygı ve stresle başa çıkmakta zorlanıyorsanız, danışmanlık almak için benimle iletişime geçebilirsiniz.</p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-2xl md:text-3xl font-heading text-gold mb-6">
              Günümüzde Kaygı ve Stres
            </h2>
            <p className="mb-6">
              Modern yaşamın getirdiği hızlı tempo, belirsizlikler ve sorumluluklar, birçok insanın 
              yoğun kaygı ve stres yaşamasına neden olmaktadır. Bu duygusal yükler, hem zihinsel 
              hem de fiziksel sağlığımızı olumsuz etkileyebilir.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Kaygı ve Stresin Belirtileri
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Sürekli endişe ve gerginlik hissi</li>
              <li>Uyku problemleri</li>
              <li>Konsantrasyon güçlüğü</li>
              <li>Fiziksel semptomlar (baş ağrısı, kas gerginliği)</li>
              <li>Sosyal izolasyon eğilimi</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Başa Çıkma Stratejileri
            </h3>
            <p className="mb-4">
              Kaygı ve stresle başa çıkmak için kullanabileceğiniz etkili yöntemler:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">
                <strong className="text-gold">Nefes Egzersizleri:</strong> Derin nefes alma 
                teknikleri, vücudunuzu sakinleştirmeye ve stresinizi azaltmaya yardımcı olur.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Mindfulness:</strong> Şimdiki ana odaklanma 
                pratiği, kaygı düşüncelerinden uzaklaşmanıza yardımcı olabilir.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Düzenli Egzersiz:</strong> Fiziksel aktivite, 
                stres hormonlarını azaltır ve endorfin salgılanmasını artırır.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Sağlıklı Yaşam Rutini:</strong> Düzenli uyku, 
                dengeli beslenme ve su tüketimi önemlidir.
              </li>
            </ol>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Ne Zaman Profesyonel Destek Almalı?
            </h3>
            <p className="mb-6">
              Eğer kaygı ve stres günlük yaşamınızı önemli ölçüde etkiliyorsa, profesyonel 
              bir psikolojik danışmandan destek almak faydalı olabilir. Danışmanlık sürecinde:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Kaygı ve stresin temel nedenlerini belirleme</li>
              <li>Kişiye özel başa çıkma stratejileri geliştirme</li>
              <li>Düşünce ve davranış kalıplarını değiştirme</li>
              <li>Uzun vadeli çözümler üretme</li>
              <li>Öz-farkındalık geliştirme</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Sonuç
            </h3>
            <p className="mb-6">
              Kaygı ve stres, hayatın doğal bir parçası olmakla birlikte, bunların yönetimi 
              öğrenilebilir bir beceridir. Doğru teknikler ve gerektiğinde profesyonel 
              destekle, bu duyguları daha iyi yönetebilir ve daha dengeli bir yaşam 
              sürdürebilirsiniz.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
} 