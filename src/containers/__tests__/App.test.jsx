/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../App';

describe('<App />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App>child</App>);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
