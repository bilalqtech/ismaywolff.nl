import React from 'react'
import { shallow } from 'enzyme'
import BootError from './BootError'

describe('<BootError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BootError error={'Error message.'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
