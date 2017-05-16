import { Helmet } from 'react-helmet'
import { template } from 'rapscallion'
import inlineStore from './templates/inlineStore'
import inlineManifest from './templates/inlineManifest'
import preloadDynamic from './templates/preloadDynamic'
import styles from './templates/styles'
import scripts from './templates/scripts'
import sentry from './templates/sentry'
import head from './templates/head'

function renderStream({ appRenderer, sheet, store }) {
  let helmet
  const getChecksum = () => appRenderer.checksum()
  const getStyleTags = () => sheet.getStyleTags().replace(/(\r\n|\n|\r)/gm, '')

  return template`
    <!doctype html>
    <html>
      <head>
        ${head}
        ${inlineManifest}
        ${preloadDynamic}
        ${styles}
      </head>
      <body>
        <div id="app">${appRenderer}</div>
        <script>
          document.head.insertAdjacentHTML('beforeend', '${getStyleTags}')
          ${() => {
            helmet = Helmet.renderStatic()
            return ''
          }}
          document.head.insertAdjacentHTML('beforeend', '${() => helmet.title.toString()}')
          document.head.insertAdjacentHTML('beforeend', '${() => helmet.meta.toString()}')
        </script>
        ${inlineStore(store.getState())}
        <script>
          document.querySelector('#app').setAttribute('data-react-checksum', '${getChecksum}')
        </script>
        ${sentry}
        ${scripts}
      </body>
    </html>
  `
}

export default renderStream
