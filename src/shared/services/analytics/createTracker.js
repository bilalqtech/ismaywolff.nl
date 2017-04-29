/* global ga */

import { TRACKING_ID } from './constants'

const createTracker = () => {
  ga('create', TRACKING_ID, 'auto')

  // ensures all hits are sent via `navigator.sendBeacon()`
  ga('set', 'transport', 'beacon')
}

export default createTracker
