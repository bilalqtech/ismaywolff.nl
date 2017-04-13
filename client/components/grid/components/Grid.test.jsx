import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Grid from './Grid'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Grid />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Grid gutter={'10px'} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
