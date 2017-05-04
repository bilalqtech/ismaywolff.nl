/* global window */

import logError from './logError'

window.Raven = {
  captureException: jest.fn()
}

describe('logError', () => {
  it('should log errors', () => {
    const error = new Error('Error')
    const additional = {}
    const BACKUP_NODE_ENV = process.env.NODE_ENV

    process.env.NODE_ENV = 'production'
    logError(error, additional)
    process.env.NODE_ENV = BACKUP_NODE_ENV

    expect(window.Raven.captureException).toHaveBeenCalledWith(error, additional)
  })
})
