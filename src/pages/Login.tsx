
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Dados de login:', loginData);
    
    // Simulate login
    if (loginData.email && loginData.senha) {
      toast({
        title: "Login realizado!",
        description: "Bem-vindo à área do associado.",
      });
    } else {
      toast({
        title: "Erro no login",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-banking-primary">
                  Área do Associado
                </CardTitle>
                <p className="text-gray-600">
                  Faça login para acessar sua conta
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="senha">Senha</Label>
                    <Input
                      id="senha"
                      type="password"
                      required
                      value={loginData.senha}
                      onChange={(e) => handleInputChange('senha', e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </form>
                
                <div className="mt-6 text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Esqueceu sua senha?{' '}
                    <a href="#" className="text-banking-primary hover:underline">
                      Clique aqui
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    Não é associado?{' '}
                    <Link to="/registro" className="text-banking-primary hover:underline">
                      Registre-se aqui
                    </Link>
                  </p>
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

export default Login;
