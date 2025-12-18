import { useState, useMemo, FC } from 'react';

export const ROICalculator: FC = () => {
  const [salary, setSalary] = useState(150000);
  const [duration, setDuration] = useState(6);

  const costs = useMemo(() => {
    // Logic from the provided HTML
    const monthlySalary = salary / 12;
    const salaryCost = monthlySalary * duration * 1.25; // 25% Lohnnebenkosten
    const hiringCost = salary * 0.20; // 20% für Rekrutierung
    const damageCost = salary * 0.50; // 50% strategischer Schaden (Productivity loss, etc.)
    const totalCost = salaryCost + hiringCost + damageCost;
    
    // Determine max cost for bar chart scaling
    const maxCost = Math.max(salaryCost, hiringCost, damageCost);

    return {
      salaryCost,
      hiringCost,
      damageCost,
      totalCost,
      maxCost
    };
  }, [salary, duration]);

  const formatCHF = (amount: number) => {
    // Format using Swiss standard (apostrophe as thousands separator)
    return 'CHF ' + Math.round(amount).toLocaleString('de-CH').replace(/,/g, "'");
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="calculator-container">
      <h1>Fehlbesetzungs-Kostenrechner</h1>
      <p className="subtitle">Berechnen Sie die wahren Kosten einer Fehlbesetzung in Ihrem Unternehmen</p>
      
      <div className="input-group">
          <label htmlFor="salary">Jahresbruttogehalt der Position</label>
          <div className="input-wrapper">
              <span className="currency-prefix">CHF</span>
              <input 
                type="number" 
                id="salary" 
                value={salary} 
                onChange={(e) => setSalary(Number(e.target.value))}
                step={5000} 
                min={50000} 
                max={1000000} 
              />
          </div>
      </div>
      
      <div className="input-group">
          <label htmlFor="duration">Dauer der Fehlbesetzung</label>
          <div className="slider-container">
              <div className="slider-value">
                  <span>Monate</span>
                  <span>{duration} {duration === 1 ? 'Monat' : 'Monate'}</span>
              </div>
              <input 
                type="range" 
                id="duration" 
                min="1" 
                max="12" 
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
          </div>
      </div>
      
      <div className="result-section">
          <div className="total-cost">
              <div className="total-label">Gesamtkosten der Fehlbesetzung</div>
              <div className="total-amount">{formatCHF(costs.totalCost)}</div>
          </div>
          
          <div className="breakdown">
              <div className="breakdown-title">Kostenaufschlüsselung</div>
              
              <div className="cost-item">
                  <div className="cost-label">
                      <div className="cost-icon icon-salary">💰</div>
                      <span>Gehalt & Nebenkosten</span>
                  </div>
                  <div className="cost-value">{formatCHF(costs.salaryCost)}</div>
              </div>
              
              <div className="cost-item">
                  <div className="cost-label">
                      <div className="cost-icon icon-hiring">👥</div>
                      <span>Rekrutierungskosten</span>
                  </div>
                  <div className="cost-value">{formatCHF(costs.hiringCost)}</div>
              </div>
              
              <div className="cost-item">
                  <div className="cost-label">
                      <div className="cost-icon icon-damage">📉</div>
                      <span>Schaden & Produktivität</span>
                  </div>
                  <div className="cost-value">{formatCHF(costs.damageCost)}</div>
              </div>
              
              <div className="bar-chart">
                  <div className="bar bar-1" style={{ height: `${(costs.salaryCost / costs.maxCost) * 100}%` }}>
                      <span className="bar-label">Gehalt</span>
                  </div>
                  <div className="bar bar-2" style={{ height: `${(costs.hiringCost / costs.maxCost) * 100}%` }}>
                      <span className="bar-label">Recruiting</span>
                  </div>
                  <div className="bar bar-3" style={{ height: `${(costs.damageCost / costs.maxCost) * 100}%` }}>
                      <span className="bar-label">Schaden</span>
                  </div>
              </div>
          </div>
      </div>
      
      <button onClick={scrollToContact} className="calc-cta-button">
          Jetzt Fehlbesetzung vermeiden →
      </button>
      
      <p className="disclaimer">
          Bei den ermittelten Werten handelt es sich um eine Modellrechnung basierend auf branchenüblichen Durchschnittswerten und Erfahrungssätzen im Schweizer Marktumfeld (u.a. Lohnnebenkosten, Opportunitätskosten).
      </p>
    </div>
  );
};