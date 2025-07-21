import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollHelper';

/**
 * Componente che gestisce lo scrolling automatico agli elementi con ID
 * quando la pagina viene caricata con un hash nella URL.
 * 
 * Esempio: Se l'URL è /chi-siamo#team, scorrerà automaticamente alla sezione con id="team"
 */
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();
  const lastHash = useRef<string>('');

  // Effetto che si attiva quando cambia la location
  useEffect(() => {
    // Estrai il hash dalla URL (es. #team da /chi-siamo#team)
    const hash = location.hash.slice(1); // Rimuove il carattere # iniziale

    // Se c'è un hash e non è lo stesso dell'ultimo processato
    if (hash && hash !== lastHash.current) {
      lastHash.current = hash; // Aggiorna l'ultimo hash processato

      // Aggiungi un piccolo ritardo per assicurarti che la pagina sia completamente caricata
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [location]);

  // Questo componente non renderizza nulla nell'interfaccia
  return null;
};

export default ScrollToHashElement;