interface PartnerBannerSectionProps {
  onCallbackClick: () => void;
}

export default function PartnerBannerSection({ onCallbackClick }: PartnerBannerSectionProps) {
  return (
    <section className="bg-primary py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase">
              Приведи клиента —<br />получи дивиденды
            </h2>
            <button
              onClick={onCallbackClick}
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold px-7 py-3 rounded transition-colors text-base tracking-widest uppercase"
            >
              Заказать звонок
              <span className="text-lg">📞</span>
            </button>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/fe2df26f-0cfa-4337-a624-cdf827be0ea7.jpg"
                alt="Договор и рубли"
                className="w-full max-w-sm rounded-lg object-cover opacity-95"
              />
              <div className="absolute bottom-6 right-4 bg-primary/80 border border-secondary/40 backdrop-blur-sm rounded px-4 py-3 flex flex-col gap-1">
                <span className="text-secondary font-bold text-sm tracking-wide">1. Выплата за заключение</span>
                <span className="text-secondary font-bold text-sm tracking-wide">2. Проценты от суммы контракта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}