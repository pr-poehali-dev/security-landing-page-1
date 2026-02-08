import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '8+', label: 'лет на рынке охранных услуг' },
  { number: '500+', label: 'успешно охраняемых объектов и единиц имущества' },
  { number: '100%', label: 'консультирование и правовые рекомендации по защите' },
  { number: '100+', label: 'обеспечено порядка на массовых мероприятиях' },
];

export default function WhyUsSection() {
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
    <section id="why-us" ref={sectionRef} className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 border-2 border-secondary rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border-2 border-secondary rounded-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Почему нам доверяют безопасность
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Внедрение пропускных и внутриобъектовых режимов "под ключ"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">{stat.number}</div>
              <p className="text-white/90 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
