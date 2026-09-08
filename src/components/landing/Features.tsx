import { CheckCircle, Clock, Users, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Gestão Simplificada",
      description: "Controle total do seu negócio com interface intuitiva e fácil de usar"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize processos manuais e reduza horas de trabalho"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhe em equipe com acesso seguro e em tempo real"
    },
    {
      icon: BarChart3,
      title: "Relatórios",
      description: "Dados precisos para decisões estratégicas"
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Recursos Principais</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Descubra por que nossa solução é a escolha ideal para o seu negócio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;