import { useState, useEffect, useRef } from 'react';
import '../index.css';
import { FadeInSection } from './FadeInSection';

const stats = [
  {
    number: 1000,
    label: 'Cantieri completati'
  },
  {
    number: 12,
    label: 'Dipendenti'
  },
  {
    number: 20,
    label: 'Partner attivi'
  },
  {
    number: 35,
    label: 'Anni di esperienza'
  }
];

function useCountUp(end: number, start: number = 0, duration: number = 2500) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Imposta isVisible a true quando l'elemento entra nella vista
        // e a false quando esce dalla vista
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  return { count, ref };
}

export default function Statistics() {
  return (
    <FadeInSection triggerOnce={false} threshold={0.2}>
      <div className="relative w-full">
        {/* Elemento decorativo superiore */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent z-10"></div>
        
        {/* Ombra superiore sottile */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
        
        <section className="py-12 bg-gradient-to-b from-black/80 to-black/90 w-full backdrop-blur-sm relative mt-6 shadow-xl">
          {/* Pattern decorativo */}
          <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
          
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 py-2">
              {stats.map((stat, index) => {
                const { count, ref } = useCountUp(stat.number);
                
                return (
                  <FadeInSection key={index} delay={(index * 100) as 0 | 100 | 200 | 300 | 400} triggerOnce={false}>
                    <div
                      ref={ref}
                      className="text-center px-3 py-4 transform transition-all duration-500 hover:scale-105 hover:shadow-lg relative group"
                    >
                      <div className="relative">
                        <p className="font-numbers text-5xl font-light text-white mb-2" style={{ letterSpacing: '0.05em' }}>
                          {index === 0 || index === 2 || index === 3 ? '+' : ''}{count}
                        </p>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-px bg-red-500/50"></div>
                      </div>
                      <p className="font-body text-gray-200 text-base tracking-wide mt-2">{stat.label}</p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
          
          {/* Elemento decorativo inferiore */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </section>
      </div>
    </FadeInSection>
  );
}