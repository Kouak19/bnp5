import React, { useState } from 'react';
import { useBank } from '../context/BankContext';

const History = () => {
  const { transactions } = useBank();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'debit', 'credit'

  // Gestion des filtres et de la recherche
  const filteredTransactions = transactions.filter((op) => {
    const matchesSearch = 
      op.type?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      op.reference?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterType === 'debit') return op.amount < 0;
    if (filterType === 'credit') return op.amount >= 0;
    return true;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(Math.abs(amount));
  };

  // Extraction propre des parties de la date (ex: "14 Avril 2025" ou "14/04/2025")
  const formatDate = (dateStr) => {
    if (!dateStr) return { day: '14', month: 'Avril', year: '2025' };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      return { day: parts[0], month: parts[1], year: parts[2] };
    }
    return { day: dateStr, month: '', year: '' };
  };

  // Styles locaux basés sur la capture d'écran
  const styles = {
    container: {
      margin: '0 auto',
      maxWidth: '600px',
      padding: '1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1e293b'
    },
    header: {
      textAlign: 'left',
      marginBottom: '1.5rem'
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: '800',
      color: '#0f172a',
      margin: '0 0 0.5rem 0',
      letterSpacing: '-0.5px'
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: 0,
      lineHeight: '1.4'
    },
    filterCard: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      padding: '1.25rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    searchContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      width: '100%',
      padding: '14px 14px 14px 44px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      fontSize: '0.95rem',
      outline: 'none',
      color: '#1e293b',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box'
    },
    searchIcon: {
      position: 'absolute',
      left: '16px',
      color: '#94a3b8',
      fontSize: '1.1rem'
    },
    tabContainer: {
      display: 'flex',
      gap: '10px'
    },
    tabButton: (isActive) => ({
      padding: '10px 20px',
      borderRadius: '12px',
      fontSize: '0.85rem',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backgroundColor: isActive ? '#006643' : '#f1f5f9', // Vert BNP pour "Toutes" actif
      color: isActive ? '#ffffff' : '#475569'
    }),
    listCard: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      padding: '1.5rem 1rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },
    itemRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    },
    leftCol: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flex: 1,
      minWidth: 0 // Évite les débordements de texte
    },
    arrowBadge: (isDebit) => ({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      flexShrink: 0,
      backgroundColor: isDebit ? '#fdf2f2' : '#ecfdf5',
      color: isDebit ? '#ef4444' : '#10b981'
    }),
    textDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0
    },
    opType: {
      fontSize: '0.95rem',
      fontWeight: '800',
      color: '#0f172a',
      margin: 0
    },
    opRef: {
      fontSize: '0.75rem',
      color: '#94a3b8',
      fontFamily: 'monospace',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    dateCol: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      textAlign: 'right',
      gap: '2px',
      paddingRight: '12px',
      minWidth: '65px'
    },
    dateDay: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: '#475569',
      margin: 0
    },
    dateSub: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: '0.75rem',
      color: '#94a3b8',
      margin: 0
    },
    rightCol: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexShrink: 0
    },
    statusBadge: {
      backgroundColor: '#e6f4ea',
      color: '#137333',
      padding: '6px 12px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '700'
    },
    amountText: (isDebit) => ({
      fontSize: '1.05rem',
      fontWeight: '800',
      color: isDebit ? '#ef4444' : '#10b981',
      textAlign: 'right',
      minWidth: '85px'
    })
  };

  return (
    <div style={styles.container}>
      
      {/* EN-TÊTE DE LA PAGE */}
      <div style={styles.header}>
        <h1 style={styles.title}>Historique des Opérations</h1>
        <p style={styles.subtitle}>
          Consultez et recherchez toutes vos transactions en temps réel
        </p>
      </div>

      {/* ZONE DE FILTRAGE ET RECHERCHE */}
      <div style={styles.filterCard}>
        <div style={styles.searchContainer}>
          <i className="fas fa-search" style={styles.searchIcon}></i>
          <input
            type="text"
            placeholder="Rechercher par libellé ou référence..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.tabContainer}>
          <button
            style={styles.tabButton(filterType === 'all')}
            onClick={() => setFilterType('all')}
          >
            Toutes
          </button>
          <button
            style={styles.tabButton(filterType === 'debit')}
            onClick={() => setFilterType('debit')}
          >
            Débits (-)
          </button>
          <button
            style={styles.tabButton(filterType === 'credit')}
            onClick={() => setFilterType('credit')}
          >
            Crédits (+)
          </button>
        </div>
      </div>

      {/* LISTE DES TRANSACTIONS */}
      <div style={styles.listCard}>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((operation, index) => {
            const isDebit = operation.amount < 0;
            const formattedDate = formatDate(operation.date);

            return (
              <div style={styles.itemRow} key={operation.id || index}>
                
                {/* Partie Gauche : Badge Flèche & Détails */}
                <div style={styles.leftCol}>
                  <div style={styles.arrowBadge(isDebit)}>
                    <i className={isDebit ? "fas fa-arrow-up-right-from-square" : "fas fa-arrow-down-left-and-arrow-up-right-to-center"}>
                      {isDebit ? '↗' : '↙'}
                    </i>
                  </div>
                  <div style={styles.textDetails}>
                    <p style={styles.opType}>{operation.type}</p>
                    <p style={styles.opRef}>{operation.reference || 'Aucune référence'}</p>
                  </div>
                </div>

                {/* Partie Centrale : Date Structurée */}
                <div style={styles.dateCol}>
                  <p style={styles.dateDay}>{formattedDate.day}</p>
                  <p style={styles.dateSub}>
                    <i className="far fa-calendar" style={{ fontSize: '0.65rem' }}></i>
                    {formattedDate.month}
                  </p>
                  {formattedDate.year && <p style={{ ...styles.dateSub, paddingLeft: '9px' }}>{formattedDate.year}</p>}
                </div>

                {/* Partie Droite : Statut & Montant */}
                <div style={styles.rightCol}>
                  <div style={styles.statusBadge}>
                    {operation.status || 'Effectué'}
                  </div>
                  <div style={styles.amountText(isDebit)}>
                    {isDebit ? '-' : '+'} {formatCurrency(operation.amount)}
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', margin: '1rem 0' }}>
            Aucune transaction trouvée.
          </p>
        )}
      </div>

    </div>
  );
};

export default History;