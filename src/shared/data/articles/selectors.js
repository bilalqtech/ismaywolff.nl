export const getArticleEntities = state => state.entities.articles
export const getArticleState = state => state.articles
export const checkHasArticles = state => state.articles.result.length > 0

/**
 * Checks whether articles should be fetched based on the current state
 */

export const shouldFetchArticles = state => {
  const hasArticles = checkHasArticles(state)
  const articleState = getArticleState(state)

  if (articleState.isFetching) {
    return false
  } else if (!hasArticles) {
    return true
  }

  return false
}
