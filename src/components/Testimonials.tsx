import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
            Client Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
            Attributed results from engineering leaders.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-300 dark:text-neutral-700 mb-6" />
                <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                {/* Verified Outcome */}
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {t.verifiedResult}
                </div>

                <div>
                  <div className="font-bold text-sm text-neutral-950 dark:text-neutral-100">
                    {t.author}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
