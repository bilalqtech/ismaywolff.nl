/* eslint-disable import/no-unresolved */

import assets from '../../../dist/public/webpackAssets.json'

const styles = assets.css.map(asset => `<link href="${asset}" rel="stylesheet">`).join('')

export default styles