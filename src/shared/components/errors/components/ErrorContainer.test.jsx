import React from 'react'
import { shallow } from 'enzyme'
import ErrorContainer from './ErrorContainer'

describe('<ErrorContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorContainer background={'green'} color={'blue'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
