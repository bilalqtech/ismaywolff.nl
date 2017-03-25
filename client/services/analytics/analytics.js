/* global ga */

import load from 'load-script'
import createTracker from './createTracker'
import sendInitialPageview from './sendInitialPageview'
import sendNavigationTimingMetrics from './sendNavigationTimingMetrics'
import trackCustomDimensions from './trackCustomDimensions'
import trackErrors from './trackErrors'
import trackRouteChanges from './trackRouteChanges'

/**
 * Initializes the tracking logic. Creates trackers and sets initial
 * values for each of them.
 */

const init = history => {
  // load analytics in the background
  load('https://www.google-analytics.com/analytics.js')

  // initialize the command queue in case analytics.js hasn't loaded yet
  window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args))

  createTracker()
  trackErrors()
  trackCustomDimensions()
  sendInitialPageview(history)
  sendNavigationTimingMetrics()
  trackRouteChanges(history)
}

export default init
