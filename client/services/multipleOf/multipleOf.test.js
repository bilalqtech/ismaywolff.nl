import multipleOf from './multipleOf'

describe('multipleOf', () => {
  it('rounds up to the nearest upper multiple', () => {
    expect(multipleOf(110, 50)).toEqual(150)
  })

  it('returns target if number is smaller than target and positive', () => {
    expect(multipleOf(10, 50)).toEqual(50)
  })

  it('returns target if number is zero', () => {
    expect(multipleOf(0, 50)).toEqual(50)
  })

  it('returns target if number is smaller than target and negative', () => {
    expect(multipleOf(-10, 50)).toEqual(50)
  })
})
