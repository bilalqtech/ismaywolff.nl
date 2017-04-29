import { getWorkEntities, getWorkState, checkHasWorks } from './selectors'

describe('getWorkEntities', () => {
  it('should return work entities', () => {
    const state = { entities: { works: 'entities' } }
    const expected = 'entities'
    const actual = getWorkEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getWorkState', () => {
  it('should return the work state', () => {
    const state = { works: 'state' }
    const expected = 'state'
    const actual = getWorkState(state)

    expect(actual).toEqual(expected)
  })
})

describe('checkHasWorks', () => {
  it('should return whether there are works', () => {
    const state = { works: { result: ['work'] } }
    const actual = checkHasWorks(state)

    expect(actual).toEqual(true)
  })
})
