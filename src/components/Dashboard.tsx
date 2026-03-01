import React from 'react';
import { 
  TrendingUp, 
  Map as MapIcon, 
  Activity, 
  DollarSign,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { clsx } from 'clsx';

const kpiData = [
  { title: 'Recaudación Proyectada', value: 'S/ 14.5M', change: '+157%', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { title: 'Cobertura Catastral', value: '85.2%', change: '+12.4%', icon: MapIcon, color: 'text-[#1565C0]', bg: 'bg-[#1565C0]/10' },
  { title: 'Eficiencia Operativa', value: '94%', change: '+8.1%', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { title: 'Predios No Declarados', value: '3,421', change: '-450', icon: AlertTriangle, color: 'text-[#C62828]', bg: 'bg-[#C62828]/10' },
];

const revenueData = [
  { name: 'Ene', actual: 4000, proyectado: 2400 },
  { name: 'Feb', actual: 3000, proyectado: 1398 },
  { name: 'Mar', actual: 2000, proyectado: 9800 },
  { name: 'Abr', actual: 2780, proyectado: 3908 },
  { name: 'May', actual: 1890, proyectado: 4800 },
  { name: 'Jun', actual: 2390, proyectado: 3800 },
  { name: 'Jul', actual: 3490, proyectado: 4300 },
];

const changeAlerts = [
  { id: 1, type: 'Construcción Nueva', location: 'Sector 4, Mz H Lt 12', confidence: '98%', time: 'Hace 2 horas', status: 'Verificado' },
  { id: 2, type: 'Ampliación no declarada', location: 'Av. Larco 1240', confidence: '95%', time: 'Hace 5 horas', status: 'Pendiente' },
  { id: 3, type: 'Cambio de Uso', location: 'Urb. El Recreo', confidence: '89%', time: 'Hace 1 día', status: 'Pendiente' },
  { id: 4, type: 'Subdivisión Irregular', location: 'Sector 2, Mz A Lt 5', confidence: '92%', time: 'Hace 2 días', status: 'Inspección' },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-[#050505] min-h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">BI 360 - Decision Layer</h2>
          <p className="text-sm text-gray-400 mt-1">Monitoreo predictivo y KPIs en tiempo real</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            Exportar Reporte
          </button>
          <button className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            Actualizar Modelos IA
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{kpi.title}</p>
                <h3 className="text-3xl font-bold text-white mt-2 tracking-tight">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${kpi.bg}`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                kpi.change.startsWith('+') && kpi.title !== 'Predios No Declarados' ? 'bg-emerald-400/10 text-emerald-400' : 
                kpi.title === 'Predios No Declarados' && kpi.change.startsWith('-') ? 'bg-emerald-400/10 text-emerald-400' :
                'bg-[#C62828]/10 text-[#C62828]'
              }`}>
                {kpi.change}
              </span>
              <span className="text-xs text-gray-500">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Proyección de Recaudación Tributaria</h3>
              <p className="text-sm text-gray-400">Modelo ValuPredict (XGBoost+LSTM)</p>
            </div>
            <select className="bg-[#141414] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none">
              <option>Últimos 6 meses</option>
              <option>Este año</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1565C0" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1565C0" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProyectado" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C62828" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#C62828" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#666" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#666" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `S/${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Area type="monotone" dataKey="actual" stroke="#1565C0" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" name="Recaudación Actual" />
                <Area type="monotone" dataKey="proyectado" stroke="#C62828" strokeWidth={3} fillOpacity={1} fill="url(#colorProyectado)" name="Proyección IA" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Alertas ChangeDetect IA</h3>
              <p className="text-sm text-gray-400">Monitoreo satelital automático</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#C62828] animate-pulse"></div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {changeAlerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-lg bg-[#141414] border border-white/5 hover:border-white/10 transition-colors group cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#C62828]" />
                    <span className="text-sm font-bold text-white">{alert.type}</span>
                  </div>
                  <span className="text-xs font-mono text-[#1565C0] bg-[#1565C0]/10 px-2 py-0.5 rounded">
                    {alert.confidence}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{alert.location}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{alert.time}</span>
                  <span className={clsx(
                    "flex items-center gap-1",
                    alert.status === 'Verificado' ? "text-emerald-400" : "text-amber-400"
                  )}>
                    {alert.status === 'Verificado' && <CheckCircle2 className="w-3 h-3" />}
                    {alert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-[#1565C0] hover:text-white transition-colors border border-[#1565C0]/30 rounded-lg hover:bg-[#1565C0]/10">
            Ver todas las alertas
          </button>
        </div>
      </div>
    </div>
  );
}
