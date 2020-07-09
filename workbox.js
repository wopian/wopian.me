const { generateSW } = require('workbox-build')

generateSW({
  swDest: 'dist/sw.js',
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{png,svg,html,min.css,js}'
  ],
  globIgnores: [
  ],
  skipWaiting: true,
  clientsClaim: true,
  sourcemap: false,
  navigateFallback: '/index.html',
  // mode: 'production',
  navigationPreload: false,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/gc\.zgo\.at/,
      handler: 'CacheFirst'
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts'
      }
    }
  ]
}).then(() => {
  console.log('Generated new service worker')
}).catch(err => {
  console.error('Unable to generate a new service worker. ', err)
})
