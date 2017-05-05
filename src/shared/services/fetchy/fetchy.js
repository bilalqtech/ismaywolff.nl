/* global fetch */

/**
 * Makes sure errors have a valid stacktrace, as fetch errors currently don't.
 * https://bugs.chromium.org/p/chromium/issues/detail?id=718760
 */

function onRejected(error) {
  // Throw a new error if the caught error doesn't have a valid stacktrace
  if (!error.stack || !error.stack.match(/\d/)) {
    throw TypeError(error.message)
  }

  // Otherwise just rethrow it
  throw error
}

/**
 * Return the response if it is ok, otherwise throw an error.
 */

function onFulfilled(response) {
  if (response.ok) {
    return response
  }

  throw new Error(response.statusText)
}

const fetchy = (...args) => fetch(...args).catch(onRejected).then(onFulfilled)

export default fetchy
