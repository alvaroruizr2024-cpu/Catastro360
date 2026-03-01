import React from 'react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  Home, 
  BrainCircuit, 
  Calculator,
  FileText,
  ShieldAlert,
  Settings,
  MapPin
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard 360', icon: LayoutDashboard },
    { id: 'map', label: 'Visor Espacial', icon: MapIcon },
    { id: 'properties', label: 'Padrón de Predios', icon: Home },
    { id: 'ai', label: 'Motores IA', icon: BrainCircuit },
    { id: 'roi', label: 'Simulador ROI', icon: Calculator },
  ];

  const modules = [
    { id: 'levantamiento', label: 'Levantamiento Catastral', icon: MapPin },
    { id: 'tributacion', label: 'Tributación Predial', icon: Calculator },
    { id: 'saneamiento', label: 'Saneamiento Físico-Legal', icon: FileText },
    { id: 'planificacion', label: 'Planificación Territorial', icon: ShieldAlert },
  ];

  return (
    <aside className="w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col h-full shrink-0">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#1565C0] flex items-center justify-center font-bold text-white">
            C
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-white leading-tight">CATASTRO 360 IA</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Innovaq Solutions SAC</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Principal</p>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeTab === item.id 
                    ? "bg-[#1565C0]/20 text-[#1565C0]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Módulos Funcionales</p>
          <nav className="flex flex-col gap-1">
            {modules.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                  activeTab === item.id 
                    ? "bg-[#1565C0]/20 text-[#1565C0]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors w-full">
          <Settings className="w-4 h-4" />
          Configuración
        </button>
      </div>
    </aside>
  );
}
