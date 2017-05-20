/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Cell from './Cell'

describe('<Cell />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cell />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Cell gutter={'10px'} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders correctly with sm', () => {
    const wrapper = shallow(<Cell sm={1 / 2} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('renders correctly with md', () => {
    const wrapper = shallow(<Cell md={1 / 2} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
  it('renders correctly with lg', () => {
    const wrapper = shallow(<Cell lg={1 / 2} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})
