import React from 'react'
import { shallow } from 'enzyme'
import TextLine from './TextLine'

describe('<TextLine />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLine />)
    expect(wrapper).toMatchSnapshot()
  })
})
