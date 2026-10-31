import React, { useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const calendlyUrl =
    import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/contactcorezeva/30min';

  // 1. Background Scroll Lock for mobile devices & desktop
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      const originalTouchAction = window.getComputedStyle(document.body).touchAction;

      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  // Load official Calendly embed widget script
  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] rounded-2xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row max-h-[92vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#1B2238] dark:text-[#F6EFE3] hover:scale-110 transition-transform"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Value Proposition */}
        <div className="w-full md:w-5/12 bg-[#FFF8EE]/60 dark:bg-[#12162A]/60 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EADFCB] dark:border-[#2A3254]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-[#EA580C] dark:text-[#FFA03C] mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>30-Minute Architecture Consultation</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-3">
              Let's Architect Your Next Breakthrough.
            </h3>
            
            <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
              Skip the generic sales pitch. Speak directly with a principal engineer to review your product roadmap, tech stack, QA automation coverage, or AI implementation scope.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Technical feasibility & architectural teardown</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Transparent fixed-price or sprint squad estimates</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Zero obligation, strict mutual NDA standards</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EADFCB] dark:border-[#2A3254] flex items-center gap-3 text-xs text-[#4A5568] dark:text-[#94A3B8]">
            <Shield className="w-4 h-4 text-[#EA580C]" />
            <span>Timezone flexible: USA, Europe, Middle East, APAC</span>
          </div>
        </div>

        {/* Right Side: Calendly Interface */}
        <div className="w-full md:w-7/12 p-4 sm:p-6 flex flex-col justify-center items-center bg-white dark:bg-[#1B2038]">
          <div className="w-full h-[520px] rounded-xl overflow-hidden border border-[#EADFCB] dark:border-[#2A3254] relative bg-slate-50 dark:bg-slate-900/50 flex flex-col">
            <div className="px-4 py-3 bg-white dark:bg-[#171C33] border-b border-[#EADFCB] dark:border-[#2A3254] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3]">Direct Engineering Slot</span>
              </div>
              <span className="text-xs text-[#4A5568] dark:text-[#94A3B8] flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> 30 min
              </span>
            </div>

            {/* 2. Touch-enabled, non-chaining Calendly container */}
            <div 
              className="calendly-inline-widget w-full flex-1 overflow-y-auto overscroll-contain"
              data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              style={{ minWidth: '320px', height: '100%', WebkitOverflowScrolling: 'touch' }}
            />

            {/* Fallback direct link */}
            <div className="px-3 py-2 bg-slate-100/90 dark:bg-[#12162A]/90 border-t border-[#EADFCB] dark:border-[#2A3254] text-center flex-shrink-0">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline"
              >
                <span>Trouble loading calendar? Open in new window</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};