import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20">
        {/* Hero section with background images */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="h-full">
               <div 
                 className="w-full h-full bg-cover bg-center bg-no-repeat grayscale-image"
                 style={{ backgroundImage: `url('/persona-vicino-un-impianto-di-energia-alternativa.jpg')` }}
               />
            </div>
             {/* Overlay con opacità diverse */}
             <div className="absolute inset-y-0 left-0 w-1/2 bg-black/70 pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-1/2 bg-black/40 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeInSection>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    La mente <span className="text-red-400">crea</span>,
                    <br />
                    la volontà costruisce.
                  </h1>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center">
              <FadeInSection>
                <p className="font-heading text-white text-base font-extrabold tracking-wider uppercase inline-block">
                  I nostri progetti
                </p>
              </FadeInSection>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <FadeInSection>
                <p className="font-body text-lg text-white mb-8 leading-relaxed tracking-wide">
                  <span className="text-white font-bold">EDIL GAMAL COSTRUZIONI realizza progetti di eccellenza</span> che combinano innovazione, qualità e sostenibilità. Il nostro portfolio include una vasta gamma di realizzazioni nei settori residenziale, commerciale, industriale e pubblico, ciascuno caratterizzato da <span className="text-white font-bold">soluzioni personalizzate e attenzione ai dettagli</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={100}>
                <p className="font-body text-lg text-white mb-8 leading-relaxed tracking-wide">
                  <span className="text-white font-bold">Ogni progetto rappresenta la nostra filosofia costruttiva</span>: trasformare le idee in realtà concrete, rispettando i più alti standard qualitativi e le esigenze specifiche di ogni cliente. Dalla progettazione alla realizzazione, <span className="text-white font-bold">seguiamo ogni fase con professionalità e dedizione</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="font-body text-lg text-white mb-8 leading-relaxed tracking-wide">
                  <span className="text-white font-bold">La nostra esperienza pluridecennale ci permette di affrontare sfide complesse</span> e di proporre soluzioni innovative che coniugano estetica, funzionalità e sostenibilità. Ogni costruzione è pensata per durare nel tempo, <span className="text-white font-bold">garantendo il massimo valore per i nostri clienti</span>.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Sezione progetti rimossa come richiesto */}
      </main>
      <Footer />
    </div>
  );
}