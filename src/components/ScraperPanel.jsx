import React, { useState } from 'react';
import { useBank } from '../context/BankContext';
import { Terminal, Database, FileCode, Play, Sparkles } from 'lucide-react';

const ScraperPanel = () => {
  const { simulateOldBnpScrape, scraperImported } = useBank();
  const [activeTab, setActiveTab] = useState('simulate'); // default to simulate
  const [isScraping, setIsScraping] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);

  const handleSimulatedScrape = (fileName) => {
    setIsScraping(true);
    setTerminalLogs([
      `[WAIT] Chargement du fichier de démonstration : ${fileName}...`,
      '[WAIT] Parsing des objets DOM simulés...',
      '[OK] Mapping des classes d\'origine réussi.'
    ]);

    setTimeout(() => {
      simulateOldBnpScrape(fileName);
      setIsScraping(false);
      setTerminalLogs([]);
    }, 1000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase">Scraper BNP Paribas</h3>
            <p className="text-[10px] text-slate-400">Moteur d'importation de l'ancienne version</p>
          </div>
        </div>
        {scraperImported && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-bold tracking-wider uppercase animate-pulse">
            <Sparkles className="w-3 h-3" /> Data Importée
          </div>
        )}
      </div>

      {/* Tab selection */}
      <div className="flex gap-2 p-1 bg-slate-950 rounded-xl mb-6">
        <button
          onClick={() => setActiveTab('simulate')}
          className={`flex-1 py-2 px-1 rounded-lg border-none text-[11px] font-semibold cursor-pointer transition-all duration-200 ${
            activeTab === 'simulate'
              ? 'bg-slate-800 text-white shadow'
              : 'bg-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          Simulation 1-Clic
        </button>
      </div>

      {/* Content */}
      {activeTab === 'simulate' && (
        <div className="flex flex-col gap-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            Simulez instantanément le scraping de vos anciens fichiers HTML BNP pour charger ses données :
          </p>

          <div className="grid grid-cols-3 gap-2">
            {[
              { file: 'solde.html', desc: 'Soldes & Comptes' },
              { file: 'cartes.html', desc: 'Transactions Carte' },
              { file: 'rib.html', desc: 'Coordonnées RIB' }
            ].map(item => (
              <button
                key={item.file}
                disabled={isScraping}
                onClick={() => handleSimulatedScrape(item.file)}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-800/80 text-center cursor-pointer hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all group disabled:opacity-50"
                style={{ border: '1px solid #1e293b' }}
              >
                <FileCode className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 mb-1.5 transition-all" />
                <span className="text-[10px] font-bold text-slate-200 truncate w-full">{item.file}</span>
                <span className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">{item.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Terminal progress simulation */}
      {isScraping && (
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10 transition-all">
          <Terminal className="w-8 h-8 text-emerald-400 animate-bounce mb-2" />
          <div className="text-xs font-bold text-white mb-2">MOTEUR DE PARSING D'ANCIEN BNP</div>
          <div className="text-[10px] text-emerald-400 font-mono text-left w-full max-w-[280px] bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl mb-4 h-[90px] overflow-y-auto">
            {terminalLogs.length > 0 ? (
              terminalLogs.map((log, idx) => (
                <div key={idx} className="line-clamp-1 mb-0.5" style={{ whiteSpace: 'nowrap' }}>{log}</div>
              ))
            ) : (
              <>
                <div>[OK] Extracting DOM nodes...</div>
                <div>[OK] Mapping class names...</div>
                <div>[OK] Reading account metrics...</div>
              </>
            )}
          </div>
          <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 animate-[pulse_1s_infinite] w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScraperPanel;
