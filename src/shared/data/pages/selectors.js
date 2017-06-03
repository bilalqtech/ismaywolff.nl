export const getPageEntities = state => state.entities.pages
export const getPageState = state => state.pages
export const checkHasPages = state => state.pages.result.length > 0

/**
 * Checks whether pages should be fetched based on the current state
 */

export const shouldFetchPages = state => {
  const hasPages = checkHasPages(state)
  const pageState = getPageState(state)

  if (pageState.isFetching) {
    return false
  } else if (!hasPages) {
    return true
  }

  return false
}
