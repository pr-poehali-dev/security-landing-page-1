import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Tariff {
  id: string;
  name: string;
  arming: string;
  experience: string;
  qualification: string;
  price: string;
}

const TARIFFS: Tariff[] = [
  {
    id: 'econom',
    name: 'ТАРИФ «ЭКОНОМ»',
    arming: 'Без оружия',
    experience: 'Более года',
    qualification: '4 разряд',
    price: 'от 120 000 ₽',
  },
  {
    id: 'business',
    name: 'ТАРИФ «БИЗНЕС»',
    arming: 'Спецсредства',
    experience: 'Более 3 лет',
    qualification: '4/5 разряд',
    price: 'от 150 000 ₽',
  },
  {
    id: 'vip',
    name: 'ТАРИФ «V.I.P»',
    arming: 'Служебное',
    experience: 'Более 5 лет',
    qualification: '5/6 разряд',
    price: 'от 250 000 ₽',
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
          Цены на профессиональную охрану объектов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFFS.map((tariff) => {
            const isSelected = selected === tariff.id;
            return (
              <div
                key={tariff.id}
                onClick={() => handleSelect(tariff.id)}
                className="cursor-pointer flex flex-col rounded-sm overflow-hidden border border-white/10 transition-all duration-300"
                style={{
                  transform: isSelected ? 'scale(1.07)' : 'scale(1)',
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
