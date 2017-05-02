import configureStore from '../../store'
import { logError } from '../../services/raven'
import middleware from './middleware'

jest.mock('../../services/raven', () => ({
  logError: jest.fn()
}))

describe('error logging middleware', () => {
  beforeEach(() => {
    logError.mockReset()
  })

  it('should log errors for actions that contain errors', () => {
    const error = new Error('message')
    const store = configureStore({})
    const action = {
      type: 'TYPE',
      payload: error
    }
    const additional = {
      extra: {
        state: store.getState(),
        action
      }
    }

    middleware(store)(next => next)(action)

    expect(logError).toHaveBeenCalledWith(error, additional)
  })

  it('pass actions along if they do not contain errors', () => {
    const store = configureStore({})
    const action = {
      type: 'TYPE',
      payload: 'payload'
    }

    middleware(store)(next => next)(action)

    expect(logError).not.toHaveBeenCalled()
  })
})
