import { createContext, useState, useContext, useEffect } from 'react';

const BankContext = createContext();

export const useBank = () => useContext(BankContext);

// Default values for initial state
const DEFAULT_USER = {
  name: "Alexy Louan",
  location: "France",
  manager: "Arnaud Leroy",
  status: "Actif",
  lastConnection: ""
};

const DEFAULT_ACCOUNTS = [
  { id: 'cc', type: 'Compte Courant', number: 'N°******2284', balance: 1000000, icon: 'wallet' },
  { id: 'livret', type: 'Livret A', number: 'N°******5462', balance: 0.00, icon: 'piggy-bank' },
  { id: 'plan', type: 'Plan Épargne', number: 'N°******8891', balance: 0.00, icon: 'chart-line' }
];

const DEFAULT_TRANSACTIONS = [
  {
    id: 1,
    type: "Virement sortant",
    reference: "FR761360600022000450276655",
    date: "14 Avril 2025",
    amount: -25000.00,
    status: "Effectué",
    category: "Virement"
  },
  {
    id: 2,
    type: "Virement sortant",
    reference: "FR761551939022000213541014",
    date: "14 Avril 2025",
    amount: -50000.00,
    status: "Effectué",
    category: "Virement"
  },
  {
    id: 3,
    type: "Virement entrant",
    reference: "GR160110125000010449856272637",
    date: "05 Mars 2025",
    amount: 20000.00,
    status: "Effectué",
    category: "Revenu"
  },
  {
    id: 4,
    type: "Virement entrant",
    reference: "IE28SUMU99036511475513",
    date: "10 Sept 2020",
    amount: 40000.00,
    status: "Effectué",
    category: "Revenu"
  },
  {
    id: 5,
    type: "Virement entrant",
    reference: "FR76 1723 8000 0100 0918 7836 657",
    date: "30 Août 2020",
    amount: 3000.00,
    status: "Effectué",
    category: "Revenu"
  }
];

const DEFAULT_CARD = {
  number: "4973 1204 8835 2284",
  holder: "Alexy Louan",
  expiry: "12/27",
  isBlocked: false,
  foreignPayments: true,
  limit: 3000,
  withdrawalLimit: 1200
};

const DEFAULT_RIB = {
  bankName: "BNP PARIBAS",
  bankCode: "30004",
  branchCode: "00819",
  accountNumber: "54350123000",
  key: "61",
  iban: "FR76 3000 4008 1954 3501 2300 061",
  swift: "BNPAFRPPXXX"
};

