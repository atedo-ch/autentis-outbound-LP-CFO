import React from 'react';

export const DeepDive: React.FC = () => {
  return (
    <section id="loesungen" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Solution A: Management Audit */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Schweizer Führungskräfte bei der Dokumentenanalyse im modernen Meetingraum mit Holzinterieur" 
              className="rounded-xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Lösung A</h3>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Management Audit: Die "Versicherung" für C-Level Entscheidungen.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Bei Executive-Besetzungen ist der Schaden einer Fehlentscheidung immens. Unser Management Audit liefert Ihnen eine tiefgreifende Analyse der Führungskompetenzen, strategischen Denkweise und Integrität Ihrer Kandidaten.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Unabhängige Zweitmeinung für den Verwaltungsrat</li>
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Vergleich mit High-Performance-Benchmarks</li>
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Klarer Onboarding-Fahrplan zur Risikoreduktion</li>
            </ul>
          </div>
        </div>

        {/* Solution B: IPE & HPR */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
             <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Lösung B</h3>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">IPE & HPR: Automatisierte Effizienz für Volumen-Recruiting.</h2>
             <p className="text-slate-600 text-lg leading-relaxed mb-6">
               Skalierbare Prozesse erfordern intelligente Tools. Mit IPE (Individual Potential Evaluation) und HPR (High Potential Ranking) automatisieren Sie die Vorauswahl, ohne an Qualität zu verlieren.
             </p>
             <ul className="space-y-3 text-slate-700">
               <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Bis zu 40% weniger Interviewzeit durch präzises Pre-Screening</li>
               <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Objektives Ranking aller Bewerber nach Eignung</li>
               <li className="flex items-center before:content-['•'] before:mr-2 before:text-blue-500">Kosteneffizient auch bei hohen Bewerberzahlen</li>
             </ul>
          </div>
          <div className="order-2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="HR-Prozesse und datenbasierte Vorauswahl am Laptop in modernem Schweizer Büro" 
              className="rounded-xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};