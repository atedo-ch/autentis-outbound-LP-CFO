import React from 'react';

export const DeepDive: React.FC = () => {
  return (
    <section id="loesungen" className="deep-dive-section">
      <div className="container deep-dive-container">
        
        {/* Solution A: Management Audit */}
        <div className="solution-row">
          <div className="order-2 lg-order-1">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Schweizer Führungskräfte bei der Dokumentenanalyse im modernen Meetingraum mit Holzinterieur" 
              className="solution-img"
            />
          </div>
          <div className="order-1 lg-order-2">
            <h3 className="solution-label">Lösung A</h3>
            <h2 className="solution-title">Management Audit: Die "Versicherung" für C-Level Entscheidungen.</h2>
            <p className="solution-desc">
              Bei Executive-Besetzungen ist der Schaden einer Fehlentscheidung immens. Unser Management Audit liefert Ihnen eine tiefgreifende Analyse der Führungskompetenzen, strategischen Denkweise und Integrität Ihrer Kandidaten.
            </p>
            <ul className="solution-list">
              <li className="solution-item">Unabhängige Zweitmeinung für den Verwaltungsrat</li>
              <li className="solution-item">Vergleich mit High-Performance-Benchmarks</li>
              <li className="solution-item">Klarer Onboarding-Fahrplan zur Risikoreduktion</li>
            </ul>
          </div>
        </div>

        {/* Solution B: IPE & HPR */}
        <div className="solution-row">
          <div className="order-1">
             <h3 className="solution-label">Lösung B</h3>
             <h2 className="solution-title">IPE & HPR: Automatisierte Effizienz für Volumen-Recruiting.</h2>
             <p className="solution-desc">
               Skalierbare Prozesse erfordern intelligente Tools. Mit IPE (Individual Potential Evaluation) und HPR (High Potential Ranking) automatisieren Sie die Vorauswahl, ohne an Qualität zu verlieren.
             </p>
             <ul className="solution-list">
               <li className="solution-item">Bis zu 40% weniger Interviewzeit durch präzises Pre-Screening</li>
               <li className="solution-item">Objektives Ranking aller Bewerber nach Eignung</li>
               <li className="solution-item">Kosteneffizient auch bei hohen Bewerberzahlen</li>
             </ul>
          </div>
          <div className="order-2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="HR-Prozesse und datenbasierte Vorauswahl am Laptop in modernem Schweizer Büro" 
              className="solution-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};