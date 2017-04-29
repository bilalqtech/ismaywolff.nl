import { roundUp, createUrl, getAvailableWidth } from './utils'

describe('roundUp', () => {
  it('rounds up to the nearest upper multiple', () => {
    expect(roundUp(110, 50)).toEqual(150)
  })

  it('returns target if number is smaller than target and positive', () => {
    expect(roundUp(10, 50)).toEqual(50)
  })

  it('returns target if number is zero', () => {
    expect(roundUp(0, 50)).toEqual(50)
  })

  it('returns target if number is smaller than target and negative', () => {
    expect(roundUp(-10, 50)).toEqual(50)
  })
})

describe('createUrl', () => {
  it('accepts a fill parameter', () => {
    expect(createUrl({ url: 'url', fill: true })).toEqual('url?fit=fill&&fl=progressive')
  })

  it('accepts a width parameter', () => {
    expect(createUrl({ url: 'url', width: 10 })).toEqual('url?w=10&fl=progressive')
  })

  it('accepts a height parameter', () => {
    expect(createUrl({ url: 'url', height: 10 })).toEqual('url?&h=10&fl=progressive')
  })

  it('creates a valid url', () => {
    expect(createUrl({ url: 'url' })).toEqual('url?&fl=progressive')
  })
})

describe('getAvailableWidth', () => {
  it('calculates the correct width for landscape ratio differences', () => {
    const image = { width: 100, height: 10 }
    const window = { innerHeight: 1000, innerWidth: 1000 }
    const actual = getAvailableWidth({ image, window })
    const expected = 1000

    expect(actual).toEqual(expected)
  })

  it('calculates the correct width for portrait ratio differences', () => {
    const image = { width: 10, height: 100 }
    const window = { innerHeight: 1000, innerWidth: 1000 }
    const actual = getAvailableWidth({ image, window })
    const expected = 100

    expect(actual).toEqual(expected)
  })
})
