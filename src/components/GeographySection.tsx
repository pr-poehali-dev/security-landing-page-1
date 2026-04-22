/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const regions = [
  { name: 'Крым', coords: [44.948636, 34.100187] },
  { name: 'Ростов-на-Дону', coords: [47.222583, 39.713491] },
  { name: 'Москва и МО', coords: [55.760160, 37.608244] },
  { name: 'Новые регионы', coords: [48.024435, 37.789873] },
];

export default function GeographySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const placemarksRef = useRef<any[]>([]);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const initMap = useCallback(() => {
    if (!mapContainerRef.current || mapRef.current) return;
    const ymaps = (window as any).ymaps;
    if (!ymaps) return;

    mapRef.current = new ymaps.Map(mapContainerRef.current, {
      center: [48.5, 37.5],
      zoom: 5,
      controls: ['zoomControl'],
    }, {
      suppressMapOpenBlock: true,
    });

    regions.forEach((region, index) => {
      const placemark = new ymaps.Placemark(
        region.coords,
        {
          hintContent: region.name,
          balloonContent: `<strong>${region.name}</strong><br/>СП Гарант — охрана объектов`,
        },
        {
          preset: 'islands#darkBlueCircleDotIcon',
          iconColor: '#1FB6BF',
        }
      );

      placemark.events.add('click', () => {
        setActiveRegion(index);
      });

      mapRef.current.geoObjects.add(placemark);
      placemarksRef.current.push(placemark);
    });

    setMapReady(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const tryInit = () => {
      const ymaps = (window as any).ymaps;
      if (ymaps) {
        ymaps.ready(initMap);
      } else {
        setTimeout(tryInit, 300);
      }
    };

    tryInit();

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
        placemarksRef.current = [];
        setMapReady(false);
      }
    };
  }, [isVisible, initMap]);

  useEffect(() => {
    if (!mapReady || !mapRef.current) return;

    placemarksRef.current.forEach((placemark, index) => {
      if (index === activeRegion) {
        placemark.options.set({
          preset: 'islands#redCircleDotIcon',
          iconColor: '#FBC159',
        });
      } else {
        placemark.options.set({
          preset: 'islands#darkBlueCircleDotIcon',
          iconColor: '#1FB6BF',
        });
      }
    });

    if (activeRegion !== null) {
      const region = regions[activeRegion];
      mapRef.current.panTo(region.coords, { flying: true, duration: 500 });
    }
  }, [activeRegion, mapReady]);

  const handleRegionClick = (index: number) => {
    setActiveRegion(activeRegion === index ? null : index);
  };

  return (
    <section id="geography" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary text-center mb-4">
          География нашей работы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Работаем по всей территории Российской Федерации
        </p>
        <div className="max-w-5xl mx-auto">
          <div
            className={`relative rounded-2xl overflow-hidden mb-8 shadow-lg border border-border ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div
              ref={mapContainerRef}
              className="w-full h-[400px] md:h-[480px]"
            />
            {!mapReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <Icon name="Map" className="h-32 w-32 text-primary/20 animate-pulse" />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => handleRegionClick(index)}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer text-left ${
                  activeRegion === index
                    ? 'border-secondary bg-secondary/10 shadow-md'
                    : 'border-border hover:border-secondary/50'
                } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon
                  name="MapPin"
                  className={`h-6 w-6 flex-shrink-0 transition-all ${
                    activeRegion === index ? 'text-secondary' : 'text-accent'
                  }`}
                />
                <span className={`text-lg font-medium transition-colors ${
                  activeRegion === index ? 'text-secondary' : 'text-primary'
                }`}>
                  {region.name}
                </span>
                {activeRegion === index && (
                  <Icon name="MapPin" className="h-5 w-5 text-secondary ml-auto animate-bounce" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}