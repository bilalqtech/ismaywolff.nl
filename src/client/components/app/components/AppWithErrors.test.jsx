import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AppWithErrors from './AppWithErrors'

describe('<AppWithErrors />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AppWithErrors errorMessage={'Message'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
