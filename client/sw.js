importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '2020.Jul.02-1' },
    { url: '/main.min.css', revision: '2020.Jul.02-1' },
    { url: '/manifest.json', revision: '2020.Jul.01' },
  ])

  const handler = workbox.precaching.createHandlerBoundToURL('/index.html')
  const navigationRoute = new workbox.routing.NavigationRoute(handler)
  const defaultStrategy = new workbox.strategies.StaleWhileRevalidate()

  workbox.routing.registerRoute(navigationRoute)
  workbox.routing.setDefaultHandler(args => {
    if (args.event.request.method === 'GET') {
      return defaultStrategy.handle(args)
    }
    return fetch(args.event.request)
  })
}
