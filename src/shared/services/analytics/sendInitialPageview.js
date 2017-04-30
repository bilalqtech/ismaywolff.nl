/* global ga */

import dimensions from './dimensions'

// Sends the initial pageview to Google Analytics
const sendInitialPageview = history => {
  ga('set', 'page', history.location.pathname)
  ga('set', 'title', history.location.pathname)
  ga('send', 'pageview', { [dimensions.HIT_SOURCE]: 'pageload' })
}

export default sendInitialPageview
