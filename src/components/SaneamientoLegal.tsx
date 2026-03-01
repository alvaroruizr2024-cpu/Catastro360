import React, { useState } from 'react';
import { Search, Filter, Layers, FileText, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

const expedientes = [
  { id: 'EXP-2025-001', cuc: '130101-0001-0001', type: 'Inmatriculación', status: 'En Proceso', sunarp: 'Coincide', overlap: 'Ninguna', progress: 45 },
  { id: 'EXP-2025-002', cuc: '130101-0001-0002', type: 'Subdivisión', status: 'Observado', sunarp: 'Discrepancia Área', overlap: 'Superposición 12%', progress: 20 },
  { id: 'EXP-2025-003', cuc: '130101-0001-0003', type: 'Acumulación', status: 'Aprobado', sunarp: 'Coincide', overlap: 'Ninguna', progress: 100 },
  { id: 'EXP-2025-004', cuc: '130101-0001-0004', type: 'Rectificación', status: 'En Proceso', sunarp: 'Pendiente', overlap: 'Ninguna', progress: 60 },
  { id: 'EXP-2025-005', cuc: '130101-0001-0005', type: 'Inmatriculación', status: 'Observado', sunarp: 'No Registrado', overlap: 'Superposición 5%', progress: 10 },
];

export function SaneamientoLegal() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 h-full flex flex-col bg-[#050505]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Saneamiento Físico-Legal</h2>
          <p className="text-sm text-gray-400 mt-1">Gestión de expedientes, cruce registral SUNARP y detección de superposiciones</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Layers className="w-4 h-4" />
            Análisis Masivo
          </button>
          <button className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            Nuevo Expediente
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl flex flex-col flex-1 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar expediente o CUC..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1565C0] transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-[#141414] border border-white/10 rounded text-xs text-gray-400">Total: 1,240</span>
            <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded text-xs text-amber-400">Observados: 342</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#141414] sticky top-0 z-10">
              <tr>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Expediente</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">CUC</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Tipo</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Cruce SUNARP (IA)</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Superposición (IA)</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Progreso</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {expedientes.map((exp) => (
                <tr key={exp.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-sm font-medium text-white">{exp.id}</td>
                  <td className="p-4 text-sm font-mono text-[#1565C0]">{exp.cuc}</td>
                  <td className="p-4 text-sm text-gray-300">{exp.type}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                      exp.sunarp === 'Coincide' ? 'text-emerald-400' : 
                      exp.sunarp === 'Pendiente' ? 'text-gray-400' : 'text-amber-400'
                    }`}>
                      {exp.sunarp === 'Coincide' ? <CheckCircle2 className="w-3 h-3" /> : 
                       exp.sunarp === 'Pendiente' ? <Clock className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {exp.sunarp}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                      exp.overlap === 'Ninguna' ? 'text-emerald-400' : 'text-[#C62828]'
                    }`}>
                      {exp.overlap === 'Ninguna' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {exp.overlap}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden w-24">
                        <div 
                          className={`h-full rounded-full ${
                            exp.progress === 100 ? 'bg-emerald-400' : 
                            exp.status === 'Observado' ? 'bg-amber-400' : 'bg-[#1565C0]'
                          }`}
                          style={{ width: `${exp.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{exp.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Ver Expediente">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
