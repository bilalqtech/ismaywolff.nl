import fetchy from '../fetchy'
import TOKEN from '../token'

const get = endpoint => {
  const headers = new Headers({ Authorization: `Bearer ${TOKEN}` })
  const init = { method: 'GET', headers }

  return fetchy(endpoint, init)
}

export default get
