/* global ga */

import dimensions from './dimensions'

// listen for changes to the current location and track them
const trackRouteChanges = history => {
  history.listen(location => {
    ga('set', 'page', location.pathname)
    ga('set', 'title', location.pathname)
    ga('send', 'pageview', { [dimensions.HIT_SOURCE]: 'virtual' })
  })
}

export default trackRouteChanges
