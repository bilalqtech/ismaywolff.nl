import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextLine from './TextLine'

describe('<TextLine />', () => {
  it('renders correctly for direction right', () => {
    const wrapper = shallow(<TextLine direction={'right'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly for direction left', () => {
    const wrapper = shallow(<TextLine direction={'left'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
