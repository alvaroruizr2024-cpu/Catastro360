import React from 'react';
import { Bell, Search, User, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Buscar predio, CUC, propietario o expediente..." 
            className="w-full bg-[#141414] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1565C0] transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C62828]/10 border border-[#C62828]/20 text-[#C62828] text-xs font-medium">
          <Zap className="w-3 h-3" />
          <span>IA Activa</span>
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C62828]"></span>
        </button>

        <div className="w-px h-6 bg-white/10 mx-2"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-white">Admin Municipal</p>
            <p className="text-xs text-gray-500">Trujillo, La Libertad</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1565C0] to-[#0D47A1] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
