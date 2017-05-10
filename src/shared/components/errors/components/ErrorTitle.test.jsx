import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ErrorTitle from './ErrorTitle'

describe('<ErrorTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorTitle />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
