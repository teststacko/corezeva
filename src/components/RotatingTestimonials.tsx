import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const RotatingTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Show a primary card and adjacent preview cards
  const current = TESTIMONIALS[currentIndex];
  const nextItem = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Controls Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-orange-500/10 text-[#EA580C] dark:text-[#FFA03C]">
            Outcome #{currentIndex + 1} of {TESTIMONIALS.length}
          </span>
          <span className="text-xs text-[#4A5568] dark:text-[#94A3B8] hidden sm:inline">
            Verified Global Clients
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="Toggle auto rotation"
            className="p-2 rounded-xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] text-[#4A5568] dark:text-[#94A3B8] hover:text-[#EA580C] transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] text-[#4A5568] dark:text-[#94A3B8] hover:text-[#EA580C] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] text-[#4A5568] dark:text-[#94A3B8] hover:text-[#EA580C] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Rotating Carousel Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Featured Large Card */}
        <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl flex flex-col justify-between transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                {current.metric}
              </span>
            </div>

            <Quote className="w-8 h-8 text-orange-400/30 mb-2" />
            <p className="text-base sm:text-lg text-[#1B2238] dark:text-[#F6EFE3] font-medium leading-relaxed italic mb-6">
              "{current.quote}"
            </p>
          </div>

          <div className="pt-4 border-t border-[#EADFCB] dark:border-[#2A3254]/60 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                {current.author}
              </div>
              <div className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
                {current.role}, <span className="font-semibold">{current.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#4A5568] dark:text-[#94A3B8]">{current.country}</span>
              <span className="text-2xl" title={current.country}>{current.flag}</span>
            </div>
          </div>
        </div>

        {/* Up Next Mini Card */}
        <div 
          onClick={handleNext}
          className="hidden md:flex md:col-span-4 p-6 rounded-2xl bg-[#FFF8EE]/60 dark:bg-[#151A30]/50 border border-[#EADFCB] dark:border-[#2A3254] flex-col justify-between cursor-pointer hover:border-[#EA580C] transition-all opacity-85 hover:opacity-100"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
                Up Next &rarr;
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {nextItem.metric}
              </span>
            </div>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] italic line-clamp-4 leading-relaxed mb-4">
              "{nextItem.quote}"
            </p>
          </div>

          <div className="pt-3 border-t border-[#EADFCB] dark:border-[#2A3254]/60 flex items-center justify-between text-xs">
            <div>
              <div className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">{nextItem.author}</div>
              <div className="text-[10px] text-[#4A5568] dark:text-[#94A3B8]">{nextItem.company}</div>
            </div>
            <span>{nextItem.flag}</span>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-6 bg-[#EA580C]'
                : 'w-2 bg-[#EADFCB] dark:bg-[#2A3254] hover:bg-orange-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
