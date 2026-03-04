import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import AnimatedCounter from '@/components/AnimatedCounter';
import { Users, MapPin, Building2, FileCheck } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Sobre
            </h1>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                Quem Somos
              </h2>
              <p className="text-gray-700 mb-4">
                O Sindicato Nacional dos Empregados Bancários (SNEB) é uma entidade sindical que representa os trabalhadores do sector bancário e financeiro, em todo o território moçambicano. Somos uma das principais organizações sindicais de Moçambique.
              </p>
              <p className="text-gray-700 mb-4">
                Nossa actuação abrange desde a defesa dos direitos trabalhistas, sensibilização sobre os deveres, até a promoção de programas e benefícios sociais, sempre buscando melhorar as condições de trabalho e vida dos seus filiados.
              </p>
              <p className="text-gray-700">
                Com mais de 30 anos de história, construímos uma trajectória sólida de conquistas e representação efectiva, sendo reconhecidos como uma voz marcante no diálogo com a Banca, e demais actores sociais nacionais e internacionais.
              </p>
            </div>


            {/* Nossos Números animados */}
            <div className="bg-gradient-to-r from-banking-dark via-banking-accent to-banking-dark rounded-2xl mb-16 overflow-hidden">
              <h2 className="text-3xl font-semibold text-white pt-10 text-center">
                Nossos Números
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4">
                <AnimatedCounter end={3250} label="Membros" icon={<Users className="h-8 w-8" />} />
                <AnimatedCounter end={11} label="Províncias" icon={<MapPin className="h-8 w-8" />} />
                <AnimatedCounter end={24} label="Instituições Bancárias Representadas" icon={<Building2 className="h-8 w-8" />} />
                <AnimatedCounter end={18} label="Acordos Colectivos Negociados" icon={<FileCheck className="h-8 w-8" />} />
              </div>
            </div>

            {/* Estrutura */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-banking-primary mb-6">
                Nossa Estrutura
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-banking-accent mb-4">Órgãos Deliberativos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Congresso</strong> – Órgão máximo do sindicato, composto por 60 delegados eleitos e reúne-se de 5 em 5 anos</li>
                  <li>• <strong>Conselho Nacional</strong></li>
                  <li>• <strong>Conferência Provincial</strong></li>
                  <li>• <strong>Conselho Provincial</strong></li>
                  <li>• <strong>Comité de Empresa</strong></li>
                  <li>• <strong>Assembleia Geral</strong></li>
                  <li>• <strong>Comité Sindical</strong></li>
                  <li>• <strong>Secção Sindical</strong></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-banking-accent mb-4">Órgãos Executivos</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-banking-primary mb-3">Órgãos Executivos Colegiais:</h4>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="font-semibold text-banking-accent mb-3">Secretariado Nacional</h5>
                    <p className="text-gray-700 mb-3">É o órgão executivo de nível central, composto pelo Secretário geral, que a ele preside e por quatro secretários eleitos pelo Conselho Nacional, estipulado nos estatutos do SNEB do art. 26 a 29.</p>
                    <p className="text-gray-700 mb-2">Encontra-se estruturada da seguinte forma:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>- Área de Organização Sindical</li>
                      <li>- Área Social</li>
                      <li>- Área Jurídica e Relações Laborais</li>
                      <li>- Área de Administração e Finanças</li>
                      <li>- Área Internacional</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="font-semibold text-banking-accent mb-3">Secretariado Provincial</h5>
                    <p className="text-gray-700">É o órgão executivo do sindicato na província. É constituído por três membros eleitos pelo Conselho Provincial dentre o quais um é o Secretário provincial que a ele preside.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="font-semibold text-banking-accent mb-3">Secretariado do Comité de Empresa</h5>
                    <p className="text-gray-700">É órgão executivo de nível intermédio na Instituição e é composto por 3 elementos, sendo um secretário que dirige e por dois pelouros, art. 1 n.º 2 RCE.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-banking-accent mb-3">Secretariado do Comité Sindical</h5>
                    <p className="text-gray-700">É órgão executivo do nível da base no centro de Trabalho composto pelo Secretário do comité sindical e dos restantes membros do comité.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-banking-primary mb-3">Órgãos Executivos Titulados Individualmente:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Secretário Geral</strong> - Membro executivo do nível central eleito pelo Congresso, art. 30 EST.</li>
                    <li>• <strong>Secretário Nacional de Área</strong> – Membro executivo do nível central eleito no Conselho Nacional art. 26 EST.</li>
                    <li>• <strong>Secretário Provincial</strong> – Membro executivo do nível provincial eleito na Conferência Provincial, art. 50 a 51 EST.</li>
                    <li>• <strong>Secretário Provincial de Área</strong> – Membro executivo de nível provincial eleito no Conselho Provincial, nas provinciais onde há secretariado.</li>
                    <li>• <strong>Secretário de Comité de Empresa</strong> – Membro executivo do nível intermédio eleito em Sessão do Comité de Empresa, REC.</li>
                    <li>• <strong>Membro do Secretariado do Comité de Empresa</strong> – Eleito em Sessão do Comité de Empresa.</li>
                    <li>• <strong>Secretário de Comité Sindical</strong> – Membro executivo de base eleito em Assembleia Geral, art. 56 EST.</li>
                    <li>• <strong>Líder Sindical</strong> – Membro de base eleito em assembleia geral nos centro de trabalho com menos de dez trabalhadores.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-banking-accent mb-3">O Órgão Fiscalizador</h3>
                <p className="text-gray-700">Tem como função fiscalizar os actos administrativos e verificar o cumprimento dos deveres legais e estatutários, trazendo mais transparência às actividades e movimentações financeiras do sindicato.</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-banking-primary mb-8 text-center">
                Nosso Secretariado
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-banking-primary">Ramiro Simbe</CardTitle>
                    <p className="text-banking-secondary font-medium">Secretário Geral</p>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-banking-primary">Nilza Machel</CardTitle>
                    <p className="text-banking-secondary font-medium">Secretária para a Área de Organização e Formação</p>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-banking-primary">Lídia Timulua</CardTitle>
                    <p className="text-banking-secondary font-medium">Secretária para a Área Social e Administração e Finanças</p>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-banking-primary">Mauro Zefanias</CardTitle>
                    <p className="text-banking-secondary font-medium">Secretário para a Área dos Assuntos Jurídicos Laborais</p>
                  </CardHeader>
                </Card>
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
