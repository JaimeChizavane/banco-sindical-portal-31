
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bankingEmployee1 from '@/assets/banking-employee-1.jpg';
import bankingEmployee2 from '@/assets/banking-employee-2.jpg';
import bankingEmployee3 from '@/assets/banking-employee-3.jpg';
import bankingTeamMeeting from '@/assets/banking-team-meeting.jpg';
import bankManagerWoman from '@/assets/bank-manager-woman.jpg';

const heroSlides = [
  {
    id: 1,
    title: 'SNEB Inicia Negociações para Novo Acordo Colectivo de Trabalho (ACT)',
    description: 'Negociações com a Associação Moçambicana dos Bancos para o ACT 2025 em andamento.',
    image: bankingTeamMeeting,
    link: '/noticias/1',
  },
  {
    id: 2,
    title: 'Associação Moçambicana dos Bancos Discute Estratégias para o Sector',
    description: 'AMB propõe novas medidas para fortalecer o sector bancário nacional.',
    image: bankManagerWoman,
    link: '/noticias/2',
  },
  {
    id: 3,
    title: 'Expansão da Abrangência: SNEB Integra Mais Bancos e Microbancos',
    description: 'O sindicato expandiu a sua base para incluir trabalhadores de microbancos.',
    image: bankingEmployee1,
    link: '/noticias/3',
  },
  {
    id: 4,
    title: 'Acordo de Participação nos Lucros Garante Aumento de 25%',
    description: 'Negociações resultaram em aumento significativo na participação dos bancários nos resultados.',
    image: bankingEmployee2,
    link: '/noticias/4',
  },
  {
    id: 5,
    title: 'Campanha de Saúde Mental para Trabalhadores Bancários',
    description: 'Lançamento de programa de apoio psicológico para bancários e suas famílias.',
    image: bankingEmployee3,
    link: '/noticias/5',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background images with fade */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-banking-dark/85 via-banking-dark/70 to-banking-dark/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-banking-secondary/90 text-banking-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-6 animate-fade-in">
            Notícias em Destaque
          </span>

          <h1
            key={`title-${current}`}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in"
          >
            {slide.title}
          </h1>

          <p
            key={`desc-${current}`}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in"
          >
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-banking-secondary hover:bg-yellow-600 text-black font-semibold"
            >
              <Link to={slide.link}>Ler Artigo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-banking-accent hover:bg-green-700 text-white"
            >
              <Link to="/registo">Filie-se Agora</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 bg-banking-secondary'
                : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
