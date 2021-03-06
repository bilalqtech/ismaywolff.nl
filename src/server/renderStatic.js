import { minify } from 'html-minifier'
import inlineStore from './templates/inlineStore'
import inlineManifest from './templates/inlineManifest'
import preloadDynamic from './templates/preloadDynamic'
import scripts from './templates/scripts'
import head from './templates/head'
import globalCss from './templates/globalCss'
import catchErrors from './templates/catchErrors'

const renderStatic = (
  { html = '', title = '', meta = '', criticalCss = '', preloadedState = {} } = {}
) => {
  const result = `
    <!doctype html>
    <html>
      <head>
        ${head}
        ${title}
        ${meta}
        ${catchErrors}
        ${inlineManifest}
        ${preloadDynamic}
        ${globalCss}
        ${criticalCss}
      </head>
      <body>
        <div id="app">${html}</div>
        ${inlineStore(preloadedState)}
        ${scripts}
      </body>
    </html>
  `

  return minify(result, {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true
  })
}

export default renderStatic
