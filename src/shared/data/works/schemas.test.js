import { normalize } from 'normalizr'
import { works } from './schemas'

describe('schemas', () => {
  it('should be able to normalize a single work item', () => {
    const data = {
      fields: {
        slug: 1,
        images: [{ sys: { id: 1 } }],
        thumbnail: { sys: { id: 1 } }
      }
    }
    const actual = normalize(data, works)
    const expected = {
      entities: {
        works: { 1: { slug: 1, images: [1], thumbnail: 1 } },
        links: { 1: { sys: { id: 1 } } }
      },
      result: 1
    }

    expect(actual).toEqual(expected)
  })
})
