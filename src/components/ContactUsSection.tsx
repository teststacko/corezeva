import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactUsSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    serviceInterest: 'SaaS Product Engineering',
    otherService: '',
    budget: 'Flexible / Let\'s discuss',
    message: ''
  });

 const [isSubmitting, setIsSubmitting] = useState(false);
const [errorMessage, setErrorMessage] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage(null);

  // Combine custom "Other" text into the service interest field
  const payload = {
    ...contactForm,
    serviceInterest:
      contactForm.serviceInterest === 'Other'
        ? `Other: ${contactForm.otherService?.trim() || 'Not specified'}`
        : contactForm.serviceInterest
  };

  try {
    const response = await fetch('https://formspree.io/f/xaeedvve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      const data = await response.json();
      setErrorMessage(data?.errors?.[0]?.message || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    setErrorMessage('Network connection error. Please check your internet connection.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className={`py-12 md:py-16 ${isStandalonePage ? 'pt-28' : 'bg-white/60 dark:bg-[#151A30]/40 border-t border-[#EADFCB] dark:border-[#2A3254]/60'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FFA03C] mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2238] dark:text-[#F6EFE3]">
            Let's Start Your Next Engineering Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5568] dark:text-[#94A3B8]">
            Whether you need a custom operations console, high-velocity QA automation, or applied AI pipelines, our engineering leads respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                Direct Communication Channels
              </h3>

              <div className="space-y-3 text-xs">
                <a
                  href="mailto:hello@corezeva.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] hover:border-[#EA580C] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3] block">General & Technical Inquiries</span>
                    <span className="text-[#4A5568] dark:text-[#94A3B8]">hello@corezeva.com or contactcorezeva@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                  <Clock className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3] block">Response Guarantee</span>
                    <span className="text-[#4A5568] dark:text-[#94A3B8]">Within 24 hours (Monday to Saturday)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254]">
                  <Globe className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1B2238] dark:text-[#F6EFE3] block">Active Delivery Hubs</span>
                    <span className="text-[#4A5568] dark:text-[#94A3B8]">North America · Europe · MENA · APAC</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-200 dark:border-orange-950/40 text-xs">
              <span className="font-bold text-[#EA580C] block mb-1">
                Prefer an instant video call?
              </span>
              <p className="text-[#4A5568] dark:text-[#94A3B8] leading-relaxed">
                You can directly reserve a 30-minute direct slot on our lead architect's Calendly anytime.
              </p>
              <a
                href="https://calendly.com/contactcorezeva/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-block font-bold text-[#EA580C] hover:underline"
              >
                Open Strategy Call Booking &rarr;
              </a>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1B2038] border border-[#EADFCB] dark:border-[#2A3254] shadow-xl">
              <h3 className="text-xl font-bold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
                Send Project Brief / RFP
              </h3>
              <p className="text-xs text-[#4A5568] dark:text-[#94A3B8] mb-6">
                Tell us about your requirements, existing stack, and expected milestone timeline.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-[#1B2238] dark:text-[#F6EFE3]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#4A5568] dark:text-[#94A3B8]">
                    We've received your brief. A Corezeva engineering lead will review your specifications and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Primary Need Dropdown */}
    <div>
      <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
        Primary Need
      </label>
      <select
        value={contactForm.serviceInterest}
        onChange={(e) => setContactForm({ ...contactForm, serviceInterest: e.target.value })}
        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
      >
        <option value="SaaS Product Engineering">SaaS Product Engineering</option>
        <option value="Custom Dashboards & Ops Consoles">Custom Dashboards & Ops Consoles</option>
        <option value="QA Test Automation (Playwright/Selenium)">QA Test Automation (Playwright/Selenium)</option>
        <option value="Applied AI & Agentic Workflows">Applied AI & Agentic Workflows</option>
        <option value="Restaurant Operations Suite Licensing">Restaurant Operations Suite Licensing</option>
        <option value="Other">Other (Please specify)</option>
      </select>
    </div>
                    {/* Estimated Budget with low-friction options */}
    <div>
      <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
        Estimated Budget (USD)
      </label>
      <select
        value={contactForm.budget}
        onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
      >
<option value="Flexible / Let's discuss">Not sure / Let's discuss on call</option>
        {/* <option value="< $500">&lt; $500</option>
        <option value="$500 - $3k">$500 - $3000</option>
        <option value="$3k - $7k">$3000 - $7000</option>
        <option value="$7k+">$7000+</option> */}
        <option value="Monthly Retainer Pod">Dedicated Monthly Sprint Pod</option>
        <option value="Fixed Price Engagement">Fixed Price Engagement</option>
      </select>
    </div>
  </div>
{/* Dynamic Textbox for "Other" */}
  {contactForm.serviceInterest === 'Other' && (
    <div className="animate-in fade-in duration-200">
      <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
        Please specify your requirement
      </label>
      <input
        type="text"
        required
        placeholder="e.g. Mobile App, Legacy Migration, DevOps Pipeline Setup..."
        value={contactForm.otherService}
        onChange={(e) => setContactForm({ ...contactForm, otherService: e.target.value })}
        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
      />
    </div>
  )}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2238] dark:text-[#F6EFE3] mb-1">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your problem statement, desired timeline, or current bottlenecks..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFF8EE]/50 dark:bg-[#12162A] border border-[#EADFCB] dark:border-[#2A3254] text-[#1B2238] dark:text-[#F6EFE3] focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B84F08] to-[#EA580C] hover:from-[#EA580C] hover:to-[#FFA03C] text-white text-xs font-bold shadow-md hover:shadow-glow-orange transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
>
  <Send className="w-4 h-4" />
  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Project Inquiry'}</span>
</button>

{errorMessage && (
  <p className="text-xs text-rose-500 font-medium text-center mt-2">
    {errorMessage}
  </p>
)}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
