import { normalize } from 'normalizr'
import { articles } from './schemas'

describe('schemas', () => {
  it('should be able to normalize a single article item', () => {
    const data = {
      fields: {
        slug: 1
      },
      sys: {
        createdAt: 'date'
      }
    }
    const actual = normalize(data, articles)
    const expected = {
      entities: {
        articles: { 1: { slug: 1, published: 'date' } }
      },
      result: 1
    }

    expect(actual).toEqual(expected)
  })
})
