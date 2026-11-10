import React, { useEffect } from 'react';
import { X, Quote, BookOpen, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { LiteraryAnalysis } from '../types/portfolio';

interface AnalysisDetailModalProps {
  analysis: LiteraryAnalysis | null;
  onClose: () => void;
  onSelectAsFavorite?: (id: string) => void;
}

export const AnalysisDetailModal: React.FC<AnalysisDetailModalProps> = ({
  analysis,
  onClose,
  onSelectAsFavorite
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (analysis) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [analysis, onClose]);

  if (!analysis) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="analysis-modal-title"
      >
        {/* Sticky Academic Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span className="font-bold text-amber-800 dark:text-amber-500">
              Analysis {analysis.order} of 07
            </span>
            <span>·</span>
            <span>{analysis.origin}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close analysis essay"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Essay Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          
          {/* Work Title & Author Meta */}
          <div className="space-y-2">
            <h2 id="analysis-modal-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical">
              {analysis.title}
            </h2>
            <div className="text-sm font-medium text-amber-900 dark:text-amber-400">
              Author: {analysis.author} · <span className="text-stone-500 dark:text-stone-400">{analysis.period}</span>
            </div>
          </div>

          {/* Theoretical Lens Callout Box */}
          <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-stone-850 border border-amber-200/80 dark:border-stone-750 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400">
              <Layers className="w-4 h-4" />
              <span>Applied Critical Literary Lens: {analysis.lens}</span>
            </div>
            
            <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
              <strong>Lens Definition:</strong> {analysis.lensDefinition}
            </p>

            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pt-2 border-t border-amber-200/60 dark:border-stone-700/60">
              <strong>Critical Justification:</strong> {analysis.lensJustification}
            </p>
          </div>

          {/* Section A: Comprehensive Summary & Historical Context */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-950 dark:text-stone-100 font-classical flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>1. Narrative Overview & Historical Milieu</span>
            </h3>
            
            <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              {analysis.summary}
            </p>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-850/80 border border-stone-200/80 dark:border-stone-800 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              <strong>Historical Context:</strong> {analysis.literaryAnalysisText.historicalContext}
            </div>
          </div>

          {/* Section B: Textual Lens Application */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-950 dark:text-stone-100 font-classical flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>2. Critical Application of the {analysis.lens} Lens</span>
            </h3>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-4 text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
              <p>{analysis.literaryAnalysisText.lensApplication}</p>
              <p>{analysis.literaryAnalysisText.thematicExploration}</p>
            </div>
          </div>

          {/* Key Quotations with Hermeneutic Commentary */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-950 dark:text-stone-100 font-classical flex items-center gap-2">
              <Quote className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>3. Key Passages & Close Reading Commentary</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.famousQuotes.map((q, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2 opacity-70" />
                    <p className="text-sm font-classical italic text-stone-900 dark:text-stone-100 leading-relaxed">
                      "{q.quote}"
                    </p>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                      {q.context}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200 dark:border-stone-750 text-xs text-stone-700 dark:text-stone-300">
                    <strong>Critical Significance:</strong> {q.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Character Dynamics & Thematic Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 dark:text-stone-400">
                Central Characters & Allegorical Roles
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {analysis.keyCharacters.map((char, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 dark:text-stone-400">
                Philosophical & Psychological Dynamics
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {analysis.literaryAnalysisText.characterDynamics}
              </p>
            </div>
          </div>

          {/* Section D: Real-Life & Modern Societal Relevance */}
          <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-stone-850 border border-amber-300/60 dark:border-stone-700 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-900 dark:text-amber-400">
              Real-Life Connection & Contemporary Relevance
            </h4>
            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
              {analysis.literaryAnalysisText.realLifeRelevance}
            </p>
          </div>

          {/* Philosophical Synthesis Footer */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-classical italic text-stone-500 dark:text-stone-400 text-center sm:text-left">
              Core Synthesis: "{analysis.philosophicalInsight}"
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-stone-900 dark:text-stone-950 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
            >
              Return to Portfolio
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
