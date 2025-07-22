import React, { useState, useEffect, useRef, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjY2NjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DYXJpY2FtZW50by4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  style
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer per lazy loading con ottimizzazione
  useEffect(() => {
    if (priority) {
      // Se è prioritaria, imposta subito come in vista
      setIsInView(true);
      return;
    }

    // Usa IntersectionObserver con opzioni ottimizzate
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Aumentato ulteriormente per iniziare a caricare molto prima
        threshold: 0.001 // Ridotto ulteriormente per iniziare a caricare appena l'immagine diventa minimamente visibile
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Precarica l'immagine quando è in vista con ottimizzazioni
  useEffect(() => {
    if (!isInView) return;

    // Carica immediatamente senza attendere il prossimo frame per maggiore velocità
    const img = new Image();
      
      // Ottimizzazioni per il caricamento
      img.decoding = 'async';
      
      // Utilizziamo setAttribute per impostare fetchpriority in minuscolo
      img.setAttribute('fetchpriority', priority ? 'high' : 'auto');
      
      if ('loading' in HTMLImageElement.prototype) {
        img.loading = priority ? 'eager' : 'lazy';
      }
      
      img.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setHasError(true);
      };
      img.src = src;
  }, [isInView, src, onLoad, priority]);

  if (hasError) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={style}
      >
        <span className="text-gray-500 text-sm">Errore caricamento immagine</span>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        WebkitMaskImage: 'radial-gradient(white, black)',
        maskImage: 'radial-gradient(white, black)',
        willChange: 'transform'
      }}
    >
      {/* Placeholder ottimizzato */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hardware-accelerated"
          style={{ 
            filter: 'blur(2px)',
            willChange: 'opacity',
            transform: 'translateZ(0)',
            borderRadius: 'inherit',
            overflow: 'hidden'
          }}
          fetchpriority="low"
          loading="eager"
          decoding="sync"
        />
      )}
      
      {/* Immagine principale ottimizzata */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 hardware-accelerated ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            willChange: 'opacity, transform',
            transform: 'translateZ(0)',
            borderRadius: 'inherit',
            overflow: 'hidden'
          }}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          onError={() => setHasError(true)}
          fetchpriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
      
      {/* Loading overlay ottimizzato */}
      {!isLoaded && isInView && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse hardware-accelerated"
          style={{ 
            willChange: 'opacity',
            borderRadius: 'inherit',
            overflow: 'hidden'
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer hardware-accelerated"
            style={{ 
              willChange: 'transform',
              borderRadius: 'inherit'
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

// Esporta una versione memorizzata del componente per evitare re-render inutili
export default memo(OptimizedImage);