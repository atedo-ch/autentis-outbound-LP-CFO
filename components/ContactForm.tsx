import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// KONFIGURATION: Hier Ihre Formspree-ID einfügen
const FORMSPREE_ID = 'xrbnlgdb'; 

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        console.error("Form submission failed");
      }
    } catch (error) {
      setStatus('error');
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Gespräch mit Bernhard Kurth buchen</h3>
        <p className="text-slate-600 text-sm">Finden Sie heraus, wie viel Sie sparen können.</p>
      </div>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <h4 className="text-xl font-bold text-slate-900 mb-2">Anfrage erhalten!</h4>
          <p className="text-slate-600">Wir werden uns umgehend bei Ihnen melden.</p>
          <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
            Neue Anfrage senden
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">Vorname *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 disabled:bg-gray-100"
                placeholder="Ihr Vorname"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Nachname *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 disabled:bg-gray-100"
                placeholder="Ihr Nachname"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 disabled:bg-gray-100"
                placeholder="name@unternehmen.ch"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Unternehmen</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 disabled:bg-gray-100"
                placeholder="Firmenname AG"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Nachricht (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 disabled:bg-gray-100"
              placeholder="Wie können wir Ihnen helfen?"
            ></textarea>
          </div>

          {status === 'error' && (
             <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded">
               <AlertCircle size={16} className="mr-2" />
               Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt.
             </div>
          )}

          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
            className="py-4 text-lg shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Wird gesendet...
              </>
            ) : (
              'Kostenlos anfragen'
            )}
          </Button>
          <p className="text-xs text-center text-slate-400 mt-4">
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </form>
      )}
    </div>
  );
};