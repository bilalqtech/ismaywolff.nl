export const getWorkEntities = state => state.entities.works
export const getWorkState = state => state.works
export const checkHasWorks = state => state.works.result.length > 0

/**
 * Checks whether works should be fetched based on the current state
 */

export const shouldFetchWorks = state => {
  const hasWorks = checkHasWorks(state)
  const workState = getWorkState(state)

  if (workState.isFetching) {
    return false
  } else if (!hasWorks) {
    return true
  }

  return false
}
