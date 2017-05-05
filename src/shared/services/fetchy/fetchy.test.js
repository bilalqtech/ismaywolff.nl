/* global window, Response, fetch */

import 'isomorphic-fetch'
import fetchy from './fetchy'

window.fetch = jest.fn()
window.Headers = jest.fn()

describe('fetch', () => {
  it('should resolve with the response if the response is ok', () => {
    const body = { data: 'data' }
    const init = { status: 200, statusText: 'OK' }
    const expected = new Response(body, init)

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetchy('endpoint').then(actual => expect(actual).toEqual(expected))
  })

  it('should reject with an error with the statusText if the response is not ok', () => {
    const statusText = 'Unauthorized'
    const body = { data: 'data' }
    const init = { status: 401, statusText }

    window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
    return fetchy('endpoint').catch(error => expect(error.message).toEqual(statusText))
  })

  it('should reject with an error on fetch errors without a stacktrace', () => {
    const message = 'No network connection'
    const expected = new Error(message)

    if (expected.stack) {
      delete expected.stack
    }

    window.fetch.mockImplementationOnce(() => Promise.reject(expected))
    return fetchy('endpoint').catch(error => expect(error).toEqual(expected))
  })

  it('should reject with an error on fetch errors without a valid stacktrace', () => {
    const message = 'No network connection'
    const expected = new Error(message)

    expected.stack = 'Invalid'

    window.fetch.mockImplementationOnce(() => Promise.reject(expected))
    return fetchy('endpoint').catch(error => expect(error).toEqual(expected))
  })

  it('should reject with an error on fetch errors with a valid stacktrace', () => {
    const message = 'No network connection'
    const expected = new Error(message)

    expected.stack = `
      trace@file:///C:/example.html:9:17
      b@file:///C:/example.html:16:13
      a@file:///C:/example.html:19:13
      @file:///C:/example.html:21:9
    `

    window.fetch.mockImplementationOnce(() => Promise.reject(expected))
    return fetchy('endpoint').catch(error => expect(error).toEqual(expected))
  })
})
