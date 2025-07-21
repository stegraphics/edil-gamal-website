import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import FadeInSection from './FadeInSection';

const projects = [
  {
    id: 1,
    title: 'Complesso Residenziale Aurora',
    category: 'Residenziale',
    location: 'Milano',
    date: '2024',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  },
  {
    id: 2,
    title: 'Centro Commerciale Metropolis',
    category: 'Terziario',
    location: 'Roma',
    date: '2023',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  },
  {
    id: 3,
    title: 'Stabilimento Industriale Tech',
    category: 'Industriale',
    location: 'Torino',
    date: '2023',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  },
  {
    id: 4,
    title: 'Ristrutturazione Palazzo Storico',
    category: 'Restauro',
    location: 'Firenze',
    date: '2024',
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  },
  {
    id: 5,
    title: 'Scuola Elementare Sostenibile',
    category: 'Pubblico',
    location: 'Bologna',
    date: '2023',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  },
  {
    id: 6,
    title: 'Ospedale Moderno',
    category: 'Sanitario',
    location: 'Napoli',
    date: '2024',
    image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
  }
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection threshold={0.1} triggerOnce={false}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4 tracking-tight">
              I nostri <span className="text-red-600">progetti</span>
            </h2>
            <p className="font-body text-lg text-gray-300 max-w-3xl mx-auto tracking-wide">
              Scopri alcuni dei nostri lavori più significativi che dimostrano la nostra <span className="text-white font-semibold">eccellenza</span> e <span className="text-white font-semibold">attenzione ai dettagli</span>
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <FadeInSection 
              key={project.id} 
              delay={(index % 3 * 100) as 0 | 100 | 200 | 300 | 400} 
              triggerOnce={false}
              threshold={0.1}
            >
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-body bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-800 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm tracking-wide">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm tracking-wide">{project.date}</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={300} triggerOnce={false}>
          <div className="text-center">
            <a
              href="#"
              className="font-body inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 group tracking-wide"
              onClick={() => window.scrollTo(0, 0)}
            >
              Vedi tutti i progetti
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}