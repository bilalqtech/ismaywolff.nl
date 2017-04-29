import { getArticleEntities, getArticleState, checkHasArticles } from './selectors'

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
