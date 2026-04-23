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
            <div className="relative w-full max-w-sm">
              <img
                src="https://cdn.poehali.dev/files/9d3546e9-b0a8-44ff-b765-e455fba88317.png"
                alt="Договор и рубли"
                className="w-full object-cover rounded-lg"
              />
              {/* Маска: плавное затухание по всем краям */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: `
                    radial-gradient(ellipse at center, transparent 40%, var(--color-primary) 85%)
                  `,
                }}
              />
              <div className="absolute bottom-3 right-2 sm:bottom-6 sm:right-4 bg-primary/80 border border-secondary/40 backdrop-blur-sm rounded px-3 py-2 sm:px-4 sm:py-3 flex flex-col gap-1">
                <span className="text-secondary font-bold text-xs sm:text-sm tracking-wide">1. Выплата за заключение</span>
                <span className="text-secondary font-bold text-xs sm:text-sm tracking-wide">2. Проценты от суммы контракта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}