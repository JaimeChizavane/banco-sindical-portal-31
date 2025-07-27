
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import bankingEmployee1 from '@/assets/banking-employee-1.jpg';
import bankingEmployee2 from '@/assets/banking-employee-2.jpg';
import bankingEmployee3 from '@/assets/banking-employee-3.jpg';

const HeroSection = () => {
  const carouselImages = [
    bankingEmployee1,
    bankingEmployee2,
    bankingEmployee3
  ];

  return (
    <section className="relative bg-gradient-to-br from-banking-primary via-banking-accent to-banking-brown min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Sindicato Nacional dos
              <span className="block text-banking-secondary">Empregados Bancários</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 animate-slide-in">
              Defendendo os direitos e interesses dos trabalhadores bancários há mais de 50 anos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button asChild size="lg" className="bg-banking-secondary hover:bg-yellow-600 text-black font-semibold">
                <Link to="/registro">Associe-se Agora</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Empregados bancários ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-banking-primary/40 to-transparent"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
