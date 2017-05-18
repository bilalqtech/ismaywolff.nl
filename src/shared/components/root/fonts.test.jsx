import fonts from './fonts'

describe('fonts', () => {
  it('contains fonts', () => {
    expect(fonts).toMatchSnapshot()
  })
})
