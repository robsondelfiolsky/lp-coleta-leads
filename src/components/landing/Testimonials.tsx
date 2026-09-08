import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Tech Solutions Ltda",
      role: "CEO",
      quote: "O ERP revolucionou nossa operação. Conseguimos reduzir 40% do tempo gasto em tarefas administrativas.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "Logística Norte",
      role: "Gerente Financeiro",
      quote: "Finalmente uma solução que entende o universo logístico. Relatórios em tempo real e controle total das finanças.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Import Export Brasil",
      role: "Diretora",
      quote: "Suporte impecável e implementação rápida. Recomendo para qualquer empresa que busca eficiência.",
      rating: 4
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Confira depoimentos de empresas que transformaram seus negócios</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                <p className="text-slate-600 text-sm">{testimonial.role}</p>
                <p className="text-slate-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;