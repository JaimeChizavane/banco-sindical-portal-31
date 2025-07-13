
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Registro = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    bi: '',
    email: '',
    telemovel: '',
    banco: '',
    agencia: '',
    cargo: '',
    tempoServico: '',
    endereco: '',
    cidade: '',
    aceitaTermos: false
  });

  const bancos = [
    'BCI - Banco Comercial e de Investimentos',
    'BIM - Banco Internacional de Moçambique',
    'Vista Bank',
    'FNB - First National Bank',
    'Access Bank',
    'Standard Bank',
    'Socremo',
    'Ecobank',
    'Moza Bank',
    'UBA - United Bank for Africa',
    'Banco de Moçambique',
    'SIMO',
    'BIG - Banco de Investimento Global',
    'BNI - Banco Nacional de Investimento',
    'Absa Bank',
    'NedBank',
    'Bayport',
    'MyBucks Banking Corporation',
    'Outro'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceitaTermos) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos e condições para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Dados do formulário:', formData);
    
    toast({
      title: "Registro Enviado!",
      description: "Sua solicitação foi enviada para análise. Receberá um e-mail em breve.",
    });

    // Reset form
    setFormData({
      nomeCompleto: '',
      bi: '',
      email: '',
      telemovel: '',
      banco: '',
      agencia: '',
      cargo: '',
      tempoServico: '',
      endereco: '',
      cidade: '',
      aceitaTermos: false
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">
              Registro de Associado
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-banking-primary">
                      Formulário de Inscrição
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                          <Input
                            id="nomeCompleto"
                            type="text"
                            required
                            value={formData.nomeCompleto}
                            onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="bi">BI (Bilhete de Identidade) *</Label>
                          <Input
                            id="bi"
                            type="text"
                            required
                            placeholder="000000000000A"
                            value={formData.bi}
                            onChange={(e) => handleInputChange('bi', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="telemovel">Telemóvel *</Label>
                          <Input
                            id="telemovel"
                            type="tel"
                            required
                            placeholder="+258 84 000 0000"
                            value={formData.telemovel}
                            onChange={(e) => handleInputChange('telemovel', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="banco">Banco *</Label>
                          <Select onValueChange={(value) => handleInputChange('banco', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o banco" />
                            </SelectTrigger>
                            <SelectContent>
                              {bancos.map((banco) => (
                                <SelectItem key={banco} value={banco}>
                                  {banco}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="agencia">Agência *</Label>
                          <Input
                            id="agencia"
                            type="text"
                            required
                            value={formData.agencia}
                            onChange={(e) => handleInputChange('agencia', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cargo">Cargo *</Label>
                          <Input
                            id="cargo"
                            type="text"
                            required
                            placeholder="Ex: Caixa, Gerente, Analista"
                            value={formData.cargo}
                            onChange={(e) => handleInputChange('cargo', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="tempoServico">Tempo de Serviço (anos) *</Label>
                          <Input
                            id="tempoServico"
                            type="number"
                            required
                            min="0"
                            value={formData.tempoServico}
                            onChange={(e) => handleInputChange('tempoServico', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="endereco">Endereço Completo *</Label>
                        <Input
                          id="endereco"
                          type="text"
                          required
                          value={formData.endereco}
                          onChange={(e) => handleInputChange('endereco', e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="cidade">Cidade *</Label>
                        <Input
                          id="cidade"
                          type="text"
                          required
                          placeholder="Ex: Maputo, Beira, Nampula"
                          value={formData.cidade}
                          onChange={(e) => handleInputChange('cidade', e.target.value)}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="aceitaTermos"
                          checked={formData.aceitaTermos}
                          onCheckedChange={(checked) => handleInputChange('aceitaTermos', checked as boolean)}
                        />
                        <Label htmlFor="aceitaTermos" className="text-sm">
                          Aceito os termos e condições do sindicato, autorizo o uso dos meus dados pessoais e concordo com o débito de 1% do meu salário para cotas de membro *
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Enviar Solicitação
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-banking-primary text-white">
                  <CardHeader>
                    <CardTitle>Benefícios da Associação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Representação Legal</h4>
                      <p className="text-sm text-blue-100">
                        Assistência jurídica especializada em direito trabalhista
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Convénios Médicos</h4>
                      <p className="text-sm text-blue-100">
                        Acesso a planos de saúde com desconto especial
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Capacitação</h4>
                      <p className="text-sm text-blue-100">
                        Cursos gratuitos de qualificação profissional
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Negociação Colectiva</h4>
                      <p className="text-sm text-blue-100">
                        Participação nos acordos e convenções colectivas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-banking-primary">Processo de Aprovação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-banking-secondary rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm">Envio da solicitação</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm">Análise da documentação</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm">Aprovação e confirmação</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm">Recebimento do e-mail com acesso</span>
                    </div>
                  </CardContent>
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

export default Registro;
