import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextLineFill from './TextLineFill'

describe('<TextLineFill />', () => {
  it('renders correctly for direction right', () => {
    const wrapper = shallow(<TextLineFill direction={'right'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly for direction left', () => {
    const wrapper = shallow(<TextLineFill direction={'left'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
