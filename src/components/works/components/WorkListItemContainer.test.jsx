import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListItemContainer } from './WorkListItemContainer'

describe('<WorkListItemContainer />', () => {
  it('renders correctly', () => {
    const works = { items: { 1: { fields: {} } } }
    const wrapper = shallow(<WorkListItemContainer id={'1'} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
