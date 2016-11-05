/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AboutPage from '../AboutPage';

describe('<AboutPage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutPage>children</AboutPage>);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
