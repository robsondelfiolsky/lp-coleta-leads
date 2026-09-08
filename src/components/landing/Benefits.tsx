import { Zap, Shield, Globe, Headphones, TrendingUp, Smartphone } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Comece a usar em dias, não meses"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia de ponta a ponta"
    },
    {
      icon: Globe,
      title: "Acesso Remoto",
      description: "Gerencie sua empresa de qualquer lugar"
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Equipe pronta para atendê-lo 24/7"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Garantido",
      description: "Ferramentas para impulsionar seus resultados"
    },
    {
      icon: Smartphone,
      title: "Aplicativo Mobile",
      description: "Acompanhe everything pelo celular"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefícios Exclusivos</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tudo o que você precisa para otimizar sua operação</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;