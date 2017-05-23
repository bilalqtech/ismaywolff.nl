import React from 'react'
import { shallow } from 'enzyme'
import WritingItem from './WritingItem'

describe('<WritingItem />', () => {
  it('renders correctly', () => {
    const article = {
      slug: 'slug',
      title: 'title',
      summary: 'summary'
    }
    const wrapper = shallow(<WritingItem article={article} />)
    expect(wrapper).toMatchSnapshot()
  })
})
