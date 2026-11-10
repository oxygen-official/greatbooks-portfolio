import React, { useState } from 'react';
import { Sun, Moon, Type, Palette, X, SlidersHorizontal } from 'lucide-react';

interface ThemeCustomizerProps {
  isDark: boolean;
  onToggleTheme: () => void;
  fontStyle: 'modern' | 'editorial';
  onSetFontStyle: (style: 'modern' | 'editorial') => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  isDark,
  onToggleTheme,
  fontStyle,
  onSetFontStyle
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-2xl p-5 shadow-2xl w-72 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Studio Appearance</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 p-1 rounded-md"
              aria-label="Close customizer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Mode Toggle */}
          <div>
            <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              Color Mode
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  if (isDark) onToggleTheme();
                }}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  !isDark
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => {
                  if (!isDark) onToggleTheme();
                }}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isDark
                    ? 'bg-white text-neutral-950 border-white shadow-sm'
                    : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Typography Mode */}
          <div>
            <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              Typography Voice
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onSetFontStyle('modern')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                  fontStyle === 'modern'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-sm'
                    : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                }`}
              >
                <span className="font-sans font-bold">Jakarta</span>
                <span className="block text-[10px] opacity-75">Clean Sans</span>
              </button>

              <button
                onClick={() => onSetFontStyle('editorial')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                  fontStyle === 'editorial'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-sm'
                    : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                }`}
              >
                <span className="font-editorial italic font-bold">Playfair</span>
                <span className="block text-[10px] opacity-75">Editorial Serif</span>
              </button>
            </div>
          </div>

          <div className="text-[10px] text-neutral-400 dark:text-neutral-500 text-center pt-1 border-t border-neutral-100 dark:border-neutral-800">
            Real-time CSS variable & variant sync
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 group"
          title="Customize Theme & Typography"
          aria-label="Customize Theme & Typography"
        >
          <SlidersHorizontal className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-medium pr-1">Customize View</span>
        </button>
      )}
    </div>
  );
};
