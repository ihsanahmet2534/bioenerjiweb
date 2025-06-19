'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';

const NAV_LINKS = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Videolar", href: "#videos" },
  { label: "Bloglar", href: "#blogs" },
  { label: "Yorumlar", href: "#testimonials" },
  { label: "İletişim", href: "#contact" },
];

const REVIEWS = [
  {
    quote:
      "Eşimle yaşadığımız iletişim sorunları ve sık sık yaşadığımız tartışmalar nedeniyle terapi almaya karar verdik. İlk başta biraz endişeliydik ama Mustafa hocam sayesinde süreç çok sağlıklı ilerledi. Bizi yargılamadan dinlemesi, doğru sorularla düşünmemizi sağlaması ve verdiği yönlendirmeler gerçekten çok faydalı oldu. Şu an hem birbirimizi daha iyi anlıyor hem de daha sağlıklı iletişim kurabiliyoruz. Profesyonelliği ve samimiyeti için çok teşekkür ederiz.",
    name: "S. Yılmaz",
    date: "Mart 2025",
    stars: 5,
  },
  {
    quote:
      "Zor bir dönemde destek ararken karşıma çıktı Mustafa hocam. Ailevi sıkıntılarla başa çıkmakta zorlanırken güven veren bir destek oldu. Hem yaklaşımı hem rehberliği çok kıymetliydi teşekkür ederim Hocam'a. 🙏🏻",
    name: "R. Yaşarbaş",
    date: "Şubat 2025",
    stars: 5,
  },
  {
    quote:
      "Yoğun tükenmişlik hissi yaşadığım bir dönemde destek almaya karar verdim. Seanslar sayesinde kendimi yeniden tanımaya ve nefes almaya başladım. İyi ki bu adımı atmışım. İyi ki siz hocam",
    name: "S. Tanyeri",
    date: "Ocak 2024",
    stars: 5,
  },
  {
    quote:
      "Profesyonel yaklaşımı ve destekleyici tutumu ile zorlu sürecimde yanımda oldu. Teşekkürler.",
    name: "M. Arslan",
    date: "Aralık 2023",
    stars: 5,
  },
  {
    quote:
      "Terapide kullandığı teknikler ve yaklaşımı çok etkili. Kendimi daha iyi hissediyorum.",
    name: "A. Yıldız",
    date: "Kasım 2023",
    stars: 5,
  },
  {
    quote:
      "Her seansın sonunda pozitif enerji ile ayrılıyorum. Hayatımdaki en iyi kararlardan biri.",
    name: "D. Çelik",
    date: "Ekim 2023",
    stars: 5,
  },
];

const CERTIFICATES = [
  { id: 1, src: "/certificate1.jpg", alt: "Sertifika 1" },
  { id: 2, src: "/certificate2.jpg", alt: "Sertifika 2" },
  { id: 3, src: "/certificate3.jpg", alt: "Sertifika 3" },
  { id: 4, src: "/certificate4.jpg", alt: "Sertifika 4" },
  { id: 5, src: "/certificate5.jpg", alt: "Sertifika 5" },
  { id: 6, src: "/certificate6.jpg", alt: "Sertifika 6" },
  { id: 7, src: "/certificate7.jpg", alt: "Sertifika 7" },
  { id: 8, src: "/certificate8.jpg", alt: "Sertifika 8" },
  { id: 9, src: "/certificate9.jpg", alt: "Sertifika 9" },
  { id: 10, src: "/certificate10.jpg", alt: "Sertifika 10" },
  { id: 11, src: "/certificate11.jpg", alt: "Sertifika 11" },
];

const VIDEOS = [
  {
    id: 1,
    title: "Anksiyete ile Başa Çıkma Yöntemleri",
    desc: "Günlük hayatta yaşanan kaygı ve stresle başa çıkma teknikleri hakkında bilgilendirme.",
    thumbnail: "/video-anxiety.jpg",
    videoUrl: "/videos/anxiety-management.mp4"
  },
  {
    id: 2,
    title: "İlişkilerde İletişimin Önemi",
    desc: "Sağlıklı ilişkiler için etkili iletişim teknikleri ve öneriler.",
    thumbnail: "/video-relationships.jpg",
    videoUrl: "/videos/relationship-communication.mp4"
  },
  {
    id: 3,
    title: "Depresyonu Anlamak",
    desc: "Depresyon belirtileri ve tedavi sürecinde bilmeniz gerekenler.",
    thumbnail: "/video-depression.jpg",
    videoUrl: "/videos/understanding-depression.mp4"
  },
  {
    id: 4,
    title: "Öz Farkındalık Geliştirme",
    desc: "Kendini tanıma ve kişisel gelişim yolculuğunda önemli ipuçları.",
    thumbnail: "/video-awareness.jpg",
    videoUrl: "/videos/self-awareness.mp4"
  }
];

