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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/bucket/2f3ff866-5ed9-43c7-b639-75716624cc39.png" alt="СП Гарант" className="h-12 w-12 lg:h-20 lg:w-20" />
            <div>
              <p className="hidden sm:block text-xs text-white/60 uppercase tracking-widest mb-0.5">Частное охранное предприятие</p>
              <h1 className="text-xl lg:text-3xl font-extrabold text-white leading-tight tracking-wide">СП Гарант</h1>
              <p className="hidden sm:block text-xs lg:text-sm text-secondary font-medium italic">Надежность. Ответственность. Гарантия.</p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-start space-x-4">
                <div className="text-right">
                  <p className="text-secondary font-bold text-xs mb-0.5">Москва</p>
                  <a href="tel:88007777112" className="text-white font-bold text-sm hover:text-secondary transition-colors block">
                    8 (800) 7777 112
                  </a>
                  <p className="text-white/60 text-[11px] leading-tight mt-0.5">123 112, Россия, г. Москва,<br/>Пресненская наб., 12, Башня Федерации</p>
                </div>
                <div className="text-right">
                  <p className="text-secondary font-bold text-xs mb-0.5">Республика Крым</p>
                  <a href="tel:+79789112112" className="text-white font-bold text-sm hover:text-secondary transition-colors block">
                    +7 (978) 9 112 112
                  </a>
                  <p className="text-white/60 text-[11px] leading-tight mt-0.5">295 017, Россия, Республика Крым,<br/>г. Симферополь, ул. Воровского, 17</p>
                </div>
                <div className="text-right">
                  <p className="text-secondary font-bold text-xs mb-0.5">Ростов-на-Дону</p>
                  <a href="tel:88007777112" className="text-white font-bold text-sm hover:text-secondary transition-colors block">
                    8 (800) 7777 112
                  </a>
                  <p className="text-white/60 text-[11px] leading-tight mt-0.5">344 002, Россия, г. Ростов-на-Дону,<br/>ул. Социалистическая, 74, БЦ Купеческий двор</p>
                </div>
                <div className="text-right">
                  <p className="text-secondary font-bold text-xs mb-0.5">Новые территории</p>
                  <a href="tel:88007777112" className="text-white font-bold text-sm hover:text-secondary transition-colors block">
                    8 (800) 7777 112
                  </a>
                  <p className="text-white/60 text-[11px] leading-tight mt-0.5">283 048, Россия, г. Донецк,<br/>ул. Артема, 130, ТРЦ Донецк-Сити</p>
                </div>
              </div>
              <Button onClick={onCallbackClick} className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
                Заказать звонок
              </Button>
            </div>
            <nav className="flex items-center space-x-5">
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
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-secondary font-bold text-xs mb-1">Москва</p>
                <a href="tel:88007777112" className="text-white font-bold text-base block">
                  8 (800) 7777 112
                </a>
                <p className="text-white/60 text-[11px] leading-tight mt-1">123 112, Россия, г. Москва, Пресненская наб., 12, Башня Федерации</p>
              </div>
              <div>
                <p className="text-secondary font-bold text-xs mb-1">Республика Крым</p>
                <a href="tel:+79789112112" className="text-white font-bold text-base block">
                  +7 (978) 9 112 112
                </a>
                <p className="text-white/60 text-[11px] leading-tight mt-1">295 017, Россия, Республика Крым, г. Симферополь, ул. Воровского, 17</p>
              </div>
              <div>
                <p className="text-secondary font-bold text-xs mb-1">Ростов-на-Дону</p>
                <a href="tel:88007777112" className="text-white font-bold text-base block">
                  8 (800) 7777 112
                </a>
                <p className="text-white/60 text-[11px] leading-tight mt-1">344 002, Россия, г. Ростов-на-Дону, ул. Социалистическая, 74, БЦ Купеческий двор</p>
              </div>
              <div>
                <p className="text-secondary font-bold text-xs mb-1">Новые территории</p>
                <a href="tel:88007777112" className="text-white font-bold text-base block">
                  8 (800) 7777 112
                </a>
                <p className="text-white/60 text-[11px] leading-tight mt-1">283 048, Россия, г. Донецк, ул. Артема, 130, ТРЦ Донецк-Сити</p>
              </div>
            </div>
            <Button onClick={onCallbackClick} className="bg-secondary hover:bg-secondary/90 text-primary font-bold w-full">
              Заказать звонок
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}