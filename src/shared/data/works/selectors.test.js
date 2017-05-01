import { getWorkEntities, getWorkState, checkHasWorks, shouldFetchWorks } from './selectors'

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

describe('shouldFetchWorks', () => {
  it('should return false when fetching', () => {
    const state = { works: { isFetching: true, result: [] } }
    const actual = shouldFetchWorks(state)

    expect(actual).toEqual(false)
  })

  it('should return true if not fetching and it has no works', () => {
    const state = { works: { isFetching: false, result: [] } }
    const actual = shouldFetchWorks(state)

    expect(actual).toEqual(true)
  })

  it('should return false if not fetching and it has works', () => {
    const state = { works: { isFetching: false, result: ['work'] } }
    const actual = shouldFetchWorks(state)

    expect(actual).toEqual(false)
  })
})
