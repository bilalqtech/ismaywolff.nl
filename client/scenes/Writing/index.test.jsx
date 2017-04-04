import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Writing from './index'

describe('<Writing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Writing />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
