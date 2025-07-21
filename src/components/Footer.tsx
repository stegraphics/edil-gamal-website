import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomFooterIcon from './CustomFooterIcon';
import { handleHashNavigation, scrollToTop } from '../utils/scrollHelper';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="pl-2 sm:pl-0">
            <div className="mb-3 -ml-4 sm:-ml-8">
              <Link to="/" onClick={(e) => {
                e.preventDefault();
                navigate('/');
                scrollToTop();
              }}>
                <img src="/Logo definitivo centrato.png" alt="Edil Gamal Logo" className="h-24" />
              </Link>
            </div>
            <p className="font-body text-gray-400 mb-3 tracking-wide text-sm">
              Leader nel settore edile con oltre 35 anni di esperienza nella 
              realizzazione di progetti di qualità.
            </p>
            <div className="flex space-x-4">
              <CustomFooterIcon type="linkedin" href="#" />
              <CustomFooterIcon type="instagram" href="#" />
              <CustomFooterIcon type="facebook" href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-2 sm:pl-0">
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-tight">Collegamenti rapidi</h4>
            <ul className="space-y-2 font-body tracking-wide">
              <li>
                {isHomePage ? (
                  <a 
                    href="#home" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation('#home');
                    }}
                  >Home</a>
                ) : (
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/');
                      scrollToTop();
                    }}
                  >Home</Link>
                )}
              </li>
              <li>
                <Link 
                  to="/chi-siamo" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/chi-siamo');
                    scrollToTop();
                  }}
                >Chi siamo</Link>
              </li>
              <li>
                <Link 
                  to="/approfondimenti" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/approfondimenti');
                    scrollToTop();
                  }}
                >Approfondimenti</Link>
              </li>
              <li>
                <Link 
                  to="/contatti" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contatti');
                    scrollToTop();
                  }}
                >Contatti</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="pl-2 sm:pl-0">
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
          <div className="pl-2 sm:pl-0">
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-tight">Contatti</h4>
            <div className="space-y-3 font-body tracking-wide">
              <div className="flex items-center">
                <CustomFooterIcon type="map" className="mr-3" />
                <span className="text-gray-300">Via Puccini 9, Cinisello Balsamo 22092 (MI)</span>
              </div>
              <div className="flex items-center">
                <CustomFooterIcon type="phone" className="mr-3" />
                <span className="text-gray-300">+39 340 603 8768</span>
              </div>
              <div className="flex items-center">
                <CustomFooterIcon type="mail" className="mr-3" />
                <span className="text-gray-300">info@edilgamal.it</span>
              </div>
              <div className="flex items-center">
                <CustomFooterIcon type="globe" className="mr-3" />
                <span className="text-gray-300">Lun-Ven: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-body text-gray-400 text-sm mb-4 md:mb-0 tracking-wide pl-2 sm:pl-0">
              <div>© 2025 EDIL GAMAL. Tutti i diritti riservati.</div>
              <div className="mt-1 text-xs">
                C.F. e P.IVA 09361400964 - Reg. Imp. MI n° 09361400964
              </div>
            </div>
            <div className="flex space-x-6 text-sm font-body tracking-wide pl-2 sm:pl-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >Privacy Policy</a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >Cookie Policy</a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}