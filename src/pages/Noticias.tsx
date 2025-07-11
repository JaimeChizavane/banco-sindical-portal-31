
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allNews = [
    {
      id: 1,
      title: 'Nova Convenção Coletiva 2024 Aprovada',
      excerpt: 'Acordos importantes sobre reajuste salarial e benefícios foram estabelecidos para o próximo ano.',
      content: 'A nova convenção coletiva para 2024 traz importantes conquistas para os bancários...',
      date: '15 de Dezembro, 2024',
      category: 'Convenção Coletiva',
      featured: true
    },
    {
      id: 2,
      title: 'Programa de Capacitação Profissional',
      excerpt: 'Novos cursos gratuitos disponíveis para associados em parceria com instituições de ensino.',
      content: 'O SNEB lança novos cursos de capacitação profissional...',
      date: '10 de Dezembro, 2024',
      category: 'Educação',
      featured: false
    },
    {
      id: 3,
      title: 'Assembleia Geral Extraordinária',
      excerpt: 'Convocação para discussão de temas importantes relacionados aos direitos dos bancários.',
      content: 'Fica convocada a Assembleia Geral Extraordinária...',
      date: '5 de Dezembro, 2024',
      category: 'Assembleia',
      featured: false
    },
    {
      id: 4,
      title: 'Acordo de Participação nos Lucros',
      excerpt: 'Negociações resultaram em aumento significativo na participação dos bancários nos resultados.',
      content: 'As negociações para PLR 2024 foram concluídas com sucesso...',
      date: '28 de Novembro, 2024',
      category: 'PLR',
      featured: true
    },
    {
      id: 5,
      title: 'Campanha de Saúde Mental',
      excerpt: 'Lançamento de programa de apoio psicológico para bancários e suas famílias.',
      content: 'O SNEB lança campanha inédita de cuidado com a saúde mental...',
      date: '20 de Novembro, 2024',
      category: 'Saúde',
      featured: false
    },
    {
      id: 6,
      title: 'Mesa de Negociação Permanente',
      excerpt: 'Estabelecimento de canal direto de diálogo com as instituições bancárias.',
      content: 'Foi criada a Mesa de Negociação Permanente...',
      date: '15 de Novembro, 2024',
      category: 'Negociação',
      featured: false
    }
  ];

  const filteredNews = allNews.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Notícias
            </h1>
            
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            {featuredNews.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                  Notícias em Destaque
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((article) => (
                    <Card key={article.id} className="border-l-4 border-l-banking-secondary hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm bg-banking-secondary text-banking-accent px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <CardTitle className="text-xl text-banking-primary line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <Button variant="default" size="sm">
                          Ler Mais
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                Todas as Notícias
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <CardTitle className="text-lg text-banking-primary line-clamp-2">
                        {article.title}
                      </CardTitle>
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

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nenhuma notícia encontrada para "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
