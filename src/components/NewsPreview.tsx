import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import FadeInSection from './FadeInSection';

const news = [
  {
    id: 1,
    title: 'Inaugurazione nuovo cantiere sostenibile a Milano',
    date: '15 Marzo 2024',
    author: 'Redazione',
    excerpt: 'Inizia la costruzione del primo edificio a zero emissioni della città...',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=250'
  },
  {
    id: 2,
    title: 'Certificazione ISO 14001 per la sostenibilità ambientale',
    date: '10 Marzo 2024',
    author: 'Ufficio Stampa',
    excerpt: 'EDIL GAMAL COSTRUZIONI ottiene la prestigiosa certificazione per la gestione ambientale...',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=250'
  },
  {
    id: 3,
    title: 'Nuovo protocollo sicurezza sui cantieri',
    date: '5 Marzo 2024',
    author: 'Responsabile Sicurezza',
    excerpt: 'Implementate nuove tecnologie per il monitoraggio della sicurezza...',
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250'
  }
];

export default function NewsPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection threshold={0.1} triggerOnce={false}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4 tracking-tight">
              Ultime <span className="text-red-600">novità</span>
            </h2>
            <p className="font-body text-lg text-gray-300 max-w-3xl mx-auto tracking-wide">
              Resta aggiornato sulle nostre attività, progetti e iniziative nel settore delle costruzioni
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-body tracking-wide">{article.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span className="font-body tracking-wide">{article.author}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-200 tracking-tight">
                  {article.title}
                </h3>
                <p className="font-body text-gray-300 mb-4 leading-relaxed tracking-wide">
                  {article.excerpt.replace('EDIL GAMAL COSTRUZIONI', 'EDIL GAMAL COSTRUZIONI')}
                </p>
                <a
                  href="#"
                  className="font-body inline-flex items-center text-red-600 hover:text-red-700 font-semibold group tracking-wide"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Leggi di più
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="font-body inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 group tracking-wide"
            onClick={() => window.scrollTo(0, 0)}
          >
            Vai al blog
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}