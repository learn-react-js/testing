import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/Navigation'
configure({ adapter: new Adapter() });

describe('<Navigation> component ', () => {
  const wrapper = shallow(<Navigation />);
  it('Success rendering', () => {
    expect(wrapper).toHaveLength(1);
  });
});