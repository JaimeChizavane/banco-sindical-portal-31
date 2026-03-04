import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phoneNumber = '258843286270';
  const message = encodeURIComponent(
    'Olá, gostaria de obter mais informações sobre o Sindicato Nacional de Empregados Bancários (SNEB).'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] transition-colors duration-300 animate-bounce hover:animate-none"
      aria-label="Contactar via WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.054 31.65l6.518-2.07A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.608c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.968-7.804-6.78-8.04-7.094-.226-.314-1.9-2.53-1.9-4.828s1.2-3.426 1.628-3.894c.39-.426.916-.606 1.222-.606.152 0 .29.008.414.014.428.018.642.044.924.716.352.84 1.212 2.952 1.318 3.168.108.216.216.504.072.792-.134.294-.252.476-.468.732-.216.256-.426.452-.642.728-.2.242-.424.5-.178.928.246.424 1.094 1.806 2.35 2.926 1.616 1.44 2.98 1.888 3.402 2.098.428.21.676.176.924-.106.252-.288 1.082-1.262 1.37-1.696.284-.428.572-.358.962-.214.394.142 2.498 1.178 2.926 1.392.428.216.714.324.82.5.104.178.104 1.028-.286 2.128z" />
      </svg>
    </a>
  );
};

export default WhatsAppWidget;
