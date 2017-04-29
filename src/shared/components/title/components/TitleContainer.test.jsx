import React from 'react'
import { shallow } from 'enzyme'
import TitleContainer from './TitleContainer'

describe('<TitleContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TitleContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})