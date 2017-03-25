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
  // initialize the command queue in case analytics.js hasn't loaded yet
  window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args))

  ga('send', 'event', Object.assign({
    eventCategory: 'Error',
    eventAction: err.name,
    eventLabel: `${err.message}\n${err.stack || '(no stack trace)'}`,
    nonInteraction: true
  }, fieldsObj))
}

export default trackError
