import React from 'react';
import { Phone, Mail, MapPin, Linkedin as LinkedIn, Instagram, Facebook, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-3 -ml-8">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src="/logo-bianco.png" alt="Edil Gamal Logo" className="h-24" />
              </Link>
            </div>
            <p className="font-body text-gray-400 mb-3 tracking-wide text-sm">
              Leader nel settore edile con oltre 35 anni di esperienza nella 
              realizzazione di progetti di qualità.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-tight">Collegamenti rapidi</h4>
            <ul className="space-y-2 font-body tracking-wide">
              <li>
                {isHomePage ? (
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
                ) : (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
                )}
              </li>
              <li>
                <Link to="/chi-siamo" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors duration-200">Chi siamo</Link>
              </li>
              <li>
                <Link to="/approfondimenti" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors duration-200">Approfondimenti</Link>
              </li>
              <li>
                <Link to="/contatti" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-white transition-colors duration-200">Contatti</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 tracking-tight">Servizi</h4>
            <ul className="space-y-2 font-body tracking-wide">
              <li><span className="text-gray-300">Costruzioni civili</span></li>
              <li><span className="text-gray-300">Restauro</span></li>
              <li><span className="text-gray-300">Ristrutturazioni</span></li>
              <li><span className="text-gray-300">Progettazione</span></li>
              <li><span className="text-gray-300">Consulenza</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-tight">Contatti</h4>
            <div className="space-y-3 font-body tracking-wide">
              <div className="flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-red-400" />
                <span className="text-gray-300">Via Puccini 9, Cinisello Balsamo 22092 (MI)</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-gray-300">+39 340 603 8768</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-gray-300">info@edilgamal.it</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-gray-300">Lun-Ven: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-body text-gray-400 text-sm mb-4 md:mb-0 tracking-wide">
              <div>© 2025 EDIL GAMAL. Tutti i diritti riservati.</div>
              <div className="mt-1 text-xs">
                C.F. e P.IVA 09361400964 - Reg. Imp. MI n° 09361400964
              </div>
            </div>
            <div className="flex space-x-6 text-sm font-body tracking-wide">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}