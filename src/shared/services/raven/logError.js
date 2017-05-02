/* global Raven */

/**
 * Logs any errors passed to it to Sentry. Accepts additional data (see docs below).
 *
 * - https://docs.sentry.io/clients/javascript/usage/#passing-additional-data
 */

function logError(error, additional = {}) {
  Raven.captureException(error, additional)
}

export default logError
