import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, Edit2, FileText, Eye, AlertTriangle } from 'lucide-react';

const propertiesData = [
  { id: '1', cuc: '130101-0001-0001', address: 'Av. Larco 1240', owner: 'Juan Pérez', area: '120 m²', value: 'S/ 245,000', status: 'Regular', aiFlag: 'Ninguna' },
  { id: '2', cuc: '130101-0001-0002', address: 'Calle Los Cedros 450', owner: 'María Gómez', area: '95 m²', value: 'S/ 180,000', status: 'Irregular', aiFlag: 'Subvaluación' },
  { id: '3', cuc: '130101-0001-0003', address: 'Urb. El Recreo Mz H Lt 12', owner: 'Empresa XYZ SAC', area: '450 m²', value: 'S/ 1,200,000', status: 'Pendiente', aiFlag: 'Construcción Nueva' },
  { id: '4', cuc: '130101-0001-0004', address: 'Av. España 800', owner: 'Carlos Ruiz', area: '210 m²', value: 'S/ 450,000', status: 'Regular', aiFlag: 'Ninguna' },
  { id: '5', cuc: '130101-0001-0005', address: 'Calle San Martín 120', owner: 'Ana Torres', area: '80 m²', value: 'S/ 150,000', status: 'Irregular', aiFlag: 'Cambio de Uso' },
  { id: '6', cuc: '130101-0001-0006', address: 'Urb. Primavera Mz A Lt 5', owner: 'Luis Sánchez', area: '150 m²', value: 'S/ 320,000', status: 'Regular', aiFlag: 'Ninguna' },
  { id: '7', cuc: '130101-0001-0007', address: 'Av. América Sur 1500', owner: 'Rosa Díaz', area: '300 m²', value: 'S/ 850,000', status: 'Irregular', aiFlag: 'Subvaluación' },
  { id: '8', cuc: '130101-0001-0008', address: 'Calle Los Pinos 230', owner: 'Pedro Morales', area: '110 m²', value: 'S/ 210,000', status: 'Pendiente', aiFlag: 'Ampliación no declarada' },
];

export function PropertyTable() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 h-full flex flex-col bg-[#050505]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Padrón de Predios</h2>
          <p className="text-sm text-gray-400 mt-1">Gestión catastral y tributaria</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
            Filtros Avanzados
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Download className="w-4 h-4" />
            Exportar Padrón
          </button>
          <button className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            Nuevo Predio
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl flex flex-col flex-1 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar por CUC, propietario o dirección..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1565C0] transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Mostrando <strong className="text-white">8</strong> de <strong className="text-white">14,230</strong> predios</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#141414] sticky top-0 z-10">
              <tr>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">CUC</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Dirección</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Propietario</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Área</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Valor IA</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Estado</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5">Alerta IA</th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-white/5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {propertiesData.map((property) => (
                <tr key={property.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-sm font-mono text-[#1565C0]">{property.cuc}</td>
                  <td className="p-4 text-sm text-gray-300">{property.address}</td>
                  <td className="p-4 text-sm text-gray-300">{property.owner}</td>
                  <td className="p-4 text-sm text-gray-400">{property.area}</td>
                  <td className="p-4 text-sm font-medium text-white">{property.value}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Regular' ? 'bg-emerald-400/10 text-emerald-400' :
                      property.status === 'Irregular' ? 'bg-[#C62828]/10 text-[#C62828]' :
                      'bg-amber-400/10 text-amber-400'
                    }`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {property.aiFlag !== 'Ninguna' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#C62828]">
                        <AlertTriangle className="w-3 h-3" />
                        {property.aiFlag}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500">-</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Ver Detalles">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Ficha Catastral">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-white/5 flex items-center justify-between">
          <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:bg-white/5 transition-colors disabled:opacity-50">
            Anterior
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1565C0] text-white text-sm font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-gray-400 text-sm font-medium transition-colors">177</button>
          </div>
          <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:bg-white/5 transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

// We need to import AlertTriangle at the top
