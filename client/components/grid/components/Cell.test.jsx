import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Cell from './Cell'

describe('<Cell />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cell mdBreak={'10em'} lgBreak={'20em'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Cell gutter={'10px'} mdBreak={'10em'} lgBreak={'20em'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with sm', () => {
    const wrapper = shallow(<Cell sm={1 / 2} mdBreak={'10em'} lgBreak={'20em'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with md', () => {
    const wrapper = shallow(<Cell md={1 / 2} mdBreak={'10em'} lgBreak={'20em'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
  it('renders correctly with lg', () => {
    const wrapper = shallow(<Cell lg={1 / 2} mdBreak={'10em'} lgBreak={'20em'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
