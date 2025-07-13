import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sobre = () => {
  const leadership = [
    {
      name: 'Ramiro Simbe',
      position: 'Secretário Geral',
      description: 'Líder experiente com vasta experiência no sector bancário e na defesa dos direitos dos trabalhadores.'
    },
    {
      name: 'Nilza Machel',
      position: 'Vice-Secretária Geral',
      description: 'Especialista em direito laboral e negociação colectiva com anos de dedicação ao movimento sindical.'
    },
    {
      name: 'Emílio Fernando',
      position: 'Secretário Executivo',
      description: 'Responsável pela coordenação das actividades sindicais e relacionamento institucional.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Sobre o SNEB
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                  Quem Somos
                </h2>
                <p className="text-gray-700 mb-4">
                  O Sindicato Nacional dos Empregados Bancários (SNEB) é uma entidade sindical 
                  que representa os trabalhadores do setor bancário em todo o território moçambicano. 
                  Fundado em 08 de dezembro de 1992, somos uma das principais organizações sindicais de Moçambique.
                </p>
                <p className="text-gray-700 mb-4">
                  Nossa atuação abrange desde a defesa dos direitos trabalhistas até a promoção 
                  de programas de capacitação profissional, sempre buscando melhorar as condições 
                  de trabalho e vida dos bancários moçambicanos.
                </p>
                <p className="text-gray-700">
                  Com mais de 30 anos de história, construímos uma trajetória sólida de conquistas 
                  e representação efetiva, sendo reconhecidos como uma voz autoritativa no diálogo 
                  com empresas, governo e sociedade civil moçambicana.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                  Nossa Estrutura
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-banking-accent mb-2">Sede Nacional</h3>
                    <p className="text-gray-600">Maputo, coordenando as atividades em todo o país</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-banking-accent mb-2">Delegações Provinciais</h3>
                    <p className="text-gray-600">Delegações distribuídas pelas principais províncias moçambicanas</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-banking-accent mb-2">Associados</h3>
                    <p className="text-gray-600">Milhares de bancários associados ativos em todo Moçambique</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-banking-accent mb-2">Equipe</h3>
                    <p className="text-gray-600">200+ profissionais dedicados ao atendimento dos associados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-banking-primary mb-8 text-center">
                Nossa Direção
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <CardTitle className="text-banking-primary">{member.name}</CardTitle>
                      <p className="text-banking-secondary font-medium">{member.position}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-banking-primary to-blue-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Nossos Números
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-banking-secondary mb-2">5K+</div>
                  <p>Associados</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-banking-secondary mb-2">32</div>
                  <p>Anos de História</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-banking-secondary mb-2">11</div>
                  <p>Províncias</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-banking-secondary mb-2">100+</div>
                  <p>Acordos Coletivos</p>
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

export default Sobre;
