import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Container from './Container'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Container />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
