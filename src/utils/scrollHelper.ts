/**
 * Utility per gestire lo scrolling alle sezioni della pagina
 */

/**
 * Scorre alla sezione specificata dall'ID
 * @param id - L'ID dell'elemento a cui scorrere
 * @param behavior - Il comportamento dello scrolling ('auto' o 'smooth')
 */
export const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth'): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior, block: 'start' });
  }
};

/**
 * Scorre alla parte superiore della pagina
 * @param behavior - Il comportamento dello scrolling ('auto' o 'smooth')
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior
  });
};

/**
 * Gestisce la navigazione ai link con hash
 * @param href - L'URL completo con hash (es. '/#about')
 * @param navigate - Funzione di navigazione (opzionale)
 */
export const handleHashNavigation = (href: string, navigate?: (path: string) => void): void => {
  if (href.includes('#')) {
    const [path, hash] = href.split('#');
    
    // Se siamo già sulla pagina corretta, scorriamo all'elemento
    if ((path === '/' && window.location.pathname === '/') || path === '') {
      scrollToSection(hash);
    } else {
      // Altrimenti, navighiamo alla nuova pagina e poi scorriamo
      if (navigate) {
        navigate(path);
        // Aggiungiamo un piccolo ritardo per assicurarci che la pagina sia caricata
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      } else {
        // Fallback se navigate non è disponibile
        window.location.href = href;
      }
    }
  } else {
    // Se non c'è un hash, scorriamo semplicemente all'inizio della pagina
    scrollToTop();
  }
};