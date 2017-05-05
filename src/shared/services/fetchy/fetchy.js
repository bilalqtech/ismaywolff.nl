/* global fetch */

/**
 * Return the response if it is ok, otherwise throw an error.
 */

function onFulfilled(response) {
  if (response.ok) {
    return response
  }

  throw new Error(response.statusText)
}

/**
 * Rethrows all caught errors since fetch errors don't have a valid stacktrace, which messes up
 * error reporting.
 */

function onRejected(error) {
  throw new Error(error.message)
}

const fetchy = (...args) => fetch(...args).then(onFulfilled).catch(onRejected)

export default fetchy
