import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { HeroContainer } from './HeroContainer'

describe('<HeroContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <HeroContainer
        id={'id'}
        images={{ result: ['id'], isFetching: false }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
