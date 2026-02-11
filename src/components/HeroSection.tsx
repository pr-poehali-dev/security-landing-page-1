import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCalculateClick: () => void;
  onServicesClick: () => void;
}

export default function HeroSection({ onCalculateClick, onServicesClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/25012b9c-a4e1-4838-963a-1a053f9f96a0.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Охрана и безопасность<br />вашего бизнеса 24/7
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Вооруженная и невооруженная охрана объектов, имущества и мероприятий с 2016 года
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onCalculateClick}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-6 w-full sm:w-auto"
          >
            Рассчитать стоимость
          </Button>
          <Button
            onClick={onServicesClick}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 w-full sm:w-auto"
          >
            Наши услуги
          </Button>
        </div>
      </div>
    </section>
  );
}