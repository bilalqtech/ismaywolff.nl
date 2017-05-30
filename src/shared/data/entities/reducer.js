const initialState = {
  articles: {},
  images: {},
  works: {}
}

const entities = (state = initialState, action) => {
  if (action.payload && action.payload.entities && action.payload.entities.works) {
    // Merge new works with existing works
    const works = Object.assign({}, state.works, action.payload.entities.works)

    return Object.assign({}, state, { works })
  }

  if (action.payload && action.payload.entities && action.payload.entities.articles) {
    // Merge new articles with existing articles
    const articles = Object.assign({}, state.articles, action.payload.entities.articles)

    return Object.assign({}, state, { articles })
  }

  if (action.payload && action.payload.entities && action.payload.entities.images) {
    // Merge new images with existing images
    const images = Object.assign({}, state.images, action.payload.entities.images)

    return Object.assign({}, state, { images })
  }

  return state
}

export default entities
