import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SubTitle from './SubTitle'

describe('<SubTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SubTitle />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
