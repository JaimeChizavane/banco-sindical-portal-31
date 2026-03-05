import { useEffect, useRef } from 'react';

const banks = [
  { name: 'Millennium BIM', logo: 'https://logo.clearbit.com/millenniumbim.co.mz' },
  { name: 'BCI', logo: 'https://logo.clearbit.com/bci.co.mz' },
  { name: 'Standard Bank', logo: 'https://logo.clearbit.com/standardbank.co.mz' },
  { name: 'Moza Banco', logo: 'https://logo.clearbit.com/mozabanco.co.mz' },
  { name: 'BM', logo: '' },
  { name: 'Absa Bank', logo: 'https://logo.clearbit.com/absa.africa' },
  { name: 'Nedbank', logo: 'https://logo.clearbit.com/nedbank.co.za' },
  { name: 'FNB Moçambique', logo: 'https://logo.clearbit.com/fnb.co.za' },
  { name: 'Socremo', logo: '' },
  { name: 'Access Bank', logo: 'https://logo.clearbit.com/accessbankplc.com' },
  { name: 'Bayport', logo: '' },
  { name: 'MBC', logo: '' },
  { name: 'Banco Letshego', logo: '' },
  { name: 'Gapi SI', logo: '' },
  { name: 'CCOM', logo: '' },
  { name: 'Vista Bank', logo: 'https://logo.clearbit.com/vistabankgroup.com' },
  { name: 'First Capital Bank', logo: 'https://logo.clearbit.com/fcb.co.mz' },
  { name: 'Microbanco Confiança', logo: '' },
  { name: 'UBA', logo: 'https://logo.clearbit.com/ubagroup.com' },
  { name: 'Banco Mais', logo: '' },
  { name: 'Ecobank', logo: 'https://logo.clearbit.com/ecobank.com' },
  { name: 'Unacrédito', logo: '' },
  { name: 'CPC', logo: '' },
  { name: 'DP Services', logo: '' },
  { name: 'AFP', logo: '' },
  { name: 'Banco Sólido', logo: '' },
];

const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
    <span className="text-xs font-semibold text-gray-500 text-center px-2 leading-tight">{name}</span>
  </div>
);

const BankCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate for infinite loop
  const allBanks = [...banks, ...banks];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-banking-primary text-center mb-3">
          Instituições Bancárias Representadas
        </h2>
        <p className="text-gray-600 text-center mb-10">
          O SNEB está presente em 26 instituições financeiras em Moçambique.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allBanks.map((bank, i) => (
            <div
              key={`${bank.name}-${i}`}
              className="flex-shrink-0 w-[140px] h-[90px] rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-center
                         grayscale hover:grayscale-0 hover:scale-105 hover:shadow-lg
                         transition-all duration-300 cursor-pointer"
              title={bank.name}
            >
              {bank.logo ? (
                <img
                  src={bank.logo}
                  alt={bank.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={bank.logo ? 'hidden' : ''}>
                <PlaceholderLogo name={bank.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankCarousel;
