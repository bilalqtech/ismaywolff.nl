import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Error from './Error'

describe('<Error />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Error error={'Error message.'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
