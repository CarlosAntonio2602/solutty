import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Silva',
    role: 'CEO, TechFlow',
    content: "A Solutty transformou completamente nossa presença digital. O novo site aumentou nossa conversão em 150% no primeiro mês.",
    image: 'https://picsum.photos/id/100/100/100',
  },
  {
    name: 'Fernanda Costa',
    role: 'Diretora de Marketing, VarejoX',
    content: "A automação que implementaram economizou horas da minha equipe. Profissionalismo e entrega acima da média.",
    image: 'https://picsum.photos/id/200/100/100',
  },
  {
    name: 'André Santos',
    role: 'Fundador, StartupOne',
    content: "Melhor investimento que fizemos este ano. A equipe entendeu nossa visão e executou com perfeição técnica.",
    image: 'https://picsum.photos/id/338/100/100',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">O que dizem nossos clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800/30 p-8 rounded-2xl border border-white/5 relative">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500" 
                />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-brand-400 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{item.content}"</p>
              <div className="absolute -top-4 right-8 text-6xl text-brand-900 opacity-50 font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};