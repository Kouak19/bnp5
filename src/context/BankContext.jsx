import { createContext, useState, useContext, useEffect } from 'react';
import { DEFAULT_USERS } from '../defaultUsers';

const BankContext = createContext();

export const useBank = () => useContext(BankContext);

// ============================================================
// 📋 100 COMPTES UTILISATEURS - DÉFINIS DIRECTEMENT DANS LE CODE
// ============================================================
// Les données de base sont dans src/defaultUsers.js
// Les soldes et transactions modifiés sont sauvegardés dans le localStorage
// ============================================================

// Helper : charger les données sauvegardées d'un utilisateur
const loadUserBalance = (userId) => {
  try {
    const stored = localStorage.getItem(`user_${userId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn(`Failed to load user ${userId}:`, error);
  }
  return null;
};

// Helper : sauvegarder les données d'un utilisateur
const saveUserBalance = (userId, data) => {
  try {
    localStorage.setItem(`user_${userId}`, JSON.stringify(data));
  } catch (error) {
    console.warn(`Failed to save user ${userId}:`, error);
  }
};

export const BankProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem('isAuthenticated');
    return stored === 'true';
  });
  const [currentView, setCurrentView] = useState(() => {
    const stored = localStorage.getItem('currentView');
    return stored || 'login';
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scraperImported, setScraperImported] = useState(false);
  
  // Notification Toast state
  const [toast, setToast] = useState(null);
  
  // Multi-user state - Base users from defaultUsers.js
  const [users, setUsers] = useState(() => {
    // Charger les users de base depuis le fichier
    const baseUsers = [...DEFAULT_USERS];
    // Appliquer les soldes sauvegardés par utilisateur
    return baseUsers.map(user => {
      const saved = loadUserBalance(user.id);
      if (saved) {
        return {
          ...user,
          accounts: saved.accounts || user.accounts,
          transactions: saved.transactions || user.transactions,
          card: saved.card || user.card,
          rib: saved.rib || user.rib,
          lastConnection: saved.lastConnection || ''
        };
      }
      return user;
    });
  });
  const [activeUserId, setActiveUserId] = useState(() => {
    const stored = localStorage.getItem('activeUserId');
    if (stored && DEFAULT_USERS.find(u => u.id === stored)) {
      return stored;
    }
    return null;
  });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Get active user
  const activeUser = users.find(u => u.id === activeUserId) || null;

  // Derived state from active user
  const [user, setUser] = useState(() => {
    if (activeUser) {
      const now = new Date();
      const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return {
        name: `${activeUser.prenom} ${activeUser.nom}`,
        location: activeUser.location,
        manager: activeUser.manager,
        status: activeUser.status,
        lastConnection: now.toLocaleDateString('fr-FR', options)
      };
    }
    return { name: "", location: "", manager: "", status: "Actif", lastConnection: "" };
  });

  const [accounts, setAccounts] = useState(() => {
    if (activeUser) return activeUser.accounts;
    return [];
  });
  const [transactions, setTransactions] = useState(() => {
    if (activeUser) return activeUser.transactions;
    return [];
  });
  const [card, setCard] = useState(() => {
    if (activeUser) return activeUser.card;
    return { number: "", holder: "", expiry: "", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 };
  });
  const [rib, setRib] = useState(() => {
    if (activeUser) return activeUser.rib;
    return { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "00000", accountNumber: "000000000", key: "00", iban: "", swift: "BNPAFRPPXXX" };
  });

  // Calculate global balance
  const globalBalance = accounts.find(a => a.id === 'cc')?.balance || 0;

  // Load user data when active user changes
  useEffect(() => {
    if (activeUser) {
      const now = new Date();
      const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      setUser({
        name: `${activeUser.prenom} ${activeUser.nom}`,
        location: activeUser.location,
        manager: activeUser.manager,
        status: activeUser.status,
        lastConnection: now.toLocaleDateString('fr-FR', options)
      });
      setAccounts(activeUser.accounts);
      setTransactions(activeUser.transactions);
      setCard(activeUser.card);
      setRib(activeUser.rib);
    }
  }, [activeUserId]);

  // Sauvegarder les données de l'utilisateur courant en localStorage
  // à chaque modification des comptes, transactions, carte, RIB
  useEffect(() => {
    if (activeUserId && activeUser) {
      const now = new Date();
      const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      const dataToSave = {
        accounts,
        transactions,
        card,
        rib,
        lastConnection: now.toLocaleDateString('fr-FR', options)
      };
      saveUserBalance(activeUserId, dataToSave);

      // Mettre à jour aussi dans le state users
      setUsers(prev => prev.map(u => 
        u.id === activeUserId 
          ? { ...u, accounts, transactions, card, rib, lastConnection: dataToSave.lastConnection }
          : u
      ));
    }
  }, [accounts, transactions, card, rib]);

  // Persist isAuthenticated to localStorage
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  // Persist currentView to localStorage
  useEffect(() => {
    localStorage.setItem('currentView', currentView);
  }, [currentView]);

  // Persist activeUserId to localStorage
  useEffect(() => {
    localStorage.setItem('activeUserId', activeUserId || '');
  }, [activeUserId]);

  // Theme support
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // ============================================================
  // LOGIN - Connexion avec identifiant et code secret
  // ============================================================
  const loginWithUser = (identifiant, codeSecret) => {
    const foundUser = users.find(u => u.identifiant === identifiant && u.codeSecret === codeSecret);
    if (foundUser) {
      setActiveUserId(foundUser.id);
      setIsAuthenticated(true);
      setCurrentView('dashboard');
      showToast(`Connexion réussie. Bienvenue ${foundUser.prenom} ${foundUser.nom} !`, 'success');
      return true;
    }
    return false;
  };

  // Reset all app data when logging out
  const resetAppData = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
    setActiveUserId(null);
    // Nettoyer le localStorage session (mais garder les soldes sauvegardés)
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentView');
    localStorage.removeItem('activeUserId');
    // NE PAS supprimer les 'user_*' car ils contiennent les soldes sauvegardés
  };

  // Perform transfer - Soustrait le montant et sauvegarde automatiquement
  const executeTransfer = (transferData) => {
    const amountNum = parseFloat(transferData.amount);
    
    // Deduct from current account
    setAccounts(prev => prev.map(acc => {
      if (acc.id === 'cc') {
        return { ...acc, balance: acc.balance - amountNum };
      }
      return acc;
    }));

    // Add transaction to list
    const newTx = {
      id: Date.now(),
      type: `Virement vers ${transferData.firstName} ${transferData.lastName}`,
      reference: transferData.iban.replace(/\s+/g, ''),
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
      amount: -amountNum,
      status: "Effectué",
      category: "Virement"
    };

    setTransactions(prev => [newTx, ...prev]);
    showToast("Virement effectué avec succès !");
  };

  // Card Controls
  const toggleCardBlock = () => {
    setCard(prev => {
      const nextState = !prev.isBlocked;
      showToast(nextState ? "Votre carte bancaire a été bloquée." : "Votre carte bancaire a été débloquée.", nextState ? "warning" : "success");
      return { ...prev, isBlocked: nextState };
    });
  };

  const toggleForeignPayments = () => {
    setCard(prev => {
      const nextState = !prev.foreignPayments;
      showToast(nextState ? "Paiements à l'étranger activés." : "Paiements à l'étranger désactivés.");
      return { ...prev, foreignPayments: nextState };
    });
  };

  const updateCardLimit = (limit) => {
    setCard(prev => ({ ...prev, limit }));
    showToast(`Plafond de paiement modifié à ${limit} €.`);
  };

  // HTML SCRAPING & DATA IMPORT SYSTEM
  const scrapeOldBnpHTML = (htmlString) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      let importSummary = [];

      // Scrape main balance
      const balanceAmountNode = doc.querySelector('.balance-amount');
      if (balanceAmountNode) {
        const balString = balanceAmountNode.textContent.replace(/[^0-9,-]/g, '').replace(',', '.');
        const mainBalance = parseFloat(balString);
        if (!isNaN(mainBalance)) {
          setAccounts(prev => prev.map(a => a.id === 'cc' ? { ...a, balance: mainBalance } : a));
          importSummary.push("Solde");
        }
      }

      if (importSummary.length > 0) {
        setScraperImported(true);
        showToast(`Import réussi : ${importSummary.join(', ')} !`, 'success');
        return true;
      }
      showToast("Aucune donnée trouvée dans le fichier.", "error");
      return false;
    } catch (err) {
      console.error("Erreur de scraping :", err);
      showToast("Impossible d'extraire les données.", "error");
      return false;
    }
  };

  const simulateOldBnpScrape = (fileName) => {
    if (fileName === "solde.html") {
      setAccounts(prev => prev.map(a => a.id === 'cc' ? { ...a, balance: 50000.00 } : a));
    }
    setScraperImported(true);
    showToast(`Simulation du scraping réussi : ${fileName} importé.`, "success");
  };

  return (
    <BankContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      currentView,
      setCurrentView,
      isDarkMode,
      setIsDarkMode,
      user,
      setUser,
      accounts,
      setAccounts,
      transactions,
      setTransactions,
      card,
      setCard,
      rib,
      setRib,
      globalBalance,
      executeTransfer,
      toggleCardBlock,
      toggleForeignPayments,
      updateCardLimit,
      scrapeOldBnpHTML,
      simulateOldBnpScrape,
      scraperImported,
      toast,
      showToast,
      resetAppData,
      // Multi-user
      users,
      loginWithUser
    }}>
      {children}
      
      {/* Dynamic Visual Toast Notification System */}
      {toast && (
        <div className={`fixed top-4 right-4 z-[9999] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl transition-all duration-500 transform translate-y-0 scale-100 border backdrop-blur-md ${
          toast.type === 'success' 
            ? 'bg-emerald-500/90 border-emerald-400 text-white dark:bg-emerald-950/90' 
            : toast.type === 'warning'
            ? 'bg-amber-500/90 border-amber-400 text-white dark:bg-amber-950/90'
            : 'bg-rose-500/90 border-rose-400 text-white dark:bg-rose-950/90'
        }`}>
          <div className="text-xl">
            {toast.type === 'success' && '✨'}
            {toast.type === 'warning' && '⚠️'}
            {toast.type === 'error' && '❌'}
          </div>
          <div className="font-semibold text-sm tracking-wide">{toast.message}</div>
        </div>
      )}
    </BankContext.Provider>
  );
};
