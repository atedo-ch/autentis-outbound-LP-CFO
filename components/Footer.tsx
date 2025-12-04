import React from 'react';
import { ContactForm } from './ContactForm';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 border-t border-gray-200">
      
      {/* Final CTA Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 mb-20">
        <ContactForm />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-gray-200 pb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-4">
              <Logo className="h-12 w-auto" />
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              Wissenschaftlich fundierte Eignungsdiagnostik für Schweizer Unternehmen, die rechnen können.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-slate-900 mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Bahnhofstrasse 71</li>
              <li>8001 Zürich</li>
              <li>+41 44 382 93 97</li>
              <li>info@autentis.ch</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-slate-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://autentis.ch/impressum/" className="hover:text-blue-600">Impressum</a></li>
              <li><a href="https://autentis.ch/datenschutz/" className="hover:text-blue-600">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Autentis. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};