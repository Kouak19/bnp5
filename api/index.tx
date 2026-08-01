import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const requiredEnv = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS'];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length > 0) {
  console.warn(`Missing environment variables: ${missingEnv.join(', ')}.`);
}

// Configuration du transporteur Gmail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true', // false pour 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Doit être ton mot de passe d'application à 16 caractères
  },
  tls: {
    // Crucial sur Vercel pour éviter les rejets de certificats SSL
    rejectUnauthorized: false
  }
});

const recentRequests = new Map();
const duplicateWindowMs = 10000;

const getRequestKey = (body) => {
  if (body.requestId) {
    return `RID:${String(body.requestId)}`;
  }
  return [
    String(body.email || '').trim().toLowerCase(),
    Number(body.amount) || 0,
    String(body.iban || '').trim().toUpperCase(),
    String(body.swift || '').trim().toUpperCase(),
    String(body.bankCode || '').trim(),
    String(body.firstName || '').trim().toLowerCase(),
    String(body.lastName || '').trim().toLowerCase(),
    String(body.label || '').trim().toLowerCase(),
  ].join('|');
};

app.post('/api/send-email', async (req, res) => {
  const { requestId, firstName, lastName, iban, swift, bankCode, amount, email, label } = req.body;
  const amountNumber = parseFloat(amount);

  if (!firstName || !lastName || !iban || !swift || !bankCode || !amount || !email || Number.isNaN(amountNumber)) {
    return res.status(400).json({ message: 'Champs requis manquants ou invalides pour le virement.' });
  }

  if (missingEnv.length > 0) {
    return res.status(500).json({
      message: `Configuration serveur manquante: ${missingEnv.join(', ')}`,
    });
  }

  const key = getRequestKey({ requestId, firstName, lastName, iban, swift, bankCode, amount: amountNumber, email, label });
  const now = Date.now();
  const lastTime = recentRequests.get(key);

  if (lastTime && now - lastTime < duplicateWindowMs) {
    console.warn('Duplicate send-email request ignored for:', key);
    return res.status(409).json({ message: 'Requête dupliquée ignorée.' });
  }

  recentRequests.set(key, now);

  const formattedAmount = amountNumber.toFixed(2).replace('.', ',');

  const currentExecutionDate = new Date().toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(',', ' à');

  const uniqueReference = `BNP${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Date.now().toString().slice(-6)}`;

  const bnpHtmlTemplate = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6; background-color: #ffffff;">
    <div style="background-color: #006643; color: #ffffff; text-align: center; padding: 35px 20px; border-radius: 4px; margin-bottom: 25px; margin-left: 10px; margin-right: 10px;">
      <h1 style="margin: 0 0 10px 0; font-size: 26px; font-weight: bold; letter-spacing: 0.5px;">
        Confirmation de virement
      </h1>
      <p style="margin: 0; font-size: 13px; color: #e0f2f1; opacity: 0.85; font-family: monospace;">
        Référence : ${uniqueReference}
      </p>
    </div>
    <div style="padding: 0 15px; margin-bottom: 25px;">
      <p style="font-size: 16px; margin-bottom: 15px; color: #222222;">
        Cher(e) <strong style="text-transform: uppercase;">${lastName} ${firstName}</strong> ,
      </p>
      <p style="font-size: 14.5px; color: #444444; margin: 0;">
        Nous vous confirmons l'exécution de votre virement avec les détails suivants :
      </p>
    </div>
    <div style="text-align: center; margin-bottom: 25px;">
      <span style="font-size: 38px; font-weight: bold; color: #006643;">
        ${formattedAmount} €
      </span>
    </div>
    <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px 20px; margin: 0 15px 25px 15px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14.5px;">
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 12px 0; font-weight: bold; color: #495057; width: 40%;">Date:</td>
          <td style="padding: 12px 0; text-align: left; color: #212529; font-weight: 500;">${currentExecutionDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 12px 0; font-weight: bold; color: #495057;">IBAN:</td>
          <td style="padding: 12px 0; text-align: left; color: #212529; font-weight: 500; letter-spacing: 0.3px;">${iban}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 12px 0; font-weight: bold; color: #495057;">Code SWIFT:</td>
          <td style="padding: 12px 0; text-align: left; color: #212529; font-weight: 500;">${swift}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 12px 0; font-weight: bold; color: #495057;">Code Banque:</td>
          <td style="padding: 12px 0; text-align: left; color: #212529; font-weight: 500;">${bankCode}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; font-weight: bold; color: #495057;">Libellé:</td>
          <td style="padding: 12px 0; text-align: left; color: #212529; font-weight: 500; text-transform: uppercase;">${label || 'REMBOURSEMENT'}</td>
        </tr>
      </table>
    </div>
    <div style="background-color: #004d32; color: #ffffff; text-align: center; padding: 30px 20px; border-radius: 4px; margin: 0 10px; font-size: 13px;">
      <p style="margin: 0; opacity: 0.7; font-size: 12px;">
        © 2026 BNP Paribas - Tous droits réservés
      </p>
    </div>
  </div>
  `;

  const mailOptions = {
    from: `"BNP Paribas" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: email,
    subject: `BNP Paribas - Confirmation de votre virement`,
    text: `Bonjour ${firstName} ${lastName},\n\nVotre virement de ${formattedAmount} € a bien été enregistré.`,
    html: bnpHtmlTemplate,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({
      message: 'E-mail envoyé avec succès.',
      info: { messageId: info.messageId, accepted: info.accepted },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Impossible d\'envoyer l\'e-mail.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});


export default app;