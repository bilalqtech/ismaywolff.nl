import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Title from './Title'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Title />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
