import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single clean text element wordmark */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 whitespace-nowrap shrink-0 font-display flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800"
        >
          <span>Kroma</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100"></span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a 
            href="#work" 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Work
          </a>
          <a 
            href="#capabilities" 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Capabilities
          </a>
          <a 
            href="#process" 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Process
          </a>
          <a 
            href="#estimator" 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Project Estimator
          </a>
          <a 
            href="#testimonials" 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Client Proof
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="px-4 py-2.5 text-xs font-semibold text-neutral-50 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-100 rounded-lg hover:bg-neutral-800 dark:hover:bg-white transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
          >
            Start a Project
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-6 py-6 space-y-4">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1"
          >
            Selected Work
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1"
          >
            Capabilities & Systems
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1"
          >
            Studio Process
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1"
          >
            Project Estimator
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-1"
          >
            Client Proof
          </a>
        </div>
      )}
    </header>
  );
};
