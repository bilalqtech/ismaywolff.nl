import React from 'react'
import { shallow } from 'enzyme'
import AsyncReactMarkdown from './AsyncReactMarkdown'

describe('<AsyncReactMarkdown />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AsyncReactMarkdown source={'source'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
