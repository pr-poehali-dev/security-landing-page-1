import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const regions = [
  { name: 'Крым', active: true },
  { name: 'Ростов-на-Дону', active: true },
  { name: 'Москва и Московская область', active: true },
  { name: 'Присоединенные регионы', active: true },
];

export default function GeographySection() {
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
    <section id="geography" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          География нашей работы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Работаем по всей территории Российской Федерации
        </p>
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 mb-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjNmI4MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
            <div className="relative flex items-center justify-center">
              <Icon name="Map" className="h-64 w-64 text-primary/20" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-secondary transition-all ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name="MapPin" className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-lg font-medium text-primary">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
