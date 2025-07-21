import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloadOptions {
  priority?: boolean;
  preloadNext?: number;
  preloadAll?: boolean;
}

function useImagePreload(
  images: string[],
  { priority = false, preloadNext = 1, preloadAll = false }: UseImagePreloadOptions = {}
) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per precaricare una singola immagine
  const preloadImage = useCallback((src: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [src]: true }));
        resolve();
      };
      img.onerror = reject;
    });
  }, []);

  // Funzione per forzare il precaricamento di tutte le immagini
  const forcePreload = useCallback(() => {
    images.forEach(src => {
      preloadImage(src).catch(() => {
        console.error(`Failed to preload image: ${src}`);
      });
    });
  }, [images, preloadImage]);

  // Effetto per il precaricamento delle immagini
  useEffect(() => {
    // Precarica l'immagine corrente
    preloadImage(images[currentIndex]).catch(() => {
      console.error(`Failed to preload current image: ${images[currentIndex]}`);
    });

    // Precarica le prossime N immagini se specificato
    if (preloadNext > 0 && !preloadAll) {
      for (let i = 1; i <= preloadNext; i++) {
        const nextIndex = (currentIndex + i) % images.length;
        preloadImage(images[nextIndex]).catch(() => {
          console.error(`Failed to preload next image: ${images[nextIndex]}`);
        });
      }
    }

    // Precarica tutte le immagini se preloadAll è true
    if (preloadAll) {
      forcePreload();
    }
  }, [currentIndex, images, preloadImage, preloadNext, preloadAll, forcePreload]);

  // Funzione per verificare se un'immagine è caricata
  const isImageLoaded = useCallback(
    (index: number) => {
      return !!loadedImages[images[index]];
    },
    [loadedImages, images]
  );

  return {
    loadedImages,
    isImageLoaded,
    setCurrentIndex,
    forcePreload,
    currentIndex,
  };
}

export default useImagePreload;