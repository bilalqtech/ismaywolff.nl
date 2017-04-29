const initialState = {
  articles: {},
  images: {},
  works: {}
}

export default function entities(state = initialState, action) {
  if (action.payload && action.payload.entities && action.payload.entities.works) {
    // merge new works with existing works
    const works = Object.assign({}, state.works, action.payload.entities.works)

    return Object.assign({}, state, { works })
  }

  if (action.payload && action.payload.entities && action.payload.entities.articles) {
    // merge new articles with existing articles
    const articles = Object.assign({}, state.articles, action.payload.entities.articles)

    return Object.assign({}, state, { articles })
  }

  if (action.payload && action.payload.entities && action.payload.entities.images) {
    // merge new images with existing images
    const images = Object.assign({}, state.images, action.payload.entities.images)

    return Object.assign({}, state, { images })
  }

  return state
}
