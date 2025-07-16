import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const images = [
    '/lavoro-serale.jpg',
    '/lavoro-casco.jpg'
  ];

  // Funzione per cambiare immagine
  const changeImage = (index) => {
    // Assicurati che l'indice sia valido
    if (index >= 0 && index < images.length) {
      setCurrentImage(index);
    }
  };

  // Effetto per lo scorrimento automatico delle immagini
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  // Gestione del trascinamento sulla barra di scorrimento
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMouseMove(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;
    
    // Calcola la posizione relativa (0-1)
    const position = Math.max(0, Math.min(1, offsetX / sliderWidth));
    
    // Determina quale immagine mostrare in base alla posizione
    const imageIndex = Math.floor(position * images.length);
    changeImage(imageIndex);
  };

  useEffect(() => {
    // Aggiungi event listener per il mouse up globale
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  // Precarica le immagini per evitare schermate grigie
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Definisci i link in base all'immagine corrente
  const linkData = [
    { text: 'Azienda', href: '#about' },
    { text: 'Progetti', href: '#projects' }
  ];

  // Seleziona il link in base all'immagine corrente
  const currentLink = linkData[currentImage];

  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-end overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex w-[200%] transition-transform duration-1000 ease-in-out h-full" 
             style={{ transform: `translateX(-${currentImage * 50}%)` }}>
          {images.map((image, index) => (
            <div 
              key={index}
              className="w-1/2 h-full bg-cover bg-center bg-no-repeat flex-shrink-0 grayscale-image"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
        {/* Separatore con opacità diverse */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black/30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-black/70 pointer-events-none" />
      </div>

      {/* Content */}
      <FadeInSection threshold={0.1} triggerOnce={false}>
        <div className="relative z-10 text-right text-white max-w-2xl mr-16 px-4">
          <FadeInSection delay={100} triggerOnce={false}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Costruiamo oggi <span className="text-red-400">le fondamenta</span>
              <br />
              del <span className="text-red-400">domani</span>.
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={200} triggerOnce={false}>
            <p className="font-body text-lg md:text-xl mb-6 text-gray-200 max-w-xl ml-auto font-light tracking-wide">
              <span className="text-white font-medium">Leader nel settore edile</span> con <span className="text-white font-medium">oltre 35 anni</span> di esperienza e innovazione
            </p>
          </FadeInSection>
          
          <FadeInSection delay={300} triggerOnce={false}>
            <div className="flex justify-end">
              <a
                href={currentLink.href}
                className="font-body text-sm uppercase relative group tracking-widest font-semibold"
                onClick={() => window.scrollTo(0, 0)}
              >
                {currentLink.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Scroll Indicator */}
      <FadeInSection delay={400} triggerOnce={false}>
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-red-500 animate-bounce z-50">
          <div className="bg-white/30 p-2 rounded-full">
            <ChevronDown className="w-16 h-16" />
          </div>
        </div>
      </FadeInSection>

      {/* Image Slider Controls */}
      <div 
        ref={sliderRef}
        className="absolute bottom-8 right-16 z-20 flex items-center space-x-2 cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div className="w-24 h-1 flex items-center">
          <div 
            className="h-1 rounded-full bg-red-600 transition-all duration-300"
            style={{ width: `${(currentImage + 1) * (100 / images.length)}%` }}
          />
        </div>
      </div>
    </section>
  );
}