import Link from "next/link";
import Image from "next/image";

export default function BlogCezaHukuku() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      {/* Sticky site header */}
      <div className="fixed top-0 left-0 w-full z-40 flex items-center justify-center py-3 bg-[#10131acc] backdrop-blur-md shadow-md" style={{fontFamily: 'Times New Roman, Times, serif'}}>
        <span className="text-xl md:text-2xl gold font-bold tracking-wide select-none">Av. Dilşat Kanbur</span>
      </div>
      <div className="w-full max-w-2xl bg-[#181c23cc] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center mt-16" style={{ backdropFilter: 'blur(4px)' }}>
        {/* Blog image area */}
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden bg-[#232323] flex items-center justify-center mb-6">
          <Image
            src="/blog-criminal.jpg"
            alt="Ceza Hukuku Blog Görseli"
            width={640}
            height={256}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-3xl gold mb-2 text-center">Ceza Hukukunda Savunma Hakkı</h1>
        <div className="text-[#b0b0b0] text-sm mb-6">Yayın Tarihi: 10 Mayıs 2024</div>
        <article className="prose prose-invert max-w-none w-full" style={{ color: '#f8f8f5' }}>
          <p>Ceza hukuku davalarında savunma hakkı, adil yargılanmanın temel unsurudur. Her bireyin kendini savunma ve hukuki yardım alma hakkı anayasal güvence altındadır.</p>
          <h2>Savunma Hakkının Önemi</h2>
          <p>Savunma hakkı, kişinin suç isnadına karşı kendini ifade edebilmesini ve adil bir yargılama süreci geçirmesini sağlar. Avukat desteği bu süreçte büyük önem taşır.</p>
          <h2>Ceza Davası Süreci</h2>
          <ul>
            <li>Soruşturma ve kovuşturma aşamalarında haklarınızı bilin.</li>
            <li>İfade ve sorgu sırasında avukatınızın yanınızda olmasını talep edin.</li>
            <li>Delil toplama ve savunma stratejisi için uzman desteği alın.</li>
          </ul>
          <h2>Hukuki Tavsiyeler</h2>
          <p>Ceza davalarında hak kaybı yaşamamak için sürecin her aşamasında bir avukata danışmak gereklidir.</p>
        </article>
        <Link href="/" className="mt-8 inline-block gold hover:underline">← Anasayfaya Dön</Link>
      </div>
    </main>
  );
} 