import { useEffect } from 'react';
import { BankProvider, useBank } from './context/BankContext';
import bnpLogo from './assets/logo.png';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import History from './views/History';
import Transfer from './views/Transfer';
import Cards from './views/Cards';
import RIBView from './views/RIBView';
import Navigation from './components/Navigation';

const AppContent = () => {
  const { isAuthenticated, currentView, setCurrentView, showToast, resetAppData } = useBank();

  // Si authentifié mais vue est 'login', rediriger à 'dashboard'
  useEffect(() => {
    if (isAuthenticated && currentView === 'login') {
      setCurrentView('dashboard');
    }
  }, [isAuthenticated, currentView, setCurrentView]);

  const handleLogout = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter de votre espace sécurisé ?')) {
      resetAppData();
      showToast('Vous avez été déconnecté avec succès.');
    }
  };

  if (!isAuthenticated) return <Login />;

  return (
    <>
      <header className="header">
        <div className="header-title">
          <img src={bnpLogo} alt="BNP Paribas" className="logo" style={{ height: '40px', objectFit: 'contain' }}/>
        </div>
        <div className="user-menu">
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Déconnexion
          </button>
        </div>
      </header>

      <Navigation />

      <main className="main-container">
        {currentView === 'dashboard'   && <Dashboard />}
        {currentView === 'historique'  && <History />}
        {currentView === 'virement'    && <Transfer />}
        {currentView === 'cartes'      && <Cards />}
        {currentView === 'rib'         && <RIBView />}
      </main>
    </>
  );
};

const App = () => (
  <BankProvider>
    <AppContent />
  </BankProvider>
);

export default App;
