'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';

const CERTIFICATES = [
  { id: 1, src: "/certificate1.jpg", alt: "Yoga Eğitmenliği Sertifikası" },
  { id: 2, src: "/certificate2.jpg", alt: "Nefes Koçluğu Sertifikası" },
  { id: 3, src: "/certificate3.jpg", alt: "Yaşam Koçluğu Sertifikası" },
  { id: 4, src: "/certificate4.jpg", alt: "Bioenerji Uygulayıcı Sertifikası" },
  { id: 5, src: "/certificate5.jpg", alt: "EFT Uygulayıcı Sertifikası" },
  { id: 6, src: "/certificate6.jpg", alt: "Yeni Sertifika" },
  { id: 7, src: "/certificate7.jpg", alt: "Meditasyon Uzmanlık Sertifikası" },
  { id: 8, src: "/certificate8.jpg", alt: "Holistik Şifa Uygulayıcı Sertifikası" },
  { id: 9, src: "/certificate9.jpg", alt: "Kozmik Enerji Terapisi Sertifikası" },
  { id: 10, src: "/certificate10.jpg", alt: "Spiritüel Danışmanlık Sertifikası" },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const maxCertificateIndex = CERTIFICATES.length - 1;

  const handlePrevCertificate = () => setCertificateIndex(prev => Math.max(0, prev - 1));
  const handleNextCertificate = () => setCertificateIndex(prev => Math.min(maxCertificateIndex, prev + 1));

  const openCertificateModal = (certificate: { src: string; alt: string }) => {
    setSelectedImage(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedImage(null);
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCertificateIndex(prev => 
        prev === maxCertificateIndex ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [maxCertificateIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex(prev => prev === 2 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCertificateInteraction = () => {
    const currentInterval = setInterval(() => {}, 6000);
    clearInterval(currentInterval);
    setTimeout(() => {
      const newInterval = setInterval(() => {
        setCertificateIndex(prev => 
          prev === maxCertificateIndex ? 0 : prev + 1
        );
      }, 6000);
      return () => clearInterval(newInterval);
    }, 10000);
  };

  // Testimonials scrolling functions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScrolling(true);
    setStartX(e.pageX - (e.currentTarget as HTMLElement).offsetLeft);
    setScrollLeft((e.currentTarget as HTMLElement).scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - (e.currentTarget as HTMLElement).offsetLeft;
    const walk = (x - startX) * 2;
    (e.currentTarget as HTMLElement).scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCertificateModal();
        closeServiceModal();
      }
    };

    if (selectedImage || selectedService) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, selectedService]);

  const servicesData = [
    {
      id: 1,
      title: "Kozmik Enerji Seansı",
      shortDesc: "Evrenin şifa dolu yaşam gücüyle bedensel, zihinsel ve ruhsal dengeyi yeniden kurun.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" stroke="#3b82f6" strokeWidth="4"/>
          <path d="M24 14v10l7 7" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: "Kozmik enerji seansları, evrenin şifa dolu yaşam gücünü kullanarak bedensel, zihinsel ve ruhsal dengenizi yeniden kurar. Bu seanslar, evrensel enerji akışını kullanarak birçok alanda iyileşmeyi destekler.",
        benefits: [
          "Stres, anksiyete ve depresyon yönetimi",
          "Ağrıların hafifletilmesi",
          "Enerji seviyesinin yükseltilmesi",
          "Bağışıklık sisteminin güçlendirilmesi",
          "Duygusal travmaların ve blokajların çözülmesi",
          "Uyku kalitesinin iyileştirilmesi",
          "Odaklanma ve konsantrasyonun artırılması"
        ],
        duration: "40 dakika",
        frequency: "Haftada 1-2 seans önerilir",
        preparation: "Seans öncesi hedeflerinizi ve sorularınızı lütfen not edin."
      }
    },
    {
      id: 2,
      title: "Biyoenerji Seansı",
      shortDesc: "Güçlü bir şifa yöntemi olan evrensel yaşam enerjisiyle bedensel, zihinsel ve duygusal dengeyi yeniden kurun.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <rect x="8" y="8" width="32" height="32" rx="16" stroke="#3b82f6" strokeWidth="4"/>
          <path d="M24 16v8h8" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: "Biyoenerji, evrensel yaşam enerjisini kullanarak bedensel, zihinsel ve duygusal dengeyi yeniden kuran güçlü bir şifa yöntemidir. Bu enerji akışı, vücudunuzdaki enerji blokajlarını çözerek doğal şifa sürecini destekler.",
        benefits: [
          "Ağrıların giderilmesine pozitif katkı",
          "Stres ve anksiyete azalması",
          "Bağışıklık sisteminin güçlendirilmesi",
          "Duygusal denge ve pozitif ruh hali",
          "Uyku kalitesinin artırılması",
          "Bedensel hastalıkların iyileşmesine pozitif katkı"
        ],
        duration: "40 dakika",
        frequency: "Haftada 1-2 seans önerilir",
        preparation: "Seans öncesi hedeflerinizi ve sorularınızı lütfen not edin."
      }
    },
    {
      id: 3,
      title: "Nefes ve Meditasyon Seansı",
      shortDesc: "Zihinsel ve fiziksel sağlığınız üzerinde derinlemesine olumlu etkiler yaratan güçlü uygulamalar.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <ellipse cx="24" cy="24" rx="20" ry="12" stroke="#3b82f6" strokeWidth="4"/>
          <path d="M12 24c2-4 8-8 12-8s10 4 12 8" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: "Nefes ve meditasyon teknikleri, hem zihinsel hem de fiziksel sağlığınız üzerinde derinlemesine olumlu etkiler yaratır. Bu güçlü uygulamalar sayesinde, günlük yaşamınızda karşılaştığınız pek çok zorlukla daha etkili bir şekilde başa çıkabilir ve genel refahınızı artırabilirsiniz.",
        benefits: [
          "Stres ve anksiyete yönetimi",
          "Duygusal denge",
          "Uyku kalitesi",
          "Odaklanma ve konsantrasyon",
          "Fiziksel sağlık, kilo kontrolü",
          "Öz farkındalık ve benlik algısı"
        ],
        duration: "30 dakika",
        frequency: "Haftada 2-3 seans önerilir",
        preparation: "Seans öncesi hedeflerinizi ve sorularınızı lütfen not edin."
      }
    },
    {
      id: 4,
      title: "EFT Seansı",
      shortDesc: "(Duygusal Özgürleşme Tekniği) Bedenimizdeki enerji meridyenleri üzerinde yapılan nazik vuruşlarla duygusal ve fiziksel rahatsızlıkları hafifletmeyi hedefleyen güçlü bir yöntem.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="4"/>
          <path d="M12 24l8-8 8 8" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: "EFT (Emotional Freedom Techniques) ya da bilinen adıyla Duygusal Özgürleşme Tekniği, bedenimizdeki enerji meridyenleri üzerinde yapılan nazik vuruşlarla duygusal ve fiziksel rahatsızlıkları hafifletmeyi hedefleyen güçlü bir yöntemdir. Akupunkturun iğnesiz hali olarak da düşünülebilecek bu teknik, zihin ve beden arasındaki dengeyi yeniden kurarak birçok alanda derinlemesine iyileşme sağlar.",
        benefits: [
          "Stres, anksiyete ve panik atak yönetimi",
          "Fobiler",
          "Travmatik deneyimler",
          "Duygusal denge ve özgüven",
          "Bağımlılıklar",
          "Fiziksel ağrılar",
          "Performans gelişimi",
          "İlişki sorunları"
        ],
        duration: "45 dakika",
        frequency: "Haftada 1-2 seans önerilir",
        preparation: "Seans öncesi hedeflerinizi ve sorularınızı lütfen not edin."
      }
    },
    {
      id: 5,
      title: "Doğal Taş Kodlama",
      shortDesc: "Doğal taşların güçlü enerjilerini kişisel niyetlerinizle uyumlu hale getirerek hayatınızda istediğiniz değişimleri çekmenize yardımcı olan özel bir yöntem.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <polygon points="24,4 30,18 44,18 32,28 36,42 24,34 12,42 16,28 4,18 18,18" stroke="#3b82f6" strokeWidth="4" fill="none"/>
        </svg>
      ),
      details: {
        description: "Doğal taşlar, yüzyıllardır farklı kültürlerde enerji dengeleme, şifa ve kişisel gelişim amacıyla kullanılmıştır. Her bir doğal taşın kendine özgü bir enerjisi ve frekansı bulunur. Doğal taş kodlama ise, bu güçlü enerjileri kişisel niyetlerinizle uyumlu hale getirerek hayatınızda istediğiniz değişimleri çekmenize yardımcı olan özel bir yöntemdir.",
        benefits: [
          "Belirli niyetlerinizi güçlendirme",
          "Enerji dengeleme ve koruma",
          "Duygusal ve zihinsel netlik",
          "Meditasyon ve farkındalık pratiğinizi destekleme",
          "Kişisel büyüme ve gelişim",
          "Aura alanınızı güçlendirme",
          "İçsel denge ve huzur"
        ]
      }
    },
    {
      id: 6,
      title: "Pozitif Enerji Seansı",
      shortDesc: "Yaşam enerjinizi yükseltmeyi, aurınızı temizlemeyi ve içsel dengenizi yeniden sağlamayı amaçlayan güçlü bir uygulama.",
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="4"/>
          <path d="M24 8l4 12h12l-10 7 4 12-10-7-10 7 4-12-10-7h12z" stroke="#60a5fa" strokeWidth="4" fill="none"/>
        </svg>
      ),
      details: {
        description: "Hayatımızda karşılaştığımız zorluklar, stres ve olumsuz düşünceler zamanla enerji seviyemizi düşürebilir, ruh halimizi olumsuz etkileyebilir. Pozitif enerji yüklemeleri, yaşam enerjinizi yükseltmeyi, aurınızı temizlemeyi ve içsel dengenizi yeniden sağlamayı amaçlayan güçlü bir uygulamadır. Bu seanslar sayesinde, olumsuz kalıplardan arınarak hayatınıza daha fazla neşe, huzur ve canlılık çekebilirsiniz.",
        benefits: [
          "Duygusal denge ve ruh hali iyileşmesi",
          "Stres azaltma ve rahatlama",
          "Zihinsel netlik ve odaklanma",
          "Fiziksel canlılık ve enerji artışı",
          "Bağışıklık sistemi desteği",
          "Öz güven ve öz değer artışı",
          "Çekim yasası'nı güçlendirme",
          "İlişkilerde uyum"
        ],
        duration: "40 dakika",
        frequency: "Haftada 1-2 seans önerilir",
        preparation: "Seans öncesi hedeflerinizi ve sorularınızı lütfen not edin."
              }
      },
      {
        id: 7,
        title: "Holistik Yaşam Koçluğu ve Spiritüel Danışmanlık",
        shortDesc: "Holistik yaşam koçluğu ve spiritüel danışmanlığı birleştirerek sunduğum hizmetle, hayatınızda bütünsel ve kalıcı faydalar yaratıyoruz.",
        icon: (
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="4"/>
            <path d="M12 24l6-6 6 6" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
            <path d="M24 12v12" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
        details: {
          description: "Holistik yaşam koçluğu ve spiritüel danışmanlığı birleştirerek sunduğum hizmetle, hayatınızda bütünsel ve kalıcı faydalar yaratıyoruz. Bu entegre yaklaşımla elde edeceğiniz başlıca faydalar şunlardır:",
          benefits: [
            "Netleşen amaçlar ve yön belirleme",
            "Artan özgüven ve potansiyel keşfi",
            "Duygusal denge ve huzur",
            "Derinleşen farkındalık ve anlamlı ilişkiler",
            "Sürdürülebilir dönüşüm ve içsel rehberlik",
            "Kişisel ve profesyonel hedeflere ulaşma",
            "İçsel güç ve motivasyon artışı"
          ],
          duration: "40 dakika",
          frequency: "Haftada 1 seans önerilir",
          preparation: "Seans öncesi hedeflerinizi ve sorularınızı not edin, rahat kıyafetler giyin ve açık fikirli olun."
        }
      }
    ];

  return (
    <main className="bg-transparent">
      <nav className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#hero" className="text-2xl font-extrabold text-[var(--accent-green)] tracking-tight">Kozmik Enerji</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-base font-semibold">
            <a href="#hero" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">Anasayfa</a>
            <a href="#services" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">Hizmetler</a>
            <a href="#certificates" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">Sertifikalar</a>
            <a href="#blogs" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">Blog</a>
            <a href="#video" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">Tanıtım Videosu</a>
            <a href="#contact" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-all duration-300 hover:scale-105">İletişim</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors rounded-lg hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
            <div className="flex flex-col py-6 px-6 space-y-4">
              <a href="#hero" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">Anasayfa</a>
              <a href="#services" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">Hizmetler</a>
              <a href="#certificates" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">Sertifikalar</a>
              <a href="#blogs" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">Blog</a>
              <a href="#video" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">Tanıtım Videosu</a>
              <a href="#contact" className="text-[var(--accent-green)] hover:text-[var(--accent-orange)] transition-colors py-3 px-4 font-semibold rounded-lg hover:bg-blue-50">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: 'url(/hero-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: heroImageIndex === 0 ? 1 : 0
              }}
            />
            <div 
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: 'url(/therapy-individual.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: heroImageIndex === 1 ? 1 : 0
              }}
            />
            <div 
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: 'url(/therapy-couple.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: heroImageIndex === 2 ? 1 : 0
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-green)]/80 via-[var(--accent-green)]/60 to-[var(--accent-orange)]/80"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <div className="transition-all duration-1000 ease-in-out">
            {heroImageIndex === 0 && (
              <div className="hero-text-enter" style={{opacity: 1, transform: 'translateY(0)'}}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl px-4" style={{letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontWeight: '600'}}>Bioenerji Seansı</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-white drop-shadow-lg font-normal px-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)', fontWeight: '400'}}>Enerji blokajlarını çözerek beden-zihin-ruh dengesini yeniden kurun. Bioenerji seanslarıyla içsel denge ve huzura adım atın.</p>
              </div>
            )}
            {heroImageIndex === 1 && (
              <div className="hero-text-enter" style={{opacity: 1, transform: 'translateY(0)'}}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl px-4" style={{letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontWeight: '600'}}>Nefes & Meditasyon</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-white drop-shadow-lg font-normal px-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)', fontWeight: '400'}}>Doğru nefes ve meditasyon teknikleriyle huzur ve içsel ferahlık. Zihninizi sakinleştirerek içsel huzuru keşfedin.</p>
              </div>
            )}
                         {heroImageIndex === 2 && (
               <div className="hero-text-enter" style={{opacity: 1, transform: 'translateY(0)'}}>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl px-4" style={{letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontWeight: '600'}}>Pozitif Enerji ile Gelen Şifa</h1>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-white drop-shadow-lg font-normal px-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)', fontWeight: '400'}}>Pozitif enerji akışıyla bütünsel yenilenme ve ruhsal denge. Kozmik enerji teknikleriyle beden, zihin ve ruhunuzu dengeye getirin.</p>
               </div>
             )}
          </div>
          <a href="#contact" className="button-modern">Hemen Randevu Al</a>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setHeroImageIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === heroImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setHeroImageIndex(prev => prev === 0 ? 2 : prev - 1)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button
          onClick={() => setHeroImageIndex(prev => prev === 2 ? 0 : prev + 1)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </section>

      {/* Hakkımızda */}
      <section id="about" className="section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Yaşam Koçu Görseli */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src="/portrait.jpg" 
                    alt="Özlem Gündüz - Yaşam Koçu" 
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                  />
                </div>
                
                {/* Fotoğrafın altına başlıklar - sola yatık ve fotoğraf genişliğinde */}
                <div className="text-left mt-6 w-full" style={{ maxWidth: 'inherit' }}>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--accent-green)] mb-2 leading-tight">
                    Özlem Gündüz
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--accent-green)] leading-tight">
                    Holistik Koç (Bioenerji, Kozmik Enerji Uzmanı, Longevity Danışmanı)
                  </h4>
                </div>
              </div>
              
              {/* Sağ taraf - Sadece metin alanı */}
              <div className="flex-1 text-center lg:text-left">
                {/* Pozitif enerji açıklaması */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Pozitif enerji uygulamaları ve kadim bilgelik yöntemleriyle, enerjimizi yükseltmek, hayatı dolu dolu yaşamak, hayatımızın ilişkilerimizin kalitesini arttırmak, ruhsal bedensel zihinsel blokajlarımızdan kurtulmak, ruh beden zihin uyumunu yakalamak, her gün kendini daha genç daha sağlıklı daha dingin daha huzurlu hissetmek mümkün.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section id="certificates" className="section">
        <h2 className="text-3xl font-bold mb-8 text-center">Sertifikalarım</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">Pozitif enerji eğitmenliği, Yoga eğitmenliği, nefes koçluğu EFT terapisi, ve yaşam koçluğu alanlarında e-devlet onaylı sertifikalarımla hizmet veriyorum. Her birine tıklayarak görüntüleyebilirsiniz.</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Sertifika Slider */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${certificateIndex * 100}%)` }}
              >
                {CERTIFICATES.map((certificate, index) => (
                  <div 
                    key={certificate.id}
                    className="w-full flex-shrink-0 relative"
                  >
                    <div 
                      className="relative cursor-pointer"
                      onClick={() => {
                        openCertificateModal(certificate);
                        handleCertificateInteraction();
                      }}
                    >
                                             <img 
                         src={certificate.src} 
                         alt={certificate.alt} 
                         className="w-full h-96 md:h-[500px] object-contain"
                       />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                        <div className="p-6 text-white">
                          <p className="text-lg font-semibold">Büyütmek için tıklayın</p>
                          <p className="text-sm opacity-90">{certificate.alt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
               
              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  handlePrevCertificate();
                  handleCertificateInteraction();
                }}
                disabled={certificateIndex === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[var(--accent-green)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
               
              <button
                onClick={() => {
                  handleNextCertificate();
                  handleCertificateInteraction();
                }}
                disabled={certificateIndex === maxCertificateIndex}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[var(--accent-green)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {CERTIFICATES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCertificateIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === certificateIndex 
                      ? 'bg-[var(--accent-green)] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Certificate Counter */}
            <div className="text-center mt-4 text-gray-600">
              <span className="font-semibold text-[var(--accent-green)]">{certificateIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{CERTIFICATES.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="services" className="section">
        <h2 className="text-3xl font-bold mb-8 text-center">Hizmetlerimiz</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12">Size özel hazırlanmış bioenerji ve şifa hizmetlerimizi keşfedin. Her hizmet hakkında detaylı bilgi almak için kartlara tıklayın.</p>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Hizmet Slider */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${serviceIndex * 100}%)` }}
              >
                {servicesData.map((service, index) => (
                  <div 
                    key={service.id}
                    className="w-full flex-shrink-0 p-8"
                  >
                    <div 
                      className="card flex flex-col items-center text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full"
                      onClick={() => openServiceModal(service)}
                    >
                      <div className="mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>
                      <div className="mt-auto text-sm text-[var(--accent-green)] font-semibold">
                        Detayları görmek için tıklayın →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
               
              {/* Navigation Buttons */}
              <button
                onClick={() => setServiceIndex(prev => Math.max(0, prev - 1))}
                disabled={serviceIndex === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[var(--accent-green)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
               
              <button
                onClick={() => setServiceIndex(prev => Math.min(servicesData.length - 1, prev + 1))}
                disabled={serviceIndex === servicesData.length - 1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[var(--accent-green)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === serviceIndex 
                      ? 'bg-[var(--accent-green)] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Service Counter */}
            <div className="text-center mt-4 text-gray-600">
              <span className="font-semibold text-[var(--accent-green)]">{serviceIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{servicesData.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-backdrop"
          onClick={closeServiceModal}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeServiceModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-200"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[var(--accent-green)]">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold text-[var(--accent-green)]">{selectedService.title}</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Hizmet Açıklaması</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedService.details.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Faydaları</h3>
                  <ul className="space-y-2">
                    {selectedService.details.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--accent-green)] mt-0.5 flex-shrink-0">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.duration && (
                    <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--accent-green)] mb-2">Seans Süresi</h4>
                      <p className="text-gray-600">{selectedService.details.duration}</p>
                    </div>
                  )}

                  {selectedService.details.preparation && (
                    <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--accent-green)] mb-2">Hazırlık</h4>
                      <p className="text-gray-600">{selectedService.details.preparation}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center pt-4">
                  <a 
                    href="#contact" 
                    className="button-modern"
                    onClick={closeServiceModal}
                  >
                    Bu Hizmet İçin Randevu Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Tanıtım Videosu */}
      <section id="video" className="section">
        <h2 className="text-3xl font-bold mb-4 text-center">Tanıtım Videosu</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">Bioenerji ve doğanın şifasıyla ilgili kısa tanıtım videomuzu izleyin, enerjiyi hissedin!</p>
        <div className="flex justify-center">
          <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] max-w-full video-container">
            <video 
              controls 
              poster="/video-poster.jpg" 
              className="rounded-2xl shadow-lg w-full h-full object-contain"
              preload="metadata"
              playsInline
              muted
              loop
              onLoadStart={() => console.log('Video yüklenmeye başladı')}
              onCanPlay={() => console.log('Video oynatılmaya hazır')}
              onError={(e) => console.error('Video hatası:', e)}
              style={{
                willChange: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <source src="/tanitim.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      </section>

      {/* Sertifika Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-backdrop"
          onClick={closeCertificateModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ animation: 'zoomIn 0.3s ease-out' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Bloglar */}
      <section id="blogs" className="section">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12">Kozmik enerji, nefes koçluğu ve şifa teknikleri hakkında bilgilendirici yazılarımızı keşfedin.</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Blog 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              {/* Sol taraf - Metin içeriği */}
              <div className="flex-1 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-[var(--accent-green)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Blog
                  </span>
                </div>
                                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--accent-green)] mb-4 leading-tight">
                  Pozitif Enerji ve Kadim Bilgelik Yöntemleriyle Sağlıklı, Dengeli ve Uzun Bir Yaşam
                </h3>
                <div className="text-sm text-gray-500 mb-4 space-y-1">
                  <p>Makaleler</p>
                  <p>Yazar: Özlem Gündüz</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Modern dünyanın hızlı temposu, yoğun sorumluluklar ve sürekli bilgi bombardımanı, zihnimizi ve bedenimizi yıpratırken, ilişkilerimizi ve yaşam enerjimizi de olumsuz etkileyebiliyor. Oysa kadim bilgelik yöntemleri ve pozitif enerji uygulamalarıyla hem enerjimizi yükseltmek hem de hayatı dolu dolu, huzurla ve sağlıkla yaşamak mümkün. Bu çalışmalar, tıbba alternatif değil, tam tersine onun yanında yürüyen; kişinin yaşam kalitesini, iyileşme motivasyonunu ve enerji seviyesini yükselten tamamlayıcı uygulamalardır.
                </p>
                <Link href="/blog/kaygi-stres" className="inline-flex items-center text-black font-semibold hover:text-[var(--accent-green)] transition-colors group">
                  Devamını Oku 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Sağ taraf - Görsel */}
              <div className="lg:w-80 lg:flex-shrink-0">
                <img 
                  src="/blog-anxiety.jpg" 
                  alt="Pozitif Enerji ve Kadim Bilgelik" 
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>


        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="button-modern">
            Tüm Blog Yazılarını Görüntüle
          </a>
        </div>
      </section>

                        {/* Danışan Yorumları */}
                  <section id="testimonials" className="section">
                    <h2 className="text-2xl font-bold mb-4 text-center">Danışan Yorumları</h2>
                    <div className="relative">
                      <div 
                        className="flex overflow-x-auto gap-3 pb-4" 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', cursor: 'grab', userSelect: 'none' }}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                      >
                        <div className="flex gap-3 min-w-max flex-nowrap" style={{ width: 'max-content' }}>
          {/* Yorum 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">A</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Ayşe K.</h4>
                <p className="text-xs text-gray-600">Kozmik Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın sevgi dolu yaklaşımı ve şifa verici enerjisi beni çok etkiledi. Her seans sonrası kendimi yenilenmiş ve huzurlu hissediyorum. Çok teşekkür ederim! ❤️"</p>
          </div>

          {/* Yorum 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">M</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Mehmet S.</h4>
                <p className="text-xs text-gray-600">Biyoenerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın samimi ve sevgi dolu yaklaşımı sayesinde kendimi çok güvende hissettim. Biyoenerji seanslarından sonra hayat kalitem çok arttı. Sonsuz teşekkürler! 🌟"</p>
          </div>

          {/* Yorum 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">F</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Fatma Y.</h4>
                <p className="text-xs text-gray-600">Nefes ve Meditasyon</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın nefes ve meditasyon seanslarında hissettiğim sevgi ve güven duygusu tarif edilemez. Her seans sonrası kendimi daha güçlü ve huzurlu hissediyorum. Çok seviliyorsunuz! 💖"</p>
          </div>

          {/* Yorum 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">A</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Ali R.</h4>
                <p className="text-xs text-gray-600">EFT Seansı</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın EFT seanslarında gösterdiği sabır ve sevgi beni çok etkiledi. Geçmiş yüklerimden kurtulurken yanımda olduğu için çok minnettarım. Sizi çok seviyorum! ✨"</p>
          </div>

          {/* Yorum 5 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">E</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Elif D.</h4>
                <p className="text-xs text-gray-600">Doğal Taş Uyumlama</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Doğal taş uyumlama seanslarında Özlem hanımın enerjisi ve sevgi dolu yaklaşımı beni çok etkiledi. Taşların gücü ile birlikte onun şifa verici dokunuşu mucizevi! 🌺"</p>
          </div>

          {/* Yorum 6 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">C</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Can Ö.</h4>
                <p className="text-xs text-gray-600">Pozitif Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın pozitif enerji seanslarında hissettiğim sevgi ve şefkat tarif edilemez. Her seans sonrası hayata daha umutla bakıyorum. Sizi çok seviyorum! 🌈"</p>
          </div>

          {/* Yorum 7 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">S</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Selin K.</h4>
                <p className="text-xs text-gray-600">Holistik Koçluk</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın holistik yaşam koçluğunda gösterdiği sevgi ve anlayış sayesinde kendimi keşfettim. Hayat amacımı bulurken yanımda olduğu için çok minnettarım! 💫"</p>
          </div>

          {/* Yorum 8 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">B</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Burak T.</h4>
                <p className="text-xs text-gray-600">Kozmik Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın kozmik enerji seanslarında hissettiğim sevgi ve güven duygusu beni çok etkiledi. Ruhsal dengemi bulurken yanımda olduğu için çok teşekkür ederim! 🌟"</p>
          </div>

          {/* Yorum 9 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">D</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Deniz A.</h4>
                <p className="text-xs text-gray-600">Biyoenerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın biyoenerji seanslarında gösterdiği sevgi ve şefkat beni çok etkiledi. Uyku kalitem iyileşirken yanımda olduğu için çok minnettarım! 💝"</p>
          </div>

          {/* Yorum 10 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">G</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Gizem L.</h4>
                <p className="text-xs text-gray-600">Nefes ve Meditasyon</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın nefes teknikleri seanslarında hissettiğim sevgi ve güven duygusu tarif edilemez. Panik ataklarım azalırken yanımda olduğu için çok teşekkür ederim! 🌸"</p>
          </div>

          {/* Yorum 11 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">K</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Kemal Y.</h4>
                <p className="text-xs text-gray-600">EFT Seansı</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın EFT seanslarında gösterdiği sabır ve sevgi beni çok etkiledi. Fobilerimden kurtulurken yanımda olduğu için çok minnettarım! 💙"</p>
          </div>

          {/* Yorum 12 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">N</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Nur S.</h4>
                <p className="text-xs text-gray-600">Doğal Taş Uyumlama</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın doğal taş uyumlama seanslarında hissettiğim sevgi ve enerji beni çok etkiledi. İlişkilerim iyileşirken yanımda olduğu için çok teşekkür ederim! 💎"</p>
          </div>

          {/* Yorum 13 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">O</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Ozan K.</h4>
                <p className="text-xs text-gray-600">Pozitif Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın pozitif enerji seanslarında gösterdiği sevgi ve motivasyon beni çok etkiledi. Hedeflerime ilerlerken yanımda olduğu için çok minnettarım! 🚀"</p>
          </div>

          {/* Yorum 14 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">P</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Pınar M.</h4>
                <p className="text-xs text-gray-600">Holistik Koçluk</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın holistik yaşam koçluğunda hissettiğim sevgi ve anlayış tarif edilemez. Kendimi keşfederken yanımda olduğu için çok teşekkür ederim! 🌺"</p>
          </div>

          {/* Yorum 15 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">R</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Rıza A.</h4>
                <p className="text-xs text-gray-600">Kozmik Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın kozmik enerji seanslarında gösterdiği sevgi ve enerji beni çok etkiledi. Enerji seviyem yükselirken yanımda olduğu için çok minnettarım! ⭐"</p>
          </div>

          {/* Yorum 16 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">T</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Tuğçe B.</h4>
                <p className="text-xs text-gray-600">Biyoenerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın biyoenerji seanslarında hissettiğim sevgi ve şifa beni çok etkiledi. Bağışıklık sistemim güçlenirken yanımda olduğu için çok teşekkür ederim! 💚"</p>
          </div>

          {/* Yorum 17 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">U</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Umut K.</h4>
                <p className="text-xs text-gray-600">Nefes ve Meditasyon</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın nefes teknikleri seanslarında gösterdiği sevgi ve odaklanma beni çok etkiledi. Konsantrasyonum artarken yanımda olduğu için çok minnettarım! 🎯"</p>
          </div>

          {/* Yorum 18 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">V</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Vedat Ö.</h4>
                <p className="text-xs text-gray-600">EFT Seansı</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın EFT seanslarında hissettiğim sevgi ve cesaret beni çok etkiledi. Özgüvenim artarken yanımda olduğu için çok teşekkür ederim! 🦁"</p>
          </div>

          {/* Yorum 19 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">Y</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Yasemin T.</h4>
                <p className="text-xs text-gray-600">Doğal Taş Uyumlama</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın doğal taş uyumlama seanslarında gösterdiği sevgi ve yaratıcılık beni çok etkiledi. İlhamım artarken yanımda olduğu için çok minnettarım! 🎨"</p>
          </div>

          {/* Yorum 20 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px] max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">Z</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs">Zeynep K.</h4>
                <p className="text-xs text-gray-600">Pozitif Enerji</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">"Özlem hanımın pozitif enerji seanslarında hissettiğim sevgi ve umut beni çok etkiledi. Hayata bakış açım değişirken yanımda olduğu için çok teşekkür ederim! 🌈"</p>
          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <div className="text-sm text-gray-600">← Kaydırarak tüm yorumları görün →</div>
                      </div>
                    </div>
                  </section>

      {/* İletişim */}
      <section id="contact" className="section">
        <h2 className="text-3xl font-bold mb-8 text-center">İletişim</h2>
        <div className="flex flex-row gap-4 justify-center mb-8">
          <a href="https://wa.me/905347353676" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
          <a href="tel:+905339187391" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
          <a href="mailto:holistikyasamkocu369@gmail.com" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <a href="https://instagram.com/kozmikenerji" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        <div className="card max-w-xl mx-auto">
          <form 
            action="https://formsubmit.co/holistikyasamkocu369@gmail.com" 
            method="POST" 
            className="flex flex-col gap-4"
          >
            {/* Spam koruması için gizli alanlar */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Kozmik Enerji - Yeni İletişim Mesajı" />
            <input type="hidden" name="_next" value="https://kozmikenerji.com/tesekkurler" />
            
            <input 
              type="text" 
              name="name"
              placeholder="Adınız Soyadınız" 
              className="p-3 rounded-lg border border-[#e0e0e0]" 
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="E-posta Adresiniz" 
              className="p-3 rounded-lg border border-[#e0e0e0]" 
              required 
            />
            <textarea 
              name="message"
              placeholder="Mesajınız" 
              rows={5} 
              className="p-3 rounded-lg border border-[#e0e0e0]" 
              required
            ></textarea>
            <button type="submit" className="button-modern">Mesajı Gönder</button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <div><strong>Adres:</strong> Türkiye</div>
            <div><strong>Telefon:</strong> +90 533 918 7391</div>
            <div><strong>E-posta:</strong> holistikyasamkocu369@gmail.com</div>
          </div>
        </div>
      </section>
    </main>
  );
} 