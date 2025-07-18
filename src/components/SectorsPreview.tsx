import React, { useState, useRef, useEffect } from 'react';
import { FadeInSection } from './FadeInSection';
import './SectorsPreview.css';

// Utilizziamo il file CSS personalizzato per gestire l'effetto hover

export default function SectorsPreview() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Utilizziamo solo i riferimenti necessari per l'immagine e il contenitore
  // Tutti gli effetti hover sono gestiti tramite classi Tailwind CSS

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <FadeInSection threshold={0.05} triggerOnce={false}>
        <div className="max-w-full mx-auto px-0">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-red-600">Settori</span>
            </h2>
            <p className="font-body text-lg text-gray-800 max-w-3xl mx-auto tracking-wide">
              Esplora i diversi settori in cui operiamo con <span className="text-gray-900 font-semibold">competenza</span> e <span className="text-gray-900 font-semibold">professionalità</span>
            </p>
          </div>

        <div className="flex justify-center">
            <div ref={containerRef} className="relative w-full" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="flex flex-wrap md:flex-row justify-center md:justify-between items-start gap-6 p-4 md:p-8">
                  {/* Residenziale */}
                  <div className="flex flex-col items-center justify-between">
                    <img 
                      src="/residenziale.svg" 
                      alt="Residenziale" 
                      className="sector-icon residenziale-icon" 
                    />
                    <span className="sector-text font-semibold">
                      RESIDENZIALE
                    </span>
                  </div>
                  
                  {/* Palazzale */}
                  <div className="flex flex-col items-center justify-between">
                    <img 
                      src="/palazzale.svg" 
                      alt="Palazzale" 
                      className="sector-icon" 
                    />
                    <span className="sector-text font-semibold">
                      CIVILE PRIVATO
                    </span>
                  </div>
                  
                  {/* Industriale */}
                  <div className="flex flex-col items-center justify-between">
                    <img 
                      src="/INDUSTRIALE.svg" 
                      alt="Industriale" 
                      className="sector-icon" 
                    />
                    <span className="sector-text font-semibold">
                      INDUSTRIALE
                    </span>
                  </div>
                  
                  {/* Ristrutturazione */}
                  <div className="flex flex-col items-center justify-between">
                    <img 
                      src="/RISTRUTTURAZIONE.svg" 
                      alt="Ristrutturazione" 
                      className="sector-icon" 
                    />
                    <span className="sector-text font-semibold">
                      RISTRUTTURAZIONE
                    </span>
                  </div>
                  
                  {/* Pubblico */}
                  <div className="flex flex-col items-center justify-between pubblico-container">
                    <img 
                      src="/pubblico.svg" 
                      alt="Pubblico" 
                      className="sector-icon pubblico-icon" 
                    />
                    <span className="sector-text font-semibold">
                      PUBBLICO
                    </span>
                  </div>
                  
                  {/* Alberghiero */}
                  <div className="flex flex-col items-center justify-between">
                    <img 
                      src="/alberghiero.svg" 
                      alt="Alberghiero" 
                      className="sector-icon alberghiero-icon" 
                    />
                    <span className="sector-text font-semibold">
                      ALBERGHIERO
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}