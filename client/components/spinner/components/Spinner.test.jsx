import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Spinner from './Spinner'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Spinner />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
