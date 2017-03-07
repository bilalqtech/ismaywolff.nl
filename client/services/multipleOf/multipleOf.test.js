import multipleOf from './multipleOf'

describe('multipleOf', () => {
  it('rounds up to the nearest upper multiple', () => {
    expect(multipleOf(110, 50)).toEqual(150)
    expect(multipleOf(10, 50)).toEqual(50)
  })
})
