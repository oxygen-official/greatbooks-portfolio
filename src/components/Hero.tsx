import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { HERO_IMAGE, STUDIO_METRICS } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenEstimator }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium mb-6">
          <span>Digital Engineering</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Brand Systems</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Full-Stack Web</span>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.08] font-display [text-wrap:balance]">
              We build high-performance web applications and digital brand architectures.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Kroma is an independent engineering and design studio. We partner with ambitious leadership teams to design, engineer, and deploy resilient digital products that convert.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-neutral-900 dark:text-neutral-900 dark:bg-white rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600"
              >
                <span>Estimate Project Cost</span>
              </button>
            </div>
          </div>
        </div>

        {/* 16:9 Focal Hero Banner */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-200 dark:bg-neutral-900 shadow-sm">
          {!imageError ? (
            <img
              src={HERO_IMAGE}
              alt="Kroma design engineering studio workspace with architects and engineers"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8">
              <Layers className="w-12 h-12 text-neutral-400 mb-3" />
              <p className="text-xl font-bold font-display">Kroma Creative Studio</p>
              <p className="text-sm text-neutral-400 mt-1">Design Systems & Full-Stack Engineering</p>
            </div>
          )}

          {/* Measured Scrim for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
            <div className="text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Central Studio & Engineering Laboratory</span>
            </div>
            <div className="text-xs text-neutral-300 font-mono">
              <span>LATITUDE 37.7749° N</span>
              <span className="mx-2">·</span>
              <span>LONGITUDE 122.4194° W</span>
            </div>
          </div>
        </div>

        {/* Adjacent Quantitative Proof Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          {STUDIO_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {metric.period}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
