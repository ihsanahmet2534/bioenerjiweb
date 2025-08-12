'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[var(--accent-light)] to-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-green)] mb-6">
              Özlem Gündüz ile Yaşam Koçluğu
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Beden, Zihin ve Ruh Uyumunda Bütünsel Dönüşüm
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Merhaba, ben <strong className="text-[var(--accent-green)]">Özlem Gündüz</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                1972 doğumluyum ve en büyük gururum, kalbimin ilhamı olan muhteşem bir kızım var.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yıllar boyunca tekstil sektöründe edindiğim profesyonel tecrübelerin ardından, kendi iç yolculuğuma yönelerek bambaşka bir alanda gerçek benliğimle buluştum. Bu yolculuk beni, insanlara dokunmayı, şifalanmayı ve birlikte dönüşmeyi seçtiğim bir noktaya getirdi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bugün, yaşam koçu kimliğimle çıktığım bu yolda; kişisel gelişim, içsel uyanış ve ruhsal denge arayanlara rehberlik ediyorum. Ancak bu koçluk sadece hedef belirlemek ya da eylem planı çizmekle sınırlı değil... Benim yaklaşımım bütünsel dönüşüme dayanıyor.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6 flex items-center">
                Yaklaşımım: Bilinçten Enerjiye Uzanan Bir Yolculuk
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Yaşam koçluğunu şu uygulamalarla birleştiriyorum:
              </p>
              
              <div className="space-y-6">
                <div className="bg-[var(--accent-light)]/50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[var(--accent-green)] mb-3 flex items-center">
                    Kozmik Enerji & Pozitif Niyetler
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Evrensel enerjiyi kullanarak enerji bedenindeki blokajları çözüyorum. Çakraları dengeliyor, aura alanını temizliyor, kişinin içsel rehberliğiyle buluşmasına destek oluyorum.
                  </p>
                </div>

                <div className="bg-[var(--accent-light)]/50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[var(--accent-green)] mb-3 flex items-center">
                    EFT (Duygusal Özgürleşme Tekniği)
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Geçmişin duygusal yüklerini serbest bırakmak için, bilinçaltındaki inanç kalıplarını dönüştürüyoruz. Bu teknikle kişi zihinsel berraklık, hafiflik ve duygusal denge kazanıyor.
                  </p>
                </div>

                <div className="bg-[var(--accent-light)]/50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[var(--accent-green)] mb-3 flex items-center">
                    Nefes Teknikleri
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nefes, hem bedeni hem zihni yeniden programlamanın anahtarıdır. Stresi azaltıyor, hücreleri oksijenle besliyor, kişiyi 'şimdi'ye getiriyoruz.
                  </p>
                </div>

                <div className="bg-[var(--accent-light)]/50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[var(--accent-green)] mb-3 flex items-center">
                    Yaşam Koçluğu
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hayat amacını bulmak, içsel potansiyeli fark etmek ve dengeli adımlar atmak için, birebir koçluk seanslarıyla derin farkındalık sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6 flex items-center">
                Kimlerle Çalışıyorum?
              </h3>
              <div className="bg-gradient-to-r from-[var(--accent-green)]/10 to-[var(--accent-orange)]/10 rounded-2xl p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Değişim arayışında olan,<br/>
                  Ruhsal olarak tıkanmış hisseden,<br/>
                  Kaygı, stres veya geçmiş yüklerle baş etmek isteyen,<br/>
                  Kendi potansiyelini hayata geçirmek isteyen herkese,
                </p>
                <p className="text-lg text-gray-700">
                  bireysel ve grup çalışmalarıyla destek oluyorum.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6 flex items-center">
                Felsefem:
              </h3>
              <div className="bg-[var(--accent-light)]/30 rounded-2xl p-6 border-l-4 border-[var(--accent-green)]">
                <p className="text-xl text-gray-700 italic leading-relaxed">
                  "Sadece sorunlarını çözmek için değil, kim olduğunu hatırlaman için buradayım."
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Benim için gerçek başarı; danışanlarımın gözlerindeki ışığın yeniden parladığını görmek, bedeninin hafiflediğini, zihninin sakinleştiğini ve ruhunun özgürleştiğini hissetmektir.
              </p>
            </div>

            <div className="text-center bg-gradient-to-r from-[var(--accent-green)]/20 to-[var(--accent-orange)]/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6">
                Senin Yolculuğun da Başlayabilir
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sen de içindeki gücü keşfetmek, eski yükleri bırakmak ve yaşamının iplerini eline almak istiyorsan:
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-xl text-[var(--accent-green)] font-semibold">Hazırsın.</p>
                <p className="text-xl text-[var(--accent-green)] font-semibold">Yeterlisin.</p>
                <p className="text-xl text-[var(--accent-green)] font-semibold">Yolun açık.</p>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Seninle tanışmak ve bu yolculukta yanında olmak için sabırsızlanıyorum.
              </p>
              <Link 
                href="/#contact" 
                className="button-modern inline-block"
              >
                Bana Ulaşmak İçin Tıklayın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 