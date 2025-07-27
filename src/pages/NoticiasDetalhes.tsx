import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import bankingTeamMeeting from '@/assets/banking-team-meeting.jpg';
import bankManagerWoman from '@/assets/bank-manager-woman.jpg';
import bankTellerService from '@/assets/bank-teller-service.jpg';

const NoticiasDetalhes = () => {
  const { id } = useParams();

  const newsDatabase = {
    "1": {
      id: 1,
      title: 'SNEB Inicia Negociações para Novo Acordo Colectivo de Trabalho (ACT)',
      excerpt: 'O Sindicato Nacional de Empregados Bancários iniciou as negociações com a Associação Moçambicana dos Bancos para o ACT 2025.',
      content: `
        <p>O Sindicato Nacional de Empregados Bancários (SNEB) iniciou oficialmente as negociações para o novo Acordo Colectivo de Trabalho (ACT) 2025 com a Associação Moçambicana dos Bancos (AMB). Este momento histórico marca o início de um processo crucial para a melhoria das condições de trabalho dos bancários moçambicanos.</p>
        
        <h3>Principais Pontos em Negociação</h3>
        <p>As negociações centram-se em várias áreas fundamentais:</p>
        <ul>
          <li><strong>Reajuste Salarial:</strong> Proposta de aumento salarial em linha com a inflação e crescimento económico do país</li>
          <li><strong>Benefícios Sociais:</strong> Ampliação dos benefícios de saúde e seguro de vida</li>
          <li><strong>Formação Profissional:</strong> Investimento em capacitação e desenvolvimento de carreira</li>
          <li><strong>Condições de Trabalho:</strong> Melhoria do ambiente laboral e redução da carga horária</li>
        </ul>
        
        <h3>Expectativas do Sector</h3>
        <p>O secretário-geral do SNEB, Ramiro Simbe, expressou optimismo quanto às negociações: "Estamos confiantes de que chegará-mos a um acordo que beneficie tanto os trabalhadores quanto as instituições bancárias. O nosso objectivo é fortalecer o sector bancário através de melhores condições para os nossos membros."</p>
        
        <p>A Associação Moçambicana dos Bancos demonstrou abertura para o diálogo construtivo, reconhecendo a importância dos recursos humanos para o crescimento sustentável do sector financeiro nacional.</p>
        
        <h3>Próximos Passos</h3>
        <p>As negociações estão programadas para se estender pelos próximos dois meses, com reuniões semanais entre as partes. O acordo final deverá ser ratificado até final de Janeiro de 2025, entrando em vigor no início do ano fiscal.</p>
      `,
      date: '15 de Dezembro, 2024',
      category: 'ACT',
      image: bankingTeamMeeting,
      featured: true
    },
    "2": {
      id: 2,
      title: 'Associação Moçambicana dos Bancos Discute Estratégias para o Sector',
      excerpt: 'AMB propõe novas medidas para fortalecer o sector bancário nacional e melhorar condições de trabalho.',
      content: `
        <p>A Associação Moçambicana dos Bancos (AMB) realizou a sua assembleia anual, onde foram apresentadas estratégias inovadoras para o fortalecimento do sector bancário nacional. O evento contou com a participação de representantes de todas as instituições financeiras membros.</p>
        
        <h3>Estratégias Apresentadas</h3>
        <p>Durante a assembleia, foram discutidas várias iniciativas estratégicas:</p>
        <ul>
          <li><strong>Digitalização Bancária:</strong> Aceleração da transformação digital em todas as instituições</li>
          <li><strong>Inclusão Financeira:</strong> Expansão dos serviços bancários para zonas rurais</li>
          <li><strong>Formação Contínua:</strong> Programa nacional de capacitação para bancários</li>
          <li><strong>Sustentabilidade:</strong> Implementação de práticas ambientalmente responsáveis</li>
        </ul>
        
        <h3>Colaboração com o SNEB</h3>
        <p>A AMB reafirmou o seu compromisso com o diálogo social, destacando a importância da parceria com o SNEB para o desenvolvimento harmonioso do sector. "A colaboração entre empregadores e trabalhadores é fundamental para o nosso crescimento", afirmou o presidente da AMB.</p>
        
        <p>Foi anunciada a criação de uma comissão mista AMB-SNEB para acompanhar a implementação das medidas acordadas e garantir que os benefícios cheguem efectivamente aos trabalhadores bancários.</p>
      `,
      date: '10 de Dezembro, 2024',
      category: 'AMB',
      image: bankManagerWoman,
      featured: false
    },
    "3": {
      id: 3,
      title: 'Expansão da Abrangência: SNEB Integra Mais Bancos e Microbancos',
      excerpt: 'O sindicato expandiu a sua base para incluir trabalhadores de microbancos e instituições financeiras emergentes.',
      content: `
        <p>O SNEB celebra um marco histórico com a integração de cinco novos microbancos e duas cooperativas de crédito à sua base de representação. Esta expansão representa um crescimento de 30% no número de trabalhadores representados pelo sindicato.</p>
        
        <h3>Novas Instituições Integradas</h3>
        <p>As seguintes instituições juntaram-se à família SNEB:</p>
        <ul>
          <li>Microbanco Revolução</li>
          <li>Microbanco Esperança</li>
          <li>Microbanco Progresso</li>
          <li>Banco Kwanza</li>
          <li>Microbanco Sul</li>
          <li>Cooperativa de Crédito Maputo</li>
          <li>Cooperativa Financeira Beira</li>
        </ul>
        
        <h3>Benefícios da Expansão</h3>
        <p>A integração destes novos membros traz benefícios mútuos:</p>
        <ul>
          <li><strong>Para os Trabalhadores:</strong> Acesso a representação sindical, protecção laboral e benefícios colectivos</li>
          <li><strong>Para as Instituições:</strong> Diálogo estruturado e melhoria das relações laborais</li>
          <li><strong>Para o SNEB:</strong> Fortalecimento da representatividade e maior influência sectorial</li>
        </ul>
        
        <h3>Desafios e Oportunidades</h3>
        <p>A secretária-geral adjunta, Nilza Machel, comentou sobre os desafios desta expansão: "Cada instituição tem as suas particularidades, mas o nosso compromisso é garantir que todos os trabalhadores bancários, independentemente do tamanho da instituição, tenham os mesmos direitos e protecções."</p>
        
        <p>O SNEB planeia realizar workshops de integração em todas as novas instituições nos próximos três meses para garantir uma transição suave e informar os novos membros sobre os seus direitos e benefícios.</p>
      `,
      date: '5 de Dezembro, 2024',
      category: 'Expansão',
      image: bankTellerService,
      featured: false
    },
    "4": {
      id: 4,
      title: 'Acordo de Participação nos Lucros',
      excerpt: 'Negociações resultaram em aumento significativo na participação dos bancários nos resultados.',
      content: `
        <p>O SNEB conseguiu um acordo histórico para a Participação nos Lucros e Resultados (PLR) de 2024, garantindo um aumento médio de 25% nos valores pagos aos trabalhadores bancários em comparação com o ano anterior.</p>
        
        <h3>Detalhes do Acordo</h3>
        <p>O novo acordo PLR estabelece:</p>
        <ul>
          <li><strong>Valor Base:</strong> Mínimo de 2 salários por trabalhador</li>
          <li><strong>Bónus por Performance:</strong> Até 1 salário adicional baseado em metas</li>
          <li><strong>Antiguidade:</strong> 0,5 salário adicional por cada 5 anos de serviço</li>
          <li><strong>Pagamento:</strong> Duas parcelas - Dezembro 2024 e Março 2025</li>
        </ul>
        
        <h3>Impacto no Sector</h3>
        <p>Este acordo estabelece um novo padrão para o sector bancário moçambicano, demonstrando que é possível conciliar a rentabilidade das instituições com o reconhecimento do contributo dos trabalhadores.</p>
        
        <p>Emílio Fernando, membro da direcção do SNEB, destacou: "Este acordo demonstra que quando há vontade de diálogo e reconhecimento mútuo, todos saem a ganhar. Os trabalhadores sentem-se mais motivados e as instituições beneficiam de maior produtividade."</p>
        
        <h3>Próximos Objectivos</h3>
        <p>O sucesso deste acordo abre caminho para futuras negociações sobre outros benefícios, incluindo planos de pensões complementares e seguros de saúde expandidos para familiares dos trabalhadores.</p>
      `,
      date: '28 de Novembro, 2024',
      category: 'PLR',
      image: bankingTeamMeeting,
      featured: true
    },
    "5": {
      id: 5,
      title: 'Campanha de Saúde Mental',
      excerpt: 'Lançamento de programa de apoio psicológico para bancários e suas famílias.',
      content: `
        <p>O SNEB lança a campanha "Mente Saudável, Trabalho Produtivo", um programa abrangente de apoio à saúde mental dos trabalhadores bancários e suas famílias. A iniciativa surge como resposta aos desafios psicológicos enfrentados pelos profissionais do sector.</p>
        
        <h3>Componentes do Programa</h3>
        <p>A campanha inclui várias vertentes de apoio:</p>
        <ul>
          <li><strong>Linha de Apoio 24h:</strong> Serviço telefónico gratuito de apoio psicológico</li>
          <li><strong>Sessões de Grupo:</strong> Workshops mensais sobre gestão de stress</li>
          <li><strong>Consultas Individuais:</strong> Até 10 sessões gratuitas por ano</li>
          <li><strong>Programa Familiar:</strong> Extensão do apoio aos familiares directos</li>
        </ul>
        
        <h3>Parceiros e Recursos</h3>
        <p>O programa conta com a participação de psicólogos clínicos, universidades locais e organizações de saúde mental. O investimento inicial é de 2 milhões de meticais, financiado através de um fundo especial criado pelas contribuições dos membros.</p>
        
        <h3>Resultados Esperados</h3>
        <p>Os objectivos do programa incluem a redução do absentismo por motivos de saúde mental, melhoria da qualidade de vida dos trabalhadores e criação de um ambiente laboral mais saudável e produtivo.</p>
        
        <p>"A saúde mental é tão importante quanto a saúde física. Este programa demonstra o nosso compromisso com o bem-estar integral dos nossos membros", afirmou Ramiro Simbe.</p>
      `,
      date: '20 de Novembro, 2024',
      category: 'Saúde',
      image: bankManagerWoman,
      featured: false
    },
    "6": {
      id: 6,
      title: 'Mesa de Negociação Permanente',
      excerpt: 'Estabelecimento de canal directo de diálogo com as instituições bancárias.',
      content: `
        <p>Foi oficialmente criada a Mesa de Negociação Permanente entre o SNEB e a AMB, estabelecendo um canal formal e contínuo de diálogo entre representantes dos trabalhadores e empregadores do sector bancário.</p>
        
        <h3>Estrutura da Mesa</h3>
        <p>A Mesa de Negociação Permanente é composta por:</p>
        <ul>
          <li><strong>Representantes do SNEB:</strong> 5 membros da direcção</li>
          <li><strong>Representantes da AMB:</strong> 5 directores de bancos membros</li>
          <li><strong>Observadores:</strong> Representantes do Ministério do Trabalho</li>
          <li><strong>Secretariado Técnico:</strong> Equipa de apoio logístico e documental</li>
        </ul>
        
        <h3>Agenda de Trabalho</h3>
        <p>A mesa reunir-se-á mensalmente para tratar de:</p>
        <ul>
          <li>Acompanhamento da implementação de acordos</li>
          <li>Resolução preventiva de conflitos laborais</li>
          <li>Discussão de políticas sectoriais</li>
          <li>Análise de tendências do mercado de trabalho bancário</li>
        </ul>
        
        <h3>Impacto Esperado</h3>
        <p>Esta iniciativa representa um avanço significativo nas relações laborais do sector bancário moçambicano, prometendo reduzir conflitos e promover soluções consensuais para os desafios do sector.</p>
        
        <p>"A criação desta mesa demonstra a maturidade das relações laborais no sector bancário. É um modelo que pode ser replicado noutros sectores da economia", comentou um representante da AMB.</p>
      `,
      date: '15 de Novembro, 2024',
      category: 'Negociação',
      image: bankTellerService,
      featured: false
    }
  };

  const article = newsDatabase[id as keyof typeof newsDatabase];

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-banking-accent mb-8">
                Notícia Não Encontrada
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A notícia que procura não existe ou foi removida.
              </p>
              <Button asChild>
                <Link to="/noticias">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar às Notícias
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/noticias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Notícias
              </Link>
            </Button>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-banking-primary" />
                    <span className="text-sm bg-banking-secondary text-banking-accent px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-banking-primary mb-6">
                  {article.title}
                </h1>

                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </article>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-banking-primary mb-4">
                  Partilhe esta Notícia
                </h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiasDetalhes;