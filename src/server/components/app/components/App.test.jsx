import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  const store = {
    getState: () => {},
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {}
  }

  it('renders correctly', () => {
    const wrapper = shallow(<App store={store} location={'/'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
