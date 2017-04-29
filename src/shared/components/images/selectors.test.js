import { getImageEntities, getImageState, checkHasImages } from './selectors'

describe('getImageEntities', () => {
  it('should return image entities', () => {
    const state = { entities: { images: 'entities' } }
    const expected = 'entities'
    const actual = getImageEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getImageState', () => {
  it('should return the image state', () => {
    const state = { images: 'state' }
    const expected = 'state'
    const actual = getImageState(state)

    expect(actual).toEqual(expected)
  })
})

describe('checkHasImages', () => {
  it('should return whether there are images', () => {
    const state = { images: { result: ['image'] } }
    const actual = checkHasImages(state)

    expect(actual).toEqual(true)
  })
})
