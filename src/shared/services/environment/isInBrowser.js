/* global window */

function isInBrowser() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

export default isInBrowser
