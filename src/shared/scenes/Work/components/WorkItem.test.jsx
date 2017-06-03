import React from 'react'
import { shallow } from 'enzyme'
import WorkItem from './WorkItem'

describe('<WorkItem />', () => {
  it('renders correctly', () => {
    const work = {
      slug: 'slug',
      thumbnail: 'thumbnail',
      title: 'title',
      summary: 'summary'
    }
    const wrapper = shallow(<WorkItem work={work} />)
    expect(wrapper).toMatchSnapshot()
  })
})
