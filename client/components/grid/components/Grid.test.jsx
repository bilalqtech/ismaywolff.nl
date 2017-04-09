import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import Grid from './Grid'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Grid />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })

  it('renders correctly with gutter', () => {
    const wrapper = shallow(<Grid gutter={'10px'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
