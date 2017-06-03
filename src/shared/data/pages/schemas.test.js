import { normalize } from 'normalizr'
import { pages } from './schemas'

describe('schemas', () => {
  it('should be able to normalize a single page item', () => {
    const data = {
      fields: {
        title: 'Title',
        slug: 'title',
        text: 'Text'
      }
    }
    const actual = normalize(data, pages)
    const expected = {
      entities: {
        pages: { title: { title: 'Title', slug: 'title', text: 'Text' } }
      },
      result: 'title'
    }

    expect(actual).toEqual(expected)
  })
})
