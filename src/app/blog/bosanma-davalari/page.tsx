import Link from "next/link";
import Image from "next/image";

export default function BlogBosanmaDavalari() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      {/* Sticky site header */}
      <div className="fixed top-0 left-0 w-full z-40 flex items-center justify-center py-3 bg-[#10131acc] backdrop-blur-md shadow-md" style={{fontFamily: 'Times New Roman, Times, serif'}}>
        <span className="text-xl md:text-2xl gold font-bold tracking-wide select-none">Evrensel Yaşam Enerjisi Merkezi</span>
      </div>
      <div className="w-full max-w-2xl bg-[#181c23cc] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center mt-16" style={{ backdropFilter: 'blur(4px)' }}>
        {/* Blog image area */}
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden bg-[#232323] flex items-center justify-center mb-6">
          <Image
            src="/blog-divorce.jpg"
            alt="Boşanma Davaları Blog Görseli"
            width={640}
            height={256}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-3xl gold mb-2 text-center">Doğanın Şifasıyla Yenilen: Huzur ve Enerji</h1>
        <div className="text-[#b0b0b0] text-sm mb-6">Yayın Tarihi: 10 Mayıs 2024</div>
        <article className="prose prose-invert max-w-none w-full" style={{ color: '#f8f8f5' }}>
          <p>Boşanma davaları, aile hukukunun en hassas ve karmaşık alanlarından biridir. Müvekkillerimizin en çok merak ettiği konuları ve süreçte dikkat edilmesi gerekenleri aşağıda özetledik.</p>
          <h2>Boşanma Davası Nasıl Açılır?</h2>
          <p>Boşanma davası, yetkili aile mahkemesine yazılı bir dilekçe ile başvurularak açılır. Dilekçede boşanma sebepleri ve deliller açıkça belirtilmelidir.</p>
          <h2>En Sık Sorulan Sorular</h2>
          <ul>
            <li><b>Ne kadar sürede sonuçlanır?</b> Dava süresi, tarafların uzlaşmasına ve mahkemenin iş yüküne göre değişir. Anlaşmalı boşanmalarda süreç genellikle daha kısadır.</li>
            <li><b>Çocukların velayeti kime verilir?</b> Mahkeme, çocuğun üstün yararını gözeterek velayet konusunda karar verir.</li>
            <li><b>Nafaka ve tazminat nasıl belirlenir?</b> Tarafların ekonomik durumu ve kusur oranı dikkate alınarak nafaka ve tazminat miktarı belirlenir.</li>
          </ul>
          <h2>Hukuki Tavsiyeler</h2>
          <p>Boşanma sürecinde hak kaybı yaşamamak için bir avukattan profesyonel destek alınması önemlidir. Belgelerin eksiksiz hazırlanması ve mahkemeye sunulması gerekmektedir.</p>
        </article>
        <Link href="/" className="mt-8 inline-block gold hover:underline">← Anasayfaya Dön</Link>
      </div>
    </main>
  );
} 