import Link from "next/link";
import Image from "next/image";

export default function BlogIsciHaklari() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      {/* Sticky site header */}
      <div className="fixed top-0 left-0 w-full z-40 flex items-center justify-center py-3 bg-[var(--accent-light)] backdrop-blur-md shadow-md" style={{fontFamily: 'Times New Roman, Times, serif'}}>
        <span className="text-xl md:text-2xl gold font-bold tracking-wide select-none">Evrensel Yaşam Enerjisi Merkezi</span>
      </div>
      <div className="w-full max-w-2xl bg-[var(--accent-green)] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center mt-16" style={{ backdropFilter: 'blur(4px)' }}>
        {/* Blog image area */}
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden bg-[var(--accent-green)] flex items-center justify-center mb-6">
          <Image
            src="/blog-labor.jpg"
            alt="İşçi Hakları Blog Görseli"
            width={640}
            height={256}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-3xl gold mb-2 text-center">Doğayla Uyum: Enerji, Emek ve Huzur</h1>
        <div className="text-[var(--foreground)] text-sm mb-6">Yayın Tarihi: 10 Mayıs 2024</div>
        <article className="prose prose-invert max-w-none w-full" style={{ color: '#f8f8f5' }}>
          <p>İşçi hakları, iş kanunu kapsamında güvence altına alınmıştır. İşten çıkarılma, kıdem ve ihbar tazminatı gibi konular çalışanlar için büyük önem taşır.</p>
          <h2>Kıdem ve İhbar Tazminatı Nedir?</h2>
          <p>Kıdem tazminatı, işçinin en az bir yıl çalıştıktan sonra işten çıkarılması halinde hak kazandığı bir ödemedir. İhbar tazminatı ise iş sözleşmesinin feshi öncesinde taraflara tanınan bildirim süresine uyulmaması durumunda ödenir.</p>
          <h2>Haklarınızı Nasıl Koruyabilirsiniz?</h2>
          <ul>
            <li>İşten çıkarılma durumunda yazılı fesih bildirimi talep edin.</li>
            <li>Hak ettiğiniz tazminatları almak için yasal sürelere dikkat edin.</li>
            <li>Gerekirse arabuluculuk ve dava yoluna başvurun.</li>
          </ul>
          <h2>Hukuki Destek</h2>
          <p>Hak kaybı yaşamamak için bir avukata danışmak ve süreci profesyonel şekilde yürütmek önemlidir.</p>
        </article>
        <Link href="/" className="mt-8 inline-block gold hover:underline">← Anasayfaya Dön</Link>
      </div>
    </main>
  );
} 