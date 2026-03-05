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
import { CheckCircle, CreditCard, FileText, Download, User, Briefcase, MapPin, Phone } from 'lucide-react';

interface PreInscricaoData {
  nomeCompleto: string;
  bi: string;
  dataNascimento: string;
  banco: string;
  numeroFuncionario: string;
  cargo: string;
  provincia: string;
  telemovel: string;
  email: string;
  dataSolicitacao: string;
  numeroPreInscricao: string;
  entidade: string;
  nomeEntidade: string;
  referencia: string;
  valor: string;
}

const entidades = [
  { codigo: '11001', nome: 'BIM' },
  { codigo: '11002', nome: 'BCI' },
  { codigo: '11003', nome: 'FNB' },
  { codigo: '11004', nome: 'Moza Banco' },
  { codigo: '11005', nome: 'Standard Bank' },
  { codigo: '11006', nome: 'CPC' },
];

const provincias = [
  'Maputo Cidade',
  'Maputo Província',
  'Gaza',
  'Inhambane',
  'Sofala',
  'Manica',
  'Tete',
  'Zambézia',
  'Nampula',
  'Cabo Delgado',
];

const bancos = [
  'Absa Bank',
  'Access Bank',
  'AFP',
  'Banco Letshego',
  'Banco Mais',
  'Banco Sólido',
  'Bayport',
  'BCI',
  'BM',
  'CCOM',
  'CPC',
  'DP Services',
  'Ecobank',
  'First Capital Bank',
  'FNB Moçambique',
  'Gapi SI',
  'MBC',
  'Microbanco Confiança',
  'Millennium BIM',
  'Moza Banco',
  'Nedbank',
  'Socremo',
  'Standard Bank',
  'UBA',
  'Unacrédito',
  'Vista Bank',
];

const generateReference = () => {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
};

const generatePreInscricaoNumber = () => {
  const year = new Date().getFullYear();
  const seq = Math.floor(1000 + Math.random() * 9000);
  return `SNEB-${year}-${seq}`;
};

