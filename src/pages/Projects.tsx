import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FadeInSection } from '../components/FadeInSection';

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
                <p className="font-heading text-gray-700 text-base font-extrabold tracking-wider uppercase inline-block">
                  I nostri progetti
                </p>
              </FadeInSection>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <FadeInSection>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">EDIL GAMAL COSTRUZIONI realizza progetti di eccellenza</span> che combinano innovazione, qualità e sostenibilità. Il nostro portfolio include una vasta gamma di realizzazioni nei settori residenziale, commerciale, industriale e pubblico, ciascuno caratterizzato da <span className="text-gray-900 font-bold">soluzioni personalizzate e attenzione ai dettagli</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={100}>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">Ogni progetto rappresenta la nostra filosofia costruttiva</span>: trasformare le idee in realtà concrete, rispettando i più alti standard qualitativi e le esigenze specifiche di ogni cliente. Dalla progettazione alla realizzazione, <span className="text-gray-900 font-bold">seguiamo ogni fase con professionalità e dedizione</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">La nostra esperienza pluridecennale ci permette di affrontare sfide complesse</span> e di proporre soluzioni innovative che coniugano estetica, funzionalità e sostenibilità. Ogni costruzione è pensata per durare nel tempo, <span className="text-gray-900 font-bold">garantendo il massimo valore per i nostri clienti</span>.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Projects showcase section - Placeholder for future content */}
        <section id="progetti" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 tracking-tight text-center">
                I nostri <span className="text-red-600">progetti</span>
              </h2>
            </FadeInSection>

            {/* Projects grid - Placeholder for future content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeInSection delay={100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Progetto Residenziale</h3>
                    <p className="font-body text-gray-700 mb-4">Descrizione del progetto residenziale.</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={150}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Progetto Commerciale</h3>
                    <p className="font-body text-gray-700 mb-4">Descrizione del progetto commerciale.</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Progetto Industriale</h3>
                    <p className="font-body text-gray-700 mb-4">Descrizione del progetto industriale.</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}