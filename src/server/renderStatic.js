import inlineStore from './templates/inlineStore'
import inlineManifest from './templates/inlineManifest'
import preloadDynamic from './templates/preloadDynamic'
import scripts from './templates/scripts'
import head from './templates/head'
import styles from './templates/styles'
import catchErrors from './templates/catchErrors'

function renderStatic({ html, title, meta, styledComponentsCss, preloadedState }) {
  return `
    <!doctype html>
    <html>
      <head>
        ${head}
        ${title}
        ${meta}
        ${catchErrors}
        ${inlineManifest}
        ${preloadDynamic}
        ${styles}
        ${styledComponentsCss}
      </head>
      <body>
        <div id="app">${html}</div>
        ${inlineStore(preloadedState)}
        ${scripts}
      </body>
    </html>
  `
}

export default renderStatic
