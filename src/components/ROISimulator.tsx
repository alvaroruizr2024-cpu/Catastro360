import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Activity, ArrowRight } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

export function ROISimulator() {
  const [predios, setPredios] = useState(15000);
  const [evasion, setEvasion] = useState(35); // %
  const [ticket, setTicket] = useState(450); // S/
  const [costo, setCosto] = useState(120000); // S/

  const prediosNoDeclarados = Math.floor(predios * (evasion / 100));
  const recaudacionActual = (predios - prediosNoDeclarados) * ticket;
  const recaudacionPotencial = predios * ticket;
  const incremento = recaudacionPotencial - recaudacionActual;
  const roi = ((incremento - costo) / costo) * 100;

  const data = [
    {
      name: 'Sin IA',
      Recaudación: recaudacionActual,
      Pérdida: incremento,
    },
    {
      name: 'Con CATASTRO 360 IA',
      Recaudación: recaudacionPotencial,
      Pérdida: 0,
    },
  ];

  return (
    <div className="p-6 h-full flex flex-col bg-[#050505] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Simulador de ROI Tributario</h2>
          <p className="text-sm text-gray-400 mt-1">Proyección de retorno de inversión con Tributación Predial Inteligente</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
          <Calculator className="w-4 h-4" />
          Generar Informe PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">Parámetros de Simulación</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                Total de Predios Estimados
                <span className="text-white font-mono">{predios.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={predios}
                onChange={(e) => setPredios(Number(e.target.value))}
                className="w-full accent-[#1565C0]"
              />
            </div>
            
            <div>
              <label className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                Tasa de Evasión / Subvaluación (%)
                <span className="text-white font-mono">{evasion}%</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="80" 
                step="1"
                value={evasion}
                onChange={(e) => setEvasion(Number(e.target.value))}
                className="w-full accent-[#C62828]"
              />
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                Ticket Promedio Predial (S/)
                <span className="text-white font-mono">S/ {ticket.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="50" 
                max="2000" 
                step="50"
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full accent-emerald-400"
              />
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                Costo Estimado Plataforma IA (S/)
                <span className="text-white font-mono">S/ {costo.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="20000" 
                max="500000" 
                step="10000"
                value={costo}
                onChange={(e) => setCosto(Number(e.target.value))}
                className="w-full accent-purple-400"
              />
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="bg-[#1565C0]/10 border border-[#1565C0]/20 rounded-lg p-4">
              <p className="text-xs text-[#1565C0] font-medium uppercase tracking-wider mb-1">Predios No Declarados Detectados</p>
              <p className="text-2xl font-bold text-white">{prediosNoDeclarados.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-sm font-medium text-gray-400">Incremento Anual</p>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">S/ {(incremento / 1000000).toFixed(2)}M</p>
            </div>
            
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#1565C0]/10">
                  <DollarSign className="w-4 h-4 text-[#1565C0]" />
                </div>
                <p className="text-sm font-medium text-gray-400">Recaudación Total</p>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">S/ {(recaudacionPotencial / 1000000).toFixed(2)}M</p>
            </div>

            <div className="bg-[#1565C0] border border-[#1565C0] rounded-xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                <Activity className="w-16 h-16 text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-sm font-medium text-white/80 mb-1">ROI Estimado</p>
                <p className="text-4xl font-bold text-white tracking-tight">+{roi.toFixed(0)}%</p>
                <p className="text-xs text-white/60 mt-2">Retorno de inversión en el primer año</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex-1">
            <h3 className="text-lg font-bold text-white mb-6">Comparativa de Recaudación</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#666" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `S/${(value/1000000).toFixed(1)}M`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => [`S/ ${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Bar dataKey="Recaudación" stackId="a" fill="#1565C0" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="Pérdida" stackId="a" fill="#C62828" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
