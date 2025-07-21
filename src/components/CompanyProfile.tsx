import React from 'react';
import { Download, FileText } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
            Scarica il nostro profilo aziendale
          </h2>
          <p className="font-body text-base text-gray-300 mb-6 max-w-2xl mx-auto tracking-wide">
            Scopri tutti i dettagli sui <span className="text-white font-semibold">nostri servizi</span>, <span className="text-white font-semibold">certificazioni</span> e <span className="text-white font-semibold">progetti</span> 
            nel nostro company profile completo
          </p>
          <button className="font-body inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 tracking-wide">
            <Download className="w-5 h-5 mr-3" />
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}