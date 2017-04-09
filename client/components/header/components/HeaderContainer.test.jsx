import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { matcher, serializer } from 'jest-glamor-react'
import HeaderContainer from './HeaderContainer'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<HeaderContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderContainer />)
    expect(shallowToJson(wrapper)).toMatchSnapshotWithGlamor()
  })
})
