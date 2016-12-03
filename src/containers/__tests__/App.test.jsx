// dependencies
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

// mock external dependencies
jest.mock('react-router/Match')

// tests
describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
