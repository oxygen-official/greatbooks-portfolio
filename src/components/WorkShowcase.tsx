import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy, ProjectCategory } from '../types';

interface WorkShowcaseProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredStudies = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
              Selected Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
              Engineered for impact. Tested in production.
            </h2>
          </div>

          {/* Interactive filter control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All Projects ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveCategory('digital-products')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                activeCategory === 'digital-products'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Digital Products
            </button>
            <button
              onClick={() => setActiveCategory('brand-systems')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                activeCategory === 'brand-systems'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Brand Systems
            </button>
            <button
              onClick={() => setActiveCategory('mobility')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                activeCategory === 'mobility'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Spatial & Mobility
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredStudies.map((study, index) => {
            // Asymmetric layout span
            const colSpan = index === 0 ? 'lg:col-span-12' : 'lg:col-span-6';
            const imgAspect = index === 0 ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]';

            return (
              <article
                key={study.id}
                onClick={() => onSelectCaseStudy(study)}
                className={`${colSpan} group cursor-pointer bg-white dark:bg-neutral-900/60 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col`}
              >
                {/* Visual Media Slot */}
                <div className={`relative w-full ${imgAspect} bg-neutral-100 dark:bg-neutral-850 overflow-hidden`}>
                  {!imageErrors[study.id] ? (
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      onError={() => setImageErrors(prev => ({ ...prev, [study.id]: true }))}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-400 p-8">
                      <span className="font-display font-medium text-lg">{study.title} Visual Representation</span>
                    </div>
                  )}

                  {/* Hover visual affordance */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 dark:text-neutral-100 shadow-md group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                      <span>{study.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display mb-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Quantitative Result Strip */}
                  <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-2xl font-bold text-neutral-950 dark:text-neutral-50 font-display tabular-nums">
                        {study.keyMetric}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        {study.metricLabel}
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:underline inline-flex items-center gap-1">
                      Read Full Case Study
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
