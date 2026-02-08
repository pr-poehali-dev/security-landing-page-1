import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    icon: 'Award',
    title: 'Высокое качество услуг',
    description: 'Внедренные стандарты ISO и собственные регламенты',
  },
  {
    icon: 'Users',
    title: 'Индивидуальный подход',
    description: 'Персональный менеджер и гибкие условия договора для каждого клиента',
  },
  {
    icon: 'ShieldCheck',
    title: 'Полная конфиденциальность',
    description: 'Строгое соблюдение коммерческой тайны и NDA',
  },
  {
    icon: 'Clock',
    title: 'Дисциплина и ответственность',
    description: 'Высокий уровень дисциплины и материальная ответственность',
  },
  {
    icon: 'Settings',
    title: 'Системная работа',
    description: 'Четкие системные процессы и контролируемые стандарты работы',
  },
  {
    icon: 'UserCheck',
    title: 'Квалифицированные кадры',
    description: 'Весь персонал прошел профессиональную подготовку и регулярную аттестацию',
  },
];

export default function AdvantagesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="advantages" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Ключевые преимущества работы с нами
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Полная лицензия на вооруженную охрану и работу с конфиденциальной информацией
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
