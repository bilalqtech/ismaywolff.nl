import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import SubTitle from './SubTitle'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<SubTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SubTitle />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
