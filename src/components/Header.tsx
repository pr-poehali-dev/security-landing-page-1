import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onCallbackClick: () => void;
}

export default function Header({ onCallbackClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/bucket/2f3ff866-5ed9-43c7-b639-75716624cc39.png" alt="СП Гарант" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">СП Гарант</h1>
              <p className="text-[10px] text-secondary font-medium">Надежность. Ответственность. Гарантия.</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('advantages')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              Услуги
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              Почему мы
            </button>
            <button onClick={() => scrollToSection('geography')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              География
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-secondary transition-colors text-sm font-medium">
              Контакты
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-xs text-secondary font-medium">ООО ЧОП "СП Гарант"</p>
              <div className="flex flex-col space-y-0.5">
                <a href="tel:+79789112112" className="text-white font-bold text-sm hover:text-secondary transition-colors">
                  +7 (978) 9-112-112
                </a>
                <a href="tel:88007777112" className="text-white font-bold text-sm hover:text-secondary transition-colors">
                  8 800 7777 112
                </a>
              </div>
              <p className="text-xs text-white">office@сп-гарант.рф</p>
            </div>
            <Button onClick={onCallbackClick} className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
              Заказать звонок
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} className="h-6 w-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col space-y-3 mb-4">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-secondary transition-colors text-left">
                Главная
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-white hover:text-secondary transition-colors text-left">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-secondary transition-colors text-left">
                Услуги
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-secondary transition-colors text-left">
                Почему мы
              </button>
              <button onClick={() => scrollToSection('geography')} className="text-white hover:text-secondary transition-colors text-left">
                География
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-secondary transition-colors text-left">
                Контакты
              </button>
            </nav>
            <div className="space-y-2">
              <p className="text-xs text-secondary">ООО ЧОП "СП Гарант"</p>
              <a href="tel:+79789112112" className="text-white font-bold text-lg block">
                +7 (978) 9-112-112
              </a>
              <a href="tel:88007777112" className="text-white font-bold text-lg block">
                8 800 7777 112
              </a>
              <p className="text-xs text-white">office@сп-гарант.рф</p>
              <Button onClick={onCallbackClick} className="bg-secondary hover:bg-secondary/90 text-primary font-bold w-full mt-3">
                Заказать звонок
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}