import 'isomorphic-fetch'
import get from './get'
import fetchy from '../fetchy'

jest.mock('../fetchy', () => jest.fn())
jest.mock('../token', () => 'token')

describe('get', () => {
  it('calls fetchy with the right endpoint', () => {
    get('endpoint')
    const lastCall = fetchy.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetchy.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetchy with the right init object for contentful', () => {
    get('endpoint')
    const lastCall = fetchy.mock.calls.length - 1
    const headers = new Headers({ Authorization: 'Bearer token' })
    const expected = { method: 'GET', headers }

    expect(fetchy.mock.calls[lastCall][1]).toEqual(expected)
  })
})
