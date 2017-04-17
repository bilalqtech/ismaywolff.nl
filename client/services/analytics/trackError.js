/* global ga */

/**
 * Tracks a JavaScript error with optional fields object overrides.
 * This function is exported so it can be used in other parts of the codebase.
 * E.g.:
 *
 *    `fetch('/api.json').catch(trackError)`
 *
 * @param {Error|undefined} err
 * @param {Object=} fieldsObj
 */

const trackError = (err, fieldsObj = {}) => {
  ga('send', 'event', Object.assign({
    eventCategory: 'Error',
    eventAction: err.name || 'No error name was set',
    eventLabel: err.message || 'No error message was set',
    nonInteraction: true
  }, fieldsObj))
}

export default trackError
