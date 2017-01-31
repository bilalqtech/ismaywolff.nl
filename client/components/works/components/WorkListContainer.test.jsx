import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListContainer } from './WorkListContainer'

describe('<WorkListContainer />', () => {
  it('renders correctly', () => {
    const works = { result: ['id'], isFetching: false }
    const wrapper = shallow(<WorkListContainer works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
