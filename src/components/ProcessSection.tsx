import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, Clock, FileCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
              How We Build
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
              A transparent, predictable 4-phase delivery system.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            No black boxes, no speculative runaway budgets. We work in disciplined, bi-weekly milestone sprints with demonstrable code delivered at every phase.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                  isActive
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-md'
                    : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-350 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono opacity-80 mb-2">
                  <span>PHASE {step.number}</span>
                  <span>{step.duration}</span>
                </div>
                <div className="font-semibold text-sm sm:text-base font-display line-clamp-1">
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Timeline: {activeStep.duration}</span>
                </span>
                <span>·</span>
                <span>Phase {activeStep.number} of 04</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
                {activeStep.title}
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/60 dark:border-neutral-700/60">
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                  Commercial Objective
                </div>
                <div className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {activeStep.keyOutcome}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-850 p-6 sm:p-8 rounded-xl border border-neutral-200/60 dark:border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                <FileCheck className="w-4 h-4" />
                <span>Audited Deliverables</span>
              </div>

              <ul className="space-y-3">
                {activeStep.deliverables.map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700/80 text-xs text-neutral-500 dark:text-neutral-400">
                Weekly video demos and staging code reviews are included for every phase.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
