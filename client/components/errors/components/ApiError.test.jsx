import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ApiError from './ApiError'

describe('<ApiError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ApiError error={'Error message.'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
