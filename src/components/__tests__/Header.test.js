// dependencies
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Header from '../Header'

// tests
describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
