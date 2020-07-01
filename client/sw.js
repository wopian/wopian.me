importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

if (workbox) {
  const handler = workbox.precaching.createHandlerBoundToURL('/index.html')
  const navigationRoute = new workbox.routing.NavigationRoute(handler)

  workbox.precaching.precacheAndRoute([
    { url: '/favicon.svg', revision: '2020.Jul.01' },
    { url: '/index.html', revision: '2020.Jul.02' },
    { url: '/main.min.css', revision: '2020.Jul.02' },
    { url: '/manifest.json', revision: '2020.Jul.01' },
    { url: '/mask-icon.svg', revision: '2020.Jul.01' },
  ])

  workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate())
  workbox.routing.registerRoute(navigationRoute)
}
