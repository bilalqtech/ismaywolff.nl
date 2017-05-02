import {
  getArticleEntities,
  getArticleState,
  checkHasArticles,
  shouldFetchArticles
} from './selectors'

describe('getArticleEntities', () => {
  it('should return article entities', () => {
    const state = { entities: { articles: 'entities' } }
    const expected = 'entities'
    const actual = getArticleEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getArticleState', () => {
  it('should return the article state', () => {
    const state = { articles: 'state' }
    const expected = 'state'
    const actual = getArticleState(state)

    expect(actual).toEqual(expected)
  })
})

describe('checkHasArticles', () => {
  it('should return whether there are articles', () => {
    const state = { articles: { result: ['article'] } }
    const actual = checkHasArticles(state)

    expect(actual).toEqual(true)
  })
})

describe('shouldFetchArticles', () => {
  it('should return false when fetching', () => {
    const state = { articles: { isFetching: true, result: [] } }
    const actual = shouldFetchArticles(state)

    expect(actual).toEqual(false)
  })

  it('should return true if not fetching and it has no articles', () => {
    const state = { articles: { isFetching: false, result: [] } }
    const actual = shouldFetchArticles(state)

    expect(actual).toEqual(true)
  })

  it('should return false if not fetching and it has articles', () => {
    const state = { articles: { isFetching: false, result: ['article'] } }
    const actual = shouldFetchArticles(state)

    expect(actual).toEqual(false)
  })
})
