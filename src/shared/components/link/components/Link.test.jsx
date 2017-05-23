import React from 'react'
import { shallow } from 'enzyme'
import Link from './Link'

describe('<Link />', () => {
  it('renders internal links correctly', () => {
    const wrapper = shallow(<Link to="/url">Text</Link>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders external links correctly', () => {
    const wrapper = shallow(<Link href="/url">Text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
})
