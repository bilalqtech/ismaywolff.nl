import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import HeaderTitle from './HeaderTitle'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<HeaderTitle />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderTitle />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
