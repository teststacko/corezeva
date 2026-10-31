import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  LayoutDashboard, 
  ExternalLink, 
  Calendar, 
  Users, 
  Globe2, 
  ChevronDown, 
  Linkedin, 
  Mail, 
  Github, 
  Twitter, 
  Zap, 
  TrendingUp, 
  Flame, 
  ChevronRight,
  Instagram
} from 'lucide-react';
import { MiniDashboardPreview } from './MiniDashboardPreview';
import { RotatingTestimonials } from './RotatingTestimonials';
import { ContactUsSection } from './ContactUsSection';
import { SERVICES, WORK_ITEMS, FAQS } from '../data/mockData';
import { Logo } from './Logo';
import { PageId } from './Navbar';

interface SectionProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId, targetId?: string) => void;
}

// ---------------------- HERO SECTION ----------------------
export const HeroSection: React.FC<SectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-orange-400/10 via-cyan-400/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-white/5 border border-[#EADFCB] dark:border-[#2A3254] text-[#EA580C] dark:text-[#FFA03C] shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span>Serving Global Enterprises & Scale-Ups · USA · Europe · MENA · India</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B2238] dark:text-[#F6EFE3] leading-[1.15]">
            Engineering High-Performance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B84F08] via-[#EA580C] to-[#FFA03C]">
              SaaS, Custom Ops Consoles,
            </span>{' '}
            and Applied AI.
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 text-base sm:text-lg text-[#4A5568] dark:text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            Corezeva builds software products and digital solutions that help businesses operate smarter and grow with confidence. From business SaaS and custom applications to AI-enabled solutions and modern websites, we combine practical thinking, thoughtful engineering, and quality-focused delivery to turn business needs into useful technology.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B84F08] to-[#EA580C] hover:from-[#EA580C] hover:to-[#FFA03C] text-white font-semibold text-base shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#1B2038] hover:bg-slate-50 dark:hover:bg-[#232946] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] font-semibold text-base transition-all duration-200"
            >
              <span>Explore Case Studies &rarr;</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-10 pt-6 border-t border-[#EADFCB] dark:border-[#2A3254]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">99.4%</div>
              <div className="text-xs text-[#4A5568] dark:text-[#94A3B8]">Defect-Free Deployment</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">3-6 Wks</div>
              <div className="text-xs text-[#4A5568] dark:text-[#94A3B8]">Average MVP Velocity</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">100%</div>
              <div className="text-xs text-[#4A5568] dark:text-[#94A3B8]">IP & Source Ownership</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">Global</div>
              <div className="text-xs text-[#4A5568] dark:text-[#94A3B8]">US, EU, MENA & APAC</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Showcase (Amber Fort Operations with Dollar Signs) */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#EA580C]/20 via-[#38BDF8]/20 to-[#FFA03C]/20 blur-xl -z-10" />
            <MiniDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------- SERVICES HOME SECTION ----------------------
export const ServicesSection: React.FC<SectionProps> = ({ onOpenBooking, onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-6 h-6 text-[#EA580C]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-cyan-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-500" />;
      default: return <Sparkles className="w-6 h-6 text-[#EA580C]" />;
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
              Engineered For Scale & Stability
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
              What We Build & Deliver
            </h2>
          </div>
          <button
  onClick={() => onNavigate('services')}
  className="text-xs sm:text-sm font-bold text-[#EA580C] hover:underline inline-flex items-center gap-1 self-start"
>
            <span>View Detailed Services Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              onClick={() => onNavigate('services', s.id)}
              className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] hover:border-[#EA580C]/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#FFF8EE] dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] group-hover:scale-105 transition-transform">
                    {getIcon(s.iconName)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#12162A] text-[#1B2238] dark:text-[#94A3B8] border border-[#EADFCB] dark:border-[#2A3254]">
                    {s.metrics}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] group-hover:text-[#EA580C] dark:group-hover:text-[#FFA03C] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-medium text-[#EA580C] dark:text-cyan-400 mt-1 mb-3">
                  {s.tagline}
                </p>
                <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#EADFCB] dark:border-[#2A3254]/60">
                  {s.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#FFF8EE] dark:bg-[#12162A] text-[#4A5568] dark:text-[#94A3B8] border border-[#EADFCB] dark:border-[#2A3254]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------- WORK HOME SECTION ----------------------
export const WorkSection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section id="work" className="py-12 md:py-16 bg-[#FFF8EE]/60 dark:bg-[#151A30]/50 border-y border-[#EADFCB] dark:border-[#2A3254]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
              Proven Track Record
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
              Featured Work & Systems
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="text-xs sm:text-sm font-bold text-[#EA580C] hover:underline inline-flex items-center gap-1 self-start"
          >
            <span>View All Case Studies &amp; Architecture Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORK_ITEMS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-orange-500/10 text-[#EA580C] dark:text-[#FFA03C]">
                    {project.badge}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#4A5568] dark:text-[#94A3B8] hover:text-[#EA580C] dark:hover:text-[#FFA03C] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#EA580C] dark:text-cyan-400 mt-1 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-sm sm:text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#4A5568] dark:text-[#94A3B8] truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Requirement 3: "& many more" banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
              & Many More Custom Client Deployments
            </h4>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
              Automated test suites, logistics dashboards, and proprietary agentic workflows.
            </p>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="px-4 py-2 rounded-xl bg-orange-500/10 text-[#EA580C] dark:text-[#FFA03C] hover:bg-orange-500/20 text-xs font-bold transition-colors whitespace-nowrap"
          >
            Explore Full Work Catalog &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

// ---------------------- PRODUCTS HOME SECTION ----------------------
export const ProductsSection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section id="products" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
              Ready-To-Deploy Intellectual Property
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
              Corezeva Proprietary Products
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs sm:text-sm font-bold text-[#EA580C] hover:underline inline-flex items-center gap-1 self-start"
          >
            <span>View All Products Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Restaurant Ops Suite */}
          <div className="rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-[#EA580C]">
                  Hospitality Tech
                </span>
                <span className="text-xs text-[#4A5568] dark:text-[#94A3B8]">v3.2 Production</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2">
                Corezeva Restaurant Operations Suite
              </h3>
              <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
                Engineered specifically for multi-outlet restaurants, cloud kitchens, and hospitality resorts. Built to eliminate inventory theft, catch kitchen wastage early, and consolidate multi-channel sales into a clean daily net revenue ledger.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                  <Flame className="w-4 h-4 text-[#EA580C]" />
                  <span className="text-[#1B2238] dark:text-[#E2E8F0] font-medium">
                    Live Stock Telemetry with LPG, Poultry, and Dairy auto-reorder triggers
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-[#1B2238] dark:text-[#E2E8F0] font-medium">
                    Automated Profit-vs-Wastage cost analysis per shift and recipe
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EADFCB] dark:border-[#2A3254] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://saashotel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#B84F08] text-white text-xs font-bold transition-colors"
              >
                <span>Launch Live Demo Console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-[#4A5568] dark:text-[#94A3B8]">Deployable in 72 hours</span>
            </div>
          </div>

          {/* Deep Research AI & Community Framework */}
          <div className="rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  Applied AI
                </span>
                <span className="text-xs text-[#4A5568] dark:text-[#94A3B8]">Agentic Engine</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2">
                Deep Research Agentic Engine
              </h3>
              <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
                An autonomous multi-step research agent that synthesizes market intelligence, competitor filings, and regulatory guidelines into structured, citation-backed executive briefs.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  <span className="text-[#1B2238] dark:text-[#E2E8F0] font-medium">
                    Recursive autonomous web browsing with cross-source verification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-[#1B2238] dark:text-[#E2E8F0] font-medium">
                    Saves 18+ hours per week per research team
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EADFCB] dark:border-[#2A3254] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://deep-research-agent-ayi4.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors"
              >
                <span>Launch Live AI Agent</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-[#4A5568] dark:text-[#94A3B8]">Live on Render</span>
            </div>
          </div>
        </div>

        {/* Requirement 3: "& many more" banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
              & Many More Turnkey Frameworks
            </h4>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
              Including *The 143n Club* Event Engine (`the143nclub.vercel.app`) and QA automation test harnesses.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 text-xs font-bold transition-colors whitespace-nowrap"
          >
            Explore Product Suite &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

// ---------------------- ROTATING TESTIMONIALS HOME SECTION ----------------------
export const TestimonialsHomeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFF8EE]/60 dark:bg-[#151A30]/50 border-y border-[#EADFCB] dark:border-[#2A3254]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
            Client Feedback & Outcomes
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
            What Founders & Engineering Leaders Say
          </h2>
        </div>

        {/* 10-12 Testimonials Rotating Carousel */}
        <RotatingTestimonials />
      </div>
    </section>
  );
};

// ---------------------- ABOUT HOME SECTION ----------------------
export const AboutSection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C]">
              About Corezeva
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
              Pragmatic Engineering Over Buzzwords.
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
              Corezeva was founded on a simple truth: businesses don't need speculative science projects; they need resilient software that saves hours, stops financial leakages, and runs without midnight production crashes.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs sm:text-sm font-bold text-[#EA580C] hover:underline inline-flex items-center gap-1"
              >
                <span>Read more about our engineering principles & team</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-md space-y-3">
              <h4 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                Delivery Highlights
              </h4>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                <strong className="text-[#1B2238] dark:text-[#F6EFE3] block">Zero-Escape Defect Policy</strong>
                <span className="text-[#4A5568] dark:text-[#94A3B8]">End-to-end regression test suites run automatically before every deploy.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] text-xs">
                <strong className="text-[#1B2238] dark:text-[#F6EFE3] block">Global Timezone Overlap</strong>
                <span className="text-[#4A5568] dark:text-[#94A3B8]">Seamless engineering coverage across North America, Europe, and Asia.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------- FOOTER ----------------------
export const Footer: React.FC<SectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-[#0E1222] border-t border-[#EADFCB] dark:border-[#2A3254] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <Logo />
            </div>
            <p className="mt-3 text-xs text-[#4A5568] dark:text-[#94A3B8] leading-relaxed max-w-sm">
              Corezeva builds software products, custom dashboards, QA automation frameworks, and applied AI systems that help modern businesses operate smarter.
            </p>
            <div className="flex items-center gap-3 mt-4 text-[#4A5568] dark:text-[#94A3B8]">
              <a href="https://linkedin.com/company/corezeva" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-[#EA580C] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:hello@corezeva.com" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-[#EA580C] transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/corezeva" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-[#EA580C] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              
              
            </div>
          </div>

{/* Solutions */}
<div>
  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3] mb-3">
    Capabilities
  </h4>
  <ul className="space-y-2 text-xs text-[#4A5568] dark:text-[#94A3B8]">
    <li>
      <button onClick={() => onNavigate('services', 'saas')} className="hover:text-[#EA580C]">
        SaaS Engineering
      </button>
    </li>
    <li>
      <button onClick={() => onNavigate('services', 'dashboards')} className="hover:text-[#EA580C]">
        Custom Dashboards
      </button>
    </li>
    <li>
      <button onClick={() => onNavigate('services', 'qa-automation')} className="hover:text-[#EA580C]">
        QA Automation
      </button>
    </li>
    <li>
      <button onClick={() => onNavigate('services', 'applied-ai')} className="hover:text-[#EA580C]">
        Applied AI & RAG
      </button>
    </li>
  </ul>
</div>

          {/* Live Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3] mb-3">
              Live Products
            </h4>
            <ul className="space-y-2 text-xs text-[#4A5568] dark:text-[#94A3B8]">
              <li><a href="https://saashotel.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C]">Restaurant SaaS Suite &rarr;</a></li>
              <li><a href="https://the143nclub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C]">The 143n Club &rarr;</a></li>
              <li><a href="https://deep-research-agent-ayi4.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C]">Deep Research AI &rarr;</a></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-[#EA580C]">All Products Page</button></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3] mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#4A5568] dark:text-[#94A3B8]">
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#EA580C]">About Us</button></li>
              <li><button onClick={() => onNavigate('partner')} className="hover:text-[#EA580C]">Become a Partner</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-[#EA580C]">Client FAQ</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#EA580C]">Contact Us</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#EA580C]">Book a Consultation</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Privacy, Terms, Security Pages */}
        <div className="pt-6 border-t border-[#EADFCB] dark:border-[#2A3254]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4A5568] dark:text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Corezeva Engineering Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('privacy')} className="hover:underline hover:text-[#EA580C]">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('terms')} className="hover:underline hover:text-[#EA580C]">
              Terms of Service
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('security')} className="hover:underline hover:text-[#EA580C]">
              Security Standards
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
