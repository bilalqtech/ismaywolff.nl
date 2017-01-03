import { normalize, arrayOf } from 'normalizr'
import { works } from './schemas'

describe('works schemas', () => {
  it('should be able to normalize an array of works', () => {
    const items = [{ sys: { id: 1 } }]
    const actual = normalize(items, arrayOf(works))
    const expected = {
      entities: { works: { 1: items[0] } },
      result: [1]
    }

    expect(actual).toEqual(expected)
  })
})

