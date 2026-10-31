import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Calendar, Menu, X, ArrowUpRight, MessageSquareQuote, Mail } from 'lucide-react';

export type PageId = 'home' | 'services' | 'work' | 'products' | 'partner' | 'about' | 'faq' | 'contact' | 'privacy' | 'terms' | 'security';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'products', label: 'Our Products' },
    { id: 'partner', label: 'Become a Partner' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'glass-nav border-b border-[#EADFCB] dark:border-[#2A3254] py-3 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div onClick={() => handleLinkClick('home')}>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-[#EA580C] dark:text-[#FFA03C] bg-orange-500/10 font-bold'
                    : 'text-[#4A5568] dark:text-[#94A3B8] hover:text-[#1B2238] dark:hover:text-[#F6EFE3] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-[#4A5568] dark:text-[#94A3B8] hover:text-[#1B2238] dark:hover:text-[#F6EFE3] bg-white/80 dark:bg-white/5 border border-[#EADFCB] dark:border-[#2A3254] transition-all hover:scale-105"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-navy-deep" />}
            </button>

            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#B84F08] to-[#EA580C] hover:from-[#EA580C] hover:to-[#FFA03C] text-white shadow-sm hover:shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1B2238] dark:text-[#F6EFE3] bg-white/80 dark:bg-white/5 border border-[#EADFCB] dark:border-[#2A3254]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-[#EADFCB] dark:border-[#2A3254] px-4 pt-3 pb-6">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-orange-500/10 text-[#EA580C] dark:text-[#FFA03C] font-bold'
                    : 'text-[#1B2238] dark:text-[#F6EFE3] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EA580C] text-white font-semibold text-base shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
