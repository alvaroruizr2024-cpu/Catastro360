import React from 'react';
import { CheckCircle2, Circle, Clock, PlayCircle, AlertCircle } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Reconocimiento de campo', status: 'completed', progress: 100, date: '12 Oct 2025' },
  { id: 2, title: 'Levantamiento topográfico', status: 'completed', progress: 100, date: '15 Oct 2025' },
  { id: 3, title: 'Llenado ficha catastral', status: 'in-progress', progress: 65, date: 'En curso' },
  { id: 4, title: 'Digitalización planos', status: 'in-progress', progress: 40, date: 'En curso' },
  { id: 5, title: 'Validación topológica', status: 'pending', progress: 0, date: '-' },
  { id: 6, title: 'Asignación CUC', status: 'pending', progress: 0, date: '-' },
  { id: 7, title: 'Control calidad', status: 'pending', progress: 0, date: '-' },
  { id: 8, title: 'Generación reportes SNCP', status: 'pending', progress: 0, date: '-' },
  { id: 9, title: 'Valuación masiva', status: 'pending', progress: 0, date: '-' },
  { id: 10, title: 'Detección cambios', status: 'pending', progress: 0, date: '-' },
];

export function LevantamientoCatastral() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'in-progress': return <PlayCircle className="w-5 h-5 text-[#1565C0]" />;
      case 'pending': return <Circle className="w-5 h-5 text-gray-600" />;
      default: return <AlertCircle className="w-5 h-5 text-amber-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En Progreso';
      case 'pending': return 'Pendiente';
      default: return 'Desconocido';
    }
  };

  return (
    <div className="p-6 h-full flex flex-col bg-[#050505] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Levantamiento Catastral Inteligente</h2>
          <p className="text-sm text-gray-400 mt-1">Gestión de las 10 tareas del Sistema Nacional Integrado de Información Catastral Predial (SNCP)</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            Generar Reporte SNCP
          </button>
          <button className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            Nueva Campaña
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 flex flex-col hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/5 flex items-center justify-center text-sm font-bold text-gray-400">
                  {task.id}
                </div>
                {getStatusIcon(task.status)}
              </div>
              <span className="text-xs text-gray-500 font-medium">{task.date}</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-4 flex-1">{task.title}</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{getStatusText(task.status)}</span>
                <span className="text-white font-medium">{task.progress}%</span>
              </div>
              <div className="w-full h-2 bg-[#141414] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    task.status === 'completed' ? 'bg-emerald-400' : 
                    task.status === 'in-progress' ? 'bg-[#1565C0]' : 'bg-transparent'
                  }`}
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
