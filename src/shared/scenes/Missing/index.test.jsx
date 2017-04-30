import React from 'react'
import { shallow } from 'enzyme'
import Missing from './index'

describe('<Missing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Missing />)
    expect(wrapper).toMatchSnapshot()
  })
})
