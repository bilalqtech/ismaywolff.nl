import { logError } from '../../services/raven'

/**
 * Will log any errors from failing actions to Sentry
 */

const middleware = store => next => action => {
  if (action.payload && action.payload instanceof Error) {
    logError(action.payload, {
      extra: {
        state: store.getState(),
        action
      }
    })
  }

  return next(action)
}

export default middleware
