import React from 'react';
import { Instagram, Linkedin, Twitter, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <Zap className="text-brand-500 w-6 h-6" />
               <span className="font-bold text-xl text-white">Solutty</span>
             </div>
             <p className="text-gray-400 text-sm">
               Transformando o futuro dos negócios através de tecnologia e design de alta performance.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Solutty Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};