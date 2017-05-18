/* eslint-disable import/no-unresolved */

import assets from '../../../dist/public/stats.json'

const scripts = assets.js
  .map(asset => `<script src="${asset}" type="text/javascript"></script>`)
  .join('')

export default scripts
