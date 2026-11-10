import React from 'react';
import { BookMarked, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100 dark:border-stone-850">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-stone-950 dark:text-stone-50 font-classical font-bold text-lg">
              <BookMarked className="w-5 h-5 text-amber-800 dark:text-amber-500" />
              <span>My Literary Journey: A Great Books Digital Portfolio</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Culminating Performance Task in Great Books · Academic Year 2026
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={scrollToTop}
              className="hover:text-stone-900 dark:hover:text-stone-200 cursor-pointer flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-500">
          <p>
            Academic Honesty Acknowledgment: All literary analyses, reflections, and syntheses reflect original critical reading and scholarship.
          </p>
          <p className="font-mono text-[11px]">
            Format compliant with Great Books Guidelines
          </p>
        </div>

      </div>
    </footer>
  );
};
