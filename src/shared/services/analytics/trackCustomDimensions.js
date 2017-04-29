/* global ga, document */

import dimensions from './dimensions'
import uuid from './uuid'
import { TRACKING_VERSION, NULL_VALUE, MAGIC_WORD } from './constants'

const trackCustomDimensions = () => {
  /**
   * Sets a default dimension value for all custom dimensions to ensure
   * that every dimension in every hit has *some* value. This is necessary
   * because Google Analytics will drop rows with empty dimension values
   * in your reports.
   */
  Object.keys(dimensions).forEach(key => {
    ga('set', dimensions[key], NULL_VALUE)
  })

  // adds tracking of dimensions known at page load time
  ga(tracker => {
    tracker.set({
      [dimensions.TRACKING_VERSION]: TRACKING_VERSION,
      [dimensions.CLIENT_ID]: tracker.get('clientId'),
      [dimensions.WINDOW_ID]: uuid(),
      [dimensions.FILTER_SPAM]: MAGIC_WORD
    })
  })

  /**
   * Adds tracking to record the type, time, uuid, and visibility state
   * of each hit immediately before it's sent.
   */

  ga(tracker => {
    const originalBuildHitTask = tracker.get('buildHitTask')
    tracker.set('buildHitTask', model => {
      const qt = model.get('queueTime') || 0
      model.set(dimensions.HIT_TIME, String(new Date() - qt), true)
      model.set(dimensions.HIT_ID, uuid(), true)
      model.set(dimensions.HIT_TYPE, model.get('hitType'), true)
      model.set(dimensions.VISIBILITY_STATE, document.visibilityState, true)

      originalBuildHitTask(model)
    })
  })
}

export default trackCustomDimensions
