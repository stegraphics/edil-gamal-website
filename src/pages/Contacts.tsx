import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import FadeInSection from '../components/FadeInSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initEmailJS, sendEmail, EmailTemplateParams } from '../services/emailService';

// Risolve il problema dell'icona predefinita mancante in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Crea un'icona personalizzata per il marker che corrisponda allo stile del sito
const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <div style="background-color: #f87171; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; box-shadow: 0 3px 6px rgba(0,0,0,0.5);">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

export default function Contacts() {
  // Inizializza EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);
  
  useEffect(() => {
    // Gestisce lo scrolling automatico quando la pagina viene caricata con un hash nella URL
    if (window.location.hash === '#top') {
      window.scrollTo(0, 0);
    }
  }, []);
  const [formData, setFormData] = useState({
    nome: '',
    tipologia: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false,
    trattamento: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione dei campi obbligatori
    if (!formData.nome || !formData.email || !formData.telefono || !formData.tipologia || !formData.messaggio || !formData.privacy) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Per favore, compila tutti i campi obbligatori.'
      });
      return;
    }
    
    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Per favore, inserisci un indirizzo email valido.'
      });
      return;
    }
    
    setSubmitStatus({ submitted: true, success: false, message: 'Invio in corso...' });
    
    const templateParams: EmailTemplateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      from_phone: formData.telefono,
      client_type: formData.tipologia,
      message: formData.messaggio,
      to_email: 'info@edilgamal.it'
    };
    
    sendEmail(templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Messaggio inviato con successo! Ti risponderemo al più presto.'
      });
      // Reset del form
      setFormData({
        nome: '',
        tipologia: '',
        email: '',
        telefono: '',
        messaggio: '',
        privacy: false,
        trattamento: false
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci direttamente.'
      });
    });
  };

  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Contattaci
                </h1>
                <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
                  Siamo qui per rispondere alle tue domande e discutere del tuo prossimo progetto
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Contact form and info */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <FadeInSection>
                <div className="bg-[#0d0d0d] p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">
                    Invia un messaggio
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                        Nome e Cognome*
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent text-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)] focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipologia" className="block text-sm font-medium text-gray-300 mb-2">
                        Tipologia di cliente*
                      </label>
                      <select
                        id="tipologia"
                        name="tipologia"
                        required
                        value={formData.tipologia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent text-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)] focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                        style={{ color: "white" }}
                      >
                        <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>Seleziona...</option>
                        <option value="Privato" style={{ backgroundColor: "#1a1a1a", color: "white" }}>Privato</option>
                        <option value="Azienda" style={{ backgroundColor: "#1a1a1a", color: "white" }}>Azienda</option>
                        <option value="Ente pubblico" style={{ backgroundColor: "#1a1a1a", color: "white" }}>Ente pubblico</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent text-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)] focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefono*
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent text-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)] focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-sm font-medium text-gray-300 mb-2">
                        Messaggio*
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        rows={5}
                        value={formData.messaggio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent text-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)] focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-red-600 rounded mt-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] focus:ring-red-500"
                        />
                        <label htmlFor="privacy" className="ml-3 text-sm text-gray-300">
                          Acconsento al trattamento dei dati personali secondo la{" "}
                          <a href="/privacy-policy" className="text-red-500 hover:text-red-400 underline">
                            Privacy Policy
                          </a>
                          *
                        </label>
                      </div>
                      <p className="text-xs text-gray-400">* Campi obbligatori</p>
                    </div>

                    {submitStatus.submitted && (
                      <div className={`p-4 mb-4 rounded-lg flex items-center ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                        {submitStatus.success ? (
                          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        )}
                        <p>{submitStatus.message}</p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                      disabled={submitStatus.submitted && submitStatus.success}
                    >
                      {(submitStatus.submitted && submitStatus.success) ? 'Messaggio Inviato' : 'Invia Messaggio'}
                    </button>
                  </form>
                </div>
              </FadeInSection>

              {/* Contact info */}
              <FadeInSection delay={200}>
                <div className="bg-[#0d0d0d] p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">
                    Informazioni di contatto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Indirizzo</h3>
                        <p className="text-gray-300">
                          Via Puccini 9<br />
                          Cinisello Balsamo 22092 (MI)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Telefono</h3>
                        <p className="text-gray-300">+39 340 603 8768</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-gray-300">info@edilgamal.it</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Orari</h3>
                        <p className="text-gray-300">
                          Lunedì - Venerdì: 8:00 - 18:00<br />
                          Sabato: 8:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">Dove siamo</h3>
                    <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-red-600 relative">
                      <MapContainer 
                        center={[45.553801, 9.212469]} 
                        zoom={15} 
                        style={{ height: '100%', width: '100%', zIndex: 1 }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker 
                          position={[45.553801, 9.212469]}
                          icon={customIcon}
                        >
                          <Popup>
                            <div className="text-center">
                              <strong>EDIL GAMAL</strong><br />
                              Via Puccini 9<br />
                              Cinisello Balsamo 22092 (MI)
                            </div>
                          </Popup>
                        </Marker>
                      </MapContainer>
                      
                      <div className="absolute bottom-4 right-4 z-[999]">
                        <a 
                          href="https://www.google.com/maps/place/Via+Puccini+9,+20092+Cinisello+Balsamo+MI/@45.553801,9.212469,17z/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded-md shadow-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-1"
                        >
                          <span>Google Maps</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}