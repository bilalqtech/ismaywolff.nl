// dependencies
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import About from '../About'

// tests
describe('<About />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<About />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
