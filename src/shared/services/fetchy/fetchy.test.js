/* global window, Response, fetch */

import 'isomorphic-fetch'
import fetchy from './fetchy'

window.fetch = jest.fn()
window.Headers = jest.fn()

describe('fetch', () => {
  it('should return the response if it is ok', () => {
    const body = { data: 'data' }
    const init = { status: 200, statusText: 'OK' }
    const expected = new Response(body, init)

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetchy('endpoint').then(actual => expect(actual).toEqual(expected))
  })

  it('should return an error with the statusText if the response is not ok', () => {
    const statusText = 'Unauthorized'
    const body = { data: 'data' }
    const init = { status: 401, statusText }

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetchy('endpoint').catch(error => expect(error.message).toEqual(statusText))
  })

  it('should return an error on network errors', () => {
    const message = 'No network connection'
    const expected = new Error(message)

    window.fetch.mockImplementationOnce(() => Promise.reject(expected))
    return fetch('endpoint').catch(error => expect(error).toEqual(expected))
  })
})
