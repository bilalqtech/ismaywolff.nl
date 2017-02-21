import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import WorkTitle from './WorkTitle'

describe('<WorkTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorkTitle />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
