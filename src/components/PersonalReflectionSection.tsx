import React from 'react';
import { Compass, MessageSquareQuote, Check } from 'lucide-react';
import { PERSONAL_REFLECTION_ANSWERS } from '../data/summaryAndReflection';

export const PersonalReflectionSection: React.FC = () => {
  return (
    <section id="personal-reflection" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-500 font-bold mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Section 5 · Personal Metacognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical [text-wrap:balance]">
            Personal Reflection: My Growth as a Reader & Critical Thinker
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            An honest, introspective evaluation addressing the five core guide questions on interpretive transformation, reading challenges, lens mastery, and future applications.
          </p>
        </div>

        {/* Five Questions Accordion / List */}
        <div className="space-y-8">
          {PERSONAL_REFLECTION_ANSWERS.map(item => (
            <div
              key={item.questionNumber}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 shadow-sm space-y-5"
            >
              {/* Question Header & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 bg-amber-50 dark:bg-stone-800 px-3 py-1 rounded-md border border-amber-200/60 dark:border-stone-700 self-start">
                  GUIDE QUESTION 0{item.questionNumber}
                </span>

                <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                  <span className="font-semibold uppercase tracking-wider text-stone-400">Core Values:</span>
                  {item.keyCoreValues.map((val, vIdx) => (
                    <span key={vIdx} className="font-medium text-stone-700 dark:text-stone-300">
                      {val}{vIdx < item.keyCoreValues.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guide Question Prompt */}
              <h3 className="text-lg sm:text-xl font-bold text-stone-950 dark:text-stone-50 font-classical leading-snug">
                {item.question}
              </h3>

              {/* Reflection Narrative Essay */}
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.reflection}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
