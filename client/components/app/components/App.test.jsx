import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { App } from './App'

jest.mock('react-router', () => ({
  withRouter: input => input,
  Router: () => <div />
}))
jest.mock('../../scroll')

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
        fetchArticles={() => {}}
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
      fetchArticles={() => {}}
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
      fetchArticles={() => {}}
      fetchWorks={() => {}}
      fetchImages={spy}
    />)
    expect(spy).toBeCalled()
  })

  it('fetches articles', () => {
    const spy = jest.fn()
    mount(<App
      store={store}
      history={{}}
      fetchArticles={spy}
      fetchWorks={() => {}}
      fetchImages={() => {}}
    />)
    expect(spy).toBeCalled()
  })
})
