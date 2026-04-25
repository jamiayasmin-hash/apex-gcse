<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <!-- PWA -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#f59e0b" />
    <meta name="mobile-web-app-capable" content="yes" />

    <!-- iOS PWA -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Apex" />
    <link rel="apple-touch-icon" href="/icons/icon-192.png" />

    <!-- SEO -->
    <title>Apex — The Road to Grade 9</title>
    <meta name="description" content="The smart GCSE revision app. Spaced repetition, AI tutor, and the 2357 method — all in one place." />

    <!-- Open Graph (for sharing) -->
    <meta property="og:title" content="Apex — The Road to Grade 9" />
    <meta property="og:description" content="Smarter GCSE revision. 2357 spaced repetition + AI tutor." />
    <meta property="og:type" content="website" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />

    <style>
      *, *::before, *::after { box-sizing: border-box; }
      html, body, #root { margin: 0; padding: 0; height: 100%; }
      body {
        font-family: 'DM Sans', system-ui, sans-serif;
        background: #0a0d14;
        color: #f1f5f9;
        -webkit-font-smoothing: antialiased;
        overscroll-behavior: none;
      }
      /* iOS safe area insets */
      #root {
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
      }
      /* Prevent text selection flicker on mobile taps */
      button { -webkit-tap-highlight-color: transparent; user-select: none; }
      /* Smooth scrolling */
      * { -webkit-overflow-scrolling: touch; }
    </style>
  </head>
  <body>
    <noscript>Apex requires JavaScript to run. Please enable it in your browser settings.</noscript>
    <div id="root"></div>

    <script>
      // Register service worker for PWA / offline support
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then(reg => console.log('[Apex] Service worker registered:', reg.scope))
            .catch(err => console.log('[Apex] Service worker failed:', err));
        });
      }

      // Install prompt — capture for later use (Add to Home Screen)
      let deferredPrompt;
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        // Dispatch event so React app can show "Install App" button
        window.dispatchEvent(new CustomEvent('apex-install-available'));
      });
      window.triggerInstall = () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
        }
      };
    </script>
  </body>
</html>
