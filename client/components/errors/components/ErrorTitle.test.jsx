import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import ErrorTitle from './ErrorTitle'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<ErrorTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorTitle />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
