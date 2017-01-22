const initialState = {
  images: {},
  works: {}
}

export default function entities(state = initialState, action) {
  if (action.payload && action.payload.entities && action.payload.entities.works) {
    return {
      ...state,
      works: {
        ...state.works,
        ...action.payload.entities.works
      }
    }
  }

  if (action.payload && action.payload.entities && action.payload.entities.images) {
    return {
      ...state,
      images: {
        ...state.images,
        ...action.payload.entities.images
      }
    }
  }

  return state
}
