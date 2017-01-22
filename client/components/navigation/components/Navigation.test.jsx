import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Navigation from './Navigation'

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Navigation />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
