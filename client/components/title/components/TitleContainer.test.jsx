import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import TitleContainer from './TitleContainer'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TitleContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TitleContainer />)
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
