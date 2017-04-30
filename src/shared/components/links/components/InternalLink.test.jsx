import React from 'react'
import { shallow } from 'enzyme'
import InternalLink from './InternalLink'

describe('<InternalLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InternalLink to={'/url'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
