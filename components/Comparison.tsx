import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Comparison: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Vom Kostenrisiko zum strategischen Investment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Der Unterschied zwischen intuitiver Auswahl und diagnostischer Präzision in Zahlen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Risk Side */}
          <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span>
              Traditionelle Auswahl
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-700">Hohes Risiko für "False Positives" (Blender)</span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-700">Versteckte Kosten durch Fluktuation</span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-700">Lange Einarbeitungszeiten (Kostenfalle)</span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-700">Entscheidung basierend auf Bauchgefühl</span>
              </li>
            </ul>
          </div>

          {/* Benefit Side */}
          <div className="p-8 rounded-2xl bg-green-50/50 border border-green-100 relative shadow-lg ring-1 ring-green-200">
            <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Empfohlen
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-3"></span>
              Mit Autentis Diagnostik
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-800 font-medium">98% Prognosesicherheit bei Besetzungen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-800 font-medium">Sofortiger ROI durch Leistungsträger</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-800 font-medium">Objektive, auditsichere Entscheidung</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-slate-800 font-medium">Nachhaltige kulturelle Passung</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToContact} className="px-8 py-4 shadow-xl shadow-blue-900/10">
            Risiko jetzt minimieren – Demo vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};