const fetchy = (...args) => fetch(...args)
  .then(response => {
    if (response.ok) {
      return response
    }

    throw new Error(response.statusText)
  })

export default fetchy
