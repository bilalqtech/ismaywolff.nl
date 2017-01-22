import { normalize } from 'normalizr'
import { links } from './schemas'

describe('schemas', () => {
  it('should be able to normalize a single link item', () => {
    const data = {
      sys: {
        id: 1
      }
    }
    const actual = normalize(data, links)
    const expected = {
      entities: { links: { 1: { sys: { id: 1 } } } },
      result: 1
    }

    expect(actual).toEqual(expected)
  })
})
