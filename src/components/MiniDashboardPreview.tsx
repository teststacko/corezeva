import React from 'react';
import { AlertTriangle, BarChart3, PieChart as PieIcon, ArrowUpRight } from 'lucide-react';

export const MiniDashboardPreview: React.FC = () => {
  return (
    <div className="w-full rounded-2xl border border-[#EADFCB] dark:border-[#2A3254] bg-white/95 dark:bg-[#171C33]/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-glow-cyan/20">
      {/* Top Console Bar */}
      <div className="px-4 py-2.5 bg-[#FFF8EE]/80 dark:bg-[#12162A]/80 border-b border-[#EADFCB] dark:border-[#2A3254] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="ml-2 font-mono text-[11px] font-medium text-[#4A5568] dark:text-[#94A3B8]">
            saashotel.app · Amber Fort Operations Console
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Live Sync
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Low-Stock Alert Banner */}
        <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-300 dark:border-rose-900/60 flex flex-wrap items-center gap-2 text-[11px]">
          <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> Low-Stock Alerts (5 Items):
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-mono font-medium text-[10px]">
              LPG CYLINDER: 1 PCS (ALERT &lt; 2)
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-mono font-medium text-[10px]">
              PULSES: 2 KG (ALERT &lt; 5)
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-mono font-medium text-[10px]">
              PANEER: 3 KG
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-mono font-medium text-[10px]">
              CHICKEN: 6 KG
            </span>
          </div>
        </div>

        {/* 6 Key Stat Cards with DOLLAR ($) Signs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* 1. Net Sales */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254]">
            <span className="text-[10px] text-[#4A5568] dark:text-[#94A3B8] font-medium block">Net sales</span>
            <div className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-0.5">$248,620</div>
            <span className="text-[9px] text-[#4A5568] dark:text-[#94A3B8]">640 orders</span>
          </div>

          {/* 2. Avg Order Value */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254]">
            <span className="text-[10px] text-[#4A5568] dark:text-[#94A3B8] font-medium block">Avg order value</span>
            <div className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-0.5">$388</div>
            <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">+14% vs avg</span>
          </div>

          {/* 3. Purchases */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254]">
            <span className="text-[10px] text-[#4A5568] dark:text-[#94A3B8] font-medium block">Purchases</span>
            <div className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-0.5">$159,646</div>
            <span className="text-[9px] text-[#4A5568] dark:text-[#94A3B8]">Owed: $154,446</span>
          </div>

          {/* 4. Expenses */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254]">
            <span className="text-[10px] text-[#4A5568] dark:text-[#94A3B8] font-medium block">Expenses</span>
            <div className="text-sm font-bold text-[#1B2238] dark:text-[#F6EFE3] mt-0.5">$51,575</div>
            <span className="text-[9px] text-[#4A5568] dark:text-[#94A3B8]">Utilities & ops</span>
          </div>

          {/* 5. Wastage Cost */}
          <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
            <span className="text-[10px] text-rose-600 dark:text-rose-400 font-medium block">Wastage cost</span>
            <div className="text-sm font-bold text-rose-600 dark:text-rose-400 mt-0.5">$2,721</div>
            <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">-22% reduced</span>
          </div>

          {/* 6. Est Profit */}
          <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block">Est. profit</span>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">$34,678</div>
            <span className="text-[9px] text-emerald-600 dark:text-emerald-400">Net margin: 14%</span>
          </div>
        </div>

        {/* Charts & Breakdown Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {/* Daily Sales vs Spend Bar Chart */}
          <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-[#1B2038]/80 border border-[#EADFCB] dark:border-[#2A3254]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#EA580C]" /> Daily Sales vs Spend
              </span>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="flex items-center gap-1 text-[#EA580C] font-medium">
                  <span className="w-2 h-2 rounded-sm bg-[#B84F08]" /> Sales
                </span>
                <span className="flex items-center gap-1 text-teal-600 font-medium">
                  <span className="w-2 h-2 rounded-sm bg-[#0D9488]" /> Spend
                </span>
              </div>
            </div>

            <div className="h-24 flex items-end justify-between gap-1 pt-3 px-1">
              {[
                { day: 'Mon', s: 65, sp: 40 },
                { day: 'Tue', s: 72, sp: 55 },
                { day: 'Wed', s: 58, sp: 45 },
                { day: 'Thu', s: 84, sp: 60 },
                { day: 'Fri', s: 92, sp: 70 },
                { day: 'Sat', s: 100, sp: 75 },
                { day: 'Sun', s: 95, sp: 65 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-0.5 h-16">
                    <div
                      style={{ height: `${item.s}%` }}
                      className="w-2 sm:w-2.5 bg-[#EA580C] rounded-t-sm transition-all duration-500 hover:brightness-110"
                      title={`Sales: ${item.s}%`}
                    />
                    <div
                      style={{ height: `${item.sp}%` }}
                      className="w-2 sm:w-2.5 bg-[#0D9488] rounded-t-sm transition-all duration-500 hover:brightness-110"
                      title={`Spend: ${item.sp}%`}
                    />
                  </div>
                  <span className="text-[9px] text-[#4A5568] dark:text-[#94A3B8] font-mono">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods Donut & Top Dishes */}
          <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-[#1B2038]/80 border border-[#EADFCB] dark:border-[#2A3254] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] flex items-center gap-1.5">
                <PieIcon className="w-3.5 h-3.5 text-cyan-500" /> Channel Settlement
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">99.9% Reconciled</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-white dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]/50">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568] dark:text-[#94A3B8]">Stripe & Online</span>
                  <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">42%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-blue-600 h-full w-[42%]" />
                </div>
              </div>

              <div className="p-2 rounded bg-white dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]/50">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568] dark:text-[#94A3B8]">Cards & POS</span>
                  <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">28%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-purple-600 h-full w-[28%]" />
                </div>
              </div>

              <div className="p-2 rounded bg-white dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]/50">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568] dark:text-[#94A3B8]">Cash Settlement</span>
                  <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">18%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[18%]" />
                </div>
              </div>

              <div className="p-2 rounded bg-white dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]/50">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568] dark:text-[#94A3B8]">Aggregators</span>
                  <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3]">12%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-orange-500 h-full w-[12%]" />
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-[#4A5568] dark:text-[#94A3B8] flex items-center justify-between">
              <span>Top Revenue Item: <strong>Signature Platter ($48.2k)</strong></span>
              <a 
                href="https://saashotel.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#EA580C] dark:text-[#FFA03C] hover:underline flex items-center gap-0.5 font-medium"
              >
                Inspect Live App <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
