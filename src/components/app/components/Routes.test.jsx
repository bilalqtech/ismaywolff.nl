import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Routes from './Routes'

// prevent connect error
jest.mock('../../works', () => jest.fn(() => {}))

describe('<Routes />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Routes />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
