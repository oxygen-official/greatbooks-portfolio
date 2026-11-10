import React from 'react';
import { SERVICES } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';

interface CapabilitiesProps {
  onOpenEstimator: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenEstimator }) => {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
            Capabilities & Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display [text-wrap:balance]">
            Engineering and design systems built to outlast trends and handle massive scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We avoid unnecessary complexity. Every architectural decision is rooted in maintainability, performance benchmarks, and user satisfaction.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6">
                  <span>{service.number}. DISCIPLINE</span>
                  <span className="font-sans font-medium text-neutral-600 dark:text-neutral-400">
                    Typical Scope: {service.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50 font-display mb-4">
                  {service.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Tangible deliverables list */}
                <div className="space-y-3 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Key Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <Check className="w-4 h-4 text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Full documentation & code ownership included
                </span>
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-white inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Configure Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
