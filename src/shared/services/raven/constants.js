const SENTRY_CLIENT_KEY = process.env.SENTRY_CLIENT_KEY
const SENTRY_SERVER_KEY = process.env.SENTRY_SERVER_KEY
const SENTRY_APP = process.env.SENTRY_APP

const isClient = process.env.BABEL_ENV === 'client'
const SENTRY_KEY = isClient ? SENTRY_CLIENT_KEY : SENTRY_SERVER_KEY

export const url = `https://${SENTRY_KEY}@sentry.io/${SENTRY_APP}`

/**
 * Configuration used for Raven setup
 *
 * - https://docs.sentry.io/clients/javascript/config/#optional-settings
 */

export const config = {
  environment: process.env.NODE_ENV,
  tags: {
    commit: process.env.COMMIT,
    host: process.env.BABEL_ENV
  }
}
