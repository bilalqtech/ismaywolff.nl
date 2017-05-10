import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbWritingDetail } from './index'

describe('<WritingDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title', published: '01-01-2000', text: 'text' } }
    const articles = { result: ['one'], isFetching: false, didFetch: true }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={entities}
        articles={articles}
        hasArticles
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWritingDetail.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyArticles = jest.fn()
    const match = { params: { id: 'one' } }
    const entities = { one: { title: 'title', published: '01-01-2000', text: 'text' } }
    const articles = { result: ['one'], isFetching: false, didFetch: true }

    mount(
      <DumbWritingDetail
        match={match}
        entities={entities}
        articles={articles}
        hasArticles
        fetchArticlesIfNeeded={spyArticles}
      />
    )

    expect(spyArticles).toHaveBeenCalled()
  })

  it('renders a loading state', () => {
    const match = { params: { id: 'one' } }
    const articles = { result: [], isFetching: true, didFetch: false }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={{}}
        articles={articles}
        hasArticles={false}
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const match = { params: { id: 'one' } }
    const entities = { two: { title: 'title' } }
    const articles = { result: ['two'], isFetching: false, didFetch: true }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={entities}
        articles={articles}
        hasArticles
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders api errors', () => {
    const match = { params: { id: 'one' } }
    const articles = { errorMessage: 'Something went wrong', result: [], didFetch: true }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={{}}
        articles={articles}
        hasArticles={false}
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
