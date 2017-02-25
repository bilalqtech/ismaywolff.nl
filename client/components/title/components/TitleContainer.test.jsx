import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TitleContainer from './TitleContainer'

describe('<TitleContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TitleContainer />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
