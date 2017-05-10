import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextLineFit from './TextLineFit'

describe('<TextLineFit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLineFit />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
