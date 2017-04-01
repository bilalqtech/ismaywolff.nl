import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ErrorLink from './ErrorLink'

describe('<ErrorLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorLink />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
