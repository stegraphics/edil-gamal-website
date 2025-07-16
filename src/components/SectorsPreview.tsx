import React, { useState, useRef, useEffect } from 'react';
import { FadeInSection } from './FadeInSection';

// Componente rimosso per utilizzare direttamente la classe CSS

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
            <div ref={containerRef} className="relative overflow-hidden" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="relative overflow-hidden" style={{ width: '100%', maxWidth: '1600px' }}>
                <a href="#settori" className="block" onClick={() => window.scrollTo(0, 0)} style={{ position: 'relative', display: 'block', zIndex: 10 }}>
                <img 
                  ref={imageRef}
                  src="/tutto top.png" 
                  alt="Settori" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-103 transition-transform duration-300" 
                  style={{
                    width: '100%'
                  }}
                />
                </a>
                
                {/* Overlay per i testi dei settori */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 25, pointerEvents: 'none' }}>
                    
                    {/* CIVILE PRIVATO */}
                    <div 
                      className="absolute bottom-16 left-0 w-1/3 flex justify-start pl-6"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        CIVILE PRIVATO
                      </span>
                    </div>

                    {/* RESIDENZIALE */}
                    <div 
                      className="absolute bottom-16 left-1/3 w-1/3 flex justify-start"
                      style={{ marginLeft: '-190px', pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        RESIDENZIALE
                      </span>
                    </div>

                    {/* INDUSTRIALE */}
                    <div 
                      className="absolute bottom-16 left-2/3 w-1/3 flex justify-start"
                      style={{ marginLeft: '-400px', pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        INDUSTRIALE
                      </span>
                    </div>
                    
                    {/* RISTRUTTURAZIONE */}
                    <div 
                      className="absolute bottom-16 left-0 w-1/3 flex justify-start pl-6"
                      style={{ marginLeft: '700px', pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        RISTRUTTURAZIONE
                      </span>
                    </div>

                    {/* PUBBLICO */}
                    <div 
                      className="absolute bottom-16 left-0 w-1/3 flex justify-start pl-6"
                      style={{ marginLeft: '980px', pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        PUBBLICO
                      </span>
                    </div>

                    {/* ALBERGHIERO */}
                    <div 
                      className="absolute bottom-16 left-0 w-1/3 flex justify-start pl-6"
                      style={{ marginLeft: '1200px', pointerEvents: 'auto' }}
                    >
                      <span 
                        className="font-bold text-black text-lg hover:scale-105 transition-all duration-150 ease-out cursor-pointer"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          padding: '0 12px 4px 12px',
                          display: 'inline-block',
                          position: 'relative',
                          borderBottom: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor = 'transparent';
                        }}
                      >
                        ALBERGHIERO
                      </span>
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}