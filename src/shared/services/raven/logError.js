/* global Raven, window */
/* eslint-disable no-underscore-dangle */

/**
 * Logs any errors passed to it to Sentry. Accepts additional data (see docs below).
 *
 * - https://docs.sentry.io/clients/javascript/usage/#passing-additional-data
 */

function logError(error, additional = {}) {
  const hasErrorEvents = typeof window === 'object' && '__ERROR_EVENTS__' in window
  const hasRaven = typeof Raven !== 'undefined' && 'captureException' in Raven
  const isProd = process.env.NODE_ENV === 'production'

  if (isProd) {
    if (hasRaven) {
      Raven.captureException(error, additional)
    } else if (hasErrorEvents) {
      window.__ERROR_EVENTS__({ error })
    }
  }

  if (!isProd) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default logError
