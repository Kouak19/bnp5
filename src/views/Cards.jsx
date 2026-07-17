import React, { useState } from 'react';
import { useBank } from '../context/BankContext';

const Cards = () => {
  const { card, toggleCardBlock, toggleForeignPayments, updateCardLimit, transactions } = useBank();
  const [isBlocked, setIsBlocked] = useState(card.isBlocked || false);
  const [foreignPayments, setForeignPayments] = useState(card.foreignPayments || false);
  const [showFullNumber, setShowFullNumber] = useState(false);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(val);
  };

  // Filtrage des transactions de type "carte"
  const cardTransactions = transactions.filter(
    (t) =>
      (t.amount < 0 && t.type.toLowerCase().includes('carte')) ||
      t.type.toLowerCase().includes('carrefour') ||
      t.type.toLowerCase().includes('station') ||
      t.type.toLowerCase().includes('restaurant') ||
      t.type.toLowerCase().includes('bistrot')
  );

  const handleBlockToggle = () => {
    const nextState = !isBlocked;
    setIsBlocked(nextState);
    toggleCardBlock();
    alert(nextState ? "Votre carte a été bloquée temporairement." : "Votre carte a été débloquée.");
  };

  const handleForeignToggle = () => {
    const nextState = !foreignPayments;
    setForeignPayments(nextState);
    toggleForeignPayments();
    alert(nextState ? "Paiements à l'étranger activés." : "Paiements à l'étranger désactivés.");
  };

  const handleLimitSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateCardLimit(value);
  };

  const handleRevealCardNumber = () => {
    setShowFullNumber(!showFullNumber);
  };

  const currentLimit = card.limit || 3000;

  return (
    <div className="container" style={{ margin: '0 auto', maxWidth: '600px', padding: '1rem', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 💳 LA CARTE VIRTUELLE (Intégrée en haut) */}
      <div className="card-wrapper" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <div className="credit-card" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          height: '220px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '20px',
          padding: '1.5rem',
          boxSizing: 'border-box',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          opacity: isBlocked ? 0.75 : 1,
          transition: 'all 0.3s ease',
          overflow: 'hidden'
        }}>
          {/* Haut de la carte : Puce & Type */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="card-chip" style={{
              width: '45px',
              height: '35px',
              background: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)',
              borderRadius: '8px',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5)'
            }}></div>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px', color: '#10b981' }}>
              VISA
            </div>
          </div>

          {/* Milieu : Numéro de carte */}
          <div className="card-number" style={{
            fontSize: '1.25rem',
            letterSpacing: '3px',
            fontFamily: 'monospace',
            textAlign: 'center',
            margin: '1rem 0',
            color: '#ffffff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            {isBlocked 
              ? "**** **** **** ****" 
              : showFullNumber 
                ? (card.number || "4273 7812 3456 2284") 
                : `**** **** **** ${card.number ? card.number.slice(-4) : "2284"}`
            }
          </div>

          {/* Bas de la carte : Titulaire & Expiration */}
          <div className="card-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div className="card-holder" style={{ textAlign: 'left' }}>
              <div className="card-label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px', marginBottom: '2px' }}>Titulaire</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>{card.holder || 'Alexy Louan'}</div>
            </div>
            <div className="card-expires" style={{ textAlign: 'right' }}>
              <div className="card-label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px', marginBottom: '2px' }}>Expire</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{card.expiry || '12/27'}</div>
            </div>
          </div>

          {/* Overlay si la carte est bloquée */}
          {isBlocked && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.85)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px'
            }}>
              <div style={{
                background: '#ef4444',
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '800',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)'
              }}>CARTE VERROUILLÉE</div>
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#95a5a6', fontSize: '0.8rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
        <i className="fas fa-lightbulb" style={{ color: '#f39c12' }}></i>
        Cliquez sur "Numéro de carte complet" ci-dessous pour révéler vos numéros.
      </div>

      {/* SECTION COMMANDES RAPIDES */}
      <div className="card-section" style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <h3 style={{ 
          fontSize: '0.9rem', 
          color: '#34495e', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          marginBottom: '1.2rem',
          fontWeight: '700'
        }}>
          Commandes Rapides
        </h3>

        {/* Verrouillage Temporaire */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0', borderBottom: '1px solid #f5f6f7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: '#0066ff', fontSize: '1.2rem' }}>
              <i className="fas fa-lock"></i>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#0066ff' }}>Verrouillage Temporaire</div>
              <div style={{ fontSize: '0.75rem', color: '#95a5a6' }}>Gelez votre carte en cas de perte</div>
            </div>
          </div>
          <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '46px', height: '24px' }}>
            <input 
              type="checkbox" 
              checked={isBlocked} 
              onChange={handleBlockToggle}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: isBlocked ? '#ef4444' : '#e2e8f0',
              borderRadius: '24px', transition: '0.3s',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <span style={{
                position: 'absolute', content: '""', height: '18px', width: '18px', left: isBlocked ? '24px' : '4px', bottom: '3px',
                backgroundColor: 'white', borderRadius: '50%', transition: '0.3s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}></span>
            </span>
          </label>
        </div>

        {/* Numéro de carte complet */}
        <div 
          onClick={handleRevealCardNumber}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0', borderBottom: '1px solid #f5f6f7', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: '#0066ff', fontSize: '1.2rem' }}>
              <i className={showFullNumber ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#0066ff' }}>
                {showFullNumber ? 'Masquer les numéros' : 'Numéro de carte complet'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#95a5a6' }}>
                {showFullNumber ? 'Sécuriser l\'affichage' : 'Révélez le numéro à 16 chiffres'}
              </div>
            </div>
          </div>
          <div style={{ color: '#95a5a6' }}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>

        {/* Paiements à l'étranger */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: '#0066ff', fontSize: '1.2rem' }}>
              <i className="fas fa-globe"></i>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#0066ff' }}>Paiements à l'Étranger</div>
              <div style={{ fontSize: '0.75rem', color: '#95a5a6' }}>Paiements internationaux autorisés</div>
            </div>
          </div>
          <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '46px', height: '24px' }}>
            <input 
              type="checkbox" 
              checked={foreignPayments} 
              onChange={handleForeignToggle}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: foreignPayments ? '#2ecc71' : '#e2e8f0',
              borderRadius: '24px', transition: '0.3s',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <span style={{
                position: 'absolute', content: '""', height: '18px', width: '18px', left: foreignPayments ? '24px' : '4px', bottom: '3px',
                backgroundColor: 'white', borderRadius: '50%', transition: '0.3s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}></span>
            </span>
          </label>
        </div>
      </div>

      {/* SECTION PLAFOND DE PAIEMENT */}
      <div className="card-section" style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <h3 style={{ 
          fontSize: '0.9rem', 
          color: '#34495e', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          marginBottom: '0.5rem',
          fontWeight: '700'
        }}>
          Plafond de Paiement
        </h3>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>Plafond Actuel :</span>
          <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#16a085' }}>{formatCurrency(currentLimit)} / mois</span>
        </div>

        {/* Curseur Range Slider */}
        <div style={{ position: 'relative', padding: '10px 0' }}>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="500"
            value={currentLimit} 
            onChange={handleLimitSliderChange}
            style={{
              width: '100%',
              height: '4px',
              borderRadius: '5px',
              outline: 'none',
              background: '#e2e8f0',
              WebkitAppearance: 'none'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#95a5a6', marginTop: '8px' }}>
            <span>500 €</span>
            <span>2 500 €</span>
            <span>5 000 €</span>
          </div>
        </div>

        {/* Garantie Zéro Franchise */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start'
        }}>
          <span style={{ color: '#27ae60', fontSize: '1.1rem', marginTop: '2px' }}>
            <i className="fas fa-shield-alt"></i>
          </span>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#2c3e50' }}>Garantie Zéro Franchise</div>
            <div style={{ fontSize: '0.75rem', color: '#7f8c8d', lineHeight: '1.3', marginTop: '2px' }}>
              Toutes vos transactions sont couvertes à 100% contre la fraude électronique SEPA SECURE.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION OPÉRATIONS RÉCENTES */}
      <div className="card-section" style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <h3 style={{ 
          fontSize: '0.9rem', 
          color: '#34495e', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Opérations récentes par carte
        </h3>

        <div className="transaction-list">
          {cardTransactions.length > 0 ? (
            cardTransactions.map((tx, idx) => (
              <div key={tx.id || idx} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0.8rem 0',
                borderBottom: idx !== cardTransactions.length - 1 ? '1px solid #f5f6f7' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    background: '#f8f9fa', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#7f8c8d'
                  }}>
                    <i className={`fas ${
                      tx.type.toLowerCase().includes('essence') || tx.type.toLowerCase().includes('total') 
                        ? 'fa-gas-pump' 
                        : tx.type.toLowerCase().includes('resto') || tx.type.toLowerCase().includes('bistrot') 
                        ? 'fa-utensils' 
                        : 'fa-shopping-cart'
                    }`}></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#2c3e50', fontWeight: '600' }}>{tx.type}</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#95a5a6' }}>{tx.date}</p>
                  </div>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#c0392b' }}>
                  -{formatCurrency(Math.abs(tx.amount))}
                </div>
              </div>
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem 0', 
              color: '#95a5a6', 
              fontSize: '0.85rem' 
            }}>
              Aucune opération récente effectuée avec cette carte
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Cards;