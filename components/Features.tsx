import React from 'react';
import { Rocket, Globe, BarChart3, ShieldCheck, Cpu, MessageSquare } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e aumente a eficiência da sua equipe com nossos scripts e integrações personalizadas.',
    icon: Cpu,
  },
  {
    title: 'Web Design Premium',
    description: 'Sites e Landing Pages focados em conversão, com design moderno, responsivo e ultra-rápido.',
    icon: Globe,
  },
  {
    title: 'Gestão de Tráfego',
    description: 'Campanhas de anúncios no Google e Meta Ads otimizadas para trazer o melhor ROI para seu investimento.',
    icon: BarChart3,
  },
  {
    title: 'Estratégia de Growth',
    description: 'Análise de dados e implementação de funis de vendas para escalar seu faturamento de forma previsível.',
    icon: Rocket,
  },
  {
    title: 'Segurança Digital',
    description: 'Proteção robusta para seus ativos digitais, garantindo a integridade dos dados e confiança dos clientes.',
    icon: ShieldCheck,
  },
  {
    title: 'Consultoria 24/7',
    description: 'Suporte dedicado e acompanhamento próximo para garantir que sua tecnologia nunca pare.',
    icon: MessageSquare,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-400 font-semibold tracking-wide uppercase">Nossas Soluções</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tudo o que você precisa para crescer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Combinamos tecnologia de ponta com estratégias validadas para entregar resultados excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-slate-800/50 border border-white/5 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center p-3 bg-brand-900/50 rounded-lg mb-5 text-brand-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};