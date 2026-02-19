import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import WhyUsSection from '@/components/WhyUsSection';
import StepsSection from '@/components/StepsSection';
import GeographySection from '@/components/GeographySection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import CallbackModal from '@/components/CallbackModal';

export default function Index() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const handleCallbackClick = () => {
    setIsCallbackModalOpen(true);
  };

  const handleServicesClick = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Header onCallbackClick={handleCallbackClick} />
      <HeroSection onCalculateClick={handleCallbackClick} onServicesClick={handleServicesClick} />
      <AdvantagesSection />
      <WhyUsSection />
      <StepsSection />
      <GeographySection />
      <ServicesSection />
      <Footer onCallbackClick={handleCallbackClick} />
      <CallbackModal open={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-primary/95 backdrop-blur-sm border-t border-white/10 lg:hidden">
        <button
          onClick={handleCallbackClick}
          className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 rounded-lg text-base transition-colors"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  );
}