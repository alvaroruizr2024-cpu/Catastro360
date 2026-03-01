import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { MapViewer } from './components/MapViewer';
import { PropertyTable } from './components/PropertyTable';
import { AIEngines } from './components/AIEngines';
import { ROISimulator } from './components/ROISimulator';
import { LevantamientoCatastral } from './components/LevantamientoCatastral';
import { TributacionPredial } from './components/TributacionPredial';
import { SaneamientoLegal } from './components/SaneamientoLegal';
import { PlanificacionTerritorial } from './components/PlanificacionTerritorial';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0a0a0a] text-white">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'map' && <MapViewer />}
        {activeTab === 'properties' && <PropertyTable />}
        {activeTab === 'ai' && <AIEngines />}
        {activeTab === 'roi' && <ROISimulator />}
        {activeTab === 'levantamiento' && <LevantamientoCatastral />}
        {activeTab === 'tributacion' && <TributacionPredial />}
        {activeTab === 'saneamiento' && <SaneamientoLegal />}
        {activeTab === 'planificacion' && <PlanificacionTerritorial />}
      </div>
    </Layout>
  );
}
