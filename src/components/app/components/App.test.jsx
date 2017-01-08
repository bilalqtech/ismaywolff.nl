import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import configureStore from '../../../store'
import App from './App'

describe('<App />', () => {
  it('renders correctly', () => {
    const store = configureStore({})
    const wrapper = shallow(<App store={store} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
