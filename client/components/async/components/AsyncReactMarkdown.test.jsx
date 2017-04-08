import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AsyncReactMarkdown from './AsyncReactMarkdown'

describe('<AsyncReactMarkdown />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AsyncReactMarkdown source={'source'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
