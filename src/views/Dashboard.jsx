import React, { useEffect, useRef } from 'react';
import { useBank } from '../context/BankContext';

const Dashboard = () => {
  const { user, accounts, transactions, globalBalance, setCurrentView } = useBank();
  
  // Formatage des montants en Euros (Locale française)
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(val);
  };

  const recentTransactions = transactions.slice(0, 5); // Récupère les 5 dernières transactions

  // Données de simulation pour les catégories de dépenses
  const categories = [
    { label: 'Virement', amount: 750000.00, percentage: 95, color: '#115e59' },
    { label: 'Alimentation', amount: 85.42, percentage: 15, color: '#10b981' },
    { label: 'Loisirs', amount: 42.50, percentage: 8, color: '#3b82f6' },
    { label: 'Transport', amount: 65.00, percentage: 12, color: '#f59e0b' }
  ];

  return (
    <>
      {/* Carte Profil Utilisateur */}
      <div className="profile-card" style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        marginBottom: '1.5rem'
      }}>
        <div className="profile-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="profile-info" style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.5rem 0' }}>
              {user.name || 'Alexy Louan'}
            </h2>
            <div className="location" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-map-marker-alt"></i>
              <span>{user.location || 'France'}</span>
            </div>
            <p style={{ color: '#6b7280', margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>
              Gestionnaire: <span style={{ color: '#10b981', fontWeight: '600' }}>{user.manager || 'Arnaud Leroy'}</span>
            </p>
            <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.8rem' }} id="lastConnection">
              Dernière connexion: <span>{user.lastConnection || '31/05/2026 18:46'}</span>
            </p>
          </div>
          <div className="balance-info" style={{ textAlign: 'right' }}>
            <div className="account-status" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: user.status === 'Bloqué' ? '#fef2f2' : '#ecfdf5',
              color: user.status === 'Bloqué' ? '#ef4444' : '#10b981',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              <span className="status-dot" style={{ width: '8px', height: '8px', backgroundColor: user.status === 'Bloqué' ? '#ef4444' : '#10b981', borderRadius: '50%' }}></span>
              {user.status === 'Bloqué' ? 'BLOQUÉ' : 'ACTIF'}
            </div>
            <div className="balance-amount" style={{ fontSize: '2rem', fontWeight: '800', color: '#111827' }}>
              {formatCurrency(globalBalance || 50000.00)}
            </div>
            <div className="balance-label" style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '500', textTransform: 'uppercase' }}>
              Solde global disponible
            </div>
          </div>
        </div>
      </div>

      {/* Actions Rapides */}
      <h3 style={{ textAlign: 'left', fontSize: '1.1rem', fontWeight: '700', color: '#374151', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Actions Rapides
      </h3>
      <div className="quick-actions" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div className="action-card" onClick={() => setCurrentView('virement')} style={{
          backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', transition: 'transform 0.2s'
        }}>
          <i className="fas fa-paper-plane" style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Virement</div>
        </div>
        <div className="action-card" onClick={() => setCurrentView('rib')} style={{
          backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', transition: 'transform 0.2s'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>RIB QR</div>
        </div>
        <div className="action-card" onClick={() => setCurrentView('virement')} style={{
          backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', transition: 'transform 0.2s'
        }}>
          <i className="fas fa-clock" style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Programmé</div>
        </div>
        <div className="action-card" onClick={() => setCurrentView('cartes')} style={{
          backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', transition: 'transform 0.2s'
        }}>
          <i className="fas fa-money-check" style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '0.5rem' }}></i>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Chéquiers</div>
        </div>
      </div>

      {/* Graphique d'évolution des 6 derniers mois */}
      <div className="chart-section" style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        marginBottom: '1.5rem',
        textAlign: 'left'
      }}>
        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#1f2937' }}>Suivi d'activité</h3>
        <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.8rem', color: '#9ca3af' }}>6 derniers mois</p>
        
        {/* Graphique vectoriel (SVG) dynamique */}
        <div style={{ width: '100%', height: '140px', position: 'relative' }}>
          <svg viewBox="0 0 500 100" width="100%" height="100%" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Zone ombrée sous la courbe */}
            <path 
              d="M 10 70 Q 100 35 200 48 T 400 30 T 490 15 L 490 100 L 10 100 Z" 
              fill="url(#chartGradient)" 
            />
            {/* Ligne principale du graphique */}
            <path 
              d="M 10 70 Q 100 35 200 48 T 400 30 T 490 15" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3.5" 
              strokeLinecap="round"
            />
            {/* Points clés sur la courbe */}
            <circle cx="10" cy="70" r="4" fill="#10b981" />
            <circle cx="130" cy="42" r="4" fill="#10b981" />
            <circle cx="230" cy="48" r="4" fill="#10b981" />
            <circle cx="330" cy="41" r="4" fill="#10b981" />
            <circle cx="430" cy="25" r="4" fill="#10b981" />
            <circle cx="490" cy="15" r="4" fill="#10b981" />
          </svg>
        </div>
        {/* Étiquettes des mois */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0.5rem 0 0.5rem', fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>
          <span>Nov</span>
          <span>Déc</span>
          <span>Jan</span>
          <span>Fév</span>
          <span>Mar</span>
          <span>Avr</span>
        </div>
      </div>

      {/* Dépenses par Catégorie */}
      <div className="categories-section" style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        marginBottom: '1.5rem',
        textAlign: 'left'
      }}>
        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#1f2937' }}>Dépenses par Catégorie</h3>
        <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.8rem', color: '#9ca3af' }}>Analyse globale récente</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {categories.map((cat, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>
                <span>{cat.label}</span>
                <span>{formatCurrency(cat.amount)}</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${cat.percentage}%`,
                  height: '100%',
                  backgroundColor: cat.color,
                  borderRadius: '4px',
                  transition: 'width 0.5s ease-out'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Vos Comptes */}
      <h2 className="section-title" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#374151',
        margin: '2rem 0 1rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        Vos comptes
        <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('dashboard'); }} style={{
          fontSize: '0.85rem', color: '#10b981', textDecoration: 'none', textTransform: 'none', fontWeight: '600'
        }}>Voir tout <i className="fas fa-chevron-right"></i></a>
      </h2>

      <div className="accounts-grid" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {accounts.map((acc, index) => (
          <div className="account-card" key={acc.id || index} style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="account-icon" style={{
                backgroundColor: '#f0fdf4',
                color: '#10b981',
                padding: '12px',
                borderRadius: '14px',
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className={`fas ${acc.icon === 'wallet' ? 'fa-wallet' : 'fa-piggy-bank'}`}></i>
              </div>
              <div>
                <div className="account-type" style={{ fontSize: '1rem', fontWeight: '700', color: '#1f2937' }}>{acc.type}</div>
                <div className="account-number" style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{acc.number}</div>
              </div>
            </div>
            <div className="account-balance" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827' }}>
              {formatCurrency(acc.balance)}
            </div>
          </div>
        ))}
      </div>

      {/* Moteur d'importation factice ("Scraper") */}
      <div className="scraper-box" style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        marginBottom: '2rem',
        textAlign: 'left',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <i className="fas fa-database" style={{ color: '#1f2937', fontSize: '1.2rem' }}></i>
          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#1f2937', textTransform: 'uppercase' }}>
            Scraper Banque
          </h4>
        </div>
        <p style={{ margin: '0 0 1rem 0', fontSize: '0.75rem', color: '#9ca3af' }}>
          Moteur d'importation de l'ancienne version
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button style={{
            flex: '1',
            minWidth: '120px',
            padding: '0.6rem',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#f3f4f6',
            color: '#9ca3af',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Simulation en 1-Clic
          </button>
          <button style={{
            flex: '1',
            minWidth: '120px',
            padding: '0.6rem',
            borderRadius: '10px',
            border: '1px dashed #e5e7eb',
            backgroundColor: 'transparent',
            color: '#4b5563',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Coller du Code HTML
          </button>
        </div>
      </div>

      {/* Dernières Opérations */}
      <h2 className="section-title" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#374151',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>Dernières opérations</h2>

      <div className="transactions" style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        padding: '1.5rem',
        textAlign: 'left'
      }}>
        <div className="transaction-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem'
        }}>
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#1f2937' }}>Transactions récentes</h3>
          <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('historique'); }} style={{
            fontSize: '0.85rem', color: '#10b981', textDecoration: 'none', fontWeight: '600'
          }}>Voir l'historique</a>
        </div>
        <div className="transaction-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recentTransactions.map((tx, index) => {
            const isNegative = tx.amount < 0;
            return (
              <div className="transaction-item" key={tx.id || index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: index !== recentTransactions.length - 1 ? '1rem' : '0',
                borderBottom: index !== recentTransactions.length - 1 ? '1px dashed #f3f4f6' : 'none'
              }}>
                <div className="transaction-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="transaction-icon" style={{
                    backgroundColor: isNegative ? '#fee2e2' : '#ecfdf5',
                    color: isNegative ? '#ef4444' : '#10b981',
                    padding: '10px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    boxSizing: 'border-box'
                  }}>
                    <i className={`fas ${isNegative ? 'fa-arrow-up-right-from-square' : 'fa-arrow-down-left-and-arrow-up-right-to-center'}`} style={{ fontSize: '0.9rem' }}></i>
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-title" style={{ fontWeight: '700', color: '#1f2937', fontSize: '0.95rem' }}>{tx.type}</div>
                    <div className="transaction-date" style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.15rem' }}>{tx.date}</div>
                    <div className="transaction-reference" style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.15rem', fontFamily: 'monospace' }}>{tx.reference}</div>
                  </div>
                </div>
                <div className={`transaction-amount ${isNegative ? 'amount-negative' : 'amount-positive'}`} style={{
                  fontSize: '1rem',
                  fontWeight: '800',
                  color: isNegative ? '#ef4444' : '#10b981'
                }}>
                  {isNegative ? '-' : '+'} {formatCurrency(Math.abs(tx.amount))}
                </div>
              </div>
            );
          })}
          {recentTransactions.length === 0 && (
            <div style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af' }}>
              Aucune opération récente
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;