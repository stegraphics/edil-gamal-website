import React from 'react';
import { ArrowRight, Building2, Calculator, Hammer, Lightbulb, Palette, Settings, TrendingUp } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function SustainabilityPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection threshold={0.2} triggerOnce={false}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4 tracking-tight">
                Il nostro impegno per la <span className="text-red-600">sostenibilità</span>
              </h2>
              <p className="font-body text-base text-gray-300 mb-6 leading-relaxed tracking-wide">
                Crediamo fermamente che il futuro delle costruzioni debba essere sostenibile. 
                Per questo adottiamo pratiche e tecnologie che riducono l'impatto ambientale 
                e promuovono l'efficienza energetica in tutti i nostri progetti.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FadeInSection delay={100} triggerOnce={false}>
                  <div className="bg-[#2c3035] p-6 rounded-lg shadow-md">
                    <Leaf className="w-8 h-8 text-green-500 mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">Materiali eco-sostenibili</h3>
                    <p className="font-body text-sm text-gray-300">Utilizziamo materiali a basso impatto ambientale e provenienti da fonti rinnovabili o riciclate.</p>
                  </div>
                </FadeInSection>
                <FadeInSection delay={200} triggerOnce={false}>
                  <div className="bg-[#2c3035] p-6 rounded-lg shadow-md">
                    <Sun className="w-8 h-8 text-yellow-500 mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">Efficienza energetica</h3>
                    <p className="font-body text-sm text-gray-300">Progettiamo edifici che minimizzano il consumo energetico attraverso isolamento, illuminazione e sistemi HVAC efficienti.</p>
                  </div>
                </FadeInSection>
              </div>
              <FadeInSection delay={300} triggerOnce={false}>
                <Link
                  to="/chi-siamo#sostenibilita"
                  className="font-body inline-flex items-center text-red-600 hover:text-red-700 font-semibold group tracking-wide"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

const insights = [
  {
    category: "Costi e Budget",
    icon: Calculator,
    color: "blue",
    articles: [
      {
        title: "Quanto costa Ristrutturare Casa nel 2025?",
        description: "Ecco quali interventi e attività tendono a far lievitare il costo di una ristrutturazione.",
        readTime: "5 min"
      },
      {
        title: "Bonus edilizi 2024",
        description: "Facciamo chiarezza sui bonus disponibili per la tua ristrutturazione.",
        readTime: "7 min"
      }
    ]
  },
  {
    category: "Tecniche e Materiali",
    icon: Hammer,
    color: "gray",
    articles: [
      {
        title: "Pareti in cartongesso vs muratura",
        description: "Ecco tutti i pro e contro che devi sapere per la tua scelta.",
        readTime: "6 min"
      },
      {
        title: "Riscaldamento a pavimento",
        description: "Una soluzione confortevole per la tua casa moderna.",
        readTime: "4 min"
      }
    ]
  },
  {
    category: "Design e Arredo",
    icon: Palette,
    color: "blue",
    articles: [
      {
        title: "I colori per gli interni",
        description: "L'influenza che hanno su di noi e come sceglierli.",
        readTime: "5 min"
      },
      {
        title: "Separare gli ambienti con le librerie",
        description: "L'arredo come alternativa alla parete tradizionale.",
        readTime: "4 min"
      }
    ]
  },
  {
    category: "Innovazione",
    icon: Lightbulb,
    color: "gray",
    articles: [
      {
        title: "La versatilità dei listelli in legno",
        description: "Da divisori a finitura di rivestimento per spazi moderni.",
        readTime: "3 min"
      },
      {
        title: "Ristrutturazione: General Contractor",
        description: "Il metodo integrato per semplificare il processo.",
        readTime: "6 min"
      }
    ]
  }
];

return (
  <section id="approfondimenti" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-800 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <FadeInSection threshold={0.1} triggerOnce={false}>
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Approfondimenti
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Realizziamo il tuo <span className="text-blue-600">Universo</span>
            <br />
            <span className="text-gray-700">con dentro la tua Casa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La nostra missione è creare spazi curati nel dettaglio, confortevoli nella quotidianità, 
            scoprendo quell'emozione speciale tra lo spazio e l'individuo che lo abita. <mcreference link="https://www.spazio-ristrutturazioni.it/category/approfondimenti/" index="0">0</mcreference>
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {insights.map((section, index) => {
            const IconComponent = section.icon;
            const isBlue = section.color === 'blue';
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Section Header */}
                <div className={`p-6 ${isBlue ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-gray-700 to-gray-800'}`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.category}</h3>
                  </div>
                </div>

                {/* Articles */}
                <div className="p-6 space-y-4">
                  {section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="group cursor-pointer">
                      <div className="flex items-start justify-between space-x-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {article.readTime} lettura
                            </span>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                      {articleIndex < section.articles.length - 1 && (
                        <div className="mt-4 border-b border-gray-100"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Project Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src="/operai alto.jpg" 
                alt="Progetto EDIL GAMAL" 
                className="w-full h-full object-cover grayscale-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Progetto in Evidenza
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Il respiro degli spazi
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La dinamica e funzionale ristrutturazione di un appartamento che dimostra 
                come ogni spazio possa essere trasformato in un universo unico e personale. <mcreference link="https://www.spazio-ristrutturazioni.it/category/approfondimenti/" index="0">0</mcreference>
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Residenziale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-600">Ristrutturazione Completa</span>
                </div>
              </div>
              <button className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Scopri il progetto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto a Realizzare il Tuo Progetto?
          </h3>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo trasformare le tue idee in realtà.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Richiedi Preventivo
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-colors">
              Sfoglia tutti gli Approfondimenti
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </FadeInSection>
    </div>
  </section>
);
}