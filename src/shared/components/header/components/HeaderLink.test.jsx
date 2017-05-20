/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import HeaderLink from './HeaderLink'

describe('<HeaderLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderLink />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })

  it('accepts size parameter', () => {
    const wrapper = shallow(<HeaderLink size={'100%'} />)
    expect(wrapper).toMatchStyledComponentsSnapshot()
  })
})
