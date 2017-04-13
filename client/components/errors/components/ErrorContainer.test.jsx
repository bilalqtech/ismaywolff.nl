import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import ErrorContainer from './ErrorContainer'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<ErrorContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorContainer background={'green'} color={'blue'} />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
