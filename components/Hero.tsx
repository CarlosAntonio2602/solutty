import React from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-sm font-medium text-brand-200">Novas vagas para consultoria abertas</span>
          <ChevronRight className="w-4 h-4 text-brand-200" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Transforme ideias em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
            Resultados Digitais
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Ajudamos empresas ambiciosas a escalar através de design estratégico, automação inteligente e tráfego pago de alta performance.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="group flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-brand-700 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
            Agendar Consultoria
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            <Play className="w-5 h-5 fill-current" />
            Ver Portfolio
          </button>
        </div>

        {/* Floating Abstract UI Elements for visual interest */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9]">
                 <img 
                    src="https://picsum.photos/1200/675?grayscale&blur=2" 
                    alt="Dashboard Preview" 
                    className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-700 hover:scale-105 transform"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-light tracking-[0.2em] text-white/30 uppercase">Excelência Visual</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};