import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import TextLineFit from './TextLineFit'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TextLineFit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLineFit />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
