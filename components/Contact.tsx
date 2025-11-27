import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-900">
       {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-800 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Pronto para escalar seu negócio?</h2>
        <p className="text-xl text-brand-100 mb-10">
          Agende uma sessão estratégica gratuita de 30 minutos. Vamos analisar seu cenário atual e desenhar um plano de ação.
        </p>

        <form className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-5 py-3 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="website" className="sr-only">Site (Opcional)</label>
              <input
                type="text"
                id="website"
                placeholder="Seu site ou instagram (opcional)"
                className="w-full px-5 py-3 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>
            <button
              type="button"
              className="w-full bg-white text-brand-900 font-bold py-3.5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Solicitar Consultoria Grátis
            </button>
          </div>
          <p className="mt-4 text-xs text-brand-200">
            Respeitamos sua privacidade. Zero spam.
          </p>
        </form>
      </div>
    </section>
  );
};