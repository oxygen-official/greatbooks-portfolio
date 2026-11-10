import React, { useState } from 'react';
import { BookMarked, Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenRubric?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/90 dark:border-stone-800/90 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single clean text element wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 font-classical flex items-center gap-2"
        >
          <BookMarked className="w-5 h-5 text-amber-800 dark:text-amber-500 shrink-0" />
          <span>My Literary Journey</span>
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-stone-600 dark:text-stone-400">
          <a 
            href="#student-profile" 
            className="hover:text-amber-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            1. Profile
          </a>
          <a 
            href="#seven-analyses" 
            className="hover:text-amber-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            2. Seven Analyses
          </a>
          <a 
            href="#favorite-masterpiece" 
            className="hover:text-amber-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            3. Favorite Work
          </a>
          <a 
            href="#summary-of-learning" 
            className="hover:text-amber-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            4. Learning Summary
          </a>
          <a 
            href="#personal-reflection" 
            className="hover:text-amber-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            5. Personal Reflection
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + utilities */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-6 py-5 space-y-3 text-sm font-medium">
          <a
            href="#student-profile"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-800 dark:text-stone-200 hover:text-amber-800 py-1"
          >
            1. Student Profile
          </a>
          <a
            href="#seven-analyses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-800 dark:text-stone-200 hover:text-amber-800 py-1"
          >
            2. Seven Literary Analyses
          </a>
          <a
            href="#favorite-masterpiece"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-800 dark:text-stone-200 hover:text-amber-800 py-1"
          >
            3. My Favorite Literary Masterpiece
          </a>
          <a
            href="#summary-of-learning"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-800 dark:text-stone-200 hover:text-amber-800 py-1"
          >
            4. Summary of Learning
          </a>
          <a
            href="#personal-reflection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-800 dark:text-stone-200 hover:text-amber-800 py-1"
          >
            5. Personal Reflection
          </a>
        </div>
      )}
    </header>
  );
};
