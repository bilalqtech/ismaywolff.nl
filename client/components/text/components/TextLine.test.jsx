import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import TextLine from './TextLine'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TextLine />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLine />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
