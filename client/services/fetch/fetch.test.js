import 'isomorphic-fetch'
import fetch from './fetch'

window.fetch = jest.fn()
window.Headers = jest.fn()

describe('fetch', () => {
  it('should process headers', () => {
    const expected = 'headers'

    return fetch('endpoint', 'headers').then(() => (
      expect(window.Headers).toHaveBeenCalledWith(expected))
    )
  })

  it('should process options', () => {
    const init = {
      headers: {},
      options: 'options'
    }

    return fetch('endpoint', 'headers', { options: 'options' }).then(() => (
      expect(window.fetch).toHaveBeenCalledWith('endpoint', init))
    )
  })

  it('should return the destringified response if it is ok', () => {
    const data = { key: 'value' }
    const body = JSON.stringify(data)
    const init = { status: 200, statusText: 'OK' }
    const expected = { data }

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetch('endpoint', 'headers').then(actual => expect(actual).toEqual(expected))
  })

  it('should return an error if the response is not ok', () => {
    const body = JSON.stringify({})
    const init = { status: 401, statusText: 'Unauthorized' }
    const error = new Error(init.statusText)
    const expected = { error }

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetch('endpoint', 'headers').then(actual => expect(actual).toEqual(expected))
  })

  it('should return an error on network errors', () => {
    const message = 'No network connection'
    const error = new Error(message)
    const expected = { error }

    window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
    return fetch('endpoint', 'headers').then(actual => expect(actual).toEqual(expected))
  })
})
