/* eslint-disable import/no-unresolved */

import { Helmet } from 'react-helmet'
import { template } from 'rapscallion'
import manifest from '../../dist/public/webpackChunkManifest.json'
import assets from '../../dist/public/webpackAssets.json'

/**
 * Inlines the webpack manifest, so that the manifest bundle's hash won't change between builds
 */

const inlineManifest = `
  <script type="text/javascript">
    window.webpackManifest=${JSON.stringify(manifest)}
  </script>
`

/**
 * Preloads the asynchronous scripts so that they'll be cached
 */

const dynamicScripts = assets.dynamic
  .map(asset => `<link rel="preload" href="${asset}" as="script">`)
  .join('')

/**
 * The static css for the clientside application
 */

const clientCss = assets.css.map(asset => `<link href="${asset}" rel="stylesheet">`).join('')

/**
 * The scripts for the clientside application
 */

const clientScripts = assets.js
  .map(asset => `<script src="${asset}" type="text/javascript"></script>`)
  .join('')

/**
 * Returns a renderer for the html response
 */

function getResponseRenderer({ appRenderer, sheet, store }) {
  // Container for a Helmet instance after rendering
  let helmet

  // Get the checksum after rendering is done
  const getChecksum = () => appRenderer.checksum()

  // Get the state and escape any tags
  const getStoreState = () => JSON.stringify(store.getState()).replace(/</g, '\\u003c')

  return template`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="/">
        <link href="https://fonts.googleapis.com/css?family=Bitter|Crimson+Text" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1dbf5e">
        <meta name="apple-mobile-web-app-title" content="Ismay Wolff">
        <meta name="application-name" content="Ismay Wolff">
        <meta name="theme-color" content="#ffffff">
        ${inlineManifest}
        ${dynamicScripts}
        ${clientCss}
      </head>
      <body>
        <div id="app">${appRenderer}</div>
        <script>
          var appendToHead = function (string) {
            var container = document.createElement('div')
            container.innerHTML = string
            document.head.appendChild(container.firstChild)
          }

          // Append styled-components styles to head
          appendToHead('${() => sheet.getStyleTags().replace(/(\r\n|\n|\r)/gm, '')}')

          // Set title and meta description
          ${() => {
            helmet = Helmet.renderStatic()
            return ''
          }}
          appendToHead('${() => helmet.title.toString()}')
          appendToHead('${() => helmet.meta.toString()}')

          // Allow appendToHead to be garbage collected
          appendToHead = null

          // Expose initial state to client store bootstrap code
          window.preloadedState = ${getStoreState}
          // Attach checksum to the component's root element
          document.querySelector('#app').setAttribute('data-react-checksum', '${getChecksum}')
        </script>
        <script src="https://cdn.ravenjs.com/3.14.2/raven.min.js"></script>
        ${clientScripts}
      </body>
    </html>
  `
}

export default getResponseRenderer
