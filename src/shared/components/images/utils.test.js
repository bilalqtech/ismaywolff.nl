import { getImageWidth, createUrl, getAvailableWidth } from './utils'

describe('getImageWidth', () => {
  it('rounds up to the nearest upper multiple', () => {
    expect(getImageWidth(110)).toEqual(150)
  })

  it('returns a fallback width for invalid values', () => {
    expect(getImageWidth(0)).toEqual(250)
    expect(getImageWidth(-10)).toEqual(250)
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
    const viewport = { height: 1000, width: 1000 }
    const actual = getAvailableWidth({ image, viewport })
    const expected = 1000

    expect(actual).toEqual(expected)
  })

  it('calculates the correct width for portrait ratio differences', () => {
    const image = { width: 10, height: 100 }
    const viewport = { height: 1000, width: 1000 }
    const actual = getAvailableWidth({ image, viewport })
    const expected = 100

    expect(actual).toEqual(expected)
  })
})
