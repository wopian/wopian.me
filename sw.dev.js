importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '2' },
    { url: '/main.min.css', revision: '1' },
    { url: '/manifest.json', revision: '2' },
    { url: '/favicon.svg', revision: '1' },
    { url: '/apple-touch-icon.png', revision: '1' },
    { url: '/safari-pinned-tab.svg', revision: '1' }
  ])
  
  const handler = workbox.precaching.createHandlerBoundToURL('/index.html')
  const navigationRoute = new workbox.routing.NavigationRoute(handler)
  workbox.routing.registerRoute(navigationRoute)

  workbox.routing.registerRoute(
    // Cache style resources, i.e CSS files
    ({ request }) => request.destination === 'style',
    // Use cache but update in the background
    new workbox.strategies.StaleWhileRevalidate({ cacheName: 'css-cache' })
  )
}
