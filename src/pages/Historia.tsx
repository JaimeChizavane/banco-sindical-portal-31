
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
                  Origem e Âmbito (1992-2025)
                </h2>
                <p className="text-gray-700 mb-4">
                  O Sindicato Nacional de Empregados Bancários, é uma organização constituída no dia 08 de dezembro de 1992 por cisão com a SINTCOBASE – Sindicato de Comércio, Banca e Seguros. O SNEB abrange na sua actuação todos os trabalhadores a ele filiados livremente e que, na sua área e âmbito, exerçam a actividade profissional em instituições de crédito ou similares, públicas e privadas, art. 1 EST.
                </p>
                <p className="text-gray-700">
                  Nos primeiros anos, enfrentou grandes desafios para estabelecer sua legitimidade e conquistar os primeiros direitos fundamentais para a categoria bancária moçambicana.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Consolidação e Crescimento (1992-2025)
                </h2>
                <p className="text-gray-700 mb-4">
                  Durante a primeira década, o SNEB consolidou-se como a principal entidade sindical dos empregados Bancários de Moçambique, conquistando passos importantes, dentre os quais, 1 acordo colectivo subscrito pelos 5 maiores Bancos e expandindo sua actuação para todas as províncias do país.
                </p>
                <p className="text-gray-700 mb-4">
                  Foi neste período que estabelecemos nossos principais programas de assistência social e criamos os primeiros convênios médicos e de saúde para nossos associados.
                </p>
                <p className="text-gray-700">
                  Hoje, representamos milhares de bancários em todo Moçambique e continuamos na vanguarda da defesa dos direitos trabalhistas no sector financeiro nacional.
                </p>
              </div>

              <div className="bg-banking-primary text-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Principais Conquistas
                </h2>
                <ul className="space-y-3">
                  <li>• Estabelecimento de melhores condições de trabalho para os filiados</li>
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
