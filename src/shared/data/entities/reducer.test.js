import reducer from './reducer'

describe('reducer', () => {
  const initialState = {
    articles: {},
    images: {},
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
      articles: {},
      images: {},
      works: { item: 'item' }
    }

    expect(actual).toEqual(expected)
  })

  it('should handle articles entities', () => {
    const actual = reducer(undefined, {
      type: 'ACTION',
      payload: {
        entities: {
          articles: { item: 'item' }
        }
      }
    })
    const expected = {
      works: {},
      images: {},
      articles: { item: 'item' }
    }

    expect(actual).toEqual(expected)
  })

  it('should handle images entities', () => {
    const actual = reducer(undefined, {
      type: 'ACTION',
      payload: {
        entities: {
          images: { item: 'item' }
        }
      }
    })
    const expected = {
      articles: {},
      images: { item: 'item' },
      works: {}
    }

    expect(actual).toEqual(expected)
  })
})
