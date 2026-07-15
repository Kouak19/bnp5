import React from 'react';
import { useBank } from '../context/BankContext';

const RIBView = () => {
  const { user, rib, showToast } = useBank();

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast(`${label} copié`, "success");
      })
      .catch(err => {
        console.error('Erreur lors de la copie: ', err);
      });
  };

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  // Valeurs par défaut conformes aux captures d'écran
  const userName = user?.name || 'Alexy Louan';
  const domiciliation = rib?.bankName || 'BNP PARIBAS';
  const codeBanque = rib?.bankCode || '30004';
  const codeGuichet = rib?.branchCode || '00819';
  const numCompte = rib?.accountNumber || '54350123000';
  const cleRib = rib?.key || '61';
  const ibanVal = rib?.iban || 'FR76 3000 4008 1954 3501 2300 061';
  const swiftVal = rib?.swift || 'BNPAFRPPXXX';

  // Générateur de QR Code de transfert simplifié (syntaxe standard de virement SEPA)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=IBAN:${ibanVal.replace(/\s+/g, '')}`;

  // Styles de l'interface
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
    mainCard: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      borderTop: '4px solid #10b981', // Ligne verte supérieure caractéristique
      padding: '1.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.03)',
      position: 'relative',
      textAlign: 'left'
    },
    badgeSecure: {
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: '#e6f4ea',
      color: '#137333',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '0.5px'
    },
    labelGroup: {
      marginBottom: '1.25rem'
    },
    smallLabel: {
      fontSize: '0.75rem',
      fontWeight: '700',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px',
      display: 'block'
    },
    largeValue: {
      fontSize: '1.1rem',
      fontWeight: '800',
      color: '#1e293b',
      margin: 0
    },
    greyBox: {
      backgroundColor: '#f8fafc',
      borderRadius: '18px',
      padding: '1.25rem',
      marginBottom: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    watermark: {
      position: 'absolute',
      right: '1.5rem',
      bottom: '1.5rem',
      fontSize: '1rem',
      fontWeight: '700',
      color: '#e2e8f0',
      pointerEvents: 'none',
      letterSpacing: '0.5px'
    },
    boxItem: {
      marginBottom: '1rem'
    },
    boxItemLast: {
      marginBottom: 0
    },
    copyRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    copyBtn: {
      background: 'none',
      border: 'none',
      color: '#10b981',
      fontSize: '1.1rem',
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: '6px',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    lineSeparator: {
      height: '1px',
      backgroundColor: '#f1f5f9',
      margin: '1.25rem 0'
    },
    qrContainer: {
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '1.5rem'
    },
    btnPrint: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      maxWidth: '220px',
      margin: '0 auto',
      padding: '0.8rem 1.5rem',
      borderRadius: '24px',
      border: '1px solid #cbd5e1',
      backgroundColor: '#ffffff',
      color: '#1e293b',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* EN-TÊTE DE LA PAGE */}
      <div style={styles.header}>
        <h1 style={styles.title}>Coordonnées Bancaires (RIB)</h1>
        <p style={styles.subtitle}>
          Consultez, copiez ou imprimez votre Relevé d'Identité Bancaire officiel
        </p>
      </div>

      {/* BLOC PRINCIPAL DU RIB */}
      <div style={styles.mainCard} className="print-area">
        
        {/* Badge Sécurisé */}
        <div style={styles.badgeSecure}>
          <i className="fas fa-shield-alt"></i> SÉCURISÉ
        </div>

        {/* Titulaire du Compte */}
        <div style={{ ...styles.labelGroup, marginTop: '1.5rem' }}>
          <span style={styles.smallLabel}>Titulaire du compte</span>
          <p style={styles.largeValue}>{userName}</p>
        </div>

        {/* Domiciliation */}
        <div style={styles.labelGroup}>
          <span style={styles.smallLabel}>Domiciliation</span>
          <p style={styles.largeValue}>{domiciliation}</p>
        </div>

        {/* CADRE GRIS : CODES ET NUMÉRO DE COMPTE */}
        <div style={styles.greyBox}>
          
          {/* Filigrane d'arrière-plan */}
          <div style={styles.watermark}>
            {domiciliation}
          </div>

          {/* Code Banque */}
          <div style={styles.boxItem}>
            <span style={styles.smallLabel}>Code Banque</span>
            <p style={{ ...styles.largeValue, fontSize: '1rem' }}>{codeBanque}</p>
          </div>

          {/* Code Guichet */}
          <div style={styles.boxItem}>
            <span style={styles.smallLabel}>Code Guichet</span>
            <p style={{ ...styles.largeValue, fontSize: '1rem' }}>{codeGuichet}</p>
          </div>

          {/* Numéro de Compte */}
          <div style={styles.boxItem}>
            <span style={styles.smallLabel}>N° Compte</span>
            <div style={styles.copyRow}>
              <p style={{ ...styles.largeValue, fontSize: '1rem' }}>{numCompte}</p>
              <button 
                style={styles.copyBtn} 
                onClick={() => copyToClipboard(numCompte, "Numéro de compte")}
                title="Copier le numéro de compte"
              >
                <i className="far fa-copy"></i>
              </button>
            </div>
          </div>

          {/* Clé RIB */}
          <div style={styles.boxItemLast}>
            <span style={styles.smallLabel}>Clé RIB</span>
            <p style={{ ...styles.largeValue, fontSize: '1.1rem' }}>{cleRib}</p>
          </div>
        </div>

        {/* IBAN */}
        <div style={styles.labelGroup}>
          <span style={styles.smallLabel}>Iban (International Bank Account Number)</span>
          <div style={styles.copyRow}>
            <p style={{ ...styles.largeValue, fontFamily: 'monospace', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
              {ibanVal}
            </p>
            <button 
              style={styles.copyBtn} 
              onClick={() => copyToClipboard(ibanVal, "IBAN")}
              title="Copier l'IBAN"
            >
              <i className="far fa-copy"></i>
            </button>
          </div>
        </div>

        <div style={styles.lineSeparator}></div>

        {/* SWIFT / BIC */}
        <div style={styles.labelGroup}>
          <span style={styles.smallLabel}>Swift / BIC (Bank Identifier Code)</span>
          <div style={styles.copyRow}>
            <p style={{ ...styles.largeValue, fontFamily: 'monospace', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
              {swiftVal}
            </p>
            <button 
              style={styles.copyBtn} 
              onClick={() => copyToClipboard(swiftVal, "SWIFT/BIC")}
              title="Copier le code SWIFT/BIC"
            >
              <i className="far fa-copy"></i>
            </button>
          </div>
        </div>

        {/* BLOC QR CODE */}
        <div style={styles.qrContainer}>
          <img 
            src={qrCodeUrl} 
            alt="QR Code de virement" 
            style={{ width: '60px', height: '60px', borderRadius: '8px', border: '1px solid #f1f5f9' }}
          />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1e293b' }}>Scanner pour Virement</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px', lineHeight: '1.3' }}>
              Compatible avec toutes les applications bancaires SEPA.
            </div>
          </div>
        </div>

        {/* BOUTON IMPRESSION */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button 
            onClick={handlePrint}
            style={styles.btnPrint}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#94a3b8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            <i className="fas fa-print"></i> Imprimer le RIB
          </button>
        </div>

      </div>

      {/* Règle CSS spécifique pour masquer les boutons lors de l'impression réelle */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area, .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
};

export default RIBView;