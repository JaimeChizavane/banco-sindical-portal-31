import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';
import PartnersCarousel from '@/components/PartnersCarousel';
import { Users, MapPin, Building2, FileCheck, BookOpen, Shield, Scale } from 'lucide-react';

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
                <AnimatedCounter end={6200} label="Membros no Activo" icon={<Users className="h-8 w-8" />} />
                <AnimatedCounter end={4000} label="Membros Reformados" icon={<Users className="h-8 w-8" />} />
                <AnimatedCounter end={26} label="Instituições Bancárias" icon={<Building2 className="h-8 w-8" />} />
                <AnimatedCounter end={1} label="ACT – Acordo Colectivo de Trabalho" icon={<FileCheck className="h-8 w-8" />} />
              </div>
              <p className="text-white/70 text-sm text-center pb-6 pt-2 px-4">
                Valores aproximados — cerca de 6.200 membros no activo e mais de 4.000 na situação de reformados
              </p>
            </div>

            {/* Províncias */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-banking-primary mb-6">Representação Provincial</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  'Maputo', 'Gaza', 'Inhambane', 'Sofala',
                  'Manica', 'Tete', 'Zambézia', 'Nampula', 'Niassa', 'Cabo Delgado'
                ].map((prov) => (
                  <div key={prov} className="bg-banking-accent/10 border border-banking-accent/20 rounded-lg p-3 text-center">
                    <MapPin className="h-4 w-4 text-banking-accent mx-auto mb-1" />
                    <span className="text-sm font-medium text-banking-dark">{prov}</span>
                  </div>
                ))}
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
                  <li>• <strong>Congresso</strong> – Órgão máximo do sindicato, reúne-se de 5 em 5 anos</li>
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

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-banking-accent mb-3">O Órgão Fiscalizador</h3>
                <p className="text-gray-700">Tem como função fiscalizar os actos administrativos e verificar o cumprimento dos deveres legais e estatutários, trazendo mais transparência às actividades e movimentações financeiras do sindicato.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-banking-accent mb-3">Comissões Especializadas</h3>
                <p className="text-gray-700 mb-4">Actualmente o SNEB conta com 3 Comissões Especializadas, designadamente:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>GRAM – Grupo de Acção das Mulheres Bancárias</strong> – é uma Comissão Especializada para assuntos da Mulher Bancária;</li>
                  <li>• <strong>Comissão da Juventude Bancária</strong> – é uma Comissão Especializada para assuntos da Juventude Bancária;</li>
                  <li>• <strong>Comissão de Reformados Bancários</strong> – é uma Comissão Especializada para assuntos de Reformados Bancários.</li>
                </ul>
              </div>
            </div>

            {/* Secretariado Nacional */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-banking-primary mb-8 text-center">
                Nosso Secretariado
              </h2>

              {/* Secretário Geral - destaque */}
              <div className="flex justify-center mb-4">
                <Card className="text-center max-w-sm w-full border-2 border-banking-secondary shadow-lg">
                  <CardHeader>
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-banking-secondary">
                      <img
                        src="/lovable-uploads/Secretario-Geral.jpg"
                        alt="Ramiro Simbe"
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.classList.add('bg-gray-200'); }}
                      />
                    </div>
                    <CardTitle className="text-banking-primary">Ramiro Simbe</CardTitle>
                    <p className="text-banking-secondary font-medium">Secretário Geral</p>
                  </CardHeader>
                </Card>
              </div>

              {/* Linha de ligação hierárquica */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-banking-accent/40"></div>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-1/2 h-px bg-banking-accent/40"></div>
              </div>

              {/* Sub-membros: 1.1 e 1.2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-px h-8 bg-banking-accent/40"></div>
                  </div>
                  <Card className="text-center w-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-2 border-banking-accent/30">
                        <img
                          src="/lovable-uploads/SAF.jpg"
                          alt="Nilza Machel"
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.classList.add('bg-gray-100'); }}
                        />
                      </div>
                      <CardTitle className="text-sm text-banking-primary">Nilza Machel</CardTitle>
                      <p className="text-xs text-banking-secondary font-medium">Secretária para Organização e Formação</p>
                    </CardHeader>
                  </Card>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-px h-8 bg-banking-accent/40"></div>
                  </div>
                  <Card className="text-center w-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-2 border-banking-accent/30">
                        <img
                          src="/lovable-uploads/SRB.jpg"
                          alt="César Santos"
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.classList.add('bg-gray-100'); }}
                        />
                      </div>
                      <CardTitle className="text-sm text-banking-primary">César Santos</CardTitle>
                      <p className="text-xs text-banking-secondary font-medium">Coordenadora Nacional de Reformados Bancários</p>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Áreas do Secretariado */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-banking-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <BookOpen className="h-7 w-7 text-banking-accent" />
                    </div>
                    <CardTitle className="text-base text-banking-primary">Organização e Formação</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500">Secretário para Organização e Formação</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-banking-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Shield className="h-7 w-7 text-banking-accent" />
                    </div>
                    <CardTitle className="text-base text-banking-primary">Área Social e Massificação</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500">Secretário para Área Social e Massificação</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 overflow-hidden rounded-full mx-auto mb-3">
                      <img
                        src="/lovable-uploads/SAF.jpg"
                        alt="Secretário para Administração e Finanças"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          const parent = img.parentElement!;
                          parent.classList.add('bg-banking-accent/10', 'flex', 'items-center', 'justify-center');
                          parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-banking-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>';
                        }}
                      />
                    </div>
                    <CardTitle className="text-base text-banking-primary">Administração e Finanças</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500">Secretário para Administração e Finanças</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-banking-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Scale className="h-7 w-7 text-banking-accent" />
                    </div>
                    <CardTitle className="text-base text-banking-primary">Área Jurídico-Laboral</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500">Secretário para Área Jurídico-Laboral</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Parceiros Internacionais */}
            <div className="mt-16">
              <PartnersCarousel />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
