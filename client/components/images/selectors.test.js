import { getImageEntities, getImageState } from './selectors'

const state = {
  entities: { images: 'entities' },
  images: 'state'
}

describe('getImageEntities', () => {
  it('should return image entities', () => {
    const expected = 'entities'
    const actual = getImageEntities(state)

    expect(actual).toEqual(expected)
  })
})

describe('getImageState', () => {
  it('should return the image state', () => {
    const expected = 'state'
    const actual = getImageState(state)

    expect(actual).toEqual(expected)
  })
})
