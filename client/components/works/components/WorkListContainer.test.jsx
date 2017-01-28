import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListContainer } from './WorkListContainer'

jest.mock('./WorkList', () => () => <div>WorkList</div>)

describe('<WorkListContainer />', () => {
  const hasWorks = { isFetching: false, result: ['1'] }
  const hasNoWorks = { isFetching: false, result: [] }

  it('renders correctly', () => {
    const wrapper = shallow(<WorkListContainer fetchWorks={() => {}} works={hasWorks} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works when needed', () => {
    const spy = jest.fn()
    mount(<WorkListContainer fetchWorks={spy} works={hasNoWorks} />)
    expect(spy).toBeCalled()
  })

  it('does not fetch work when it already has', () => {
    const spy = jest.fn()
    mount(<WorkListContainer fetchWorks={spy} works={hasWorks} />)
    expect(spy).not.toBeCalled()
  })
})
