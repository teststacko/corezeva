import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  ArrowLeft, 
  ExternalLink, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  LayoutDashboard, 
  Calendar,
  Sparkles,
  Users,
  Flame,
  TrendingUp,
  Zap,
  Globe2,
  ChevronRight,
  Shield,
  HelpCircle,
  FileCode2,
  Briefcase
} from 'lucide-react';
import { SERVICES, WORK_ITEMS, FAQS } from '../data/mockData';
import { PageId } from '../components/Navbar';
import { ContactUsSection } from '../components/ContactUsSection';

interface PageProps {
  onNavigate: (page: PageId, targetId?: string) => void;
  onOpenBooking: () => void;
  targetId?: string | null;
}

// ---------------------- SERVICES PAGE (DETAILED) ----------------------
export const ServicesPage: React.FC<PageProps> = ({ onNavigate, onOpenBooking, targetId }) => {
  React.useEffect(() => {
    if (targetId) {
      // Small timeout ensures the DOM node has mounted
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [targetId]);
  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
          Core Engineering Capabilities
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          Detailed Services & Tech Architectures
        </h1>
        <p className="mt-3 text-base text-[#4A5568] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          We don't sell hours; we deliver production-ready systems. From multi-tenant SaaS engines and high-density operational telemetry to end-to-end QA harnesses and applied AI agents.
        </p>
      </div>

      <div className="space-y-12">
        {SERVICES.map((s, idx) => (
          <div
            key={s.id}
            id={s.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#EA580C] dark:text-[#FFA03C]">
                  CAPABILITY 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3] mt-1">
                  {s.title}
                </h2>
                <p className="text-sm font-semibold text-[#EA580C] dark:text-cyan-400 mt-1">
                  {s.tagline}
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-[#12162A] text-[#1B2238] dark:text-[#94A3B8] border border-[#EADFCB] dark:border-[#2A3254] self-start">
                {s.metrics}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
              {s.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#EADFCB] dark:border-[#2A3254]/60">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3] mb-3">
                  Production Deliverables Included:
                </h4>
                <div className="space-y-2">
                  {s.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3] mb-3">
                  Recommended Core Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#FFF8EE] dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#4A5568] dark:text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#B84F08] to-[#EA580C] text-white text-xs font-bold shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult on {s.title}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------------- WORK PAGE (DETAILED) ----------------------
export const WorkPage: React.FC<PageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
          Case Studies & Deployed Platforms
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          Featured Systems & Client Results
        </h1>
        <p className="mt-3 text-base text-[#4A5568] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          Explore real-world software platforms engineered, tested, and maintained by Corezeva across international hospitality, social communities, test engineering harnesses, and autonomous AI agents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-[#EA580C]">
                  {item.badge}
                </span>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] hover:underline"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <h2 className="text-2xl font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                {item.title}
              </h2>
              <p className="text-xs font-medium text-[#EA580C] dark:text-cyan-400 mt-1 mb-4">
                {item.tagline}
              </p>

              <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B2238] dark:text-[#F6EFE3]">
                  Architectural Highlights:
                </h4>
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] mb-4">
                {item.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#4A5568] dark:text-[#94A3B8]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#EADFCB] dark:border-[#2A3254]/60">
                {item.stack.map((st, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-[#4A5568] dark:text-[#94A3B8]"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Requirement 3: "& many more" banner for Work & Products */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-cyan-500/10 border border-orange-200 dark:border-orange-950/40 text-center space-y-3">
        <Sparkles className="w-8 h-8 text-[#EA580C] mx-auto" />
        <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3]">
          & Many More Bespoke Enterprise Builds
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          From proprietary logistics routing telemetry in the UAE to confidential HIPAA-compliant data dashboards and load-testing architectures running 20,000+ virtual users across the globe.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#B84F08] text-white text-xs font-bold shadow-sm"
        >
          <span>Request Custom Portfolio & NDA Teardown</span>
        </button>
      </div>
    </div>
  );
};

// ---------------------- PRODUCTS PAGE (DETAILED) ----------------------
export const ProductsPage: React.FC<PageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
          Turnkey Frameworks & IP
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          Corezeva Ready-to-Deploy Products
        </h1>
        <p className="mt-3 text-base text-[#4A5568] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          Skip 6-9 months of trial-and-error development. Our turnkey software frameworks come pre-engineered with database schemas, responsive interfaces, role authorizations, and deployment pipelines.
        </p>
      </div>

      <div className="space-y-10">
        {/* Product 1: Restaurant Operations Suite */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-[#EA580C]">
                Hospitality Operational Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1">
                Corezeva Restaurant Operations Suite
              </h2>
            </div>
            <a
              href="https://saashotel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EA580C] hover:bg-[#B84F08] text-white text-xs font-bold transition-colors self-start"
            >
              <span>Explore Live App (saashotel.vercel.app)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
            Engineered specifically to solve the rampant inventory theft, food spoilage, and payment reconciliation leakage that plagues restaurants, bars, and resorts. Tracks $248k+ daily net sales, inventory thresholds, automated food wastage logs, and multi-channel order settlement in real time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Flame className="w-5 h-5 text-[#EA580C] mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Inventory & LPG Telemetry</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Real-time low-stock threshold triggers for LPG cylinders, poultry, dairy, and dry ingredients before dinner rushes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Wastage Prevention Ledger</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Automatic calculations correlating raw purchases against dishes billed, identifying unrecorded waste per chef shift.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <ShieldCheck className="w-5 h-5 text-cyan-500 mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Role-Based Access Control</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Cashiers close daily registers, store managers monitor purchases, and owners access aggregated multi-branch net profits.
              </p>
            </div>
          </div>
        </div>

        {/* Product 2: The 143n Club Framework */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                Community & Event Ticketing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1">
                Modular Community & Event Web Framework
              </h2>
            </div>
            <a
              href="https://the143nclub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B2238] dark:bg-slate-700 hover:bg-[#EA580C] text-white text-xs font-bold transition-colors self-start"
            >
              <span>Explore Live Platform (the143nclub.vercel.app)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
            Modeled on the minimalist dusk design system of *The 143n Club* ("Strangers today. Stories tomorrow."). Built for clubs, high-touch communities, and curated experiential events requiring friction-free registration funnels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Users className="w-5 h-5 text-cyan-500 mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Waitlist & Member Triage</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Automated multi-step application funnel with attendee vetting and confirmation notifications.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Zap className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Visual Memory Gallery</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Curated past meetup photo archives, location tags, and community testimonials driving repeat booking.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Globe2 className="w-5 h-5 text-emerald-500 mb-2" />
              <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">Edge-Powered Speed</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Instant sub-second page loads globally via Vercel Edge caching and optimized image assets.
              </p>
            </div>
          </div>
        </div>

        {/* Product 3: Deep Research AI Engine */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400">
                Applied AI Autonomous Agent
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1">
                Deep Research Agentic Engine
              </h2>
            </div>
            <a
              href="https://deep-research-agent-ayi4.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors self-start"
            >
              <span>Explore Live AI Agent (Render)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-6">
            Autonomous multi-step research agent that synthesizes market intelligence, competitor tear-downs, and regulatory filings into actionable executive reports with 99.2% citation fidelity.
          </p>
        </div>
      </div>

      {/* Requirement 3: "& many more" banner */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-cyan-500/10 border border-orange-200 dark:border-orange-950/40 text-center space-y-3">
        <Sparkles className="w-8 h-8 text-[#EA580C] mx-auto" />
        <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3]">
          & Many More Ready-To-Deploy Software Assets
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Including our ReleaseLab QA Automation CI/CD Harness, Multi-Store POS Settlement Adapters, and Custom LLM Context Parsers. All available for rapid enterprise licensing and white-labeling.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#B84F08] text-white text-xs font-bold shadow-sm"
        >
          <span>Schedule Product Demonstration</span>
        </button>
      </div>
    </div>
  );
};

// ---------------------- BECOME A PARTNER PAGE (DETAILED) ----------------------
export const PartnerPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
          Global Partner Network
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          Partner With Corezeva
        </h1>
        <p className="mt-3 text-base text-[#4A5568] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          We collaborate with design agencies, venture studios, enterprise consultants, and tech incubators globally. You maintain the client relationship; we provide reliable technical execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#EA580C]">TIER 1</span>
            <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1 mb-2">
              Referral Partner Program
            </h3>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-4">
              Introduce clients who require custom SaaS development, QA test automation harnesses, or high-density dashboards.
            </p>
            <ul className="space-y-2 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Competitive milestone-based commissions</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transparent deal pipeline tracking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct co-pitching support from our tech leads</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-500">TIER 2</span>
            <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1 mb-2">
              Embedded Engineering Pods
            </h3>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-4">
              Expand your agency's delivery bandwidth with white-labeled principal engineers and QA test automation specialists.
            </p>
            <ul className="space-y-2 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dedicated monthly sprint capacity</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Integrated Slack / GitHub workflow</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% white-labeled under your brand</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-500">TIER 3</span>
            <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-1 mb-2">
              Solution & Reseller Licensing
            </h3>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] leading-relaxed mb-4">
              License and deploy our Restaurant Operations Suite or Community Frameworks to regional business clients.
            </p>
            <ul className="space-y-2 text-xs text-[#1B2238] dark:text-[#E2E8F0]">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Substantial software margin tier</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-tenant installation support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Continuous SLA-backed updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Application Form right on this page */}
      <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl">
        <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2 text-center">
          Partner Application Form
        </h3>
        <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] text-center mb-6">
          Submit your firm's details. Our partnership director will contact you with mutual NDA and partnership terms.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Application submitted! We will contact you within 24 hours.'); }} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">Full Name</label>
              <input type="text" required placeholder="Deepak Verma" className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">Work Email</label>
              <input type="email" required placeholder="deepak@company.com" className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">Company / Organization</label>
              <input type="text" placeholder="Verma Ventures" className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">Target Partnership Tier</label>
              <select className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]">
                <option>Tier 1: Referral Partner</option>
                <option>Tier 2: Embedded Engineering Pod</option>
                <option>Tier 3: Solution & Reseller Licensing</option>
                <option value="Other / Custom Partnership">Other / Custom Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">Collaboration Objectives</label>
            <textarea rows={3} placeholder="Share your client base or how you'd like to collaborate..." className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]" />
          </div>

          <button type="submit" className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#B84F08] text-white text-xs font-bold shadow-md transition-all">
            Submit Partner Application
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------------- ABOUT US PAGE (DETAILED) ----------------------
// ---------------------- ABOUT US PAGE (DETAILED) ----------------------
export const AboutPage: React.FC<PageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="mb-6">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-3"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-1.5">
          Engineering Ethos
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          About Corezeva
        </h1>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Flowing Narrative */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
          <p>
            Corezeva is a modern software product engineering, custom dashboard, QA automation, and applied AI consultancy. We bridge the gap between complex business challenges and dependable, high-converting digital technology.
          </p>
          <p>
            In a tech landscape saturated with bloated agency retainers and brittle prototypes, Corezeva was established to operate differently: as an elite, outcome-driven engineering partner that prioritizes production stability, maintainability, and measurable business ROI.
          </p>
          <p>
            Every system we design is built with observability, clean typing, resilient database indexing, and continuous automated test suites using Playwright and Selenium. Whether you're an established hospitality group eliminating inventory wastage or a venture-backed startup launching an applied AI agent, our team ensures your software performs under pressure.
          </p>
          <div className="p-4 rounded-xl bg-[#FFF8EE] dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] mt-5">
            <h4 className="font-bold text-[#1B2238] dark:text-[#F6EFE3] text-sm mb-1">
              Global Delivery Standards
            </h4>
            <p className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
              Active project deliveries across North America, Europe, MENA, and South Asia with flexible overlap coverage across Eastern Time (ET), Central European Time (CET), and Indian Standard Time (IST).
            </p>
          </div>
        </div>

        {/* Right Column: Aligned Core Principles Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-md space-y-4">
            <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
              Core Principles
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                <strong className="text-[#1B2238] dark:text-[#F6EFE3] block mb-0.5">
                  1. Quality Engineering from Day Zero
                </strong>
                <span>We do not treat QA as an afterthought. Automated regression tests run with every deployment.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                <strong className="text-[#1B2238] dark:text-[#F6EFE3] block mb-0.5">
                  2. Pragmatic Applied AI
                </strong>
                <span>We avoid buzzword-driven gimmicks. We deploy autonomous agents only where they directly reduce operational overhead.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                <strong className="text-[#1B2238] dark:text-[#F6EFE3] block mb-0.5">
                  3. 100% Client IP Sovereignty
                </strong>
                <span>You own all code, repositories, Figma design systems, and credentials with zero lock-in.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------- FAQ PAGE (DETAILED) ----------------------
export const FAQPage: React.FC<PageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
          Knowledge Base
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#4A5568] dark:text-[#94A3B8]">
          Everything you need to know about our engagement models, IP ownership, sprint velocity, and QA standards.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-sm"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2">
              {faq.q}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}

        {/* <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2">
            What is the typical team composition for an Embedded Engineering Pod?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
            Our standard dedicated sprint pod consists of 1 Senior Fullstack/Backend Engineer, 1 Frontend/UI Specialist, 1 QA Automation Engineer (Playwright/Selenium), and a Technical Project Lead overseeing weekly sprint demos and delivery milestones.
          </p>
        </div> */}

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-2">
            Can we sign a mutual Non-Disclosure Agreement (NDA) before sharing our product roadmap?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
            Absolutely. We routinely execute bilateral NDAs with our clients before initial technical teardowns or reviewing confidential database schemas.
          </p>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-[#FFF8EE] dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-center space-y-2">
        <h4 className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3]">
          Still have questions?
        </h4>
        <p className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
          Talk directly with our lead architects during a free 30-minute consultation.
        </p>
        <button
          onClick={onOpenBooking}
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EA580C] text-white text-xs font-bold"
        >
          <Calendar className="w-3.5 h-3.5" /> Book a Strategy Call
        </button>
      </div>
    </div>
  );
};

