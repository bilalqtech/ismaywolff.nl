import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { WorkListContainer } from './WorkListContainer'

jest.mock('./WorkList', () => () => <div>WorkList</div>)

describe('<WorkListContainer />', () => {
  const works = {
    result: ['1']
  }

  it('renders correctly', () => {
    const wrapper = shallow(<WorkListContainer fetchWorks={() => {}} works={works} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('fetches works on mount', () => {
    const spy = jest.fn()
    mount(<WorkListContainer fetchWorks={spy} works={works} />)
    expect(spy).toBeCalled()
  })
})
