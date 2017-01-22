import fetch from '../fetch'
import TOKEN from '../token'

const get = endpoint => {
  const options = { method: 'GET' }
  const headers = { Authorization: `Bearer ${TOKEN}` }

  return fetch(endpoint, headers, options)
}

export default get
