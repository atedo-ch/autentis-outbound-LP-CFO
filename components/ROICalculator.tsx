import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const ROICalculator: React.FC = () => {
  const [positions, setPositions] = useState(5);
  const [salary, setSalary] = useState(200000);
  const [turnover, setTurnover] = useState(20);
  const [email, setEmail] = useState('');

  const [metrics, setMetrics] = useState({
    auditCost: 0,
    totalInvestment: 0,
    savings: 0,
    productivityGain: 0,
    ttpGain: 0,
    retentionSavings: 0,
    netBenefit: 0,
    roi: 0
  });

  useEffect(() => {
    const turnoverRate = turnover / 100;

    // Investment costs
    const auditCost = positions * 3 * 10000; // 3 candidates per position, 10k per audit
    const implementationCost = 15000; // One-time setup
    const totalInvestment = auditCost + implementationCost;

    // Calculate benefits
    // 1. Prevented mis-hires (reduce turnover by 50%)
    const currentMishires = positions * turnoverRate;
    const preventedMishires = currentMishires * 0.5; // 50% reduction
    const mishireCost = salary * 3; // 3x annual salary per mis-hire
    const savings = Math.round(preventedMishires * mishireCost);

    // 2. Team productivity gain (15% improvement)
    const avgTeamSize = 20; // Average team size
    const avgTeamMemberSalary = salary * 0.4; // Team members earn ~40% of leader
    const productivityGain = Math.round(positions * avgTeamSize * avgTeamMemberSalary * 0.15);

    // 3. Faster Time-to-Productivity (1 month faster = 8.3% of annual productivity)
    const ttpGain = Math.round(positions * salary * 0.083);

    // 4. Reduced turnover/retention improvement (11% reduction in unwanted turnover)
    const retentionSavings = Math.round(positions * avgTeamSize * 0.11 * avgTeamMemberSalary * 0.5);

    // Total benefits over 3 years
    const totalBenefit = (savings + productivityGain + ttpGain + retentionSavings) * 3;
    const netBenefit = totalBenefit - totalInvestment;
    const calculatedRoi = Math.round((totalBenefit / totalInvestment - 1) * 100);

    setMetrics({
      auditCost,
      totalInvestment,
      savings,
      productivityGain,
      ttpGain,
      retentionSavings,
      netBenefit,
      roi: calculatedRoi
    });
  }, [positions, salary, turnover]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank! Sie erhalten in Kürze Ihre detaillierte ROI-Analyse per E-Mail.');
    setEmail('');
  };

  const formatCHF = (val: number) => `CHF ${val.toLocaleString('de-CH')}`;

  return (
    <div id="roi-calculator" className="roi-calculator">
      <h2 className="roi-title">Ihr ROI transparent berechnet</h2>
      
      <form onSubmit={handleSubmit} className="roi-form-stack">
        <div className="roi-form-stack">
          <div>
            <label htmlFor="positions" className="roi-label-row">
              <span>Führungspositionen pro Jahr</span>
              <span className="roi-label-value">{positions} Positionen</span>
            </label>
            <input 
              type="range" 
              id="positions" 
              min="1" 
              max="20" 
              value={positions}
              onChange={(e) => setPositions(parseInt(e.target.value))}
              className="roi-range"
            />
          </div>

          <div>
            <label htmlFor="salary" className="roi-label-row" style={{ display: 'block', marginBottom: '0.5rem' }}>
              ⌀ Jahresgehalt Führungskraft (CHF)
            </label>
            <input 
              type="number" 
              id="salary" 
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value) || 0)}
              step="10000"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="turnover" className="roi-label-row">
              <span>Aktuelle Fehlbesetzungsquote (%)</span>
              <span className="roi-label-value">{turnover}%</span>
            </label>
            <input 
              type="range" 
              id="turnover" 
              min="5" 
              max="30" 
              value={turnover}
              onChange={(e) => setTurnover(parseInt(e.target.value))}
              className="roi-range"
            />
          </div>
        </div>

        {/* Results Box */}
        <div className="roi-results-box">
          <div className="roi-results-header">
             <h3 className="roi-subheading text-red">Die Investition</h3>
             <div className="roi-row">
               <span style={{ color: 'var(--slate-600)' }}>Management Audits</span>
               <span style={{ fontWeight: 500 }}>{formatCHF(metrics.auditCost)}</span>
             </div>
             <div className="roi-total-row">
               <span>Total Investment</span>
               <span className="text-red">{formatCHF(metrics.totalInvestment)}</span>
             </div>
          </div>

          <div className="roi-results-body">
            <h3 className="roi-subheading text-green-light">Ihr Nutzen (3 Jahre)</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div className="roi-body-row">
                <span>Verhinderte Fehlbesetzungen</span>
                <span style={{ fontWeight: 500 }}>{formatCHF(metrics.savings)}</span>
              </div>
              <div className="roi-body-row">
                <span>Produktivitätssteigerung</span>
                <span style={{ fontWeight: 500 }}>{formatCHF(metrics.productivityGain)}</span>
              </div>
              <div className="roi-body-row">
                <span>Time-to-Productivity</span>
                <span style={{ fontWeight: 500 }}>{formatCHF(metrics.ttpGain)}</span>
              </div>
            </div>
            
            <div className="roi-net-box">
              <div className="roi-net-row">
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Netto-Vorteil</span>
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>{formatCHF(metrics.netBenefit)}</span>
              </div>
            </div>
            
            <div className="roi-roi-row">
              <span style={{ fontWeight: 600, fontSize: '0.875rem', opacity: 0.8 }}>Return on Investment</span>
              <span style={{ fontWeight: 700, fontSize: '1.875rem' }}>{metrics.roi}%</span>
            </div>
          </div>
        </div>

        <p className="roi-footer-note">
          Eine verhinderte Fehlbesetzung bezahlt bereits die gesamte Investition.
        </p>

        <div className="roi-email-row">
          <input 
            type="email" 
            placeholder="Ihre E-Mail für Details" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            style={{ flex: 1 }}
          />
          <Button type="submit" style={{ whiteSpace: 'nowrap', padding: '0.75rem 1rem' }}>
            Analyse senden
          </Button>
        </div>
      </form>
    </div>
  );
};