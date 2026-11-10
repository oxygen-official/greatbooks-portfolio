import React, { useState } from 'react';
import { BookOpen, Wind, Scale, Shield, Compass, Flame, Feather, ArrowRight, Quote } from 'lucide-react';
import { SEVEN_LITERARY_ANALYSES } from '../data/literaryAnalyses';
import { LiteraryAnalysis } from '../types/portfolio';

interface LiteraryAnalysesSectionProps {
  onSelectAnalysis: (analysis: LiteraryAnalysis) => void;
}

export const LiteraryAnalysesSection: React.FC<LiteraryAnalysesSectionProps> = ({
  onSelectAnalysis
}) => {
  const [filterLens, setFilterLens] = useState<string>('all');

  const filtered = filterLens === 'all'
    ? SEVEN_LITERARY_ANALYSES
    : SEVEN_LITERARY_ANALYSES.filter(a => a.lens.toLowerCase().includes(filterLens.toLowerCase()));

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Wind': return <Wind className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Feather': return <Feather className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      default: return <BookOpen className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    }
  };

  return (
    <section id="seven-analyses" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-500 font-bold mb-2">
              Section 2 · Required Compilation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical [text-wrap:balance]">
              The Seven Literary Masterpieces & Critical Analyses
            </h2>
            <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Seven canonical works interrogated through rigorous literary lenses—illuminating theology, ethics, heroic codes, psychology, and societal structures.
            </p>
          </div>

          {/* Lens Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 self-start md:self-end">
            <button
              onClick={() => setFilterLens('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'all'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              All 7 Works
            </button>
            <button
              onClick={() => setFilterLens('Theological')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'Theological'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Theological
            </button>
            <button
              onClick={() => setFilterLens('Moralist')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'Moralist'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Moralist
            </button>
            <button
              onClick={() => setFilterLens('Deconstructive')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'Deconstructive'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Ethical
            </button>
            <button
              onClick={() => setFilterLens('Archetypal')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'Archetypal'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Archetypal
            </button>
            <button
              onClick={() => setFilterLens('Feminist')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterLens === 'Feminist'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Feminist
            </button>
          </div>
        </div>

        {/* Seven Literary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div
              key={item.id}
              onClick={() => onSelectAnalysis(item)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 hover:border-amber-700/60 dark:hover:border-amber-600/60 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
            >
              <div className="p-7">
                {/* Header Row: Order & Motif Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-amber-900 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-200/60 dark:border-amber-900/60">
                    MASTERPIECE 0{item.order}
                  </span>
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-amber-50 dark:group-hover:bg-stone-750 transition-colors">
                    {renderIcon(item.iconName)}
                  </div>
                </div>

                {/* Work Title & Author */}
                <h3 className="text-2xl font-bold text-stone-950 dark:text-stone-50 font-classical group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-4">
                  {item.author} · <span className="italic">{item.origin}</span>
                </p>

                {/* Applied Literary Lens Banner */}
                <div className="mb-4 p-3 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200/70 dark:border-stone-750/70 text-xs">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-stone-400 dark:text-stone-500 mb-0.5">
                    Critical Literary Lens
                  </div>
                  <div className="font-semibold text-amber-950 dark:text-amber-300">
                    {item.lens}
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 text-[11px] mt-1 line-clamp-2">
                    {item.lensDefinition}
                  </p>
                </div>

                {/* Summary Excerpt */}
                <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed line-clamp-3 mb-5">
                  {item.summary}
                </p>

                {/* Core Themes Unboxed Text */}
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-stone-400 dark:text-stone-500">
                    Thematic Pillars
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                    {item.keyThemes.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action & Quote Excerpt */}
              <div className="px-7 py-4 bg-stone-50/70 dark:bg-stone-850/60 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="font-classical italic text-stone-500 dark:text-stone-400 line-clamp-1 pr-2">
                  "{item.philosophicalInsight.slice(0, 42)}..."
                </span>
                <span className="font-bold text-amber-900 dark:text-amber-400 flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                  <span>Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
