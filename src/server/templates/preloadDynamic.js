/* eslint-disable import/no-unresolved */

import assets from '../../../dist/public/stats.json'

const preloadDynamic = assets.dynamic
  .map(asset => `<link rel="preload" href="${asset}" as="script">`)
  .join('')

export default preloadDynamic
