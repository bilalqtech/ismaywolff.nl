import 'isomorphic-fetch'
import checkStatus from './check-status'

describe('checkStatus api util', () => {
  it('should return the response if it is ok', () => {
    const body = JSON.stringify({})
    const init = { status: 200, statusText: 'OK' }
    const response = new Response(body, init)
    const actual = checkStatus(response)

    expect(actual).toEqual(response)
  })

  it('should throw an error if the response is not ok', () => {
    const body = JSON.stringify({})
    const init = { status: 404, statusText: 'Not Found' }
    const response = new Response(body, init)

    expect(() => { checkStatus(response) }).toThrow()
  })
})
