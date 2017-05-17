import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from './App'

describe('<App />', () => {
  const store = {
    getState: () => {},
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {}
  }

  const history = {
    location: {}
  }

  it('renders correctly', () => {
    const wrapper = shallow(<App store={store} history={history} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
