import fetch from '../fetch'
import TOKEN from '../token'

const get = endpoint => {
  const options = { method: 'GET' }
  const headers = { Authorization: `Bearer ${TOKEN}` }

  // fetch is polyfilled with isomorphic-fetch
  // eslint-disable-next-line compat/compat
  return fetch(endpoint, headers, options)
}

export default get
