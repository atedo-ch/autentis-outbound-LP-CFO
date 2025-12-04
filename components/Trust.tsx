import React from 'react';
import { Microscope, Award, Landmark } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-800">
              <Microscope size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Wissenschaftlichkeit</h3>
            <p className="text-slate-600 text-sm">
              Keine Esoterik. Wir nutzen ausschließlich validierte psychometrische Verfahren nach DIN 33430 Standards.
            </p>
          </div>

          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-800">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Jahrelange Erfahrung</h3>
            <p className="text-slate-600 text-sm">
              Über 20 Jahre Expertise in der Zusammenarbeit mit Schweizer KMU und Großkonzernen.
            </p>
          </div>

          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-800">
              <Landmark size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Schweizer Diskretion</h3>
            <p className="text-slate-600 text-sm">
              Unabhängigkeit und absolute Vertraulichkeit sind unser höchstes Gut. Ihre Daten bleiben in der Schweiz.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};