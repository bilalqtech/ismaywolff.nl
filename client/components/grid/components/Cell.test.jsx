import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Cell from './Cell'

describe('<Cell />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cell />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Cell gutter={'10px'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with width', () => {
    const wrapper = shallow(<Cell width={1 / 2} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
