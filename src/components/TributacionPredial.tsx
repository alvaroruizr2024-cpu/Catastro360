import React, { useState } from 'react';
import { Search, Filter, Download, AlertTriangle, CheckCircle2, FileWarning, BellRing } from 'lucide-react';

const taxData = [
  { id: '1', cuc: '130101-0001-0001', owner: 'Juan Pérez', debt: 'S/ 0.00', status: 'Al Día', subvaluation: 'No', aiConfidence: '-', lastPayment: '12 Oct 2025' },
  { id: '2', cuc: '130101-0001-0002', owner: 'María Gómez', debt: 'S/ 4,500.00', status: 'Moroso', subvaluation: 'Sí (S/ 120k)', aiConfidence: '98%', lastPayment: '15 Ene 2024' },
  { id: '3', cuc: '130101-0001-0003', owner: 'Empresa XYZ SAC', debt: 'S/ 12,400.00', status: 'Moroso', subvaluation: 'Sí (S/ 450k)', aiConfidence: '95%', lastPayment: '03 Mar 2023' },
  { id: '4', cuc: '130101-0001-0004', owner: 'Carlos Ruiz', debt: 'S/ 0.00', status: 'Al Día', subvaluation: 'No', aiConfidence: '-', lastPayment: '28 Sep 2025' },
  { id: '5', cuc: '130101-0001-0005', owner: 'Ana Torres', debt: 'S/ 850.00', status: 'Moroso', subvaluation: 'No', aiConfidence: '-', lastPayment: '10 Dic 2024' },
  { id: '6', cuc: '130101-0001-0006', owner: 'Luis Sánchez', debt: 'S/ 0.00', status: 'Al Día', subvaluation: 'No', aiConfidence: '-', lastPayment: '05 Nov 2025' },
  { id: '7', cuc: '130101-0001-0007', owner: 'Rosa Díaz', debt: 'S/ 2,100.00', status: 'Moroso', subvaluation: 'Sí (S/ 85k)', aiConfidence: '92%', lastPayment: '22 Ago 2024' },
];

export function TributacionPredial() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 h-full flex flex-col bg-[#050505]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Tributación Predial Inteligente</h2>
          <p className="text-sm text-gray-400 mt-1">Detección de morosidad, subvaluación y optimización de cobranza</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#C62828] hover:bg-red-800 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#C62828]/20">
            <BellRing className="w-4 h-4" />
            Notificación Masiva
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
          <p className="text-sm font-medium text-gray-400">Deuda Total Recuperable</p>
          <h3 className="text-2xl font-bold text-white mt-2">S/ 4.2M</h3>
          <p className="text-xs text-emerald-400 mt-2">+12% vs mes anterior</p>
        </div>
        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
          <p className="text-sm font-medium text-gray-400">Predios Subvaluados (IA)</p>
          <h3 className="text-2xl font-bold text-[#C62828] mt-2">1,245</h3>
          <p className="text-xs text-gray-500 mt-2">Requieren fiscalización</p>
        </div>
        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
          <p className="text-sm font-medium text-gray-400">Índice de Morosidad</p>
          <h3 className="text-2xl font-bold text-amber-400 mt-2">28.4%</h3>
          <p className="text-xs text-emerald-400 mt-2">-2.1% tras notificaciones IA</p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl flex flex-col flex-1 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar contribuyente o CUC..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1565C0] transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#141414] sticky top-0 z-10">
              <tr>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">CUC</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Contribuyente</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Deuda Total</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Estado</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Subvaluación IA</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Último Pago</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {taxData.map((row) => (
                <tr key={row.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-sm font-mono text-[#1565C0]">{row.cuc}</td>
                  <td className="p-4 text-sm text-gray-300">{row.owner}</td>
                  <td className="p-4 text-sm font-medium text-white">{row.debt}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === 'Al Día' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-[#C62828]/10 text-[#C62828]'
                    }`}>
                      {row.status === 'Al Día' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {row.subvaluation !== 'No' ? (
                      <div className="flex flex-col">
                        <span className="text-sm text-amber-400 font-medium">{row.subvaluation}</span>
                        <span className="text-xs text-gray-500">Confianza: {row.aiConfidence}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-400">{row.lastPayment}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {row.status === 'Moroso' && (
                        <button className="px-2 py-1 bg-[#C62828]/10 text-[#C62828] border border-[#C62828]/20 rounded text-xs font-medium hover:bg-[#C62828]/20 transition-colors">
                          Notificar
                        </button>
                      )}
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Ver Detalle">
                        <FileWarning className="w-4 h-4" />
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
