
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Nova Convenção Colectiva 2024 Aprovada',
      excerpt: 'Acordos importantes sobre reajuste salarial e benefícios foram estabelecidos para o próximo ano.',
      date: '15 de Dezembro, 2024',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Programa de Capacitação Profissional',
      excerpt: 'Novos cursos gratuitos disponíveis para associados em parceria com instituições de ensino.',
      date: '10 de Dezembro, 2024',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Assembleia Geral Extraordinária',
      excerpt: 'Convocação para discussão de temas importantes relacionados aos direitos dos bancários.',
      date: '5 de Dezembro, 2024',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-banking-accent mb-4">
            Últimas Notícias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das principais novidades e conquistas do nosso sindicato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-lg text-banking-primary line-clamp-2">
                  {article.title}
                </CardTitle>
                <p className="text-sm text-gray-500">{article.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" size="sm">
                  Ler Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/noticias">Ver Todas as Notícias</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
