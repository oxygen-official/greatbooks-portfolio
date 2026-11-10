import React, { useState, useId } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface EstimatorProps {
  onTransferEstimate: (summary: {
    projectType: string;
    features: string[];
    timeline: string;
    estimatedCost: string;
  }) => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  baseCost: number;
  baseWeeks: number;
  description: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'fullstack-web',
    name: 'Full-Stack Web Platform',
    baseCost: 18000,
    baseWeeks: 8,
    description: 'Bespoke React/Next.js application with complex workflows, API integrations, and robust state.'
  },
  {
    id: 'brand-flagship',
    name: 'Digital Flagship & E-Commerce',
    baseCost: 14000,
    baseWeeks: 6,
    description: 'High-conversion editorial digital flagship, bespoke checkout flow, and brand storytelling.'
  },
  {
    id: 'design-system',
    name: 'Enterprise Design System',
    baseCost: 10000,
    baseWeeks: 5,
    description: 'Comprehensive tokenized multi-theme UI library in Figma and code with full accessibility compliance.'
  },
  {
    id: 'spatial-interface',
    name: 'Spatial & Automotive Interface',
    baseCost: 22000,
    baseWeeks: 10,
    description: 'Sub-second glance UI, hardware CAN/WebSocket communication bridge, and ergonomic telemetry.'
  }
];

const FEATURE_ADDONS = [
  { id: 'perf-hardening', name: 'Sub-50ms Performance & SEO Hardening', cost: 3000 },
  { id: 'headless-cms', name: 'Headless CMS & Content Model Pipeline', cost: 3500 },
  { id: 'auth-rbac', name: 'Role-Based Access Control & Security Auditing', cost: 4000 },
  { id: 'canvas-viz', name: 'Canvas / SVG Interactive Data Visualizations', cost: 4500 },
  { id: 'i18n-localization', name: 'Multi-Region Internationalization (i18n)', cost: 2500 }
];

export const Estimator: React.FC<EstimatorProps> = ({ onTransferEstimate }) => {
  const [selectedType, setSelectedType] = useState<string>('fullstack-web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['perf-hardening', 'headless-cms']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated' | 'urgent'>('standard');
  const [isTransferred, setIsTransferred] = useState(false);

  const currentType = PROJECT_TYPES.find(t => t.id === selectedType) || PROJECT_TYPES[0];

  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const f = FEATURE_ADDONS.find(item => item.id === featId);
    return acc + (f ? f.cost : 0);
  }, 0);

  const subtotal = currentType.baseCost + featuresCost;
  const speedMultiplier = timelineSpeed === 'urgent' ? 1.35 : timelineSpeed === 'accelerated' ? 1.15 : 1.0;
  const totalCost = Math.round(subtotal * speedMultiplier);
  const minCost = Math.round(totalCost * 0.95);
  const maxCost = Math.round(totalCost * 1.05);

  const speedWeeksMultiplier = timelineSpeed === 'urgent' ? 0.6 : timelineSpeed === 'accelerated' ? 0.8 : 1.0;
  const estimatedWeeks = Math.max(3, Math.round(currentType.baseWeeks * speedWeeksMultiplier));

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
    setIsTransferred(false);
  };

  const handleApplyToInquiry = () => {
    const featureNames = selectedFeatures.map(fId => {
      return FEATURE_ADDONS.find(f => f.id === fId)?.name || fId;
    });

    onTransferEstimate({
      projectType: currentType.name,
      features: featureNames,
      timeline: `${estimatedWeeks} Weeks (${timelineSpeed})`,
      estimatedCost: `$${minCost.toLocaleString()} – $${maxCost.toLocaleString()}`
    });

    setIsTransferred(true);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display">
            Transparent investment projections in real time.
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Configure your technical requirements to generate an immediate scope baseline and delivery timeline.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                1. Select Foundation Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map(type => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setIsTransferred(false);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 ${
                      selectedType === type.id
                        ? 'bg-white dark:bg-neutral-900 border-neutral-950 dark:border-neutral-200 ring-1 ring-neutral-950 dark:ring-neutral-200 shadow-sm'
                        : 'bg-white/70 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50 font-display">
                        {type.name}
                      </span>
                      {selectedType === type.id && (
                        <Check className="w-4 h-4 text-neutral-950 dark:text-neutral-50" />
                      )}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                2. Technical Modules & Hardening
              </label>
              <div className="space-y-2">
                {FEATURE_ADDONS.map(addon => {
                  const isChecked = selectedFeatures.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleFeature(addon.id)}
                      className={`p-3.5 rounded-lg border flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-white dark:bg-neutral-900 border-neutral-950 dark:border-neutral-300'
                          : 'bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-neutral-900 border-neutral-900 dark:bg-neutral-100 dark:border-neutral-100 text-white dark:text-neutral-900'
                            : 'border-neutral-300 dark:border-neutral-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 tabular-nums">
                        +${addon.cost.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Delivery Speed */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                3. Delivery Velocity
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    setTimelineSpeed('standard');
                    setIsTransferred(false);
                  }}
                  className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                    timelineSpeed === 'standard'
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100'
                      : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <div className="text-xs font-bold">Standard</div>
                  <div className="text-[11px] opacity-80 mt-0.5">Recommended</div>
                </button>
                <button
                  onClick={() => {
                    setTimelineSpeed('accelerated');
                    setIsTransferred(false);
                  }}
                  className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                    timelineSpeed === 'accelerated'
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100'
                      : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <div className="text-xs font-bold">Accelerated</div>
                  <div className="text-[11px] opacity-80 mt-0.5">+15% Sprint Pace</div>
                </button>
                <button
                  onClick={() => {
                    setTimelineSpeed('urgent');
                    setIsTransferred(false);
                  }}
                  className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                    timelineSpeed === 'urgent'
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100'
                      : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <div className="text-xs font-bold">Urgent Launch</div>
                  <div className="text-[11px] opacity-80 mt-0.5">Dedicated Pod</div>
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 sticky top-24 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                PROJECTION SUMMARY
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Fixed-Price Guarantee</span>
              </span>
            </div>

            {/* Estimated Price Range */}
            <div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                Estimated Investment Range
              </div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-display tabular-nums">
                ${minCost.toLocaleString()} – ${maxCost.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                USD · Bi-weekly milestone invoicing · Zero hidden fees
              </div>
            </div>

            {/* Timeline & Sprint Details */}
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Target Delivery:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
                  ~{estimatedWeeks} Weeks ({timelineSpeed})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Architectural Core:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {currentType.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Selected Hardening Modules:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
                  {selectedFeatures.length} Active
                </span>
              </div>
            </div>

            {/* Transfer to Inquiry Action */}
            <button
              onClick={handleApplyToInquiry}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                isTransferred
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-white'
              }`}
            >
              {isTransferred ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Scope Imported to Inquiry</span>
                </>
              ) : (
                <>
                  <span>Apply Scope to Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-[11px] text-neutral-400 dark:text-neutral-500">
              Transferring scope will auto-fill your project details in the inquiry section below.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
