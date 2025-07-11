
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
                  Fundação e Primeiros Anos (1970-1980)
                </h2>
                <p className="text-gray-700 mb-4">
                  O Sindicato Nacional dos Empregados Bancários foi fundado em 1972, em um período 
                  de grande transformação no setor bancário brasileiro. Nasceu da necessidade de 
                  unificar a representação dos trabalhadores bancários em todo o país.
                </p>
                <p className="text-gray-700">
                  Nos primeiros anos, enfrentamos grandes desafios para estabelecer nossa legitimidade 
                  e conquistar os primeiros direitos fundamentais para a categoria.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Consolidação e Crescimento (1980-2000)
                </h2>
                <p className="text-gray-700 mb-4">
                  Durante as décadas de 80 e 90, o SNEB se consolidou como uma das principais 
                  entidades sindicais do país, conquistando importantes acordos coletivos e 
                  expandindo sua atuação para todas as regiões do Brasil.
                </p>
                <p className="text-gray-700">
                  Foi neste período que estabelecemos nossos principais programas de assistência 
                  social e criamos os primeiros convênios médicos e odontológicos para nossos associados.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-banking-primary mb-4">
                  Era Moderna (2000-presente)
                </h2>
                <p className="text-gray-700 mb-4">
                  No século XXI, adaptamos nossa atuação aos novos desafios do setor bancário, 
                  incluindo a digitalização, novas formas de trabalho e a necessidade de 
                  capacitação constante dos profissionais.
                </p>
                <p className="text-gray-700">
                  Hoje, representamos mais de 500.000 bancários em todo o país e continuamos 
                  na vanguarda da defesa dos direitos trabalhistas no setor financeiro.
                </p>
              </div>

              <div className="bg-banking-primary text-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Principais Conquistas
                </h2>
                <ul className="space-y-3">
                  <li>• Estabelecimento da jornada de 6 horas para bancários</li>
                  <li>• Criação do adicional de periculosidade</li>
                  <li>• Implementação de programas de saúde ocupacional</li>
                  <li>• Acordo de participação nos lucros e resultados</li>
                  <li>• Criação de fundos de pensão complementar</li>
                  <li>• Programas de qualificação profissional</li>
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
