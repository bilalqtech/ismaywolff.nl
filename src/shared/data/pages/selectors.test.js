import { getPageEntities, getPageState, checkHasPages, shouldFetchPages } from './selectors'

describe('getPageEntities', () => {
  it('should return page entities', () => {
    const state = { entities: { pages: 'entities' } }
    const expected = 'entities'
    const actual = getPageEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getPageState', () => {
  it('should return the page state', () => {
    const state = { pages: 'state' }
    const expected = 'state'
    const actual = getPageState(state)

    expect(actual).toEqual(expected)
  })
})

describe('checkHasPages', () => {
  it('should return whether there are pages', () => {
    const state = { pages: { result: ['page'] } }
    const actual = checkHasPages(state)

    expect(actual).toEqual(true)
  })
})

describe('shouldFetchPages', () => {
  it('should return false when fetching', () => {
    const state = { pages: { isFetching: true, result: [] } }
    const actual = shouldFetchPages(state)

    expect(actual).toEqual(false)
  })

  it('should return true if not fetching and it has no pages', () => {
    const state = { pages: { isFetching: false, result: [] } }
    const actual = shouldFetchPages(state)

    expect(actual).toEqual(true)
  })

  it('should return false if not fetching and it has pages', () => {
    const state = { pages: { isFetching: false, result: ['page'] } }
    const actual = shouldFetchPages(state)

    expect(actual).toEqual(false)
  })
})
