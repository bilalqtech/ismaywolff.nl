import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import HeaderContainer from './HeaderContainer'

describe('<HeaderContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderContainer />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
