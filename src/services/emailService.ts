// Servizio per la gestione delle email con EmailJS
import emailjs from '@emailjs/browser';

// Configurazione EmailJS
// Questi valori dovrebbero essere sostituiti con quelli reali del tuo account EmailJS
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';

// Initialize EmailJS
export const initEmailJS = () => {
  try {
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Interfaccia per i parametri del template
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  from_phone: string;
  client_type: string;
  message: string;
  to_email: string;
}

// Funzione per inviare email
export const sendEmail = (templateParams: EmailTemplateParams) => {
  // Verifica se le chiavi sono state configurate correttamente
  if (PUBLIC_KEY === 'your_public_key' || SERVICE_ID === 'your_service_id' || TEMPLATE_ID === 'your_template_id') {
    console.warn('EmailJS non è configurato correttamente. Verifica le chiavi API.');
    return Promise.reject(new Error('EmailJS non è configurato correttamente'));
  }
  
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
};