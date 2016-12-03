// dependencies
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import React from 'react'
import Root from '../Root'

// tests
describe('<Root />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Root />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
