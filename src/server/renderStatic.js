import inlineStore from './templates/inlineStore'
import inlineManifest from './templates/inlineManifest'
import preloadDynamic from './templates/preloadDynamic'
import styles from './templates/styles'
import scripts from './templates/scripts'
import sentry from './templates/sentry'
import head from './templates/head'

function renderStatic({
  html = '',
  title = '',
  meta = '',
  styledComponentsCss = '',
  preloadedState = {}
}) {
  return `
    <!doctype html>
    <html>
      <head>
        ${head}
        ${title}
        ${meta}
        ${inlineManifest}
        ${preloadDynamic}
        ${styles}
        ${styledComponentsCss}
      </head>
      <body>
        <div id="app">${html}</div>
        ${inlineStore(preloadedState)}
        ${sentry}
        ${scripts}
      </body>
    </html>
  `
}

export default renderStatic
