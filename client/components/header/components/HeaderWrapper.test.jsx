import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import HeaderWrapper from './HeaderWrapper'

describe('<HeaderWrapper />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderWrapper />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
