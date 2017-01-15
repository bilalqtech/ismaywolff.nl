import reducer from './reducer'

describe('reducer', () => {
  const initialState = {
    works: {}
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle works entities', () => {
    const actual = reducer(undefined, {
      type: 'ACTION',
      payload: {
        entities: {
          works: { item: 'item' }
        }
      }
    })
    const expected = {
      works: { item: 'item' }
    }

    expect(actual).toEqual(expected)
  })
})

