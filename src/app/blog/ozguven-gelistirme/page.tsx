'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ConfidenceBlogPage() {
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
          src="/blog-confidence.jpg"
          alt="Özgüven Geliştirme"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-heading mb-4 animate-fade-in">
              Özgüven Geliştirme Rehberi
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
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-2xl md:text-3xl font-heading text-gold mb-6">
              Özgüven Nedir?
            </h2>
            <p className="mb-6">
              Özgüven, kişinin kendine olan inancı, yeteneklerini tanıması ve kendini 
              değerli hissetmesidir. Sağlıklı bir özgüven, başarılı ilişkiler kurma ve 
              hedeflere ulaşmada önemli bir rol oynar.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Düşük Özgüvenin Belirtileri
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Sürekli kendini eleştirme</li>
              <li>Başkalarının onayına aşırı ihtiyaç duyma</li>
              <li>Karar vermekte zorlanma</li>
              <li>Sosyal ortamlarda kendini ifade edememe</li>
              <li>Başarısızlık korkusu</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Özgüven Geliştirme Teknikleri
            </h3>
            <p className="mb-4">
              Özgüveninizi artırmak için uygulayabileceğiniz etkili yöntemler:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-3">
                <strong className="text-gold">Kendini Tanıma:</strong> Güçlü ve 
                gelişime açık yönlerinizi keşfedin.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Küçük Hedefler:</strong> Ulaşılabilir 
                hedefler belirleyip başarıya ulaşın.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Pozitif İç Konuşma:</strong> Kendinizle 
                olan diyalogunuzu olumlu yönde geliştirin.
              </li>
              <li className="mb-3">
                <strong className="text-gold">Sınırlar Belirleme:</strong> Kendi 
                değerlerinizi ve sınırlarınızı tanımlayın.
              </li>
            </ol>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Günlük Özgüven Geliştirme Alışkanlıkları
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Her gün kendinize bir iltifat edin</li>
              <li>Başarılarınızı not edin</li>
              <li>Yeni beceriler öğrenin</li>
              <li>Fiziksel sağlığınıza özen gösterin</li>
              <li>Sosyal aktivitelere katılın</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Profesyonel Destek
            </h3>
            <p className="mb-6">
              Özgüven geliştirme sürecinde profesyonel destek almak önemli faydalar sağlayabilir:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Özgüven sorunlarının kökenini anlama</li>
              <li>Kişiye özel stratejiler geliştirme</li>
              <li>Olumsuz düşünce kalıplarını değiştirme</li>
              <li>Sosyal becerileri güçlendirme</li>
              <li>Sürdürülebilir değişim sağlama</li>
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h3 className="text-xl md:text-2xl font-heading text-gold mb-4 mt-8">
              Sonuç
            </h3>
            <p className="mb-6">
              Özgüven geliştirmek bir süreçtir ve sabır gerektirir. Kendinize karşı 
              anlayışlı olun ve küçük adımlarla ilerlemeye odaklanın. Gerektiğinde 
              profesyonel destek almaktan çekinmeyin.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
} 