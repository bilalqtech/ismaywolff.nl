import { getArticleEntities, getArticleState } from './selectors'

const state = {
  entities: { articles: 'entities' },
  articles: 'state'
}

describe('getArticleEntities', () => {
  it('should return article entities', () => {
    const expected = 'entities'
    const actual = getArticleEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getArticleState', () => {
  it('should return the article state', () => {
    const expected = 'state'
    const actual = getArticleState(state)

    expect(actual).toEqual(expected)
  })
})
