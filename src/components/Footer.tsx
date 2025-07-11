
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-banking-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1ac2d6b3-d0ed-4208-9a14-5f126ea370aa.png" 
                alt="SNEB Logo" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">SNEB</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Sindicato Nacional dos Empregados Bancários - Defendendo os direitos 
              dos trabalhadores bancários há mais de 50 anos.
            </p>
            <div className="text-sm text-gray-400">
              <p>Rua dos Bancários, 123 - Centro</p>
              <p>São Paulo - SP, CEP 01234-567</p>
              <p>Tel: (11) 1234-5678</p>
              <p>Email: contato@sneb.org.br</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/historia" className="hover:text-banking-secondary transition-colors">História</Link></li>
              <li><Link to="/sobre" className="hover:text-banking-secondary transition-colors">Sobre</Link></li>
              <li><Link to="/missao" className="hover:text-banking-secondary transition-colors">Missão & Visão</Link></li>
              <li><Link to="/noticias" className="hover:text-banking-secondary transition-colors">Notícias</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/registro" className="hover:text-banking-secondary transition-colors">Associe-se</Link></li>
              <li><Link to="/login" className="hover:text-banking-secondary transition-colors">Área do Associado</Link></li>
              <li><Link to="/gerenciamento" className="hover:text-banking-secondary transition-colors">Gerenciamento</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sindicato Nacional dos Empregados Bancários. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
