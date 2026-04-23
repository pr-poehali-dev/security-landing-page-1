import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import PdfModal from '@/components/PdfModal';
import { privacyPolicyContent, personalDataConsentContent, smsConsentContent } from '@/data/legalDocs';

interface FooterProps {
  onCallbackClick: () => void;
}

const DOCS = [
  { key: 'privacy', title: 'Политика конфиденциальности', content: privacyPolicyContent },
  { key: 'personal', title: 'Согласие на обработку персональных данных', content: personalDataConsentContent },
  { key: 'sms', title: 'Согласие на отправку СМС', content: smsConsentContent },
];

export default function Footer({ onCallbackClick }: FooterProps) {
  const [activeDoc, setActiveDoc] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contacts" className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Лого + email + режим работы */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://cdn.poehali.dev/projects/45534d43-7897-42f9-b9af-85fef1d32bb2/bucket/2f3ff866-5ed9-43c7-b639-75716624cc39.png" alt="СП Гарант" className="h-14 w-14 sm:h-20 sm:w-20 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mb-0.5">Частное охранное предприятие</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">СП Гарант</h3>
                <p className="text-xs sm:text-sm text-secondary italic mt-0.5">Надежность. Ответственность. Гарантия.</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-3">ООО "ЧОП "СП Гарант"</p>
            <div className="space-y-2 mb-3">
              <a href="mailto:office@сп-гарант.рф" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="Mail" className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">office@сп-гарант.рф</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Clock" className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Пн–Пт: 08:00–17:00</span>
              </div>
            </div>
            <p className="text-white/60 text-xs">
              Лицензия на осуществление частной охранной деятельности Л056-00106-91/00034270
            </p>
          </div>

          {/* Столбик 1: Москва + Республика Крым */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-3">Москва</h4>
              <div className="space-y-2">
                <div>
                  <a href="tel:88007777112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                    <Icon name="Phone" className="h-4 w-4" />
                    <span className="font-bold text-sm">8 (800) 7777 112</span>
                  </a>
                  <p className="text-white/50 text-xs mt-0.5 ml-6">(многоканальный)</p>
                </div>
                <div className="flex items-start space-x-2 text-white/80">
                  <Icon name="MapPin" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-xs">123 112, Россия, г. Москва, Пресненская наб., 12, Башня Федерации</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Республика Крым</h4>
              <div className="space-y-2">
                <a href="tel:+79789112112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span className="font-bold text-sm">+7 (978) 9 112 112</span>
                </a>
                <div className="flex items-start space-x-2 text-white/80">
                  <Icon name="MapPin" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-xs">295 017, Россия, Республика Крым, г. Симферополь, ул. Воровского, 17, БЦ Мараканд</span>
                </div>
              </div>
            </div>
          </div>

          {/* Столбик 2: Новые территории + Ростов-на-Дону */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-3">Новые территории</h4>
              <div className="space-y-2">
                <div>
                  <a href="tel:88007777112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                    <Icon name="Phone" className="h-4 w-4" />
                    <span className="font-bold text-sm">8 (800) 7777 112</span>
                  </a>
                  <p className="text-white/50 text-xs mt-0.5 ml-6">(многоканальный)</p>
                </div>
                <div className="flex items-start space-x-2 text-white/80">
                  <Icon name="MapPin" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-xs">283 048, Россия, г. Донецк, ул. Артема, 130, ТРЦ Донецк-Сити</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Ростов-на-Дону</h4>
              <div className="space-y-2">
                <div>
                  <a href="tel:88007777112" className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                    <Icon name="Phone" className="h-4 w-4" />
                    <span className="font-bold text-sm">8 (800) 7777 112</span>
                  </a>
                  <p className="text-white/50 text-xs mt-0.5 ml-6">(многоканальный)</p>
                </div>
                <div className="flex items-start space-x-2 text-white/80">
                  <Icon name="MapPin" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-xs">344 002, Россия, г. Ростов-на-Дону, ул. Социалистическая, 74, БЦ Купеческий двор</span>
                </div>
              </div>
            </div>
          </div>

          {/* Навигация */}
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
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <p>© 2026 ООО "ЧОП "СП Гарант". Все права защищены.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
              {DOCS.map((doc) => (
                <button
                  key={doc.key}
                  onClick={() => setActiveDoc({ title: doc.title, content: doc.content })}
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
          content={activeDoc.content}
        />
      )}
    </footer>
  );
}