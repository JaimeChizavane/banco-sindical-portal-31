
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import BankCarousel from '@/components/BankCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <BankCarousel />
      <Footer />
    </div>
  );
};

export default Index;
