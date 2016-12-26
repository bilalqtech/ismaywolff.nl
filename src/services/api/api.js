import checkStatus from './check-status'

export const getJson = endpoint => {
  const headers = new Headers({
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  })

  const init = {
    method: 'GET',
    headers
  }

  const request = new Request(endpoint, init)

  return fetch(request)
    .then(checkStatus)
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
