import React from 'react';
import { ShieldAlert, Map as MapIcon, Layers, AlertTriangle, Info } from 'lucide-react';

const riskAlerts = [
  { id: 1, zone: 'Sector 4 - Quebrada San Ildefonso', risk: 'Muy Alto', type: 'Inundación / Huaico', affected: '145 predios', source: 'CENEPRED' },
  { id: 2, zone: 'Urb. El Recreo', risk: 'Medio', type: 'Sismo', affected: '850 predios', source: 'CENEPRED' },
  { id: 3, zone: 'Sector 2 - Borde Costero', risk: 'Alto', type: 'Erosión Costera', affected: '320 predios', source: 'CENEPRED' },
];

const zoningData = [
  { id: 1, code: 'RDA', name: 'Residencial Densidad Alta', area: '450 ha', compliance: '85%' },
  { id: 2, code: 'RDM', name: 'Residencial Densidad Media', area: '1,200 ha', compliance: '92%' },
  { id: 3, code: 'CZ', name: 'Comercio Zonal', area: '320 ha', compliance: '78%' },
  { id: 4, code: 'I2', name: 'Industria Liviana', area: '150 ha', compliance: '95%' },
];

export function PlanificacionTerritorial() {
  return (
    <div className="p-6 h-full flex flex-col bg-[#050505] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Planificación Territorial</h2>
          <p className="text-sm text-gray-400 mt-1">Zonificación, uso de suelo y análisis de riesgos CENEPRED</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Layers className="w-4 h-4" />
            Capas PDU
          </button>
          <button className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            Simular Escenario
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-xl p-1 flex flex-col min-h-[400px]">
          {/* Map Placeholder for Zoning */}
          <div className="w-full h-full bg-[#111] rounded-lg relative overflow-hidden flex items-center justify-center border border-white/5">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
               <MapIcon className="w-32 h-32 text-gray-600" />
            </div>
            
            {/* Simulated Zoning Polygons */}
            <svg className="w-full h-full absolute inset-0 opacity-60">
              <g transform="translate(100, 50) scale(1.5)">
                <polygon points="0,0 200,20 250,150 50,180" fill="#1565C0" opacity="0.4" stroke="#1565C0" strokeWidth="2" />
                <text x="100" y="100" fill="white" fontSize="14" fontWeight="bold">RDA</text>
                
                <polygon points="200,20 400,0 450,100 250,150" fill="#F59E0B" opacity="0.4" stroke="#F59E0B" strokeWidth="2" />
                <text x="300" y="80" fill="white" fontSize="14" fontWeight="bold">CZ</text>
                
                <polygon points="50,180 250,150 200,300 0,250" fill="#10B981" opacity="0.4" stroke="#10B981" strokeWidth="2" />
                <text x="100" y="220" fill="white" fontSize="14" fontWeight="bold">RDM</text>
                
                {/* Risk Area */}
                <polygon points="250,150 450,100 400,250 200,300" fill="#C62828" opacity="0.5" stroke="#C62828" strokeWidth="2" strokeDasharray="5,5" />
                <text x="300" y="200" fill="white" fontSize="14" fontWeight="bold">RIESGO</text>
              </g>
            </svg>

            <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/80 backdrop-blur border border-white/10 rounded-lg p-3">
              <h4 className="text-xs font-bold text-white mb-2">Leyenda PDU</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1565C0]/60 border border-[#1565C0]"></div><span className="text-gray-300">RDA</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#10B981]/60 border border-[#10B981]"></div><span className="text-gray-300">RDM</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#F59E0B]/60 border border-[#F59E0B]"></div><span className="text-gray-300">CZ</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#C62828]/60 border border-[#C62828] border-dashed"></div><span className="text-gray-300">Riesgo Muy Alto</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#C62828]" />
              Alertas CENEPRED
            </h3>
            <div className="space-y-3">
              {riskAlerts.map((alert) => (
                <div key={alert.id} className="p-3 bg-[#141414] border border-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-bold text-white">{alert.zone}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                      alert.risk === 'Muy Alto' ? 'bg-[#C62828]/20 text-[#C62828]' :
                      alert.risk === 'Alto' ? 'bg-amber-500/20 text-amber-500' : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {alert.risk}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{alert.type} • {alert.affected}</p>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1">
                    <Info className="w-3 h-3" /> Fuente: {alert.source}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 flex-1">
            <h3 className="text-lg font-bold text-white mb-4">Resumen de Zonificación</h3>
            <div className="space-y-4">
              {zoningData.map((zone) => (
                <div key={zone.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 font-medium">{zone.code} - {zone.name}</span>
                    <span className="text-gray-500">{zone.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#141414] rounded-full overflow-hidden">
                      <div className="h-full bg-[#1565C0] rounded-full" style={{ width: zone.compliance }} />
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">{zone.compliance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
