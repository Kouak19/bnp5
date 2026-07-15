import React from 'react';
import { useBank } from '../context/BankContext';

const Navigation = () => {
  const { currentView, setCurrentView } = useBank();

  const navItems = [
    { id: 'dashboard', label: 'Solde', icon: 'wallet-outline' },
    { id: 'historique', label: 'Historique', icon: 'time-outline' },
    { id: 'virement', label: 'Virement', icon: 'swap-horizontal-outline' },
    { id: 'cartes', label: 'Cartes', icon: 'card-outline' },
    { id: 'rib', label: 'RIB', icon: 'document-text-outline' }
  ];

  return (
    <div className="navigation_bar">
      <div className="navigation">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`list ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <a>
                <span className="icon">
                  {/* use ion-icon safely by ignoring react warning or using string */}
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className="text">{item.label}</span>
              </a>
              {currentView === item.id && <div className="indicator"></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
