import React from 'react';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollHelper';

export default function AboutPreview() {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection threshold={0.2} triggerOnce={false}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4 tracking-tight">
                Un'azienda in continua <span className="text-red-600">crescita</span>
              </h2>
              <p className="font-body text-base text-gray-300 mb-6 leading-relaxed tracking-wide">
                <span className="text-white font-semibold">Da oltre 35 anni</span> realizziamo progetti di costruzione di alta qualità, 
                combinando <span className="text-white font-semibold">tradizione artigianale e innovazione tecnologica</span>. La nostra 
                missione è <span className="text-white font-semibold">trasformare visioni in realtà</span>, costruendo spazi che durano nel tempo 
                e rispettano l'ambiente.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <FadeInSection delay={100} triggerOnce={false}>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-red-600" />
                    <span className="font-body text-gray-300 tracking-wide">Qualità certificata</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={200} triggerOnce={false}>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-600" />
                    <span className="font-body text-gray-300 tracking-wide">Puntualità garantita</span>
                  </div>
                </FadeInSection>
                <FadeInSection delay={300} triggerOnce={false}>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-red-600" />
                    <span className="font-body text-gray-300 tracking-wide">Team esperto</span>
                  </div>
                </FadeInSection>
              </div>
              <FadeInSection delay={400} triggerOnce={false}>
                <Link
                  to="/chi-siamo"
                  className="font-body inline-flex items-center text-red-600 hover:text-red-700 font-semibold group tracking-wide"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/chi-siamo');
                    scrollToTop();
                  }}
                >
                  Leggi di più
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </FadeInSection>
            </div>
          </FadeInSection>
          
          <FadeInSection threshold={0.1} triggerOnce={false} delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Construction team"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Construction site"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <span className="font-heading text-white font-bold text-lg">25+</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}