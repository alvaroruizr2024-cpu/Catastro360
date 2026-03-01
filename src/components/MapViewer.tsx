import React, { useState } from 'react';
import { Layers, Crosshair, Filter, Database } from 'lucide-react';

export function MapViewer() {
  // Generate dummy parcels for SVG
  const parcels = Array.from({ length: 40 }).map((_, i) => {
    // Grid layout with some randomness
    const row = Math.floor(i / 8);
    const col = i % 8;
    
    const baseX = 100 + col * 120 + (Math.random() * 20 - 10);
    const baseY = 100 + row * 100 + (Math.random() * 20 - 10);
    
    const width = 80 + Math.random() * 40;
    const height = 60 + Math.random() * 30;
    
    const state = Math.random() > 0.7 ? 'irregular' : (Math.random() > 0.4 ? 'regular' : 'pending');
    
    let fillColor = 'rgba(21, 101, 192, 0.2)';
    let strokeColor = '#1565C0';
    
    if (state === 'irregular') {
      fillColor = 'rgba(198, 40, 40, 0.2)';
      strokeColor = '#C62828';
    } else if (state === 'pending') {
      fillColor = 'rgba(245, 158, 11, 0.2)';
      strokeColor = '#F59E0B';
    }

    // Create a slightly irregular polygon
    const points = `
      ${baseX},${baseY} 
      ${baseX + width},${baseY - 10 + Math.random() * 20} 
      ${baseX + width + 10 - Math.random() * 20},${baseY + height} 
      ${baseX - 10 + Math.random() * 20},${baseY + height + 10 - Math.random() * 20}
    `.trim();

    return { id: i, points, fillColor, strokeColor, state };
  });

  return (
    <div className="relative h-full w-full flex flex-col bg-[#050505] overflow-hidden">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl p-2 flex flex-col gap-2">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Capas">
            <Layers className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Filtros">
            <Filter className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Centrar">
            <Crosshair className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl p-4 w-64">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Database className="w-4 h-4 text-[#1565C0]" />
            Leyenda Catastral
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#1565C0]/20 border border-[#1565C0]"></div>
              <span className="text-gray-300">Predio Regular</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#C62828]/20 border border-[#C62828]"></div>
              <span className="text-gray-300">Irregular / No Declarado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber-500/20 border border-amber-500"></div>
              <span className="text-gray-300">En Trámite / Pendiente</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-500 mb-2">Motores IA Activos:</p>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 bg-[#1565C0]/20 text-[#1565C0] rounded text-[10px] font-mono">BoundaryNet</span>
              <span className="px-2 py-1 bg-[#1565C0]/20 text-[#1565C0] rounded text-[10px] font-mono">ParcelVision</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl px-4 py-2 flex items-center gap-4 text-xs text-gray-400 font-mono">
          <span>EPSG:3857</span>
          <span>Lon: -79.0299</span>
          <span>Lat: -8.1090</span>
          <span className="text-[#1565C0]">PostGIS 3.4 + GeoServer 2.24</span>
        </div>
      </div>

      {/* SVG Map Simulation */}
      <div className="w-full h-full bg-[#111] relative cursor-move">
        {/* Grid background to simulate map tiles */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
        
        <svg className="w-full h-full absolute inset-0">
          <g transform="translate(50, 50) scale(1.2)">
            {/* Streets/Roads simulation */}
            <path d="M 0 200 L 1200 200 M 0 300 L 1200 300 M 300 0 L 300 800 M 600 0 L 600 800 M 900 0 L 900 800" stroke="#333" strokeWidth="20" fill="none" />
            
            {/* Parcels */}
            {parcels.map((parcel) => (
              <polygon
                key={parcel.id}
                points={parcel.points}
                fill={parcel.fillColor}
                stroke={parcel.strokeColor}
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