// Helper functions to load from localStorage with fallback
const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn(`Failed to parse localStorage key "${key}":`, error);
  }
  return defaultValue;
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
  
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Load persisted state from localStorage or use defaults
  // Load persisted state from localStorage or use defaults
  const [user, setUser] = useState(() => {
    const stored = loadFromLocalStorage('bankUser', DEFAULT_USER);
    const now = new Date();
    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return {
      ...stored,
      lastConnection: now.toLocaleDateString('fr-FR', options)
    };
  });
  const [accounts, setAccounts] = useState(() => loadFromLocalStorage('bankAccounts', DEFAULT_ACCOUNTS));
  const [transactions, setTransactions] = useState(() => loadFromLocalStorage('bankTransactions', DEFAULT_TRANSACTIONS));
  const [card, setCard] = useState(() => loadFromLocalStorage('bankCard', DEFAULT_CARD));
  const [rib, setRib] = useState(() => loadFromLocalStorage('bankRib', DEFAULT_RIB));

  // Calculate global balance
  const globalBalance = accounts.find(a => a.id === 'cc')?.balance || 0;

  // Persist isAuthenticated to localStorage
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  // Persist currentView to localStorage
  useEffect(() => {
    localStorage.setItem('currentView', currentView);
  }, [currentView]);

  // Persist user data to localStorage
  useEffect(() => {
    localStorage.setItem('bankUser', JSON.stringify(user));
  }, [user]);

  // Persist accounts to localStorage
  useEffect(() => {
    localStorage.setItem('bankAccounts', JSON.stringify(accounts));
  }, [accounts]);

  // Persist transactions to localStorage
  useEffect(() => {
    localStorage.setItem('bankTransactions', JSON.stringify(transactions));
  }, [transactions]);

  // Persist card to localStorage
  useEffect(() => {
    localStorage.setItem('bankCard', JSON.stringify(card));
  }, [card]);

  // Persist rib to localStorage
  useEffect(() => {
    localStorage.setItem('bankRib', JSON.stringify(rib));
  }, [rib]);

  // Theme support
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Perform transfer
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

  // -------------------------------------------------------------
  // 🔮 CORE FUNCTIONALITY: HTML SCRAPING & DATA IMPORT SYSTEM
  // -------------------------------------------------------------
  const scrapeOldBnpHTML = (htmlString) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');

      let parsedUser = {};
      let parsedAccounts = [];
      let parsedTransactions = [];
      let parsedRib = {};
      let parsedCard = {};
      let mainBalance = null;

      let importSummary = [];

      // 1. Scrape User details
      // From profile card
      const profileInfoNode = doc.querySelector('.profile-info');
      if (profileInfoNode) {
        const h2 = profileInfoNode.querySelector('h2');
        if (h2) parsedUser.name = h2.textContent.replace(/\s+/g, ' ').trim();

        const managerSpan = profileInfoNode.querySelector('span[style*="accent-color"]') || profileInfoNode.querySelector('span[style*="var(--accent-color)"]');
        if (managerSpan) parsedUser.manager = managerSpan.textContent.trim();

        const locationNode = profileInfoNode.querySelector('.location span') || profileInfoNode.querySelector('.location');
        if (locationNode) parsedUser.location = locationNode.textContent.replace(/\s+/g, ' ').trim();
      }

      // From credit card titulaire
      const creditCardNode = doc.querySelector('.credit-card');
      if (creditCardNode) {
        const holderNode = creditCardNode.querySelector('.card-holder div:not(.card-label)');
        if (holderNode) {
          const holderName = holderNode.textContent.replace(/\s+/g, ' ').trim();
          if (holderName) {
            parsedUser.name = holderName;
            parsedCard.holder = holderName;
          }
        }
        
        const cardNumNode = creditCardNode.querySelector('.card-number');
        if (cardNumNode) parsedCard.number = cardNumNode.textContent.replace(/\s+/g, ' ').trim();

        const expiryNode = creditCardNode.querySelector('.card-expires div:not(.card-label)');
        if (expiryNode) parsedCard.expiry = expiryNode.textContent.trim();
        
        importSummary.push("Option Carte");
      }

      // 2. Scrape main balance
      const balanceAmountNode = doc.querySelector('.balance-amount');
      if (balanceAmountNode) {
        const balString = balanceAmountNode.textContent.replace(/[^0-9,-]/g, '').replace(',', '.');
        mainBalance = parseFloat(balString);
      }

      const textFooterNode = doc.querySelector('.text_footer h3');
      if (textFooterNode) {
        const balString = textFooterNode.textContent.replace(/[^0-9,-]/g, '').replace(',', '.');
        mainBalance = parseFloat(balString);
      }

      // 3. Scrape accounts list
      const accountCards = doc.querySelectorAll('.account-card');
      if (accountCards && accountCards.length > 0) {
        accountCards.forEach((cardNode, idx) => {
          const typeNode = cardNode.querySelector('.account-type');
          const numNode = cardNode.querySelector('.account-number');
          const balNode = cardNode.querySelector('.account-balance');

          if (typeNode && balNode) {
            const type = typeNode.textContent.trim();
            const num = numNode ? numNode.textContent.trim() : `N°******000${idx}`;
            const balString = balNode.textContent.replace(/[^0-9,-]/g, '').replace(',', '.');
            const balance = parseFloat(balString) || 0;

            let id = 'cc';
            if (type.toLowerCase().includes('livret')) id = 'livret';
            else if (type.toLowerCase().includes('plan') || type.toLowerCase().includes('épargne')) id = 'plan';
            else id = `custom_${idx}`;

            parsedAccounts.push({
              id,
              type,
              number: num,
              balance,
              icon: id === 'cc' ? 'wallet' : (id === 'livret' ? 'piggy-bank' : 'chart-line')
            });
          }
        });
        importSummary.push("Soldes Comptes");
      }

      // 4. Scrape transactions
      // Parse static transaction items
      const transactionItems = doc.querySelectorAll('.transaction-item');
      if (transactionItems && transactionItems.length > 0) {
        transactionItems.forEach((txNode, idx) => {
          const titleNode = txNode.querySelector('.transaction-title') || txNode.querySelector('.transaction-details h4') || txNode.querySelector('h4');
          const dateNode = txNode.querySelector('.transaction-date') || txNode.querySelector('.transaction-details p') || txNode.querySelector('p');
          const refNode = txNode.querySelector('.transaction-reference');
          const amtNode = txNode.querySelector('.transaction-amount') || txNode.querySelector('.amount');

          if (titleNode && amtNode) {
            const title = titleNode.textContent.trim();
            const date = dateNode ? dateNode.textContent.replace(/ - .*/, '').trim() : "Date inconnue";
            const reference = refNode ? refNode.textContent.trim() : "Carte *2284";
            const isNegative = amtNode.classList.contains('amount-negative') || amtNode.classList.contains('negative') || amtNode.textContent.includes('-');
            const amtVal = parseFloat(amtNode.textContent.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;

            parsedTransactions.push({
              id: `tx_${idx}_${Date.now()}`,
              type: title,
              reference,
              date,
              amount: isNegative ? -amtVal : amtVal,
              status: "Effectué",
              category: isNegative ? (title.toLowerCase().includes('virement') ? "Virement" : "Dépense") : "Revenu"
            });
          }
        });
        importSummary.push(`${parsedTransactions.length} Transactions`);
      }

      // Parse static operations
      const operationItems = doc.querySelectorAll('.operation');
      if (operationItems && operationItems.length > 0) {
        operationItems.forEach((opNode, idx) => {
          const typeNode = opNode.querySelector('.text_operation p');
          const refSub = opNode.querySelectorAll('.text_operation sub');
          const amtNode = opNode.querySelector('.montant p');

          if (typeNode && amtNode) {
            const type = typeNode.textContent.trim();
            const reference = refSub[0] ? refSub[0].textContent.trim() : "REF-OP-" + idx;
            const date = refSub[1] ? refSub[1].textContent.trim() : "Date inconnue";
            
            const isNegative = amtNode.style.color?.includes('danger') || amtNode.textContent.includes('-');
            const amtVal = parseFloat(amtNode.textContent.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;

            parsedTransactions.push({
              id: `op_${idx}_${Date.now()}`,
              type,
              reference,
              date,
              amount: isNegative ? -amtVal : amtVal,
              status: "Effectué",
              category: isNegative ? "Virement" : "Revenu"
            });
          }
        });
        importSummary.push(`${operationItems.length} Opérations`);
      }

      // Parse dynamic transactions from script tags (e.g. historique.html)
      const scriptTags = doc.querySelectorAll('script');
      scriptTags.forEach(script => {
        const content = script.textContent;
        if (content && content.includes('historicalData')) {
          const match = content.match(/const\s+historicalData\s*=\s*(\[[\s\S]*?\]);/);
          if (match && match[1]) {
            try {
              // Extract items using regex to prevent JSON parsing issues with unquoted/weird keys
              const objMatches = match[1].match(/{[\s\S]*?}/g);
              if (objMatches) {
                let count = 0;
                objMatches.forEach((objStr, idx) => {
                  const typeM = objStr.match(/"type":\s*"([^"]+)"/) || objStr.match(/'type':\s*'([^']+)'/);
                  const refM = objStr.match(/"reference":\s*"([^"]+)"/) || objStr.match(/'reference':\s*'([^']+)'/);
                  const dateM = objStr.match(/"date":\s*"([^"]+)"/) || objStr.match(/'date':\s*'([^']+)'/);
                  const montM = objStr.match(/"montant":\s*"([^"]+)"/) || objStr.match(/'montant':\s*'([^']+)'/);
                  const statM = objStr.match(/"statut":\s*"([^"]+)"/) || objStr.match(/'statut':\s*'([^']+)'/);

                  if (typeM && montM) {
                    const type = typeM[1];
                    const reference = refM ? refM[1] : "REF-HIST-" + idx;
                    const date = dateM ? dateM[1] : "Date inconnue";
                    const montantStr = montM[1];
                    const status = statM ? statM[1] : "Effectué";

                    const isNegative = montantStr.includes('-');
                    const amtVal = parseFloat(montantStr.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;

                    parsedTransactions.push({
                      id: `hist_${idx}_${Date.now()}`,
                      type,
                      reference,
                      date,
                      amount: isNegative ? -amtVal : amtVal,
                      status,
                      category: isNegative ? "Virement" : "Revenu"
                    });
                    count++;
                  }
                });
                if (count > 0) {
                  importSummary.push(`${count} Opérations (Historique)`);
                }
              }
            } catch (err) {
              console.error("Failed to parse historicalData script tag", err);
            }
          }
        }
      });

      // 5. Scrape RIB details
      const ribParts = doc.querySelectorAll('.rib_part');
      if (ribParts && ribParts.length > 0) {
        ribParts.forEach(part => {
          const labelNode = part.querySelector('.rib_label');
          const valueNode = part.querySelector('.rib_value');

          if (labelNode && valueNode) {
            const labelText = labelNode.textContent.toLowerCase();
            let valueText = valueNode.textContent.trim();
            // remove copy buttons inside the value
            const copyBtn = valueNode.querySelector('.copy-btn');
            if (copyBtn) {
              valueText = valueText.replace(copyBtn.textContent, '').trim();
            }
            // remove other buttons or nested text like tooltip text
            const tooltiptext = valueNode.querySelector('.tooltiptext');
            if (tooltiptext) {
              valueText = valueText.replace(tooltiptext.textContent, '').trim();
            }
            valueText = valueText.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();

            if (labelText.includes('titulaire')) parsedUser.name = valueText;
            if (labelText.includes('domiciliation')) parsedRib.bankName = valueText;
            if (labelText.includes('code banque')) parsedRib.bankCode = valueText;
            if (labelText.includes('code agence')) parsedRib.branchCode = valueText;
            if (labelText.includes('numéro de compte')) parsedRib.accountNumber = valueText.replace(/[^0-9]/g, '');
            if (labelText.includes('clé rib')) parsedRib.key = valueText;
            if (labelText.includes('iban')) parsedRib.iban = valueText;
            if (labelText.includes('swift') || labelText.includes('bic')) parsedRib.swift = valueText;
          }
        });
        importSummary.push("Données RIB");
      }

      // Update state with parsed values if any were found
      if (parsedUser.name) {
        setUser(prev => ({ ...prev, ...parsedUser }));
      }
      
      if (Object.keys(parsedCard).length > 0) {
        setCard(prev => ({ ...prev, ...parsedCard }));
      }

      if (parsedAccounts.length > 0) {
        setAccounts(parsedAccounts);
      } else if (mainBalance !== null) {
        setAccounts(prev => prev.map(a => a.id === 'cc' ? { ...a, balance: mainBalance } : a));
      }

      if (parsedTransactions.length > 0) {
        setTransactions(prev => {
          const existingTxs = [...prev];
          const newTxs = parsedTransactions.filter(newTx => 
            !existingTxs.some(exTx => 
              exTx.amount === newTx.amount && 
              exTx.date === newTx.date && 
              exTx.type === newTx.type
            )
          );
          return [...newTxs, ...existingTxs];
        });
      }

      if (Object.keys(parsedRib).length > 0) {
        setRib(prev => ({ ...prev, ...parsedRib }));
      }

      setScraperImported(true);
      const importedLabel = importSummary.join(', ');
      showToast(`Scraping réussi : ${importedLabel || 'Données importées'} !`, 'success');
      return true;
    } catch (err) {
      console.error("Erreur de scraping :", err);
      showToast("Impossible d'extraire les données. Format de fichier non supporté.", "error");
      return false;
    }
  };

  // Mock auto-scraping simulation for demo purposes
  const simulateOldBnpScrape = (fileName) => {
    // In a live browser application, we can fetch local HTML templates or mock import
    // Since we copy-pasted the backup files, let's load pre-configured mocks
    // matching exactly the content of those uploaded HTML files.
    let mockHtml = "";
    
    if (fileName === "solde.html") {
      setUser({
        name: "Alexy Louan",
        location: "France",
        manager: "Arnaud Leroy",
        status: "Actif",
        lastConnection: "31 Mai 2026 à 16:30"
      });
      setAccounts([
        { id: 'cc', type: 'Compte Courant', number: 'N°******2284', balance: 50000.00, icon: 'wallet' },
        { id: 'livret', type: 'Livret A', number: 'N°******5462', balance: 0.00, icon: 'piggy-bank' },
        { id: 'plan', type: 'Plan Épargne', number: 'N°******8891', balance: 0.00, icon: 'chart-line' }
      ]);
      setTransactions([
        { id: 1, type: "Virement sortant", reference: "FR761360600022000450276655", date: "14 Avril 2025", amount: -25000.00, status: "Effectué", category: "Virement" },
        { id: 2, type: "Virement sortant", reference: "FR761551939022000213541014", date: "14 Avril 2025", amount: -50000.00, status: "Effectué", category: "Virement" },
        { id: 3, type: "Virement entrant", reference: "GR160110125000010449856272637", date: "05 Mars 2025", amount: 20000.00, status: "Effectué", category: "Revenu" },
        { id: 4, type: "Virement entrant", reference: "IE28SUMU99036511475513", date: "10 Sept 2020", amount: 40000.00, status: "Effectué", category: "Revenu" },
        { id: 5, type: "Virement entrant", reference: "FR76 1723 8000 0100 0918 7836 657", date: "30 Août 2020", amount: 3000.00, status: "Effectué", category: "Revenu" }
      ]);
    } else if (fileName === "rib.html") {
      setRib({
        bankName: "BNP PARIBAS",
        bankCode: "30004",
        branchCode: "00819",
        accountNumber: "54350123000",
        key: "61",
        iban: "FR76 3000 4008 1954 3501 2300 061",
        swift: "BNPAFRPPXXX"
      });
      setUser(prev => ({ ...prev, name: "Alexy Louan" }));
    } else if (fileName === "cartes.html") {
      setCard({
        number: "4973 1204 8835 2284",
        holder: "Alexy Louan",
        expiry: "12/27",
        isBlocked: false,
        foreignPayments: true,
        limit: 3000,
        withdrawalLimit: 1200
      });
      setTransactions([
        { id: 10, type: "Carrefour Market", reference: "Carte *2284", date: "10 Sept 2020 - 15:30", amount: -85.42, status: "Effectué", category: "Alimentation" },
        { id: 11, type: "Station Total", reference: "Carte *2284", date: "03 Sept 2020 - 10:15", amount: -65.00, status: "Effectué", category: "Transport" },
        { id: 12, type: "Restaurant Le Bistrot", reference: "Carte *2284", date: "02 Sept 2020 - 20:45", amount: -42.50, status: "Effectué", category: "Loisirs" }
      ]);
    }

    setScraperImported(true);
    showToast(`Simulation du scraping réussi : ${fileName} importé.`, "success");
  };

// Reset all app data when logging out
const resetAppData = () => {
  setIsAuthenticated(false);
  setCurrentView('login');

  localStorage.setItem('isAuthenticated', 'false');
  localStorage.setItem('currentView', 'login');
  // Notez : on NE supprime PAS bankUser, bankAccounts, bankTransactions, bankCard, bankRib
  // => les modifications (solde, virements...) persistent à la déconnexion et reconnexion.
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
      resetAppData
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