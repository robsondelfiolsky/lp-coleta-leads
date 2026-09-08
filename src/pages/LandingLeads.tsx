import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/landing/Header";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    role: "",
    department: "",
    phone: "",
    interest: "",
    referral: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to your backend
    console.log("Lead submitted:", formData);
    alert(`Obrigado! Seu lead foi enviado com sucesso.\n\nEm breve, nosso time entrará em contato com você.`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">ERP Sistema de Gestão</h1>
          <p className="text-xl text-slate-600 mb-8">Transforme sua operação com o melhor ERP para sua empresa</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Começar Free Trial
            </Link>
            <Badge className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Prova Gratuita</Badge>
          </div>
        </div>
      </section>

      {/* Lead Collection Form */}
      <main className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Inscreva-se para nossa demo gratuita</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">Nome da Empresa</label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Função</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Selecione sua função</option>
                <option value="gerente">Gerente/CEO</option>
                <option value="financeiro">Financeiro</option>
                <option value="operacao">Operações</option>
                <option value="recrutamento">Recrutamento</option>
                <option value="despachante">Despachante</option>
              </select>
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-1">Departamento</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Selecione seu departamento</option>
                <option value="finance">Finanças</option>
                <option value="contabilidade">Contabilidade</option>
                <option value="logistica">Logística</option>
                <option value="vendas">Vendas</option>
                <option value="humanresources">RH</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">Interesse</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Selecione seu interesse</option>
                <option value="controle">Controle de estoque</option>
                <option value="financeiro">Gestão financeira</option>
                <option value="relatorio">Relatórios e dashboards</option>
                <option value="automatizacao">Automação de processos</option>
                <option value="integracao">Integração de sistemas</option>
              </select>
            </div>

            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-slate-700 mb-1">Referral</label>
              <Input
                id="referral"
                name="referral"
                type="text"
                value={formData.referral}
                onChange={handleChange}
                placeholder="Nome do referencial"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Observações</label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">Enviar Lead</Button>
            </div>
          </form>
        </div>
      </main>
      
      {/* Additional Sections */}
      <Features />
      <Benefits />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Comece sua jornada rumo à eficiência e crescimento com nosso ERP
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadForm;