import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ThumbContainer } from './ThumbContainer'

describe('<ThumbContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThumbContainer
        id={'id'}
        images={{ result: ['id'], isFetching: false }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

