import React from 'react'
import { shallow } from 'enzyme'
import AsyncReactMeasure from './AsyncReactMeasure'

describe('<AsyncReactMeasure />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AsyncReactMeasure />)
    expect(wrapper).toMatchSnapshot()
  })
})
