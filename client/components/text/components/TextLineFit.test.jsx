import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import TextLineFit from './TextLineFit'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TextLineFit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLineFit />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
