import React from 'react'
import { shallow } from 'enzyme'
import WritingDetailBody from './WritingDetailBody'

describe('<WritingDetailBody />', () => {
  it('renders correctly', () => {
    const article = {
      title: 'title',
      published: '2011-04-01',
      text: 'text'
    }
    const wrapper = shallow(<WritingDetailBody article={article} />)
    expect(wrapper).toMatchSnapshot()
  })
})
