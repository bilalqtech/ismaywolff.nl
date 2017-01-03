import checkStatus from './check-status'
import { TOKEN } from './constants'

export default class Api {
  static get(endpoint) {
    const headers = new Headers({ Authorization: `Bearer ${TOKEN}` })
    const init = { method: 'GET', headers }
    const request = new Request(endpoint, init)

    return fetch(request)
      .then(checkStatus)
      .then(response => response.json())
      .then(json => ({ response: json }))
      .catch(error => ({ error }))
  }
}