const SERVICES = [
  {
    title: "Bireysel Danışmanlık",
    img: "/therapy-individual.jpg",
    sections: [
      {
        title: "Bireysel Danışmanlık Nedir?",
        content: "Bireysel danışmanlık, kişinin kendini daha iyi tanıması, duygusal zorluklarla başa çıkması ve hayat kalitesini artırması için profesyonel destek aldığı bir süreçtir. Bu süreçte, güvenli ve yargısız bir ortamda düşüncelerinizi, duygularınızı ve endişelerinizi paylaşabilirsiniz."
      },
      {
        title: "Kimler İçin Uygundur?",
        content: "Bireysel danışmanlık; depresyon, kaygı, stres, ilişki sorunları, öfke kontrolü, özgüven problemleri yaşayan veya kendini daha iyi tanımak ve geliştirmek isteyen herkes için uygundur. Yaşamında değişim ve dönüşüm isteyen her yaştan danışan faydalanabilir."
      }
    ]
  },
  {
    title: "Çift Danışmanlığı",
    img: "/therapy-couple.jpg",
    sections: [
      {
        title: "Çift Danışmanlığı Nedir?",
        content: "Çift danışmanlığı, ilişkilerinde zorluk yaşayan çiftlerin, profesyonel bir danışman eşliğinde iletişim becerilerini geliştirdikleri ve ilişki dinamiklerini iyileştirdikleri bir süreçtir. Bu süreçte çiftler, birbirlerini daha iyi anlama ve sorunlarına çözüm bulma fırsatı yakalar."
      },
      {
        title: "Kimler İçin Uygundur?",
        content: "İletişim problemleri yaşayan, çatışma çözme becerileri geliştirmek isteyen, güven sorunları olan, evlilik öncesi danışmanlık almak isteyen veya ilişkilerini güçlendirmek isteyen tüm çiftler için uygundur."
      }
    ]
  },
  {
    title: "Aile Danışmanlığı",
    img: "/therapy-family.jpg",
    sections: [
      {
        title: "Aile Danışmanlığı Nedir?",
        content: "Aile danışmanlığı, aile içi iletişimi güçlendirmek, çatışmaları çözmek ve aile üyeleri arasındaki ilişkileri iyileştirmek için sunulan profesyonel bir destek hizmetidir. Bu süreçte tüm aile üyeleri birlikte çalışarak daha sağlıklı bir aile dinamiği oluşturur."
      },
      {
        title: "Kimler İçin Uygundur?",
        content: "Aile içi iletişim sorunları yaşayan, ebeveyn-çocuk ilişkilerinde zorlanan, ergenlik dönemi problemleri yaşayan, boşanma/yeni evlilik sürecinde destek ihtiyacı olan tüm aileler için uygundur."
      }
    ]
  },
  {
    title: "Online Danışmanlık",
    img: "/therapy-online.jpg",
    sections: [
      {
        title: "Online Danışmanlık Nedir?",
        content: "Online danışmanlık, yüz yüze danışmanlığın tüm avantajlarını dijital platformda sunan modern bir yöntemdir. Video görüşme üzerinden gerçekleştirilen seanslar, geleneksel danışmanlık kadar etkili ve güvenlidir."
      },
      {
        title: "Kimler İçin Uygundur?",
        content: "Yoğun iş temposu nedeniyle kliniğe gelemeyen, farklı şehirde yaşayan, seyahat engeli olan, ev/ofis konforunda danışmanlık almak isteyen veya pandemi sürecinde yüz yüze görüşmek istemeyen danışanlar için idealdir."
      }
    ]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);
  
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [certificatesPerPage, setCertificatesPerPage] = useState(3);
  const maxCertificateIndex = CERTIFICATES.length - 1;

  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => setReviewIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setReviewIndex(prev => prev + 1);
  const handlePrevCertificate = () => setCertificateIndex(prev => Math.max(0, prev - 1));
  const handleNextCertificate = () => setCertificateIndex(prev => Math.min(maxCertificateIndex, prev + 1));

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Çocuk Değerlendirme ve Dikkat Testleri - Accordion mantığı
  const [openChildTestSections, setOpenChildTestSections] = useState<{[key:string]: boolean}>({});

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[color:var(--foreground)]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl md:text-2xl font-heading text-gold">
              Psikolog Mustafa Çobanoğlu
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="nav-link">Hakkımızda</Link>
              <Link href="#services" className="nav-link">Hizmetler</Link>
              <Link href="#testimonials" className="nav-link">Yorumlar</Link>
              <Link href="#certificates" className="nav-link">Eğitimler</Link>
              <Link href="#tanitim" className="nav-link">Tanıtım</Link>
              <Link href="/#blogs" className="nav-link">Blog</Link>
              <Link href="#contact" className="nav-link">İletişim</Link>
              <a
                href="https://wa.me/905347353676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="https://wa.me/905347353676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <Link href="#about" className="block py-2 text-white hover:text-gold transition-colors">Hakkımızda</Link>
              <Link href="#services" className="block py-2 text-white hover:text-gold transition-colors">Hizmetler</Link>
              <Link href="#testimonials" className="block py-2 text-white hover:text-gold transition-colors">Yorumlar</Link>
              <Link href="#certificates" className="block py-2 text-white hover:text-gold transition-colors">Eğitimler</Link>
              <Link href="#tanitim" className="block py-2 text-white hover:text-gold transition-colors">Tanıtım</Link>
              <Link href="/#blogs" className="block py-2 text-white hover:text-gold transition-colors">Blog</Link>
              <Link href="#contact" className="block py-2 text-white hover:text-gold transition-colors">İletişim</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-4 md:px-8 lg:px-16">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-4xl md:text-6xl font-heading mb-4">
              Psikolog Mustafa Çobanoğlu
            </h1>
            <p className="text-xl md:text-2xl text-gold">
              Profesyonel Psikolojik Danışmanlık Hizmetleri
            </p>
          </div>

          {/* Portrait Image */}
          <div className="md:flex-1 flex justify-center items-center">
            <div className="relative w-64 md:w-80 aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/portrait.jpg"
                alt="Psikolog Mustafa Çobanoğlu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Özeti */}
      <section id="about" className="section animate-fadein-soft">
        <h2 className="text-2xl md:text-3xl font-heading primary mb-4">Hakkımızda</h2>
        <p className="text-lg md:text-xl w-full max-w-4xl text-justify text-[#1a237e]">
          Psikolog Mustafa Çobanoğlu, lisans eğitimini Psikoloji bölümünde tamamlamıştır. Meslek hayatına başladığı günden bu yana çocuk, ergen ve ailelerle çalışmakta, bireysel ihtiyaçlara yönelik danışmanlık hizmetleri sunmaktadır. Şu anda Özel Erzurum İnci Okulları'nda aktif olarak psikolog olarak görev yapmakta ve eğitim kurumundaki çocukların sosyal, duygusal ve akademik gelişimlerini desteklemektedir. Çocuklara yönelik olarak oyun danışmanlığı, resim analizi, dikkat testleri, zekâ testleri, gelişimsel testler, algı testleri ve okul olgunluğu testleri uygulamaktadır. Çocukların gelişimsel süreçlerini yakından takip ederek hem bireysel hem de aile temelli müdahalelerde bulunmaktadır.  Aynı zamanda ebeveyn danışmanlığı ve boşanma sürecinde olan ailelere yönelik boşanma danışmanlığı hizmetleri sunarak aile içi iletişimi güçlendirmeye destek olmaktadır. Çalışma alanları arasında bireysel danışmanlık, ergen danışmanlığı ve öğrenci koçluğu yer almakta; özellikle öfke kontrol problemleri, depresyon, obsesif kompulsif bozukluk (OKB) ve anksiyete konularında danışanlarına profesyonel destek sağlamaktadır.  Her bireyin yaşadığı zorluklara özgü, bilimsel temelli yöntemler kullanarak, psikolojik dayanıklılığın ve yaşam kalitesinin artırılmasını hedeflemektedir.
        </p>
      </section>

      {/* Hizmet Alanları */}
      <section id="services" className="section animate-fadein-soft">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#e8eaf6] px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] backdrop-blur-md border border-[#5c6bc0]/40" style={{letterSpacing: '0.02em', textShadow: '0 2px 8px #22306b33'}}>Hizmet Alanları</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service, serviceIndex) => (
            <div
              key={service.title}
              className="rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-0 flex flex-col gap-2 shadow-md"
            >
              <div className="w-full h-48 md:h-52 rounded-t-2xl overflow-hidden bg-[#232323] flex items-center justify-center">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="mb-2">
                  <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] text-[#e8eaf6] font-semibold text-lg shadow-md" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #22306b22'}}>{service.title}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {service.sections.map((section, index) => (
                    <div key={section.title} className="border-b border-[#2a2a2a] last:border-b-0">
                      <button
                        className="w-full text-left py-2 flex justify-between items-center text-[#1a237e] hover:text-[#5c6bc0] transition-colors"
                        onClick={() => {
                          const key = `${serviceIndex}-${index}`;
                          setOpenSections(prev => ({
                            ...prev,
                            [key]: !prev[key]
                          }));
                        }}
                      >
                        <span className="text-base font-medium">{section.title}</span>
                        <span className={`transform transition-transform duration-300 ${openSections[`${serviceIndex}-${index}`] ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openSections[`${serviceIndex}-${index}`] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="py-3 text-[#1a237e] text-base">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Çocuk Değerlendirme ve Dikkat Testleri */}
      <section className="section animate-fadein-soft mt-12">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-0 flex flex-col gap-2 shadow-md">
            {/* Görsel */}
            <div className="w-full h-48 md:h-52 rounded-t-2xl overflow-hidden bg-[#232323] flex items-center justify-center">
              <Image
                src="/therapy-family.jpg" // Buraya istediğiniz görselin yolunu koyabilirsiniz
                alt="Çocuk Değerlendirme ve Dikkat Testleri görseli"
                width={400}
                height={300}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="mb-2">
                <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] text-[#e8eaf6] font-semibold text-lg shadow-md" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #22306b22'}}>Çocuk Değerlendirme ve Dikkat Testleri</span>
              </div>
              <div className="flex flex-col gap-2">
                {/* Accordion: Nedir? */}
                <div className="border-b border-[#232323] last:border-b-0">
                  <button
                    className="w-full text-left py-2 flex justify-between items-center text-[#1a237e] hover:text-[#5c6bc0] transition-colors"
                    onClick={() => setOpenChildTestSections(prev => ({ ...prev, nedir: !prev.nedir }))}
                  >
                    <span className="text-base font-medium">Nedir?</span>
                    <span className={`transform transition-transform duration-300 ${openChildTestSections.nedir ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openChildTestSections.nedir ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}> 
                    <p className="py-3 text-[#1a237e] text-base leading-relaxed">
                      Çocuklara yönelik değerlendirme testleri, gelişimsel süreçlerini anlamak, dikkat düzeylerini ölçmek ve bilişsel yeteneklerini değerlendirmek amacıyla kullanılan bilimsel araçlardır.
                    </p>
                  </div>
                </div>
                {/* Accordion: Uygulanan Testler */}
                <div className="border-b border-[#232323] last:border-b-0">
                  <button
                    className="w-full text-left py-2 flex justify-between items-center text-[#1a237e] hover:text-[#5c6bc0] transition-colors"
                    onClick={() => setOpenChildTestSections(prev => ({ ...prev, testler: !prev.testler }))}
                  >
                    <span className="text-base font-medium">Uygulanan Testler</span>
                    <span className={`transform transition-transform duration-300 ${openChildTestSections.testler ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openChildTestSections.testler ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}> 
                    <ul className="py-3 list-disc pl-6 text-[#1a237e] space-y-1">
                      <li>AGTE (Ankara Gelişim Tarama Envanteri)</li>
                      <li>Benton Görsel Bellek Testi</li>
                      <li>Metropolitan Okul Olgunluk Testi</li>
                      <li>Porteus Labirentleri Testi</li>
                      <li>Peabody Alıcı Dil Testi Eğitimi</li>
                      <li>Kent EGY Zeka Testi</li>
                      <li>Kinder Angst (KAT) Testi</li>
                      <li>Frankfurter Dikkat Testi</li>
                      <li>Catell 2A / 3A Zekâ Testi</li>
                      <li>Burdon Dikkat Testi</li>
                      <li>Goodenough-Harris İnsan Resmi Çizme Testi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloglar (Preview) */}
      <section id="blogs" className="section animate-fadein-soft">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#e8eaf6] px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] backdrop-blur-md border border-[#5c6bc0]/40" style={{letterSpacing: '0.02em', textShadow: '0 2px 8px #22306b33'}}>Blog Yazıları</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Kaygı ve Stresle Başa Çıkma Yöntemleri",
            desc: "Günlük hayatta yaşadığımız kaygı ve stresle başa çıkmanın etkili yolları ve profesyonel destek almanın önemi.",
            img: "/blog-anxiety.jpg",
            slug: "kaygi-stres",
          },
          {
            title: "Sağlıklı İlişkilerin Temelleri",
            desc: "İlişkilerde yaşanan zorluklar, iletişim becerileri ve mutlu ilişkiler için öneriler.",
            img: "/blog-relationships.jpg",
            slug: "saglikli-iliskiler",
          },
          {
            title: "Özgüven Geliştirme Rehberi",
            desc: "Özgüven eksikliğinin nedenleri, etkileri ve kendimizi daha iyi hissetmek için yapabileceklerimiz.",
            img: "/blog-confidence.jpg",
            slug: "ozguven-gelistirme",
          }].map(blog => (
            <a
              key={blog.title}
              href={`/blog/${blog.slug}`}
              className="rounded-2xl bg-[#23253a] border border-[#2a2a2a] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 flex flex-col cursor-pointer overflow-hidden"
              style={{ textDecoration: 'none', minHeight: 380 }}
            >
              <div className="w-full h-48 rounded-t-2xl overflow-hidden bg-[#232323] flex items-center justify-center">
                <Image
                  src={blog.img}
                  alt={blog.title + " görseli"}
                  width={320}
                  height={192}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] text-[#e8eaf6] font-semibold text-lg shadow-md mb-2" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #22306b22'}}>{blog.title}</span>
                <p className="text-white text-sm">{blog.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Sertifikalar */}
      <section id="certificates" className="section animate-fadein-soft">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#e8eaf6] px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] backdrop-blur-md border border-[#5c6bc0]/40" style={{letterSpacing: '0.02em', textShadow: '0 2px 8px #22306b33'}}>Sertifikalar</h2>
        </div>
        <div className="relative">
          <div className="flex gap-6 transition-transform duration-500" style={{
            transform: `translateX(-${certificateIndex * (100 / certificatesPerPage)}%)`,
          }}>
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="flex-shrink-0"
                style={{ width: `${100 / certificatesPerPage}%` }}
              >
                <div className="rounded-2xl bg-[#181c23]/80 border border-[#232323] p-4 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 flex flex-col items-center justify-center w-[320px] h-[240px] mx-auto">
                  <div 
                    className="w-full h-full rounded-xl overflow-hidden bg-[#232323] flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImage({ src: cert.src, alt: cert.alt })}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={300}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrevCertificate}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#181c23] text-gold p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Önceki sertifika"
          >
            ←
          </button>
          <button
            onClick={handleNextCertificate}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#181c23] text-gold p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Sonraki sertifika"
          >
            →
          </button>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-auto">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              style={{ 
                objectFit: "contain",
                width: "100%",
                height: "auto",
                maxHeight: "90vh"
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Görseli kapat"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Tanıtım Videosu */}
      <section id="tanitim" className="section animate-fadein-soft">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#e8eaf6] px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] backdrop-blur-md border border-[#5c6bc0]/40" style={{letterSpacing: '0.02em', textShadow: '0 2px 8px #22306b33'}}>Tanıtım</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-[#232323] bg-[#181c23]/80">
            <video
              src="/tanitim.mp4"
              controls
              poster="/video-poster.jpg"
              className="w-full h-full object-cover"
            >
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section id="testimonials" className="section animate-fadein-soft">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#e8eaf6] px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#3f51b5cc] to-[#5c6bc0cc] backdrop-blur-md border border-[#5c6bc0]/40" style={{letterSpacing: '0.02em', textShadow: '0 2px 8px #22306b33'}}>Danışan Yorumları</h2>
        </div>
        <div className="relative">
          <div className="flex gap-6 transition-transform duration-500" style={{
            transform: `translateX(-${reviewIndex * (100 / reviewsPerPage)}%)`,
          }}>
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / reviewsPerPage}%` }}
              >
                <div className="rounded-xl bg-[#181c23]/80 border border-[#232323] p-6 shadow-md">
                  <p className="text-white mb-4 italic">"{review.quote}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gold font-medium">{review.name}</p>
                      <p className="text-white text-sm">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <span key={i} className="text-gold">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#181c23] text-gold p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Önceki yorum"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#181c23] text-gold p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Sonraki yorum"
          >
            →
          </button>
        </div>
      </section>

      {/* İletişim */}
      <section id="contact" className="section py-16" ref={contactRef}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading text-white text-center mb-8">İletişim</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#e3e6f3] bg-white shadow-sm min-w-[220px] justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-6 h-6 text-[#3949ab]"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span className="text-[#3949ab] font-semibold text-lg">+90 534 735 3676</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#e3e6f3] bg-white shadow-sm min-w-[220px] justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-6 h-6 text-[#3949ab]"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              <span className="text-[#3949ab] font-semibold text-lg">mustfcbnglu@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-[#1a237e]">
        <div className="max-w-4xl mx-auto px-4">
          {/* İletişim Bilgileri */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Adres */}
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.google.com/search?kgmid=%2Fg%2F11x2y3bjkl&hl=tr-TR&q=Psikolog%20Mustafa%20%C3%87obano%C4%9Flu&shndl=30&shem=lcuae%2Clspt4&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F3&kgs=c8a0aa5d22f05d0b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#283593] flex items-center justify-center mb-2 shadow-lg hover:bg-[#3949ab] transition-colors"
              >
                <svg className="w-6 h-6 text-[#e8eaf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              <h3 className="text-lg font-medium text-[#e8eaf6] font-sans">Adres</h3>
              <p className="text-[#c5cae9] text-sm font-light">Lalapaşa Mah, Menderes Cad. Ergüney İş Merkezi Kat:3,</p>
              <p className="text-[#c5cae9] text-sm font-light"> 25100 Yakutiye/Erzurum</p>
            </div>

            {/* İletişim */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4">
                <a href="tel:+905347353676" className="w-12 h-12 rounded-full bg-[#283593] flex items-center justify-center hover:bg-[#3949ab] transition-colors shadow-lg">
                  <svg className="w-6 h-6 text-[#e8eaf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:mustfcbnglu@gmail.com" className="w-12 h-12 rounded-full bg-[#283593] flex items-center justify-center hover:bg-[#3949ab] transition-colors shadow-lg">
                  <svg className="w-6 h-6 text-[#e8eaf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-medium text-[#e8eaf6] mt-2 font-sans">İletişim</h3>
              <p className="text-[#c5cae9] text-sm font-light">+90 534 735 3676</p>
              <p className="text-[#c5cae9] text-sm font-light">mustfcbnglu@gmail.com</p>
            </div>

            {/* Sosyal Medya */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/psk.mustafacobanoglu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#283593] flex items-center justify-center hover:bg-[#3949ab] transition-colors shadow-lg"
                >
                  {/* Instagram Orijinal SVG */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="20" height="20" x="2" y="2" rx="6" fill="#e8eaf6"/>
                    <rect width="14" height="14" x="5" y="5" rx="4" fill="#283593"/>
                    <circle cx="12" cy="12" r="3.2" fill="#e8eaf6"/>
                    <circle cx="16.5" cy="7.5" r="1" fill="#e8eaf6"/>
                  </svg>
                </a>
                <a 
                  href="https://tr.linkedin.com/in/mustafa-%C3%A7obano%C4%9Flu-813606352" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#283593] flex items-center justify-center hover:bg-[#3949ab] transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 text-[#e8eaf6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-medium text-[#e8eaf6] mt-2 font-sans">Sosyal Medya</h3>
              <p className="text-[#c5cae9] text-sm font-light">Bizi takip edin</p>
            </div>
          </div>

          {/* Alt Bilgi */}
          <div className="border-t border-[#3949ab] pt-8">
            <div className="flex justify-center gap-8 mb-4">
              <a href="#" className="text-[#c5cae9] hover:text-[#e8eaf6] transition-colors font-light">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-[#c5cae9] hover:text-[#e8eaf6] transition-colors font-light">
                Kullanım Şartları
              </a>
            </div>
            <p className="text-sm text-[#c5cae9] font-light">© 2025 Psikolog Mustafa Çobanoğlu</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fadein-soft { animation: fadein 1.4s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes heroLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes heroRight {
          from { opacity: 0; transform: translateX(48px); }
          to { opacity: 1; transform: none; }
        }
        .animate-hero-left {
          animation: heroLeft 1.1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-hero-right {
          animation: heroRight 1.1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </main>
  );
}
