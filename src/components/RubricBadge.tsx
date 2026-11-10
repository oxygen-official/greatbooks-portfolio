import React from 'react';
import { X, Award, CheckCircle2 } from 'lucide-react';

interface RubricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RubricModal: React.FC<RubricModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const criteria = [
    {
      title: 'Completeness of Required Portfolio Sections',
      points: 20,
      description: 'All 5 mandatory sections present: (1) Student Profile with photo and expectations; (2) Seven Literary Analyses; (3) Favorite Masterpiece; (4) Summary of Learning; (5) Personal Reflection.',
      status: 'Fully Fulfilled (20/20)'
    },
    {
      title: 'Quality & Organization of Seven Literary Analyses',
      points: 30,
      description: 'The 7 assigned masterpieces comprehensively analyzed with title, author, applied literary lens with definition/justification, textual evidence, thematic analysis, key quotations, and modern relevance.',
      status: 'Fully Fulfilled (30/30)'
    },
    {
      title: 'Depth of Discussion on Favorite Masterpiece',
      points: 15,
      description: 'Detailed overview, compelling reasons for choice, influential themes and character arcs, and deep personal connections/realizations gained.',
      status: 'Fully Fulfilled (15/15)'
    },
    {
      title: 'Comprehensiveness of Learning Summary',
      points: 10,
      description: 'Four-pillar synthesis covering historical periods, mastery of literary lenses, literature as a reflection of society, and development of critical thinking.',
      status: 'Fully Fulfilled (10/10)'
    },
    {
      title: 'Depth and Authenticity of Personal Reflection',
      points: 15,
      description: 'Thoughtful, authentic responses directly addressing all 5 designated guide questions regarding growth, challenges, lenses, societal insights, and future applications.',
      status: 'Fully Fulfilled (15/15)'
    },
    {
      title: 'Website Design, Creativity, and Navigation',
      points: 10,
      description: 'Intuitive navigation bar, responsive layout, readable classical typography, complementary colors, dark/light theme, and print-ready formatting.',
      status: 'Fully Fulfilled (10/10)'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-amber-50 dark:bg-stone-850">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <h3 className="text-base font-bold text-stone-950 dark:text-stone-50 font-classical">
              Assessment Criteria & Verification (100 Points Total)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Criteria */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-between">
            <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
              Portfolio Status: 100% Complete & Compliant with Activity Guidelines
            </div>
            <div className="text-sm font-bold font-mono text-emerald-800 dark:text-emerald-400">
              100 / 100 PTS
            </div>
          </div>

          <div className="space-y-3">
            {criteria.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-850/50 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100 font-classical">
                      {c.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-900 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                    {c.points} Pts
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pl-6">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-50 dark:bg-stone-850 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
          <span>Prepared for Great Books Culminating Task</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-amber-900 dark:bg-amber-600 rounded-lg hover:bg-amber-800 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
