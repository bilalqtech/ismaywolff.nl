import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loading from './Loading'

describe('<Loading />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loading />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
