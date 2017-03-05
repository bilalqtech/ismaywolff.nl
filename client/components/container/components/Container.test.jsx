import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Container from './Container'

describe('<Container />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Container />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
