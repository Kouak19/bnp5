import { useEffect, useState } from 'react';

/**
 * BlockAlert : popup d'alerte de sécurité PERSISTANTE
 * S'affiche tant que le statut de l'utilisateur est "Bloqué".
 * Le bouton "Fermer" ne fait que réduire l'alerte en bandeau permanent
 * en haut de la page : elle ne peut jamais être complètement supprimée
 * tant que le compte n'est pas débloqué.
 */
const BlockAlert = ({ userName }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Bandeau permanent en haut de page (toujours visible) */}
      <div
        className="fixed top-0 left-0 right-0 z-[10001] flex items-center justify-center gap-2 px-4 py-2.5 text-white text-sm font-semibold tracking-wide"
        style={{
          background: 'linear-gradient(90deg, #b91c1c 0%, #dc2626 50%, #b91c1c 100%)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
          animation: 'pulse-band 2s infinite',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>🔒</span>
        <span>
          ALERTE SÉCURITÉ — Compte bloqué. Vous devez vous acquitter des frais de régularisation pour débloquer votre compte.
        </span>
        <span style={{ fontSize: '1.1rem' }}>🔒</span>
      </div>

      {/* Popup modale persistante (centrée) */}
      {!collapsed && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10002,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            animation: visible ? 'fade-in 0.4s ease' : 'none',
          }}
          // Empêche de fermer la modale en cliquant à l'extérieur
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '16px',
              width: 'min(460px, 92vw)',
              maxWidth: '460px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              border: '3px solid #dc2626',
              animation: visible ? 'zoom-in 0.4s ease' : 'none',
              fontFamily: 'inherit',
              overflow: 'hidden',
            }}
          >
            {/* En-tête rouge */}
            <div
              style={{
                background: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
                color: '#fff',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                  animation: 'shake 0.8s infinite',
                }}
              >
                ⚠️
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.5px' }}>
                  ALERTE SÉCURITÉ
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', opacity: 0.9 }}>
                  Action requise immédiatement
                </p>
              </div>
            </div>

            {/* Corps du message */}
            <div style={{ padding: '22px 24px', color: '#1e293b' }}>
              <p style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: 700, color: '#b91c1c' }}>
                {userName ? `Cher(e) ${userName},` : 'Cher(e) client(e),'}
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Votre compte est actuellement <strong style={{ color: '#b91c1c' }}>BLOQUÉ</strong> pour
                raison de sécurité. Afin de procéder au <strong>déblocage de votre compte</strong>, il
                est impératif de vous <strong>s'acquitter des frais de régularisation</strong> en attente.
              </p>
              <p
                style={{
                  marginTop: 14,
                  marginBottom: 0,
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderLeft: '4px solid #dc2626',
                  borderRadius: '8px',
                  padding: '12px 14px',
                }}
              >
                ⏳ Tant que les frais ne sont pas réglés, toutes les opérations de votre compte
                (virements, paiements, retraits) resteront suspendues.
              </p>
            </div>

            {/* Pied : bouton réduire uniquement */}
            <div
              style={{
                padding: '0 24px 22px 24px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                type="button"
                onClick={() => setCollapsed(true)}
                style={{
                  background: '#dc2626',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 32px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(220,38,38,0.4)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.03)';
                  e.target.style.boxShadow = '0 6px 18px rgba(220,38,38,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 14px rgba(220,38,38,0.4)';
                }}
              >
                J'ai bien pris note
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-band {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.88; }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
        }
      `}</style>
    </>
  );
};

export default BlockAlert;
