import React from 'react'
import { mount } from 'enzyme'
import { StaticRouter, BrowserRouter } from 'react-router-dom'
import Status from './Status'

describe('<Status />', () => {
  it('renders correctly with browser router', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Status code={404} />
      </BrowserRouter>
    )
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
