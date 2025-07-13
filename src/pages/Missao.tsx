
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Missao = () => {
  const values = [
    {
      title: 'Transparência',
      description: 'Actuamos com clareza e honestidade em todas as nossas acções e decisões.'
    },
    {
      title: 'Solidariedade',
      description: 'Promovemos a união e o apoio mútuo entre os trabalhadores bancários.'
    },
    {
      title: 'Justiça Social',
      description: 'Lutamos por condições dignas de trabalho e igualdade de oportunidades.'
    },
    {
      title: 'Democracia',
      description: 'Garantimos a participação de todos os associados nas decisões importantes.'
    },
    {
      title: 'Ética',
      description: 'Pautamos nossa actuação por princípios morais sólidos e íntegros.'
    },
    {
      title: 'Inovação',
      description: 'Buscamos constantemente novas formas de melhor servir nossos associados.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-16 text-center">
              Missão, Visão e Valores
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-banking-primary to-blue-700 text-white">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold mb-4">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                    Defender e promover os direitos dos trabalhadores bancários, 
                    garantindo condições dignas de trabalho, desenvolvimento profissional 
                    e bem-estar social, através de uma representação sindical forte, 
                    democrática e comprometida com a justiça social.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-banking-secondary to-yellow-600 text-banking-accent">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold mb-4">Nossa Visão</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                    Ser reconhecido como o principal sindicato de bancários do país, 
                    referência em representação sindical efectiva, inovação em serviços 
                    aos associados e na construção de um sector bancário mais justo, 
                    moderno e humanizado para todos os trabalhadores.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-banking-primary mb-12 text-center">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl text-banking-primary">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-banking-primary mb-6 text-center">
                Nossos Compromissos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-banking-accent mb-4">
                    Com os Associados
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Defesa incondicional dos direitos trabalhistas</li>
                    <li>• Atendimento de qualidade e humanizado</li>
                    <li>• Transparência na gestão dos recursos</li>
                    <li>• Participação democrática nas decisões</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-banking-accent mb-4">
                    Com a Categoria
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Negociações colectivas efectivas</li>
                    <li>• Programas de capacitação profissional</li>
                    <li>• Promoção da saúde e segurança no trabalho</li>
                    <li>• Luta por melhores condições salariais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Missao;
