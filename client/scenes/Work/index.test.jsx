import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Work from './index'

describe('<Work />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Work />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
