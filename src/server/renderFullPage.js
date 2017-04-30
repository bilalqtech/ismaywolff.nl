/* eslint-disable import/no-unresolved */

import manifest from '../../dist/public/webpackChunkManifest.json'
import assets from '../../dist/public/webpackAssets.json'

// Inlines the store state so it can be reused clientside
const inlineStore = preloadedState =>
  `
  <script>
    window.preloadedState = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
`

// Inlines the webpack chunk manifest, so the manifest can remain static even when hashes change
const inlineManifest = `
  <script type="text/javascript">
    window.webpackManifest=${JSON.stringify(manifest)}
  </script>
`

// Preloads dynamic imports so they'll be cached already
const preloadDynamicImports = assets.dynamic
  .map(asset => `<link rel="preload" href="${asset}" as="script">`)
  .join('')

// The css extracted from the clientside application
const clientCss = assets.css.map(asset => `<link href="${asset}" rel="stylesheet">`).join('')

// The scripts required for booting the app clientside
const clientScripts = assets.js
  .map(asset => `<script src="${asset}" type="text/javascript"></script>`)
  .join('')

function renderFullPage({ html, title, meta, styledComponentsCss, preloadedState }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="/">
        <!-- add an event listener to capture uncaught errors -->
        <script>addEventListener('error', window.__e=function f(e){f.q=f.q||[];f.q.push(e)});</script>
        <!-- fonts -->
        <link href="https://fonts.googleapis.com/css?family=Bitter|Crimson+Text" rel="stylesheet">
        <!-- favicons -->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1dbf5e">
        <meta name="apple-mobile-web-app-title" content="Ismay Wolff">
        <meta name="application-name" content="Ismay Wolff">
        <meta name="theme-color" content="#ffffff">
        ${title}
        ${meta}
        ${inlineManifest}
        ${preloadDynamicImports}
        ${clientCss}
        ${styledComponentsCss}
      </head>
      <body>
        <div id="app">${html}</div>
        ${inlineStore(preloadedState)}
        ${clientScripts}
      </body>
    </html>
  `
}

export default renderFullPage
