import React from 'react'
import { shallow } from 'enzyme'
import { DumbZoomable } from './Zoomable'

describe('<Zoomable />', () => {
  it('renders correctly', () => {
    const entities = { one: { url: 'url', title: 'title' } }
    const wrapper = shallow(<DumbZoomable entities={entities} id={'one'} width={100} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(<DumbZoomable entities={{}} id={'one'} width={100} />)
    expect(wrapper).toMatchSnapshot()
  })
})
