import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbWritingDetail } from './index'

describe('<WritingDetail />', () => {
  it('renders correctly', () => {
    const match = { params: { id: 'one' } }
    const entities = {
      one: {
        title: 'title',
        slug: 'slug',
        text: 'text',
        published: '01-01-2000'
      }
    }
    const articles = {
      result: ['one'],
      isFetching: false,
      didFetch: true,
      errorMessage: ''
    }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={entities}
        articles={articles}
        hasArticles
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWritingDetail.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyArticles = jest.fn()
    const match = { params: { id: 'one' } }
    const entities = {
      one: {
        title: 'title',
        slug: 'slug',
        text: 'text',
        published: '01-01-2000'
      }
    }
    const articles = {
      result: ['one'],
      isFetching: false,
      didFetch: true,
      errorMessage: ''
    }

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
    const articles = {
      result: [],
      isFetching: true,
      didFetch: false,
      errorMessage: ''
    }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={{}}
        articles={articles}
        hasArticles={false}
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a missing page error', () => {
    const match = { params: { id: 'one' } }
    const entities = {
      two: {
        title: 'title',
        slug: 'slug',
        text: 'text',
        published: '01-01-2000'
      }
    }
    const articles = {
      result: ['two'],
      isFetching: false,
      didFetch: true,
      errorMessage: ''
    }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={entities}
        articles={articles}
        hasArticles
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders api errors', () => {
    const match = { params: { id: 'one' } }
    const articles = {
      result: [],
      isFetching: false,
      didFetch: true,
      errorMessage: 'Something went wrong'
    }
    const wrapper = shallow(
      <DumbWritingDetail
        match={match}
        entities={{}}
        articles={articles}
        hasArticles={false}
        fetchArticlesIfNeeded={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
