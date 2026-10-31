import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, PageId } from './components/Navbar';
import { BookingModal } from './components/BookingModal';
import { 
  HeroSection, 
  ServicesSection, 
  WorkSection, 
  ProductsSection, 
  TestimonialsHomeSection, 
  AboutSection, 
  Footer 
} from './components/HomeSections';
import { ContactUsSection } from './components/ContactUsSection';
import { 
  ServicesPage, 
  WorkPage, 
  ProductsPage, 
  PartnerPage, 
  AboutPage, 
  FAQPage, 
  PrivacyPolicyPage, 
  TermsOfServicePage, 
  SecurityStandardsPage 
} from './pages/Pages';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingOpen, setBookingOpen] = useState(false);

  // Scroll to top on page change
// Inside AppContent component in src/App.tsx:

const [targetSection, setTargetSection] = useState<string | null>(null);

const navigateTo = (page: PageId, targetId?: string) => {
  setCurrentPage(page);
  setTargetSection(targetId || null);
  if (!targetId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE] text-[#1B2238] dark:bg-[#12162A] dark:text-[#F6EFE3] transition-colors duration-300 selection:bg-[#EA580C] selection:text-white">
      {/* Dynamic Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={navigateTo}
            />
            <ServicesSection
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={navigateTo}
            />
            <WorkSection
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={navigateTo}
            />
            <ProductsSection
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={navigateTo}
            />
            <TestimonialsHomeSection />
            <AboutSection
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={navigateTo}
            />
            {/* Requirement 7: Contact Us section integrated on Home Screen */}
            <ContactUsSection />
          </>
        )}

        {currentPage === 'services' && (
  <ServicesPage
    onNavigate={navigateTo}
    onOpenBooking={() => setBookingOpen(true)}
    targetId={targetSection}
  />
)}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'partner' && (
          <PartnerPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactUsSection isStandalonePage={true} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'terms' && (
          <TermsOfServicePage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'security' && (
          <SecurityStandardsPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={navigateTo}
      />

      {/* Calendly Booking / Strategy Call Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
