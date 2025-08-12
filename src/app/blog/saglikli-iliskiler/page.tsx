'use client';
import Link from 'next/link';

export default function MeditasyonKozmikBlog() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-green)] mt-6 mb-4">
            Meditasyon ve Kozmik Farkındalık
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>6 dakika okuma</span>
            <span>•</span>
            <span>Meditasyon</span>
            <span>•</span>
            <span>Kozmik Farkındalık</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="/blog-confidence.jpg" 
            alt="Meditasyon ve Kozmik Farkındalık" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Meditasyon, zihnimizi sakinleştirerek kozmik enerji akışını dengelememizi sağlayan güçlü bir araçtır. Bu antik uygulama, modern yaşamın karmaşasından uzaklaşarak içsel huzuru ve ruhsal farkındalığı keşfetmemize yardımcı olur.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Meditasyon ve Kozmik Enerji Bağlantısı
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Meditasyon sırasında zihnimiz sakinleşir ve evrenden gelen kozmik enerji ile daha derin bir bağlantı kurarız. Bu bağlantı, bedenimizin enerji merkezlerini (çakraları) dengeler ve yaşam gücümüzü artırır.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Farkındalık Nedir?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik farkındalık, evrenin büyük planının bir parçası olduğumuzu anlamak ve bu bilinçle yaşamaktır. Bu farkındalık, meditasyon pratikleriyle geliştirilir ve bize daha derin bir anlayış kazandırır.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Meditasyon Teknikleri
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerji ile bağlantı kurmak için kullanabileceğiniz çeşitli meditasyon teknikleri:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Nefes Odaklı Meditasyon</h4>
                <p className="text-gray-700">Nefesinizi takip ederek zihninizi sakinleştirin ve kozmik enerji akışını hissedin.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Çakra Meditasyonu</h4>
                <p className="text-gray-700">Enerji merkezlerinizi dengeleyerek kozmik enerji akışını optimize edin.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Mantra Meditasyonu</h4>
                <p className="text-gray-700">Kutsal sesler ve mantralarla kozmik enerji ile bağlantı kurun.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Doğa Meditasyonu</h4>
                <p className="text-gray-700">Doğanın kozmik enerjisiyle birleşerek ruhsal yenilenme yaşayın.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Meditasyonun Kozmik Faydaları
            </h2>
            
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Kozmik enerji akışını dengeler</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Ruhsal farkındalığı artırır</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>İçsel huzuru sağlar</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Sezgisel yetenekleri geliştirir</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Evrensel bilinçle bağlantı kurar</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Günlük Meditasyon Pratikleri
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik farkındalığınızı geliştirmek için günlük meditasyon pratikleri:
            </p>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Sabah Meditasyonu</h4>
              <p className="text-gray-700">Güne başlarken 15-20 dakika meditasyon yaparak kozmik enerji ile bağlantı kurun.</p>
            </div>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Akşam Meditasyonu</h4>
              <p className="text-gray-700">Günün sonunda meditasyon yaparak zihninizi sakinleştirin ve kozmik enerjiyi içinize çekin.</p>
            </div>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Mikro Meditasyonlar</h4>
              <p className="text-gray-700">Gün boyunca 2-3 dakikalık kısa meditasyonlar yaparak kozmik bağlantınızı koruyun.</p>
            </div>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Farkındalık Geliştirme
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik farkındalığınızı geliştirmek için:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Doğanın ritmini takip edin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Yıldızları ve ayı gözlemleyin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Sezgilerinizi dinleyin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Evrensel bilgelik kitapları okuyun</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Sonuç
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Meditasyon ve kozmik farkındalık, evrenin büyük planının bir parçası olduğumuzu anlamamızı sağlar. Bu uygulamalar sayesinde hem içsel huzuru hem de ruhsal gelişimi deneyimleyebiliriz. Kozmik Enerji Merkezi olarak, bu derin yolculukta size rehberlik ediyoruz.
            </p>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-4">
                Meditasyon ve Nefes Koçluğu Hizmetimiz
              </h3>
              <p className="text-gray-700 mb-4">
                Profesyonel meditasyon ve nefes koçluğu seanslarımızla kozmik farkındalığınızı geliştirin. Uzman rehberliğinde bu derin yolculuğa çıkın.
              </p>
              <Link 
                href="/#contact" 
                className="button-modern inline-block"
              >
                Meditasyon Seansı İçin Randevu Al
              </Link>
            </div>
          </div>
        </article>


      </div>
    </div>
  );
} 