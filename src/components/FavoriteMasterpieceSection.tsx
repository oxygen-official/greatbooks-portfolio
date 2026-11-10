import React, { useState } from 'react';
import { Heart, Compass, Check, BookOpen, Quote, Sparkles } from 'lucide-react';
import { FAVORITE_MASTERPIECES_DATA } from '../data/favoriteMasterpieces';

export const FavoriteMasterpieceSection: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('the-odyssey');
  const favorite = FAVORITE_MASTERPIECES_DATA[selectedKey] || FAVORITE_MASTERPIECES_DATA['the-odyssey'];

  return (
    <section id="favorite-masterpiece" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-500 font-bold mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400 fill-rose-600 dark:fill-rose-400" />
              <span>Section 3 · Culminating Favorite Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical [text-wrap:balance]">
              My Favorite Literary Masterpiece: Deep Reflection
            </h2>
            <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              An in-depth personal exploration of the single work from the Great Books curriculum that resonated most deeply with my worldview, values, and intellectual development.
            </p>
          </div>

          {/* Masterpiece Spotlight Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 self-start md:self-end">
            <button
              onClick={() => setSelectedKey('the-odyssey')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedKey === 'the-odyssey'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              The Odyssey
            </button>
            <button
              onClick={() => setSelectedKey('the-mahabharata')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedKey === 'the-mahabharata'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              The Mahabharata
            </button>
            <button
              onClick={() => setSelectedKey('the-tale-of-genji')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedKey === 'the-tale-of-genji'
                  ? 'bg-amber-900 text-white dark:bg-amber-600 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              The Tale of Genji
            </button>
          </div>
        </div>

        {/* Favorite Masterpiece Feature Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 shadow-sm space-y-10">
          
          {/* Header Row: Title, Author, Transformative Quote */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
            <div>
              <div className="text-xs uppercase tracking-widest font-mono text-amber-800 dark:text-amber-500 font-bold mb-1">
                Selected as Primary Favorite
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-stone-950 dark:text-stone-50 font-classical">
                {favorite.title}
              </h3>
              <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">
                By {favorite.author} · <span className="italic">{favorite.period}</span>
              </p>
            </div>

            {/* Transformative Quote Callout */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-stone-850 border border-amber-200/80 dark:border-stone-750 max-w-md">
              <Quote className="w-5 h-5 text-amber-700 dark:text-amber-400 mb-1 opacity-70" />
              <p className="text-sm font-classical italic text-stone-900 dark:text-stone-100">
                "{favorite.transformativeQuote}"
              </p>
            </div>
          </div>

          {/* 1. Brief Overview */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 dark:text-stone-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>1. Brief Overview of the Masterpiece</span>
            </h4>
            <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
              {favorite.overview}
            </p>
          </div>

          {/* 2. Reasons for Choosing as Favorite */}
          <div className="space-y-4 pt-6 border-t border-stone-100 dark:border-stone-800">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 dark:text-stone-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>2. Core Reasons for Choosing This Masterpiece as My Favorite</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {favorite.reasonsForChoice.map((reason, idx) => {
                const [heading, ...rest] = reason.split(':');
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-850 border border-stone-200/80 dark:border-stone-800 space-y-2"
                  >
                    <div className="text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
                      REASON 0{idx + 1}
                    </div>
                    <div className="font-bold text-sm text-stone-900 dark:text-stone-100 font-classical">
                      {heading}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {rest.join(':')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Significant Themes, Characters, or Lessons */}
          <div className="space-y-4 pt-6 border-t border-stone-100 dark:border-stone-800">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 dark:text-stone-500">
              3. Significant Themes & Lessons That Influenced My Appreciation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {favorite.influentialThemesAndLessons.map((lesson, lIdx) => {
                const [title, ...desc] = lesson.split(':');
                return (
                  <div
                    key={lIdx}
                    className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-850/60 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-950 dark:text-amber-300">
                      <Check className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {desc.join(':')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Personal Connections and Realizations */}
          <div className="p-8 rounded-2xl bg-amber-50/70 dark:bg-stone-850 border border-amber-200 dark:border-stone-750 space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>4. Personal Connections & Realizations Gained from the Masterpiece</span>
            </div>
            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
              {favorite.personalConnections}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
