import React from 'react'
import { shallow, mount } from 'enzyme'
import { DumbWriting } from './index'

jest.mock('./components/WritingBody')

describe('<Writing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbWriting fetchArticlesIfNeeded={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('has server side data needs defined', () => {
    expect(DumbWriting.needs()).toMatchSnapshot()
  })

  it('fetches data after mounting', () => {
    const spyArticles = jest.fn()

    mount(<DumbWriting fetchArticlesIfNeeded={spyArticles} />)

    expect(spyArticles).toHaveBeenCalled()
  })
})
