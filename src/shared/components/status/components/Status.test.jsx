import React from 'react'
import { shallow, mount } from 'enzyme'
import { StaticRouter } from 'react-router-dom'
import Status from './Status'

describe('<Status />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Status code={404} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with static router', () => {
    const context = {}

    mount(
      <StaticRouter location={'/'} context={context}>
        <Status code={404} />
      </StaticRouter>
    )

    expect(context.status).toEqual(404)
  })
})
