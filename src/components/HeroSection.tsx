
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-banking-primary via-banking-accent to-banking-brown min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sindicato Nacional dos
            <span className="block text-banking-secondary">Empregados Bancários</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100 animate-slide-in">
            Defendendo os direitos e interesses dos trabalhadores bancários há mais de 50 anos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-banking-secondary hover:bg-yellow-600 text-black font-semibold">
              <Link to="/registro">Associe-se Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-banking-primary">
              <Link to="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