const Registro = () => {
  const { toast } = useToast();
  const [preInscricao, setPreInscricao] = useState<PreInscricaoData | null>(null);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    bi: '',
    dataNascimento: '',
    email: '',
    telemovel: '',
    banco: '',
    numeroFuncionario: '',
    cargo: '',
    provincia: '',
    endereco: '',
    aceitaTermos: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.aceitaTermos) {
      toast({
        title: 'Erro',
        description: 'Você deve aceitar os termos e condições para continuar.',
        variant: 'destructive',
      });
      return;
    }

    const entidadeSelecionada = entidades[Math.floor(Math.random() * entidades.length)];

    const data: PreInscricaoData = {
      nomeCompleto: formData.nomeCompleto,
      bi: formData.bi,
      dataNascimento: formData.dataNascimento,
      banco: formData.banco,
      numeroFuncionario: formData.numeroFuncionario,
      cargo: formData.cargo,
      provincia: formData.provincia,
      telemovel: formData.telemovel,
      email: formData.email,
      dataSolicitacao: new Date().toLocaleDateString('pt-MZ', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      numeroPreInscricao: generatePreInscricaoNumber(),
      entidade: entidadeSelecionada.codigo,
      nomeEntidade: entidadeSelecionada.nome,
      referencia: generateReference(),
      valor: '500,00 MZN',
    };

    setPreInscricao(data);
  };

  if (preInscricao) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-banking-accent" />
                </div>
                <h1 className="text-3xl font-bold text-banking-accent mb-2">Pré-Inscrição Realizada!</h1>
                <p className="text-gray-600">A sua solicitação foi registada com sucesso.</p>
              </div>

              <Card className="mb-6">
                <CardHeader className="bg-banking-dark text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5" />
                    Dados da Pré-Inscrição
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 block">Nome Completo</span>
                      <span className="font-semibold">{preInscricao.nomeCompleto}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">BI</span>
                      <span className="font-semibold">{preInscricao.bi}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Data de Nascimento</span>
                      <span className="font-semibold">{preInscricao.dataNascimento}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Instituição Bancária</span>
                      <span className="font-semibold">{preInscricao.banco}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Nº de Funcionário</span>
                      <span className="font-semibold">{preInscricao.numeroFuncionario || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Cargo / Função</span>
                      <span className="font-semibold">{preInscricao.cargo}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Província</span>
                      <span className="font-semibold">{preInscricao.provincia}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Contacto</span>
                      <span className="font-semibold">{preInscricao.telemovel}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Email</span>
                      <span className="font-semibold">{preInscricao.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Data de Solicitação</span>
                      <span className="font-semibold">{preInscricao.dataSolicitacao}</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-banking-accent/10 rounded-lg border border-banking-accent/20 text-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Número de Pré-Inscrição</span>
                    <span className="text-2xl font-bold text-banking-accent tracking-wider">{preInscricao.numeroPreInscricao}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-2 border-banking-secondary">
                <CardHeader className="bg-gradient-to-r from-banking-dark to-banking-accent text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CreditCard className="h-5 w-5" />
                    Dados para Pagamento por Referência
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 text-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Entidade</span>
                      <span className="text-xl font-bold text-banking-dark">{preInscricao.entidade}</span>
                      <span className="text-sm text-gray-500 block">{preInscricao.nomeEntidade}</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Referência</span>
                      <span className="text-xl font-bold text-banking-dark tracking-wider">{preInscricao.referencia}</span>
                    </div>
                    <div className="p-4 bg-banking-secondary/20 rounded-lg">
                      <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Valor a Pagar</span>
                      <span className="text-2xl font-bold text-banking-accent">{preInscricao.valor}</span>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Prazo de Pagamento</span>
                      <span className="text-xl font-bold text-banking-primary">72 horas</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    <p>
                      Instrui-se o candidato a efectuar o pagamento através da entidade e referência acima,
                      utilizando qualquer canal digital disponível na banca moçambicana
                      (Internet Banking, Mobile Banking, ATM ou POS).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-banking-accent hover:bg-green-700 text-white"
                  onClick={() => toast({ title: 'Obrigado!', description: 'A sua confirmação de pagamento foi registada.' })}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Já efectuei o pagamento
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => toast({ title: 'Em breve', description: 'A funcionalidade de download estará disponível brevemente.' })}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar comprovativo (PDF)
                </Button>
              </div>
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
            <h1 className="text-4xl font-bold text-banking-accent mb-8 text-center">Filiação ao SNEB</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-banking-primary flex items-center gap-2">
                      <User className="h-6 w-6" />
                      Boletim de Inscrição do Filiado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Dados Pessoais */}
                      <div className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-banking-accent mb-4 flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Dados Pessoais
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                            <Input id="nomeCompleto" type="text" required value={formData.nomeCompleto} onChange={(e) => handleInputChange('nomeCompleto', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="bi">Nº de BI / Documento de Identificação *</Label>
                            <Input id="bi" type="text" required placeholder="000000000000A" value={formData.bi} onChange={(e) => handleInputChange('bi', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                            <Input id="dataNascimento" type="date" required value={formData.dataNascimento} onChange={(e) => handleInputChange('dataNascimento', e.target.value)} />
                          </div>
                        </div>
                      </div>

                      {/* Dados Profissionais */}
                      <div className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-banking-accent mb-4 flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          Dados Profissionais
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="banco">Instituição Bancária *</Label>
                            <Select onValueChange={(value) => handleInputChange('banco', value)}>
                              <SelectTrigger><SelectValue placeholder="Selecione a instituição" /></SelectTrigger>
                              <SelectContent>
                                {bancos.map((banco) => (
                                  <SelectItem key={banco} value={banco}>{banco}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="numeroFuncionario">Número de Funcionário</Label>
                            <Input id="numeroFuncionario" type="text" placeholder="Se aplicável" value={formData.numeroFuncionario} onChange={(e) => handleInputChange('numeroFuncionario', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="cargo">Cargo / Função *</Label>
                            <Input id="cargo" type="text" required placeholder="Ex: Caixa, Gerente, Analista" value={formData.cargo} onChange={(e) => handleInputChange('cargo', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="provincia">Província *</Label>
                            <Select onValueChange={(value) => handleInputChange('provincia', value)}>
                              <SelectTrigger><SelectValue placeholder="Selecione a província" /></SelectTrigger>
                              <SelectContent>
                                {provincias.map((prov) => (
                                  <SelectItem key={prov} value={prov}>{prov}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Contactos */}
                      <div className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-banking-accent mb-4 flex items-center gap-2">
                          <Phone className="h-5 w-5" />
                          Contactos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="telemovel">Contacto Telefónico *</Label>
                            <Input id="telemovel" type="tel" required placeholder="+258 84 000 0000" value={formData.telemovel} onChange={(e) => handleInputChange('telemovel', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="email">E-mail *</Label>
                            <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="endereco">Endereço Completo</Label>
                            <Input id="endereco" type="text" value={formData.endereco} onChange={(e) => handleInputChange('endereco', e.target.value)} />
                          </div>
                        </div>
                      </div>

                      {/* Termos */}
                      <div className="flex items-start space-x-2">
                        <Checkbox id="aceitaTermos" checked={formData.aceitaTermos} onCheckedChange={(checked) => handleInputChange('aceitaTermos', checked as boolean)} className="mt-1" />
                        <Label htmlFor="aceitaTermos" className="text-sm leading-relaxed">
                          Aceito os termos e condições do sindicato, autorizo o uso dos meus dados pessoais e concordo com o débito de 1% do meu salário para quotas de membro. *
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-banking-accent hover:bg-green-700 text-white" size="lg">
                        Enviar Solicitação de Inscrição
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div>
                <Card className="bg-banking-dark text-white">
                  <CardHeader>
                    <CardTitle>Benefícios da Filiação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Representação Legal</h4>
                      <p className="text-sm text-gray-300">Assistência jurídica especializada em direito trabalhista</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Acordo Colectivo de Trabalho</h4>
                      <p className="text-sm text-gray-300">Participação no ACT negociado com as instituições bancárias</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Capacitação</h4>
                      <p className="text-sm text-gray-300">Cursos gratuitos de qualificação profissional</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Assistência Social</h4>
                      <p className="text-sm text-gray-300">Programas de apoio social para membros e familiares</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-banking-primary">Processo de Filiação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-banking-secondary rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm">Preencha o boletim de inscrição</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm">Efectue o pagamento por referência</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm">Confirmação e aprovação</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm">Receba o seu cartão de membro</span>
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
