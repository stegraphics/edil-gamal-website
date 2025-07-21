import React, { ReactNode } from 'react';
import useInView from '../hooks/useInView';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

/**
 * Componente che aggiunge un effetto di dissolvenza elegante quando
 * l'elemento entra nel viewport durante lo scroll.
 */
function FadeInSection({
  children,
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  className = ''
}: FadeInSectionProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce });

  const delayClass = delay ? `fade-in-delay-${delay}` : '';
  
  return (
    <div
      // @ts-ignore - ref è tipizzato correttamente ma TypeScript non lo riconosce
      ref={ref}
      className={`fade-in-section ${isInView ? 'is-visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;