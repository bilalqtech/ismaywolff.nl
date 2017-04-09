import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import TitleContainer from './TitleContainer'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TitleContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TitleContainer />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
