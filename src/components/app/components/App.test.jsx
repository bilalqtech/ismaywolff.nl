import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from './App'

// mock provider
jest.mock('react-redux')
// mock routes to prevent connect error
jest.mock('./Routes', () => jest.fn(() => {}))

describe('<App />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App store={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
