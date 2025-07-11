
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      title: 'Representação Legal',
      description: 'Defesa jurídica dos direitos trabalhistas e previdenciários dos bancários',
    },
    {
      title: 'Negociação Coletiva',
      description: 'Acordos e convenções coletivas que garantem melhores condições de trabalho',
    },
    {
      title: 'Assistência Social',
      description: 'Programas de apoio social, saúde e educação para associados e familiares',
    },
    {
      title: 'Formação Profissional',
      description: 'Cursos e capacitações para o desenvolvimento profissional dos bancários',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-banking-accent mb-4">
            Nossa Atuação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos incansavelmente para garantir os direitos e o bem-estar 
            de todos os profissionais do setor bancário
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-banking-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
