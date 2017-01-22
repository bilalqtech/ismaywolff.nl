import { normalize } from 'normalizr'
import { images } from './schemas'

describe('schemas', () => {
  it('should be able to normalize a single image item', () => {
    const data = {
      sys: { id: 1 },
      fields: {
        title: 'title',
        file: { url: 'url' }
      }
    }
    const actual = normalize(data, images)
    const expected = {
      entities: {
        images: { 1: { title: 'title', url: 'url' } }
      },
      result: 1
    }

    expect(actual).toEqual(expected)
  })
})
