import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl opacity-30 blur-lg animate-pulse"></div>
             <img 
               src="https://picsum.photos/800/800?grayscale" 
               alt="Team working" 
               className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
             />
             <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-xl border border-white/10 shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-white mb-1">98%</p>
                <p className="text-gray-400 text-sm">Satisfação dos clientes em projetos entregues no último ano.</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-base text-brand-400 font-semibold tracking-wide uppercase mb-2">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Parceiros estratégicos para o seu sucesso digital
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Na Solutty, não somos apenas uma agência. Somos uma extensão do seu time. Focados em ROI e excelência técnica, transformamos desafios complexos em soluções simples e escaláveis.
            </p>
            
            <div className="space-y-4">
              {[
                'Equipe multidisciplinar certificada',
                'Metodologia ágil de desenvolvimento',
                'Foco total em métricas de crescimento',
                'Suporte técnico especializado'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <a href="#contact" className="text-brand-400 font-semibold hover:text-brand-300 inline-flex items-center gap-2 transition-colors">
                  Conheça nossa metodologia
                  <span aria-hidden="true">&rarr;</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};