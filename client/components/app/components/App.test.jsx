import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { App } from './App'

jest.mock('react-router')

describe('<App />', () => {
  const store = {
    getState: () => {},
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {}
  }

  it('renders correctly', () => {
    const wrapper = shallow(
      <App
        store={store}
        history={{}}
        fetchWorks={() => {}}
        fetchImages={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works', () => {
    const spy = jest.fn()
    mount(<App
      store={store}
      history={{}}
      fetchWorks={spy}
      fetchImages={() => {}}
    />)
    expect(spy).toBeCalled()
  })

  it('fetches images', () => {
    const spy = jest.fn()
    mount(<App
      store={store}
      history={{}}
      fetchWorks={() => {}}
      fetchImages={spy}
    />)
    expect(spy).toBeCalled()
  })
})
