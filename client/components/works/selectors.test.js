import { getWorkEntities, getWorkState } from './selectors'

const state = {
  entities: { works: 'entities' },
  works: 'state'
}

describe('getWorkEntities', () => {
  it('should return work entities', () => {
    const expected = 'entities'
    const actual = getWorkEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getWorkState', () => {
  it('should return the work state', () => {
    const expected = 'state'
    const actual = getWorkState(state)

    expect(actual).toEqual(expected)
  })
})
