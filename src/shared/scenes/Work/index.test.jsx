import React from 'react'
import { shallow } from 'enzyme'
import Work from './index'

describe('<Work />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Work />)
    expect(wrapper).toMatchSnapshot()
  })
})
