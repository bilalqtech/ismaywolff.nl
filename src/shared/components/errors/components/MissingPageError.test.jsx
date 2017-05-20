import React from 'react'
import { shallow } from 'enzyme'
import MissingPageError from './MissingPageError'

describe('<MissingPageError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MissingPageError />)
    expect(wrapper).toMatchSnapshot()
  })
})