// ---------------------- REQUIREMENT 5: PRIVACY POLICY PAGE ----------------------
export const PrivacyPolicyPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl space-y-6">
        <div className="border-b border-[#EADFCB] dark:border-[#2A3254] pb-4">
          <div className="flex items-center gap-2 text-[#EA580C] mb-2">
            <Lock className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Legal Document</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1 font-mono">
            Last Updated: October 2026 · Effective Immediately
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            1. Overview & Commitment
          </h3>
          <p>
            Corezeva Engineering ("Corezeva", "we", "our", or "us") respects your privacy and is committed to protecting the confidential information, operational data, and personal identification collected through our web applications, client portals, and engineering engagements.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            2. Data We Collect
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact Details:</strong> Name, work email address, phone number, and company name submitted via our lead and partner inquiry forms.</li>
            <li><strong>Project Briefs & Technical Artifacts:</strong> Architecture roadmaps, repository URLs, database credentials (stored only via encrypted vaults), and QA logs provided during technical scoping.</li>
            <li><strong>Telemetry & Usage Data:</strong> Anonymized interaction logs, browser types, and session metrics collected through privacy-focused analytics.</li>
          </ul>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            3. Use of Information
          </h3>
          <p>
            We process collected data exclusively to provide our software engineering services, evaluate architectural feasibility, schedule strategy consultations, and satisfy mutual contractual obligations. Corezeva does NOT sell, rent, or trade client data to third-party advertisers.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            4. Client Intellectual Property & Source Isolation
          </h3>
          <p>
            All client proprietary codebase, schemas, and credentials remain isolated under encrypted containers. We enforce strict least-privilege role authorizations across our development pods.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            5. Contact for Privacy Matters
          </h3>
          <p>
            For inquiries regarding data retention, data deletion requests, or compliance, please reach out directly to our privacy officer at <a href="mailto:hello@corezeva.com" className="text-[#EA580C] underline font-semibold">hello@corezeva.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------- REQUIREMENT 5: TERMS OF SERVICE PAGE ----------------------
