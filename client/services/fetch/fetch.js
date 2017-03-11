async function fetchWrapper(endpoint, headers, options) {
  let init = { headers: new Headers(headers) }
  if (options) init = { ...init, ...options }

  try {
    const response = await fetch(endpoint, init)
    const data = await response.json()

    // return the data if the response was ok
    if (response.ok) return { data }

    // otherwise throw an error
    throw new Error(response.statusText)
  } catch (error) {
    return { error }
  }
}

export default fetchWrapper
