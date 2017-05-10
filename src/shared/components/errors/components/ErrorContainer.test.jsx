import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ErrorContainer from './ErrorContainer'

describe('<ErrorContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorContainer background={'green'} color={'blue'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
