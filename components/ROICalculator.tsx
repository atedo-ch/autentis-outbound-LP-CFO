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
    <div id="roi-calculator" className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-lg mx-auto w-full">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Ihr ROI transparent berechnet</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="positions" className="flex justify-between text-sm font-semibold text-slate-900 mb-2">
              <span>Führungspositionen pro Jahr</span>
              <span className="text-blue-600">{positions} Positionen</span>
            </label>
            <input 
              type="range" 
              id="positions" 
              min="1" 
              max="20" 
              value={positions}
              onChange={(e) => setPositions(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-semibold text-slate-900 mb-2">
              ⌀ Jahresgehalt Führungskraft (CHF)
            </label>
            <input 
              type="number" 
              id="salary" 
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value) || 0)}
              step="10000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="turnover" className="flex justify-between text-sm font-semibold text-slate-900 mb-2">
              <span>Aktuelle Fehlbesetzungsquote (%)</span>
              <span className="text-blue-600">{turnover}%</span>
            </label>
            <input 
              type="range" 
              id="turnover" 
              min="5" 
              max="30" 
              value={turnover}
              onChange={(e) => setTurnover(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        {/* Results Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-slate-200">
             <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">Die Investition</h3>
             <div className="flex justify-between text-sm mb-2">
               <span className="text-slate-600">Management Audits</span>
               <span className="font-medium text-slate-900">{formatCHF(metrics.auditCost)}</span>
             </div>
             <div className="flex justify-between text-sm pt-2 border-t border-slate-200">
               <span className="font-bold text-slate-900">Total Investment</span>
               <span className="font-bold text-red-600">{formatCHF(metrics.totalInvestment)}</span>
             </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
            <h3 className="text-sm font-bold text-green-100 uppercase tracking-wider mb-3">Ihr Nutzen (3 Jahre)</h3>
            <div className="space-y-2 text-sm mb-4 opacity-90">
              <div className="flex justify-between">
                <span>Verhinderte Fehlbesetzungen</span>
                <span className="font-medium">{formatCHF(metrics.savings)}</span>
              </div>
              <div className="flex justify-between">
                <span>Produktivitätssteigerung</span>
                <span className="font-medium">{formatCHF(metrics.productivityGain)}</span>
              </div>
              <div className="flex justify-between">
                <span>Time-to-Productivity</span>
                <span className="font-medium">{formatCHF(metrics.ttpGain)}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3 mb-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Netto-Vorteil</span>
                <span className="font-bold text-xl">{formatCHF(metrics.netBenefit)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <span className="font-semibold text-sm opacity-80">Return on Investment</span>
              <span className="font-bold text-3xl">{metrics.roi}%</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 italic">
          Eine verhinderte Fehlbesetzung bezahlt bereits die gesamte Investition.
        </p>

        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Ihre E-Mail für Details" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
          <Button type="submit" className="whitespace-nowrap px-4">
            Analyse senden
          </Button>
        </div>
      </form>
    </div>
  );
};