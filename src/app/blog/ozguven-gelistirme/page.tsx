'use client';
import Link from 'next/link';

export default function KozmikEnerjiSifaBlog() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-green)] mt-6 mb-4">
            Kozmik Enerji ile Şifa ve Gelişim
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>4 dakika okuma</span>
            <span>•</span>
            <span>Kozmik Enerji</span>
            <span>•</span>
            <span>Şifa Teknikleri</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="/blog-relationships.jpg" 
            alt="Kozmik Enerji ile Şifa" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Evrenden gelen kozmik enerji, bedenimizin ve ruhumuzun doğal şifa kaynağıdır. Bu mucizevi enerji, doğru tekniklerle kullanıldığında hem fiziksel hem de ruhsal blokajları kaldırarak bütünsel bir iyileşme sağlar.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Enerji Nedir?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerji, evrenin her yerinde bulunan ve tüm canlı varlıkları besleyen temel yaşam gücüdür. Bu enerji, yıldızlardan, gezegenlerden ve evrenin derinliklerinden gelerek bedenimizin enerji merkezlerini (çakraları) besler ve yaşam kalitemizi artırır.
            </p>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Enerji ile Şifa Süreci
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerji şifa süreci, evrenden gelen bu mucizevi gücü bedenimize yönlendirerek başlar. Bu süreçte:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Enerji merkezlerimiz (çakralar) dengelenir</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Fiziksel ve duygusal blokajlar çözülür</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Bağışıklık sistemi güçlenir</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Ruhsal denge ve huzur sağlanır</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Enerji Teknikleri
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerjiyi hayatınıza entegre etmek için kullanabileceğiniz çeşitli teknikler vardır:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Meditasyon</h4>
                <p className="text-gray-700">Günlük meditasyon pratikleriyle kozmik enerji akışını dengeleyin ve içsel huzuru keşfedin.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Nefes Teknikleri</h4>
                <p className="text-gray-700">Özel nefes teknikleriyle kozmik enerjiyi bedeninize çekin ve yaşam gücünüzü artırın.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Enerji Merkezi Çalışması</h4>
                <p className="text-gray-700">Çakralarınızı dengeleyerek kozmik enerji akışını optimize edin.</p>
              </div>
              <div className="bg-[var(--accent-light)] p-6 rounded-xl">
                <h4 className="font-semibold text-[var(--accent-green)] mb-3">Doğa ile Bağ</h4>
                <p className="text-gray-700">Doğanın kozmik enerjisiyle birleşerek ruhsal yenilenme yaşayın.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Kozmik Enerji ile Gelişim
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerji sadece şifa değil, aynı zamanda kişisel gelişim için de kullanılır. Bu enerji ile:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Sezgisel yetenekleriniz gelişir</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Yaratıcılığınız artar</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Farkındalığınız yükselir</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-1 flex-shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Ruhsal olgunluğunuz artar</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Günlük Kozmik Enerji Pratikleri
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerjiyi günlük hayatınıza entegre etmek için basit ama etkili pratikler yapabilirsiniz:
            </p>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Sabah Ritüeli</h4>
              <p className="text-gray-700">Güne başlarken 10-15 dakika meditasyon yaparak kozmik enerjiyi bedeninize çekin.</p>
            </div>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Nefes Farkındalığı</h4>
              <p className="text-gray-700">Gün boyunca nefesinizin farkında olun ve her nefeste kozmik enerjiyi içinize çekin.</p>
            </div>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-[var(--accent-green)] mb-3">Doğa Ziyaretleri</h4>
              <p className="text-gray-700">Haftada en az bir kez doğaya çıkarak kozmik enerji ile bağ kurun.</p>
            </div>

            <h2 className="text-3xl font-bold text-[var(--accent-green)] mb-6">
              Sonuç
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kozmik enerji, evrenin bize sunduğu en değerli hediyelerden biridir. Bu enerjiyi doğru şekilde kullanarak hem fiziksel sağlığınızı hem de ruhsal gelişiminizi destekleyebilirsiniz. Kozmik Enerji Merkezi olarak, bu mucizevi enerjiyi hayatınıza entegre etmenizde size yardımcı oluyoruz.
            </p>

            <div className="bg-[var(--accent-light)] p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-4">
                Kozmik Enerji Seanslarımız
              </h3>
              <p className="text-gray-700 mb-4">
                Profesyonel kozmik enerji seanslarımızla tanışmak ve bu mucizevi enerjiyi hayatınıza entegre etmek için bizimle iletişime geçin.
              </p>
              <Link 
                href="/#contact" 
                className="button-modern inline-block"
              >
                Kozmik Enerji Seansı İçin Randevu Al
              </Link>
            </div>
          </div>
        </article>


      </div>
    </div>
  );
} 