'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function RelationshipsBlogPage() {
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
          src="/blog-relationships.jpg"
          alt="Sağlıklı İlişkiler"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-heading mb-4 animate-fade-in">
              Sağlıklı İlişkilerin Temelleri
            </h1>
          </div>
        </div>
      </div>

      {/* Kullanıcıdan gelen yazı */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-4 text-lg text-white">
        <p>İnsanlar sosyal varlıklardır ve yaşam boyu ilişki kurma, sevme ve sevilme ihtiyacı taşırız. Ancak her ilişki dengeli, besleyici ve sürdürülebilir olmayabilir. Bu yazıda, sağlıklı bir ilişkiyi ayakta tutan en önemli yapıtaşlarını psikolojik perspektiften ele alacak, hem çiftler hem de genel bağlamda uygulanabilir somut öneriler sunacağım.</p>
        <ol className="list-decimal pl-6 my-6 space-y-4">
          <li>
            <strong>Etkili İletişim ve Empati</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Aktif Dinleme:</strong> Karşınızdaki kişinin söylediklerine tam odaklanın. Sözünü kesmeden dinlemek, duygularını ve beklentilerini anlamak için sorular sorun.</li>
              <li><strong>Ben Dili Kullanımı:</strong> “Sen hep geç kalıyorsun” yerine “Geç kaldığında beklemek beni üzüyor” demek, savunmayı azaltır ve duygularınızı net kılar.</li>
              <li><strong>Empatik Yansıtma:</strong> Partnerinizin hislerini doğru anladığınızı göstermek için “Önemli bir konu hakkında kaygılandığını hissediyorum” gibi cümleler kurun.</li>
            </ul>
          </li>
          <li>
            <strong>Güven İnşa Etme</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Tutarlılık:</strong> Söz ve davranışlarınız birbiriyle örtüşmeli. Verdiğiniz sözleri tutmak, karşılıklı güvenin en temel göstergesidir.</li>
              <li><strong>Şeffaflık:</strong> Duygularınızı, endişelerinizi ve beklentilerinizi açıkça paylaşın. Gizlenen duygular zamanla güvensizlik yaratır.</li>
              <li><strong>Affetme ve Hoşgörü:</strong> Hatalar olabilir; önemli olan bunları yapıcı bir biçimde ele alıp ilerleyebilmektir.</li>
            </ul>
          </li>
          <li>
            <strong>Sağlıklı Sınırlar ve Özerklik</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Kişisel Alan ve Zaman:</strong> Her bireyin yalnız kalmaya, hobilerine ve arkadaşlarına vakit ayırmaya ihtiyacı vardır. Bu ihtiyaçların saygı gördüğü ilişkilerde memnuniyet artar.</li>
              <li><strong>“Hayır” Diyebilme Cesareti:</strong> Karşı tarafa “hayır” demek, haklarınızı ve ihtiyaçlarınızı korumak adına gereklidir. Örneğin, yorgun olduğunuz bir günde ek sorumluluk almamak hakkınızdır.</li>
              <li><strong>Karşılıklı Sorumluluk:</strong> İlişkiyi sürdüren her iki taraf da duygusal emek ve katkı sağlar.</li>
            </ul>
          </li>
          <li>
            <strong>Ortak Değerler ve Amaçlar</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Temel İnançları Paylaşma:</strong> Aile, kariyer, çocuk eğitimi, finansal konular gibi hayattaki büyük tercihlerde uyum; çatışmaları azaltır.</li>
              <li><strong>Ortak Hedefler Belirleme:</strong> Kısa ve uzun vadeli hedefleri beraberce planlamak (“Bir ev almak”, “Yılda en az bir tatil yapmak”) bağları güçlendirir.</li>
              <li><strong>Esnek Beklentiler:</strong> Hayat dinamiktir; ortak amaçlar zamanla güncellenmeli ve esnek yaklaşılmalıdır.</li>
            </ul>
          </li>
          <li>
            <strong>Sürekli Çaba ve Öğrenme</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>İlişki Eğitimi:</strong> Kitap okumak, çift terapisi veya ilişki atölyelerine katılmak; iletişim becerilerini ve ilişki doyumunu artırır.</li>
              <li><strong>Düzenli “İlişki Bakımı”:</strong> Hafta sonu yürüyüşü, aylık “ilişki değerlendirme” sohbetleri gibi ritüeller oluşturun.</li>
              <li><strong>Küçük Jestler:</strong> Gün içinde kısa mesaj, çiçek, kahve sürprizi gibi küçük ama anlamlı davranışlar, bağlılığı besler.</li>
            </ul>
          </li>
          <li>
            <strong>Çatışma Yönetimi</strong>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Yapıcı Tartışma:</strong> Sorunu değil, çözümü odak alın. “Sen” yerine “Biz” dilini kullanın: “Bu konuda birlikte nasıl ilerleyebiliriz?”</li>
              <li><strong>Sakin Kalabilme Teknikleri:</strong> Derin nefes, 10’a kadar sayma veya tanıdık bir kelime tekrarlama, duyguların kontrolden çıkmasını önler.</li>
              <li><strong>Ara Veri Noktaları:</strong> Tartışma büyüdüğünde “5 dakika ara” istemek, tekrar huzurlu hali yakalamayı kolaylaştırır.</li>
            </ul>
          </li>
        </ol>
        <p className="mb-4"><strong>Sonuç</strong><br/>Sağlıklı bir ilişki, tesadüfi değil, özenle inşa edilen bir yapıdır. İletişim, güven, sınırlar, ortak değerler, sürekli çaba ve etkin çatışma yönetimi bir araya geldiğinde; karşımıza doyurucu ve kalıcı bir bağ çıkar. Unutmayın, en güçlü ilişkiler bile emek ister; attığınız her yapıcı adım, sevgi dolu bir gelecek inşa etmenize katkı sağlar.</p>
        <div className="mt-6">
          <strong>Kaynakça ve Öneriler:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Gottman, J. & Silver, N. (2015). The Seven Principles for Making Marriage Work.</li>
            <li>Perel, E. (2017). The State of Affairs: Rethinking Infidelity.</li>
            <li>Rosenberg, M. B. (2015). Nonviolent Communication: A Language of Life.</li>
          </ul>
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
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="animate-on-scroll opacity-0 translate-y-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-heading text-gold mb-6">
              İlişkilerde Sağlıklı İletişimin Önemi
            </h2>
            <p className="mb-6">
              Sağlıklı ve uzun ömürlü ilişkilerin temelinde etkili iletişim yatar. İyi bir 
              iletişim, karşılıklı anlayış, saygı ve güven oluşturmanın anahtarıdır.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Sağlıklı İlişkilerin Özellikleri
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Açık ve dürüst iletişim</li>
              <li>Karşılıklı saygı ve güven</li>
              <li>Sınırların farkında olma ve bunlara saygı gösterme</li>
              <li>Empati ve anlayış</li>
              <li>Özerklik ve bireyselliğe saygı</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              İlişkilerde Yaşanan Zorluklar
            </h3>
            <p className="mb-4">
              İlişkilerde karşılaşılan yaygın zorluklar ve çözüm önerileri:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">
                <strong className="text-gold">İletişim Eksikliği:</strong> Düzenli ve 
                anlamlı diyaloglar kurarak çözülebilir.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Güven Sorunları:</strong> Şeffaflık ve 
                tutarlı davranışlarla aşılabilir.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Çatışma Yönetimi:</strong> Yapıcı tartışma 
                teknikleri öğrenilebilir.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Beklenti Farklılıkları:</strong> Açık 
                iletişim ve uzlaşma ile çözülebilir.
              </li>
            </ol>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              İlişkileri Güçlendirme Yöntemleri
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Düzenli kaliteli zaman geçirme</li>
              <li>Aktif dinleme pratiği yapma</li>
              <li>Takdir ve minnettarlık ifade etme</li>
              <li>Ortak hedefler belirleme</li>
              <li>Bireysel gelişime destek olma</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Profesyonel Destek Ne Zaman Gerekli?
            </h3>
            <p className="mb-6">
              İlişki danışmanlığı, çiftlerin yaşadığı zorlukları aşmada profesyonel destek 
              sunar. Şu durumlarda danışmanlık almak faydalı olabilir:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>İletişim kopukluğu yaşandığında</li>
              <li>Çözülemeyen çatışmalar olduğunda</li>
              <li>Güven sorunları yaşandığında</li>
              <li>İlişkiyi güçlendirmek istendiğinde</li>
              <li>Önemli yaşam değişikliklerinde</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Sonuç
            </h3>
            <p className="mb-6">
              Sağlıklı ilişkiler emek ve özen gerektirir. Doğru iletişim teknikleri, 
              karşılıklı anlayış ve gerektiğinde profesyonel destek ile ilişkilerinizi 
              güçlendirebilir ve daha mutlu bir birliktelik yaşayabilirsiniz.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
} 