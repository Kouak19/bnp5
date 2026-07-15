import React, { useState, useEffect } from 'react';
import { useBank } from '../context/BankContext';
import genericLogo from '../assets/logo.png'; // Logo générique de votre projet

const Login = () => {
  const { setIsAuthenticated, setCurrentView, showToast } = useBank();
  const [identifiant, setIdentifiant] = useState('');
  const [motdepasse, setMotdepasse] = useState('');
  const [keypad, setKeypad] = useState([]);

  // Génération du pavé numérique mélangé
  const generateKeypad = () => {
    const defaultButtons = [
      { label: '1', val: '1' },
      { label: '2', val: '2' },
      { label: '3', val: '3' },
      { label: '4', val: '4' },
      { label: '5', val: '5' },
      { label: '6', val: '6' },
      { label: '7', val: '7' },
      { label: '8', val: '8' },
      { label: '9', val: '9' },
      { label: '0', val: '0' }
    ];

    for (let i = defaultButtons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [defaultButtons[i], defaultButtons[j]] = [defaultButtons[j], defaultButtons[i]];
    }

    setKeypad(defaultButtons);
  };

  useEffect(() => {
    generateKeypad();
  }, []);

  const handleKeyPress = (num) => {
    if (motdepasse.length < 6) {
      setMotdepasse(prev => prev + num);
    }
  };

  const handleClear = () => {
    setMotdepasse('');
  };

  const handleBackspace = () => {
    setMotdepasse(prev => prev.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Identifiants configurés pour la validation
    const identifiantAttendu = '8077645109';
    const codeSecretAttendu = '427812';

    if (identifiant === identifiantAttendu && motdepasse === codeSecretAttendu) {
      showToast('Connexion réussie. Bienvenue dans votre Espace Client !', 'success');
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    } else {
      showToast('Identifiant ou code secret incorrect.', 'error');
      setMotdepasse('');
      generateKeypad();
    }
  };

  // Styles CSS en tant qu'objets JavaScript (style inline) pour écraser complètement l'ancien design
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f4f7f6',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '1rem',
      boxSizing: 'border-box'
    },
    container: {
      backgroundColor: '#ffffff',
      padding: '2.5rem 2rem',
      borderRadius: '24px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      boxSizing: 'border-box'
    },
    logo: {
      height: '45px',
      objectFit: 'contain',
      marginBottom: '0.5rem'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f4c43', // Vert émeraude sombre
      marginTop: '0.5rem',
      marginBottom: '0.25rem'
    },
    subtitle: {
      fontSize: '0.85rem',
      color: '#6b7280',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.25rem',
      textAlign: 'left'
    },
    label: {
      display: 'block',
      color: '#374151',
      marginBottom: '0.5rem',
      fontSize: '0.85rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '1rem',
      outline: 'none',
      backgroundColor: '#f9fafb',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s'
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      margin: '1.25rem 0',
      minHeight: '24px',
      alignItems: 'center'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      transition: 'background-color 0.15s ease'
    },
    keypad: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      margin: '1.5rem 0'
    },
    key: {
      padding: '1rem',
      fontSize: '1.25rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '16px',
      cursor: 'pointer',
      outline: 'none',
      userSelect: 'none',
      transition: 'background-color 0.1s'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      backgroundColor: '#115e59', // Vert canard / émeraude
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      marginTop: '1rem'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* En-tête de l'application */}
        <div>
          <img 
            src={genericLogo} 
            alt="Logo Banque" 
            style={styles.logo}
          />
          <div style={styles.title}>Accès Espace Client</div>
          <div style={styles.subtitle}>Connexion sécurisée</div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Identifiant */}
          <div style={styles.formGroup}>
            <label htmlFor="identifiant" style={styles.label}>Identifiant</label>
            <input 
              type="text" 
              id="identifiant" 
              name="identifiant" 
              maxLength={10}
              required 
              placeholder="Saisissez votre identifiant"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value.replace(/[^0-9]/g, ''))}
              style={styles.input}
            />
          </div>
          
          {/* Code Secret (Indicateurs visuels dynamiques) */}
          <div style={{ ...styles.formGroup, marginBottom: '1rem' }}>
            <label style={styles.label}>Code secret</label>
            <div style={styles.dotsContainer}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.dot,
                    backgroundColor: i < motdepasse.length ? '#10b981' : '#e5e7eb'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Pavé Numérique */}
          <div style={styles.keypad}>
            {keypad.map((btn, index) => (
              <button 
                key={index} 
                type="button" 
                onClick={() => handleKeyPress(btn.val)}
                style={{
                  ...styles.key,
                  backgroundColor: '#f3f4f6',
                  color: '#1f2937'
                }}
              >
                {btn.label}
              </button>
            ))}
            {/* Effacer (C) */}
            <button 
              type="button" 
              onClick={handleClear}
              style={{
                ...styles.key,
                backgroundColor: '#fee2e2',
                color: '#ef4444'
              }}
            >
              C
            </button>
            {/* Retour arrière (←) */}
            <button 
              type="button" 
              onClick={handleBackspace}
              style={{
                ...styles.key,
                backgroundColor: '#e5e7eb',
                color: '#1f2937'
              }}
            >
              ←
            </button>
          </div>
          
          {/* Validation */}
          <input 
            type="submit" 
            value="Se connecter"
            style={styles.submitButton}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;