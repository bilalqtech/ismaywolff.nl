/* eslint-disable import/no-unresolved */

import assets from '../../../dist/public/stats.json'

const globalCss = assets.css.map(asset => `<link href="${asset}" rel="stylesheet">`).join('')

export default globalCss
