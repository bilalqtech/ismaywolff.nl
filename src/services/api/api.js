import { TOKEN } from './constants'

export default class Api {
  static get(endpoint) {
    const headers = new Headers({ Authorization: `Bearer ${TOKEN}` })
    const init = { method: 'GET', headers }
    const request = new Request(endpoint, init)

    return Api.fetch(request)
  }

  static async fetch(...args) {
    try {
      const response = await fetch(...args)
      const data = await response.json()

      // return the data if the response was ok
      if (response.ok) return { data }

      // otherwise throw an error
      throw new Error(response.statusText)
    } catch (error) {
      return { error }
    }
  }
}
