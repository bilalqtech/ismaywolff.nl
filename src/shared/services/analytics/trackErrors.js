import trackError from './trackError'

/**
 * Tracks any errors that may have occured on the page prior to analytics being
 * initialized, then adds an event handler to track future errors.
 */

const trackErrors = () => {
  /**
   * Errors that have occurred prior to this script running are stored on
   * `window.__e.q`, as specified in the main html template.
   */

  // eslint-disable-next-line no-mixed-operators, no-underscore-dangle
  const loadErrorEvents = (window.__e && window.__e.q) || []

  // use a different eventCategory for uncaught errors
  const fieldsObj = { eventCategory: 'Uncaught Error' }

  // replay any stored load error events
  // eslint-disable-next-line no-restricted-syntax
  for (const event of loadErrorEvents) {
    trackError(event.error, fieldsObj)
  }

  // add a new listener to track future events immediately
  window.addEventListener('error', event => {
    trackError(event.error, fieldsObj)
  })
}

export default trackErrors
