import { useEffect, useState } from 'react';

/**
 * LogoutConfirmModal : popup de confirmation de déconnexion stylée
 * Remplace la boîte de confirmation native du navigateur.
 */
const LogoutConfirmModal = ({ onConfirm, onCancel }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Petite animation d'entrée
    const timer = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    setClosing(true);
    setTimeout(onConfirm, 180);
  };

  const handleCancel = () => {
    setClosing(true);
    setTimeout(onCancel, 180);
  };

  // Fermeture par clic sur l'arrière-plan
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleCancel();
  };

  // Fermeture par touche Échap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      data-testid="logout-confirm-modal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10010,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: closing ? 'rgba(10, 15, 25, 0)' : 'rgba(10, 15, 25, 0.68)',
        backdropFilter: visible ? 'blur(4px)' : 'none',
        WebkitBackdropFilter: visible ? 'blur(4px)' : 'none',
        opacity: closing ? 0 : 1,
        transition: 'opacity 0.2s ease',
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
      onMouseDown={handleBackdropClick}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          transform: closing ? 'scale(0.9) translateY(12px)' : 'scale(1) translateY(0)',
          transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* En-tête vert avec icône */}
        <div
          style={{
            background: 'linear-gradient(135deg, #00915a 0%, #006f46 100%)',
            padding: '24px 24px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              border: '2px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: '#fff',
              marginBottom: '12px',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.2px' }}>
            Déconnexion de votre espace
          </p>
        </div>

        {/* Corps du message */}
        <div style={{ padding: '20px 24px 8px 24px', textAlign: 'center', color: '#475569' }}>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65 }}>
            Vous êtes sur le point de quitter votre espace client sécurisé.
            Souhaitez-vous vraiment vous déconnecter ?
          </p>
        </div>

        {/* Boutons d'action */}
        <div
          style={{
            padding: '16px 24px 24px 24px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            data-testid="logout-cancel"
            onClick={handleCancel}
            style={{
              flex: 1,
              maxWidth: '140px',
              background: '#f1f5f9',
              color: '#475569',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '12px 16px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Annuler
          </button>
          <button
            type="button"
            data-testid="logout-confirm"
            onClick={handleConfirm}
            style={{
              flex: 1,
              maxWidth: '140px',
              background: 'linear-gradient(135deg, #00915a 0%, #006f46 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 16px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 111, 70, 0.35)',
              transition: 'background 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #006f46 0%, #005536 100%)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #00915a 0%, #006f46 100%)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
