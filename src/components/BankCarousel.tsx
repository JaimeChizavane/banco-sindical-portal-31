import { useEffect, useRef } from 'react';

const banks = [
  { name: 'Millennium BIM', logo: '/lovable-uploads/millennium-bim.png' },
  { name: 'BCI', logo: '/lovable-uploads/bci.png' },
  { name: 'Standard Bank', logo: '/lovable-uploads/standard-bank.png' },
  { name: 'Moza Banco', logo: '/lovable-uploads/moza.png' },
  { name: 'BM', logo: 'https://placehold.co/200x100?text=BM' },
  { name: 'Absa Bank', logo: '/lovable-uploads/absa.png' },
  { name: 'Nedbank', logo: '/lovable-uploads/nedbank.webp' },
  { name: 'FNB Moçambique', logo: '/lovable-uploads/fnb.svg' },
  { name: 'Socremo', logo: '/lovable-uploads/socremo.png' },
  { name: 'Access Bank', logo: '/lovable-uploads/access-bank.png' },
  { name: 'Bayport', logo: '/lovable-uploads/bayport.png' },
  { name: 'MBC', logo: '/lovable-uploads/mbc.png' },
  { name: 'Banco Letshego', logo: '/lovable-uploads/letshego.png' },
  { name: 'Gapi SI', logo: '/lovable-uploads/gapi.jpg' },
  { name: 'CCOM', logo: 'https://placehold.co/200x100?text=CCOM' },
  { name: 'Vista Bank', logo: '/lovable-uploads/vista-bank.png' },
  { name: 'First Capital Bank', logo: '/lovable-uploads/fcb.jpg' },
  { name: 'Microbanco Confiança', logo: '/lovable-uploads/microbanco-confianca.jpg' },
  { name: 'UBA', logo: '/lovable-uploads/uba.png' },
  { name: 'Banco Mais', logo: '/lovable-uploads/banco-mais.png' },
  { name: 'Ecobank', logo: '/lovable-uploads/ecobank.png' },
  { name: 'Unacrédito', logo: 'https://placehold.co/200x100?text=Unacredito' },
  { name: 'CPC', logo: 'https://placehold.co/200x100?text=CPC' },
  { name: 'DP Services', logo: 'https://placehold.co/200x100?text=DP+Services' },
  { name: 'AFP', logo: 'https://placehold.co/200x100?text=AFP' },
  { name: 'Banco Sólido', logo: '/lovable-uploads/banco-solido.png' },
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
