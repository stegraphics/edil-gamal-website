// Servizio per la gestione delle email con EmailJS
import emailjs from '@emailjs/browser';

// IMPORTANTE: Sostituisci questi valori con quelli del tuo account EmailJS
// Per ottenere questi valori:
// 1. Crea un account su https://www.emailjs.com/
// 2. Crea un servizio email (Gmail, Outlook, ecc.) e ottieni il SERVICE_ID:
//    - Vai su Email Services nel dashboard
//    - Clicca su "Add New Service"
//    - Seleziona il tuo provider email (Gmail, Outlook, ecc.)
//    - Segui le istruzioni per connettere il tuo account email
//    - Copia il SERVICE_ID generato
// 3. Crea un template email e ottieni il TEMPLATE_ID:
//    - Vai su Email Templates nel dashboard
//    - Clicca su "Create New Template"
//    - Personalizza il template con i campi: {{from_name}}, {{from_email}}, {{from_phone}}, {{client_type}}, {{message}}
//    - Imposta il destinatario come info@edilgamal.it
//    - Copia il TEMPLATE_ID dalla scheda Settings
// 4. Ottieni la tua PUBLIC_KEY dalla sezione Account
//    - Vai su Account > API Keys
//    - Copia la tua Public Key
const PUBLIC_KEY = 'your_public_key';
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
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
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
};