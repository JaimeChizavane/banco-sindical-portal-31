
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const Gerenciamento = () => {
  const { toast } = useToast();
  
  const [pendingRegistrations, setPendingRegistrations] = useState([
    {
      id: 1,
      nomeCompleto: 'João Silva Santos',
      email: 'joao.silva@email.com',
      banco: 'BCI',
      cargo: 'Caixa',
      dataRegistro: '2024-12-20',
      status: 'pendente'
    },
    {
      id: 2,
      nomeCompleto: 'Maria Oliveira Costa',
      email: 'maria.costa@email.com',
      banco: 'Itaú Unibanco',
      cargo: 'Gerente',
      dataRegistro: '2024-12-19',
      status: 'pendente'
    },
    {
      id: 3,
      nomeCompleto: 'Carlos Eduardo Lima',
      email: 'carlos.lima@email.com',
      banco: 'Bradesco',
      cargo: 'Analista',
      dataRegistro: '2024-12-18',
      status: 'pendente'
    }
  ]);

  const [approvedRegistrations, setApprovedRegistrations] = useState([
    {
      id: 4,
      nomeCompleto: 'Ana Paula Ferreira',
      email: 'ana.ferreira@email.com',
      banco: 'Santander',
      cargo: 'Gerente',
      dataRegistro: '2024-12-15',
      dataAprovacao: '2024-12-16',
      status: 'aprovado'
    }
  ]);

  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      titulo: 'Nova Convenção Colectiva 2024',
      conteudo: 'Detalhes sobre os acordos estabelecidos...',
      autor: 'Admin',
      dataPublicacao: '2024-12-15',
      status: 'publicado'
    }
  ]);

  const handleApprove = (registrationId: number) => {
    const registration = pendingRegistrations.find(r => r.id === registrationId);
    if (registration) {
      const approvedRegistration = {
        ...registration,
        status: 'aprovado',
        dataAprovacao: new Date().toISOString().split('T')[0]
      };
      
      setApprovedRegistrations(prev => [...prev, approvedRegistration]);
      setPendingRegistrations(prev => prev.filter(r => r.id !== registrationId));
      
      toast({
        title: "Registro Aprovado",
        description: `${registration.nomeCompleto} foi aprovado e receberá um e-mail de confirmação.`,
      });
      
      // Simulate sending email
      console.log(`Enviando e-mail para ${registration.email} com credenciais de acesso`);
    }
  };

  const handleReject = (registrationId: number) => {
    const registration = pendingRegistrations.find(r => r.id === registrationId);
    if (registration) {
      setPendingRegistrations(prev => prev.filter(r => r.id !== registrationId));
      
      toast({
        title: "Registro Rejeitado",
        description: `A solicitação de ${registration.nomeCompleto} foi rejeitada.`,
        variant: "destructive"
      });
    }
  };

  const sendWelcomeEmail = (email: string, name: string) => {
    console.log(`Reenviando e-mail de boas-vindas para ${email}`);
    toast({
      title: "E-mail Enviado",
      description: `E-mail de boas-vindas reenviado para ${name}.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Painel de Gerenciamento
            </h1>
            
            <Tabs defaultValue="registros" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="registros">Registros Pendentes</TabsTrigger>
                <TabsTrigger value="aprovados">Registros Aprovados</TabsTrigger>
                <TabsTrigger value="noticias">Gerenciar Notícias</TabsTrigger>
              </TabsList>
              
              <TabsContent value="registros" className="mt-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-banking-primary">
                      Solicitações Pendentes
                    </h2>
                    <Badge variant="secondary">
                      {pendingRegistrations.length} pendentes
                    </Badge>
                  </div>
                  
                  {pendingRegistrations.length === 0 ? (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-gray-500">Nenhuma solicitação pendente no momento.</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid gap-4">
                      {pendingRegistrations.map((registration) => (
                        <Card key={registration.id}>
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg text-banking-primary">
                                  {registration.nomeCompleto}
                                </CardTitle>
                                <p className="text-gray-600">{registration.email}</p>
                              </div>
                              <Badge variant="outline">Pendente</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <span className="text-sm font-medium text-gray-500">Banco:</span>
                                <p>{registration.banco}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-500">Cargo:</span>
                                <p>{registration.cargo}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-500">Data do Registro:</span>
                                <p>{new Date(registration.dataRegistro).toLocaleDateString('pt-BR')}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button 
                                onClick={() => handleApprove(registration.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Aprovar
                              </Button>
                              <Button 
                                onClick={() => handleReject(registration.id)}
                                variant="destructive"
                              >
                                Rejeitar
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="aprovados" className="mt-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-banking-primary">
                      Registros Aprovados
                    </h2>
                    <Badge variant="secondary">
                      {approvedRegistrations.length} aprovados
                    </Badge>
                  </div>
                  
                  <div className="grid gap-4">
                    {approvedRegistrations.map((registration) => (
                      <Card key={registration.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg text-banking-primary">
                                {registration.nomeCompleto}
                              </CardTitle>
                              <p className="text-gray-600">{registration.email}</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">Aprovado</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <span className="text-sm font-medium text-gray-500">Banco:</span>
                              <p>{registration.banco}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">Cargo:</span>
                              <p>{registration.cargo}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">Data do Registro:</span>
                              <p>{new Date(registration.dataRegistro).toLocaleDateString('pt-BR')}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">Data da Aprovação:</span>
                              <p>{new Date(registration.dataAprovacao!).toLocaleDateString('pt-BR')}</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => sendWelcomeEmail(registration.email, registration.nomeCompleto)}
                            variant="outline"
                            size="sm"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Reenviar E-mail de Boas-vindas
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="noticias" className="mt-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-banking-primary">
                      Gerenciar Notícias
                    </h2>
                    <Button>Adicionar Nova Notícia</Button>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-banking-primary">Sistema de CMS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Esta funcionalidade será expandida com um editor completo de notícias, 
                        permitindo criar, editar e publicar conteúdo diretamente no site.
                      </p>
                      <div className="grid gap-4">
                        {newsArticles.map((article) => (
                          <div key={article.id} className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <h3 className="font-semibold">{article.titulo}</h3>
                              <p className="text-sm text-gray-500">
                                Por {article.autor} em {new Date(article.dataPublicacao).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Editar</Button>
                              <Button variant="outline" size="sm">Excluir</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gerenciamento;
