importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/main.min.css', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/android-chrome-192x192.png', revision: null },
    { url: '/android-chrome-512x512.png', revision: null },
    { url: '/apple-touch-icon.png', revision: null },
    { url: '/browserconfig.xml', revision: null },
    { url: '/favicon-32x32.png', revision: null },
    { url: '/mstile-150x150.png', revision: null },
    { url: '/safari-pinned-tab.svg', revision: null }
  ])
  
  workbox.routing.registerNavigationRoute('/index.html')

  workbox.routing.registerRoute(
    // Cache style resources, i.e CSS files
    ({ request }) => request.destination === 'style',
    // Use cache but update in the background
    new workbox.strategies.StyleWhileRevalidate({ cacheName: 'css-cache' })
  )
}
