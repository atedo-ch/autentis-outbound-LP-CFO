import React from 'react';
import { BadgeSwissFranc, ShieldAlert, Zap, TrendingDown } from 'lucide-react';
import { BenefitProps } from '../types';

const benefits: BenefitProps[] = [
  {
    title: "ROI & Payback",
    description: "Jeder investierte Franken liefert messbaren Mehrwert. Die Diagnosekosten amortisieren sich typischerweise innerhalb der ersten 6 Monate.",
    Icon: BadgeSwissFranc
  },
  {
    title: "Risikominimierung",
    description: "Vermeiden Sie kostspielige Fehlbesetzungen (30-130k CHF) und Reputationsschäden durch datengestützte Objektivität.",
    Icon: ShieldAlert
  },
  {
    title: "Time-to-Productivity",
    description: "Passgenaue Kandidaten sind schneller leistungsfähig. Wir identifizieren High-Performer, die ab Tag 1 liefern.",
    Icon: Zap
  },
  {
    title: "Senkung der HR-Kosten",
    description: "Reduzieren Sie Fluktuation und Wiederbesetzungskosten nachhaltig durch präzise Passung von Skills und Kultur.",
    Icon: TrendingDown
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="vorteile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-700">
                <item.Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};