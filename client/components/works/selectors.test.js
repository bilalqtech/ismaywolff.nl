import { getEntities, getState } from './selectors'

const state = {
  entities: { works: 'entities' },
  works: 'state'
}

describe('getEntities', () => {
  it('should return work entities', () => {
    const expected = 'entities'
    const actual = getEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getState', () => {
  it('should return the work state', () => {
    const expected = 'state'
    const actual = getState(state)

    expect(actual).toEqual(expected)
  })
})
