/* global window */

import logError from './logError'

window.Raven = {
  captureException: jest.fn()
}

describe('logError', () => {
  it('should log errors', () => {
    const error = new Error('Error')
    const additional = {}

    logError(error, additional)

    expect(window.Raven.captureException).toHaveBeenCalledWith(error, additional)
  })
})
