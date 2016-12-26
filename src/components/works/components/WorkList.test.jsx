import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkList } from './WorkList'

describe('<WorkList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkList fetchWorks={() => {}} works={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
