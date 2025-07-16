import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Hook personalizzato per rilevare quando un elemento entra nel viewport
 * e applicare un effetto di dissolvenza elegante.
 */
export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = false,
    rootMargin = '0px 0px -150px 0px'
  } = options;
  
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se l'elemento è visibile e non abbiamo ancora attivato l'animazione
        // o se non vogliamo attivarla solo una volta
        if (entry.isIntersecting && (!isInView || !triggerOnce)) {
          setIsInView(true);
        } else if (!entry.isIntersecting && !triggerOnce) {
          // Resetta lo stato solo se non è triggerOnce
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin, isInView]);

  return { ref, isInView };
}