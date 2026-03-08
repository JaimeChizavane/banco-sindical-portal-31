import { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'SNEBA',
    fullName: 'Sindicato Nacional dos Empregados Bancários de Angola',
    logo: '/lovable-uploads/sneba.png',
    description: 'Sindicato irmão que representa os trabalhadores bancários de Angola.',
  },
  {
    name: 'SBN – Portugal',
    fullName: 'Sindicato dos Trabalhadores do Setor Financeiro de Portugal',
    logo: '/lovable-uploads/sbn-logo.jpg',
    description: 'Parceiro estratégico na defesa dos trabalhadores financeiros lusófonos.',
  },
  {
    name: 'CPLP',
    fullName: 'Sindicatos Financeiros da CPLP',
    logo: '/lovable-uploads/cplp-logo.png',
    description: 'Rede de cooperação sindical entre países da Comunidade dos Países de Língua Portuguesa.',
  },
  {
    name: 'UNI Global Union',
    fullName: 'UNI Global Union',
    logo: null,
    description: 'Federação sindical internacional que representa trabalhadores de serviços e do sector financeiro em todo o mundo.',
  },
];

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.4;

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

  const allPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-banking-primary text-center mb-3">
          Parceiros Internacionais
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          O SNEB mantém cooperação e diálogo com organizações sindicais e financeiras internacionais, fortalecendo a defesa dos trabalhadores do sector financeiro.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex-shrink-0 w-[260px] rounded-xl border border-border bg-card p-6 flex flex-col items-center
                         hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-[80px] flex items-center justify-center mb-4">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
                    <span className="text-sm font-semibold text-muted-foreground text-center px-2">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold text-banking-primary text-center mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
