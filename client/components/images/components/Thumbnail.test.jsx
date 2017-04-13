import React from 'react'
import { shallow } from 'enzyme'
import { Thumbnail } from './Thumbnail'

describe('<Thumbnail />', () => {
  it('renders correctly', () => {
    const entities = { one: { url: 'url', title: 'title' } }
    const wrapper = shallow(
      <Thumbnail entities={entities} id={'one'} width={100} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a loading state', () => {
    const wrapper = shallow(
      <Thumbnail entities={{}} id={'one'} width={100} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
