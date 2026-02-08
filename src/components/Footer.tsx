import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onCallbackClick: () => void;
}

export default function Footer({ onCallbackClick }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contacts" className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Shield" className="h-10 w-10 text-secondary" />
              <div>
                <h3 className="text-2xl font-bold">СП Гарант</h3>
                <p className="text-xs text-secondary">Надежность. Ответственность. Гарантия.</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">ООО ЧОП "СП Гарант"</p>
            <p className="text-white/60 text-sm mt-2">
              Лицензия на вооруженную охрану и работу с конфиденциальной информацией
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79789112211" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
                <span className="font-bold">+7 (978) 911-22-11</span>
              </a>
              <a href="mailto:офис@сп-гарант.рф" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
                <span>офис@сп-гарант.рф</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Навигация</h4>
            <nav className="space-y-2 mb-6">
              <button onClick={() => scrollToSection('advantages')} className="block text-white/80 hover:text-secondary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-white/80 hover:text-secondary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('why-us')} className="block text-white/80 hover:text-secondary transition-colors">
                Почему мы
              </button>
              <button onClick={() => scrollToSection('geography')} className="block text-white/80 hover:text-secondary transition-colors">
                География
              </button>
            </nav>
            <Button onClick={onCallbackClick} className="bg-secondary hover:bg-secondary/90 text-primary font-bold w-full">
              Заказать звонок
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/60">
            <p>© 2024 ООО ЧОП "СП Гарант". Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Согласие на обработку данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
