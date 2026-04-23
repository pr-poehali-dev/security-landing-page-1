import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Tariff {
  id: string;
  name: string;
  arming: string;
  experience: string;
  qualification: string;
  schedule: string;
  extras?: { text: string; bold?: boolean; underline?: boolean }[];
  price: string;
}

const TARIFFS: Tariff[] = [
  {
    id: 'basic',
    name: 'ТАРИФ «БАЗОВЫЙ»',
    arming: 'Спецсредства',
    experience: 'Более года',
    qualification: '4 разряд',
    schedule: '24 часа',
    extras: [
      { text: 'Контроль доступа (пропускной режим)' },
      { text: 'Вызов экстренных служб' },
    ],
    price: 'от 145 000 ₽',
  },
  {
    id: 'business',
    name: 'ТАРИФ «БИЗНЕС»',
    arming: 'Спецсредства',
    experience: 'Более 3 лет',
    qualification: '4 разряд',
    schedule: '24 часа',
    extras: [
      { text: 'Контроль доступа (пропускной режим)' },
      { text: 'Вызов вооруженной мобильной группы 24/7' },
      { text: 'Вызов экстренных служб' },
      { text: 'Патрулирование объекта' },
      { text: 'Регулярные проверки инспекторской службой 24/7' },
      { text: 'Индивидуальный менеджер' },
      { text: 'Страхование ответственности' },
      { text: 'Ведение журнала посещений' },
      { text: 'Отчет по форме' },
    ],
    price: 'от 180 000 ₽',
  },
  {
    id: 'prestige',
    name: 'ТАРИФ «ПРЕСТИЖ»',
    arming: 'Спецсредства',
    experience: 'Более 5 лет',
    qualification: '4 разряд',
    schedule: '24 часа',
    extras: [
      { text: 'Контроль доступа (пропускной режим)' },
      { text: 'Вызов вооруженной мобильной группы 24/7' },
      { text: 'Вызов экстренных служб' },
      { text: 'Патрулирование объекта' },
      { text: 'Персональный менеджер' },
      { text: 'Страхование ответственности' },
      { text: 'Ведение журнала посещений' },
      { text: 'Отчет в онлайн режиме во внутреннем мессенджере' },
      { text: 'Еженедельная сводная отчетность по показателям' },
      { text: 'Регулярные проверки инспекторской службой 24/7' },
      { text: 'Услуги полиграфа до 2 услуг в месяц', underline: true },
      { text: 'Проверка безопасности контрагентов и сотрудников заказчика до 5 проверок в месяц', underline: true },
    ],
    price: 'от 205 000 ₽',
  },
  {
    id: 'spec',
    name: 'ТАРИФ «СПЕЦ»',
    arming: 'Специальное огнестрельное',
    experience: 'Более 5 лет',
    qualification: '6 разряд',
    schedule: '24 часа',
    extras: [
      { text: 'Все функции пакета «Престиж»' },
      { text: 'Комплекс мер физической защиты с правом применения табельного оружия для отражения вооруженного нападения' },
    ],
    price: 'от 365 000 ₽',
  },
];

interface TariffsSectionProps {
  onOrderClick: (tariff: string) => void;
}

export default function TariffsSection({ onOrderClick }: TariffsSectionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#0d1f2d]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-8 md:mb-12">
          Цены на профессиональную охрану объектов
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {TARIFFS.map((tariff) => {
            const isSelected = selected === tariff.id;
            return (
              <div
                key={tariff.id}
                onClick={() => handleSelect(tariff.id)}
                className="cursor-pointer flex flex-col rounded-sm overflow-hidden border border-white/10 transition-all duration-300"
                style={{
                  transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                  boxShadow: isSelected
                    ? '0 0 0 2px #e8b84b, 0 8px 32px rgba(232,184,75,0.25)'
                    : '0 2px 12px rgba(0,0,0,0.3)',
                  zIndex: isSelected ? 10 : 1,
                  position: 'relative',
                }}
              >
                <div className="bg-[#162535] px-6 pt-7 pb-6 flex-1 flex flex-col">
                  <h3 className="text-white font-extrabold text-base text-center tracking-wide mb-6">
                    {tariff.name}
                  </h3>

                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-secondary text-sm font-medium underline underline-offset-2 decoration-secondary/40 whitespace-nowrap">
                        Вооружение:
                      </span>
                      <span className="text-white text-sm text-right">{tariff.arming}</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-secondary text-sm font-medium underline underline-offset-2 decoration-secondary/40 whitespace-nowrap">
                        Опыт работы:
                      </span>
                      <span className="text-white text-sm text-right">{tariff.experience}</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-secondary text-sm font-medium underline underline-offset-2 decoration-secondary/40 whitespace-nowrap">
                        Проф подготовка:
                      </span>
                      <span className="text-white text-sm text-right">{tariff.qualification}</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-secondary text-sm font-medium underline underline-offset-2 decoration-secondary/40 whitespace-nowrap">
                        График работы:
                      </span>
                      <span className="text-white text-sm text-right">{tariff.schedule}</span>
                    </div>
                    {tariff.extras && tariff.extras.length > 0 && (
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-secondary text-sm font-medium underline underline-offset-2 decoration-secondary/40 block mb-2">
                          Доп. услуги:
                        </span>
                        <ul className="space-y-1">
                          {tariff.extras.map((extra, i) => (
                            <li key={i} className="text-white text-sm flex gap-2 items-start">
                              <Icon name="CircleCheck" size={15} className="text-secondary mt-0.5 shrink-0" />
                              <span className={extra.bold ? 'font-bold' : extra.underline ? 'underline underline-offset-2' : ''}>{extra.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(tariff.id);
                      onOrderClick(tariff.name);
                    }}
                    className="w-full bg-[#1a6bb5] hover:bg-[#1558a0] text-white font-bold py-3 rounded-sm"
                  >
                    Заказать
                  </Button>
                </div>

                <div className="bg-[#0d1a26] border-t border-white/10 px-6 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white/50 text-xs leading-tight">Стоимость в</p>
                    <p className="text-white/50 text-xs leading-tight">месяц</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-extrabold text-xl leading-tight">{tariff.price}</p>
                    <p className="text-white/50 text-xs">руб./месяц</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}