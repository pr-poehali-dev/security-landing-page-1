import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: 'Phone',
    title: 'Звонок/заявка',
    description: 'Вы звоните или оставляете заявку',
  },
  {
    icon: 'MapPin',
    title: 'Выезд и анализ',
    description: 'Наш специалист выезжает на осмотр объекта',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита 24/7',
    description: 'Мы начинаем охрану по индивидуальному плану',
  },
];

export default function StepsSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Всего 3 шага до надежной защиты
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Простая и понятная схема сотрудничества
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                      <Icon name={step.icon} className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-secondary/30 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
