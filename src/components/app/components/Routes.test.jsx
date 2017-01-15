import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Routes from './Routes'

describe('<Routes />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Routes />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
