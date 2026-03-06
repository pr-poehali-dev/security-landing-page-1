import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import PdfModal from '@/components/PdfModal';

interface FooterProps {
  onCallbackClick: () => void;
}

const DOCS = [
  { key: 'privacy', title: 'Политика конфиденциальности', url: '' },
  { key: 'personal', title: 'Согласие на обработку персональных данных', url: '' },
  { key: 'sms', title: 'Согласие на отправку СМС', url: '' },
];

export default function Footer({ onCallbackClick }: FooterProps) {
  const [activeDoc, setActiveDoc] = useState<{ title: string; url: string } | null>(null);

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
              <img src="https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/bucket/2f3ff866-5ed9-43c7-b639-75716624cc39.png" alt="СП Гарант" className="h-16 w-16" />
              <div>
                <h3 className="text-2xl font-bold">СП Гарант</h3>
                <p className="text-xs text-secondary italic">Надежность. Ответственность. Гарантия.</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">ООО "ЧОП "СП Гарант"</p>
            <p className="text-white/60 text-sm mt-2">
              Лицензия на осуществление частной охранной деятельности Л056-00106-91/00034270
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs mb-1">Москва</p>
                <a href="tel:88007777112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                  <span className="font-bold">8 (800) 7777 112</span>
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">Крым</p>
                <a href="tel:+79789112112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                  <span className="font-bold">+7 (978) 9 112 112</span>
                </a>
              </div>
              <a href="mailto:office@сп-гарант.рф" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
                <span>office@сп-гарант.рф</span>
              </a>
              <div className="flex items-start space-x-2 text-white/80">
                <Icon name="MapPin" className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 112, Россия, г. Москва, Пресненская наб., 12, Башня Федерации</span>
              </div>
              <div className="flex items-start space-x-2 text-white/80">
                <Icon name="MapPin" className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">295 017, Россия, Республика Крым, г. Симферополь, ул. Воровского, 17</span>
              </div>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/60">
            <p>© 2026 ООО "ЧОП "СП Гарант". Все права защищены.</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              {DOCS.map((doc) => (
                <button
                  key={doc.key}
                  onClick={() => setActiveDoc(doc)}
                  className="text-left hover:text-secondary transition-colors underline underline-offset-2 decoration-white/30 hover:decoration-secondary"
                >
                  {doc.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeDoc && (
        <PdfModal
          isOpen={!!activeDoc}
          onClose={() => setActiveDoc(null)}
          title={activeDoc.title}
          pdfUrl={activeDoc.url}
        />
      )}
    </footer>
  );
}