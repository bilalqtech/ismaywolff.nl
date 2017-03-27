import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Placeholder from './Placeholder'

describe('<Placeholder />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Placeholder width={1} height={2} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
