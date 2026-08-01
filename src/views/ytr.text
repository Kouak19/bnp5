import { useState, useRef } from 'react';
import { useBank } from '../context/BankContext';

const Transfer = () => {
  const { globalBalance, executeTransfer, showToast } = useBank();
  
  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [iban, setIban] = useState('');
  const [swift, setSwift] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [label, setLabel] = useState('');
  const [sendStatus, setSendStatus] = useState('idle');
  const [sendMessage, setSendMessage] = useState('');
  
  // Modals & progress states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(val);
  };

  const resetFormFields = () => {
    setFirstName('');
    setLastName('');
    setIban('');
    setSwift('');
    setBankCode('');
    setAmount('');
    setEmail('');
    setLabel('');
  };

  const stopSubmitting = () => {
    isSubmittingRef.current = false;
    setIsSubmitting(false);
  };

  const generateRequestId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    const transferAmount = parseFloat(amount);
    
    if (isNaN(transferAmount) || transferAmount <= 0) {
      setSendStatus('error');
      setSendMessage('Veuillez saisir un montant supérieur à 0.');
      return;
    }
    
    if (transferAmount > globalBalance) {
      setSendStatus('error');
      setSendMessage('Solde insuffisant pour effectuer cette transaction.');
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    
    const transferData = {
      requestId: generateRequestId(),
      firstName,
      lastName,
      iban,
      swift,
      bankCode,
      amount: transferAmount,
      email,
      label
    };

    setSendStatus('sending');
    setSendMessage('Envoi en cours...');
    setProgress(0);

    const duration = 2500; // 2.5 seconds total loading
    const intervalTime = 50; // update every 50ms
    const step = (100 * intervalTime) / duration; // percentage step

    const processTransfer = async () => {
      if (transferAmount > 10000) {
        setSendStatus('error');
        setSendMessage('Transaction refusée : compte bloqué.');
        setIsSubmitting(false);
        setProgress(0);
        setShowBlockedModal(true);
        showToast('Transaction refusée - Compte bloqué', 'error');
        return;
      }

      try {
        const response = await fetch('/api/index.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(transferData)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          const message = errorData?.message || 'Erreur réseau lors de l\'envoi.';
          throw new Error(message);
        }

        await response.json();

        executeTransfer(transferData);
        setReceiptData(transferData);
        resetFormFields();
        setSendStatus('success');
        setSendMessage('');
        setShowSuccessModal(true);
        showToast('Virement SEPA effectué avec succès', 'success');
      } catch (error) {
        setSendStatus('error');
        setSendMessage(error.message || 'Erreur lors de l\'envoi.');
        showToast('Erreur lors de l\'envoi', 'error');
      } finally {
        stopSubmitting();
        setProgress(0);
      }
    };
  
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        return next >= 100 ? 100 : Math.round(next);
      });
    }, intervalTime);

    setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      processTransfer();
    }, duration);
  };

  // Circular progress dimensions
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Styles réutilisables pour coller exactement à la maquette
  const styles = {
    card: {
      backgroundColor: '#ffffff',
      padding: '2rem 1.5rem',
      borderRadius: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      textAlign: 'left',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '800',
      color: '#475569',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '2rem',
      fontFamily: 'system-ui, sans-serif'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: '#475569',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    input: {
      width: '100%',
      padding: '1.1rem 1.25rem',
      borderRadius: '18px',
      border: '1.5px solid #e2e8f0',
      backgroundColor: '#ffffff',
      fontSize: '0.95rem',
      color: '#1e293b',
      fontWeight: '500',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease-in-out'
    },
    inputFocused: {
      borderColor: '#10b981',
      backgroundColor: '#f8fafc'
    },
    btnSubmit: {
      width: '100%',
      padding: '1.1rem',
      borderRadius: '18px',
      backgroundColor: '#10b981',
      color: '#ffffff',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
      transition: 'opacity 0.2s',
      marginTop: '1rem'
    }
  };

  return (
    <>
      <div className="welcome" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>Effectuer un virement</h4>
      </div>

      {/* En-tête du compte émetteur */}
      <div className="footer" style={{
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        textAlign: 'left'
      }}>
        <div className="gest_pic" style={{
          backgroundColor: '#f0fdf4',
          color: '#10b981',
          padding: '12px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className="fas fa-university fa-lg"></i>
        </div>
        <div className="text_footer">
          <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6b7280', fontWeight: '500', textTransform: 'uppercase' }}>Prélèvement: Compte Courant</h5>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#111827' }}>Solde disponible: <span style={{ color: '#10b981' }}>{formatCurrency(globalBalance)}</span></h3>
        </div>
      </div>

      {/* Formulaire stylisé d'après la maquette */}
      <div style={styles.card}>
        <h3 style={styles.title}>Informations du bénéficiaire</h3>
        
        <form id="virementForm" onSubmit={handleSubmit}>
          
          {/* NOM */}
          <div style={styles.formGroup}>
            <label htmlFor="nom" style={styles.label}>Nom</label>
            <input 
              type="text" 
              style={styles.input}
              id="nom" 
              required 
              placeholder="Ex: Leroy"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* PRÉNOM */}
          <div style={styles.formGroup}>
            <label htmlFor="prenom" style={styles.label}>Prénom</label>
            <input 
              type="text" 
              style={styles.input}
              id="prenom" 
              required 
              placeholder="Ex: Martine"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* IBAN */}
          <div style={styles.formGroup}>
            <label htmlFor="iban" style={styles.label}>Iban du compte destinataire</label>
            <input 
              type="text" 
              style={{ ...styles.input, fontFamily: 'monospace', letterSpacing: '1px' }}
              id="iban" 
              required 
              placeholder="FR76 3000..."
              value={iban}
              onChange={(e) => setIban(e.target.value.toUpperCase())}
            />
          </div>

          {/* SWIFT / BIC */}
          <div style={styles.formGroup}>
            <label htmlFor="swift" style={styles.label}>Code Swift / BIC</label>
            <input 
              type="text" 
              style={{ ...styles.input, fontFamily: 'monospace' }}
              id="swift" 
              required 
              placeholder="Ex: BNPAFRPPXXX"
              value={swift}
              onChange={(e) => setSwift(e.target.value.toUpperCase())}
            />
          </div>

          {/* CODE BANQUE */}
          <div style={styles.formGroup}>
            <label htmlFor="banque" style={styles.label}>Code Banque</label>
            <input 
              type="text" 
              style={styles.input}
              id="banque" 
              required 
              placeholder="Ex: 30004"
              value={bankCode}
              onChange={(e) => setBankCode(e.target.value.replace(/[^0-9]/g, ''))}
            />
          </div>

          {/* MONTANT */}
          <div style={styles.formGroup}>
            <label htmlFor="montant" style={styles.label}>Montant (€)</label>
            <input 
              type="number" 
              style={{ ...styles.input, fontWeight: '700' }}
              id="montant" 
              required 
              min="1"
              step="0.01"
              placeholder="Ex: 150.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* EMAIL DU DESTINATAIRE */}
          <div style={styles.formGroup}>
            <label htmlFor="dest_mail" style={styles.label}>Email du destinataire</label>
            <input 
              type="email" 
              style={styles.input}
              id="dest_mail" 
              required 
              placeholder="Ex: destinataire@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* LIBELLÉ */}
          <div style={styles.formGroup}>
            <label htmlFor="libelle" style={styles.label}>Libellé du virement</label>
            <input 
              type="text" 
              style={styles.input}
              id="libelle" 
              placeholder="Ex: Cadeau anniversaire"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          {/* BOUTON SOUMISSION */}
          <button 
            type="submit" 
            style={{ ...styles.btnSubmit, opacity: isSubmitting ? 0.7 : 1 }}
            id="submitBtn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Valider le virement'}
          </button>

          {sendMessage && (
            <p style={{
              marginTop: '1.25rem',
              color: sendStatus === 'error' ? '#ef4444' : sendStatus === 'success' ? '#10b981' : '#334155',
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              {sendMessage}
            </p>
          )}
        </form>
      </div>

      {/* 🔄 CIRCULAR LOADING PROGRESS MODAL */}
      {isSubmitting && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 25px rgba(0,0,0,0.15)',
            width: '90%',
            maxWidth: '350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)', marginBottom: '1.5rem' }}>
              <circle
                stroke="#e2e8f0"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="#10b981"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.05s linear' }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round"
              />
            </svg>
            <div style={{
              position: 'absolute',
              marginTop: '45px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b'
            }}>
              {progress}%
            </div>
            <h4 style={{ color: '#1e293b', marginBottom: '0.5rem', fontWeight: '700' }}>Envoi en cours</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Traitement du virement SEPA sécurisé...</p>
          </div>
        </div>
      )}

      {/* 🎉 SUCCESS VALIDATION MODAL */}
      {showSuccessModal && receiptData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 25px rgba(0,0,0,0.15)',
            width: '90%',
            maxWidth: '400px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1rem'
            }}>
              <i className="fas fa-check"></i>
            </div>
            <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontWeight: '800' }}>Virement Effectué !</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>Le transfert de fonds a été traité avec succès par nos services.</p>
            
            <div style={{
              textAlign: 'left',
              background: '#f8fafc',
              padding: '1rem',
              borderRadius: '1rem',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <div><strong>Bénéficiaire :</strong> {receiptData.firstName} {receiptData.lastName}</div>
              <div><strong>IBAN :</strong> {receiptData.iban}</div>
              <div><strong>Montant :</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>{formatCurrency(receiptData.amount)}</span></div>
              {receiptData.label && <div><strong>Libellé :</strong> {receiptData.label}</div>}
            </div>

            <button 
              className="btn btn-primary" 
              style={{ ...styles.btnSubmit, marginTop: 0 }}
              onClick={() => setShowSuccessModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* ⚠️ BLOCKED ACCOUNT ERROR MODAL */}
      {showBlockedModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 25px rgba(0,0,0,0.15)',
            width: '90%',
            maxWidth: '400px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#fef2f2',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1rem'
            }}>
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3 style={{ color: '#ef4444', marginBottom: '0.5rem', fontWeight: '800' }}>Virement Rejeté</h3>
            <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>Compte Bloqué</p>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Cette transaction ne peut pas être finalisée car votre compte fait l'objet d'une restriction temporaire. Veuillez contacter votre conseiller bancaire, <strong>Bernard Lavie</strong>, pour plus d'informations.
            </p>

            <button 
              className="btn btn-primary" 
              style={{ ...styles.btnSubmit, backgroundColor: '#ef4444', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)', marginTop: 0 }}
              onClick={() => setShowBlockedModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Transfer;