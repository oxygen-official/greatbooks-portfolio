import React from 'react';
import { Layers, Globe, Eye, Brain, CheckCircle2 } from 'lucide-react';
import { LEARNING_SUMMARY_CONCEPTS } from '../data/summaryAndReflection';

export const SummaryOfLearningSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Historical')) return <Globe className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    if (category.includes('Lenses')) return <Layers className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    if (category.includes('Societal')) return <Eye className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    return <Brain className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
  };

  return (
    <section id="summary-of-learning" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-500 font-bold mb-2">
            Section 4 · Synthesis of Academic Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical [text-wrap:balance]">
            Summary of Learning: Knowledge, Concepts & Hermeneutic Skills
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            A structured, comprehensive synthesis of the core competencies, historical understandings, and analytical frameworks cultivated throughout the Great Books curriculum.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARNING_SUMMARY_CONCEPTS.map((concept, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Header with icon and category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-stone-800 border border-amber-200/60 dark:border-stone-700">
                    {getCategoryIcon(concept.category)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-amber-900 dark:text-amber-400">
                      Pillar 0{idx + 1} · {concept.category}
                    </span>
                    <h3 className="text-xl font-bold text-stone-950 dark:text-stone-50 font-classical">
                      {concept.title}
                    </h3>
                  </div>
                </div>

                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                  {concept.description}
                </p>

                {/* Key takeaways bullet items */}
                <div className="space-y-3 pt-6 border-t border-stone-100 dark:border-stone-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    Key Competency Demonstrations
                  </div>
                  <ul className="space-y-2.5">
                    {concept.keyTakeaways.map((takeaway, tIdx) => {
                      const [title, ...desc] = takeaway.split(':');
                      return (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>
                            <strong>{title}:</strong> {desc.join(':')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 text-[11px] font-mono text-stone-400 dark:text-stone-500">
                Competency verified through text-based critical essays & seminar debates.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
