import React from 'react'
import { shallow } from 'enzyme'
import Grid from './Grid'

describe('<Grid />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Grid gutter={'10px'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
