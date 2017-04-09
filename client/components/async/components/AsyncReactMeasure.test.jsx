import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AsyncReactMeasure from './AsyncReactMeasure'

describe('<AsyncReactMeasure />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AsyncReactMeasure />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