export const TermsOfServicePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl space-y-6">
        <div className="border-b border-[#EADFCB] dark:border-[#2A3254] pb-4">
          <div className="flex items-center gap-2 text-[#EA580C] mb-2">
            <FileText className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Commercial Terms</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
            Terms of Service
          </h1>
          <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1 font-mono">
            Last Updated: October 2026 · Governing Engineering Engagements
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            1. Engagement Scope & Statements of Work (SOW)
          </h3>
          <p>
            All custom software development, QA automation test suite implementation, custom dashboard construction, and applied AI workflows delivered by Corezeva are executed under formal, mutually agreed Statements of Work (SOW) outlining milestones, deliverables, and acceptance criteria.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            2. Intellectual Property (IP) Ownership
          </h3>
          <p>
            Upon settlement of milestone invoices, 100% of all custom-developed source code, application assets, documentation, and database schemas created specifically for the client are irrevocably assigned to the client. Corezeva retains rights solely over its proprietary pre-existing core libraries and generalized tooling.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            3. Warranties & Quality Assurance
          </h3>
          <p>
            Corezeva warrants that custom deliverables will materially conform to agreed functional specifications at handover. Standard deliverables include a 30-day post-launch warranty period for resolving critical defect regressions without additional charge.
          </p>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            4. Limitation of Liability
          </h3>
          <p>
            Except in cases of gross negligence or intentional misconduct, neither party shall be liable for indirect, incidental, or consequential damages arising from engagement execution. Total aggregate liability shall not exceed fees paid under the applicable SOW.
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------- REQUIREMENT 5: SECURITY STANDARDS PAGE ----------------------
export const SecurityStandardsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] dark:text-[#FFA03C] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl space-y-6">
        <div className="border-b border-[#EADFCB] dark:border-[#2A3254] pb-4">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Engineering Rigor</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
            Security Standards & Protocol
          </h1>
          <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1 font-mono">
            Zero-Trust Architectural Baseline for Production Systems
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
          <p>
            At Corezeva, software reliability and data security are built into the foundation of our engineering workflows, not retrofitted at deployment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Lock className="w-5 h-5 text-[#EA580C] mb-2" />
              <h4 className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">Encryption in Transit & at Rest</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Enforced TLS 1.3 encryption across all API endpoints with AES-256 encryption on persistent data volumes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Server className="w-5 h-5 text-cyan-500 mb-2" />
              <h4 className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">Automated CI/CD Vulnerability Scans</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Static application security testing (SAST) and automated dependency vulnerability checks via GitHub Actions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Database className="w-5 h-5 text-emerald-500 mb-2" />
              <h4 className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">Database Tenant Isolation</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Row-Level Security (RLS) and schema-isolated multi-tenancy preventing unauthorized cross-tenant data bleed.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
              <Shield className="w-5 h-5 text-purple-500 mb-2" />
              <h4 className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">API Authentication & Rate Limiting</h4>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mt-1">
                Cryptographically signed JWT sessions, Redis token-bucket rate limiting, and automated DDoS mitigation.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
            Continuous QA Assertion
          </h3>
          <p>
            Every release undergoes automated integration testing via Playwright test suites asserting authorized access rules, preventing privilege escalations, and validating payload safety before production merging.
          </p>
        </div>
      </div>
    </div>
  );
};
