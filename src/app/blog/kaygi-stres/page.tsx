'use client';
import Link from 'next/link';

export default function PozitifEnerjiBlog() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-green)] mt-6 mb-4">
            Pozitif Enerji ve Kadim Bilgelik Yöntemleriyle Sağlıklı, Dengeli ve Uzun Bir Yaşam
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>8 dakika okuma</span>
            <span>•</span>
            <span>Pozitif Enerji</span>
            <span>•</span>
            <span>Kadim Bilgelik</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="/blog-anxiety.jpg" 
            alt="Pozitif Enerji ve Kadim Bilgelik" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Modern dünyanın hızlı temposu, yoğun sorumluluklar ve sürekli bilgi bombardımanı, zihnimizi ve bedenimizi yıpratırken, ilişkilerimizi ve yaşam enerjimizi de olumsuz etkileyebiliyor. Oysa kadim bilgelik yöntemleri ve pozitif enerji uygulamalarıyla hem enerjimizi yükseltmek hem de hayatı dolu dolu, huzurla ve sağlıkla yaşamak mümkün.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bu çalışmalar, tıbba alternatif değil, tam tersine onun yanında yürüyen; kişinin yaşam kalitesini, iyileşme motivasyonunu ve enerji seviyesini yükselten tamamlayıcı uygulamalardır.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Yaşam Enerjisini Yükseltmenin Önemi
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Enerji, yaşamın görünmez yakıtıdır. Varlığımızı ayakta tutan, bizi canlı ve yaratıcı kılan güç sadece fiziksel besinlerden değil; düşüncelerimizden, duygularımızdan ve çevremizdeki enerjiden de beslenir.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pozitif enerji uygulamaları, bu yaşam gücünü artırarak bedenimizin, zihnimizin ve ruhumuzun uyum içinde çalışmasını sağlar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Günlük pratikler, meditasyonlar, nefes egzersizleri, çi (Qi) enerjisi çalışmaları ve kozmik enerji teknikleri ile frekansımızı yükseltmek mümkündür.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kadim Öğretiler ve Çi (Qi) Enerjisi
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kadim Çin, Hint ve Tibet öğretilerinde, insanın sağlıklı ve uzun ömürlü olmasının temelinde Çi (Qi) adı verilen yaşam enerjisinin dengesi bulunur.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Çi enerjisi, evrende var olan yaşam akışıdır. Bu enerji, bedenimizdeki meridyenler ve enerji merkezleri (çakralar) aracılığıyla akar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Dengesizliği; hastalık, yorgunluk, huzursuzluk ve yaşamsal isteksizlik olarak kendini gösterir. Yaşam Enerjisi akışını açan uygulamalar sayesinde, hem bedenin hem de zihnin genç ve dinç kalmasını sağlar.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Tıbbi Tedavilerin Yanında Destekleyici Rol
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Pozitif enerji uygulamaları, doktorunuzun önerdiği tedavilerin yerine geçmez; ancak iyileşme sürecinizi daha rahat, huzurlu ve güçlü geçirmenize yardımcı olabilir.
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Stres ve kaygıyı azaltarak bağışıklık sistemini destekler.</li>
              <li>Duygusal denge sağlayarak kişinin tedaviye uyumunu artırır.</li>
              <li>Hücre yenilenmesini destekleyen yüksek frekanslı bir enerji ortamı oluşturur.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Örneğin kemoterapi, cerrahi operasyon, kronik rahatsızlık tedavileri gibi süreçlerde, enerji dengeleme çalışmaları hastanın ruhsal dayanıklılığını güçlendirebilir.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Stresin Zararları ve Enerji Blokajları
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Günümüzde stres, en büyük enerji hırsızlarından biridir. Uzun süreli stres;
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Bağışıklık sistemini zayıflatır,</li>
              <li>Hormon dengesini bozar,</li>
              <li>Hücresel yaşlanmayı hızlandırır,</li>
              <li>Zihin bulanıklığına, motivasyon düşüklüğüne ve duygusal dengesizliğe neden olur.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Stresin yarattığı bu durum, enerji blokajları olarak tanımlanır. Blokajlar; geçmiş travmalar, olumsuz inançlar, bastırılmış duygular ve toksik çevre koşullarıyla güçlenir. Pozitif enerji uygulamaları bu blokajları çözer, enerji akışını yeniden serbest hale getirir.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Ruh–Beden–Zihin Uyumunun Gücü
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Gerçek sağlık, yalnızca hastalıkların yokluğu değil; ruh, beden ve zihnin uyumlu çalışmasıdır.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--accent-green)] mb-2">Beden</h4>
                <p className="text-gray-700 text-sm">Doğru beslenme, düzenli hareket, kaliteli uyku ile beslenir.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--accent-green)] mb-2">Zihin</h4>
                <p className="text-gray-700 text-sm">Meditasyon, bilinçli nefes, farkındalık pratikleriyle dinginleşir.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--accent-green)] mb-2">Ruh</h4>
                <p className="text-gray-700 text-sm">Sevgi, şefkat, bağışlama ve yüksek frekanslı duygularla beslenir.</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bu uyumu yakalayan kişi; her gün kendini daha genç, sağlıklı, huzurlu ve dingin hisseder.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Sağlıklı ve Uzun Ömürlülüğün Sırrı
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kadim bilgelik yöntemleri ve modern bilim, uzun ömürlülüğün sırrının enerji dengesi, stres yönetimi ve duygusal sağlıklılık olduğunu ortaya koyuyor. Düzenli pozitif enerji çalışmaları;
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>Hücre yenilenmesini destekler,</li>
              <li>Bağışıklık sistemini güçlendirir,</li>
              <li>Hormon dengesini korur,</li>
              <li>İç huzuru ve mutluluğu kalıcı hale getirir.</li>
            </ul>

            <div className="bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-orange)] p-6 rounded-xl mt-8 text-white">
              <h3 className="text-xl font-semibold mb-4">💫 Sonuç</h3>
              <p className="mb-4">
                Pozitif enerji uygulamaları ve kadim bilgelik yöntemleri tıbbi tedavilerin yerini almaz; ama iyileşme sürecinizi hızlandırabilir, ruhsal dayanıklılığınızı artırabilir ve hayatınıza yüksek bir yaşam enerjisi katabilir. Ruh–beden–zihin uyumunu yakaladığınızda, yalnızca hastalıklarla değil; yaşamın getirdiği her zorlukla daha güçlü baş edebilirsiniz.
              </p>
              <p className="text-sm opacity-90">
                <strong>Not:</strong> Bu çalışmalar tıbbi tedavinin yerine geçmez. Doktorunuzun önerdiği yöntemlerle birlikte uygulanarak, yaşam kalitesine ve iyileşme sürecine pozitif katkı sağlar.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Sevgilerimle</p>
              <p className="text-[var(--accent-green)] font-semibold text-lg">Özlem Gündüz</p>
            </div>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mt-8 text-center">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-4">
                Pozitif Enerji Çalışmalarıyla Sağlıklı Dengeli Bir Yaşam
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