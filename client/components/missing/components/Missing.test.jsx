import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Missing from './Missing'

describe('<Missing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Missing />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
