import { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Button } from './Button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// KONFIGURATION: Hier Ihre Formspree-ID einfügen
const FORMSPREE_ID = 'xrbnlgdb'; 

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
    <div id="contact" className="contact-card">
      <div className="contact-header">
        <h3 className="contact-title">Gespräch mit Bernhard Kurth buchen</h3>
        <p className="contact-subtitle">Finden Sie heraus, wie viel Sie sparen können.</p>
      </div>

      {status === 'success' ? (
        <div className="success-message">
          <CheckCircle className="success-icon" />
          <h4 className="contact-title">Anfrage erhalten!</h4>
          <p className="contact-subtitle">Wir werden uns umgehend bei Ihnen melden.</p>
          <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem' }}>
            Neue Anfrage senden
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-stack">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Vorname *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="Ihr Vorname"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nachname *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="Ihr Nachname"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="name@unternehmen.ch"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Unternehmen</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="Firmenname AG"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Nachricht (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
              rows={3}
              className="form-input"
              placeholder="Wie können wir Ihnen helfen?"
            ></textarea>
          </div>

          {status === 'error' && (
             <div className="error-box">
               <AlertCircle size={16} style={{ marginRight: '0.5rem' }} />
               Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt.
             </div>
          )}

          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
            className="btn-lg"
          >
            {status === 'submitting' ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Loader2 className="spin" size={20} />
                Wird gesendet...
              </span>
            ) : (
              'Kostenlos anfragen'
            )}
          </Button>
          <p className="text-center" style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '1rem' }}>
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </form>
      )}
    </div>
  );
};