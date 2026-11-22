// 1) Firebase console → Project settings → Your apps → Web app → copy the config values here.
//    These values are not secrets; the Firestore security rules are what protect your data.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAR1tkec-ERPJ-huheftSwLgKwDfn6UtzE",
  authDomain: "cpsa-482c8.firebaseapp.com",
  projectId: "cpsa-482c8",
  storageBucket: "cpsa-482c8.firebasestorage.app",
  messagingSenderId: "880006311724",
  appId: "1:880006311724:web:06c949a8fc92c6a83d8689"
};

// 2) AI explanations (Firebase AI Logic → Gemini Developer API, works on the free Spark plan).
window.AI_CONFIG = {
  enabled: true,
  // Any Gemini model listed under Firebase AI Logic → models. Change it here if this one is retired.
  model: "gemini-3.5-flash",
  // reCAPTCHA v3 *site* key registered in Firebase → App Check for your web app.
  // AI Logic's setup turns on App Check enforcement, so AI calls fail until this is filled in.
  recaptchaSiteKey: "PASTE_HERE",
  claudeUrl: "https://claude.ai/chat/564e7778-77c6-4665-9059-104af1f80f85"
};
