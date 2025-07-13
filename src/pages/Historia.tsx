
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Historia = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Nossa História
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Fundação e Primeiros Anos (1992-2000)
                </h2>
                <p className="text-gray-700 mb-4">
                  O Sindicato Nacional dos Empregados Bancários de Moçambique foi fundado em 8 de dezembro de 1992, 
                  durante um período de transformação económica e abertura do sistema financeiro moçambicano. 
                  Nasceu da necessidade de unificar a representação dos trabalhadores bancários em todo o território nacional.
                </p>
                <p className="text-gray-700">
                  Nos primeiros anos, enfrentamos grandes desafios para estabelecer nossa legitimidade 
                  e conquistar os primeiros direitos fundamentais para a categoria bancária moçambicana.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Consolidação e Crescimento (2000-2010)
                </h2>
                <p className="text-gray-700 mb-4">
                  Durante a primeira década do século XXI, o SNEB consolidou-se como uma das principais 
                  entidades sindicais de Moçambique, conquistando importantes acordos coletivos e 
                  expandindo sua actuação para todas as províncias do país.
                </p>
                <p className="text-gray-700">
                  Foi neste período que estabelecemos nossos principais programas de assistência 
                  social e criamos os primeiros convênios médicos e de saúde para nossos associados.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Era Moderna (2010-presente)
                </h2>
                <p className="text-gray-700 mb-4">
                  Na última década, adaptamos nossa actuação aos novos desafios do sector bancário moçambicano, 
                  incluindo a digitalização, mobile banking, novas formas de trabalho e a necessidade de 
                  capacitação constante dos profissionais bancários.
                </p>
                <p className="text-gray-700">
                  Hoje, representamos milhares de bancários em todo Moçambique e continuamos 
                  na vanguarda da defesa dos direitos trabalhistas no setor financeiro nacional.
                </p>
              </div>

              <div className="bg-banking-primary text-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Principais Conquistas
                </h2>
                <ul className="space-y-3">
                  <li>• Estabelecimento de melhores condições de trabalho para bancários</li>
                  <li>• Negociação de subsídios e benefícios sociais</li>
                  <li>• Implementação de programas de saúde ocupacional</li>
                  <li>• Acordos de participação nos resultados das instituições</li>
                  <li>• Criação de programas de formação profissional</li>
                  <li>• Defesa dos direitos laborais no sector bancário</li>
                  <li>• Representação em negociações colectivas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Historia;
