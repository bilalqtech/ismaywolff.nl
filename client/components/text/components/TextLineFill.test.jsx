import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import TextLineFill from './TextLineFill'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<TextLineFill />', () => {
  it('renders correctly for direction right', () => {
    const wrapper = shallow(<TextLineFill direction={'right'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })

  it('renders correctly for direction left', () => {
    const wrapper = shallow(<TextLineFill direction={'left'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
