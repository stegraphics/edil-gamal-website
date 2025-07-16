import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FadeInSection } from '../components/FadeInSection';

export default function AboutUs() {
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
                 style={{ backgroundImage: `url('/operai alto.jpg')` }}
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
                    Costruiamo <span className="text-red-400">eccellenza</span>,
                    <br />
                    plasmiamo il futuro.
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
                  Chi siamo
                </p>
              </FadeInSection>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <FadeInSection>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">Da oltre trentacinque anni, EDIL GAMAL COSTRUZIONI offre soluzioni edilizie d'eccellenza</span> a imprese e privati in tutta Lombardia. Il nostro impegno abbraccia l'intero ciclo costruttivo: dalle fondamenta alle finiture, realizziamo e rinnoviamo strutture commerciali, industriali e residenziali con <span className="text-gray-900 font-bold">standard qualitativi superiori</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={100}>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">Ciò che contraddistingue EDIL GAMAL COSTRUZIONI è la sua duplice natura operativa</span>: gestiamo con professionalità progetti su commissione e, parallelamente, sviluppiamo iniziative immobiliari autonome. Questa doppia anima ci permette di rispondere con precisione alle necessità specifiche di ogni cliente, <span className="text-gray-900 font-bold">creando soluzioni realmente personalizzate</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="font-body text-lg text-gray-800 mb-8 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">Il cuore pulsante di EDIL GAMAL COSTRUZIONI è il suo team tecnico</span>: ingegneri, architetti e specialisti del settore che coordinano ogni aspetto del processo costruttivo. Dalla fase progettuale alla supervisione in cantiere, fino alla scelta meticolosa di fornitori e materiali. <span className="text-gray-900 font-bold">La formazione continua garantisce che ogni intervento rispetti rigorosamente le normative di sicurezza vigenti</span>.
                </p>
              </FadeInSection>

              <FadeInSection delay={300}>
                <p className="font-body text-lg text-gray-800 leading-relaxed tracking-wide">
                  <span className="text-gray-900 font-bold">Il nostro rapporto con i clienti non termina alla consegna del progetto</span>, ma evolve in una partnership duratura attraverso servizi di assistenza e manutenzione programmata. Questo approccio ha permesso a EDIL GAMAL COSTRUZIONI di stabilire collaborazioni continuative con importanti realtà nei settori commerciale, industriale, logistico e alberghiero, <span className="text-gray-900 font-bold">intervenendo tanto sulle proprie realizzazioni quanto su strutture di terzi</span>.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Sezione rimossa: Team section */}

        {/* Values section with curved connecting lines */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 tracking-tight text-center">
                I nostri <span className="text-red-600">valori</span>
              </h2>
            </FadeInSection>

            {/* Values container */}
            <div className="relative">

              {/* Values content with relative positioning */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 relative" style={{ zIndex: 1 }}>
                <FadeInSection delay={100}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Qualità</h3>
                    <p className="font-body text-gray-700 text-center text-sm">Utilizziamo solo materiali di prima scelta e tecniche costruttive all'avanguardia per garantire risultati eccellenti e duraturi nel tempo.</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={150}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Affidabilità</h3>
                    <p className="font-body text-gray-700 text-center text-sm">Rispettiamo sempre i tempi di consegna e gli impegni presi, costruendo relazioni di fiducia con clienti e partner.</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Innovazione</h3>
                    <p className="font-body text-gray-700 text-center text-sm">Investiamo costantemente in ricerca e sviluppo per integrare le più recenti innovazioni tecnologiche nei nostri progetti.</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={250}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Sostenibilità</h3>
                    <p className="font-body text-gray-700 text-center text-sm">Adottiamo pratiche costruttive eco-sostenibili per ridurre l'impatto ambientale e creare edifici energeticamente efficienti.</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Sicurezza</h3>
                    <p className="font-body text-gray-700 text-center text-sm">La sicurezza dei nostri lavoratori e degli utenti finali è una priorità assoluta in ogni fase del processo costruttivo.</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={350}>
                  <div className="relative bg-white p-6 rounded-full shadow-[0_10px_25px_-5px_rgba(239,68,68,0.3)] border-2 border-red-500 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] hover:scale-105 hover:border-red-600">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 text-center">Trasparenza</h3>
                    <p className="font-body text-gray-700 text-center text-sm">Manteniamo una comunicazione chiara e aperta con tutti gli stakeholder durante l'intero ciclo di vita del progetto.</p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}