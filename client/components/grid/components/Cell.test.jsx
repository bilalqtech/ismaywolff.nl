import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Cell from './Cell'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Cell />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cell />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Cell gutter={'10px'} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })

  it('renders correctly with sm', () => {
    const wrapper = shallow(<Cell sm={1 / 2} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })

  it('renders correctly with md', () => {
    const wrapper = shallow(<Cell md={1 / 2} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
  it('renders correctly with lg', () => {
    const wrapper = shallow(<Cell lg={1 / 2} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
