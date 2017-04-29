import React from 'react'
import { shallow } from 'enzyme'
import Writing from './index'

describe('<Writing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Writing />)
    expect(wrapper).toMatchSnapshot()
  })
})
