import { useEffect, useState, useCallback } from 'react';

interface UseImagePreloadOptions {
  priority?: boolean;
  preloadNext?: number;
  preloadAll?: boolean;
}

export function useImagePreload(
  images: string[], 
  options: UseImagePreloadOptions = {}
) {
  const { priority = false, preloadNext = 2, preloadAll = false } = options;
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadStarted, setPreloadStarted] = useState<Set<string>>(new Set());

  // Funzione ottimizzata per precaricare un'immagine con massima priorità
  const preloadImage = useCallback((src: string, index: number, isPriority: boolean = false) => {
    // Evita di precaricare la stessa immagine più volte
    if (preloadStarted.has(src) || loadedImages.has(src)) return Promise.resolve(src);
    
    return new Promise<string>((resolve, reject) => {
      // Aggiorna lo stato di precaricamento immediatamente
      setPreloadStarted(prev => new Set([...prev, src]));
      
      const img = new Image();
      
      // Ottimizzazioni per il caricamento con massima priorità
      // Forza alta priorità per tutte le immagini nel carosello
      img.fetchPriority = 'high';
      img.decoding = 'async';
      img.importance = 'high';
      
      // Forza caricamento immediato
      if ('loading' in HTMLImageElement.prototype) {
        img.loading = 'eager';
      }
      
      // Aggiungi attributi per migliorare la priorità
      if ('sizes' in HTMLImageElement.prototype) {
        img.sizes = '100vw'; // Suggerisce al browser che l'immagine è importante
      }
      
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        resolve(src);
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [loadedImages, preloadStarted]);

  // Precarica le immagini prioritarie immediatamente
  useEffect(() => {
    if (images.length === 0) return;
    
    // Determina quali immagini precaricare
    let imagesToPreload = [];
    
    if (preloadAll) {
      // Precarica tutte le immagini
      imagesToPreload = [...images];
    } else if (priority) {
      // Precarica la prima immagine e le successive in base a preloadNext
      imagesToPreload = images.slice(0, Math.min(preloadNext + 1, images.length));
    } else {
      // Precarica solo l'immagine corrente
      imagesToPreload = [images[currentIndex]];
    }
    
    // Usa requestAnimationFrame per garantire che il precaricamento avvenga il prima possibile
    requestAnimationFrame(() => {
      // Precarica le immagini in ordine di priorità
      imagesToPreload.forEach((src, idx) => {
        // Considera tutte le immagini come prioritarie per un caricamento più veloce
        const isPriority = true;
        preloadImage(src, idx, isPriority);
      });
    });
  }, [images, priority, preloadNext, preloadAll, currentIndex, preloadImage]);

  // Precarica le immagini successive quando cambia l'indice corrente con massima priorità
  useEffect(() => {
    if (images.length === 0 || preloadAll) return;

    // Calcola quali immagini precaricare in base all'indice corrente
    const nextImages = [];
    
    // Aggiungi l'immagine corrente se non è già caricata
    if (currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex];
      if (!loadedImages.has(currentImage)) {
        nextImages.push({ src: currentImage, index: 0, isPriority: true });
      }
    }
    
    // Aggiungi le immagini successive e precedenti per navigazione bidirezionale
    for (let i = 1; i <= preloadNext; i++) {
      // Immagine successiva
      const nextIndex = (currentIndex + i) % images.length;
      const nextImage = images[nextIndex];
      
      // Immagine precedente
      const prevIndex = (currentIndex - i + images.length) % images.length;
      const prevImage = images[prevIndex];
      
      if (!loadedImages.has(nextImage) && !preloadStarted.has(nextImage)) {
        nextImages.push({ src: nextImage, index: i, isPriority: i === 1 });
      }
      
      if (!loadedImages.has(prevImage) && !preloadStarted.has(prevImage)) {
        nextImages.push({ src: prevImage, index: i, isPriority: i === 1 });
      }
    }
    
    // Rimuovo questo ciclo perché le immagini precedenti sono già gestite nel ciclo precedente

    if (nextImages.length === 0) return;

    // Usa requestAnimationFrame per garantire che il precaricamento avvenga il prima possibile
    requestAnimationFrame(() => {
      // Precarica tutte le immagini come prioritarie
      nextImages
        .sort((a, b) => (a.isPriority === b.isPriority) ? 0 : a.isPriority ? -1 : 1)
        .forEach(({ src, index }) => {
          // Considera tutte le immagini come prioritarie per un caricamento più veloce
          preloadImage(src, index, true);
        });
    });
  }, [currentIndex, images, loadedImages, preloadNext, preloadImage, preloadStarted, preloadAll]);

  // Verifica se un'immagine è caricata
  const isImageLoaded = useCallback((src: string) => loadedImages.has(src), [loadedImages]);
  
  // Imposta l'indice corrente e avvia il precaricamento
  const setIndex = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  // Forza il precaricamento di tutte le immagini o di un'immagine specifica
  const forcePreload = useCallback((src?: string, isPriority = false) => {
    if (src) {
      // Precarica un'immagine specifica
      if (!loadedImages.has(src) && !preloadStarted.has(src)) {
        preloadImage(src, -1, isPriority);
      }
    } else {
      // Precarica tutte le immagini con alta priorità
      requestAnimationFrame(() => {
        images.forEach((imageSrc, idx) => {
          if (!loadedImages.has(imageSrc) && !preloadStarted.has(imageSrc)) {
            // Considera tutte le immagini come prioritarie per un caricamento più veloce
            preloadImage(imageSrc, idx, true);
          }
        });
      });
    }
  }, [loadedImages, preloadStarted, preloadImage, images, currentIndex]);

  return { 
    isImageLoaded, 
    setCurrentIndex: setIndex,
    forcePreload,
    loadedCount: loadedImages.size,
    totalCount: images.length,
    currentIndex
  };
}