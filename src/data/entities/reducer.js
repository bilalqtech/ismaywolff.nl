const initialState = {
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

  return state
}
