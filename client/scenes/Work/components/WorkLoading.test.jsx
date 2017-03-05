import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkLoading from './WorkLoading'

describe('<WorkLoading />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkLoading />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
