import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: 'ShieldAlert',
    title: 'Вооруженная охрана',
    items: [
      'Охрана коммерческих объектов',
      'Сопровождение грузов',
      'Защита VIP-персон',
      'Охрана мероприятий',
    ],
  },
  {
    icon: 'Shield',
    title: 'Невооруженная охрана',
    items: [
      'Охрана офисных зданий',
      'Пропускной режим',
      'Обеспечение порядка',
      'Консультирование по безопасности',
    ],
  },
];

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Наши основные услуги
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Полный спектр охранных услуг с лицензией на вооруженную охрану
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name={service.icon} className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Icon name="Check" className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
