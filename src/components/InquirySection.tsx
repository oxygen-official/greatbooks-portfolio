import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface ImportedScope {
  projectType: string;
  features: string[];
  timeline: string;
  estimatedCost: string;
}

interface InquirySectionProps {
  importedScope?: ImportedScope | null;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ importedScope }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budgetRange, setBudgetRange] = useState('$15k - $30k');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync imported scope if provided
  useEffect(() => {
    if (importedScope) {
      const scopeSummary = `Project Type: ${importedScope.projectType}\nTimeline: ${importedScope.timeline}\nEstimated Range: ${importedScope.estimatedCost}\n\nKey Modules:\n${importedScope.features.map(f => `• ${f}`).join('\n')}\n\nAdditional Notes: `;
      setDetails(scopeSummary);
      setBudgetRange(importedScope.estimatedCost);
    }
  }, [importedScope]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your name or leadership contact.';
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!details.trim() || details.trim().length < 15) {
      errs.details = 'Please describe your project scope or goals (minimum 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic sub-second API network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setDetails('');
    setErrors({});
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
            Initiate Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
            Let's build something remarkable together.
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Every inquiry is reviewed directly by our founding partners. We respond within 24 business hours with honest technical feedback.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50 font-display">
                Inquiry Received, {name.split(' ')[0]}!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                Thank you for reaching out. We have logged your project specifications and will review technical requirements before our discovery call.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 max-w-md mx-auto text-xs text-neutral-600 dark:text-neutral-400 text-left space-y-1.5 border border-neutral-200/60 dark:border-neutral-700/60">
              <div className="font-semibold text-neutral-900 dark:text-neutral-100">Next Steps:</div>
              <div>1. Partner review of architectural constraints (within 24h)</div>
              <div>2. 30-minute discovery video session to align on milestones</div>
              <div>3. Tailored technical proposal and fixed-fee agreement</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm space-y-6"
            noValidate
          >
            {importedScope && (
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750 flex items-start gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                <FileText className="w-4 h-4 text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Imported Scope Applied:
                  </span>{' '}
                  {importedScope.projectType} · {importedScope.timeline} · {importedScope.estimatedCost}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Sarah Chen"
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-850 border transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-850 border transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company / Brand */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Company or Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="e.g. Acme Technologies"
                  className="w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Anticipated Budget (USD)
                </label>
                <select
                  value={budgetRange}
                  onChange={e => setBudgetRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 cursor-pointer"
                >
                  <option value="$10k - $20k">$10,000 – $20,000</option>
                  <option value="$20k - $40k">$20,000 – $40,000</option>
                  <option value="$40k - $75k">$40,000 – $75,000</option>
                  <option value="$75k+">$75,000+</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Project Scope & Requirements *
              </label>
              <textarea
                rows={5}
                value={details}
                onChange={e => setDetails(e.target.value)}
                placeholder="Describe your current product, target audience, technical challenges, and timeline goals..."
                className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-850 border transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 resize-none ${
                  errors.details ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 dark:border-neutral-800'
                }`}
              />
              {errors.details && (
                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.details}</span>
                </p>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
                Strict confidentiality guaranteed · Mutual NDA upon request
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-neutral-900 dark:text-neutral-950 dark:bg-white rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                {isSubmitting ? (
                  <span>Transmitting Proposal...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
