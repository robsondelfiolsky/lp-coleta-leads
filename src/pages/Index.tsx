import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          ERP Sistema de Gestão
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Transforme sua operação com o melhor ERP para sua empresa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/leads"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
          >
            Solicitar Demo Gratuita
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-blue-600 hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
