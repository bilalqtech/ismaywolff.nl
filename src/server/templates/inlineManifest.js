/* eslint-disable import/no-unresolved */

import manifest from '../../../dist/public/manifest.json'

const inlineManifest = `
  <script type="text/javascript">
    window.__WEBPACK_MANIFEST__=${JSON.stringify(manifest)}
  </script>
`

export default inlineManifest
