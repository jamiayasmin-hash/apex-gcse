# 🏔️ Apex — The Road to Grade 9

GCSE revision app with spaced repetition, AI tutor, and the 2357 method.

---

## 🚀 Deploy to Vercel (5 minutes)

### Option A — Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up free
2. Click **"Add New Project"**
3. Click **"Upload"** and drag this entire `apex-app` folder in
4. Click **Deploy**
5. Your app is live! ✅

### Option B — GitHub (Recommended for updates)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `apex-gcse`
3. Upload all these files to the repo
4. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
5. Select your repo → Deploy
6. Every time you update the code, Vercel auto-redeploys ✅

---

## 📱 Add to Home Screen (Mobile PWA)

**iPhone (Safari):**
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Tap "Add" — done! It now looks like a native app 🎉

**Android (Chrome):**
1. Open the app URL in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen" or "Install App"

---

## 🗄️ Supabase Setup (Already done!)
- Your Supabase URL and keys are already in the app
- The database schema has been run
- User accounts and data sync are ready to go

---

## 📁 File Structure
```
apex-app/
├── public/
│   ├── index.html        ← Main HTML with PWA tags
│   ├── manifest.json     ← PWA manifest
│   ├── sw.js             ← Service worker (offline support)
│   └── icons/
│       └── icon.svg      ← App icon
├── src/
│   ├── App.jsx           ← Main app (all screens)
│   └── index.js          ← React entry point
├── package.json          ← Dependencies
├── vercel.json           ← Vercel routing config
└── README.md             ← This file
```

---

## ✨ Features
- 🔐 Supabase auth — sign up, sign in, sync across devices
- 📐 2357 spaced repetition engine
- 🧠 Metacognitive calibration (confidence + result = mastery score)
- 🤖 AI Tutor powered by Claude API
- 📊 Answer review with full history
- 🌗 Dark / Light theme toggle
- 📱 PWA — works offline, installable on mobile
- 🎯 Subject cards with circular mastery rings

---

Built with React · Supabase · Claude AI
