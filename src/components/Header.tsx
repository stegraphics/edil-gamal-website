import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const navItems = [
    { name: 'Home', href: '/', path: '/' },
    { name: 'Chi siamo', href: isHomePage ? '#about' : '/chi-siamo', path: '/chi-siamo' },
    { name: 'Progetti', href: '/progetti', path: '/progetti' },
    { name: 'Approfondimenti', href: '/approfondimenti', path: '/approfondimenti' },
    { name: 'Contatti', href: '/contatti', path: '/contatti' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Banner più grande */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${isCompact ? 'h-20 py-3' : 'h-32 py-8'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src="/logo-bene.gif" 
                  alt="EDIL GAMAL Logo" 
                  className={`transition-all duration-300 ease-in-out ${isCompact ? 'h-48' : 'h-64'}`}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-body text-gray-800 hover:text-red-600 px-2 py-1 text-base font-medium transition-colors duration-200 tracking-wide ${location.pathname === item.path ? 'text-red-600' : ''}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-body text-gray-800 hover:text-red-600 px-2 py-1 text-base font-medium transition-colors duration-200 tracking-wide"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center">
            <button className="font-body flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
              <Globe className="w-6 h-6" />
              <span className="text-base tracking-wide">IT</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-0.5">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-body text-gray-800 hover:text-red-600 block px-2 py-1 text-base font-medium tracking-wide ${location.pathname === item.path ? 'text-red-600' : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-gray-800 hover:text-red-600 block px-2 py-1 text-base font-medium tracking-wide"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}