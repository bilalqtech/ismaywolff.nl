import 'isomorphic-fetch'
import get from './get'
import fetch from '../fetch'

jest.mock('../fetch', () => jest.fn())
jest.mock('../token', () => 'token')

describe('get', () => {
  it('calls fetch with the right endpoint', () => {
    get('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetch.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetch with the right method', () => {
    get('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = { method: 'GET' }

    expect(fetch.mock.calls[lastCall][2]).toEqual(expected)
  })

  it('includes a token', () => {
    get('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = { Authorization: 'Bearer token' }

    expect(fetch.mock.calls[lastCall][1]).toEqual(expected)
  })
})
