import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FadeInSection } from '../components/FadeInSection';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { initEmailJS, sendEmail, EmailTemplateParams } from '../services/emailService';

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
    if (!formData.nome || !formData.email || !formData.telefono || !formData.tipologia || !formData.messaggio || !formData.privacy || !formData.trattamento) {
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <FadeInSection>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Invia un messaggio
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome e Cognome*
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipologia" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipologia di cliente*
                      </label>
                      <select
                        id="tipologia"
                        name="tipologia"
                        required
                        value={formData.tipologia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      >
                        <option value="">Seleziona...</option>
                        <option value="privato">Privato</option>
                        <option value="azienda">Azienda</option>
                        <option value="ente-pubblico">Ente Pubblico</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono*
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                        Messaggio*
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        rows={5}
                        value={formData.messaggio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
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
                          className="mt-1 h-4 w-4 text-red-600 focus:ring-1 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                          Presa visione dell'informativa Privacy* <a href="#" className="text-red-600 hover:underline">(leggi)</a>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="trattamento"
                          name="trattamento"
                          required
                          checked={formData.trattamento}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-red-600 focus:ring-1 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="trattamento" className="ml-2 text-sm text-gray-700">
                          Autorizzazione al trattamento dati personali* <a href="#" className="text-red-600 hover:underline">(leggi)</a>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">* Campi obbligatori</p>
                    </div>

                    {submitStatus.submitted && (
                      <div className={`p-4 mb-4 rounded-lg flex items-center ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
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
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Informazioni di contatto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Indirizzo</h3>
                        <p className="text-gray-600">
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
                        <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                        <p className="text-gray-600">+39 340 603 8768</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@edilgamal.it</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="w-6 h-6 text-red-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Orari di apertura</h3>
                        <p className="text-gray-600">
                          Lunedì - Venerdì: 8:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Dove siamo</h3>
                    <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.8!2d9.2!3d45.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1c1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sVia%20Puccini%209%2C%2020092%20Cinisello%20Balsamo%20MI%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890123!5m2!1sen!2sit"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EDIL GAMAL - Via Puccini 9, Cinisello Balsamo"
                      ></iframe>
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