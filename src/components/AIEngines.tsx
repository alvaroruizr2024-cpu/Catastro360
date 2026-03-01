import React from 'react';
import { BrainCircuit, Activity, CheckCircle2, Zap, Settings2 } from 'lucide-react';

const engines = [
  {
    id: 'BoundaryNet',
    name: 'BoundaryNet',
    description: 'Detección automática de límites de parcelas desde imágenes UAV/satélite.',
    model: 'U-Net + ResNet34',
    metric: 'F1 Score: 0.81',
    status: 'Activo',
    lastRun: 'Hace 2 horas',
    color: 'text-[#1565C0]',
    bg: 'bg-[#1565C0]/10',
    border: 'border-[#1565C0]/20'
  },
  {
    id: 'ParcelVision',
    name: 'ParcelVision',
    description: 'Segmentación semántica de parcelas y detección de construcciones.',
    model: 'Mask R-CNN + FPN',
    metric: 'mAP: 0.85',
    status: 'Activo',
    lastRun: 'Hace 5 horas',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  },
  {
    id: 'DocuScan',
    name: 'DocuScan AI',
    description: 'Digitalización inteligente de planos y fichas catastrales.',
    model: 'ResNet-50 + L-CNN + Tesseract',
    metric: 'OCR Accuracy: 94%',
    status: 'Activo',
    lastRun: 'Hace 10 min',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  },
  {
    id: 'ValuPredict',
    name: 'ValuPredict',
    description: 'Valuación masiva automatizada de predios con Machine Learning.',
    model: 'XGBoost + LSTM',
    metric: 'R²: 0.92',
    status: 'Activo',
    lastRun: 'Ayer',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
  {
    id: 'ChangeDetect',
    name: 'ChangeDetect',
    description: 'Monitoreo automático satelital de cambios territoriales.',
    model: 'CNN Siamesa + RF',
    metric: 'Accuracy: 90%',
    status: 'Activo',
    lastRun: 'Hace 1 día',
    color: 'text-[#C62828]',
    bg: 'bg-[#C62828]/10',
    border: 'border-[#C62828]/20'
  },
  {
    id: 'CadastreNLP',
    name: 'CadastreNLP',
    description: 'Procesamiento de lenguaje natural para documentos legales catastrales.',
    model: 'BERT + RAG + ChromaDB',
    metric: 'Recall: 0.88',
    status: 'En Espera',
    lastRun: 'Hace 3 días',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20'
  }
];

export function AIEngines() {
  return (
    <div className="p-6 h-full flex flex-col bg-[#050505] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">AI Engine - 6 Motores</h2>
          <p className="text-sm text-gray-400 mt-1">Gestión y monitoreo de modelos de Inteligencia Artificial</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            <Settings2 className="w-4 h-4" />
            Configuración Global
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#1565C0]/20">
            <Zap className="w-4 h-4" />
            Ejecutar Todos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engines.map((engine) => (
          <div key={engine.id} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex flex-col hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${engine.bg} ${engine.border} border`}>
                <BrainCircuit className={`w-6 h-6 ${engine.color}`} />
              </div>
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                engine.status === 'Activo' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-amber-400/10 text-amber-400'
              }`}>
                {engine.status === 'Activo' && <CheckCircle2 className="w-3 h-3" />}
                {engine.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{engine.name}</h3>
            <p className="text-sm text-gray-400 mb-4 flex-1">{engine.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Arquitectura:</span>
                <span className="font-mono text-gray-300 text-xs bg-white/5 px-2 py-1 rounded">{engine.model}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Precisión:</span>
                <span className={`font-mono font-bold ${engine.color}`}>{engine.metric}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Última ejecución:</span>
                <span className="text-gray-300">{engine.lastRun}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
              <button className="flex-1 py-2 bg-[#141414] border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors text-white">
                Ver Logs
              </button>
              <button className="flex-1 py-2 bg-[#1565C0]/10 border border-[#1565C0]/20 text-[#1565C0] rounded-lg text-sm font-medium hover:bg-[#1565C0]/20 transition-colors">
                Ejecutar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
