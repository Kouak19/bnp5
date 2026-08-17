import { useEffect, useState } from 'react';
import { BankProvider, useBank } from './context/BankContext';
import bnpLogo from './assets/logo.png';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import History from './views/History';
import Transfer from './views/Transfer';
import Cards from './views/Cards';
import RIBView from './views/RIBView';
import Navigation from './components/Navigation';
import BlockAlert from './components/BlockAlert';
import LogoutConfirmModal from './components/LogoutConfirmModal';

const AppContent = () => {
  const { isAuthenticated, currentView, setCurrentView, showToast, resetAppData, user } = useBank();

  // Si authentifié mais vue est 'login', rediriger à 'dashboard'
  useEffect(() => {
    if (isAuthenticated && currentView === 'login') {
      setCurrentView('dashboard');
    }
  }, [isAuthenticated, currentView, setCurrentView]);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const requestLogout = () => setShowLogoutModal(true);

  const confirmLogout = () => {
    setShowLogoutModal(false);
    resetAppData();
    showToast('');
  };

  const cancelLogout = () => setShowLogoutModal(false);

  if (!isAuthenticated) return <Login />;

  return (
    <>
      {/* Alerte de sécurité persistante si le compte est bloqué */}
      {user?.status === 'Bloqué' && <BlockAlert userName={user.name} />}

      <header className="header" style={user?.status === 'Bloqué' ? { marginTop: '44px' } : {}}>
        <div className="header-title">
          <img src={bnpLogo} alt="BNP Paribas" className="logo" style={{ height: '40px', objectFit: 'contain' }}/>
        </div>
        <div className="user-menu">
          <button className="logout-btn" onClick={requestLogout}>
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

      {/* Popup de confirmation de déconnexion stylée */}
      {showLogoutModal && (
        <LogoutConfirmModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </>
  );
};

const App = () => (
  <BankProvider>
    <AppContent />
  </BankProvider>
);

export default App;
