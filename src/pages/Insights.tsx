import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import OptimizedImage from '../components/OptimizedImage';
import useImagePreload from '../hooks/useImagePreload';
import { ArrowRight, Building2, Calculator, Hammer, Palette, Settings, ThermometerSun, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Insights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const insights = [
    {
      id: 1,
      title: "General Contractor: Semplificare il processo",
      description: "Il metodo integrato per coordinare ogni aspetto della costruzione con un unico riferimento professionale.",
      icon: Building2,
      color: "red",
      readTime: "8 min",
      category: "Gestione Progetti",
      content: "Scopri come il nostro approccio General Contractor ottimizza tempi, costi e qualità del tuo progetto edilizio.",
      image: "/crop-architect-opening-blueprint.jpg"
    },
    {
      id: 2,
      title: "Parete in Cartongesso o Muratura: pro e contro",
      description: "Analisi completa delle due soluzioni costruttive più utilizzate nell'edilizia moderna.",
      icon: Hammer,
      color: "gray",
      readTime: "6 min",
      category: "Tecniche Costruttive",
      content: "Confronto dettagliato tra cartongesso e muratura tradizionale per aiutarti nella scelta migliore.",
      image: "/full-shot-people-carrying-placard-together.jpg"
    },
    {
      id: 3,
      title: "Riscaldamento a Pavimento",
      description: "La soluzione di comfort termico più efficiente e moderna per la tua abitazione.",
      icon: ThermometerSun,
      color: "red",
      readTime: "5 min",
      category: "Impianti",
      content: "Vantaggi, tipologie e considerazioni per l'installazione del riscaldamento radiante.",
      image: "/service-man-instelling-house-heating-system-floor.jpg"
    },
    {
      id: 4,
      title: "Colori adatti per gli interni: Come possono Influire",
      description: "L'impatto psicologico e estetico dei colori negli spazi abitativi contemporanei.",
      icon: Palette,
      color: "gray",
      readTime: "7 min",
      category: "Design Interni",
      content: "Guida alla scelta cromatica per creare ambienti armoniosi e funzionali.",
      image: "/scenery-designers-work.jpg"
    },
    {
      id: 5,
      title: "Posa Parquet e le sue Tipologie",
      description: "Tecniche di posa e tipologie di parquet per pavimentazioni di prestigio.",
      icon: Settings,
      color: "red",
      readTime: "6 min",
      category: "Pavimentazioni",
      content: "Tutto quello che devi sapere sulla posa del parquet e le diverse essenze disponibili.",
      image: "/pavimento-piastrellato-uomo-vista-dall-alto.jpg"
    }
  ];

  // Estrai le immagini per il precaricamento
  const carouselImages = insights.map(insight => insight.image);
  
  // Usa il hook per il precaricamento intelligente con opzioni avanzate
  const { isImageLoaded, setCurrentIndex: setPreloadIndex, forcePreload, loadedCount, totalCount } = useImagePreload(carouselImages, {
    priority: true,
    preloadNext: 4, // Aumentato da 2 a 4 per precaricare più immagini
    preloadAll: true // Precarica tutte le immagini immediatamente
  });
  
  // Smooth transition with debouncing and RAF for better performance (ottimizzato con useCallback)
  const handleTransition = useCallback((newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Usa requestAnimationFrame per sincronizzare con il refresh del browser
    requestAnimationFrame(() => {
      setCurrentIndex(newIndex);
      setPreloadIndex(newIndex); // Sincronizza con il precaricamento
      
      // Precarica anche l'immagine successiva e precedente per navigazione bidirezionale
      const nextIndex = newIndex === insights.length - 1 ? 0 : newIndex + 1;
      const prevIndex = newIndex === 0 ? insights.length - 1 : newIndex - 1;
      
      // Precarica in modo asincrono per non bloccare l'UI
      // Ridotto il tempo di attesa e uso di requestAnimationFrame per migliore sincronizzazione
      requestAnimationFrame(() => {
        setPreloadIndex(nextIndex);
        requestAnimationFrame(() => setPreloadIndex(prevIndex));
      });
      
      // Reset della transizione dopo l'animazione usando RAF per migliori performance
      const startTime = performance.now();
      const duration = 300; // Ridotto da 800ms a 300ms per transizioni più veloci
      
      const animateTransition = (currentTime) => {
        const elapsed = currentTime - startTime;
        if (elapsed >= duration) {
          setIsTransitioning(false);
          return;
        }
        requestAnimationFrame(animateTransition);
      };
      
      requestAnimationFrame(animateTransition);
    });
  }, [isTransitioning, insights.length, setPreloadIndex]);

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === insights.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  }, [currentIndex, insights.length, handleTransition]);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? insights.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  }, [currentIndex, insights.length, handleTransition]);

  const goToSlide = useCallback((index) => {
    if (index !== currentIndex) {
      handleTransition(index);
    }
  }, [currentIndex, handleTransition]);

  // Forza il precaricamento all'avvio
  useEffect(() => {
    forcePreload();
  }, [forcePreload]);

  // Auto-scroll functionality ottimizzato con RAF
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;
    
    let rafId;
    let lastTime = 0;
    const interval = 5000; // 5 seconds for better UX
    
    const tick = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      
      const elapsed = timestamp - lastTime;
      
      if (elapsed >= interval) {
        lastTime = timestamp;
        nextSlide();
      }
      
      rafId = requestAnimationFrame(tick);
    };
    
    rafId = requestAnimationFrame(tick);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isAutoPlaying, isTransitioning, nextSlide]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection threshold={0.1} triggerOnce={false}>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight mt-12">
                Expertise e <span className="text-red-500">Innovazione</span>
                <br />
                <span className="text-gray-300">nell'Edilizia</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Scopri le nostre competenze tecniche e le soluzioni innovative che caratterizzano 
                ogni progetto EDIL GAMAL. Approfondimenti professionali per scelte consapevoli.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20">
        <div className="w-full">
          <FadeInSection threshold={0.1} triggerOnce={false}>
            {/* Carousel Container */}
            <div 
              className="relative overflow-hidden bg-white shadow-2xl mb-16 select-none carousel-container"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Carousel Track ottimizzato */}
              <div 
                className="flex transition-transform duration-800 ease-out will-change-transform hardware-accelerated"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {insights.map((insight, index) => {
                  const IconComponent = insight.icon;
                  const isRed = insight.color === 'red';
                  
                  return (
                    <div key={insight.id} className="w-full flex-shrink-0">
                       <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                         {/* Content Side */}
                         <div className={`lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center ${isRed ? 'bg-gradient-to-br from-red-600 to-red-700' : 'bg-[#2a2a2b]'} relative overflow-hidden`}>
                           {/* Overlay effects for both red and gray backgrounds */}
                           <div className="absolute inset-0 z-0">
                             {isRed ? (
                               <>
                                 <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                               </>
                             ) : null}
                             {/* Elegant inner shadow for all boxes */}
                             <div className="absolute inset-0 shadow-inner" style={{
                               boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.3), inset 0 -4px 20px rgba(0,0,0,0.2), inset 4px 0 20px rgba(0,0,0,0.15), inset -4px 0 20px rgba(0,0,0,0.15)'
                             }}></div>
                           </div>
                           
                           {/* Background decorations */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 z-5"></div>
                           <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-12 z-5"></div>
                           
                           <div className="relative z-10">
                             <div className="flex items-center justify-end mb-5">
                               <span className="text-white/70 text-xs font-medium bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                 {insight.category}
                               </span>
                             </div>
                             
                             <div className="mb-4">
                               <span className="text-white/50 text-xs font-medium tracking-wider">
                                 #{insight.id.toString().padStart(2, '0')}
                               </span>
                             </div>
                             
                             <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                               {insight.title}
                             </h3>
                             
                             <p className="text-white/85 text-base leading-relaxed mb-6">
                               {insight.description}
                             </p>
                             
                             <p className="text-white/70 text-sm leading-relaxed mb-6">
                               {insight.content}
                             </p>
                             
                             <div className="flex items-center justify-end">
                               <button className="group inline-flex items-center text-white/90 hover:text-white font-medium text-sm transition-colors">
                                 Leggi tutto
                                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                               </button>
                             </div>
                           </div>
                         </div>

                         {/* Image Side */}
                          <div className="relative bg-gray-100 lg:col-span-1 overflow-hidden" style={{ lineHeight: 0, fontSize: 0 }}>
                            <OptimizedImage
                              src={insight.image}
                              alt={`Progetto ${insight.title}`}
                              className="w-full h-full grayscale"
                              priority={index <= 4} // Aumentato da 2 a 4 per dare priorità a più immagini
                              style={{
                                willChange: 'opacity, transform',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                                imageRendering: 'auto',
                                transition: 'opacity 300ms ease-out'
                              }}
                              onLoad={() => {
                                // Notifica al browser che l'immagine è importante
                                if ('requestIdleCallback' in window) {
                                  // @ts-ignore
                                  window.requestIdleCallback(() => {
                                    // Opzionale: aggiungere qui logica per migliorare l'esperienza utente
                                  }, { timeout: 200 });
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            
                            {/* Floating number */}
                            <div className="absolute top-6 right-6">
                              <div className={`w-12 h-12 rounded-lg ${isRed ? 'bg-red-600/90' : 'bg-gray-800/90'} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20`}>
                                <span className="text-white font-bold text-lg">
                                  {insight.id}
                                </span>
                              </div>
                            </div>
                          </div>
                       </div>
                     </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                disabled={isTransitioning}
                className={`absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-150 z-10 cursor-pointer ${
                  isTransitioning 
                    ? 'opacity-50 pointer-events-none' 
                    : 'hover:bg-white/30 hover:scale-110 active:scale-95'
                }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextSlide}
                disabled={isTransitioning}
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-150 z-10 cursor-pointer ${
                  isTransitioning 
                    ? 'opacity-50 pointer-events-none' 
                    : 'hover:bg-white/30 hover:scale-110 active:scale-95'
                }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {insights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : isTransitioning
                        ? 'bg-white/30 pointer-events-none'
                        : 'bg-white/50 hover:bg-white/70 hover:scale-110 active:scale-95'
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div 
                  className="h-full bg-white transition-all duration-300 ease-out hardware-accelerated"
                  style={{ 
                    width: `${((currentIndex + 1) / insights.length) * 100}%`,
                    willChange: 'width',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
            </div>

            {/* Featured Section */}
            <div className="bg-black shadow-xl overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <OptimizedImage
                    src="/mani-di-uomini-d-affari-sul-tavolo-bianco-con-documenti-e-bozze.jpg"
                    alt="Team EDIL GAMAL - Expertise tecnica"
                    className="w-full h-full grayscale-image"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                      35+ Anni di Esperienza
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    La nostra <span className="text-red-600">Expertise</span> al tuo servizio
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Ogni progetto EDIL GAMAL è il risultato di competenze tecniche consolidate, 
                    innovazione continua e attenzione maniacale ai dettagli. La nostra esperienza 
                    pluriennale ci permette di offrire soluzioni all'avanguardia.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Consulenza tecnica specializzata</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Soluzioni innovative e sostenibili</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Materiali di prima qualità</span>
                    </div>
                  </div>
                  <Link 
                    to="/progetti" 
                    className="group inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
                    onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                  >
                    Scopri i nostri progetti
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Elegant CTA Section */}
            <div className="py-20 bg-black relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-600 rounded-full blur-3xl"></div>
              </div>
              
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="mb-8">
                   <span className="inline-block text-white text-sm font-semibold tracking-wider uppercase mb-4">
                     Inizia il tuo progetto
                   </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Hai un progetto <span className="text-red-600">in mente?</span>
                  </h3>
                  <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                    Trasformiamo le tue idee in realtà con la nostra expertise tecnica e soluzioni innovative. 
                    Contattaci per una consulenza gratuita e scopri come possiamo realizzare il tuo progetto ideale.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                   <Link to="/contatti#top" className="group inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                     Richiedi Consulenza Gratuita
                     <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                   <Link 
                     to="/progetti" 
                     className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                     onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                   >
                     Scopri i Nostri Progetti
                     <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                 </div>
               </div>
             </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}